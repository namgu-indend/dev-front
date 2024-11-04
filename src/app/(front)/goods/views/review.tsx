'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import GoodsReviewItem from './review-item';

export default function GoodsReview({ elid, tabRefs }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div id={elid} ref={el => tabRefs.current.push(el)} className="w-full mb-3 p-3">
                <div className="text-lg font-bold mb-3">리뷰 2,456개</div>
                <GoodsReviewItem />
                <GoodsReviewItem />
                <GoodsReviewItem />
            </div>
        </>
    );
}
