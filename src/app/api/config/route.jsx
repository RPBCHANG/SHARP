import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    SiteName: "MOON TV",
    sitename: "MOON TV",
    StorageType: "localstorage",
    storagetype: "localstorage",
    version: "1.0.0"
  };
  
  const responseData = {
    code: 200,
    msg: "ok",
    data: config,
    ...config
  };

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Expose-Headers': '*',
    },
  });
}
