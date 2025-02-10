import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { fCurrency, fShortenNumber } from 'src/utils/format-number';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';

import { FilterTime } from '../filters/filter-time';
import { FilterGuests } from '../filters/filter-guests';

// ----------------------------------------------------------------------

export function TravelCheckOutSummary({
  sx,
  slug,
  price,
  coverUrl,
  tourGuide,
  ratingNumber,
  totalReviews,
  ...other
}) {
  const {
    watch,
    setValue,
    formState: { isSubmitting },
  } = useFormContext();

  const values = watch();

  const {
    tourDetails: { guests },
  } = values;

  const handleIncrementGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setValue('tourDetails.guests', { ...guests, children: guests.children + 1 });
      } else {
        setValue('tourDetails.guests', { ...guests, adults: guests.adults + 1 });
      }
    },
    [guests, setValue]
  );

  const handleDecreaseGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setValue('tourDetails.guests', { ...guests, children: guests.children - 1 });
      } else {
        setValue('tourDetails.guests', { ...guests, adults: guests.adults - 1 });
      }
    },
    [guests, setValue]
  );

  const renderTop = () => (
    <Box
      sx={{
        p: 4,
        pb: 0,
        gap: 3,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
        },
      }}
    >
      <Image alt={slug} src={coverUrl} ratio="1/1" sx={{ borderRadius: 2 }} />

      <div>
        <Typography
          component="h6"
          variant="h5"
          sx={(theme) => ({ ...theme.mixins.maxLine({ line: 2 }), mb: 2 })}
        >
          {slug}
        </Typography>

        <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
          <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />

          <Box component="span" sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>

          {totalReviews && (
            <Link variant="body2" sx={{ color: 'text.secondary' }}>
              ({fShortenNumber(totalReviews)} reviews)
            </Link>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed', my: 2.5 }} />

        <Box sx={{ gap: 1.5, display: 'flex', alignItems: 'center' }}>
          <Avatar src={tourGuide?.avatarUrl} />

          <div>
            <Typography variant="body2" sx={{ color: 'text.disabled' }}>
              Guide by
            </Typography>

            <Typography variant="subtitle2">{tourGuide?.name}</Typography>
          </div>
        </Box>
      </div>
    </Box>
  );

  const renderMiddle = () => (
    <Box
      sx={(theme) => ({
        p: theme.spacing(4, 4, 3, 4),
      })}
    >
      <Box
        sx={{
          p: 2.5,
          gap: 2.5,
          borderRadius: 2,
          display: 'flex',
          color: 'text.disabled',
          bgcolor: 'background.neutral',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box sx={{ gap: 1.5, display: 'flex' }}>
          <Iconify width={24} icon="solar:calendar-mark-outline" />

          <div>
            <Typography variant="caption" sx={{ mb: 0.5, display: 'block' }}>
              Departure day
            </Typography>
            <FilterTime
              value={dayjs(values.tourDetails.departureDay)}
              onChange={(newValue) =>
                setValue('tourDetails.departureDay', dayjs(newValue).format())
              }
              slotProps={{ textField: { InputProps: { startAdornment: null } } }}
            />
          </div>
        </Box>

        <Divider
          flexItem
          orientation="vertical"
          sx={{ borderStyle: 'dashed', display: { xs: 'none', sm: 'block' } }}
        />

        <Box sx={{ gap: 1.5, display: 'flex' }}>
          <Iconify width={24} icon="solar:users-group-rounded-outline" />

          <div>
            <Typography variant="caption" sx={{ mb: 0.5, display: 'block' }}>
              Guests
            </Typography>
            <FilterGuests
              startAdornment={null}
              value={guests}
              onDecrease={handleDecreaseGuests}
              onIncrement={handleIncrementGuests}
            />
          </div>
        </Box>
      </Box>

      <Box sx={{ mt: 3, mb: 2, display: 'flex', typography: 'body2' }}>
        <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
          Service charge
        </Box>

        {fCurrency(price)}
      </Box>

      <Box sx={{ display: 'flex', typography: 'body2' }}>
        <Box component="span" sx={{ color: 'text.disabled', flexGrow: 1 }}>
          Discount
        </Box>
        -
      </Box>
    </Box>
  );

  const renderBottom = () => (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', mb: 3, typography: 'h5' }}>
        <Box component="span" sx={{ flexGrow: 1 }}>
          Total
        </Box>

        <Box component="span">{fCurrency(price)}</Box>
      </Box>

      <LoadingButton
        fullWidth
        type="submit"
        size="large"
        variant="contained"
        color="inherit"
        loading={isSubmitting}
      >
        Complete booking
      </LoadingButton>
    </Box>
  );

  return (
    <Card sx={sx} {...other}>
      {renderTop()}
      {renderMiddle()}
      <Divider sx={{ borderStyle: 'dashed' }} />
      {renderBottom()}
    </Card>
  );
}
