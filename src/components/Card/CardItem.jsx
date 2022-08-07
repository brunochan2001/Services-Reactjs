import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import './index.css';

const CardItem = ({ service, deleteService, editService }) => {
  const { title, description, id } = service;
  console.log(id);

  return (
    <>
      <Card className="card-container">
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
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete" onClick={() => deleteService(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => editService(service)}
            >
              <EditIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default CardItem;
