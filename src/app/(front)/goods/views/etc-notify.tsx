'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Accordion from './Accordion';

export default function GoodsNotify({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <Accordion title="상품 필수 정보">
                <div className="">상품 필수 정보</div>
            </Accordion>
        </>
    );
}
