import db from "../../utils/db";

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new(): any;
      json: {
        (arg0: FirebaseFirestore.DocumentData | undefined): void;
        new(): any;
      };
    };
  },
) {

  try {
    const snapshot_d = await db
      .collection("data_update")
      .orderBy("id", "desc")
      .limit(5)
      .get();
    const snapshot_w = await db
      .collection("web_update")
      .orderBy("id", "desc")
      .limit(5)
      .get();

    const data: { data_update: [] | any | {}; web_update: [] | any | {} } = {
      data_update: [],
      web_update: [],
    };

    if (snapshot_d.empty && snapshot_w.empty) {
      {
        res.status(404).json({ error: "Not Found Update Data" });
      }
    }

    if (snapshot_d.empty) {
      data.data_update = { error: "Not Found Data Update" };
    } else {
      snapshot_d.forEach((doc) => {
        data.data_update.push(doc.data());
      });
    }

    if (snapshot_w.empty) {
      data.web_update = { error: "Not Found Web Update" };
    } else {
      snapshot_w.forEach((doc) => {
        data.web_update.push(doc.data());
      });
    }

    if (data == null) {
      res.status(404).json({ error: "Not Found Update Data" });
    } else {
      res.status(200).json({ data });
    }
  } catch{
    res.status(429).json({ error: "Firestore out of qouta" });
  }
}
