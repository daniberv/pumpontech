

import { IUserModel } from "./model"
import { applySnapshot, flow } from "mobx-state-tree"

export default (self: IUserModel) => 
	({
		createWallet: flow(function* createWallet() {
            try {
                self.isWalletCreating = true;

                // MOCK
                const { data } = {
                    data: {
                        mnemonics: ['house', 'house', 'house', 'house', 'house', 'house', 'house', 'house', 'house', 'house', 'house', 'house'],
                        wallet: '0x12342123124123137812381',
                    }
                }

                self.wallet = data.wallet;
                self.wallet_type = 'inner';
                self.mnemonics = data.mnemonics;
                
                self.isWalletCreating = false;
                self.isWalletCreated = true;
            } catch (error) {
                self.isWalletCreating = false;
            }
        }),
        finishOnboarding() {
            self.isWalletOnboardingFinished = true;
            self.isAuth = true;
        },
	})