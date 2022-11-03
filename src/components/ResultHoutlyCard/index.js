import {Component} from 'react'
import './index.css'
import ResultHourlyCardItem from '../ResultHourlyCardItem'

class ResultHourlyCard extends Component {
  render() {
    const {temperatureMeasurement, hoursData, city} = this.props
    console.log(temperatureMeasurement, hoursData, city)
    return (
      <div className="ResultCard-container">
        <h1 className="ResultCard-heading">
          {city.toUpperCase()}{' '}
          <span className="ResultCard-temperature">
            24 <sup>0C</sup>
          </span>
        </h1>
        <p className="ResultCard-subheading">HOURLY FORECAST</p>

        <ul className="ResultCard-ul-container">
          {hoursData.map(eachhour => (
            <ResultHourlyCardItem eachhour={eachhour} key={eachhour.DateTime} />
          ))}
        </ul>
      </div>
    )
  }
}
export default ResultHourlyCard
