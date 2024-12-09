import { Instance, types as t } from "mobx-state-tree"
import { Jettons } from "../Jettons"

const CartModel = t.model({
    items: t.array(t.reference(t.late(() => Jettons))),
})

type ICartModel = Instance<typeof CartModel>

export default CartModel

export type { ICartModel }
