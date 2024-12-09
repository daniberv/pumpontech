import style from './JettonMenu.module.scss'

const items = [
    {
        link: 'info',
        url: (id) => `/jettons/${id}`,
        title: 'Инфо'
    },
    {
        link: 'legend',
        url: (id) => `/jettons/${id}/legend`,
        title: 'Легенда'
    },
    // {
    //     link: 'chat',
    //     url: (id) => `/jettons/${id}/chat`,
    //     title: 'Чат'
    // },

    {
        link: 'holders',
        url: (id) => `/jettons/${id}/holders`,
        title: 'Холдеры'
    },
    {
        link: 'transactions',
        url: (id) => `/jettons/${id}/transactions`,
        title: 'Транзакции'
    },
];

export const JettonMenu = ({ jetton, active, onChange }) => {
    const change = (value) => {
        onChange(value);
    }

    return (
        <div className={style.wrapper}>
            {items.map(item => (
                <span key={item.link}>
                    {item.link === active ?
                        <div className={style.active_item}>{item.title}</div> :
                        <div className={style.item} onClick={() => onChange(item.link)}>{item.title}</div>
                    }
                </span>
            ))}
        </div>
    )
}