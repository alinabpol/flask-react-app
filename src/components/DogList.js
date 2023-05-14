import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import DogContainer from "./DogContainer";

const DogList = (props) => {


    const loaded = () => {
        return (
          <div className="dog-container">
            <h2>Dog Container</h2>
            {props.dogs.map((dog) => (
                <div clasName="dogs-details">
                <h2>Name: {dog.name}</h2>
                <h2>Age: {dog.age}</h2>
                <h2>Breed: {dog.breed}</h2>
                </div>
            ))}
          </div>
        ) 
      }
      return props.dogs ? loaded() : <h1>Loading...</h1>;
    }
    
    export default DogList;
    