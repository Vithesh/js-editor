import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const HeaderWrapper = styled.header`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);

  .editor-logo {
    margin-left: 1rem;
  }
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <div className="editor-logo">
        <h2 className="editor-name">{props.title}</h2>
      </div>
      <div className="editor-actions">
        <Button disabled={ props.loading } onClick={ props.onClear }>Clear</Button>
        <Button disabled={ props.loading } primary onClick={ props.onSave }>
          Save
        </Button>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClear: PropTypes.func,
  onSave: PropTypes.func,
};
Header.defaultProps = {
  loading: false,
  onClear: null,
  onSave: null,
};

export default Header;
