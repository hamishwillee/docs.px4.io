(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{2705:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"충돌-방지"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#충돌-방지"}},[t._v("#")]),t._v(" 충돌 방지")]),t._v(" "),o("p",[o("em",[t._v("Collision Prevention")]),t._v(" may be used to automatically slow and stop a vehicle before it can crash into an obstacle.")]),t._v(" "),o("p",[t._v("It can be enabled for multicopter vehicles in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(", and can use sensor data from an offboard companion computer, offboard rangefinders over MAVLink, a rangefinder attached to the flight controller, or any combination of the above.")],1),t._v(" "),o("p",[t._v("충돌 방지는 센서 범위가 충분히 크지 않으면, 기체의 최대 속도를 제한할 수 있습니다! 또한 센서 데이터를 사용할 수 없는 방향으로의 움직임을 방지합니다 (즉, 후방 센서 데이터가없는 경우 뒤로 비행할 수 없음).")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("고속 비행이 주 목적인 경우에는 필요하지 않으면 충돌 방지 기능을 비활성화하는 것이 좋습니다.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("모든 비행 방향으로 센서와 센서 데이터가 있는 지 확인하십시오 (충돌 방지가 활성화된 경우).")])]),t._v(" "),o("h2",{attrs:{id:"개요"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),o("p",[o("em",[t._v("Collision Prevention")]),t._v(" is enabled on PX4 by setting the parameter for minimum allowed approach distance ("),o("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(").")]),t._v(" "),o("p",[t._v("이 기능에는 외부 시스템의 장애물 정보 (MAVLink "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),o("OutboundLink")],1),t._v(" 메시지를 사용하여 전송) 또는 비행 컨트롤러에 연결된 "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("가 필요합니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Multiple sensors can be used to get information about, and prevent collisions with, objects "),o("em",[t._v("around")]),t._v(" the vehicle. If multiple sources supply data for the "),o("em",[t._v("same")]),t._v(" orientation, the system uses the data that reports the smallest distance to an object.")])]),t._v(" "),o("p",[t._v('기체는 장애물에 가까워 질 때 속도를 줄이기 위하여 최대 속도를 제한하고 허용된 최소 간격에 도달하면 정지합니다. 장애물에서 멀어지거나 평행하게 이동하려면 사용자는 기체를 장애물에 더 가깝게 만들지 않는 설정 값으로 이동하도록 명령하여야 합니다. 알고리즘은 "더 나은"설정점이 요청된 설정 값의 양쪽에있는 고정된 마진내에 존재한다고 판단되면 설정값 방향을 약간 조정합니다.')]),t._v(" "),o("p",[t._v("Users are notified through "),o("em",[t._v("QGroundControl")]),t._v(" while "),o("em",[t._v("Collision Prevention")]),t._v(" is actively controlling velocity setpoints.")]),t._v(" "),o("p",[t._v("PX4 소프트웨어 설정은 다음 섹션에서 다룹니다. 충돌 방지를 위해 비행 컨트롤러에 장착된 거리 센서를 사용하는 경우 "),o("a",{attrs:{href:"#rangefinder"}},[t._v("PX4 거리 센서")]),t._v("에 설명된대로 부착하고 설정하여야 합니다. 보조 컴퓨터를 사용하여 장애물 정보를 제공하는 경우에는 "),o("a",{attrs:{href:"#companion"}},[t._v("보조 컴퓨터 설정")]),t._v("을 참조하십시오.")]),t._v(" "),o("h2",{attrs:{id:"px4-소프트웨어-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-소프트웨어-설정"}},[t._v("#")]),t._v(" PX4 소프트웨어 설정")]),t._v(" "),o("p",[t._v("Configure collision prevention by "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("setting the following parameters")]),t._v(" in "),o("em",[t._v("QGroundControl")]),t._v(":")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("매개변수")]),t._v(" "),o("th",[t._v("설명")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"CP_DIST"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")])],1),t._v(" "),o("td",[t._v("최소 허용 거리 (기체가 장애물에 접근할 수있는 가장 가까운 거리)를 설정합니다. Set negative to disable "),o("em",[t._v("collision prevention")]),t._v(". "),o("strong",[t._v("Warning")]),t._v(" 이 값은 기체 또는 프로펠러 외부가 아닌 센서까지의 거리입니다. 충분한 거리를 남겨 두십시오!")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"CP_DELAY"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DELAY"}},[t._v("CP_DELAY")])],1),t._v(" "),o("td",[t._v("센서 및 속도 설정점 추적 지연을 설정합니다. 아래의 "),o("a",{attrs:{href:"#delay_tuning"}},[t._v("지연 조정")]),t._v("을 참조하십시오.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"CP_GUIDE_ANG"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")])],1),t._v(" "),o("td",[t._v("해당 방향에서 장애물이 적을 경우 기체가 이탈할 수있는 각도 (명령된 방향의 양쪽으로)를 설정합니다. 아래의 "),o("a",{attrs:{href:"#angle_change_tuning"}},[t._v("가이던스 튜닝")]),t._v("을 참조하십시오.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"CP_GO_NO_DATA"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")])],1),t._v(" "),o("td",[t._v("기체가 센서 범위 외부의 방향으로 이동할 수 있도록 하려면 1로 설정합니다 (기본값은 0/"),o("code",[t._v("False")]),t._v(").")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_POS_MODE"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),o("td",[t._v("Set to 0 or 3 to enable Collision Prevention in Position Mode (default is 4).")])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"algorithm"}})]),t._v(" "),o("h2",{attrs:{id:"알고리즘-설명"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#알고리즘-설명"}},[t._v("#")]),t._v(" 알고리즘 설명")]),t._v(" "),o("p",[t._v("모든 센서의 데이터는 기체 주변의 36 개 섹터의 내부 표현으로 통합되며, 각 섹터에는 센서 데이터와 마지막 관찰 시점에 대한 정보 또는 해당 섹터에 대한 데이터를 사용할 수 없다는 표시가 포함됩니다. 기체가 특정 방향으로 이동하도록 명령을 받으면, 해당 방향의 반구에있는 모든 섹터를 확인하여 이동으로 인하여 기체가 장애물에 더 가까워 지는지 확인합니다. 그러한 경우에는, 차량 속도가 제한됩니다.")]),t._v(" "),o("p",[t._v("이 속도 제한은 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_P"}},[t._v("MPC_XY_P")]),t._v("에 의해 튜닝된 내부 속도 루프와 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[t._v("MPC_JERK_MAX")]),t._v(" 및 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[t._v("MPC_ACC_HOR")]),t._v("을 통하여 "),o("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("저크 최적 속도컨트롤러")]),t._v("를 모두 고려합니다. 속도는 "),o("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v("에 지정된 거리를 유지하기 위하여 기체가 제 시간에 정지하도록 제한됩니다. 각 섹터의 센서 범위도 고려되어 동일한 메커니즘을 통하여 속도를 제한합니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("특정 방향에 센서 데이터가 없는 경우에는 해당 방향의 속도는 0으로 제한됩니다 (기체가 보이지 않는 물체에 충돌하는 것을 방지). 센서 커버리지 없이 자유롭게 방향으로 이동하려면 "),o("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")]),t._v("를 1로 설정하여 활성화할 수 있습니다.")])]),t._v(" "),o("p",[t._v("차량 추적 속도 설정 점과 외부 소스로부터 센서 데이터를 수신시의 지연은 "),o("a",{attrs:{href:"#CP_DELAY"}},[t._v("CP_DELAY")]),t._v(" 매개 변수를 통하여 보수적으로 추정됩니다. 특정 기체마다 "),o("a",{attrs:{href:"#delay_tuning"}},[t._v("튜닝")]),t._v("하여야 합니다.")]),t._v(" "),o("p",[t._v("명령된 섹터에 인접한 섹터가 상당한 여백 만큼 '더 나은' 경우, 요청된 입력 방향은 "),o("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v("에 지정된 각도까지 수정할 수 있습니다. 이는 장애물에 걸리지 않고 장애물 주변으로 차량을 '안내'하기 위하여 사용자 입력을 미세 조정하는 데 도움이 됩니다.")]),t._v(" "),o("p",[o("a",{attrs:{id:"data_loss"}})]),t._v(" "),o("h3",{attrs:{id:"범위-데이터-손실"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#범위-데이터-손실"}},[t._v("#")]),t._v(" 범위 데이터 손실")]),t._v(" "),o("p",[t._v("If the autopilot does not receive range data from any sensor for longer than 0.5s, it will output a warning "),o("em",[t._v("No range data received, no movement allowed")]),t._v(". 이렇게하면 xy의 속도 설정값이 0이 됩니다. After 5 seconds of not receiving any data, the vehicle will switch into "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/hold.html"}},[t._v("HOLD mode")]),t._v(". If you want the vehicle to be able to move again, you will need to disable Collision Prevention by either setting the parameter "),o("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" to a negative value, or switching to a mode other than "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (e.g. to "),o("em",[t._v("Altitude mode")]),t._v(" or "),o("em",[t._v("Stabilized mode")]),t._v(").")],1),t._v(" "),o("p",[t._v("여러 센서가 연결되어 있고, 그 중 하나와의 연결이 끊어진 경우에도 보고 센서의 시야 (FOV) 내부를 비행할 수 있습니다. 결함이 있는 센서의 데이터가 만료되고, 이 센서가 포함하는 영역이 커버되지 않은 것으로 처리되므로 그 곳으로 이동할 수 없습니다.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[o("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA = 1")]),t._v("을 활성화시에는 주의하여야 합니다. 간혹, 기체가 센서 범위 외부로 벗어날 수 있습니다. 여러 센서 중 하나라도 연결이 끊어지면 결함이있는 센서의 영역이 무시되어, 제약없이 이동할 수 있습니다.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"delay_tuning"}})]),t._v(" "),o("h3",{attrs:{id:"cp-delay-지연-튜닝"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-지연-튜닝"}},[t._v("#")]),t._v(" CP_DELAY 지연 튜닝")]),t._v(" "),o("p",[t._v("There are two main sources of delay which should be accounted for: "),o("em",[t._v("sensor delay")]),t._v(", and vehicle "),o("em",[t._v("velocity setpoint tracking delay")]),t._v(". 두 지연 소스 모두 "),o("a",{attrs:{href:"#CP_DELAY"}},[t._v("CP_DELAY")]),t._v(" 매개변수를 사용하여 튜닝됩니다.")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("sensor delay")]),t._v(" for distance sensors connected directly to the flight controller can be assumed to be 0. 외부 비전 기반 시스템의 경우 센서 지연이 최대 0.2 초 일 수 있습니다.")]),t._v(" "),o("p",[t._v("Vehicle "),o("em",[t._v("velocity setpoint tracking delay")]),t._v(" can be measured by flying at full speed in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(", then commanding a stop. 실제 속도와 속도 설정점 사이의 지연은 로그에서 측정할 수 있습니다. 추적 지연은 일반적으로 기체 크기와 튜닝에 따라 0.1 초에서 0.5 초 사이입니다.")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("장애물에 접근시 기체 속도가 진동하면 (즉, 감속, 가속, 감속), 지연이 너무 높게 설정됩니다.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"angle_change_tuning"}})]),t._v(" "),o("h3",{attrs:{id:"cp-guide-ang-가이던스-튜닝"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-가이던스-튜닝"}},[t._v("#")]),t._v(" CP_GUIDE_ANG 가이던스 튜닝")]),t._v(" "),o("p",[t._v("차량, 환경 유형 및 조종사의 기술에 따라 각기 다른 가이던스가 필요할 수 있습니다. "),o("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v(" 매개 변수를 0으로 설정하면 안내가 비활성화되어 기체가 명령된 방향으로만 정확하게 이동합니다. 이 매개 변수를 높이면 기체가 장애물을 피할 수 있는 최적의 방향을 선택할 수 있으므로 좁은 틈새를 더 쉽게 통과하고 물체를 돌아 다니는 동안 최소 거리를 정확하게 유지할 수 있습니다.")]),t._v(" "),o("p",[t._v("이 매개 변수가 너무 작으면 장애물에 가까워 졌을 때 기체가  '고착'된 느낌을 받을 수 있습니다. 장애물에서 멀어지는 이동만 허용되기 때문입니다. 매개 변수가 너무 크면 운전자가 지시하지 않은 방향으로 기체가 장애물에서 멀어지는 것처럼 느껴질 수 있습니다. 테스트에서 30도는 적절한 값이지만,  기체마다 값이 달라질 수 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("가이던스 기능은 센서 데이터가 없는 방향으로 기체를 이동시키지 않습니다.\n단 하나의 거리 센서만 전방을 향하고 있는 상태에서 기체가 '고착'된 느낌이 드는 경우, 이는 정보 부족으로 인하여 가이던스가 방향을 안전하게 조정할 수 없기 때문일 수 있습니다.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"rangefinder"}})]),t._v(" "),o("h2",{attrs:{id:"px4-거리-센서"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-거리-센서"}},[t._v("#")]),t._v(" PX4 거리 센서")]),t._v(" "),o("h3",{attrs:{id:"lanbao-psk-cm8jl65-cc5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lanbao-psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" Lanbao PSK-CM8JL65-CC5")]),t._v(" "),o("p",[t._v("작성 시점에 PX4를 사용하면 최소한의 추가 설정으로 충돌 방지용으로 "),o("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5")]),t._v(" IR 거리 센서를 사용할 수 있습니다.")],1),t._v(" "),o("ul",[o("li",[t._v("먼저 "),o("RouterLink",{attrs:{to:"/ko/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("센서를 장착 설정")]),t._v("하고 충돌 방지를 활성화합니다 (위에서 설명한대로 "),o("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 사용).")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[t._v("SENS_CM8JL65_R_0")]),t._v("을 사용하여 센서 방향을 설정합니다.")],1)]),t._v(" "),o("h3",{attrs:{id:"lightware-lidar-sf45-rotating-lidar"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidar-sf45-rotating-lidar"}},[t._v("#")]),t._v(" LightWare LiDAR SF45 Rotating Lidar")]),t._v(" "),o("p",[t._v("PX4 v1.14 (and later) supports the "),o("a",{attrs:{href:"https://www.lightwarelidar.com/shop/sf45-b-50-m/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare LiDAR SF45"),o("OutboundLink")],1),t._v(" rotating lidar which provides 320 degree sensing.")]),t._v(" "),o("p",[t._v("The SF45 must be connected via a UART/serial port and configured as described below (In addition to the "),o("a",{attrs:{href:"#px4-software-setup"}},[t._v("collision prevention setup")]),t._v(").")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://www.lightwarelidar.com/resources-software",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare Studio"),o("OutboundLink")],1),t._v(" configuration:")]),t._v(" "),o("ul",[o("li",[t._v("In the LightWare Studio app enable scanning, set the scan angle, and change the baud rate to "),o("code",[t._v("921600")]),t._v(".")])]),t._v(" "),o("p",[t._v("PX4 Configuration:")]),t._v(" "),o("ul",[o("li",[t._v("Add the "),o("RouterLink",{attrs:{to:"/ko/modules/modules_driver_distance_sensor.html#lightware-sf45-serial"}},[t._v("lightware_sf45_serial")]),t._v(" driver in "),o("RouterLink",{attrs:{to:"/ko/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[t._v("menuconfig")]),t._v(":\n"),o("ul",[o("li",[t._v("Under "),o("strong",[t._v("drivers > Distance sensors")]),t._v(" select "),o("code",[t._v("lightware_sf45_serial")]),t._v(".")]),t._v(" "),o("li",[t._v("Recompile and upload to the flight controller.")])])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("Set the following parameters")]),t._v(" via QGC:\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SF45_CFG"}},[t._v("SENS_EN_SF45_CFG")]),t._v(": Set to the serial port you have the sensor connected to. Make sure GPS or Telemetry are not enabled on this port.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SF45_ORIENT_CFG"}},[t._v("SF45_ORIENT_CFG")]),t._v(": Set the orientation of the sensor (facing up or down)")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SF45_UPDATE_CFG"}},[t._v("SF45_UPDATE_CFG")]),t._v(": Set the update rate")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SF45_YAW_CFG"}},[t._v("SF45_YAW_CFG")]),t._v(": Set the yaw orientation")],1)])],1)]),t._v(" "),o("p",[t._v("In QGroundControl you should see an "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),o("OutboundLink")],1),t._v(" message in the "),o("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html#qgroundcontrol-mavlink-console"}},[t._v("MAVLink console")]),t._v(" if collision prevention is configured correctly and active.")],1),t._v(" "),o("p",[t._v("The obstacle overlay in QGC will look like this:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(655),alt:"sf45"}})]),t._v(" "),o("h3",{attrs:{id:"rangefinder-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rangefinder-support"}},[t._v("#")]),t._v(" Rangefinder Support")]),t._v(" "),o("p",[t._v("다른 센서를 활성화 할 수 있지만, 이를 위해서는 센서 방향과 시야를 설정하기 위하여 드라이버 코드를 수정하여야 합니다.")]),t._v(" "),o("ul",[o("li",[t._v("특정 포트에 거리 센서를 연결 설정하고 ("),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("센서 별 문서")]),t._v(" 참조) "),o("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v("를 사용하여 충돌 방지를 활성화합니다.")],1),t._v(" "),o("li",[t._v("방향을 설정하려면 드라이버를 수정하십시오. This should be done by mimicking the "),o("code",[t._v("SENS_CM8JL65_R_0")]),t._v(" parameter (though you might also hard-code the orientation in the sensor "),o("em",[t._v("module.yaml")]),t._v(" file to something like "),o("code",[t._v("sf0x start -d ${SERIAL_DEV} -R 25")]),t._v(" - where 25 is equivalent to "),o("code",[t._v("ROTATION_DOWNWARD_FACING")]),t._v(").")]),t._v(" "),o("li",[t._v("Modify the driver to set the "),o("em",[t._v("field of view")]),t._v(" in the distance sensor UORB topic ("),o("code",[t._v("distance_sensor_s.h_fov")]),t._v(").")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[t._v("기능 PR"),o("OutboundLink")],1),t._v("에서 필요한 수정 사항을 확인할 수 있습니다. 변경 사항에 기여하여 주십시오!")])]),t._v(" "),o("p",[o("a",{attrs:{id:"companion"}})]),t._v(" "),o("h2",{attrs:{id:"보조-컴퓨터-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),o("p",[t._v("보조 컴퓨터 또는 외부 센서를 사용하는 경우 장애물이 감지된 시기와 위치를 반영하는 "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),o("OutboundLink")],1),t._v(" 메시지 스트림을 제공하여야 합니다.")]),t._v(" "),o("p",[t._v("The minimum rate at which messages "),o("em",[t._v("must")]),t._v(" be sent depends on vehicle speed - at higher rates the vehicle will have a longer time to respond to detected obstacles.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("시스템의 초기 테스트에서는 "),o("code",[t._v("OBSTACLE_DISTANCE")]),t._v(" 메시지가 10Hz (비전 시스템에서 지원하는 최대 속도)에서 방출되는 4m/s로 움직이는 기체를 사용하였습니다. 시스템은 상당히 빠른 속도와 낮은 주파수 거리 업데이트에서 잘 작동 할 수 있습니다.")])]),t._v(" "),o("p",[t._v("The tested companion software is the "),o("em",[t._v("local_planner")]),t._v(" from the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),o("OutboundLink")],1),t._v(" repo. For more information on hardware and software setup see: "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance > Run on Hardware"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("The hardware and software should be set up as described in the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),o("OutboundLink")],1),t._v(" repo. In order to emit "),o("code",[t._v("OBSTACLE_DISTANCE")]),t._v(" messages you must use the "),o("em",[t._v("rqt_reconfigure")]),t._v(" tool and set the parameter "),o("code",[t._v("send_obstacles_fcu")]),t._v(" to true.")]),t._v(" "),o("h2",{attrs:{id:"가제보-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#가제보-설정"}},[t._v("#")]),t._v(" 가제보 설정")]),t._v(" "),o("p",[o("em",[t._v("Collision Prevention")]),t._v(" can also be tested using Gazebo. See "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),o("OutboundLink")],1),t._v(" for setup instructions.")])])}),[],!1,null,null,null);e.default=r.exports},655:function(t,e,a){t.exports=a.p+"assets/img/sf45_obstacle_map.cb339bd2.png"}}]);