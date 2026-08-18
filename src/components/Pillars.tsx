/** The five positioning pillars — from the Packiko ecosystem guideline. */
const pillars = [
  { icon: "las la-video", accent: "accent-orange", th: "ตรวจสอบได้", en: "Verification" },
  { icon: "las la-boxes", accent: "accent-teal", th: "เห็นสต็อกจริง", en: "Visibility" },
  { icon: "las la-truck", accent: "accent-blue", th: "เชื่อมขนส่ง", en: "Logistics" },
  { icon: "las la-store", accent: "accent-yellow", th: "ขยายผ่าน HUB", en: "HUB Network" },
  { icon: "las la-coins", accent: "accent-teal", th: "ต่อยอดการเงิน", en: "Fintech" },
];

export default function Pillars() {
  return (
    <div className="pillars">
      <div className="container">
        <ul>
          {pillars.map((p) => (
            <li key={p.en} className={p.accent}>
              <i className={p.icon}></i>
              <div>
                <b>{p.th}</b>
                <small>{p.en}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
