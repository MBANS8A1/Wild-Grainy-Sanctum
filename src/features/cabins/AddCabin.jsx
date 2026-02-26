import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        {!isOpenModal ? "Add new cabin" : "Hide create cabin form"}
      </Button>
      {isOpenModal && <CreateCabinForm />}
    </div>
  );
}

export default AddCabin;
