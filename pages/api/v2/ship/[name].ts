import { ShipV2 } from "models/shipv2";

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
    //example /api/ship/v2/Allen_M_Sumner
    //ex.2 /api/ship/v2/Allen%20M%20Sumner

    switch (req.method) {
        case "GET": {
            try {
                const {
                    query: { name },
                } = req;
                if (!name) { return res.status(400).json({ error: "Name is Missing" }); }
                const docname = name.replaceAll("_", " ").toLowerCase();
                const raw = fs.readFileSync("./data/shipdata.json", "utf8");
                const ships:ShipV2[] = JSON.parse(raw);
                return res.status(200).json((ships.find(ship =>(ship.id === docname))));
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}
