(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{2751:function(t,e,s){"use strict";s.r(e);var o=s(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"비행-모드-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-설정"}},[t._v("#")]),t._v(" 비행 모드 설정")]),t._v(" "),o("p",[t._v("이 항목에서는 "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("비행 모드")]),t._v(" 및 기타 기능을 무선 조종 송신기의 스위치에 매핑하는 방법을 설명합니다.")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("비행 모드를 설정하려면 아래 사항들이 준비되어야 합니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("라디오 설정")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"#rc-transmitter-setup"}},[t._v("송신기를 설정")]),t._v("하여 모드 스위치의 물리적 위치를 단일 채널로 인코딩합니다. We provide examples for the popular "),o("em",[t._v("Taranis")]),t._v(" transmitter "),o("a",{attrs:{href:"#taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[t._v("below")]),t._v(" (check your documentation if you use a different transmitter). :::")])]),t._v(" "),o("h2",{attrs:{id:"어떤-비행-모드와-스위치를-설정하여야-합니까"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#어떤-비행-모드와-스위치를-설정하여야-합니까"}},[t._v("#")]),t._v(" 어떤 비행 모드와 스위치를 설정하여야 합니까?")]),t._v(" "),o("p",[t._v("Flight Modes provide different types of "),o("em",[t._v("autopilot-assisted flight")]),t._v(", and "),o("em",[t._v("fully autonomous flight")]),t._v(". "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("여기에 설명된")]),t._v(" 비행 모드를 설정하거나 설정하지 않을 수 있습니다.")],1),t._v(" "),o("p",[t._v("스위치를 아래와 같이 일반적으로 매핑합니다.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Position mode")]),t._v(" — Easiest and safest mode for manual flight.")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("복귀 모드")]),t._v(" - 안전한 경로와 착륙을 통해 이륙 위치로 되돌아갑니다(기본값).")],1),t._v(" "),o("li",[t._v("(VTOL only) "),o("strong",[t._v("VTOL Transition Switch")]),t._v(" — Toggle between fixed-wing and multicopter flight configuration on VTOL vehicles.")])]),t._v(" "),o("p",[t._v("It is also common to map switches to:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("미션")]),t._v(" - 지상관제소에서 보낸 사전 프로그래밍된 미션을 실행합니다.")],1),t._v(" "),o("li",[o("a",{attrs:{id:"kill_switch"}}),t._v(" "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#kill-switch"}},[t._v("킬 스위치")]),t._v(" - 모든 모터 출력을 즉시 중지합니다. 기체가 충돌하는 상황에서는 계속 비행하는 것보다 사고를 방지할 수 있습니다.")],1)]),t._v(" "),o("h2",{attrs:{id:"비행-모드-선택"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-선택"}},[t._v("#")]),t._v(" 비행 모드 선택")]),t._v(" "),o("p",[t._v('PX4 allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel. You can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),t._v(" "),o("p",[t._v("모든 값은 변경시에 자동으로 저장됩니다.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Start "),o("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),o("li",[o("p",[t._v("RC 송신기를 켭니다.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("QGroundControl 아이콘 > 차량 설정")]),t._v("을 선택한 다음 사이드바에서 "),o("strong",[t._v("비행 모드")]),t._v("를 선택합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(687),alt:"비행 모드 단일 채널"}})])]),t._v(" "),o("li",[o("p",[t._v("Specify "),o("em",[t._v("Flight Mode Settings")]),t._v(":")]),t._v(" "),o("ul",[o("li",[t._v("Select the "),o("strong",[t._v("Mode channel")]),t._v(" (above this shown as Channel 5, but this will depend on your transmitter configuration).")]),t._v(" "),o("li",[t._v("Move the transmitter switch (or switches) that you have set up for mode selection through the available positions. The mode slot matching your current switch position will be highlighted (above this is "),o("em",[t._v("Flight Mode 1")]),t._v("). :::note\nWhile you can set flight modes in any of the 6 slots, only the channels that are mapped to switch positions will be highlighted/used.")])])])])]),t._v(" "),o("ul",[o("li",[t._v("Select the flight mode that you want triggered for each switch position.")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Specify "),o("em",[t._v("Switch Settings")]),t._v(":")]),t._v(" "),o("ul",[o("li",[t._v("Select the channels that you want to map to specific actions - e.g.: "),o("em",[t._v("Return")]),t._v(" mode, "),o("em",[t._v("Kill switch")]),t._v(", "),o("em",[t._v("offboard")]),t._v(" mode, etc. (if you have spare switches and channels on your transmitter).")])])]),t._v(" "),o("li",[o("p",[t._v("Test that the modes are mapped to the right transmitter switches:")]),t._v(" "),o("ul",[o("li",[t._v("Check the "),o("em",[t._v("Channel Monitor")]),t._v(" to confirm that the expected channel is changed by each switch.")]),t._v(" "),o("li",[t._v("Select each mode switch on your transmitter in turn, and check that the desired flight mode is activated (the text turns yellow on "),o("em",[t._v("QGroundControl")]),t._v(" for the active mode).")])])])]),t._v(" "),o("p",[t._v("All values are automatically saved as they are changed.")]),t._v(" "),o("h2",{attrs:{id:"rc-송신기-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rc-송신기-설정"}},[t._v("#")]),t._v(" RC 송신기 설정")]),t._v(" "),o("p",[t._v('2개 또는 3개의 모드 중 선택만 지원해야 하는 경우 단일 3방향 스위치의 위치에 모드를 매핑할 수 있습니다. 아래에서는 Taranis 3-way "SD"스위치를 채널 5에 매핑하는 방법을 보여줍니다.')]),t._v(" "),o("p",[o("a",{attrs:{id:"taranis_setup"}})]),t._v(" "),o("h3",{attrs:{id:"taranis-설정-단일-채널-모드를-위한-3방향-스위치-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taranis-설정-단일-채널-모드를-위한-3방향-스위치-설정"}},[t._v("#")]),t._v(" Taranis 설정: 단일 채널 모드를 위한 3방향 스위치 설정")]),t._v(" "),o("p",[t._v("If you only need to support selecting between two or three modes then you can map the modes to the positions of a single 3-way switch. 송신기 설정은 송신기마다 차이가 날 수 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This example shows how to set up the popular "),o("em",[t._v("FrSky Taranis")]),t._v(" transmitter. Transmitter setup will be different on other transmitters. :::")]),t._v(" "),o("p",[t._v("Open the Taranis UI "),o("strong",[t._v("MIXER")]),t._v(" page and scroll down to "),o("strong",[t._v("CH5")]),t._v(", as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:s(688),alt:"Taranis - Map channel to switch"}})]),t._v(" "),o("p",[t._v("Press "),o("strong",[t._v("ENT(ER)")]),t._v(" to edit the "),o("strong",[t._v("CH5")]),t._v(" configuration then change the "),o("strong",[t._v("Source")]),t._v(" to be the "),o("em",[t._v("SD")]),t._v(" button.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(689),alt:"Taranis - Configure channel"}})]),t._v(" "),o("p",[t._v("That's it! Channel 5 will now output 3 different PWM values for the three different "),o("strong",[t._v("SD")]),t._v(" switch positions.")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("QGroundControl")]),t._v(" configuration is then as described in the previous section.")]),t._v(" "),o("h3",{attrs:{id:"taranis-설정-단일-채널-모드를-위한-다중-방향-스위치-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#taranis-설정-단일-채널-모드를-위한-다중-방향-스위치-설정"}},[t._v("#")]),t._v(" Taranis 설정: 단일 채널 모드를 위한 다중 방향 스위치 설정")]),t._v(" "),o("p",[t._v('FrSky Taranis에서 이 프로세스는 두 개의 실제 스위치 위치의 각 조합에 "논리적 스위치"를 할당하는 것을 포함합니다. 그런 다음 각 논리적 스위치는 동일한 채널에서 다른 PWM 값에 할당됩니다.')]),t._v(" "),o("p",[t._v('On the FrSky Taranis this process involves assigning a "logical switch" to each combination of positions of the two real switches. Each logical switch is then assigned to a different PWM value on the same channel.')]),t._v(" "),o("p",[t._v("The video below shows how this is done with the "),o("em",[t._v("FrSky Taranis")]),t._v(" transmitter.")]),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/TFEjEQZqdVA",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),t._v(" "),o("p",[t._v("The "),o("em",[t._v("QGroundControl")]),t._v(" configuration is then "),o("a",{attrs:{href:"#flight-mode-selection"}},[t._v("as described above")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"추가-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("Flight Modes Overview")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/flight_modes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Flight Modes"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video - @6m53s"),o("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#radio-switches"}},[t._v("Radio switch parameters")]),t._v(" - Can be used to set mappings via parameters")],1)])])])}),[],!1,null,null,null);e.default=a.exports},687:function(t,e,s){t.exports=s.p+"assets/img/flight_modes_single_channel.2efc05a8.jpg"},688:function(t,e,s){t.exports=s.p+"assets/img/single_channel_mode_selection_1.587e5a0d.png"},689:function(t,e,s){t.exports=s.p+"assets/img/single_channel_mode_selection_2.0e67be73.png"}}]);