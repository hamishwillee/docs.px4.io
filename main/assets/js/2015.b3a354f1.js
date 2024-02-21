(window.webpackJsonp=window.webpackJsonp||[]).push([[2015],{3675:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-系列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-系列"}},[e._v("#")]),e._v(" Pixhawk 系列")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk"),r("sup",[e._v("®")]),r("OutboundLink")],1),e._v(" is an independent open-hardware project providing readily-available, low-cost, and high-end, "),r("em",[e._v("autopilot hardware designs")]),e._v(" to the academic, hobby and industrial communities.")]),e._v(" "),r("p",[e._v("Pixhawk is the reference hardware platform for PX4, and runs PX4 on the "),r("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NuttX"),r("OutboundLink")],1),e._v(" OS.")]),e._v(" "),r("p",[e._v("Manufacturers have created many different boards based on the open designs, with form factors that are optimised for applications from cargo carrying though to first person view (FPV) racers.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("For computationally intensive tasks (e.g. computer vision) you will need a separate companion computer (e.g. "),r("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_navio2.html"}},[e._v("Raspberry Pi 2/3 Navio2")]),e._v(") or a platform with an integrated companion solution.")],1)]),e._v(" "),r("h2",{attrs:{id:"key-benefits"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-benefits"}},[e._v("#")]),e._v(" Key Benefits")]),e._v(" "),r("p",[e._v("Key benefits of using a "),r("em",[e._v("Pixhawk series")]),e._v(" controller include:")]),e._v(" "),r("ul",[r("li",[e._v("Software support - as PX4 reference hardware these are our best-maintained boards.")]),e._v(" "),r("li",[e._v("Flexibility in terms of hardware peripherals that can be attached.")]),e._v(" "),r("li",[e._v("High quality.")]),e._v(" "),r("li",[e._v("Highly customizable in terms of form factor.")]),e._v(" "),r("li",[e._v("Widely-used and thus well-tested/stable.")]),e._v(" "),r("li",[e._v("Automated update of latest firmware via "),r("em",[e._v("QGroundControl")]),e._v(" (end-user friendly).")])]),e._v(" "),r("h2",{attrs:{id:"支持的飞控板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的飞控板"}},[e._v("#")]),e._v(" 支持的飞控板")]),e._v(" "),r("p",[e._v("The PX4 Project uses "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[e._v("Pixhawk Standard Autopilots")]),e._v(" as reference hardware. These are the controllers that are fully compatible with the Pixhawk standard (including use of trademarks) and that are still being manufactured.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The PX4 maintenance and test teams maintain and support these standard boards.")])]),e._v(" "),r("p",[e._v("Pixhawk-like boards that are not fully compliant with the specification may be "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_manufacturer_supported.html"}},[e._v("manufacturer-supported")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[e._v("experimental/discontinued")]),e._v(", or unsupported.")],1),e._v(" "),r("p",[e._v("The rest of this topic explains a bit more about the Pixhawk series, but is not required reading.")]),e._v(" "),r("h2",{attrs:{id:"background"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk project"),r("OutboundLink")],1),e._v(" creates open hardware designs in the form of schematics, which define a set of components (CPU, sensors, etc.) and their connections/pin mappings.")]),e._v(" "),r("p",[e._v("Manufacturers are encouraged to take the "),r("a",{attrs:{href:"https://github.com/pixhawk/Hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("open designs"),r("OutboundLink")],1),e._v(" and create products that are best suited to a particular market or use case (the physical layout/form factor not part of the open specification). Boards based on the same design are binary compatible.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("While a physical connector standard is not mandated, newer products generally follow the "),r("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk Connector Standard"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("The project also creates reference autopilot boards based on the open designs, and shares them under the same "),r("a",{attrs:{href:"#licensing-and-trademarks"}},[e._v("licence")]),e._v(".")]),e._v(" "),r("p",[r("a",{attrs:{id:"fmu_versions"}})]),e._v(" "),r("h3",{attrs:{id:"fmu-versions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmu-versions"}},[e._v("#")]),e._v(" FMU Versions")]),e._v(" "),r("p",[e._v("The Pixhawk project has created a number of different open designs/schematics. All boards based on a design should be binary compatible (run the same firmware).")]),e._v(" "),r("p",[e._v("Each design is named using the designation: FMUvX (e.g.: FMUv1, FMUv2, FMUv3, FMUv4, etc.). Higher FMU numbers indicate that the board is more recent, but may not indicate increased capability (versions can be almost identical - differing only in connector wiring).")]),e._v(" "),r("p",[e._v("PX4 "),r("em",[e._v("users")]),e._v(" generally do not need to know very much about FMU versions:")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("QGroundControl")]),e._v(' automatically downloads the correct firmware for a connected autopilot (based on its FMU version "under the hood").')]),e._v(" "),r("li",[e._v("Choosing a controller is usually based on physical constraints/form factor rather than FMU version.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The exception is that if you're using FMUv2 firmware it is "),r("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[e._v("limited to 1MB of flash")]),e._v(". In order to fit PX4 into this limited space, many modules are disabled by default. You may find that some "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html#missing"}},[e._v("parameters are missing")]),e._v(' and that some hardware does not work "out of the box".')],1)]),e._v(" "),r("p",[e._v("PX4 "),r("em",[e._v("developers")]),e._v(" need to know the FMU version of their board, as this is required to build custom hardware.")]),e._v(" "),r("p",[e._v("At very high level, the main differences are:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("FMUv2:")]),e._v(" Single board with STM32427VI processor ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[e._v("Pixhawk 1 (Discontinued)")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/holybro_pix32.html"}},[e._v("pix32")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixfalcon.html"}},[e._v("Pixfalcon")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/dropix.html"}},[e._v("Drotek DroPix")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv3:")]),e._v(" Identical to FMUv2, but usable flash doubled to 2MB ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html"}},[e._v("Hex Cube Black")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhack_v3.html"}},[e._v("CUAV Pixhack v3")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[e._v("mRo Pixhawk")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_mini.html"}},[e._v("Pixhawk Mini (Discontinued)")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv4:")]),e._v(" Increased RAM. Faster CPU. More serial ports. No IO processor ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv4-PRO:")]),e._v(" Slightly increased RAM. More serial ports. IO processor ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[e._v("Pixhawk 3 Pro")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv5:")]),e._v(" New processor (F7). Much faster. More RAM. More CAN buses. Much more configurable. ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[e._v("Pixhawk 4")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5.html"}},[e._v("CUAV v5")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_plus.html"}},[e._v("CUAV V5+")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html"}},[e._v("CUAV V5 nano")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv5X:")]),e._v(" New processor (F7). Much faster, Modular design. More reliable. More Redundancy. More RAM (1MB). More CAN buses. Much more configurable & customizable. ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[e._v("Pixhawk 5X")]),e._v(", Skynode)")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv6C:")]),e._v(" ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c_mini.html"}},[e._v("Holybro Pixhawk 6C Mini")]),e._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html"}},[e._v("Holybro Pixhawk 6C")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv6X:")]),e._v(" ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_pixhawk_v6x.html"}},[e._v("CUAV Pixhawk V6X")]),e._v(","),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x.html"}},[e._v("Holybro Pixhawk 6X")]),e._v(")")],1),e._v(" "),r("li",[r("strong",[e._v("FMUv6X-RT:")]),e._v(" Faster MCU core (1GHz) (vs 480Mhz on 6X). More RAM (2Mb). More flash (64Mb) (2Mb on v6X/v5X). ("),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x-rt.html"}},[e._v("Holybro Pixhawk 6X-RT")]),e._v(")")],1)]),e._v(" "),r("p",[r("a",{attrs:{id:"licensing-and-trademarks"}})]),e._v(" "),r("h3",{attrs:{id:"licensing-and-trademarks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#licensing-and-trademarks"}},[e._v("#")]),e._v(" Licensing and Trademarks")]),e._v(" "),r("p",[e._v("Pixhawk project schematics and reference designs are licensed under "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/3.0/legalcode",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-SA 3"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The license allows you to use, sell, share, modify and build on the files in almost any way you like - provided that you give credit/attribution, and that you share any changes that you make under the same open source license (see the "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("human readable version of the license"),r("OutboundLink")],1),e._v(" for a concise summary of the rights and obligations).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Boards that are "),r("em",[e._v("derived directly")]),e._v(" from Pixhawk project schematic files (or reference boards) must be open sourced. They can't be commercially licensed as proprietary products.")])]),e._v(" "),r("p",[e._v("Manufacturers can create (compatible) "),r("em",[e._v("fully independent products")]),e._v(" by first generating fresh schematic files that have the same pin mapping/components as the FMU designs. Products that are based on independently created schematics are considered original works, and can be licensed as required.")]),e._v(" "),r("p",[e._v("Product names/brands can also be trademarked. Trademarked names may not be used without the permission of the owner.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[r("em",[e._v("Pixhawk")]),e._v(" is a trademark, and cannot be used in product names without permission.")])]),e._v(" "),r("h2",{attrs:{id:"附加信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[e._v("#")]),e._v(" 附加信息")]),e._v(" "),r("h3",{attrs:{id:"leds"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#leds"}},[e._v("#")]),e._v(" LEDs")]),e._v(" "),r("p",[e._v("All "),r("em",[e._v("Pixhawk-series")]),e._v(" flight controllers support:")]),e._v(" "),r("ul",[r("li",[e._v("A user facing RGB "),r("em",[e._v("UI LED")]),e._v(" to indicate the current "),r("em",[e._v("readiness to fly")]),e._v(" status of the vehicle. This is typically a superbright I2C peripheral, which may or may not be mounted on the board (i.e. FMUv4 does not have one on board and typically uses an LED mounted on the GPS).")]),e._v(" "),r("li",[e._v("Three "),r("em",[e._v("Status LED")]),e._v("s that provide lower level power status, bootloader mode and activity, and error information.")])]),e._v(" "),r("p",[e._v("To interpret the LEDs see: "),r("RouterLink",{attrs:{to:"/zh/getting_started/led_meanings.html"}},[e._v("LED Meanings")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);