#!/bin/bash

# MyHome Server Runner
# 개발 서버와 프로덕션 빌드 & 실행을 관리하는 스크립트

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 헬퍼 함수
print_header() {
  echo -e "${BLUE}========================================${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}========================================${NC}"
}

print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

print_info() {
  echo -e "${YELLOW}ℹ $1${NC}"
}

# 의존성 확인
check_dependencies() {
  print_header "의존성 확인 중..."

  if ! command -v node &> /dev/null; then
    print_error "Node.js가 설치되어 있지 않습니다"
    exit 1
  fi
  print_success "Node.js: $(node --version)"

  if ! command -v npm &> /dev/null; then
    print_error "npm이 설치되어 있지 않습니다"
    exit 1
  fi
  print_success "npm: $(npm --version)"
}

# 의존성 설치
install_dependencies() {
  if [ ! -d "node_modules" ]; then
    print_header "npm 패키지 설치 중..."
    npm install
    print_success "npm 설치 완료"
  else
    print_info "node_modules가 이미 존재합니다"
  fi
}

# 개발 서버 실행
run_dev() {
  print_header "개발 서버 시작 중..."
  print_info "http://localhost:3000 에서 접속하실 수 있습니다"
  print_info "Ctrl+C로 종료합니다"
  npm run dev
}

# 프로덕션 빌드
build_production() {
  print_header "프로덕션 빌드 시작..."
  npm run build
  if [ $? -eq 0 ]; then
    print_success "빌드 완료"
  else
    print_error "빌드 실패"
    exit 1
  fi
}

# 프로덕션 서버 실행
run_production() {
  build_production
  print_header "프로덕션 서버 시작 중..."
  print_info "http://localhost:3000 에서 접속하실 수 있습니다"
  npm start
}

# 린트 실행
run_lint() {
  print_header "린트 체크 중..."
  npm run lint || print_info "린트 경고가 있습니다"
}

# 도움말 출력
show_help() {
  echo "MyHome Server Runner"
  echo ""
  echo "사용법: ./run-server.sh [명령]"
  echo ""
  echo "명령어:"
  echo "  dev           개발 서버 실행 (기본값)"
  echo "  prod          프로덕션 빌드 및 실행"
  echo "  build         프로덕션 빌드만 실행"
  echo "  start         빌드된 프로덕션 서버 실행"
  echo "  install       의존성 설치"
  echo "  lint          코드 린트"
  echo "  help          이 헬퍼 출력"
  echo ""
  echo "예제:"
  echo "  ./run-server.sh dev"
  echo "  ./run-server.sh prod"
}

# 메인 로직
main() {
  check_dependencies
  install_dependencies

  case "${1:-dev}" in
    dev)
      run_dev
      ;;
    prod)
      run_production
      ;;
    build)
      build_production
      ;;
    start)
      run_production
      ;;
    install)
      install_dependencies
      ;;
    lint)
      run_lint
      ;;
    help)
      show_help
      ;;
    *)
      print_error "알 수 없는 명령: $1"
      show_help
      exit 1
      ;;
  esac
}

main "$@"
