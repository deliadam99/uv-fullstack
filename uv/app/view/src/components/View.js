import React, { useState } from "react";
import RecordsList from './RecordsList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faKey, faServer, faUser, faUserCheck, faCalendarAlt, faInfo } from '@fortawesome/free-solid-svg-icons';

export default function View({ storageData, setStorageData, isClicked, setIsClicked }) {

    
    const [filter, setFilter] = useState('');

    function itemList() {
        if (isClicked) {
            var ordered = storageData.sort((a, b) => a.name.localeCompare(b.name));
            return ordered.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(function (object, i) {
                return <RecordsList obj={object} key={i} />;
            });
        }
        else {
            return storageData.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(function (object, i) {
                return <RecordsList obj={object} key={i} />;
            });
        }
    }

    function onChangeFilter(e) {
        setFilter(e.target.value);
    }

        return (
            <div style={{marginTop: 10}}>
                <h3 align="center">Storage report</h3>
                <div className="form-group row">
                    <div className="col-3">
                        <label className="h5" htmlFor="filter"><FontAwesomeIcon icon={faFilter} /> Type to filter the list by Name:</label>
                        <input className="form-control" type="text" id="filter" name="filter" value={filter} onChange={onChangeFilter} />
                    </div>
                </div>
                <div className="form-check">
                    <label className="h5 form-check-label" htmlFor="orderbyeqname">Order by equipment name</label>
                    <input type="checkbox" className="form-check-input" id="orderbyeqname" onChange={() => (isClicked === false) ? setIsClicked(true) : setIsClicked(false)}/>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th><FontAwesomeIcon icon={faKey} /> Item ID</th>
                            <th><FontAwesomeIcon icon={faServer} /> Name</th>
                            <th><FontAwesomeIcon icon={faUser} /> Owner</th>
                            <th><FontAwesomeIcon icon={faUserCheck} /> Owner ID</th>
                            <th><FontAwesomeIcon icon={faCalendarAlt} /> Date of procurement</th>
                            <th><FontAwesomeIcon icon={faInfo} /> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemList()}
                    </tbody>
                </table>
            </div>
        );
    }
//}