import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  border: 2px solid #03a9f4;
  color: ${props => (props.primary ? '#FFF' : '#03A9F4')};
  background: ${props => (props.primary ? '#03A9F4' : '#FFF')};
  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
