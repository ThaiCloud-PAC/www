"use client";

import { useState } from "react";
import { nb } from "@/lib/th";

/**
 * Problems — three groups shown one at a time (tabs): online merchants
 * (copy verbatim from thaicloud.com), the warehouse floor, and people.
 */
const groups = [
  {
    "key": "merchant",
    "accent": "accent-orange",
    "icon": "las la-store-alt",
    "title": "ร้านค้าออนไลน์",
    "lead": "พอออเดอร์เยอะขึ้น งานหลังบ้านก็เริ่มพลาด",
    "items": [
      {
        "icon": "las la-box-open",
        "t": "Stock ไม่ตรง",
        "d": "ขายไปแล้วแต่ของในคลังหาไม่เจอ จนต้องยกเลิกออเดอร์ คืนเงินลูกค้า และเสียคะแนนร้าน"
      },
      {
        "icon": "las la-exchange-alt",
        "t": "แพ็คผิด",
        "d": "หยิบผิดรุ่น สี ไซส์ หรือแพ็คของไม่ครบ จนต้องส่งของใหม่ เสียค่าขนส่ง และเสียเวลาทีมงาน"
      },
      {
        "icon": "las la-comment-dots",
        "t": "ลูกค้าเคลมสินค้า",
        "d": "ลูกค้าบอกว่าได้ของไม่ครบ ไม่ได้ของ หรือของไม่ตรง แต่ร้านไม่มีหลักฐานเอาไว้ตรวจสอบ"
      },
      {
        "icon": "las la-gavel",
        "t": "Marketplace มักตัดสินให้ลูกค้า",
        "d": "เมื่อไม่มีหลักฐานว่าแพ็คอะไรไปจริง ร้านมักจบที่คืนเงิน แม้ทีมงานจะทำถูกขั้นตอนแล้วก็ตาม"
      }
    ]
  },
  {
    "key": "warehouse",
    "accent": "accent-blue",
    "icon": "las la-dolly",
    "title": "หน้างานคลัง หยิบ–แพ็ค–ส่ง",
    "lead": "ออเดอร์ยิ่งพุ่ง คนยิ่งเดินเยอะ และไม่มีใครเห็นภาพรวม",
    "items": [
      {
        "icon": "las la-walking",
        "t": "หยิบทีละออเดอร์ เดินซ้ำทางเดิม",
        "d": "ไม่มีการรวมเวฟ ไม่มีเส้นทางหยิบ พนักงานเดินไกลเกินจำเป็น ยิ่งช่วงพีคยิ่งช้า"
      },
      {
        "icon": "las la-video-slash",
        "t": "แพ็คไปแล้ว ไม่มีหลักฐาน",
        "d": "ปิดกล่องแล้วไม่รู้ว่าใครแพ็ค แพ็คอะไร ตอนไหน พอโดนเคลมก็ตอบไม่ได้"
      },
      {
        "icon": "las la-ban",
        "t": "ส่งของที่ยกเลิกไปแล้ว",
        "d": "OMS ยกเลิกออเดอร์แล้ว แต่หน้างานไม่รู้ ของออกจากคลังไปแล้ว ต้องตามคืน เสียค่าส่งฟรี"
      },
      {
        "icon": "las la-hourglass-half",
        "t": "เห็นคอขวดตอนที่สายไปแล้ว",
        "d": "ไม่รู้ว่าออเดอร์ค้างสถานีไหน SLA หลุดเมื่อไร จนลูกค้าทักมาถามก่อน"
      }
    ]
  },
  {
    "key": "people",
    "accent": "accent-teal",
    "icon": "las la-users",
    "title": "พนักงานและทีม",
    "lead": "งานคลังคืองานคน แต่ระบบส่วนใหญ่ไม่รู้ว่าใครทำอะไร",
    "items": [
      {
        "icon": "las la-user-secret",
        "t": "ใช้เครื่องร่วมกัน บอกไม่ได้ว่าใครทำ",
        "d": "หลายคนใช้เครื่องเดียวกันที่สถานี งานถูกบันทึกเป็น 'สถานี' ไม่ใช่ 'คน' ย้อนดูไม่ได้"
      },
      {
        "icon": "las la-chart-bar",
        "t": "วัดผลรายคนไม่ได้",
        "d": "ไม่รู้ว่าใครหยิบเร็ว ใครแพ็คแม่น ใครพลาดบ่อย จัดคนและให้โบนัสจากความรู้สึก"
      },
      {
        "icon": "las la-user-graduate",
        "t": "พนักงานใหม่ต้องจำเองทุกอย่าง",
        "d": "ไม่มีระบบนำทางหน้างาน สอนงานนาน คุณภาพขึ้นกับคนเก่า พอลาออกก็เริ่มใหม่"
      },
      {
        "icon": "las la-user-tie",
        "t": "หัวหน้าตัดสินใจโดยไม่มีข้อมูล",
        "d": "ไม่เห็นว่าโต๊ะไหนล้น โซนไหนว่าง วันนี้ต้องใช้กี่คน จัดคนเกินหรือขาดตลอด"
      }
    ]
  }
];

export default function Problems() {
  const [active, setActive] = useState(0);
  const g = groups[active];
  return (
    <section id="problems" className="problems-sec">
      <div className="container">
        <div className="row about-details text-center">
          <div className="col-12 col-lg-8 offset-lg-2 wow zoomIn" data-wow-duration="1s">
            <p className="sub-heading text-center">
              <span></span>The Problem
            </p>
            <h3 className="heading text-center">{nb("ยิ่งขายดี ยิ่งพลาดง่าย")}</h3>
            <p className="text text-center">{nb("สต็อกไม่ตรง แพ็คผิด โดนเคลมแล้วตอบไม่ได้ — และปัญหาไม่ได้อยู่แค่ที่ร้าน แต่ลามไปถึงหน้างานและคนทำงานด้วย")}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-duration="1s">
            <div className="problem-tabs" role="tablist" aria-label="กลุ่มปัญหา">
              {groups.map((t, i) => (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`problem-tab ${t.accent} ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <i className={t.icon}></i>
                  <span>{nb(t.title)}</span>
                </button>
              ))}
            </div>

            <div key={g.key} className={`problem-panel ${g.accent}`} role="tabpanel">
              <div className="row align-items-center">
                <div className="col-12 col-lg-4">
                  <h4>{nb(g.title)}</h4>
                  <p className="lead-line">{nb(g.lead)}</p>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    {g.items.map((it) => (
                      <div key={it.t} className="col-12 col-md-6">
                        <div className="problem-item">
                          <i className={it.icon}></i>
                          <div>
                            <b>{nb(it.t)}</b>
                            <span>{nb(it.d)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
