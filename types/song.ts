export type Song =
  | {
      wrapperType: string;
      artistId: number;
      collectionId: number;
      artistName: string;
      collectionName: string;
      collectionCensoredName: string;
      artistViewUrl: string;
      previewUrl: string;
      description: string;
      delete?: boolean;
    }
  | undefined;
