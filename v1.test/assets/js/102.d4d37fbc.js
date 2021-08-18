(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{2298:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"大疆matrice-100-pixhawk-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大疆matrice-100-pixhawk-1"}},[t._v("#")]),t._v(" 大疆Matrice 100 (Pixhawk 1)")]),t._v(" "),e("p",[t._v("The DJI"),e("sup",[t._v("®")]),t._v(" Matrice quadcopter is a fully customizable and programmable flight platform. This build log provides build and configuration instructions for using the frame with the "),e("em",[t._v("3DR Pixhawk")]),t._v(" flight controller.")]),t._v(" "),e("p",[t._v("Key information:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Frame:")]),t._v(" DJI Matrice 100")]),t._v(" "),e("li",[e("strong",[t._v("Flight controller:")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")])],1)]),t._v(" "),e("p",[e("img",{attrs:{src:s(982),alt:"DJI Matrice 100"}})]),t._v(" "),e("h2",{attrs:{id:"配件列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配件列表"}},[t._v("#")]),t._v(" 配件列表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("* [DJI Matrice 100](http://store.dji.com/product/matrice-100) Just ESCs motors, and frame.\n")])])]),e("h2",{attrs:{id:"motor-connections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#motor-connections"}},[t._v("#")]),t._v(" Motor Connections")]),t._v(" "),e("p",[t._v("See the "),e("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk.html"}},[t._v("Pixhawk Wiring Quickstart")]),t._v(" for autopilot assembly instructions.")],1),t._v(" "),e("h3",{attrs:{id:"wiring-diagram"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wiring-diagram"}},[t._v("#")]),t._v(" Wiring Diagram")]),t._v(" "),e("p",[t._v("![Connections](../../assets/airframes/multicopter/matrice100/Wiring Diagram.jpg)")]),t._v(" "),e("h3",{attrs:{id:"wiring-harness"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wiring-harness"}},[t._v("#")]),t._v(" Wiring Harness")]),t._v(" "),e("p",[e("img",{attrs:{src:s(983),alt:"Wiring Harness"}})]),t._v(" "),e("h3",{attrs:{id:"pwm-connections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwm-connections"}},[t._v("#")]),t._v(" PWM Connections")]),t._v(" "),e("p",[e("img",{attrs:{src:s(984),alt:"PWM Connections"}})]),t._v(" "),e("h3",{attrs:{id:"other-views"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#other-views"}},[t._v("#")]),t._v(" Other views")]),t._v(" "),e("p",[e("img",{attrs:{src:s(985),alt:"Top"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(986),alt:"Back"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(987),alt:"No Stack"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(988),alt:"No Top Deck"}})]),t._v(" "),e("h3",{attrs:{id:"autopilot-outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-outputs"}},[t._v("#")]),t._v(" Autopilot Outputs")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("输出")]),t._v(" "),e("th",[t._v("频率")]),t._v(" "),e("th",[t._v("执行器")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("MAIN1")]),t._v(" "),e("td",[t._v("400 Hz")]),t._v(" "),e("td",[t._v("Front right, CCW")])]),t._v(" "),e("tr",[e("td",[t._v("MAIN2")]),t._v(" "),e("td",[t._v("400 Hz")]),t._v(" "),e("td",[t._v("Back left, CCW")])]),t._v(" "),e("tr",[e("td",[t._v("MAIN3")]),t._v(" "),e("td",[t._v("400 Hz")]),t._v(" "),e("td",[t._v("Front left, CW")])]),t._v(" "),e("tr",[e("td",[t._v("MAIN4")]),t._v(" "),e("td",[t._v("400 Hz")]),t._v(" "),e("td",[t._v("Back right, CW")])]),t._v(" "),e("tr",[e("td",[t._v("AUX1")]),t._v(" "),e("td",[t._v("50 Hz")]),t._v(" "),e("td",[t._v("RC AUX1")])]),t._v(" "),e("tr",[e("td",[t._v("AUX2")]),t._v(" "),e("td",[t._v("50 Hz")]),t._v(" "),e("td",[t._v("RC AUX2")])]),t._v(" "),e("tr",[e("td",[t._v("AUX3")]),t._v(" "),e("td",[t._v("50 Hz")]),t._v(" "),e("td",[t._v("RC AUX3")])])])]),t._v(" "),e("h2",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),e("ul",[e("li",[t._v("At high throttle the inner loop causes oscillations with default x quad gains. At low throttle, higher gains give a better response, this suggests that some gain scheduling based on the throttle may improve the overall response and this could be implemented in mc_att_control. For now we will just tune it so that there are no oscillations at low or high throttle, and take the bandwidth hit at low throttle.\n"),e("ul",[e("li",[t._v("MC_PITCHRATE_P: 0.05")]),t._v(" "),e("li",[t._v("MC_PITCHRATE_D: 0.001")])])]),t._v(" "),e("li",[t._v("The battery has 6 cells instead of the default 3\n"),e("ul",[e("li",[t._v("BAT_N_CELLS: 6")])])])]),t._v(" "),e("h2",{attrs:{id:"视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),e("p"),e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/3OGs0ONemGc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e("p")])}),[],!1,null,null,null);a.default=r.exports},982:function(t,a,s){t.exports=s.p+"assets/img/Matrice100.44f1f559.jpg"},983:function(t,a,s){t.exports=s.p+"assets/img/WiringHarness.c17fbe60.jpg"},984:function(t,a,s){t.exports=s.p+"assets/img/PwmInput.5053bf7c.jpg"},985:function(t,a,s){t.exports=s.p+"assets/img/Top.79416714.jpg"},986:function(t,a,s){t.exports=s.p+"assets/img/Back.6c8c7476.jpg"},987:function(t,a,s){t.exports=s.p+"assets/img/NoStack.98c457ec.jpg"},988:function(t,a,s){t.exports=s.p+"assets/img/NoTopDeck.af1d0c24.jpg"}}]);