import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { style: { color: "red" } },
//   "Namste"
// );

const heading = <h1>Namste Shibaji</h1>;

const Heading2 = () => (
  <div>
    {heading}
    <div>Shibaji Sahu</div>
  </div>
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
