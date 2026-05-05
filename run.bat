@echo off
SETLOCAL EnableDelayedExpansion
title Heritage Immersive Launcher
color 0B

echo.
echo ==============================================================
echo           HERITAGE IMMERSIVE - SYSTEM LAUNCHER
echo ==============================================================
echo.

echo [1/4] Checking environment...
if not exist "node_modules\" (
    echo [WAIT] Installing dependencies...
    call npm install --quiet
)
echo [OK] Environment verified.

echo [2/4] Cleaning up network ports...
powershell -Command "Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }"
echo [OK] Port 3000 is clear.

echo [3/4] Starting Heritage Server...
:: Start node in a separate hidden window to avoid cluttering
start /B "Heritage Backend" cmd /c "node server.js > server_log.txt 2>&1"

echo [4/4] Launching Discovery...
timeout /t 3 /nobreak > nul
start "" "http://localhost:3000/frontend/index.html"

echo.
echo ==============================================================
echo    SYSTEM IS ACTIVE!
echo    Dashboard: http://localhost:3000/frontend/index.html
echo ==============================================================
echo.
echo Press any key to exit this launcher (Server will stay running).
pause > nul
