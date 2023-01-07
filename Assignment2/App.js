import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        "id":"main-heading"
    },
    "Heading 1 - Namaste React from parcel"
);

const heading2 = React.createElement(
    "h2",
    {
        "className":"second-level-heading"
    },
    "heading 2"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, heading2]);