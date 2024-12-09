import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite"
import { PointCompleted } from "./PointCompleted";
import { TonNeeded } from "@/components/TonNeeded";

export const PointsCompleted = observer(() => {
    const { user, userWallet } = useStore();

    if (!userWallet) {
        return <TonNeeded />
    }

    return (
        <div className="d">
            {user?.points_completed?.items?.map((item, index) =>
                <PointCompleted item={item} key={index} />
            )}
        </div>
    )
});