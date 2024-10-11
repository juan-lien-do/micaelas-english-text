import Plot from "react-plotly.js";

function PieChartGrade({ finalgrade: xd }) {
  return (
    <>
        <Plot
        data={[
            {
            values: [(100 - xd), xd],
            labels: ["Wrong", "Right"],
            type: "pie",
            textinfo: "label+percent",
            insidetextorientation: "radial",
            marker: {
                colors: ["#FF0101", "#01aa01"],
            },
            },
        ]}
        layout={{
            height: 300,
            width: 300,
            title: "Test Results",
        }}
        />
    </>
  );
}

export default PieChartGrade;
