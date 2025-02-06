'use client';
import { useContext } from 'react';
import postContext from '../../store/post';
const AnotherComponent: React.FC = () => {
  const post = useContext(postContext);

  return <div>{JSON.stringify(post?.body)}</div>;
};

export default AnotherComponent;
