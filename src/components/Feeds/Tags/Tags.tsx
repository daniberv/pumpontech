import { useState } from 'react'
import styles from './Tags.module.scss'
import { TagJettons } from './TagJettons';
import { GridToggler } from '@/components/GridToggler';
import { observer } from 'mobx-react-lite';
import { useFetch, useStore } from '@/providers/StoreProvider';
import { Preloader } from '@/components/Preloader';

export const Tags = observer(() => {
    const { tags } = useStore();
    const [tag, setTag] = useState(null);

    useFetch(tags);

    console.log('tags', tags.isFetched)

    const changeTag = (value: string) => {
        setTag(value)
    }

    if (!tags?.isFetched) {
        return <Preloader />
    }

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.tags}>
                    {tags?.toArray?.map(tagInner => 
                        <div key={tagInner.slug} className={tag === tagInner.slug ? `${styles.tag} ${styles.active}` : styles.tag} onClick={() => changeTag(tagInner.slug)}>#{tagInner.slug}</div>)}
                </div>
            </div>

            <div className={styles.sort_wrapper}>
                <div className={styles.sort}>
                    <GridToggler />
                </div>
            </div>

            <TagJettons tag={tag} />
        </div>
    )
})