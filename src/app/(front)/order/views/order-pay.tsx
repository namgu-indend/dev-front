'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function OrderPay({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    const fnOrder = () => {};

    return (
        <>
            <div className="w-full p-3 fixed bottom-0 bg-white border-t">
                <button onClick={fnOrder} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                    12,345원 결제하기
                </button>
                <div className="text-xs mt-1">
                    회원 본인은 위 주문 내용을 확인하였으며 <u>서비스 약관</u>, <u>개인정보 수집동의</u>, <u>개인정보 제3자 제공동의</u>({' {'}브랜드명{' }'})에 동의합니
                </div>
            </div>
        </>
    );
}
