import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import { Layout } from "./components/layout";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <Layout />
    </React.StrictMode>
);