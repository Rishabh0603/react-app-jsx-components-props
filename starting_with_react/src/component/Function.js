import React from 'react'

export default function Profile(props){
    

    return(
            <div>
               <h1>{props.Name}</h1>
                <h2>{props.age}</h2>
                 <h3>{props.hometown}</h3>
            </div>
         )
}