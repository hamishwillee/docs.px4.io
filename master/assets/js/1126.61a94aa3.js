(window.webpackJsonp=window.webpackJsonp||[]).push([[1126],{2104:function(_,v,t){"use strict";t.r(v);var a=t(19),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"시동-전-시동-제동-구성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시동-전-시동-제동-구성"}},[_._v("#")]),_._v(" 시동 전, 시동, 제동 구성")]),_._v(" "),t("p",[_._v("기체에는 움직이는 부품이 있으며, 그 중에는 특히 모터와 프로펠러는 전원 공급시 위험할 수 있습니다.")]),_._v(" "),t("p",[_._v("사고의 위험을 줄이기 위하여, PX4는 명확한 상태에서만 부품들의 전원을 공급합니다.")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("제동:")]),_._v(" 모터와 액츄에이터에 전원을 인가하지 않음")]),_._v(" "),t("li",[t("strong",[_._v("시동 전:")]),_._v(" 모터와 프로펠러를 잠궈두었으나 액츄에이터에는 위험하지 않은 수준의 전원을 인가함(예: 보조익, 플랩 등).")]),_._v(" "),t("li",[t("strong",[_._v("시동:")]),_._v(" 기체 전체에 전원을 인가한 상태. 모터와 프로펠러가 동작할 수 있음(위험!)")])]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("시동 전 기체 상태를 지상제어국에서 "),t("em",[_._v("disarmed")]),_._v('로 표시됩니다. 시동전의 기체는 기술적으로 타당하지는 않지만, "안전"한 상태입니다.')])]),_._v(" "),t("p",[_._v("사용자는 기체(선택)의 "),t("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#safety_switch"}},[_._v("안전 스위치")]),_._v(" "),t("em",[_._v("그리고")]),_._v(" "),t("a",{attrs:{href:"#arm_disarm_switch"}},[_._v("시동 스위치/단추")]),_._v(", "),t("a",{attrs:{href:"#arm_disarm_gestures"}},[_._v("시동 움직임")]),_._v(" 또는 지상 통제 장치의 "),t("em",[_._v("MAVLink 명령")]),_._v("으로 상태 진행을 제어할 수 있습니다:")],1),_._v(" "),t("ul",[t("li",[t("em",[_._v("안전 스위치")]),_._v("는 "),t("em",[_._v("기체")]),_._v("의 제어 장치로, 기체에 시동을 걸 수 있기 전 가동해야 하며, 시동 전에 시동이 멋대로 켜지는 일을 (설정에 따라) 막을 수 있어야 합니다. 보통 안전 스위치는 GPS 장치에 붙어있으나, 별도의 부품으로 공급되기도 합니다.")])]),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),t("p",[_._v("일단 기체에 시동이 걸리면 위험합니다. 안전 스위치는 의도하지 않게 갑자기시동이 걸리는 것을 방지합니다.")])]),_._v(" "),t("ul",[t("li",[t("p",[t("em",[_._v("시동 스위치")]),_._v("는 기체에 시동을 걸고 모터를 시동하는 데 사용할 수 있는 "),t("em",[_._v("RC 컨트롤러")]),_._v("의 스위치 또는 버튼입니다 (안전 스위치로 시동을 방지하지 않는 경우).")])]),_._v(" "),t("li",[t("p",[t("em",[_._v("시동 제스쳐")]),_._v("은 시동 스위치 대신 사용할 수있는 "),t("em",[_._v("RC 컨트롤러")]),_._v("의 스틱 이동입니다.")])]),_._v(" "),t("li",[t("p",[_._v("MAVLink 명령은 지상국에서 기체의 시동을 걸거나 시동을 해제할 수 있습니다.")])])]),_._v(" "),t("p",[_._v("PX4는 시동 후 일정 시간 내에 이륙하지 않고, 착륙 후 수동으로 시동 해제하지 않으면, 기체의 시동은 자동으로 해제됩니다. 이것은 시동이 걸린 기체가 지상에서 안전사고를 유발할 수 있는 시간을 줄입니다.")]),_._v(" "),t("p",[_._v("PX4에서는 다음 섹션에 설명된 대로 매개변수("),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[_._v("매개변수 편집기")]),_._v("를 통하여 "),t("em",[_._v("QGroundControl")]),_._v("에서 편집할 수 있음)를 사용하여 사전 준비, 준비 및 해제의 작동 방식을 설정할 수 있습니다.")],1),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("시동/제동 매개변수는 "),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#commander"}},[_._v("매개변수 참고 > 명령")]),_._v(" 에서 찾을 수 있습니다("),t("code",[_._v("COM_ARM_*")]),_._v(" 과 "),t("code",[_._v("COM_DISARM_*")]),_._v("으로 검색).")],1)]),_._v(" "),t("p",[t("span",{attrs:{id:"arm_disarm_gestures"}})]),_._v(" "),t("h2",{attrs:{id:"시동-제스쳐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시동-제스쳐"}},[_._v("#")]),_._v(" 시동 제스쳐")]),_._v(" "),t("p",[_._v("기본적으로, 기체는 무선조종장치의 추진 제어 스틱과 방위 제어 스틱을 움직인 후 잠깐 동안 또는 1초 동안 상태를 유지하면 시동을 걸거나 시동을 해제할 수 있습니다.")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("시동:")]),_._v(" 스로틀 최소, 요 최대")]),_._v(" "),t("li",[t("strong",[_._v("시동 해제 :")]),_._v(" 스로틀 최소, 요 최소")])]),_._v(" "),t("p",[_._v("무선조종장치는 "),t("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#types-of-remote-controls"}},[_._v("모드에 따라")]),_._v(" 제어 방법이 다릅니다. 제어 모드는 추진 제어와 방위 제어에 사용하는 스틱이 달라집니다.")],1),_._v(" "),t("ul",[t("li",[t("strong",[_._v("모드 2")]),_._v(":\n"),t("ul",[t("li",[t("em",[_._v("시동:")]),_._v(" 왼쪽 스틱을 우하단으로 위치시킵니다.")]),_._v(" "),t("li",[t("em",[_._v("시동 해제:")]),_._v(" 왼쪽 스틱을 좌하단에 위치시킵니다.")])])]),_._v(" "),t("li",[t("strong",[_._v("모드 1")]),_._v(":\n"),t("ul",[t("li",[t("em",[_._v("시동:")]),_._v(" 왼쪽 스틱은 오른쪽, 오른쪽 스틱은 아래쪽입니다.")]),_._v(" "),t("li",[t("em",[_._v("시동 해제:")]),_._v(" 왼쪽 스틱은 왼쪽, 오른쪽 스틱은 아래쪽입니다.")])])])]),_._v(" "),t("p",[_._v("필요한 보류 시간은 "),t("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[_._v("COM_RC_ARM_HYST")]),_._v("에서 설정합니다.")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("매개변수")]),_._v(" "),t("th",[_._v("설명")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("span",{attrs:{id:"COM_RC_ARM_HYST"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_ARM_HYST"}},[_._v("COM_RC_ARM_HYST")])],1),_._v(" "),t("td",[_._v("시동과 시동 해제가 발생하기 전에 RC 스틱이 시동/시동 해제 위치에 있어야하는 시간 (기본값 : 1 초).")])])])]),_._v(" "),t("p",[t("span",{attrs:{id:"arm_disarm_switch"}})]),_._v(" "),t("h2",{attrs:{id:"시동-스위치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시동-스위치"}},[_._v("#")]),_._v(" 시동 스위치")]),_._v(" "),t("p",[t("em",[_._v("시동 버튼")]),_._v(' 또는 "순간 스위치"는 '),t("a",{attrs:{href:"#arm_disarm_gestures"}},[_._v("제스처 기반 무장")]),_._v(" 대신 "),t("em",[_._v("시동/시동 해제")]),_._v("를 트리거하도록 설정할 수 있습니다. 시동 스위치를 설정하면 시동 해제 제스처를 사용할 수 없습니다. 시동 해제 (시동 해제시) 또는 시동 해제 (시동시)를 위하여("),t("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[_._v("명목상")]),_._v(") 1초 동안 버튼을 누르고 있어야 합니다.")]),_._v(" "),t("p",[_._v("두 위치 스위치는 준비/시동 해제에도 사용할 수 있으며, 여기서 각 시동/시동 해제 명령은 스위치 "),t("em",[_._v("전환")]),_._v("에서 전송됩니다.")]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("이중 위치 시동 스위치는 주로 레이싱 드론에 사용되고 권장됩니다.")])]),_._v(" "),t("p",[_._v("스위치 또는 버튼은 "),t("a",{attrs:{href:"#RC_MAP_ARM_SW"}},[_._v("RC_MAP_ARM_SW")]),_._v('를 사용하여 할당(및 활성화)되고 스위치 "유형"은 '),t("a",{attrs:{href:"#COM_ARM_SWISBTN"}},[_._v("COM_ARM_SWISBTN")]),_._v("에서 설정합니다.")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("매개변수")]),_._v(" "),t("th",[_._v("설명")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("span",{attrs:{id:"RC_MAP_ARM_SW"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[_._v("RC_MAP_ARM_SW")])],1),_._v(" "),t("td",[_._v("RC arm 스위치 채널 (기본값 : 0 - 할당되지 않음). 정의된 경우 지정된 RC 채널(버튼/스위치)이 스틱 제스처 대신 시동용으로 사용됩니다.")])])])]),_._v(" "),t("p",[t("strong",[_._v("참고:")])]),_._v(" "),t("ul",[t("li",[_._v("이 설정은 "),t("em",[_._v("스틱 제스처를 비활성화합니다")]),_._v("!"),t("br"),_._v("\n-이 설정은 RC 컨트롤러에 적용됩니다. "),t("em",[_._v("QGroundControl")]),_._v("을 통해 연결된 조이스틱 컨트롤러에는 적용되지 않습니다.              |\n| "),t("span",{attrs:{id:"COM_ARM_SWISBTN"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_SWISBTN"}},[_._v("COM_ARM_SWISBTN")]),_._v(" | 시동 스위치는 순간적으로 동작하는 버튼입니다.")],1),_._v(" "),t("li",[t("code",[_._v("0")]),_._v(": 시동 스위치는 스위치 전환시 arm/disarm 명령이 전송되는 이중 위치 스위치입니다.")]),_._v(" "),t("li",[t("code",[_._v("1")]),_._v(" : 시동 스위치는 버튼입니다. 또는 설정된 시간 ("),t("a",{attrs:{href:"#COM_RC_ARM_HYST"}},[_._v("COM_RC_ARM_HYST")]),_._v(") 동안 버튼을 누른 후 arm/disarm 명령 ae가 전송되는 순간 동작하는 버튼입니다. |")])]),_._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),t("p",[_._v("스위치는 "),t("em",[_._v("QGroundControl")]),_._v(" "),t("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[_._v("비행 모드")]),_._v("일부로 설정할 수도 있습니다.")],1)]),_._v(" "),t("h2",{attrs:{id:"자동-시동-해제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자동-시동-해제"}},[_._v("#")]),_._v(" 자동 시동 해제")]),_._v(" "),t("p",[_._v("기본적으로, 기체는 착륙시 시동 해제 되며, 시동후 이륙 시간이 너무 오래 걸리면 자동으로 시동 해제됩니다. 이 기능은 다음 시간 제한을 사용하여 설정됩니다.")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("매개변수")]),_._v(" "),t("th",[_._v("설명")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("span",{attrs:{id:"COM_DISARM_LAND"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[_._v("COM_DISARM_LAND")])],1),_._v(" "),t("td",[_._v("착륙후 자동 시동 해제 대기 시간. 기본값: 2s (-1 비활성화).")])]),_._v(" "),t("tr",[t("td",[t("span",{attrs:{id:"COM_DISARM_PRFLT"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[_._v("COM_DISARM_PRFLT")])],1),_._v(" "),t("td",[_._v("이륙 속도가 너무 느리면 자동 시동 해제 시간이 초과됩니다. 기본값: 10s (<=0 to disable).")])])])]),_._v(" "),t("h2",{attrs:{id:"시동-절차-시동전-상태와-안전-버튼"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시동-절차-시동전-상태와-안전-버튼"}},[_._v("#")]),_._v(" 시동 절차: 시동전 상태와 안전 버튼")]),_._v(" "),t("p",[_._v("준비 순서는 "),t("em",[_._v("안전 스위치")]),_._v(" 존재 여부에 따라 달라지며 "),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE")]),_._v(" (사전 준비 모드) 및 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY")]),_._v(" (I / O 안전 회로 차단기).")]),_._v(" "),t("p",[t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE")]),_._v(" 매개변수는 사전 준비 모드가 활성화 여부와 시기를 정의합니다 (안전/비 추진 액추에이터가 움직일 수 있음) :")]),_._v(" "),t("ul",[t("li",[t("em",[_._v("비활성화")]),_._v(" : 시정전 모드 비활성화( 비 추진 액추에이터만 활성화되는 단계가 없음).")]),_._v(" "),t("li",[t("em",[_._v("안전 스위치")]),_._v(" (기본값) : 안전 스위치에 의해 시동전 모드가 활성화됩니다. 안전 스위치가 없으면 시동전 모드가 활성화되지 않습니다.")]),_._v(" "),t("li",[t("em",[_._v("항상")]),_._v(" : 전원을 켜면 시동전 모드가 활성화됩니다.")])]),_._v(" "),t("p",[_._v("기본 설정에서는 시동전에 안전 스위치를 사용하도록 설정합니다. 시동 전에 스위치를 켠후, 모든 모터와 액츄에이터를 가동하기 위하여 시동을 걸 수 있습니다.")]),_._v(" "),t("p",[_._v("아래 섹션에서는 여러가지 설정의 시작 순서를 자세히 설명합니다.")]),_._v(" "),t("h3",{attrs:{id:"기본값-com-prearm-mode-safety-and-safety-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본값-com-prearm-mode-safety-and-safety-switch"}},[_._v("#")]),_._v(" 기본값: COM_PREARM_MODE = Safety and Safety Switch")]),_._v(" "),t("p",[_._v("기본 설정에서는 시동전에 안전 스위치를 사용하도록 설정합니다. 시동전에 이 스위치를 켜면 모든 모터와 액츄에이터를 가동하기 위하여 시동을 걸 수 있습니다. 이에 해당하는 설정은 "),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE=1")]),_._v(" (안전 스위치 사용)과 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY=0")]),_._v(" (입출력 안전 회로 차단기 비활성)이 있습니다.")]),_._v(" "),t("p",[_._v("시작 절차는 다음과 같습니다:")]),_._v(" "),t("ol",[t("li",[_._v("전원 인가\n"),t("ul",[t("li",[_._v("모든 액츄에이터를 시동 해제 상태로 잠금")]),_._v(" "),t("li",[_._v("시동 걸기 불가능")])])]),_._v(" "),t("li",[_._v("안전 스위치 누름\n"),t("ul",[t("li",[_._v("시스템이 시동전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),_._v(" "),t("li",[_._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),_._v(" "),t("li",[_._v("시동 명령 인가\n"),t("ul",[t("li",[_._v("시스템에 시동이 걸림")]),_._v(" "),t("li",[_._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),_._v(" "),t("h3",{attrs:{id:"com-prearm-mode-disabled-and-safety-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-disabled-and-safety-switch"}},[_._v("#")]),_._v(" COM_PREARM_MODE = Disabled and Safety Switch")]),_._v(" "),t("p",[_._v("시동전 모드가 "),t("em",[_._v("비활성화")]),_._v('인 경우 안전 스위치를 작동하여도 "안전" 액추에이터의 잠금이 해제되지는 않지만 기체의 시동을 걸 수 있습니다. 이는 '),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE = 0")]),_._v(" (비활성화) 및 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY = 0")]),_._v(" (I/O 안전 회로 차단기 비활성화)에 해당합니다.")]),_._v(" "),t("p",[_._v("시작 절차는 다음과 같습니다:")]),_._v(" "),t("ol",[t("li",[_._v("전원 인가\n"),t("ul",[t("li",[_._v("모든 액츄에이터를 시동 해제 상태로 잠금")]),_._v(" "),t("li",[_._v("시동 걸기 불가능")])])]),_._v(" "),t("li",[_._v("안전 스위치 누름\n"),t("ul",[t("li",[t("em",[_._v("모든 액츄에이터가 시동 해제 상태로 잠김 (시동 해제 상태와 동일).")])]),_._v(" "),t("li",[_._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),_._v(" "),t("li",[_._v("시동 명령 인가\n"),t("ul",[t("li",[_._v("시스템에 시동이 걸림")]),_._v(" "),t("li",[_._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),_._v(" "),t("h3",{attrs:{id:"com-prearm-mode-always-and-safety-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-safety-switch"}},[_._v("#")]),_._v(" COM_PREARM_MODE = Always and Safety Switch")]),_._v(" "),t("p",[_._v("시동전 모드가 "),t("em",[_._v("Always")]),_._v("이면 전원을 켤 때 시동전 모드가 활성화됩니다. 시동 걸기 위하여 여전히 안전 스위치가 필요합니다. 이는 "),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE = 2")]),_._v(" (항상) 및 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY = 0")]),_._v(" (I/O 안전 회로 차단기 비활성화 됨)에 해당합니다.")]),_._v(" "),t("p",[_._v("시작 절차는 다음과 같습니다:")]),_._v(" "),t("ol",[t("li",[_._v("전원 인가\n"),t("ul",[t("li",[_._v("시스템이 시동전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),_._v(" "),t("li",[_._v("시동 걸기 불가능")])])]),_._v(" "),t("li",[_._v("안전 스위치 누름\n"),t("ul",[t("li",[_._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),_._v(" "),t("li",[_._v("시동 명령 인가\n"),t("ul",[t("li",[_._v("시스템에 시동이 걸림")]),_._v(" "),t("li",[_._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),_._v(" "),t("h3",{attrs:{id:"com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-safety-or-disabled-and-no-safety-switch"}},[_._v("#")]),_._v(" COM_PREARM_MODE = Safety or Disabled and No Safety Switch")]),_._v(" "),t("p",[_._v("안전 스위치가 없는 경우 "),t("code",[_._v("COM_PREARM_MODE")]),_._v("가 "),t("em",[_._v("안전")]),_._v(" 또는 "),t("em",[_._v("비활성화")]),_._v("로 설정된 경우 사전 준비 모드를 활성화할 수 없습니다 (비활성화와 동일). 이는 "),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE = 0 또는 1")]),_._v(" (비활성화/안전 스위치) 및 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY = 22027")]),_._v(" (I/O 안전 회로 차단기 사용)에 해당합니다.")]),_._v(" "),t("p",[_._v("시작 절차는 다음과 같습니다:")]),_._v(" "),t("ol",[t("li",[_._v("전원 인가\n"),t("ul",[t("li",[_._v("모든 액츄에이터를 시동 해제 상태로 잠금")]),_._v(" "),t("li",[_._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),_._v(" "),t("li",[_._v("시동 명령 인가\n"),t("ul",[t("li",[_._v("시스템에 시동이 걸림")]),_._v(" "),t("li",[_._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),_._v(" "),t("h3",{attrs:{id:"com-prearm-mode-always-and-no-safety-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#com-prearm-mode-always-and-no-safety-switch"}},[_._v("#")]),_._v(" COM_PREARM_MODE = Always and No Safety Switch")]),_._v(" "),t("p",[_._v("시동전 모드가 "),t("em",[_._v("Always")]),_._v("이면, 전원을 켤 때 시동전 모드가 활성화됩니다. 이는 "),t("a",{attrs:{href:"#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE = 2")]),_._v(" (항상) 및 "),t("a",{attrs:{href:"#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY = 22027")]),_._v(" (I/O 안전 회로 차단기 사용)에 해당합니다.")]),_._v(" "),t("p",[_._v("시작 절차는 다음과 같습니다:")]),_._v(" "),t("ol",[t("li",[_._v("전원 인가\n"),t("ul",[t("li",[_._v("시스템이 시동전 상태로 전환: 추진 모터를 제외한 모든 액츄에이터 동작 가능(예: 보조익)")]),_._v(" "),t("li",[_._v("시스템 안전 장치 꺼짐: 시동 가능")])])]),_._v(" "),t("li",[_._v("시동 명령 인가\n"),t("ul",[t("li",[_._v("시스템에 시동이 걸림")]),_._v(" "),t("li",[_._v("모든 모터와 액츄에이터를 움직일 수 있음")])])])]),_._v(" "),t("h3",{attrs:{id:"매개변수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[_._v("#")]),_._v(" 매개변수")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("매개변수")]),_._v(" "),t("th",[_._v("설명")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("span",{attrs:{id:"COM_PREARM_MODE"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_PREARM_MODE"}},[_._v("COM_PREARM_MODE")])],1),_._v(" "),t("td",[_._v("시동전 모드로 진입하는 상태입니다. "),t("code",[_._v("0")]),_._v(": 비활성, "),t("code",[_._v("1")]),_._v(": 안전 스위치(안전 스위치로 시동 전 모드 활성 가능, 스위치가 없으면 이 옵션을 사용할 수 없습니다), "),t("code",[_._v("2")]),_._v(": 항상(전원 인가 후 시동 전 모드를 켭니다). 기본값: "),t("code",[_._v("1")]),_._v(" (안전 단추).")])]),_._v(" "),t("tr",[t("td",[t("span",{attrs:{id:"CBRK_IO_SAFETY"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_IO_SAFETY"}},[_._v("CBRK_IO_SAFETY")])],1),_._v(" "),t("td",[_._v("입출력 안전을 위한 회로 차단.")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);