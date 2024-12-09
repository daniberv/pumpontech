import { JettonBondingProgress } from "@/components/JettonBondingProgress";
import { JettonChart } from "@/components/JettonChart";
import { JettonCover } from "@/components/JettonCover";
import { JettonInfo } from "@/components/JettonInfo";
import { JettonLegend } from "@/components/JettonLegend";
import { JettonPoints } from "@/components/JettonPoints";
import { JettonHolders } from "@/components/JettonHolders";
import { JettonTransactions } from "@/components/JettonTransactions";

export const JettonContent = ({ jetton, active }) => {
    switch (active) {
        case 'info':
            return (
                <>
                    <JettonBondingProgress progress={jetton?.bonding}/>
                    <JettonPoints points={jetton?.points} grow24={jetton?.grow24} />
                    <JettonCover image={jetton?.image} booster={jetton?.booster} isGainer={jetton?.isGainer} />
                    <JettonInfo jetton={jetton} />

                    <JettonChart jetton={jetton} />
                </>
            )
        case 'legend':
            return (
                <>
                    <JettonLegend jetton={jetton} />
                </>
            )
        case 'holders':
            return (
                <>
                    <JettonHolders jetton={jetton} />
                </>
            )
        case 'transactions':
            return (
                <>
                    <JettonTransactions jetton={jetton} />
                </>
            )
        default:
            return null;
    }
}

