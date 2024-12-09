import { JettonsItems } from "@/components/JettonsItems"
import { Preloader } from "@/components/Preloader";
import { useFetch, useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";

export const GainersJettons = observer(() => {
    const { feeds } = useStore();
    useFetch(feeds, {
        feedType: "gainers",
        page: 1,
    });

    if(!feeds?.default?.itemIds || !feeds.isFetched) {
        return (
            <Preloader />
        )
    }

    return (
        <JettonsItems ids={feeds?.default?.itemIds} cardable={true} />
    )
})