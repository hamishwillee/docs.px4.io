(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{2512:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-배선-개요"}},[t._v("#")]),t._v(" Pixhawk  배선 개요")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동 항법 장치를 제조하지 않습니다. 하드웨어 지원이나 호환 문제는 [제조사](https://store.mrobotics.io/)에 문의하십시오. :::")]),t._v(" "),r("p",[r("em",[t._v("3DR Pixhawk")]),t._v(" 비행 콘트롤러 전원 공급방법과 주변 장치 연결방법을 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(548),alt:"Pixhawk4 이미지"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")]),t._v("는 더 이상 3DR에서 제공하지 않습니다. :::note "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")]),t._v("는 더 이상 3DR에서 제공하지 않습니다. :::")],1),t._v(" "),r("h2",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v("아래 이미지는 표준 Pixhawk 연결을 나타냅니다 (모터 및 서보 출력 제외). 다음 섹션에서 각 장치에 대해 자세히 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(549),alt:"Pixhawk  배선 개요"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("자세한 배선 정보는 "),r("a",{attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("아래")]),t._v("에서 설명합니다. :::")]),t._v(" "),r("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),r("p",[r("em",[t._v("Pixhawk")]),t._v("는 키트에 포함된 진동 방지 패드를 프레임에 장착하여야 합니다. 차량의 무게 중심에 최대한 가까운 위치에 장착하여야하며, 화살표가 차량의 전방과 상향을 향하도록 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(550),alt:"Pixhawk 장착 및 방향"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(". :::")],1),t._v(" "),r("h2",{attrs:{id:"부저와-안전-스위치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#부저와-안전-스위치"}},[t._v("#")]),t._v(" 부저와 안전 스위치")]),t._v(" "),r("p",[t._v("포함된 부저와 안전 스위치를 아래의 그림과 같이 연결하십시오 (필수).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(551),alt:"Pixhawk 장착 및 방향"}})]),t._v(" "),r("h2",{attrs:{id:"gps와-나침반"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps와-나침반"}},[t._v("#")]),t._v(" GPS와 나침반")]),t._v(" "),r("p",[t._v("키트에 제공된 6선 케이블을 사용하여 GPS (필수)를 GPS 포트에 연결합니다. 다른 방법으로는, 4선 케이블을 사용하여 I2C 포트에 나침반을 연결합니다 (Pixhawk에는 필요한 경우 사용할 수있는 내부 나침반이 있음).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("아래 다이어그램은 결합된 GPS와 나침반을 나타냅니다.\nGPS/나침반은 차량 전방 표식를 사용하여 가능하면 전자 장치들에서 멀리 떨어진 프레임에 장착하는 것이 좋습니다. 나침반은 다른 전자 장치와 떨어지면 간섭이 줄어듦니다.")])])])])])]),t._v(" "),r("p",[r("img",{attrs:{src:s(552),alt:"나침반/GPS를 Pixhawk에 연결"}})]),t._v(" "),r("h2",{attrs:{id:"전원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),r("p",[t._v("그림과 같이 6선 케이블을 사용하여 "),r("em",[t._v("전원 모듈")]),t._v("(PM)의 출력을 "),r("strong",[t._v("POWER")]),t._v(" 포트에 연결합니다. 전원 모듈의 입력은 LiPo 배터리에 연결하여  배전판을 통하여 메인 출력은 차량 ESC/모터에 전원을 공급합니다.")]),t._v(" "),r("p",[t._v("전원 모듈은 비행 콘트롤러에 전원을 공급하고 모듈을 통해 공급되는 아날로그 전류 및 전압에 대한 정보를 전송합니다 (비행 콘트롤러 및 모터에 대한 전원 포함).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(553),alt:"Pixhawk - 전원 모듈"}})]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("전원 모듈은 비행 콘트롤러 자체에 전원을 공급하지만, 콘트롤러의 출력 포트 (레일)에 연결된 서보 및 기타 하드웨어에 전원을 공급하지 않습니다. 멀티콥터의 경우 모터에 별도로 전원이 공급되기 때문에 이것은 중요하지 않습니다.")])]),t._v(" "),r("p",[t._v("비행기 및 VTOL의 경우 방향타, 엘레 본 등의 서보를 구동하기 위하여 출력 레일에 별도의 전원을 공급하여야 합니다. 종종 메인 푸셔/풀러 모터는 Pixhawk 출력 레일에 연결할 수있는 통합 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Battery_eliminator_circuit",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEC"),r("OutboundLink")],1),t._v("가 내장된 ESC를 사용합니다. BEC가 없으면, Pixhawk 포트에 연결하기 위해 5V BEC를 장찫하여야합니다. 전원이 없으면 서보가 작동하지 않습니다.")]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("라디오 리모트 컨트롤(RC)은 기체를 "),r("em",[t._v("수동")]),t._v("으로 조작합니다. PX4 자율 비행 모드에는 RC는 필수 요구 사항은 아닙니다.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택")]),t._v("후 "),r("em",[t._v("바인딩")]),t._v("을 하여야 통신이 가능합니다. 송신기/수신기의 매뉴얼을 참고하십시오.")],1),t._v(" "),r("p",[t._v("아래 지침은 여러 종류의 수신기를 Pixhawk에 연결한는 방법을 설명합니다.")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum 및 DSM 수신기는 "),r("strong",[t._v("SPKT/DSM")]),t._v(" 포트에 연결합니다. "),r("img",{attrs:{src:s(554),alt:"Pixhawk  - Spektrum 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM-SUM 및 S.BUS 수신기는 그림과 같이 "),r("strong",[t._v("RC")]),t._v(" 접지, 전원 및 신호 핀에 연결합니다. "),r("img",{attrs:{src:s(555),alt:"Pixhawk  - PPM/S.BUS 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[r("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시 "),r("strong",[t._v("PPM RC")]),t._v("포트에 "),r("em",[t._v("PPM 인코더를 통해")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),r("OutboundLink")],1),t._v("연결합니다. PPM-Sum 수신기는 모든 채널에 하나의 케이블만 사용합니다.")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[t._v("무선 텔레메트리는 지상국 프로그램의 비행 차량 통신 제어용입니다(예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음). 아래 그림과 같이 하나의 RC 수신기를 차량에 연결하여야 합니다. 다른 RC 송신기는 지상국 컴퓨터 또는 모바일 장치에 USB를 통하여 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(556),alt:"Pixhawk/무선 텔레메트리"}})]),t._v(" "),r("h2",{attrs:{id:"모터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),r("p",[t._v("지원되는 모든 기체의 MAIN/AUX 출력 포트와 모터/서보 간의 매핑은 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에 기술되어 있습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames).\n해당 기체의 프레임의  정확한 모터 연결 여부를 확인하십시오.")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v('프레임이 기체 참조 정의서에 없으면, 적절한 유형의 "일반"기체를 사용하십시오.')])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("출력 레일은 위의 "),r("a",{attrs:{href:"#power"}},[t._v("전원")]),t._v(" 섹션에 설명한 것과 같이 별도의 전원이 공급되어야합니다. :::")]),t._v(" "),r("h2",{attrs:{id:"기타-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),r("p",[t._v("선택사항인 주변 장치들의 배선과 설정 방법은 개별 "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("더 자세한 일반 설정 방법은 "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동항법장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("p",[t._v("QuadPlane에 대한 자세한 설정은 "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"자세한-배선-정보-헬기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#자세한-배선-정보-헬기"}},[t._v("#")]),t._v(" 자세한 배선 정보 (헬기)")]),t._v(" "),r("p",[r("img",{attrs:{src:s(557),alt:"QuadCopter Pixhawk 배선 인포 그래픽"}})]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")])],1)])])])}),[],!1,null,null,null);a.default=e.exports},548:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_logo_view.431588e6.jpg"},549:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_wiring_overview.8586b561.jpg"},550:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_mounting_and_foam.d1a1aa4c.jpg"},551:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_buzzer_and_safety_switch.3702efed.jpg"},552:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_compass_gps.2eaea17a.jpg"},553:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_power_module.84f59322.jpg"},554:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_receiver_spektrum.e6b4bd8c.jpg"},555:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_receiver_ppm_sbus.2e12bbae.jpg"},556:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_3dr_telemetry_radio.9bb13c23.jpg"},557:function(t,a,s){t.exports=s.p+"assets/img/pixhawk_infographic2.4fef0b60.jpg"}}]);