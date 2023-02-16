import React from 'react';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className='min-h-screen w-full box-border flex justify-center items-center border'>{children}</div>;
};
