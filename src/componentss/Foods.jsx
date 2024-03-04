import React, {useState} from 'react';


const Foods = ({name, classes, location}) => {
    const [food, setFood] = useState("");
    const [found, setFound] = useState("unknown");

     const handleClick = (e)=>{
        // console.log(`You chose ${name}`);
        setFood(`${name} is ${classes} and it is grown in ${location}`);
     }

     const foodClick = (e)=>{
        setFound(`${name} is grown in ${location}`)
     }

    return (
        <div>
            <p><i>Food Name</i>: {name}</p>
            <p><i>Food Class</i>: {classes}</p>
            <p><i>Location</i>: {location} </p>
            <p>{food}</p>
            <p>{found}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={foodClick}>Food Class</button>
            <hr />
        </div>
    );
}

export default Foods;
