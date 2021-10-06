(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{2144:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"비행-모드-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-설정"}},[t._v("#")]),t._v(" 비행 모드 설정")]),t._v(" "),s("p",[t._v("This topic explains how to map "),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("flight modes")]),t._v(" and other functions to the switches on your radio control transmitter.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You must already have "),s("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("configured your radio")]),t._v(" in order to assign flight modes and functions.")],1)]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 allows you to select flight modes from a ground station (tablet or desktop) or from a radio control transmitter. If radio control and tablet are both connected, either system can change the mode and override the previous setting.")])]),t._v(" "),s("h2",{attrs:{id:"what-flight-modes-and-switches-should-i-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-flight-modes-and-switches-should-i-set"}},[t._v("#")]),t._v(" What Flight Modes and Switches Should I Set?")]),t._v(" "),s("p",[s("em",[t._v("Flight Modes")]),t._v(" provide different types of "),s("em",[t._v("autopilot-assisted flight")]),t._v(", and "),s("em",[t._v("fully autonomous flight")]),t._v(". You can set any (or none) of the flight modes "),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("described here")]),t._v(". Most users should set the following functions, as these make the vehicle easier and safer to fly:")],1),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Position mode")]),t._v(" ("),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#position-mode-mc"}},[t._v("multicopter")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#position-mode-fw"}},[t._v("fixed-wing")]),t._v(") - Easiest and safest mode for manual flight.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" - Return to launch position by safe path and land (by default).")],1),t._v(" "),s("li",[s("strong",[t._v("VTOL Transition Switch")]),t._v(" - Toggle between fixed-wing and multicopter flight configuration on VTOL vehicles.")])]),t._v(" "),s("p",[t._v("It is also common to map switches to:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("Mission")]),t._v(" - This mode runs a pre-programmed mission sent by the ground control station.")],1),t._v(" "),s("li",[s("span",{attrs:{id:"kill_switch"}}),t._v(" "),s("RouterLink",{attrs:{to:"/ko/config/safety.html#kill_switch"}},[t._v("Kill Switch")]),t._v(" - Immediately stops all motor outputs (the vehicle will crash, which may in some circumstances be more desirable than allowing it to continue flying).")],1)]),t._v(" "),s("h2",{attrs:{id:"다중-채널과-단일-채널-모드-선택"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-채널과-단일-채널-모드-선택"}},[t._v("#")]),t._v(" 다중 채널과 단일 채널 모드 선택")]),t._v(" "),s("p",[s("em",[t._v("PX4")]),t._v(" ("),s("em",[t._v("QGroundControl")]),t._v(") supports two modes for mapping flight modes to transmitter switches/dials:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("단일 채널 모드 선택 :")]),t._v(" 최대 6 개의 비행 모드를 할당하여 단일 채널에 인코딩 된 위치를 전환합니다.")]),t._v(" "),s("li",[s("strong",[t._v("다중 채널 모드 선택 :")]),t._v(" 하나 이상의 채널에서 인코딩된 위치를 전환하는 모드를 할당합니다. 일부 모드는 채널을 공유하도록 하드 코딩되거나 다른 모드 선택에 따라 자동으로 설정됩니다 (다중 채널 모드 선택의 동작이 때때로 혼동 될 수 있음).")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The recommended approach is use "),s("em",[t._v("Single Channel Mode Selection")]),t._v(" because it easy to understand and configure.")])]),t._v(" "),s("p",[s("span",{attrs:{id:"single_channel"}})]),t._v(" "),s("h2",{attrs:{id:"단일-채널-비행-모드-선택"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단일-채널-비행-모드-선택"}},[t._v("#")]),t._v(" 단일 채널 비행 모드 선택")]),t._v(" "),s("p",[t._v('The single-channel selection mode allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel. You can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("In order to use this approach you will first need to configure your "),s("em",[t._v("transmitter")]),t._v(" to encode the physical positions of your mode switch(es) into a single channel. We provide a video guide of how this is done for the popular "),s("em",[t._v("Taranis")]),t._v(" transmitter "),s("a",{attrs:{href:"#taranis_setup"}},[t._v("below")]),t._v(" (check your documentation if you use a different transmitter).")])]),t._v(" "),s("p",[t._v("To configure single-channel flight mode selection:")]),t._v(" "),s("ol",[s("li",[s("p",[s("em",[t._v("QGroundControl")]),t._v("을 시작하고 기체를 연결합니다.")])]),t._v(" "),s("li",[s("p",[t._v("RC 송신기를 켭니다.")])]),t._v(" "),s("li",[s("p",[t._v("상단 도구 모음에서 "),s("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),s("strong",[t._v("비행 모드")]),t._v("를 선택하십시오.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(632),alt:"Flight modes single-channel"}})])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("화면이 "),s("em",[t._v("다중 채널 모드")]),t._v("로 열리면 "),s("strong",[t._v("단일 채널 모드 선택 사용")]),t._v(" 버튼을 클릭하여 화면을 변경합니다.")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[s("em",[t._v("비행 모드 설정")]),t._v(" 지정")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("모드 채널")]),t._v("을 선택합니다 (위에 채널 5로 표시되지만 송신기 구성에 따라 다름).")]),t._v(" "),s("li",[t._v("최대 6 개의 "),s("strong",[t._v("비행 모드")]),t._v("를 선택합니다.")])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("스위치 설정")]),t._v(" 지정")]),t._v(" "),s("ul",[s("li",[t._v("특정 작업에 매핑 할 채널을 선택합니다 (예 : "),s("em",[t._v("복귀(Return)")]),t._v(" 모드, "),s("em",[t._v("Kill 스위치")]),t._v(", "),s("em",[t._v("오프 보드")]),t._v(" 모드 등). (송신기에 여분의 스위치와 채널이있는 경우).")])])]),t._v(" "),s("li",[s("p",[t._v("모드가 올바른 송신기 스위치에 매핑되었는 지 테스트합니다.")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("채널 모니터")]),t._v("를 확인하여 예상 채널이 각 스위치에 의해 변경되는 지 확인하십시오.")]),t._v(" "),s("li",[t._v("송신기의 각 모드 스위치를 차례로 선택하고 원하는 비행 모드가 활성화되었는 지 확인합니다 (활성 모드의 "),s("em",[t._v("QGroundControl")]),t._v("에서 텍스트가 노란색으로 바뀜).")])])])]),t._v(" "),s("p",[t._v("All values are automatically saved as they are changed.")]),t._v(" "),s("p",[s("span",{attrs:{id:"taranis_setup"}})]),t._v(" "),s("h3",{attrs:{id:"단일-채널-설정-비디오-예-송신기-설정-포함"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단일-채널-설정-비디오-예-송신기-설정-포함"}},[t._v("#")]),t._v(" 단일 채널 설정 비디오 예 (송신기 설정 포함)")]),t._v(" "),s("p",[t._v("It is common to use the positions of a 2- and a 3-position switch on the transmitter to represent the 6 flight modes, and encode each combination of switches as a particular PWM value for the mode that will be sent on a single channel.")]),t._v(" "),s("p",[t._v("The video below shows how this is done with the "),s("em",[t._v("FrSky Taranis")]),t._v(' transmitter (a very popular and highly recommended RC transmitter). The process involves assigning a "logical switch" to each combination of positions of the two real switches. Each logical switch is then assigned to a different PWM value on the same channel.')]),t._v(" "),s("p",[t._v("The video then shows how to use "),s("em",[t._v("QGroundControl")]),t._v(' to specify the mode channel and map modes to each of the 6 "slots".')]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/scqO7vbH2jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h3",{attrs:{id:"단일-채널-설정-지침-예"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#단일-채널-설정-지침-예"}},[t._v("#")]),t._v(" 단일 채널 설정 지침 예")]),t._v(" "),s("p",[t._v("This example shows how you can configure a transmitter and PX4 with:")]),t._v(" "),s("ul",[s("li",[t._v("단일 채널 모드 설정 방식 (수동, 고도, 아크로)을 사용하여 비행 모드를 선택할 수있는 3 방향 스위치.")]),t._v(" "),s("li",[t._v("일부 기능 (시동/시동 해제)을 호출하는 양방향 스위치 ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#radio-switches"}},[t._v("무선조종기 스위치")]),t._v(" 매개 변수를 통해).")],1)]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This example shows how to set up the popular "),s("em",[t._v("FrSky Taranis")]),t._v(" transmitter. Configuration will be slightly different for other transmitters.")])]),t._v(" "),s("p",[t._v("First set up your transmitter. Below we show how to map the Taranis \"SD\" switch to channel 5. This is done in the Taranis UI 'mixer' page, as shown below:")]),t._v(" "),s("p",[s("img",{attrs:{src:o(633),alt:"Taranis - Map channel to switch"}})]),t._v(" "),s("p",[s("img",{attrs:{src:o(634),alt:"Taranis - Configure channel"}})]),t._v(" "),s("p",[t._v("You can then select the channel and the flight modes in single channel mode selection option in "),s("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:o(635),alt:"QGC - Set mode channel"}})]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#radio-switches"}},[t._v("Radio switch")]),t._v(" parameters map a particular function to a channel. Assuming you have already mapped a channel in your transmitter you can assign the channel by "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("setting the parameter")]),t._v(".")],1),t._v(" "),s("p",[t._v("For example, below we map channel 6 to the "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[t._v("RC_MAP_ARM_SW")]),t._v(" parameter in "),s("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),s("p",[s("img",{attrs:{src:o(636),alt:"QGC - Map ARM switch to channel"}})]),t._v(" "),s("p",[s("span",{attrs:{id:"multi_channel"}})]),t._v(" "),s("h2",{attrs:{id:"다중-채널-비행-모드-선택"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다중-채널-비행-모드-선택"}},[t._v("#")]),t._v(" 다중 채널 비행 모드 선택")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("We recommend you use "),s("a",{attrs:{href:"#single_channel"}},[t._v("Single Channel Flight Mode")]),t._v(" selection because the Multi Channel selection user interface can be confusing. If you do choose to use this method, then the best approach is to start assigning channels and take note of information displayed by "),s("em",[t._v("QGroundControl")]),t._v(" following your selection.")])]),t._v(" "),s("p",[t._v("The multi-channel selection user interface allows you to map one or more modes to one or more channels. There are some modes (and hence switches) that must always be defined, and the channel to which they must be allocated.")]),t._v(" "),s("p",[t._v("To configure flight modes using the multi-channel UI:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("RC 송신기를 켭니다.")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("QGroundControl")]),t._v("을 시작하고 기체를 연결합니다.")])]),t._v(" "),s("li",[s("p",[t._v("상단 도구 모음에서 "),s("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),s("strong",[t._v("비행 모드")]),t._v("를 선택하십시오.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(637),alt:"비행 모드 다중 채널"}})])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("화면이 "),s("em",[t._v("단일 채널 모드")]),t._v("로 열리면 "),s("strong",[t._v("다중 채널 모드 선택")]),t._v(" 버튼을 클릭하여 화면을 변경합니다.")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[t._v("스위치에 할당할 모드를 선택하고 관련 채널을 선택합니다 (선택된 모드는 사용자 인터페이스에서 "),s("em",[t._v("이동")]),t._v("되어 채널별로 그룹화됩니다). 채널 할당 모드에는 여러 가지 복잡한 문제가 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("일부 모드는 다른 모드 설정 값에 따라 채널 및 임계 값 레벨이 자동으로 정의되기 때문에 수동으로 편집할 수 없습니다 (회색으로 표시됨). 예:\n"),s("ul",[s("li",[s("em",[t._v("미션")]),t._v(" 모드 - "),s("em",[t._v("보류")]),t._v("와 동일한 채널 번호가 자동으로 할당됩니다 ("),s("em",[t._v("보류")]),t._v("에 대한 채널이 사용자에 의해 정의 된 경우). "),s("em",[t._v("Hold")]),t._v("에 대한 채널이 정의되어 있지 않으면, "),s("em",[t._v("Mission")]),t._v(" 모드는 "),s("em",[t._v("Stabilized/Main")]),t._v(" 모드와 동일한 채널이 자동으로 할당됩니다. 예를 들어 사용자가 다른 채널에서 "),s("em",[t._v("Stabilized/Main")]),t._v(" 및 "),s("em",[t._v("Mission")]),t._v(" 모드를 정의하지 못하도록하여 사용자가 동시에 두 모드를 모두 켤 수 없도록합니다.")]),t._v(" "),s("li",[s("em",[t._v("고도")]),t._v(" 모드 - "),s("em",[t._v("위치 제어")]),t._v(" (정의 된 경우)와 동일한 채널 번호가 자동으로 할당되거나 그렇지 않으면, "),s("em",[t._v("안정화/메인")]),t._v("과 동일한 채널이 자동으로 할당됩니다.")])])]),t._v(" "),s("li",[s("em",[t._v("Assist")]),t._v(" 모드 - 이 모드는 "),s("em",[t._v("위치 제어")]),t._v("가 활성화되고 정의 된 경우 "),s("em",[t._v("안정화/메인")]),t._v(" 모드와 동일한 채널에 추가됩니다. "),s("em",[t._v("안정화/기본")]),t._v("과 다른 채널입니다.")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("임계치 생성")]),t._v(" 버튼을 클릭합니다.")]),t._v(" "),s("ul",[s("li",[t._v("모든 모드에 대한 임계 값이 자동으로 생성되고 할당 모드에 대해 각 채널에 균등하게 분배됩니다. 예를 들어, 위에 표시된 모드 할당에서 대부분의 모드는 모드 5에 할당되며 각 모드의 채널 임계 값이 채널 전체에 고르게 분포되어 있음을 알 수 있습니다.")])])])]),t._v(" "),s("p",[t._v("This mode is demonstrated in the "),s("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot setup video here"),s("OutboundLink")],1),t._v(" (youtube).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This flight mode selection mechanism is relatively complicated due to the way that PX4 works out which mode should be selected. You may be able to gain some insight from this "),s("RouterLink",{attrs:{to:"/ko/concept/flight_modes.html#flight-mode-evaluation-diagram"}},[t._v("flow chart")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"추가-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("PX4 비행 모드 개요")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/FlightModes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 비행 모드"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 설정 비디오 - @6m53s"),s("OutboundLink")],1),t._v(" (유튜브)")])])])}),[],!1,null,null,null);e.default=a.exports},632:function(t,e,o){t.exports=o.p+"assets/img/flight_modes_single_channel.4508062f.jpg"},633:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_1.af4cb2ea.png"},634:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_2.1b6ed056.png"},635:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_3.53a514b8.png"},636:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_4.9e94edfa.png"},637:function(t,e,o){t.exports=o.p+"assets/img/flight_modes_multi_channel.157d7e57.jpg"}}]);