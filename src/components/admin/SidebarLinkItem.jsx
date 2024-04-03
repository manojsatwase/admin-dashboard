import React from 'react';
import { Link } from 'react-router-dom';

import { isLinkActive } from '../../utils/helper';

const SidebarLinkItem = ({ url, text, Icon, location }) => (
  <li className={isLinkActive(url, location.pathname) ? 'active-link' : 'inactive-link'}>
    <Link to={url} className={isLinkActive(url, location.pathname) ? 'active-link-text' : 'inactive-link-text'}>
      <Icon />
      {text}
    </Link>
  </li>
);

export default SidebarLinkItem;