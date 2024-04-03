import React from 'react';

import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinkComponent = ({ title,links, location }) => (
  <div>
    <h5>{title}</h5>
    <ul>
      {links.map((link, index) => (
        <SidebarLinkItem key={index} {...link} location={location} />
      ))}
    </ul>
  </div>
);

export default SidebarLinkComponent;