import React from 'react';
import { Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LyricsIcon from '@mui/icons-material/Lyrics';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
// import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
// import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ChurchIcon from '@mui/icons-material/Church';

const mainListItems: ListItemType[] = [
  { text: 'Home', icon: <HomeRoundedIcon/>,  href: '/'},
  { text: 'Members', icon: <ChurchIcon />,  href: '/members' },
  { text: 'Worship Team', icon: <LyricsIcon />,  href: '/worship-team'},
  { text: 'Youths', icon: <PeopleRoundedIcon />,  href: '/youths'},
];


interface ListItemType {
  href: string;
  icon: React.ReactNode;
  text: string;
}


export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              selected={index === 0} // Select the first item (for example)
              component="a" // Use anchor tag to enable 'href'
              href={item.href}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Uncomment and modify to add secondary items */}
      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
