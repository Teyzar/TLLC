import * as React from 'react';
// import MuiAvatar from '@mui/material/Avatar';
// import MuiListItemAvatar from '@mui/material/ListItemAvatar';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListSubheader from '@mui/material/ListSubheader';
// import Select, { SelectChangeEvent, selectClasses } from '@mui/material/Select';
// import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';
// import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
// import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded';
// import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import { Box, Typography } from '@mui/material';

// const Avatar = styled(MuiAvatar)(({ theme }) => ({
//   width: 28,
//   height: 28,
//   backgroundColor: (theme.vars || theme).palette.background.paper,
//   color: (theme.vars || theme).palette.text.secondary,
//   border: `1px solid ${(theme.vars || theme).palette.divider}`,
// }));

// const ListItemAvatar = styled(MuiListItemAvatar)({
//   minWidth: 0,
//   marginRight: 12,
// });

export default function SelectContent() {
  // const [company, setCompany] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setCompany(event.target.value as string);
  // };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3" align="center">
        TLLC
      </Typography>
    </Box>
  );
}