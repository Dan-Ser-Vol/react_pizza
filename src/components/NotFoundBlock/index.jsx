import React from 'react'
import styles from "./NotFoundBlock.module.scss"

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>&#x1f614;</span>
        <br />
        Нічого не знайденно :(
      </h1>
      <p className={styles.description}>На жаль,така сторінка відсутня в нашому интернет магазині!</p>
    </div>
  );
}

export default NotFoundBlock