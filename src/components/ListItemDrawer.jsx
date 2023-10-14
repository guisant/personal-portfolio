import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function ListItemDrawer() {
    return (
        <List>
          <ListItem disablePadding>
            <ListItemButton href="#bannerHome" sx={{ textAlign: 'center' }}>
              <ListItemText>
                Home
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#aboutMe" sx={{ textAlign: 'center' }}>
              <ListItemText>
                Sobre mim
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#experiences" sx={{ textAlign: 'center' }}>
              <ListItemText>
                Experiências
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#projects" sx={{ textAlign: 'center' }}>
              <ListItemText>
                Projetos
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#contact" sx={{ textAlign: 'center' }}>
              <ListItemText>
                Contato
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
    )
}



