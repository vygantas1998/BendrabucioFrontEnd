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
  +washingMachineReservations: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +washing_machine_id: ?string,
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
      "name": "washingMachineReservations",
      "storageKey": null,
      "args": null,
      "concreteType": "WashingMachineReservationConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "WashingMachineReservationEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "WashingMachineReservation",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "washing_machine_id",
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
(node/*: any*/).hash = 'deb82861e1cdeccdcd3fe150815aa62c';
module.exports = node;
