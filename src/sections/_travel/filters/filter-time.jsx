import { merge } from 'es-toolkit';

import InputAdornment from '@mui/material/InputAdornment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function FilterTime({ slotProps, ...other }) {
  return (
    <MobileDatePicker
      slotProps={{
        ...slotProps,
        textField: merge(
          {
            fullWidth: true,
            variant: 'standard',
            InputProps: {
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify
                    width={24}
                    icon="solar:calendar-mark-outline"
                    sx={{ color: 'text.disabled', mr: 1 }}
                  />
                </InputAdornment>
              ),
            },
            inputProps: { sx: { py: 0, typography: 'subtitle1' } },
          },
          slotProps?.textField ?? {}
        ),
      }}
      {...other}
    />
  );
}
