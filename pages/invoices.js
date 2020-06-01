import React from 'react';
import LayoutCompleted from "../components/index/layoutCompleted";

class Invoices extends React.Component {
    render() {
        return (
            <div className="principalscreen">
                <LayoutCompleted>    </LayoutCompleted>
                <div className="container1">
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







export default Invoices;