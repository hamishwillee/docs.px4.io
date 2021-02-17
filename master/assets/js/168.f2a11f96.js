(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{2006:function(n,t,e){"use strict";e.r(t);var r=e(18),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h1",{attrs:{id:"mindpx-하드웨어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mindpx-하드웨어"}},[n._v("#")]),n._v(" MindPX 하드웨어")]),n._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[n._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](http://mindpx.net) for hardware support or compliance issues.")])]),n._v(" "),r("p",[n._v("The AirMind"),r("sup",[n._v("®")]),n._v(" "),r("a",{attrs:{href:"http://mindpx.net",target:"_blank",rel:"noopener noreferrer"}},[n._v("MindPX"),r("OutboundLink")],1),n._v(" series is a new generation autopilot system branched from Pixhawk"),r("sup",[n._v("®")]),n._v(".")]),n._v(" "),r("p",[r("img",{attrs:{src:e(728),alt:"MindPX Controller"}})]),n._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[n._v("Note")]),n._v(" "),r("p",[n._v("These flight controllers are "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[n._v("manufacturer supported")]),n._v(".")],1)]),n._v(" "),r("h2",{attrs:{id:"quick-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[n._v("#")]),n._v(" Quick Summary")]),n._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[n._v("Note")]),n._v(" "),r("p",[n._v("The main hardware documentation is "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/Specification9.18_3_pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[n._v("here"),r("OutboundLink")],1),n._v(".")])]),n._v(" "),r("p",[n._v("MindPX is a new generation autopilot system branched from Pixhawk"),r("sup",[n._v("®")]),n._v(", been revised in schematic and structure, and been further enhanced with new features to make un-manned vehicle more smart and more friendly to use.")]),n._v(" "),r("p",[n._v("MindPX increases total PWM output channels to 16 (8 main outputs + 8 aux outputs). This means that MindPX can support more complicated VTOL configurations and more fine control. It is especially meaningful for those FMU-V4 based flight controllers as MindPX implements main and aux output in one single FMU.")]),n._v(" "),r("p",[r("img",{attrs:{src:e(729),alt:""}})]),n._v(" "),r("ul",[r("li",[r("p",[n._v("메인 시스템 - 온 - 칩 : STM32F427")]),n._v(" "),r("ul",[r("li",[r("p",[n._v("CPU : 32 비트, 168 MHz ARM 코어 텍스 "),r("sup",[n._v(" & reg; </ 0> FPU 포함 M4")])])]),r("p"),n._v(" "),r("li",[n._v("\n  RAM : 256KB SRAM\n")]),n._v(" "),r("li",[n._v("\n  2MB 플래시\n")]),n._v(" "),r("li",[n._v("\n  ST 마이크로 LSM303D 14 비트 가속도계 / 자력계\n")]),n._v(" "),r("li",[n._v("\n  MEAS MS5611 barometer\n")]),n._v(" "),r("li",[n._v("\n  InvenSense "),r("sup",[n._v(" 및 reg; </ 0> MPU6500 통합 6 축 센서 ")])])])]),n._v(" "),r("li",[r("p",[n._v("\n      강조 표시된 기능 :\n    ")]),n._v(" "),r("ul",[r("li",[n._v("\n        CNC 가공 알루미늄 합금 케이스, 가볍고 견고한\n      ")]),n._v(" "),r("li",[n._v("\n        내장 IMU 이중화 내장\n      ")]),n._v(" "),r("li",[n._v("\n        총 16 개의 PWM 출력 채널 (8 main + 8 aux)\n      ")]),n._v(" "),r("li",[n._v("\n        플로우 연결을위한 여분의 I2C 포트 1 개.\n      ")]),n._v(" "),r("li",[n._v("\n        컴패니언 컴퓨터 연결 용 추가 USB 포트 1 개 (내장 UART-USB 변환기)\n      ")]),n._v(" "),r("li",[n._v("\n        개발 용으로 공개 된 디버그 포트\n      ")])])])]),n._v(" "),r("h2",[n._v("\n    퀵 스타트\n  ")]),n._v(" "),r("h3",[n._v("\n    설치\n  ")]),n._v(" "),r("p",[r("img",{attrs:{src:e(730),alt:"MindPX Mounting"}})]),n._v(" "),r("h3",[n._v("\n    Wiring\n  ")]),n._v(" "),r("p",[r("img",{attrs:{src:e(731),alt:"MindPX Wiring 1"}})]),n._v(" "),r("p",[r("img",{attrs:{src:e(732),alt:"MindPX Wiring 2"}})]),n._v(" "),r("h3",[n._v("\n    Pin\n  ")]),n._v(" "),r("p",[r("img",{attrs:{src:e(733),alt:"MindPX Pinout"}})]),n._v(" "),r("table",[r("tr",[r("th",{attrs:{align:"center"}},[n._v("\n        Num.\n      ")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('  <th align="center">\n    Description\n  </th>\n  \n  <th align="center">\n    Num.\n  </th>\n  \n  <th align="center">\n    Description\n  </th>\n</tr>\n\n<tr>\n  <td align="center">\n    1\n  </td>\n  \n  <td align="center">\n    Power\n  </td>\n  \n  <td align="center">\n    9\n  </td>\n  \n  <td align="center">\n    I2C2 (MindFLow)\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    2\n  </td>\n  \n  <td align="center">\n    디버그 (부트 로더 새로 고침)\n  </td>\n  \n  <td align="center">\n    10\n  </td>\n  \n  <td align="center">\n    USB2 (직렬 2 - USB)\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    3\n  </td>\n  \n  <td align="center">\n    USB1 (펌웨어 새로 고침)\n  </td>\n  \n  <td align="center">\n    11\n  </td>\n  \n  <td align="center">\n    UART4,5\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    4\n  </td>\n  \n  <td align="center">\n    다시 놓기\n  </td>\n  \n  <td align="center">\n    12\n  </td>\n  \n  <td align="center">\n    UART1 (Telemetry) Context | Request Context\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    5\n  </td>\n  \n  <td align="center">\n    UART3 (GPS)\n  </td>\n  \n  <td align="center">\n    13\n  </td>\n  \n  <td align="center">\n    할수있다\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    6\n  </td>\n  \n  <td align="center">\n    I2C1 (외부 나침반)\n  </td>\n  \n  <td align="center">\n    14\n  </td>\n  \n  <td align="center">\n    ADC\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    7\n  </td>\n  \n  <td align="center">\n    TF 카드 슬롯\n  </td>\n  \n  <td align="center">\n    15\n  </td>\n  \n  <td align="center">\n    삼색 빛\n  </td>\n</tr>\n\n<tr>\n  <td align="center">\n    8\n  </td>\n  \n  <td align="center">\n    NRF / SPI (원격 제어)\n  </td>\n  \n  <td align="center">\n    16\n  </td>\n  \n  <td align="center">\n    자벌레\n  </td>\n</tr>\n')])])])])]),n._v(" "),r("h3",[n._v("\n    라디오 수신기\n  ")]),n._v(" "),r("p",[n._v("\n    MindPX supports a wide variety of radio receivers (since V2.6) including: PPM/SBUS/DSM/DSM2/DSMX. MindPX also support FrSky"),r("sup",[n._v("®")]),n._v(" bi-direction telemetry D and S.Port.\n  ")]),n._v(" "),r("p",[n._v("\n    For detailed Pin diagram, please refer to the "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/UserGuide9.18_2_pdf.pdf"}},[n._v("User Guide")]),n._v(".\n  ")]),n._v(" "),r("h3",[n._v("\n    Building Firmware\n  ")]),n._v(" "),r("p"),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[n._v("TIP")]),n._v(" "),r("p",[n._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),r("em",[n._v("QGroundControl")]),n._v(" when appropriate hardware is connected.")])]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('  </p>\n  \n  <p>\n    To <a href="../dev_setup/building_px4.md">build PX4</a> for this target:\n  </p>\n  \n  <pre><code>make airmind_mindpx-v2_default\n')])])]),r("p"),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v("  <h3>\n    컴패니언 PC 연결\n  </h3>\n  \n  <p>\n    MindPX has a USB-TO-UART Bridge IC on the board. A micro-USB to USB type A cable is used for the connection. Connect micro-USB end to the 'OBC' port of MindPX and USB type A end to companion computer.\n  </p>\n  \n  <p>\n    And the max BAUD rate is the same with px4 family, which is up to 921600.\n  </p>\n  \n  <h2>\n    User Guide\n  </h2>\n  \n  <p>\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[n._v("Note")]),n._v(" "),r("p",[n._v("The user guide is "),r("a",{attrs:{href:"http://mindpx.net/assets/accessories/UserGuide9.18_2_pdf.pdf"}},[n._v("here")]),n._v(".")])]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('  </p>\n  \n  <h2>\n    Where to Buy\n  </h2>\n  \n  <p>\n    MindRacer is available at <a href="http://drupal.xitronet.com/?q=catalog">AirMind Store</a> on internet. You can also find MindRacer at Amazon<sup>&reg;</sup> or eBay<sup>&reg;</sup>.\n  </p>\n  \n  <h2>\n    Serial Port Mapping\n  </h2>\n  \n  <table>\n    <tr>\n      <th>\n        UART\n      </th>\n      \n      <th>\n        Device\n      </th>\n      \n      <th>\n        Port\n      </th>\n    </tr>\n    \n    <tr>\n      <td>\n        USART1\n      </td>\n      \n      <td>\n        /dev/ttyS0\n      </td>\n      \n      <td>\n        RC\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        USART2\n      </td>\n      \n      <td>\n        /dev/ttyS1\n      </td>\n      \n      <td>\n        TELEM1\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        USART3\n      </td>\n      \n      <td>\n        /dev/ttyS2\n      </td>\n      \n      <td>\n        TELEM2\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        UART4\n      </td>\n      \n      <td>\n        /dev/ttyS3\n      </td>\n      \n      <td>\n        GPS1\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        USART6\n      </td>\n      \n      <td>\n        /dev/ttyS4\n      </td>\n      \n      <td>\n        ?\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        UART7\n      </td>\n      \n      <td>\n        /dev/ttyS5\n      </td>\n      \n      <td>\n        Debug Console\n      </td>\n    </tr>\n    \n    <tr>\n      <td>\n        UART8\n      </td>\n      \n      <td>\n        /dev/ttyS6\n      </td>\n      \n      <td>\n        ?\n      </td>\n    </tr>\n  </table>\n  \n  <h2>\n    Support\n  </h2>\n  \n  <p>\n    Please visit http://www.mindpx.org for more information. Or you can send email to <a href="mailto:support@mindpx.net">support@mindpx.net</a> for any inquiries or help.\n  </p>')])])])])}),[],!1,null,null,null);t.default=a.exports},728:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx.bbb3deed.png"},729:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx-specs.2c2fbd47.png"},730:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx-mounting.dec7f92b.png"},731:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx-wiring1.4a8aa4ba.png"},732:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx-wiring2.6635da8b.png"},733:function(n,t,e){n.exports=e.p+"assets/img/hardware-mindpx-pin.a1408fc8.png"}}]);