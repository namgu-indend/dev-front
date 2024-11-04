'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import GoodsThumb from '../views/thumb';
import GoodsTitle from '../views/title';
import GoodsDelivery from '../views/delivery';
import GoodsTabs from '../views/tabs';
import GoodsSpec from '../views/spec';
import GoodsReview from '../views/review';
import GoodsNotify from '../views/etc-notify';
import GoodsChange from '../views/etc-change';
import GoodsSeller from '../views/etc-seller';
import GoodsDeliveryInfo from '../views/etc-delivery';
import GoodsQna from '../views/qna';
import GoodsBuy from '../views/buy-button';
import GoodsHeader from '../views/_header';
import LayoutFooter from '@/app/components/Footer';

function PageView({ props }: any) {
    const router = useRouter();
    const { state, setState } = useAppContext();

    const tabRefs = useRef([]);

    return (
        <>
            <GoodsHeader />
            <GoodsThumb />
            <GoodsTitle props={props} />
            <GoodsDelivery />
            <GoodsTabs tabRefs={tabRefs} />
            <GoodsSpec elid={'goods_spec'} tabRefs={tabRefs} />
            <GoodsReview props={props} elid={'goods_review'} tabRefs={tabRefs} />
            <GoodsNotify />
            <GoodsDeliveryInfo />
            <GoodsChange />
            <GoodsSeller />
            <GoodsQna />
            <GoodsBuy />
            <LayoutFooter />
            <div className="h-44"></div>
        </>
    );
}
export default PageView;
