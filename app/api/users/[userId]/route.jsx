import { NextResponse } from "next/server";

export async function PUT(reuest, { params }) {
  const body = await reuest.json();
  return NextResponse.json({ id: params.userId, name: body.name });
}

export async function DELETE(reuest, { params }) {
  return NextResponse.json({});
}
