'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Accordion from './Accordion';

export default function GoodsDeliveryInfo({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <Accordion title="배송 정보">
                <div className="">배송비 얼마고, 도서산간 얼마고</div>
            </Accordion>
        </>
    );
}
