(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1e3:function(t,e,s){t.exports=s.p+"assets/img/panel_top.64661e84.jpg"},1001:function(t,e,s){t.exports=s.p+"assets/img/panel_bottom.8cbd3aa2.jpg"},1002:function(t,e,s){t.exports=s.p+"assets/img/final_assembly.f61eb6de.jpg"},1003:function(t,e,s){t.exports=s.p+"assets/img/final_side.c9c5c7b3.jpg"},1004:function(t,e,s){t.exports=s.p+"assets/img/mounting_detail.5f34744b.jpg"},1005:function(t,e,s){t.exports=s.p+"assets/img/airframe_px4_rover_traxxas_stampede_vxl_2wd.1cd42a47.jpg"},1006:function(t,e,s){t.exports=s.p+"assets/img/correct_mission.23b1a438.jpg"},2065:function(t,e,s){"use strict";s.r(e);var r=s(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"traxxas-stampede-vxl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#traxxas-stampede-vxl"}},[t._v("#")]),t._v(" Traxxas Stampede VXL")]),t._v(" "),r("p",[t._v("This vehicle was chosen to understand how a Pixhawk could be used for wheeled platforms. We chose to use a Traxxas vehicle as they are very popular and it is a very strong brand in the RC community. The idea was to develop a platform that allows for easy control of wheeled UGVs with an autopilot.")]),t._v(" "),r("p",[t._v("{% youtube %}https://youtu.be/N3HvSKS3nCw{% endyoutube %}")]),t._v(" "),r("p",[r("img",{attrs:{src:s(998),alt:"Traxxas Stampede VXL"}})]),t._v(" "),r("h2",{attrs:{id:"parts-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://traxxas.com/products/models/electric/stampede-vxl-tsm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traxxas Stampede"),r("OutboundLink")],1),t._v(" All of this is used except for the top plastic cover.")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_mini.html"}},[t._v("Pixhawk Mini (Discontinued)")]),t._v(" "),r("ul",[r("li",[t._v("3DR 10S Power Module")]),t._v(" "),r("li",[t._v("[3DR 433MHz Telemetry Module (EU)")])])],1),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.spektrumrc.com/Products/Default.aspx?ProdId=SPM1000",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spektrum Dxe Controller"),r("OutboundLink")],1),t._v(" or other PX4-compatible remotes")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.spektrumrc.com/Products/Default.aspx?ProdID=SPM4648",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spektrum Quad Race Serial Receiver w/Diversity"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")])],1)]),t._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),r("p",[t._v("The assembly consists of a wooden frame on which all the autopilot parts were attached. Tests showed that a better vibration insulation should be used, especially for the Pixhawk and the Flow module.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(999),alt:"Stampede Chassis"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(1e3),alt:"Wooden Panel Top"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(1001),alt:"Wooden Panel Bottom"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(1002),alt:"Traxxas Stampede Final Assembly"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(1003),alt:"Side View Final Assembly"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(1004),alt:"Wodden panel fixture"}})]),t._v(" "),r("p",[t._v("For this particular mounting we chose to use the clip supplied with the rover to attach the upper plate. For this, two supports were 3D printed. The CAD files are provided "),r("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/airframes/rover/traxxas_stampede_vxl/plane_holders.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Warning")]),t._v(" It is "),r("strong",[t._v("HIGHLY RECOMMENDED")]),t._v(" to set the ESC in training mode (see Traxxas Stampede Manual) so to reduce the power to 50%.")])]),t._v(" "),r("h2",{attrs:{id:"output-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-connections"}},[t._v("#")]),t._v(" Output Connections")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("PWM Output")]),t._v(" "),r("th",[t._v("Actuator")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MAIN2")]),t._v(" "),r("td",[t._v("Steering servo")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN4")]),t._v(" "),r("td",[t._v("ESC input")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" As documented in the "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#rover_rover_traxxas_stampede_vxl_2wd"}},[t._v("Airframe reference here")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("Rovers are configured using "),r("em",[t._v("QGroundControl")]),t._v(" in the same way as any other vehicle.")]),t._v(" "),r("p",[t._v("The main rover-specific configuration is setting the correct frame:")]),t._v(" "),r("ol",[r("li",[t._v("Switch to the "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Basic Configuration")]),t._v(" section in "),r("em",[t._v("QGroundControl")])],1),t._v(" "),r("li",[t._v("Select the "),r("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("Airframe")]),t._v(" tab.")],1),t._v(" "),r("li",[t._v("Scroll down the list to find the "),r("strong",[t._v("Rover")]),t._v(" icon.")]),t._v(" "),r("li",[t._v("Choose "),r("strong",[t._v("Traxxas stampede vxl 2wd")]),t._v(" from the drop down list.")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(1005),alt:"Select Airframe"}})]),t._v(" "),r("h2",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),r("p",[t._v("At the current time, PX4 only supports "),r("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("MISSION")]),t._v(" and MANUAL modes when a RC remote is connected. To use the mission mode, first upload a new mission to the vehicle with QGC. Then, BEFORE ARMING, select "),r("code",[t._v("MISSION")]),t._v(" and then arm.")],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Warning")]),t._v(" It is "),r("em",[r("strong",[t._v("VERY IMPORTANT")])]),t._v(" to do a mission composed "),r("em",[r("strong",[t._v("ONLY")])]),t._v(" of normal waypoints (i.e. "),r("em",[r("strong",[t._v("NO TAKEOFF WAYPOINTS")])]),t._v(") and it is crucial to "),r("em",[r("strong",[t._v("SET THE WAYPOINT HEIGHT OF EVERY WAYPOINT TO 0")])]),t._v(" for a correct execution. Failing to do so will cause the rover to continuously spin around a waypoint.")])]),t._v(" "),r("p",[t._v("A correct mission setup looks as follows:")]),t._v(" "),r("p",[r("img",{attrs:{src:s(1006),alt:"mission"}})])])}),[],!1,null,null,null);e.default=o.exports},998:function(t,e,s){t.exports=s.p+"assets/img/stampede.10c22bb1.jpg"},999:function(t,e,s){t.exports=s.p+"assets/img/stampede_chassis.abe1219f.jpg"}}]);