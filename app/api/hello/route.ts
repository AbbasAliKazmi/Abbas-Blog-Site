import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    let dati = [
        {
            name: "Abbas",
            age: 12,
            email: "syedabbasali1998.aa@gmail"
        }
    ];
    return NextResponse.json({ message: "Api chal gai", dati });
}




export async function POST(request: Request){
    const data = await request.json();
    return NextResponse.json({ data });
}    
   