import React, {useState} from 'react';
import  { Route, NavLink as Link , Switch } from "react-router-dom";
import  { connect } from "react-redux";
import  { tasksActions } from "./../../redux/actions";

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
      role="tabpanel">
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

const Template = ({ hierarchy, fetchAllTasks }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('app');
  const[DrawerItems] = useState({
    userOption:[
      {
        label: 'Новые задачи',
        Icon: AssignmentIcon,
        Action: ()=>alert('Новые задачи')
      },
      {
        label: 'Командные задачи',
        Icon: GroupIcon,
        Action: ()=>alert('Командные задачи')
      },
      {
        label: 'Мои задачи',
        Icon: AssignmentInd, 
        Action: ()=>alert('Мои задачи')
      },
      {
        label: 'На расмотрении',
        Icon: AssignmentLateIcon,
        Action: ()=>alert('На расмотрении')
      },
    ],
    managerOption:[
      {
        label: 'Все задачи',
        Icon: AllInboxIcon,
        Action: fetchAllTasks
      },
      {
        label: 'Архив',
        Icon: AssignmentReturnedIcon,
        Action: ()=>alert('label')
      }
    ],
  })
  const onClick = content => () => {
    setOpen(false)
    setContent(content)
  }

  const ListItems = ({ DrawerItems, onClick }) =>
    DrawerItems.filter(({hidden})=> !hidden)
            .map(({label,Icon, Action}, i )=>(
              <ListItem
                button
                key={i}
                onClick ={onClick(label), Action}>
              <ListItemIcon className={classes.customToolbar}>
                <Icon />
              </ListItemIcon>
              <ListItemText
                className={classes.listItemText}>
                {label}
              </ListItemText>
              </ListItem>
            ))


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
            <List>
              <ListItems
                DrawerItems = {DrawerItems.userOption}
                onClick = {onClick}/>
            </List>
          </List>

          <Divider />

          <List>
           {[ 'Создать задачу'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.customToolbar}>
               { index === 0 && <CreateTask />}
                </ListItemIcon>
                <ListItemText primary={text} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>
          <Divider />

        { hierarchy >1 ?
          <>
          <List>
            <ListItems
              DrawerItems = {DrawerItems.managerOption}
              onClick = {onClick}/>
          </List>
          <Divider />
          </>:
          null}

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

            <Route exact path= '/tasks/getall'/>


            <Route  path= '/settings' component={Settings} />
          </Switch>

      </main>
      </div>
      </>
  );
}

export default connect( ({ user }) => ({ hierarchy: user.data.hierarchy }),
(tasksActions) )(Template)
