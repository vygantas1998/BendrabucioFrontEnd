
import React, { Component } from 'react';
import classes from './Table.module.css';

class Table extends Component {
  render() {
    return (
      <div>
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pavadinimas</th>
                    <th>Aprašymas</th>
                    <th>Užsakyta iki</th>
                    <th></th>
                    <th>Cuteness over 9000</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td><img src="https://media3.giphy.com/media/yXBqba0Zx8S4/200w.webp?cid=3640f6095c850267504446416344291e"/></td>
                    
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td><img src="https://media3.giphy.com/media/3o6Zt3KyN0vd1S97d6/200w.webp?cid=3640f6095c850383344a576551df31c5"/></td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td><img src="https://media3.giphy.com/media/X8bKCalHrs7lTKqttE/200w.webp?cid=3640f6095c84f559433457576f74e5f3"/></td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td><img src="https://media0.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=3640f6095c850202557178784946b204"/></td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td>hi</td>
                    <td><img src="https://media1.giphy.com/media/gqjWADzYxnCCs/giphy.gif?cid=3640f6095c84fc4b536b57445510affc" alt="unicorn GIF"></img></td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
