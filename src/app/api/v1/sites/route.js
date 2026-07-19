import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    code: 200,
    msg: "ok",
    data: [
      {
        key: "moontv",
        api: "https://sharp-abc.vercel.app/tv.m3u",
        name: "MOON TV"
      }
    ]
  };
  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
