(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{2097:function(t,e,a){"use strict";a.r(e);var o=a(18),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"위치-모드-멀티콥터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#위치-모드-멀티콥터"}},[t._v("#")]),t._v(" 위치 모드(멀티콥터)")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[o("img",{attrs:{src:a(324),title:"초급 난이도 비행",width:"30px"}})]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[o("img",{attrs:{src:a(323),title:"수동/원격 제어 필요",width:"30px"}})]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[o("img",{attrs:{src:a(322),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),o("p",[o("em",[t._v("Position")]),t._v(" is an easy-to-fly RC mode in which roll and pitch sticks control acceleration over ground in the vehicle's left-right and forward-back directions (similar to a car's accelerator pedal), and throttle controls speed of ascent-descent. 스틱을 풀거나 중앙에 놓으면 차량이 능동적으로 제동하고 수평을 맞추고 3D 공간의 위치에 고정되어 바람과 기타 힘을 보상합니다. With full stick deflection the vehicle accelerates initially with "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")]),t._v(" ramping down until it reaches the final velocity "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("위치 모드는 새 전단지를위한 가장 안전한 수동 모드입니다. "),o("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("고도")]),t._v(" 및 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("수동 / 안정화")]),t._v(" 모드와 달리, 차량은 바람의 저항에 의해 감속 될 때까지 계속되는 대신 스틱이 중앙에있을 때 정지합니다.")],1)]),t._v(" "),o("p",[t._v("아래 다이어그램은 모드 동작을 시각적으로 보여줍니다 (모드 2 송신기의 경우).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(375),alt:"멀티콥터 위치 모드"}})]),t._v(" "),o("h3",{attrs:{id:"landing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#landing"}},[t._v("#")]),t._v(" Landing")]),t._v(" "),o("p",[t._v("Landing in this mode is easy:")]),t._v(" "),o("ol",[o("li",[t._v("Position the drone horizontally above the landing spot using the roll and pitch stick.")]),t._v(" "),o("li",[t._v("Let go of the roll and pitch stick and give it enough time to come to a complete stop.")]),t._v(" "),o("li",[t._v("Pull the throttle stick down gently until the vehicle touches the ground.")]),t._v(" "),o("li",[t._v("Pull the throttle stick all the way down to facilitate and accelerate land detection.")]),t._v(" "),o("li",[t._v("The vehicle will lower propeller thrust, detect the ground and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("automatically disarm")]),t._v(" (by default).")],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("While very rare on a well calibrated vehicle, sometimes there may be problems with landing.")]),t._v(" "),o("ul",[o("li",[t._v("If the vehicle does not stop moving horizontally:\n"),o("ul",[o("li",[t._v("You can still land under control in "),o("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Altitude mode")]),t._v(". The approach is the same as above, except that you must manually ensure that the vehicle stays above the landing spot using the roll and pitch stick.")],1),t._v(" "),o("li",[t._v("After landing check GPS and magnetometer orientation, calibration.")])])]),t._v(" "),o("li",[t._v("If the vehicle does not detect the ground/landing and disarm:\n"),o("ul",[o("li",[t._v("After the vehicle is on the ground switch to "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized mode")]),t._v(" keeping the throttle stick low, and manually disarm using a gesture or other command. Alternatively you can also use the kill switch when the vehicle is already on the ground.")],1)])])])]),t._v(" "),o("h2",{attrs:{id:"기술-요약"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기술-요약"}},[t._v("#")]),t._v(" 기술 요약")]),t._v(" "),o("p",[t._v("RC mode where roll, pitch, throttle (RPT) sticks control movement in corresponding axes/directions. Centered sticks level vehicle and hold it to fixed altitude and position against wind.")]),t._v(" "),o("ul",[o("li",[t._v("Centered roll, pitch, throttle sticks (within RC deadzone "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")]),t._v(") hold x, y, z position steady against any disturbance like wind.")],1),t._v(" "),o("li",[t._v("Outside center:\n"),o("ul",[o("li",[t._v("Roll/Pitch sticks control horizontal acceleration over ground in the vehicle's left-right and forward-back directions (respectively).")]),t._v(" "),o("li",[t._v("Throttle stick controls speed of ascent-descent.")]),t._v(" "),o("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),o("li",[t._v("Takeoff:\n"),o("ul",[o("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])]),t._v(" "),o("li",[t._v("Landing:\n"),o("ul",[o("li",[t._v("When close to the ground ("),o("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v("), horizontal velocity is limited ("),o("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(").")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),o("li",[t._v("This mode requires GPS.")])])]),t._v(" "),o("h3",{attrs:{id:"parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),o("p",[t._v("All the parameters in the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v("Multicopter Position Control")]),t._v(" group are relevant. A few parameters of particular note are listed below.")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("매개 변수")]),t._v(" "),o("th",[t._v("설명")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"MPC_HOLD_DZ"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),o("td",[t._v("위치 유지가 활성화 된 스틱의 Deadzone입니다. 기본값 : 0.1 (전체 스틱 범위의 10 %).")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),o("td",[t._v("최대 수직 상승 속도. 기본값: 3 m/s.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),o("td",[t._v("최대 수직 하강 속도. 기본값: 1 m/s.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_LAND_VEL_XY"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")])],1),t._v(" "),o("td",[t._v("지면에 가까울 때 수평 속도 제한 (지상에서 "),o("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(" 미터 위 또는 지면과의 거리를 알 수 없는 경우에는 홈 위치 위). 기본값: 10 m/s.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_LAND_ALT1"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),o("td",[t._v("느린 착륙의 첫 번째 단계가 동작하는 고도입니다. 최대 허용 수평 속도 설정점에 영향을 끼칩니다. 기본값: 5m.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_LAND_ALT2"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),o("td",[t._v("느린 착륙의 두 번째 단계를 위한 고도. 이 단계에서 최대 수평 속도는 "),o("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v("로 제한됩니다. 기본값: 5m.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"RCX_DZ"}}),o("code",[t._v("RCX_DZ")])]),t._v(" "),o("td",[t._v("채널 X의 RC 데드 존. 스로틀에 대한 X 값은 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(" 값에 따라 달라집니다. 예를 들어, 스로틀이 채널 4 인 경우 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v("는 데드 존을 지정합니다.")],1)]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_xxx"}}),o("code",[t._v("MPC_XXXX")])]),t._v(" "),o("td",[t._v("대부분의 MPC_xxx 매개 변수는이 모드에서 비행 동작에 어느정도 영향을 미칩니다 . 예를 들어, "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("는 기체의 호버링 추력을 정의합니다.")],1)]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_POS_MODE"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),o("td",[t._v("Stick input to movement translation strategy. From PX4 v1.12 the default (4) is that stick position controls acceleration (in a similar way to a car accelerator pedal). Other options allow stick deflection to directly control speed over ground, with and without smoothing and acceleration limits.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_ACC_HOR_MAX"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[t._v("MPC_ACC_HOR_MAX")])],1),t._v(" "),o("td",[t._v("Maximum horizontal acceleration.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{id:"MPC_VEL_MANUAL"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[t._v("MPC_VEL_MANUAL")])],1),t._v(" "),o("td",[t._v("Maximum horizontal velocity.")])])])]),t._v(" "),o("h2",{attrs:{id:"추가-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),o("h3",{attrs:{id:"position-loss-safety"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position-loss-safety"}},[t._v("#")]),t._v(" Position Loss/Safety")]),t._v(" "),o("p",[t._v("Position mode is dependent on having an acceptable position estimate. If the estimate falls below acceptable levels, for example due to GPS loss, this may trigger a "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#position-gps-loss-failsafe"}},[t._v("Position (GPS) Loss Failsafe")]),t._v(". Depending on configuration, whether you have a remote control, and whether there is an adequate altitude estimate, PX4 may switch to altitude mode, manual mode, land mode or terminate.")],1)])}),[],!1,null,null,null);e.default=i.exports},322:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.c1403cf0.svg"},323:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},375:function(t,e,a){t.exports=a.p+"assets/img/position_MC.c6191ec9.png"}}]);