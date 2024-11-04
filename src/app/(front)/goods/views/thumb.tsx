'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function GoodsThumb({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">상품썸네일</div>
        </>
    );
}
