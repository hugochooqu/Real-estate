import Houses from "./components/Houses/Houses";
import LandOwner from "./components/LandOwner";
import Services from "./components/OtherServices";
import SellHouse from "./components/SellHouse";
import WhatNext from "./components/WhatNext";
import Main from "./components/main";

function App() {
  return (
    <div>
      <Main />
      <Houses />
      <SellHouse />
      <LandOwner />
      <Services />
      <WhatNext />
    </div>
  );
}

export default App;
