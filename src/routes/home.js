import React from 'react'
// import Navbar from '../components/navbar'
    import img from "../images/praneeth.jpg"
const home = () => {
  return (
    <>
      <hr />
      <img
        className="photoright"
        src={img}
        alt=""
        width="500px"
        height="500px"
      />
      <div className="intro">
        {/* <a name="home"></a> */}
        <h1>HI ! I Am</h1> <br/>
        <h1 className="textgape">Praneeth K</h1>
        <br />
        <br />
        <br />
        <br />
      </div>
      
     
     
      
    </>
  );
}

export default home