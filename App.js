import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// JSX ( transpiled before it reaches the JS ) - PARCEL - Babel
// JSX => React.createElement => React Element => JS Object => HTMLElement(render)

const elem = <h3>React Element</h3>

const title = (
    <h1 id="heading" tabIndex="3">
        Namaste React from JSX🚀
        {elem}
    </h1>
);

// Component Composition
const HeadingComponent = () => ( 
  <div id="container">
    {title}
    <h1 className="heading">Namaste React from Functional Components </h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);