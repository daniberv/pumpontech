import { Preloader } from "@/components/Preloader"
import { observer } from "mobx-react-lite"

export const TagJettons = observer(({ tag }) => {
    if (!tag) {
        return null
    }

    return (
        <div></div>
    )
})