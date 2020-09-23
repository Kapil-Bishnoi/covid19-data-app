import React from 'react';
import Country from '../Country/Country';
import './countrylist.css';
const CountryList = ({covid_data}) => {
    return(
          <div className="country_list">
              {
                covid_data.map(cntry => <Country key={cntry.CountryCode} covid_data={cntry} />)
              }
          </div>
    )
}
export default CountryList ;