'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function OrderInfo({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full mb-3 border bg-slate-50">
                <div className="text-center py-32">주문할 상품 정보 영역</div>
            </div>
        </>
    );
}
