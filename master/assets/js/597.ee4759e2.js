(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{2105:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"짐벌-콘트롤-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#짐벌-콘트롤-설정"}},[t._v("#")]),t._v(" 짐벌 콘트롤 설정")]),t._v(" "),a("p",[t._v("차량에 부착된 짐벌로 카메라(또는 다른 페이로드) 제어 방법과 PX4가 명어로 제어하기 위한 설정 방법을 설명합니다. 이 페이지에서는 설정 방법을 설명합니다.")]),t._v(" "),a("p",[t._v("PX4에는 입력과 출력이 다른 일반 마운트/짐벌 제어 드라이버가 포함되어 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("입력은 RC 또는 MAVLink 명령(예: 임무 또는 조사)을 통하여 짐벌을 제어하는 방법을 정의합니다.")]),t._v(" "),a("li",[t._v("출력은 MAVLink 명령이나 Flight Controller AUX PWM 포트를 사용하여 짐벌이 연결되는 방식을 정의합니다. 입력 방법을 선택하여 출력을 구동할 수 있으며, 입출력 모두 매개변수로 설정합니다.")])]),t._v(" "),a("h2",{attrs:{id:"매개변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[t._v("#")]),t._v(" 매개변수")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mount"}},[t._v("마운트")]),t._v(" 매개변수는 마운트 드라이버를 설정합니다.")],1),t._v(" "),a("p",[t._v("입력("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(")과 출력("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(") 모드가 제일 중요합니다. 기본적으로, 입력은 비활성화되어 있으며 드라이버가 실행되지 않습니다. 입력 모드 선택 후, 차량을 재부팅하여 마운트 드라이버를 실행합니다.")],1),t._v(" "),a("p",[t._v("입력 모드를 "),a("code",[t._v("AUTO")]),t._v("로 설정하면, 최근 입력을 기준으로 모드가 자동 전환됩니다. MAVLink에서 RC로 전환하려면, 스틱을 크게 움직이십시오.")]),t._v(" "),a("h2",{attrs:{id:"mavlink-짐벌-mnt-mode-out-mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-짐벌-mnt-mode-out-mavlink"}},[t._v("#")]),t._v(" MAVLink 짐벌(MNT_MODE_OUT=MAVLINK)")]),t._v(" "),a("p",[t._v("MAVLink 짐벌을 활성화하려면, 매개변수 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v("을 "),a("code",[t._v("MAVLINK_DO_MOUNT")]),t._v("로 설정하고 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v("을 "),a("code",[t._v("MAVLINK")]),t._v("로 설정합니다.")],1),t._v(" "),a("p",[t._v("짐벌은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변 장치(GCS/OSD/Companion)")]),t._v("의 지침을 사용하여 "),a("em",[t._v("직렬 포트")]),t._v("에 연결할 수 있습니다("),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("직렬 포트 설정")]),t._v(" 참조).")],1),t._v(" "),a("p",[t._v("일반적인 설정 방법은 비행 콘트롤러 TELEM2 포트에서 짐벌에 직렬 연결을 하는 것입니다(TELEM2가 사용 가능할 때). 이렇게 구성하려면, 다음과 같이 설정합니다:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v("에서 "),a("strong",[t._v("TELEM2")]),t._v("까지("),a("code",[t._v("MAV_1_CONFIG")]),t._v("가 이미 보조 컴퓨터에 사용되고 있는 경우(예: "),a("code",[t._v("MAV_2_CONFIG")]),t._v(" 사용))")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v("에서 "),a("strong",[t._v("NORMAL")]),t._v("로")],1),t._v(" "),a("li",[t._v("제조업체 권장 전송 속도에 대한 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("이렇게 하면 사용자가 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONTROL"),a("OutboundLink")],1),t._v("와 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONFIGURE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONFIGURE"),a("OutboundLink")],1),t._v("를 사용하여 짐벌에 명령을 실행합니다.")]),t._v(" "),a("h2",{attrs:{id:"비행-콘트롤러의-짐벌-mnt-mode-out-aux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-콘트롤러의-짐벌-mnt-mode-out-aux"}},[t._v("#")]),t._v(" 비행 콘트롤러의 짐벌(MNT_MODE_OUT=AUX)")]),t._v(" "),a("p",[t._v("짐벌은 출력 모드를 "),a("code",[t._v("MNT_MODE_OUT=AUX")]),t._v("로 설정하여 비행 콘트롤러 AUX 포트에 연결할 수 있습니다.")]),t._v(" "),a("p",[t._v("출력 핀을 매핑 정의하려면 믹서 파일이 필요하며, "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/mount.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("마운트 믹서"),a("OutboundLink")],1),t._v("가 자동으로 선택됩니다(이는 기체 설정의 모든 AUX 믹서를 무시합니다).")]),t._v(" "),a("p",[t._v("출력 할당은 다음과 같습니다:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AUX1")]),t._v(": 상하 회전각(Pitch)")]),t._v(" "),a("li",[a("strong",[t._v("AUX2")]),t._v(": 좌우 회전각(Roll)")]),t._v(" "),a("li",[a("strong",[t._v("AUX3")]),t._v(": 방위 회전각(Yaw)")]),t._v(" "),a("li",[a("strong",[t._v("AUX4")]),t._v(": 촬영/복귀")])]),t._v(" "),a("h3",{attrs:{id:"믹서-구성-사용자-정의"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#믹서-구성-사용자-정의"}},[t._v("#")]),t._v(" 믹서 구성 사용자 정의")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("믹서 작동 방식과 믹서 파일 형식에 대한 설명은 "),a("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("믹싱 및 액추에이터")]),t._v("를 참고하십시오.")],1)]),t._v(" "),a("p",[t._v("출력은 SD 카드에 "),a("code",[t._v("etc/mixers/mount.aux.mix")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#starting-a-custom-mixer"}},[t._v("믹서 파일을 생성")]),t._v("하여 사용자가 정의할 수 있습니다.")],1),t._v(" "),a("p",[t._v("마운트에 대한 기본 믹서 설정은 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# roll\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 0  10000  10000      0 -10000  10000\n\n# pitch\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 1  10000  10000      0 -10000  10000\n\n# yaw\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 2  10000  10000      0 -10000  10000\n")])])]),a("h2",{attrs:{id:"sitl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),a("p",[t._v("Typhoon H480 모델은 사전에 설정된 시뮬레이션 짐벌과 함께 제공됩니다.")]),t._v(" "),a("p",[t._v("실행하려면 다음을 사용하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("다른 모델이나 시뮬레이터에서 마운트 드라이버를 테스트하려면 "),a("code",[t._v("vmount start")]),t._v("를 사용하여 드라이버가 실행되는 지 확인한 다음, 해당 매개변수를 설정하십시오.")]),t._v(" "),a("h2",{attrs:{id:"시험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),a("p",[t._v("드라이버는 간단한 테스트 명령을 제공합니다. 먼저 "),a("code",[t._v("vmount stop")]),t._v("으로 중지합니다. 다음은 SITL에서의 테스트 방법을 설명합니다. 이 명령은 실제 장치에서도 작동합니다.")]),t._v(" "),a("p",[t._v("다음을 사용하여 시뮬레이션을 시작합니다(이를 위해 매개변수를 변경할 필요는 없음).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("예를 들어 시동 여부를 확인하십시오. "),a("code",[t._v("commander takeoff")]),t._v(" 명령어를 실행한 다음, 다음 명령을 사용하여 짐벌(예)을 제어합니다:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vmount test yaw 30\n")])])]),a("p",[t._v("시뮬레이션된 짐벌은 자체적으로 안정적이므로, MAVLink 명령을 보내는 경우 "),a("code",[t._v("stabilize")]),t._v(" 플래그를 "),a("code",[t._v("false")]),t._v("로 설정합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(449),alt:"Gazebo 짐벌 시뮬레이션"}})])])}),[],!1,null,null,null);_.default=r.exports},449:function(t,_,e){t.exports=e.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);