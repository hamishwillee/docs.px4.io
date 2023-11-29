(window.webpackJsonp=window.webpackJsonp||[]).push([[1512],{2811:function(t,e,o){"use strict";o.r(e);var a=o(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"terrain-following-holding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#terrain-following-holding"}},[t._v("#")]),t._v(" Terrain Following/Holding")]),t._v(" "),o("p",[t._v("PX4 supports "),o("a",{attrs:{href:"#terrain_following"}},[t._v("Terrain Following")]),t._v(" and "),o("a",{attrs:{href:"#terrain_hold"}},[t._v("Terrain Hold")]),t._v(" in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),o("em",[t._v("multicopters")]),t._v(" and "),o("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v('PX4는 임무 모드에서는 지형 추적을 "기본적으로" 지원하지 않습니다. *QGroundControl*을 사용하여 지형을 *대략* 따르는 임무를 정의 할 수 있습니다 (이는 지형 위의 높이를 기준으로 웨이포인트 고도를 설정하며, 웨이포인트의 지형 높이는 지도 데이터베이스에서 가져옴).')])]),t._v(" "),o("p",[o("a",{attrs:{id:"terrain_following"}})]),t._v(" "),o("h2",{attrs:{id:"지형-추적"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지형-추적"}},[t._v("#")]),t._v(" 지형 추적")]),t._v(" "),o("p",[o("em",[t._v("지형 추적")]),t._v("을 사용하면 기체가 저고도 비행시 지면에서 비교적 일정한 고도를 자동으로 유지할 수 있습니다. 이것은 장애물을 피하고 다양한 지형을 비행시 일정 고도 유지에 유용합니다 (예 : 항공 사진).")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This feature can be enabled in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),o("em",[t._v("multicopters")]),t._v(" and "),o("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1)]),t._v(" "),o("p",[o("em",[t._v("지형 추적")]),t._v("이 활성화되면 PX4는 EKF 추정기의 출력을 사용하여 고도 추정치를 제공하고 추정 지형 고도 (다른 추정기를 사용하여 거리 센서 측정에서 계산)를 제공하여 고도 설정치를 제공합니다. 지면까지의 거리가 변하면, 고도 설정 값이 조정되어지면 위의 높이를 일정하게 유지합니다.")]),t._v(" "),o("p",[t._v("At higher altitudes (when the estimator reports that the distance sensor data is invalid) the vehicle switches to "),o("em",[t._v("altitude following")]),t._v(", and will typically fly at a near-constant height above mean sea level (AMSL) using an absolute height sensor for altitude data.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("More precisely, the vehicle will use the available selected sources of altitude data as defined "),o("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#height"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("지형 추적은 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[t._v("MPC_ALT_MODE")]),t._v("를 "),o("code",[t._v("1")]),t._v("로 설정하면 활성화됩니다.")],1),t._v(" "),o("p",[o("a",{attrs:{id:"terrain_hold"}})]),t._v(" "),o("h2",{attrs:{id:"지형-유지"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지형-유지"}},[t._v("#")]),t._v(" 지형 유지")]),t._v(" "),o("p",[o("em",[t._v("지형 유지")]),t._v("는 거리 센서를 사용하여 고도 제어 모드에서 기체가 낮은 고도에서 수평으로 고정되어 있을 때 지면에서 일정한 높이를 유지하도록 도와줍니다. 이를 통해 기체는 기압계 드리프트 또는 로터 세척으로 인한 과도한 기압계 간섭으로 인한 고도 변화를 피할 수 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This feature can be enabled in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),o("em",[t._v("multicopters")]),t._v(" and "),o("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("수평으로 ("),o("code",[t._v("속도 >")]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_MAX_XY"}},[t._v("MPC_HOLD_MAX_XY")]),t._v(") 이동하거나 거리 센서가 유효한 데이터를 제공하는 고도 이상으로 이동할 때 기체는 "),o("em",[t._v("추종 고도")]),t._v("로 전환됩니다.")],1),t._v(" "),o("p",[t._v("지형 유지는"),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[t._v("MPC_ALT_MODE")]),t._v("를 "),o("code",[t._v("2")]),t._v("로 설정하면 활성화됩니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[o("em",[t._v("지형 유지")]),t._v("는 "),o("a",{attrs:{href:"#terrain_following"}},[t._v("지형 추적")]),t._v("과 유사하게 구현됩니다. EKF 추정기의 출력을 사용하여 고도 추정치를 제공하고 추정 지형 고도 (별도의 단일 상태 지형 추정기를 사용하여 거리 센서 측정에서 계산 됨)를 사용하여 고도 설정치를 제공합니다. 외부 힘으로 인해 지면까지의 거리가 변경되면, 지면 위의 높이를 일정하게 유지하기 위해 고도 설정 값이 조정됩니다.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);