import { styled } from '@mui/material/styles';

const Navigation = styled('ul')(() => ({
  display: 'flex',
  lineHeight: 1,

  '> li': {
    '> a': {
      display: 'block',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
}));

export const DesktopNavigationStyled = styled(Navigation)(
  ({ theme: { palette }, theme }) => ({
    display: 'none',
    gap: '0 24px',
    margin: '10px 24px 0 0',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },

    '> li': {
      '> a': {
        position: 'relative',
        paddingBottom: 10,

        '&:after': {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: 0,
          borderBottom: `3px solid ${
            palette.mode === 'dark'
              ? palette.common.pumpkin
              : palette.common.yellow
          }`,
          content: '""',
          color: '#fff',
          transform: 'translateX(-50%)',
          transition: 'width 0.3s ease-in-out',
        },

        '&.active': {
          '&:after': {
            width: '100%',
          },
        },

        '@media (hover: hover)': {
          '&:hover': {
            '&:after': {
              width: '100%',
            },
          },
        },

        '@media not(hover)': {
          '&:active': {
            '&:after': {
              width: '100%',
            },
          },
        },
      },
    },
  })
);

export const MobileNavigationStyled = styled(Navigation)(
  ({ theme: { palette } }) => ({
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px 0',

    '> li': {
      '> a': {
        transition: 'color 0.3s ease-in-out',

        '&.active': {
          color:
            palette.mode === 'dark'
              ? palette.common.pumpkin
              : palette.common.yellow,
        },

        '@media (hover: hover)': {
          '&:hover': {
            color:
              palette.mode === 'dark'
                ? palette.common.pumpkin
                : palette.common.yellow,
          },
        },

        '@media not(hover)': {
          '&:active': {
            color:
              palette.mode === 'dark'
                ? palette.common.pumpkin
                : palette.common.yellow,
          },
        },
      },
    },
  })
);
