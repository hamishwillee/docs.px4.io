(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{2319:function(_,t,e){"use strict";e.r(t);var v=e(19),o=Object(v.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"오프보드-offboard-모드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-offboard-모드"}},[_._v("#")]),_._v(" 오프보드(Offboard) 모드")]),_._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[v("img",{attrs:{src:e(326),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),_._v(" "),v("p",[_._v("기체는 MAVLink를 태워 전달한 위치, 속도, 고도 지점 설정을 따릅니다. 셋포인트 명령은 보조 컴퓨터에서 MAVLink API (예, "),v("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVSDK"),v("OutboundLink")],1),_._v(" 또는 "),v("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVROS"),v("OutboundLink")],1),_._v(")를 통해 전달할 수 있습니다. 일반적으로 시리얼 케이블 또는 와이파이를 사용하여 보조 컴퓨터를 연결합니다.")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("MAVLink에서 허용하는 모든 좌표 프레임과 필드 값이 모든 설정 점 메시지와 기체에 지원되는 것은 아닙니다. 지원되는 값을 확인하시려면, 아래 섹션을 *주의 하여* 읽으십시오. 모드에 작동 전과 모드가 작동하는 동안 설정 값은 2Hz이상에서 스트리밍되어야합니다.")])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("ul",[v("li",[_._v("이 모드에는 위치 또는 자세/태도 정보(GPS, 광학 흐름, 시각-관성 주행 거리 측정, 모캡 등)가 필요합니다.")]),_._v(" "),v("li",[_._v("RC 제어는 모드 변경을 제외하고 비활성화되어 있습니다.")]),_._v(" "),v("li",[_._v("이 모드를 사용하려면 기체의 시동을 걸어야합니다.")]),_._v(" "),v("li",[_._v("이 모드를 사용하려면 차량이 이미 "),v("strong",[_._v("목표 설정 값 (> 2Hz) 스트림")]),_._v("을 수신하고 있어야합니다.")]),_._v(" "),v("li",[_._v("목표 설정 값이 2Hz 이상의 속도로 수신되지 않으면 기체의 모드를 종료합니다.")]),_._v(" "),v("li",[_._v("MAVLink에서 허용하는 모든 좌표 프레임 및 필드 값이 지원되는 것은 아닙니다.")])])]),_._v(" "),v("h2",{attrs:{id:"설명"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[_._v("#")]),_._v(" 설명")]),_._v(" "),v("p",[_._v("오프보드 모드는 주로 기체의 움직임과 자세를 제어하는 데 사용되며, 매우 제한된 MAVLink 메시지 세트만 지원합니다 (향후 더 많은 기능이 지원될 수 있음).")]),_._v(" "),v("p",[_._v("이륙, 착륙, 발사 귀환과 같은 다른 작업은 적절한 모드를 사용하여 잘 처리됩니다. 업로드, 다운로드 임무와 같은 작업은 모든 모드에서 수행 가능합니다.")]),_._v(" "),v("p",[_._v("모드를 시작하기 전에 기체는 설정 값 명령 스트림을 수신하여야 모드가 유지됩니다. 메시지 주파수가 2Hz 미만으로 떨어지면 기체는 정지합니다. 이 모드에서 위치를 유지하려면 기체는 현재 위치에 대한 일련의 설정 값을 수신하여야 합니다.")]),_._v(" "),v("p",[_._v("오프 보드 모드에는 원격 MAVLink 시스템 (예 : 컴패니언 컴퓨터 또는 GCS)에 대한 연결하여야 합니다. 연결이 끊어지면 시간 초과("),v("a",{attrs:{href:"#COM_OF_LOSS_T"}},[_._v("COM_OF_LOSS_T")]),_._v(") 후에 기체는 착륙을 시도하거나 다른 안전 조치를 수행합니다. 작업은 "),v("a",{attrs:{href:"#COM_OBL_ACT"}},[_._v("COM_OBL_ACT")]),_._v(" 및 "),v("a",{attrs:{href:"#COM_OBL_RC_ACT"}},[_._v("COM_OBL_RC_ACT")]),_._v(" 매개변수로 정의됩니다.")]),_._v(" "),v("h2",{attrs:{id:"지원되는-메시지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-메시지"}},[_._v("#")]),_._v(" 지원되는 메시지")]),_._v(" "),v("h3",{attrs:{id:"멀티콥터-vtol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-vtol"}},[_._v("#")]),_._v(" 멀티콥터/VTOL")]),_._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_LOCAL_NED"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다.")]),_._v(" "),v("ul",[v("li",[_._v("위치 설정점("),v("code",[_._v("x")]),_._v(", "),v("code",[_._v("y")]),_._v(", "),v("code",[_._v("z")]),_._v(" 만 해당.)")]),_._v(" "),v("li",[_._v("속도 설정점 ("),v("code",[_._v("vx")]),_._v(", "),v("code",[_._v("vy")]),_._v(", "),v("code",[_._v("vz")]),_._v(" 만 해당)")]),_._v(" "),v("li",[_._v("가속도 설정점 ("),v("code",[_._v("afx")]),_._v(", "),v("code",[_._v("afy")]),_._v(", "),v("code",[_._v("afz")]),_._v(" 만 해당)")]),_._v(" "),v("li",[_._v("위치 설정점 및 속도 설정점 (속도 설정점은 피드 포워드로 사용되며 위치 컨트롤러의 출력에 추가되고 결과는 속도 컨트롤러의 입력으로 사용됨).")]),_._v(" "),v("li",[_._v("Position setpoint "),v("strong",[_._v("and")]),_._v(" velocity setpoint "),v("strong",[_._v("and")]),_._v(" acceleration (the velocity and the acceleration setpoints are used as feedforwards; the velocity setpoint is added to the output of the position controller and the result is used as the input to the velocity controller; the acceleration setpoint is added to the output of the velocity controller and the result used to compute the thrust vector).")])])]),_._v(" "),v("li",[v("ul",[v("li",[_._v("PX4는 "),v("code",[_._v("coordinate_frame")]),_._v(" 값 (전용)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_LOCAL_NED"),v("OutboundLink")],1),_._v(" 및 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_BODY_NED"),v("OutboundLink")],1),_._v(".")])])])])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_GLOBAL_INT"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다.")]),_._v(" "),v("ul",[v("li",[_._v("위치 설정점("),v("code",[_._v("lat_int")]),_._v(", "),v("code",[_._v("lon_int")]),_._v(", "),v("code",[_._v("alt")]),_._v(" 만 해당.)")]),_._v(" "),v("li",[_._v("속도 설정 점 ("),v("code",[_._v("vx")]),_._v(", "),v("code",[_._v("vy")]),_._v(", "),v("code",[_._v("vz")]),_._v(" 만 해당)")]),_._v(" "),v("li",[v("em",[_._v("추진력")]),_._v(" 설정점 ("),v("code",[_._v("afx")]),_._v(", "),v("code",[_._v("afy")]),_._v(", "),v("code",[_._v("afz")]),_._v(" 만 해당)")])])])])])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v('가속 설정점은 정규화된 추력 설정 값을 만들기 위하여 매핑됩니다 (즉, 가속 설정값은 "올바르게"지원되지 않음).')])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("* 위치 설정 값 **및** 속도 설정 값 (속도 설정 값은 피드 포워드로 사용되며 위치 컨트롤러의 출력에 추가되고 결과는 속도 컨트롤러의 입력으로 사용됨).\n")])])]),v("ul",[v("li",[v("p",[_._v("PX4는 다음 "),v("code",[_._v("coordinate_frame")]),_._v(" 값 (전용)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_GLOBAL"),v("OutboundLink")],1),_._v(".")])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_ATTITUDE_TARGET"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[_._v("다음 입력 조합이 지원됩니다.\n"),v("ul",[v("li",[_._v("추력 설정점 ("),v("code",[_._v("SET_ATTITUDE_TARGET.thrust")]),_._v(")이 있는 자세/방향 ("),v("code",[_._v("SET_ATTITUDE_TARGET.q")]),_._v(").")]),_._v(" "),v("li",[_._v("추력 설정점 ("),v("code",[_._v("SET_ATTITUDE_TARGET.thrust")]),_._v(")이 없는 Body rate ("),v("code",[_._v("SET_ATTITUDE_TARGET")]),_._v(" "),v("code",[_._v(".body_roll_rate")]),_._v(" ,"),v("code",[_._v(".body_pitch_rate")]),_._v(", "),v("code",[_._v(".body_yaw_rate")]),_._v(") .")])])])])])]),_._v(" "),v("h3",{attrs:{id:"고정익"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#고정익"}},[_._v("#")]),_._v(" 고정익")]),_._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_LOCAL_NED"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다 ("),v("code",[_._v("type_mask")]),_._v("를 통해). ")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("위치 설정점 ("),v("code",[_._v("x")]),_._v(", "),v("code",[_._v("y")]),_._v(", "),v("code",[_._v("z")]),_._v(" 만 해당, 속도 및 가속도 설정 값은 무시됨).")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("type_mask")]),_._v("에서 설정점의 "),v("em",[_._v("유형")]),_._v("을 지정합니다 (이 비트가 설정되지 않은 경우 기체는 꽃과 같은 패턴으로 비행합니다). :::note 아래의 "),v("em",[_._v("setpoint type")]),_._v(" 값 중 일부는 "),v("code",[_._v("type_mask")]),_._v(" 필드에 대한 MAVLink 표준의 일부가 아닙니다.\n:::")]),_._v(" "),v("p",[_._v("값들은 다음과 같습니다:")]),_._v(" "),v("ul",[v("li",[_._v("292 : 글라이딩 설정점. 이는 추력이 없을 때 기체가 미끄러지도록하기 위해 고도보다 대기 속도를 우선하도록 TECS를 구성합니다 (즉, 속도를 조절하기 위해 피치가 제어 됨). "),v("code",[_._v("type_mask")]),_._v("를 다음과 같이 설정하는 것과 같습니다."),v("code",[_._v("POSITION_TARGET_TYPEMASK_Z_IGNORE")]),_._v(", "),v("code",[_._v("POSITION_TARGET_TYPEMASK_VZ_IGNORE")]),_._v(", "),v("code",[_._v("POSITION_TARGET_TYPEMASK_AZ_IGNORE")]),_._v(".")]),_._v(" "),v("li",[_._v("4096 : 이륙 설정점.")]),_._v(" "),v("li",[_._v("8192: 착륙 설정점.")]),_._v(" "),v("li",[_._v("12288 : Loiter 설정점 (설정점을 중심으로 선회 비행합니다).")]),_._v(" "),v("li",[_._v("16384 : 유휴 설정점 (제로 스로틀, 제로 롤/피치).")])])])])])])]),_._v(" "),v("li",[v("p",[_._v("PX4는 좌표 프레임 ("),v("code",[_._v("coordinate_frame")]),_._v(" 필드)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_LOCAL_NED"),v("OutboundLink")],1),_._v(" 및 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_BODY_NED"),v("OutboundLink")],1),_._v(".")])])])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_GLOBAL_INT"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다 ("),v("code",[_._v("type_mask")]),_._v("를 통해). ")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("위치 설정점("),v("code",[_._v("lat_int")]),_._v(", "),v("code",[_._v("lon_int")]),_._v(", "),v("code",[_._v("alt")]),_._v(" 만 해당.)")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("type_mask")]),_._v("에서 설정점의 "),v("em",[_._v("유형")]),_._v("을 지정합니다 (이 비트가 설정되지 않은 경우 차량은 꽃과 같은 패턴으로 비행합니다).")])])])])])])])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("아래의 "),v("em",[_._v("setpoint type")]),_._v(" 값은 "),v("code",[_._v("type_mask")]),_._v(" 필드에 대한 MAVLink 표준의 일부가 아닙니다.")])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("    값들은 다음과 같습니다:\n    \n    * 4096 : 이륙 설정점.\n    * 8192: 착륙 설정점.\n    * 12288 : Loiter 설정점 (설정점을 중심으로 선회 비행합니다).\n    * 16384 : 유휴 설정점 (제로 스로틀, 제로 롤/피치).\n")])])]),v("ul",[v("li",[v("p",[_._v("PX4는 다음 "),v("code",[_._v("coordinate_frame")]),_._v(" 값 (전용)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_GLOBAL"),v("OutboundLink")],1),_._v(".")])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_ATTITUDE_TARGET"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[_._v("다음 입력 조합이 지원됩니다.\n"),v("ul",[v("li",[_._v("추력 설정점 ("),v("code",[_._v("SET_ATTITUDE_TARGET.thrust")]),_._v(")이 있는 자세/방향 ("),v("code",[_._v("SET_ATTITUDE_TARGET.q")]),_._v(").")]),_._v(" "),v("li",[_._v("추력 설정점 ("),v("code",[_._v("SET_ATTITUDE_TARGET.thrust")]),_._v(")이 없는 Body rate ("),v("code",[_._v("SET_ATTITUDE_TARGET")]),_._v(" "),v("code",[_._v(".body_roll_rate")]),_._v(" ,"),v("code",[_._v(".body_pitch_rate")]),_._v(", "),v("code",[_._v(".body_yaw_rate")]),_._v(") .")])])])])])]),_._v(" "),v("h3",{attrs:{id:"탐사선"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#탐사선"}},[_._v("#")]),_._v(" 탐사선")]),_._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_LOCAL_NED"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다 ("),v("code",[_._v("type_mask")]),_._v("를 통해). ")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("위치 설정점("),v("code",[_._v("x")]),_._v(", "),v("code",[_._v("y")]),_._v(", "),v("code",[_._v("z")]),_._v(" 만 해당.)")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("type_mask")]),_._v("에서 설정점의 "),v("em",[_._v("유형")]),_._v("을 지정합니다.")])])])])])])])]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),v("p",[_._v("아래의 "),v("em",[_._v("setpoint type")]),_._v(" 값은 "),v("code",[_._v("type_mask")]),_._v(" 필드에 대한 MAVLink 표준의 일부가 아닙니다. ::")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("      값은 아래와 같습니다:\n      -12288 : Loiter 설정점 (설정점에 매우 가까워지면 기체는 멈춤).\n      \n\n* 속도 설정점 (`vx`, `vy`, `vz` 만 해당)\n")])])]),v("ul",[v("li",[v("p",[_._v("PX4는 좌표 프레임 ("),v("code",[_._v("coordinate_frame")]),_._v(" 필드)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_LOCAL_NED"),v("OutboundLink")],1),_._v(" 및 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_BODY_NED"),v("OutboundLink")],1),_._v(".")])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_POSITION_TARGET_GLOBAL_INT"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[v("p",[_._v("다음 입력 조합이 지원됩니다 ("),v("code",[_._v("type_mask")]),_._v("를 통해). ")]),_._v(" "),v("ul",[v("li",[_._v("위치 설정점("),v("code",[_._v("lat_int")]),_._v(", "),v("code",[_._v("lon_int")]),_._v(", "),v("code",[_._v("alt")]),_._v(" 만 해당.)")])])]),_._v(" "),v("li",[v("p",[v("code",[_._v("type_mask")]),_._v("에서 설정점의 "),v("em",[_._v("유형")]),_._v("을 지정합니다 (MAVLink 표준의 일부가 아님). 값들은 다음과 같습니다:")]),_._v(" "),v("ul",[v("li",[_._v("다음 비트가 설정되지 않으면 정상적인 동작입니다.")]),_._v(" "),v("li",[_._v("-12288 : Loiter 설정점 (설정점에 매우 가까워지면 기체는 멈춤).")])])]),_._v(" "),v("li",[v("p",[_._v("PX4는 좌표 프레임 ("),v("code",[_._v("coordinate_frame")]),_._v(" 필드)을 지원합니다 : "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_GLOBAL"),v("OutboundLink")],1),_._v(".")])])])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[_._v("SET_ATTITUDE_TARGET"),v("OutboundLink")],1)]),_._v(" "),v("ul",[v("li",[_._v("다음 입력 조합이 지원됩니다.\n"),v("ul",[v("li",[_._v("추력 설정점 ("),v("code",[_._v("SET_ATTITUDE_TARGET.thrust")]),_._v(")이 있는 자세/방향 ("),v("code",[_._v("SET_ATTITUDE_TARGET.q")]),_._v("). :::note yaw 설정만 실제로 사용/추출됩니다.")])])])])])])]),_._v(" "),v("h2",{attrs:{id:"오프보드-매개변수"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-매개변수"}},[_._v("#")]),_._v(" 오프보드 매개변수")]),_._v(" "),v("p",[v("em",[_._v("오프보드 모드")]),_._v("는 아래의 매개 변수의 영향을받습니다.")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("매개변수")]),_._v(" "),v("th",[_._v("설명")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"COM_OF_LOSS_T"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[_._v("COM_OF_LOSS_T")])],1),_._v(" "),v("td",[_._v("오프보드 손실 안전 장치 ("),v("code",[_._v("COM_OBL_ACT")]),_._v(" 및 "),v("code",[_._v("COM_OBL_RC_ACT")]),_._v(") 동작 전에 오프 보드 연결이 손실되었을 때 대기하는 시간 제한 (초)")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_OBL_ACT"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[_._v("COM_OBL_ACT")])],1),_._v(" "),v("td",[_._v("RC에 연결되지 "),v("em",[_._v("않았을 때")]),_._v(" 오프 보드 제어가 손실된 경우 전환할 모드")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_OBL_RC_ACT"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[_._v("COM_OBL_RC_ACT")])],1),_._v(" "),v("td",[_._v("RC 제어에 연결되어 있는 동안 오프보드 제어가 손실된 경우 전환할 모드.")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_OVERRIDE"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")])],1),_._v(" "),v("td",[_._v("멀티콥터 (또는 MC 모드의 VTOL)에서 스틱 이동으로 인해 모드가 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("로 변경 여부를 제어합니다. 기본적으로 오프보드 모드에서는 활성화되지 않습니다.")],1)]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_RC_STICK_OV"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[_._v("COM_RC_STICK_OV")])],1),_._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("로 전환하는 스틱 이동량 ("),v("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v("이 활성화된 경우).")],1)])])]),_._v(" "),v("h2",{attrs:{id:"개발자-리소스"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#개발자-리소스"}},[_._v("#")]),_._v(" 개발자 리소스")]),_._v(" "),v("p",[_._v("일반적으로 개발자는 MAVLink 계층에서 직접 작업하지 않지만 대신 "),v("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVSDK"),v("OutboundLink")],1),_._v(" 또는 "),v("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("ROS"),v("OutboundLink")],1),_._v("와 같은 로봇 API를 사용합니다 (이는 개발자 친화적인 API를 제공하고 관리 및 유지 관리를 처리합니다. 연결, 메시지 전송 및 응답 모니터링-"),v("em",[_._v("오프보드 모드")]),_._v(" 및 MAVLink 작업의 세부 사항).")]),_._v(" "),v("p",[_._v("다음의 리소스는 개발자에게 유용합니다.")]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/ros/offboard_control.html"}},[_._v("Linux 오프보드 제어")]),_._v(" (PX4 개발 가이드)")],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/ros/mavros_offboard.html"}},[_._v("MAVROS 오프보드 제어 예제")]),_._v(" (PX4 개발 가이드)")],1)])])}),[],!1,null,null,null);t.default=o.exports},326:function(_,t,e){_.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"}}]);