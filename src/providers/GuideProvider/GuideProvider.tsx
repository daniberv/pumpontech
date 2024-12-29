import { GuideV1 } from "@/components/GuideV1";
import { createContext, useState, useEffect } from "react";
const GuideContext = createContext(null);

const GuideProvider = ({ children }) => {
    const [guidePassed, setGuidePassed] = useState(false);

    const complete = () => {
        localStorage.setItem("guidePassed", true);
        setGuidePassed(true);
    }

    useEffect(() => {
        const isGuidePassed = localStorage.getItem("guidePassed");

        if (isGuidePassed) {
            setGuidePassed(true);
        }
    }, []);

    if (!guidePassed) {
        return <GuideV1 complete={complete} />
    }

    return <GuideContext.Provider>{children}</GuideContext.Provider>;
};

export { GuideProvider }
