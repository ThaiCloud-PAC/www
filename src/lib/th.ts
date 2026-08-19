/**
 * Thai line-break helper. Chrome's Thai dictionary breaker splits loanwords and
 * compounds it doesn't know (ออเด|อร์, แด|ชบอร์ด, เรียล|ไทม์ …). Insert U+2060
 * WORD JOINER between the letters of known tokens so they never break mid-word.
 */
const WJ = "⁠";
const TOKENS = [
  "ออเดอร์", "แดชบอร์ด", "หลักฐาน", "เรียลไทม์", "ตรวจสอบ", "ทีมงาน", "ยกเลิก", "ชำระเงิน",
  "สต็อก", "ต่อยอด", "การเงิน", "พาร์ทเนอร์", "แพลตฟอร์ม", "ฟีเจอร์", "โบนัส", "ลาเบล", "ซิงก์",
  "มาร์เก็ตเพลส", "ออนไลน์", "คลังสินค้า", "อัตโนมัติ", "ประสิทธิภาพ", "หน้างาน", "พนักงาน",
  "วิดีโอ", "เครือข่าย", "ผลงาน", "สถานี", "สินค้า", "ลูกค้า", "ธุรกิจ", "องค์กร", "บริการ", "หลังบ้าน", "เส้นทาง",
];
// Only insert the joiner at cluster boundaries: before a base consonant (ก–ฮ)
// or a leading vowel (เ แ โ ใ ไ). Never before combining marks (ั ิ ี ึ ื ุ ู ็ ่ ้ ๊ ๋ ์)
// — a joiner between a consonant and its mark detaches the mark (dotted circle).
const CLUSTER_START = /[\u0E01-\u0E2E\u0E40-\u0E44]/;
const joined = (t: string) =>
  t
    .split("")
    .map((ch, i) => (i > 0 && CLUSTER_START.test(ch) ? WJ + ch : ch))
    .join("");
const RE = new RegExp(TOKENS.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");

/** Apply word-joiners to known Thai tokens; also make dash chains unbreakable (หยิบ–แพ็ค–ส่ง). */
export function nb(s: string): string {
  return s.replace(RE, (m) => joined(m)).replace(/([฀-๿])[–-]([฀-๿])/g, "$1‑$2");
}
