import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ArtistType = new ObjectType({
  name: 'Artist',
  fields: {
    name: { type: new NonNull(StringType) },
    path: { type: new NonNull(StringType) },

    // Artist logo image URL
    logo: { type: StringType },

    // Artist Hover image URL for artists page
    hover: { type: StringType },

    // Artist Profile image URL
    picture: { type: StringType },

    bio: { type: StringType },
  },
});

export default ArtistType;
