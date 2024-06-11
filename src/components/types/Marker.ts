import { LeafletIcon } from "../markers/Icon"
import { Coordinates } from "./Size";

export type MarkerOptions = {
  icon?: LeafletIcon;
  keyboard?: boolean;
  title?: string;
  alt?: string;
  zIndexOffset?: number;
  opacity?: number;
  riseOnHover?: boolean;
  riseOffset?: number;
  pane?: string;
  shadowPane?: string;
  bubblingMouseEvents?: boolean;
  autoPanOnFocus?: boolean;
}

export type Marker = {
  latlng: Coordinates;
  options?: MarkerOptions;
}
