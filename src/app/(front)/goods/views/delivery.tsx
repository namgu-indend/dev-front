'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function GoodsDelivery({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full my-3 p-3 border-y">배송비정보</div>
        </>
    );
}
