import React from 'react';
      
class Navbar extends React.Component {
    render() {
             return (

            <div className="principalNav">
                <nav className="nav">
                    <div className="titlenav">  <span> <b> Micomco Panel Interno</b></span>
                    </div>
                    <div className="finalnav">
                        <span className="user"> <i className="fas fa-user-astronaut"/> &nbsp;Gustavo Laverde</span>
                        <button className="myaccount">My Account</button>
                        <button className="logout">Logout</button>
                    </div>
                </nav>
                <style jsx>{`
                  .nav{
                    width: 97.4%;
                    height: 75px;
                    background: rgb(255, 255, 255);
                    box-shadow: 1px 1px rgba(134, 130, 130, 0.349);
                    position: fixed;
                    display: flex;
                    font-size: 23px;
                    padding: 1% 1% 0% 2%;
                    color: rgb(70, 70, 70); 
                    position:relative; 
                    font-size: 20px;
                    font-family: Arial;
                  }
                  .titlenav{
                     margin-right: auto;
                        margin-top: 1%;
                        }
                        .finalnav{
                            margin-right: 2%;
                            display: flex;
                            }
                            faUserAstronaut{
                                color: blue;
                            }

                        .user{ 
                             display: flex;
                             margin-top: 2%;
                             }
                        .myaccount {
                            border: 1px solid rgb(59, 95, 214);
                            background: white;
                            color: rgb(59, 95, 214);
                            border-radius: 4px;
                            margin-right: 26px;
                            margin-left: 50px;
                            width: 157px;
                            height: 50px;
                            font-size: 16px;
                            font-family: Arial;
                        }

                        .logout {
                            text-decoration: none;
                            border: 1px solid rgb(255, 0, 0);
                            background: white;
                            color: rgb(255, 0, 0);
                            border-radius: 4px;
                            margin-right: 25px;
                            width: 132px;
                            height: 50px;
                            font-size: 16px;
                            font-family: Arial;
                        }
              
                        .myaccount:hover {
                            background-color: rgb(59, 95, 214);
                            box-shadow: 0 4px 16px rgb(59, 95, 214);
                            color: rgb(255, 255, 255);
                            /*transform: scale(1.1);
                        transition: 0.1s;*/
                        }

                        .logout:hover {
                            background-color: rgb(255, 0, 0);
                            box-shadow: 0 4px 16px rgb(255, 0, 0);
                            color: rgb(255, 255, 255);
                        }
                  `}
                </style>

            </div>
        );

    }
}
export default Navbar;