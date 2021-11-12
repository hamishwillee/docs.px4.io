(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{2233:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"신규-기체-구성-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#신규-기체-구성-추가"}},[t._v("#")]),t._v(" 신규 기체 구성 추가")]),t._v(" "),a("p",[t._v("PX4는 고정된 기체 구성을 기체의 시작점으로 사용합니다. 구성은 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(" 폴더에 저장된 "),a("a",{attrs:{href:"#config-file"}},[t._v("구성 파일")]),t._v("에 정의됩니다. 구성 파일은 시스템의 물리적 구성을 설명하고 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/mixers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/mixers"),a("OutboundLink")],1),t._v(" 폴더에 저장되는 "),a("a",{attrs:{href:"#mixer-file"}},[t._v("믹서 파일")]),t._v("을 참조합니다.")]),t._v(" "),a("p",[t._v("구성을 추가하는 것은 간단합니다. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d/airframes",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/airframes 폴더"),a("OutboundLink")],1),t._v("에 새 구성 파일을 만들고(파일 이름 앞에 사용하지 않은 자동 시작 ID 추가), 새 기체 구성 파일의 이름을 <1 관련 섹션에서 >CMakeLists.txt"),t._v("를 찾은 다음 소프트웨어를 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("빌드 및 업로드")]),t._v("합니다.")],1),t._v(" "),a("p",[t._v("자체 구성을 만들고 싶지 않은 개발자는 "),a("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("맞춤 시스템 시작")]),t._v(" 페이지에 설명된 대로 microSD 카드의 텍스트 파일을 사용하여 기존 구성을 맞춤 설정할 수 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("구성 파일에서 설정하는 매개변수를 결정하려면, 먼저 일반 기체를 할당하고 차량을 조정한 다음 "),a("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#param"}},[a("code",[t._v("param show-for-airframe")])]),t._v("을 사용하여 변경된 매개변수를 나열합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"구성-파일-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구성-파일-개요"}},[t._v("#")]),t._v(" 구성 파일 개요")]),t._v(" "),a("p",[t._v("구성 파일과 믹서 파일의 구성은 몇 가지 주요 블록으로 이루어집니다.")]),t._v(" "),a("ul",[a("li",[t._v("기체 문서("),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v(" 및 "),a("em",[t._v("QGroundControl")]),t._v("에서 사용됨).")],1),t._v(" "),a("li",[a("a",{attrs:{href:"#tuning-gains"}},[t._v("튜닝 게인")]),t._v("을 포함한 차량 매개변수 설정.")]),t._v(" "),a("li",[t._v("시작해야 하는 컨트롤러 및 앱(예: 멀티콥터 또는 고정익 컨트롤러, 지면 탐지기 등)")]),t._v(" "),a("li",[t._v("시스템 물리적 구성(예: 비행기, 날개 또는 멀티콥터). 이것을 "),a("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("믹서")]),t._v("라고 합니다.")],1)]),t._v(" "),a("p",[t._v("이러한 측면은 대부분 독립적이므로, 많은 구성이 기체의 동일한 물리적 레이아웃을 공유하고 동일한 응용 프로그램을 시작하며 튜닝 이득이 가장 차이가 납니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("새 기체 파일은 클린 빌드("),a("code",[t._v("make clean")]),t._v(" 실행) 이후에만, 빌드 시스템에 자동으로 추가됩니다.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"config-file"}})]),t._v(" "),a("h3",{attrs:{id:"설정-파일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정-파일"}},[t._v("#")]),t._v(" 설정 파일")]),t._v(" "),a("p",[t._v("일반적인 구성 파일은 아래와 같습니다("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/airframes/3033_wingwing",target:"_blank",rel:"noopener noreferrer"}},[t._v("원본 파일은 여기"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("첫 번째 섹션은 기체 문서입니다. 이것은 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("와 "),a("em",[t._v("QGroundControl")]),t._v("에서 사용됩니다.")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @name Wing Wing (aka Z-84) Flying Wing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @url https://docs.px4.io/master/en/frames_plane/wing_wing_z84.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @type Flying Wing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @class Plane")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN1 left aileron")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN2 right aileron")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN4 throttle")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX1 feed-through of RC AUX1 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX2 feed-through of RC AUX2 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX3 feed-through of RC AUX3 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @maintainer Lorenz Meier <lorenz@px4.io>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @board px4_fmu-v2 exclude")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @board bitcraze_crazyflie exclude")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),a("p",[t._v("다음 섹션은 "),a("a",{attrs:{href:"#tuning-gains"}},[t._v("튜닝 게인")]),t._v("을 포함하여, 차량 매개변수를 지정합니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${R}")]),t._v("etc/init.d/rc.fw_defaults\n\nparam set-default BAT_N_CELLS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nparam set-default FW_AIRSPD_MAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_AIRSPD_MIN "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nparam set-default FW_AIRSPD_TRIM "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nparam set-default FW_R_TC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\nparam set-default FW_P_TC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\nparam set-default FW_L1_DAMPING "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.74")]),t._v("\nparam set-default FW_L1_PERIOD "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nparam set-default FW_LND_ANG "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_LND_FLALT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nparam set-default FW_LND_HHDIST "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_LND_HVIRT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nparam set-default FW_LND_TLALT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nparam set-default FW_THR_LND_MAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nparam set-default FW_PR_FF "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v("\nparam set-default FW_RR_FF "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nparam set-default FW_RR_P "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("\n\nparam set-default PWM_MAIN_DISARM "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),a("p",[t._v("기체 유형 설정("),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_TYPE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_TYPE"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure this as plane")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MAV_TYPE "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("사용할 "),a("a",{attrs:{href:"#mixer-file"}},[t._v("믹서")]),t._v(" 설정:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set mixer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MIXER wingwing\n")])])]),a("p",[t._v("PWM 출력을 구성합니다(구동/활성화할 출력 및 레벨 지정).")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_OUT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("채널을 되돌리려면, RC 송신기나 "),a("code",[t._v("RC1_REV")]),t._v("와 같이 사용하지 마십시오. 채널은 수동 모드에서 비행시에만 반전되며, 자동 조종 비행 모드로 전환하면 채널 출력이 여전히 잘못됩니다(RC 신호만 반전됨). 따라서, 올바른 채널 할당을 위해 PWM 신호를 "),a("code",[t._v("PWM_MAIN_REV1")]),t._v("(예: 채널 1의 경우)으로 변경하거나 해당 믹서에서 출력 스케일링의 부호를 변경합니다(아래 참조).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"mixer-file"}})]),t._v(" "),a("h3",{attrs:{id:"믹서-파일"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#믹서-파일"}},[t._v("#")]),t._v(" 믹서 파일")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("개념 > 믹싱")]),t._v("을 먼저 참고하십시오. 이것은 믹서 파일을 해석에 필요한 배경 정보를 제공합니다.")],1)]),t._v(" "),a("p",[t._v("일반적인 믹서 파일은 아래에 나와 있습니다("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/wingwing.main.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("원본 파일은 여기"),a("OutboundLink")],1),t._v("). 믹서 파일 이름(이 경우 "),a("code",[t._v("wingwing.main.mix")]),t._v(")은 기체 유형("),a("code",[t._v("wingwing")]),t._v("), 출력 유형("),a("code",[t._v(".main")]),t._v(" 또는 "),a("code",[t._v(".aux")]),t._v("), 그리고 믹서 파일("),a("code",[t._v(".mix")]),t._v(")에 대한 중요한 정보를 제공합니다.")]),t._v(" "),a("p",[t._v("믹서 파일에는 여러 코드 블록이 포함되어 있으며, 각 블록은 하나의 액추에이터 또는 ESC를 나타냅니다. 예를 들어 2개의 서보와 1개의 ESC, 믹서 파일에는 3개의 코드 블록이 포함됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("서보/모터의 플러그는 이 파일의 믹서 순서대로 이동합니다.")])]),t._v(" "),a("p",[t._v("따라서 MAIN1은 왼쪽 에일러론, MAIN2는 오른쪽 에일러론, MAIN3은 비어 있고(Z: 제로 믹서 참고) MAIN4는 스로틀입니다(일반적인 고정익은 출력 4에서 스로틀을 유지하기 위하여).")]),t._v(" "),a("p",[t._v("믹서는 -1..+1에 해당하는 -10000에서 10000까지의 정규화된 단위로 인코딩됩니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("M: 2\nO:      10000  10000      0 -10000  10000\nS: 0 0  -6000  -6000      0 -10000  10000\nS: 0 1   6500   6500      0 -10000  10000\n")])])]),a("p",[t._v("여기서 왼쪽에서 오른쪽으로 각 숫자는 다음을 의미합니다.")]),t._v(" "),a("ul",[a("li",[t._v("M: 2개의 제어 입력에 대한 2개의 스케일러를 나타냅니다. 믹서가 수신할 컨트롤 입력의 수를 나타냅니다.")]),t._v(" "),a("li",[t._v("O: 출력 스케일링(음수에서 *1, 양수에서 *1), 오프셋(여기서는 0) 및 출력 범위(여기서는 -1..+1)를 나타냅니다.\n"),a("ul",[a("li",[t._v("PWM 신호를 반전시키려면, 출력 스케일링 부호를 변경합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("O:      -10000  -10000      0 -10000  10000\n")])])])]),t._v(" "),a("li",[t._v("이 줄은 기본 크기 조정을 지정하는 경우 완전히 생략할 수 있습니다(및 반드시 생략해야 함)."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("O:      10000  10000   0 -10000  10000\n")])])])])])]),t._v(" "),a("li",[t._v("S: 첫 번째 입력 스케일러를 나타냅니다. 제어 그룹 #0(Flight Control)과 첫 번째 입력(roll)에서 입력을 받습니다. 롤 제어 입력의 크기를 * 0.6으로 조정하고 부호를 되돌립니다(-0.6은 축척 단위로 -6000이 됨). 오프셋을 적용하지 않고(0) 전체 범위(-1..+1)로 출력합니다.")]),t._v(" "),a("li",[t._v("S: 두 번째 입력 스케일러를 나타냅니다. 제어 그룹 #0(비행 제어) 및 두 번째 입력(피치)에서 입력을 받습니다. 피치 제어 입력 * 0.65를 조정합니다. 오프셋을 적용하지 않고(0) 전체 범위(-1..+1)로 출력합니다.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("간단히 요약하면, 이 믹서의 출력은 SERVO = ( (롤 입력 * -0.6 + 0) * 1 + (피치 입력 * 0.65 + 0) * 1 ) * 1 + 0입니다.")]),t._v(" "),a("p",[t._v("무대 뒤에서 두 스케일러가 모두 추가되어 비행 날개의 경우 제어 표면이 롤에서 최대 60% 편향, 피치에서 65% 편향을 취합니다.")]),t._v(" "),a("p",[t._v("믹서의 최종 형태는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Delta-wing mixer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" PX4FMU\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDesigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Wing Wing Z-84\n\nThis "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" defines mixers suitable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" controlling a delta wing aircraft using\nPX4FMU. The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons.\n\nThis first block of code is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions.\nThe signs of the second lines "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction.\n\nOutput "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"새-기체-그룹-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#새-기체-그룹-추가"}},[t._v("#")]),t._v(" 새 기체 그룹 추가")]),t._v(" "),a("p",[t._v('기체 "그룹"은 '),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v(" 및 "),a("em",[t._v("기체 정의서")]),t._v(" 문서("),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("PX4 DevGuide")]),t._v(" 및 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("PX4 UserGuide")]),t._v(")에서 선택하기 위하여 유사한 기체들을 그룹화합니다. 모든 그룹에는 그룹화된 기체에 대한 공통 지오메트리, 모터 수, 및 모터 회전 방향을 나타내는 이름과 연관된 svg 이미지가 있습니다.")],1),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v("에서 사용하는 기체 메타데이터 파일과 문서 소스 코드는 "),a("code",[t._v("make airframe_metadata")]),t._v(" 빌드 명령을 사용하여 스크립트를 통하여 기체 설명에서 생성됩니다.")]),t._v(" "),a("p",[t._v("기존 그룹에 속한 새 기체의 경우 다음 위치 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v("에 있는 기체 설명에 문서를 제공하는 것 외에는 아무 것도 할 필요가 없습니다.")]),t._v(" "),a("p",[t._v("기체가 "),a("strong",[t._v("새 그룹")]),t._v("을 위한 것이라면, 추가로 다음 작업을 수행하여야 합니다.")]),t._v(" "),a("ol",[a("li",[t._v("그룹에 대한 svg 이미지를 사용자 가이드 문서에 추가합니다(이미지가 제공되지 않은 경우 자리 표시자 이미지가 표시됨): "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[t._v("assets/airframes/types"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcparser.py"),a("OutboundLink")],1),t._v(" 메소드 "),a("code",[t._v("GetImageName()")]),t._v("에서 새 그룹 이름과 이미지 파일 이름 간의 매핑을 추가합니다(아래 패턴을 따릅니다)."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('def GetImageName(self):\n    """\n    Get parameter group image base name (w/o extension)\n    """\n    if (self.name == "Standard Plane"):\n        return "Plane"\n    elif (self.name == "Flying Wing"):\n        return "FlyingWing"\n     ...\n ...\n    return "AirframeUnknown"\n')])])])]),t._v(" "),a("li",[a("em",[t._v("QGroundControl")]),t._v("을 업데이트 합니다.\n"),a("ul",[a("li",[t._v("그룹에 대한 svg 이미지를 "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/AutopilotPlugins/Common/images"),a("OutboundLink")],1),t._v("에 추가합니다.")]),t._v(" "),a("li",[t._v("아래 패턴에 따라 svg 이미지에 대한 참조를 "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcimages.qrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgcimages.qrc"),a("OutboundLink")],1),t._v("에 추가합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<qresource prefix="/qmlimages">\n   ...\n   <file alias="Airframe/AirframeSimulation">src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg</file>\n   <file alias="Airframe/AirframeUnknown">src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg</file>\n   <file alias="Airframe/Boat">src/AutoPilotPlugins/Common/Images/Boat.svg</file>\n   <file alias="Airframe/FlyingWing">src/AutoPilotPlugins/Common/Images/FlyingWing.svg</file>\n   ...\n')])])])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("나머지 기체 메타데이터는 펌웨어에 자동으로 포함되어야 합니다("),a("strong",[t._v("srcparser.py")]),t._v("가 업데이트되면).")])])]),t._v(" "),a("h2",{attrs:{id:"게인-튜닝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#게인-튜닝"}},[t._v("#")]),t._v(" 게인 튜닝")]),t._v(" "),a("p",[t._v("구성 파일에 지정될 매개변수를 조정하는 방법을 설명합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("멀티콥터 PID 튜닝 가이드")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("고정익 PID 튜닝 가이드")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config_vtol/"}},[t._v("VTOL 설정")])],1)]),t._v(" "),a("h2",{attrs:{id:"qgroundcontrol에-신규-기체-추가"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol에-신규-기체-추가"}},[t._v("#")]),t._v(" QGroundControl에 신규 기체 추가")]),t._v(" "),a("p",[t._v("신규 기체를 "),a("em",[t._v("QGroundControl")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("기체 구성")]),t._v(" 섹션에 사용할 수 있도록 하려면:")],1),t._v(" "),a("ol",[a("li",[t._v("깨끗한 빌드 만들기(예: "),a("code",[t._v("make clean")]),t._v("을 실행한 다음 "),a("code",[t._v("make px4_fmu-v5_default")]),t._v(" 실행)")]),t._v(" "),a("li",[t._v("QGC를 열고 아래와 같이 **맞춤 펌웨어 파일...**을 선택합니다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(696),alt:"QGC 커스텀 펌웨어 플래시"}})]),t._v(" "),a("p",[t._v("플래시할 "),a("strong",[t._v(".px4")]),t._v(" 펌웨어 파일을 선택하라는 메시지가 표시됩니다(이 파일은 압축된 JSON 파일이며 기체 메타데이터가 포함되어 있습니다).")]),t._v(" "),a("ol",[a("li",[t._v("빌드 폴더로 이동하여 펌웨어 파일을 선택합니다(예: "),a("strong",[t._v("PX4-Autopilot/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),t._v(").")]),t._v(" "),a("li",[a("strong",[t._v("확인")]),t._v("을 눌러, 펌웨어 플래시를 시작합니다.")]),t._v(" "),a("li",[a("em",[t._v("QGroundControl")]),t._v("을 재시작합니다.")])]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v("에서 신규 기체를 선택할 수 있습니다.")])])}),[],!1,null,null,null);s.default=n.exports},696:function(t,s,e){t.exports=e.p+"assets/img/qgc_flash_custom_firmware.1cc69a59.png"}}]);