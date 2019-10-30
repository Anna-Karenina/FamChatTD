import React, {useState} from 'react';
import  { Route, NavLink as Link , Switch } from "react-router-dom";

import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,Toolbar,List,AppBar,CssBaseline,Tab,Typography,Box,Divider,IconButton,
  ListItem,ListItemIcon,ListItemText,} from '@material-ui/core';

import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import GroupIcon from '@material-ui/icons/Group';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import SettingsIcon from '@material-ui/icons/Settings';


import DialogList from './../Dialogs/Dialoglist';
import Tasks from './../Tasks/Tasks';
import { Settings, CreateTask } from './DrawerOptions/index';
import Welcomeback  from './Welcomeback/welcomeback';
import Loading  from './Loading/Loading';

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
    minWidth:'24px',
    width:'24px'
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

              <Link to="/tasks" activeStyle={{color: 'red'}}  className={classes.link}>
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
                  <span onClick={()=>alert(text)}>
                    {index  === 0 &&  <AssignmentIcon />}
                  </span>
                  <span onClick={()=>alert(text)}>
                  {index  === 1 &&  <GroupIcon /> }
                  </span>
                  <span onClick={()=>alert(text)}>
                  {index  === 2 &&  <AssignmentInd /> }
                  </span>
                  <span onClick={()=>alert(text)}>
                  {index  === 3 &&  <AssignmentLateIcon /> }
                  </span>
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
                  {index === 0 && <CreateTask /> }
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
            <Route  path= '/tasks' component={Tasks} />
            <Route exact path= '/dialogs' component={DialogList} />

            <Route  path= '/settings' component={Settings} />
          </Switch>

      </main>
      </div>
      </>
  );
}
export default Template
