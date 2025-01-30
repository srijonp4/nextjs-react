import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h3 className="text-4xl">Hello, from Layout</h3>
      <div>{children}</div>
    </div>
  );
};

export default layout;
