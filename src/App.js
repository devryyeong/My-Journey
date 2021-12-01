import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

//인자: 커스텀 스타일 객체(키:커스텀 스타일 객체의 클래스 이름, 값: 해당 클래스의 CSS 속성을 정의한 객체)
const useStyles = makeStyles((theme)=>({
  root: { 
    minHeight: '100vh',
    width: 600,
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/scbg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

//어떤 브라우저에서 돌아가느냐에 상관없이 일괄적인 스타일을 적용되려면, CSS를 전역에서 정규화(normalize)
function App(){
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <PlaceToVisit />
  </div> 
}

export default App;
