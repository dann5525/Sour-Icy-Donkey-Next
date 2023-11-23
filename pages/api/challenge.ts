import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'GET':
      // Handle GET request
      getChallenge(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

async function getChallenge(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Make a request to the remote server
        // console.log(req.query.address);
        const response = await fetch(process.env.API_ENDPOINT+'/request_challenge?address=' + req.query.address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
