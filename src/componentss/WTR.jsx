import React from 'react';

const WTR = () => {

    let person = {
        myName : "James",
        age : 26,
        location: "America"
    }
    let colors =["red", "blue", "green"]
      
    let fruitName = "fruit";
      
     let fruits = [
        {id:1, name:"Apple", color: "green", size: 2},
        {id:2, name:"Banana", color: "green", size: 4},
        {id:3, name:"Orange", color: "orange", size: 2}
     ]
    return (
        <div>
            <h1>welcome everyone</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, sit.</p>
            <ul>
               <li>One</li>
               <li>Two</li>
               <li>Three </li>
            </ul>

           <h1>Perosn</h1>
            {/* <h4>My name is: {person.myName}</h4> */}
           <h4>My name is {person.myName ? person.myName : "Unknown"} </h4>
           <p>i am: {person.age}</p>

           {colors.length > 0 && <h2>You have {colors.length} colors</h2>}

           <h2>{fruitName? fruitName : "Unknown"}</h2>

           {fruits.length > 0 && <h4>You have {fruits.length} fruits</h4>}


           {
                fruits.map((fruit)=>(
                    <div key= {fruit.id}>
                        <p>{fruit.name} is {fruit.color} and it weighs {fruit.size} grams</p>
                    </div>
                ))
            }


        </div>
    );
}

export default WTR;
