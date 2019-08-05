import React from 'react';
import { StyledHeader } from './styled';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ title, linkObject }) => (
  <StyledHeader>
    <h1>{title}</h1>
    {linkObject && (
      <span>
        <NavLink to={linkObject.url}>{linkObject.title}</NavLink>
      </span>
    )}
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
  linkObject: PropTypes.object,
};
export default Header;
