
import React, {useState} from 'react';
import  { Route, NavLink as Link , Switch } from "react-router-dom";

import PropTypes from 'prop-types';
import Welcomeback  from './Welcomeback/welcomeback';
import Loading  from './Loading/Loading';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsIcon from '@material-ui/icons/Settings';


import DialogList from './../Chat/Dialoglist';
import Todos from './../Todo/Todos';
import { Settings } from './DrawerOptions/index';

const drawerWidth = 210

const TabPanel = (props) => {
  const { children } = props
  return (
    <Typography
      component="div"
      role="tabpanel"
>
      <Box style = {{padding: '0'}} p={2}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#fff',
    color: 'red',
    margin: '0px',
  },
  tabeeee :{
    width: '100%',
    color: "rgb(253, 253, 252)"
  },
  draw: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'rgb(250, 114, 104)',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 0,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: 'rgb(255, 128, 119)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: 'rgb(255, 128, 119)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    color: 'rgb(253, 253, 252)',
    ...theme.mixins.toolbar,
  },
  customToolbar: {
    color: 'rgb(253, 253, 252)',
    minWidth:'24px'
  },
  content: {
    flexGrow: 1,
  },
  noshadow:{
    boxShadow: 'none',
    border: 'none',
    backgroundColor: 'rgb(250, 114, 104)',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    textDecoration: 'none',
  },
  tabiPanel:{
    marginBottom: '0',
  },
  listItemText:{
    paddingLeft: '15px',
    color: 'aliceblue'
  },
  link:{
    textDecoration: 'none',
  }

}));

const Template = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen =()=> {
    setOpen(true);
  }

  const  handleDrawerClose =()=> {
    setOpen(false);
  }

  return (
    <>
    <div className={classes.draw}>
      <CssBaseline />
         <Welcomeback />
         <div style={{display: 'none'}}><Loading  /></div>

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            >
            <MenuIcon />
          </IconButton>
          <div className ={classes.noshadow}>

              <Link to="/todos" activeStyle={{color: 'red'}}  className={classes.link}>
              <Tab label="Задачи" className={classes.tabeeee}   />
              </Link>

              <Link to="/dialogs"
                activeStyle={{color: 'white'}}
                className={classes.link}>
              <Tab label="Сообщения" className={classes.tabeeee}   />
              </Link>

          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
        >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction = <ChevronRightIcon /> }
            </IconButton>
          </div>
          <Divider />

          <List>
            {[ 'Новые задачи', 'Командные задачи', 'Мои задачи', 'На расмотрении'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.customToolbar}>
                  {index  === 0 &&  <AssignmentIcon /> }
                  {index  === 1 &&  <GroupIcon /> }
                  {index  === 2 &&  <AssignmentInd /> }
                  {index  === 3 &&  <AssignmentLateIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>

          <Divider />
          <List>

            {[ 'Создать задачу', 'Все задачи', 'Архив',].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.customToolbar}>
                  {index === 0 && <PlaylistAddIcon /> }
                  {index === 1 && <AllInboxIcon /> }
                  {index === 2 && <AssignmentReturnedIcon /> }
                </ListItemIcon>
                <ListItemText primary={text} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>

          <Divider />


            <List style={{position: 'absolute', width: '100%', bottom:'6%'}} >
              <Divider />
              {[ 'Настройки',].map((text, index ) => (
              <Link to = "/settings" key={index}>
                <ListItem button key={text}>
                  <ListItemIcon className={classes.customToolbar}>
                    {index === 0 && <SettingsIcon /> }
                  </ListItemIcon>
                  <ListItemText primary={text} className={classes.listItemText} />
                </ListItem>
              </Link>
              ))}
                <Divider />
            </List>




        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route  path= '/todos' component={Todos} />
            <Route exact path= '/dialogs' component={DialogList} />

            <Route  path= '/settings' component={Settings} />
          </Switch>

      </main>
      </div>
      </>
  );
}
export default Template
