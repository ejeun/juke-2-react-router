import React, { Component } from 'react';
import { Link, Lifecycle, RouterContext } from 'react-router';

export default class NotFound extends Component {

  // static contextTypes () {
  //   router: React.PropTypes.object.isRequired
  // }

  constructor(props){
    super(props);
    this.state = {}
  }

  // componentDidMount() {
  //   const { route } = this.props
  //   const { router } = this.context
  //   router.setRouteLeaveHook(route, this.routerWillLeave);
  // }

  // routerWillLeave() {
  //   this.props.resetState();
  // }

  render() {
    return (
      <div>
        <h3>404 Page not found</h3>
        <p>This is why we can't have nice things</p>
        <Link to='/albums'>Take me back where I belong!</Link>
      </div>
    );
  }
}
// onLeave={() => this.props.resetState()}