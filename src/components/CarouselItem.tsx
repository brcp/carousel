import { Check } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../App';

interface CarouselItemProps {
  item: Item;
}

const sxHeader = {
  fontWeight: '700',
  color: '#086',
  // display: 'flex',
};

const sxGrid = {
  marginBottom: '.5rem',
  display: 'flex',
  gap: '10px',
};

const CarouselItem = ({ item }: CarouselItemProps) => {
  return (
    <Box sx={{ padding: '2em 5em' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Nombre:</Typography>
          <Typography>{item.name}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Apellidos: </Typography>
          <Typography>{item.lastName}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Dirección: </Typography>
          <Typography>{item.address}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>
            No. de Celular:{' '}
          </Typography>
          <Typography>{item.phoneNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Trabajo:</Typography>
          <Typography>{item.job}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Ingresos: </Typography>
          <Typography>
            {Intl.NumberFormat('en-US', {
              minimumFractionDigits: 2,
            }).format(item.income)}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={sxGrid}>
          <Check sx={{ color: '#086' }} />
          <Typography sx={sxHeader}>Moneda:</Typography>
          <Typography>{item.currency}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarouselItem;
