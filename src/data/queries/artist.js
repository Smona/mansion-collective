import fs from 'fs';
import path from 'path';
import ArtistType from '../types/ArtistType';
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';
import { resolve as fileResolve } from '../queries/content';

const ARTIST_DIR = path.join(__dirname, './content', 'artists');

const artist = {
  type: ArtistType,
  args: {
    path: { type: new NonNull(StringType) },
  },
  async resolve(source, { path }) {
    const data = await fileResolve(source, { path: `artists/${path}` });
    data.bio = data.content;
    data.path = path;
    delete data.content;
    return data;
  },
};

const artists = {
  type: new List(ArtistType),
  resolve(source) {
    return new Promise(res => {
      fs.readdir(ARTIST_DIR, (err, files) => {
        const artistList = files.map(filename => new Promise(async (res) => {
          const artistPath = filename.split('.')[0];
          const result = await artist.resolve(source, { path: artistPath });
          result.path = artistPath;
          res(result);
        }));
        Promise.all(artistList).then(result => {
          res(result);
        });
      });
    });
  },
};

export {
  artist,
  artists,
};
