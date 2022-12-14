import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import './index.css';

const CardItem = ({ service, deleteService, editService }) => {
  const { title, description, id } = service;

  return (
    <>
      <Card className="card-container" style={{ padding: 0 }}>
        <CardContent className="card-content">
          <Typography
            className={'MuiTypography--heading'}
            variant={'h6'}
            gutterBottom
          >
            {title}
          </Typography>
          <Typography
            className={'MuiTypography--subheading'}
            variant={'caption'}
          >
            {description}
          </Typography>
          <Divider className="card-divider" light />
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            className="stack-container"
          >
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => editService(service)}
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => deleteService(id)}
            >
              Eliminar
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

CardItem.propTypes = {
  service: PropTypes.object.isRequired,
  deleteService: PropTypes.func,
  editService: PropTypes.func
};

export default CardItem;
