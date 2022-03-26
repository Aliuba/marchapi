import React from "react"
import styles from "./BaseLayout.module.css"


export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>Header</header>
            <main className={styles.mainWrapper}>
                {children}
            </main>
            <footer>Footer</footer>

        </div>

    )

}
