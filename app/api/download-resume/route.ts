import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Redirect to the static PDF file in the public directory
    return NextResponse.redirect(new URL("/patrick-friedman-resume.pdf", "https://example.com"))
  } catch (error) {
    console.error("Error downloading resume:", error)
    return new NextResponse("Error downloading resume", { status: 500 })
  }
}

