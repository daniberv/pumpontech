import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite"
import { PointAvaiable } from "./PointAvaiable";

export const PointsAvailable = observer(() => {
    const { user } = useStore();

    return (
        <div className="d">
            {user?.points_available?.items?.map((item, index) =>
                <PointAvaiable item={item} key={index} completed={user?.points_completed?.items} />
            )}
        </div>
    )
});