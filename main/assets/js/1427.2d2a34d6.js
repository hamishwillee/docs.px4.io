(window.webpackJsonp=window.webpackJsonp||[]).push([[1427],{2639:function(e,t,r){"use strict";r.r(t);var a=r(19),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"대기속도-센서-미장착-vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서-미장착-vtol"}},[e._v("#")]),e._v(" 대기속도 센서 미장착 VTOL")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("대기 속도 센서를 사용하는 것이 좋습니다.\n대기속도 센서없이 VTOL에 대한 지원은 실험적인 것으로 간주되며, 숙련된 조종사만 시도해야합니다.")])]),e._v(" "),r("p",[e._v("Fixed-wing vehicles use airspeed sensors to determine the speed at which the airplane is moving through the air. Depending on wind this could vary from groundspeed. Every airplane has a minimum airspeed below which the airplane will stall. In mild weather conditions and with settings significantly above stall speed a VTOL can operate without the use of an airspeed sensor. The settings should also be applicable to non-VTOL fixed-wings but this is currently untested.")]),e._v(" "),r("p",[e._v("이 가이드는 VTOL의 대기속도 센서를 우회에 필요한 매개변수 설정 방법을 설명합니다.")]),e._v(" "),r("h2",{attrs:{id:"준비"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#준비"}},[e._v("#")]),e._v(" 준비")]),e._v(" "),r("p",[e._v("대기속도 센서를 제거하기 전에 먼저 안전한 스로틀 수준을 결정해야합니다. 또한, 순방향 전환 기간을 알아야합니다. 이를 위해 대기속도 센서로 기준 비행을 수행하거나 기체를 수동으로 비행할 수 있습니다. 두 경우 모두 매우 낮은 바람에서 기준 비행을 수행하여야 합니다.")]),e._v(" "),r("p",[e._v("비행은 강풍 조건에서 비행하기에 충분한 속도로 수행되어야 하며 아래와 같이 설정되어야 합니다.")]),e._v(" "),r("ul",[r("li",[e._v("성공적인 순방향 전환")]),e._v(" "),r("li",[e._v("직선 및 수평 비행")]),e._v(" "),r("li",[e._v("적극적인 회전")]),e._v(" "),r("li",[e._v("높은 고도로 고속 상승")])]),e._v(" "),r("h2",{attrs:{id:"로그-검사"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#로그-검사"}},[e._v("#")]),e._v(" 로그 검사")]),e._v(" "),r("p",[e._v("기준 비행 후 로그를 다운로드하고 "),r("RouterLink",{attrs:{to:"/ko/log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" (또는 다른 분석 도구)을 사용하여 로그를 분석합니다. Plot the altitude ("),r("code",[e._v("GPOS.Alt")]),e._v("), thrust ("),r("code",[e._v("ATC1.Thrust")]),e._v("), groundspeed (Expression: "),r("code",[e._v("sqrt(GPS.VelN\\^2 + GPS.VelE\\^2)")]),e._v("), pitch ("),r("code",[e._v("ATT.Pitch")]),e._v(") and roll ("),r("code",[e._v("AT.Roll")]),e._v(").")],1),e._v(" "),r("p",[e._v("Examine the throttle level (thrust) when the vehicle is level (no or little pitch and roll), during the ascend (increasing altitude) and when the vehicle is banking (more roll). The initial value to use as cruise speed should be the highest thrust applied during a roll or ascend, the thrust during level flight should be considered the minimum value if you decide to further tune down your speed.")]),e._v(" "),r("p",[e._v("또한 전면 전환이 완료되는 데 걸린 시간도 기록합니다. 이 값은 최소 전환 시간을 설정하는 데 사용됩니다.  안전상의 이유로 이번에는 + 30%를 추가하여야 합니다.")]),e._v(" "),r("p",[e._v("마지막으로 크루즈 비행 중 지상 속도를 기록하십시오. This can be used to tune your throttle setting after the first flight without an airspeed sensor.")]),e._v(" "),r("h2",{attrs:{id:"매개변수-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[e._v("#")]),e._v(" 매개변수 설정")]),e._v(" "),r("p",[e._v("To bypass the flight checks you need to set the circuit breaker for the airspeed sensor ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[e._v("CBRK_AIRSPD_CHK")]),e._v(") to 162128.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[r("code",[e._v("CBRK_AIRSPD_CHK")]),e._v("를 활성화하면 센서 드라이버가 시작되지 않고 보정이 방지됩니다 (즉, 비행 검사를 우회하는 것 이상을 수행합니다).")])]),e._v(" "),r("p",[e._v("비행 컨트롤러에게 대기속도 센서 없이 날고 있다는 것을 알리려면, 대기 속도 모드를 'Airspeed disabled'("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[e._v("FW_ARSP_MODE = 1")]),e._v(")로 설정하여야 합니다.")],1),e._v(" "),r("p",[e._v("Set the trim throttle ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_TRIM"}},[e._v("FW_THR_TRIM")]),e._v(") to the percentage as determined from the log of the reference flight. Note that QGC scales this from 1..100 and the thrust value from the log is scaled from 0..1. 그러므로, 0.65의 추력을 65로 입력해야합니다. For safety reasons it is recommended to add +- 10% throttle to the determined value for testing a first flight.")],1),e._v(" "),r("p",[e._v("최소 전면전환 시간("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[e._v("VT_TRANS_MIN_TM")]),e._v(")을 기준 비행에서 결정된 초 수로 설정하고 안전을 위해 +- 30%를 추가합니다.")],1),e._v(" "),r("h3",{attrs:{id:"권장-매개-변수-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#권장-매개-변수-선택-사항"}},[e._v("#")]),e._v(" 권장 매개 변수(선택 사항)")]),e._v(" "),r("p",[e._v("Because the risk of stalling is real, it is recommended to set the 'fixed-wing minimum altitude' (a.k.a. 'quad-chute') threshold ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[e._v("VT_FW_MIN_ALT")]),e._v(").")],1),e._v(" "),r("p",[e._v("그러면, VTOL이 멀티콥터 모드로 다시 전환되고 특정 고도 아래에서 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[e._v("복귀 모드")]),e._v("가 시작됩니다. 이 값을 15 미터 또는 20 미터로 설정하여 멀티콥터가 실속에서 회복할 시간을 제공할 수 있습니다.")],1),e._v(" "),r("p",[e._v("The position estimator tested for this mode is EKF2, you can set this by changing the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"대기속도-센서가-없는-첫-비행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서가-없는-첫-비행"}},[e._v("#")]),e._v(" 대기속도 센서가 없는 첫 비행")]),e._v(" "),r("p",[e._v("The values apply to a position controlled flight (like "),r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/hold.html"}},[e._v("Hold mode")]),e._v(" or "),r("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" or Mission mode). It is therefore recommended that a mission is configured at a safe altitude, approximately 10m above the quad-chute threshold.")],1),e._v(" "),r("p",[e._v("기준 비행과 같이, 이 비행은 풍속이 매우 작은 조건에서 수행되어야 합니다. For the first flight the following is recommended:")]),e._v(" "),r("ul",[r("li",[e._v("같은 고도 유지")]),e._v(" "),r("li",[e._v("웨이포인트를 충분히 넓고 급회전이 필요하지 않도록 설정하십시오.")]),e._v(" "),r("li",[e._v("수동 조작이 필요한 경우 시야에 들어오도록 임무를 작게 유지하십시오.")]),e._v(" "),r("li",[e._v("If the airspeed is very high, consider performing a manual back transition by switching to Altitude mode.")])]),e._v(" "),r("p",[e._v("임무가 성공적으로 완료되면, 로그에서 다음 사항을 확인하여야 합니다.")]),e._v(" "),r("ul",[r("li",[e._v("The groundspeed should be considerably above the groundspeed from the reference flight.")]),e._v(" "),r("li",[e._v("고도는 기준 비행보다 크게 낮아서는 안됩니다.")]),e._v(" "),r("li",[e._v("피치 각도는 기준 비행과 일관되게 다르지 않아야합니다.")])]),e._v(" "),r("p",[e._v("이러한 모든 조건이 충족되면, 지면 속도가 기준 비행 속도와 일치할 때까지 작은 단계로 크루즈 스로틀을 조정할 수 있습니다.")]),e._v(" "),r("h2",{attrs:{id:"parameter-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter-overview"}},[e._v("#")]),e._v(" Parameter Overview")]),e._v(" "),r("p",[e._v("The relevant parameters are:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_ARSP_MODE"}},[e._v("FW_ARSP_MODE")]),e._v(": 잘못된 선언 (2)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_AIRSPD_CHK"}},[e._v("CBRK_AIRSPD_CHK")]),e._v(": 162128")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[e._v("SYS_MC_EST_GROUP")]),e._v(": EKF2 (2)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_TRIM"}},[e._v("FW_THR_TRIM")]),e._v(": determined (e.g. 70%)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_TRANS_MIN_TM"}},[e._v("VT_TRANS_MIN_TM")]),e._v(": 결정됨 (예: 10 초)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[e._v("VT_FW_MIN_ALT")]),e._v(": 15")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);