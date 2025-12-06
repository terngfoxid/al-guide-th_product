import { ShipV2 } from "models/shipv2";
import db from "../../../../utils/db";
import * as fs from 'fs';

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
    switch (req.method) {
        case "GET": {
            try{
                const raw = fs.readFileSync("./data/event.json", "utf8");
                const events:{_priority:number}[] = JSON.parse(raw);
                return res.status(200).json(events.filter((event)=>(event._priority<=3)));
            }catch{
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
            if (req.headers.host?.includes("localhost")) {
                try {
                    const snapshot = await db.collection("dev_event").orderBy("name").get();
                    if (snapshot.empty) {
                        res.status(404).json({ error: "Not Found Any Event" });
                    } else {
                        const events = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        const jsonString = JSON.stringify(events, null, 2);
                        fs.writeFileSync("./data/event.json", jsonString);
                        return res.status(200).json({ message: "Data exported", count: events.length });
                    }
                } catch {
                    res.status(429).json({ error: "Firestore out of qouta" });
                }
                break;
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}