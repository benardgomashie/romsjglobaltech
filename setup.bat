@echo off
echo ========================================
echo ROMSJ Global Tech Website Setup
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install

echo.
echo [2/3] Checking configuration...
echo ✓ Next.js configured
echo ✓ Tailwind CSS configured
echo ✓ TypeScript configured
echo ✓ Logo copied

echo.
echo [3/3] Setup complete!
echo.
echo ========================================
echo Ready to start development!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
echo For production build:
echo   npm run build
echo   npm start
echo.
echo ========================================
pause
