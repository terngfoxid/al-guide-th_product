import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../utils/db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const snapshot = await db.collection("dev").get();
  const docs = snapshot.docs.map((doc) => doc.data());

  res.status(200).json(docs);
}
