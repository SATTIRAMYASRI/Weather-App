import Navbar from './components/Navbar'
import WeatherInfo from './components/WeatherInfo'
import './App.css'

const App = () => (
  <div className="home-background-container">
    <Navbar />
    <div className="filter-container">
      <WeatherInfo />
    </div>
    <footer>
      <p className="nav-heading">WEATHER PREDICTION</p>
      <p>
        <a href="cisubdcusb@gmail.com">cisubdcusb@gmail.com</a>
      </p>
      <p>copyright 2023</p>
    </footer>
  </div>
)

export default App
