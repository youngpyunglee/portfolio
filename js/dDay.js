var btn=document.getElementById('dDay');
btn.addEventListener('click', function(){

//현재
 var now=new Date();

 //만난 날 //var first=new Date(2021, 1, 12);
    var firstY=document.getElementById('y').value;
    var firstM=document.getElementById('m').value;
    var firstD=document.getElementById('d').value;

    var first=new Date(firstY, firstM-1, firstD)
  //passDay 변수
 

  //현재 - 처음 만난 날 = 밀리초
  var pass=now-first;
 

  //pass에 들어있는 밀리초를 하루 밀리초로 나눠서 몇일인지 
  var passDay=Math.floor(pass/(1000*60*60*24));
  document.getElementById('passDay').innerText=passDay+'일';

  //100일 뒤 처음만난 날(밀리초) + 100일(밀리초)
  //처음 만난 날 밀리초로 바꾸고
  var firstTime=first.getTime(); 
  //처음 만난 날 + 100일(밀리초)
  var future=firstTime + 100*(1000*60*60*24);
  //기념일 날짜 설정
  var some=new Date(future);
  
  //년 월 일 가져오기 getFullYear(), getMonth(), getDate() 
  /* var someY=some.getFullYear();
  var someM=some.getMonth()+1;
  var someD=some.getDate();
  document.getElementById('d100').innerText=someY+'년'+someM + '월' + someD + '일'; */

  function futureDay(days){
    var future=firstTime + days*(1000*60*60*24);
    var some=new Date(future);
    var someY=some.getFullYear();
    var someM=some.getMonth()+1;
    var someD=some.getDate();

    document.getElementById('d' +days).innerText=someY+'년'+someM + '월' + someD + '일';}
  
futureDay(100)
futureDay(1000)
futureDay(10000)
});
