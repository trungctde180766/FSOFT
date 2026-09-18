# ⚡ ApexCore — 8-Week Entry Test & Audit Mastery System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![AI Engine](https://img.shields.io/badge/AI%20Engine-Google%20Gemini-orange.svg)](https://ai.google.dev/)

> **Hệ thống luyện thi cấp tốc toàn diện 8 tuần**: Làm chủ Java Core, Database & SQL, JavaWeb, Spring Framework, bài thi thực hành Practical Exam (PE) và chuẩn bị phỏng vấn Audit kỹ thuật 1-1.

---

## 🌟 Tính Năng Nổi Bật

- 🗺️ **Lộ Trình 8 Tuần Chuẩn Hóa (56 Ngày)**:
  - Phân bổ khoa học: Java Core căn bản, OOP, Collections, Multi-threading, SQL & JDBC, Web Servlet/JSP, Spring Boot & REST API.
  - Mỗi ngày gồm: Lý thuyết cô đọng, bài tập thực hành, bẫy biên dịch (Traps) và câu hỏi trắc nghiệm kiểm tra nhanh.

- 🧠 **Trợ Lý AI Mentor Tích Hợp (Google Gemini)**:
  - Tích hợp mô hình ngôn ngữ lớn để giải thích code, phân tích bẫy lỗi và hướng dẫn tối ưu thuật toán.
  - **Cơ chế xoay vòng thông minh (Multi-Key Rotation)**: Tự động phân phối tải giữa nhiều API keys, tự động hồi phục khi chạm rate-limit (429) và theo dõi quota/token thời gian thực.

- 💻 **Trình Chấm Code PE Thực Thi (Java 23 Runner)**:
  - Cho phép viết code trực tiếp trên trình duyệt, biên dịch và chạy qua bộ Test Cases tự động (công khai & test ẩn).
  - Báo cáo chi tiết: Trạng thái biên dịch (`ACCEPTED`, `WRONG_ANSWER`, `COMPILE_ERROR`, `TIMEOUT`), thời gian chạy (ms) và chi tiết so sánh output.

- 🎙️ **Mô Phỏng Phỏng Vấn Audit 1-1**:
  - Đề cương Top 50 câu hỏi "sát thủ" thường gặp trong các buổi phỏng vấn kỹ thuật trực tiếp.
  - Tích hợp ghi âm giọng nói (Web Audio MediaRecorder), đồng hồ đếm ngược 90s và checklist tự đánh giá.
  - Hỗ trợ xuất tài liệu Markdown và in trực tiếp ra file PDF chuyên nghiệp.

- 🍅 **Bộ Công Cụ Tối Ưu Học Tập**:
  - Pomodoro Timer tích hợp sẵn presets cho từng khung giờ học tập (Java Core 120m, Tech 45m, English 30m, ...).
  - Hệ thống Flashcards thuật toán lặp lại ngắt quãng (SM-2 Spaced Repetition).
  - Hiệu ứng âm thanh chân thực bằng Web Audio API (Zero-dependency).

---

## 🏗️ Cấu Trúc Dự Án

```
QAF/
├── api/                     # Vercel Serverless Functions
│   ├── _gemini.js           # Module quản lý Gemini API & xoay vòng key
│   ├── run-code.js          # Serverless handler cho POST /api/run-code
│   └── ai/
│       ├── index.js         # Serverless handler cho POST /api/ai
│       └── status.js        # Serverless handler cho GET /api/ai/status
├── data/                    # Dữ liệu đề thi, bài học, câu hỏi JSON
│   ├── audit_questions.json
│   ├── daily_lessons.json
│   ├── flashcards.json
│   ├── pe_problems.json
│   ├── quizzes.json
│   └── roadmap.json
├── index.html               # Giao diện chính Single Page Application (SPA)
├── style.css                # Hệ thống giao diện Dark Mode & Glassmorphism
├── app.js                   # Logic điều khiển frontend thuần ES6
├── data.js                  # Bộ dữ liệu nạp nhanh cho client
├── server.js                # Máy chủ Node.js phục vụ chạy Local
├── start_app.bat            # Script khởi động nhanh trên Windows
├── vercel.json              # Cấu hình routing & security headers cho Vercel
├── .vercelignore            # Tối ưu hóa file upload khi deploy Vercel
├── .gitignore               # Bảo vệ API keys và các file nhạy cảm
├── .env.example             # Mẫu thiết lập biến môi trường
└── package.json             # Cấu hình dự án & scripts chuẩn
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local

### Yêu Cầu Môi Trường
- **Node.js**: Phiên bản 18.0.0 trở lên
- **Java JDK** (Tùy chọn, để chấm code PE thực tế): JDK 21 hoặc JDK 23

### Các Bước Thực Hiện

1. **Clone mã nguồn về máy**:
   ```bash
   git clone <URL_REPOSITORY_CUA_BAN>
   cd QAF
   ```

2. **Cấu hình API Key**:
   Sao chép file `.env.example` thành `.env`:
   ```bash
   cp .env.example .env
   ```
   Mở `.env` và dán các Google Gemini API key của bạn vào (hỗ trợ dán trực tiếp nhiều key, mỗi dòng một key).

3. **Khởi động ứng dụng**:
   - **Cách 1 (Nhanh nhất trên Windows)**: Nhấp đúp vào file `start_app.bat`.
   - **Cách 2 (Qua dòng lệnh)**:
     ```bash
     npm start
     ```

4. **Truy cập ứng dụng**:
   Mở trình duyệt tại địa chỉ: `http://localhost:3000`

---

## ☁️ Hướng Dẫn Deploy Lên Vercel

Dự án đã được cấu hình chuẩn Serverless Native cho Vercel, cho phép bạn triển khai chỉ trong vài phút:

### Cách 1: Deploy qua Giao Diện Vercel Dashboard (Khuyên Dùng)

1. Đẩy mã nguồn lên tài khoản **GitHub** hoặc **GitLab** cá nhân.
2. Truy cập [Vercel Dashboard](https://vercel.com/dashboard) và chọn **Add New...** > **Project**.
3. Chọn Repository vừa tạo và nhấn **Import**.
4. Tại mục **Environment Variables**, thêm biến môi trường sau:
   - **Tên biến**: `GEMINI_API_KEYS`
   - **Giá trị**: Dán danh sách API key của bạn (cách nhau bởi dấu phẩy, ví dụ: `AIzaSyA...,AIzaSyB...,AIzaSyC...`)
5. Nhấn **Deploy**.
6. Vercel sẽ tự động build và cung cấp cho bạn một domain HTTPS tốc độ cao toàn cầu!

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài đặt Vercel CLI nếu chưa có
npm i -g vercel

# Đăng nhập và triển khai
vercel

# Thiết lập biến môi trường
vercel env add GEMINI_API_KEYS
```

> **Lưu ý về tính năng chấm code PE trên Vercel**:  
> Môi trường đám mây Vercel Serverless (AWS Lambda) mặc định chỉ có Node.js runtime, không chứa sẵn bộ cài Java JDK. Vì vậy, hệ thống đã được thiết lập cơ chế thông minh:
> - Các tính năng Lộ trình học, Lý thuyết, Trắc nghiệm, Flashcards, Mô phỏng Audit và Trợ lý AI hoạt động **100% hoàn hảo trên Vercel**.
> - Đối với tính năng nộp và chấm điểm code Java trực tiếp, bạn nên chạy trên môi trường máy cá nhân (`npm start`) có cài đặt Java JDK để đạt kết quả biên dịch thực tế chính xác nhất.

---

## 🔒 Bảo Mật & Best Practices

- **Bảo vệ API Key**: File `.env` chứa khóa API thực tế đã được khai báo trong `.gitignore` và `.vercelignore`. Tuyệt đối không xóa `.env` khỏi `.gitignore` để tránh bị lộ mã truy cập lên GitHub.
- **Tối ưu hóa dung lượng Deploy**: Thư mục `source/` chứa các tài liệu sách giáo trình nặng (~20MB) được cách ly tự động khi deploy Vercel thông qua `.vercelignore`, giúp website nạp nhanh và tiết kiệm băng thông.

---

## 📄 Bản Quyền & Giấy Phép

Dự án được phân phối dưới giấy phép [MIT License](LICENSE).
Mọi đóng góp (Pull Request) và phản hồi cải tiến tính năng đều được hoan nghênh!
