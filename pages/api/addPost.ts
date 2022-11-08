// import { NextApiRequest, NextApiResponse } from 'next';
// import clientPromise from "../../lib/mongodb";

// const handler = async(req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("posts");
//     const { title, content } = req.body;

//     const post = await db.collection("posts").insertOne({
//       title,
//       content,
//     });

//     res.json(post);
//   } catch (err) {
//     console.log(err);

//   }
// };

// export default handler;