import React from "react";

import dynamic from "next/dynamic";

const SquiggleChart = dynamic<any>(
  () => import("@quri/squiggle-components").then((mod) => mod.SquiggleChart),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export function DynamicSquiggleChart(props: any) {
  if (props.squiggleString == "") {
    return null;
  } else {
    return (
        <SquiggleChart
          code={props.squiggleString}
          width={445}
          height={200}
          showSummary={true}
        />
    );
  }
}
