import TaskCard from '@/components/TaskCard';
import { prisma } from '@/libs/prisma';

async function loadTasks() {
	return await prisma().task.findMany();
}

export default async function Home() {
	const tasks = await loadTasks();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 container mx-auto'>
			<div className='z-10 max-w-8xl w-full items-start justify-around font-mono text-sm lg:flex'>

				<div className='flex flex-col'>
					{tasks.map((task) => (
						<TaskCard key={task.id} task={task} />
					))}
				</div>

			</div>
		</main>
	);
}
