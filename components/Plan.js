import React from 'react';
import Page from "./Page";
import ListView from './src/ListView_Plan';
import dataSet from "../dataSet/dataSet";

class Plan extends React.Component {
    componentDidMount() {
        // dataSet._dataSetTest()
    }

    render() {
        return (
            <Page >
                <ListView/>
            </Page>
        );
    }
}


export default Plan
