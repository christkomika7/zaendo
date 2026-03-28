"use client";
import { Slider } from "@/components/ui/slider";
import { formatNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider> & {
  init?: boolean;
  setInit?: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SliderInput({ ...props }: SliderProps) {
  const [value, setValue] = useState([120_000]);

  useEffect(() => {
    if (props.init) {
      if (props.setInit) {
        setValue([120_000]);
        props.setInit(false);
      }
    }
  }, [props]);

  function handleValue(e: number[]) {
    setValue([...e]);
  }

  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="budget" className="text-neutral-200 text-sm">
        Votre budget
      </label>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center gap-x-2 mb-2 text-neutral-300 text-sm">
          <span className="flex items-center gap-x-2 text-sm">
            Min: 20K FCFA
          </span>
          <span className="flex items-center gap-x-2 text-sm">
            Actuel: {formatNumber(value[0])} FCFA
          </span>
          <span className="flex items-center gap-x-2 text-sm">
            Max: 20M FCFA
          </span>
        </div>
        <Slider
          defaultValue={value}
          min={20_000}
          max={20_000_000}
          step={10_000}
          value={value}
          onValueChange={handleValue}
          name="budget"
          {...props}
        />
      </div>
    </div>
  );
}
