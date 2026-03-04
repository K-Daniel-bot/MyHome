@echo off
REM MyHome Server Runner (Windows)

setlocal enabledelayedexpansion

cd /d "%~dp0"

REM 색상 설정
set "GREEN=[92m"
set "RED=[91m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "NC=[0m"

REM 헬퍼 함수
:print_header
echo.
echo %BLUE%========================================%NC%
echo %BLUE%%~1%NC%
echo %BLUE%========================================%NC%
exit /b

:print_success
echo %GREEN%[OK] %~1%NC%
exit /b

:print_error
echo %RED%[ERROR] %~1%NC%
exit /b

:print_info
echo %YELLOW%[INFO] %~1%NC%
exit /b

REM 의존성 확인
call :print_header "Checking dependencies..."

where /q node >nul 2>nul
if errorlevel 1 (
  call :print_error "Node.js is not installed"
  exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VER=%%i
call :print_success "Node.js: %NODE_VER%"

where /q npm >nul 2>nul
if errorlevel 1 (
  call :print_error "npm is not installed"
  exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VER=%%i
call :print_success "npm: %NPM_VER%"

REM 의존성 설치
if not exist "node_modules" (
  call :print_header "Installing npm packages..."
  call npm install
  if errorlevel 1 (
    call :print_error "npm install failed"
    exit /b 1
  )
  call :print_success "npm installation complete"
) else (
  call :print_info "node_modules already exists"
)

REM 명령 처리
set "CMD=%1"
if "!CMD!"=="" set "CMD=dev"

if "!CMD!"=="dev" (
  call :print_header "Starting development server..."
  call :print_info "Visit http://localhost:3000"
  call :print_info "Press Ctrl+C to stop"
  call npm run dev
  exit /b
)

if "!CMD!"=="prod" (
  call :print_header "Building for production..."
  call npm run build
  if errorlevel 1 (
    call :print_error "Build failed"
    exit /b 1
  )
  call :print_success "Build complete"
  call :print_header "Starting production server..."
  call :print_info "Visit http://localhost:3000"
  call npm start
  exit /b
)

if "!CMD!"=="build" (
  call :print_header "Building for production..."
  call npm run build
  if errorlevel 1 (
    call :print_error "Build failed"
    exit /b 1
  )
  call :print_success "Build complete"
  exit /b
)

if "!CMD!"=="start" (
  call :print_header "Starting production server..."
  call :print_info "Visit http://localhost:3000"
  call npm start
  exit /b
)

if "!CMD!"=="install" (
  call :print_header "Installing dependencies..."
  call npm install
  exit /b
)

if "!CMD!"=="lint" (
  call :print_header "Running linter..."
  call npm run lint
  exit /b
)

if "!CMD!"=="help" (
  echo.
  echo MyHome Server Runner
  echo.
  echo Usage: run-server.bat [command]
  echo.
  echo Commands:
  echo   dev           Run development server (default)
  echo   prod          Build and run production server
  echo   build         Build for production only
  echo   start         Run built production server
  echo   install       Install dependencies
  echo   lint          Run code linter
  echo   help          Show this help message
  echo.
  echo Examples:
  echo   run-server.bat dev
  echo   run-server.bat prod
  exit /b
)

call :print_error "Unknown command: !CMD!"
call :print_info "Run 'run-server.bat help' for available commands"
exit /b 1
