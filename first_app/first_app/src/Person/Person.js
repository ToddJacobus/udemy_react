// creating a new component
// components are fundamentally functions that return jsx that gets compiled into html
// of course, you need to import React in order to do this
import React from 'react';

// the props key word allows us to add custom attributes to our component
// NOTE: when setting props for a class-based component, you have to call this.prop
// because it is a attribute of the class.
// "person" here is a method, so we call props.name (since it's probably a javascript object)
const person = (props) => {
	// the curly braces allow us to inject javascript into a jsx element
	// note: you can only call one-line expressions or functions
	return <p> I am {props.name} and totally a {props.type} human who is {Math.random() * 30} years old. {props.sound} </p>

};


export default person;
