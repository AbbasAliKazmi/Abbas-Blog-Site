import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    let dati = [
        {
            name: "Abbas",
            age: 12,
            email: "syedabbasali1998.aa@gmail"
        },
        {
            name: "John",
            age: 30,
            email: "john.doe@example.com"
        },
        {
            name: "Emily",
            age: 22,
            email: "emily.jones@example.com"
        },
        {
            name: "Alex",
            age: 28,
            email: "alex.smith@example.com"
        },
        {
            name: "Sophia",
            age: 35,
            email: "sophia.wilson@example.com"
        },
        {
            name: "Daniel",
            age: 26,
            email: "daniel.brown@example.com"
        }
    ];

    return NextResponse.json({ message: "Api chal gai", dati });
}