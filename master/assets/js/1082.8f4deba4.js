(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{2260:function(t,e,_){"use strict";_.r(e);var o=_(18),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"切换状态估计器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#切换状态估计器"}},[t._v("#")]),t._v(" 切换状态估计器")]),t._v(" "),_("p",[t._v("此页显示了可用的状态估计器以及如何在它们之间切换。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("EKF2 is highly recommended for all purposes (LPE is no longer supported/maintained).")])]),t._v(" "),_("h2",{attrs:{id:"可用的估计器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#可用的估计器"}},[t._v("#")]),t._v(" 可用的估计器")]),t._v(" "),_("p",[t._v("对于多旋翼和 VTOL ，使用参数 "),_("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 来选择下面的配置（ LPE 不再支持固定翼飞机）。")],1),t._v(" "),_("ul",[_("li",[t._v("** Q attitude estimator ** - attitude Q estimator 是一种用于姿态的、简单的、基于四元数的互补滤波器。")]),t._v(" "),_("li",[_("strong",[t._v("INAV position estimator")]),t._v(" - INAV position estimator 是一种用于三维位置与速度状态的互补滤波器。")]),t._v(" "),_("li",[_("strong",[t._v("LPE position estimator")]),t._v(" - LPE position estimator 是一种用于三维位置与速度状态的扩展卡尔曼估计器。")])]),t._v(" "),_("h2",{attrs:{id:"如何启用不同的估计器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何启用不同的估计器"}},[t._v("#")]),t._v(" 如何启用不同的估计器")]),t._v(" "),_("p",[t._v("For multirotors and VTOL use the parameter "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" to choose between the following configurations (LPE is not supported for Fixed Wing).")],1),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),_("th",[t._v("Q Estimator")]),t._v(" "),_("th",[t._v("LPE")]),t._v(" "),_("th",[t._v("EKF2")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("启用")]),t._v(" "),_("td",[t._v("启用")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("启用")])]),t._v(" "),_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("启用")]),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("For FMU-v2 (only) you will also need to build PX4 to specifically include required estimator (e.g. EKF2: "),_("code",[t._v("make px4_fmu-v2")]),t._v(", LPE: "),_("code",[t._v("make px4_fmu-v2_lpe")]),t._v("). This is required because FMU-v2 is too resource constrained to include both estimators. Other Pixhawk FMU versions include both.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);