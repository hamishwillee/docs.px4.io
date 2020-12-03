(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1646:function(t,a,r){"use strict";r.r(a);var s=r(18),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dji-matrice-100-pixhawk-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dji-matrice-100-pixhawk-1"}},[t._v("#")]),t._v(" DJI Matrice 100 (Pixhawk 1)")]),t._v(" "),s("p",[t._v("The DJI"),s("sup",[t._v("®")]),t._v(" Matrice quadcopter is a fully customizable and programmable flight platform. This build log provides build and configuration instructions for using the frame with the "),s("em",[t._v("3DR Pixhawk")]),t._v(" flight controller.")]),t._v(" "),s("p",[t._v("Key information:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Frame:")]),t._v(" DJI Matrice 100")]),t._v(" "),s("li",[s("strong",[t._v("Flight controller:")]),t._v(" "),s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")])],1)]),t._v(" "),s("p",[s("img",{attrs:{src:r(959),alt:"DJI Matrice 100"}})]),t._v(" "),s("h2",{attrs:{id:"parts-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://store.dji.com/product/matrice-100",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Matrice 100"),s("OutboundLink")],1),t._v(" Just ESCs motors, and frame.")])]),t._v(" "),s("h2",{attrs:{id:"motor-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motor-connections"}},[t._v("#")]),t._v(" Motor Connections")]),t._v(" "),s("p",[t._v("See the "),s("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk.html"}},[t._v("Pixhawk Wiring Quickstart")]),t._v(" for autopilot assembly instructions.")],1),t._v(" "),s("h3",{attrs:{id:"wiring-diagram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring-diagram"}},[t._v("#")]),t._v(" Wiring Diagram")]),t._v(" "),s("p",[t._v("![Connections](../../assets/airframes/multicopter/matrice100/Wiring Diagram.jpg)")]),t._v(" "),s("h3",{attrs:{id:"wiring-harness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring-harness"}},[t._v("#")]),t._v(" Wiring Harness")]),t._v(" "),s("p",[s("img",{attrs:{src:r(960),alt:"Wiring Harness"}})]),t._v(" "),s("h3",{attrs:{id:"pwm-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwm-connections"}},[t._v("#")]),t._v(" PWM Connections")]),t._v(" "),s("p",[s("img",{attrs:{src:r(961),alt:"PWM Connections"}})]),t._v(" "),s("h3",{attrs:{id:"other-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-views"}},[t._v("#")]),t._v(" Other views")]),t._v(" "),s("p",[s("img",{attrs:{src:r(962),alt:"Top"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(963),alt:"Back"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(964),alt:"No Stack"}})]),t._v(" "),s("p",[s("img",{attrs:{src:r(965),alt:"No Top Deck"}})]),t._v(" "),s("h3",{attrs:{id:"autopilot-outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-outputs"}},[t._v("#")]),t._v(" Autopilot Outputs")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Output")]),t._v(" "),s("th",[t._v("Rate")]),t._v(" "),s("th",[t._v("Actuator")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("MAIN1")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Front right, CCW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN2")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Back left, CCW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN3")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Front left, CW")])]),t._v(" "),s("tr",[s("td",[t._v("MAIN4")]),t._v(" "),s("td",[t._v("400 Hz")]),t._v(" "),s("td",[t._v("Back right, CW")])]),t._v(" "),s("tr",[s("td",[t._v("AUX1")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX1")])]),t._v(" "),s("tr",[s("td",[t._v("AUX2")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX2")])]),t._v(" "),s("tr",[s("td",[t._v("AUX3")]),t._v(" "),s("td",[t._v("50 Hz")]),t._v(" "),s("td",[t._v("RC AUX3")])])])]),t._v(" "),s("h2",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("ul",[s("li",[t._v("At high throttle the inner loop causes oscillations with default x quad gains. At low throttle, higher gains give a better response, this suggests that some gain scheduling based on the throttle may improve the overall response and this could be implemented in mc_att_control. For now we will just tune it so that there are no oscillations at low or high throttle, and take the bandwidth hit at low throttle.\n"),s("ul",[s("li",[t._v("MC_PITCHRATE_P: 0.05")]),t._v(" "),s("li",[t._v("MC_PITCHRATE_D: 0.001")])])]),t._v(" "),s("li",[t._v("The battery has 6 cells instead of the default 3\n"),s("ul",[s("li",[t._v("BAT_N_CELLS: 6")])])])]),t._v(" "),s("h2",{attrs:{id:"video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),s("p",[t._v("{% youtube %}https://www.youtube.com/watch?v=3OGs0ONemGc{% endyoutube %}")])])}),[],!1,null,null,null);a.default=e.exports},959:function(t,a,r){t.exports=r.p+"assets/img/Matrice100.44f1f559.jpg"},960:function(t,a,r){t.exports=r.p+"assets/img/WiringHarness.c17fbe60.jpg"},961:function(t,a,r){t.exports=r.p+"assets/img/PwmInput.5053bf7c.jpg"},962:function(t,a,r){t.exports=r.p+"assets/img/Top.79416714.jpg"},963:function(t,a,r){t.exports=r.p+"assets/img/Back.6c8c7476.jpg"},964:function(t,a,r){t.exports=r.p+"assets/img/NoStack.98c457ec.jpg"},965:function(t,a,r){t.exports=r.p+"assets/img/NoTopDeck.af1d0c24.jpg"}}]);