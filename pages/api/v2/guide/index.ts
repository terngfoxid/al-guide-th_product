import { ShipV2 } from "models/shipv2";
import db from "../../../../utils/db";
import * as fs from 'fs';
import path from "path";

export default async function REST(
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
    const filePath = path.join(process.cwd(), 'public', 'data', 'guide.json');
    switch (req.method) {
        case "GET": {
            try {
                const raw = fs.readFileSync(filePath, "utf8");
                const guide: { _priority: number }[] = JSON.parse(raw);
                return res.status(200).json(guide.filter((guide) => (guide._priority <= 3)));
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        case "POST": {
            if (req.headers.host?.includes("localhost")) { }
            break;
        }
        case "PUT": {
            if (req.headers.host?.includes("localhost")) { }
            break;
        }
        case "PATCH": {
            try {
                const snapshot = await db.collection("guide").orderBy("name").get();
                if (snapshot.empty) {
                    res.status(404).json({ error: "Not Found Any Guide" });
                } else {
                    const events = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                    const jsonString = JSON.stringify(events, null, 2);
                    fs.writeFileSync(filePath, jsonString);
                    return res.status(200).json({ message: "Data exported", count: events.length });
                }
            } catch {
                res.status(429).json({ error: "Firestore out of qouta" });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}