import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AlertDialog from './alert';
import {Draggable} from 'react-beautiful-dnd';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '.5% 5%',
    '&:first-child':{
      paddingTop: '4%',
    },
  },
  heading: {
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.text.secondary,
  },
  content : {
    display: 'flex',
    justifyContent: 'space-between'
  },
  details:{
    padding: '0px 2% 5%'
  },
  author: {
    fontSize: theme.typography.pxToRem(8),
    color: theme.palette.text.secondary,
    alignItems:'flex-end',
    maxWidth: '15%',
    minWidth: '15%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  secondaryHeading: {
    lineHeight: 'normal',
    fontSize: theme.typography.pxToRem(16),
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  column: {
    textAlign: 'center'
  },
  columneeee: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(0.5, 1),
  },
  boxSettime: {
    fontSize: "8px" ,
    fontWeight: "600",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  priority1:{
    backgroundColor: 'rgba(254, 57, 57, .7)'
  },
  priority2:{
    backgroundColor: 'rgba(255, 214, 0, .7)'
  },
  priority3:{
    backgroundColor: 'rgba(255, 255, 0, .7)'
  },
  priority4:{
    backgroundColor: 'rgba(0, 200, 83, .7)'
  },
}));

const OneTodo = (props) => {
  console.log(props)
  const {title, discription, interval, towhomisaddressed, author, priority, id , index} = props
  const classes = useStyles();
  return (

    <Draggable draggableId = {id} index={index}>
      {(provided)=>(
        <div
          className={classes.root}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}>
          <ExpansionPanel
            classes={{root: classes[priority] }}
            >{/* суууукаааа 2 дня!!!! */}
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              classes={{content: classes.content}}
              >
              <div className={classes.column}>
                <Typography
                  className={classes.heading+ ' ' +classes.boxSettime}>
                    {interval}
                </Typography>
                <Typography className={classes.heading}>
                  {towhomisaddressed}
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {title}
                </Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>

              <div className={classes.author}>
                <p>Созданно: 11.09</p>
                <p >Автор : {author}</p>
              </div>
              <div className={classes.column}>


                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    <p>{discription}</p>
                    <br />
                    <a href="#sub-labels-and-columns" className={classes.link}>
                      Открыть чат
                    </a>
                  </Typography>
                </div>
              </div>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
              <div className={classes.column}>
                <AlertDialog label="Выполненно"/>
              </div>
              <Button size="small">Отменить</Button>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      )}
    </Draggable>
  );
}
export default  OneTodo
