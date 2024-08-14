import {NextRequest, NextResponse} from "next/server";
import {Transaction} from "@prisma/client";
import prisma from "@/lib/prisma";

interface IncomingTransaction {
    id: number;
    recurrentDate: string;
    date: string;
    amount: number;
    notes: string;
    account_id: number;
    user_id: string;
    category_id: number;
}

export async function GET(req: NextRequest) {
    try {
        const user_id= req.nextUrl.searchParams.get('user_id')
        const data = await prisma.transaction.findMany({
            where: {
                user_id: user_id!
            }
        })
        return NextResponse.json({ data })

    } catch (error) {
        return NextResponse.json({ error: JSON.stringify(error)});
    }
}

export async function POST(req: NextRequest) {
    try {
        const body: IncomingTransaction = await req.json();
        const newTransaction = await  prisma.transaction.create({
            data: {
                local_id: body.id,
                date: new Date(body.date),
                amount: body.amount,
                category_id: body.category_id,
                user_id: body.user_id,
                account_id: body.account_id,
                notes: body.notes,
                recurrentDate: body.recurrentDate,
                is_backed_up: true
            }
        })
        // insert transaction
        return NextResponse.json(newTransaction);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: JSON.stringify(error) });
    }
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
