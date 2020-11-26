(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{2007:function(t,v,_){"use strict";_.r(v);var r=_(18),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"rpi-pilotpi-shield"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rpi-pilotpi-shield"}},[t._v("#")]),t._v(" RPi PilotPi Shield")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot. Contact the "),r("a",{attrs:{href:"mailto:lhf2613@gmail.com"}},[t._v("manufacturer")]),t._v(" for hardware support or compliance issues.")])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 support for this flight controller is "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("experimental")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("PilotPi")]),t._v(" shield is a fully functional solution to run PX4 autopilot directly on Raspberry Pi. It is designed to be a low-cost but highly scalability platform with continuous updates from both Linux and PX4 sides. No proprietary driver is required, as all components have upstream support from RPi and PX4 community. PCB and schematic are open source as well.")]),t._v(" "),r("p",[r("img",{attrs:{src:_(879),alt:"PilotPi with RPi 4B"}})]),t._v(" "),r("h2",{attrs:{id:"quick-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-summary"}},[t._v("#")]),t._v(" Quick Summary")]),t._v(" "),r("ul",[r("li",[t._v("Supported RPi boards:\n"),r("ul",[r("li",[t._v("Raspberry Pi 2B/3B/3B+/4B")])])]),t._v(" "),r("li",[t._v("Supported OS:\n"),r("ul",[r("li",[t._v("Raspberry Pi OS")]),t._v(" "),r("li",[t._v("Ubuntu Server (armhf/arm64)")])])]),t._v(" "),r("li",[t._v("Accelerometer / Gyro:\n"),r("ul",[r("li",[t._v("ICM42688P")])])]),t._v(" "),r("li",[t._v("Magnetometer:\n"),r("ul",[r("li",[t._v("IST8310")])])]),t._v(" "),r("li",[t._v("Barometer:\n"),r("ul",[r("li",[t._v("MS5611")])])]),t._v(" "),r("li",[t._v("PWM:\n"),r("ul",[r("li",[t._v("PCA9685")])])]),t._v(" "),r("li",[t._v("ADC:\n"),r("ul",[r("li",[t._v("ADS1115")])])]),t._v(" "),r("li",[t._v("Power:\n"),r("ul",[r("li",[t._v("3~6S battery with built-in voltage sensing.")]),t._v(" "),r("li",[t._v("Power the Pi through USB cable")])])]),t._v(" "),r("li",[t._v("Availability: "),r("em",[t._v("preparing for shipping")])])]),t._v(" "),r("h2",{attrs:{id:"connectivity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connectivity"}},[t._v("#")]),t._v(" Connectivity")]),t._v(" "),r("p",[t._v("Shield provides:")]),t._v(" "),r("ul",[r("li",[t._v("16x PWM outputting channels")]),t._v(" "),r("li",[t._v("GPS connector")]),t._v(" "),r("li",[t._v("Telemetry connector")]),t._v(" "),r("li",[t._v("External I2C bus connector ("),r("strong",[t._v("Note:")]),t._v(" conflicts with CSI camera)")]),t._v(" "),r("li",[t._v("RC input port (SBUS)")]),t._v(" "),r("li",[t._v("3x ADC channels range 0~5V")]),t._v(" "),r("li",[t._v("2*8 2.54mm unused GPIO connector")])]),t._v(" "),r("p",[t._v("Direct accessible from RPi:")]),t._v(" "),r("ul",[r("li",[t._v("4x USB connector")]),t._v(" "),r("li",[t._v("CSI connector("),r("strong",[t._v("Note:")]),t._v(" conflict with external I2C bus)")]),t._v(" "),r("li",[t._v("etc.")])]),t._v(" "),r("h2",{attrs:{id:"recommended-wiring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recommended-wiring"}},[t._v("#")]),t._v(" Recommended Wiring")]),t._v(" "),r("p",[r("img",{attrs:{src:_(880),alt:"PilotPi PowerPart wiring"}})]),t._v(" "),r("p",[r("img",{attrs:{src:_(881),alt:"PilotPi SensorPart wiring"}})]),t._v(" "),r("h2",{attrs:{id:"pinout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinout"}},[t._v("#")]),t._v(" Pinout")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Warning")]),t._v(" It still uses old GH1.25 connectors. Wiring is compatible with Pixhawk 2.4.8")])]),t._v(" "),r("h3",{attrs:{id:"connectors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[t._v("#")]),t._v(" Connectors")]),t._v(" "),r("h4",{attrs:{id:"gps-connector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-connector"}},[t._v("#")]),t._v(" GPS connector")]),t._v(" "),r("p",[t._v("Mapped to "),r("code",[t._v("/dev/ttySC0")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("TX")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("RX")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("NC")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("NC")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h4",{attrs:{id:"telemetry-connector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-connector"}},[t._v("#")]),t._v(" Telemetry connector")]),t._v(" "),r("p",[t._v("Mapped to "),r("code",[t._v("/dev/ttySC1")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("TX")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("RX")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("CTS")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("RTS")]),t._v(" "),r("td",[t._v("+3v3")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h4",{attrs:{id:"external-i2c-connector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#external-i2c-connector"}},[t._v("#")]),t._v(" External I2C connector")]),t._v(" "),r("p",[t._v("Mapped to "),r("code",[t._v("/dev/i2c-0")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("+3v3(pullups)")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("+3v3(pullups)")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h4",{attrs:{id:"rc-adc2-3-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-adc2-3-4"}},[t._v("#")]),t._v(" RC & ADC2/3/4")]),t._v(" "),r("p",[t._v("RC is mapped to "),r("code",[t._v("/dev/ttyAMA0")]),t._v(" with signal inverter switch on RX line.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("RC")]),t._v(" "),r("td",[t._v("+3V3~+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("ul",[r("li",[t._v("ADC1 is internally connected to voltage divider for battery voltage monitoring.")]),t._v(" "),r("li",[t._v("ADC2 is left unused.")]),t._v(" "),r("li",[t._v("ADC3 can be connected to an analog airspeed sensor.")]),t._v(" "),r("li",[t._v("ADC4 has a jumper cap between ADC and VCC, to monitor system voltage level.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("ADCx")]),t._v(" "),r("td",[t._v("0V~+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" ADC3 & 4 have an alternative VCC source When 'Vref' switch is on, 'VCC' pin is driven by REF5050.")])]),t._v(" "),r("h4",{attrs:{id:"unused-gpio-available-on-top-of-the-board"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unused-gpio-available-on-top-of-the-board"}},[t._v("#")]),t._v(" Unused GPIO available on top of the board")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Shield Pin")]),t._v(" "),r("th",[t._v("BCM")]),t._v(" "),r("th",[t._v("WiringPi")]),t._v(" "),r("th",[t._v("RPi Pin")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("3V3")]),t._v(" "),r("td",[t._v("3v3")]),t._v(" "),r("td",[t._v("3V3")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("5V")]),t._v(" "),r("td",[t._v("5V")]),t._v(" "),r("td",[t._v("5V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("7")]),t._v(" "),r("td",[t._v("7")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("14")]),t._v(" "),r("td",[t._v("15")]),t._v(" "),r("td",[t._v("8")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("17")]),t._v(" "),r("td",[t._v("0")]),t._v(" "),r("td",[t._v("11")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("27")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("13")])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("22")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("15")])]),t._v(" "),r("tr",[r("td",[t._v("8")]),t._v(" "),r("td",[t._v("23")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("16")])]),t._v(" "),r("tr",[r("td",[t._v("9")]),t._v(" "),r("td",[t._v("7")]),t._v(" "),r("td",[t._v("11")]),t._v(" "),r("td",[t._v("26")])]),t._v(" "),r("tr",[r("td",[t._v("10")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("21")]),t._v(" "),r("td",[t._v("29")])]),t._v(" "),r("tr",[r("td",[t._v("11")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("22")]),t._v(" "),r("td",[t._v("31")])]),t._v(" "),r("tr",[r("td",[t._v("12")]),t._v(" "),r("td",[t._v("12")]),t._v(" "),r("td",[t._v("26")]),t._v(" "),r("td",[t._v("32")])]),t._v(" "),r("tr",[r("td",[t._v("13")]),t._v(" "),r("td",[t._v("13")]),t._v(" "),r("td",[t._v("23")]),t._v(" "),r("td",[t._v("33")])]),t._v(" "),r("tr",[r("td",[t._v("14")]),t._v(" "),r("td",[t._v("16")]),t._v(" "),r("td",[t._v("27")]),t._v(" "),r("td",[t._v("36")])]),t._v(" "),r("tr",[r("td",[t._v("15")]),t._v(" "),r("td",[t._v("26")]),t._v(" "),r("td",[t._v("25")]),t._v(" "),r("td",[t._v("37")])]),t._v(" "),r("tr",[r("td",[t._v("16")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h3",{attrs:{id:"switches"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#switches"}},[t._v("#")]),t._v(" Switches")]),t._v(" "),r("h4",{attrs:{id:"rc-inverter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-inverter"}},[t._v("#")]),t._v(" RC Inverter")]),t._v(" "),r("p",[t._v("This switch will decide the signal polarity of RX line: "),r("code",[t._v("UART_RX = SW xor RC_INPUT")])]),t._v(" "),r("ul",[r("li",[t._v("On: suitable with SBUS (signal inverted)")]),t._v(" "),r("li",[t._v("Off: preserved")])]),t._v(" "),r("h4",{attrs:{id:"vref"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vref"}},[t._v("#")]),t._v(" Vref")]),t._v(" "),r("p",[t._v("ADC 3 & 4 will have VCC driven by:")]),t._v(" "),r("ul",[r("li",[t._v("Vref output from REF5050 if on")]),t._v(" "),r("li",[t._v("5V pin directly from RPi if off")])]),t._v(" "),r("h4",{attrs:{id:"boot-mode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-mode"}},[t._v("#")]),t._v(" Boot Mode")]),t._v(" "),r("p",[t._v("This switch is connected to Pin22(BCM25). System rc script will check its value and decide whether PX4 should start alongside with system booting or not.")]),t._v(" "),r("ul",[r("li",[t._v("On: start PX4 automatically")]),t._v(" "),r("li",[t._v("Off: don' t start PX4")])]),t._v(" "),r("h2",{attrs:{id:"developer-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-quick-start"}},[t._v("#")]),t._v(" Developer Quick Start")]),t._v(" "),r("p",[t._v("Refer to specific instructions for the OS running on your RPi:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_rpios.html"}},[t._v("Raspberry Pi OS Lite (armhf)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_ubuntu_server.html"}},[t._v("Ubuntu Server (arm64 & armhf)")])],1)])])}),[],!1,null,null,null);v.default=e.exports},879:function(t,v,_){t.exports=_.p+"assets/img/hardware-pilotpi4b.f6daa9bb.png"},880:function(t,v,_){t.exports=_.p+"assets/img/pilotpi_pwr_wiring.19c73603.png"},881:function(t,v,_){t.exports=_.p+"assets/img/pilotpi_sens_wiring.dee9cc62.png"}}]);