export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' });
        return;
    }

    // const { email } = req.body;
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/be/admin/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    });
    const user = await response.json();
    res.status(200).json(user);
}
