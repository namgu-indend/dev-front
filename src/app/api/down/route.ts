import { getIPAddress } from '@/app/_lib/session';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_lib/auth_option';
import { NextResponse } from 'next/server';

interface RequestBody {
    url: string;
    params: any;
}

export async function POST(request: Request) {
    try {
        const body: RequestBody = await request.json();

        if (typeof body.url === 'undefined' || body.url == '') {
            return new Response(
                JSON.stringify({
                    status: 200,
                    code: 400,
                    msg: '필수값이 없음',
                })
            );
        }

        const session = await getServerSession(authOptions);
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be${body.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-ip': await getIPAddress(),
                Authorization: `Bearer ${session?.user?.accessToken || ''}`,
            },
            body: JSON.stringify(body.params || {}),
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

        await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be/aws/temp/delete`, {
            method: 'POST',
        });

        const data = await res.blob();
        return new NextResponse(data, { status: 200, statusText: 'OK' });
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
