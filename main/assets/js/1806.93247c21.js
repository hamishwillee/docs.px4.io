(window.webpackJsonp=window.webpackJsonp||[]).push([[1806],{3260:function(t,e,r){"use strict";r.r(e);var a=r(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"오프보드-제어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-제어"}},[t._v("#")]),t._v(" 오프보드 제어")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프보드 제어")]),t._v("는 위험합니다. 오프보드 비행전에 적절한 준비, 테스트 및 안전 예방 조치를 취하여야 합니다.")],1)]),t._v(" "),r("p",[t._v("오프보드 제어의 아이디어는 자동조종장치 외부에서 실행되는 소프트웨어를 사용하여 PX4를 제어하는 것입니다. 이것은 MAVLink 프로토콜, 특히 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),r("OutboundLink")],1),t._v(" 및 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),r("OutboundLink")],1),t._v(" 메시지를 통하여 수행됩니다.")]),t._v(" "),r("h2",{attrs:{id:"오프보드-제어-펌웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-제어-펌웨어-설정"}},[t._v("#")]),t._v(" 오프보드 제어 펌웨어 설정")]),t._v(" "),r("p",[t._v("오프보드 개발전에 펌웨어에서 두 가지를 설정하여야 합니다.")]),t._v(" "),r("h3",{attrs:{id:"rc-스위치를-오프보드-모드-활성화에-매핑"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-스위치를-오프보드-모드-활성화에-매핑"}},[t._v("#")]),t._v(" RC 스위치를 오프보드 모드 활성화에 매핑")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("에서 매개변수를 로드하고, 오프보드 모드를 활성화 RC 채널을 할당할 수 있는 RC_MAP_OFFB_SW 매개변수를 검색합니다. 오프보드 모드에서 벗어날 때 위치 제어로 이동하는 방식으로 매핑하는 것이 유용할 수 있습니다.")]),t._v(" "),r("p",[t._v("MAVLink 메시지로 오프보드 모드를 활성화할 수 있으므로, 이 단계는 필수는 아닙니다. 이 방법이 훨씬 더 안전합니다.")]),t._v(" "),r("h3",{attrs:{id:"보조-컴퓨터-인터페이스-활성화"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-인터페이스-활성화"}},[t._v("#")]),t._v(" 보조 컴퓨터 인터페이스 활성화")]),t._v(" "),r("p",[t._v("Enable MAVLink on the serial port that you connect to the companion computer (see "),r("RouterLink",{attrs:{to:"/ko/companion_computer/"}},[t._v("Companion Computers")]),t._v(").")],1),t._v(" "),r("h2",{attrs:{id:"하드웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),r("p",[t._v("일반적으로 오프보드 통신을 설정하는 방법에는 세 가지가 있습니다.")]),t._v(" "),r("h3",{attrs:{id:"직렬-라디오"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#직렬-라디오"}},[t._v("#")]),t._v(" 직렬 라디오")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("하나는 자동조종장치의 UART 포트에 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("One connected to a ground station computer")]),t._v(" "),r("p",[t._v("Example radios include:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.lairdtech.com/products/rm024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lairdtech RM024"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.digi.com/products/xbee-rf-solutions/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digi International XBee Pro"),r("OutboundLink")],1)])])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: mavlink channel"}}),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"온보드-프로세서"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#온보드-프로세서"}},[t._v("#")]),t._v(" 온보드 프로세서")]),t._v(" "),r("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter. There are many possibilities here and it will depend on what kind of additional on-board processing you want to do in addition to sending commands to the autopilot.")]),t._v(" "),r("p",[t._v("Small low power examples:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.hardkernel.com/shop/odroid-c1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid C1+"),r("OutboundLink")],1),t._v(" 또는 "),r("a",{attrs:{href:"https://magazine.odroid.com/odroid-xu4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid XU4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("라즈베리파이"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("몇가지 저전력 보드를 예로 들면:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.intel.com/content/www/us/en/products/details/nuc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("인텔 NUC"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.gigabyte.com/Mini-PcBarebone/BRIX",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gigabyte Brix"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.nvidia.com/embedded/jetson-tx2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia Jetson TX2"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"Mermaid diagram: Companion mavlink"}}),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"온보드-프로세서-및-ros에-대한-wi-fi-링크-권장"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#온보드-프로세서-및-ros에-대한-wi-fi-링크-권장"}},[t._v("#")]),t._v(" 온보드 프로세서 및 ROS에 대한 Wi-Fi 링크("),r("em",[r("strong",[t._v("권장")])]),t._v(")")]),t._v(" "),r("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter while also having a WiFi link to a ground station running ROS. This can be any of the computers from the above section coupled with a WiFi adapter.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"Mermaid graph: ROS"}}),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);