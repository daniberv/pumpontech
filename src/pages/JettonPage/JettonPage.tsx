import { JettonMenu } from "@/components/JettonMenu";
import { JettonWrapper } from "@/components/JettonWrapper";
import { Preloader } from "@/components/Preloader";
import { JettonPageLayout } from "@/layouts/JettonPageLayout";
import { useStore } from "@/providers/StoreProvider";
import { useFetchItem } from "@/providers/StoreProvider/libs/use_fetch_item";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"

export const JettonPage = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    let jettonId = searchParams.get('jettonId');

    const [activePage, setActivePage] = useState("info");

    const { jettons } = useStore();

    useFetchItem(jettons, {
        id: jettonId,
    });

    const jetton = jettons?.getById(jettonId);

    const changeActivePage = (value) => {
        setActivePage(value)
    }

    if(!jetton) {
        return (
            <Preloader />
        )
    }

    return (
        <JettonPageLayout jetton={jetton}>
            <JettonWrapper jetton={jetton} active={activePage} />
            <JettonMenu jetton={jetton} active={activePage} onChange={changeActivePage} />
        </JettonPageLayout>
    )
})