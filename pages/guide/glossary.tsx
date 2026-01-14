import Head from "next/head";

export default function Glossary() {
    const searchFunction = (id: string) => {
        let access = document.getElementById(id);
        if (access != null) {
            access.scrollIntoView({ behavior: "smooth" });
        }

        return;
    };

    return (
        <>
            <Head>
                <title>คำศัพท์/คำย่อ | Azur Lane Guide TH</title>
                <meta name="description" content="คำศัพท์และคำย่อภายในเกม Azur Lane" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="scroll-container" className={`duration-500 animate-slide-in-bottom bg-[#0D1829] bg-opacity-90 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] mx-auto w-[90vw] max-w-[min(calc(100vw-30px),1890px)] lg:w-[calc(100vw-30px)] lg:mx-[15px] h-[100%] overflow-y-scroll rounded-2xl p-[5px] md:p-[10px] lg:p-[15px]`}>
                <h1 className="p-2 text-2xl font-bold text-center text-zinc-200 md:text-2xl lg:text-3xl">
                    คำศัพท์/คำย่อ
                </h1>
                <div className="w-full p-1 mb-3 rounded md:p-4 shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] bg-[#182D4D]">
                    <p className="p-2 text-xl font-bold text-center text-zinc-300 md:text-xl lg:text-2xl">
                        ค้นหาตามตัวอักษร
                    </p>
                    <div className="grid grid-cols-6 gap-x-2 md:grid-cols-9 md:gap-x-6 gap-y-2">
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("A")}
                        >
                            A
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("B")}
                        >
                            B
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("C")}
                        >
                            C
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("D")}
                        >
                            D
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("E")}
                        >
                            E
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("F")}
                        >
                            F
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("G")}
                            disabled={true}
                        >
                            G
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("H")}
                        >
                            H
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("I")}
                        >
                            I
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("K")}
                            disabled={true}
                        >
                            J
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("K")}
                        >
                            K
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("L")}
                        >
                            L
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("M")}
                        >
                            M
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("N")}
                        >
                            N
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("O")}
                        >
                            O
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("P")}
                        >
                            P
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("Q")}
                        >
                            Q
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("R")}
                        >
                            R
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("S")}
                        >
                            S
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("T")}
                        >
                            T
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("U")}
                        >
                            U
                        </button>
                        <button
                            className="shadow-[0_0_10px_4px_rgba(0,150,255,0.85)] w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl hover:scale-110"
                            onClick={() => searchFunction("V")}
                        >
                            V
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("W")}
                            disabled={true}
                        >
                            W
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("X")}
                            disabled={true}
                        >
                            X
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("Y")}
                            disabled={true}
                        >
                            Y
                        </button>
                        <button
                            className="w-full p-1 text-xl duration-300 border border-transparent rounded text-zinc-200 md:text-xl lg:text-2xl cursor-not-allowed"
                            onClick={() => searchFunction("Z")}
                            disabled={true}
                        >
                            Z
                        </button>
                    </div>
                </div>
                <br></br>
                <div id="A">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            A
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="AA"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AA = Anti-air</p>
                                <p className="pl-3">(อาวุธ) ปืนต่อต้านอากาศยาน</p>
                                <p className="pl-3">(status) ค่าต่อต้านอากาศยาน</p>
                            </div>
                            <div
                                id="AB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AB = Armor Break</p>
                                <p className="pl-3">(ในเกม) สถานะเกราะแตก</p>
                            </div>
                            <div
                                id="AE"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AE = Munition ship</p>
                                <p className="pl-3">(ประเภทเรือ) เรือบรรทุกสรรพาวุธ</p>
                            </div>
                            <div
                                id="AOA"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AOA = All Out Assault</p>
                                <p className="pl-3">(การโจมตี) ท่ายิงเต็มกำลัง</p>
                            </div>
                            <div
                                id="AP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AP = Armor Piercing, Action Point</p>
                                <p className="pl-3">(ประเภทกระสุน) กระสุนเจาะเกราะ</p>
                                <p className="pl-3">(โหมด OPS) Action Point ค่า cost ในการลงด่าน</p>
                            </div>
                            <div
                                id="AR"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AR = Repair ship</p>
                                <p className="pl-3">(ประเภทเรือ) เรือซ่อมบำรุง</p>
                            </div>
                            <div
                                id="ARA"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>ARA = Air Raid Assistance</p>
                                <p className="pl-3">(skill) เพิ่มความเสียหายที่ทำได้ของ CV/CVL 15%</p>
                            </div>
                            <div
                                id="AS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AS = Airstrike</p>
                                <p className="pl-3">(การโจมตี) การโจมตีทางอากาศ</p>
                            </div>
                            <div
                                id="ASW"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>ASW = Anti-Submarine Warfare</p>
                                <p className="pl-3">(อาวุธ) อุปกรณ์ต่อต้านเรือดำน้ำ</p>
                                <p className="pl-3">(status) ค่าต่อต้านเรือดำน้ำ</p>
                            </div>
                            <div
                                id="AVI"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>AVI = Aviation</p>
                                <p className="pl-3">
                                    (status) ค่าพลังต่อสู้ทางอากาศ(เครื่องบิน)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="B">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            B
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Backline"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Backline</p>
                                <p className="pl-3">(ตำแหน่งเรือ) กองหลัง</p>
                            </div>
                            <div
                                id="Barrage"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Barrage</p>
                                <p className="pl-3">(การโจมตี) กระสุนชุดพิเศษ</p>
                            </div>
                            <div
                                id="BB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>BB = Battleship</p>
                                <p className="pl-3">(ประเภทเรือ) เรือประจัญบาน</p>
                            </div>
                            <div
                                id="BBV"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>BBV = Aviation Battleship</p>
                                <p className="pl-3">
                                    (ประเภทเรือ) เรือประจัญบานบรรทุกเครื่องบิน
                                </p>
                            </div>
                            <div
                                id="BC"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>BC = Battlecruiser</p>
                                <p className="pl-3">(ประเภทเรือ) เรือประจัญบานลาดตระเวน</p>
                            </div>
                            <div
                                id="Beehive"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Beehive = Type 3</p>
                                <p className="pl-3">(ประเภทกระสุน) กระสุน Type 3 ขยะ อย่าไปหาใช้</p>
                            </div>
                            <div
                                id="BM"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>BM = Monitor</p>
                                <p className="pl-3">(ประเภทเรือ) เรือประจำชายฝั่ง</p>
                            </div>
                            <div
                                id="BP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>BP = Blueprints</p>
                                <p className="pl-3">
                                    (ไอเท็ม) แปลนเรือรีโทรฟิต, แปลนเรือวิจัย{" "}
                                </p>
                            </div>
                            <div
                                id="Bulin"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Bulin</p>
                                <p className="pl-3">
                                    (ตัวละคร) ตัวละครที่ใช้ปลดดาวแทนตัวซ้ำ
                                </p>
                            </div>
                            <div
                                id="Burn Damage"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Burn Damage</p>
                                <p className="pl-3">
                                    (ในเกม) ความเสียหายจากสถานะไฟไหม้
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="C">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            C
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="CA"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CA = Heavy Cruiser</p>
                                <p className="pl-3">(ประเภทเรือ) เรือลาดตระเวนหนัก</p>
                            </div>
                            <div
                                id="CB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CB = Large Cruiser</p>
                                <p className="pl-3">(ประเภทเรือ) เรือลาดตระเวนขนาดใหญ่</p>
                            </div>
                            <div
                                id="CL"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CL = Light Cruiser</p>
                                <p className="pl-3">(ประเภทเรือ) เรือลาดตระเวนเบา</p>
                            </div>
                            <div
                                id="CM"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CM = Challenge Mode</p>
                                <p className="pl-3">(ในเกม) โหมดท้าทายประจำเดือนเอากรอบ Profile</p>
                            </div>
                            <div
                                id="Cri-Dmg"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Cri-Dmg = Critical Damage</p>
                                <p className="pl-3">(ค่าคำนวณ) ความเสียหายคริ มีหน่วยเป็น %</p>
                            </div>
                            <div
                                id="Cri-Rate"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Cri-Rate = Critical Rate</p>
                                <p className="pl-3">(ค่าคำนวณ) อัตราคริ มีหน่วยเป็น %</p>
                            </div>
                            <div
                                id="CV"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CV = Aircraft Carrier</p>
                                <p className="pl-3">(ประเภทเรือ) เรือบรรทุกเครื่องบิน</p>
                            </div>
                            <div
                                id="CVL"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>CVL = Light Aircraft Carrier</p>
                                <p className="pl-3">(ประเภทเรือ) เรือบรรทุกเครื่องบินเบา</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="D">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            D
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="DB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>DB = Dive Bomber</p>
                                <p className="pl-3">(อาวุธ) เครื่องบินดำดิ่งทิ้งระเบิด</p>
                            </div>
                            <div
                                id="Detection Gauge"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Detection Gauge</p>
                                <p className="pl-3">(ในเกม) หลอดซ่อนตัว/ตรวจจับ CV/CVL</p>
                            </div>
                            <div
                                id="Detection Line"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Detection Line</p>
                                <p className="pl-3">(ในเกม) เส้นบอกระยะที่จะเริ่มการตรวจจับ CV/CVL</p>
                            </div>
                            <div
                                id="DD"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>DD = Destroyer</p>
                                <p className="pl-3">(ประเภทเรือ) เรือพิฆาต</p>
                            </div>
                            <div
                                id="DDG"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>DDG = Guided-missile Destroyer</p>
                                <p className="pl-3">
                                    (ประเภทเรือ) เรือพิฆาตติดอาวุธปล่อยนำวิถี
                                </p>
                            </div>
                            <div
                                id="Dock"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Dock</p>
                                <p className="pl-3">
                                    (ในเกม) ช่องเก็บตัวละคร
                                </p>
                            </div>
                            <div
                                id="DPS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>DPS = Damage-per-second</p>
                                <p className="pl-3">(ค่าคำนวณ) ดาเมจเฉลี่ยต่อวินาที</p>
                            </div>
                            <div
                                id="DR"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>DR = Decisive Research</p>
                                <p className="pl-3">(ในเกม) เรือวิจัยระดับสีรุ้ง</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="E">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            E
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="EVA"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>EVA = Evasion</p>
                                <p className="pl-3">(status) ค่าหลบหลีก</p>
                            </div>
                            <div
                                id="Evasion Rate"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Evasion Rate</p>
                                <p className="pl-3">
                                    (ค่าคำนวณ) โอกาศหลบหลีก มีหน่วยเป็น %
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="F">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            F
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Faction"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Faction</p>
                                <p className="pl-3">ชาติ, ฝ่าย เช่น USS - Eagle Union (United States)</p>
                            </div>
                            <div
                                id="FFNF"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>FFNF = Free French Naval Forces</p>
                                <p className="pl-3">(ฝ่าย) กองทัพฝรั่งเศสเสรี</p>
                            </div>
                            <div
                                id="Flag Ship"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Flag Ship</p>
                                <p className="pl-3">(ตำแหน่งเรือ) เรือธง</p>
                            </div>
                            <div
                                id="Flood Damage"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Flood Damage</p>
                                <p className="pl-3">(ในเกม) ความเสียหายจากสถานะน้ำท่วม</p>
                            </div>
                            <div
                                id="FP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>FP = Firepower</p>
                                <p className="pl-3">(status) ค่าปืนใหญ่</p>
                            </div>
                            <div
                                id="FR"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>FR = Fire rate</p>
                                <p className="pl-3">(ค่าคำนวณ) เวลาในการยิง 1 รอบ</p>
                            </div>
                            <div
                                id="Frontline"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Frontline</p>
                                <p className="pl-3">(ตำแหน่งเรือ) กองหน้า</p>
                            </div>
                            <div
                                id="FT"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>FT = Fighter</p>
                                <p className="pl-3">(อาวุธ) เครื่องบินขับไล่</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="H">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            H
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="H"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>H = Heavy Armor, Hard Mode</p>
                                <p className="pl-3">(ประเภทเกราะ) เกราะหนัก</p>
                                <p className="pl-3">(ในเกม) ด่านระดับยาก</p>
                            </div>
                            <div
                                id="HE"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>HE = High Explosive</p>
                                <p className="pl-3">(ประเภทกระสุน) กระสุนระเบิดแรงสูง</p>
                            </div>
                            <div
                                id="HIT"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>HIT = Accuracy</p>
                                <p className="pl-3">(status) ค่าความแม่นยำ</p>
                            </div>
                            <div
                                id="HIT Rate"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>HIT Rate</p>
                                <p className="pl-3">(ค่าคำนวณ) โอกาศตีโดน มีหน่วยเป็น % ตรงข้ามกับ Evasion Rate</p>
                            </div>
                            <div
                                id="HP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>HP = Health points</p>
                                <p className="pl-3">(status) ค่าพลังชีวิต</p>
                            </div>
                            <div
                                id="HMS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>HMS = His/Her Majesty&apos;s Ship</p>
                                <p className="pl-3">
                                    (ฝ่าย) เรือหลวงราชนาวีสหราชอาณาจักร(อังกฤษ)
                                </p>
                            </div>
                            <div
                                id="Hull Class"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Hull Class</p>
                                <p className="pl-3">ประเภทของตัวเรือ เช่น DD,CV</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="I">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            I
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="IJN"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>IJN = Imperial Japanese Navy</p>
                                <p className="pl-3">(ฝ่าย) จักรพรรดินาวีญี่ปุ่น</p>
                            </div>
                            <div
                                id="IX"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>IX = Unclassified, Miscellaneous</p>
                                <p className="pl-3">
                                    (ประเภทเรือ) เรือที่ไม่ได้จัดประเภท หรือ เรือเบ็ดเตล็ด
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="K">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            K
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Kai"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Kai = 改</p>
                                <p className="pl-3">
                                    (ความหมาย) ได้รับการอัพเกรด, ปรับปรุง
                                </p>
                                <p className="pl-3">(ในเกม) รีโทรฟิต Retrofit</p>
                            </div>
                            <div
                                id="KMS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>KMS = Kriegsmarine Schiffe</p>
                                <p className="pl-3">
                                    (ฝ่าย) ครีคส์มารีเนอ กองทัพเรือนาซีเยอรมนี
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="L">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            L
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="L"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>L = Light Armor</p>
                                <p className="pl-3">(ประเภทเกราะ) เกราะเบา</p>
                            </div>
                            <div
                                id="LB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>LB = Limit Break</p>
                                <p className="pl-3">(ในเกม) ปลดดาว</p>
                            </div>
                            <div
                                id="lb"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>lb = Pound</p>
                                <p className="pl-3">(ในเกม) ปอนด์ น้ำหนักของระเบิดปกติยิ่งเยอะยิ่งแรง</p>
                            </div>
                            <div
                                id="LCK"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>LCK = Luck</p>
                                <p className="pl-3">(status) ค่าโชค/ดวง</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="M">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            M
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="M"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>M = Medium Armor</p>
                                <p className="pl-3">(ประเภทเกราะ) เกราะกลาง</p>
                            </div>
                            <div
                                id="Main Fleet"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Main Fleet</p>
                                <p className="pl-3">(ตำแหน่งเรือ) กองหลัง</p>
                                <p className="pl-3">(สัญลักษณ์ศัตรู) กองเรือหลัก</p>
                            </div>
                            <div
                                id="MG"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>MG = Main Gun</p>
                                <p className="pl-3">(อาวุธ) ปืนหลัก</p>
                            </div>
                            <div
                                id="MNF"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>MNF = Marine Nationale Forces</p>
                                <p className="pl-3">
                                    (ฝ่าย) กองทัพเรือฝรั่งเศส(ในเกมหมายถึงเขตวีชี)
                                </p>
                            </div>
                            <div
                                id="Mob"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Mob</p>
                                <p className="pl-3">
                                    (ศัตรู) โหนดลูกน้องในด่านต่างๆ
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="N">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            N
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Nation"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Nation</p>
                                <p className="pl-3">
                                    ชาติ, ฝ่าย เช่น USS - Eagle Union (United States)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="O">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            O
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Oil Cap"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Oil Cap = Fuel Cost Limit</p>
                                <p className="pl-3">
                                    (ในเกม) ระบบจำกัดค่า Cost น้ำมันสูงสุดที่ต้องใช้
                                </p>
                            </div>
                            <div
                                id="Ops"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Ops = Operation Siren</p>
                                <p className="pl-3">
                                    (ในเกม) โหมด Open World Grinding
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="P">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            P
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="PR"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>PR = Priority Research</p>
                                <p className="pl-3">
                                    (ในเกม) ระบบวิจัย แบ่งเป็นซีรีย์ เช่น เรือPR1, ปืนPR1
                                </p>
                            </div>
                            <div
                                id="PRAN"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>PRAN = People&apos;s Liberation Army Navy</p>
                                <p className="pl-3">(ฝ่าย) กองทัพปลดปล่อยประชาชน(จีน)</p>
                            </div>
                            <div
                                id="Preload"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Preload</p>
                                <p className="pl-3">(การโจมตี) การโจมตีตั้งแต่ด่านเริ่มโดยไม่รอโหลดอาวุธ เช่น Preload Salvo , Preload AS</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="Q">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            Q
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="QT"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>QT = Quick Takeoff</p>
                                <p className="pl-3">(skill) เมื่อปล่อย AS จะมีโอกาศ 15% ที่ AS ชุดถัดไปจะโหลดเสร็จทันที</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="R">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            R
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Ramming Damage"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Ramming Damage</p>
                                <p className="pl-3">(ในเกม) ความเสียหายจากเรือชนกัน</p>
                            </div>
                            <div
                                id="Research"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Research</p>
                                <p className="pl-3">(ในเกม) ระบบวิจัยเรือ/เกียร์/Tech</p>
                            </div>
                            <div
                                id="RLD"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>RLD = Reload</p>
                                <p className="pl-3">(status) ค่ารีโหลด</p>
                            </div>
                            <div
                                id="ROC"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>ROC = Republic of China</p>
                                <p className="pl-3">(ฝ่าย) สาธารณรัฐจีน(ไต้หวัน)</p>
                            </div>
                            <div
                                id="RN"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>RN = Regia Nave, Royal Navy(Regia Marina)</p>
                                <p className="pl-3">
                                    (ฝ่าย) กองทัพเรือของราชอาณาจักรอิตาลี
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="S">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            S
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Salvo"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Salvo</p>
                                <p className="pl-3">(การโจมตี) กระสุนชุดหลักของ BB</p>
                            </div>
                            <div
                                id="SAP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SAP = Semi Armor Piercing</p>
                                <p className="pl-3">(ประเภทกระสุน) กระสุนเจาะเกราะชั้นเดียว</p>
                            </div>
                            <div
                                id="SG"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SG</p>
                                <p className="pl-3">(อาวุธ) SG Radar</p>
                                <p className="pl-3">(skill) Radar Scan ของ Helena</p>
                            </div>
                            <div
                                id="SN"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SN = Soviet Navy</p>
                                <p className="pl-3">(ฝ่าย) กองทัพเรือโซเวียต</p>
                            </div>
                            <div
                                id="SPD"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SPD = Speed</p>
                                <p className="pl-3">(status) ค่าความเร็ว</p>
                            </div>
                            <div
                                id="SS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SS = Submarine</p>
                                <p className="pl-3">(ประเภทเรือ) เรือดำน้ำ</p>
                            </div>
                            <div
                                id="SSV"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>SSV = Submarine carrier</p>
                                <p className="pl-3">
                                    (ประเภทเรือ) เรือดำน้ำบรรทุกเครื่องบิน
                                </p>
                            </div>
                            <div
                                id="Suicide Bomb Boat"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Suicide Bomb Boat</p>
                                <p className="pl-3">
                                    (ศัตรู) เรือระเบิดฆ่าตัวตาย
                                </p>
                                <p className="pl-3">
                                    (ชื่อเล่น) เรือเป็ด
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="T">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            T
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="TB"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>TB = Torpedo Bomber</p>
                                <p className="pl-3">(อาวุธ) เครื่องบินทิ้งระเบิดตอร์ปิโด</p>
                                <p className="pl-3">(ตัวละคร) หมายถึงน้อง TB อะแหล่ะ</p>
                            </div>
                            <div
                                id="TRP"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Torp หรือ TRP = torpedo</p>
                                <p className="pl-3">(status) ค่าตอร์ปิโด</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="U">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            U
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="USS"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>USS = United States Ship</p>
                                <p className="pl-3">(ฝ่าย) กองทัพเรือสหรัฐ</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="w-full border border-neutral-500 "></div>
                    </div>
                    <div id="V">
                        <p className="p-2 pl-5 text-xl font-bold text-zinc-300 md:text-xl lg:text-2xl">
                            V
                        </p>
                        <div className="grid grid-cols-1 py-2 md:grid-cols-2 gap-x-10 gap-y-3">
                            <div
                                id="Vanguard"
                                className="items-center w-full h-full p-3 text-base duration-300 border rounded bg-[#182D4D] border-gray-700 text-zinc-200 md:text-lg lg:text-xl"
                            >
                                <p>Vanguard</p>
                                <p className="pl-3">(ตำแหน่งเรือ) กองหน้า</p>
                                <p className="pl-3">(สัญลักษณ์ศัตรู) กองเรือคุ้มกัน</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}