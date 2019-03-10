import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
