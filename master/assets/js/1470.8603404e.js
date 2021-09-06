(window.webpackJsonp=window.webpackJsonp||[]).push([[1470],{2683:function(_,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"着陆探测器配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#着陆探测器配置"}},[_._v("#")]),_._v(" 着陆探测器配置")]),_._v(" "),e("p",[_._v("着陆探测器是一个动态飞行器模型，代表了从接触地面到着陆的关键飞行器状态。 本节主题说明您可能希望调整的主要参数，以改善飞行器着陆行为。")]),_._v(" "),e("h2",{attrs:{id:"自动上锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动上锁"}},[_._v("#")]),_._v(" 自动上锁")]),_._v(" "),e("p",[_._v("当飞行器着陆时着陆探测器会为飞行器自动加锁。")]),_._v(" "),e("p",[_._v("您可以设置"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[_._v(" COM_DISARM_LAND ")]),_._v("来指定着陆后系统上锁前的秒数（或通过将参数设置为 -1 关闭自动上锁）。")],1),_._v(" "),e("h2",{attrs:{id:"多旋翼配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼配置"}},[_._v("#")]),_._v(" 多旋翼配置")]),_._v(" "),e("p",[_._v("所有的关于着陆探测器的参数集在参数索引中列出，带有前缀 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#land-detector"}},[_._v("LNDMC")]),_._v(" （可以通过"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[_._v("参数编辑器")]),_._v("在 QGroundControl 中编辑这些参数）。")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),e("p",[_._v("关于参数如何影响着着陆的信息可以在下面的 "),e("a",{attrs:{href:"#states"}},[_._v("Land Detor States")]),_._v(" 中找到。")])]),_._v(" "),e("p",[_._v("为了改善特定机架上的着陆，您可能需要调整的其他关键参数包括:")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[_._v("MPC_THR_HOVER")]),_._v("-系统的悬停油门 (默认值为 50%)。 正确设置这一点是很重要的, 因为它使高度控制更加准确, 并确保正确的地面检测。 没有安装有效载荷的穿越机或大型相机的无人机可能需要更低的悬停油门 (例如 35%)。")],1)]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),e("p",[_._v("错误地设置 "),e("code",[_._v("MPC-THR_HOVER")]),_._v(" 可能会导致在空中检测到地面接触或可能着陆检测（特别是在 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v(" 或 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[_._v("高度模式")]),_._v(' 下降时）。 这将导致载具 "抽搐" （关闭电机，然后立即将其重新打开）。')],1)]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPC_THR_MIN")]),_._v("-系统的全局最小油门。 应该将其设置为可控的下降")],1)]),_._v(" "),e("h2",{attrs:{id:"固定翼配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定翼配置"}},[_._v("#")]),_._v(" 固定翼配置")]),_._v(" "),e("p",[_._v("完整的相关参数集可在 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#land-detector"}},[_._v("LNDFW")]),_._v(" 前缀下查阅。 这两个参数有时需要调整:")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[_._v("LNDFW_AIRSPD_MAX")]),_._v("----飞机降落时允许的最大空速。 默认值 8 m 是，在空速传感器精度和足够快的触发速度之间权衡后，一个合适的设定值。 越好的空速传感器允许此参数的值越低。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[_._v(" LNDFW_VEL_XY_MAX ")]),_._v("-是着陆时系统的最大水平速度，这应当被考虑，从而选择一个合适的值。")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[_._v(" LNDFW_VEL_Z_MAX")]),_._v("-是着陆时系统的最大垂直速度，这应当被考虑，从而选择一个合适的值。 可以调整此参数，以确保着陆探测器触发早于或者晚于将飞机手动投掷。")],1)]),_._v(" "),e("p",[e("span",{attrs:{id:"states"}})]),_._v(" "),e("h2",{attrs:{id:"着陆探测器状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#着陆探测器状态"}},[_._v("#")]),_._v(" 着陆探测器状态")]),_._v(" "),e("h3",{attrs:{id:"多旋翼着陆检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼着陆检测"}},[_._v("#")]),_._v(" 多旋翼着陆检测")]),_._v(" "),e("p",[_._v("为了探测着陆，多旋翼首先必须经历三个不同的状态，其中每个状态都包含来自先前状态的条件以及更严格的约束。 如果由于缺少传感器而无法达到条件，则默认情况下认为该条件为真。 例如，在"),e("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[_._v(" 特技模式 ")]),_._v("中并且除了陀螺仪传感器之外没有传感器处于活动状态，则检测仅依赖于推力输出和时间。")],1),_._v(" "),e("p",[_._v("为了进入下一个状态，每个条件必须在某个预定义的时间内为真。 如果一个条件失败，则陆地探测器立即退出当前状态。")]),_._v(" "),e("h4",{attrs:{id:"地面接触"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地面接触"}},[_._v("#")]),_._v(" 地面接触")]),_._v(" "),e("p",[_._v("如果满足以下条件达到 0.35 秒，则进入此状态：")]),_._v(" "),e("ul",[e("li",[_._v("没有垂直运动 ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[_._v("LNDMC_Z_VEL_MAX")]),_._v(")")],1),_._v(" "),e("li",[_._v("没有水平运动 ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[_._v("LNDMC_XY_VEL_MAX")]),_._v(")")],1),_._v(" "),e("li",[_._v("推力低于 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPC_THR_MIN")]),_._v(" + ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[_._v("MPPC_THR_HOVER")]),_._v(" - "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPPC_THR_MIN")]),_._v(") * (0.3 除非有悬停推理估计，否则 0.6）， 或速度设定点是着陆速度的 0.9， 但车辆没有垂直移动。")],1)]),_._v(" "),e("p",[_._v("如果飞行器处于位置控制或速度控制并且检测到地面接触，位置控制器会将沿飞行器 x-y 轴的推力矢量设置为零。")]),_._v(" "),e("h4",{attrs:{id:"可能着陆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能着陆"}},[_._v("#")]),_._v(" 可能着陆")]),_._v(" "),e("p",[_._v("如果满足以下条件达到 0.25 秒，则进入此状态：")]),_._v(" "),e("ul",[e("li",[_._v("所有的地面接触条件都是真")]),_._v(" "),e("li",[_._v("没有滚动运动 ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[_._v("LNDMC_Z_VEL_MAX")]),_._v(")")],1),_._v(" "),e("li",[_._v("具有低推力 "),e("code",[_._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")])])]),_._v(" "),e("p",[_._v("如果飞行器只知道推力和角速度，为了进入下一个状态，飞行器必须具有较低的推力（油门）和非旋转状态达到 8.0 秒。")]),_._v(" "),e("p",[_._v("如果飞行器处于位置控制或速度控制并且可能已检测到着陆，位置控制器会将推力矢量设置为零。")]),_._v(" "),e("h4",{attrs:{id:"降落完成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#降落完成"}},[_._v("#")]),_._v(" 降落完成")]),_._v(" "),e("p",[_._v("如果满足以下条件达到 0.3 秒，则进入此状态：")]),_._v(" "),e("ul",[e("li",[_._v("所有的可能着陆条件均为真")])])])}),[],!1,null,null,null);t.default=r.exports}}]);