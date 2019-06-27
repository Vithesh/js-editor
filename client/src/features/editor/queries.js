import gql from 'graphql-tag';

export const LOAD_EDITOR_CONTENT_QUERY = gql`
  query editor {
    editor {
      id
      code
      type
    }
  }
`;
