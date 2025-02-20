import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  const snapshot = await db.collection("pr_ship").orderBy("serie_number").get();
  const docs = snapshot.docs.map((doc) => doc.data());

  res.status(200).json(docs);}
  catch{
    res.status(429).json({ error: "Firestore out of qouta" });
  }
}
