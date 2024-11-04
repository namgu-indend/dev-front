'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import DraggablePopup from '@/app/components/DraggablePopup';

export default function GoodsQna({ props, session }: any) {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopupClose = () => {
        console.log('Popup closed');
        setShowPopup(false);
    };

    // 모달이 열릴 때 body 스크롤 방지
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Clean up the effect when the component is unmounted
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPopup]);

    return (
        <div className="p-3">
            <button onClick={() => setShowPopup(true)} className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full">
                문의하기
            </button>

            {showPopup && (
                <DraggablePopup title="Draggable Popup" onClose={handlePopupClose}>
                    <>
                        <div className="mb-3">
                            <button className="bg-yellow-300 text-white px-4 py-2 rounded-lg w-full">자주 묻는 질문</button>
                        </div>
                        <div className="mb-3">
                            <button className="bg-teal-400 text-white px-4 py-2 rounded-lg w-full">1:1문의</button>
                        </div>
                        <div className="mb-3">
                            <button className="bg-fuchsia-400 text-white px-4 py-2 rounded-lg w-full">전화 문의</button>
                        </div>
                    </>
                </DraggablePopup>
            )}
        </div>
    );
}
