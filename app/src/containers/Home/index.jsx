import * as React from 'react';
import { observer } from 'mobx-react';
import './home.scss';
import Registration from '../Registration'

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };

  }


  render() {

    return (
        <div>
        Home!
        </div>

    );
  }
}

export default observer(HomeView);



// <div className="home-view-container">
//
//
// </div>
// <div className="list" style={backgroundColor: 'green'}>
//   <ul>
//     {() => this.returnList()}
//   </ul>
// </div>
