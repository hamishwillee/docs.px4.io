(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{1403:function(t,_,r){t.exports=r.p+"assets/img/rtk_c-rtk.a9dc528a.jpg"},1404:function(t,_,r){t.exports=r.p+"assets/img/rtk_cuav_c-rtk_to_6pin_connector.277e2d91.jpg"},3008:function(t,_,r){"use strict";r.r(_);var v=r(19),e=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"cuav-c-rtk"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-rtk"}},[t._v("#")]),t._v(" CUAV C-RTK")]),t._v(" "),v("p",[t._v("The "),v("a",{attrs:{href:"https://www.cuav.net/en/c_rtk_9ps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK GPS receiver"),v("OutboundLink")],1),t._v(" is an "),v("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS module")]),t._v(" for the mass market. 완전한 RTK 시스템은 2개 이상의 C-RTK 모듈 (하나는 기지국용, 다른 하나는 항공기용)으로 구성됩니다. RTK를 사용하면 PX4는 일반 GPS에서 제공하는 것 보다 훨씬 더 정확한 센티미터 수준의 정확도로 위치를 파악할 수 있습니다.")],1),t._v(" "),v("img",{attrs:{src:r(1403),width:"500px",title:"C-RTK"}}),t._v(" "),v("h2",{attrs:{id:"where-to-buy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://item.taobao.com/item.htm?id=565380634341&spm=2014.21600712.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav taobao"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.aliexpress.com/store/product/CUAV-NEW-Flight-Controller-GPS-C-RTK-differential-positioning-navigation-module-GPS-for-PIX4-Pixhawk-pixhack/3257035_32853894248.html?spm=2114.12010608.0.0.75592fadQKPPEn",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav aliexpress"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),v("p",[t._v("RTK setup and use on PX4 via "),v("em",[t._v("QGroundControl")]),t._v(" is largely plug and play (see "),v("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v(" for more information).")],1),t._v(" "),v("h2",{attrs:{id:"배선"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),v("p",[t._v("C-RTK GPS comes with a cable that terminates in a 6-pin connector and 4-pin connector that are compatible with "),v("a",{attrs:{href:"https://doc.cuav.net/flight-controller/pixhack/en/quick-start-pixhack-v3x.html#gps--compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhack v3"),v("OutboundLink")],1),t._v(". 6핀 커넥터는 RTK GPS 용 인터페이스를 제공하며 비행 콘트롤러의 GPS 포트에 연결하여야합니다. 4핀 커넥터는 두 번째 GPS로 사용하기 위한 (옵션) m8n (표준) GPS 인터페이스입니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("이 문서 작성시에는 PX4는 아직 두 번째 GPS를 완전하게 지원하지 않습니다. 4핀 포트는 연결할 필요 없습니다.")])]),t._v(" "),v("img",{attrs:{src:r(1404),width:"500px",title:"C-RTK_6PIN"}}),t._v(" "),v("p",[t._v("다른 비행 콘트롤러 보드에 연결하려면 케이블/커넥터를 수정하여야 하는 경우도 있습니다. "),v("em",[t._v("Pixhawk 3 Pro")]),t._v("와 "),v("em",[t._v("Pixracer")]),t._v("의 핀 매핑은 다음과 같습니다.")]),t._v(" "),v("h3",{attrs:{id:"핀배열"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),v("p",[t._v("C-RTK GPS 핀배열은 아래와 같습니다. 이것은 다른 자동조종보드용 커넥터를 수정할 수 있습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("C-RTK GPS 6P")]),t._v(" "),v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("Pixhawk 3 Pro GPS")]),t._v(" "),v("th",[t._v("C-RTK GPS 4P")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("SDA")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("SCL")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("GPS_TX")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPS_RX")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPS_RX")]),t._v(" "),v("td",[t._v("GPS_RX")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("GPS_TX")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("SCL")]),t._v(" "),v("td",[t._v("GPS_TX")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("VCC_5V")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("SDA")]),t._v(" "),v("td",[t._v("VCC_5V")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);