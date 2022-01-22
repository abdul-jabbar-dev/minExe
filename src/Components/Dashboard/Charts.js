import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { data } from '../../Api/Chart';
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {

    return (
        <div >
            <Pie  data={data} />
        </div>
    );
};

export default Charts;