/**
 * @flow
 * @relayHash 992e6398dd4b3f3eee8479897efae308
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddShowerInput = {|
  type?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type AddShowerMutationVariables = {|
  input: AddShowerInput
|};
export type AddShowerMutationResponse = {|
  +addShower: ?{|
    +showerEdge: {|
      +node: ?{|
        +type: ?string,
        +description: ?string,
      |}
    |}
  |}
|};
export type AddShowerMutation = {|
  variables: AddShowerMutationVariables,
  response: AddShowerMutationResponse,
|};
*/


/*
mutation AddShowerMutation(
  $input: AddShowerInput!
) {
  addShower(input: $input) {
    showerEdge {
      node {
        type
        description
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddShowerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddShowerInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddShowerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addShower",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddShowerPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "showerEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowerEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Shower",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddShowerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addShower",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddShowerPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "showerEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowerEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Shower",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddShowerMutation",
    "id": null,
    "text": "mutation AddShowerMutation(\n  $input: AddShowerInput!\n) {\n  addShower(input: $input) {\n    showerEdge {\n      node {\n        type\n        description\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c97f7ce869241fb8f932d15f6ccaa0e8';
module.exports = node;
