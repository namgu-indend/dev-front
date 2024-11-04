'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const sections = [
    { id: 'goods_spec', label: '정보' },
    { id: 'goods_review', label: '리뷰' },
];

export default function GoodsTabs({ tabRefs }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    const [activeTab, setActiveTab] = useState('goods_spec');
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        tabRefs.current.forEach((section: any) => {
            console.log(typeof observer);
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
    // return (
    //     <>
    //         <div className="w-full grid grid-cols-2 gap-2 justify-between items-center sticky-top">
    //             <div className="text-center font-bold border-b-2 border-red-400 py-3">정보</div>
    //             <div className="text-center font-bold border-b-2 border-white py-3">리뷰(112)</div>
    //         </div>
    //     </>
    // );

    return (
        <div className="sticky top-0 bg-white shadow">
            <div className="flex space-x-4 p-4">
                {sections.map(section => (
                    <button
                        key={section.id}
                        className={`px-4 py-2 rounded ${activeTab === section.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => {
                            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
