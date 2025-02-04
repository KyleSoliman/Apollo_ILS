@echo off
echo Starting Frontend and Backend servers...

start cmd /k "cd frontend && npm install"
start cmd /k "cd backend-sql && npm install"

echo Servers are installing npm pkgs in new windows... please wait to finish