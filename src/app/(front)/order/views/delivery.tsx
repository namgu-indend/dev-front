'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function OrderDelivery({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full mb-3 border bg-slate-50">
                <div className="text-center py-16">배송지정보 입력하는 영역</div>
            </div>
        </>
    );
}
