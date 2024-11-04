/* 
    @route   :   /goods/[guid]
    @author  :   2024.11.01 namgu
    @version :   2024.11.01 create
*/

import React from 'react';
import { getIPAddress } from '@/app/_lib/session';
import { ExceptionError } from '@/app/_lib/exception';
import PageView from './view';

async function getInit(props: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-ip': await getIPAddress(),
            },
            body: JSON.stringify({
                cuid: props.params.cuid,
            }),
        });
        return res.json();
    } catch (err: any) {
        return ExceptionError(err?.message);
    }
}

async function Order(props: any) {
    props = { ...props, ...(await getInit(props)) };
    return <PageView props={props} />;
}
export default Order;
