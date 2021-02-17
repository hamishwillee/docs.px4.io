(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{1837:function(t,_,e){"use strict";e.r(_);var a=e(18),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"짐벌-제어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#짐벌-제어-설정"}},[t._v("#")]),t._v(" 짐벌 제어 설정")]),t._v(" "),a("p",[t._v("기체에 카메라(또는 다른 장치)를 달아 장착하는 짐벌을 제어하려면, 어떻게 제어할 지, PX4가 어떻게 명령을 내릴지 설정해야합니다. 여기서는 설정 방법을 설명합니다.")]),t._v(" "),a("p",[t._v("PX4에는 제각각의 입출력 방식을 가진 일반 마운트/짐벌 제어 드라이버가 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("입력에서는 (임무 수행이나 조사 활동시) RC나 MAVLink 명령 중 짐벌 제어 방식을 정의합니다.")]),t._v(" "),a("li",[t._v("출력에서는 MAVLink 명령 또는 비행 제어 장치 AUX PWM 포트 중 어떤 방식으로 짐벌을 연결할 지 정의합니다. 어떤 입력 방식이든 출력을 처리할 용도로 선택할 수 있으며, 두 방식 모두 매개변수로 구성해야합니다.")])]),t._v(" "),a("h2",{attrs:{id:"매개변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[t._v("#")]),t._v(" 매개변수")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mount"}},[t._v("마운트")]),t._v(" 매개변수는 마운트 드라이버 구성애 활용합니다.")],1),t._v(" "),a("p",[t._v("가장 중요한 부분은 입력("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(") 상태와 출력("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(") 상태입니다. 기본적으로 입력은 꺼져있으며 드라이버를 실행하지 않습니다. 입력 상태를 선택하고 나면, 기체 구동을 다시 시작하여 마운트 드라이버를 시작하십시오.")],1),t._v(" "),a("p",[t._v("입력 상태를 "),a("code",[t._v("AUTO")]),t._v("(자동)로 설정하면, 가장 최근의 입력 상태로 자동으로 전환합니다. MAVLink에서 RC로 전환하려면, 스틱을 크게 움직여야 합니다.")]),t._v(" "),a("h2",{attrs:{id:"aux-출력"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aux-출력"}},[t._v("#")]),t._v(" AUX 출력")]),t._v(" "),a("p",[t._v("MAVLink 짐벌 동작을 켜려면 우선 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(" 매개변수 값을 "),a("code",[t._v("MAVLINK_DO_MOUNT")]),t._v("로, "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" 매개변수 값을 "),a("code",[t._v("MAVLINK")]),t._v("로 설정하십시오.")],1),t._v(" "),a("p",[t._v("짐벌은 [MAVLink 주변 기기 (GCS/OSD/보조)](../peripherals/mavlink_peripherals.md#mavlink-peripherals-gcsosdcompanion) 에서 다루는 방법과 같이 "),a("em",[t._v("어떤 여분의 직렬 포트")]),t._v("에든 연결할 수 있습니다("),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("직렬 포트 구성")]),t._v("도 참고).")],1),t._v(" "),a("p",[t._v("일반 구성은 비행 제어장치의 TELEM2 포트(TELEM2가 비어있다고 가정)에 짐벌을 직렬 연결하는 방식입니다. 이 구성을 진행하려면 다음과 같이 설정해야합니다:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" 매개변수 값을 "),a("strong",[t._v("TELEM2")]),t._v("로 설정하십시오( "),a("code",[t._v("MAV_1_CONFIG")]),t._v("를 이미 보조 컴퓨터에서 쓰는 경우 "),a("code",[t._v("MAV_2_CONFIG")]),t._v(" 매개변수를 활용하십시오).")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" 매개변수 값을 "),a("strong",[t._v("NORMAL")]),t._v("로 설정하십시오")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" 매개변수 값을 제조사 권장 전송율(baud rate)로 설정하십시오")],1)]),t._v(" "),a("p",[t._v("이 절차를 거치고 나면, 사용자는 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONTROL"),a("OutboundLink")],1),t._v(" 매개변수와 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONFIGURE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONFIGURE"),a("OutboundLink")],1),t._v(" 매개변수로 짐벌을 제어할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"비행-제어장치의-짐벌-mnt-mode-out-aux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-제어장치의-짐벌-mnt-mode-out-aux"}},[t._v("#")]),t._v(" 비행 제어장치의 짐벌 (MNT_MODE_OUT=AUX)")]),t._v(" "),a("p",[a("code",[t._v("MNT_MODE_OUT=AUX")]),t._v("로 설정하여 짐벌을 비행 제어장치 AUX 포트에 연결할 수 있습니다.")]),t._v(" "),a("p",[t._v("믹서 파일은 출력 핀 대응 정의에 필요하며 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/mount.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("mount mixer"),a("OutboundLink")],1),t._v("는 자동으로 선택합니다(이 명령으로 비행 기체 프레임 구성에서 제공하는 AUX 믹서 설정을 무시합니다).")]),t._v(" "),a("p",[t._v("출력 할당은 다음과 같습니다:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AUX1")]),t._v(": 상하 회전각(Pitch)")]),t._v(" "),a("li",[a("strong",[t._v("AUX2")]),t._v(": 좌우 회전각(Roll)")]),t._v(" "),a("li",[a("strong",[t._v("AUX3")]),t._v(": 방위 회전각(Yaw)")]),t._v(" "),a("li",[a("strong",[t._v("AUX4")]),t._v(": 촬영/복귀")])]),t._v(" "),a("h3",{attrs:{id:"믹서-구성-맞춤설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#믹서-구성-맞춤설정"}},[t._v("#")]),t._v(" 믹서 구성 맞춤설정")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("믹서의 작동 및 믹서 파일의 형식에 대한 설명은 "),a("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("믹싱과 액츄에이터")]),t._v("를 확인하십시오.")],1)]),t._v(" "),a("p",[t._v("출력은 SD 카드의 "),a("code",[t._v("etc/mixers/mount.aux.mix")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#starting-a-custom-mixer"}},[t._v("믹서 파일을 만들어")]),t._v(" 원하는 대로 개별 설정할 수 있습니다.")],1),t._v(" "),a("p",[t._v("태풍 H480 모델은 사전 구성 후 모의 설정한 짐벌이 딸려옵니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# roll\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 0  10000  10000      0 -10000  10000\n\n# pitch\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 1  10000  10000      0 -10000  10000\n\n# yaw\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 2  10000  10000      0 -10000  10000\n")])])]),a("h2",{attrs:{id:"sitl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),a("p",[t._v("모의 설정 짐벌을 실행하려면 다음 명령을 활용하십시오:")]),t._v(" "),a("p",[t._v("다른 모듈 또는 모의 시험 환경에 설치한 마운트 드라이버를 시험하려면, 드라이버가 실행 중인지 확인("),a("code",[t._v("vmount start")]),t._v(" 명령 활용)하고, 매개변수를 구성하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("다른 모델 또는 모의 시험 환경에 설치한 마운트 드라이버를 시험하려면, 드라이버가 실행 중인지 확인("),a("code",[t._v("vmount start")]),t._v(" 명령 활용)하고, 매개변수를 구성하십시오.")]),t._v(" "),a("h2",{attrs:{id:"시험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),a("p",[t._v("이 드라이버는 간단한 시험 명령어를 제공합니다. 먼저 "),a("code",[t._v("vmount stop")]),t._v("으로 동작을 멈추어야합니다. 아래는 SITL에서의 시험 방법을 설명하지만, 이 명령어가 실제 장비에서도 작동합니다.")]),t._v(" "),a("p",[t._v("다음 명령으로 시작하십시오(매개 변수값을 바꿀 필요는 없습니다):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("참고로 모의 환경 짐벌은 자체적으로 안정 상태로 돌아갑니다. 따라서 MAVLink 명령을 보낼 경우 "),a("code",[t._v("stabilize")]),t._v(" 플래그를 "),a("code",[t._v("false")]),t._v("로 설정하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vmount test yaw 30\n")])])]),a("p",[t._v("참고로 모의 환경 짐벌은 스스로 안정 상태로 돌아갑니다. 따라서 MAVLink 명령을 보낸다면 "),a("code",[t._v("stabilize")]),t._v(" 플래그를 "),a("code",[t._v("false")]),t._v("로 설정하십시오.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(436),alt:"Gazebo 짐벌 모의 시험"}})])])}),[],!1,null,null,null);_.default=r.exports},436:function(t,_,e){t.exports=e.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);