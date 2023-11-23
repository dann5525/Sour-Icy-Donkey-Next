import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req

    switch (method) {
        case 'POST':
            // Handle POST request
            authenticate(req, res)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function authenticate(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const response = await fetch(process.env.API_ENDPOINT+'/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: req.query.address,
                signature: req.query.signature
            })
        });
        const data = await response.json();
        // console.log(data);
        // Forward the response to your frontend app
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching data');
    }
}
