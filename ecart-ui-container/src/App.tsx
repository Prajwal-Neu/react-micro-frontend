import React from "react";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

function App() {
  return (
    <div>
      <h1>Container</h1>
      <div>
        <React.Suspense fallback={"Loading..."}>
          <div>
            <h2>APP-1</h2>
            <CounterAppOne />
          </div>
        </React.Suspense>
      </div>
      <div>
        <React.Suspense fallback={"Loading..."}>
          <div>
            <h2>APP-2</h2>
            <CounterAppTwo />
          </div>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
