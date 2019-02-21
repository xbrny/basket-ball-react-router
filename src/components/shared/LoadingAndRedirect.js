import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoadingMessage from '../LoadingMessage';
import { TeamInfoWrapper } from '../TeamInfo';

const LoadingAndRedirect = ({
  render,
  isLoading,
  objectToCheck,
  listToCheck = false,
  listItem,
  message
}) => {
  if (isLoading || objectToCheck === null) {
    return (
      <TeamInfoWrapper>
        <LoadingMessage text={message} />
      </TeamInfoWrapper>
    );
  }

  if (listToCheck) {
    if (!listToCheck.includes(listItem)) {
      return <Redirect to='/' />;
    }
  }

  return render(objectToCheck);
};

LoadingAndRedirect.propTypes = {
  render: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  objectToCheck: PropTypes.any,
  listToCheck: PropTypes.array,
  listItem: PropTypes.node,
  message: PropTypes.string.isRequired
};

export default LoadingAndRedirect;
