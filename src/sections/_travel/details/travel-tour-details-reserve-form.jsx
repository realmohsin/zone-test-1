import { useState, useCallback } from 'react';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { fCurrency } from 'src/utils/format-number';

import { FilterTime } from '../filters/filter-time';
import { FilterGuests } from '../filters/filter-guests';

// ----------------------------------------------------------------------

export function TravelTourDetailsReserveForm({ price, priceSale, sx, ...other }) {
  const router = useRouter();

  const [departureDay, setDepartureDay] = useState(null);

  const [guests, setGuests] = useState({ adults: 0, children: 0 });

  const handleChangeDepartureDay = useCallback((newValue) => {
    setDepartureDay(newValue);
  }, []);

  const handleIncrementGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children + 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults + 1 });
      }
    },
    [guests]
  );

  const handleDecreaseGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children - 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults - 1 });
      }
    },
    [guests]
  );

  const handleClickReserve = useCallback(() => {
    router.push(paths.travel.checkout);
  }, [router]);

  const renderHead = () => (
    <Box sx={{ gap: 1, display: 'flex', alignItems: 'center', typography: 'h4' }}>
      {priceSale > 0 && (
        <Box sx={{ color: 'grey.500', textDecoration: 'line-through' }}>{fCurrency(priceSale)}</Box>
      )}
      {fCurrency(price)}
      <Typography variant="subtitle2" component="span" sx={{ color: 'text.disabled' }}>
        / Tour
      </Typography>
    </Box>
  );

  const renderInputs = () => (
    <div>
      <FilterTime
        value={departureDay}
        onChange={handleChangeDepartureDay}
        sx={(theme) => ({
          p: 2,
          mb: 2.5,
          borderRadius: 1,
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        })}
      />

      <FilterGuests
        value={guests}
        onDecrease={handleDecreaseGuests}
        onIncrement={handleIncrementGuests}
        sx={(theme) => ({
          p: 2,
          borderRadius: 1,
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
        })}
      />
    </div>
  );

  const renderPrices = () => (
    <>
      <Box sx={{ gap: 1, display: 'flex', typography: 'body2' }}>
        <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
          Service charge
        </Box>
        {fCurrency(priceSale) || '-'}
      </Box>

      <Box sx={{ gap: 1, display: 'flex', typography: 'body2' }}>
        <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
          Discount
        </Box>
        -
      </Box>
    </>
  );

  const renderFooter = () => (
    <Box
      sx={(theme) => ({
        p: 3,
        borderTop: `solid 1px ${theme.vars.palette.divider}`,
      })}
    >
      <Box sx={{ mb: 3, gap: 1, display: 'flex', typography: 'h5' }}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          Total
        </Box>
        {fCurrency(price)}
      </Box>

      <Button
        fullWidth
        size="large"
        variant="contained"
        color="inherit"
        onClick={handleClickReserve}
      >
        Reserve
      </Button>
    </Box>
  );

  return (
    <Card sx={sx} {...other}>
      <Box sx={{ p: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
        {renderHead()}
        {renderInputs()}
        {renderPrices()}
      </Box>

      {renderFooter()}
    </Card>
  );
}
