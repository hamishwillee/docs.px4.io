(window.webpackJsonp=window.webpackJsonp||[]).push([[1554],{2837:function(e,t,r){"use strict";r.r(t);var a=r(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vtol-后转换调参"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol-后转换调参"}},[e._v("#")]),e._v(" VTOL 后转换调参")]),e._v(" "),r("p",[e._v("When a VTOL performs a back-transition (transition from fixed wing mode to multicopter) it needs to slow down before the multicopter can take proper control. As of PX4 version 1.7, and on the current developer branch, the vehicle will consider the back-transition complete when the horizontal speed has reached multicopter cruise speed ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(") or when the back-transition duration ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") has passed (whichever comes first).")],1),e._v(" "),r("h2",{attrs:{id:"后转换持续时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后转换持续时间"}},[e._v("#")]),e._v(" 后转换持续时间")]),e._v(" "),r("p",[e._v("Setting a high back-transition time ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") will give the vehicle more time to slow down. During this period the VTOL will shut down its fixed wing motor and slowly ramp up its MC motors while gliding. The higher this time is set the longer the vehicle will glide in an attempt to slow down. The caveat of this behavior is that the vehicle will only control altitude and not position during this period, so some drift can occur.")],1),e._v(" "),r("h2",{attrs:{id:"设置期望的减速加速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置期望的减速加速度"}},[e._v("#")]),e._v(" 设置期望的减速加速度")]),e._v(" "),r("p",[e._v("When flying missions that make use of a "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("VTOL_LAND"),r("OutboundLink")],1),e._v(" waypoint the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. It does this by looking at the current velocity (comparable to ground speed) and the expected deceleration. To get the vehicle to come out of back-transition very close to its landing point you can tune the expected deceleration ("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(") parameter. Make sure you have a large enough back-transition duration to allow the vehicle to reach its intended position before this timeout kicks in.")],1),e._v(" "),r("h2",{attrs:{id:"应用空气制动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#应用空气制动"}},[e._v("#")]),e._v(" 应用空气制动")]),e._v(" "),r("p",[e._v("If your vehicle is equipped with airbrakes, and your selected airframe supports them (in code), you can set the airbrake position during back-transition in "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(". The values scale from 0 to 1, so a value of 0.7 equals 70% output.")],1),e._v(" "),r("h2",{attrs:{id:"用固定翼电机进行反向推力"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用固定翼电机进行反向推力"}},[e._v("#")]),e._v(" 用固定翼电机进行反向推力")]),e._v(" "),r("p",[e._v("To get the shortest possible back-transition, PX4 supports active breaking by reversing the fixed wing motor direction. To use this feature you will require an ESC that supports motor rotation reversing.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("A typical fixed wing propeller is not optimized to spin in reverse, when the throttle during reverse thrust is set too high the propeller can stall.")])]),e._v(" "),r("p",[e._v("Generally there are 2 ways a reverse-capable ESC can implement reverse thrust.")]),e._v(" "),r("h3",{attrs:{id:"用油门缩放功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用油门缩放功能"}},[e._v("#")]),e._v(" 用油门缩放功能")]),e._v(" "),r("p",[e._v("Normally the throttle stick is used purely for forward thrust.")]),e._v(" "),r("p",[e._v("3D ESCs assume 0 thrust at 50% throttle, positive (forward) thrust above 50% and negative thrust (reverse) below 50%. The airframe can be modified to implement this behaviour "),r("em",[e._v("only")]),e._v(" during back transition, allowing reverse thrust to be applied during the transition.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("Support for 3D throttle scaling during back-transition requires "),r("em",[e._v("code support")]),e._v(" in the airframe.")])]),e._v(" "),r("p",[e._v("The amount of negative thrust during back transition can then be configured using the "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" parameter (set to a negative value between 0 and -1).")],1),e._v(" "),r("h3",{attrs:{id:"用一个通道来控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用一个通道来控制"}},[e._v("#")]),e._v(" 用一个通道来控制")]),e._v(" "),r("p",[e._v("ESCs that use a separate control channel to control the motor direction (e.g. "),r("a",{attrs:{href:"https://www.hobbywing.com/category.php?id=76&filter_attr=.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing Platinum series"),r("OutboundLink")],1),e._v(") can use the airbrakes channel to apply reverse thrust during back-transition.")]),e._v(" "),r("p",[e._v("Airframes that have been configured to support this behavior (like the DeltaQuad airframe) can be configured to do so by setting both "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_REV_OUT"}},[e._v("VT_B_REV_OUT")]),e._v(" to 1 and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#VT_B_TRANS_THR"}},[e._v("VT_B_TRANS_THR")]),e._v(" to the desired throttle level to apply for active breaking. The values scale from 0 to 1, so a value of 0.7 equals 70% throttle.")],1),e._v(" "),r("h2",{attrs:{id:"典型设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#典型设置"}},[e._v("#")]),e._v(" 典型设置")]),e._v(" "),r("p",[e._v("An example of a setup that employs most features listed above would be the following:")]),e._v(" "),r("ul",[r("li",[e._v("机型: 任何支持反向推力的VTOL机型 (例如 DeltaQuad)")]),e._v(" "),r("li",[e._v("电调: 支持推力反向的固定翼电调(例如 Hobbywing Platinum Pro 60A)")]),e._v(" "),r("li",[e._v("估计减速加速度 （单位m/s/s） "),r("code",[e._v("VT_B_DEC_MSS")]),e._v(": 2.5")]),e._v(" "),r("li",[e._v("后转换持续时间，（单位是秒） "),r("code",[e._v("VT_B_TRANS_DUR")]),e._v(": 10")]),e._v(" "),r("li",[e._v("激活后转换的推力反向控制通道 "),r("code",[e._v("VT_B_REV_OUT")]),e._v(": 1.0")]),e._v(" "),r("li",[e._v("在推力反向时使用70%的推力 "),r("code",[e._v("VT_B_TRANS_THR")]),e._v(": 0.7")])])])}),[],!1,null,null,null);t.default=o.exports}}]);