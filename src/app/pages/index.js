import React from 'react'
import { connect } from 'react-redux'
import ProfilesContainer from '../components/containers/ProfilesContainer';
import Header from '../components/features/Header';
import axios from 'axios';
import Main from '../layouts/Main';
import '../App.css';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    //reduxStore.dispatch(serverRenderClock(isServer))
    const apiCall = `https://api.github.com/users/blakegeist`;

    await axios.get(apiCall)
      .then((resp) => {
        reduxStore.dispatch({
          type: 'ADD_PROFILE',
          profileData: resp.data
        });
      })
      .catch((err) => {
        console.log(err)
      });

      return {isServer}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    //this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Main>
        <Header title="The GitHub Cards App " />
        <ProfilesContainer />

    </Main>
      )
  }
}
const mapDispatchToProps = {  }
export default connect(
  null,
  mapDispatchToProps
)(Index)
