const projectStatus = [
  { label: "Framework", value: "Next.js App Router", state: "พร้อมใช้งาน", ready: true },
  { label: "ภาษา", value: "TypeScript", state: "พร้อมใช้งาน", ready: true },
  { label: "Docker", value: "ยังไม่ได้ตั้งค่า", state: "รอเริ่มบทเรียน", ready: false },
  { label: "Git", value: "ยังไม่ได้เชื่อมต่อ", state: "ยังไม่มี repository", ready: false },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Docker Lab หน้าแรก">
          <span className="brand-mark" aria-hidden="true">DL</span>
          <span className="brand-name">DOCKER LAB<span>STARTER KIT</span></span>
        </a>
        <span className="top-status"><i /> โปรเจกต์เริ่มต้น</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>LAB 00</span><i /> FOUNDATION</p>
          <h1 id="hero-title">เริ่มต้นจาก<br /><span>พื้นที่ว่าง</span></h1>
          <p className="hero-description">
            โครงงาน Next.js และ TypeScript สำหรับใช้เป็นจุดเริ่มต้นของห้องทดลอง Docker
            ตอนนี้ยังเป็นเว็บแอปพื้นฐาน ไม่มีการตั้งค่า Docker หรือบริการอื่น
          </p>
          <a className="hero-link" href="#run">เปิดเว็บบนเครื่อง <span>↓</span></a>
        </div>
        <aside className="hero-note">
          <span className="note-label">CURRENT MODE</span>
          <div className="note-symbol">+</div>
          <strong>ยังไม่ใช้ Docker</strong>
          <p>เริ่มจากการรันเว็บบนเครื่องก่อน</p>
          <span className="note-line"><i /> READY FOR LAB</span>
        </aside>
        <span className="hero-index">01 — 04</span>
      </section>

      <section className="status-section" aria-labelledby="status-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">PROJECT CHECK</p>
            <h2 id="status-title">สิ่งที่เตรียมไว้ตอนนี้</h2>
          </div>
          <span className="local-label">LOCAL / BASE SETUP</span>
        </div>
        <ul className="status-list">
          {projectStatus.map((item, index) => (
            <li className="status-row" key={item.label}>
              <span className="row-number">0{index + 1}</span>
              <span className="row-label">{item.label}</span>
              <strong className="row-value">{item.value}</strong>
              <span className={item.ready ? "row-state is-ready" : "row-state"}>
                <i /> {item.state}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="run-card" id="run" aria-labelledby="run-title">
        <div className="run-copy">
          <p className="section-kicker">FIRST STEP / LOCAL DEVELOPMENT</p>
          <h2 id="run-title">ลองเปิดเว็บในเครื่อง</h2>
          <p>เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วสั่งรันเซิร์ฟเวอร์สำหรับพัฒนา</p>
        </div>
        <div className="command-box">
          <span className="command-label">COMMAND</span>
          <code><span>$</span> npm run dev</code>
          <span className="command-url">http://localhost:3000</span>
        </div>
      </section>

      <footer className="footer">
        <span>BUILT WITH NEXT.JS <i /> TYPESCRIPT</span>
        <span>DOCKER LAB / STARTER 001</span>
      </footer>
    </main>
  );
}