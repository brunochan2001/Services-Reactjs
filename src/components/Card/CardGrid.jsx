import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import './index.css';
import { Grid } from '@material-ui/core';
import { Pagination } from '@mui/material';

const CardGrid = ({ services, deleteService, editService }) => {
  const firstIndex = 0;
  const pageSize = 6;
  const [page, setPage] = useState(1);
  const [data, setData] = useState(services.slice(firstIndex, pageSize));

  useEffect(() => {
    const dataFilter = services.slice(
      firstIndex + pageSize * (page - 1),
      pageSize * page
    );
    setData(dataFilter);
  }, [services, page]);

  const handleChange = (e, value) => {
    setPage(value);
    setData(
      services.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  return (
    <>
      <div className="card-grid-container">
        <Grid container spacing={4} justify="flex-start">
          {data.map((service, index) => (
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
      <div>
        <Pagination
          count={Math.ceil(services.length / pageSize)}
          page={page}
          onChange={handleChange}
          color="primary"
          className="pagination"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '1rem 0'
          }}
        />
      </div>
    </>
  );
};

export default CardGrid;
