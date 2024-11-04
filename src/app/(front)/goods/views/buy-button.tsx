'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import DraggablePopup from '@/app/components/DraggablePopup';
import SelectBox from '@/app/components/SelectBox';

export default function GoodsBuy({ props, session }: any) {
    const router = useRouter();
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
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showPopup]);

    const fnCart = async () => {
        const params = {};
        try {
            const res = await fetch('/api/backend', {
                method: 'POST',
                body: JSON.stringify({
                    url: `/cart/add`,
                    params: params,
                }),
            });
            const data = await res.json();
            if (data.code == 200) {
                alert('구매후 리턴된 cart_uid를 가지고 order 페이지로 이동');
                router.push('/order/12345');
            } else {
                alert(data.msg);
            }
            return;
        } catch (e: any) {
            console.error(e);
            alert('오류가 발생했습니다. 다시 시도해 주세요');
        }
    };

    const handleSelectChange = (value: any) => {
        console.log('Selected value:', value);
    };

    return (
        <>
            <div className="w-full p-3 fixed bottom-0 bg-white border-t">
                <button onClick={() => setShowPopup(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                    구매하기
                </button>
            </div>

            {showPopup && (
                <DraggablePopup title="Draggable Popup" onClose={handlePopupClose}>
                    <div>
                        <SelectBox
                            option_name={'색상'}
                            options={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                                { label: 'Option 3', value: '3' },
                            ]}
                            onChange={handleSelectChange}
                        />
                        <SelectBox
                            option_name={'사이즈'}
                            options={[
                                { label: 'Option 1', value: '1' },
                                { label: 'Option 2', value: '2' },
                                { label: 'Option 3', value: '3' },
                            ]}
                            onChange={handleSelectChange}
                        />
                        <div className="border p-3 bg-slate-300">
                            <div className="text-left">선택한 옵션명</div>
                            <div className="flex justify-between">
                                <div>수량변경</div>
                                <div>가격</div>
                            </div>
                        </div>
                        <div className="my-3 flex justify-between">
                            <div>x개 상품 금액</div>
                            <div className="font-bold text-lg">111,999원</div>
                        </div>

                        <button onClick={fnCart} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                            구매하기
                        </button>
                    </div>
                </DraggablePopup>
            )}
        </>
    );
}
