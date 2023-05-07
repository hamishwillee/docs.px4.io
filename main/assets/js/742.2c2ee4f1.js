(window.webpackJsonp=window.webpackJsonp||[]).push([[742],{2496:function(t,_,e){"use strict";e.r(_);var r=e(19),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"항속센서-보정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#항속센서-보정"}},[t._v("#")]),t._v(" 항속센서 보정")]),t._v(" "),r("p",[t._v("항속 보정 오프셋을 결정하기 위하여 항속이 0인 안정적인 기준선을 측정하여야 합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[t._v("속도 센서")]),t._v("는 고정익과 VTOL 기체에 적극 권장됩니다.")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("대부분의 다른 센서 드라이버와 달리 항속 센서 드라이버는 자동으로 시작되지 않습니다. 보정하기전에 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("해당 매개변수를 활성화")]),t._v("하여야 합니다.")],1),t._v(" "),r("ul",[r("li",[t._v("Sensirion SDP3X ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[t._v("SENS_EN_SDP3X")]),t._v(")")],1),t._v(" "),r("li",[t._v("TE MS4525 ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS4525DO"}},[t._v("SENS_EN_MS4525DO")]),t._v(")")],1),t._v(" "),r("li",[t._v("TE MS5525 ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS5525DS"}},[t._v("SENS_EN_MS5525DS")]),t._v(")")],1),t._v(" "),r("li",[t._v("이글 트리 항속 센서 ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_ETSASPD"}},[t._v("SENS_EN_ETSASPD")]),t._v(")")],1)])]),t._v(" "),r("h2",{attrs:{id:"보정-절차"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보정-절차"}},[t._v("#")]),t._v(" 보정 절차")]),t._v(" "),r("p",[t._v("항속 보정 오프셋을 결정하기 위하여 항속이 0인 안정적인 기준선을 측정하여야 합니다. 피토 위에 손을 대고 바람을 차단한 채로(실내에서 센서를 보정할 필요가 없는 경우) 입을 사용하여 튜브에 불어 넣습니다 (보정 완료 신호를 보내기 위해).")]),t._v(" "),r("p",[t._v("항속 센서 보정 절차")]),t._v(" "),r("ol",[r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("을 시작하고 기체를 연결합니다.")])]),t._v(" "),r("li",[r("p",[t._v("위의 "),r("em",[t._v("경고")]),t._v("와 같이 아직 수행하지 않은 경우 속도센서를 활성화합니다.")])]),t._v(" "),r("li",[r("p",[t._v("상단 도구 모음에서 "),r("strong",[t._v("톱니 바퀴")]),t._v(" 아이콘(기체 설정)을 선택한 다음에, 가장자리 표시줄에서 "),r("strong",[t._v("센서")]),t._v("를 선택합니다.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("대기속도")]),t._v(" 센서 버튼을 클릭합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(640),alt:"대기속도 보정"}})])]),t._v(" "),r("li",[r("p",[t._v("센서로 부는 바람을 막으십시오 (예: 손을 컵 모양으로 감쌀 수 있습니다). 피톳 튜브의 구멍을 막지 않도록 주의하십시오.")])]),t._v(" "),r("li",[r("p",[t._v("보정을 시작하려면 "),r("strong",[t._v("확인")]),t._v("을 클릭합니다.")])]),t._v(" "),r("li",[r("p",[t._v("피톳 튜브의 끝에 입으로 바람을 불어 보정 완료 신호를 보냅니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")])])])]),t._v(" "),r("p",[t._v("튜브에 분사하는 것은 동적 및 정적 포트가 올바르게 설치되었는지 확인하는 기본 검사이기도합니다.\n교체한  센서는 튜브에 바람을 불어 넣을 때 큰 음의 차압을 판독하고 보정이 오류와 함께 중단됩니다.\n:::")]),t._v(" "),r("ol",[r("li",[t._v("덮개를 제거하기 전에 2-3 초간 기다립니다(몇 초 후 캘리브레이션이 자동으로 완료됩니다).")])]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#airspeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 센서"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=s.exports},640:function(t,_,e){t.exports=e.p+"assets/img/sensor_airspeed.f6803c33.jpg"}}]);