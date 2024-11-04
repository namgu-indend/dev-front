'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { num2Cur } from '@/app/_lib/utils';

export default function GoodsTitle({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    const fnShare = () => {
        alert(props.goods.uid);
    };

    return (
        <>
            <div className="w-full p-3">
                <div className="flex justify-between items-center mb-3">
                    <div className="font-bold text-lg">{props.goods.title}</div>
                    <div className="flex-shrink-0" onClick={fnShare}>
                        [공유]
                    </div>
                </div>
                <div className="line-through text-sm text-slate-500">시중가격</div>
                <div className="text-lg font-bold flex">
                    <div className="text-red-700 me-2">할인율%</div>
                    <div className="me-2">{num2Cur(props.goods.base_price)}원</div>
                </div>
                <div className="text-sm text-green-600">네이버최저가 : xx,xxx원</div>
            </div>
        </>
    );
}
