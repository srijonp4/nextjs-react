import React from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { toggle } from '../state/slices/themeSlice';
const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={clsx('min-h-[250px]', {
        'bg-slate-900': theme === 'dark',
        'bg-red-100': theme === 'light',
      })}
    >
      <button
        onClick={() => {
          dispatch(toggle());
        }}
        className={clsx('btn transition-all duration-300', {
          'bg-green-700 hover:bg-green-900': theme === 'dark',
          'bg-blue-700 hover:bg-blue-900': theme === 'light',
        })}
      >
        change theme
      </button>
    </div>
  );
};

export default Theme;
