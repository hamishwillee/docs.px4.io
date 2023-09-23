(window.webpackJsonp=window.webpackJsonp||[]).push([[1753],{3187:function(t,e,a){"use strict";a.r(e);var _=a(19),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"切换状态估计器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换状态估计器"}},[t._v("#")]),t._v(" 切换状态估计器")]),t._v(" "),a("p",[t._v("此页显示了可用的状态估计器以及如何在它们之间切换。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("EKF2 is highly recommended on vehicles with a GNSS/GPS. The Q-Estimator is recommended if you don't have GPS, and is commonly used in [multicopter racers](../config_mc/racer_setup.md).")])]),t._v(" "),a("h2",{attrs:{id:"可用的估计器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用的估计器"}},[t._v("#")]),t._v(" 可用的估计器")]),t._v(" "),a("p",[t._v("可用的估计器如下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("EKF2 attitude, position and wind states estimator")]),t._v(" ("),a("em",[t._v("recommended")]),t._v(") - An extended Kalman filter estimating attitude, 3D position / velocity and wind states.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("LPE position estimator")]),t._v(" ("),a("em",[t._v("deprecated")]),t._v(") - An extended Kalman filter for 3D position and velocity states.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")])])])]),t._v(" "),a("p",[t._v("LPE is deprecated.\nIt works (at time of writing, in PX4 v1.14) but is no longer supported or maintained.\n:::")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Q attitude estimator")]),t._v(" - A very simple, quaternion based complementary filter for attitude. It does not require a GPS, magnetometer, or barometer.\n")])]),t._v(" "),a("h2",{attrs:{id:"如何启用不同的估计器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何启用不同的估计器"}},[t._v("#")]),t._v(" 如何启用不同的估计器")]),t._v(" "),a("p",[t._v("对于多旋转器和 VTOL，使用参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 来选择以下配置(LPE 不支持固定翼)。")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),a("th",[t._v("Q Estimator")]),t._v(" "),a("th",[t._v("LPE")]),t._v(" "),a("th",[t._v("EKF2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("启用")]),t._v(" "),a("td",[t._v("启用")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("启用")])]),t._v(" "),a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("启用")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("仅对于 FMU-v2 你也需要生成 PX4 以具体包含所需的估计器 (例如EKF2: "),a("code",[t._v("make px4_fmu-v2")]),t._v(", LPE: "),a("code",[t._v("make px4_fmu-v2_lpe")]),t._v(")。 这是因为 FMU-v2 不具有足够的资源同时包含这两个估计器。 其他的 Pixhawk FMU 版本同时拥有两个估计器。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);