import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'
const Dashboard = () => {

    const [options,setOptions] = useState({})
    const data = {
          
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      
      
      };
    

    return (
        <div>
              <ReactApexChart options={data.options} series={data.series} type="donut" width={500} height={320} />
        </div>
    );
};

export default Dashboard;