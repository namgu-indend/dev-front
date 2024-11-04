'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function GoodsHeader({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full grid grid-cols-3 gap-1">
                <div className="text-center py-3">고객센터버튼</div>
                <div className="text-center py-3">로고영역</div>
                <div className="text-center py-3">주문내역버튼</div>
            </div>
        </>
    );
}
