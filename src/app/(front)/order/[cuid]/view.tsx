'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import OrderHeader from '../views/_header';
import OrderDelivery from '../views/delivery';
import OrderInfo from '../views/order-info';
import OrderPrice from '../views/order-price';
import OrderPay from '../views/order-pay';
import OrderNotice from '../views/order-notice';

function PageView({ props }: any) {
    const router = useRouter();
    const { state, setState } = useAppContext();
    useEffect(() => {}, []);
    return (
        <>
            <OrderHeader />
            <OrderDelivery />
            <OrderInfo />
            <OrderPrice />
            <OrderNotice />
            <OrderPay />
            <div className="h-44"></div>
        </>
    );
}
export default PageView;
