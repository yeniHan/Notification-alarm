![Alt text](/Notification-alarm.jpg?raw=true "Demo image")

# Notification-alarm

Web socket API 기술을 이용한 실시간 공지 알람 어플리케이션 입니다. 

[Summary]

1) React 메플리케이션 입니다.

2) Web socket API
  서버와 유저간의 실시간 데이터 커뮤니케이션을 위해 web socket 기술이 사용되었습니다. 
  이를 위해 Node.js의 "socket.io" 과 "socket.io-client" 라이브러리를 사용하였습니다.

3) SPA(Single Page application)
  하나의 웹 페이지를 기반으로 실행되는 어플리케이션입니다.

4) 기능 설명
  a. 공고 알람 시간 간격
    매 초마다 서버로 부터 새 공고가 전송됩니다.
  b. Display
    - 화면에는 오직 세개의 최근 전송된 공고만이 보여지게 됩니다.
    - 매 10초마다 화면에 뜬 공고들은 자동적으로 사라지게 됩니다.
  c. 삭제 기능
    close 버튼을 누름으로써 해당 공고를 삭제할 수 있습니다.


[Note]
- Demo를 위한 공고 dataset는 데이타베이스를 사용하지 않고, object 로 server.js에 import 되어 있습니다.


----------------------------------------------------------------------------------------------------------------------------------------


# Notification-alarm

Real-time react app using web socket. 

This is a react application which sends notifications to users in real time.


[Summary]

1) React application.

2) Web socket API
  For real-time communication between the server and users, web socket API was used. 
  "socket.io" and "socket.io-client" of Node.js libararies were used.

3) SPA(Single Page application)

4) Functionalities
  a. Notification time interval
    Every one second, from the server, a new notification comes. 
  b. Display
    - Only the lastest 3 notifications are displayed. 
    - Every 10 second, all existing notifications are disappeared automatically.
  c. Delete function
    By clicking the close button of each notification box, a user can remove it.


[Note]
- Demo dataset for notifications was imported in the server.js as an object. (No database was used.)
