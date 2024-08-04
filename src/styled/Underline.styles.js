import { styled } from '@mui/material/styles';

export const UnderlineStyled = styled('span')(({ theme: { palette } }) => ({
  borderBottom: `3px solid ${
    palette.mode === 'dark' ? palette.common.pumpkin : palette.common.yellow
  }`,
}));
