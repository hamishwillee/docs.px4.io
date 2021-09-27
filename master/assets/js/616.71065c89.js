(window.webpackJsonp=window.webpackJsonp||[]).push([[616],{2271:function(t,_,r){"use strict";r.r(_);var e=r(19),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"추적-모드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추적-모드"}},[t._v("#")]),t._v(" 추적 모드")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[e("img",{attrs:{src:r(326),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("추적")]),t._v(" 모드를 사용하면 멀티콥터가 MAVLINK message "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#FOLLOW_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("FOLLOW_TARGET"),e("OutboundLink")],1),t._v("을 사용하여 위치를 전송하는 대상을 자율적으로 추적할 수 있습니다.")]),t._v(" "),e("p",[t._v("기체는 지정된 "),e("a",{attrs:{href:"#NAV_FT_FS"}},[t._v("상대 위치")]),t._v(", "),e("a",{attrs:{href:"#NAV_FT_DST"}},[t._v("수평 분리")]),t._v(" 및 홈 "),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v(" 높이 ")]),t._v("에서 목표를 자동으로 추적합니다. 기본적으로 8 미터 거리와 홈/시동 위치에서 8 미터 높이에서 타겟 바로 뒤에서 따라갑니다. 이 모드에서는 사용자 입력이 필요하지 않습니다.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4는 현재 타겟의 고도를 무시하고 홈 위의 일정한 고도를 유지합니다. 이 제한은 지상국 GPS의 고도 소스가 종종 부정확하기 때문입니다.")])]),t._v(" "),e("p",[t._v("이 모드는 GPS 모듈이있는 Android 태블릿의 "),e("em",[t._v("QGroundControl")]),t._v(" 및 "),e("a",{attrs:{href:"https://mavsdk.mavlink.io/develop/en/api_reference/classmavsdk_1_1_follow_me.html"}},[t._v("MAVSDK")]),t._v("에서 지원됩니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ul",[e("li",[t._v("이 모드는 GPS가 필요합니다. *이 모드는 현재 멀티콥터에서만 지원됩니다. * 추적 대상은 위치 정보를 제공할 수 있어야 합니다. * "),e("em",[t._v("QGroundControl")]),t._v("은 GPS가있는 Android 기기에서만 이 모드를 지원합니다.")])])]),t._v(" "),e("p",[t._v("@"),e("a",{attrs:{href:"https://youtu.be/RxDL4CtkzAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"안전-주의-사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#안전-주의-사항"}},[t._v("#")]),t._v(" 안전 주의 사항")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[e("strong",[t._v("추적 모드")]),t._v("는 장애물 회피 유형을 지원하지 않습니다. 이 모드를 사용시에는 특별한 주의가 필요합니다.")])]),t._v(" "),e("p",[t._v("다음의 비행주의 사항을 준수하여야 합니다. - 추적 모드는 나무, 전선, 집 등에 의해 방해받지 않는 넓고 열린 공간에서만 사용하여야 합니다. -"),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v("추적 높이")]),t._v("를 주위 장애물보다 훨씬 높은 값으로 설정합니다. "),e("em",[t._v("기본값")]),t._v("은 홈 (시동) 위치에서 8 미터 위 입니다. - 모드가 자동 이륙을 구현하더라도 착륙시 추적 모드로 전환하는 것보다 추적 모드를 시작하기 전에 수동으로 안전한 높이로 비행하는 것이 "),e("em",[t._v("안전")]),t._v("합니다. - 특히 고속 비행시 정지 가능한 충분한 공간을 확보하십시오. 많은 Android 장치는 위치를 자주 갱신하지 않으며, 속도와 방향의 자동 조종 장치 추정이 정확하지 않을 수 있습니다. - 추적 모드를 처음 사용시에는, 문제들이 발생할 경우를 대비하여 미리 수동 RC 제어를 준비 하십시오. 위치 정보의 정확도는 대상 시스템에서 사용하는 GPS의 품질에 따라 다릅니다. GPS가 정확하지 않으면, 추적 모드가 정확하지 않습니다.")]),t._v(" "),e("h2",{attrs:{id:"qgroundcontrol에서의-추적-모드-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol에서의-추적-모드-사용"}},[t._v("#")]),t._v(" QGroundControl에서의 추적 모드 사용")]),t._v(" "),e("p",[e("em",[t._v("추적")]),t._v(" 모드는 GPS 모듈이 탑재된 지상국 하드웨어의 "),e("em",[t._v("QGroundControl")]),t._v("에서 사용할 수 있습니다. 권장 구성은 텔레메트리를 사용하는 USB OTG 지원 Android 장치입니다.")]),t._v(" "),e("p",[e("em",[t._v("추적")]),t._v(" 모드를 설정하려면 : - 텔레메트리를 Android 장치와 기체에 모두에 장착하여, 두 라디오간에 위치 정보를 전송할 수 있습니다. -Android 기기에서 절전 모드 비활성화 : -이 설정은 일반적으로 ** 설정 > 디스플레이 **에서 찾을 수 있습니다. - GPS 신호가 일정한 간격으로 전송되지 않을 수 있으므로, Android 기기를 절전 모드로 전환되지 않도록 설정하여야 합니다. - 최소 2 ~ 3 미터 높이로 이륙합니다 (자동 이륙이 지원되더라도 권장됨). - 기체를 지면에 놓고 안전 스위치를 누른 다음, 최소 10m 뒤로 물러나십시오. - 시동후에 이륙합니다. - 추적 모드로 전환합니다. - 헬리콥터가 지정된 "),e("a",{attrs:{href:"#NAV_MIN_FT_HT"}},[t._v("최소 높이")]),t._v("까지 상승후. 잠시 대기하여 텔레메트르 연결 상태를 평가합니다. 링크 업데이트 속도가 ON이면 멀티콥터가 목표를 향해 요잉합니다.")]),t._v(" "),e("p",[t._v("이 시점에서 조정자가 움직이면, 멀티콥터는 당신의 움직임을 추적하여야 합니다.")]),t._v(" "),e("p",[t._v("이 모드는 다음 Android 장치에서 테스트되었습니다. - 넥서스 5 - Nexus 7 태블릿")]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("추적 동작은 다음 매개변수를 사용하여 설정합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"NAV_FT_DST"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FT_DST"}},[t._v("NAV_FT_DST")])],1),t._v(" "),e("td",[e("em",[t._v("수평")]),t._v(" (x, y) 평면에서 차량/지상 스테이션 분리. 최소 허용 간격은 1 미터입니다. 기본 거리는 8 미터 (약 26 피트)입니다.")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"NAV_MIN_FT_HT"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_MIN_FT_HT"}},[t._v("NAV_MIN_FT_HT")])],1),t._v(" "),e("td",[t._v("기체 추적 높이. 이 높이는 "),e("em",[t._v("홈/시동 위치를 기준으로")]),t._v(" 고정되어 있습니다 (대상 기체 아님). 기본 및 최소 높이는 8 미터 (약 26 피트)입니다.")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"NAV_FT_FS"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FT_FS"}},[t._v("NAV_FT_FS")])],1),t._v(" "),e("td",[t._v("추적 모드가 활성화되어 있을 때 사용자를 기준으로 한 비행 위치.")])])])]),t._v(" "),e("p",[t._v("-"),e("code",[t._v("0")]),t._v(" = 전면 우측에서 팔로우."),e("br"),t._v("\n-"),e("code",[t._v("1")]),t._v(" = 뒤에서 팔로우 또는 사용자 추적 (기본값)."),e("br"),t._v("\n-"),e("code",[t._v("2")]),t._v(" = 정면에서 따르기."),e("br"),t._v("\n-"),e("code",[t._v("3")]),t._v(" = 정면 왼쪽에서 따르기. |")]),t._v(" "),e("h2",{attrs:{id:"알려진-이슈들"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#알려진-이슈들"}},[t._v("#")]),t._v(" 알려진 이슈들")]),t._v(" "),e("ul",[e("li",[t._v("SiK 915 Mhz "),e("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("텔레메트리")]),t._v("는 일부 Android 기기에서 수신하는 GPS 신호를 방해하는 것으로 알려져 있습니다. 간섭을 피하기 위해 추적 대상 모드를 사용할 때 텔레메트리와 Android 장치를 가능한 멀리 두십시오.")],1)])])}),[],!1,null,null,null);_.default=v.exports},326:function(t,_,r){t.exports=r.p+"assets/img/position_fixed.c1403cf0.svg"}}]);