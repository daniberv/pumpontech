import { JettonMenu } from "../JettonMenu"
import { JettonContent } from "./JettonContent"

export const JettonWrapper = ({ jetton, active }) => {
    return (
        <div>
            <JettonContent jetton={jetton} active={active} />
            <JettonMenu jetton={jetton} active={active} />
        </div>
    )
}