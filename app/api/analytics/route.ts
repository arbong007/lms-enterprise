import { NextResponse } from "next/server"
export async function GET() {
  return NextResponse.json({ average_grade: 0 })
}
