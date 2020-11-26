(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{2029:function(t,e,r){"use strict";r.r(e);var a=r(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"수동-안정-모드-멀티-태스킹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수동-안정-모드-멀티-태스킹"}},[t._v("#")]),t._v(" 수동 / 안정 모드 (멀티 태스킹)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:r(330),title:"Medium difficulty to fly",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:r(323),title:"Manual/Remote control required",width:"30px"}})])],1),t._v(" "),a("ul",[a("li",[t._v("Manual / Stabilized </ 0> 모드는 RC 컨트롤 스틱이 중앙에있을 때 멀티탭을 안정시킵니다. 기체를 수동으로 움직이거나 조종하려면 스틱을 중앙의 바깥쪽으로 움직입니다."),a("p")])]),t._v(" "),a("blockquote",[a("p",[t._v("** 참고 </ 0>이 다중 모드는 * 수동 </ 1> 또는 * 안정화 </ 1> 모드를 설정하면 활성화됩니다.")])]),a("p"),t._v(" "),a("p",[t._v("수동 제어에서 롤과 피치 스틱이 각 축을 중심으로 기체 (자세)을 * 각도로 제어하면 요 스틱이 수평면 위의 회전 속도를 제어하고 스로틀은 고도 / 속도를 제어합니다 .")]),a("p"),t._v(" "),a("p",[t._v("As soon as you release the control sticks they will return to the center deadzone. 롤 포크와 피치 스틱이 중앙에 오면 멀티 피터가 수평을 유지하고 정지합니다. The vehicle will then hover in place/maintain altitude - provided it is properly balanced, throttle is set appropriately (see "),a("a",{attrs:{href:"#params"}},[t._v("below")]),t._v("), and no external forces are applied (e.g. wind). 항공기는 바람의 방향으로 표류하고 고도를 유지하기 위해 스로틀을 제어해야합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(421),alt:"MC 수동 비행"}})]),t._v(" "),a("h2",{attrs:{id:"technical-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-description"}},[t._v("#")]),t._v(" Technical Description")]),t._v(" "),a("p",[t._v("조종사의 입력은 롤 및 피치 각 명령과 요 율 명령으로 전달됩니다. Throttle is rescaled (see "),a("a",{attrs:{href:"#params"}},[t._v("below")]),t._v(") and passed directly to the output mixer. 자동 조종 장치는 자세를 제어합니다. 즉, RC 스틱이 컨트롤러 데드 존 내부에 집중 될 때 롤과 피치 각을 제로로 조절합니다 (결과적으로 태도가 수평이 됨). 자동 조종 장치는 바람 (또는 다른 원인)으로 인한 드리프트를 보상하지 않습니다.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" * Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")])]),t._v(" "),a("p",[a("span",{attrs:{id:"params"}})]),t._v(" "),a("blockquote",[a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_THR_HOVER"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")])],1),t._v(" "),a("td",[t._v("Hover throttle that is output when the throttle stick is centered and "),a("code",[t._v("MPC_THR_CURVE")]),t._v(" is set to default.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_THR_CURVE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_CURVE"}},[t._v("MPC_THR_CURVE")])],1),t._v(" "),a("td",[t._v("Defines the throttle scaling. By default this is set to "),a("strong",[t._v("Rescale to hover thrust")]),t._v(", which means that when the throttle stick is centered the configured hover throttle is output ("),a("code",[t._v("MPC_THR_HOVER")]),t._v(") and the stick input is linearly rescaled below and above that (allowing for a smooth transition between Stabilized and Altitude/Position control).")])]),t._v(" "),a("tr",[a("td",[t._v("On powerful vehicles the hover throttle might be very low (e.g. below 20%) so that rescaling distorts the throttle input - i.e. here 80% of the thrust would be controlled by just the top half of the stick input and 20% by the bottom. If needed "),a("code",[t._v("MPC_THR_CURVE")]),t._v(" can be set to "),a("strong",[t._v("No Rescale")]),t._v(" so that there is no rescaling (stick input to throttle mapping is independent of "),a("code",[t._v("MPC_THR_HOVER")]),t._v(").")]),t._v(" "),a("td")])])])])])}),[],!1,null,null,null);e.default=o.exports},323:function(t,e,r){t.exports=r.p+"assets/img/remote_control.e49232a6.svg"},330:function(t,e){t.exports="data:image/png;base64,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"},421:function(t,e,r){t.exports=r.p+"assets/img/manual_stabilized_MC.857b681e.png"}}]);