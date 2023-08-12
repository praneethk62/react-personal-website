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
      
      <div class="education">
        <h2>
          <u> Educational Qualification</u>
        </h2>
        <ul type="circle">
          <li>
            {" "}
            Diploma in Electronics Engineering at Government Polytechnic College
            Kannur{" "}
          </li>

          <li> Higher Secondary at Mambaram Higher Secondary School</li>
          <li> SSLC at Kadachira High School </li>
        </ul>
      </div>
      
    </>
  );
}

export default home