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

    switch (req.method) {
        case "GET": {
            try {
                const raw = fs.readFileSync("./data/shipdata.json", "utf8");
                const ships: ShipV2[] = JSON.parse(raw);
                return res.status(200).json((ships.filter(ship => (ship.meta_showdown))));
            } catch {
                res.status(500).json({ error: "Error While Processing Json" });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}
