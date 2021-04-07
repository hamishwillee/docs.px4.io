(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{1828:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"offboard-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#offboard-control"}},[t._v("#")]),t._v(" Offboard Control")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html"}},[t._v("Offboard control")]),t._v(" is dangerous.\nIt is the responsibility of the developer to ensure adequate preparation, testing and safety precautions are taken before offboard flights.")],1)]),t._v(" "),o("p",[t._v("The idea behind off-board control is to be able to control the PX4 flight stack using software running outside of the autopilot.\nThis is done through the MAVLink protocol, specifically the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),o("OutboundLink")],1),t._v(" and the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),o("OutboundLink")],1),t._v(" messages.")]),t._v(" "),o("h2",{attrs:{id:"offboard-control-firmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#offboard-control-firmware-setup"}},[t._v("#")]),t._v(" Offboard Control Firmware Setup")]),t._v(" "),o("p",[t._v("There are two things you want to setup on the firmware side before starting offboard development.")]),t._v(" "),o("h3",{attrs:{id:"map-an-rc-switch-to-offboard-mode-activation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#map-an-rc-switch-to-offboard-mode-activation"}},[t._v("#")]),t._v(" Map an RC switch to offboard mode activation")]),t._v(" "),o("p",[t._v("To do this, load up the parameters in "),o("em",[t._v("QGroundControl")]),t._v(" and look for the RC_MAP_OFFB_SW parameter to which you can assign the RC channel you want to use to activate offboard mode.\nIt can be useful to map things in such a way that when you fall out of offboard mode you go into position control.")]),t._v(" "),o("p",[t._v("Although this step isn't mandatory since you can activate offboard mode using a MAVLink message.\nWe consider this method much safer.")]),t._v(" "),o("h3",{attrs:{id:"enable-the-companion-computer-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#enable-the-companion-computer-interface"}},[t._v("#")]),t._v(" Enable the companion computer interface")]),t._v(" "),o("p",[t._v("Enable MAVLink on the serial port that you connect to the companion computer (see "),o("RouterLink",{attrs:{to:"/en/companion_computer/pixhawk_companion.html"}},[t._v("Companion computer setup")]),t._v(").")],1),t._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware setup")]),t._v(" "),o("p",[t._v("Usually, there are three ways of setting up offboard communication.")]),t._v(" "),o("h3",{attrs:{id:"serial-radios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#serial-radios"}},[t._v("#")]),t._v(" Serial radios")]),t._v(" "),o("ol",[o("li",[t._v("One connected to a UART port of the autopilot")]),t._v(" "),o("li",[t._v("One connected to a ground station computer")])]),t._v(" "),o("p",[t._v("Example radios include:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.lairdtech.com/products/rm024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lairdtech RM024"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.digi.com/products/xbee-rf-solutions/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digi International XBee Pro"),o("OutboundLink")],1)])]),t._v(" "),o("p",[o("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: mavlink channel"}}),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"on-board-processor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-board-processor"}},[t._v("#")]),t._v(" On-board processor")]),t._v(" "),o("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter.\nThere are many possibilities here and it will depend on what kind of additional on-board processing you want to do in addition to sending commands to the autopilot.")]),t._v(" "),o("p",[t._v("Small low power examples:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.hardkernel.com/shop/odroid-c1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid C1+"),o("OutboundLink")],1),t._v(" or "),o("a",{attrs:{href:"https://magazine.odroid.com/odroid-xu4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid XU4"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.intel.com/content/www/us/en/do-it-yourself/edison.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Edison"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("Larger high power examples:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.intel.com/content/www/us/en/nuc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel NUC"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.gigabyte.com/products/list.aspx?s=47&ck=104",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gigabyte Brix"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://developer.nvidia.com/jetson-tk1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia Jetson TK1"),o("OutboundLink")],1)])]),t._v(" "),o("p",[o("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"Mermaid diagram: Companion mavlink"}}),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"on-board-processor-and-wifi-link-to-ros-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-board-processor-and-wifi-link-to-ros-recommended"}},[t._v("#")]),t._v(" On-board processor and wifi link to ROS ("),o("em",[o("strong",[t._v("Recommended")])]),t._v(")")]),t._v(" "),o("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter while also having a WiFi link to a ground station running ROS.\nThis can be any of the computers from the above section coupled with a WiFi adapter.\nFor example, the Intel NUC D34010WYB has a PCI Express Half-Mini connector which can accommodate an "),o("a",{attrs:{href:"http://www.intel.com/products/wireless/adapters/5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Wifi Link 5000"),o("OutboundLink")],1),t._v(" adapter.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[o("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"Mermaid graph: ROS"}}),o("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);