import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      id: 1,
      name: "user1",
    },
    {
      id: 2,
      name: "user2",
    },
    {
      id: 3,
      name: "user3",
    },
  ];
  return NextResponse.json(users);
}

export async function POST(request) 
{
   
    // const newUser = {
    //     id: 4,
    //     name: "user4",
    // };
    // return NextResponse.json(newUser);
    const body = await request.json()
    return NextResponse.json(body,{statua:201})
}
