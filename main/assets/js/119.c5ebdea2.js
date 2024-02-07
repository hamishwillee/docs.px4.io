(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1232:function(t,e,a){t.exports=a.p+"assets/img/stampede.e97c204c.jpg"},1233:function(t,e,a){t.exports=a.p+"assets/img/stampede_chassis.90a95438.jpg"},1234:function(t,e,a){t.exports=a.p+"assets/img/panel_top.64661e84.jpg"},1235:function(t,e,a){t.exports=a.p+"assets/img/panel_bottom.8cbd3aa2.jpg"},1236:function(t,e,a){t.exports=a.p+"assets/img/final_assembly.f61eb6de.jpg"},1237:function(t,e,a){t.exports=a.p+"assets/img/mounting_detail.5f34744b.jpg"},1238:function(t,e,a){t.exports=a.p+"assets/img/airframe_px4_rover_traxxas_stampede_vxl_2wd.83c54352.jpg"},1239:function(t,e,a){t.exports=a.p+"assets/img/correct_mission.23b1a438.jpg"},2195:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"traxxas-stampede-vxl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#traxxas-stampede-vxl"}},[t._v("#")]),t._v(" Traxxas Stampede VXL")]),t._v(" "),s("p",[t._v("This vehicle was chosen to understand how a Pixhawk could be used for wheeled platforms.\nWe chose to use a Traxxas vehicle as they are very popular and it is a very strong brand in the RC community.\nThe idea was to develop a platform that allows for easy control of wheeled UGVs with an autopilot.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1232),alt:"Traxxas Stampede VXL"}})]),t._v(" "),s("h2",{attrs:{id:"parts-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://traxxas.com/products/models/electric/stampede-vxl-tsm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traxxas Stampede"),s("OutboundLink")],1),t._v(" All of this is used except for the top plastic cover.")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_mini.html"}},[t._v("Pixhawk Mini (Discontinued)")]),t._v(" "),s("ul",[s("li",[t._v("3DR 10S Power Module")]),t._v(" "),s("li",[t._v("3DR 433MHz Telemetry Module (EU)")])])],1),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.spektrumrc.com/Products/Default.aspx?ProdId=SPM1000",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spektrum Dxe Controller"),s("OutboundLink")],1),t._v(" or other PX4-compatible remotes")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.spektrumrc.com/Products/Default.aspx?ProdID=SPM4648",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spektrum Quad Race Serial Receiver w/Diversity"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" (Deprecated)")],1)]),t._v(" "),s("h2",{attrs:{id:"assembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),s("p",[t._v("The assembly consists of a wooden frame on which all the autopilot parts were attached.\nTests showed that a better vibration insulation should be used, especially for the Pixhawk and the Flow module.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1233),alt:"Stampede Chassis"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1234),alt:"Wooden Panel Top"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1235),alt:"Wooden Panel Bottom"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1236),alt:"Traxxas Stampede Final Assembly"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(406),alt:"Side View Final Assembly"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1237),alt:"Wodden panel fixture"}})]),t._v(" "),s("p",[t._v("For this particular mounting we chose to use the clip supplied with the rover to attach the upper plate.\nFor this, two supports were 3D printed.\nThe CAD files are provided "),s("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/airframes/rover/traxxas_stampede_vxl/plane_holders.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("It is "),s("strong",[t._v("HIGHLY RECOMMENDED")]),t._v(" to set the ESC in training mode (see Traxxas Stampede Manual), which reduces power to 50%.")])]),t._v(" "),s("h2",{attrs:{id:"output-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-connections"}},[t._v("#")]),t._v(" Output Connections")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("PWM Output")]),t._v(" "),s("th",[t._v("Actuator")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("MAIN2")]),t._v(" "),s("td",[t._v("Steering servo")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN4")]),t._v(" "),s("td",[t._v("Throttle (ESC input)")])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("As documented in the Airframe Reference: "),s("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#rover_rover_generic_ground_vehicle_(ackermann)"}},[t._v("Generic ground vehicle (Ackermann)")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Rovers are configured using "),s("em",[t._v("QGroundControl")]),t._v(" in the same way as any other vehicle.")]),t._v(" "),s("p",[t._v("The main rover-specific configuration is setting the correct frame:")]),t._v(" "),s("ol",[s("li",[t._v("Switch to the "),s("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(" section in "),s("em",[t._v("QGroundControl")])],1),t._v(" "),s("li",[t._v("Select the "),s("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")]),t._v(" tab.")],1),t._v(" "),s("li",[t._v("Scroll down the list to find the "),s("strong",[t._v("Rover")]),t._v(" icon.")]),t._v(" "),s("li",[t._v("Choose "),s("strong",[t._v("Traxxas stampede vxl 2wd")]),t._v(" from the drop down list.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1238),alt:"Select Airframe"}})]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("At the current time, PX4 only supports Mission and Manual modes when a RC remote is connected.\nTo use the mission mode, first upload a new mission to the vehicle with QGC. Then, BEFORE ARMING, select "),s("code",[t._v("MISSION")]),t._v(" and then arm.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("It is very important to do a mission composed "),s("em",[t._v("only")]),t._v("* of normal waypoints (i.e. no takeoff waypoints etc.) and it is crucial to set the waypoint height of "),s("strong",[t._v("every")]),t._v(" waypoint to 0 for correct execution.\nFailing to do so will cause the rover to continuously spin around a waypoint.")])]),t._v(" "),s("p",[t._v("A correct mission setup looks as follows:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1239),alt:"mission"}})]),t._v(" "),s("h2",{attrs:{id:"video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),s("iframe",{attrs:{width:"740",height:"416",src:"https://www.youtube.com/embed/N3HvSKS3nCw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=r.exports},406:function(t,e,a){t.exports=a.p+"assets/img/final_side.638e2361.jpg"}}]);