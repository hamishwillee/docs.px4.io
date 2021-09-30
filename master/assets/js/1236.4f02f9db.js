(window.webpackJsonp=window.webpackJsonp||[]).push([[1236],{2381:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"모듈-참조-시스템"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-시스템"}},[t._v("#")]),t._v(" 모듈 참조: 시스템")]),t._v(" "),e("h2",{attrs:{id:"battery-simulator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#battery-simulator"}},[t._v("#")]),t._v(" battery_simulator")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/simulator/battery_simulator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/simulator/battery_simulator"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[e("a",{attrs:{id:"battery_simulator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("battery_simulator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"battery-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#battery-status"}},[t._v("#")]),t._v(" battery_status")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/battery_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/battery_status"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("제공 기능은 다음과 같습니다:")]),t._v(" "),e("ul",[e("li",[t._v("ADC 드라이버의 출력을 읽고(ioctl 인터페이스를 통해) "),e("code",[t._v("battery_status")]),t._v("를 게시합니다.")])]),t._v(" "),e("h3",{attrs:{id:"구현"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("자체 스레드에서 실행되고, 현재 선택된 자이로 주제를 폴링합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"battery_status_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("battery_status <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"camera-feedback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#camera-feedback"}},[t._v("#")]),t._v(" camera_feedback")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/camera_feedback",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/camera_feedback"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[e("a",{attrs:{id:"camera_feedback_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("camera_feedback <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"commander"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" commander")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/commander",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/commander"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("커맨더 모듈에는 모드 전환 및 안전 장치 동작을 위한 상태 머신이 포함되어 있습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"commander_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("commander <command> [arguments...]\n Commands:\n   start\n     [-h]        Enable HIL mode\n\n   calibrate     Run sensor calibration\n     mag|accel|gyro|level|esc|airspeed Calibration type\n     quick       Quick calibration (accel only, not recommended)\n\n   check         Run preflight checks\n\n   arm\n     [-f]        Force arming (do not run preflight checks)\n\n   disarm\n\n   takeoff\n\n   land\n\n   transition    VTOL transition\n\n   mode          Change flight mode\n     manual|acro|offboard|stabilized|altctl|posctl|auto:mission|auto:loiter|auto\n                 :rtl|auto:takeoff|auto:land|auto:precland Flight mode\n\n   pair\n\n   lockdown\n     [off]       Turn lockdown off\n\n   set_ekf_origin\n     lat, lon, alt Origin Latitude, Longitude, Altitude\n\n   lat|lon|alt   Origin latitude longitude altitude\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"dataman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataman"}},[t._v("#")]),t._v(" dataman")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/dataman",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/dataman"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("C API를 통해 간단한 데이터베이스 형태로 시스템에 영구 저장소를 제공하는 모듈입니다. 다중 백엔드가 지원됩니다.")]),t._v(" "),e("ul",[e("li",[t._v("파일(예: SD 카드)")]),t._v(" "),e("li",[t._v("RAM (영구적이지 않음)")])]),t._v(" "),e("p",[t._v("임무 웨이포인트, 임무 상태 및 지오펜스 다각형과 같은 다양한 유형의 구조화된 데이터를 저장합니다. 각 유형은 특정 유형과 고정된 최대 저장 항목 수를 가지고 있어, 빠른 랜덤 액세스가 가능합니다.")]),t._v(" "),e("h3",{attrs:{id:"구현-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-2"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("단일 항목을 읽고 쓰는 것은 항상 원자적입니다. 여러 항목을 원자적으로 읽고 수정해야 하는 경우에는, "),e("code",[t._v("dm_lock")]),t._v("을 사용하여 항목 유형별로 추가 잠금이 있습니다.")]),t._v(" "),e("p",[e("strong",[t._v("DM_KEY_FENCE_POINTS")]),t._v(" 및 "),e("strong",[t._v("DM_KEY_SAFE_POINTS")]),t._v(" 항목: 첫 번째 데이터 요소는 이러한 유형의 항목 수를 저장하는 "),e("code",[t._v("mission_stats_entry_s")]),t._v(" 구조체입니다. 이러한 항목은 항상 하나의 트랜잭션에서 원자적으로 업데이트됩니다(mavlink Mission Manager에서). 그 시간 동안 내비게이터는 지오펜스 항목 잠금을 획득하려고 시도하지만, 실패하며 지오펜스 위반을 확인하지 않습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"dataman_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dataman <command> [arguments...]\n Commands:\n   start\n     [-f <val>]  Storage file\n                 values: <file>\n     [-r]        Use RAM backend (NOT persistent)\n\n The options -f and -r are mutually exclusive. If nothing is specified, a file\n 'dataman' is used\n\n   poweronrestart Restart dataman (on power on)\n\n   inflightrestart Restart dataman (in flight)\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"dmesg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[t._v("#")]),t._v(" dmesg")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/dmesg",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dmesg"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-6"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("부팅 콘솔 메시지를 출력합니다. NuttX의 작업 대기열 및 syslog의 출력은 캡처되지 않습니다.")]),t._v(" "),e("h3",{attrs:{id:"예"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[t._v("#")]),t._v(" 예")]),t._v(" "),e("p",[t._v("백그라운드에서 모든 메시지를 출력합니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dmesg -f &\n")])])]),e("p",[e("a",{attrs:{id:"dmesg_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-6"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dmesg <command> [arguments...]\n Commands:\n     [-f]        Follow: wait for new messages\n")])])]),e("h2",{attrs:{id:"esc-battery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esc-battery"}},[t._v("#")]),t._v(" esc_battery")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/esc_battery",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/esc_battery"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-7"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("ESC 상태의 정보를 사용하여 구현하고, 배터리 상태를 게시합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"esc_battery_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-7"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("esc_battery <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"gyro-calibration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gyro-calibration"}},[t._v("#")]),t._v(" gyro_calibration")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/gyro_calibration",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/gyro_calibration"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-8"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("간단한 온라인 자이로스코프 교정.")]),t._v(" "),e("p",[e("a",{attrs:{id:"gyro_calibration_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-8"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gyro_calibration <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"gyro-fft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gyro-fft"}},[t._v("#")]),t._v(" gyro_fft")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/gyro_fft",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/gyro_fft"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-9"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[e("a",{attrs:{id:"gyro_fft_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-9"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gyro_fft <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"heater"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heater"}},[t._v("#")]),t._v(" heater")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/heater",target:"_blank",rel:"noopener noreferrer"}},[t._v("drivers/heater"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-10"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("설정점에서 IMU 온도를 조절하기 위하여 LP 작업 대기열에서 주기적으로 실행되는 백그라운드 프로세스입니다.")]),t._v(" "),e("p",[t._v("이 작업은 부팅 시 SENS_EN_THERMAL을 설정하거나, CLI를 통하여 시작 스크립트에서 시작할 수 있습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"heater_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-10"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("heater <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"land-detector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#land-detector"}},[t._v("#")]),t._v(" land_detector")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/land_detector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/land_detector"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-11"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("차량의 자유낙하와 착지상태를 감지하고, "),e("code",[t._v("vehicle_land_detected")]),t._v(" 주제를 게시하는 모듈입니다. 각 차량 유형(멀티로터, 고정익, vtol, ...)은 명령 추력, 무장 상태 및 차량 모션과 같은 다양한 상태를 고려하여 자체 알고리즘을 제공합니다.")]),t._v(" "),e("h3",{attrs:{id:"구현-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-3"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("모든 유형은 공통 기본 클래스를 사용하여 자체 클래스에서 구현됩니다. 기본 클래스는 상태를 유지합니다(착륙, 아마도_착륙, 지상_접촉). 가능한 각 상태는 파생 클래스에서 구현됩니다. 각 내부 상태의 히스테리시스 및 고정된 우선 순위에 따라 실제 land_detector 상태가 결정됩니다.")]),t._v(" "),e("h4",{attrs:{id:"멀티콥터-착륙-감지기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-착륙-감지기"}},[t._v("#")]),t._v(" 멀티콥터 착륙 감지기")]),t._v(" "),e("p",[e("strong",[t._v("ground_contact")]),t._v(": z 방향의 추력 설정점 및 속도는 GROUND_CONTACT_TRIGGER_TIME_US 시간에 대해 정의된 임계값 미만이어야 합니다. ground_contact가 감지되면, 위치 컨트롤러는 본체 x 및 y의 추력 설정값을 끕니다.")]),t._v(" "),e("p",[e("strong",[t._v("maybe_landed")]),t._v(": 더 엄격한 추력 설정값 임계값과 함께 ground_contact가 필요하며, 수평 방향으로 속도가 없습니다. 트리거 시간은 MAYBE_LAND_TRIGGER_TIME에 의해 정의됩니다. Maybe_landed가 감지되면 위치 컨트롤러는 추력 설정값을 0으로 설정합니다.")]),t._v(" "),e("p",[e("strong",[t._v("착륙")]),t._v(": LAND_DETECTOR_TRIGGER_TIME_US 시간 동안 참이 되기 위해서는 may_landed가 필요합니다.")]),t._v(" "),e("p",[t._v("모듈은 HP 작업 대기열에서 주기적으로 실행됩니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"land_detector_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-11"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("land_detector <command> [arguments...]\n Commands:\n   start         Start the background task\n     fixedwing|multicopter|vtol|rover|airship Select vehicle type\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"load-mon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load-mon"}},[t._v("#")]),t._v(" load_mon")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/load_mon",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/load_mon"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-12"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("CPU 로드 및 RAM 사용량을 계산하고, "),e("code",[t._v("cpuload")]),t._v(" 주제를 게시하기 위하여 낮은 우선순위 작업 대기열에서 주기적으로 실행되는 백그라운드 프로세스입니다.")]),t._v(" "),e("p",[t._v("NuttX에서는 각 프로세스의 스택 사용량도 확인하고, 300바이트 미만으로 떨어지면 경고가 출력되고 로그 파일에도 기록됩니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"load_mon_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-12"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("load_mon <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" logger")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/logger",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/logger"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-13"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("설정 가능한 uORB 주제 세트와 시스템 printf 메시지("),e("code",[t._v("PX4_WARN")]),t._v(" 및 "),e("code",[t._v("PX4_ERR")]),t._v(")를 ULog 파일에 기록하는 시스템 로거입니다. 시스템 및 비행 성능 평가, 튜닝, 재생 및 충돌 분석에 사용할 수 있습니다.")]),t._v(" "),e("p",[t._v("2개의 백엔드를 지원합니다.")]),t._v(" "),e("ul",[e("li",[t._v("파일: ULog 파일을 파일 시스템(SD 카드)에 기록합니다.")]),t._v(" "),e("li",[t._v("MAVLink: MAVLink를 통해 ULog 데이터를 클라이언트로 스트리밍합니다(클라이언트가 이를 지원해야 함).")])]),t._v(" "),e("p",[t._v("두 백엔드를 동시에 활성화하고 사용할 수 있습니다.")]),t._v(" "),e("p",[t._v("파일 백엔드는 전체(일반 로그)와 미션 로그의 두 가지 유형의 로그 파일을 지원합니다. 임무 로그는 축소된 ulog 파일이며, 지오태깅 또는 차량 관리 등에 사용할 수 있습니다. SDLOG_MISSION 매개변수를 통하여 활성화 및 설정할 수 있습니다. 일반 로그는 항상 미션 로그의 상위 집합입니다.")]),t._v(" "),e("h3",{attrs:{id:"구현-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-4"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("구현은 두 개의 스레드를 사용합니다.")]),t._v(" "),e("ul",[e("li",[t._v("고정된 속도로 실행되는 메인 스레드(또는 -p로 시작된 경우 주제에 대한 폴링) 및 데이터 업데이트 확인")]),t._v(" "),e("li",[t._v("작성자 스레드, 파일에 데이터 쓰기")])]),t._v(" "),e("p",[t._v("그 사이에는 구성 가능한 크기의 쓰기 버퍼가 있습니다(및 미션 로그를 위한 또 다른 고정 크기 버퍼). 드롭아웃을 방지하려면 크기가 커야 합니다.")]),t._v(" "),e("h3",{attrs:{id:"예-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예-2"}},[t._v("#")]),t._v(" 예")]),t._v(" "),e("p",[t._v("즉시 로깅을 시작하는 일반적인 사용법입니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("logger start -e -t\n")])])]),e("p",[t._v("또는, 이미 동작중일 경우")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("logger on\n")])])]),e("p",[e("a",{attrs:{id:"logger_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-13"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("logger <command> [arguments...]\n Commands:\n   start\n     [-m <val>]  Backend mode\n                 values: file|mavlink|all, default: all\n     [-x]        Enable/disable logging via Aux1 RC channel\n     [-e]        Enable logging right after start until disarm (otherwise only\n                 when armed)\n     [-f]        Log until shutdown (implies -e)\n     [-t]        Use date/time for naming log directories and files\n     [-r <val>]  Log rate in Hz, 0 means unlimited rate\n                 default: 280\n     [-b <val>]  Log buffer size in KiB\n                 default: 12\n     [-p <val>]  Poll on a topic instead of running with fixed rate (Log rate\n                 and topic intervals are ignored if this is set)\n                 values: <topic_name>\n\n   on            start logging now, override arming (logger must be running)\n\n   off           stop logging now, override arming (logger must be running)\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"netman"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netman"}},[t._v("#")]),t._v(" netman")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/netman",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/nshterm"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("설명 네트워크 구성 관리자는 네트워크 설정을 비휘발성 메모리에 저장합니다.  부팅시 "),e("code",[t._v("업데이트")]),t._v(" 옵션이 실행됩니다. 네트워크 구성이 존재하지 않는 경우. 기본 설정은 비휘발성에 저장되고 시스템이 재부팅됩니다. 후속 부팅 시 "),e("code",[t._v("업데이트")]),t._v(" 옵션은 SD 카드의 루트에 "),e("code",[t._v("net.cfg")]),t._v("가 있는 지 확인합니다.  "),e("code",[t._v("net.cfg")]),t._v("의 네트워크 설정을 비휘발성 메모리에 저장하고 파일을 삭제하고 시스템을 재부팅합니다.")]),t._v(" "),e("p",[e("code",[t._v("저장")]),t._v(" 옵션은 SD 카드에 "),e("code",[t._v("net.cfg")]),t._v("됩니다. 이것을 사용하여 설정을 편집합니다. "),e("code",[t._v("show")]),t._v(" 옵션은 네트워크 설정을 콘솔에 표시합니다.")]),t._v(" "),e("p",[t._v("예 $ netman save # 매개변수를 SD 카드에 저장합니다. $ netman show # 현재 설정을 표시합니다. $ netman update -i eth0 # 업데이트 수행")]),t._v(" "),e("p",[e("a",{attrs:{id:"netman_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-14"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("netman <command> [arguments...]\n Commands:\n   show          Display the current persistent network settings to the console.\n\n   update        Check SD card for net.cfg and update network persistent network\n                 settings.\n\n   save          Save the current network parameters to the SD card.\n     [-i <val>]  Set the interface name\n                 default: eth0\n")])])]),e("h2",{attrs:{id:"pwm-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwm-input"}},[t._v("#")]),t._v(" pwm_input")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/pwm_input",target:"_blank",rel:"noopener noreferrer"}},[t._v("drivers/pwm_input"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-14"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("타이머 캡처 ISR을 통하여 AUX5(또는 MAIN5)의 PWM 입력을 측정하고, uORB 'pwm_input' 메시지를 통하여 게시합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"pwm_input_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-15"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("pwm_input <command> [arguments...]\n Commands:\n   start\n\n   test          prints PWM capture info.\n")])])]),e("h2",{attrs:{id:"rc-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rc-update"}},[t._v("#")]),t._v(" rc_update")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/rc_update",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/rc_update"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-15"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("rc_update 모듈은 RC 채널 매핑을 처리합니다. 원시 입력 채널("),e("code",[t._v("input_rc")]),t._v(")을 읽은 다음 보정을 적용하고 RC 채널을 구성된 채널에 매핑합니다. 모드를 전환한 다음 "),e("code",[t._v("rc_channels")]),t._v(" 및 "),e("code",[t._v("manual_control_setpoint")]),t._v("로 게시합니다.")]),t._v(" "),e("h3",{attrs:{id:"구현-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-5"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("제어 대기 시간을 줄이기 위하여 모듈은 input_rc 게시에 예약됩니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"rc_update_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-16"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("rc_update <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"replay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replay"}},[t._v("#")]),t._v(" replay")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/replay",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/replay"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-16"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("이 모듈은 ULog 파일을 재생하는 데 사용됩니다.")]),t._v(" "),e("p",[t._v("구성에 사용되는 두 가지 환경 변수가 있습니다. "),e("code",[t._v("재생")]),t._v(", ULog 파일 이름으로 설정해야 합니다. 재생될 로그 파일입니다. 두 번째는 "),e("code",[t._v("replay_mode")]),t._v("를 통해 지정된 모드입니다.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("replay_mode=ekf2")]),t._v(": 특정 EKF2 재생 모드. ekf2 모듈과 함께만 사용할 수 있지만, 가능한 한 빨리 재생할 수 있습니다.")]),t._v(" "),e("li",[t._v("일반 그렇지 않으면 이것은 모든 모듈을 재생하는 데 사용할 수 있지만 재생은 로그가 기록된 것과 동일한 속도로 수행됩니다.")])]),t._v(" "),e("p",[t._v("모듈은 일반적으로 uORB 게시자 규칙과 함께 사용되어 재생되어야 하는 메시지를 지정합니다. 재생 모듈은 로그에 있는 모든 메시지를 게시합니다. 또한 로그의 매개변수를 적용합니다.")]),t._v(" "),e("p",[t._v("재생 절차는 "),e("a",{attrs:{href:"https://dev.px4.io/master/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("시스템 전체 재생"),e("OutboundLink")],1),t._v(" 페이지에 설명되어 있습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"replay_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-17"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("replay <command> [arguments...]\n Commands:\n   start         Start replay, using log file from ENV variable 'replay'\n\n   trystart      Same as 'start', but silently exit if no log file given\n\n   tryapplyparams Try to apply the parameters from the log file\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"send-event"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#send-event"}},[t._v("#")]),t._v(" send_event")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/events"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-17"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("하우스키핑 작업을 수행하기 위하여 LP 작업 대기열에서 주기적으로 실행되는 백그라운드 프로세스입니다. 현재 RC Loss에 대한 톤 알람만 담당합니다.")]),t._v(" "),e("p",[t._v("작업은 CLI 또는 uORB 주제(MAVLink의 차량 명령 등)를 통하여 시작할 수 있습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"send_event_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-18"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-18"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("send_event <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"sensors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" sensors")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/sensors"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-18"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-18"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("센서 모듈은 전체 시스템의 중심입니다. 드라이버에서 낮은 수준의 출력을 가져와서, 사용 가능한 형식으로 바꾸고 나머지 시스템에 게시합니다.")]),t._v(" "),e("p",[t._v("제공 기능은 다음과 같습니다:")]),t._v(" "),e("ul",[e("li",[t._v("센서 드라이버("),e("code",[t._v("sensor_gyro")]),t._v(" 등)의 출력을 읽습니다. 동일한 유형이 여러 개 있는 경우 투표 및 장애 조치 처리를 수행합니다. 그런 다음, 보드 회전 및 온도 보정을 적용합니다(활성화된 경우). 마지막으로 데이터를 게시합니다. 주제 중 하나는 시스템의 많은 부분에서 사용되는 "),e("code",[t._v("sensor_combined")]),t._v("입니다.")]),t._v(" "),e("li",[t._v("매개변수가 변경되거나 시작될 때 센서 드라이버가 업데이트된 보정 매개변수(스케일 및 오프셋)를 가져오는 지 확인하십시오. 센서 드라이버는 매개변수 업데이트를 위하여 ioctl 인터페이스를 사용합니다. 이것이 제대로 작동하려면, "),e("code",[t._v("센서")]),t._v("가 시작될 때 센서 드라이버가 이미 실행되고 있어야 합니다.")]),t._v(" "),e("li",[t._v("센서 일관성 검사를 수행하고, "),e("code",[t._v("sensors_status_imu")]),t._v(" 주제를 게시합니다.")])]),t._v(" "),e("h3",{attrs:{id:"구현-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-6"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("자체 스레드에서 실행되고, 현재 선택된 자이로 주제를 폴링합니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"sensors_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-19"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        Start in HIL mode\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"temperature-compensation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#temperature-compensation"}},[t._v("#")]),t._v(" temperature_compensation")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/temperature_compensation",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/temperature_compensation"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-19"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("Driver for reading data from the Tattu 12S 16000mAh smart battery.")]),t._v(" "),e("p",[e("a",{attrs:{id:"tattu_can_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-20"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("temperature_compensation <command> [arguments...]\n Commands:\n   start         Start the module, which monitors the sensors and updates the\n                 sensor_correction topic\n\n   calibrate     Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"tune-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tune-control"}},[t._v("#")]),t._v(" tune_control")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/tune_control"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-20"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("The temperature compensation module allows all of the gyro(s), accel(s), and baro(s) in the system to be temperature compensated. The module monitors the data coming from the sensors and updates the associated sensor_correction topic whenever a change in temperature is detected. The module can also be configured to perform the coeffecient calculation routine at next boot, which allows the thermal calibration coeffecients to be calculated while the vehicle undergoes a temperature cycle.")]),t._v(" "),e("p",[e("a",{attrs:{id:"temperature_compensation_usage"}})]),t._v(" "),e("h3",{attrs:{id:"예-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예-3"}},[t._v("#")]),t._v(" 예")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("temperature_compensation <command> [arguments...]\n Commands:\n   start         Start the module, which monitors the sensors and updates the\n                 sensor_correction topic\n\n   calibrate     Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"work-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#work-queue"}},[t._v("#")]),t._v(" work_queue")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/tune_control"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"사용법-21"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-21"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("p",[t._v("음향 톤 형식과 사전 정의된 시스템 조정에 대한 정보는 다음을 참고하십시오. https://github.com/PX4/Firmware/blob/master/src/lib/tunes/tune_definition.desc")]),t._v(" "),e("p",[t._v("Tunes are used to provide audible notification and warnings (e.g. when the system arms, gets position lock, etc.). The tool requires that a driver is running that can handle the tune_control uorb topic.")]),t._v(" "),e("p",[t._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/work_queue",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/work_queue"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"설명-21"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-21"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),e("p",[t._v("작업 대기열 상태를 표시하는 명령줄 도구입니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("tune_control play -t 2\n")])])]),e("p",[e("a",{attrs:{id:"tune_control_usage"}})]),t._v(" "),e("h3",{attrs:{id:"사용법-22"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-22"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('work_queue <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n     error       Play error tune\n     [-t <val>]  Play predefined system tune\n                 default: 1\n     [-f <val>]  Frequency of note in Hz (0-22kHz)\n     [-d <val>]  Duration of note in us\n     [-s <val>]  Volume level (loudness) of the note (0-100)\n                 default: 40\n     [-m <val>]  Melody in string form\n                 values: <string> - e.g. "MFT200e8a8a"\n\n   libtest       Test library\n\n   stop          Stop playback (use for repeated tunes)\n')])])]),e("h2",{attrs:{id:"work-queue-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#work-queue-2"}},[t._v("#")]),t._v(" work_queue")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/work_queue",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/work_queue"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Command-line tool to show work queue status.")]),t._v(" "),e("p",[e("a",{attrs:{id:"work_queue_usage"}})]),t._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("work_queue <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);