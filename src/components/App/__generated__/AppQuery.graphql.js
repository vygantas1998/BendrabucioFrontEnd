/**
 * @flow
 * @relayHash d54f9b3b54fa56e717952b19e7c382cf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ShowerReservations_store$ref = any;
type Showers_store$ref = any;
type WashingMachines_store$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +store: ?{|
    +$fragmentRefs: WashingMachines_store$ref & Showers_store$ref & ShowerReservations_store$ref
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  store {
    ...WashingMachines_store
    ...Showers_store
    ...ShowerReservations_store
  }
}

fragment WashingMachines_store on Store {
  washingMachines {
    edges {
      node {
        title
        description
        image_url
        id
      }
    }
  }
}

fragment Showers_store on Store {
  showers {
    edges {
      node {
        type
        description
        id
      }
    }
  }
}

fragment ShowerReservations_store on Store {
  showerReservations {
    edges {
      node {
        shower_id
        reservation_start_time
        reservation_end_time
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "WashingMachines_store",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Showers_store",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "ShowerReservations_store",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "washingMachines",
            "storageKey": null,
            "args": null,
            "concreteType": "WashingMachineConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "WashingMachineEdge",
                "plural": true,
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "image_url",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "showers",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowerConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ShowerEdge",
                "plural": true,
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      },
                      (v0/*: any*/),
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "showerReservations",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowerReservationConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ShowerReservationEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ShowerReservation",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "shower_id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "reservation_start_time",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "reservation_end_time",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ]
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
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  store {\n    ...WashingMachines_store\n    ...Showers_store\n    ...ShowerReservations_store\n  }\n}\n\nfragment WashingMachines_store on Store {\n  washingMachines {\n    edges {\n      node {\n        title\n        description\n        image_url\n        id\n      }\n    }\n  }\n}\n\nfragment Showers_store on Store {\n  showers {\n    edges {\n      node {\n        type\n        description\n        id\n      }\n    }\n  }\n}\n\nfragment ShowerReservations_store on Store {\n  showerReservations {\n    edges {\n      node {\n        shower_id\n        reservation_start_time\n        reservation_end_time\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb59023d10df2ffb82394111d6105476';
module.exports = node;
