import { useEffect, useState } from "react";

export default function Secretary() {
    const [secretaryUrl, setSecretaryUrl] = useState<string>()
    useEffect(() => {
        const secretary = localStorage.getItem("secretary")
        if (secretary) {
            setSecretaryUrl(secretary)
        }
    }, []);

    return (
        <div className="fixed top-1/2 left-[70%] lg:left-1/2 -translate-x-1/4 lg:-translate-x-1/2 -translate-y-1/2 min-w-[120vw] lg:min-w-[60vw]">
            <img alt="Secretary" src={secretaryUrl? secretaryUrl:"/images/secretary.png"} className="max-h-[100vh]" />
        </div>
    );
}