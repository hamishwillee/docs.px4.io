(window.webpackJsonp=window.webpackJsonp||[]).push([[1522],{2748:function(t,_,v){"use strict";v.r(_);var a=v(19),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"切换状态估计器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#切换状态估计器"}},[t._v("#")]),t._v(" 切换状态估计器")]),t._v(" "),v("p",[t._v("此页显示了可用的状态估计器以及如何在它们之间切换。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("强烈推荐使用 EKF2 (LPE 不再支持/维护)。")])]),t._v(" "),v("h2",{attrs:{id:"可用的估计器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可用的估计器"}},[t._v("#")]),t._v(" 可用的估计器")]),t._v(" "),v("p",[t._v("可用的估计器如下：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("EKF2 姿态、位置和风的状态估计器")]),t._v(" - EKF2 是一个扩展卡尔曼过滤器，用于估计姿态、3D 位置/速度和风状态。")]),t._v(" "),v("li",[v("strong",[t._v("LPE 位置估计器")]),t._v(" - LPE 位置估计器是 3D 位置和速度状态的扩展卡尔曼滤波器。")]),t._v(" "),v("li",[v("strong",[t._v("Q 姿态估计器")]),t._v(" - 姿态Q估计器是一个非常简单、基于四元数的互补滤波器。")])]),t._v(" "),v("h2",{attrs:{id:"如何启用不同的估计器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何启用不同的估计器"}},[t._v("#")]),t._v(" 如何启用不同的估计器")]),t._v(" "),v("p",[t._v("对于多旋转器和 VTOL，使用参数 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 来选择以下配置(LPE 不支持固定翼)。")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),v("th",[t._v("Q Estimator")]),t._v(" "),v("th",[t._v("LPE")]),t._v(" "),v("th",[t._v("EKF2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("启用")]),t._v(" "),v("td",[t._v("启用")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("启用")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("启用")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("仅对于 FMU-v2 你也需要生成 PX4 以具体包含所需的估计器 (例如EKF2: "),v("code",[t._v("make px4_fmu-v2")]),t._v(", LPE: "),v("code",[t._v("make px4_fmu-v2_lpe")]),t._v(")。 这是因为 FMU-v2 不具有足够的资源同时包含这两个估计器。 其他的 Pixhawk FMU 版本同时拥有两个估计器。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);