
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Area,Line,ComposedChart } from 'recharts';
import './ChartCss.css'
import { useSelector} from "react-redux";






function Chart() {


    const data = [
        {name: 'Page A', uv: 400, pv: 240, amt: 240},
        {name: 'Page B', uv: 300, pv: 500, amt: 240},
        {name: 'Page C', uv: 200, pv: 400, amt: 240},
        {name: 'Page D', uv: 150, pv: 240, amt: 240},
        {name: 'Page E', uv: 350, pv: 240, amt: 240},
    ];


        return (
            <ComposedChart width={600} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#E0EBED" stroke="#E0EBED" />
                <Bar dataKey="pv" barSize={20} fill="#08A7E6" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        );

}
export default Chart


