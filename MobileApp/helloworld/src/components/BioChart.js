import { IonCard, IonCardContent, IonCardTitle, IonHeader } from '@ionic/react';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts';

const data = [
    { date: '2020-02-01', physical: 0.99, emotional: 0.50, intellectual: -0.25 },
    { date: '2020-02-02', physical: 0.37, emotional: -0.50, intellectual: -0.85 },
    { date: '2020-02-03', physical: -0.10, emotional: -0.90, intellectual: 0.48 }
]

function BioChart({ targetDate }) {
    return (<ResponsiveContainer width="100%" height={200}>

        <LineChart data={data}>
            <XAxis dataKey="date" />
            <Line dataKey="physical" stroke='green' />
            <Line dataKey="emotional" stroke='red' />
            <Line dataKey="intellectual" stroke='blue' />
        </LineChart>
    </ResponsiveContainer>);
}

export default BioChart;