import React from 'react'
import { twMerge } from 'tailwind-merge';
interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}
export const Modal = ({ onClose, children } : ModalProps) => {
    const modalOverlayClass = twMerge('fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000080]');
    const modalClass = twMerge('fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 w-full h-full bg-[#00000080]');
    return (
        <div className={modalOverlayClass} >
            <div className="relative bg-[#fff] p-5 rounded-md max-w-96 w-100 z-50">
                <button className="absolute top-1 right-1 text-2xl" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}
