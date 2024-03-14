'use client';
import { useRouter } from 'next/navigation';

const TaskCard = ({ task }) => {
	const router = useRouter();
	return (
		<div
			className='flex bg-slate-900 p-3 hover:bg-slate-700 hover:cursor-pointer'
			onClick={() => router.push(`/tasks/${task.id}`)}
		>
			<div className='pl-2 pr-2'>{task.title}</div>
			<div className='pl-2 pr-2'>{task.description}</div>
			<div className='pl-2 pr-2'>
				{new Date(task.created_at).toLocaleString()}
			</div>
		</div>
	);
};

export default TaskCard;
