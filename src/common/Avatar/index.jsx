import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  border-radius: ${(props) => props.borderRadius || '50%'};
  overflow: hidden;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.fit || 'cover'};
`;

const Avatar = ({ src, width, height, alt, fit, borderRadius }) => {
  return (
    <AvatarContainer width={width} height={height} borderRadius={borderRadius}>
      {src ? <AvatarImage src={src} alt={alt} fit={fit} /> : <span>Avatar</span>}
    </AvatarContainer>
  );
};

// Prop validation
Avatar.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  fit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Default props
Avatar.defaultProps = {
  alt: 'Avatar',
  width: '100px',
  height: '100px',
  fit: 'cover',
  borderRadius: '50%',
};

export default Avatar;
