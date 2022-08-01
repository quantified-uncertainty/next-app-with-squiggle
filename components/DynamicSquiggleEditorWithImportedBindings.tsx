import React from "react";
import dynamic from "next/dynamic";

const SquiggleEditorWithImportedBindings = dynamic<any>(
    () => import("@quri/squiggle-components").then((mod) => mod.SquiggleEditorWithImportedBindings),
    {
        loading: () => <p>Loading...</p>,
        ssr: false,
    }
)

export function DynamicSquiggleEditorWithImportedBindings( props: any ) {
  return (
      <SquiggleEditorWithImportedBindings
        defaultCode={props.defaultCode}
        showSummary={true}
        bindingsImportUrl={props.bindingsImportUrl}
      />
  )
};
