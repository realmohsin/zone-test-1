import { varAlpha } from 'minimal-shared/utils';
import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function EcommerceCheckoutPaymentMethod({ name, options, sx, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Box
          sx={[
            {
              rowGap: 3,
              columnGap: 2,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          {...other}
        >
          {options.map((option) => (
            <OptionItem
              key={option.label}
              option={option}
              selected={value === option.value}
              onClick={() => onChange(option.value)}
            />
          ))}
        </Box>
      )}
    />
  );
}

function OptionItem({ option, selected, sx, ...other }) {
  return (
    <Box
      sx={[
        (theme) => ({
          px: 2,
          gap: 2,
          py: 2.5,
          display: 'flex',
          cursor: 'pointer',
          borderRadius: 1.5,
          alignItems: 'center',
          border: `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
          transition: theme.transitions.create(['box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
          }),
          ...(selected && { boxShadow: `0 0 0 2px ${theme.vars.palette.text.primary}` }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Iconify
        width={24}
        icon={selected ? 'solar:check-circle-bold' : 'carbon:radio-button'}
        sx={{ color: 'text.disabled', ...(selected && { color: 'primary.main' }) }}
      />
      <Box sx={{ flex: '1 1 auto' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 0.5,
            typography: 'subtitle1',
          }}
        >
          {option.label}
          <Iconify
            width={24}
            icon={
              (option.value === 'visa' && 'logos:visa') ||
              (option.value === 'mastercard' && 'logos:mastercard') ||
              'logos:paypal'
            }
          />
        </Box>

        <Box component="span" sx={{ typography: 'body2' }}>
          {option.description}
        </Box>
      </Box>
    </Box>
  );
}
