'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Accordion from './Accordion';

export default function GoodsChange({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <Accordion title="교환 및 반품 정보">
                <div className="">교환 및 반품 하는 방법</div>
            </Accordion>
        </>
    );
}
