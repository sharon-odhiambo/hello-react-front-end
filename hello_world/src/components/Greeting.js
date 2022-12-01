import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { fetchGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  const greeting = useSelector((state) => state);
  console.log(greeting)
  return (
    <p>{greeting.message}</p>
  );
};

export default Greeting;