(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1372:function(t,e,r){t.exports=r.p+"assets/img/rtk_fem_miniII_receiver.38b5f96d.jpg"},1373:function(t,e,r){t.exports=r.p+"assets/img/rtk_fem_miniII_1.58cf8787.jpg"},1374:function(t,e,r){t.exports=r.p+"assets/img/rtk_fem_miniII_2.c9d9094c.jpg"},1375:function(t,e,r){t.exports=r.p+"assets/img/rtk_fem_fb_1.d46ee0f3.jpg"},1376:function(t,e,r){t.exports=r.p+"assets/img/rtk_fem_fb_2.9db249d3.jpg"},2822:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"femtones-mini2-수신기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#femtones-mini2-수신기"}},[t._v("#")]),t._v(" Femtones MINI2 수신기")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.femtomes.com/#/MiniII?type=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("MINI2 Receiver"),a("OutboundLink")],1),t._v(" is an RTK GPS receiver that delivers high-rate and reliable RTK initialization for centimeter level positioning. It is intended for applications that require high-precision positioning (e.g. navigation and mapping, etc.).")]),t._v(" "),a("p",[t._v("수신기는 직렬 포트 (UART)를 통하여 PX4에 연결되며, 표준 웹 브라우저를 사용하여 설정할 수 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1372),alt:"MINI II 수신기"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이더넷, CAN 및 USB용 PX4 드라이버는 현재 개발 중입니다.")])]),t._v(" "),a("h2",{attrs:{id:"필수-펌웨어-옵션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#필수-펌웨어-옵션"}},[t._v("#")]),t._v(" 필수 펌웨어 옵션")]),t._v(" "),a("p",[t._v("장치 구매시 다음 펌웨어 옵션을 선택하여야 합니다.")]),t._v(" "),a("ul",[a("li",[t._v("5Hz, 10Hz, 20Hz")]),t._v(" "),a("li",[t._v("INS")]),t._v(" "),a("li",[t._v("HEADING")]),t._v(" "),a("li",[t._v("OBS")]),t._v(" "),a("li",[t._v("RTK")]),t._v(" "),a("li",[t._v("BASE")])]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("Contact "),a("a",{attrs:{href:"http://www.femtomes.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Femtones"),a("OutboundLink")],1),t._v(" directly for sales quote:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("전자메일:")]),t._v(" "),a("a",{attrs:{href:"mailto:sales@femtomes.com"}},[t._v("sales@femtomes.com")])]),t._v(" "),a("li",[a("strong",[t._v("전화:")]),t._v(" +86-10-53779838")])]),t._v(" "),a("h2",{attrs:{id:"기능성-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기능성-포트"}},[t._v("#")]),t._v(" 기능성 포트")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1373),alt:"MINI II 1"}})]),t._v(" "),a("h2",{attrs:{id:"배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.femtomes.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("MINI2 수신기"),a("OutboundLink")],1),t._v("는 데이터용 비행 콘트롤러(GPS 포트)의 UART에 연결됩니다. 모듈에 전원을 공급하기 위하여, 별도의 12V 전원공급장치가 필요합니다. 12핀 커넥터 핀은 아래와 같이 번호가 지정됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1374),alt:"MINI_II_2"}})]),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("p",[t._v("방향 추정을 위해 두 안테나는 같은 높이에 있어야하고, 서로 최소 30cm 떨어져 있어야합니다. 두 GPS가 향하는 방향은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" 매개변수로 설정할 수 있습니다.")],1),t._v(" "),a("p",[t._v("Configure the serial port on which the "),a("a",{attrs:{href:"http://www.femtomes.com/#/MiniII?type=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("MINI2 Receiver"),a("OutboundLink")],1),t._v(" will run using "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v(", and set the baud rate to 115200 using "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS1_BAUD")]),t._v(".")],1),t._v(" "),a("p",[t._v("설정후에는 수신기는 다른 "),a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v("와 동일한 방식으로 사용됩니다 (즉, Survey-in 프로세스와 관련하여).")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("p",[t._v("MINI2는 다음 구성 요소를 통합합니다.")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.femtomes.com/#/FB672",target:"_blank",rel:"noopener noreferrer"}},[t._v("FB672"),a("OutboundLink")],1),t._v(": Compact, dual antenna, dual frequency GNSS OEM board (delivers centimeter accurate position and precise heading).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1375),alt:"FB672"}})])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://www.femtomes.com/#/FB6A0",target:"_blank",rel:"noopener noreferrer"}},[t._v("FB6A0"),a("OutboundLink")],1),t._v(": Compact, quadruple frequency GNSS OEM board (delivers centimeter-accurate positioning)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1376),alt:"FB6A0"}})])])]),t._v(" "),a("p",[t._v("자세한 제품 매뉴얼은 공식 웹 사이트와 제조사에 문의하십시오.")])])}),[],!1,null,null,null);e.default=s.exports}}]);