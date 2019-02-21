import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoadingMessage = styled.p`
  display: block;
  font-size: 0.9rem;
  color: #666;
`;

const Loading = ({ text = 'Loading', ...rest }) => {
  const [textState, setTextState] = useState(text);

  useEffect(() => {
    const stopper = `${text}...`;
    const intervalId = window.setInterval(() => {
      if (textState === stopper) {
        setTextState(text);
      } else {
        setTextState(prevTextState => `${prevTextState}.`);
      }
    }, 300);

    return () => window.clearInterval(intervalId);
  }, [text]);

  return <LoadingMessage {...rest}>{textState}</LoadingMessage>;
};

export default Loading;
