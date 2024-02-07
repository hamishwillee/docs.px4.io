(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1449:function(t,e,a){t.exports=a.p+"assets/img/trigger_pins.02861fba.png"},1450:function(t,e,a){t.exports=a.p+"assets/img/seagull_sync2.c248d158.png"},1451:function(t,e,a){t.exports=a.p+"assets/img/qgc_test_camera.2eb07453.png"},1452:function(t,e,a){t.exports=a.p+"assets/img/photogrammetry.4b5c0077.png"},1453:function(t,e,a){t.exports=a.p+"assets/img/qgc_survey_polygon.2669906f.jpeg"},1454:function(t,e,a){t.exports=a.p+"assets/img/qgc_survey_parameters.81ac2b88.jpg"},1455:function(t,e,a){t.exports=a.p+"assets/img/qgc_geotag.473aba86.png"},1456:function(t,e,a){t.exports=a.p+"assets/img/geotag.2d9fb330.jpg"},3263:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"카메라-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#카메라-설정"}},[t._v("#")]),t._v(" 카메라 설정")]),t._v(" "),r("p",[t._v("PX4 can be configured to connect physical outputs to trigger a camera, or it can be used with a "),r("a",{attrs:{href:"#mavlink-cameras"}},[t._v("MAVLink camera")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("We recommend that you use a MAVLink camera as this allows comprehensive control of cameras via the "),r("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("camera protocol"),r("OutboundLink")],1),t._v(". Directly connected cameras only support "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[t._v("a small subset")]),t._v(" of MAVLink camera commands.")])]),t._v(" "),r("p",[t._v("Whenever a camera is triggered, the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAMERA_TRIGGER"),r("OutboundLink")],1),t._v(" message is published containing a sequence number (i.e. the current session's image sequence number) and the corresponding timestamp. 이 타임스탬프는 항공 측량을 위한 타임 스탬프 사진, 다중 카메라 시스템 동기화 또는 시각적 관성 내비게이션을 포함한 여러 응용 프로그램에 사용할 수 있습니다.")]),t._v(" "),r("p",[t._v("Cameras can also (optionally) signal PX4 at the exact moment that a photo/frame is taken using a camera capture pin. 이를 통하여 지오 태깅을위한 GPS 위치 또는 VIO 동기화를 위한 올바른 IMU 샘플 등에 이미지를 보다 정확하게 매핑할 수 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"트리거-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트리거-설정"}},[t._v("#")]),t._v(" 트리거 설정")]),t._v(" "),r("p",[t._v("Camera triggering is usually configured from the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Camera.html#px4-camera-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vehicle Setup > Camera"),r("OutboundLink")],1),t._v(" section.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1449),alt:"트리거 핀"}})]),t._v(" "),r("p",[t._v("The different "),r("a",{attrs:{href:"#trigger-modes"}},[t._v("trigger modes")]),t._v(", "),r("a",{attrs:{href:"#trigger-interface-backends"}},[t._v("backend interfaces")]),t._v(" and "),r("a",{attrs:{href:"#trigger-output-pin-configuration"}},[t._v("trigger output configuration")]),t._v(" are described below (these can also be set directly from "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(").")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("카메라 모듈이 펌웨어에 자동으로 포함되지 않기 때문에 FMUv2 기반 비행 콘트롤러 (예 : 3DR Pixhawk)의 경우 기본적으로 카메라 설정 섹션을 사용할 수 없습니다. 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html#parameter-not-in-firmware"}},[t._v("매개변수 검색/업데이트 > 펌웨어에 없는 매개변수")]),t._v("를 참고하십시오.")],1)]),t._v(" "),r("h3",{attrs:{id:"트리거-모드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트리거-모드"}},[t._v("#")]),t._v(" 트리거 모드")]),t._v(" "),r("p",[t._v("네 가지 모드가 지원되며 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_MODE"}},[t._v("TRIG_MODE")]),t._v(" 매개변수로 설정됩니다.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("모드")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("0")]),t._v(" "),r("td",[t._v("카메라 트리거가 비활성화됩니다.")])]),t._v(" "),r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("MAVLink 명령 "),r("code",[t._v("MAV_CMD_DO_TRIGGER_CONTROL")]),t._v("을 사용하여 활성화 및 비활성화 할 수 있는 기본 간격계처럼 작동합니다. See "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[t._v("command interface")]),t._v(" for more details.")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("간격계를 계속 켭니다.")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("거리를 기반으로 트리거합니다.  설정 수평 거리를 초과시 마다 촬영됩니다. 그러나, 두 샷 사이의 최소 시간 간격은 설정된 트리거 간격에 의해 제한됩니다.")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("임무 모드에서 비행시 측량은 자동으로 트리거됩니다.")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("카메라 트리거 앱을 처음 활성화하는 경우 "),r("code",[t._v("TRIG_MODE")]),t._v(" 매개변수를 변경 후 재부팅하여야 합니다.")])]),t._v(" "),r("h3",{attrs:{id:"트리거-인터페이스-백엔드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트리거-인터페이스-백엔드"}},[t._v("#")]),t._v(" 트리거 인터페이스 백엔드")]),t._v(" "),r("p",[t._v("카메라 트리거 드라이버는 여러 백엔드를 지원합니다. 각 백엔드는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[t._v("TRIG_INTERFACE")]),t._v(" 매개변수에 의해 제어되는 특정 애플리케이션을 위한 것입니다.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("번호")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("Enables the GPIO interface. AUX 출력은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[t._v("TRIG_INTERVAL")]),t._v(" 시간마다 ("),r("code",[t._v("TRIG_POLARITY")]),t._v(" 매개변수에 따라) 높거나 낮게 펄스됩니다. 이것은 대부분의 표준 머신비전 카메라를 직접 트리거 할 수 있습니다. PX4FMU 시리즈 하드웨어 (Pixhawk, Pixracer 등)에서 AUX 핀의 신호 레벨은 3.3v입니다.")],1)]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("Seagull MAP2 인터페이스를 활성화합니다. 이를 통해 "),r("a",{attrs:{href:"http://www.seagulluav.com/product/seagull-map2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seagull MAP2"),r("OutboundLink")],1),t._v("를 사용하여 지원되는 여러 카메라에 연결할 수 있습니다. Pin/Channel 1 (camera trigger) and Pin/Channel 2 (mode selector) of the MAP2 should be connected to the lower and higher mapped "),r("a",{attrs:{href:"#trigger-output-pin-configuration"}},[t._v("camera trigger pins")]),t._v(". Seagull MAP2를 사용하는 PX4는 QX-1과 같은 Sony Multiport 카메라의 자동 전원 제어 및 연결 유지 기능도 지원합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("MAVLink 인터페이스를 사용합니다. 이 모드에서는 실제 하드웨어 출력이 사용되지 않습니다. "),r("code",[t._v("CAMERA_TRIGGER")]),t._v(" MAVLink 메시지는 자동 조종 장치에 의해 전송됩니다 (MAVLink 응용 프로그램이 "),r("code",[t._v("온보드")]),t._v(" 모드인 경우 기본적으로). 그렇지 않으면, 사용자 정의 스트림을 활성화하여야 합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("범용 PWM 인터페이스를 사용합니다. "),r("a",{attrs:{href:"https://hobbyking.com/en_us/universal-remote-control-infrared-shutter-ir-rc-1g.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("적외선 트리거"),r("OutboundLink")],1),t._v(" 또는 서보가 카메라를 트리거 할 수 있습니다.")])])])]),t._v(" "),r("h3",{attrs:{id:"trigger-output-pin-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-output-pin-configuration"}},[t._v("#")]),t._v(" Trigger Output Pin Configuration")]),t._v(" "),r("p",[t._v("Camera trigger pins are set in the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")]),t._v(" configuration screen.")],1),t._v(" "),r("p",[t._v("The trigger pins can be set by assigning the "),r("code",[t._v("Camera_Trigger")]),t._v(" function on any FMU output. If using trigger setup that requires two pins (e.g. Seagull MAP2) you can assign to any two outputs.")]),t._v(" "),r("p",[t._v("Note however that if a "),r("em",[t._v("PWM")]),t._v(" output has been used for camera triggering (such as Seagull MAP2), the whole PWM group cannot be used for anything else (you can't use another output in the group for an actuator, motor, or camera capture, because the timer has already been used).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("At time of writing triggering only works on FMU pins:")]),t._v(" "),r("ul",[r("li",[t._v("On a Pixhawk flight controller that has both FMU and I/O boards FMU pins map to "),r("code",[t._v("AUX")]),t._v(" outputs (e.g. Pixhawk 4, CUAV v5+) .")]),t._v(" "),r("li",[t._v("A controller that only has an FMU, the pins map to "),r("code",[t._v("MAIN")]),t._v(" outputs (e.g. Pixhawk 4 mini, CUAV v5 nano).")])])]),t._v(" "),r("h3",{attrs:{id:"기타-매개변수"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-매개변수"}},[t._v("#")]),t._v(" 기타 매개변수")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("매개변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_POLARITY"}},[t._v("TRIG_POLARITY")])],1),t._v(" "),r("td",[t._v("GPIO 인터페이스를 사용하는 동안에만 관련됩니다. 트리거 핀의 극성을 설정합니다. 액티브 하이는 핀이 로우로 정상적으로 당겨지고 트리거 이벤트에서 하이로 풀링됨을 의미합니다. 액티브 로우는 반대의 경우도 마찬가지입니다.")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[t._v("TRIG_INTERVAL")])],1),t._v(" "),r("td",[t._v("두 개의 연속 트리거 이벤트 사이의 시간을 밀리 초 단위로 정의합니다.")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_ACT_TIME"}},[t._v("TRIG_ACT_TIME")])],1),t._v(" "),r("td",[t._v('트리거 핀이 "활성"상태로 유지되어 중립으로 돌아가기 전의 시간을 밀리 초 단위로 정의합니다. PWM 모드에서는 50Hz PWM 신호에 항상 활성화 펄스를 맞출 수 있도록 최소값이 40ms로 제한됩니다.')])])])]),t._v(" "),r("p",[t._v("카메라 트리거 모듈과 관련 전체 매개변수 목록은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#camera-trigger"}},[t._v("매개변수 참조")]),t._v(" 페이지를 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"카메라-캡처"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#카메라-캡처"}},[t._v("#")]),t._v(" 카메라 캡처")]),t._v(" "),r("p",[t._v("Cameras can also (optionally) use a camera capture pin to signal the exact moment when a photo/frame is taken. 이를 통하여 지오 태깅을위한 GPS 위치 또는 VIO 동기화를 위한 올바른 IMU 샘플 등에 이미지를 보다 정확하게 매핑할 수 있습니다.")]),t._v(" "),r("p",[t._v("PX4에서 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAM_CAP_FBACK"}},[t._v("CAM_CAP_FBACK=1")]),t._v("을 설정하면 카메라 캡처/피드백이 활성화됩니다. The pin used for camera capture is then set in the "),r("em",[t._v("QGroundControl")]),t._v(" "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")]),t._v(" configuration screen by assigning the "),r("code",[t._v("Camera_Capture")]),t._v(" function on any FMU output.")],1),t._v(" "),r("p",[t._v("Note that if a "),r("em",[t._v("PWM output")]),t._v(" is used as a camera capture input, the whole PWM group cannot be used for anything else (you can't use another output in the group for an actuator, motor, or camera trigger, because the timer has already been used).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("At time of writing camera capture only works on FMU pins:")]),t._v(" "),r("ul",[r("li",[t._v("On a Pixhawk flight controller that has both FMU and I/O boards FMU pins map to "),r("code",[t._v("AUX")]),t._v(" outputs (e.g. Pixhawk 4, CUAV v5+).")]),t._v(" "),r("li",[t._v("A controller that only has an FMU, the pins map to "),r("code",[t._v("MAIN")]),t._v(" outputs (e.g. Pixhawk 4 mini, CUAV v5 nano).")])])]),t._v(" "),r("p",[t._v("PX4는 카메라 캡처 핀에서 적절한 전압 레벨로 상승 에지를 감지합니다 (Pixhawk 비행 콘트롤러의 경우 일반적으로 3.3V). If the camera isn't outputting an appropriate voltage, then additional circuitry will be required to make the signal compatible.")]),t._v(" "),r("p",[t._v("핫슈 커넥터 (플래시 연결 용)가 있는 카메라는 일반적으로 핫슈 어댑터를 통하여 연결할 수 있습니다. 예를 들어, "),r("a",{attrs:{href:"https://www.seagulluav.com/product/seagull-sync2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Seagull # SYNC2 범용 카메라 핫슈 어댑터"),r("OutboundLink")],1),t._v("는 플래시 전압을 Pixhawk 전압으로 분리하고 이동하는 옵토 커플러입니다. 이것은 카메라 상단의 플래시 슬롯에 삽입됩니다. 빨간색 및 검은 색 출력은 서보 레일/접지에 연결되고, 흰색 와이어는 입력 캡처 핀에 연결됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1450),alt:"Seagull SYNC#2"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4는 카메라 트리거와 카메라 캡처 모두에서 MAVLink [CAMERA_TRIGGER](https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER) 메시지를 전송합니다. 카메라 캡처가 구성된 경우 카메라 캡처 드라이버의 타임스탬프가 사용되며 그렇지 않으면 트리거링 타임스탬프가 사용됩니다.")])]),t._v(" "),r("h2",{attrs:{id:"mavlink-command-interface-directly-connected-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[t._v("#")]),t._v(" MAVLink Command Interface (Directly Connected Cameras)")]),t._v(" "),r("p",[t._v("When using a camera connected to the flight controller as described in this document (e.g. using the GPIO, PWM or seagull backend interfaces) the camera driver supports the following subset of MAVLink commands:")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_TRIGGER_CONTROL"),r("OutboundLink")],1),t._v(' - "명령 제어" 모드에서 허용됩니다 ('),r("code",[t._v("TRIG_MODE")]),t._v(" 1).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("명령어 매개변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Param #1")]),t._v(" "),r("td",[t._v("Trigger enable/disable. "),r("code",[t._v("1")]),t._v(": enable (start), "),r("code",[t._v("0")]),t._v(": disable.")])]),t._v(" "),r("tr",[r("td",[t._v("Param #2")]),t._v(" "),r("td",[t._v("Reset trigger sequence. "),r("code",[t._v("1")]),t._v(": reset, any other value does nothing.")])]),t._v(" "),r("tr",[r("td",[t._v("Param #3")]),t._v(" "),r("td",[t._v("Pause triggering, but without switching the camera off or retracting it. "),r("code",[t._v("1")]),t._v(": pause, "),r("code",[t._v("0")]),t._v(": restart.")])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_DIGICAM_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_DIGICAM_CONTROL"),r("OutboundLink")],1),t._v(" - 모든 모드에서 허용됩니다.")]),t._v(" "),r("p",[t._v("이것은 GCS에서 사용자 인터페이스에서 카메라를 테스트 촬영시에 사용됩니다. The trigger driver does not support all camera control parameters defined by the MAVLink spec.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("명령어 매개변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Param #5")]),t._v(" "),r("td",[t._v("원샷 명령을 트리거합니다 (단일 이미지 프레임을 트리거하려면 1로 설정).")])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MAV_CMD_DO_SET_CAM_TRIGG_DIST "),r("OutboundLink")],1),t._v(' - "임무 통제"모드에서 허용됨 ('),r("code",[t._v("TRIG_MODE")]),t._v(" 4)")]),t._v(" "),r("p",[t._v("이 명령은 GCS의 조사 임무에 따라 카메라를 트리거하기 위해 임무중 자동 생성됩니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_OBLIQUE_SURVEY",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_OBLIQUE_SURVEY"),r("OutboundLink")],1),t._v(" - Mission command to set a camera auto mount pivoting oblique survey.")]),t._v(" "),r("p",[t._v("This accepts "),r("code",[t._v("param1")]),t._v(" to "),r("code",[t._v("param4")]),t._v(" as defined in the MAVLink message definition. The shutter integration setting ("),r("code",[t._v("param2")]),t._v(") is only obeyed with a GPIO backend.")]),t._v(" "),r("h2",{attrs:{id:"mavlink-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-cameras"}},[t._v("#")]),t._v(" MAVLink Cameras")]),t._v(" "),r("p",[t._v("PX4 can also be configured to use a "),r("a",{attrs:{href:"#trigger-interface-backends"}},[t._v("MAVLink trigger interface backend")]),t._v(" with a MAVLink camera.")]),t._v(" "),r("p",[t._v("In this case MAVLink camera messages are forwarded to a MAVLink camera for handling (although PX4 will still emit the "),r("code",[t._v("CAMERA_TRIGGER")]),t._v(" when a trigger command is received).")]),t._v(" "),r("p",[t._v("MAVLink cameras are recommended because directly connected cameras only support "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[t._v("a small subset")]),t._v(" of the available MAVLink camera messages and commands. MAVLink cameras potentially offer much more control over a camera using the "),r("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"트리거-기능-테스트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트리거-기능-테스트"}},[t._v("#")]),t._v(" 트리거 기능 테스트")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The following sections are out of date and need retesting.")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("PX4 콘솔에서 :")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("camera_trigger test\n")])])])]),t._v(" "),r("li",[r("p",[t._v("From "),r("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),r("p",[t._v("기본 계기판에서 "),r("strong",[t._v("트리거 카메라")]),t._v("를 클릭합니다. 이러한 샷은 위치 정보 태그 지정을 위하여 기록되거나 계산되지 않습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1451),alt:"QGC 테스트 카메라"}})])])]),t._v(" "),r("h2",{attrs:{id:"sony-qx-1-예제-사진-측량"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sony-qx-1-예제-사진-측량"}},[t._v("#")]),t._v(" Sony QX-1 예제 (사진 측량)")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1452),alt:"사진 측량법"}})]),t._v(" "),r("p",[t._v("이 예에서는 Seagull MAP2 트리거 케이블로 Sony QX-1에 연결하여 자율 측량 임무를 수행한 후 정사 투영을 만드는 것입니다.")]),t._v(" "),r("h3",{attrs:{id:"트리거-설정-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#트리거-설정-2"}},[t._v("#")]),t._v(" 트리거 설정")]),t._v(" "),r("p",[t._v("권장되는 카메라 설정은 다음과 같습니다.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("TRIG_INTERFACE=2")]),t._v(" (Seagull MAP2).")]),t._v(" "),r("li",[r("code",[t._v("TRIG_MODE=4")]),t._v(" (임무 제어).")]),t._v(" "),r("li",[t._v("나머지 매개 변수는 기본값으로 설정합니다.")])]),t._v(" "),r("p",[t._v('You will need to connect the Seagull MAP2 to FMU pins on your autopilot. MAP2 케이블의 다른 쪽 끝은 QX-1의 "MULTI" 포트에 연결합니다.')]),t._v(" "),r("h3",{attrs:{id:"카메라-설정-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#카메라-설정-2"}},[t._v("#")]),t._v(" 카메라 설정")]),t._v(" "),r("p",[t._v("이 예제에서는 Sony QX-1에 16-50mm f3.5-5.6 렌즈를 사용합니다.")]),t._v(" "),r("p",[t._v("카메라가 트리거시 자동 초점과 측광 지연을 방지하려면 다음 지침을 따르십시오.")]),t._v(" "),r("ul",[r("li",[t._v("수동으로 초점을 무한대로 설정합니다.")]),t._v(" "),r("li",[t._v("카메라를 연속 촬영 모드로 설정합니다.")]),t._v(" "),r("li",[t._v("노출과 조리개를 수동으로 설정합니다.")]),t._v(" "),r("li",[t._v("ISO는 가능한 한 낮게 설정합니다.")]),t._v(" "),r("li",[t._v("풍경에 적합한 수동 화이트 밸런스를 설정합니다.")])]),t._v(" "),r("h3",{attrs:{id:"임무-계획"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무-계획"}},[t._v("#")]),t._v(" 임무 계획")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1453),alt:"QGC 측량 다각형"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(1454),alt:"QGC 측량 매개변수"}})]),t._v(" "),r("h3",{attrs:{id:"지오태깅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지오태깅"}},[t._v("#")]),t._v(" 지오태깅")]),t._v(" "),r("p",[t._v("비행 로그 파일과 이미지를 다운로드 QGroundControl을 지정합니다. Then click on "),r("strong",[t._v("Start Tagging")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1455),alt:"QGC 지오태깅"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.pic2map.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pic2Map"),r("OutboundLink")],1),t._v("과 같은 무료 온라인 서비스를 사용하여 지오 태깅을 확인할 수 있습니다. Pic2Map은 40 개의 이미지 제한이 있습니다.")]),t._v(" "),r("h3",{attrs:{id:"재구성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#재구성"}},[t._v("#")]),t._v(" 재구성")]),t._v(" "),r("p",[t._v("3D 재구성을 위해 "),r("a",{attrs:{href:"https://pix4d.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix4D"),r("OutboundLink")],1),t._v("를 사용합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1456),alt:"지오태그"}})]),t._v(" "),r("h2",{attrs:{id:"카메라-imu-동기화-예-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#카메라-imu-동기화-예-vio"}},[t._v("#")]),t._v(" 카메라-IMU 동기화 예 (VIO)")]),t._v(" "),r("p",[t._v("이 예에서는 스테레오 VINS(Visual-Inertial Navigation System)를 구축하기 위하여 IMU 측정을 시각적 데이터와 동기화에 관련된 기본 사항을 설명합니다. 사진을 찍는 것과 동시에 IMU 측정을하는 것이 아니라 VIO 알고리즘에 정확한 데이터를 제공하기 위해 이미지에 정확한 타임 스탬프를 찍는 것입니다.")]),t._v(" "),r("p",[t._v("자동비행장치와 보조 컴퓨터는 서로 다른 클럭 기반 (자동비행장치의 경우 부팅 시간, 보조 컴퓨터의 경우 UNIX epoch)을 갖기 때문에 시계를 보종하는 대신, 시계 간의 시간 오프셋을 관찰합니다. This offset is added or subtracted from the timestamps in the MAVLink messages (e.g. "),r("code",[t._v("HIGHRES_IMU")]),t._v(") in the cross-middleware translator component (e.g. MAVROS on the companion and "),r("code",[t._v("mavlink_receiver")]),t._v(" in PX4). 실제 동기화 알고리즘은 NTP(Network Time Protocol) 알고리즘의 수정 버전이며, 지수 이동 평균을 사용하여 추적 시간 오프셋을 평활화합니다. 이 동기화는 MAVROS가 고대역폭 온보드 링크(MAVLink 모드 "),r("code",[t._v("온보드")]),t._v(")와 함께 사용되는 경우 자동으로 수행됩니다.")]),t._v(" "),r("p",[t._v("동기화 된 이미지 프레임과 관성 측정을 획득 하기 위하여, 두 카메라의 트리거 입력을 자동조종장치의 GPIO 핀에 연결합니다. 노출 시작부터 관성 측정의 타임스탬프와 이미지 시퀀스 번호가 기록되어 보조 컴퓨터("),r("code",[t._v("CAMERA_TRIGGER")]),t._v(" 메시지)로 전송되어 패킷과 카메라 이미지 프레임을 버퍼링합니다. 시퀀스 번호(첫 번째 이미지 프레임은 시퀀스 0), 이미지 타임스탬프 ("),r("code",[t._v("CAMERA_TRIGGER")]),t._v(" 메시지의 타임스탬프 포함)에 따라 일치후에 게시됩니다.")]),t._v(" "),r("p",[t._v("다음 다이어그램은 이미지에 정확한 타임스탬프를 찍기 위하여 발생하는 일련의 이벤트를 나타냅니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid.live/edit#pako:eNqNUs9rwjAU_lceOW-3nXIQpIoIVkftZIdCeTbPNqxJXJI6ivi_L1Er6Dzs9kK-H3lfviOrjCDGmaPvjnRFE4m1RVVogKXxBFbWjQezg_fPN-CQS0Xgel3Bj_QNKDxY40A6EEYTYOeNQi8rbNs-SkTS62g04DgkqMgi5EG2JguWUPR_vaoLSlh5CKAb63reGuMdoBbR96Zwz7kzvQylcrXjPDFKBe71BYnR3po2ClzhkXnZNR1vFlJ_cR6GMkkn5WRV5tl8NptmZbJa5tlqEXmtMXuYBtMe4m05X-bTbDNegJJtKx1VRgv3NIybQTJOp9l4EH94zGMY99ugmqcfa49q_zyER3aKvmpg-G3QndqS_R_17AJSYU3n9PfdNuzXFJq0YC8sgBVKEbp0jHoF8w0pKhgPo6Addq0vWKFPARp7sg4lYtzbjl5Ytxfoh-oxvsPW0ekXb8TjxQ",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/pako:eNqNUs9rwjAU_lceOW-3nXIQpIoIVkftZIdCeTbPNqxJXJI6ivi_L1Er6Dzs9kK-H3lfviOrjCDGmaPvjnRFE4m1RVVogKXxBFbWjQezg_fPN-CQS0Xgel3Bj_QNKDxY40A6EEYTYOeNQi8rbNs-SkTS62g04DgkqMgi5EG2JguWUPR_vaoLSlh5CKAb63reGuMdoBbR96Zwz7kzvQylcrXjPDFKBe71BYnR3po2ClzhkXnZNR1vFlJ_cR6GMkkn5WRV5tl8NptmZbJa5tlqEXmtMXuYBtMe4m05X-bTbDNegJJtKx1VRgv3NIybQTJOp9l4EH94zGMY99ugmqcfa49q_zyER3aKvmpg-G3QndqS_R_17AJSYU3n9PfdNuzXFJq0YC8sgBVKEbp0jHoF8w0pKhgPo6Addq0vWKFPARp7sg4lYtzbjl5Ytxfoh-oxvsPW0ekXb8TjxQ?type=png",alt:"Mermaid sequence diagram"}}),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_1-단계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-단계"}},[t._v("#")]),t._v(" 1 단계")]),t._v(" "),r("p",[t._v("먼저 TRIG_MODE를 1로 설정하여 드라이버가 시작 명령을 기다리도록하고, 나머지 매개변수를 얻기 위해 FCU를 재부팅합니다.")]),t._v(" "),r("h3",{attrs:{id:"_2-단계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-단계"}},[t._v("#")]),t._v(" 2 단계")]),t._v(" "),r("p",[t._v("이 예제의 목적을 위하여 30 FPS에서 실행되는 Point Grey Firefly MV 카메라와 함께 작동하도록 트리거를 설정합니다.")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("TRIG_INTERVAL")]),t._v(": 33.33 ms")]),t._v(" "),r("li",[r("code",[t._v("TRIG_POLARITY")]),t._v(": 0 (active low)")]),t._v(" "),r("li",[r("code",[t._v("TRIG_ACT_TIME")]),t._v(": 0.5 ms. 매뉴얼에는 최소 1 마이크로 초면 충분하다고 명시되어 있습니다.")]),t._v(" "),r("li",[r("code",[t._v("TRIG_MODE")]),t._v(" : 1, 트리거 시작전에 카메라 드라이버가 이미지를 수신할 준비가 되는 것이 좋습니다. 이것은 일련 번호를 처리에 필수적입니다.")])]),t._v(" "),r("h3",{attrs:{id:"_3-단계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-단계"}},[t._v("#")]),t._v(" 3 단계")]),t._v(" "),r("p",[t._v("접지 및 신호 핀을 적절한 위치에 연결하여 카메라를 AUX 포트에 연결합니다.")]),t._v(" "),r("h3",{attrs:{id:"_4-단계"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-단계"}},[t._v("#")]),t._v(" 4 단계")]),t._v(" "),r("p",[t._v("위의 시퀀스 다이어그램을 따르려면 드라이버를 수정하여 합니다. "),r("a",{attrs:{href:"https://github.com/ProjectArtemis/ueye_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("IDS Imaging UEye"),r("OutboundLink")],1),t._v(" 카메라와 "),r("a",{attrs:{href:"https://github.com/andre-nguyen/camera1394",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEEE1394 호환"),r("OutboundLink")],1),t._v(" 카메라에 대한 공개 참조 구현을 사용하십시오.")])])}),[],!1,null,null,null);e.default=_.exports}}]);