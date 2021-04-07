import React from 'react';
import styles from './BaseStyleLayout.module.css'

export const BaseLayout = ({children}) => {

    return (
        <div className={styles.mainWrapper}>
            <header>CINEMA</header>
            <main>
                {children}
            </main>
            <footer>Зворотній зв'язок:
                info@gmail.com</footer>
        </div>
    )
}