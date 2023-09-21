(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1298:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_vtol_complete.a3687812.jpg"},1299:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_aluminium_frame_for_vtol.1bfc0fc3.jpg"},1300:function(t,e,r){t.exports=r.p+"assets/img/fun_cub_aluminium_frame_for_vtol_mounted.abe0b83e.jpg"},3485:function(t,e,r){"use strict";r.r(e);var a=r(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"funcub-quadplane-pixhawk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funcub-quadplane-pixhawk"}},[t._v("#")]),t._v(" FunCub QuadPlane (Pixhawk)")]),t._v(" "),a("p",[t._v("The Fun Cub QuadPlane VTOL is a standard tailplane aircraft (the Multiplex FunCub) that has been retrofitted with a QuadCopter system.")]),t._v(" "),a("p",[t._v("Key information:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Frame:")]),t._v(" Multiplex FunCub")]),t._v(" "),a("li",[a("strong",[t._v("Flight controller:")]),t._v(" Pixhawk")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(1298),alt:"Fun Cub VTOL"}})]),t._v(" "),a("p",[t._v("Unmodified, the Fun Cub is a relatively affordable plane and relatively easy to fly. After the conversion the plane is significantly heavier and less aerodynamic. It still flies quite well but needs around 75% throttle in forward flight.")]),t._v(" "),a("h2",{attrs:{id:"bill-of-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of Materials")]),t._v(" "),a("p",[t._v("The actual plane looks roughly like as shown in the image above (other similar models will work just fine - this is a Multiplex Fun Cub).")]),t._v(" "),a("p",[t._v("The minimal equipment required is:")]),t._v(" "),a("ul",[a("li",[t._v("Multiplex FunCub (or similar)")]),t._v(" "),a("li",[t._v("Pixhawk or compatible")]),t._v(" "),a("li",[t._v("数字空速传感器")]),t._v(" "),a("li",[t._v("900 kV motors (e.g. Iris propulsion set - motors and ESC)")]),t._v(" "),a("li",[t._v('10" props for quad motors (10x45 or 10x47)')]),t._v(" "),a("li",[t._v('10" prop for fixed-wing motor (10×7)')]),t._v(" "),a("li",[t._v("GPS module")]),t._v(" "),a("li",[t._v("4S battery")]),t._v(" "),a("li",[t._v("Aluminum frame for mounting the quad motors (10x10mm square tube, 1mm wall thickness)")]),t._v(" "),a("li",[t._v("TOW is ~2.3kg with a 4200mAh 4S battery")])]),t._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("p",[t._v("The structure is made out of aluminum booms as shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1299),alt:"quad_frame"}}),t._v(" "),a("img",{attrs:{src:r(1300),alt:"Fun Cub -frame for vtol mounted"}})]),t._v(" "),a("h2",{attrs:{id:"布线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[t._v("#")]),t._v(" 布线")]),t._v(" "),a("p",[t._v("Motor and servo wiring is nearly entirely up to you, but should match the "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL")]),t._v(" configuration, as shown in the airframe reference. The geometry and output assignment can be configured in the "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-outputs"}},[t._v("Actuators Configuration")])],1),t._v(" "),a("p",[t._v('For example, you might wire it up like this example (orientation as if "sitting in the plane"):')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Port")]),t._v(" "),a("th",[t._v("接口定义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("MAIN 1")]),t._v(" "),a("td",[t._v("Front right motor (CCW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 2")]),t._v(" "),a("td",[t._v("Back left motor (CCW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 3")]),t._v(" "),a("td",[t._v("Front left motor (CW)")])]),t._v(" "),a("tr",[a("td",[t._v("MAIN 4")]),t._v(" "),a("td",[t._v("Back right motor (CW)")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 1")]),t._v(" "),a("td",[t._v("Left aileron TODO")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 2")]),t._v(" "),a("td",[t._v("Right aileron")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 3")]),t._v(" "),a("td",[t._v("Elevator")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 4")]),t._v(" "),a("td",[t._v("Rudder")])]),t._v(" "),a("tr",[a("td",[t._v("AUX 5")]),t._v(" "),a("td",[t._v("油门")])])])]),t._v(" "),a("p",[t._v("For further instructions on wiring and configurations please see: "),a("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("Standard VTOL Wiring and Configuration")]),t._v(". ")],1),t._v(" "),a("h2",{attrs:{id:"airframe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airframe-configuration"}},[t._v("#")]),t._v(" Airframe Configuration")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("For "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" select the vehicle group/type as "),a("em",[t._v("Standard VTOL")]),t._v(" and the specific vehicle as "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL")]),t._v(" as shown below (do not forget to click "),a("strong",[t._v("Apply and Restart")]),t._v(" in the top).")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(410),alt:"QCG - Select Generic Standard VTOL"}})])]),t._v(" "),a("li",[a("p",[t._v("Configure the outputs and geometry following the instructions in "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuators Configuration")])],1)]),t._v(" "),a("li",[a("p",[t._v("The default parameters are often sufficient for stable flight. For more detailed tuning information see "),a("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("Standard VTOL Wiring and Configuration")]),t._v(".")],1)])]),t._v(" "),a("p",[t._v("After you finish calibration the VTOL is ready to fly.")]),t._v(" "),a("h2",{attrs:{id:"视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4K8yaa6A0ks",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"技术支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术支持"}},[t._v("#")]),t._v(" 技术支持")]),t._v(" "),a("p",[t._v("If you have any questions regarding your VTOL conversion or configuration please visit "),a("a",{attrs:{href:"https://discuss.px4.io/c/px4/vtol",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://discuss.px4.io/c/px4/vtol"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports},410:function(t,e,r){t.exports=r.p+"assets/img/px4_frame_generic_standard_vtol.863e1586.png"}}]);