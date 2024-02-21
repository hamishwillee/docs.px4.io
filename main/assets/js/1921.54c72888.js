(window.webpackJsonp=window.webpackJsonp||[]).push([[1921],{3446:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"着陆探测器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#着陆探测器配置"}},[t._v("#")]),t._v(" 着陆探测器配置")]),t._v(" "),a("p",[t._v("着陆探测器是一个动态飞行器模型，代表了从接触地面到着陆的关键飞行器状态。 本节主题说明您可能希望调整的主要参数，以改善飞行器着陆行为。")]),t._v(" "),a("h2",{attrs:{id:"自动上锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动上锁"}},[t._v("#")]),t._v(" 自动上锁")]),t._v(" "),a("p",[t._v("当飞行器着陆时着陆探测器会为飞行器自动加锁。")]),t._v(" "),a("p",[t._v("您可以设置"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v(" COM_DISARM_LAND ")]),t._v("来指定着陆后系统上锁前的秒数（或通过将参数设置为 -1 关闭自动上锁）。")],1),t._v(" "),a("h2",{attrs:{id:"多旋翼配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼配置"}},[t._v("#")]),t._v(" 多旋翼配置")]),t._v(" "),a("p",[t._v("所有的关于着陆探测器的参数集在参数索引中列出，带有前缀 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDMC")]),t._v(" （可以通过"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("参数编辑器")]),t._v("在 QGroundControl 中编辑这些参数）。")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Information about how the parameters affect landing can be found below in "),a("a",{attrs:{href:"#mc-land-detector-states"}},[t._v("Land Detector States")]),t._v(".")])]),t._v(" "),a("p",[t._v("为了改善特定机架上的着陆，您可能需要调整的其他关键参数包括:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v("-系统的悬停油门 (默认值为 50%)。 正确设置这一点是很重要的, 因为它使高度控制更加准确, 并确保正确的地面检测。 没有安装有效载荷的穿越机或大型相机的无人机可能需要更低的悬停油门 (例如 35%)。")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Incorrectly setting "),a("code",[t._v("MPC_THR_HOVER")]),t._v(" may result in ground-contact or maybe-landed detection while still in air (in particular, while descending in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" or "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/altitude.html"}},[t._v("Altitude mode")]),t._v('). 这将导致载具 "抽搐" （关闭电机，然后立即将其重新打开）。')],1)]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v("-系统的全局最小油门。 应该将其设置为可控的下降")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_LAND_CRWL"}},[t._v("MPC_LAND_CRWL")]),t._v(" - the vertical speed applied in the last stage of autonomous landing if the system has a distance sensor and it is present and working. Has to be set larger than LNDMC_Z_VEL_MAX.")],1)]),t._v(" "),a("h3",{attrs:{id:"mc-land-detector-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mc-land-detector-states"}},[t._v("#")]),t._v(" MC Land Detector States")]),t._v(" "),a("p",[t._v("为了探测着陆，多旋翼首先必须经历三个不同的状态，其中每个状态都包含来自先前状态的条件以及更严格的约束。 如果由于缺少传感器而无法达到条件，则默认情况下认为该条件为真。 For instance, in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/acro.html"}},[t._v("Acro mode")]),t._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),t._v(" "),a("p",[t._v("In order to proceed to the next state, each condition has to be true for a third of the configured total land detector trigger time "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_TRIG_TIME"}},[t._v("LNDMC_TRIG_TIME")]),t._v(". If the vehicle is equipped with a distance sensor, but the distance to ground is currently not measurable (usually because it is too large), the trigger time is increased by a factor of 3.")],1),t._v(" "),a("p",[t._v("如果一个条件失败，则陆地探测器立即退出当前状态。")]),t._v(" "),a("h4",{attrs:{id:"地面接触"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#地面接触"}},[t._v("#")]),t._v(" 地面接触")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("没有垂直运动 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[t._v("LNDMC_Z_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("没有水平运动 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[t._v("LNDMC_XY_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("lower thrust than "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" + (hover throttle - "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(") * (0.3, unless a hover thrust estimate is available, then 0.6),")],1),t._v(" "),a("li",[t._v("additional check if vehicle is currently in a height-rate controlled flight mode: the vehicle has to have the intent to descend (vertical velocity setpoint above LNDMC_Z_VEL_MAX).")]),t._v(" "),a("li",[t._v("additional check for vehicles with a distance sensor: current distance to ground is below 1m.")])]),t._v(" "),a("p",[t._v("If the vehicle is in position- or velocity-control and ground contact was detected, the position controller will set the thrust vector along the body x-y-axis to zero.")]),t._v(" "),a("h4",{attrs:{id:"可能着陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能着陆"}},[t._v("#")]),t._v(" 可能着陆")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("all conditions of the "),a("a",{attrs:{href:"#ground-contact"}},[t._v("ground contact")]),t._v(" state are true")]),t._v(" "),a("li",[t._v("没有滚动运动 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[t._v("LNDMC_Z_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("具有低推力 "),a("code",[t._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")])]),t._v(" "),a("li",[t._v("no freefall detected")])]),t._v(" "),a("p",[t._v("If the vehicle only has knowledge of thrust and angular rate, in order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),t._v(" "),a("p",[t._v("If the vehicle is in position or velocity control and maybe landed was detected, the position controller will set the thrust vector to zero.")]),t._v(" "),a("h4",{attrs:{id:"降落完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降落完成"}},[t._v("#")]),t._v(" 降落完成")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("all conditions of the "),a("a",{attrs:{href:"#maybe-landed"}},[t._v("maybe landed")]),t._v(" state are true")])]),t._v(" "),a("h2",{attrs:{id:"fixed-wing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-configuration"}},[t._v("#")]),t._v(" Fixed-wing Configuration")]),t._v(" "),a("p",[t._v("Tuning parameters for fixed-wing land detection:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[t._v("LNDFW_AIRSPD_MAX")]),t._v("----飞机降落时允许的最大空速。 Has to be a tradeoff between airspeed sensing accuracy and triggering fast enough. 越好的空速传感器允许此参数的值越低。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v(" LNDFW_VEL_XY_MAX ")]),t._v("-是着陆时系统的最大水平速度，这应当被考虑，从而选择一个合适的值。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v(" LNDFW_VEL_Z_MAX")]),t._v("-是着陆时系统的最大垂直速度，这应当被考虑，从而选择一个合适的值。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_XYACC_MAX"}},[t._v("LNDFW_XYACC_MAX")]),t._v(" - the maximal horizontal acceleration for the system to still be considered landed.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_TRIG_TIME"}},[t._v("LNDFW_TRIG_TIME")]),t._v(" - Trigger time during which the conditions above have to be fulfilled to declare a landing.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("When FW launch detection is enabled ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[t._v("FW_LAUN_DETCN_ON")]),t._v('), the vehicle will stay in "landed" state until takeoff is detected (which is purely based on acceleration and not velocity).')],1)]),t._v(" "),a("h2",{attrs:{id:"vtol-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-land-detector"}},[t._v("#")]),t._v(" VTOL Land Detector")]),t._v(" "),a("p",[t._v("The VTOL land detector is 1:1 the same as the MC land detector if the system is in hover mode. In FW mode, land detection is disabled.")])])}),[],!1,null,null,null);e.default=o.exports}}]);