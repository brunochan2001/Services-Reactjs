import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardGrid } from '../../components/Card/CardGrid';
import Form from '../../components/Form';
import ModalEditService from '../../components/modal/Modal';
import Navigation from '../../components/Navigation';
import { deleteService, editService } from '../../store/actions';
import './index.css';

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

  const openModal = service => {
    setOpen(true);
    setServiceSelect(service);
  };

  const editServiceSelect = service => {
    dispatch(editService(service, data));
  };

  return (
    <>
      <Navigation></Navigation>
      <main className="main">
        <CardGrid
          services={services}
          deleteService={deleteServiceId}
          editService={openModal}
        />
        <Form></Form>
      </main>
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
        editServiceSelect={editServiceSelect}
      ></ModalEditService>
    </>
  );
};

export default ServicesPage;
