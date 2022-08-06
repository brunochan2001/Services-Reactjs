import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardGrid } from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import Navigation from '../../components/Navigation';
import { deleteService } from '../../store/actions';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const { data } = useSelector(state => state.service);

  useEffect(() => {
    setServices(data);
  }, [data]);

  const deleteServiceId = id => {
    console.log(id);
    dispatch(deleteService(id, data));
  };

  return (
    <>
      <Navigation></Navigation>
      <main className="w-75 mx-auto d-flex  py-4">
        <CardGrid services={services} deleteService={deleteServiceId} />
        <Form></Form>
      </main>
    </>
  );
};

export default ServicesPage;
