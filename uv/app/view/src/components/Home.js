import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>  
                <h2 align="center">Welcome to the Inventory Management page of Új Világ</h2>
                <h5>If you click View, then you can check who is responsible for a certain distributed product.
                    <br />You might want to filter or search for a product based on its name, the system is capable of handling those behaviors, so go ahead.
                    <br />If you want to register a new product then you should visit the Insert page.
                </h5>
            </div>
        )
    }
}