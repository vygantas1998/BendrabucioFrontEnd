import React, { Component } from 'react';
import classes from './Table.module.css';

class Table extends Component {
  render() {
    return (
      <div>
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>Hello</th>
                    <th>Hello</th>
                    <th>Hello</th>
                    <th>Hello</th>
                    <th>Hello</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
