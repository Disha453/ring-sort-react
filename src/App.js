

import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [Ring, setRing] = useState([]);
  const [filterPhoto, setFilterPhoto] = useState()


  const ring = () => {
    axios.get('http://localhost:3002/ring')
      .then((res) => {
        setRing(res.data)
        setFilterPhoto(res.data)
        console.log(res?.data);
      })
      .catch(e => console.log(e));
  }


  useEffect(() => {
    console.log("hello")
    ring();
  }, []);



  const filterfunction = (str) => {
    if (str === "All") {
      setFilterPhoto(Ring);
    } else {
      setFilterPhoto(Ring.filter((item) =>
        item.type.toLowerCase().includes(str.toLowerCase())
      ));
    }
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}><u>*Rings*</u></h1>
      <div className="option">
        <select onChange={(e) => filterfunction(e.target.value)}>
          <option value="All">All</option>
          <option value="Silver">Silver</option>
          <option value="Golden">Gold</option>
          <option value="RoseGold">Rose Gold</option>
          <option value="Dimand">Dimand</option>
        </select>
      </div>
      <div>
      </div>

      {filterPhoto?.map((item, index) => {
        return (
          <>
            <div className="">
              <div className="rings">
                <img src={item.image_url} alt={item.name} className="rings2" />
                <div className="fish">
                  <h2>{index + 1}</h2>
                  <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  );
}

export default App;
