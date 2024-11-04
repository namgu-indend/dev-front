/* 
    @route   :   /cscenter/qna/list
    @author  :   2024.11.03 namgu
    @version :   2024.11.03 create
*/

import React from 'react';
import { getIPAddress } from '@/app/_lib/session';
import { ExceptionError } from '@/app/_lib/exception';
import PageView from './view';

async function getInit(props: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be/goods/read`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-ip': await getIPAddress(),
            },
            body: JSON.stringify({
                guid: props.params.guid,
            }),
        });
        return res.json();
    } catch (err: any) {
        return ExceptionError(err?.message);
    }
}

async function Goods(props: any) {
    props = { ...props, ...(await getInit(props)) };
    return <PageView props={props} />;
}
export default Goods;
