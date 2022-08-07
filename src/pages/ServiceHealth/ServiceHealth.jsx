import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from '../../components/Card/CardGrid';
import ModalEditService from '../../components/modal/Modal';
import Navigation from '../../components/Navigation';
import { deleteService, editService } from '../../store/actions';
import { Grid } from '@material-ui/core';

const ServiceHealth = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const { data } = useSelector(state => state.service);
  const [open, setOpen] = useState(false);
  const [serviceSelect, setServiceSelect] = useState([]);

  useEffect(() => {
    const serviceHome = data.filter(e => e.type === 'Auto');
    setServices(serviceHome);
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
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardGrid
              services={services}
              deleteService={deleteServiceId}
              editService={openModal}
            />
          </Grid>
        </Grid>
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

export default ServiceHealth;
