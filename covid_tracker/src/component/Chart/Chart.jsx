import React,{ useState, useEffect } from 'react';
import {fetchDailyData} from '../Api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data:{confirmed,deaths,recovered},country}) => {
    const [dailyData,setDailyData]=useState([]);

   useEffect(()=>{
       const fetchAPI=async()=>{
           setDailyData(await fetchDailyData());
       }
       fetchAPI();

   });

   const LineChart=(
       dailyData.length
       ?(<Line
       data={{
           labels:dailyData.map(({date})=>date),
           datasets:[{
               data:dailyData.map(({confirmed})=>confirmed),
               label:'Infected',
               borderColor:'red',
               backgroundColor:'rgba(255,0,0,0.5)',
               fill:true
           },{
            data:dailyData.map(({deaths})=>deaths),
            label:'Deaths',
            borderColor:'#3333ff',
            fill:true
           }]
       }}
       />) :null
   );
  
   
   const barChart=(
       confirmed?
       (
          <Bar
          data={{
             labels:['Infected','Recovered','Deaths'],
             datasets:[{
                 label:'People',
                 backgroundColor:[
                     'rgba(0,0,255,0.5)',
                     'rgba(0,255,0,0.5)',
                     'rgba(255,0,0,0.5)',

                      ],
                 data:[confirmed.value,recovered.value,deaths.value]     

             }]
          }}
          option={{
              legend:{display:false},
              title:{display:true, text:`current state in ${country}`},
          }}
          
          />
       ):null
   )


   return (
       <div className={styles.container}>
           {country?barChart:LineChart}
       </div>
   )
}

export default Chart;
