import React from 'react';
import styled from 'styled-components';

const NotFoundMessage = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20vh;

  .smaller {
    font-size: 1.5rem;
  }
`;

const NotFound = () => {
  return (
    <NotFoundMessage>
      404 <br /> <span className='smaller'>Cannot find what you want</span>
    </NotFoundMessage>
  );
};

export default NotFound;
