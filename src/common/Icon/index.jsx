import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconItem = styled.div`
 width: 30px;
 height: 30px;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
    transition: all 0.6s ease-in-out;

 &:hover { 
    background-color: #d6ef0e;
 }
`;

const Icon = ({ children }) => {
    return <IconItem className='rounded-2'>{children}</IconItem>;
};


Icon.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Icon;
