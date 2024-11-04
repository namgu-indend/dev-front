'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function OrderNotice({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full mb-3">
                <div className="text-center p-3 text-sm text-gray-500">
                    미성년자가 체결한 계약은 법정대리인이 동의하지 않는 경우 본인 또는 법정대리인이 취소할 수 있습니다. 개별 판매자가 판매하는 상품에 대한 광고, 상품 주문, 배송 및
                    환불의 의무와 책임은 각 판매자가 부담하며, 이에 대하여 {' {'}브랜드명{' }'}는 통신판매중개자로서 통신판매의 당사자가 아니므로 책임을 지지 않습니다.
                </div>
            </div>
        </>
    );
}
