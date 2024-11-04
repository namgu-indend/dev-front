'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function OrderPrice({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full mb-3 border bg-slate-50">
                <div className="text-center py-40">주문금액 영역</div>
            </div>
        </>
    );
}
