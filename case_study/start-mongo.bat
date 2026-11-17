@echo off
echo ============================================
echo  Starting MongoDB Community Edition...
echo ============================================
if not exist "C:\data\db" mkdir C:\data\db
echo Data folder: C:\data\db

REM Try version 8.0 first, then 7.0, then 6.0
if exist "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" (
    start "MongoDB" "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath="C:\data\db"
    goto :done
)
if exist "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" (
    start "MongoDB" "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
    goto :done
)
if exist "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" (
    start "MongoDB" "C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe" --dbpath="C:\data\db"
    goto :done
)
echo ERROR: MongoDB not found! Install from https://www.mongodb.com/try/download/community
pause
exit /b 1

:done
echo MongoDB started successfully!
echo Now run:  npm start
timeout /t 2
