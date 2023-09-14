(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{2474:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"나침반-전력-보정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#나침반-전력-보정"}},[t._v("#")]),t._v(" 나침반 전력 보정")]),t._v(" "),a("p",[t._v("케이블은 나침반 판독 값을 왜곡시킬 수 있는 자기장을 유도하므로, 큰 전류가 흐르는 케이블에서 최대한 멀리 나침반(자력계)을 장착해야합니다.")]),t._v(" "),a("p",[t._v("이 항목에서는 나침반 이동이 현실적으로 불가능할 경우에 유도된 자기장을 보정하는 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("자기장 강도는 케이블과의 거리의 제곱에 반비례하여 급격하게 감소하기 때문에, 나침반을 전원 공급 케이블에서 멀리 설치하는 것이 문제를 해결하는 가장 쉽고 효과적인 방법입니다.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 섹션에서는 멀티콥터에 국한하여 설명하지만, 다른 기체에도 동일하게 적용할 수 있습니다.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"when"}})]),t._v(" "),a("h2",{attrs:{id:"전력-보정은-언제-적용됩니까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전력-보정은-언제-적용됩니까"}},[t._v("#")]),t._v(" 전력 보정은 언제 적용됩니까?")]),t._v(" "),a("p",[t._v("전력 보정은 아래의 사항들이 모두 해당되는 경우에만 권장됩니다.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("나침반과 전력 공급 케이블 사이의 거리를 띄울 수 없을 때.")])]),t._v(" "),a("li",[a("p",[t._v("There is a strong correlation between the compass readings and the thrust setpoint, and/or the battery current.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(466),alt:"교란된 지자기"}})])]),t._v(" "),a("li",[a("p",[t._v("드론 케이블이 모두 제자리에 고정되어 이동할 수 없는 경우. (전류가 흐르는 케이블이 움직일 수 있다면 계산된 보정 매개 변수가 유효하지 않습니다)")])])]),t._v(" "),a("p",[a("a",{attrs:{id:"how"}})]),t._v(" "),a("h2",{attrs:{id:"나침반-보정-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#나침반-보정-방법"}},[t._v("#")]),t._v(" 나침반 보정 방법")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("드론의 펌웨어 버전이 전력 보정을 지원하는지 확인하십시오.  (현재 마스터 버전 또는 v.1.11.0 릴리즈)")])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/ko/config/compass.html#compass-calibration"}},[t._v("표준 나침반 캘리브레이션")]),t._v("을 수행하십시오.")],1)]),t._v(" "),a("li",[a("p",[t._v("부팅시 데이터 로깅을 활성화하기 위해 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")]),t._v(" 매개 변수를 2로 설정하십시오.")],1)]),t._v(" "),a("li",[a("p",[t._v("Set the parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")]),t._v(" checkbox for "),a("em",[t._v("Sensor comparison")]),t._v(" (bit 6) to get more data points.")],1)]),t._v(" "),a("li",[a("p",[t._v("드론이 움직이지 않도록 고정하고 프로펠러를 부착하십시오(모터가 비행 중과 동일한 전류를 소비하게 됩니다). 이 예시에서는 끈으로 드론을 고정시킵니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(467),alt:"스트랩"}})])]),t._v(" "),a("li",[a("p",[t._v("드론에 전원을 공급하고 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/acro_mc.html"}},[t._v("ACRO 비행 모드")]),t._v("로 전환하십시오 (이 모드를 사용하면 드론이 끈에 의해 발생하는 움직임을 보정하지 않도록 합니다).")],1),t._v(" "),a("ul",[a("li",[t._v("기체에 시동을 걸고 스로틀을 천천히 최대로 올립니다.")]),t._v(" "),a("li",[t._v("스로틀을 천천히 0까지 낮춥니다.")]),t._v(" "),a("li",[t._v("기체 시동을 끄십시오. > "),a("strong",[t._v("참고")]),t._v(" 진동을 면밀히 관찰하고, 신중하게 테스트를 진행하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),a("p",[t._v("테스트를 면밀하게 실시하고, 진동을 자세히 모니터링 하십시오.\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Retrieve the ulog and use the python script "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/sensors/vehicle_magnetometer/mag_compensation/python/mag_compensation.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("mag_compensation.py"),a("OutboundLink")],1),t._v(" to identify the compensation parameters.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python mag_compensation.py ~/path/to/log/logfile.ulg\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),a("p",[t._v("If your log does not contain battery current measurements, you will need to comment out the respective lines in the Python script, such that it does the calculation for thrust only.\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v('스크립트는 추력 및 전류에 대한 매개변수 식별값을 계산하여 콘솔에 인쇄할 것입니다. 스크립트에서 나타나는 그림은 각 나침반 인스턴스에 대한 "적합성"과 제안된 값으로 데이터가 보정된 경우의 모습을 보여줍니다. 전류 측정이 가능한 경우,  일반적으로 전류 보정을 사용하면 더 나은 결과를 얻을 수 있습니다. 다음은 현재 적합도는 양호하지만 관계가 선형이 아니므로 추력 매개 변수를 사용할 수 없는 로그의 예입니다.')]),t._v(" "),a("p",[a("img",{attrs:{src:s(468),alt:"선형 적합"}})])]),t._v(" "),a("li",[a("p",[t._v("파라미터가 식별되면 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG_COMP_TYP"}},[t._v("CAL_MAG_COMP_TYP")]),t._v("를 1 (추력 파라미터 사용시) 또는 2 (전류 파라미터 사용시)로 설정하여 전력 보정을 활성화해야합니다. 또한 각 나침반의 각 축에 대한 보정 매개 변수를 설정해야합니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:s(469),alt:"나침반 파라미터"}})])])])])}),[],!1,null,null,null);e.default=o.exports},466:function(t,e,s){t.exports=s.p+"assets/img/corrupted_mag.0d8dbed4.png"},467:function(t,e,s){t.exports=s.p+"assets/img/strap.5c76a824.png"},468:function(t,e,s){t.exports=s.p+"assets/img/line_fit.09ad1ed1.png"},469:function(t,e,s){t.exports=s.p+"assets/img/comp_params.25fa50a0.png"}}]);