import { useState } from "react";

export default function UserInput({ text, field, onChangeData }) {
  /*const [objToSend, setObjToSend] = useState({
    field: field,
    value: 1, // Default value to ensure it's a number
  });*/

  function handleChangeData(obj) {
    /*setObjToSend((prevObj) => ({
      ...prevObj,
      value: parseInt(obj.target.value) > 0 ? parseInt(obj.target.value) : 1, // Ensure value is a number
    }));*/
    const objToSend = {
      field: field,
      value: parseInt(obj.target.value) > 0 ? parseInt(obj.target.value) : 1, // Ensure value is a number
    };
    console.log(obj.target.value);
    onChangeData(objToSend);
  }

  return (
    <>
      <label>{text}</label>
      <input type='number' onChange={handleChangeData} />
    </>
  );
}
