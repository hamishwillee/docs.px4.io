(window.webpackJsonp=window.webpackJsonp||[]).push([[1207],{2566:function(t,r,e){"use strict";e.r(r);var a=e(18),i=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"离板控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离板控制"}},[t._v("#")]),t._v(" 离板控制")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Warning")]),t._v(" 使用 "),e("a",{attrs:{href:"https://docs.px4.io/en/flight_modes/offboard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Offboard 模式控制"),e("OutboundLink")],1),t._v(" 无人机是有危险的。 开发者有责任确保在离板飞行前采取充分的准备、测试和安全预防措施。")])]),t._v(" "),e("p",[t._v("离板控制背后的想法是能够使用在自动驾驶仪外运行的软件来控制 PX4 飞控。 这是通过 Mavlink 协议完成的, 特别是 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),e("OutboundLink")],1),t._v(" 消息。")]),t._v(" "),e("h2",{attrs:{id:"离板控制固件设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#离板控制固件设置"}},[t._v("#")]),t._v(" 离板控制固件设置")]),t._v(" "),e("p",[t._v("在开始离板开发之前，您需要在固件端做两个安装。")]),t._v(" "),e("h3",{attrs:{id:"_1-将遥控开关映射到离板模式激活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-将遥控开关映射到离板模式激活"}},[t._v("#")]),t._v(" 1. 将遥控开关映射到离板模式激活")]),t._v(" "),e("p",[t._v("为此，请在 "),e("em",[t._v("QGroundControl")]),t._v(" 中加载参数，并查找 RC_MAP_OFFB_SW 参数，您可以将要用于激活离板模式的遥控通道分配给该参数。 当你从板外模式进入位置控制，它会是有用的映射方式。")]),t._v(" "),e("p",[t._v("虽然此步骤不是强制性的，因为您可以使用 Mavlink 消息激活非板载模式。 我们认为这种方法安全多了。")]),t._v(" "),e("h3",{attrs:{id:"_2-启用配套的计算机接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用配套的计算机接口"}},[t._v("#")]),t._v(" 2. 启用配套的计算机接口")]),t._v(" "),e("p",[t._v("启动串口的 MAVLink ，连接地面站电脑（参见 "),e("RouterLink",{attrs:{to:"/zh/companion_computer/pixhawk_companion.html"}},[t._v("地面站电脑设置")]),t._v("）。")],1),t._v(" "),e("h2",{attrs:{id:"硬件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),e("p",[t._v("通常，有三种方式设置离板模式的通信。")]),t._v(" "),e("h3",{attrs:{id:"_1-串口电台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-串口电台"}},[t._v("#")]),t._v(" 1. 串口电台")]),t._v(" "),e("ol",[e("li",[t._v("一端连接飞控的 UART")]),t._v(" "),e("li",[t._v("一端连接地面站电脑")])]),t._v(" "),e("p",[t._v("参考电台包括：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.lairdtech.com/products/rm024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lairdtech RM024"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.digi.com/products/xbee-rf-solutions/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digi International XBee Pro"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: mavlink channel"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_2-板载处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-板载处理器"}},[t._v("#")]),t._v(" 2. 板载处理器")]),t._v(" "),e("p",[t._v("在飞机上部署一台小型电脑，用 UART 转 USB 适配器连接飞控。 此处有多种可能性，除了向飞控发命令，这取决于你想在板上增加增加怎样的处理。")]),t._v(" "),e("p",[t._v("更高功率设备如：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143703355573",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid C1+"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143452239825",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid XU4"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.intel.com/content/www/us/en/do-it-yourself/edison.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Edison"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("{% mermaid %} graph TD; comp[Companion Computer] --MAVLink--\x3e uart[UART Adapter]; uart --MAVLink--\x3e Autopilot; {% endmermaid %}")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.intel.com/content/www/us/en/nuc/overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel NUC"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.gigabyte.com/products/list.aspx?s=47&ck=104",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gigabyte Brix"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.nvidia.com/jetson-tk1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia Jetson TK1"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"Mermaid diagram: Companion mavlink"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"_3-板载处理器和-wifi-链接到-ros-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-板载处理器和-wifi-链接到-ros-推荐"}},[t._v("#")]),t._v(" 3. 板载处理器和 WIFI 链接到 ROS（"),e("em",[e("strong",[t._v("推荐")])]),t._v("）")]),t._v(" "),e("p",[t._v("在飞机上部署小型计算机，通过 UART 连接到 USB 适配器连接到自动驾驶仪，同时还具有与运行 ROS 的地面站的 WIFI 连接。 这可以是上述部分中的任何一台计算机，加上 WiFi 适配器。 例如，英特尔 NUC D34010WYB 有一个 PCI 快速半迷你连接器，它可以容纳一个 "),e("a",{attrs:{href:"http://www.intel.com/products/wireless/adapters/5000/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel wifi 链接 5000 "),e("OutboundLink")],1),t._v(" 适配器。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"Mermaid graph: ROS"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);