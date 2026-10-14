# Docker Lab — Next.js + TypeScript

โปรเจกต์ต้นแบบสำหรับใช้เป็นจุดเริ่มต้นของการสอน Docker ปัจจุบันเป็นเว็บแอป Next.js ที่รันบนเครื่องโดยตรง เพื่อให้เริ่มเพิ่มบทเรียน Docker ในขั้นถัดไปได้

## สถานะปัจจุบัน

- Next.js App Router, React และ TypeScript
- หน้าเริ่มต้นภาษาไทย พร้อมแสดงสถานะของโปรเจกต์
- ยังไม่มี Dockerfile, Compose, container หรือการเชื่อมต่อบริการภายนอก
- ยังไม่ได้เริ่ม Git repository หรือเชื่อม remote

## เริ่มรันเว็บ

เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วสั่ง:

    npm run dev

จากนั้นเปิด http://localhost:3000

หากติดตั้ง dependencies ใหม่ ให้สั่ง npm install ก่อนเริ่มรัน

## คำสั่งที่มี

- npm run dev — เปิดเซิร์ฟเวอร์สำหรับพัฒนา
- npm run build — สร้าง production build
- npm start — เปิด production server หลัง build
- npm run lint — ตรวจรูปแบบโค้ดด้วย ESLint

## จุดเริ่มต้นของโค้ด

- src/app/page.tsx — เนื้อหาหน้าแรก
- src/app/globals.css — สไตล์ของหน้า
- src/app/layout.tsx — metadata และ root layout
- package.json — dependencies และคำสั่งของโปรเจกต์