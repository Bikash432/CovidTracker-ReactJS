import React from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import styles from './App.module.css';
import coronaimage from '../images/coronaviruss.jpg';

import {fetchData} from './Api/index';

class App extends React.Component{
     state={
         data:{},
         country:''
     }

   handleCountryChange=async (country)=>{
        const fetchedData=await fetchData(country);
       this.setState({data:fetchedData,country:country })
      
   }  


   async componentDidMount(){
        const fetchedData= await fetchData();
        this.setState({data:fetchedData}); 
        
    }
   
    render(){
        const {data,country } =this.state;
        return(
            <div className={styles.container} >
                <h1>Covid_19 Tracker 2020 by Bikash Thapa Magar!</h1>
                <Cards data={data}/>
                <CountryPicker  handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;