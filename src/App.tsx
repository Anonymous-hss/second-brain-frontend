import React from "react";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <div>
      <Button
        startIcon={PlusIcon}
        size="sm"
        variant="primary"
        onClick={() => {}}
        text={"asd"}
      ></Button>
      <Button
        size="md"
        variant="secondary"
        onClick={() => {}}
        text={"as1234d"}
      ></Button>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => {}}
        text={"asdfsgdsfd"}
      ></Button>
      ;
    </div>
  );
}

export default App;
