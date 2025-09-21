// src/types/react-simple-maps.d.ts
declare module "react-simple-maps" {
  import * as React from "react";

  export interface GeographyType {
    rsmKey: string;
    properties: Record<string, any>;
    geometry: {
      coordinates: any[];
      type: string;
    };
  }

  export interface GeographiesRenderProps {
    geographies: GeographyType[];
  }

  export const ComposableMap: React.FC<any>;
  export const Geographies: React.FC<{
    geography: string | object;
    children: (props: GeographiesRenderProps) => React.ReactNode;
  }>;
  export const Marker: React.FC<any>;
  export const Geography: React.FC<{ geography: GeographyType }>;
}

