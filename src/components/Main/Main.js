import React, { Component } from 'react';
import classes from './Main.module.css';
import {createFragmentContainer, graphql} from 'react-relay';
import Table from '../Table/Main/Main'
class Main extends Component {
    render() {
        const header = [
            {value: "Nr.", inc: true},
            {value: "Pavadinimas", fieldName: "title"},
            {value: "Aprašymas", fieldName: "description"},
            {value: "Nuotrauka", fieldName: "image_url", img: true}
        ]
        return (
            <div className={classes.Main}>
                <Table data={this.props.store.washingMachines.edges} header={header}/>
            </div>
        );
    }
}
export default createFragmentContainer(Main, {
    store: graphql`
        fragment Main_store on Store{
            washingMachines{
                edges{
                    node{
                        title
                        description
                        image_url
                    }
                }
            }
        }
    `
});