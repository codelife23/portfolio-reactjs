import { styled } from '@mui/material/styles';

const HamburgerStyled = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 24,
  height: 18,
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0, 0, 0.2, 1)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },

  '&:before, &:after, span': {
    display: 'block',
    position: 'absolute',
    content: '""',
    width: '100%',
    height: 2,
    left: 0,
    background: theme.palette.text.primary,
    transition: 'all 0.25s cubic-bezier(0, 0, 0.2, 1)',
  },

  '&:before': {
    top: 0,
  },

  span: {
    top: 8,
  },

  '&:after': {
    top: 16,
  },

  '&.open': {
    transform: 'rotate(135deg)',

    '&:before': {
      top: 8,
      transform: 'rotate(90deg)',
    },

    '&:after': {
      top: 8,
      opacity: 0,
      transform: 'rotate(90deg)',
    },
  },
}));

function Hamburger({ onClick, className }) {
  return (
    <HamburgerStyled className={className} onClick={onClick}>
      <span />
    </HamburgerStyled>
  );
}

export default Hamburger;
