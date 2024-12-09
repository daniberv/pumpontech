import { Instance } from "mobx-state-tree"

import CartModel from "./model"
import actions from "./actions"
import views from "./views"

const Cart = CartModel.views(views).actions(actions)

type ICart = Instance<typeof Cart>

export { Cart }
export type { ICart }