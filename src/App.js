import React from 'react';
import './App.css';
import a1 from "./ab5.png";
import a2 from "./ab6.png";
import a3 from "./ab7.png";
import a4 from "./ab1.png";
import a5 from "./ab2.png";
import a6 from "./ab3.png";
import a7 from "./ab4.png";
import a8 from "./ab8.png";
import a9 from "./ab9.png";
import a10 from "./ab10.png";
import a11 from "./ab11.png";
import a12 from "./ab12.png";
import a13 from "./ab13.png";
import a14 from "./ab14.png";
import a15 from "./ab15.png";
import BarGraph from './BarGraph';
function App() {
  const monthlyEarnings = {
    'Jan': 1000,
    'Feb': 500,
    'Mar': 2000,
    'Apr': 1000,
    'May': 1500,
    'Jun': 400,
    'Jul': 1500,
    'Aug': 2200,
    'Sep':2000,
    'Oct':1400,
    'Nov':1300,
    'Dec':1450

    // Add more months as needed
  };
  
  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo">
          <img src={a1}/>
          Dashboard
        </div>
        <ul>
          <li><span><img src={a8}/>Dashboard</span><span>{">"}</span></li>
          <li><span><img src={a9}/>Product</span><span>{">"}</span></li>
          <li><span><img src={a10}/>Customer</span><span>{">"}</span></li>
          <li><span><img src={a11}/>Income</span><span>{">"}</span></li>
          <li><span><img src={a12}/>Promote</span><span>{">"}</span></li>
          <li><span><img src={a13}/>Help</span><span>{">"}</span></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
         
          <span><b>Hello Shahrukh</b><img src={a2}/></span>
          <input type="text" placeholder={`Search...`} />
        </div>
        <div className="info-cards">
          <div className="info-card">
            <img src={a4} alt="Product" />
            <div>
            <p style={{fontSize:10,color:'gray'}}>Earnings</p>
            <p style={{fontSize:20}}><b>$198K</b></p>
            <p style={{fontSize:12}}>Up 37.8% this month</p>
          </div>
          </div>
          <div className="info-card">
            <img src={a5} alt="Customer" />
            <div>
            <p style={{fontSize:10,color:'gray'}}>Orders</p>
            <p style={{fontSize:20}}><b>$2.4K</b></p>
            <p style={{fontSize:12}}>Down 2% this month</p>
          </div>
          </div>
          <div className="info-card">
            <img src={a6} alt="Income" />
            <div>
            <p style={{fontSize:10,color:'gray'}}>Balance</p>
            <p style={{fontSize:20}}><b>$2.4K</b></p>
            <p style={{fontSize:12}}>Down 2% this month</p>
          </div>
          </div>
          <div className="info-card">
            <img src={a7} alt="Promote" />
            <div>
            <p style={{fontSize:10,color:'gray'}}>Total Sales</p>
            <p style={{fontSize:20}}><b>$89K</b></p>
            <p style={{fontSize:12}}>Up 11% this week</p>
          </div>
          </div>
        </div>
        <div style={{display:'flex',marginTop:"4%"}}>
        <div className="bar-graph">
          {/* Your bar graph component */}
          <BarGraph monthlyEarnings={monthlyEarnings} />
        </div>
        <div style={{width:"28%"}}>
          <img style={{width:"100%"}}  src={a14} />
        </div>
        </div>

        <div className="container">
      <div className="header2">
        <div className="left">
          <h2>Product Sell</h2>
          
        </div>
        <div className="right">
        <input type="text" placeholder="Search..." />
          <h5>{"Last 30 days"}<span>{">"}</span></h5>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="product-info">
                  <img src={a15} alt="Product" />
                  <div>
                  <p><b>Abstract 3d</b></p>
                  <p>Description abour text</p>
                  
                </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td><b>$45.99</b></td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <div className="product-info">
                  <img src={a15} alt="Product" />
                  <div>
                  <p><b>Surphens Illustrations</b></p>
                  <p>Description abour text</p>
                  </div>
                </div>
              </td>
              <td>32 in stock</td>
              <td><b>$45.99</b></td>
              <td>20</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
