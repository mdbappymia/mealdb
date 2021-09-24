import React, { useState } from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

const App = () => {
  const [url, setUrl] = useState("");
  const updateUrl = (getUrl) => {
    setUrl(getUrl);
  };
  return (
    <div>
      <Header updateUrl={updateUrl}></Header>
      <Shop url={url}></Shop>
    </div>
  );
};

export default App;
