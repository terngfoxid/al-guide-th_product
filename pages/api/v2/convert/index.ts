import { ShipV2 } from "models/shipv2";
import db from "../../../../utils/db";

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
                const snapshot = await db.collection("ship").orderBy("name").get();
                if (snapshot.empty) {
                    res.status(404).json({ error: "Not Found Any Ship" });
                } else {
                    const ships: any[] = snapshot.docs.map(doc => ({ ...doc.data() }));
                    res.status(200).json(ships);
                }
            } catch {
                res.status(429).json({ error: "Firestore out of qouta" });
            }
            break;
        }
        case "POST": {
            if (req.headers.host?.includes("localhost")) {
                const ships: any[] = await req.body;
                const reModelShips: ShipV2[] = ships.map(ship => {
                    const reModel: ShipV2 = {
                        name: ship.name,
                        rarity: [],
                        class: [],
                        type: [],
                        tag: [],
                        faction: {
                            short: ship.faction_short,
                            full: ship.faction,
                            sub: ship.faction_sub,
                        },
                        skins: [],
                        skill_detail: {
                            skill: [],
                            retrofit: [],
                            fate_simulation: [],
                        },
                        aoa: [],
                        note_skill: [],
                        note: [],

                        augment: ship.augment ?? undefined,
                        review: ship.review ?? undefined,
                        history: ship.history ?? undefined,

                        meta_showdown_armor: ship.armor ?? undefined,
                        meta_showdown_comment: ship.meta_showdown_comment ?? undefined,
                        meta_showdown: ship.meta_showdown ?? undefined,
                        meta_showdown_team: ship.meta_showdown_team ?? undefined,

                        gear: [],
                    }

                    //Add type
                    reModel.type.push(ship.type)
                    if (ship.type_re) reModel.type.push(ship.type_re)

                    reModel.skins = (ship.skins as Array<any>).map((skin: any, index: number) => {
                        const newSkin: {
                            chibi?: string | undefined;
                            name: string;
                            image: string;
                        } = {
                            name: skin.name,
                            image: skin.image
                        }
                        if (index === 0) {
                            newSkin.chibi = ship.chibi
                        }
                        return newSkin
                    })

                    if (ship.aoa || ship.aoa_note) {
                        reModel.aoa.push({
                            image: ship.aoa ?? undefined,
                            desc: ship.aoa_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_1 || ship.guide_skill_1_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_1 ?? undefined,
                            desc: ship.guide_skill_1_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_2 || ship.guide_skill_2_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_2 ?? undefined,
                            desc: ship.guide_skill_2_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_3 || ship.guide_skill_3_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_3 ?? undefined,
                            desc: ship.guide_skill_3_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_4 || ship.guide_skill_4_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_4 ?? undefined,
                            desc: ship.guide_skill_4_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_5 || ship.guide_skill_5_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_5 ?? undefined,
                            desc: ship.guide_skill_5_note ?? undefined
                        })
                    }

                    if (ship.guide_skill_6 || ship.guide_skill_6_note) {
                        reModel.note_skill.push({
                            image: ship.guide_skill_6 ?? undefined,
                            desc: ship.guide_skill_6_note ?? undefined
                        })
                    }

                    if (ship.ship_note) {
                        reModel.note.push({
                            image: undefined,
                            desc: ship.ship_note ?? undefined
                        })
                    }

                    if (ship.gear) {
                        reModel.gear?.push(ship.gear)
                    }

                    if (ship.skill) {
                        reModel.skill_detail.skill?.push(ship.skill)
                    }
                    if (ship.skill_2) {
                        reModel.skill_detail.skill?.push(ship.skill_2)
                    }

                    if (ship.re) {
                        reModel.skill_detail.retrofit?.push(ship.re)
                    }

                    if (ship.fatesim) {
                        reModel.skill_detail.fate_simulation?.push(ship.fatesim)
                    }

                    return reModel
                })
                try {
                    res.status(200).json(reModelShips);
                } catch {
                    res.status(429).json({ error: "Firestore out of qouta" });
                }
            }
            break;
        }
        case "PUT": {
            if (req.headers.host?.includes("localhost")) {
                const ships: ShipV2[] = await req.body;
                try {
                    const error: string[] = []
                    ships.forEach(async ship => {
                        //add to database
                        const id = ((ship.name) as string).toLowerCase()
                        try {
                            await db.collection("ship_v2.0").doc(id).set(ship)
                        }
                        catch {
                            //collect error
                            error.push(ship.name)
                        }
                    })
                    if (error.length !== 0) { res.status(400).json({ error: [...error] }); }
                    res.status(200).json({ error: [...error] , success: (ships.length - error.length)});
                } catch {
                    res.status(400).json({ error: "Bad Request Model Input" });
                }
            }
            break;
        }
        default: { return res.status(405).json({ error: "Method Not Allowed" }); }
    }
}

