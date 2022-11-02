import { useState } from "react";
import * as S from "./SongListAtom";
import { Song } from "../../types/song";
import { useSelector, useDispatch } from "react-redux";
import { setSong } from "../../store/song/songSlice";
import { songSelector } from "../../store/song/songSelectors";
import { Column } from "../Layout/Column/ColumnAtom";
import { useInterval } from "../../hooks/useInterval";
import axios from "axios";

const SongList: React.FC<{}> = ({}) => {
  const { songs } = useSelector(songSelector);
  const dispatch = useDispatch();

  const rotateList = () => {
    const temp: Song[] = [...songs];
    const firstElement: Song = temp.shift();
    if (!firstElement?.delete) {
      temp.push(firstElement);
    }
    dispatch(setSong(temp));
  };

  useInterval(rotateList, 1000);

  const getPreviousList = (): Song[] => {
    return songs
      .filter((song: Song, index: number) => index < 5)
      .map((song: any) => {
        return { ...song, delete: true };
      });
  };

  const fetchSong = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    let data: Song[] = [];
    try {
      const res = await axios.get(
        `https://itunes.apple.com/search?term=${e.target.value}`
      );
      data = [...getPreviousList(), ...res.data.results];
    } catch (err) {
      data = [...songs];
    }
    dispatch(setSong(data));
  };

  return (
    <S.SongListContainer>
      <S.SongListInput type="text" onChange={fetchSong} />
      <S.SongList>
        {songs.map(
          (song: Song, index: number) =>
            index < 5 && (
              <S.SongListItem key={index}>
                {song?.collectionName}
              </S.SongListItem>
            )
        )}
      </S.SongList>
    </S.SongListContainer>
  );
};

export default SongList;
