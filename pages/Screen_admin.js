import React from 'react';
import LayoutCompleted from "../components/index/layoutCompleted";



class Screen_admin extends React.Component {
    render() {
        return (
            <div className="principalscreen">
                <LayoutCompleted>    </LayoutCompleted>
                <div className="container1">
                    <SearchBar />
                    <ServiceTable/>
                </div>
                <style jsx>{`
                .container1{
                    padding: 1% 2% 0% 2%;
                    width: 75%;
                    height: 600px;
                    margin-top: 5%;
                    margin-left: auto;
                    margin-right: 4%;
                    box-shadow: 0px 0px 4px 1px rgb(168, 163, 163);
                    border-radius: 4px;
                    font-family: Arial;
                }
                `}</style>
            </div>
        );
    }
}
class SearchBar extends React.Component {
    state = {
        DATES: [
            { dominio: 'pollito.com'  .toLowerCase(), estado: 'activo', num_cuentas: '20', stoked: true, cuentas_activas: '5'},
            { dominio: 'gusanito.com' .toLowerCase(), estado: 'suspend by pay', num_cuentas: '6', stoked: true, cuentas_activas: '0'},
            { dominio: 'gatito.com'   .toLowerCase(), estado: 'deleted', num_cuentas: '10', stoked: false, cuentas_activas: '0' }
        ]
    }


    prueba = e => {
        e.preventDefault();
        const busqueda = this.busqueda.toLowerCase()
        this.state.DATES.map(dato => {
            if (dato.dominio === busqueda) {
                alert(` Dominio: ${dato.dominio} 
                Estado: ${dato.estado}
                ${dato.num_cuentas} cuentas de correo
                Cuentas Activas: ${dato.cuentas_activas}.`);
            } 
            
                   })

    }
    render() {
        return (
            <div className="seccion1">
                <div className="buttons">
                    <button className="boton">  <i className="fas fa-plus"/>&nbsp; Agregar un servicio</button>
                    <button className="button1"><i className="fas fa-plus" />&nbsp; Agregar varios</button>
                </div>
                <div className="barra">
                    <form onSubmit={this.prueba}>
                        <input onChange={e => this.busqueda = e.target.value}  className="search" type="text" placeholder="Dominio.com" />
                        <button type="submit" className="button2"><i className="fas fa-search" /></button>
                    </form>
                </div>
                <style jsx>{`
                        .seccion1{
                        height: 75px;
                        border-bottom: 1px solid rgba(168, 163, 163, 0.288);
                        display: flex;
                        padding: 0% 2% 0% 0%;
                        margin-bottom: 30px;
                        }
                        .buttons{
                        margin-top: 1%;
                        margin-right: auto;
                        padding: 0% 0% 0% 3%;
                        display: flex;
                        }
                        .boton, .button1{
                        height: 40px;
                        }
                        .boton, .button1, .button2, .boton3{
                        background: transparent;
                        }
                        .boton {
                        border: 1px solid rgba(56, 56, 56, 0.418);
                        color: rgb(56, 56, 56);
                        box-shadow: 2px 2px 7px 1px  rgb(168, 163, 163);
                        border-radius: 4px;
                        width: 165px;
                        margin-right: 27px;

                        }
                        .button1 {
                        border: 1px solid rgba(56, 56, 56, 0.418);
                        color: rgb(56, 56, 56);
                        box-shadow: 2px 2px 7px 1px  rgb(168, 163, 163);
                        border-radius: 4px;
                        width: 135px;
                        }
                        .barra{
                        margin-left: auto;
                        padding: 1% 3% 0% 2%;
                        display: flex;
                        }
                        .search{
                        border: 1px solid rgb(56, 56, 56);
                        color: rgb(56, 56, 56);
                        box-shadow: 1px 1px 2px 1px rgb(168, 163, 163);
                        background: transparent;
                        border-radius: 4px;
                        width: 326px;
                        height: 40px;
                        margin-right: 27px;
                        padding: 0px 0px 0px 7px;
                        }
                        .button2 {
                        border: 1px solid rgb(56, 56, 56);
                        color: rgb(56, 56, 56);
                        box-shadow: 2px 2px 7px 1px  rgb(168, 163, 163);
                        border-radius: 4px;
                        width: 45px;
                        height: 40px;
                        }
                        .boton:hover {
                        transform: scale(1.1);
                        transition: 0.2s;
                        }
                        .button1:hover {
                            transform: scale(1.1);
                            transition: 0.1s;
                        }
                        .button2:hover {
                            transform: scale(1.1);
                            transition: 0.1s;
                        }
                            `}</style>
            </div>
        );
    }
}
class ServiceTable extends React.Component {
    render() {


        return (
            <div className="seccion2">
                <table>
                    <thead>
                        <tr>
                            <th className="icono"> <label></label></th>
                            <th className="dominio"> <label>Dominio</label></th>
                            <th className="cuentas"> <label> Ctas Máx</label></th>
                            <th className="cuentas"> <label className="text">Ctas Activas</label></th>
                            <th className="fecha"> <label> Fecha de Vencimiento</label></th>
                            <th className="estado"> <label>Estado</label> </th>
                            <th className="estado"> <label>Causa</label></th>
                            <th className="icono"> <label></label> </th>
                        </tr>
                   
                    </thead>
                    <tbody> 
                    <tr>
                            <td><button className="boton3"><b><i className="fas fa-info" /></b></button></td>
                            <td>tudominio.com.co</td>
                            <td>4</td>
                            <td>3</td>
                            <td>20/05/2020</td>
                            <td>suspended</td>
                            <td>renovar</td>

                            <td><button className="boton3"><b><i className="fas fa-pencil-alt" /></b></button></td>
                        </tr>
                    </tbody>
                </table>
                <style jsx>{`
                   .seccion2{
                    padding: 1%;
                    height: 420px;
                }
                table{
                table-layout: fixed;
                width: 100%;
                border-radius: 4px;
                }

                table, th, td {
                    border: 1px solid rgb(168, 163, 163);
                    border-collapse: collapse;
                }

                .icono{
                    width: 50px;
                }
                .dominio{
                    width: 180px;
                }
                .cuentas{
                width: 140px;
                }
                .fecha{
                    width: 210px;
                    }
                .estado{
                    width: 160px;
                }
                th{
                    font-size: 18px;
                    height: 50px;
                }
                td{
                    padding: 4px 0px 3px 18px;
                    height: 50px;
                }

                .boton3 {
                    border: 1px solid rgb(56, 56, 56);
                    color: rgb(56, 56, 56);
                    box-shadow: 2px 2px 7px 1px  rgb(168, 163, 163);
                    border-radius: 9px;
                    width: 30px;
                    height: 30px;
                
                }
                .boton3:hover {
                    transform: scale(1.1);
                    transition: 0.1s;
                }

        `}</style>
            </div>
        );
    }

}

export default Screen_admin;