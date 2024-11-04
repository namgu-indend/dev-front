'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LayoutFooter({ props, session }: any) {
    const router: any = useRouter();
    const pathname = usePathname();

    return (
        <>
            <div className="w-full aspect-square bg-slate-100 border flex items-center justify-center">
                풋터정보 인디앤드코리아 정보, 1:1문의, 자주묻는질문, 이용약관, 개인정보처리방침 들어가야할듯
            </div>
        </>
    );
}
