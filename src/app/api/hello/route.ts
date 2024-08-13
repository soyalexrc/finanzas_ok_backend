import {NextRequest, NextResponse} from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    const name= req.nextUrl.searchParams.get('name')
    return NextResponse.json({ message: `Hello ${name}` })
}
