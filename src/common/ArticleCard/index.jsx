import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../Avatar';

const ArticleCarItem = styled.div`
  height: ${(props) => props.height || '300px'}; /* Default height of 300px */
  width: ${(props) => props.width || '100%'};
  display: flex;
  justify-content: start;
  align-items: end;
  padding: 10px;
  background-image: url(${(props) => (props.image instanceof File ? URL.createObjectURL(props.image) : props.image)});
  background-size: cover;
  border-radius: 15px;
  background-position: center;
`;

const ArticleCard = ({ image, avatarimage, width, height }) => {
  return (
    <ArticleCarItem image={image} width={width} height={height}>
      <div className='d-flex justify-content-start align-items-center gap-2'>
        <Avatar src={avatarimage instanceof File ? URL.createObjectURL(avatarimage) : avatarimage} width={80} height={80} />
        <div className='d-flex flex-column justify-content-start align-items-start'>
          <h6 className='text-white font-thin mb-0'>Owner</h6>
          <h6 className='text-white font-thin fs-5'>Osvaldo Percy</h6>
        </div>
      </div>
    </ArticleCarItem>
  );
};

// Prop validation
ArticleCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]).isRequired, // Accepts string or File
  avatarimage: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)]).isRequired, // Accepts string or File
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accepts string or number for width
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accepts string or number for height
};

// Default props
ArticleCard.defaultProps = {
  width: '100%', // Default to 100% width if not provided
  height: '300px', // Default to 300px height if not provided
};

export default ArticleCard;
