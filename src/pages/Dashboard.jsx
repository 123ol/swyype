import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import box1 from "../imgs/Frame 3896 (1).svg";
import box2 from "../imgs/Frame 3896.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { LineChart } from '@mui/x-charts/LineChart';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';


const uData = [400, 300, 200, 278, 189, 239, 349,200, 278, 189, 239];
const pData = [240, 139, 280, 390, 480, 380, 430,280, 390, 480, 380];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Aug',
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const Dashboard = () => {
    return (
        <>
            <div className='top'>
          <div className='topright'>
            <h3>Welcome back , Meta</h3>
            <p>Here’s what’s happening to your portfolio today.</p>
          </div>
          <button className='topleft'>Toronet <FaCaretDown /></button>
          </div>
          <div className='box'>
            <div className='boxs'>
                <div>    <img src={box2} alt="Logo"/></div>
                <div className='boxText'>
                    <p>Total Transactions</p>
                    <h3>&#36;651,96.72</h3>
                    <div className='smalltext'>
                     <span> <FiArrowUpRight style={{color:"#000"}}/>20.9%</span>
                    <p className='stext'>+12.6k this week</p>
                    </div>
                </div>
            </div>
            <div className='boxs'>
            <div>  <img src={box1} alt="Logo"/></div>
                <div className='boxText'>
                    <p>Number of Assets</p>
                    <h3>10</h3>
                   
                </div>
          
            </div>
            <div className='boxs'>
            <div><img src={box1} alt="Logo"/></div>
                <div className='boxText'>
                    <p>Total Users</p>
                    <h3>1000.00</h3>
                 
                </div>
           
            </div>
          </div>
          <div className='chart'>
          <LineChart
      height={380}
      series={[
        { data: pData, label: 'credit', color: 'green' }, // Setting color for 'pv' line
        { data: uData, label: 'Debit', color: 'red' }, // Setting color for 'uv' line
      ]}
      xAxis={[
        { scaleType: 'point', data: xLabels },
      ]}
    />
          </div>
          <div className='bar'>
          <div className='barss'>   
           <h3>Success  rate :</h3>
           <div className='barbox'> 
    <CircularProgressbarWithChildren value={94}>
 
 
  <div style={{marginTop: -5 }}>
    <strong>94%</strong> 
  </div>
</CircularProgressbarWithChildren>

<div>
    <p>Successful : {60}</p>
    <p>Processing errors : {12}</p>
</div>
</div>

</div>

<div className='barss'>
<h3>Payment issues :</h3>
<div className='barbox'>
    <CircularProgressbarWithChildren value={6}>
 
 
  <div style={{marginTop: -5 }}>
    <strong>6%</strong> 
  </div>
</CircularProgressbarWithChildren>

<div>
    <p>Customer errors :{4}</p>
    <p>Fraud blocks :{10}</p>
    <p>System errors :{10}</p>
</div>
</div>
          
</div>
          </div>
        </>
    );
};

export default Dashboard;