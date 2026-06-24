import React from 'react'
export default function Greeting(props){
    return(
        <div>
            <h3>Hello, {props.fn}!, Your age is {props.age}</h3>
            <h3>The favcolor is {props.favcolor}</h3>
        </div>
    )
}