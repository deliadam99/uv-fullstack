import React, { Component} from "react";

export default class RecordsList extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.owner}
                </td>
                <td>
                    {this.props.obj.employee_id}
                </td>
                <td>
                    {this.props.obj.procurement_date}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
            </tr>
        )
    }
}