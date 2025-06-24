import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { prompt, platform, tone, language = "en" } = await request.json()

    const systemPrompt = `You are an expert social media content creator. Generate engaging ${platform} captions that are:
    - ${tone} in tone
    - Optimized for ${platform} best practices
    - Written in ${language}
    - Include relevant hashtags
    - Encourage engagement`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const caption = completion.choices[0]?.message?.content

    return NextResponse.json({
      caption,
      platform,
      tone,
      language,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("AI Caption generation error:", error)
    return NextResponse.json({ error: "Failed to generate caption" }, { status: 500 })
  }
}
