import { useAuth } from '@/providers/AuthProvider';
import styles from './UserProfile.module.scss'
import { useEffect, useRef, useState } from 'react';

export const UserProfile = () => {
    const { userName } = useAuth();
    const [image, setImage] = useState(null);
    const [imageSource, setImageSource] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [newUserName, setNewUserName] = useState(userName || "")

    let fileRef = useRef()

    const importData = () => {
		let input = fileRef.current;
        
		input.onchange = () => { 
            let file = input.files[0]
            let clone = new File([file], file.name, {type: file.type})
            setImageSource(clone)
			setImage(URL.createObjectURL(file))
		}
		input.click();
	}

    const updateUserName = (e) => {
        setNewUserName(e.target?.value)
    }

    return (
        <>
            <div className={styles.wrapper}>
                <input ref={fileRef} type="file" style={{'display': 'none'}} accept="image/*" />
                    <div className={styles.placeholder_image} style={{backgroundImage: `url(${image})`}}
                        onClick={importData}>

                    </div>
                <div className={styles.input_wrapper}>
                    <div className={styles.input}>
                        <label htmlFor="username">Имя</label>
                        <input id="username" type="text" value={newUserName} onChange={updateUserName} />
                    </div>
                </div>
            </div>
            <div className={styles.input_wrapper}>
                <button className={styles.save_btn}>Сохранить</button>
            </div>
        </>
    )
}