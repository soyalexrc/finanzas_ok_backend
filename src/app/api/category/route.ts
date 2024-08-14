import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const user_id= req.nextUrl.searchParams.get('user_id')
        const data = await prisma.category.findMany({
            where: {
                user_id: user_id!
            }
        })
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json({ error: JSON.stringify(error)});
    }
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

