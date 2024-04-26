import React, { useState } from 'react'
import { AddTask } from './AddTask';
import { Category } from './Category';
import { Task } from './Task';
import { Modal } from './Modal';

export const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = () => {
        // Your logic to add a task
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const addTask = () => {
        console.log('addtask');
    };
    return (
        <div className='container h-screen flex items-center flex-col m-auto p-4 mt-5'>
            <h1 className='text-center text-5xl font-extrabold text-gray-600'>
                TODO LIST
            </h1>
            <div className='w-3/4 flex flex-col h-full gap-5'>
                <div className='flex w-full justify-between'>
                    <AddTask onAddTask={openModal} />
                    {isModalOpen &&
                        <Modal onClose={() => setIsModalOpen(false)}>
                            <h2>Modal Title</h2>
                            <form action="">
                                
                            </form>
                        </Modal>}
                    <Category />
                </div>
                <div className='w-full max-h-96 bg-slate-300 rounded-lg p-1'>
                    <div className='w-full max-h-full rounded-lg pt-0 p-4 overflow-y-scroll scroll'>
                        <Task />
                    </div>
                </div>
            </div>
        </div>
    )
}
