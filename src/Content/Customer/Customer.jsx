import * as React from 'react';
import { Chart } from "react-google-charts";
import {useSelector} from "react-redux";

export default function PieCharts() {

    // const product = useSelector(state => state.Reducer.Product)
    // let First = 0
    // let Second = 0
    // let Third = 0
    //
    //
    //
    // const Prod = product.filter(item => {
    //     if(item.category !== null) {
    //         return {item}
    //     }
    // })

    // const Pie = Prod.map((item) => item.category)
    // for (const pieElement of Pie) {
    //     if (pieElement ===  '1'){
    //         First++
    //     }
    //     if (pieElement === '2'){
    //         Second++
    //     }
    //     if (pieElement === '3'){
    //         Third++
    //     }
    // }

    return (

        <Chart
            className={'PieCharts'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['First', 66],
                ['Second', 88],
                ['Third', 77],

            ]}
            options={{
                title: '',
                pieHole: 0.3,
            }}
            rootProps={{'data-testid': '3'}}
        />
    );
}