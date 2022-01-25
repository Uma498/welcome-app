// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonStatusText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-app-bg-container">
        <h1 className="welcome-app-heading">Welcome</h1>
        <p className="welcome-app-description">Thank you! Happy Learning</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickSubscribe}
          >
            {this.getButtonStatusText()}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
