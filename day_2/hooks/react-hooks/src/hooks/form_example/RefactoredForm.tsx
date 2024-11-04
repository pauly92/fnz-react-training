/** SOURCE: https://react.dev/learn/reusing-logic-with-custom-hooks# */
import { useState } from "react";

function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}

export const Form = () => {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
};


/**
 * Custom Hooks let you share stateful logic but not state itself. 
 * Each call to a Hook is completely independent from every other call to the same Hook
 */