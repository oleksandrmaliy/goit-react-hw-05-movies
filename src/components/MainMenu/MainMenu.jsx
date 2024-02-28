import styles from './MainMenu.module.css';

const mainMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a className={styles.link} href="/">
          Home
        </a>
      </li>
      <li>
        <a className={styles.link} href="/movie">
          Movie
        </a>
      </li>
    </ul>
  );
};

export default mainMenu;
