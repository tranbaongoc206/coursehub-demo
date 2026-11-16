# Buổi 6 - Docker, Testing, CI

## Môi trường
- OS: Windows 11
- Docker version: 28.5.1
- Python / Node version: Python 3.12 / Node 22

## Kết quả local
- pytest backend/tests -q: 2 passed
- npm test: 8 passed
- npm run build: Thành công, tạo dist/
- docker compose up --build: Thành công, frontend/backend healthy

## Một luồng tích hợp đã kiểm tra
- Request: Đăng ký WEB-01 cho student 22000004 qua UI 8080
- HTTP status: 201 Created
- SQL xác nhận: Bảng enrollments có bản ghi, log CREATED

## Debug / AI
- Lỗi gặp phải: pytest báo ModuleNotFoundError 'backend'
- Bằng chứng đã xem: Đọc log terminal
- Cách xử lý: Chuyển sang dùng `python -m pytest`
- AI: Nhờ AI giải thích lỗi này, đã xác minh bằng cách chạy lệnh python -m pytest thành công.

## Pull Request / CI
- PR: #1
- Reviewer: Nguyễn Văn A
- CI run: Pass cả 3 job