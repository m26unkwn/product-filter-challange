import { createRoot } from "react-dom/client";
import { App } from "./App";
import { FilterProvider } from "./store/filter-provider";

const root = createRoot(document.getElementById("root"));

root.render(
  <FilterProvider>
    <App />
  </FilterProvider>,
);
