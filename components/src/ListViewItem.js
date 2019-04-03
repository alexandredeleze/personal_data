import React, {Component} from 'react';
import CheckBox from './CheckBox';
import UtilsRedux from "./UtilsRedux";

class ListViewItem extends Component {
    constructor(props) {
        super(props);
        this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    }


    _onCheckBoxPressed() {
        let data = this.props.data;
        UtilsRedux._updateDataBase(data.title,data.date,data.completed,!data.priority)
    }

    render() {
        let data = this.props.data;
        return (

            <CheckBox data={data} onCheckBoxPressed={this._onCheckBoxPressed}/>

        )
    }
}

export default ListViewItem
