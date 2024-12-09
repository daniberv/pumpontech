import { Deposit } from "./Deposit"
import { Withdraw } from "./Withdraw"

export const Mode = ({ mode }) => {
    if (mode === "deposit") {
        return <Deposit />
    }

    return (
        <Withdraw />
    )
}