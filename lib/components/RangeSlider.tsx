import React from "react";

interface RangeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange, min, max }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="space-x-4">
      <label htmlFor="slider" className="block text-14 font-medium text-neutral-400">
        Default
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-96 track-neutral-200 rounded-full h-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        id="slider"
      />
    </div>
  );
};

export default RangeSlider;
