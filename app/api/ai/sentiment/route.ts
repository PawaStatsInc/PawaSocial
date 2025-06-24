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

    const { text, context } = await request.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Analyze the sentiment of social media content. Return a JSON object with:
          - sentiment: "positive", "negative", or "neutral"
          - confidence: number between 0-1
          - emotions: array of detected emotions
          - keywords: array of key sentiment-driving words
          - recommendation: brief action recommendation`,
        },
        {
          role: "user",
          content: `Analyze this ${context || "social media"} content: "${text}"`,
        },
      ],
      max_tokens: 300,
      temperature: 0.3,
    })

    const analysis = JSON.parse(completion.choices[0]?.message?.content || "{}")

    return NextResponse.json({
      ...analysis,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Sentiment analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze sentiment" }, { status: 500 })
  }
}
