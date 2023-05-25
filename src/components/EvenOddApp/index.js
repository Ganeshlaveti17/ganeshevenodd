// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickbutton = () => {
    this.setState(prevState => ({
      count: prevState.count + parseInt(Math.random(0, 1) * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Count {count}</h1>
          <p> {count % 2 === 0 ? 'Count is Even' : 'Count is Odd'}</p>
          <button type="button" onClick={this.onClickbutton}>
            Increment
          </button>
          <p>*increase by random Number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
