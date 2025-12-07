import { ShipV2 } from "models/shipv2";
import path from "path";

const fs = require("fs");

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
    const filePath = path.join(process.cwd(), 'public', 'data', 'shipdata.json');
    switch (req.method) {
        case "GET": {
            try {
                const raw = fs.readFileSync(filePath, "utf8");
                const ships: ShipV2[] = JSON.parse(raw);
                return res.status(200).json((ships.filter(ship => (ship.skill_detail.retrofit.length > 0))));
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}
