import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method } = req

    switch (method) {
        case 'GET':
            // Handle GET request
            getInstance(req, res)
            break
        case 'POST':
            // Handle POST request
            createInstance(req, res)
            break
        case 'PUT':
            // Handle PUT request
            editInstance(req, res)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

async function getInstance(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const response = await fetch(process.env.API_ENDPOINT+'/instance/' + req.query.instance_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.account as string
            }
        });
        const data = await response.json();
        // Forward the response to your frontend app
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching data');
    }
}

async function createInstance(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const params = {
            owner: req.query.owner, pair: req.query.pair, dex: req.query.dex,
            safe_address: req.query.safe_address, trade_module: req.query.trade_module, chain: req.query.chain,
            strategy: req.query.strategy, setting_1: req.query.setting1, setting_2: req.query.setting2
            , setting_3: req.query.setting3, setting_4: req.query.setting4, setting_5: req.query.setting5
        };
        const response = await fetch(process.env.API_ENDPOINT+'/create_instance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.address as string
            },
            body: JSON.stringify(params)
        });
        const data = await response.json();
        console.log(data);
        // Forward the response to your frontend app
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching data');
    }
}

async function editInstance(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        const params = {
            trade_module: req.query.trade_module, strategy: req.query.strategy, setting_1: req.query.setting1, setting_2: req.query.setting2
            , setting_3: req.query.setting3, setting_4: req.query.setting4, setting_5: req.query.setting5, allowed: req.query.allowed, deposited: req.query.deposited
        };
        console.log(params);
        const response = await fetch(process.env.API_ENDPOINT+'/edit_instance/' + req.query.instance_id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'signature': req.query.signature as string,
                'public-address': req.query.account as string
            },
            body: JSON.stringify(params)
        });
        const data = await response.json();
        // Forward the response to your frontend app
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching data');
    }
}
