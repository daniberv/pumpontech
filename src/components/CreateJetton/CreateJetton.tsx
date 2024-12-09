import { useState } from 'react'
import { Parser } from "react-tiny-bbcode";

import styles from './CreateJetton.module.scss'

export const CreateJetton = () => {
    const [isPreview, setIsPreview] = useState(false);
    const [bbcode, setBbcode] = useState("");

    const showPreview = () => {
        setIsPreview(true);
    }

    const hidePreview = () => {
        setIsPreview(false);
    }

    const onBbcode = (e) => {
        setBbcode(e?.target?.value)
    }

    const create = () => {
        console.log('create')
    }

    return (
        <>
            <div className={styles.inputs}>
                <input type="text" placeholder="Название" className={styles.input}/>
                <input type="text" placeholder="$Символ" className={styles.input}/>
                <input type="text" placeholder="Короткое описание" className={styles.input}/>
                <input type="text" placeholder="Сайт" className={styles.input}/>
                <input type="text" placeholder="Твиттер-Х" className={styles.input}/>
                <input type="text" placeholder="Телеграм" className={styles.input}/>
                <input type="text" placeholder="Легенда" className={styles.input} value={bbcode} onChange={onBbcode} />
            </div>

            <div className={styles.btn_wrapper}>
                <button onClick={showPreview} className='btn btn-black'>Предпросмотр</button>
                <button onClick={create} className='btn btn-purple'>Создать жетон!</button>
            </div>

            {isPreview && <div className={styles.preview} onClick={hidePreview}>
                    <div className={styles.inner_wrapper}>
                        <Parser bbcode={bbcode} />
                    </div>
                </div>}
        </>
    )
}