import gql from 'graphql-tag';

export const SAVE_EDITOR_CONTENT_MUTATION = gql`
  mutation updteEditor($input: UpdateEditorInput!) {
    updateEditor(input: $input) {
      id
      code
      type
    }
  }
`;
