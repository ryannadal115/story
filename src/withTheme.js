import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const accent = {
  basePlus90: '#E5F5F7',
  basePlus75: '#BFE7EB',
  basePlus50: '#7FD0D7',
  basePlus25: '#3FB8C3',
  main: '#00A1AF',
  baseMinus10: '#0597A4',
  baseMinus25: '#0C8895',
  baseMinus50: '#196F7B',
  baseMinus75: '#265661',
};

const ambient = {
  basePlus90: '#EAEBEC',
  basePlus75: '#CCCED1',
  basePlus50: '#999EA3',
  basePlus25: '#666E75',
  main: '#333E48',
  baseMinus10: '#2D3740',
  baseMinus25: '#262E36',
  baseMinus50: '#191F24',
  baseMinus75: '#0C0F12',
};

const blue = {
  basePlus90: '#EBF8FD',
  basePlus75: '#CFEEFC',
  basePlus50: '#9FDDF9',
  basePlus25: '#6FCCF6',
  base: '#3FBCF4',
  baseMinus10: '#3DAFE2',
  baseMinus25: '#3C9CC9',
  baseMinus50: '#397D9E',
  baseMinus75: '#365D73',
};

const turquoise = {
  basePlus90: '#E9FBFA',
  basePlus75: '#CAF6F3',
  basePlus50: '#95EEE7',
  basePlus25: '#60E5DB',
  base: '#2BDDCF',
  baseMinus10: '#2BCDC1',
  baseMinus25: '#2DB5AD',
  baseMinus50: '#2F8D8B',
  baseMinus75: '#316569',
};

const green = {
  basePlus90: '#F1FDF2',
  basePlus75: '#DDFAE0',
  basePlus50: '#BBF5C2',
  basePlus25: '#99F0A3',
  base: '#77EB85',
  baseMinus10: '#70D97E',
  baseMinus25: '#66BF75',
  baseMinus50: '#559466',
  baseMinus75: '#446957',
};

const lemon = {
  basePlus90: '#FDFEEB',
  basePlus75: '#FCFDCF',
  basePlus50: '#F9FB9F',
  basePlus25: '#F6F96F',
  base: '#F3F73F',
  baseMinus10: '#DFE43F',
  baseMinus25: '#C3C841',
  baseMinus50: '#939A43',
  baseMinus75: '#636C45',
};

const sun = {
  basePlus90: '#FFFAEA',
  basePlus75: '#FFF2CC',
  basePlus50: '#FFE699',
  basePlus25: '#FFDA66',
  base: '#FFCE34',
  baseMinus10: '#EABF36',
  baseMinus25: '#CCAA39',
  baseMinus50: '#99863E',
  baseMinus75: '#666243',
};

const orange = {
  basePlus90: '#FFF4EC',
  basePlus75: '#FFE3D1',
  basePlus50: '#FFC8A3',
  basePlus25: '#FFAD75',
  base: '#FF9248',
  baseMinus10: '#EA8948',
  baseMinus25: '#CC7D48',
  baseMinus50: '#996848',
  baseMinus75: '#665348',
};

const pink = {
  basePlus90: '#FFEBF1',
  basePlus75: '#FFCFDE',
  basePlus50: '#FF9FBD',
  basePlus25: '#FF6F9C',
  base: '#FF407B',
  baseMinus10: '#EA3F75',
  baseMinus25: '#CC3F6E',
  baseMinus50: '#993F61',
  baseMinus75: '#663E54',
};

const purple = {
  basePlus90: '#F7F1FC',
  basePlus75: '#EDDCF8',
  basePlus50: '#DBB9F1',
  basePlus25: '#C996EA',
  base: '#B873E4',
  baseMinus10: '#AA6DD4',
  baseMinus25: '#9665BD',
  baseMinus50: '#755896',
  baseMinus75: '#544B6F',
};

const indigo = {
  basePlus90: '#EFF0FE',
  basePlus75: '#D7DAFD',
  basePlus50: '#B0B6FC',
  basePlus25: '#8991FB',
  base: '#626DFA',
  baseMinus10: '#5D68E8',
  baseMinus25: '#5661CD',
  baseMinus50: '#4A55A1',
  baseMinus75: '#3E4974',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    fontSize: 16,
    body: {
      color: ambient.main,
    },
    body1: {
      color: ambient.main,
    },
    body2: {
      color: ambient.main,
    },
  },
  palette: {
    text: {
      color: ambient.main,
      primary: ambient.main,
    },
    accent: {
      ...accent,
      text: ambient.main,
      contrastText: '#fff',
    },
    ambient,
    primary: {
      light: accent.basePlus50,
      main: accent.main,
      dark: accent.baseMinus75,
    },
    secondary: {
      light: ambient.basePlus50,
      main: ambient.main,
      dark: ambient.baseMinus50,
    },
    blue,
    turquoise,
    green,
    lemon,
    sun,
    orange,
    pink,
    purple,
    indigo,
  },
});

function withTheme(Component) {
  function WithTheme(props) {
    // MuiThemeProvider makes the theme available down the React tree
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithTheme;
}

export default withTheme;
