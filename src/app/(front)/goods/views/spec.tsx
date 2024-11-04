'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function GoodsSpec({ elid, tabRefs }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <div id={elid} ref={el => tabRefs.current.push(el)} className="mb-3">
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">상품정보</div>
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">상품정보</div>
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">상품정보</div>
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">상품정보</div>
        </div>
    );
}
