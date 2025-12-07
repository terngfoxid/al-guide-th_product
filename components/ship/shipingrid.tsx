import { ShipV2 } from "models/shipv2";
import Link from "next/link";

export default function ShipInGrid({ ship, retrofit }: { ship: ShipV2, retrofit?: boolean }) {
    //${retrofit?ship.rarity[1]:ship.rarity[0]}
    return (
        <Link href={"/ships/" + ship.name}>
            <div className={`w-full rounded-lg overflow-visible relative hover:!shadow-[0_0_15px_4px_rgba(255,215,0,0.8)] !transition-shadow !duration-300 hover:scale-105`}>
                <img className="w-full h-full p-[4%]" src={`/images/ship_frame_bg/${retrofit ? ship.rarity[1] : ship.rarity[0]}.webp`}>
                </img>
                <div className="absolute z-10 p-[4%] w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img className="w-full" src={ship.skins[0].profile ? ship.skins[0].profile : "/images/profile.webp"}></img>
                </div>
                <div className="absolute z-10 p-[4%] w-full bottom-[10%]">
                    <div className="bg-black bg-opacity-80 h-[10%] max-h-[10%] flex items-center">
                        <h4 className="px-[1rem] text-[14px] font-bold text-[#ffffff] truncate">{ship.name}</h4>
                    </div>
                </div>
                <div className="absolute z-10 p-[4%] w-full top-[2%]">
                    <div className="bg-black bg-opacity-80 !h-[1.5rem] lg:!h-[1.75rem] !max-h-[10%] flex items-center">
                        <img className="h-full" src={"/images/type/" + (ship.type[0]) + ".webp"}>
                        </img>
                        {/*
                            ship.type[1] && <img className="h-full" src={"/images/type/" + (ship.type[1]) + ".webp"}>
                            </img>
                        */}
                    </div>
                </div>
                <div className="absolute z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img className={"w-full h-full " + (ship.rarity[0] && ship.rarity[0].includes("SRM") ? "scale-[1.09]" : "")} src={`/images/ship_frame/${retrofit ? ship.rarity[1] : ship.rarity[0]}.webp`}>
                    </img>
                </div>
            </div>
        </Link>
    );
}