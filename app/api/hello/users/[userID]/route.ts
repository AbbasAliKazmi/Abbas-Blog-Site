import { NextResponse } from 'next/server';
import data from './data.json'

export async function GET(request: Request , context: any) {
    const { params } = context;
    const users = data.filter((x) => params.userID === x.id.toString());

    return NextResponse.json({ users })
};