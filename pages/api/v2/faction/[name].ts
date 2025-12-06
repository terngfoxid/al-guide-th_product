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
    //Example /api/v2/faction/Eagle_Union
    //Ex.2 /api/v2/faction/Eagle%20Union

    switch (req.method) {
        case "GET": {
            try {
                const {
                    query: { name },
                } = req;
                if (!name) { return res.status(400).json({ error: "Faction Name is Missing" }); }
                const factionName = name.replaceAll("_", " ").toLowerCase();
                const raw = fs.readFileSync("./data/shipdata.json", "utf8");
                const ships: ShipV2[] = JSON.parse(raw);
                return res.status(200).json((ships.filter(ship => (ship.faction.full?.toLowerCase() === factionName))));
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}
