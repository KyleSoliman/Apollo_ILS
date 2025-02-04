```batch
@echo off
:: Check for admin privileges
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Requesting administrative privileges...
    powershell Start-Process -FilePath "%0" -Verb RunAs
    exit /b
)

setlocal enabledelayedexpansion

:: Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo Node.js is already installed
) else (
    echo Node.js is not installed
)

:: Check if NVM is installed
where nvm >nul 2>&1
if %errorlevel% equ 0 (
    echo NVM is already installed
) else (
    echo Installing NVM for Windows...
    curl -o nvm-setup.exe https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe
    nvm-setup.exe /SILENT
    del nvm-setup.exe
)

:: Check and update PATH without duplicates
if not "!PATH!" == "!PATH:NVM_HOME=!" (
    echo NVM paths already in PATH
) else (
    set "PATH=%PATH%;%NVM_HOME%;%NVM_SYMLINK%"
    echo Added NVM paths to PATH
)

:: Install latest Node.js version
echo Installing latest Node.js version...
nvm install latest

:: Install specific Node.js version (32-bit)
echo Installing Node.js 8.11.4 32-bit...
nvm install 8.11.4 32

:: Switch to Node.js 8.11.4 32-bit
echo Switching to Node.js 8.11.4 32-bit...
nvm use 8.11.4 32
node -v

echo Installation complete!
pause

```