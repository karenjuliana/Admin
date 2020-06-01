import React, { Component } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Navleft from './Navleft';

class LayoutCompleted extends Component {
  
    render() {
        return (
            <div className="body">
                <Head>
                    <title>MICOMCO :D </title>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                 <link href="/fontawesome-free-5.13.0-web/css/all.css" rel="stylesheet" /> 
                </Head>
                <Navbar />
                <div className="nav">
                    <div className="navleft">
         
                        <Navleft />
                    </div>
                    <div className="section">
                        {this.props.Children}
                    </div>
                </div>
                <style jsx>{`
        .nav{
            margin: 0px;
        }
        .navleft{
            width:10%;
            height:100%;
        }
        .section{
            width:90%;
            padding:20px;
        }
    
        
        `}</style>
            </div>


        );
    }
}
export default LayoutCompleted;
