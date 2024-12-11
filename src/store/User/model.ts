import { Instance, types as t } from "mobx-state-tree"
import { Syncable } from "@/store/abstract/Syncable"
import Fetchable from "../abstract/Fetchable"
import { PointTasks } from "./PointTasks"

const UserModel = t.compose(
    t.model({
        wallet: t.maybeNull(t.string),
        wallet_type: t.maybeNull(t.union(t.literal('inner'), t.literal('external'))),
        ton: t.optional(t.number, 0),
        points: t.optional(t.number, 0),
        booster: t.optional(t.number, 0),
        ref_link: t.optional(t.string, "asb1234"),
        ref_level: t.optional(t.string, 'standart'),
        total_referrals: t.optional(t.number, 0),
        total_referrals_ton: t.optional(t.number, 0),
        total_referrals_points: t.optional(t.number, 0),
        points_level: t.optional(t.string, 'none'),
        points_completed: t.optional(PointTasks, {}),
        points_available: t.optional(PointTasks, {}),
        // balance_history: t.optional(BalanceRecords, {}),
        // points_history: t.optional(PointsRecords, {}),
    }),
    Syncable,
    Fetchable(),
).volatile(() => ({
    isWalletCreating: false,
    isWalletCreated: false,
    isWalletRestoring: false,
    isWalletOnboardingFinished: false,
    isAuth: false,
    mnemonics: []
}));

type IUserModel = Instance<typeof UserModel>

export default UserModel

export type { IUserModel }

// ton_keeper
// pu,
// public_key,
// network_id,
//
// back jwt


// inner
// init_data_row
// 
// back wallet_address
// public_key
// network_id
// mnemonics
// jwt


// для внешнего кошелька нет пополнений через рубли