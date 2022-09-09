import React from "react";
import dynamic from "next/dynamic";

const SquiggleEditor = dynamic<any>(
    () => import("@quri/squiggle-components").then((mod) => mod.SquiggleEditor),
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
)

export function DynamicSquiggleEditor( props: any ) {
  return (
      <SquiggleEditor
        defaultCode={props.defaultCode}
      />
  )
};
