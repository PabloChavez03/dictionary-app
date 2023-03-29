// import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Dictionary from "./components/Dictionary/Dictionary";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import results from "./mocks/WithResults.json";
import { adapterApi } from "./utils/adapterApi";

// const API_DICTIONARY = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// const URL_DEMO = API_DICTIONARY + "bomb";

function App(): JSX.Element {
  // const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetch(URL_DEMO)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setLoading(true);
  //       setResult(json);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  const wordSearch = adapterApi(results[0]);

  return (
    <main className={styles.main}>
      <Header />
      {/* {loading ? <Loader /> : } */}
      <Dictionary wordSearch={wordSearch} />
    </main>
  );
}

export default App;
