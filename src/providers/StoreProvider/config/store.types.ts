import type {
	ICart,
	IFavorites,
	IBalance,
	ITags,
	IJettons,

} from "@/store/index"

export interface IRootStore {
	cart: ICart
	favorites: IFavorites
	balance: IBalance
	tags: ITags
	jettons: IJettons
}
