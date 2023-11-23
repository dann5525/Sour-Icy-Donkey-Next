import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req

    switch (method) {
        case 'GET':
            // Handle GET request
            getProfile(req, res)
            break
        case 'POST':
            // Handle POST request
            createProfile(req, res)
            break
        case 'PUT':
            // Handle PUT request
            editProfile(req, res)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function getProfile(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        // console.log(req.query.signature);
        const response = await fetch(process.env.API_ENDPOINT+'/get_profile/?public_address=' + req.query.address, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.address as string
            }
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

async function createProfile(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const params = { public_address: req.query.address, name: req.query.name, email: req.query.email, telegram: req.query.telegram };
        const response = await fetch(process.env.API_ENDPOINT+'/create_profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.address as string
            },
            body: JSON.stringify(params)
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

async function editProfile(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        const params = {
            public_address: req.query.account, name: req.query.name, email: req.query.email, telegram: req.query.telegram
        };
        const response = await fetch(process.env.API_ENDPOINT+'/edit_profile/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.account as string
            },
            body: JSON.stringify(params)
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
