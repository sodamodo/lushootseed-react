import * as React from 'react';
import { withRouter } from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

class Root extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="root-container">
        <Header/>
        <div className={'root-children'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(Root);
