import React, {  useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {HiMenuAlt4} from 'react-icons/hi';

import useResizeEffect from '../../hooks/useResizeEffect';
import useClickOutside from '../../hooks/useClickOutside';
import {linksData} from '../../utils/sidebarLinks';
import SidebarLinkComponent from './SidebarLinkComponent';

const AdminSidebar = () => {
   const location = useLocation();
   const [showModal,setShowModal] = useState(false);
   const [isPhoneActive,setIsPhoneActive] = useState(innerWidth < 1100);
   const sidebarRef = useRef(null);
   
   // Update phoneActive state based on window resize
   useResizeEffect((isPhoneActive) => {
    setIsPhoneActive(isPhoneActive);
   });

   // Use the custom hook for click outside handling
  useClickOutside(sidebarRef, () => setShowModal(false)); // Close sidebar if clicked outside

  return (
    <>
      {isPhoneActive && (
        <button id='hamburger' onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}
     <aside
      ref={sidebarRef}
      style={
          isPhoneActive
            ? {
              ...phoneActiveStyle,
              left: showModal ? "0" : "-20rem",
            }
            : {}
        } >
       <h2>Logo.</h2>
         {
          linksData.map(({title,links}) => (
            <SidebarLinkComponent key={title} title={title} links={links} location={location} />
          ))
        }
       {isPhoneActive && <button id='close-sidebar' onClick={() => setShowModal(false)}>Close</button>}
     </aside>
    </>
  )
}

export default AdminSidebar;

const phoneActiveStyle = {
  width: "20rem",
  height: "100vh",
  position: "fixed",
  transition: "all 0.5s",
  top: 0
}