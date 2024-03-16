import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const instruments = await prisma().instrument.findMany();
		return NextResponse.json(instruments);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}

export async function POST(request) {
	try {
		const { name, description } = await request.json();
		const instrument = await prisma().instrument.create({
			data: {
				name: name,
				description: description,
			},
		});
		return new NextResponse.json({ instrument });
	} catch (error) {
		return NextResponse.json(error.message);
	}
}
