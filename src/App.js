import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './components/Country_List/CountryList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component{
      
      constructor(){
        super();
        this.state = {
          countries : [],
          covid_data : [],
          search_field : ''
        }
      }
      async componentDidMount(){
          const resp = await fetch('https://api.covid19api.com/countries')
          const countries = await resp.json()
          this.setState({countries})

          this.state.countries.forEach(async cntry => {

              const resp = await fetch(`https://api.covid19api.com/total/country/${cntry.Slug}`)
              const data = await resp.json()
              if(data.length)
              {
                this.setState(prevState => (
                  { covid_data : prevState.covid_data.concat({...data[data.length-1], CountryCode:cntry.ISO2}) }
                ))
              }

          })
      }
      handleChange = (e) => {
             this.setState({search_field:e.target.value})
      }
      render()
      {
        const {covid_data,search_field} = this.state
        const filter_cntry = covid_data.filter(cntry =>(
            cntry.Country.toLowerCase().includes(search_field.toLocaleLowerCase())
          ))
        return (
          <div className="app">
              <h1>Covid19 Data App</h1>
              <SearchBox placeholder="Enter Country Name ..."
                         handleChange={this.handleChange} />
              <CountryList covid_data = {filter_cntry} />
          </div>
        );
      }
}
export default App;
