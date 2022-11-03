import {Component} from 'react'
import ResultantItem from '../ResultantItem'
import './index.css'

class ResultCard extends Component {
  render() {
    const {city, temperatureMeasurement, daysResData} = this.props
    // const {Date, Temperature} = dataReceived
    return (
      <div className="ResultCard-container">
        <h1 className="ResultCard-heading">
          {city.toUpperCase()}{' '}
          <span className="ResultCard-temperature">
            24 <sup>0C</sup>
          </span>
        </h1>
        <p className="ResultCard-subheading">DAILY FORECAST</p>

        <ul className="ResultCard-ul-container">
          {daysResData.map(eachdate => (
            <ResultantItem
              eachdate={eachdate.Date}
              Minimum={eachdate.Temperature.Minimum.Value}
              Maximum={eachdate.Temperature.Maximum.Value}
              key={eachdate.Date}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default ResultCard
