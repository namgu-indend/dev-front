'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function GoodsReviewItem({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    const fnReport = () => {
        alert('신고하기');
    };

    return (
        <div className="border-b mb-3 pb-3">
            <div className="flex gap-1 mb-1">
                <Image src="/icons/star-fill.svg" width={15} height={15} alt="star fill" />
                <Image src="/icons/star-fill.svg" width={15} height={15} alt="star fill" />
                <Image src="/icons/star-fill.svg" width={15} height={15} alt="star fill" />
                <Image src="/icons/star-fill.svg" width={15} height={15} alt="star fill" />
                <Image src="/icons/star-blank.svg" width={15} height={15} alt="star blank" />
            </div>
            <div className="flex justify-between text-sm text-slate-400 gap-1 mb-1">
                <div className="flex">
                    <div>24.11.1</div>
                    <div>권*구</div>
                    <div>옵션명 또는 상품명 ...</div>
                    <div>1개</div>
                </div>
                <div onClick={fnReport}>신고하기 {'>'}</div>
            </div>
            <div className="mb-1">후기후기후기 리뷰리뷰 후기 리뷰 후기 리후기후기후기 리뷰리뷰 후기 리뷰 후기 리후기후기후기 리뷰리뷰 후기 리뷰 후기 리뷰뷰</div>

            <div className="w-full">
                <Image src="https://indend-resource.s3.amazonaws.com/mall/goods/BIZ2229/thumb/20241016173635-297.jpg" width={50} height={50} alt="11" />
            </div>
        </div>
    );
}
