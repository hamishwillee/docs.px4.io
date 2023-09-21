(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{2519:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"crazyflie-2-0-discontinued"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#crazyflie-2-0-discontinued"}},[e._v("#")]),e._v(" Crazyflie 2.0 (Discontinued)")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[r("em",[e._v("Crazyflie 2.0")]),e._v(" has been "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("discontinued/superseded")]),e._v(". Try "),r("RouterLink",{attrs:{to:"/ko/complete_vehicles/crazyflie21.html"}},[e._v("Bitcraze Crazyflie 2.1")]),e._v(" instead!")],1)]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("ul",[r("li",[e._v("PX4 does not manufacture this (or any) autopilot. Contact the "),r("a",{attrs:{href:"https://www.bitcraze.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),r("OutboundLink")],1),e._v(" for hardware support or compliance issues.")]),e._v(" "),r("li",[e._v("PX4 support for this flight controller is "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("experimental")]),e._v(".")],1)])]),e._v(" "),r("p",[e._v("The Crazyflie line of micro quads was created by Bitcraze AB. An overview of the Crazyflie 2.0 can be "),r("a",{attrs:{href:"https://www.bitcraze.io/crazyflie-2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("found here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:a(621),alt:"Crazyflie2 이미지"}})]),e._v(" "),r("h2",{attrs:{id:"요약"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[e._v("#")]),e._v(" 요약")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("주요 하드웨어 문서는 여기를 참고하십시오.\nhttps://wiki.bitcraze.io/projects:crazyflie2:index")])]),e._v(" "),r("ul",[r("li",[e._v("Main System-on-Chip: STM32F405RG\n"),r("ul",[r("li",[e._v("CPU: 168 MHz ARM Cortex M4 with single-precision FPU")]),e._v(" "),r("li",[e._v("RAM: 192 KB SRAM")])])]),e._v(" "),r("li",[e._v("nRF51822 radio and power management MCU")]),e._v(" "),r("li",[e._v("MPU9250 Accel / Gyro / Mag")]),e._v(" "),r("li",[e._v("LPS25H barometer")])]),e._v(" "),r("h2",{attrs:{id:"구매처"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[e._v("#")]),e._v(" 구매처")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyflie-2-0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyflie 2.0"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/kits/products/crazyradio-pa",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA 2.4 GHz USB dongle"),r("OutboundLink")],1),e._v(": used for wireless communication between "),r("em",[e._v("QGroundControl")]),e._v(" and Crazyflie 2.0.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/breakout-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breakout deck"),r("OutboundLink")],1),e._v(": breakout expansion board for connecting new peripherals.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),r("OutboundLink")],1),e._v(": contains an optical flow sensor to measure movements of the ground and a distance sensor to measure the distance to the ground. This will be useful for precise altitude and position control.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),r("OutboundLink")],1),e._v(" has the same distance sensor as the Flow deck to measure the distance to the ground. This will be useful for precise altitude control.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/sd-card-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("SD-card deck"),r("OutboundLink")],1),e._v(": used for high speed onboard logging to a micro SD card.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://support.logi.com/hc/en-us/articles/360024326793--Getting-Started-Gamepad-F310",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logitech Joystick"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"px4-플래싱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-플래싱"}},[e._v("#")]),e._v(" PX4 플래싱")]),e._v(" "),r("p",[e._v("PX4 개발 환경 설정후 Crazyflie 2.0에 PX4를 설치합니다.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("PX4 부트 로더 소스 코드를 다운로드합니다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/PX4/Bootloader.git\n")])])])]),e._v(" "),r("li",[r("p",[e._v("소스 코드 최상위 디렉토리로 이동하여 다음 명령어를 실행하여 컴파일합니다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make crazyflie_bl\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Crazyflie 2.0을 DFU 모드로 전환합니다.")]),e._v(" "),r("ul",[r("li",[e._v("처음에는 전원이 꺼져 있는지 확인하십시오.")]),e._v(" "),r("li",[e._v("Hold down the reset button (see figure below...). "),r("img",{attrs:{src:a(379),alt:"Crazyflie2 재설정 버튼"}})]),e._v(" "),r("li",[e._v("컴퓨터의 USB 포트에 연결합니다.")]),e._v(" "),r("li",[e._v("1초 후 파란색 LED가 깜박이기 시작하고, 5초 후 더 빠르게 깜박이기 시작합니다.")]),e._v(" "),r("li",[e._v("버튼을 뗍니다.")])])]),e._v(" "),r("li",[r("p",[r("em",[e._v("dfu-util")]),e._v(" 설치:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo apt-get update\n sudo apt-get install dfu-util\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Download the "),r("em",[e._v("crazyflie-lib-python")]),e._v(" source code: "),r("code",[e._v("git clone https://github.com/bitcraze/crazyflie-lib-python.git")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo dfu-util -d 0483:df11 -a 0 -s 0x08000000 -D ./build/crazyflie_bl/crazyflie_bl.bin\n")])])]),r("p",[e._v("Crazyflie 2.0의 전원을 키면, 노란색 LED가 깜박입니다.")])]),e._v(" "),r("li",[r("p",[e._v("PX4 자동조종장치 소스 코드를 다운로드합니다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/PX4/PX4-Autopilot.git\n")])])])]),e._v(" "),r("li",[r("p",[e._v("소스 코드 최상위 디렉토리로 이동하여 다음 명령어를 실행하여 컴파일합니다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make bitcraze_crazyflie_default upload\n")])])])]),e._v(" "),r("li",[r("p",[e._v("장치를 연결하라는 메시지가 표시되면 Crazyflie 2.0을 연결합니다. 노란색 LED가 깜박이기 시작하면 부트 로더 모드입니다. 그런 다음 빨간색 LED가 켜지면, 깜박이는 프로세스가 시작되었음을 나타냅니다.")])]),e._v(" "),r("li",[r("p",[e._v("완료될 때까지 기다리십시오.")])]),e._v(" "),r("li",[r("p",[e._v("완료되면,  Calibrate the sensors using "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Sensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("QGroundControl이 기체와 연결되지 않으면 crazyflie의 [nuttx-config](https://github.com/PX4/PX4-Autopilot/blob/master/boards/bitcraze/crazyflie/nuttx-config/nsh/defconfig)에서 `# CONFIG_DEV_LOWCONSOLE이 설정되지 않음`이 `CONFIG_DEV_LOWCONSOLE = y`로 대체되었는 지 확인하십시오. 이 작업은 *menuconfig*를 사용하여 수행하여야 합니다.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make bitcraze_crazyflie_default menuconfig\n")])])]),r("p",[e._v("또는 "),r("em",[e._v("qconfig")]),e._v(" (GUI의 "),r("em",[e._v("직렬 드라이버 지원")]),e._v("에서 "),r("em",[e._v("저수준 콘솔 지원")]),e._v(" 확인) :")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make bitcraze_crazyflie_default qconfig\n")])])])]),e._v(" "),r("h2",{attrs:{id:"무선-설정-지침"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-설정-지침"}},[e._v("#")]),e._v(" 무선 설정 지침")]),e._v(" "),r("p",[e._v("온보드 nRF 모듈을 사용하여 Bluetooth나 2.4GHz Nordic ESB 프로토콜로 보드에 연결할 수 있습니다.")]),e._v(" "),r("ul",[r("li",[e._v("A "),r("a",{attrs:{href:"https://www.bitcraze.io/crazyradio-pa/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crazyradio PA"),r("OutboundLink")],1),e._v(" is recommended.")]),e._v(" "),r("li",[e._v("To fly the Crazyflie 2.0 right away, the Crazyflie phone app is supported via Bluetooth.")])]),e._v(" "),r("p",[e._v("공식 Bitcraze** Crazyflie 앱** 사용 :")]),e._v(" "),r("ul",[r("li",[e._v("Connect via Bluetooth.")]),e._v(" "),r("li",[e._v("Change mode in settings to 1 or 2.")]),e._v(" "),r("li",[e._v("Calibrate via QGroundControl.")])]),e._v(" "),r("p",[r("strong",[e._v("MAVLink")]),e._v(" 연결 :")]),e._v(" "),r("ul",[r("li",[e._v("Use a Crazyradio PA alongside a compatible GCS.")]),e._v(" "),r("li",[e._v("Navigate to the crazyflie-lib-python folder and type: "),r("code",[e._v("make venv")]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/bitcraze/crazyflie-lib-python.git\n")])])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python/blob/master/examples/cfbridge.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfbridge.py"),r("OutboundLink")],1),e._v("를 사용하여 Crazyflie 2.0(PX4로 깜박임)과 QGroundControl간의 무선 MAVlink 통신 링크를 설정합니다. :::note "),r("a",{attrs:{href:"https://github.com/bitcraze/crazyflie-lib-python/blob/master/examples/cfbridge.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfbridge.py"),r("OutboundLink")],1),e._v("를 사용하여 Crazyflie 2.0(PX4로 깜박임)과 QGroundControl간의 무선 MAVlink 통신 링크를 설정합니다. "),r("em",[e._v("Cfbridge")]),e._v("를 사용하여 QGroundControl에서 crazyradio PA와 통신할 수 있습니다.")])]),e._v(" "),r("ul",[r("li",[e._v("Make sure you have set the udev permissions to use the USB Radio. To do this, follow the steps listed "),r("a",{attrs:{href:"https://www.bitcraze.io/documentation/repository/crazyflie-lib-python/master/installation/usb_permissions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" and "),r("strong",[e._v("restart")]),e._v(" your computer.")]),e._v(" "),r("li",[e._v("Connect a Crazyradio PA via USB.")]),e._v(" "),r("li",[e._v("Build a "),r("a",{attrs:{href:"https://virtualenv.pypa.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("virtual environment (local python environment)"),r("OutboundLink")],1),e._v(" with package dependencies using the following method:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pip install tox --user\n")])])])]),e._v(" "),r("li",[e._v("Navigate to the crazyflie-lib-python folder and type:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make venv\n")])])])]),e._v(" "),r("li",[e._v("Activate the virtual environment:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("source venv-cflib/bin/activate\n")])])])]),e._v(" "),r("li",[e._v("Install required dependencies:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("pip install -r requirements.txt --user\n")])])])])]),e._v(" "),r("p",[e._v("Crazyflie 2.0을 crazyradio와 연결하기 위하여 아래의 단계에 따라 "),r("strong",[e._v("cfbridge를 시작")]),e._v("합니다.")]),e._v(" "),r("ul",[r("li",[e._v("Power off and power on Crazyflie 2.0 and wait for it to boot up.")]),e._v(" "),r("li",[e._v("Connect a Crazyflie radio device via USB.")]),e._v(" "),r("li",[e._v("Navigate to the crazyflie-lib-python folder.")]),e._v(" "),r("li",[e._v("Activate the environment:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("source venv-cflib/bin/activate\n")])])])]),e._v(" "),r("li",[e._v("Navigate to the examples folder:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd examples\n")])])])]),e._v(" "),r("li",[e._v("Launch cfbridge:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("python cfbridge.py\n")])])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("em",[e._v("Cfbridge")]),e._v(" by default tries to initiate the radio link communication on channel 80 and with crazyflie address 0xE7E7E7E7E7. If you are using "),r("a",{attrs:{href:"https://github.com/dennisss/cfbridge/blob/master/README.md#advanced-swarming",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple crazyflies and/or crazyradios"),r("OutboundLink")],1),e._v(" in the same room and want to use a different channel and/or address for each, first connect the crazyflie with QGroundControl via a USB cable and change the syslink parameters (channel, address) in QGroundControl. Next, launch the cfbridge by giving the same channel and address as   the first and second arguments respectively, e.g: "),r("code",[e._v("python cfbridge.py 90 0x0202020202")])])]),e._v(" "),r("ul",[r("li",[e._v("Open QGroundControl.")]),e._v(" "),r("li",[e._v("After using "),r("em",[e._v("cfbridge")]),e._v(", you can deactivate the virtualenv if you activated it by pressing "),r("code",[e._v("CTRL+z")]),e._v(". Most of the time, launching "),r("em",[e._v("cfbridge")]),e._v(" again from the same terminal doesn't connect to crazyflie, this can be solved by closing the terminal and relaunching "),r("em",[e._v("cfbridge")]),e._v(" in a new terminal.")])]),e._v(" "),r("p",[e._v("Launch cfbridge: "),r("code",[e._v("python cfbridge.py")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("make venv\n")])])]),r("p",[e._v(":::")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("Joystick을 사용하려면 QGroundControl의 "),r("code",[e._v("COM_RC_IN_MODE")]),e._v('를 "Joystick/No RC Checks"로 설정하십시오. 조이스틱을 보정하고 QGroundControl의 조이스틱 메시지 주파수를 5~14Hz(10Hz 권장)로 설정합니다. 주파수를 설정하려면 고급 옵션을 활성화하여야 합니다. 이것은 조이스틱 명령이 QGroundControl에서 Crazyflie 2.0으로 전송되는 속도입니다 (이렇게하려면 '),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("여기"),r("OutboundLink")],1),e._v("의 지침에 따라 최신 QGroundControl 소스 코드 (마스터)를 얻고 빌드해야합니다).")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(622),alt:""}})]),e._v(" "),r("h2",{attrs:{id:"하드웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[e._v("#")]),e._v(" 하드웨어 설정")]),e._v(" "),r("p",[e._v("Crazyflie 2.0은 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[e._v("안정화 모드")]),e._v(", "),r("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[e._v("고도 모드")]),e._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("위치 모드")]),e._v("에서 정확한 제어로 비행할 수 있습니다.")],1),e._v(" "),r("ul",[r("li",[e._v("You will need the "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-ranger deck"),r("OutboundLink")],1),e._v(" to fly in "),r("em",[e._v("Altitude")]),e._v(" mode. If you also want to fly in the "),r("em",[e._v("Position")]),e._v(" mode, it is recommended you buy the "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow deck"),r("OutboundLink")],1),e._v(" which also has the integrated Z-ranger sensor.")]),e._v(" "),r("li",[e._v("The onboard barometer is highly susceptible to any external wind disturbances including those created by Crazyflie's own propellers. Hence, we isolated the barometer with a piece of foam, and then mounted the distance sensor on top of it as shown below:")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(623),alt:"Crazyflie 기압계"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(624),alt:"Crazyflie 기압계 폼"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(625),alt:"Crazyflie 광류"}})]),e._v(" "),r("p",[e._v("비행세부정보를 기록하기 위하여 아래와 같이 crazyflie 위에 SD 카드 데크를 장착할 수 있습니다.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(626),alt:"Crazyflie SD 카드"}})]),e._v(" "),r("p",[e._v("양면 테이프를 사용하여 SD 카드 데크 위에 배터리를 부착합니다.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(627),alt:"Crazyflie 배터리 설정"}})]),e._v(" "),r("h2",{attrs:{id:"고도-제어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고도-제어"}},[e._v("#")]),e._v(" 고도 제어")]),e._v(" "),r("p",[e._v("Crazyflie는 "),r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/z-ranger-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z-레인저 데크"),r("OutboundLink")],1),e._v("를 사용하면 "),r("em",[e._v("고도")]),e._v(" 모드로 비행할 수 있습니다. 데이터 시트에 따르면 거리 측정기가 감지할 수있는 최대 고도(지면 위)는 2m입니다. 그러나, 어두운 바닥에서는 0.5m로 감소합니다. 밝은 바닥에서는 최대 1.3m까지 상승합니다. 즉, "),r("em",[e._v("고도")]),e._v(" 또는 "),r("em",[e._v("위치")]),e._v(" 비행 모드에서는 이 값 이상의 고도를 유지할 수 없습니다.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Crazyflie 2.0 높이가 "),r("em",[e._v("고도 모드")]),e._v(" 또는 "),r("em",[e._v("위치 모드")]),e._v("의 중간 스로틀 명령에서 드리프트되면 먼저 기체를 재부팅 하십시오. 그래도 문제가 해결되지 않으면, 가속계와 자기(나침반) 센서를 다시 보정하십시오.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("온보드 기압계는 Crazyflie의 자체 프로펠러 바람에 민감하기 때문에 고도 유지용으로 사용하는 것은 적절하지 않습니다.")])]),e._v(" "),r("h2",{attrs:{id:"위치-제어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#위치-제어"}},[e._v("#")]),e._v(" 위치 제어")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://store.bitcraze.io/collections/decks/products/flow-deck",target:"_blank",rel:"noopener noreferrer"}},[e._v("플로우 데크"),r("OutboundLink")],1),e._v("을 사용하면 "),r("em",[e._v("위치 모드")]),e._v("에서 Crazyflie 2.0을 비행할 수 있습니다. Unlike "),r("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[e._v("PX4FLOW")]),e._v(", the flow deck does not house a gyro, hence the onboard gyro is used for flow fusion to find the local position estimates. PX4flow와 달리 플로우 데크에는 자이로가 없으므로 온보드 자이로가 유동 융합에 사용되어 로컬 위치 추정치를 찾습니다.")],1),e._v(" "),r("h2",{attrs:{id:"frsky-taranis-rc-송신기를-조이스틱으로-사용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frsky-taranis-rc-송신기를-조이스틱으로-사용"}},[e._v("#")]),e._v(" FrSky Taranis RC 송신기를 조이스틱으로 사용")]),e._v(" "),r("p",[e._v("Taranis RC 송신기를 USB 조이스틱으로 설정할 수 있습니다.")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Create a new model in Taranis.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(380),alt:"Taranis - new model"}})])]),e._v(" "),r("li",[r("p",[e._v("In "),r("em",[e._v("MODEL SETUP")]),e._v(" menu page, turn off both internal and external TX modules.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(381),alt:"Taranis - model setup"}})])]),e._v(" "),r("li",[r("p",[e._v("In "),r("em",[e._v("OUTPUTS")]),e._v(" menu page (also called “SERVOS” page in some Taranis transmitters), invert Throttle (CH1) and Aileron (CH3).")]),e._v(" "),r("p",[r("img",{attrs:{src:a(382),alt:"Taranis - outputs"}})])])]),e._v(" "),r("p",[e._v("Taranis 스위치를 사용하여 시동/시동 해제 및 다른 비행 모드로 전환하려면 :")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("In Taranis UI "),r("em",[e._v("MIXER")]),e._v(" menu page, you can assign the switches to any channel in the range channel 9-16 which map to the buttons 0-7 in the QGroundControl Joystick setup. For example, Taranis “SD” switch can be set to channel 9 in Taranis UI:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(383),alt:"Taranis switch setup"}})])]),e._v(" "),r("li",[r("p",[e._v("Connect Taranis to PC with a USB cable and Open QGroundControl.")])]),e._v(" "),r("li",[r("p",[e._v("In QGroundControl Joystick Setup, you can see the buttons turning yellow when you switch them on. For example, channel 9 in Taranis maps to button 0 in QGroundControl Joystick setup. You can assign any mode to this button e.g. "),r("em",[e._v("Altitude")]),e._v(' mode. Now when you lower the switch "SD", flight mode will change to '),r("em",[e._v("Altitude")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:a(384),alt:"Joystick setup"}})])])]),e._v(" "),r("h3",{attrs:{id:"ros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[e._v("#")]),e._v(" ROS")]),e._v(" "),r("p",[e._v("MAVROS를 통해 Crazyflie 2.0에 연결하려면 :")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Start up "),r("em",[e._v("cfbridge")]),e._v(" using the above instructions.")])]),e._v(" "),r("li",[r("p",[e._v("Change the UDP port QGroundControl listens to:")]),e._v(" "),r("ul",[r("li",[e._v("In QGroundControl, navigate to "),r("strong",[e._v("Application Settings > General")]),e._v(" and uncheck all the boxes under "),r("em",[e._v("Autoconnect to the following devices")]),e._v(".")]),e._v(" "),r("li",[e._v("Add in "),r("strong",[e._v("Comm Links")]),e._v(" a link of type "),r("em",[e._v("UDP")]),e._v(", check the "),r("em",[e._v("Automatically Connect on Start")]),e._v(" option, change the "),r("em",[e._v("Listening Port")]),e._v(" to 14557, add Target Hosts: 127.0.0.1 and then press "),r("strong",[e._v("OK")]),e._v(".")])])]),e._v(" "),r("li",[r("p",[e._v("Make sure you have "),r("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVROS"),r("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),r("li",[r("p",[e._v("Start MAVROS with command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('roslaunch mavros px4.launch fcu_url:="udp://:14550@127.0.0.1:14551" gcs_url:="udp://@127.0.0.1:14557"\n')])])])]),e._v(" "),r("li",[r("p",[e._v("Restart QGroundControl if it doesn't connect.")])])]),e._v(" "),r("h2",{attrs:{id:"비행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비행"}},[e._v("#")]),e._v(" 비행")]),e._v(" "),r("p",[e._v("@"),r("a",{attrs:{href:"https://youtu.be/2Bcy3k1h5uc",target:"_blank",rel:"noopener noreferrer"}},[e._v("유투브"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports},379:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_reset_button.9cfe1cdf.jpg"},380:function(e,t,a){e.exports=a.p+"assets/img/taranis_model.6d662e29.jpg"},381:function(e,t,a){e.exports=a.p+"assets/img/taranis_model_setup.176ea7e3.jpg"},382:function(e,t,a){e.exports=a.p+"assets/img/taranis_outputs.eb6d50c0.jpg"},383:function(e,t,a){e.exports=a.p+"assets/img/taranis_switch_setup.58cae4b8.jpg"},384:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_QGCjoystick_setup.308b2294.png"},621:function(e,t,a){e.exports=a.p+"assets/img/crazyflie2_hero.4f2e6365.png"},622:function(e,t,a){e.exports=a.p+"assets/img/joystick-message-frequency.7fbc2182.png"},623:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_barometer.37ff6b19.jpg"},624:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_baro_foam.3121919f.jpg"},625:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_opticalflow.1442042e.jpg"},626:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_sdcard.439a932c.jpg"},627:function(e,t,a){e.exports=a.p+"assets/img/crazyflie_battery_setup.8b9faff8.jpg"}}]);