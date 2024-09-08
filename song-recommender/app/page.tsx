import Image from "next/image";
import styles from "./page.module.css";
import SongRecommender from './song-recommender'
import Results from "./results";

export default function Home() {
  return (
    <main>
      <SongRecommender />
      <Results />
    </main>
  );
}


