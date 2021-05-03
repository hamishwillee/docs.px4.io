(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1145:function(t,e,_){t.exports=_.p+"assets/img/rtk_c-rtk.b81e5056.jpg"},1146:function(t,e,_){t.exports=_.p+"assets/img/rtk_cuav_c-rtk_to_6pin_connector.277e2d91.jpg"},2593:function(t,e,_){"use strict";_.r(e);var r=_(18),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cuav-c-rtk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-rtk"}},[t._v("#")]),t._v(" CUAV C-RTK")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK GPS receiver"),r("OutboundLink")],1),t._v(" is an "),r("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" for the mass market. 一个完整的RTK 系统由至少两个 c-rtk 模块 组成(一个用于基站, 另外一个作为移动站用于飞机上)。 使用RTK，PX4控制器可以获取到它的位置，并且这个位置的精度可以达到厘米级的精度，这比普通GPS提供的位置更加精确。")],1),t._v(" "),r("img",{attrs:{src:_(1145),width:"500px",title:"C-RTK"}}),t._v(" "),r("h2",{attrs:{id:"购买"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#购买"}},[t._v("#")]),t._v(" 购买")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://item.taobao.com/item.htm?id=565380634341&spm=2014.21600712.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav淘宝店铺"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("[cuav aliexpress](https://www.aliexpress.com/store/product/CUAV-NEW-Flight-Controller-GPS-C-RTK-differential-positioning-navigation-module-GPS-for-PIX4-Pixhawk-pixhack/3257035_32853894248.html?spm=2114.12010608.0.0.75592fadQKPPEn")])]),t._v(" "),r("p",[t._v("Context)")]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("p",[t._v("RTK设置和使用在px4上通过 "),r("em",[t._v("QGroundControl")]),t._v(" 很大程度上可以即插即用 \\ (请参阅"),r("RouterLink",{attrs:{to:"/zh/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" 更多信息)。")],1),t._v(" "),r("h2",{attrs:{id:"接线和连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),r("p",[t._v("C-RTK GPS comes with a cable that terminates in a 6-pin connector and 4-pin connector that are compatible with "),r("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/c-rtk/hardware-connection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhack v3"),r("OutboundLink")],1),t._v(". 6针连接器提供 rtk gps 的接口, 并应连接到飞行控制器的 gps 接口。 4针连接器是一个 m8n (标准) gps 接口, 可作为第二个 gps(可选)。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("At time of writing PX4 does not yet fully support a second GPS. The 4-pin port need not be connected.")])]),t._v(" "),r("img",{attrs:{src:_(1146),width:"500px",title:"C-RTK_6PIN"}}),t._v(" "),r("p",[t._v("The cables/connectors may need to be modified in order to connect to other flight controller boards. The pin mappings for "),r("em",[t._v("Pixhawk 3 Pro")]),t._v(" and "),r("em",[t._v("Pixracer")]),t._v(" are shown below.")]),t._v(" "),r("h3",{attrs:{id:"针脚定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),r("p",[t._v("The C-RTK GPS pinout is provided below. This can be used to help modify the connector for other autopilot boards.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("引脚")]),t._v(" "),r("th",[t._v("C-RTK GPS 6P")]),t._v(" "),r("th",[t._v("引脚")]),t._v(" "),r("th",[t._v("Pixhawk 3 Pro GPS")]),t._v(" "),r("th",[t._v("C-RTK GPS 4P")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("GPS_RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("GPS_TX")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("VCC_5V")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("VCC_5V")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);