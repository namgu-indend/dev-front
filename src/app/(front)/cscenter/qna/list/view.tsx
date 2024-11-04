'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

function PageView({ props }: any) {
    const router = useRouter();
    const { state, setState } = useAppContext();

    return (
        <>
            <div>QNA 리스트</div>
            <div>클릭 하면 상세로</div>
            <div>회원만 접근 가능</div>
            <div>/board의 list와 detail컴포넌트 가져오듯이 가져와야 할듯?</div>
            <div className="h-44"></div>
        </>
    );
}
export default PageView;
