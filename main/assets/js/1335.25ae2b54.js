(window.webpackJsonp=window.webpackJsonp||[]).push([[1335],{2464:function(t,e,a){"use strict";a.r(e);var s=a(19),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"상태-추정기-전환"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#상태-추정기-전환"}},[t._v("#")]),t._v(" 상태 추정기 전환")]),t._v(" "),a("p",[t._v("어떤 상태 추정기를 사용할 수 있고 어떻게 전환할 수 있는 지를 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("EKF2 is highly recommended on vehicles with a GNSS/GPS. The Q-Estimator is recommended if you don't have GPS, and is commonly used in [multicopter racers](../config_mc/racer_setup.md).")])]),t._v(" "),a("h2",{attrs:{id:"가용-추정기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가용-추정기"}},[t._v("#")]),t._v(" 가용 추정기")]),t._v(" "),a("p",[t._v("사용 가능한 추정기는 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("EKF2 attitude, position and wind states estimator")]),t._v(" ("),a("em",[t._v("recommended")]),t._v(") - An extended Kalman filter estimating attitude, 3D position / velocity and wind states.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("LPE position estimator")]),t._v(" ("),a("em",[t._v("deprecated")]),t._v(") - An extended Kalman filter for 3D position and velocity states.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")])])])]),t._v(" "),a("p",[t._v("LPE is deprecated.\nIt works (at time of writing, in PX4 v1.14) but is no longer supported or maintained.\n:::")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Q attitude estimator")]),t._v(" - A very simple, quaternion based complementary filter for attitude. It does not require a GPS, magnetometer, or barometer.\n")])]),t._v(" "),a("h2",{attrs:{id:"다양한-추정기-활성화-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다양한-추정기-활성화-방법"}},[t._v("#")]),t._v(" 다양한 추정기 활성화 방법")]),t._v(" "),a("p",[t._v("멀티콥터와 VTOL은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 매개변수를 사용하여 설정합니다(고정 익에는 LPE가 지원되지 않음).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),a("th",[t._v("Q 추정기")]),t._v(" "),a("th",[t._v("LPE")]),t._v(" "),a("th",[t._v("EKF2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("활성")]),t._v(" "),a("td",[t._v("활성")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("활성")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("활성")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("FMU-v2(전용)의 경우에는 필요한 추정기를 포함하도록 PX4를 빌드하여야 합니다(예: EKF2: `make px4_fmu-v2`, LPE: `make px4_fmu-v2_lpe`). 이는 FMU-v2가 두 추정기를 모두 포함하기에는 리소스가 너무 제한되어 있기 때문입니다. 다른 Pixhawk FMU 버전에는 둘 다 포함되어 있습니다.")])])])}),[],!1,null,null,null);e.default=_.exports}}]);