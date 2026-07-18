import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    SiteName: "MOON TV",
    StorageType: "localstorage"
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
