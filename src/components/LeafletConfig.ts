export type LeafletConfig = {
  TileProvider: string;
  AttributionUrl: string;
  MaxZoom: number;
}

export class LeafletConfigBuilder {
  config: LeafletConfig;

  constructor() {
    // Defaults provided in Leaflet quick start guide.
    this.config = {
      TileProvider: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      AttributionUrl: "http://www.openstreetmap.org/copyright",
      MaxZoom: 19
    };

    return this;
  }

  // TODO: Add builder methods here.

  build(): LeafletConfig {
    return this.config;
  }

}
