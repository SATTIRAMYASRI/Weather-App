import {Component} from 'react'
import moment from 'moment'

class ResultHourlyCardItem extends Component {
  render() {
    const {eachhour} = this.props
    const {DateTime} = eachhour
    const time = moment(DateTime).format('LT')
    const temp = Math.ceil(eachhour.Temperature.Value)
    console.log(DateTime, temp)
    return (
      <li className="eachItem-container">
        <p className="each-time">{time}</p>
        <p className="eachitem-date">{temp}</p>
      </li>
    )
  }
}
export default ResultHourlyCardItem
