@echo off
echo Starting Frontend and Backend servers...

start cmd /k "cd frontend && npm start"
start cmd /k "cd backend-sql && npm start"


echo Servers are starting in new windows...