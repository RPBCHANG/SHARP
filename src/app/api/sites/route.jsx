import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      key: "moontv",
      api: "https://sharp-abc.vercel.app/tv.m3u",
      name: "MOON TV",
      detail: "MOON TV Live Streams"
    }
  ];
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
