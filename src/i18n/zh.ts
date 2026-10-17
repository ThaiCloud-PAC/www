import type { Dictionary } from "./th";

/**
 * Chinese (Simplified) dictionary, translated from `en.ts`. Typed as the Thai
 * one, so a missing or renamed key is a build error. Product names, "OMS",
 * "ZORT", "VDO Proof", "Dispatch Gate" and "OMS Status Guard" stay
 * untranslated, as in every language. Addresses the reader as 您. The people
 * in the scene get Chinese full names, as a work system would show them.
 */
export const zh: Dictionary = {
  nav: {
    speed: "速度",
    intelligence: "智能",
    network: "网络",
    products: "产品",
    faq: "常见问题",
    contact: "联系",
    cta: "联系我们",
  },

  a11y: {
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "切换语言",
    scene:
      "3D 插图：一座在同样空间里处理更多订单的仓库，指挥人员与机器的仓库大脑，以及全国各地正在成为履约节点的包裹网点。",
    diagram: "Packiko 如何连接",
  },

  hero: {
    hello: "Packiko by ThaiCloud · 履约的未来",
    title: ["更多订单。", "更少人力。", "更快送达。"],
    lead: "关于履约的三个故事。",
    stories: ["速度", "智能", "网络"],
    ctaPrimary: "联系我们",
    ctaSecondary: "开始了解",
    scroll: "向下滚动",
  },

  chapters: [
    { num: "01", name: "速度" },
    { num: "02", name: "智能" },
    { num: "03", name: "网络" },
  ],

  speed: {
    intro: {
      title: "电商仍在持续增长。",
      body: "销量越多，订单就越多。但许多仓库的打包速度跟不上。员工一次只拣一个订单，在同样的通道里一遍又一遍地来回走。",
    },
    wave: {
      kicker: "波次 W-0193 · 40 个订单",
      title: "订单汇成波次，出发之前库存已经找好。",
      body: "Packiko 从最早的订单开始组成波次，并为每一行预留库存：先用拣货位，再用存储位；先到期的先出。拣货单按行走顺序生成。",
      sheet: "拣货单",
      lines: ["黑色T恤 M ×2", "藏青色棒球帽 ×1", "精华液 30 ml ×3", "手机壳 ×1", "托特包 ×2"],
      lot: "批次 L2611 · 有效期至 2026/11",
    },
    pack: {
      kicker: "打包台 P-05",
      title: "每一箱都核验，每一箱都有视频。",
      body: "波次中的下一个订单会自动出现。封箱前逐件扫描，尺码不对当场就能发现。VDO Proof 录下整个打包过程，可按订单号、时间或打包员随时检索。",
    },
    dispatch: {
      kicker: "Dispatch Gate",
      title: "不经核验，什么都出不去。",
      body: "每个包裹都在闸口扫描，并与 OMS 核对订单状态。打包后才被取消的订单会被拦截，转入异常队列。只有主管可以放行，放行原因会被记录。",
    },
    proof: {
      kicker: "我们的一位客户",
      unit: "每日订单量",
      from: "起点 4,000 单",
      body: "我们的一位客户从每天 4,000 单增长到 20,000 单。借助 Packiko，他们在同一座仓库里消化了这波增长，没有增加任何面积。",
    },
    punch: {
      sub: "这就是 Packiko 在做的事。",
      lines: ["更多订单。", "同样空间。", "同样团队。"],
      chips: [
        { value: "5×", label: "每日订单量" },
        { value: "+0 m²", label: "无需新增仓库面积" },
        { value: "+0", label: "无需新增人手" },
      ],
    },
  },

  intelligence: {
    intro: {
      title: "全世界都在面临劳动力短缺。",
      body: "而仓库仍然高度依赖人：依赖记得东西放在哪里的人，也依赖决定下一步做什么的人。",
      goal: "我们的目标很简单：让仓库不再那么依赖人。",
    },
    brain: {
      title: "我们正在打造仓库的大脑。",
      body: "整个现场共用一个任务队列，决定下一步做什么、由谁来做。主管标记的紧急任务优先，其次是截单时间最近的，然后先进先出。如今它把任务派给刷工牌识别的员工；下一步，派给机器。",
      todayLabel: "如今在现场",
      today: [
        "波次与按行走顺序的拣货路径",
        "按截单时间和 SLA 排定优先级",
        "逐件扫描，每一箱都有 VDO Proof",
        "带 OMS Status Guard 的 Dispatch Gate",
        "每项任务都对应到真实的人",
      ],
      nextLabel: "下一步，基于同一个大脑",
      next: ["AMR", "分拣机", "自动套袋机"],
    },
    vision: {
      kicker: "我们的愿景很简单。",
      lines: ["让软件运营仓库。", "让人始终掌控。"],
      note: "人始终掌控全局，并审批关键决策。主管能看到整个现场，每一次人工放行都有记录。",
    },
  },

  network: {
    intro: {
      title: "在大城市，当日达早已实现。",
      body: "那其他地区呢？商品存放在大型中心仓里，其他地方的客户只能等得更久。一个发往清迈的订单，仍然要从曼谷出发。",
    },
    partner: {
      kicker: "携手我们的战略合作伙伴",
      unit: "全国包裹网点",
      body: "我们计划一起把这些网点变成微型履约中心。",
    },
    closer: {
      body: "我们不再把所有商品都放在大仓库里，而是把热销商品放到离客户更近的网点。发往清迈的订单，由附近的网点打包并交付。",
      lines: ["商品更近。", "送达更快。", "覆盖全国。"],
    },
    legend: {
      hub: "中心仓",
      shop: "包裹网点",
      mfc: "微型履约中心",
    },
  },

  scene: {
    zones: {
      storage: "存储 · A–C 区",
      pack: "打包台 · VDO Proof",
      gate: "Dispatch Gate",
      carrier: "承运商",
      inbound: "入库 · 收货与上架",
      returns: "退货",
      office: "指挥中心",
      staging: "承运商分拨道",
    },
    oneOrder: "低效 · 跑 1 趟只拣 1 个订单",
    waveTrip: "40 个订单 · 跑 1 趟",
    picker: "王伟",
    reserve: "存储位，拣货位之后才用",
    fefo: "先到期先出",
    vdo: {
      packer: "打包员：李娜",
      items: ["黑色T恤 M ×1", "精华液 30 ml ×1", "托特包 ×1"],
      wrong: "尺码错误：扫到 L，订单要求 M",
      closed: "已封箱 · 面单已打印",
      next: "波次中的下一个订单",
    },
    gate: {
      ok: "OMS 核验通过 · 可以发货",
      blocked: "已在 OMS 中取消 · 已拦截",
      exception: "异常队列",
      handover: "已交给承运商",
    },
    same: { space: "同样空间", team: "同样团队" },
    questions: ["这个 SKU 在哪？", "下一个订单是哪个？", "这个订单还有效吗？", "先做哪个波次？", "PK-10422 是谁打包的？"],
    tasks: ["下一个货位：B1-12-2", "下一个订单 PK-10511 自动载入", "已在闸口与 OMS 核对", "W-0195 · 截单 14:00 · 紧急", "李娜 · P-05 · 10:42 · 已录像"],
    bottleneck: "P-02 负载 92% · 瓶颈",
    amr: "AMR · 下一步，同一个大脑",
    override: {
      title: "主管人工放行",
      body: "PK-10490 · OMS 没有响应",
      by: "由张婷放行 · 原因已记录",
    },
    map: {
      bangkok: "仓库 · 曼谷",
      customer: "客户 · 清迈",
      shop: "附近网点 · 微型履约",
    },
  },

  ticker: [
    "波次规划",
    "按行走顺序拣货",
    "VDO Proof",
    "Dispatch Gate",
    "OMS Status Guard",
    "员工身份识别",
    "实时库存",
    "微型履约",
  ],

  platform: {
    eyebrow: "一个大脑，连接一切",
    heading: "从下单到送达门口，尽在一个平台。",
    lead: "Packiko 位于您的 OMS 之后。来自各个销售渠道的订单汇入，大脑为现场的人员和机器规划工作，包裹交由您已在合作的承运商发出。",
    oms: ["订单 · 取消", "状态更新"],
    identity: "员工身份 · 审计",
    coreSub: "库存 · 波次 · 拣货 · 打包 · 出库 · VDO Proof",
    hint: "← 左右滑动查看图示 →",
  },

  products: {
    eyebrow: "产品",
    heading: "一个平台，四种起点。",
    lead: "四款产品，同一个 Packiko Core：从您现有系统里的一个录像按钮，到企业级 3PL 仓库。从最适合您业务的地方开始，成长时无需更换系统。",
    more: "联系我们",
    cards: [
      {
        title: "Packiko Add-in",
        tag: "凭证",
        fit: "面向 OMS / 电商平台合作伙伴及其商家",
        detail: "以 Web SDK 形式提供 VDO Proof，直接嵌入合作伙伴的打包界面（例如 ZORT）。每个订单都有视频凭证，减少索赔与纠纷，商家无需做任何改变。",
      },
      {
        title: "Packiko Prime",
        tag: "真实库存",
        fit: "面向已在使用 OMS、开始为实物库存头疼的网店",
        detail: "把仓库真实库存与销售库存分开：SKU、入库、打包、退货、可选的 VDO Proof，以及基础看板。上手快，销售方式不变。",
      },
      {
        title: "Packiko Ultra",
        tag: "速度 + 智能",
        fit: "面向履约中心、3PL 以及自营仓库的品牌",
        detail: "全面掌控运营：波次、拣货与打包台、Dispatch Gate、OMS Status Guard、员工绩效、SLA 与瓶颈视图，以及企业级报表。",
      },
      {
        title: "Packiko Hub",
        tag: "网络",
        fit: "面向门店网络、包裹网点和合作店面",
        detail: "把门店变成微型履约节点：包裹收寄、打包服务、在门店存放客户库存，以及门店看板。让网络离客户更近。",
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    heading: "常见问题",
    items: [
      {
        q: "Packiko 是什么？",
        a: "一套面向网店、仓库团队和 3PL 的仓库管控系统：真实库存管理、防止打包出错、每个订单都有视频记录、现场谁做了什么都有据可查，全部基于同一套共享 API。",
      },
      {
        q: "我们需要更换 OMS 或销售系统吗？",
        a: "不需要。Packiko 位于您的 OMS 之后，您照常在原有渠道销售和管理订单。LISA 会为您拉取已付款订单（首先支持 ZORT，也可接入其他系统），并自动回传状态。在现场，拣货–打包的步骤只会更清晰。",
      },
      {
        q: "这和在打包台上方装个摄像头有什么不同？",
        a: "摄像头只能事后给您一段录像。Packiko 可按订单号、时间或打包员立即找到视频，并与逐件扫描、库存管理，以及阻止已取消订单发出的 OMS Status Guard 协同工作。",
      },
      {
        q: "员工共用设备，怎么知道谁做了什么？",
        a: "共用设备以工位账号登录，每位员工开工前先刷工牌。个人设备使用 SSO 登录。因此每一次拣货、打包和审批都对应到真实的人，可追溯、可衡量。",
      },
      {
        q: "如果 OMS 在白天宕机，现场会停摆吗？",
        a: "不会。拣货和打包台照常工作；这些订单会被标记为“OMS 未核验”，必须在 Dispatch Gate 通过与 OMS 的状态核对后才能放行。已取消的订单依然出不去。",
      },
      {
        q: "我们应该从哪个产品开始？",
        a: "已在使用 OMS、想管好真实库存 → Prime · 想在现有系统里获得视频凭证 → Add-in · 履约中心 / 3PL → Ultra · 门店网络 → Hub。还不确定？请通过下方表单给我们留言，我们的团队会和您一起看看您的运营情况。",
      },
    ],
  },

  closing: {
    kicker: "联系我们",
    lines: ["更多订单。", "更少人力。", "更快送达。"],
    lead: "网店商家和投资人，欢迎来和我们聊聊履约的未来。",
    merchants: {
      title: "网店商家",
      body: "看看您的订单在 Packiko 上如何运转：同样的团队处理更多订单，每一箱都有视频。",
      cta: "预约演示",
    },
    investors: {
      title: "投资人",
      body: "和我们聊聊仓库的大脑，以及覆盖全国的微型履约网络。",
      cta: "开始交流",
    },
  },

  contact: {
    heading: "联系我们",
    lead: "请简单介绍您的运营情况或感兴趣的内容，我们的团队会尽快回复您。",
    locationHeading: "我们的位置",
    roleLabel: "我是",
    roles: ["网店商家", "投资人", "合作伙伴", "其他"],
    form: {
      name: "您的姓名",
      email: "电子邮箱 *",
      subject: "主题",
      message: "介绍一下您的运营情况",
      send: "发送消息",
      sending: "发送中…",
      success: "消息已发送，我们的团队会尽快回复您。",
      errorGeneric: "出了点问题。请重试，或发邮件至 hello@thaicloud.com",
      errorRequired: "请填写姓名、邮箱和留言。",
      errorEmail: "邮箱地址格式似乎不正确。",
    },
  },

  footer: {
    blurb: "Packiko by ThaiCloud，仓库的大脑。更多订单。更少人力。更快送达。",
    story: "故事",
    company: "Packiko",
    contact: "联系",
    city: "泰国曼谷",
  },
};
