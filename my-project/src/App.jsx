import './App.css'
import { LineChart, Line,Legend,Tooltip,YAxis,XAxis,CartesianGrid } from 'recharts';
function App() {
  const data = [
    {name: 'Page A', uv: 400, pv: 2100, amt: 2600},
    {name: 'Page b', uv: 200, pv: 2440, amt: 3400},
    {name: 'Page c', uv: 300, pv: 2500, amt: 2700},
    {name: 'Page d', uv: 350, pv: 1400, amt: 2900}
 ];

  return (
    <>
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
</LineChart>

    </>
  )
}

export default App
