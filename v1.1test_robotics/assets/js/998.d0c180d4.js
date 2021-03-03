(window.webpackJsonp=window.webpackJsonp||[]).push([[998],{2075:function(_,v,e){"use strict";e.r(v);var t=e(18),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"센서-에스티메이터-비행-사전-점검"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#센서-에스티메이터-비행-사전-점검"}},[_._v("#")]),_._v(" 센서/에스티메이터 비행 사전 점검")]),_._v(" "),e("p",[_._v("PX4는 다양한 비행 전 센서 품질 및 추정 검사를 수행하여 차량을 무장하고 비행하기에 충분한 위치 추정치가 있는지 확인합니다 (이러한 검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#commander"}},[_._v(" COM \\ * ARM \\ * ")]),_._v(" 매개 변수)")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("모든 비행전 오류는 * QGroundControl *에 "),e("code",[_._v("PREFLIGHT FAIL")]),_._v(" 메시지로보고 됩니다. "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[_._v(" 로그의 ")]),_._v(" "),e("code",[_._v("estimator_status.gps_check_fail_flags")]),_._v(" 메시지는 정확하지 않은 GPS 데이터를 나타냅니다.")],1)]),_._v(" "),e("p",[_._v("아래 섹션에는 오류, 가능한 원인 및 해결 방법, 비행 사전 검사 실행 방법에 영향을주는 매개 변수가 나열되어 있습니다.")]),_._v(" "),e("h2",{attrs:{id:"ekf-비행-사전-검사와-오류-메시지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf-비행-사전-검사와-오류-메시지"}},[_._v("#")]),_._v(" EKF 비행 사전 검사와 오류 메시지")]),_._v(" "),e("p",[_._v("다음 오류 (관련 검사 및 매개 변수 포함)는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html"}},[_._v(" EKF ")]),_._v("에 의해보고됩니다 (그리고 * QGroundControl *에 전파됨).")],1),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : EKF HGT 오류")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 높이 측정 데이터가 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("가속 및 자이로 보정을 수행하고 기체를 재부팅하세요. 오류가 계속 발생하면 높이 센서 데이터에서 문제가 있는 지 확인하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[_._v(" COM_ARM_EKF_HGT ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : EKF VEL 오류")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 GPS 속도 측정 데이터가 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("비현실적인 데이터 점프에 대한 GPS 속도 데이터를 확인합니다. GPS 품질이 정상이면 가속 센서와 자이로 보정을 수행하고 차량을 재부팅하세요.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[_._v(" COM_ARM_EKF_VEL ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : EKF 수평 위치 오류")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 위치 측정 데이터 (GPS 또는 외부 비전)가 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("비현실적인 데이터 점프에 대한 위치 센서 데이터를 확인하십시오. 데이터 품질이 정상이면 가속 센서 및 자이로 보정을 수행하고 차량을 재부팅하세요.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[_._v(" COM_ARM_EKF_POS ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("프리 플라이트 실패 : EKF YAW 오류")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 자이로 데이터를 사용하여 추정 된 요 각도와 자력계 또는 외부 비전 시스템의 요 각도가 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("IMU 데이터에서 큰 요율 오프셋을 확인하고 자력계 정렬 및 교정을 확인하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[_._v(" COM_ARM_EKF_YAW ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1),_._v(" "),e("li",[_._v("기본값 0.5는 내비게이션 편 요각과 자기 편 요각 (자 기계 또는 외부 비전) 간의 차이가 EKF에서 허용하는 최대 값의 50 %를 넘지 않도록 허용하고 비행이 시작될 때 오류 증가에 대한 약간의 여유를 제공합니다.")]),_._v(" "),e("li",[_._v("요 자이로의 오프셋이 크거나 자기 간섭 또는 자력계 보정이 불량한 상태에서 차량을 이동하거나 회전하면 실패 할 수 있습니다.")])]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : EKF 높은 IMU 액셀 바이어스")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 EKF에서 추정 한 IMU 가속도계 바이어스가 과도 할 때 발생합니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_AB"}},[_._v(" COM_ARM_EKF_AB ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 실패 : EKF 높은 IMU 자이로 바이어스")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 EKF에 의해 추정 된 IMU 자이로 바이어스가 과도 할 때 발생합니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_GB"}},[_._v(" COM_ARM_EKF_GB ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : ACCEL 센서 불일치-보정 확인")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 IMU 장치의 가속 측정 값이 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("이 검사는 IMU가 두 개 이상인 보드에만 적용됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[_._v(" COM_ARM_IMU_ACC ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 설정 실패 : 자이로 센서 불일치-보정 확인")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 IMU 장치의 각도 속도 측정 값이 일치하지 않을 때 발생합니다.")]),_._v(" "),e("li",[_._v("이 검사는 IMU가 두 개 이상인 보드에만 적용됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[_._v(" COM_ARM_IMU_GYR ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : 나침반 센서 불일치-보정 확인")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 나침반 센서의 측정 차이가 너무 클 때 생성됩니다.")]),_._v(" "),e("li",[_._v("잘못된 교정, 방향 또는 자기 간섭을 나타냅니다.")]),_._v(" "),e("li",[_._v("이 검사는 두 개 이상의 나침반 / 자기 계가 연결된 경우에만 적용됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[_._v(" COM_ARM_MAG_ANG ")]),_._v(" 매개 변수에 의해 제어됩니다.")],1)]),_._v(" "),e("p",[e("code",[_._v("사전 확인 실패 : EKF 내부 점검")]),_._v(" :")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 수평 GPS 속도, 자기 편 요각, 수직 GPS 속도 또는 수직 위치 센서 (기본적으로 Baro이지만 비표준 매개 변수가 사용되는 경우 거리 측정기 또는 GPS 일 수 있음)의 혁신 크기가 과도한 경우 발생합니다. 혁신은 관성 항법 계산에 의해 예측 된 값과 센서에 의해 측정 된 값의 차이입니다.")]),_._v(" "),e("li",[_._v("사용자는 로그 파일에서 혁신 수준을 확인하여 원인을 파악해야합니다. "),e("code",[_._v("ekf2_innovations")]),_._v(" 메시지에서 찾을 수 있습니다. 일반적으로 많이 일어나는 문제들은 아래와 같습니다.\n"),e("ul",[e("li",[_._v("워밍업시 IMU 드리프트. 자동 조종 장치를 다시 시작하면 문제를 해결할 수 있습니다. IMU 가속 및 자이로 보정이 필요할 수 있습니다.")]),_._v(" "),e("li",[_._v("차량 움직임과 관련된 인접 자기 간섭. 이동중인 차량을 해결하고 대기 중이거나 전원을 다시 켜십시오.")]),_._v(" "),e("li",[_._v("차량 움직임과 관련된 잘못된 자력계 보정. 재보정으로 문제를 해결하십시오.")]),_._v(" "),e("li",[_._v("시작시 초기 충격 또는 빠른 움직임으로 인해 관성 탐색 솔루션이 잘못되었습니다. 차량을 다시 시작하고 처음 5 초 동안 움직임을 최소화하여 문제를 해결하십시오.")])])])]),_._v(" "),e("h2",{attrs:{id:"기타-매개-변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-매개-변수"}},[_._v("#")]),_._v(" 기타 매개 변수:")]),_._v(" "),e("p",[_._v("다음의 매개 변수들은 비행 사전 검사에 관련되어 있습니다.")]),_._v(" "),e("h3",{attrs:{id:"com-arm-wo-gps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[_._v("#")]),_._v(" COM_ARM_WO_GPS")]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[_._v(" COM_ARM_WO_GPS ")]),_._v(" 매개 변수는 전역 위치 추정없이 준비가 허용되는지 여부를 제어합니다.")],1),_._v(" "),e("ul",[e("li",[e("code",[_._v("1")]),_._v(" (기본값) : 위치 정보가 필요하지 않은 비행 모드에 대한 위치 추정없이 준비가 * 허용됩니다 *.")]),_._v(" "),e("li",[e("code",[_._v("0")]),_._v(" : EKF가 글로벌 위치 추정치를 제공하고 EFK GPS 품질 검사를 통과 한 경우에만 준비가 허용됩니다.")])])])}),[],!1,null,null,null);v.default=r.exports}}]);