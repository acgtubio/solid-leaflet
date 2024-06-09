import L from "leaflet";
import { Anchor, SizeTuple } from "../types/Size";

// TODO: Add url type.
export type LeafletIcon = {
  iconUrl: string;
  iconRetinaUrl?: string;
  iconSize?: SizeTuple;
  iconAnchor?: Anchor;
  popupAnchor?: Anchor;
  tooltipAnchor?: Anchor;
  shadowUrl?: string;
  shadowRetinaUrl?: string;
  shadowSize?: SizeTuple;
  shadowAnchor?: Anchor;
  className?: string;
  crossOrigin?: boolean | string;
}

const defaultIcon = {
  iconRetinaUrl: null,
  iconSize: null,
  iconAnchor: null,
  popupAnchor: [0, 0],
  tooltipAnchor: [0, 0],
  shadowUrl: null,
  shadowRetinaUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  className: "",
  crossOrigin: false,
}

export const MarkerIcon = (icon: LeafletIcon) => {
  return L.icon({
    ...defaultIcon,
    ...icon,
  });
}
