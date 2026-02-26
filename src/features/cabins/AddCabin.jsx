import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        {!showForm ? "Add new cabin" : "Hide create cabin form"}
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;
