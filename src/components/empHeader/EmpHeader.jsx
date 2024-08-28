// import React from "react";
// import HeaderLogo from "../../assets/img/protection.png";
// import "./style.css";

// const EmpHeader = () => {
//   return (
//     <header className="emp-dash-header">
//       <div className="title">
//         <div className="emp-header-logo">
//           <img src={HeaderLogo} alt="emp-header-logo" />
//           <span className="title">
//             Health<span className="title-red">Care</span>
//           </span>
//         </div>
//       </div>
//       <ul>
//         <li>
//           <i className="fa-solid fa-bell notify-icon"></i>
//           <div className="emp-notify-panel notification">
//             <div className="emp-notify-panel-title">Notifications</div>
//             <div className="emp-notify-panel-content-group">
//               <div className="emp-notify-panel-content">
//                 <div className="emp-notify-panel-content-head">
//                   <span className="emp-notify-content-title">
//                     You got a email
//                   </span>
//                   <div className="emp-notify-control">
//                     <i class="fa-solid fa-ellipsis"></i>
//                     <div className="emp-notify-control-panel">
//                       <span className="emp-notify-control-panel-erase">
//                         <i class="fa-regular fa-trash-can control-panel-icon"></i>
//                         Erase this notification
//                       </span>
//                       <span className="emp-notify-control-panel-stop">
//                         <i class="fa-regular fa-bell-slash control-panel-icon"></i>
//                         Turn off this notification
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <span className="emp-notify-content-sub">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   Dolores, commodi eos. Recusandae ex ipsam aut! Cumque vero,
//                   nisi iste animi fuga recusandae deleniti aut, iure, eos
//                   debitis vitae quae beatae?
//                 </span>
//                 <div className="emp-notify-content-timestamp">
//                   <span className="emp-notify-content-date">
//                     25 august 2024
//                   </span>
//                   <span className="emp-notify-content-time">10:24 PM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>
//         <li>
//           <i className="fa-solid fa-user notify-icon"></i>
//           <div className="emp-notify-panel user">
//             <div className="emp-notify-panel-title">User</div>
//           </div>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default EmpHeader;

import React, { useState, useEffect, useRef } from "react";
import HeaderLogo from "../../assets/img/protection.png";
import "./style.css";

const EmpHeader = () => {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  const [isControlPanelOpen, setControlPanelOpen] = useState(false);

  const notificationRef = useRef(null);
  const userRef = useRef(null);
  const controlPanelRef = useRef(null);

  const handleNotificationClick = () => {
    setNotificationOpen(!isNotificationOpen);
    setUserOpen(false); // Close user panel when notification panel is opened
    setControlPanelOpen(false); // Close control panel when notification panel is opened
  };

  const handleUserClick = () => {
    setUserOpen(!isUserOpen);
    setNotificationOpen(false); // Close notification panel when user panel is opened
    setControlPanelOpen(false); // Close control panel when user panel is opened
  };

  const handleEllipsisClick = (e) => {
    e.stopPropagation(); // Prevent the notification panel from closing when clicking on ellipsis
    setControlPanelOpen(!isControlPanelOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserOpen(false);
      }
      if (
        controlPanelRef.current &&
        !controlPanelRef.current.contains(event.target)
      ) {
        setControlPanelOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="emp-dash-header">
      <div className="title">
        <div className="emp-header-logo">
          <img src={HeaderLogo} alt="emp-header-logo" />
          <span className="title">
            Health<span className="title-red">Care</span>
          </span>
        </div>
      </div>
      <ul>
        <li>
          <i
            className="fa-solid fa-bell notify-icon"
            onClick={handleNotificationClick}
          ></i>
          {isNotificationOpen && (
            <div
              className="emp-notify-panel notification"
              ref={notificationRef}
            >
              <div className="emp-notify-panel-title">Notifications</div>
              <div className="emp-notify-panel-content-group">
                <div className="emp-notify-panel-content">
                  <div className="emp-notify-panel-content-head">
                    <span className="emp-notify-content-title">
                      You got an email
                    </span>
                    <div className="emp-notify-control" ref={controlPanelRef}>
                      <i
                        className="fa-solid fa-ellipsis"
                        onClick={handleEllipsisClick}
                      ></i>
                      {isControlPanelOpen && (
                        <div className="emp-notify-control-panel">
                          <span className="emp-notify-control-panel-erase emp-notify-control-panel-option">
                            <i className="fa-regular fa-trash-can control-panel-icon"></i>
                            Erase this notification
                          </span>
                          <span className="emp-notify-control-panel-stop emp-notify-control-panel-option">
                            <i className="fa-regular fa-bell-slash control-panel-icon"></i>
                            Turn off this notification
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="emp-notify-content-sub">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, commodi eos. Recusandae ex ipsam aut! Cumque vero,
                    nisi iste animi fuga recusandae deleniti aut, iure, eos
                    debitis vitae quae beatae?
                  </span>
                  <div className="emp-notify-content-timestamp">
                    <span className="emp-notify-content-date">
                      25 August 2024
                    </span>
                    <span className="emp-notify-content-time">10:24 PM</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
        <li>
          <i
            className="fa-solid fa-user notify-icon"
            onClick={handleUserClick}
          ></i>
          {isUserOpen && (
            <div className="emp-notify-panel user" ref={userRef}>
              <div className="emp-notify-panel-title">User</div>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
};

export default EmpHeader;
