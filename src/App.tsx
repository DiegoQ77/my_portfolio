/* eslint-disable no-promise-executor-return */
import { useEffect, useState } from "react";
import Routes from "./routes";

function App() {
  const [isLoading, setLoading] = useState(true);

  const someRequest = () => {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 3500));
  };
  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });
  return <Routes />;
}

export default App;
