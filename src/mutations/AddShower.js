import {commitMutation, graphql} from 'react-relay';

const mutation = graphql`
  mutation AddShowerMutation(
    $input: AddShowerInput!
  ) {
        addShower(input: $input){
            showerEdge{
                node{
                    type
                    description
                }
            }
        }
    }
`;

const commit = (environment, source) => {
  const variables = {
    input: {
      ...source,
    },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        console.log('Response received from server.')
      },
      onError: err => console.error(err),
    },
  );
}

export default commit;

