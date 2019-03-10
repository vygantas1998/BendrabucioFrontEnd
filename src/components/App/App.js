import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import Table from '../Table/Table';
=======
import {QueryRenderer, graphql} from 'react-relay';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import Main from '../Main/Main';

function fetchQuery(operation, variables) {
  return fetch('http://xdhm1zcmxa.nlnode.webrahost.eu/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  })
}
const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

const appQuery = graphql`
  query AppQuery{
    store{
      ...Main_store
    }
  }
`
>>>>>>> origin/development

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      <Table/>
          
      </div>
=======
      <QueryRenderer
        environment={modernEnvironment}
        query={appQuery}
        variables={{}}
        render={({props})=>{
          if(props){
            return <Main store={props.store}/>
          } else {
            return <div>Loading...</div>
          }
        }}
      />
>>>>>>> origin/development
    );
  }
}

export default App;
