(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1339:function(t,e,r){t.exports=r.p+"assets/img/rtk_c-rtk.a9dc528a.jpg"},1340:function(t,e,r){t.exports=r.p+"assets/img/rtk_cuav_c-rtk_to_6pin_connector.277e2d91.jpg"},3465:function(t,e,r){"use strict";r.r(e);var _=r(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"cuav-c-rtk"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-rtk"}},[t._v("#")]),t._v(" CUAV C-RTK")]),t._v(" "),_("p",[t._v("The "),_("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK GPS receiver"),_("OutboundLink")],1),t._v(" is an "),_("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" for the mass market. 一个完整的RTK 系统由至少两个 c-rtk 模块 组成(一个用于基站, 另外一个作为移动站用于飞机上)。 使用RTK，PX4控制器可以获取到它的位置，并且这个位置的精度可以达到厘米级的精度，这比普通GPS提供的位置更加精确。")],1),t._v(" "),_("img",{attrs:{src:r(1339),width:"500px",title:"C-RTK"}}),t._v(" "),_("h2",{attrs:{id:"where-to-buy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://item.taobao.com/item.htm?id=565380634341&spm=2014.21600712.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav淘宝店铺"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("[cuav aliexpress](https://www.aliexpress.com/store/product/CUAV-NEW-Flight-Controller-GPS-C-RTK-differential-positioning-navigation-module-GPS-for-PIX4-Pixhawk-pixhack/3257035_32853894248.html?spm=2114.12010608.0.0.75592fadQKPPEn")])]),t._v(" "),_("p",[t._v("Context)")]),t._v(" "),_("h2",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),_("p",[t._v("RTK setup and use on PX4 via "),_("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),_("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),_("h2",{attrs:{id:"接线和连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接线和连接"}},[t._v("#")]),t._v(" 接线和连接")]),t._v(" "),_("p",[t._v("C-RTK GPS comes with a cable that terminates in a 6-pin connector and 4-pin connector that are compatible with "),_("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/c-rtk/hardware-connection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhack v3"),_("OutboundLink")],1),t._v(". 6针连接器提供 rtk gps 的接口, 并应连接到飞行控制器的 gps 接口。 4针连接器是一个 m8n (标准) gps 接口, 可作为第二个 gps(可选)。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("At time of writing PX4 does not yet fully support a second GPS. The 4-pin port need not be connected.")])]),t._v(" "),_("img",{attrs:{src:r(1340),width:"500px",title:"C-RTK_6PIN"}}),t._v(" "),_("p",[t._v("The cables/connectors may need to be modified in order to connect to other flight controller boards. The pin mappings for "),_("em",[t._v("Pixhawk 3 Pro")]),t._v(" and "),_("em",[t._v("Pixracer")]),t._v(" are shown below.")]),t._v(" "),_("h3",{attrs:{id:"针脚定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),_("p",[t._v("The C-RTK GPS pinout is provided below. This can be used to help modify the connector for other autopilot boards.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("引脚")]),t._v(" "),_("th",[t._v("C-RTK GPS 6P")]),t._v(" "),_("th",[t._v("引脚")]),t._v(" "),_("th",[t._v("Pixhawk 3 Pro GPS")]),t._v(" "),_("th",[t._v("C-RTK GPS 4P")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("SDA")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("VCC")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("SCL")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("GPS_TX")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_RX")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("GPS_RX")]),t._v(" "),_("td",[t._v("GPS_RX")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("GPS_TX")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("SCL")]),t._v(" "),_("td",[t._v("GPS_TX")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("VCC_5V")]),t._v(" "),_("td",[t._v("5")]),t._v(" "),_("td",[t._v("SDA")]),t._v(" "),_("td",[t._v("VCC_5V")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("GND")]),t._v(" "),_("td",[t._v("GND")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);