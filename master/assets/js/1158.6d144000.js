(window.webpackJsonp=window.webpackJsonp||[]).push([[1158],{2160:function(_,t,v){"use strict";v.r(t);var a=v(19),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"충돌-방지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#충돌-방지"}},[_._v("#")]),_._v(" 충돌 방지")]),_._v(" "),v("p",[v("em",[_._v("충돌방지")]),_._v(" 기능은 기체가 장애물을 만나면 자동으로 속도를 늦추거나 정지합니다")]),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("에서 멀티콥터에 대해 활성화할 수 있으며, 오프보드 보조 컴퓨터, MAVLink를 통한 오프보드 거리계, 비행 컨트롤러에 부착된 거리계 또는 위의 조합에서 센서 데이터를 사용할 수 있습니다.")],1),_._v(" "),v("p",[_._v("충돌 방지는 센서 범위가 충분히 크지 않으면, 기체의 최대 속도를 제한할 수 있습니다! 또한 센서 데이터를 사용할 수 없는 방향으로의 움직임을 방지합니다 (즉, 후방 센서 데이터가없는 경우 뒤로 비행할 수 없음).")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("고속 비행이 주 목적인 경우에는 필요하지 않으면 충돌 방지 기능을 비활성화하는 것이 좋습니다.")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("모든 비행 방향으로 센서와 센서 데이터가 있는 지 확인하십시오 (충돌 방지가 활성화된 경우).")])]),_._v(" "),v("h2",{attrs:{id:"개요"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[_._v("#")]),_._v(" 개요")]),_._v(" "),v("p",[v("em",[_._v("충돌 방지")]),_._v("는 최소 허용 접근 거리 ("),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v(") 매개 변수를 설정하여 PX4에서 활성화됩니다.")]),_._v(" "),v("p",[_._v("이 기능에는 외부 시스템의 장애물 정보 (MAVLink "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[_._v("OBSTACLE_DISTANCE"),v("OutboundLink")],1),_._v(" 메시지를 사용하여 전송) 또는 비행 컨트롤러에 연결된 "),v("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("거리 센서")]),_._v("가 필요합니다.")],1),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("기체 "),v("em",[_._v("주변")]),_._v("에 대한 정보를 얻고 충돌을 방지하기 위하여 여러가지 센서를 사용할 수 있습니다. 여러 소스가 "),v("em",[_._v("동일한")]),_._v(" 방향에 대한 데이터를 제공하는 경우에는 시스템은 물체까지의 최소 거리를 판별 데이터로 사용합니다.")])]),_._v(" "),v("p",[_._v('기체는 장애물에 가까워 질 때 속도를 줄이기 위하여 최대 속도를 제한하고 허용된 최소 간격에 도달하면 정지합니다. 장애물에서 멀어지거나 평행하게 이동하려면 사용자는 기체를 장애물에 더 가깝게 만들지 않는 설정 값으로 이동하도록 명령하여야 합니다. 알고리즘은 "더 나은"설정점이 요청된 설정 값의 양쪽에있는 고정된 마진내에 존재한다고 판단되면 설정값 방향을 약간 조정합니다.')]),_._v(" "),v("p",[_._v("사용자는 "),v("em",[_._v("QGroundControl")]),_._v("을 통해 알림을 받고 "),v("em",[_._v("충돌 방지")]),_._v("는 속도 설정 값을 능동적으로 제어합니다.")]),_._v(" "),v("p",[_._v("PX4 소프트웨어 설정은 다음 섹션에서 다룹니다. 충돌 방지를 위해 비행 컨트롤러에 장착된 거리 센서를 사용하는 경우 "),v("a",{attrs:{href:"#rangefinder"}},[_._v("PX4 거리 센서")]),_._v("에 설명된대로 부착하고 설정하여야 합니다. 보조 컴퓨터를 사용하여 장애물 정보를 제공하는 경우에는 "),v("a",{attrs:{href:"#companion"}},[_._v("보조 컴퓨터 설정")]),_._v("을 참조하십시오.")]),_._v(" "),v("h2",{attrs:{id:"px4-소프트웨어-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-소프트웨어-설정"}},[_._v("#")]),_._v(" PX4 소프트웨어 설정")]),_._v(" "),v("p",[v("em",[_._v("QGroundControl")]),_._v("에서 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[_._v("다음 매개 변수를 설정")]),_._v("하여 충돌 방지를 설정합니다.")],1),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("매개변수")]),_._v(" "),v("th",[_._v("설명")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"CP_DIST"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DIST"}},[_._v("CP_DIST")])],1),_._v(" "),v("td",[_._v("최소 허용 거리 (기체가 장애물에 접근할 수있는 가장 가까운 거리)를 설정합니다. "),v("em",[_._v("충돌 방지")]),_._v("를 비활성화하려면 음수로 설정하십시오.")])]),_._v(" "),v("tr",[v("td",[_._v("> "),v("strong",[_._v("Warning")]),_._v(" 이 값은 기체 또는 프로펠러 외부가 아닌 센서까지의 거리입니다. 충분한 거리를 남겨 두십시오!")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_DELAY"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DELAY"}},[_._v("CP_DELAY")])],1),_._v(" "),v("td",[_._v("센서 및 속도 설정점 추적 지연을 설정합니다. 아래의 "),v("a",{attrs:{href:"#delay_tuning"}},[_._v("지연 조정")]),_._v("을 참조하십시오.")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_GUIDE_ANG"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")])],1),_._v(" "),v("td",[_._v("해당 방향에서 장애물이 적을 경우 기체가 이탈할 수있는 각도 (명령된 방향의 양쪽으로)를 설정합니다. 아래의 "),v("a",{attrs:{href:"#angle_change_tuning"}},[_._v("가이던스 튜닝")]),_._v("을 참조하십시오.")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_GO_NO_DATA"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA")])],1),_._v(" "),v("td",[_._v("기체가 센서 범위 외부의 방향으로 이동할 수 있도록 하려면 1로 설정합니다 (기본값은 0/"),v("code",[_._v("False")]),_._v(").")])])])]),_._v(" "),v("p",[v("span",{attrs:{id:"algorithm"}})]),_._v(" "),v("h2",{attrs:{id:"알고리즘-설명"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#알고리즘-설명"}},[_._v("#")]),_._v(" 알고리즘 설명")]),_._v(" "),v("p",[_._v("모든 센서의 데이터는 기체 주변의 36 개 섹터의 내부 표현으로 통합되며, 각 섹터에는 센서 데이터와 마지막 관찰 시점에 대한 정보 또는 해당 섹터에 대한 데이터를 사용할 수 없다는 표시가 포함됩니다. 기체가 특정 방향으로 이동하도록 명령을 받으면, 해당 방향의 반구에있는 모든 섹터를 확인하여 이동으로 인하여 기체가 장애물에 더 가까워 지는지 확인합니다. 그러한 경우에는, 차량 속도가 제한됩니다.")]),_._v(" "),v("p",[_._v("이 속도 제한은 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_P"}},[_._v("MPC_XY_P")]),_._v("에 의해 튜닝된 내부 속도 루프와 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")]),_._v(" 및 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[_._v("MPC_ACC_HOR")]),_._v("을 통하여 "),v("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[_._v("저크 최적 속도컨트롤러")]),_._v("를 모두 고려합니다. 속도는 "),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("에 지정된 거리를 유지하기 위하여 기체가 제 시간에 정지하도록 제한됩니다. 각 섹터의 센서 범위도 고려되어 동일한 메커니즘을 통하여 속도를 제한합니다.")],1),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("특정 방향에 센서 데이터가 없는 경우에는 해당 방향의 속도는 0으로 제한됩니다 (기체가 보이지 않는 물체에 충돌하는 것을 방지). 센서 커버리지 없이 자유롭게 방향으로 이동하려면 "),v("a",{attrs:{href:"#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA")]),_._v("를 1로 설정하여 활성화할 수 있습니다.")])]),_._v(" "),v("p",[_._v("차량 추적 속도 설정 점과 외부 소스로부터 센서 데이터를 수신시의 지연은 "),v("a",{attrs:{href:"#CP_DELAY"}},[_._v("CP_DELAY")]),_._v(" 매개 변수를 통하여 보수적으로 추정됩니다. 특정 기체마다 "),v("a",{attrs:{href:"#delay_tuning"}},[_._v("튜닝")]),_._v("하여야 합니다.")]),_._v(" "),v("p",[_._v("명령된 섹터에 인접한 섹터가 상당한 여백 만큼 '더 나은' 경우, 요청된 입력 방향은 "),v("a",{attrs:{href:"#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")]),_._v("에 지정된 각도까지 수정할 수 있습니다. 이는 장애물에 걸리지 않고 장애물 주변으로 차량을 '안내'하기 위하여 사용자 입력을 미세 조정하는 데 도움이 됩니다.")]),_._v(" "),v("p",[v("span",{attrs:{id:"data_loss"}})]),_._v(" "),v("h3",{attrs:{id:"범위-데이터-손실"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#범위-데이터-손실"}},[_._v("#")]),_._v(" 범위 데이터 손실")]),_._v(" "),v("p",[_._v("자동항법장치가 0.5 초 이상 센서로부터 범위 데이터를 수신하지 못하면 "),v("em",[_._v("수신된 범위 데이터 없음, 이동 허용 없음")]),_._v(" 경고 메시지를 출력합니다. 이렇게하면 xy의 속도 설정값이 0이 됩니다. 5초 동안 데이터를 수신하지 않으면 기체는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[_._v("유지 모드")]),_._v("로 전환됩니다. 기체가 다시 움직일 수 있도록 하려면 매개 변수 "),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("를 음수로 설정하거나 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v(" 이외의 모드(예 : "),v("em",[_._v("고도 모드")]),_._v(" 또는 "),v("em",[_._v("안정화 모드")]),_._v(")로 전환하여 충돌 방지를 비활성화하여야 합니다.")],1),_._v(" "),v("p",[_._v("여러 센서가 연결되어 있고, 그 중 하나와의 연결이 끊어진 경우에도 보고 센서의 시야 (FOV) 내부를 비행할 수 있습니다. 결함이 있는 센서의 데이터가 만료되고, 이 센서가 포함하는 영역이 커버되지 않은 것으로 처리되므로 그 곳으로 이동할 수 없습니다.")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),v("p",[v("a",{attrs:{href:"#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA = 1")]),_._v("을 활성화시에는 주의하여야 합니다. 간혹, 기체가 센서 범위 외부로 벗어날 수 있습니다. 여러 센서 중 하나라도 연결이 끊어지면 결함이있는 센서의 영역이 무시되어, 제약없이 이동할 수 있습니다.")])]),_._v(" "),v("p",[v("span",{attrs:{id:"delay_tuning"}})]),_._v(" "),v("h3",{attrs:{id:"cp-delay-지연-튜닝"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-지연-튜닝"}},[_._v("#")]),_._v(" CP_DELAY 지연 튜닝")]),_._v(" "),v("p",[_._v("고려해야 할 두 가지 주요 지연 원인은 "),v("em",[_._v("센서 지연")]),_._v("과 기체 "),v("em",[_._v("속도 설정점 추적 지연")]),_._v("입니다. 두 지연 소스 모두 "),v("a",{attrs:{href:"#CP_DELAY"}},[_._v("CP_DELAY")]),_._v(" 매개변수를 사용하여 튜닝됩니다.")]),_._v(" "),v("p",[_._v("비행 컨트롤러에 직접 연결된 거리 센서의 "),v("em",[_._v("센서 지연")]),_._v("은 0으로 가정할 수 있습니다. 외부 비전 기반 시스템의 경우 센서 지연이 최대 0.2 초 일 수 있습니다.")]),_._v(" "),v("p",[_._v("기체 "),v("em",[_._v("속도 설정 점 추적 지연")]),_._v("은 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("에서 최고 속도로 비행후 정지 명령을 내리면 측정할 수 있습니다. 실제 속도와 속도 설정점 사이의 지연은 로그에서 측정할 수 있습니다. 추적 지연은 일반적으로 기체 크기와 튜닝에 따라 0.1 초에서 0.5 초 사이입니다.")],1),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("장애물에 접근시 기체 속도가 진동하면 (즉, 감속, 가속, 감속), 지연이 너무 높게 설정됩니다.")])]),_._v(" "),v("p",[v("span",{attrs:{id:"angle_change_tuning"}})]),_._v(" "),v("h3",{attrs:{id:"cp-guide-ang-가이던스-튜닝"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-가이던스-튜닝"}},[_._v("#")]),_._v(" CP_GUIDE_ANG 가이던스 튜닝")]),_._v(" "),v("p",[_._v("차량, 환경 유형 및 조종사의 기술에 따라 각기 다른 가이던스가 필요할 수 있습니다. "),v("a",{attrs:{href:"#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")]),_._v(" 매개 변수를 0으로 설정하면 안내가 비활성화되어 기체가 명령된 방향으로만 정확하게 이동합니다. 이 매개 변수를 높이면 기체가 장애물을 피할 수 있는 최적의 방향을 선택할 수 있으므로 좁은 틈새를 더 쉽게 통과하고 물체를 돌아 다니는 동안 최소 거리를 정확하게 유지할 수 있습니다.")]),_._v(" "),v("p",[_._v("이 매개 변수가 너무 작으면 장애물에 가까워 졌을 때 기체가 '고착'된 느낌을 받을 수 있습니다. 장애물에서 멀어지는 이동만 허용되기 때문입니다. 매개 변수가 너무 크면 운전자가 지시하지 않은 방향으로 기체가 장애물에서 멀어지는 것처럼 느껴질 수 있습니다. 테스트에서 30도는 적절한 값이지만, 기체마다 값이 달라질 수 있습니다.")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("가이던스 기능은 센서 데이터가 없는 방향으로 기체를 이동시키지 않습니다. 단 하나의 거리 센서만 전방을 향하고 있는 상태에서 기체가 '고착'된 느낌이 드는 경우, 이는 정보 부족으로 인하여 가이던스가 방향을 안전하게 조정할 수 없기 때문일 수 있습니다.")])]),_._v(" "),v("p",[v("span",{attrs:{id:"rangefinder"}})]),_._v(" "),v("h2",{attrs:{id:"px4-거리-센서"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-거리-센서"}},[_._v("#")]),_._v(" PX4 거리 센서")]),_._v(" "),v("p",[_._v("작성 시점에 PX4를 사용하면 최소한의 추가 설정으로 충돌 방지용으로 "),v("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[_._v("Lanbao PSK-CM8JL65-CC5")]),_._v(" IR 거리 센서를 사용할 수 있습니다.")],1),_._v(" "),v("ul",[v("li",[_._v("먼저 "),v("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[_._v("센서를 장착 설정")]),_._v("하고 충돌 방지를 활성화합니다 (위에서 설명한대로 "),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v(" 사용).")],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[_._v("SENS_CM8JL65_R_0")]),_._v("을 사용하여 센서 방향을 설정합니다.")],1)]),_._v(" "),v("p",[_._v("다른 센서를 활성화 할 수 있지만, 이를 위해서는 센서 방향과 시야를 설정하기 위하여 드라이버 코드를 수정하여야 합니다.")]),_._v(" "),v("ul",[v("li",[_._v("특정 포트에 거리 센서를 연결 설정하고 ("),v("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("센서 별 문서")]),_._v(" 참조) "),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("를 사용하여 충돌 방지를 활성화합니다.")],1),_._v(" "),v("li",[_._v("방향을 설정하려면 드라이버를 수정하십시오. 이 작업은 "),v("code",[_._v("SENS_CM8JL65_R_0")]),_._v(" 매개 변수를 모방하여 수행하여야 합니다 (센서 "),v("em",[_._v("module.yaml")]),_._v(" 파일의 방향을 "),v("code",[_._v("sf0x start -d와 같은 것으로 하드 코딩 할 수도 있습니다). $ {SERIAL_DEV} -R 25")]),_._v(" -여기서 25는 "),v("code",[_._v("ROTATION_DOWNWARD_FACING")]),_._v("과 같습니다).")]),_._v(" "),v("li",[_._v("거리 센서 UORB 주제 ("),v("code",[_._v("distance_sensor_s.h_fov")]),_._v(")에서 "),v("em",[_._v("시야")]),_._v("를 설정하도록 드라이버를 수정합니다.")])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[_._v("기능 PR"),v("OutboundLink")],1),_._v("에서 필요한 수정 사항을 확인할 수 있습니다. 변경 사항에 기여하여 주십시오!")])]),_._v(" "),v("p",[v("span",{attrs:{id:"companion"}})]),_._v(" "),v("h2",{attrs:{id:"보조-컴퓨터-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[_._v("#")]),_._v(" 보조 컴퓨터 설정")]),_._v(" "),v("p",[_._v("보조 컴퓨터 또는 외부 센서를 사용하는 경우 장애물이 감지된 시기와 위치를 반영하는 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[_._v("OBSTACLE_DISTANCE"),v("OutboundLink")],1),_._v(" 메시지 스트림을 제공하여야 합니다.")]),_._v(" "),v("p",[_._v("메시지를 "),v("em",[_._v("전송하여야 하는")]),_._v(" 최소 속도는 기체 속도에 따라 다릅니다. 속도가 높을수록 기체가 감지된 장애물에 응답시간이 더 오래 걸립니다.")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("시스템의 초기 테스트에서는 "),v("code",[_._v("OBSTACLE_DISTANCE")]),_._v(" 메시지가 10Hz (비전 시스템에서 지원하는 최대 속도)에서 방출되는 4m/s로 움직이는 기체를 사용하였습니다. 시스템은 상당히 빠른 속도와 낮은 주파수 거리 업데이트에서 잘 작동 할 수 있습니다.")])]),_._v(" "),v("p",[_._v("테스트한 보조 소프트웨어는 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4 장애물 회피"),v("OutboundLink")],1),_._v(" 저장소의 "),v("em",[_._v("local_planner")]),_._v("입니다. 하드웨어와 소프트웨어 설정에 대한 자세한 내용은 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4 장애물 회피 > 하드웨어에서 실행"),v("OutboundLink")],1),_._v("을 참조하십시오. ")]),_._v(" "),v("p",[_._v("하드웨어와 소프트웨어는 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[_._v(" PX4 장애물 회피"),v("OutboundLink")],1),_._v(" 저장소에 설명된 대로 설정하여야 합니다. "),v("code",[_._v("OBSTACLE_DISTANCE")]),_._v(" 메시지를 내보내려면 "),v("em",[_._v("rqt_reconfigure")]),_._v(" 도구를 사용하고 매개 변수 "),v("code",[_._v("send_obstacles_fcu")]),_._v("를 true로 설정하여야 합니다.")]),_._v(" "),v("h2",{attrs:{id:"가제보-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#가제보-설정"}},[_._v("#")]),_._v(" 가제보 설정")]),_._v(" "),v("p",[v("em",[_._v("충돌 방지")]),_._v("는 Gazebo를 사용하여 테스트할 수 있습니다. 설정 방법은 <0 PX4 장애물 회피"),_._v("를 참조하십시오.")])])}),[],!1,null,null,null);t.default=e.exports}}]);