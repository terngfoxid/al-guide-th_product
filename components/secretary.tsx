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
        <div className="fixed bottom-0 right-0 max-w-[100vw] sm:max-w-[50vw] md:max-w-[50vw] lg:max-w-[60vw]">
            <img alt="Secretary" src={secretaryUrl? secretaryUrl:"/images/secretary.png"} className="max-h-[80vh] lg:max-h-[100vw]" />
        </div>
    );
}