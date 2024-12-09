import { JettonBondingProgress } from "@/components/JettonBondingProgress";
import { JettonChart } from "@/components/JettonChart";
import { JettonCover } from "@/components/JettonCover";
import { JettonInfo } from "@/components/JettonInfo";
import { JettonMenu } from "@/components/JettonMenu";
import { JettonPoints } from "@/components/JettonPoints";
import { JettonPageLayout } from "@/layouts/JettonPageLayout";
import { useStore } from "@/providers/StoreProvider";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export const JettonLegendPage = observer(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    let jettonId = searchParams.get('jettonId');

    const { jettons } = useStore();
    const jetton = jettons?.getById(jettonId);

    if (!jetton) {
        return (
            <div>No Jetton</div>
        )
    }

    return (
        <JettonPageLayout jetton={jetton}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque unde inventore sed laborum voluptates distinctio quo deserunt dolorum, quaerat obcaecati accusantium itaque, omnis optio. Aperiam explicabo a nostrum illum!

            <JettonMenu jetton={jetton} active={"legend"} />
        </JettonPageLayout>
    )
})