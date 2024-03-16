import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
	try {
		if (params.id === 'undefined')
			return NextResponse.json({ message: 'Error params' });
		const instrument = await prisma().instrument.findFirst({
			where: {
				id: +params.id,
			},
		});
		if (!instrument) return NextResponse.json({ message: 'Task not found' });
		return NextResponse.json(instrument);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}

export async function PUT(request, { params }) {
	try {
		const body = request.json();
		const instrumentUpdated = await prisma().instrument.update({
			where: {
				id: +params.id,
			},
			data: body,
		});
		if (!instrumentUpdated)
			return NextResponse.json({ message: 'Task not found' });
		return NextResponse.json(instrumentUpdated);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}

export async function DELETE(request, { params }) {
	try {
		const instrument = await prisma().instrument.delete({
			where: {
				id: +params.id,
			},
		});
		if (!instrument) return NextResponse.json({ message: 'Task not found' });
		return NextResponse.json(instrument);
	} catch (error) {
		return NextResponse.json(error.message);
	}
}
