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
                const raw = fs.readFileSync("./data/research.json", "utf8");
                const research:{_priority:number}[] = JSON.parse(raw);
                return res.status(200).json(research);
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
                    const snapshot = await db.collection("pr_ship").get();
                    if (snapshot.empty) {
                        res.status(404).json({ error: "Not Found Any PR Ship" });
                    } else {
                        const prs = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                        const jsonString = JSON.stringify(prs, null, 2);
                        fs.writeFileSync("./data/research.json", jsonString);
                        return res.status(200).json({ message: "Data exported", count: prs.length });
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