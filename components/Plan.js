import React from 'react';
import Page from "./Page";
import ListView from './src/ListView_Plan';

class Plan extends React.Component {

    render() {
        return (
            <Page >
                <ListView/>
            </Page>
        );
    }
}


export default Plan
