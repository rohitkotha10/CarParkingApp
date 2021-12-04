import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <svg width="150" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 150,0 150,50" className="bg" />
      <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="150" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${
    theme.palette.mode === 'light' ? '#ffffff' : '#303641'
  };
  --hover-color: ${
    theme.palette.mode === 'light'
      ? '#1d1f20'
      : '#373b3d'
  };
  --active-color: ${
    theme.palette.mode === 'light'
      ? '#1d1f20'
      : '#ffffff'
  };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family:Chilanka,cursive;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

const useStyles = makeStyles(() => ({
  selectstyle: {
    background: "#373b3d"
  },
  whiteColor: {
    color: "white"
  },
  root: {
    "& .MuiFilledInput-root": {
      background: "#373b3d"
    },

  },
}));

export default function Dashboard_User() {
  const styletheme = createTheme({
    typography: {

      fontFamily: [
        'Chilanka',
        'cursive',
      ].join(','),
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {

        dark: '#1d1f20',
        main: '#303641',
        background: '#373b3d',
        contrastText: '#ffffff',
      },
      neutral: {
        main: '#ffffff',
        '&:active':{
          main: '#303641'
        }
      },
    },

  })

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={styletheme}>
    <Stack direction="row">
      <Box sx={{
                width: 300,
                height: 530,
                backgroundColor: 'secondary.dark',
              }} >
<Button sx={{width: 175}} color="neutral">Home</Button>
<Button sx={{width: 175}} color="neutral">Profile Info</Button>
<Button sx={{width: 175}} color="neutral" >Previous Orders</Button>
<Button sx={{width: 175}} color="neutral">Booking</Button>
      </Box>
      <div>
        <Box sx={{width: 500, height: 530, backgroundColor: 'secondary.background'}} pt={2} pl={2}>
        <Box pl={40} mb={-3}><Button color="neutral">Signout</Button></Box>
        <Typography color='secondary.contrastText'>Welcome email! You are type </Typography>
        <Box pt={4} pl={4}><SvgButton>
          New Order
        </SvgButton></Box>
        <Box pt={4} pl={4}><SvgButton>
          Make a Payment
        </SvgButton>
        </Box>
        </Box>
      </div>
    </Stack>
    </ThemeProvider>
    </div>
    
  );
}
