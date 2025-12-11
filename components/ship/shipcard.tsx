import { ShipV2 } from "models/shipv2";

export default function ShipCard({ ship, retrofit }: { ship: ShipV2, retrofit?: boolean }) {
    if (retrofit) {
        const retrofitSkin = ship.skins.find((skin) => (skin.name === "Retrofit"))
        if (retrofitSkin) {
            return (
                <div>
                    <div className={`w-full rounded-lg overflow-visible relative `}>
                        <img alt={ship.name+" Rarity BG"} className="w-full h-full p-[4%]" src={`/images/ship_frame_bg/${ship.rarity[1]}.webp`}>
                        </img>
                        <div className="absolute z-10 p-[4%] w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img alt={ship.name+" Profile"} className="w-full" src={retrofitSkin.profile}></img>
                        </div>
                        <div className="absolute z-10 p-[4%] w-full bottom-[10%]">
                            <div className="bg-black bg-opacity-80 h-[10%] max-h-[10%] flex items-center">
                                <h4 className="px-[0.5rem] md:px-[1rem] text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#ffffff] truncate">{ship.name}</h4>
                            </div>
                        </div>
                        <div className="absolute z-10 p-[4%] w-full top-[2%]">
                            <div className="bg-black bg-opacity-80 !h-[1.5rem] lg:!h-[1.75rem] !max-h-[10%] flex items-center">
                                <img alt={ship.name+" Type"} className="h-full" src={"/images/type/" + (ship.type[(ship.type.length -1)]) + ".webp"}>
                                </img>
                            </div>
                        </div>
                        <div className="absolute z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img alt={ship.name+" Rarity"} className={"w-full h-full " + (ship.rarity[0] && ship.rarity[0].includes("SRM") ? "scale-[1.09]" : "")} src={`/images/ship_frame/${ship.rarity[1]}.webp`}>
                            </img>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            <div className={`w-full rounded-lg overflow-visible relative`}>
                <img alt={ship.name+" Rarity BG"} className="w-full h-full p-[4%]" src={`/images/ship_frame_bg/${ship.rarity[0]}.webp`}>
                </img>
                <div className="absolute z-10 p-[4%] w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img alt={ship.name+" Profile"} className="w-full" src={ship.skins[0].profile?ship.skins[0].profile : "/images/profile.webp"}></img>
                </div>
                <div className="absolute z-10 p-[4%] w-full bottom-[10%]">
                    <div className="bg-black bg-opacity-80 h-[10%] max-h-[10%] flex items-center">
                        <h4 className="px-[0.5rem] md:px-[1rem] text-[10px] md:text-[14px] lg:text-[16px] font-bold text-[#ffffff] truncate">{ship.name}</h4>
                    </div>
                </div>
                <div className="absolute z-10 p-[4%] w-full top-[2%]">
                    <div className="bg-black bg-opacity-80 !h-[1.5rem] lg:!h-[1.75rem] !max-h-[10%] flex items-center">
                        <img alt={ship.name+" Type"} className="h-full" src={"/images/type/" + (ship.type[0]) + ".webp"}>
                        </img>
                    </div>
                </div>
                <div className="absolute z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img alt={ship.name+" Rarity"} className={"w-full h-full " + (ship.rarity[0] && ship.rarity[0].includes("SRM") ? "scale-[1.09]" : "")} src={`/images/ship_frame/${ship.rarity[0]}.webp`}>
                    </img>
                </div>
            </div>
        </div>
    );
}