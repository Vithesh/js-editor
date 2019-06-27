import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import PropTypes from 'prop-types';

const MonacoEditor = props => {
  // editor reference
  const editor = useRef(null);

  // container element reference
  const containerRef = useRef(null);

  // on value change effect
  useEffect(
    () => {
      if (!editor.current) {
        const { options, value, initialValue } = props;
        editor.current = {
          instance: monaco.editor.create(containerRef.current, {
            value: initialValue || '',
            ...options,
          }),
          value
        };
        if (options.theme) {
          monaco.editor.setTheme(options.theme);
        }
        editor.current.instance.onDidChangeModelContent(event => {
          editor.current.value = editor.current.instance.getValue();
          props.onChange(editor.current.value, event);
        });
      } else {
        if (editor.current.value !== props.value) {
          editor.current.instance.setValue(props.value);
        }
      }
    },
    [props.value],
  );

  return (
    <div
      ref={ containerRef }
      style={ { width: props.width, height: props.height } }
    />
  );
};

MonacoEditor.propTypes = {
  initialValue: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
};

MonacoEditor.defaultProps = {
  initialValue: '',
  value: '',
  width: '100%',
  height: '100%',
  options: {},
  onChange: () => null,
};

export default MonacoEditor;
