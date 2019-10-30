import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import  socket  from './../../../core/socket'
import { Link } from 'react-router-dom'
import { makeStyles,Card,
 CardActionArea, CardActions,
  CardContent, Button,
  Typography} from '@material-ui/core'

import Mail from './../../../assets/sendmail.gif'
import ok from './../../../assets/ok.gif'

import {userApi} from './../../../core/api/index'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  header:{
    height: '10vh',
    width: '100%',
    backgroundColor: '#33CABB',
    color: '#fff',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  img:{
    width:'52%',
    height: '35%',
  },
  img2:{
    width:'42%',
  },
});

const  Verification = ({location, confirmed }) => {
 const classes = useStyles();
 const [ verified, setVerified] = useState(false)
  console.log(location)

  useEffect(()=>{
  const hash = location.search.split('hash=')[1]
    if(hash ||  "" || " "){
      userApi.verifyHash(hash)
    }
      })

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.header} >
          <Typography gutterBottom variant="h5" component="h2">
            Добро пожаловать!
          </Typography>
        </div>
        <CardContent className={classes.card} >
          {!verified ?
            <img src={Mail} alt='mail' className={classes.img}></img>
          :
            <img src={ok} alt='ok' className={classes.img2}></img>
          }
          <Typography variant="body2" color="textSecondary" component="p">
            { !verified ?
              <span>
                Благодарим за регистрацию!<br /> последний шаг: вам необходимо подтвердить почту и перейти по ссылке в письме
              </span>
                  :
              <>
                Все в порядке, регистрация подтвержена! Перейти на страницу
                <br /><br />
                <Link to="/registration">индификации</Link>
              </>
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        { !verified ?
          <>
          <Button size="small" color="primary">
            Отправить письмо еще раз
          </Button>
          <Button size="small" color="primary">
            кнопка
          </Button>
          </>
        :null}
      </CardActions>
    </Card>
  )
}

const mapStateToProps=(state)=>{
  return{
     confirmed: state.user.data.confirmed
  }
}
export default connect(mapStateToProps)(Verification)
