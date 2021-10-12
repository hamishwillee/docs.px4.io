(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1758:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("p",[t._v('This topic shows how to determine the mapping between serial ports (UART), device (e.g. "ttyS0") and specific functions enabled by PX4 (e.g. TELEM1, TELEM2, GPS1, RC SBUS, Debug console).')]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The instructions are used to generate serial port mapping tables in flight controller documentation.\nFor example: "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("Pixhawk 4 > Serial Port Mapping")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"nuttx-on-stmxxyyy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-on-stmxxyyy"}},[t._v("#")]),t._v(" NuttX on STMxxyyy")]),t._v(" "),a("p",[t._v("This section shows how to get the mappings for NuttX builds on STMxxyyy architectures by inspecting the board configuration files.\nThe instructions use FMUv5, but can similarly be extended for other FMU versions/NuttX boards.")]),t._v(" "),a("h3",{attrs:{id:"default-px4board"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-px4board"}},[t._v("#")]),t._v(" default.px4board")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("default.px4board")]),t._v(' lists a number of serial port mappings (search for the text "SERIAL_PORTS").')]),t._v(" "),a("p",[t._v("From "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/default.px4board"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('CONFIG_BOARD_SERIAL_GPS1="/dev/ttyS0"\nCONFIG_BOARD_SERIAL_TEL1="/dev/ttyS1"\nCONFIG_BOARD_SERIAL_TEL2="/dev/ttyS2"\nCONFIG_BOARD_SERIAL_TEL4="/dev/ttyS3"\n')])])]),a("p",[t._v("Alternatively you can launch boardconfig using "),a("code",[t._v("make px4_fmu-v5 boardconfig")]),t._v(" and access the serial port menu")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    Serial ports  ---\x3e\n        (/dev/ttyS0) GPS1 tty port\n        ()  GPS2 tty port\n        ()  GPS3 tty port\n        ()  GPS4 tty port\n        ()  GPS5 tty port\n        (/dev/ttyS1) TEL1 tty port\n        (/dev/ttyS2) TEL2 tty port\n        ()  TEL3 tty port\n        (/dev/ttyS3) TEL4 tty port\n        ()  TEL5 tty port\n")])])]),a("h3",{attrs:{id:"nsh-defconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsh-defconfig"}},[t._v("#")]),t._v(" nsh/defconfig")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("nsh/defconfig")]),t._v(" allows you to determine which ports are defined, whether they are UART or USARTs, and the mapping between USART/UART and device.\nYou can also determine which port is used for the "),a("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("serial/debug console")]),t._v(".")],1),t._v(" "),a("p",[t._v("Open the board's defconfig file, for example: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L191-L197",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/nsh/defconfig"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('Search for the text "ART" until you find a section like with entries formatted like '),a("code",[t._v("CONFIG_STM32xx_USARTn=y")]),t._v(" (where "),a("code",[t._v("xx")]),t._v(" is a processor type and "),a("code",[t._v("n")]),t._v(" is a port number).\nFor example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CONFIG_STM32F7_UART4=y\nCONFIG_STM32F7_UART7=y\nCONFIG_STM32F7_UART8=y\nCONFIG_STM32F7_USART1=y\nCONFIG_STM32F7_USART2=y\nCONFIG_STM32F7_USART3=y\nCONFIG_STM32F7_USART6=y\n")])])]),a("p",[t._v("The entries tell you which ports are defined, and whether they are UART or USART.")]),t._v(" "),a("p",[t._v('Copy the section above and reorder numerically by "n".\nIncrement the device number '),a("em",[t._v("ttyS"),a("strong",[t._v("n")])]),t._v(" alongside (zero based) to get the device-to-serial-port mapping.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y\nttyS1 CONFIG_STM32F7_USART2=y\nttyS2 CONFIG_STM32F7_USART3=y\nttyS3 CONFIG_STM32F7_UART4=y\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y\nttyS6 CONFIG_STM32F7_UART8=y\n")])])]),a("p",[t._v("To get the DEBUG console mapping we search the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig#L212",target:"_blank",rel:"noopener noreferrer"}},[t._v("defconfig file"),a("OutboundLink")],1),t._v(" for "),a("code",[t._v("SERIAL_CONSOLE")]),t._v(".\nBelow we see that the console is on UART7:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CONFIG_UART7_SERIAL_CONSOLE=y\n")])])]),a("h3",{attrs:{id:"board-config-h"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#board-config-h"}},[t._v("#")]),t._v(" board_config.h")]),t._v(" "),a("p",[t._v("For flight controllers that have an IO board, determine the PX4IO connection from "),a("strong",[t._v("board_config.h")]),t._v(" by searching for "),a("code",[t._v("PX4IO_SERIAL_DEVICE")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/board_config.h#L59",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/src/board_config.h"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#define PX4IO_SERIAL_DEVICE            "/dev/ttyS6"\n#define PX4IO_SERIAL_TX_GPIO           GPIO_UART8_TX\n#define PX4IO_SERIAL_RX_GPIO           GPIO_UART8_RX\n#define PX4IO_SERIAL_BASE              STM32_UART8_BASE\n')])])]),a("p",[t._v("So the PX4IO is on "),a("code",[t._v("ttyS6")]),t._v(" (we can also see that this maps to UART8, which we already knew from the preceding section).")]),t._v(" "),a("h3",{attrs:{id:"putting-it-all-together"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#putting-it-all-together"}},[t._v("#")]),t._v(" Putting it all together")]),t._v(" "),a("p",[t._v("The final mapping is:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ttyS0 CONFIG_STM32F7_USART1=y GPS1\nttyS1 CONFIG_STM32F7_USART2=y TEL1\nttyS2 CONFIG_STM32F7_USART3=y TEL2\nttyS3 CONFIG_STM32F7_UART4=y TEL4\nttyS4 CONFIG_STM32F7_USART6=y\nttyS5 CONFIG_STM32F7_UART7=y DEBUG\nttyS6 CONFIG_STM32F7_UART8=y PX4IO\n")])])]),a("p",[t._v("In the "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html#serial-port-mapping"}},[t._v("flight controller docs")]),t._v(" the resulting table is:")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("Device")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("GPS")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("TELEM4")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("RC SBUS")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("Debug Console")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("PX4IO")])])])]),t._v(" "),a("h2",{attrs:{id:"other-architectures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-architectures"}},[t._v("#")]),t._v(" Other Architectures")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Contributions welcome!")])])])}),[],!1,null,null,null);e.default=o.exports}}]);