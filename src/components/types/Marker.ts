import { LeafletIcon } from "../markers/Icon"

export type Marker = {
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
