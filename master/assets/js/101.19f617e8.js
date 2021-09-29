(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1222:function(t,_,v){t.exports=v.p+"assets/img/trigger_pins.87ed0f77.png"},1223:function(t,_,v){t.exports=v.p+"assets/img/seagull_sync2.5b9a14dd.png"},1224:function(t,_,v){t.exports=v.p+"assets/img/qgc_test_camera.062e3c2b.png"},1225:function(t,_,v){t.exports=v.p+"assets/img/photogrammetry.4b5c0077.png"},1226:function(t,_,v){t.exports=v.p+"assets/img/qgc_survey_polygon.97788c03.jpeg"},1227:function(t,_,v){t.exports=v.p+"assets/img/qgc_survey_parameters.dbf2bf87.jpg"},1228:function(t,_,v){t.exports=v.p+"assets/img/qgc_geotag.f7b0a365.png"},1229:function(t,_,v){t.exports=v.p+"assets/img/geotag.2d9fb330.jpg"},1230:function(t,_,v){t.exports=v.p+"assets/img/sequence_diagram.2624c5c0.jpg"},2549:function(t,_,v){"use strict";v.r(_);var e=v(19),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"카메라-트리거"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#카메라-트리거"}},[t._v("#")]),t._v(" 카메라 트리거")]),t._v(" "),e("p",[t._v("카메라 트리거 드라이버를 사용하여 AUX 포트로 카메라를 트리거 펄스를 전송할 수 있습니다.")]),t._v(" "),e("p",[t._v("펄스가 전송되는 것 외에도 시퀀스 번호(즉, 현재 세션의 이미지 시퀀스 번호)와 해당 타임스탬프가 포함 된 MAVLink "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAMERA_TRIGGER"),e("OutboundLink")],1),t._v(" 메시지가 게시됩니다. 이 타임스탬프는 항공 측량을 위한 타임 스탬프 사진, 다중 카메라 시스템 동기화 또는 시각적 관성 내비게이션을 포함한 여러 응용 프로그램에 사용할 수 있습니다.")]),t._v(" "),e("p",[t._v("카메라는 또한 (선택적으로) 비행 콘트롤러 "),e("a",{attrs:{href:"#camera-capture"}},[t._v("카메라 캡처 핀")]),t._v("을 사용하여 사진 프레임이 촬영되는 정확한 순간을 알릴 수 있습니다. 이를 통하여 지오 태깅을위한 GPS 위치 또는 VIO 동기화를 위한 올바른 IMU 샘플 등에 이미지를 보다 정확하게 매핑할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"트리거-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#트리거-설정"}},[t._v("#")]),t._v(" 트리거 설정")]),t._v(" "),e("p",[t._v("카메라 트리거는 일반적으로 "),e("em",[t._v("QGroundControl")]),t._v(" "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Camera.html#px4-camera-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("기체 설정 > 카메라"),e("OutboundLink")],1),t._v(" 섹션에서 설정합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1222),alt:"트리거 핀"}})]),t._v(" "),e("p",[t._v("다양한 "),e("a",{attrs:{href:"#trigger-modes"}},[t._v("트리거 모드")]),t._v(", "),e("a",{attrs:{href:"#trigger-interface-backends"}},[t._v("백엔드 인터페이스")]),t._v(" 및 "),e("a",{attrs:{href:"#trigger-hardware-configuration"}},[t._v("하드웨어 설정")]),t._v("이 아래에 설명되어 있습니다 (이는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개 변수")]),t._v("에서 직접 설정할 수도 있음).")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("카메라 모듈이 펌웨어에 자동으로 포함되지 않기 때문에 FMUv2 기반 비행 콘트롤러 (예 : 3DR Pixhawk)의 경우 기본적으로 카메라 설정 섹션을 사용할 수 없습니다. 자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html#parameter-not-in-firmware"}},[t._v("매개변수 검색/업데이트 > 펌웨어에 없는 매개변수")]),t._v("를 참고하십시오.")],1)]),t._v(" "),e("h2",{attrs:{id:"트리거-모드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#트리거-모드"}},[t._v("#")]),t._v(" 트리거 모드")]),t._v(" "),e("p",[t._v("네 가지 모드가 지원되며 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_MODE"}},[t._v("TRIG_MODE")]),t._v(" 매개변수로 설정됩니다.")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("모드")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("0")]),t._v(" "),e("td",[t._v("카메라 트리거가 비활성화됩니다.")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("MAVLink 명령 "),e("code",[t._v("MAV_CMD_DO_TRIGGER_CONTROL")]),t._v("을 사용하여 활성화 및 비활성화 할 수 있는 기본 간격계처럼 작동합니다. 자세한 내용은 "),e("a",{attrs:{href:"#command-interface"}},[t._v("명령 인터페이스")]),t._v("를 참고하십시오.")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("간격계를 계속 켭니다.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("거리를 기반으로 트리거합니다. 설정 수평 거리를 초과시 마다 촬영됩니다. 그러나, 두 샷 사이의 최소 시간 간격은 설정된 트리거 간격에 의해 제한됩니다.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("임무 모드에서 비행시 측량은 자동으로 트리거됩니다.")])])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("카메라 트리거 앱을 처음 활성화하는 경우 "),e("code",[t._v("TRIG_MODE")]),t._v(" 매개변수를 변경 후 재부팅하여야 합니다.")])]),t._v(" "),e("h2",{attrs:{id:"트리거-하드웨어-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#트리거-하드웨어-설정"}},[t._v("#")]),t._v(" 트리거 하드웨어 설정")]),t._v(" "),e("p",[t._v("GPIO, PWM 또는 Seagull 기반 트리거링 (예 : MAVLink 카메라를 사용하지 않는 경우)에 대한 이미지 캡처를 트리거하는 데 사용 핀은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_PINS"}},[t._v("TRIG_PINS")]),t._v(" 매개변수에서 설정합니다. 기본값은 56이며, 이는 "),e("em",[t._v("FMU")]),t._v(" 핀 5 및 6에서 트리거 활성화를 의미합니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("FMU")]),t._v(" "),e("p",[t._v("및 I/O 보드가 모두있는 Pixhawk 비행 콘트롤러에서 이러한 FMU 핀은 "),e("code",[t._v("AUX5")]),t._v("와 "),e("code",[t._v("AUX6")]),t._v(" (예 : Pixhawk 4, CUAV v5 +)에 매핑됩니다. FMU만 있는 콘트롤러에서는 핀이 "),e("code",[t._v("MAIN5")]),t._v("와 "),e("code",[t._v("MAIN6")]),t._v("에 매핑됩니다 (예 : Pixhawk 4 mini, CUAV v5 nano). 작성 시점에 트리거링은 FMU 핀에서만 작동합니다. I/O 보드의 핀을 사용하여 카메라를 트리거 할 수 없습니다.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("code",[t._v("TRIG_PINS=56")]),t._v(" (기본값)으로 AUX 핀 1 ~ 4를 액추에이터 출력 (서보/ESC 용)으로 사용할 수 있습니다. "),e("code",[t._v("TRIG_PINS=78")]),t._v("을 사용하면 AUX 핀 1-6을 액추에이터 출력으로 사용할 수 있습니다. 다른 핀 조합을 선택할 수 있지만, 다른 FMU 핀을 출력으로 사용할 수 없습니다.")])]),t._v(" "),e("h2",{attrs:{id:"트리거-인터페이스-백엔드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#트리거-인터페이스-백엔드"}},[t._v("#")]),t._v(" 트리거 인터페이스 백엔드")]),t._v(" "),e("p",[t._v("카메라 트리거 드라이버는 여러 백엔드를 지원합니다. 각 백엔드는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[t._v("TRIG_INTERFACE")]),t._v(" 매개변수에 의해 제어되는 특정 애플리케이션을 위한 것입니다.")],1),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("번호")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("GPIO 인터페이스를 활성화합니다. AUX 출력은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[t._v("TRIG_INTERVAL")]),t._v(" 시간마다 ("),e("code",[t._v("TRIG_POLARITY")]),t._v(" 매개변수에 따라) 높거나 낮게 펄스됩니다. 이것은 대부분의 표준 머신비전 카메라를 직접 트리거 할 수 있습니다. PX4FMU 시리즈 하드웨어 (Pixhawk, Pixracer 등)에서 AUX 핀의 신호 레벨은 3.3v입니다.")],1)]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("Seagull MAP2 인터페이스를 활성화합니다. 이를 통해 "),e("a",{attrs:{href:"http://www.seagulluav.com/product/seagull-map2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seagull MAP2"),e("OutboundLink")],1),t._v("를 사용하여 지원되는 여러 카메라에 연결할 수 있습니다. MAP2의 핀/채널 1 (카메라 트리거) 및 핀/채널 2 (모드 선택기)는 각각 "),e("code",[t._v("TRIG_PINS")]),t._v("의 하위 및 상위 AUX 핀에 연결되어야합니다 (따라서 채널/핀 1에서 AUX 기본적으로 채널/핀 2에서 AUX 6으로). Seagull MAP2를 사용하는 PX4는 QX-1과 같은 Sony Multiport 카메라의 자동 전원 제어 및 연결 유지 기능도 지원합니다.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("MAVLink 인터페이스를 사용합니다. 이 모드에서는 실제 하드웨어 출력이 사용되지 않습니다. "),e("code",[t._v("CAMERA_TRIGGER")]),t._v(" MAVLink 메시지는 자동 조종 장치에 의해 전송됩니다 (MAVLink 응용 프로그램이 "),e("code",[t._v("온보드")]),t._v(" 모드인 경우 기본적으로). 그렇지 않으면, 사용자 정의 스트림을 활성화하여야 합니다.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("범용 PWM 인터페이스를 사용합니다. "),e("a",{attrs:{href:"https://hobbyking.com/en_us/universal-remote-control-infrared-shutter-ir-rc-1g.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("적외선 트리거"),e("OutboundLink")],1),t._v(" 또는 서보가 카메라를 트리거 할 수 있습니다. 트리거 신호는 "),e("code",[t._v("TRIG_PINS")]),t._v("를 사용하여 지정된 두 핀에서 복제됩니다.")])])])]),t._v(" "),e("h2",{attrs:{id:"기타-매개변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-매개변수"}},[t._v("#")]),t._v(" 기타 매개변수")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_POLARITY"}},[t._v("TRIG_POLARITY")])],1),t._v(" "),e("td",[t._v("GPIO 인터페이스를 사용하는 동안에만 관련됩니다. 트리거 핀의 극성을 설정합니다. 액티브 하이는 핀이 로우로 정상적으로 당겨지고 트리거 이벤트에서 하이로 풀링됨을 의미합니다. 액티브 로우는 반대의 경우도 마찬가지입니다.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[t._v("TRIG_INTERVAL")])],1),t._v(" "),e("td",[t._v("두 개의 연속 트리거 이벤트 사이의 시간을 밀리 초 단위로 정의합니다.")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_ACT_TIME"}},[t._v("TRIG_ACT_TIME")])],1),t._v(" "),e("td",[t._v('트리거 핀이 "활성"상태로 유지되어 중립으로 돌아가기 전의 시간을 밀리 초 단위로 정의합니다. PWM 모드에서는 50Hz PWM 신호에 항상 활성화 펄스를 맞출 수 있도록 최소값이 40ms로 제한됩니다.')])])])]),t._v(" "),e("p",[t._v("카메라 트리거 모듈과 관련 전체 매개변수 목록은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#camera-trigger"}},[t._v("매개변수 참조")]),t._v(" 페이지를 참고하십시오.")],1),t._v(" "),e("h2",{attrs:{id:"카메라-캡처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#카메라-캡처"}},[t._v("#")]),t._v(" 카메라 캡처")]),t._v(" "),e("p",[t._v("카메라는 또한 (선택적으로) 비행 콘트롤러 카메라 캡처 핀을 사용하여 사진 프레임이 촬영되는 순간을 정확하게 알 수 있습니다. 이를 통하여 지오 태깅을위한 GPS 위치 또는 VIO 동기화를 위한 올바른 IMU 샘플 등에 이미지를 보다 정확하게 매핑할 수 있습니다.")]),t._v(" "),e("p",[t._v("PX4에서 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAM_CAP_FBACK"}},[t._v("CAM_CAP_FBACK=1")]),t._v("을 설정하면 카메라 캡처/피드백이 활성화됩니다. 사용되는 캡처 핀은 하드웨어에 따라 달라집니다.")],1),t._v(" "),e("ul",[e("li",[t._v("Pixhawk FMUv5x 보드는 보드별 카메라 캡처 핀 (PI0)을 사용합니다.")]),t._v(" "),e("li",[t._v("다른 보드는 카메라 캡처를 위하여 FMU PWM 핀 6(하드 코딩 됨)을 사용합니다.")])]),t._v(" "),e("p",[t._v("PX4는 카메라 캡처 핀에서 적절한 전압 레벨로 상승 에지를 감지합니다 (Pixhawk 비행 콘트롤러의 경우 일반적으로 3.3V). 카메라가 적절한 전압을 출력하지 않는 경우에는, 신호 호환을 위한 추가 회로가 필요합니다.")]),t._v(" "),e("p",[t._v("핫슈 커넥터 (플래시 연결 용)가 있는 카메라는 일반적으로 핫슈 어댑터를 통하여 연결할 수 있습니다. 예를 들어, "),e("a",{attrs:{href:"https://www.seagulluav.com/product/seagull-sync2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seagull # SYNC2 범용 카메라 핫슈 어댑터"),e("OutboundLink")],1),t._v("는 플래시 전압을 Pixhawk 전압으로 분리하고 이동하는 옵토 커플러입니다. 이것은 카메라 상단의 플래시 슬롯에 삽입됩니다. 빨간색 및 검은 색 출력은 서보 레일/접지에 연결되고, 흰색 와이어는 입력 캡처 핀에 연결됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1223),alt:"Seagull SYNC#2"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4는 카메라 트리거와 카메라 캡처 모두에서 MAVLink [CAMERA_TRIGGER](https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER) 메시지를 전송합니다. 카메라 캡처가 구성된 경우 카메라 캡처 드라이버의 타임스탬프가 사용되며 그렇지 않으면 트리거링 타임스탬프가 사용됩니다.")])]),t._v(" "),e("h2",{attrs:{id:"명령-인터페이스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#명령-인터페이스"}},[t._v("#")]),t._v(" 명령 인터페이스")]),t._v(" "),e("p",[e("strong",[t._v("TODO : 업데이트 필요 업데이트")])]),t._v(" "),e("p",[t._v("카메라 트리거 드라이버는 여러가지 명령어를 지원합니다.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_TRIGGER_CONTROL"),e("OutboundLink")],1),t._v(' - "명령 제어" 모드에서 허용됩니다 ('),e("code",[t._v("TRIG_MODE")]),t._v(" 1).")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("명령어 매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Param #1")]),t._v(" "),e("td",[t._v("트리거 활성화/비활성화 (비활성화의 경우 0으로 설정하고, 시작의 경우 1로 설정)")])]),t._v(" "),e("tr",[e("td",[t._v("Param #2")]),t._v(" "),e("td",[t._v("트리거 사이클 시간 (밀리 초 단위) ("),e("code",[t._v("TRIG_INTERVAL")]),t._v(" 매개변수 설정)")])]),t._v(" "),e("tr",[e("td",[t._v("Param #3")]),t._v(" "),e("td",[t._v("시퀀스 재설정 (이미지 시퀀스 번호를 재설정하려면 1로 설정하고, 현재 시퀀스 번호를 유지하려면 0으로 설정)")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_DIGICAM_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_DIGICAM_CONTROL"),e("OutboundLink")],1),t._v(" - 모든 모드에서 허용됩니다. 이것은 GCS에서 사용자 인터페이스에서 카메라를 테스트 촬영시에 사용됩니다. 트리거 드라이버는 아직 MAVLink 사양에 정의된 모든 카메라 제어 매개변수를 지원하지 않습니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("명령어 매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Param #5")]),t._v(" "),e("td",[t._v("원샷 명령을 트리거합니다 (단일 이미지 프레임을 트리거하려면 1로 설정).")])])])]),t._v(" "),e("p",[t._v('MAV_CMD_DO_SET_CAM_TRIGG_DIST </ 0> - "임무 통제"모드에서 허용됨 (` TRIG_MODE </> 4)')]),e("p"),t._v(" "),e("p",[t._v("이 명령은 GCS의 조사 임무에 따라 카메라를 트리거하기 위해 임무중 자동 생성됩니다.")]),t._v(" "),e("h2",[t._v("트리거 기능 테스트")]),t._v(" "),e("ol",{attrs:{start:"1"}},[e("li",[t._v("PX4 콘솔에서 :\n```camera_trigger test```")]),t._v(" "),e("li",[e("p",[e("em",[t._v("QGroundControl")]),t._v(" 에서:")]),t._v(" "),e("p",[t._v("기본 계기판에서 "),e("strong",[t._v("트리거 카메라")]),t._v("를 클릭합니다.\n이러한 샷은 위치 정보 태그 지정을 위하여 기록되거나 계산되지 않습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1224),alt:"QGC 테스트 카메라"}})])])]),t._v(" "),e("h2",[t._v("Sony QX-1 예제 (사진 측량)")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1225),alt:"사진 측량법"}})]),t._v(" "),e("p",[t._v("이 예에서는 Seagull MAP2 트리거 케이블로 Sony QX-1에 연결하여 자율 측량 임무를 수행한 후 정사 투영을 만드는 것입니다.")]),t._v(" "),e("h3",[t._v("트리거 설정")]),t._v(" "),e("p",[t._v("권장되는 카메라 설정은 다음과 같습니다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TRIG_INTERFACE=2` (Seagull MAP2).")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TRIG_MODE=4")]),t._v(" (임무 제어).")]),t._v(" "),e("li",[t._v("나머지 매개 변수는 기본값으로 설정합니다.")])])]),t._v(" "),e("p",[t._v("Seagull MAP2를 자동조종장치의 보조/FMU 핀에 연결하여야 합니다. 핀 1은 "),e("code",[t._v("AUX 5")]),t._v("에, 핀 2는 "),e("code",[t._v("AUX 6")]),t._v('에 연결합니다. MAP2 케이블의 다른 쪽 끝은 QX-1의 "MULTI" 포트에 연결합니다.')]),t._v(" "),e("h3",{attrs:{id:"카메라-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#카메라-설정"}},[t._v("#")]),t._v(" 카메라 설정")]),t._v(" "),e("p",[t._v("이 예제에서는 Sony QX-1에 16-50mm f3.5-5.6 렌즈를 사용합니다.")]),t._v(" "),e("p",[t._v("카메라가 트리거시 자동 초점과 측광 지연을 방지하려면 다음 지침을 따르십시오.")]),t._v(" "),e("ul",[e("li",[t._v("수동으로 초점을 무한대로 설정합니다.")]),t._v(" "),e("li",[t._v("카메라를 연속 촬영 모드로 설정합니다.")]),t._v(" "),e("li",[t._v("노출과 조리개를 수동으로 설정합니다.")]),t._v(" "),e("li",[t._v("ISO는 가능한 한 낮게 설정합니다.")]),t._v(" "),e("li",[t._v("풍경에 적합한 수동 화이트 밸런스를 설정합니다.")])]),t._v(" "),e("h3",{attrs:{id:"임무-계획"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#임무-계획"}},[t._v("#")]),t._v(" 임무 계획")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1226),alt:"QGC 측량 다각형"}})]),t._v(" "),e("p",[e("img",{attrs:{src:v(1227),alt:"QGC 측량 매개변수"}})]),t._v(" "),e("h3",{attrs:{id:"지오태깅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지오태깅"}},[t._v("#")]),t._v(" 지오태깅")]),t._v(" "),e("p",[t._v('비행 로그 파일과 이미지를 다운로드 QGroundControl을 지정합니다. 그런 다음 "태깅 시작"을 클릭하십시오.')]),t._v(" "),e("p",[e("img",{attrs:{src:v(1228),alt:"QGC 지오태깅"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.pic2map.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pic2Map"),e("OutboundLink")],1),t._v("과 같은 무료 온라인 서비스를 사용하여 지오 태깅을 확인할 수 있습니다. Pic2Map은 40 개의 이미지 제한이 있습니다.")]),t._v(" "),e("h3",{attrs:{id:"재구성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#재구성"}},[t._v("#")]),t._v(" 재구성")]),t._v(" "),e("p",[t._v("3D 재구성을 위해 "),e("a",{attrs:{href:"https://pix4d.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix4D"),e("OutboundLink")],1),t._v("를 사용합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1229),alt:"지오태그"}})]),t._v(" "),e("h2",{attrs:{id:"카메라-imu-동기화-예-vio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#카메라-imu-동기화-예-vio"}},[t._v("#")]),t._v(" 카메라-IMU 동기화 예 (VIO)")]),t._v(" "),e("p",[t._v("이 예에서는 스테레오 VINS(Visual-Inertial Navigation System)를 구축하기 위하여 IMU 측정을 시각적 데이터와 동기화에 관련된 기본 사항을 설명합니다. 사진을 찍는 것과 동시에 IMU 측정을하는 것이 아니라 VIO 알고리즘에 정확한 데이터를 제공하기 위해 이미지에 정확한 타임 스탬프를 찍는 것입니다.")]),t._v(" "),e("p",[t._v("자동비행장치와 보조 컴퓨터는 서로 다른 클럭 기반 (자동비행장치의 경우 부팅 시간, 보조 컴퓨터의 경우 UNIX epoch)을 갖기 때문에 시계를 보종하는 대신, 시계 간의 시간 오프셋을 관찰합니다. 이 오프셋은 미들웨어간 번역기 구성 요소(예: 보조 컴퓨터의 MAVROS 및 PX4의 "),e("code",[t._v("mavlink_receiver")]),t._v(")의 MAVLink 메시지(예: "),e("code",[t._v("HIGHRES_IMU")]),t._v(")의 타임스탬프에서 추가하거나 뺍니다. 실제 동기화 알고리즘은 NTP(Network Time Protocol) 알고리즘의 수정 버전이며, 지수 이동 평균을 사용하여 추적 시간 오프셋을 평활화합니다. 이 동기화는 MAVROS가 고대역폭 온보드 링크(MAVLink 모드 "),e("code",[t._v("온보드")]),t._v(")와 함께 사용되는 경우 자동으로 수행됩니다.")]),t._v(" "),e("p",[t._v("동기화 된 이미지 프레임과 관성 측정을 획득 하기 위하여, 두 카메라의 트리거 입력을 자동조종장치의 GPIO 핀에 연결합니다. 노출 시작부터 관성 측정의 타임스탬프와 이미지 시퀀스 번호가 기록되어 보조 컴퓨터("),e("code",[t._v("CAMERA_TRIGGER")]),t._v(" 메시지)로 전송되어 패킷과 카메라 이미지 프레임을 버퍼링합니다. 시퀀스 번호(첫 번째 이미지 프레임은 시퀀스 0), 이미지 타임스탬프 ("),e("code",[t._v("CAMERA_TRIGGER")]),t._v(" 메시지의 타임스탬프 포함)에 따라 일치후에 게시됩니다.")]),t._v(" "),e("p",[t._v("다음 다이어그램은 이미지에 정확한 타임스탬프를 찍기 위하여 발생하는 일련의 이벤트를 나타냅니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(1230),alt:"시퀀스 다이어그램"}})]),t._v(" "),e("h3",{attrs:{id:"_1-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-단계"}},[t._v("#")]),t._v(" 1 단계")]),t._v(" "),e("p",[t._v("먼저 TRIG_MODE를 1로 설정하여 드라이버가 시작 명령을 기다리도록하고, 나머지 매개변수를 얻기 위해 FCU를 재부팅합니다.")]),t._v(" "),e("h3",{attrs:{id:"_2-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-단계"}},[t._v("#")]),t._v(" 2 단계")]),t._v(" "),e("p",[t._v("이 예제의 목적을 위하여 30 FPS에서 실행되는 Point Grey Firefly MV 카메라와 함께 작동하도록 트리거를 설정합니다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TRIG_INTERVAL")]),t._v(": 33.33 ms")]),t._v(" "),e("li",[e("code",[t._v("TRIG_POLARITY")]),t._v(": 0 (active low)")]),t._v(" "),e("li",[e("code",[t._v("TRIG_ACT_TIME")]),t._v(": 0.5 ms. 매뉴얼에는 최소 1 마이크로 초면 충분하다고 명시되어 있습니다.")]),t._v(" "),e("li",[e("code",[t._v("TRIG_MODE")]),t._v(" : 1, 트리거 시작전에 카메라 드라이버가 이미지를 수신할 준비가 되는 것이 좋습니다. 이것은 일련 번호를 처리에 필수적입니다.")]),t._v(" "),e("li",[e("code",[t._v("TRIG_PINS")]),t._v(" : 56, 기본값 그대로 사용합니다.")])]),t._v(" "),e("h3",{attrs:{id:"_3-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-단계"}},[t._v("#")]),t._v(" 3 단계")]),t._v(" "),e("p",[t._v("접지 및 신호 핀을 적절한 위치에 연결하여 카메라를 AUX 포트에 연결합니다.")]),t._v(" "),e("h3",{attrs:{id:"_4-단계"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-단계"}},[t._v("#")]),t._v(" 4 단계")]),t._v(" "),e("p",[t._v("위의 시퀀스 다이어그램을 따르려면 드라이버를 수정하여 합니다. "),e("a",{attrs:{href:"https://github.com/ProjectArtemis/ueye_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDS Imaging UEye"),e("OutboundLink")],1),t._v(" 카메라와 "),e("a",{attrs:{href:"https://github.com/andre-nguyen/camera1394",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE1394 호환"),e("OutboundLink")],1),t._v(" 카메라에 대한 공개 참조 구현을 사용하십시오.")])])}),[],!1,null,null,null);_.default=r.exports}}]);