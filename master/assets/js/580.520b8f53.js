(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1991:function(n,t,e){"use strict";e.r(t);var r=e(18),i=Object(r.a)({},(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h1",{attrs:{id:"mro-x2-1-자동-조종-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mro-x2-1-자동-조종-장치"}},[n._v("#")]),n._v(" mRo-X2.1 자동 조종 장치")]),n._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[n._v("WARNING")]),n._v(" "),r("p",[n._v("PX4 does not manufacture this (or any) autopilot. Contact the "),r("a",{attrs:{href:"https://store.mrobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("manufacturer"),r("OutboundLink")],1),n._v(" for hardware support or compliance issues.")])]),n._v(" "),r("p",[n._v("The "),r("a",{attrs:{href:"http://www.mRobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[n._v("mRo-X2.1 autopilot"),r("OutboundLink")],1),n._v(" is based on the "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Pixhawk"),r("sup",[n._v("®")]),n._v("-project"),r("OutboundLink")],1),n._v(" "),r("strong",[n._v("FMUv2")]),n._v(" open hardware design. It runs PX4 on the "),r("a",{attrs:{href:"http://nuttx.org",target:"_blank",rel:"noopener noreferrer"}},[n._v("NuttX"),r("OutboundLink")],1),n._v(" OS.")]),n._v(" "),r("p",[r("img",{attrs:{src:e(744),alt:"mRo X2.1"}})]),n._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),r("p",[n._v("Note This flight controller is "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[n._v("manufacturer supported")]),n._v(".")],1)]),n._v(" "),r("h2",{attrs:{id:"quick-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[n._v("#")]),n._v(" Quick Summary")]),n._v(" "),r("ul",[r("li",[n._v("Main System-on-Chip: "),r("a",{attrs:{href:"http://www.st.com/web/en/catalog/mmc/FM141/SC1169/SS1577/LN1789",target:"_blank",rel:"noopener noreferrer"}},[n._v("STM32F427"),r("OutboundLink")],1),n._v(" "),r("ul",[r("li",[r("p",[n._v("CPU : STM32F427VIT6 ARM "),r("sup",[n._v(" & reg; </ 0> 마이크로 컨트롤러 - 개정 3")])])]),r("p"),n._v(" "),r("li",[n._v("\n  IO: STM32F100C8T6 ARM "),r("sup",[n._v(" & reg; </ 0> 마이크로 컨트롤러")])])])]),n._v(" "),r("li",[n._v("\n    Sensors: "),r("ul",[r("li",[n._v("\n        Invensense "),r("sup",[n._v(" & reg; </ 0> MPU9250 9DOF")])]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('    <li>\n      Invensense ICM-20602 6DOF\n    </li>\n    \n    <li>\n      MEAS MS5611 barometer\n    </li></ul></li> \n    \n    <li>\n      Dimensions/Weight <ul>\n        <li>\n          크기: 36mm x 50mm (수직, 수평 또는 머리글이없는 상태에서 주문 가능)\n        </li>\n        <li>\n          Mounting Points: 30.5mm x 30.5mm 3.2mm diameter\n        </li>\n        <li>\n          Weight: 10.9g\n        </li>\n      </ul>\n    </li></ul> \n    \n    <p>\n      The diagram below provides a side-by-side comparison with a Pixhawk 1. The mRo features almost identical hardware and connectivity but has a much smaller footprint. Major differences are updated sensors and Rev 3 FMU.\n    </p>\n    \n    <p>\n      <img src="../../assets/flight_controller/mro/px1_x21.jpg" alt="Mro Pixhawk 1 vs X2.1 comparison" />\n    </p>\n    \n    <h2>\n      Connectivity\n    </h2>\n    \n    <ul>\n      <li>\n        2.54mm headers:\n      </li>\n      <li>\n        GPS (UART4) with I2C\n      </li>\n      <li>\n        CAN Bus\n      </li>\n      <li>\n        RC input\n      </li>\n      <li>\n        PPM input\n      </li>\n      <li>\n        Spektrum input\n      </li>\n      <li>\n        RSSI input\n      </li>\n      <li>\n        sBus input\n      </li>\n      <li>\n        sBus output\n      </li>\n      <li>\n        Power input\n      </li>\n      <li>\n        Buzzer output\n      </li>\n      <li>\n        LED output\n      </li>\n      <li>\n        8 x Servo outputs\n      </li>\n      <li>\n        6 x Aux outputs\n      </li>\n      <li>\n        오프 보드 microUSB 커넥터\n      </li>\n      <li>\n        강제 종료 핀 출력 <em> (현재 펌웨어에서 지원되지 않음) </ 0></li> \n        \n        <li>\n          AirSpeed 센서\n        </li>\n        \n        <li>\n          USART2 (Telem 1)\n        </li>\n        \n        <li>\n          USART3 (Telem 2)\n        </li>\n        \n        <li>\n          UART7 (Console)\n        </li>\n        \n        <li>\n          UART8 (OSD)\n        </li></ul> \n        \n        <h2>\n          PX4 부트 로더 문제\n        </h2>\n        \n        <p>\n          By default a mRo X2.1 might come preconfigured for ArduPilot<sup>&reg;</sup> rather than PX4. This can be seen during firmware update when the board is recognized as FMUv2 instead of X2.1.\n        </p>\n        \n        <p>\n          In this case you must update the BootLoader using <a href="https://github.com/PX4/px4_user_guide/raw/master/assets/hardware/BL_Update_X21.zip">BL_Update_X21.zip</a>. If this correction is not carried out your compass direction will be wrong and the secondary IMU will not be detected.\n        </p>\n        \n        <p>\n          The update steps are:\n        </p>\n        \n        <ol start="1">\n          <li>\n            <a href="https://github.com/PX4/px4_user_guide/raw/master/assets/hardware/BL_Update_X21.zip"> BL_Update_X21.zip </ 0>을 다운로드하고 추출하십시오.</li> \n            \n            <li>\n              <em> BL_Update_X21 </ 0> 폴더를 찾으십시오. 여기에는 <strong> rc.txt </ 0> 파일이 들어있는 <strong> bin </ 0> 파일과 <strong> / etc </ 0>이라는 하위 폴더가 있습니다</li> \n              \n              <li>\n                이 파일을 마이크로 SD 카드의 루트 디렉토리에 복사 한 다음 mRO x2.1에 삽입하십시오.\n              </li>\n              \n              <li>\n                Mro x2.1의 전원을 켜십시오. 부팅 할 때까지 기다렸다가 한 번 재부팅하십시오.\n              </li></ol> \n              \n              <h2>\n                Availability\n              </h2>\n              \n              <p>\n                This product can be ordered at the <a href="https://store.mrobotics.io/mRo-X2-1-Rev-2-p/mro-x2.1rv2-mr.htm">mRobotics<sup>&reg;</sup> Store</a>.\n              </p>\n              \n              <h2>\n                Wiring Guide\n              </h2>\n              \n              <p>\n                <img src="../../assets/flight_controller/mro/mro_x21_wiring.png" alt="mRo_X2.1_Wiring" />\n              </p>\n              \n              <h2>\n                Building Firmware\n              </h2>\n              \n              <p>\n                :::tip Most users will not need to build this firmware! It is pre-built and automatically installed by <em>QGroundControl</em> when appropriate hardware is connected.\n')])])])])])]),n._v(" "),r("p",[n._v(":::\n")]),r("p"),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('                  <p>\n                    To <a href="../dev_setup/building_px4.md">build PX4</a> for this target:\n                  </p>\n                  \n                  <pre><code>make mro_x21_default\n')])])]),r("p"),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('                  <h2>\n                    Schematics\n                  </h2>\n                  \n                  <p>\n                    The board is documented on the mRo hardware repo: <a href="https://github.com/mRoboticsIO/Hardware/blob/master/X2.1/Docs/x21_V2_schematic.pdf">x21_V2_schematic.pdf</a>.\n                  </p>\n                  \n                  <h2>\n                    Serial Port Mapping\n                  </h2>\n                  \n                  <table>\n                    <tr>\n                      <th>\n                        UART\n                      </th>\n                      \n                      <th>\n                        Device\n                      </th>\n                      \n                      <th>\n                        Port\n                      </th>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        USART1\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS0\n                      </td>\n                      \n                      <td>\n                        IO debug\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        USART2\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS1\n                      </td>\n                      \n                      <td>\n                        SERIAL1\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        USART3\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS2\n                      </td>\n                      \n                      <td>\n                        TELEM2\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        UART4\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS3\n                      </td>\n                      \n                      <td>\n                        GPS/I2C\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        USART6\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS4\n                      </td>\n                      \n                      <td>\n                        PX4IO\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        UART7\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS5\n                      </td>\n                      \n                      <td>\n                        SERIAL5 CONSOLE\n                      </td>\n                    </tr>\n                    \n                    <tr>\n                      <td>\n                        UART8\n                      </td>\n                      \n                      <td>\n                        /dev/ttyS6\n                      </td>\n                      \n                      <td>\n                        SERIAL4\n                      </td>\n                    </tr>\n                  </table>')])])])])}),[],!1,null,null,null);t.default=i.exports},744:function(n,t,e){n.exports=e.p+"assets/img/mro_x2.1.791ba315.jpg"}}]);