(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{2421:function(t,e,a){"use strict";a.r(e);var r=a(18),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"高度模式-固定翼"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#高度模式-固定翼"}},[t._v("#")]),t._v(" 高度模式（固定翼）")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_difficulty"}},[r("img",{attrs:{src:a(324),title:"易于使用",width:"30px"}})]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_manual"}},[r("img",{attrs:{src:a(323),title:"需要手动或遥控控制",width:"30px"}})]),t._v(" "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#altitude_only"}},[r("img",{attrs:{src:a(329),title:"所需高度（例如巴罗、测距仪）",width:"30px"}})])],1),t._v(" "),r("p",[r("em",[t._v("高度模式")]),t._v("使操纵者更容易控制飞机高度，特别是到达并维持一个固定高度。 该模式不会试图抵抗风扰保持航向。")]),t._v(" "),r("p",[t._v("爬升/下沉率通过俯仰/升降舵杆操纵杆来控制。 操纵杆一旦回中，自动驾驶仪就会锁定当前的高度，并在偏航/滚转和任何空速条件下保持高度。")]),t._v(" "),r("p",[t._v("油门通道输入控制空速。 滚动和俯仰是角度控制的（因此不可能实现飞机滚转或环绕）。")]),t._v(" "),r("p",[t._v("当所有遥控输入都居中时（无滚动、俯仰、偏航，油门约50％），飞机将恢复直线水平飞行（受风影响）并保持其当前高度。")]),t._v(" "),r("p",[t._v("下图以可视方式显示模式行为（对于"),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("模式2发送器")]),t._v("）。")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(800),alt:"固定翼高度控制"}})]),t._v(" "),r("h2",{attrs:{id:"技术总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术总结"}},[t._v("#")]),t._v(" 技术总结")]),t._v(" "),r("p",[t._v("遥控/手动模式，如稳定模式，但具有高度稳定性（杆回中使飞机进入直线和水平飞行并保持当前高度）。 但是飞行过程并不稳定，可能被风吹飘离。")]),t._v(" "),r("ul",[r("li",[t._v("回中的滚动/俯仰/偏航输入（在死区内）：\n"),r("ul",[r("li",[t._v("自动驾驶仪使飞机/机翼水平并且维持高度。")]),t._v(" "),r("li",[t._v("如果空速传感器已连接，油门杆控制飞机速度。 在没有空速传感器的情况下，用户无法控制油门（在这种情况下，飞机将在巡航油门下("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[t._v("FW_THR_CRUISE")]),t._v(") 水平飞行，根据需要增加或减少油门以上升或下降。")],1)])]),t._v(" "),r("li",[t._v("外部中心：\n"),r("ul",[r("li",[t._v("俯仰摇杆控制高度。")]),t._v(" "),r("li",[t._v("Throttle stick controls the airspeed of the aircraft (as for centered Roll/Pitch/Yaw inputs).")]),t._v(" "),r("li",[t._v("翻滚摇杆控制滚动角度。 自动驾驶仪将保持 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("协调飞行"),r("OutboundLink")],1),t._v("。 这和"),r("RouterLink",{attrs:{to:"/zh/flight_modes/stabilized_fw.html"}},[t._v("稳定模式")]),t._v("一样。")],1),t._v(" "),r("li",[t._v("偏航摇杆操纵会驱动方向舵（指令将被加到自动驾驶仪计算的指令中以维持 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight",target:"_blank",rel:"noopener noreferrer"}},[t._v("协调飞行"),r("OutboundLink")],1),t._v("）。 这和"),r("RouterLink",{attrs:{to:"/zh/flight_modes/stabilized_fw.html"}},[t._v("稳定模式")]),t._v("一样。")],1)])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("ul",[r("li",[t._v("Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink).")]),t._v(" "),r("li",[t._v("The altitude is normally measured using a barometer, which may become inaccurate in extreme weather conditions. Vehicles that include a LIDAR/range sensor will be able to control altitude with greater reliability and accuracy.")])])]),t._v(" "),r("h2",{attrs:{id:"参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),r("p",[t._v("The mode is affected by the following parameters:"),r("span",{attrs:{id:"FW_MAN_P_MAX"}},[r("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_MAN_P_MAX"}},[t._v("FW_MAN_P_MAX")])])]),t._v(" "),r("td",[t._v("\n  在高度稳定模式下手动控制的最大俯仰角。 默认：45度\n")]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_MAN_R_MAX"}},[r("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_MAN_R_MAX"}},[t._v("FW_MAN_R_MAX")])])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v('<td>\n  在高度稳定模式下手动控制的最大滚转角。 默认：45度\n</td></tr> \n\n<tr>\n  <td>\n    <span id="FW_L1_CONTROL"><a href="../advanced_config/parameter_reference.md#fw-l1-control">FW L1 Control</a></td> \n    \n    <td>\n      维持指令高度和空速所需的滚转/偏航角也受固定翼L1控制参数的影响。\n    </td></tr> </tbody> </table> \n    \n    \x3c!-- \n')])])]),r("p",[t._v("FW notes:\nFW position controller is basically 2 independent pieces")]),t._v(" "),r("ul",[r("li",[t._v("L1 is for navigation - determines the roll and yaw needed to achieve the desired waypoint (or loiter)")]),t._v(" "),r("li",[t._v("TECS is for speed and height control - determines throttle and elevator position needed to achieve the commanded altitude and airspeed\nOverall that gives you an attitude setpoint (roll, pitch, yaw) and throttle which is sent off to the attitude controller\n--\x3e")])])])])}),[],!1,null,null,null);e.default=i.exports},323:function(t,e,a){t.exports=a.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},329:function(t,e,a){t.exports=a.p+"assets/img/altitude_icon.ca9310b8.svg"},800:function(t,e,a){t.exports=a.p+"assets/img/altitude_control_mode_fw.925c7f56.png"}}]);