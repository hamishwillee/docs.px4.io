(window.webpackJsonp=window.webpackJsonp||[]).push([[1596],{2990:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"模块参考-估计器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-估计器"}},[t._v("#")]),t._v(" 模块参考：估计器")]),t._v(" "),e("h2",{attrs:{id:"attitudeestimatorq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attitudeestimatorq"}},[t._v("#")]),t._v(" AttitudeEstimatorQ")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/attitude_estimator_q",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/attitude_estimator_q"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("Attitude and position estimator using an Extended Kalman Filter. It is used for Multirotors and Fixed-Wing.")]),t._v(" "),e("p",[e("a",{attrs:{id:"AttitudeEstimatorQ_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("AttitudeEstimatorQ <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),e("h2",{attrs:{id:"wind-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wind-estimator"}},[t._v("#")]),t._v(" wind_estimator")]),t._v(" "),e("p",[t._v("The documentation can be found on the "),e("a",{attrs:{href:"https://dev.px4.io/en/tutorials/tuning_the_ecl_ekf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tuning_the_ecl_ekf"),e("OutboundLink")],1),t._v(" page.")]),t._v(" "),e("h3",{attrs:{id:"描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v('This module provides a single airspeed_validated topic, containing indicated (IAS), calibrated (CAS), true airspeed (TAS) and the information if the estimation currently is invalid and if based sensor readings or on groundspeed minus windspeed. Supporting the input of multiple "raw" airspeed inputs, this module automatically switches to a valid sensor in case of failure detection. For failure detection as well as for the estimation of a scale factor from IAS to CAS, it runs several wind estimators and also publishes those.')]),t._v(" "),e("p",[e("a",{attrs:{id:"airspeed_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("airspeed_estimator <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),e("h2",{attrs:{id:"ekf2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" ekf2")]),t._v(" "),e("p",[t._v("源码："),e("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/ekf2",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/ekf2"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("基于扩展卡尔曼滤波器的姿态和位置估计器。 该模块同时应用于多旋翼和固定翼飞机。")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/wind_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/wind_estimator"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("This module runs a combined wind and airspeed scale factor estimator. If provided the vehicle NED speed and attitude it can estimate the horizontal wind components based on a zero sideslip assumption. This makes the estimator only suitable for fixed wing vehicles. If provided an airspeed measurement this module also estimates an airspeed scale factor based on the following model: measured_airspeed = scale_factor * real_airspeed.")]),t._v(" "),e("p",[e("a",{attrs:{id:"ekf2_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ekf2 <command> [arguments...]\n ekf2 &lt;command&gt; [arguments...]\n Commands:\n   start\n     [-r]        启用 replay 模式\n\n   stop\n\n   status        打印状态信息\n")])])]),e("h2",{attrs:{id:"local-position-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#local-position-estimator"}},[t._v("#")]),t._v(" local_position_estimator")]),t._v(" "),e("p",[t._v("源码："),e("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/local_position_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/local_position_estimator"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"参数描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),e("p",[t._v("基于扩展卡尔曼滤波器的姿态和位置估计器。")]),t._v(" "),e("p",[e("a",{attrs:{id:"local_position_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("local_position_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),e("h2",{attrs:{id:"mc-hover-thrust-estimator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mc-hover-thrust-estimator"}},[t._v("#")]),t._v(" mc_hover_thrust_estimator")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_hover_thrust_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_hover_thrust_estimator"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"参数描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-2"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),e("p",[e("a",{attrs:{id:"mc_hover_thrust_estimator_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mc_hover_thrust_estimator <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);