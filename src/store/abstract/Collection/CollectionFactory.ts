import {
	IAnyModelType,
	IAnyStateTreeNode,
	types as t,
} from "mobx-state-tree"

import CollectionViews from "./views"
import { CollectionActions } from "./CollectionActions"
import CollectionModelFactory from "./CollectionModel"

const Collection = (modelType: IAnyModelType | IAnyStateTreeNode) =>
	CollectionModelFactory(modelType)
		.actions(CollectionActions)
		.views(CollectionViews)

export { Collection }
