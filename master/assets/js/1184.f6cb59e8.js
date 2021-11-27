(window.webpackJsonp=window.webpackJsonp||[]).push([[1184],{2209:function(_,t,e){"use strict";e.r(t);var v=e(19),a=Object(v.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"대기속도-센서-미장착-vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서-미장착-vtol"}},[_._v("#")]),_._v(" 대기속도 센서 미장착 VTOL")]),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),e("p",[_._v("대기 속도 센서를 사용하는 것이 좋습니다. 대기속도 센서없이 VTOL에 대한 지원은 실험적인 것으로 간주되며, 숙련된 조종사만 시도해야합니다.")])]),_._v(" "),e("p",[_._v("고정익은 대기속도 센서를 사용하여 비행기가 공중을 통과하는 속도를 측정합니다. 바람의 영향에 따라 지면 속도와 차이가 발생합니다. 모든 비행기는 정지하는 최저 속도가 있습니다. 온난한 기상 조건에서 실속 속도보다 훨씬 높은 설정으로 VTOL은 대기속도 센서를 사용하지 않고도 작동할 수 있습니다. 설정은 비 VTOL 고정익에도 적용할 수 있지만, 테스트되지 않았습니다.")]),_._v(" "),e("p",[_._v("이 가이드는 VTOL의 대기속도 센서를 우회에 필요한 매개변수 설정 방법을 설명합니다.")]),_._v(" "),e("h2",{attrs:{id:"준비"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#준비"}},[_._v("#")]),_._v(" 준비")]),_._v(" "),e("p",[_._v("대기속도 센서를 제거하기 전에 먼저 안전한 스로틀 수준을 결정해야합니다. 또한, 순방향 전환 기간을 알아야합니다. 이를 위해 대기속도 센서로 기준 비행을 수행하거나 기체를 수동으로 비행할 수 있습니다. 두 경우 모두 매우 낮은 바람에서 기준 비행을 수행하여야 합니다.")]),_._v(" "),e("p",[_._v("비행은 강풍 조건에서 비행하기에 충분한 속도로 수행되어야 하며 아래와 같이 설정되어야 합니다.")]),_._v(" "),e("ul",[e("li",[_._v("성공적인 순방향 전환")]),_._v(" "),e("li",[_._v("직선 및 수평 비행")]),_._v(" "),e("li",[_._v("적극적인 회전")]),_._v(" "),e("li",[_._v("높은 고도로 고속 상승")])]),_._v(" "),e("h2",{attrs:{id:"로그-검사"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#로그-검사"}},[_._v("#")]),_._v(" 로그 검사")]),_._v(" "),e("p",[_._v("기준 비행 후 로그를 다운로드하고 "),e("RouterLink",{attrs:{to:"/ko/log/flight_log_analysis.html#flightplot"}},[_._v("FlightPlot")]),_._v(" (또는 다른 분석 도구)을 사용하여 로그를 분석합니다. 고도("),e("code",[_._v("GPOS.Alt")]),_._v("), 추력("),e("code",[_._v("ATC1.Thrust")]),_._v("), 지면 속도(식: "),e("code",[_._v("sqrt(GPS.VelN\\^2 + GPS.VelE\\^2)")]),_._v("), 피치("),e("code",[_._v("ATT.Pitch")]),_._v(") 및 롤 ("),e("code",[_._v("AT.Roll")]),_._v(")의 챠트를 그립니다.")],1),_._v(" "),e("p",[_._v("기체가 수평일 때(피치와 롤이 없거나 거의 없음), 상승중(고도 상승) 및 기체가 제자리에 있을 때의(더 많이 롤링) 스로틀 레벨 (추력)을 검사합니다. 순항 속도로 사용할 초기값은 롤링 또는 상승 중에 적용되는 가장 높은 추력이어야하며, 속도를 더 낮추기로 결정한 경우 수평 비행 중 추력을 최소값으로 간주하여야 합니다.")]),_._v(" "),e("p",[_._v("또한 전면 전환이 완료되는 데 걸린 시간도 기록합니다. 이 값은 최소 전환 시간을 설정하는 데 사용됩니다. 안전상의 이유로 이번에는 + 30%를 추가하여야 합니다.")]),_._v(" "),e("p",[_._v("마지막으로 크루즈 비행 중 지상 속도를 기록하십시오. 이것은 대기속도 센서 없이 첫 비행 후 스로틀 설정을 튜닝에 사용할 수 있습니다.")]),_._v(" "),e("h2",{attrs:{id:"매개변수-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[_._v("#")]),_._v(" 매개변수 설정")]),_._v(" "),e("p",[_._v("비행 점검을 우회하려면, 대기속도 센서 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[_._v("CBRK_AIRSPD_CHK")]),_._v(")의 회로 차단기를 162128로 설정해야합니다.")],1),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[e("code",[_._v("CBRK_AIRSPD_CHK")]),_._v("를 활성화하면 센서 드라이버가 시작되지 않고 보정이 방지됩니다 (즉, 비행 검사를 우회하는 것 이상을 수행합니다).")])]),_._v(" "),e("p",[_._v("비행 컨트롤러에게 대기속도 센서 없이 날고 있다는 것을 알리려면, 대기 속도 모드를 'Airspeed disabled'("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[_._v("FW_ARSP_MODE = 1")]),_._v(")로 설정하여야 합니다.")],1),_._v(" "),e("p",[_._v("순항 스로틀("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[_._v("FW_THR_CRUISE")]),_._v(")을 기준 비행의 로그에서 결정된 백분율로 설정합니다. QGC는 이 값을 1..100에서 스케일하고, 로그의 추력 값은 0..1에서 스케일링합니다. 그러므로, 0.65의 추력을 65로 입력해야합니다. 안전상의 이유로 첫 번째 비행을 테스트하기 위해 결정된 값에 +10% 스로틀을 추가하는 것이 좋습니다.")],1),_._v(" "),e("p",[_._v("최소 전면전환 시간("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[_._v("VT_TRANS_MIN_TM")]),_._v(")을 기준 비행에서 결정된 초 수로 설정하고 안전을 위해 +- 30%를 추가합니다.")],1),_._v(" "),e("h3",{attrs:{id:"권장-매개-변수-선택-사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#권장-매개-변수-선택-사항"}},[_._v("#")]),_._v(" 권장 매개 변수(선택 사항)")]),_._v(" "),e("p",[_._v("실속 위험이 실제적이므로 'QuadChute'("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[_._v("VT_FW_MIN_ALT")]),_._v(")로 불리는 '고정익 최소 고도'를 설정하는 것이 바람직합니다. 그러면, VTOL이 멀티콥터 모드로 다시 전환되고 특정 고도 아래에서 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[_._v("복귀 모드")]),_._v("가 시작됩니다. 이 값을 15 미터 또는 20 미터로 설정하여 멀티콥터가 실속에서 회복할 시간을 제공할 수 있습니다.")],1),_._v(" "),e("p",[_._v("이 모드에 대해 테스트된 위치 추정기는 EKF2입니다. "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[_._v("SYS_MC_EST_GROUP")]),_._v("을 변경하여 설정합니다.")],1),_._v(" "),e("h2",{attrs:{id:"대기속도-센서가-없는-첫-비행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서가-없는-첫-비행"}},[_._v("#")]),_._v(" 대기속도 센서가 없는 첫 비행")]),_._v(" "),e("p",[_._v("값은 위치 제어 비행에 적용됩니다 (예: "),e("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[_._v("유지 모드")]),_._v(" 또는 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[_._v("임무 모드")]),_._v("). 따라서 임무는 QuadChute 임계치보다 약 10m 높은 안전한 고도로 설정하는 것이 좋습니다. 기준 비행과 같이, 이 비행은 풍속이 매우 작은 조건에서 수행되어야 합니다. 첫 비행의 경우 다음 사항들을 권장합니다.")],1),_._v(" "),e("ul",[e("li",[_._v("같은 고도 유지")]),_._v(" "),e("li",[_._v("웨이포인트를 충분히 넓고 급회전이 필요하지 않도록 설정하십시오.")]),_._v(" "),e("li",[_._v("수동 조작이 필요한 경우 시야에 들어오도록 임무를 작게 유지하십시오.")]),_._v(" "),e("li",[_._v("대기 속도가 매우 높으면 고도 모드로 전환하여 수동 역전환을 고려하십시오.")])]),_._v(" "),e("p",[_._v("임무가 성공적으로 완료되면, 로그에서 다음 사항을 확인하여야 합니다.")]),_._v(" "),e("ul",[e("li",[_._v("지면 속도는 기준 비행에서 지면 속도보다 상당히 높아야 합니다.")]),_._v(" "),e("li",[_._v("고도는 기준 비행보다 크게 낮아서는 안됩니다.")]),_._v(" "),e("li",[_._v("피치 각도는 기준 비행과 일관되게 다르지 않아야합니다.")])]),_._v(" "),e("p",[_._v("이러한 모든 조건이 충족되면, 지면 속도가 기준 비행 속도와 일치할 때까지 작은 단계로 크루즈 스로틀을 조정할 수 있습니다.")]),_._v(" "),e("h2",{attrs:{id:"관련-매개-변수에-대한-간략한-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#관련-매개-변수에-대한-간략한-개요"}},[_._v("#")]),_._v(" 관련 매개 변수에 대한 간략한 개요")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[_._v("FW_ARSP_MODE")]),_._v(": 잘못된 선언 (2)")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[_._v("CBRK_AIRSPD_CHK")]),_._v(": 162128")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[_._v("SYS_MC_EST_GROUP")]),_._v(": EKF2 (2)")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[_._v("FW_THR_CRUISE")]),_._v(": 결정됨 (예 : 70 %)")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[_._v("VT_TRANS_MIN_TM")]),_._v(": 결정됨 (예: 10 초)")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[_._v("VT_FW_MIN_ALT")]),_._v(": 15")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);