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
            try {
                const raw = fs.readFileSync("./data/shipdata.json", "utf8");
                const ships: ShipV2[] = JSON.parse(raw);
                return res.status(200).json(ships);
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        case "POST": {
            if (req.headers.host?.includes("localhost")) {
                const ship: ShipV2 = await req.body;
                const id = ((ship.name) as string).toLowerCase()
                try {
                    db.collection("ship_v2.0").doc(id).set(ship)
                    .then(()=>{
                        res.status(200).json({...ship,id:id});
                    })
                    .catch(()=>{
                        res.status(429).json({ error: "Firestore out of qouta" });
                    })
                }
                catch {
                    res.status(500).json({ error: "Error While Posting New Ship" });
                }
            }
            break;
        }
        case "PATCH": {
            if (req.headers.host?.includes("localhost")) {
                try {
                    const snapshot = await db.collection("ship_v2.0").orderBy("name").get();
                    if (snapshot.empty) {
                        res.status(404).json({ error: "Not Found Any Ship" });
                    } else {
                        const ships = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        const jsonString = JSON.stringify(ships, null, 2);
                        fs.writeFileSync("./data/shipdata.json", jsonString);
                        return res.status(200).json({ message: "Data exported", count: ships.length });
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