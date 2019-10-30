import React from 'react';
import AssigneModal from './AssigneModal'

import clsx from 'clsx';
import {ExpansionPanel,
   ExpansionPanelDetails,
   makeStyles,
   Divider,
   Button,
   Typography,
   ExpansionPanelSummary,
   ExpansionPanelActions
 } from '@material-ui/core';
import AlertDialog from './alert';
import {Draggable} from 'react-beautiful-dnd';


import  ruLocale  from 'date-fns/locale/ru'
import formatDistanceStrict from 'date-fns/formatDistanceStrict'



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
    justifyContent: 'space-around',
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
  some:{
    padding:0,
    margin:0,
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

  const generateNormaldate = isoDate =>{
    const date = formatDistanceStrict(new Date(isoDate), new Date(),
    { locale: ruLocale} )
    return date
  }
  console.log(props)
  const {title, discription, interval, taskAssignee, author, priority, id , index, access} = props
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
              aria-controls="panel1c-content"
              id="panel1c-header"
              classes={{content: classes.content, root: classes.some}}
              >

              <div className={classes.column}>
                <Typography className={classes.heading}>
                  {taskAssignee.length < 2  ? taskAssignee
                  : <AssigneModal taskAssigneeList={taskAssignee} />  }
                </Typography>
              </div>

              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  {title}
                </Typography>
              </div>
              <div className={classes.column}>
              <Typography
                className={classes.heading}>
                  dead-line <br/>
              </Typography>
              <Typography
                className={classes.heading+ ' ' +classes.boxSettime}>
                  {generateNormaldate(interval)}
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
              {access <= 1  ?
              <Button size="small"  disabled >
                Отменить
              </Button>
            : <Button size="small"   >
               Отменить
              </Button>}
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      )}
    </Draggable>
  );
}
export default  OneTodo
