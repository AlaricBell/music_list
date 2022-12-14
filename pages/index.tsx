import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setSong } from "../store/song/songSlice";
import { songSelector } from "../store/song/songSelectors";
import { Column } from "../components/Layout/Column/ColumnAtom";
import { Row } from "../components/Layout/Row/RowAtom";
import { ContainerFluid } from "../components/Layout/Container/ContainerAtom";
import SongList from "../components/SongList/SongList";

export default function Home() {
  const { songs } = useSelector(songSelector);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ContainerFluid>
          <Row>
            <Column size={12}>
              <SongList />
            </Column>
          </Row>
        </ContainerFluid>
      </main>
    </div>
  );
}
