import React from 'react';
import NavigationBar from '../Components/navbar';
import Signup from '../Components/signup';


export default function SignUp(){
    return(
        <div>
            <NavigationBar name="HOME" route="/home"/>
            <Signup/>
            
        </div>
    )
}