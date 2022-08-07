import React from 'react';
import CardItem from './CardItem';
import './index.css';
import { Grid } from '@material-ui/core';

const CardGrid = ({ services, deleteService, editService }) => {
  return (
    <>
      <div className="card-grid-container">
        <Grid container spacing={4} justify="flex-start">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
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
    </>
  );
};

export default CardGrid;
