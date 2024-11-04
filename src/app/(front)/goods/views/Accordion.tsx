import { useState } from 'react';

export default function Accordion({ title, children }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full px-4 py-2 text-left bg-gray-200 hover:bg-gray-300 rounded-t-lg">
                <div className="flex items-center justify-between">
                    <span className="font-semibold">{title}</span>
                    <span>{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            {isOpen && <div className="px-4 py-2 bg-white border-t border-gray-200">{children}</div>}
        </div>
    );
}
