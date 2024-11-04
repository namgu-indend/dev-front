import { getIPAddress } from '@/app/_lib/session';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_lib/auth_option';
import { NextResponse } from 'next/server';

interface RequestBody {
    url: string;
    params: any;
    res: string;
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        if (typeof formData.get('url') === 'undefined' || formData.get('url') == '') {
            return new Response(
                JSON.stringify({
                    status: 200,
                    code: 400,
                    msg: '필수값이 없음',
                })
            );
        }

        const session = await getServerSession(authOptions);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be${formData.get('url')}`, {
            method: 'POST',
            headers: {
                'x-user-ip': await getIPAddress(),
                Authorization: `Bearer ${session?.user?.accessToken || ''}`,
            },
            body: formData,
        });

        if (!res) {
            return new Response(
                JSON.stringify({
                    status: 200,
                    code: 500,
                    msg: '오류가 발생하였습니다. 다시 시도해 주세요',
                })
            );
        }

        const data: any = await res.json();
        return NextResponse.json(data);
    } catch (e) {
        console.error(e);
        return new Response(
            JSON.stringify({
                status: 200,
                code: 501,
                msg: '오류가 발생하였습니다. 다시 시도해 주세요',
            })
        );
    }
}
