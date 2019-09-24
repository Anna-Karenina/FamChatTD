import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link  } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
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



import ChatContainer from './../Chat/Chat';
import Todos from './../Todo/Todos';


const drawerWidth = 210

const TabPanel = (props) => {
  const { children, value, index, ...other } = props
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
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

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

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
  },
  tabiPanel:{
    marginBottom: '0',
  },
  listItemText:{
    paddingLeft: '15px',
    color: 'aliceblue'
  },

}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleChange= (event, newValue) => {
    setValue(newValue);
  }
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
          <AppBar position="static"  className ={classes.noshadow}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered={true}
              variant='fullWidth'
              scrollButtons="off"
              indicatorColor="off"
              >
              <Tab label="Задачи" className={classes.tabeeee} fullWidth={true} {...a11yProps(0)} />
              <Tab label="Сообщения"  className={classes.tabeeee} fullWidth={true} {...a11yProps(1)} />
            </Tabs>
          </AppBar>
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

            {[ 'Просмотр задач', 'Создать задачу', 'Архив','login'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon className={classes.customToolbar}>
                  {index === 0 && <AllInboxIcon /> }
                  {index === 1 && <PlaylistAddIcon /> }
                  {index === 2 && <AssignmentReturnedIcon /> }
                  {index === 3 && <Link to='/login'>login</Link> }
                </ListItemIcon>
                <ListItemText primary={text} className={classes.listItemText} />
              </ListItem>
            ))}
          </List>

          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <TabPanel value={value} index={0}>

              <Todos />

            </TabPanel>
            <TabPanel className={classes.tabiPanel} value={value} index={1}>

              <ChatContainer />

            </TabPanel>

        </main>
      </div>
      </>
  );
}
