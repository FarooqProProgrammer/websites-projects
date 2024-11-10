import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled component for the button with variant styles
const ButtonItem = styled.button`
  border: 1px solid #d6ef0e;
  border-radius: 8px;

  width: 168px;
  height: 48px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;


  ${({ variant }) => variant === 'filled' && `
    background-color: #d6ef0e;
    color: #fff;
  `}

  ${({ variant }) => variant === 'outline' && `
    background-color: transparent;
    color: #d6ef0e;
  `}
`;

const Button = ({ variant = 'outline', ...props }) => {
  return <ButtonItem variant={variant} {...props} />;
};

// Prop types validation for variant and button attributes
Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'filled']),
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
