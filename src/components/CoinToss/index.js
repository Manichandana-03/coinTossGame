// Write your code here
import {Component} from 'react'
import './index.css'

const imagesList = [
  {
    id: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  },
  {
    id: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
  },
]
class CoinToss extends Component {
  state = {coinValue: 0, hCount: 0, tCount: 0}

  onTossButtonClick = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({coinValue: tossResult})

    if (tossResult === 0) {
      this.setState(prevState => ({hCount: prevState.hCount + 1}))
    } else {
      this.setState(prevState => ({tCount: prevState.tCount + 1}))
    }
  }

  getFilteredImg = () => {
    const {coinValue} = this.state
    const filteredImg = imagesList.filter(each => each.id === coinValue)
    return filteredImg
  }

  render() {
    const {coinValue, tCount, hCount} = this.state
    const totalCount = hCount + tCount
    const filteredImg = this.getFilteredImg(coinValue)
    const {imgUrl} = filteredImg[0]

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="toss-result-img" />
          <button
            className="button"
            type="button"
            onClick={this.onTossButtonClick}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{hCount}</p>
            <p className="count">Tails:{tCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
