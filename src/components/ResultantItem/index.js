import {Component} from 'react'
import moment from 'moment'

class ResultantItem extends Component {
  render() {
    const {eachdate, Maximum, Minimum} = this.props

    const formattedDate = moment(eachdate).format('D')
    const formattedMonth = moment(eachdate).format('M')
    const avg = Math.ceil((Maximum + Minimum) / 2)
    return (
      <li className="eachItem-container">
        <p className="eachitem-date">
          {formattedDate}/{formattedMonth}
        </p>
        <p className="eachitem-date">Avg: {avg}*C</p>
        <p className="eachitem-date">
          High:{Math.ceil(Maximum)} | Low:{Math.ceil(Minimum)}
        </p>
      </li>
    )
  }
}
export default ResultantItem
