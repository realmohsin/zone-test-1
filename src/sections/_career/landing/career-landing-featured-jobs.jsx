import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';

import { CareerJobItem } from '../list/career-job-item';

// ----------------------------------------------------------------------

export function CareerLandingFeaturedJobs({ jobs, sx, ...other }) {
  return (
    <Box
      component="section"
      sx={[{ pt: { xs: 5, md: 10 }, pb: { xs: 10, md: 15 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          sx={{ textAlign: { xs: 'center', md: 'unset' } }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              Featured jobs
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3">
              Jobs available apply to Editorial Specialist, Account Manager, Human Resources
              Specialist and more!
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            columnGap: 4,
            display: 'grid',
            py: { xs: 5, md: 10 },
            rowGap: { xs: 4, md: 5 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {jobs.map((job) => (
            <CareerJobItem key={job.id} job={job} />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={RouterLink}
            href={paths.career.jobs}
            color="inherit"
            size="large"
            variant="outlined"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
