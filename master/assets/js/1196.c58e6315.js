(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{2293:function(_,t,e){"use strict";e.r(t);var r=e(19),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"센서와-추정기-비행-사전-점검"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#센서와-추정기-비행-사전-점검"}},[_._v("#")]),_._v(" 센서와 추정기 비행 사전 점검")]),_._v(" "),e("p",[_._v("PX4는 비행전에 센서들의 품질과 추정기를 체크하여 시동과 비행에 충분한 위치 추정 가능 여부를 확인합니다. 사전 검사 여부는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#commander"}},[_._v(" COM"),e("em",[_._v("ARM")])]),_._v(" 매개변수에 저장됩니다.")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("모든 비행전 오류는 "),e("em",[_._v("QGroundControl")]),_._v("의 "),e("code",[_._v("PREFLIGHT FAIL")]),_._v(" 메시지로 보고됩니다. "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[_._v("로그")]),_._v("의 "),e("code",[_._v("estimator_status.gps_check_fail_flags")]),_._v(" 메시지는 정확하지 않은 GPS 데이터를 나타냅니다.")],1)]),_._v(" "),e("p",[_._v("아래 섹션에서는 오류, 원인, 해결 방법 및 비행사전검사와 관련된 매개 변수를 설명합니다.")]),_._v(" "),e("h2",{attrs:{id:"ekf-비행-사전-검사와-오류-메시지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf-비행-사전-검사와-오류-메시지"}},[_._v("#")]),_._v(" EKF 비행 사전 검사와 오류 메시지")]),_._v(" "),e("p",[_._v("다음 오류 (관련 검사 및 매개 변수 포함)는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html"}},[_._v("EKF")]),_._v("에 의하여 보고되고, "),e("em",[_._v("QGroundControl")]),_._v("에 전송됩니다.")],1),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-hgt-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-hgt-error"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF HGT ERROR")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 높이 측정 데이터가 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("가속계와 자이로를 보정하고 기체를 재부팅하십시오. 오류가 계속 발생하면, 고도 센서에 문제가 있는 지 확인하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_HGT"}},[_._v(" COM_ARM_EKF_HGT ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-vel-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-vel-error"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF VEL ERROR")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 GPS 속도 측정 데이터가 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("비현실적인 데이터 점프에 대한 GPS 속도 데이터를 확인합니다. GPS 품질이 정상이면, 가속 센서와 자이로를 보정후에 차량을 재부팅하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_VEL"}},[_._v(" COM_ARM_EKF_VEL ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-horiz-pos-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-horiz-pos-error"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF HORIZ POS ERROR")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 IMU와 위치 측정 데이터(GPS 또는 외부 비전)가 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("비현실적인 데이터 점프에 대한 위치 센서 데이터를 확인하십시오. 데이터 품질이 정상이면, 가속 센서와 자이로를 보정후에 차량을 재부팅하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_POS"}},[_._v(" COM_ARM_EKF_POS ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-yaw-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-yaw-error"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF YAW ERROR")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 자이로에서 추정된 요 각도와 자력계 또는 외부 비전 시스템의 요 각도의 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("IMU 데이터에서 큰 요 속도 오프셋을 확인하고 자력계 정렬 및 교정을 확인하십시오.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_EKF_YAW"}},[_._v(" COM_ARM_EKF_YAW ")]),_._v(" 매개변수에 의해 제어됩니다.")],1),_._v(" "),e("li",[_._v("기본값 0.5는 내비게이션 편 요각과 자기 편 요각 (자 기계 또는 외부 비전) 간의 차이가 EKF에서 허용하는 최대치의 50 %를 넘지 않도록 허용하고, 비행 시작시 오류 증가에 대한 약간의 여유를 제공합니다.")]),_._v(" "),e("li",[_._v("요 자이로의 오프셋이 크거나 자기 간섭 또는 자력계 보정이 불량한 상태에서 차량을 이동하거나 회전하면 실패할 수 있습니다.")])]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-high-imu-accel-bias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-accel-bias"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF HIGH IMU ACCEL BIAS")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 EKF에서 추정한 IMU 가속도계 바이어스가 과도할 때 발생합니다.")]),_._v(" "),e("li",[_._v("이 경우 과도하다는 것은 편향 추정치가 구성된 제한의 절반을 초과함을 의미합니다. 제한은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_ABL_LIM"}},[_._v("EKF2_ABL_LIM")]),_._v(" 매개변수에서 정의됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-high-imu-gyro-bias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-high-imu-gyro-bias"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF HIGH IMU GYRO BIAS")]),_._v(" "),e("ul",[e("li",[_._v("이 오류는 EKF에 의해 추정 된 IMU 자이로 바이어스가 과도할 때 발생합니다.")]),_._v(" "),e("li",[_._v("이 경우 과도하다는 것은 바이어스 추정치가 10deg/s(구성된 제한의 절반, 20deg/s로 하드코딩됨)를 초과함을 의미합니다.")])]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-accel-sensors-inconsistent-check-calibration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-accel-sensors-inconsistent-check-calibration"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: ACCEL SENSORS INCONSISTENT - CHECK CALIBRATION")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 IMU의 가속 측정 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("이 검사는 IMU가 두 개 이상인 보드에만 적용됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_IMU_ACC"}},[_._v(" COM_ARM_IMU_ACC ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-gyro-sensors-inconsistent-check-calibration"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: GYRO SENSORS INCONSISTENT - CHECK CALIBRATION")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 IMU의 각속도 측정 불일치시에 발생합니다.")]),_._v(" "),e("li",[_._v("이 검사는 IMU가 두 개 이상인 보드에만 적용됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_IMU_GYR"}},[_._v(" COM_ARM_IMU_GYR ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-compass-sensors-inconsistent-check-calibration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-compass-sensors-inconsistent-check-calibration"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: COMPASS SENSORS INCONSISTENT - CHECK CALIBRATION")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 다른 나침반 센서의 측정 차이가 과도한 경우에 생성됩니다.")]),_._v(" "),e("li",[_._v("잘못된 교정, 방향 또는 자기 간섭을 나타냅니다.")]),_._v(" "),e("li",[_._v("이 검사는 두 개 이상의 나침반이 연결된 경우에만 해당됩니다.")]),_._v(" "),e("li",[_._v("검사는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_MAG_ANG"}},[_._v(" COM_ARM_MAG_ANG ")]),_._v(" 매개변수에 의해 제어됩니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"preflight-fail-ekf-internal-checks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preflight-fail-ekf-internal-checks"}},[_._v("#")]),_._v(" PREFLIGHT FAIL: EKF INTERNAL CHECKS")]),_._v(" "),e("ul",[e("li",[_._v("이 오류 메시지는 수평 GPS 속도, 자기 편 요각, 수직 GPS 속도 또는 수직 위치 센서 (기본적으로 Baro이지만 비표준 매개 변수가 사용되는 경우 거리 측정기 또는 GPS 일 수 있음)의 혁신 크기가 과도한 경우 발생합니다. 혁신은 관성 항법 계산에 의한 예측치와 센서 측정치의 차이입니다.")]),_._v(" "),e("li",[_._v("사용자는 로그 파일에서 혁신 수준을 확인하여 원인을 파악하여야합니다. "),e("code",[_._v("ekf2_innovations")]),_._v(" 메시지에서 찾을 수 있습니다. 일반적으로 많이 일어나는 문제들은 아래와 같습니다.\n"),e("ul",[e("li",[_._v("워밍업시 IMU 드리프트. 자동 조종 장치를 다시 시작하면 문제를 해결할 수 있습니다. IMU 가속도와 및 자이로 보정이 필요할 수 있습니다.")]),_._v(" "),e("li",[_._v("차량 움직임과 관련된 인접 자기 간섭. 이동중인 차량을 해결하고 대기 중이거나 전원을 다시 켜십시오.")]),_._v(" "),e("li",[_._v("차량 움직임과 관련된 잘못된 자력계 보정. 재보정으로 문제를 해결하십시오.")]),_._v(" "),e("li",[_._v("시작시 초기 충격 또는 빠른 움직임으로 인해 관성 탐색 솔루션이 잘못되었습니다. 차량을 다시 시작하고, 처음 5 초 동안 움직임을 최소화하여 문제를 해결하십시오.")])])])]),_._v(" "),e("h2",{attrs:{id:"기타-매개-변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-매개-변수"}},[_._v("#")]),_._v(" 기타 매개 변수:")]),_._v(" "),e("p",[_._v("다음 매개변수들은 비행사전검사와 관련됩니다.")]),_._v(" "),e("h4",{attrs:{id:"com-arm-wo-gps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#com-arm-wo-gps"}},[_._v("#")]),_._v(" COM_ARM_WO_GPS")]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_ARM_WO_GPS"}},[_._v(" COM_ARM_WO_GPS ")]),_._v(" 매개변수는 전역위치 추정없이 준비허용 여부를 제어합니다.")],1),_._v(" "),e("ul",[e("li",[e("code",[_._v("1")]),_._v(" (기본값) : 위치 정보가 필요하지 않은 비행 모드에 대한 위치추정 없는 준비를 "),e("em",[_._v("허용합니다")]),_._v(".")]),_._v(" "),e("li",[e("code",[_._v("0")]),_._v(": EKF가 글로벌 위치 추정치를 제공하고, EFK GPS 품질 검사를 통과한 경우에만 준비가 허용됩니다.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);