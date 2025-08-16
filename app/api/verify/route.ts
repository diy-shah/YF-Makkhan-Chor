import { NextResponse } from "next/server";
import { teamClues } from "@/app/data/TeamClues"; // updated import path

interface VerifyRequest {
  code: string;
}

export async function POST(req: Request) {
  const body: VerifyRequest = await req.json();

  const match = teamClues.find(
    (a) => a.code.toLowerCase() === body.code.trim().toLowerCase()
  );

  if (match) {
    return NextResponse.json({ correct: true, clue: match.clue });
  }

  return NextResponse.json({ correct: false });
}
