import React from 'react';

const ItemsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>ItemsLayout</div>
      <div>{children}</div>
    </div>
  );
};

export default ItemsLayout;
