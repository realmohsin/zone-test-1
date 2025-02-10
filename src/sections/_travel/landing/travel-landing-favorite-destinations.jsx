import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { Image, imageClasses } from 'src/components/image';

// ----------------------------------------------------------------------

const ROWS = [
  'First class flights',
  '5 star accommodations',
  'Inclusive packages',
  'Latest model vehicles',
  'Handpicked hotels',
  'Accesibility managment',
];

// ----------------------------------------------------------------------

export function TravelLandingFavoriteDestinations({ tours, sx, ...other }) {
  const renderTexts = () => (
    <>
      <Typography variant="h2">Our favorite destinations</Typography>
      <Typography sx={{ my: 3, color: 'text.secondary' }}>
        Since wire-frame renderings are relatively simple and fast to calculate, they are often used
        in cases
      </Typography>
    </>
  );

  const renderList = () => (
    <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
      {ROWS.map((line) => (
        <Box key={line} sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'primary.main',
            }}
          />
          {line}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[{ py: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          sx={{ alignItems: { md: 'center' }, justifyContent: { md: 'space-between' } }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            {renderTexts()}
            {renderList()}
          </Grid>

          <Grid container spacing={{ xs: 4, md: 3 }} size={{ xs: 12, md: 6 }}>
            {tours.map((tour, index) => (
              <Grid
                key={tour.id}
                size={{ xs: 12, sm: 6 }}
                sx={{
                  ...(index === 1 && {
                    display: { md: 'inline-flex' },
                    alignItems: { md: 'flex-end' },
                  }),
                }}
              >
                <DestinationItem tour={tour} order={index % 3} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const transition = (theme) =>
  theme.transitions.create(['opacity', 'filter', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  });

function DestinationItem({ tour, order }) {
  const renderContent = () => (
    <Box
      sx={{
        p: 3,
        left: 0,
        width: 1,
        bottom: 0,
        zIndex: 9,
        position: 'absolute',
        color: 'common.white',
      }}
    >
      <Link component={RouterLink} href={paths.travel.post} color="inherit" variant="h6" noWrap>
        {tour.location}
      </Link>

      <Box sx={{ mt: 1, gap: 1, display: 'flex', alignItems: 'center' }}>
        <Iconify icon="carbon:location" sx={{ color: 'primary.main' }} />
        <Typography variant="body2" noWrap sx={{ opacity: 0.72 }}>
          {tour.continent}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          [`& .${imageClasses.root}`]: { transform: 'scale(1.12)' },
        },
      }}
    >
      {renderContent()}

      <Image
        alt={tour.location}
        src={tour.coverUrl}
        ratio={order ? '1/1' : { xs: '1/1', md: '4/6' }}
        sx={{ transition }}
        slotProps={{
          overlay: {
            sx: (theme) => ({
              backgroundImage: `linear-gradient(to bottom, transparent 0%, ${theme.vars.palette.common.black} 75%)`,
            }),
          },
        }}
      />
    </Box>
  );
}
