import { gql } from '@apollo/client';

export const GET_RATINGS = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;
