import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const snapshot = await db.collection("dev_event").where("_priority", "<=", 1).get();
  const docs = snapshot.docs.map((doc) => doc.data());

  res.status(200).json(
    docs
      .filter((item) => item._enable)
      .sort((a, b) => b._priority - a._priority)
      .map((item) => {
        delete item._priority;
        delete item._enable;

        if (item._new) {
          item.type = "new";
        } else {
          item.type = "rerun";
        }

        delete item._new;

        return item;
      }),
  );
}
