import type { Dictionary } from "./th";

/**
 * Korean dictionary, translated from `en.ts`. Typed as the Thai one, so a
 * missing or renamed key is a build error. Product names, "OMS", "ZORT",
 * "VDO Proof", "Dispatch Gate" and "OMS Status Guard" stay untranslated, as in
 * every language. Body copy is in the formal 합니다 style. The people in the
 * scene get Korean full names, as a work system would show them.
 */
export const ko: Dictionary = {
  nav: {
    speed: "속도",
    intelligence: "인텔리전스",
    network: "네트워크",
    products: "제품",
    faq: "FAQ",
    contact: "문의",
    cta: "상담하기",
  },

  a11y: {
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    language: "언어 변경",
    scene:
      "3D 일러스트: 같은 공간에서 더 많은 주문을 처리하는 창고, 사람과 기계에 작업을 지시하는 창고의 두뇌, 그리고 풀필먼트 거점이 되어 가는 전국의 택배 접수점.",
    diagram: "Packiko 연결 구조",
  },

  hero: {
    hello: "Packiko by ThaiCloud · 풀필먼트의 미래",
    title: ["더 많은 주문.", "더 적은 인력.", "더 빠른 배송."],
    lead: "풀필먼트에 관한 세 가지 이야기.",
    stories: ["속도", "인텔리전스", "네트워크"],
    ctaPrimary: "상담하기",
    ctaSecondary: "이야기 시작하기",
    scroll: "스크롤",
  },

  chapters: [
    { num: "01", name: "속도" },
    { num: "02", name: "인텔리전스" },
    { num: "03", name: "네트워크" },
  ],

  speed: {
    intro: {
      title: "이커머스는 계속 성장합니다.",
      body: "판매가 늘면 주문도 늘어납니다. 하지만 많은 창고가 그만큼 빠르게 포장하지 못합니다. 직원들은 한 번에 주문 하나씩 피킹하며 같은 통로를 몇 번이고 오갑니다.",
    },
    wave: {
      kicker: "웨이브 W-0193 · 주문 40건",
      title: "주문은 웨이브로 묶이고, 재고는 걷기 전에 이미 찾아 둡니다.",
      body: "Packiko는 오래된 주문부터 웨이브로 묶고 모든 품목에 재고를 할당합니다. 보관 로케이션보다 피킹 로케이션을 먼저, 유통기한이 가장 빠른 재고를 먼저 씁니다. 피킹 리스트는 걷는 순서대로 나옵니다.",
      sheet: "피킹 리스트",
      lines: ["블랙 티셔츠 M ×2", "네이비 캡 ×1", "세럼 30 ml ×3", "휴대폰 케이스 ×1", "토트백 ×2"],
      lot: "로트 L2611 · 유통기한 2026.11",
    },
    pack: {
      kicker: "패킹 스테이션 P-05",
      title: "모든 박스를 검수하고, 모든 박스를 영상으로.",
      body: "웨이브의 다음 주문이 자동으로 화면에 뜹니다. 박스를 닫기 전에 모든 상품을 스캔하므로, 사이즈가 틀리면 그 자리에서 잡아냅니다. VDO Proof가 패킹 전 과정을 녹화하고, 주문번호·시간·작업자로 바로 찾을 수 있습니다.",
    },
    dispatch: {
      kicker: "Dispatch Gate",
      title: "확인 없이는 아무것도 나가지 않습니다.",
      body: "모든 박스는 게이트에서 스캔되고, OMS에서 주문 상태를 확인합니다. 패킹 후에 취소된 주문은 차단되어 예외 대기열로 보내집니다. 관리자만 해제할 수 있으며, 그 사유는 기록됩니다.",
    },
    proof: {
      kicker: "고객 사례",
      unit: "하루 주문 수",
      from: "시작은 4,000건",
      body: "한 고객사는 하루 4,000건에서 20,000건으로 성장했습니다. Packiko와 함께, 공간을 넓히지 않고 같은 창고에서 그 성장을 감당했습니다.",
    },
    punch: {
      sub: "이것이 Packiko가 하는 일입니다.",
      lines: ["더 많은 주문.", "같은 공간.", "같은 팀."],
      chips: [
        { value: "5×", label: "하루 주문 수" },
        { value: "+0 m²", label: "추가 창고 면적 없음" },
        { value: "+0", label: "추가 채용 없음" },
      ],
    },
  },

  intelligence: {
    intro: {
      title: "세계는 인력 부족에 직면해 있습니다.",
      body: "그런데 창고는 여전히 사람에게 크게 의존합니다. 물건이 어디 있는지 기억하는 사람, 다음에 무엇을 할지 정하는 사람에게요.",
      goal: "저희의 목표는 단순합니다. 창고가 사람에게 덜 의존하게 만드는 것입니다.",
    },
    brain: {
      title: "저희는 창고의 두뇌를 만들고 있습니다.",
      body: "현장 전체가 하나의 작업 큐를 공유하며, 다음에 할 일과 담당자를 정합니다. 관리자가 지정한 긴급 작업이 먼저, 그다음은 마감이 가장 가까운 작업, 그다음은 먼저 들어온 순서입니다. 지금은 사원증으로 식별된 사람에게 작업을 배정하고, 다음은 기계입니다.",
      todayLabel: "현재 현장에서",
      today: [
        "웨이브와 동선 순서 피킹 경로",
        "마감 시간과 SLA 기준 작업 우선순위",
        "모든 상품 스캔, 모든 박스는 VDO Proof로",
        "OMS Status Guard가 적용된 Dispatch Gate",
        "모든 작업은 실제 담당자와 연결",
      ],
      nextLabel: "다음 단계, 같은 두뇌 위에서",
      next: ["AMR", "소터", "자동 포장기"],
    },
    vision: {
      kicker: "저희의 비전은 단순합니다.",
      lines: ["창고 운영은 소프트웨어가.", "통제는 사람이."],
      note: "사람이 통제권을 갖고 주요 결정을 승인합니다. 관리자는 현장 전체를 보고, 모든 수동 해제는 기록됩니다.",
    },
  },

  network: {
    intro: {
      title: "대도시에서는 당일 배송이 이미 가능합니다.",
      body: "그렇다면 나머지 지역은요? 상품이 대형 중앙 창고에 있으니 다른 지역 고객은 더 오래 기다립니다. 치앙마이로 가는 주문도 여전히 방콕에서 출발합니다.",
    },
    partner: {
      kicker: "전략적 파트너와 함께",
      unit: "전국 택배 접수점",
      body: "함께 이 접수점들을 마이크로 풀필먼트 센터로 바꿀 계획입니다.",
    },
    closer: {
      body: "모든 상품을 대형 창고에 두는 대신, 인기 상품을 고객 가까이 있는 접수점에 둡니다. 치앙마이로 가는 주문은 가까운 접수점에서 포장되어 인계됩니다.",
      lines: ["더 가까운 상품.", "더 빠른 배송.", "전국 어디서나."],
    },
    legend: {
      hub: "메인 창고",
      shop: "택배 접수점",
      mfc: "마이크로 풀필먼트 센터",
    },
  },

  scene: {
    zones: {
      storage: "보관 · A–C 구역",
      pack: "패킹 스테이션 · VDO Proof",
      gate: "Dispatch Gate",
      carrier: "택배사",
      inbound: "입고 · 검수 및 적치",
      returns: "반품",
      office: "관제 센터",
      staging: "택배사별 레인",
    },
    oneOrder: "비효율 · 1회 왕복에 주문 1건",
    waveTrip: "주문 40건 · 1회 왕복",
    picker: "김민준",
    reserve: "보관 로케이션, 피킹 로케이션 다음에 사용",
    fefo: "유통기한 빠른 순",
    vdo: {
      packer: "작업자: 이지은",
      items: ["블랙 티셔츠 M ×1", "세럼 30 ml ×1", "토트백 ×1"],
      wrong: "사이즈 오류: L 스캔, 주문은 M",
      closed: "박스 닫힘 · 송장 출력",
      next: "웨이브의 다음 주문",
    },
    gate: {
      ok: "OMS 확인 완료 · 출고 준비",
      blocked: "OMS에서 취소됨 · 차단",
      exception: "예외 대기열",
      handover: "택배사에 인계",
    },
    same: { space: "같은 공간", team: "같은 팀" },
    questions: ["이 SKU 어디 있지?", "다음 주문은?", "이 주문 아직 유효한가?", "어느 웨이브부터?", "PK-10422는 누가 포장했지?"],
    tasks: ["다음 로케이션: B1-12-2", "다음 주문 PK-10511 자동 표시", "게이트에서 OMS 확인 완료", "W-0195 · 마감 14:00 · 긴급", "이지은 · P-05 · 10:42 · 녹화됨"],
    bottleneck: "P-02 부하 92% · 병목",
    amr: "AMR · 다음 단계, 같은 두뇌로",
    override: {
      title: "관리자 수동 해제",
      body: "PK-10490 · OMS 응답 없음",
      by: "해제자: 박서연 · 사유 기록됨",
    },
    map: {
      bangkok: "창고 · 방콕",
      customer: "고객 · 치앙마이",
      shop: "가까운 접수점 · 마이크로 풀필먼트",
    },
  },

  ticker: [
    "웨이브 계획",
    "동선 순서 피킹 경로",
    "VDO Proof",
    "Dispatch Gate",
    "OMS Status Guard",
    "작업자 식별",
    "실시간 재고",
    "마이크로 풀필먼트",
  ],

  platform: {
    eyebrow: "하나의 두뇌, 모든 연결",
    heading: "주문부터 고객의 문 앞까지, 하나의 플랫폼에서.",
    lead: "Packiko는 OMS 뒤에서 작동합니다. 판매 중인 모든 채널의 주문이 들어오면 두뇌가 현장의 사람과 기계가 할 일을 계획하고, 택배는 이미 쓰고 계신 택배사로 나갑니다.",
    oms: ["주문 · 취소", "상태 업데이트"],
    identity: "작업자 식별 · 감사 기록",
    coreSub: "재고 · 웨이브 · 피킹 · 패킹 · 출고 · VDO Proof",
    hint: "← 다이어그램을 옆으로 스크롤하세요 →",
  },

  products: {
    eyebrow: "제품",
    heading: "하나의 플랫폼, 네 가지 시작점.",
    lead: "하나의 Packiko Core 위에 네 가지 제품이 있습니다. 이미 쓰고 계신 시스템 안의 녹화 버튼부터 엔터프라이즈 3PL 창고까지. 비즈니스에 맞는 곳에서 시작하고, 시스템을 옮기지 않고 성장하세요.",
    more: "상담하기",
    cards: [
      {
        title: "Packiko Add-in",
        tag: "증빙",
        fit: "OMS / 마켓플레이스 파트너와 그 위의 셀러를 위해",
        detail: "VDO Proof를 Web SDK로 파트너의 패킹 화면(예: ZORT)에 바로 내장합니다. 모든 주문에 영상 증빙이 남아 클레임과 분쟁이 줄고, 셀러는 아무것도 바꿀 필요가 없습니다.",
      },
      {
        title: "Packiko Prime",
        tag: "실재고",
        fit: "이미 OMS를 쓰고 있지만 실물 재고 관리가 어려워지기 시작한 온라인 셀러를 위해",
        detail: "실제 창고 재고와 판매 재고를 분리합니다. SKU, 입고, 패킹, 반품, 선택형 VDO Proof, 기본 대시보드를 제공합니다. 빠르게 시작할 수 있고, 판매 방식은 그대로입니다.",
      },
      {
        title: "Packiko Ultra",
        tag: "속도 + 인텔리전스",
        fit: "풀필먼트 센터, 3PL, 자체 창고를 운영하는 브랜드를 위해",
        detail: "운영 전체를 통제합니다. 웨이브, 피킹·패킹 스테이션, Dispatch Gate, OMS Status Guard, 작업자 성과, SLA와 병목 현황, 엔터프라이즈 리포트까지.",
      },
      {
        title: "Packiko Hub",
        tag: "네트워크",
        fit: "지점 네트워크, 택배 접수점, 파트너 매장을 위해",
        detail: "지점을 마이크로 풀필먼트 노드로 만듭니다. 택배 접수, 포장 서비스, 지점에 보관하는 고객 재고, 지점 대시보드. 네트워크를 고객 가까이로 넓히세요.",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "자주 묻는 질문",
    items: [
      {
        q: "Packiko는 무엇인가요?",
        a: "온라인 셀러, 창고 팀, 3PL을 위한 창고 관리 시스템입니다. 실재고 관리, 패킹 실수 방지, 모든 주문의 영상 기록, 현장에서 누가 무엇을 했는지에 대한 기록까지 하나의 공용 API 위에서 제공합니다.",
      },
      {
        q: "OMS나 판매 시스템을 바꿔야 하나요?",
        a: "아니요. Packiko는 OMS 뒤에서 작동하므로 지금과 같은 채널에서 계속 판매하고 주문을 관리하시면 됩니다. LISA가 결제 완료된 주문을 가져오고(ZORT부터 지원하며 다른 시스템도 추가할 수 있습니다) 상태를 자동으로 다시 동기화합니다. 현장에서는 피킹–패킹 단계가 더 명확해질 뿐입니다.",
      },
      {
        q: "패킹대 위에 카메라를 다는 것과 무엇이 다른가요?",
        a: "카메라는 사후에 영상만 남깁니다. Packiko는 주문번호, 시간, 작업자로 영상을 즉시 찾아 주고, 상품 스캔, 재고 관리, 그리고 취소된 주문의 출고를 막는 OMS Status Guard와 함께 작동합니다.",
      },
      {
        q: "직원들이 기기를 함께 쓰는데, 누가 무엇을 했는지 어떻게 아나요?",
        a: "공용 기기는 스테이션 계정으로 로그인하고, 각 작업자는 작업 전에 사원증을 스캔합니다. 개인 기기는 SSO를 사용합니다. 따라서 모든 피킹, 패킹, 승인이 실제 사람과 연결되어 추적하고 측정할 수 있습니다.",
      },
      {
        q: "근무 중에 OMS가 다운되면 현장이 멈추나요?",
        a: "아니요. 피킹·패킹 스테이션은 계속 작동합니다. 해당 주문은 OMS 미확인으로 표시되며, 출고 전에 Dispatch Gate에서 OMS 상태 확인을 통과해야 합니다. 취소된 주문은 여전히 나갈 수 없습니다.",
      },
      {
        q: "어떤 제품부터 시작해야 하나요?",
        a: "이미 OMS를 쓰고 있고 실재고 관리가 필요하다면 → Prime · 기존 시스템 안에서 영상 증빙이 필요하다면 → Add-in · 풀필먼트 센터 / 3PL → Ultra · 지점 네트워크 → Hub. 잘 모르시겠다면 아래 양식으로 메모를 남겨 주세요. 저희 팀이 함께 운영 현황을 살펴보겠습니다.",
      },
    ],
  },

  closing: {
    kicker: "문의하기",
    lines: ["더 많은 주문.", "더 적은 인력.", "더 빠른 배송."],
    lead: "온라인 셀러와 투자자 여러분, 풀필먼트의 미래에 대해 함께 이야기해요.",
    merchants: {
      title: "온라인 셀러",
      body: "주문이 Packiko에서 어떻게 처리되는지 확인해 보세요. 같은 팀으로 더 많은 주문을, 모든 박스는 영상으로.",
      cta: "데모 예약하기",
    },
    investors: {
      title: "투자자",
      body: "창고의 두뇌와 전국 마이크로 풀필먼트 네트워크에 대해 이야기해 보세요.",
      cta: "대화 시작하기",
    },
  },

  contact: {
    heading: "상담하기",
    lead: "운영 현황이나 관심 있는 내용을 간단히 알려 주세요. 저희 팀이 곧 연락드리겠습니다.",
    locationHeading: "오시는 길",
    roleLabel: "어떤 분이신가요?",
    roles: ["온라인 셀러", "투자자", "파트너", "기타"],
    form: {
      name: "이름",
      email: "이메일 주소 *",
      subject: "제목",
      message: "운영 현황을 알려 주세요",
      send: "메시지 보내기",
      sending: "보내는 중…",
      success: "메시지를 보냈습니다. 저희 팀이 곧 연락드리겠습니다.",
      errorGeneric: "문제가 발생했습니다. 다시 시도하시거나 hello@thaicloud.com 으로 이메일을 보내 주세요.",
      errorRequired: "이름, 이메일, 메시지를 입력해 주세요.",
      errorEmail: "이메일 주소 형식이 올바르지 않습니다.",
    },
  },

  footer: {
    blurb: "Packiko by ThaiCloud, 창고의 두뇌. 더 많은 주문. 더 적은 인력. 더 빠른 배송.",
    story: "이야기",
    company: "Packiko",
    contact: "문의",
    city: "태국 방콕",
  },
};
