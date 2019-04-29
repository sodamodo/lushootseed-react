import * as React from 'react';
import { withRouter } from 'react-router';
import './header.scss';
import logo from 'images/logo.png';
import Menu from './comonents/menu';

class Header extends React.Component {
  render() {
    const { history, location } = this.props;
    return (
      <div className={'header-container'}>
        <div
          className={'header-left'}
          onClick={() => {
            history.push('/');
          }}
        >
        </div>
        <div className={'header-center'}
            onClick={() => {
              history.push('/');
            }}
        >
          <h1>{this.props.title || 'Lucky Dog Agility'}</h1>
        </div>
        <div className={'header-right'}>
            <div className={'navMenu-container'}>
              <div className={'navMenu-tab'}>
                <p>Logout</p>
              </div>
            </div>

            <div className={'navMenu-container'}>
              <div className={'navMenu-tab'}>
                <p>Login</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
