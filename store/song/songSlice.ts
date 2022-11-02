import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    songs: [
      {
        wrapperType: null,
        artistId: null,
        collectionId: null,
        artistName: null,
        collectionName: "A",
        collectionCensoredName: null,
        artistViewUrl: null,
        previewUrl: null,
        description: null,
      },
      {
        wrapperType: null,
        artistId: null,
        collectionId: null,
        artistName: null,
        collectionName: "B",
        collectionCensoredName: null,
        artistViewUrl: null,
        previewUrl: null,
        description: null,
      },
      {
        wrapperType: null,
        artistId: null,
        collectionId: null,
        artistName: null,
        collectionName: "C",
        collectionCensoredName: null,
        artistViewUrl: null,
        previewUrl: null,
        description: null,
      },
      {
        wrapperType: null,
        artistId: null,
        collectionId: null,
        artistName: null,
        collectionName: "D",
        collectionCensoredName: null,
        artistViewUrl: null,
        previewUrl: null,
        description: null,
      },
      {
        wrapperType: null,
        artistId: null,
        collectionId: null,
        artistName: null,
        collectionName: "E",
        collectionCensoredName: null,
        artistViewUrl: null,
        previewUrl: null,
        description: null,
      },
    ],
  },
  reducers: {
    setSong: (state, action) => {
      state.songs = action.payload;
    },
  },
});

export const { reducer, actions } = songSlice;
export const { setSong } = songSlice.actions;
