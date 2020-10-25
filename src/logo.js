import React from "react";

const CaughtPok = () => {
    var date = new Date().toLocaleDateString()
  
    return <p> caught 0 right now, at the {date}</p>
  }

function Mentor(props) {
    console.log(props);
    return <span>{props.name} is the name</span>;
}

const Logo = (props) => {
    console.log(props)

    return <header>
      <div>
        <h1> welcome to the {props.appName} </h1>
        <img alt="one" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />

        <CaughtPok />
        <Mentor name="Mozafar" />
      </div>
  
    </header>
  }
  
export default Logo;