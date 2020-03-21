import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logo from 'assets/icons/logo.svg';

const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  padding: 25px 0;
  background: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 72px;
  height: 45px;
  background: url(${logo});
  background-position: 50% 50%;
  background-size: 80%;
  background-repeat: no-repeat;
  margin-bottom: 100px;
`;

const StyledLinkList = styled.ul`
  list-style: none;
  margin: 0 0 300px;
  padding: 0;
`;

const StyledLogoutIcon = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <SidebarWrapper activeColor={pageType}>
    <StyledLogoLink to="/" />
    <StyledLinkList>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinkList>
    <StyledLogoutIcon as={NavLink} to="/logout" icon={logoutIcon} />
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageType: 'notes',
};

export default Sidebar;
