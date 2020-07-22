import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import Header from './Header'
const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Launch />} >
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Launch() {
  return (
    <center>
      <div style={{fontFamily: 'Montserrat'}}>
      <br/><br/>
      <Link to="" style={{textDecoration:'none',color:'black'}}><h1>Launch</h1></Link>
      <hr/><br/>
      <Outlet />
      </div>
      </center>
  );
}
function LaunchIndex() {
  return (
    <div className="row">
      {Object.entries(shoes).map(([slug, { img, name }]) => (
        <div className="col-md-4" style={{padding:'10px',}} key={slug}>
         
          <Link to={`/${slug}`}>
            
            <img width="300" src={img} alt={name} />
          </Link>
          <h4> {name}</h4>
        </div>
      ))}
      </div>
    
  );
}
function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];
  const { name, img } = shoe;
  return (
    <div>
      <h1> {name} </h1>
      <img src={img} alt={name} width="200" />
    </div>
  );
}

export default App;
