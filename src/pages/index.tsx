import { type NextPage } from "next";
import styles from './index.module.scss'
import { api } from "~/utils/api";
import NewTweetForm from "~/components/NewTweetForm/NewTweetForm";

const Home: NextPage = () => {

  return (
      <div className={styles['home']}>
          <header className={styles['header-navbar']}>
              <h1>Home</h1>
          </header>
          <NewTweetForm/>
      </div>
  );
};

export default Home;
