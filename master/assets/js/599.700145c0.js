(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{2055:function(t,e,a){"use strict";a.r(e);var r=a(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"fixed-wing-landing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-landing"}},[t._v("#")]),t._v(" Fixed Wing Landing")]),t._v(" "),r("p",[t._v("PX4 enables autopilot-controlled fixed-wing (FW) landing in "),r("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("Missions")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("Land mode")]),t._v(", and "),r("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("Return mode")]),t._v(".")],1),t._v(" "),r("p",[t._v("The landing logic has several phases, as shown below. In the first phase the vehicle will follow a fixed trajectory ("),r("a",{attrs:{href:"#FW_LND_ANG"}},[t._v("FW_LND_ANG")]),t._v(") towards the ground. At the flare landing altitude ("),r("a",{attrs:{href:"#FW_LND_FLALT"}},[t._v("FW_LND_FLALT")]),t._v(") the vehicle will start to follow a flare path (the curve is based on the value of "),r("a",{attrs:{href:"#FW_LND_HVIRT"}},[t._v("FW_LND_HVIRT")]),t._v(").")]),t._v(" "),r("p",[r("img",{attrs:{src:a(841),alt:"Fixed Wing - Landing Path"}})]),t._v(" "),r("p",[t._v('The flare landing altitude is relative to the altitude that the FW vehicle "thinks" is ground level. In '),r("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("Land mode")]),t._v(" the ground altitude is not known and the vehicle will use assume it is at 0m (sea level). Often the ground level will be much higher than sea level, so the vehicle will land in the first phase (it will land on the ground before it reaches the flare altitude).")],1),t._v(" "),r("p",[t._v("In a mission, "),r("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("Return mode")]),t._v(", or if the vehicle has a range sensor fitted then ground level can be accurately estimated and landing behaviour will be as shown in the preceding diagram.")],1),t._v(" "),r("p",[t._v("Landing is further affected by the following parameters:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_ANG"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_ANG"}},[t._v("FW_LND_ANG")])],1),t._v(" "),r("td",[t._v("Landing slope angle prior to flaring")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_HVIRT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_HVIRT"}},[t._v("FW_LND_HVIRT")])],1),t._v(" "),r("td",[t._v("Virtual horizontal line/altitude used to calculate the flare trajectory.")])]),t._v(" "),r("tr",[r("td",[t._v("This represents the sub-ground altitude that the flare-path curve asymptotically approaches.")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FLALT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FLALT"}},[t._v("FW_LND_FLALT")])],1),t._v(" "),r("td",[t._v("Landing flare altitude (relative to landing altitude)")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_TLALT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_TLALT"}},[t._v("FW_LND_TLALT")])],1),t._v(" "),r("td",[t._v("Landing throttle limit altitude (relative landing altitude). The default value of -1.0 lets the system default to applying throttle limiting at 2/3 of the flare altitude.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_HHDIST"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_HHDIST"}},[t._v("FW_LND_HHDIST")])],1),t._v(" "),r("td",[t._v("Landing heading hold horizontal distance")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_USETER"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_USETER"}},[t._v("FW_LND_USETER")])],1),t._v(" "),r("td",[t._v("Use terrain estimate (ground altitude from GPS) during landing. This is turned off by default and a waypoint or return altitude is normally used (or sea level for an arbitrary land position).")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FL_PMIN"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FL_PMIN"}},[t._v("FW_LND_FL_PMIN")])],1),t._v(" "),r("td",[t._v("Minimum pitch during flare. A positive sign means nose up Applied once "),r("code",[t._v("FW_LND_TLALT")]),t._v(" is reached")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_FL_PMAX"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_FL_PMAX"}},[t._v("FW_LND_FL_PMAX")])],1),t._v(" "),r("td",[t._v("Maximum pitch during flare. A positive sign means nose up Applied once "),r("code",[t._v("FW_LND_TLALT")]),t._v(" is reached")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"FW_LND_AIRSPD_SC"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LND_AIRSPD_SC"}},[t._v("FW_LND_AIRSPD_SC")])],1),t._v(" "),r("td",[t._v("Min. airspeed scaling factor for landing. Comment: Multiplying this factor with the minimum airspeed of the plane gives the target airspeed the landing approach. "),r("code",[t._v("FW_AIRSPD_MIN x FW_LND_AIRSPD_SC")])])])])])])}),[],!1,null,null,null);e.default=n.exports},841:function(t,e,a){t.exports=a.p+"assets/img/fw_landing_path.8b853a08.png"}}]);