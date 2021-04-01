(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1e3:function(t,e,a){t.exports=a.p+"assets/img/NoTopDeck.af1d0c24.jpg"},1685:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"dji-matrice-100-pixhawk-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dji-matrice-100-pixhawk-1"}},[t._v("#")]),t._v(" DJI Matrice 100 (Pixhawk 1)")]),t._v(" "),r("p",[t._v("The DJI"),r("sup",[t._v("®")]),t._v(" Matrice quadcopter is a fully customizable and programmable flight platform. This build log provides build and configuration instructions for using the frame with the "),r("em",[t._v("3DR Pixhawk")]),t._v(" flight controller.")]),t._v(" "),r("p",[t._v("Key information:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Frame:")]),t._v(" DJI Matrice 100")]),t._v(" "),r("li",[r("strong",[t._v("Flight controller:")]),t._v(" "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")])],1)]),t._v(" "),r("p",[r("img",{attrs:{src:a(994),alt:"DJI Matrice 100"}})]),t._v(" "),r("h2",{attrs:{id:"parts-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parts-list"}},[t._v("#")]),t._v(" Parts List")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://store.dji.com/product/matrice-100",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Matrice 100"),r("OutboundLink")],1),t._v(" Just ESCs motors, and frame.")])]),t._v(" "),r("h2",{attrs:{id:"motor-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motor-connections"}},[t._v("#")]),t._v(" Motor Connections")]),t._v(" "),r("p",[t._v("See the "),r("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk.html"}},[t._v("Pixhawk Wiring Quickstart")]),t._v(" for autopilot assembly instructions.")],1),t._v(" "),r("h3",{attrs:{id:"wiring-diagram"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-diagram"}},[t._v("#")]),t._v(" Wiring Diagram")]),t._v(" "),r("p",[t._v("![Connections](../../assets/airframes/multicopter/matrice100/Wiring Diagram.jpg)")]),t._v(" "),r("h3",{attrs:{id:"wiring-harness"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-harness"}},[t._v("#")]),t._v(" Wiring Harness")]),t._v(" "),r("p",[r("img",{attrs:{src:a(995),alt:"Wiring Harness"}})]),t._v(" "),r("h3",{attrs:{id:"pwm-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-connections"}},[t._v("#")]),t._v(" PWM Connections")]),t._v(" "),r("p",[r("img",{attrs:{src:a(996),alt:"PWM Connections"}})]),t._v(" "),r("h3",{attrs:{id:"other-views"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-views"}},[t._v("#")]),t._v(" Other views")]),t._v(" "),r("p",[r("img",{attrs:{src:a(997),alt:"Top"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(998),alt:"Back"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(999),alt:"No Stack"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(1e3),alt:"No Top Deck"}})]),t._v(" "),r("h3",{attrs:{id:"autopilot-outputs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-outputs"}},[t._v("#")]),t._v(" Autopilot Outputs")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Output")]),t._v(" "),r("th",[t._v("Rate")]),t._v(" "),r("th",[t._v("Actuator")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MAIN1")]),t._v(" "),r("td",[t._v("400 Hz")]),t._v(" "),r("td",[t._v("Front right, CCW")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN2")]),t._v(" "),r("td",[t._v("400 Hz")]),t._v(" "),r("td",[t._v("Back left, CCW")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN3")]),t._v(" "),r("td",[t._v("400 Hz")]),t._v(" "),r("td",[t._v("Front left, CW")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN4")]),t._v(" "),r("td",[t._v("400 Hz")]),t._v(" "),r("td",[t._v("Back right, CW")])]),t._v(" "),r("tr",[r("td",[t._v("AUX1")]),t._v(" "),r("td",[t._v("50 Hz")]),t._v(" "),r("td",[t._v("RC AUX1")])]),t._v(" "),r("tr",[r("td",[t._v("AUX2")]),t._v(" "),r("td",[t._v("50 Hz")]),t._v(" "),r("td",[t._v("RC AUX2")])]),t._v(" "),r("tr",[r("td",[t._v("AUX3")]),t._v(" "),r("td",[t._v("50 Hz")]),t._v(" "),r("td",[t._v("RC AUX3")])])])]),t._v(" "),r("h2",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),r("ul",[r("li",[t._v("At high throttle the inner loop causes oscillations with default x quad gains. At low throttle, higher gains give a better response, this suggests that some gain scheduling based on the throttle may improve the overall response and this could be implemented in mc_att_control. For now we will just tune it so that there are no oscillations at low or high throttle, and take the bandwidth hit at low throttle.\n"),r("ul",[r("li",[t._v("MC_PITCHRATE_P: 0.05")]),t._v(" "),r("li",[t._v("MC_PITCHRATE_D: 0.001")])])]),t._v(" "),r("li",[t._v("The battery has 6 cells instead of the default 3\n"),r("ul",[r("li",[t._v("BAT_N_CELLS: 6")])])])]),t._v(" "),r("h2",{attrs:{id:"video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/3OGs0ONemGc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p")])}),[],!1,null,null,null);e.default=s.exports},994:function(t,e,a){t.exports=a.p+"assets/img/Matrice100.44f1f559.jpg"},995:function(t,e,a){t.exports=a.p+"assets/img/WiringHarness.c17fbe60.jpg"},996:function(t,e,a){t.exports=a.p+"assets/img/PwmInput.5053bf7c.jpg"},997:function(t,e,a){t.exports=a.p+"assets/img/Top.79416714.jpg"},998:function(t,e,a){t.exports=a.p+"assets/img/Back.6c8c7476.jpg"},999:function(t,e,a){t.exports=a.p+"assets/img/NoStack.98c457ec.jpg"}}]);