import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import slug from 'slug';

import LoadingMessage from './LoadingMessage';

const SidebarWrapper = styled.aside`
  padding: 2rem 0;
`;

const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const LinkWrapper = styled.li`
  margin-bottom: 0.5rem;
  a {
    color: #666;
    font-size: 0.9rem;
  }
`;

const CustomLink = ({ to, children }) => {
  return (
    <Route
      path={to.pathname}
      children={({ match }) => (
        <LinkWrapper>
          <Link to={to} style={{ fontWeight: match ? 'bold' : 'normal' }}>
            {children}
          </Link>
        </LinkWrapper>
      )}
    />
  );
};

const Sidebar = ({
  title = '',
  list = [],
  loading = false,
  match,
  location
}) => {
  return (
    <SidebarWrapper>
      <SidebarTitle>{title}</SidebarTitle>
      {loading ? (
        <LoadingMessage text={`Loading ${title}`} />
      ) : (
        <ul>
          {list.map(item => (
            <CustomLink
              key={item}
              to={{
                pathname: `${match.url}/${slug(item)}`,
                search: location.search
              }}
            >
              {item}
            </CustomLink>
          ))}
        </ul>
      )}
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Sidebar;
