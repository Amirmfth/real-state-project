import React from "react";
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <BeatLoader
      color="#304ffe"
      size={25}
      loading={true}
      cssOverride={{ margin: "auto" }}
    />
  );
}

export default Loader;
