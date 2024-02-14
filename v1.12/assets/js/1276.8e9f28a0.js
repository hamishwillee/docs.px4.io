(window.webpackJsonp=window.webpackJsonp||[]).push([[1276],{2656:function(t,e,r){"use strict";r.r(e);var a=r(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"离板控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#离板控制"}},[t._v("#")]),t._v(" 离板控制")]),t._v(" "),r("p",[t._v("离板控制背后的想法是能够使用在自动驾驶仪外运行的软件来控制 PX4 飞控。 这是通过 Mavlink 协议完成的, 特别是 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),r("OutboundLink")],1),t._v(" 消息。\n:::")]),t._v(" "),r("p",[t._v("The idea behind off-board control is to be able to control the PX4 flight stack using software running outside of the autopilot. This is done through the MAVLink protocol, specifically the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),r("OutboundLink")],1),t._v(" and the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),r("OutboundLink")],1),t._v(" messages.")]),t._v(" "),r("h2",{attrs:{id:"离板控制固件设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#离板控制固件设置"}},[t._v("#")]),t._v(" 离板控制固件设置")]),t._v(" "),r("p",[t._v("There are two things you want to setup on the firmware side before starting offboard development.")]),t._v(" "),r("h3",{attrs:{id:"_1-将遥控开关映射到离板模式激活"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-将遥控开关映射到离板模式激活"}},[t._v("#")]),t._v(" 1. 将遥控开关映射到离板模式激活")]),t._v(" "),r("p",[t._v("虽然此步骤不是强制性的，因为您可以使用 Mavlink 消息激活非板载模式。 我们认为这种方法安全多了。")]),t._v(" "),r("p",[t._v("Although this step isn't mandatory since you can activate offboard mode using a MAVLink message. We consider this method much safer.")]),t._v(" "),r("h3",{attrs:{id:"_2-启用配套的计算机接口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用配套的计算机接口"}},[t._v("#")]),t._v(" 2. 启用配套的计算机接口")]),t._v(" "),r("p",[t._v("通常，有三种方式设置离板模式的通信。")]),t._v(" "),r("h2",{attrs:{id:"硬件安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),r("p",[t._v("参考电台包括：")]),t._v(" "),r("h3",{attrs:{id:"_1-串口电台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-串口电台"}},[t._v("#")]),t._v(" 1. 串口电台")]),t._v(" "),r("ol",[r("li",[t._v("一端连接飞控的 UART")]),t._v(" "),r("li",[t._v("一端连接地面站电脑")])]),t._v(" "),r("p",[t._v("Example radios include:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.lairdtech.com/products/rm024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lairdtech RM024"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.digi.com/products/xbee-rf-solutions/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digi International XBee Pro"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: mavlink channel"}}),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_2-板载处理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-板载处理器"}},[t._v("#")]),t._v(" 2. 板载处理器")]),t._v(" "),r("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter. There are many possibilities here and it will depend on what kind of additional on-board processing you want to do in addition to sending commands to the autopilot.")]),t._v(" "),r("p",[t._v("{% mermaid %} graph TD; comp[Companion Computer] --MAVLink--\x3e uart[UART Adapter]; uart --MAVLink--\x3e Autopilot; {% endmermaid %}")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143703355573",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid C1+"),r("OutboundLink")],1),t._v(" 或 "),r("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143452239825",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid XU4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.intel.com/content/www/us/en/do-it-yourself/edison.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Edison"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Larger high power examples:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.intel.com/content/www/us/en/nuc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel NUC"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.gigabyte.com/products/list.aspx?s=47&ck=104",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gigabyte Brix"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developer.nvidia.com/embedded/jetson-tx2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia Jetson TK1"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"Mermaid diagram: Companion mavlink"}}),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"_3-板载处理器和-wifi-链接到-ros-推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-板载处理器和-wifi-链接到-ros-推荐"}},[t._v("#")]),t._v(" 3. 板载处理器和 WIFI 链接到 ROS（"),r("em",[r("strong",[t._v("推荐")])]),t._v("）")]),t._v(" "),r("p",[t._v("A small computer mounted onto the vehicle connected to the autopilot through a UART to USB adapter while also having a WiFi link to a ground station running ROS. This can be any of the computers from the above section coupled with a WiFi adapter. For example, the Intel NUC D34010WYB has a PCI Express Half-Mini connector which can accommodate an "),r("a",{attrs:{href:"http://www.intel.com/products/wireless/adapters/5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Wifi Link 5000"),r("OutboundLink")],1),t._v(" adapter.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"Mermaid graph: ROS"}}),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);