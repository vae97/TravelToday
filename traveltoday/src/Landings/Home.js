import React from 'react';
import NavigationBar from '../Components/navbar';
import Div1 from '../Components/div1'
import Div2 from '../Components/div2'
import Div3 from '../Components/div3'
import Div4 from '../Components/div4'


export default function Home(){
    return(
        <div>
            <NavigationBar name="LOGIN" route="/signin"/>
            <Div1/>
            <Div2/>
            <Div3/>
            <Div4/>
        </div>
    )
}