import { ShipV2 } from "models/shipv2";
import db from "../../../../utils/db";
import * as fs from 'fs';
import path from 'path';

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
    const filePathALDB = path.join(process.cwd(), 'public', 'data', 'ships(ALDBv1.7.14).json');
    const filePathALGT = path.join(process.cwd(), 'public', 'data', 'shipdata.json');

    switch (req.method) {
        case "GET": {
            try {
                const aldb_raw = fs.readFileSync(filePathALDB, "utf8");
                const aldb_ships = JSON.parse(aldb_raw);
                const aldb_array = Object.values(aldb_ships) as any[];

                const algt_raw = fs.readFileSync(filePathALGT, "utf8");
                const algt_ships: ShipV2[] = JSON.parse(algt_raw);

                const notMatch: any = []
                algt_ships.forEach(shipV2 => {
                    const match = aldb_array.find(shipDB =>
                        shipDB.name?.toLowerCase() === shipV2.name?.toLowerCase()
                    );

                    if (!match) {

                        notMatch.push(shipV2);
                    }
                    else{
                        shipV2.global_name = match.global_name
                        shipV2.tag = match.tags
                        shipV2.class = []
                        shipV2.class.push(match.class)
                        if(match.sub_class) shipV2.class.push(match.sub_class)
                    }
                })

                const notMatchALDB:any[] = []
                aldb_array.forEach(aldb_ship=>{
                    const match = algt_ships.find(shipGT =>
                        shipGT.name?.toLowerCase() === aldb_ship.name?.toLowerCase()
                    );

                    if (!match) {
                        notMatchALDB.push(aldb_ship);
                    }
                })

                return res.status(200).json({
                    refactorData:algt_ships,
                    notMatchALGT:notMatch,
                    notMatchALDB:notMatchALDB
                });
            } catch (err) {
                res.status(500).json({ error: err });
            }
            break;
        }
        case "POST": {
            if (req.headers.host?.includes("localhost")) {
                const ship: ShipV2 = await req.body;
                const id = ((ship.name) as string).toLowerCase()
                try {
                    db.collection("ship_v2.0").doc(id).set(ship)
                        .then(() => {
                            res.status(200).json({ ...ship, id: id });
                        })
                        .catch(() => {
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
            try {
                const aldb_raw = fs.readFileSync(filePathALDB, "utf8");
                const aldb_ships = JSON.parse(aldb_raw);
                const aldb_array = Object.values(aldb_ships) as any[];

                const algt_raw = fs.readFileSync(filePathALGT, "utf8");
                const algt_ships: ShipV2[] = JSON.parse(algt_raw);

                const notMatch: any = []
                algt_ships.forEach(shipV2 => {
                    const match = aldb_array.find(shipDB =>
                        shipDB.name?.toLowerCase() === shipV2.name?.toLowerCase()
                    );

                    if (!match) {
                        notMatch.push(shipV2);
                    }
                })

                const notMatchALDB:any[] = []
                aldb_array.forEach(aldb_ship=>{
                    const match = algt_ships.find(shipGT =>
                        shipGT.name?.toLowerCase() === aldb_ship.name?.toLowerCase()
                    );

                    if (!match) {
                        notMatchALDB.push(aldb_ship);
                    }
                })

                return res.status(200).json({
                    notMatchALGT:notMatch,
                    notMatchALDB:notMatchALDB
                });
            } catch (err) {
                res.status(500).json({ error: err });
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}