(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1105:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_vtol_complete.a3687812.jpg"},1106:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_aluminium_frame_for_vtol.1bfc0fc3.jpg"},1107:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_aluminium_frame_for_vtol_mounted.abe0b83e.jpg"},2965:function(t,e,r){"use strict";r.r(e);var a=r(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"funcub-quadplane-pixhawk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funcub-quadplane-pixhawk"}},[t._v("#")]),t._v(" FunCub QuadPlane (Pixhawk)")]),t._v(" "),a("p",[t._v("The Fun Cub QuadPlane VTOL is a standard tailplane aircraft (the Multiplex FunCub) that has been retrofitted with a QuadCopter system.")]),t._v(" "),a("p",[t._v("Key information:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Frame:")]),t._v(" Multiplex FunCub")]),t._v(" "),a("li",[a("strong",[t._v("Flight controller:")]),t._v(" Pixhawk")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(1105),alt:"Fun Cub VTOL"}})]),t._v(" "),a("p",[t._v("Unmodified, the Fun Cub is a relatively affordable plane and relatively easy to fly. After the conversion the plane is significantly heavier and less aerodynamic. It still flies quite well but needs around 75% throttle in forward flight.")]),t._v(" "),a("h2",{attrs:{id:"bill-of-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of Materials")]),t._v(" "),a("p",[t._v("The actual plane looks roughly like as shown in the image above (other similar models will work just fine - this is a Multiplex Fun Cub). The minimal equipment required is:")]),t._v(" "),a("ul",[a("li",[t._v("Multiplex FunCub (or similar)")]),t._v(" "),a("li",[t._v("Pixhawk or compatible")]),t._v(" "),a("li",[t._v("数字空速传感器")]),t._v(" "),a("li",[t._v("900 kV motors (e.g. Iris propulsion set - motors and ESC)")]),t._v(" "),a("li",[t._v('10" props for quad motors (10x45 or 10x47)')]),t._v(" "),a("li",[t._v('10" prop for fixed-wing motor (10×7)')]),t._v(" "),a("li",[t._v("GPS module")]),t._v(" "),a("li",[t._v("4S battery")]),t._v(" "),a("li",[t._v("Aluminum frame for mounting the quad motors (10x10mm square tube, 1mm wall thickness)")]),t._v(" "),a("li",[t._v("TOW is ~2.3kg with a 4200mAh 4S battery")])]),t._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("p",[t._v("The structure is made out of aluminum booms as shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1106),alt:"quad_frame"}}),t._v(" "),a("img",{attrs:{src:r(1107),alt:"Fun Cub -frame for vtol mounted"}})]),t._v(" "),a("h2",{attrs:{id:"布线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[t._v("#")]),t._v(" 布线")]),t._v(" "),a("p",[t._v('The outputs of Pixhawk should be wired like this (orientation as seen like "sitting in the plane").')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The servo direction can be reversed using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PWM_MAIN_REV1"}},[t._v("PWM_MAIN_REVn")]),t._v(" parameters in the PWM_OUTPUT group of "),a("em",[t._v("QGroundControl")]),t._v(" (cogwheel tab, last item in the left menu).")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Port")]),t._v(" "),a("th",[t._v("接口定义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("MAIN 1")]),t._v(" "),a("td",[t._v("Front right motor (CCW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 2")]),t._v(" "),a("td",[t._v("Back left motor (CCW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 3")]),t._v(" "),a("td",[t._v("Front left motor (CW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 4")]),t._v(" "),a("td",[t._v("Back right motor (CW)")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 1")]),t._v(" "),a("td",[t._v("Left aileron TODO")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 2")]),t._v(" "),a("td",[t._v("Right aileron")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 3")]),t._v(" "),a("td",[t._v("Elevator")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 4")]),t._v(" "),a("td",[t._v("Rudder")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 5")]),t._v(" "),a("td",[t._v("油门")])])])]),t._v(" "),a("p",[t._v("For further instructions on wiring and configurations please see: "),a("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("Standard VTOL Wiring and Configuration")]),t._v(". ")],1),t._v(" "),a("h2",{attrs:{id:"airframe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airframe-configuration"}},[t._v("#")]),t._v(" Airframe Configuration")]),t._v(" "),a("p",[t._v("Configure the frame as shown in QGroundControl below (do not forget to click "),a("strong",[t._v("Apply and Restart")]),t._v(" in the top).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(388),alt:"QCG - Select Fun Cub Quad firmware"}})]),t._v(" "),a("h2",{attrs:{id:"视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4K8yaa6A0ks",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术支持"}},[t._v("#")]),t._v(" 技术支持")]),t._v(" "),a("p",[t._v("If you have any questions regarding your VTOL conversion or configuration please visit "),a("a",{attrs:{href:"https://discuss.px4.io/c/px4/vtol",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://discuss.px4.io/c/px4/vtol"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports},388:function(t,e,r){t.exports=r.p+"assets/img/qgc_firmware_standard_vtol_fun_cub_quad.626a32fe.png"}}]);