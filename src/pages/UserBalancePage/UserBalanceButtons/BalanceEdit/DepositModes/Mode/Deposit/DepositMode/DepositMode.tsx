import { RubDeposit } from "./RubDeposit"
import { TonDeposit } from "./TonDeposit"

export const DepositMode = ({ mode }) => {
    if (mode === "ton") {
        return <TonDeposit />
    }

    return <RubDeposit />
}