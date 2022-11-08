// import { NextApiRequest, NextApiResponse } from "next";
// type Data = {
//   message: string
// }
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const first_name = req.body.first_name;
//   const last_name = req.body.last_name;
//   const email = req.body.email;
//   if (first_name.toLowerCase() == 'sayem') {
//     res.status(200).json({ "message": "success" })
//   } else {
//     res.status(403).json({ 'message': 'failed' })
//   }
// }