import React from 'react';

type Props = {
  value: number;
  max: number;
};

const ProgressBar = ({ value, max }: Props) => {
  // console.log({
  //   value,
  //   max,
  // });
  // console.log((value / max) * 100);

  const percentage = (value / max) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
