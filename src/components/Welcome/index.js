// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="welcome-app-bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button type="button" onClick={this.changeBtn}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.changeBtn}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
