import { NextResponse , NextRequest } from 'next/server';

export async function GET(request: NextRequest){
    let dati = {
         name: "Abbas",
         age: 12,
         email: "syedabbasali1998.aa@gmail"
        }
    return NextResponse.json({message: "Api chal gai" , dati})
}