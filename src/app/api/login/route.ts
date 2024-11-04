// import prisma from '@/app/lib/prisma';
import { signJwtAccessToken } from '@/app/_lib/jwt';
import { getCsrfToken } from 'next-auth/react';

interface RequestBody {
    partnerid: string;
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();
    const csrfToken = await getCsrfToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be/admin/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res) {
        return new Response(
            JSON.stringify({
                status: 200,
                code: 501,
                msg: '오류가 발생하였습니다. 다시 시도해 주세요',
            })
        );
    }

    const data: any = await res.json();

    if (data.code == 200) {
        data.accessToken = signJwtAccessToken({
            token_name: data.token_name,
            user_uid: data.user_uid,
            user_id: data.user_id,
            user_name: data.user_name,
            user_depart: data.user_depart,
            role: data.role,
            roles: data.roles,
        });
    }

    return new Response(JSON.stringify(data));

    // const user = data.token_data;
    // const menus = data.menus;
    // const partner = data.partner;
    // user.menus = menus;
    // user.partner = partner;

    // if (user) {
    //     const accessToken = signJwtAccessToken(user);
    //     const result = {
    //         ...user,
    //         accessToken,
    //     };
    //     return new Response(JSON.stringify(result));
    // } else {
    //     return new Response(JSON.stringify(null));
    // }
}
