import React from 'react'
import App from 'next/app'
import Header from '../src/Header/Header'
import Footer from '../src/Footer/Footer'

 class MyApp extends App {
     constructor(props){
         super(props)
     }
     render(){
         console.log(this.props, 'root component');
         
         return (
            <div>
                <Header />
                    {<this.props.Component />}
                <Footer />
            </div>
         )
     }
  }


  export default MyApp