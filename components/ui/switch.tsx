"use client";
import { useEffect, useState } from "react";

interface SwitchProps {
  initialState?: boolean;
  onChange?: (isOn: boolean) => void;
  init?: boolean;
  setInit?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputSwitch({
  initialState = false,
  onChange,
  init,
  setInit,
}: SwitchProps) {
  const [isOn, setIsOn] = useState(initialState);

  useEffect(() => {
    if (init) {
      if (setInit) {
        setIsOn(true);
        setInit(false);
      }
    }
  }, [init, setInit]);

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-emerald-600" : "bg-neutral-600"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}
