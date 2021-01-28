(window.webpackJsonp=window.webpackJsonp||[]).push([[1078],{2260:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"着陆探测器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着陆探测器配置"}},[t._v("#")]),t._v(" 着陆探测器配置")]),t._v(" "),a("p",[t._v("着陆探测器是一个动态飞行器模型，代表了从接触地面到着陆的关键飞行器状态。 本节主题说明您可能希望调整的主要参数，以改善飞行器着陆行为。")]),t._v(" "),a("h2",{attrs:{id:"自动上锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动上锁"}},[t._v("#")]),t._v(" 自动上锁")]),t._v(" "),a("p",[t._v("当飞行器着陆时着陆探测器会为飞行器自动加锁。")]),t._v(" "),a("p",[t._v("您可以设置"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v(" COM_DISARM_LAND ")]),t._v("来指定着陆后系统上锁前的秒数（或通过将参数设置为 -1 关闭自动上锁）。")],1),t._v(" "),a("h2",{attrs:{id:"多旋翼配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼配置"}},[t._v("#")]),t._v(" 多旋翼配置")]),t._v(" "),a("p",[t._v("所有的关于着陆探测器的参数集在参数索引中列出，带有前缀 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDMC")]),t._v(" （可以通过"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("参数编辑器")]),t._v("在 QGroundControl 中编辑这些参数）。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Information about how the parameters affect landing can be found below in "),a("a",{attrs:{href:"#states"}},[t._v("Land Detector States")]),t._v(".")])]),t._v(" "),a("p",[t._v("Other key parameters that you may need to tune in order to improve landing behaviour on particular airframes are:")]),t._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("-系统的悬停油门 (默认值为 50%)。 正确设置这一点是很重要的, 因为它使高度控制更加准确, 并确保正确的地面检测。 没有安装有效载荷的穿越机或大型相机的无人机可能需要更低的悬停油门 (例如 35%)。")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v('Incorrectly setting `MPC_THR_HOVER` may result in ground-contact or maybe-landed detection while still in air (in particular, while descending in [Position mode](../flight_modes/position_mc.md) or [Altitude mode](../flight_modes/altitude_mc.md)). This causes the vehicle to "twitch" (turn down the motors, and then immediately turn them back up).')])])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v("-系统的全局最小油门。 这应被设置是飞行器能够被控制下降")],1)]),t._v(" "),a("h2",{attrs:{id:"固定翼配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#固定翼配置"}},[t._v("#")]),t._v(" 固定翼配置")]),t._v(" "),a("p",[t._v("The complete set of relevant parameters is available under the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDFW")]),t._v(" prefix. These two parameters are sometimes worth tuning:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[t._v("LNDFW_AIRSPD_MAX")]),t._v("----飞机降落时允许的最大空速。 默认值 8 m 是，在空速传感器精度和足够快的触发速度之间权衡后，一个合适的设定值。 越好的空速传感器允许此参数的值越低。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v(" LNDFW_VEL_XY_MAX ")]),t._v("-是着陆时系统的最大水平速度，这应当被考虑，从而选择一个合适的值。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v(" LNDFW_VEL_Z_MAX")]),t._v("-是着陆时系统的最大垂直速度，这应当被考虑，从而选择一个合适的值。 可以调整此参数，以确保着陆探测器触发早于或者晚于将飞机手动投掷。")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"states"}})]),t._v(" "),a("h2",{attrs:{id:"着陆探测器状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着陆探测器状态"}},[t._v("#")]),t._v(" 着陆探测器状态")]),t._v(" "),a("h3",{attrs:{id:"多旋翼着陆探测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼着陆探测"}},[t._v("#")]),t._v(" 多旋翼着陆探测")]),t._v(" "),a("p",[t._v("In order to detect landing, the multicopter first has to go through three different states, where each state contains the conditions from the previous states plus tighter constraints. If a condition cannot be reached because of missing sensors, then the condition is true by default. For instance, in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[t._v("Acro mode")]),t._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),t._v(" "),a("p",[t._v("In order to proceed to the next state, each condition has to be true for some predefined time. If one condition fails, the land detector drops out of the current state immediately.")]),t._v(" "),a("h4",{attrs:{id:"地面接触"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地面接触"}},[t._v("#")]),t._v(" 地面接触")]),t._v(" "),a("p",[t._v("This state is reached if following conditions are true for 0.35 seconds:")]),t._v(" "),a("ul",[a("li",[t._v("没有垂直运动 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[t._v("LNDMC_Z_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("没有水平运动 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[t._v("LNDMC_XY_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("lower thrust than "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" + ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" - "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(") * (0.3, unless a hover thrust estimate is available, then 0.6), or velocity setpoint is 0.9 of land speed but vehicle has no vertical movement.")],1)]),t._v(" "),a("p",[t._v("If the vehicle is in position- or velocity-control and ground contact was detected, the position controller will set the thrust vector along the body x-y-axis to zero.")]),t._v(" "),a("h4",{attrs:{id:"可能着陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能着陆"}},[t._v("#")]),t._v(" 可能着陆")]),t._v(" "),a("p",[t._v("This state is reached if following conditions are true for 0.25 seconds:")]),t._v(" "),a("ul",[a("li",[t._v("所有的地面接触条件都是真")]),t._v(" "),a("li",[t._v("没有旋转（"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[t._v(" LNDMC_ROT_MAX ")]),t._v("），即 俯仰、滚转、偏航为零的状态。")],1),t._v(" "),a("li",[t._v("具有低油门 ，即油门低于"),a("code",[t._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")])])]),t._v(" "),a("p",[t._v("If the vehicle only has knowledge of thrust and angular rate, in order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),t._v(" "),a("p",[t._v("If the vehicle is in position or velocity control and maybe landed was detected, the position controller will set the thrust vector to zero.")]),t._v(" "),a("h4",{attrs:{id:"降落完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降落完成"}},[t._v("#")]),t._v(" 降落完成")]),t._v(" "),a("p",[t._v("This state is reached if following conditions are true for 0.3 seconds:")]),t._v(" "),a("ul",[a("li",[t._v("所有的可能着陆条件均为真")])])])}),[],!1,null,null,null);e.default=o.exports}}]);