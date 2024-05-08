// import { Fragment } from "react";
// import MainHeader from "./main-header";

// export default function Layout(props){
//     return <Fragment>
//         <MainHeader />
//         <main>
//             {props.children}
//         </main>
//     </Fragment>
// }

import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '@/components/ui/notification';
import NotificationContext from '@/store/notification-context';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      <MainHeader />
      <main>
        {props.children}
        {activeNotification && (
          <Notification
            title={activeNotification.title}
            message={activeNotification.message}
            status={activeNotification.status}
          />
        )}
      </main>
    </Fragment>
  );
}

export default Layout;