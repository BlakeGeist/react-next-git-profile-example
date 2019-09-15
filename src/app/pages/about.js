import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/features/Header';
import axios from 'axios';
import Main from '../layouts/Main';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
      return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    //this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Main>
        <h1>About the github cards app</h1>
      </Main>
    )
  }
}
const mapDispatchToProps = {  }
export default connect(
  null,
  mapDispatchToProps
)(Index)
