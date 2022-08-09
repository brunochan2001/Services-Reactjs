import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import { Grid } from '@material-ui/core';
import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';
import AlertInfo from '../alert/alertInfo';
import './index.css';
import Search from '../Search';

const CardGrid = ({ services, deleteService, editService }) => {
  const firstIndex = 0;
  const pageSize = 6;
  const [serviceData, setServicesData] = useState(services);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(serviceData.slice(firstIndex, pageSize));

  useEffect(() => {
    setServicesData(services);
  }, [services]);

  useEffect(() => {
    setData(serviceData.slice(firstIndex, pageSize));
  }, [serviceData]);

  useEffect(() => {
    setData(serviceData.slice(0, pageSize));
  }, [pageSize]);

  const handleChange = (event, value) => {
    setPage(value);
    setData(
      serviceData.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };
  console.log('sserviceData', serviceData);
  console.log('data', data);

  return (
    <>
      <Search services={services} setServicesData={setServicesData}></Search>
      <div className="card-grid-container">
        <Grid container spacing={4} className="card-grid">
          {data.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
              <CardItem
                className="card-item"
                service={service}
                deleteService={deleteService}
                editService={editService}
              ></CardItem>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        {serviceData.length ? (
          <>
            <Pagination
              count={Math.ceil(serviceData.length / pageSize)}
              page={page}
              onChange={handleChange}
              color="primary"
              className="pagination"
            />
          </>
        ) : (
          <AlertInfo />
        )}
      </div>
    </>
  );
};

CardGrid.propTypes = {
  services: PropTypes.array.isRequired,
  deleteService: PropTypes.func,
  editService: PropTypes.func
};

CardGrid.defaultProps = { services: [] };

export default CardGrid;
