(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{2111:function(_,t,e){"use strict";e.r(t);var v=e(18),a=Object(v.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"지형-추적-유지-범위-지원"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지형-추적-유지-범위-지원"}},[_._v("#")]),_._v(" 지형 추적/유지 & 범위 지원")]),_._v(" "),e("p",[_._v("PX4는 "),e("em",[_._v("멀티 콥터")]),_._v("에서 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[_._v("고도 모드")]),_._v("에서 "),e("a",{attrs:{href:"#terrain_following"}},[_._v("지형 추적")]),_._v(" 및 "),e("a",{attrs:{href:"#terrain_hold"}},[_._v("지형 유지")]),_._v(", 및 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("거리 센서")]),_._v("가 있는 "),e("em",[_._v("MC 모드의 VTOL 차량")]),_._v("를 지원합니다.")],1),_._v(" "),e("p",[_._v("PX4는 모든 모드에서 저속 저고도("),e("a",{attrs:{href:"#range_aid"}},[_._v("범위지원")]),_._v(")에서 비행시 "),e("a",{attrs:{href:"#distance_sensor_primary_altitude_source"}},[_._v("고도 데이터의 기본 소스")]),_._v("로 "),e("em",[_._v("거리 센서")]),_._v("를사용합니다.")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v('PX4는 임무 모드에서는 지형 추적을 "기본적으로" 지원하지 않습니다. *QGroundControl*을 사용하여 지형을 *대략* 따르는 임무를 정의 할 수 있습니다 (이는 지형 위의 높이를 기준으로 웨이포인트 고도를 설정하며, 웨이포인트의 지형 높이는 지도 데이터베이스에서 가져옴).')])]),_._v(" "),e("p",[e("span",{attrs:{id:"terrain_following"}})]),_._v(" "),e("h2",{attrs:{id:"지형-추적"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지형-추적"}},[_._v("#")]),_._v(" 지형 추적")]),_._v(" "),e("p",[e("em",[_._v("지형 추적")]),_._v("을 사용하면 기체가 저고도 비행시 지면에서 비교적 일정한 고도를 자동으로 유지할 수 있습니다. 이것은 장애물을 피하고 다양한 지형을 비행시 일정 고도 유지에 유용합니다 (예 : 항공 사진).")]),_._v(" "),e("p",[_._v("이 기능은 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("와 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[_._v("고도 모드")]),_._v(", "),e("em",[_._v("멀티콥터")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("거리 센서")]),_._v("를 장착한 "),e("em",[_._v("MC 모드의 VTOL 기체")]),_._v("에서 사용할 수 있습니다.\n:::")],1),_._v(" "),e("p",[e("em",[_._v("지형 추적")]),_._v("이 활성화되면 PX4는 EKF 추정기의 출력을 사용하여 고도 추정치를 제공하고 추정 지형 고도 (다른 추정기를 사용하여 거리 센서 측정에서 계산)를 제공하여 고도 설정치를 제공합니다. 지면까지의 거리가 변하면, 고도 설정 값이 조정되어지면 위의 높이를 일정하게 유지합니다.")]),_._v(" "),e("p",[_._v("더 높은 고도에서 (추정기가 거리 센서 데이터가 유효하지 않다고보고하는 경우) 기체는 "),e("em",[_._v("다음 고도")]),_._v("로 전환되며, 일반적으로 기압계를 사용하여 고도 데이터를 측정하여 평균 해발(AMSL) 위의 거의 일정한 고도로 비행합니다.")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("보다 정확하게는 기체는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[_._v("EKF2_HGT_MODE")]),_._v("에 정의한 "),e("em",[_._v("고도 데이터의 기본 소스")]),_._v("를 사용합니다. 이것은 기본적으로 기압계입니다.")],1)]),_._v(" "),e("p",[_._v("지형 추적은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[_._v("MPC_ALT_MODE")]),_._v("를 "),e("code",[_._v("1")]),_._v("로 설정하면 활성화됩니다.")],1),_._v(" "),e("p",[e("span",{attrs:{id:"terrain_hold"}})]),_._v(" "),e("h2",{attrs:{id:"지형-유지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지형-유지"}},[_._v("#")]),_._v(" 지형 유지")]),_._v(" "),e("p",[e("em",[_._v("지형 유지")]),_._v("는 거리 센서를 사용하여 고도 제어 모드에서 기체가 낮은 고도에서 수평으로 고정되어 있을 때 지면에서 일정한 높이를 유지하도록 도와줍니다. 이를 통해 기체는 기압계 드리프트 또는 로터 세척으로 인한 과도한 기압계 간섭으로 인한 고도 변화를 피할 수 있습니다.")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("이 기능은 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("와 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[_._v("고도 모드")]),_._v(", "),e("em",[_._v("멀티콥터")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("거리 센서")]),_._v("를 장착한 "),e("em",[_._v("MC 모드의 VTOL 기체")]),_._v("에서 사용할 수 있습니다.")],1)]),_._v(" "),e("p",[_._v("수평으로 ("),e("code",[_._v("속도 >")]),_._v(" "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_MAX_XY"}},[_._v("MPC_HOLD_MAX_XY")]),_._v(") 이동하거나 거리 센서가 유효한 데이터를 제공하는 고도 이상으로 이동할 때 기체는 "),e("em",[_._v("추종 고도")]),_._v("로 전환됩니다.")],1),_._v(" "),e("p",[_._v("지형 유지는"),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[_._v("MPC_ALT_MODE")]),_._v("를 "),e("code",[_._v("2")]),_._v("로 설정하면 활성화됩니다.")],1),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[e("em",[_._v("지형 유지")]),_._v("는 "),e("a",{attrs:{href:"#terrain_following"}},[_._v("지형 추적")]),_._v("과 유사하게 구현됩니다. EKF 추정기의 출력을 사용하여 고도 추정치를 제공하고 추정 지형 고도 (별도의 단일 상태 지형 추정기를 사용하여 거리 센서 측정에서 계산 됨)를 사용하여 고도 설정치를 제공합니다. 외부 힘으로 인해 지면까지의 거리가 변경되면, 지면 위의 높이를 일정하게 유지하기 위해 고도 설정 값이 조정됩니다.")])]),_._v(" "),e("p",[e("span",{attrs:{id:"distance_sensor_primary_altitude_source"}})]),_._v(" "),e("h2",{attrs:{id:"높이의-주요-소스인-거리-센서"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#높이의-주요-소스인-거리-센서"}},[_._v("#")]),_._v(" 높이의 주요 소스인 거리 센서")]),_._v(" "),e("p",[_._v("PX4를 사용하면 거리 센서를 "),e("em",[_._v("고도 데이터의 기본 소스")]),_._v(" (모든 비행 모드/기체 유형에서)로 만들 수 있습니다. 이는 기압계를 사용할 수 없거나 기체가 거의 평평한 표면 (예 : 실내) 위로만 비행을 "),e("em",[_._v("보장")]),_._v("하는 애플리케이션에 유용할 수 있습니다.")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("대부분의 사용 사례에서 기본 및 선호되는 고도 센서는 기압계입니다 (사용 가능한 경우).")])]),_._v(" "),e("p",[_._v("거리 센서를 주요 높이 소스로 사용할 때 플라이어는 다음 사항에 유의하여야 합니다.")]),_._v(" "),e("ul",[e("li",[_._v("장애물 위로 비행하면 추정기가 거리계 데이터를 거부할 수 있으며 (내부 데이터 일관성 검사로 인해), 추정기가 낮은 고도 유지를 초래할 수 있습니다. 가속도계 추정치에만 의존하고 있습니다.")])]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("이 시나리오는 기체가 지상에서 거의 일정한 높이에서 경사를 상승하는 경우에 발생할 수 있습니다. 왜냐하면, 거리계의 고도는 가속도계에서 추정한 고도는 변하지 않기 때문입니다."),e("br"),_._v("\nECL은 측정과 현재 상태 사이의 오류는 물론 상태의 추정 된 분산과 측정 자체의 분산을 고려하는 혁신 일관성 검사를 수행합니다. 검사에 실패하면 거리계 데이터가 거부되고 고도는 가속도계에서 추정됩니다. 일관되지 않은 데이터 5 초 후 추정기는 현재 거리 센서 데이터와 일치하도록 상태 (이 경우 높이)를 재설정합니다. 예를 들어, 기체가 하강하거나 예상 높이가 측정된 거리계 높이와 일치하도록 드리프트하는 경우에도 측정 값이 다시 일관될 수 있습니다. ")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("로컬 NED 원점은 지면과 함께 위아래로 이동합니다.")])]),_._v(" "),e("li",[e("p",[_._v("고르지 않은 표면(예 : 나무)에서 거리 측정기 성능이 매우 나빠서 노이즈가 많고 데이터가 일관되지 않을 수 있습니다. 이것은 다시 낮은 고도 유지로 이어집니다.")])])]),_._v(" "),e("p",[_._v("이 기능은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[_._v("EKF2_HGT_MODE = 2")]),_._v(" 설정으로 활성화됩니다.")],1),_._v(" "),e("p",[e("span",{attrs:{id:"range_aid"}})]),_._v(" "),e("h2",{attrs:{id:"거리-보조-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#거리-보조-장치"}},[_._v("#")]),_._v(" 거리 보조 장치")]),_._v(" "),e("p",[e("em",[_._v("거리 보조 장치")]),_._v("은 저속 저고도 비행 중 높이 추정의 기본 소스로 거리 센서를 사용하지만, 그렇지 않으면 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[_._v("EKF2_HGT_MODE")]),_._v("에 정의된 고도 데이터의 기본 소스를 사용합니다 (일반적으로 기압계). 기압계 설정이 로터 세척의 간섭이 과도하고, EKF 상태 추정치를 손상시킬 수있는 경우에 주로 "),e("em",[_._v("이착륙")]),_._v("을 위한 것입니다.")],1),_._v(" "),e("p",[_._v("기체가 정지할 때 고도 유지를 개선하기 위해 거리 보조 장치를 사용할 수도 있습니다.")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[e("a",{attrs:{href:"#terrain_hold"}},[_._v("지형 유지")]),_._v("는 지형 유지를 위해 "),e("em",[_._v("거리 보조 장치")]),_._v("보다 권장됩니다. 이는 지형 유지가 높이를 결정하는 데 일반 ECL/EKF 추정기를 사용하기 때문이며 일반적으로 대부분의 조건에서 거리 센서보다 더 안정적입니다.")])]),_._v(" "),e("p",[e("em",[_._v("거리 보조 장치")]),_._v("은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[_._v("EKF2_RNG_AID = 1")]),_._v(" (고도 데이터의 기본 소스 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[_._v("EKF2_HGT_MODE")]),_._v("))가 거리계가 "),e("em",[_._v("아닌")]),_._v(" 경우 설정하여 활성화됩니다.).")],1),_._v(" "),e("p",[_._v("거리 보조 장치는 "),e("code",[_._v("EKF2_RNG_A_")]),_._v(" 매개 변수를 사용하여 추가로 설정합니다.")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_VMAX"}},[_._v("EKF2_RNG_A_VMAX")]),_._v(" : 범위 보조 기능이 비활성화 된 최대 수평 속도.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_HMAX"}},[_._v("EKF2_RNG_A_HMAX")]),_._v(" : 범위 보조 기능이 비활성화 된 최대 높이.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_IGATE"}},[_._v("EKF2_RNG_A_IGATE")]),_._v(' : 범위 지원 일관성이 "게이트"(범위 지원이 비활성화되기 전의 오류 측정)를 확인합니다.')],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);