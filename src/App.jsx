import axios from 'axios'
import { useState } from 'react'
import './main.scss'


import Daily from './components/Daily'

const api = {
  key: 'd3276c817ab7f43bff40a93e9164bb01'
}

function App() {
  
  // State
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('')


  //URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}`


  //Date 
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   const dateBuilder = (d) => {

    let day = days[d.getDay()]
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date} ${month} ${year}`

  }


  // Time
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time)

    setInterval(()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }, 1000)


  // Search Bar
  const getWeather = (e) => {
    if(e.key === 'Enter') {
      // Call API
      axios.get(url)
      .then(res => res.data)
      .then(result => {
        console.log(result);
        setWeather(result)
        setCity('')
      })
    } 
  }

  
  return (
    <div className="app">
      
      <div className="container">
        
        <div className="datetime">
          <b className="date">{dateBuilder(new Date())}</b>
          <p style={{margin: 0, textAlign: 'center', fontSize: '20px'}}>{ctime}</p>
        </div>

        {/* Input Search */}
        <div className="search">
          <input 
            type="text" 
            placeholder="Search for a City...." 
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            onKeyPress={getWeather}
          />
        </div>


        {/* Nhận được dữ liệu */}
        {
          typeof weather.main != 'undefined' ? 
          (
            <>
            {/* Thời tiết */}
              <Daily 
                city={weather.name}
                country={weather.sys.country}
                temp={Math.round(weather.main.temp)/10}
                weather={weather.weather[0].main}
                wind={weather.wind.speed}
              />
            </>
            
          ) : (
            <div className="weather-container">
              <div className="location">
                <h1 style={{fontSize: '16px'}}>City Not Found</h1>
              </div>
            </div>
          )
        }
        
      </div>

    </div>
  );
}

export default App;
