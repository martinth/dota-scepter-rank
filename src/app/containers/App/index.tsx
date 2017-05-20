const appConfig = require('../../../../config/main');

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';

const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={`${style.AppContainer}`}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <section className="container">
          {this.props.children}
        </section>
      </section>
    );
  }
}

export {  App }
