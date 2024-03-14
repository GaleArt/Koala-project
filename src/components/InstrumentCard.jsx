'use client';
import { useRouter } from 'next/navigation';

const TaskCard = ({ task }) => {
	const router = useRouter();
	return (
		<div
			className='flex items-start w-full px-2 m-1 py-0.5 hover:bg-cyan-400 hover:cursor-pointer child:text-left rounded-lg'
			onClick={() => router.push(`/siz/${task.id}`)}
		>
			<div className='w-1/12'>#</div>
			<div className='w-2/12'>{task.title}</div>
			<div className='w-3/12'>{task.description}</div>
			<div className='w-2/12'>Такелажные ср-ва</div>
			<div className='w-2/12'>{new Date(task.created_at).toLocaleString()}</div>
			<div className='w-1/12'>расчет</div>
			<div className='w-1/12'>ред+удал</div>
		</div>
	);
};

export default TaskCard;
