import api from "@/api";
import { ITagsModel } from "./model"
import { applySnapshot, flow, getRoot } from "mobx-state-tree"
import { toMapBySlug } from "@/utils/toMapById";

export default (self: ITagsModel) => 
	({
		fetch: flow(function* fetch(params, options) {
			try {
				self.startFetching();

				const { data } = yield self.sync(api.tags.getTags, { ...params }, options);

				applySnapshot(self.items, toMapBySlug(data));
				self.finishFetching();
			} catch (error) {
				self.failFetching(error);
			}
		}),
	})