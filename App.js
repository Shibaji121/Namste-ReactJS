const heading = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Namste"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
