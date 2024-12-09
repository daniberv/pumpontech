/* eslint-disable @typescript-eslint/naming-convention */
import type { IJettonsModel } from "./model"

export default (self: IJettonsModel) => 
	({
		getById(jettonId) {
			return self.findWhere({
				contract: jettonId
			})
		}
	})
