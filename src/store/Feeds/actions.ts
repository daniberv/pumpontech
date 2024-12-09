import api from "@/api";
import { applySnapshot, flow, getRoot } from "mobx-state-tree";

const mockData = [
    {
        id: '1',
        image: 'image.png',
        title: 'Sundog',
        description: 'A divine hero in Greek mythology, the son of Zeus and Alcmene, and the foster son of Amphitryon.',
        legend: '[b]Hello world![/b]',
        symbol: '$SSA',
        price: 1.2351,
        marketCap: 894100000,
        bonding: 33,
        points: 300,
        grow24: -24,
        isGainer: true,
        booster: 32,
        supply: 5,
        totalSupply: 10000,
        liquidity: 102,
        contract: 'TRdYr8DdZyTvv9HseQomZV4iohmBEDCMFx',
        author: {
            name: 'vasya',
            wallet: 'abc123',
        },
        chart: {
            items: [
                { time: '2019-04-11', value: 80.01 },
                { time: '2019-04-12', value: 96.63 },
                { time: '2019-04-13', value: 76.64 },
            ]
        },
        links: {
            items: [
                {
                    type: 'website',
                    link: 'https://google.com',
                    title: 'google.com',
                },
                {
                    type: 'twitter',
                    link: 'https://google.com',
                    title: 'x.com',
                },
                {
                    type: 'telegram',
                    link: 'https://google.com',
                    title: 'telegram.com',
                }
            ],
        }
    },
    {
        id: '2',
        image: 'image.png',
        title: 'Sundog',
        description: 'A divine hero in Greek mythology, the son of Zeus and Alcmene, and the foster son of Amphitryon.',
        symbol: '$SSA',
        price: 1.2351,
        marketCap: 894100000,
        bonding: 33,
        points: 300,
        grow24: -24,
        isGainer: true,
        booster: 32,
        supply: 5,
        totalSupply: 10000,
        liquidity: 102,
        contract: 'TRdYr8DdZyTvv9HseQomZV4iohmBEDCMFx',
        author: {
            name: 'vasya',
            wallet: 'abc123',
        },
        chart: {
            items: [
                { time: '2019-04-11', value: 80.01 },
                { time: '2019-04-12', value: 96.63 },
                { time: '2019-04-13', value: 76.64 },
            ]
        },
        links: {
            items: [
                {
                    type: 'website',
                    link: 'https://google.com',
                    title: 'google.com',
                },
                {
                    type: 'twitter',
                    link: 'https://google.com',
                    title: 'x.com',
                },
                {
                    type: 'telegram',
                    link: 'https://google.com',
                    title: 'telegram.com',
                }
            ],
        }
    },
    {
        id: '3',
        image: 'image.png',
        title: 'Sundog',
        description: 'A divine hero in Greek mythology, the son of Zeus and Alcmene, and the foster son of Amphitryon.',
        symbol: '$SSA',
        price: 1.2351,
        marketCap: 894100000,
        bonding: 33,
        points: 300,
        grow24: -24,
        isGainer: true,
        booster: 32,
        supply: 5,
        totalSupply: 10000,
        liquidity: 102,
        contract: 'TRdYr8DdZyTvv9HseQomZV4iohmBEDCMFx',
        author: {
            name: 'vasya',
            wallet: 'abc123',
        },
        chart: {
            items: [
                { time: '2019-04-11', value: 80.01 },
                { time: '2019-04-12', value: 96.63 },
                { time: '2019-04-13', value: 76.64 },
            ]
        },
        links: {
            items: [
                {
                    type: 'website',
                    link: 'https://google.com',
                    title: 'google.com',
                },
                {
                    type: 'twitter',
                    link: 'https://google.com',
                    title: 'x.com',
                },
                {
                    type: 'telegram',
                    link: 'https://google.com',
                    title: 'telegram.com',
                }
            ],
        }
    },
]

export default (self) => 
	({
        fetch: flow(function* fetch(params, options) {
			try {
				self.startFetching();
                const rootStore = getRoot(self);

				const { data } = yield rootStore.jettons.sync(api.jettons.getJettons, { ...params }, options);

                data.items.forEach((item) => rootStore.jettons.addOrUpdateItem(item));
                self[params?.feedType].setItems(data.items.map((item) => item.id));
				self.finishFetching();
			} catch (error) {
				self.failFetching(error);
			}
		}),
	})