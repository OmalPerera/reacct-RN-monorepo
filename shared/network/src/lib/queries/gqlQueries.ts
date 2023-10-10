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

export const FETCH_ANIME_LIST = gql`
  query FetchAnimeList($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        seasonYear
        title {
          english
        }
      }
    }
  }
`;
