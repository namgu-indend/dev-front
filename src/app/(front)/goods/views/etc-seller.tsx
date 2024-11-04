'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Accordion from './Accordion';

export default function GoodsSeller({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <Accordion title="판매자 정보">
                <div className="">인디앤드코리아 정보 넣기</div>
            </Accordion>
        </>
    );
}
