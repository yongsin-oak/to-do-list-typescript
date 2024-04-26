import React from 'react'
import { twMerge } from 'tailwind-merge';

interface AddTaskProps {
    onAddTask: () => void
}

export const AddTask = ({onAddTask} : AddTaskProps) => {
    const buttonClassName = twMerge('bg-blue-500 p-2 px-4 rounded-lg text-white cursor-pointer hover:bg-blue-300');
    return (
        <button className={buttonClassName} onClick={onAddTask}>Add Task</button>
    )
}
