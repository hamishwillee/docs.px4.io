(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1173:function(t,_,v){t.exports=v.p+"assets/img/rtk_c-rtk.b81e5056.jpg"},1174:function(t,_,v){t.exports=v.p+"assets/img/rtk_cuav_c-rtk_to_6pin_connector.277e2d91.jpg"},2340:function(t,_,v){"use strict";v.r(_);var r=v(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cuav-c-rtk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-rtk"}},[t._v("#")]),t._v(" CUAV C-RTK")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK GPS 수신기"),r("OutboundLink")],1),t._v("는 일반 사용자를 위한 "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS 모듈")]),t._v("입니다. 완전한 RTK 시스템은 2개 이상의 C-RTK 모듈 (하나는 기지국용, 다른 하나는 항공기용)으로 구성됩니다. RTK를 사용하면 PX4는 일반 GPS에서 제공하는 것 보다 훨씬 더 정확한 센티미터 수준의 정확도로 위치를 파악할 수 있습니다.")],1),t._v(" "),r("img",{attrs:{src:v(1173),width:"500px",title:"C-RTK"}}),t._v(" "),r("h2",{attrs:{id:"구매처"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://item.taobao.com/item.htm?id=565380634341&spm=2014.21600712.0.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav taobao"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.aliexpress.com/store/product/CUAV-NEW-Flight-Controller-GPS-C-RTK-differential-positioning-navigation-module-GPS-for-PIX4-Pixhawk-pixhack/3257035_32853894248.html?spm=2114.12010608.0.0.75592fadQKPPEn",target:"_blank",rel:"noopener noreferrer"}},[t._v("cuav aliexpress"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("을 통한 PX4의 RTK 설정 및 사용은 대부분 플러그앤플레이입니다 (자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK GPS")]),t._v(" 참조).")],1),t._v(" "),r("h2",{attrs:{id:"배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),r("p",[t._v("C-RTK GPS는 "),r("a",{attrs:{href:"http://doc.cuav.net/gps/c-rtk/en/c-rtk/hardware-connection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhack v3"),r("OutboundLink")],1),t._v("과 호환되는 6핀 커넥터 및 4핀 커넥터로 종단되는 케이블과 함께 제공됩니다. 6핀 커넥터는 RTK GPS 용 인터페이스를 제공하며 비행 콘트롤러의 GPS 포트에 연결하여야합니다. 4핀 커넥터는 두 번째 GPS로 사용하기 위한 (옵션) m8n (표준) GPS 인터페이스입니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이 문서 작성시에는 PX4는 아직 두 번째 GPS를 완전하게 지원하지 않습니다. 4핀 포트는 연결할 필요 없습니다.")])]),t._v(" "),r("img",{attrs:{src:v(1174),width:"500px",title:"C-RTK_6PIN"}}),t._v(" "),r("p",[t._v("다른 비행 콘트롤러 보드에 연결하려면 케이블/커넥터를 수정하여야 하는 경우도 있습니다. "),r("em",[t._v("Pixhawk 3 Pro")]),t._v("와 "),r("em",[t._v("Pixracer")]),t._v("의 핀 매핑은 다음과 같습니다.")]),t._v(" "),r("h3",{attrs:{id:"핀배열"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),r("p",[t._v("C-RTK GPS 핀배열은 아래와 같습니다. 이것은 다른 자동조종보드용 커넥터를 수정할 수 있습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("C-RTK GPS 6P")]),t._v(" "),r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("Pixhawk 3 Pro GPS")]),t._v(" "),r("th",[t._v("C-RTK GPS 4P")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPS_RX")]),t._v(" "),r("td",[t._v("GPS_RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[t._v("GPS_TX")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",[t._v("SCL")]),t._v(" "),r("td",[t._v("GPS_TX")])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[t._v("VCC_5V")]),t._v(" "),r("td",[t._v("5")]),t._v(" "),r("td",[t._v("SDA")]),t._v(" "),r("td",[t._v("VCC_5V")])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("6")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);