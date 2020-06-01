import React, { Children } from 'react';

class Navleft extends React.Component {

    state = { urlPresent: "" };

    componentDidMount(){
        /* Busca la ubicación actual y la convierte a srting, se limpia el link, 
        y se divide el string por el caracter . luego verifica el link actual y la llamo por / */
        const link = window.location.pathname;
        console.log(link);
        this.setState({ urlPresent: link });
       
    }

    render() {

  
        return (
            <div className="principanlsidebar">
                <div className="sidebar">
                    <div className="items">
                        <ul>
                            <li> <Sections page="dashboard" clic={this.state.urlPresent == "dashboard"}
                                label="Dashboard" font="fas fa-chart-line"/> </li>

                            <li><Sections page="Screen_admin" clic={this.state.urlPresent == "Screen_admin"}
                                label="Admin" font="fa fa-desktop"/>  </li>

                            <li> <Sections page="orders" clic={this.state.urlPresent == "orders"}
                                label="Órdenes" font="fa fa-cart-plus"/> </li>

                            <li> <Sections page="invoices" clic={this.state.urlPresent == "invoices"}
                                label="Facturación" font="fa fa-print"/> </li>

                            <li> <Sections page="support" clic={this.state.urlPresent == "soporte"}
                                label="Soporte" font="fa fa-tools"/> </li>

                            <li><Sections page="customers" clic={this.state.urlPresent == "clientes"}
                                label="Clientes" font="fa fa-users"/> </li>

                            <li> <Sections page="products" clic={this.state.urlPresent == "productos"}
                                label="Productos" font="fa fa-mail-bulk"/> </li>
                        </ul>
                    </div>
                </div>
                <style jsx>{`
                .sidebar{
                    position: left;
                    position: fixed;
                    height: calc(100% - 15px);
                    font-family: Roboto;
                }
                .sidebar .items {                   
                    width: 246px;
                    height: 100%;
                    background: rgba(216, 217, 241, 0.288);
                    padding: 8px 1px 0px 0px;
                    position: fixed;
                }
               .sidebar .items li {
                color: #717171;
                    line-height: 15px;
                  list-style:none; 
                }
                    `}
                </style>
            </div>
        );
    }
}

class Sections extends React.Component {

    render() {
        const color = this.props.pathname ? ("rgb(37, 33, 100)"): ("rgba(78, 78, 78, 0.801)")
        return (
            <div>
                <div className="container">
                    <a href={this.props.page}> <i className={` ${this.props.font} icon`} />
                        <span className="label"> &nbsp;{this.props.label}</span>
                    </a>
                </div>
                <style jsx>{`
                    .container{
                        color: ${color};
                    }
                   .active{
                       color:rgb(37, 33, 100);
                   }
                   .icon{
                        color: ${color};
                    } 
                  .label{
                      color: ${color} ! important;
                      cursor: pointer;
                  }
                    a{
                    width: 80px;
                    display: flex;
                    padding: 15px 10px 15px 10px;      
                    color: rgba(78, 78, 78, 0.801);       
                    font-size: 20px;
                    font-family: Roboto;
                    text-decoration: none;
                 
                    }
                    a:hover {
                    color: rgb(37, 33, 100);
                }                 
                    `}</style>
            </div>
        );
    }
}

export default Navleft; 