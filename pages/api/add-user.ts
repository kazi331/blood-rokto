// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from "../../lib/mongodb";

// const handler = async(req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req.body)
//   const data = JSON.parse(req.body)
//   try {
//     const client = await clientPromise;
//     const db = client.db('users')
//     const user = await db.collection('users').insertOne(data)
//     res.status(200).send(user)
//   } catch (error) {
//     console.log(error)
//   }
// }
// export default handler;