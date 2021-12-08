(window.webpackJsonp=window.webpackJsonp||[]).push([[1261],{2420:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"모듈-참조-명령"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-명령"}},[t._v("#")]),t._v(" 모듈 참조: 명령")]),t._v(" "),a("h2",{attrs:{id:"bl-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bl-update"}},[t._v("#")]),t._v(" bl_update")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/bl_update",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/bl_update"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("파일에서 부트로더를 플래시하는 유틸리티")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/dumpfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dumpfile"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("WARNING: remove all props before using this command.")]),t._v(" "),a("p",[a("a",{attrs:{id:"actuator_test_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bl_update [arguments...]\n setopt        옵션 비트를 설정하여 FLASH를 잠금 해제합니다(잠긴 상태인 경우에만 필요).\n   <file>        부트로더 바이너리 파일\n")])])]),a("h2",{attrs:{id:"dumpfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dumpfile"}},[t._v("#")]),t._v(" dumpfile")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/dyn",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dyn"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("PX4 바이너리로 컴파일되지 않은 동적 PX4 모듈을 로드하고 실행합니다."),a("a",{attrs:{id:"bl_update_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dumpfile [arguments...]\n   <file>      덤프할 파일\n")])])]),a("h2",{attrs:{id:"dyn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dyn"}},[t._v("#")]),t._v(" dyn")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/esc_calib",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/esc_calib"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Dump file utility. Prints file size and contents in binary mode (don't replace LF with CR LF) to stdout.\n"),a("a",{attrs:{id:"dumpfile_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dumpfile [arguments...]\n     <file>      File to dump\n")])])]),a("h2",{attrs:{id:"esc-calib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-calib"}},[t._v("#")]),t._v(" esc_calib")]),t._v(" "),a("p",[t._v("보정 절차(명령을 실행하면 안내 도움말이 표시됨):")]),t._v(" "),a("h3",{attrs:{id:"예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/failure",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/failure"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"사용법-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dyn ./hello.px4mod start\n")])])]),a("p",[a("a",{attrs:{id:"dyn_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-4"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("esc_calib [arguments...]\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-l <val>]  Low PWM value in us\n                 default: 1000\n     [-h <val>]  High PWM value in us\n                 default: 2000\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n     [-a]        Select all channels Arguments to the module\n")])])]),a("h2",{attrs:{id:"failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failure"}},[t._v("#")]),t._v(" failure")]),t._v(" "),a("p",[t._v("시스템에 장애를 주입합니다.")]),t._v(" "),a("p",[t._v("이 시스템 명령은 uORB로 차량 명령어를 전송하여 실패를 트리거합니다.")]),t._v(" "),a("p",[t._v("GPS를 중지하여, GPS 안전 장치를 테스트합니다.")]),t._v(" "),a("ul",[a("li",[t._v("프로펠러를 제거하고, ESC 전원을 끕니다.")]),t._v(" "),a("li",[t._v("자세 및 속도 컨트롤러를 중지합니다: mc_rate_control stop, fw_att_control stop")]),t._v(" "),a("li",[t._v("안전이 꺼져 있는 지 확인")]),t._v(" "),a("li",[t._v("이 명령어를 실행하십시오")])]),t._v(" "),a("p",[a("a",{attrs:{id:"esc_calib_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("failure [arguments...]\n     help          Show this help text\n\n   gps|...       Specify component\n\n   ok|off|...    Specify failure type\n     [-i <val>]  sensor instance (0=all)\n                 default: 0\n")])])]),a("h2",{attrs:{id:"gpio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[t._v("#")]),t._v(" gpio")]),t._v(" "),a("p",[t._v("failure gps off")]),t._v(" "),a("h3",{attrs:{id:"구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/gpio",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/gpio"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"예-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-2"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("이 명령은 GPIO를 읽고 쓰는 데 사용됩니다.")]),t._v(" "),a("h3",{attrs:{id:"사용법-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-5"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("풀업으로 구성된 포트 H 핀 4의 값을 읽습니다.")]),t._v(" "),a("p",[t._v("1 OK")]),t._v(" "),a("p",[a("a",{attrs:{id:"failure_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-3"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("failure [arguments...]\n   help          Show this help text\n\n   gps|...       Specify component\n\n   ok|off|...    Specify failure type\n     [-i <val>]  sensor instance (0=all)\n                 default: 0\n")])])]),a("h2",{attrs:{id:"hardfault-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardfault-log"}},[t._v("#")]),t._v(" hardfault_log")]),t._v(" "),a("p",[t._v("포트 E 핀 7의 출력 값을 높음으로 설정합니다.")]),t._v(" "),a("h3",{attrs:{id:"예-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-3"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("/dev/gpin1 장치의 출력 값을 높음으로 설정합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gpio read H4 PULLUP\n")])])]),a("h3",{attrs:{id:"사용법-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-6"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/hardfault_log",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/hardfault_log"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gpio write E7 1 --force\n")])])]),a("p",[t._v("하드폴트 유틸리티")]),t._v(" "),a("p",[t._v("하드폴트를 처리하기 위해 시작 스크립트에서 사용됩니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gpio write /dev/gpin1 1\n")])])]),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/i2cdetect",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/i2cdetect"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gpio write /dev/gpin1 1\n")])])]),a("p",[a("a",{attrs:{id:"gpio_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-7"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("hardfault_log <command> [arguments...]\n   Commands:\n   check         Check if there's an uncommited hardfault\n\n   rearm         Drop an uncommited hardfault\n\n   fault         Generate a hardfault (this command crashes the system :)\n     [0|1]       Hardfault type: 0=divide by 0, 1=Assertion (default=0)\n\n   commit        Write uncommited hardfault to /fs/microsd/fault_%i.txt (and\n                 rearm, but don't reset)\n\n   count         Read the reboot counter, counts the number of reboots of an\n                 uncommited hardfault (returned as the exit code of the program)\n\n   reset         Reset the reboot counter\n")])])]),a("h2",{attrs:{id:"i2cdetect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2cdetect"}},[t._v("#")]),t._v(" i2cdetect")]),t._v(" "),a("p",[t._v("특정 버스에서 I2C 장치를 검색하는 유틸리티입니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/led_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/led_control"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("(외부) LED를 제어하고 콘트롤하는 명령어입니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"hardfault_log_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-8"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("i2cdetect [arguments...]\n [-b <val>]  I2C bus\n                 default: 1\n")])])]),a("h2",{attrs:{id:"led-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-control"}},[t._v("#")]),t._v(" led_control")]),t._v(" "),a("p",[t._v("이 명령어를 사용하려면, led_control uorb 주제를 처리하는 드라이버가 실행중인 지 확인하십시오.")]),t._v(" "),a("p",[t._v("Utility to scan for I2C devices on a particular bus.\n"),a("a",{attrs:{id:"i2cdetect_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-4"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("i2cdetect [arguments...]\n     [-b <val>]  I2C bus\n                 default: 1\n")])])]),a("h2",{attrs:{id:"listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[t._v("#")]),t._v(" listener")]),t._v(" "),a("p",[t._v("첫 번째 LED를 파란색으로 5번 깜박입니다.")]),t._v(" "),a("h3",{attrs:{id:"예-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-4"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/topic_listener",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/topic_listener"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("uORB 주제를 듣고 콘솔에 데이터를 인쇄하는 유틸리티입니다.")]),t._v(" "),a("p",[t._v("There are different priorities, such that for example one module can set a color with low priority, and another module can blink N times with high priority, and the LED's automatically return to the lower priority state after the blinking. The "),a("code",[t._v("reset")]),t._v(" command can also be used to return to a lower priority.")]),t._v(" "),a("h3",{attrs:{id:"사용법-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-9"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/mft",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mft"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("led_control blink -c blue -l 0 -n 5\n")])])]),a("p",[a("a",{attrs:{id:"led_control_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-10"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("listener <command> [arguments...]\n Commands:\n     <topic_name> uORB topic name\n     [-i <val>]  Topic instance\n                 default: 0\n     [-n <val>]  Number of messages\n                 default: 1\n     [-r <val>]  Subscription rate (unlimited if 0)\n                 default: 0\n")])])]),a("h2",{attrs:{id:"mfd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mfd"}},[t._v("#")]),t._v(" mfd")]),t._v(" "),a("p",[t._v("매니페스트와 상호 작용하는 유틸리티입니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/mixer",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mixer"),a("OutboundLink")],1),t._v("/")]),t._v(" "),a("p",[t._v("믹서 파일을 ESC 드라이버에 로드하거나 추가합니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"listener_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-11"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mfd <command> [arguments...]\n Commands:\n   query         Returns true if not existed\n")])])]),a("h2",{attrs:{id:"mixer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixer"}},[t._v("#")]),t._v(" mixer")]),t._v(" "),a("p",[t._v("드라이버는 NuttX의 경우와 같이 사용된 ioctl을 지원하여야 하지만, 예를 들어 라즈베리파이에서는 지원하지 않습니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/motor_ramp",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/motor_ramp"),a("OutboundLink")],1),a("a",{attrs:{id:"mfd_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-5"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mixer <command> [arguments...]\n Commands:\n   load\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n\n   append\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n")])])]),a("h2",{attrs:{id:"motor-ramp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-ramp"}},[t._v("#")]),t._v(" motor_ramp")]),t._v(" "),a("p",[t._v("모터 램프 업을 테스트하기 위한 응용 프로그램입니다.")]),t._v(" "),a("h3",{attrs:{id:"사용법-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-12"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("시작하기 전에 실행 중인 자세 컨트롤러를 중지하여야 합니다.")]),t._v(" "),a("p",[t._v("시작할 때 백그라운드 작업이 시작되고, 몇 초 동안(지정된 대로) 실행된 다음 종료됩니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"mixer_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-6"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mixer <command> [arguments...]\n Commands:\n   load\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n\n   append\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n")])])]),a("h2",{attrs:{id:"motor-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-test"}},[t._v("#")]),t._v(" motor_test")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/motor_test",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/motor_test"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"예-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-5"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("모터를 테스트하는 유틸리티입니다.")]),t._v(" "),a("p",[t._v("경고: 이 명령을 사용하기 전에 모든 프로펠러를 제거하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("motor_ramp sine -a 1100 -r 0.5\n")])])]),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/mtd",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mtd"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"사용법-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-13"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("motor_ramp sine -a 1100 -r 0.5\n")])])]),a("p",[a("a",{attrs:{id:"motor_ramp_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-14"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("motor_test <command> [arguments...]\n     Commands:\n   test          Set motor(s) to a specific output value\n     [-m <val>]  Motor to test (1...8, all if not specified)\n     [-p <val>]  Power (0...100)\n                 default: 0\n     [-t <val>]  Timeout in seconds (default=no timeout)\n                 default: 0\n     [-i <val>]  driver instance\n                 default: 0\n\n   stop          Stop all motors\n\n   iterate       Iterate all motors starting and stopping one after the other\n")])])]),a("h2",{attrs:{id:"mtd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtd"}},[t._v("#")]),t._v(" mtd")]),t._v(" "),a("p",[t._v("파티션을 마운트하고 테스트하는 유틸리티(보드에서 정의한 FRAM/EEPROM 스토리지 기반) 입니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/nshterm",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/nshterm"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("주어진 포트에서 NSH 쉘을 시작합니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"motor_test_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-15"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mtd <command> [arguments...]\n Commands:\n   status        Print status information\n\n   readtest      Perform read test\n\n   rwtest        Perform read-write test\n\n   erase         Erase partition(s)\n\n The commands 'readtest' and 'rwtest' have an optional instance index:\n     [-i <val>]  storage index (if the board has multiple storages)\n                 default: 0\n\n The commands 'readtest', 'rwtest' and 'erase' have an optional parameter:\n     [<partition_name1> [<partition_name2> ...]]\n")])])]),a("h2",{attrs:{id:"nshterm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nshterm"}},[t._v("#")]),t._v(" nshterm")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/mtd",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mtd"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/param",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/param"),a("OutboundLink")],1),a("a",{attrs:{id:"mtd_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-16"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nshterm [arguments...]\n <file:dev>  Device on which to start the shell (eg. /dev/ttyACM0) Partition names (eg.\n                 /fs/mtd_params), use system default if not provided\n")])])]),a("h2",{attrs:{id:"param"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[t._v("#")]),t._v(" param")]),t._v(" "),a("p",[t._v("쉘 또는 스크립트를 통해 매개변수를 조작하는 명령어입니다.")]),t._v(" "),a("p",[t._v("이것은 예를 들어 기체별 매개변수를 설정하기 위하여 시작 스크립트에서 사용됩니다.")]),t._v(" "),a("p",[t._v("매개변수는 변경시(예: "),a("code",[t._v("매개변수 설정")]),t._v("으로) 자동으로 저장됩니다. 일반적으로 FRAM 또는 SD 카드에 저장됩니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"nshterm_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-7"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nshterm [arguments...]\n     <file:dev>  Device on which to start the shell (eg. /dev/ttyACM0)\n")])])]),a("h2",{attrs:{id:"perf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perf"}},[t._v("#")]),t._v(" perf")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/param",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/param"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"예-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-6"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("Command to access and manipulate parameters via shell or script.")]),t._v(" "),a("p",[t._v("기체를 변경하고 기체의 기본 매개변수가 로드되었는 지 확인합니다.")]),t._v(" "),a("p",[t._v("Parameters are automatically saved when changed, eg. with "),a("code",[t._v("param set")]),t._v(". They are typically stored to FRAM or to the SD card. "),a("code",[t._v("param select")]),t._v(" can be used to change the storage location for subsequent saves (this will need to be (re-)configured on every boot).")]),t._v(" "),a("p",[t._v("If the FLASH-based backend is enabled (which is done at compile time, e.g. for the Intel Aero or Omnibus), "),a("code",[t._v("param select")]),t._v(" has no effect and the default is always the FLASH backend. However "),a("code",[t._v("param save/load <file>")]),t._v(" can still be used to write to/read from files.")]),t._v(" "),a("p",[t._v("Each parameter has a 'used' flag, which is set when it's read during boot. It is used to only show relevant parameters to a ground control station.")]),t._v(" "),a("h3",{attrs:{id:"사용법-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-17"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("이 명령은 서보와 ESC 제어를 위한 PWM 출력을 설정합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("param set SYS_AUTOSTART 4001\nparam set SYS_AUTOCONFIG 1\nreboot\n")])])]),a("p",[a("a",{attrs:{id:"param_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-18"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("perf [arguments...]\n reset         Reset all counters\n\n   latency       Print HRT timer latency histogram\n\n Prints all performance counters if no arguments given Command will succeed if equal\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n\n   greater       Compare a param with a value. Command will succeed if param is\n                 greater than the value\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n     <param_name> <value> Parameter name and value to compare\n\n   touch         Mark a parameter as used\n     [<param_name1> [<param_name2>]] Parameter name (one or more)\n\n   reset         Reset only specified params to default\n     [<param1> [<param2>]] Parameter names to reset (wildcard at end allowed)\n\n   reset_all     Reset all params to default\n     [<exclude1> [<exclude2>]] Do not reset matching params (wildcard at end\n                 allowed)\n\n   index         Show param for a given index\n     <index>     Index: an integer >= 0\n\n   index_used    Show used param for a given index\n     <index>     Index: an integer >= 0\n\n   find          Show index of a param\n     <param>     param name\n")])])]),a("h2",{attrs:{id:"pwm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwm"}},[t._v("#")]),t._v(" pwm")]),t._v(" "),a("p",[t._v("기본 장치 "),a("code",[t._v("/dev/pwm_output0")]),t._v("은 메인 채널이고, AUX 채널은 "),a("code",[t._v("/dev/pwm_output1")]),t._v("("),a("code",[t._v("-d")]),t._v(" 매개변수) 입니다.")]),t._v(" "),a("p",[t._v("Tool to print performance counters\n"),a("a",{attrs:{id:"perf_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-8"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("perf [arguments...]\n   reset         Reset all counters\n\n   latency       Print HRT timer latency histogram\n\n Prints all performance counters if no arguments given\n")])])]),a("h2",{attrs:{id:"reboot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reboot"}},[t._v("#")]),t._v(" reboot")]),t._v(" "),a("p",[t._v("시동 해제 값은 모터가 회전하지 않도록 설정하여야 하며(킬 스위치에도 사용됨), 회전 최소값으로 설정하여야 합니다.")]),t._v(" "),a("h3",{attrs:{id:"예-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-7"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("p",[t._v("This command is used to configure PWM outputs for servo and ESC control.")]),t._v(" "),a("p",[t._v("매개변수 "),a("code",[t._v("-p")]),t._v(" 및 "),a("code",[t._v("-r")]),t._v("은 정수를 지정하는 대신 매개변수로 설정할 수 있습니다. 예를 들어 -p p:PWM_MIN을 사용합니다.")]),t._v(" "),a("p",[t._v("It is used in the startup script to make sure the PWM parameters ("),a("code",[t._v("PWM_*")]),t._v(") are applied (or the ones provided by the airframe config if specified). "),a("code",[t._v("pwm status")]),t._v(" shows the current settings (the trim value is an offset and configured with "),a("code",[t._v("PWM_MAIN_TRIMx")]),t._v(" and "),a("code",[t._v("PWM_AUX_TRIMx")]),t._v(").")]),t._v(" "),a("p",[t._v("모든 채널의 PWM 속도를 400 Hz로 설정합니다.")]),t._v(" "),a("p",[t._v("Channels are assigned to a group. Due to hardware limitations, the update rate can only be set per group. Use "),a("code",[t._v("pwm status")]),t._v(" to display the groups. If the "),a("code",[t._v("-c")]),t._v(" argument is used, all channels of any included group must be included.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/reboot",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/reboot"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("시스템을 재부팅합니다.")]),t._v(" "),a("h3",{attrs:{id:"사용법-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-19"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/sd_bench",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/sd_bench"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pwm arm\npwm test -c 13 -p 1200\n")])])]),a("p",[t._v("SD 카드 속도를 테스트합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pwm arm\npwm test -c 13 -p 1200\n")])])]),a("p",[a("a",{attrs:{id:"pwm_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-20"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("reboot [arguments...]\n [-b]        Reboot into bootloader\n     [lock|unlock] Take/release the shutdown lock (for testing) PWM outputs are set to failsafe values.\n     on|off      Turn on or off\n\n   terminatefail Enable Termination Failsafe mode. While this is true, any\n                 failsafe that occurs will be unrecoverable (even if recovery\n                 conditions are met).\n     on|off      Turn on or off\n\n   rate          Configure PWM rates\n     -r <val>    PWM Rate in Hz (0 = Oneshot, otherwise 50 to 400Hz)\n\n   oneshot       Configure Oneshot125 (rate is set to 0)\n\n   failsafe      Set Failsafe PWM value\n\n   disarmed      Set Disarmed PWM value\n\n   min           Set Minimum PWM value\n\n   max           Set Maximum PWM value\n\n   test          Set Output to a specific value until 'q' or 'c' or 'ctrl-c'\n                 pressed\n\n   steps         Run 5 steps from 0 to 100%\n\n The commands 'failsafe', 'disarmed', 'min', 'max' and 'test' require a PWM\n value:\n     -p <val>    PWM value (eg. 1100)\n\n The commands 'rate', 'oneshot', 'failsafe', 'disarmed', 'min', 'max', 'test'\n and 'steps' additionally require to specify the channels with one of the\n following commands:\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n     [-g <val>]  Select channels by group (eg. 0, 1, 2. use 'pwm status' to show\n                 groups)\n     [-a]        Select all channels\n\n These parameters apply to all commands:\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-v]        Verbose output\n     [-e]        Exit with 1 instead of 0 on error\n")])])]),a("h2",{attrs:{id:"sd-bench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-bench"}},[t._v("#")]),t._v(" sd_bench")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/system_time",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/system_time"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("시스템 시간을 설정하고 출력합니다."),a("a",{attrs:{id:"reboot_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-21"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sd_bench [arguments...]\n     [-b <val>]  Block size for each read/write\n                 default: 4096\n     [-r <val>]  Number of runs\n                 default: 5\n     [-d <val>]  Duration of a run in ms\n                 default: 2000\n     [-s]        Call fsync after each block (default=at end of each run)\n     [-u]        Test performance with unaligned data)\n")])])]),a("h2",{attrs:{id:"system-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-time"}},[t._v("#")]),t._v(" system_time")]),t._v(" "),a("p",[t._v("시스템 시간을 설정하고 다시 읽습니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/top",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/top"),a("OutboundLink")],1),a("a",{attrs:{id:"sd_bench_usage"}})]),t._v(" "),a("h3",{attrs:{id:"설명-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설명-9"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sd_bench [arguments...]\n     [-b <val>]  Block size for each read/write\n                 default: 4096\n     [-r <val>]  Number of runs\n                 default: 5\n     [-d <val>]  Duration of a run in ms\n                 default: 2000\n     [-k]        Keep the test file\n     [-s]        Call fsync after each block (default=at end of each run)\n     [-u]        Test performance with unaligned data\n     [-v]        Verify data and block number\n")])])]),a("h2",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),a("p",[t._v("실행 중인 프로세스와 해당 CPU, 스택 사용량, 우선 순위 및 상태를 모니터링합니다.")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/usb_connected",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/usb_connected"),a("OutboundLink")],1),a("a",{attrs:{id:"sd_stress_usage"}})]),t._v(" "),a("h3",{attrs:{id:"예-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예-8"}},[t._v("#")]),t._v(" 예")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sd_stress [arguments...]\n     [-r <val>]  Number of runs\n                 default: 5\n     [-b <val>]  Number of bytes\n                 default: 100\n")])])]),a("h2",{attrs:{id:"usb-connected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-connected"}},[t._v("#")]),t._v(" usb_connected")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/system_time",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/system_time"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"사용법-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-22"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("소스: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/ver",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/ver"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"사용법-23"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-23"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("Set the system time and read it back")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("system_time set 1600775044\nsystem_time get\n")])])]),a("p",[a("a",{attrs:{id:"system_time_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-24"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-24"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("system_time <command> [arguments...]\n Commands:\n   set           Set the system time, provide time in unix epoch time format\n\n   get           Get the system time\n")])])]),a("h2",{attrs:{id:"ver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ver"}},[t._v("#")]),t._v(" ver")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/top",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/top"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Monitor running processes and their CPU, stack usage, priority and state\n"),a("a",{attrs:{id:"top_usage"}})]),t._v(" "),a("h3",{attrs:{id:"사용법-25"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법-25"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("top [arguments...]\n   once          print load only once\n")])])]),a("h2",{attrs:{id:"usb-connected-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-connected-2"}},[t._v("#")]),t._v(" usb_connected")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/usb_connected",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/usb_connected"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Utility to check if USB is connected. Was previously used in startup scripts. A return value of 0 means USB is connected, 1 otherwise.\n"),a("a",{attrs:{id:"usb_connected_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("usb_connected [arguments...]\n")])])]),a("h2",{attrs:{id:"ver-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ver-2"}},[t._v("#")]),t._v(" ver")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/ver",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/ver"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Tool to print various version information\n"),a("a",{attrs:{id:"ver_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ver <command> [arguments...]\n Commands:\n   hw            Hardware architecture\n\n   mcu           MCU info\n\n   git           git version information\n\n   bdate         Build date and time\n\n   gcc           Compiler info\n\n   bdate         Build date and time\n\n   px4guid       PX4 GUID\n\n   uri           Build URI\n\n   all           Print all versions\n\n   hwcmp         Compare hardware version (returns 0 on match)\n     <hw> [<hw2>] Hardware to compare against (eg. PX4_FMU_V4). An OR comparison\n                 is used if multiple are specified\n\n   hwtypecmp     Compare hardware type (returns 0 on match)\n     <hwtype> [<hwtype2>] Hardware type to compare against (eg. V2). An OR\n                 comparison is used if multiple are specified\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);