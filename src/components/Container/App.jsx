import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '@/redux/store.js'
// import Title from '../Title';

class Layout extends PureComponent {

  render() {
    const { routeData: { routes = [] } = {} } = this.props;
    return (

      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  component={route.component}
                />
              );
            })}
            <Redirect exact from="" to="/" />
          </Switch>
        </Provider>
      </BrowserRouter>

    );
  }
}

export default Layout;
