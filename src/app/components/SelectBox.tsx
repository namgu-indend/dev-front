import React, { useState } from 'react';

const SelectBox = ({ option_name, options, onChange }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({});

    const handleSelect = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className="relative inline-block w-full mb-3">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow focus:outline-none focus:border-blue-500"
            >
                <span className="font-bold">{option_name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 pointer-events-none">▼</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg">
                    {options.map((option: any) => (
                        <div key={option.value} onClick={() => handleSelect(option)} className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectBox;
