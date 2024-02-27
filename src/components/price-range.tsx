// import { Slider } from "./path-to-enhanced-slider"; // Adjust the import path accordingly
import { useState } from "react";
import { Slider } from "./ui/slider";

const PriceRange = () => {
  const [range, setRange] = useState([0, 24]);

  const handleRangeChange = (value: number[]) => {
    setRange(value);
  };

  return (
    <Slider
      defaultValue={[0, 24]}
      max={48}
      min={0}
      step={1}
      value={range}
      onValueChange={handleRangeChange}
      formatLabel={(value: number) => `${value}`}
    />
  );
};

export default PriceRange
