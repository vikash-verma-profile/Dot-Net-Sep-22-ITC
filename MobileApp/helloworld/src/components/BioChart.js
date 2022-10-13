import { IonCard, IonCardContent, IonCardTitle, IonHeader } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';

import { calculateBioSeries } from './calculations';

// const data = [
//     { date: '2020-02-01', physical: 0.99, emotional: 0.50, intellectual: -0.25 },
//     { date: '2020-02-02', physical: 0.37, emotional: -0.50, intellectual: -0.85 },
//     { date: '2020-02-03', physical: -0.10, emotional: -0.90, intellectual: 0.48 }
// ]

function BioChart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBioSeries(birthDate, startDate, 31);

    return (<ResponsiveContainer width="100%" height={200}>

        <LineChart data={data}>
            <XAxis dataKey="date" />
            <Line dot={false} dataKey="physical" stroke='green' />
            <Line dot={false} dataKey="emotional" stroke='red' />
            <Line dot={false} dataKey="intellectual" stroke='blue' />
        </LineChart>
    </ResponsiveContainer>);
}

export default BioChart;