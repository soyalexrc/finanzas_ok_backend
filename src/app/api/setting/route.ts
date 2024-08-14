import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    // return by userId
    const name= req.nextUrl.searchParams.get('name')
    return NextResponse.json({ message: `Hello ${name}` })
}

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    // insert transaction
    return NextResponse.json({ message: `Hello ${body.name}` })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    // update transaction
    return NextResponse.json({ message: `Hello ${body.name}` })
}

export async function DELETE(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    // update transaction
    return NextResponse.json({ message: `Hello ${body.name}` })
}

