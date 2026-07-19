import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    code: 200,
    msg: "ok",
    data: {
      SiteName: "MOON TV",
      StorageType: "localstorage"
    }
  };
  return NextResponse.json(data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    },
  });
}
