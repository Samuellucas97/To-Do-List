import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import NotificationsIcon from '@material-ui/icons/Notifications';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'auto',
    fontSize: '25px'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>

      <Button variant="contained" component={RouterLink} to={'/profile'} size="small">Meus dados</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        
        <Button variant="outlined" color="secondary" component={RouterLink} to={"/tasks/new"} size="small">
          nova tarefa
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            component={RouterLink}
            to={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};