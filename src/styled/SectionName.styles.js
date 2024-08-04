import { styled } from '@mui/material/styles';

export const SectionNameStyled = styled('div')(
  ({ theme: { palette }, ...props }) => ({
    margin: '0 auto 12px',
    textAlign: props.left ? 'left' : 'center',
    lineHeight: 1,

    span: {
      display: 'inline-block',
      lineHeight: 1.45,
      background:
        palette.mode === 'dark'
          ? palette.common.pumpkin
          : palette.common.yellow,
      fontSize: 16,
      padding: '0 8px',
    },
  })
);
