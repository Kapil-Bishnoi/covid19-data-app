import React from 'react';
import './country.css';
const Country = ({covid_data}) => {
      return(
          <div className="country">
              <img src={`https://www.countryflags.io/${covid_data.CountryCode}/flat/64.png`} alt={covid_data.Country}></img>
              <h2>{covid_data.Country}</h2>
              <div className="data">
                  <p>{`Active     : ${covid_data.Active}`}</p>
                  <p>{`Confirmed  : ${covid_data.Confirmed}`}</p>
                  <p>{`Reacovered : ${covid_data.Reacovered}`}</p>
                  <p>{`Deaths     : ${covid_data.Deaths}`}</p>
              </div>
          </div>
      )
}
export default Country ;