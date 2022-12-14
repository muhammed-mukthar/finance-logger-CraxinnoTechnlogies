import React, { useState } from "react";
import './graph.css'
import { useDispatch, useSelector } from 'react-redux';

// utils/Data.js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

function Graph() {
    const {balance,history} = useSelector(state=>state)
    const [emivalue,setEmivalue] = useState(null)
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
    
      let initialbalance=balance
      let yLabel=[];
    
      let emi=emivalue
      if(!emi){
        emi=1
        initialbalance=0
      }
      let xaxis=Math.ceil(initialbalance/emi)
      let xLabel=[];
    for(let i=0;i<=xaxis;i++){
        xLabel.push(i)
    }
    let value=initialbalance
    for(let i=0;i<=xaxis;i++)
    {
        if(value<0){
            value=0
        }
        yLabel.push(value)
        value=value-emi
    }
   
    
    //   xaxisArray.from(Array(xaxis),(_,i)=>{
    //     i+1;
    //   })
      // const labels = ;
      
      const data = {
        labels: xLabel,
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: yLabel,
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(254, 0, 0, 1)',
               
              ],
              borderWidth: 2,
            }
        ]
      }
      function calculate(e){
        e.preventDefault()
        let x=document.getElementById('abc').value
        if(balance/x>200){
            alert('you will not get a loan increse your payment')
        }else{
            setEmivalue(x)
        }
  
    
        

      }
      
    
  return (
    <div>
      <div className="inetial">
        <h1>Initial Balance:{balance}</h1>
        <div className="inputPayment">
          <p className="month">Monthly Payment</p>
          <form onSubmit={calculate} >
          <input type="number" id="abc"  />
          <button type="submit" >submit</button>
          </form>
        </div>
      </div>
      <hr />
      <div className="graph">
        <p >Balance of accounts after a numeber of months</p>
      </div >
      <div className="charhere">
      <Line options={options} data={data} />;
      </div>
   
    </div>
  );
}

export default Graph;
