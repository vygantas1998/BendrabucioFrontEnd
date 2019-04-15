/**
 * @flow
 * @relayHash 69baa96c622104204f287c4a0b3eb263
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddWashingMachineInput = {|
  title?: ?string,
  image_url?: ?string,
  description?: ?string,
  clientMutationId?: ?string,
|};
export type AddWashingMachineMutationVariables = {|
  input: AddWashingMachineInput
|};
export type AddWashingMachineMutationResponse = {|
  +addWashingMachine: ?{|
    +washingMachineEdge: {|
      +node: ?{|
        +title: ?string,
        +image_url: ?string,
        +description: ?string,
      |}
    |}
  |}
|};
export type AddWashingMachineMutation = {|
  variables: AddWashingMachineMutationVariables,
  response: AddWashingMachineMutationResponse,
|};
*/


/*
mutation AddWashingMachineMutation(
  $input: AddWashingMachineInput!
) {
  addWashingMachine(input: $input) {
    washingMachineEdge {
      node {
        title
        image_url
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
    "type": "AddWashingMachineInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "AddWashingMachineInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image_url",
  "args": null,
  "storageKey": null
},
v4 = {
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
    "name": "AddWashingMachineMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addWashingMachine",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddWashingMachinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "washingMachineEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "WashingMachineEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "WashingMachine",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
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
    "name": "AddWashingMachineMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addWashingMachine",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddWashingMachinePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "washingMachineEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "WashingMachineEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "WashingMachine",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
    "name": "AddWashingMachineMutation",
    "id": null,
    "text": "mutation AddWashingMachineMutation(\n  $input: AddWashingMachineInput!\n) {\n  addWashingMachine(input: $input) {\n    washingMachineEdge {\n      node {\n        title\n        image_url\n        description\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5ded3ac939f9c16ec41d99cd363d96eb';
module.exports = node;
