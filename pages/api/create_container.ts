import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      // Handle GET request
      createContainer(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

async function createContainer(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const response = await fetch(process.env.API_ENDPOINT+'/create_container?instance_id=' + req.query.instance_id, {
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
