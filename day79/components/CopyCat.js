import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {

  render() {
    const {copying, toggleTape, value, handleChange, name} =  this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name || "Tom"}</h1>
        <input type="text" 
               value={value}
               onChange={handleChange}/>
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          style={styles.imgStyles}
          onClick={toggleTape}
        />
        <p>
          {copying && value}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}



