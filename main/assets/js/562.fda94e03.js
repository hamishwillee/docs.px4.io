(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{2602:function(e,t,a){"use strict";a.r(t);var i=a(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"나침반-보정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#나침반-보정"}},[e._v("#")]),e._v(" 나침반 보정")]),e._v(" "),i("p",[e._v("나침반 보정은 내부 및 외부 "),i("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[e._v("나침반 센서")]),e._v("들을 설정합니다. "),i("em",[e._v("QGroundControl")]),e._v(" will guide you to position the vehicle in a number of set orientations and rotate the vehicle about the specified axis.")],1),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("최초 사용시에는 나침반을 보정하여야하며, 차량이 매우 강한 자기장에 노출되었거나 비정상적인 자기 특성이있는 지역에서 사용되는 경우에는 나침반을 다시 보정하는 것이 좋습니다.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("나침반 보정이 잘못된 경우에는 호버링 중 멀티 콥터 회전, 변기 볼링 (반경 증가 / 스파이럴 아웃, 일반적으로 일정한 고도에서 회전, 플라이 웨이로 이어지는) 또는 직선 비행시에 경로를 벗어나는 경우가 있습니다. "),i("em",[e._v("QGroundControl")]),e._v(" should also notify the error "),i("code",[e._v("mag sensors inconsistent")]),e._v(".")])]),e._v(" "),i("p",[e._v("Two types of compass calibration are available:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#complete-calibration"}},[e._v("Complete")]),e._v(": This calibration is required after installing the autopilot on an airframe for the first time or when the configuration of the vehicle has changed significantly. It compensates for hard and soft iron effects by estimating an offset and a scale factor for each axis.")]),e._v(" "),i("li",[i("a",{attrs:{href:"#partial-quick-calibration"}},[e._v("Partial")]),e._v(' ("Quick Calibration"): This calibration can be performed as a routine when preparing the vehicle for a flight, after changing the payload, or simply when the compass rose seems inaccurate. This type of calibration only estimates the offsets to compensate for a hard iron effect.')])]),e._v(" "),i("h2",{attrs:{id:"보정-방법"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#보정-방법"}},[e._v("#")]),e._v(" 보정 방법")]),e._v(" "),i("h3",{attrs:{id:"preconditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),i("p",[e._v("Before starting the calibration:")]),e._v(" "),i("ol",[i("li",[e._v("큰 금속 물체등과 같이 자기장이 강한 곳에서 멀리 떨어진 위치를 선택하십시오. :::tip\n금속이 많은 장소는 보정 작업에 적당하지 않습니다. 사무실 테이블 위에서나 (종종 금속 막대 포함) 또는 차량 옆에서 보정하지 마십시오.\n철근이 고르지 않게 분포된 콘크리트 슬래브 근처 장소들도 보정에 영향을 미칠 수 있습니다.\n:::")]),e._v(" "),i("li",[e._v("Connect via telemetry radio rather than USB if at all possible. USB can potentially cause significant magnetic interference.")]),e._v(" "),i("li",[e._v("If using an external compass (or a combined GPS/compass module), make sure it is "),i("RouterLink",{attrs:{to:"/ko/assembly/mount_gps_compass.html"}},[e._v("mounted")]),e._v(" as far as possible from other electronics in order to reduce magnetic interference, and in a "),i("em",[e._v("supported orientation")]),e._v(".")],1)]),e._v(" "),i("h3",{attrs:{id:"complete-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#complete-calibration"}},[e._v("#")]),e._v(" Complete Calibration")]),e._v(" "),i("p",[e._v("보정 절차는 다음과 같습니다:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Start "),i("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")])]),e._v(" "),i("li",[i("p",[e._v("상단 도구 모음에서 "),i("strong",[e._v("톱니 바퀴")]),e._v(" 아이콘(기체 설정)을 선택한 다음 가장자리 표시줄에서 "),i("strong",[e._v("센서")]),e._v("를 선택하십시오.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("나침반")]),e._v(" 센서 버튼을 클릭합니다.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(666),alt:"나침반 보정 PX4를 선택합니다."}})])])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("이 작업 이전에 "),i("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[e._v("비행콘트롤러 방향")]),e._v("을 미리 설정하여야 합니다. 미리 설정하지 않았다면, 여기에서 설정할 수 있습니다.")],1)]),e._v(" "),i("ol",[i("li",[i("p",[i("strong",[e._v("확인")]),e._v("을 눌러 보정작업을 시작합니다.")])]),e._v(" "),i("li",[i("p",[e._v("기체를 아래에 표시된 자세로 놓고 그대로 유지해주십시오 메시지가 표시되면(방향 이미지가 노란색으로 변함) 기체를 지정축을 기준으로 한 방향으로 회전시킵니다. 현재 방향에 대해 보정이 완료되면 화면의 그림이 녹색으로 바뀝니다.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(667),alt:"PX4의 나침반 보정 단계"}})])]),e._v(" "),i("li",[i("p",[e._v("드론의 모든 방향에 대해 보정 과정을 반복합니다.")])])]),e._v(" "),i("p",[e._v("Once you've calibrated the vehicle in all the positions "),i("em",[e._v("QGroundControl")]),e._v(" will display "),i("em",[e._v("Calibration complete")]),e._v(" (all orientation images will be displayed in green and the progress bar will fill completely). 그런 다음 다음 센서의 보정 작업을 진행합니다.")]),e._v(" "),i("h3",{attrs:{id:"partial-quick-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#partial-quick-calibration"}},[e._v("#")]),e._v(' Partial "Quick" Calibration')]),e._v(" "),i("p",[e._v("This calibration is similar to the well-known figure-8 compass calibration done on a smartphone:")]),e._v(" "),i("ol",[i("li",[e._v("Hold the vehicle in front of you and randomly perform partial rotations on all its axes. 2-3 oscillations of ~30 degrees in every direction is usually sufficient.")]),e._v(" "),i("li",[e._v("Wait for the heading estimate to stabilize and verify that the compass rose is pointing to the correct direction (this can take a couple of seconds).")])]),e._v(" "),i("p",[e._v("Notes:")]),e._v(" "),i("ul",[i("li",[e._v("There is no start/stop for this type of calibration (the algorithm runs continuously when the vehicle is disarmed).")]),e._v(" "),i("li",[e._v("The calibration is immediately applied to the data (no reboot is required) but is saved to the calibration parameters after disarming the vehicle only (the calibration is lost if no arming/disarming sequence is performed between calibration and shutdown).")]),e._v(" "),i("li",[e._v("The amplitude and the speed of the partial rotations done in step 1 can affect the calibration quality. Following the advice above is usually enough.")])]),e._v(" "),i("h2",{attrs:{id:"verification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),i("p",[e._v("After the calibration is complete, check that the heading indicator and the heading of the arrow on the map are stable and match the orientation of the vehicle when turning it e.g. to the cardinal directions.")]),e._v(" "),i("h2",{attrs:{id:"additional-calibration-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#additional-calibration-configuration"}},[e._v("#")]),e._v(" Additional Calibration/Configuration")]),e._v(" "),i("p",[e._v("The process above will autodetect, "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_MAG_AUTOROT"}},[e._v("set default rotations")]),e._v(", calibrate, and prioritise, all connected magnetometers.")],1),e._v(" "),i("p",[e._v("Further compass configuration should generally not be required.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("All external compasses are given the same priority by default, which is higher than the priority shared by all internal compasses.")])]),e._v(" "),i("h3",{attrs:{id:"disable-a-compass"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#disable-a-compass"}},[e._v("#")]),e._v(" Disable a Compass")]),e._v(" "),i("p",[e._v("As stated above, generally no further configuration should be required.")]),e._v(" "),i("p",[e._v("That said, developers can disable internal compasses if desired using the compass parameters. These are prefixed with "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[e._v("CAL"),i("em",[e._v("MAGx")])]),e._v(" (where "),i("code",[e._v("x=0-3")]),e._v(").")],1),e._v(" "),i("p",[e._v("To disable an internal compass:")]),e._v(" "),i("ul",[i("li",[e._v("Use "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_ROT"}},[e._v("CAL_MAGn_ROT")]),e._v(" to determine which compasses are internal. A compass is internal if "),i("code",[e._v("CAL_MAGn_ROT==1")]),e._v(".")],1),e._v(" "),i("li",[e._v("Then use "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_PRIO"}},[e._v("CAL_MAGx_PRIO")]),e._v(" to disable the compass. This can also be used to change the relative priority of a compass.")],1)]),e._v(" "),i("h2",{attrs:{id:"debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),i("p",[e._v("Raw comparison data for magnetometers (in fact, for all sensors) can be logged by setting "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE=1")]),e._v(" and "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE=64")]),e._v(". See "),i("RouterLink",{attrs:{to:"/ko/dev_log/logging.html"}},[e._v("Logging")]),e._v(" for more information.")],1),e._v(" "),i("h2",{attrs:{id:"추가-정보"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[e._v("#")]),e._v(" 추가 정보")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[e._v("Peripherals > GPS & Compass")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/assembly/"}},[e._v("Basic Assembly")]),e._v(" (setup guides for each flight controller)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/advanced_config/compass_power_compensation.html"}},[e._v("나침반 전력 보정")]),e._v(" (고급 설정)")],1),e._v(" "),i("li",[i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#compass",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl 사용 설명서 > 센서"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=2m38s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 설정 비디오 - @2m38s"),i("OutboundLink")],1),e._v(" (유튜브)")])])])}),[],!1,null,null,null);t.default=o.exports},666:function(e,t,a){e.exports=a.p+"assets/img/sensor_compass_select_px4.91da60b7.jpg"},667:function(e,t,a){e.exports=a.p+"assets/img/sensor_compass_calibrate_px4.a111cc6c.jpg"}}]);