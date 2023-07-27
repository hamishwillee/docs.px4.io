(window.webpackJsonp=window.webpackJsonp||[]).push([[1436],{2775:function(t,a,r){"use strict";r.r(a);var v=r(19),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"제조사의-px4-보드-지원-가이드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#제조사의-px4-보드-지원-가이드"}},[t._v("#")]),t._v(" 제조사의 PX4 보드 지원 가이드")]),t._v(" "),r("p",[t._v("PX4 개발 및 테스트 팀은 "),r("a",{attrs:{href:"https://pixhawk.org/standards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 표준"),r("OutboundLink")],1),t._v("을 준수하는 보드를 완벽하게 지원하고 유지 관리합니다. 표준을 준수하지 않거나 새로운 보드를 제작하는 업체에서는 호환성 차이를 지원하여야 합니다.")]),t._v(" "),r("p",[t._v("이 가이드는 다양한 "),r("a",{attrs:{href:"#board-support-categories"}},[t._v("보드 지원 카테고리")]),t._v("에 대한 추가 요구사항과 함께 보드 지원에 대한 "),r("a",{attrs:{href:"#general_requirements"}},[t._v("일반 요구사항")]),t._v("을 간략하게 설명합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("요구 사항을 준수하지 않는 보드는 "),r("a",{attrs:{href:"#unsupported"}},[t._v("지원되지 않습니다")]),t._v(". 그러한 보드들은 PX4 웹사이트 하드웨어 목록에 나열되지 않으며, 코드베이스에서 제거됩니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"general_requirements"}})]),t._v(" "),r("h2",{attrs:{id:"일반-요구사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#일반-요구사항"}},[t._v("#")]),t._v(" 일반 요구사항")]),t._v(" "),r("p",[t._v("지원 모든 보드에 대한 일반 요구사항은 다음과 같습니다.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("하드웨어는 시장에서 사용할 수 있어야 합니다.")])]),t._v(" "),r("li",[r("p",[t._v("보드에는 UAV에서 PX4와 함께 보드를 사용하는 것이 불가능하거나 위험하게 하는 버그나 허용 범위 초과하는  품질 이상이 없어야 합니다. 보드는 부품과 조립품의 품질을 보장하기 위해 승인 기준을 통과하여야 합니다.")])]),t._v(" "),r("li",[r("p",[t._v("고객을 지원하고 고객이 연락할 수 있는 명확하고 쉬운 방법이 있어야 합니다. 다음과 같은 방법이 허용됩니다.")]),t._v(" "),r("ul",[r("li",[t._v("PX4 Discord server presence")]),t._v(" "),r("li",[t._v("지원 이메일")]),t._v(" "),r("li",[t._v("전화번호")])])]),t._v(" "),r("li",[r("p",[t._v("PX4 관리자를 위한 PoC(Point of Contact)(직접 이메일 또는 Slack/Forum/Github에서 사용 가능)")])]),t._v(" "),r("li",[r("p",[t._v("보드는 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/platforms/nuttx/src/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 부트로더 프로토콜"),r("OutboundLink")],1),t._v("을 사용하여야 합니다. 부트로더에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/hardware/porting_guide_nuttx.html#bootloader"}},[t._v("PX4 Nuttx 포팅 가이드 > 부트로더")]),t._v("를 참고하십시오.")],1)]),t._v(" "),r("li",[r("p",[t._v("다음 내용을 포함하는 적절한 문서:")]),t._v(" "),r("ul",[r("li",[t._v("PX4 핀 정의를 아래에 매핑하는 완전한 핀배열 공개:\n"),r("ol",[r("li",[t._v("마이크로컨트롤러 핀")]),t._v(" "),r("li",[t._v("물리적 외부 커넥터")])])]),t._v(" "),r("li",[t._v("소프트웨어 요구 사항과 부팅 순서를 유추할 수 있는 주요 구성 요소(센서, 전원 공급 장치 등)의 블록 다이어그램 또는 전체 회로도")]),t._v(" "),r("li",[t._v("완제품 사용 설명서")])])]),t._v(" "),r("li",[r("p",[t._v("PX4와 함께 사용하기 위한 기능과 제한 사항을 나열하고 위에 설명된 문서를 포함하거나 링크하는 PX4가 있는 보드용 전용 웹페이지가 있어야 합니다.")])])]),t._v(" "),r("h2",{attrs:{id:"보드-지원-카테고리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보드-지원-카테고리"}},[t._v("#")]),t._v(" 보드 지원 카테고리")]),t._v(" "),r("p",[t._v("보드 지원 범주는 다음과 같습니다. 각 카테고리의 자동조종장치 보드는 "),r("a",{attrs:{href:"https://px4.io/autopilots/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://px4.io/autopilots/."),r("OutboundLink")],1),t._v("에 나열되어 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("제조업체 지원 보드는 Pixhawk 보드보다 더 나은 지원을 받을 수 있습니다(예: 규모의 경제를 통해).")])]),t._v(" "),r("h2",{attrs:{id:"pixhawk표준"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk표준"}},[t._v("#")]),t._v(" Pixhawk표준")]),t._v(" "),r("p",[t._v("Pixhawk 보드는 Pixhawk 표준을 준수하는 보드입니다. 이러한 표준은 "),r("a",{attrs:{href:"http://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://pixhawk.org"),r("OutboundLink")],1),t._v("에 나와 있지만, 상위 수준에서는 보드가 표준에서 요구하는 전기 테스트를 통과하고 제조업체가 Pixhawk 채택자 및 상표 계약에 서명하여야 합니다.")]),t._v(" "),r("p",[t._v("PX4는 일반적으로 상업적으로 사용 가능한 보드만 지원하므로, 일반적으로 지난 5년 이내에 출시된 보드 표준이 지원됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{id:"ver_rev_id"}})]),t._v(" "),r("h3",{attrs:{id:"ver-및-rev-id-하드웨어-개정-및-버전-감지"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ver-및-rev-id-하드웨어-개정-및-버전-감지"}},[t._v("#")]),t._v(" VER 및 REV ID(하드웨어 개정 및 버전 감지)")]),t._v(" "),r("p",[t._v("FMUv5 이상에는 전기 감지 메커니즘이 있습니다. 선택적 구성 데이터와 결합된 이 감지는 필수 장치 및 전원 공급 장치 구성과 관련하여 하드웨어 구성을 정의합니다. Manufacturers must obtain the VER and REV ID from PX4 board maintainers by issuing a PR to ammend the "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("DS-018 Pixhawk standard"),r("OutboundLink")],1),t._v(" for board versions and revisions.")]),t._v(" "),r("p",[t._v("Because these boards are 100% compliant with the Pixhawk standard, the values assigned for VER and REV ID are the defaults for that FMU Version.")]),t._v(" "),r("h2",{attrs:{id:"지원-제조업체"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원-제조업체"}},[t._v("#")]),t._v(" 지원 제조업체")]),t._v(" "),r("p",[t._v("이러한 보드는 제조업체에서 지원합니다. 이 범주에 해당하려면 보드는 해당 릴리스로부터 4개월 이내에 최신 안정 PX4 릴리스에서 작동하여야 합니다.")]),t._v(" "),r("ul",[r("li",[t._v("제조업체가 직접 지원합니다.")]),t._v(" "),r("li",[t._v("제조업체는 코어 개발 팀에 최소 2개의 보드를 공급하여야 합니다(테스트 랙 및 테스트 팀에서 사용하기 위하여).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이 범주의 보드를 지원하고 테스트하기 위한 PX4 유지 관리자와 비행 테스트 팀의 약속은 없지만, PX4와 제조업체 팀이 긴밀한 협력 관계를 구축할 것을 강력히 권장합니다.\n이것은 모든 당사자에게 더 나은 결과를 가져올 것입니다.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("보드 호환성에 따라 "),r("a",{attrs:{href:"#ver_rev_id"}},[t._v("VER 및 REV ID")]),t._v("가 할당됩니다. 보드가 FMU 사양의 변형이고 동일한 바이너리를 실행 가능하고 제조업체에서 지원하는 약간의 차이가 있는 경우에는 PX4에서 특별 할당을 수행합니다. 자세한 정보를 요청하려면 PX4 관리자에게 "),r("a",{attrs:{href:"mailto:boards@px4.io"}},[t._v("boards@px4.io")]),t._v("로 문의하십시오.")])]),t._v(" "),r("h2",{attrs:{id:"실험"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#실험"}},[t._v("#")]),t._v(" 실험")]),t._v(" "),r("p",[t._v("이 보드는 위의 범주에 속하지 않거나 "),r("em",[t._v("더 이상")]),t._v(" 해당 범주에 속하지 않는 모든 보드입니다. 다음 요구 사항이 적용됩니다.")]),t._v(" "),r("ul",[r("li",[t._v("보드는 정의된 차량 유형에 대해 최소 하나의 PX4 릴리스에 작동하여야 하지만 반드시 최신 릴리스일 필요는 없습니다.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("이전")]),t._v(" Pixhawk 또는 제조업체가 지원했던 실험 보드는 원래 ID를 갖거나 유지합니다. "),r("em",[t._v("신규")]),t._v(" 실험 보드에는 제조업체 지원 보드와 동일한 방식으로 호환성에 따라 "),r("a",{attrs:{href:"#ver_rev_id"}},[t._v("VER 및 REV ID")]),t._v("가 할당됩니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"unsupported"}})]),t._v(" "),r("h2",{attrs:{id:"미지원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#미지원"}},[t._v("#")]),t._v(" 미지원")]),t._v(" "),r("p",[t._v('이 범주에는 PX4 프로젝트 또는 제조업체에서 지원하지 않고 "실험적" 지원에 해당하지 않는 모든 보드가 포함됩니다.')]),t._v(" "),r("ul",[r("li",[t._v('보드는 우리가 이미 지원하는 것과 문서상 어느 정도 호환되며 "실험적"으로 올리려면, 최소한의 노력이 필요하지만 개발 팀이나 제조업체 모두 현재 이를 추구하지 않습니다.')]),t._v(" "),r("li",[t._v("하드웨어 제조업체/소유자가 Google의 "),r("a",{attrs:{href:"https://discuss.px4.io/t/code-of-conduct/13655",target:"_blank",rel:"noopener noreferrer"}},[t._v("행동 강령"),r("OutboundLink")],1),t._v("을 위반함")]),t._v(" "),r("li",[t._v("라이선스 제한으로 인해 보드 지원을 추가하는 데 필요한 도구/libs/drivers/etc가 호환되지 않는 것으로 간주되는 비공개 소스")]),t._v(" "),r("li",[t._v("보드가 일반 요구 사항에 명시된 최소 요구 사항을 충족하지 않습니다.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("지원되지 않는 보드에는 "),r("a",{attrs:{href:"#ver_rev_id"}},[t._v("VER 및 REV ID")]),t._v("가 할당되지 않습니다(PX4 FMUvX 펌웨어를 실행할 수 없음).")])]),t._v(" "),r("h2",{attrs:{id:"릴리스-프로세스"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#릴리스-프로세스"}},[t._v("#")]),t._v(" 릴리스 프로세스")]),t._v(" "),r("p",[t._v("제조업체가 보드가 특정 범주에 속한다고 선언시, 보드는 해당 범주 및 일반 요구 사항에 대한 요구 사항을 준수한다고 가정합니다.")]),t._v(" "),r("p",[t._v("제조업체 지원 또는 실험 범주에 속하는 새 보드가 시장에 출시되면, 제조업체는 PX4 문서를 업데이트하고 PX4에서 보드 릴리스 프로세스를 수행할 책임이 있습니다. 다음 단계를 수행하는 것이 좋습니다.")]),t._v(" "),r("p",[t._v("PX4 보드 관리자에게 "),r("a",{attrs:{href:"mailto:boards@px4.io"}},[t._v("boards@px4.io")]),t._v("로 연락하여 다음을 요청하십시오.")]),t._v(" "),r("ol",[r("li",[t._v("QGC에서 부트로더 및 펌웨어 선택을 위한 "),r("em",[t._v("보드 ID")]),t._v(" 할당")]),t._v(" "),r("li",[t._v("REV 및 VER ID 저항 값 할당")]),t._v(" "),r("li",[t._v("보드가 USB를 지원하는 경우: USB VID 및 PID 할당을 요청하거나 USB VID 및 PID를 제공하십시오.")])]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/hardware/porting_guide.html"}},[t._v("포팅 가이드")]),t._v("에 설명된 보드 이식 릴리스 프로세스에 따라 보드를 통합합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("보드 지원 프로세스는 시간이 지남에 따라 변경되거나 개선될 수 있습니다.\nHardware manufacturers are encouraged to contribute to this process through the regular hardware call, the Discuss forum or Discord.")])]),t._v(" "),r("h2",{attrs:{id:"지원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원"}},[t._v("#")]),t._v(" 지원")]),t._v(" "),r("p",[t._v("보드 지원 가이드/프로세스의 일부가 명확하지 않은 경우:")]),t._v(" "),r("ul",[r("li",[t._v("Ask the community for help on Discord channels under "),r("code",[t._v("Hardware")]),t._v(" category, or on the discuss forum")]),t._v(" "),r("li",[t._v("정규 하드웨어 회의 참석")]),t._v(" "),r("li",[t._v("컨설팅 옵션은 "),r("a",{attrs:{href:"https://px4.io/community/consultants/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://px4.io/community/consultants/"),r("OutboundLink")],1),t._v("을 참고하십시오.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);