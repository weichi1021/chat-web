// import React, { Suspense } from 'react';
// import { render } from 'react-dom';
// import { Router, Switch, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';

// import '@src/modules/plugins/fontawesome.js';

// import '@forestage/assets/style/index.scss';
// import ROUTE from '@forestage/assets/definitions/routeMap.js';

// import {store, persistor} from '@forestage/store.js';
// import browserHistory from '@forestage/history.js';

// const history = syncHistoryWithStore(browserHistory, store);

// const Main = () => {
//   if (history.location.pathname === '/')
//   {
//     location.href="/admin/login";
//   }
//   return (
//     <Provider store={store}>
//       <PersistGate loading={<></>} persistor={persistor}>
//         <Router history={history}>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Switch>
//               <Route path={ROUTE.HOME} component={React.lazy(() => import('@forestage/routes/HomeContainer.jsx'))}/>

//               <Route component={React.lazy(() => import('@forestage/routes/others/NotMatch.jsx'))}/>
//             </Switch>
//           </Suspense>
//         </Router>
//       </PersistGate>
//     </Provider>
//   );
// };

// render((<Main />), document.getElementById('main'));

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>Hello World</div>, document.getElementById('app'));

