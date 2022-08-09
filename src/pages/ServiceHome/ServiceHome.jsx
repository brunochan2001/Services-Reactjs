import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardGrid from '../../components/Card/CardGrid';
import ModalEditService from '../../components/modal/Modal';
import Navigation from '../../components/Navigation';
import Spin from '../../components/Spin';
import Form from '../../components/Form';
import {
  deleteService,
  editService,
  getServicesLoading,
  getServicessuccess
} from '../../store/actions';
import { Grid, Typography } from '@material-ui/core';
import './index.css';

const ServiceHome = () => {
  const dispatch = useDispatch();
  const [services, setServices] = useState([]);
  const { data, loading } = useSelector(state => state.service);
  const [open, setOpen] = useState(false);
  const [serviceSelect, setServiceSelect] = useState([]);

  useEffect(() => {
    dispatch(getServicesLoading());
    setTimeout(() => {
      dispatch(getServicessuccess());
    }, 500);
  }, []);

  useEffect(() => {
    const serviceHome = data.filter(e => e.type === 'Hogar');
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
      <header>
        <Navigation></Navigation>
      </header>
      <main className="main">
        <Typography variant="h4" component="div" className="title" gutterBottom>
          Servicios de Hogar
        </Typography>
        {loading ? (
          <Spin></Spin>
        ) : (
          <>
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                lg={8}
                style={{ position: 'relative' }}
              >
                <CardGrid
                  services={services}
                  deleteService={deleteServiceId}
                  editService={openModal}
                />
              </Grid>
              <Grid item xs={12} md={5} lg={4}>
                <Form></Form>
              </Grid>
            </Grid>
          </>
        )}
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

export default ServiceHome;
