(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{2048:function(t,n,e){"use strict";e.r(n);var a=e(18),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mro-pixhawk-flight-controller-pixhawk-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mro-pixhawk-flight-controller-pixhawk-1"}},[t._v("#")]),t._v(" mRo Pixhawk Flight Controller (Pixhawk 1)")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("mRo Pixhawk"),a("sup",[t._v("®")])]),t._v(" is a hardware compatible version of the original "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(". It runs PX4 on the "),a("a",{attrs:{href:"http://nuttx.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The controller can be used as a drop-in replacement for the 3DR"),a("sup",[t._v("®")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(". The main difference is that it is based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv3")]),t._v(" open hardware design, which corrects a bug that limited the original Pixhawk 1 to 1MB of flash.")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:e(753),alt:"mRo Pixhawk Image"}})]),t._v(" "),a("p",[t._v("Assembly/setup instructions for use with PX4 are provided here: "),a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk.html"}},[t._v("Pixhawk Wiring Quickstart")])],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This autopilot is "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("supported")]),t._v(" by the PX4 maintenance and test teams.")],1)]),t._v(" "),a("h2",{attrs:{id:"key-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[t._v("#")]),t._v(" Key Features")]),t._v(" "),a("ul",[a("li",[t._v("마이크로 프로세서:\n"),a("ul",[a("li",[a("p",[t._v("FPU가있는 32 비트 STM32F427 코어 텍스 "),a("sup",[t._v(" & reg; </ 0> M4 코어")])])]),a("p"),t._v(" "),a("li",[t._v("\n  168 MHz / 256 KB RAM / 2 MB 플래시\n")]),t._v(" "),a("li",[t._v("\n  32 bit STM32F100 failsafe co-processor\n")]),t._v(" "),a("li",[t._v("\n  24 MHz/8 KB RAM/64 KB Flash\n")])])]),t._v(" "),a("li",[t._v("\n  Sensors: "),a("ul",[a("li",[t._v("\n      ST Micro L3GD20 3-axis 16-bit gyroscope\n    ")]),t._v(" "),a("li",[t._v("\n      ST Micro LSM303D 3-axis 14-bit accelerometer / magnetometer\n    ")]),t._v(" "),a("li",[t._v("\n      Invensense"),a("sup",[t._v("®")]),t._v(" MPU 6000 3-axis accelerometer/gyroscope\n    ")]),t._v(" "),a("li",[t._v("\n      MEAS MS5611 barometer\n    ")])])]),t._v(" "),a("li",[t._v("\n  인터페이스: "),a("ul",[a("li",[t._v("\n      5x UART (serial ports), one high-power capable, 2x with HW flow control\n    ")]),t._v(" "),a("li",[t._v("\n      2x CAN\n    ")]),t._v(" "),a("li",[t._v("\n      Spektrum DSM / DSM2 / DSM-X® Satellite compatible input up to DX8 (DX9 and above not supported)\n    ")]),t._v(" "),a("li",[t._v("\n      Futaba"),a("sup",[t._v("®")]),t._v(" S.BUS compatible input and output\n    ")]),t._v(" "),a("li",[t._v("\n      PPM sum signal\n    ")]),t._v(" "),a("li",[t._v("\n      RSSI (PWM or voltage) input\n    ")]),t._v(" "),a("li",[t._v("\n      I2C\n    ")]),t._v(" "),a("li",[t._v("\n      SPI\n    ")]),t._v(" "),a("li",[t._v("\n      3.3 and 6.6V ADC inputs\n    ")]),t._v(" "),a("li",[t._v("\n      External microUSB port\n    ")])])]),t._v(" "),a("li",[a("p",[t._v("\n    전원 시스템 :\n  ")]),t._v(" "),a("ul",[a("li",[t._v("\n      자동 페일 오버 기능이있는 이상적인 다이오드 컨트롤러\n    ")]),t._v(" "),a("li",[t._v("\n      서보 레일 고전력 (7V) 및 고전류 준비\n    ")]),t._v(" "),a("li",[t._v("\n      모든 주변 장치 출력 과전류 보호, 모든 입력 ESD 보호\n    ")])])]),t._v(" "),a("li",[a("p",[t._v("\n    무게와 크기 :\n  ")]),t._v(" "),a("ul",[a("li",[t._v("\n      무게 : 38g (1.31oz)\n    ")]),t._v(" "),a("li",[t._v('\n      너비 : 50mm (1.96 ")\n    ')]),t._v(" "),a("li",[t._v('\n      두께 : 15.5mm (.613 ")\n    ')]),t._v(" "),a("li",[t._v('\n      길이 : 81.5mm (3.21")\n    ')])])])]),t._v(" "),a("h2",[t._v("\n  Availability\n")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://store.mrobotics.io/Genuine-PixHawk-1-Barebones-p/mro-pixhawk1-bb-mr.htm"}},[t._v(" 베어 본 (Bare Bones) </ 0> - 보드 만 (3DR Pixhawk 대체품으로 유용합니다)")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<li>\n  <a href="https://store.mrobotics.io/Genuine-PixHawk-Flight-Controller-p/mro-pixhawk1-minkit-mr.htm">mRo Pixhawk 2.4.6 필수 키트!</a> - 텔레메트리 무선 통신을 제외한 모든 것\n</li>\n\n<li>\n  <a href="https://store.mrobotics.io/product-p/mro-pixhawk1-fullkit-mr.htm"> mRo Pixhawk 2.4.6 쿨 키트! (한정판) </ 0> - 텔레 메 트리 라디오를 포함하여 필요한 모든 것</li> </ul> \n  \n  <h2>\n    Building Firmware\n  </h2>\n  \n  <p>\n')])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('      </p>\n      \n      <p>\n        To <a href="../dev_setup/building_px4.md">build PX4</a> for this target:\n      </p>\n      \n      <pre><code>make px4_fmu-v3_default\n')])])]),a("p"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('      <h2>\n        Debug Ports\n      </h2>\n      \n      <p>\n        See <a href="../flight_controller/pixhawk.md#debug-ports">3DR Pixhawk 1 > Debug Ports</a>\n      </p>\n      \n      <h2>\n        Pinouts\n      </h2>\n      \n      <p>\n        See <a href="../flight_controller/pixhawk.md#pinouts">3DR Pixhawk 1 > Pinouts</a>\n      </p>\n      \n      <h2>\n        Serial Port Mapping\n      </h2>\n      \n      <table>\n        <tr>\n          <th>\n            UART\n          </th>\n          \n          <th>\n            Device\n          </th>\n          \n          <th>\n            Port\n          </th>\n        </tr>\n        \n        <tr>\n          <td>\n            UART1\n          </td>\n          \n          <td>\n            /dev/ttyS0\n          </td>\n          \n          <td>\n            IO debug\n          </td>\n        </tr>\n        \n        <tr>\n          <td>\n            USART2\n          </td>\n          \n          <td>\n            /dev/ttyS1\n          </td>\n          \n          <td>\n            TELEM1 (flow control)\n          </td>\n        </tr>\n        \n        <tr>\n          <td>\n            USART3\n          </td>\n          \n          <td>\n            /dev/ttyS2\n          </td>\n          \n          <td>\n            TELEM2 (flow control)\n          </td>\n        </tr>\n        \n        <tr>\n          <td>\n            UART4\n          </td>\n          \n          <td>\n          </td>\n          \n          <td>\n          </td>\n        </tr>\n        \n        <tr>\n          <td>\n            UART7\n          </td>\n          \n          <td>\n            CONSOLE\n          </td>\n          \n          <td>\n          </td>\n        </tr>\n        \n        <tr>\n          <td>\n            UART8\n          </td>\n          \n          <td>\n            SERIAL4\n          </td>\n          \n          <td>\n          </td>\n        </tr>\n      </table>\n      \n      \x3c!-- Note: Got ports using https://github.com/PX4/px4_user_guide/pull/672#issuecomment-598198434 --\x3e\n      \n      <h2>\n        Schematics\n      </h2>\n      \n      <p>\n        The board is based on the <a href="https://pixhawk.org/">Pixhawk-project</a> <strong>FMUv3</strong> open hardware design.\n      </p>\n      \n      <ul>\n        <li>\n          <a href="https://github.com/PX4/Hardware/raw/master/FMUv3_REV_D/Schematic%20Print/Schematic%20Prints.PDF"> FMUv3 schematic </ 0> - 회로도 및 레이아웃</li> </ul> \n          \n          <p>\n')])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("As a CC-BY-SA 3.0 licensed Open Hardware design, all schematics and design files are "),a("a",{attrs:{href:"https://github.com/PX4/Hardware"}},[t._v("available")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("          </p>")])])])])}),[],!1,null,null,null);n.default=i.exports},753:function(t,n,e){t.exports=e.p+"assets/img/mro_pixhawk.037fd8d6.jpg"}}]);