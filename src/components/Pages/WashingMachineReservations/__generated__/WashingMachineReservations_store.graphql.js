/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type WashingMachineReservations_store$ref: FragmentReference;
export type WashingMachineReservations_store = {|
  +washingMashineReservations: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +washingMashine_id: ?string,
        +reservation_start_time: ?string,
        +reservation_end_time: ?string,
      |}
    |}>
  |},
  +$refType: WashingMachineReservations_store$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "WashingMachineReservations_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "washingMashineReservations",
      "storageKey": null,
      "args": null,
      "concreteType": "WashingMashineReservationConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "WashingMashineReservationEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "WashingMashineReservation",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "washingMashine_id",
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a90ffad8e09a7fe288a1288e47285575';
module.exports = node;
