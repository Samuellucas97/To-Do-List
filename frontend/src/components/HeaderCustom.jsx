import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DoneIcon from "@material-ui/icons/Done";
import AddBoxIcon from '@material-ui/icons/AddBox';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import NewReleasesIcon from '@material-ui/icons/NewReleases';


import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const history = useHistory();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key="Início">
          <ListItemIcon>
            {" "}
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Início"} onClick={() => history.push('/home')} />
        </ListItem>
        <ListItem button key="Perfil" onClick={() => history.push('/profile')}>
          <ListItemIcon>
            {" "}
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Perfil"}  />
        </ListItem>
        <ListItem button key="Notificações">
          <ListItemIcon>
            {" "}
            <NotificationsIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Notificações"} onClick={() => history.push('/notifications')} />
        </ListItem>
      </List> 
      <Divider />
      <List>
        <ListItem button key="Tarefas pendentes" onClick={() => history.push('/tasks/pendings')}>
          <ListItemIcon>
            {" "}
            <NewReleasesIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Tarefas pendentes"}  />
        </ListItem>
        <ListItem button key="Tarefas agendadas" onClick={() => history.push('/tasks/scheduleds')}>
          <ListItemIcon>
            {" "}
            <QueryBuilderIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Tarefas agendadas"}  />
        </ListItem>
        <ListItem button key="Tarefas concluídas" onClick={() => history.push('/tasks/finisheds')} >
          <ListItemIcon>
            {" "}
            <DoneIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Tarefas concluídas"}  />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Sair" onClick={() => history.push('/')}>
          <ListItemIcon>
            {" "} 
            <ExitToAppIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Sair"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Lista de tarefas
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => history.push('/tasks/new')}>
                <AddBoxIcon />
              </IconButton>

            </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func
};

export default ResponsiveDrawer;
