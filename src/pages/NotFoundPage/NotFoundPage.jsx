import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notfound}>
      <h2>Such page was Not Found</h2>
      <Link to="/">To Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
