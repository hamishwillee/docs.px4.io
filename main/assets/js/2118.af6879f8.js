(window.webpackJsonp=window.webpackJsonp||[]).push([[2118],{3798:function(t,r,e){"use strict";e.r(r);var a=e(19),i=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"offboard控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#offboard控制"}},[t._v("#")]),t._v(" Offboard控制")]),t._v(" "),e("p",[t._v("Offboard控制背后的想法是能够使用在自动驾驶仪外运行的软件来控制 PX4 飞控。 这是通过 Mavlink 协议完成的, 特别是 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),e("OutboundLink")],1),t._v(" 消息。\n:::")]),t._v(" "),e("p",[t._v("Offboard控制背后的想法是能够使用在自动驾驶仪外运行的软件来控制 PX4 飞控。 这是通过 Mavlink 协议完成的, 特别是 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),e("OutboundLink")],1),t._v(" 消息。")]),t._v(" "),e("h2",{attrs:{id:"offboard控制固件设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#offboard控制固件设置"}},[t._v("#")]),t._v(" Offboard控制固件设置")]),t._v(" "),e("p",[t._v("在进行Offboard开发前，您需要在固件端做两个设置。")]),t._v(" "),e("h3",{attrs:{id:"_1-将遥控开关映射到离板模式激活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-将遥控开关映射到离板模式激活"}},[t._v("#")]),t._v(" 1. 将遥控开关映射到离板模式激活")]),t._v(" "),e("p",[t._v("要做到这一点， 在 "),e("em",[t._v("QGroundControl")]),t._v(" 中加载参数，将RC_MAP_OFFB_SW 参数设置为您用来激活Offboard模式的RC 通道 。 该方法会在脱离Offboard模式后进入位置控制模式。")]),t._v(" "),e("p",[t._v("虽然此步骤不是强制性的，因为您可以使用 Mavlink 消息激活Offboard模式。 我们认为这种方法安全多了。")]),t._v(" "),e("h3",{attrs:{id:"_2-启用机载计算机接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启用机载计算机接口"}},[t._v("#")]),t._v(" 2. 启用机载计算机接口")]),t._v(" "),e("p",[t._v("在连接任务计算机的串口上启动MAVLink （参见 "),e("RouterLink",{attrs:{to:"/zh/companion_computer/"}},[t._v("任务计算机")]),t._v("）。")],1),t._v(" "),e("h2",{attrs:{id:"硬件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),e("p",[t._v("通常，有三种方式设置Offboard模式通信。")]),t._v(" "),e("h3",{attrs:{id:"串口电台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#串口电台"}},[t._v("#")]),t._v(" 串口电台")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("一端连接飞控的 UART")])]),t._v(" "),e("li",[e("p",[t._v("一端连接地面站电脑")]),t._v(" "),e("p",[t._v("参考电台包括：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.lairdtech.com/products/rm024",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lairdtech RM024"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.digi.com/products/xbee-rf-solutions/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digi International XBee Pro"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGduZFtHcm91bmQgU3RhdGlvbl0gLS1NQVZMaW5rLS0-IHJhZDFbR3JvdW5kIFJhZGlvXTtcbiAgcmFkMSAtLVJhZGlvUHJvdG9jb2wtLT4gcmFkMltWZWhpY2xlIFJhZGlvXTtcbiAgcmFkMiAtLU1BVkxpbmstLT4gYVtBdXRvcGlsb3RdOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"流程图：mavlink 通道"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"板载处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#板载处理器"}},[t._v("#")]),t._v(" 板载处理器")]),t._v(" "),e("p",[t._v("在飞行器上部署一台小型将计算机，用 UART 转 USB 适配器连接飞控。 这里有许多可能性，这将取决于您除了向自驾仪发送指令外，还想要做什么样的额外机载处理。")]),t._v(" "),e("p",[t._v("低性能计算机：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143703355573",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid C1+"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"http://www.hardkernel.com/main/products/prdt_info.php?g_code=G143452239825",target:"_blank",rel:"noopener noreferrer"}},[t._v("Odroid XU4"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.raspberrypi.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("高性能计算机：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.intel.com/content/www/us/en/products/details/nuc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel NUC"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.gigabyte.com/Mini-PcBarebone/BRIX",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gigabyte Brix"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.nvidia.com/embedded/jetson-tx2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nvidia Jetson TK1"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVEQ7XG4gIGNvbXBbQ29tcGFuaW9uIENvbXB1dGVyXSAtLU1BVkxpbmstLT4gdWFydFtVQVJUIEFkYXB0ZXJdO1xuICB1YXJ0IC0tTUFWTGluay0tPiBBdXRvcGlsb3Q7IiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZX0",alt:"流程图：机载计算机Mavlink"}}),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"板载处理器和-wifi-链接到-ros-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#板载处理器和-wifi-链接到-ros-推荐"}},[t._v("#")]),t._v(" 板载处理器和 WIFI 链接到 ROS（"),e("em",[e("strong",[t._v("推荐")])]),t._v("）")]),t._v(" "),e("p",[t._v("部署在飞行器上的小型计算机除了通过 UART - USB 适配器连接到自动驾驶仪外，同时还可通过WiFi连接至运行 ROS 的地面站。 这可以是上述配备了WiFi适配器的任一计算机。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgc3ViZ3JhcGggR3JvdW5kICBTdGF0aW9uXG4gIGduZFtST1MgRW5hYmxlZCBDb21wdXRlcl0gLS0tIHFnY1txR3JvdW5kQ29udHJvbF1cbiAgZW5kXG4gIGduZCAtLU1BVkxpbmsvVURQLS0-IHdbV2lGaV07XG4gIHFnYyAtLU1BVkxpbmstLT4gdztcbiAgc3ViZ3JhcGggVmVoaWNsZVxuICBjb21wW0NvbXBhbmlvbiBDb21wdXRlcl0gLS1NQVZMaW5rLS0-IHVhcnRbVUFSVCBBZGFwdGVyXVxuICB1YXJ0IC0tLSBBdXRvcGlsb3RcbiAgZW5kXG4gIHcgLS0tIGNvbXAiLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlfQ",alt:"流程图：ROS"}}),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);