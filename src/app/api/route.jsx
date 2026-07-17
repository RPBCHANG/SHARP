import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: "MOON TV",
    version: "1.0.0",
    api_version: "1.0.0",
    playlist_url: "https://sharp-abc.vercel.app/tv.m3u",
    message: "Welcome to MOON TV API"
  });
}
