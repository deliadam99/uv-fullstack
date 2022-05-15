import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer, faUser, faCalendarAlt, faInfo, faUpload } from '@fortawesome/free-solid-svg-icons';

export default class Insert extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);

        this.state = {
            name: '',
            employee_id: '',
            date: '',
            status: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSelect(e) {
        var index = this.props.storageData.findIndex(item => item.owner === e.target.value);
        var employeeId = this.props.storageData[index].employee_id;
        this.setState({
            employee_id: employeeId
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            employee_id: this.state.employee_id,
            date: this.state.date,
            status: this.state.status
        };

        axios.post('http://localhost/uv/app/controller/backend.php', obj).then(res => console.log(res.data));

        this.setState({
            name: '',
            employee_id: '',
            date: '',
            status: ''
        })
    }

    render() {
        const { storageData } = this.props;
        const key = 'owner';
        const storageDataDistinct = [...new Map(storageData.map(item => [item[key], item])).values()];
        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Add new item to inventory</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="h5 form-group row">
                        <div className="col-3">
                            <label htmlFor="name"><FontAwesomeIcon icon={faServer} /> Name: </label>
                            <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.onChangeName} maxLength="50" />
                            <label htmlFor="owner"><FontAwesomeIcon icon={faUser} /> Owner: </label>
                            <select className="form-select" onChange={this.onChangeSelect} id="employee_id">
                                {storageDataDistinct.map((x) => <option key={x.employee_id}>{x.owner}</option>)}
                            </select>
                            <label htmlFor="procurement_date"><FontAwesomeIcon icon={faCalendarAlt} /> Date of procurement: </label>
                            <input type="date" id="procurement_date" className="form-control" value={this.state.date} onChange={this.onChangeDate} />
                            <label htmlFor="status"><FontAwesomeIcon icon={faInfo} /> Status: </label>
                            <select className="form-select" onChange={this.onChangeStatus} id="status">
                                <option key={1}>new</option>
                                <option key={2}>mid</option>
                                <option key={3}>old</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-3"><FontAwesomeIcon icon={faUpload} /> Add new item</button>
                    </div>
                </form>
            </div>
        )
    }
}