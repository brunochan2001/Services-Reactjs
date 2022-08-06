import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardGrid } from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import ModalEditService from '../../components/modal/Modal';
import Navigation from '../../components/Navigation';
import { deleteService } from '../../store/actions';

const ServicesPage = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const { data } = useSelector(state => state.service);
  const [open, setOpen] = useState(false);
  const [serviceSelect, setServiceSelect] = useState([]);

  useEffect(() => {
    setServices(data);
  }, [data]);

  const deleteServiceId = id => {
    dispatch(deleteService(id, data));
  };

  const editService = service => {
    setOpen(true);
    setServiceSelect(service);
  };
  return (
    <>
      <Navigation></Navigation>
      <main className="w-75 mx-auto d-flex  py-4">
        <CardGrid
          services={services}
          deleteService={deleteServiceId}
          editService={editService}
        />
        <Form></Form>
      </main>
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
      ></ModalEditService>
    </>
  );
};

export default ServicesPage;
