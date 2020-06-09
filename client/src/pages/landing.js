// import React, {useState, useEffect} from "react";
import React from "react";
import { Link } from "react-router-dom";
import Search from '../components/Search/Search'
// import Axios from "axios";
// import { Form, Input, Button, Segment, Grid ,Header} from "semantic-ui-react";
// import "./index.css";


const Landing =  () => {
  return (
  <div>
  <h1>This is Landing</h1>
  <div>
    <Search/>
    <form action="/api/uploadFile" enctype="multipart/form-data" method="POST"> 
        <input type="file" name="myImage" />
        <input type="submit" value="Upload a file"/>
    </form>
  </div>
  <div>
    <form action="/api/uploadRecipeImages" enctype="multipart/form-data" method="POST"> 
        Select images: <input type="file" name="recipeImages" multiple />
        <input type="submit" value="Upload Images"/>
    </form>
  </div>
  {/* <h2>User: {user}</h2> */}
  <Link to={"/login"}>
  <div className="links">Log In</div>
  </Link>
  </div>
  );
};

export default Landing;