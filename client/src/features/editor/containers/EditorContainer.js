import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Query, Mutation } from 'react-apollo';
import MonacoEditor from '../components/MonacoEditor';
import { LOAD_EDITOR_CONTENT_QUERY } from '../queries';
import { SAVE_EDITOR_CONTENT_MUTATION } from '../mutations';

// editor options
const monacoOptions = {
  theme: 'vs-dark',
  language: 'javascript',
};

// save editor content function
const saveContent = (saveFn, id, code) => {
  return saveFn({
    variables: {
      input: {
        id,
        code,
      },
    },
  });
};

// editor container component
const EditorContainer = () => {
  const [code, setCode] = useState(null);
  return (
    <Query query={ LOAD_EDITOR_CONTENT_QUERY }>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        // ObjectID
        const id = data.editor.id;

        return (
          <Wrapper>
            <Mutation mutation={ SAVE_EDITOR_CONTENT_MUTATION }>
              {(save, { loading }) => {
                return (
                  <Header
                    title="JS Editor"
                    loading={ loading }
                    onSave={ async () => {
                      // todo: error handling
                      await saveContent(save, id, code !== null ? code : data.editor.code);
                    } }
                    onClear={ async () => {
                      if (window.confirm('Do you want to clear?')) {
                        // todo: error handling
                        await saveContent(save, id, '');
                        setCode('');
                      }
                    } }
                  />
                );
              }}
            </Mutation>
            <div className="editor-panel">
              <MonacoEditor
                value={ code }
                options={ monacoOptions }
                initialValue={ data.editor.code }
                onChange={ value => setCode(value) }
              />
            </div>
          </Wrapper>
        );
      }}
    </Query>
  );
};

// styles
const Wrapper = styled.div`
  .editor-panel {
    padding: 1rem;
    height: calc(100vh - 100px);
  }
`;

export default EditorContainer;
