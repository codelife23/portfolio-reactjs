const colors = {
  grey: '#44484e',
  yellow: '#f5df4e',
  pumpkin: '#ff7d61',
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode: mode,
    background: {
      ...(mode === 'light'
        ? { header: '#fff', body: '#f8f9fa', footer: 'red' }
        : { header: '#0F141C', body: '#171b22', footer: 'green' }),
    },
    common: {
      ...colors,
    },
    text: {
      ...(mode === 'light' ? { primary: '#212529' } : { primary: '#efefef' }),
    },

    // ...(mode === 'light'
    //   ? {
    //       text: {
    //         disabled: 'rgba(0, 0, 0, 0.38)',
    //         icon: 'rgba(255, 255, 255, 0.5)',
    //         primary: '#212529',
    //         secondary: 'rgba(0, 0, 0, 0.6)',
    //       },
    //     }
    //   : {}),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
});
