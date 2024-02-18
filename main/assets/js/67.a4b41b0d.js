(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{3558:function(t,e,a){"use strict";a.r(e);var i=a(19),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"stlink-debug-probe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#stlink-debug-probe"}},[t._v("#")]),t._v(" STLink Debug Probe")]),t._v(" "),i("p",[t._v("The "),i("a",{attrs:{href:"https://www.st.com/en/development-tools/stlink-v3minie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STLinkv3-MINIE"),i("OutboundLink")],1),t._v(" is a cheap, fast and highly capable debug probe that can serve as a stand-alone debug and console communicator for a PX4 developer:")]),t._v(" "),i("ul",[i("li",[t._v("Just one single USB-C connection for Reset, SWD, SWO, and serial in a very small package!")]),t._v(" "),i("li",[t._v("Up to 24MHz SWD and SWO connection. Up to 16 MBaud serial. 1.65V to 3.6V target voltage. USB2 high-speed 480 Mbps connection.")]),t._v(" "),i("li",[t._v("Driven by STLink or OpenOCD software with wide device support.")]),t._v(" "),i("li",[t._v("Much cheaper (<15€) than a Pixhawk Debug Adapter (~20€) with a JLink EDU mini (~55€) or JLink BASE (~400€) while having better hardware specs.")])]),t._v(" "),i("p",[t._v("The STLink Debug Probe does not come with an adapter for working with Pixhawk flight controllers. The "),i("a",{attrs:{href:"#pixhawk-debug-port-adapter"}},[t._v("Pixhawk Debug Port Adapter")]),t._v(" section below explains how you can create your own (some soldering required).")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("The "),i("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#cuav-c-adb-pixhawk-debug-adapter"}},[t._v("CUAV C-ADB Pixhawk Debugging Adapter")]),t._v(" (~65€) comes with an STLinkv3-MINIE! This has a connector for the "),i("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")]),t._v(" 10-pin SH port (but not the "),i("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(").")],1)]),t._v(" "),i("h2",{attrs:{id:"debugging-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging-configuration"}},[t._v("#")]),t._v(" Debugging Configuration")]),t._v(" "),i("p",[t._v("The STLink provides the "),i("a",{attrs:{href:"https://openocd.org/doc-release/html/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GDB server via OpenOCD"),i("OutboundLink")],1),t._v(":")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ubuntu")]),t._v("\n"),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openocd\n"),i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# macOS")]),t._v("\nbrew "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" open-ocd\n")])])]),i("p",[t._v("You can launch the GDB server in a new terminal shell:")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("openocd -f interface/stlink.cfg -f target/stm32f7x.cfg\n")])])]),i("p",[t._v("The config file needs to be:")]),t._v(" "),i("ul",[i("li",[t._v("FMUv2-v4: "),i("code",[t._v("-f target/stm32f4x.cfg")])]),t._v(" "),i("li",[t._v("FMUv5: "),i("code",[t._v("-f target/stm32f7x.cfg")])]),t._v(" "),i("li",[t._v("FMUv6: "),i("code",[t._v("-f target/stm32h7x.cfg")])])]),t._v(" "),i("p",[t._v("You can then connect to port 3333 via GDB:")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("arm-none-eabi-gdb build/px4_fmu-v5x_default/px4_fmu-v5x_default.elf -ex "),i("span",{pre:!0,attrs:{class:"token string"}},[t._v('"target extended-remote :3333"')]),t._v("\n")])])]),i("p",[t._v("See the "),i("a",{attrs:{href:"https://pypi.org/project/emdbg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Embedded Debug Tools"),i("OutboundLink")],1),t._v(" for more advanced debug options.")]),t._v(" "),i("h2",{attrs:{id:"pixhawk-debug-port-adapter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-port-adapter"}},[t._v("#")]),t._v(" Pixhawk Debug Port Adapter")]),t._v(" "),i("p",[t._v("To connect to the Pixhawk Debug Port, you need to solder an adapter (unless using the "),i("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#cuav-c-adb-pixhawk-debug-adapter"}},[t._v("CUAV Debug Adaptor")]),t._v(").")],1),t._v(" "),i("p",[t._v("For this solder guide you need:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("1x "),i("a",{attrs:{href:"https://www.st.com/en/development-tools/stlink-v3minie.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STLinkv3-MINIE"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("li",[i("p",[t._v("1x cable connector for mating with "),i("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A10SR10SR30K203A",target:"_blank",rel:"noopener noreferrer"}},[t._v("JST SM10B (Full)"),i("OutboundLink")],1),t._v(" or "),i("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A06SR06SR30K152A",target:"_blank",rel:"noopener noreferrer"}},[t._v("JST SM06B (Mini)"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[t._v("We recommend buying fully assembled cables with two connectors on either side.")])]),t._v(" "),i("li",[i("p",[t._v("1x soldering iron and solder.")])]),t._v(" "),i("li",[i("p",[t._v("Some tongs, cutting pliers, and tweezers.")])])]),t._v(" "),i("p",[t._v("The "),i("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Debug Port is standardized in DS-009"),i("OutboundLink")],1),t._v(" and needs to be connected to the STLinkv3-MINIE Board-To-Board (BTB) card edge connector CN2. The pinout mapping is described here:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"right"}},[t._v("#Full")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("#Mini")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk Debug")]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[t._v("STLinkv3")]),t._v(" "),i("th",{staticStyle:{"text-align":"right"}},[t._v("#BTB")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("VREF")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("VCC")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("10")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Console TX (out)")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("TX (in)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("8")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("Console RX (in)")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RX (out)")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("7")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("SWDIO")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("TMS")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("3")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("SWCLK")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("CLK")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("4")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("SWO")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("TDO")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("5")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("7")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO1")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("8")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO2")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right"}})]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("9")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("nRST")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("RST")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("9")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("10")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("GND")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("GND")]),t._v(" "),i("td",{staticStyle:{"text-align":"right"}},[t._v("6")])])])]),t._v(" "),i("p",[t._v("The GPIO1/2 pins are not supported by the STLinkv3, and we recommend using digital ITM profiling over SWO which is much more flexible and supports cycle accurate timestamping.")]),t._v(" "),i("p",[t._v("You can choose to solder a short or long cable to the BTB connector. The short cable is better for high-speed communication, but is more difficult to solder. We recommend soldering the long cable first and testing how fast you can communicate with your target.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("This guide is written for the full 10-pin debug port. If you want to solder the mini 6-pin version, just leave out the signals you don't have. The STLink supports any SWD/JTAG-based debug interface, so you can adapt this guide for any other connector you may have. The debug probes are so cheap, you can just have one per connector instead of using adapters.")])]),t._v(" "),i("p",[t._v("This is how the STLinkv3-MINIE is delivered.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(731),alt:""}})]),t._v(" "),i("p",[t._v("Unwrap the PCB and check it for any damage. Plug it in and see if it powers on correctly.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(732),alt:""}})]),t._v(" "),i("h3",{attrs:{id:"short-cable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#short-cable"}},[t._v("#")]),t._v(" Short Cable")]),t._v(" "),i("p",[t._v("The short cable requires a wire cutter and stripper and requires a little more soldering skill. However, it makes the entire debug probe even smaller.")]),t._v(" "),i("p",[t._v("Assemble a 10-pin connector without GPIO1/2. If you already have an assembled cable, carefully remove the two GPIO1/2 cables with a tweezer by lifting the pegs that keep the cables secured. Cut the cables to a short ~2cm (~1in) length and strip the wires.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(733),alt:""}})]),t._v(" "),i("p",[t._v("Tin both the BTB connector on the STLink and the cables.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(734),alt:""}})]),t._v(" "),i("p",[t._v("First solder the GND and VCC signals to align the connector in parallel to the edge. Then solder the TX and RX pins. Solder the RST connection last.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(735),alt:""}})]),t._v(" "),i("p",[t._v("Turn the STLink over and solder the remaining three wires. Start with SWDIO->TMS, then SWCLK->CLK, and finally SWO->TDO.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(736),alt:""}})]),t._v(" "),i("h3",{attrs:{id:"long-cable"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#long-cable"}},[t._v("#")]),t._v(" Long Cable")]),t._v(" "),i("p",[t._v("The long cable is particularly useful if you use pre-assembled cables as it removes the need to cut wires or strip them.")]),t._v(" "),i("p",[t._v("Carefully remove the two GPIO1/2 cables from one connector of the cable. Then remove all cables from the other connector. You are left with a eight crimped connectors at the end of the wires.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(737),alt:""}})]),t._v(" "),i("p",[t._v("Tin the crimped cable connectors and BTB connector and solder the crimped connectors directly to the STLinkv3. Be careful to not create shorts between the cables, as the crimped connectors are quite large.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(738),alt:""}})]),t._v(" "),i("h3",{attrs:{id:"testing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),i("p",[t._v("You should now test your debug probe to ensure you do not have any electrical shorts.")]),t._v(" "),i("ol",[i("li",[t._v("Plug the probe into your target via the Pixhawk Debug Port.")]),t._v(" "),i("li",[t._v("Test the serial port with a program of your choice.")]),t._v(" "),i("li",[t._v("Test the SWD and RST connection via [OpenOCD][https://openocd.org] or "),i("a",{attrs:{href:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("STLink"),i("OutboundLink")],1),t._v(" software.")]),t._v(" "),i("li",[t._v("Test the SWO connection via [Orbuculum][https://github.com/orbcode/orbuculum].")])]),t._v(" "),i("p",[t._v("See the "),i("a",{attrs:{href:"https://pypi.org/project/emdbg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Embedded Debug Tools"),i("OutboundLink")],1),t._v(" for more information about software support for the PX4 FMUv5 and FMUv6 flight controllers.")]),t._v(" "),i("h3",{attrs:{id:"make-it-smaller"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#make-it-smaller"}},[t._v("#")]),t._v(" Make it Smaller")]),t._v(" "),i("p",[t._v("This step removes the 14-pin debug interface on the back of the STLinkv3-MINIE and adds shrink tubing around the entire device to improve handling and prevent shorting the STLink against metal parts or PCBs. This step is strictly optional and requires:")]),t._v(" "),i("ul",[i("li",[t._v("1x 20mm shrink tubing about 5cm long.")]),t._v(" "),i("li",[t._v("1x flat tongs to hold the STLinkv3 by the USB-C port.")]),t._v(" "),i("li",[t._v("1x fine cutting pliers or soldering iron.")]),t._v(" "),i("li",[t._v("1x heat gun.")])]),t._v(" "),i("p",[t._v("Use the pliers to gently pull off the plastic part of the STDC14 connector. This leaves you with only the connector pins.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(739),alt:""}})]),t._v(" "),i("p",[t._v("Using the fine pliers, cut off the connector pins being very careful not to damage the PCB or any components on the PCB. Alternatively, you can solder these connector pin off the PCB, but it can take longer.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(740),alt:""}})]),t._v(" "),i("p",[t._v("Rotate the STLinkv3 to cut off the other row, again being very careful to not damage it.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(741),alt:""}})]),t._v(" "),i("p",[t._v("Cut a ~5cm (~2in) long piece of shrink tube. It should be flush with the USB-C connector and extend a little beyond the end.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(742),alt:""}})]),t._v(" "),i("p",[t._v("Hold both the PCB and the shrink tube with the flat tongs by the "),i("strong",[t._v("bottom")]),t._v(" metal part of the USB-C connector. Be careful not to accidentally squeeze the middle plastic part of the USB-C connector!")]),t._v(" "),i("p",[i("img",{attrs:{src:a(743),alt:""}})]),t._v(" "),i("p",[t._v("Use the heat gun to shrink the tubing all around the debug probe. Make sure the tubing is equally shrunk and protects the whole PCB.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(744),alt:""}})]),t._v(" "),i("p",[t._v("Optionally, you may add a logo of your choice printed on paper and cut to size. Be aware that the heat can make the ink flow a little, so you may need to experiment with what settings work with your printer.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(745),alt:""}})]),t._v(" "),i("h2",{attrs:{id:"see-also"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See also")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.st.com/resource/en/user_manual/um2910-stlinkv3minie-debuggerprogrammer-tiny-probe-for-stm32-microcontrollers-stmicroelectronics.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("STLINK-V3MINIE debugger/programmer tiny probe for STM32 microcontrollers"),i("OutboundLink")],1),t._v(" (User Manual)")])])])}),[],!1,null,null,null);e.default=n.exports},731:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p1.7bd913b9.jpeg"},732:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p2.1d90d3b2.jpeg"},733:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p3.d15997c7.jpeg"},734:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p4.b632d8a2.jpeg"},735:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p5.cb2abc5d.jpeg"},736:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p6.85a5a23e.jpeg"},737:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p7.9a53376b.jpeg"},738:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p8.8075fb29.jpeg"},739:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p9.103e6cfb.jpeg"},740:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p10.e793a37e.jpeg"},741:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p11.783477c3.jpeg"},742:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p12.fb762ef2.jpeg"},743:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p13.ef8d8b25.jpeg"},744:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p14.e6b21a49.jpeg"},745:function(t,e,a){t.exports=a.p+"assets/img/stlinkv3_minie_p15.84920288.jpeg"}}]);