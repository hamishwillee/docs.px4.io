(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1098:function(t,e,a){t.exports=a.p+"assets/img/fun_cub_vtol_complete.a3687812.jpg"},1099:function(t,e,a){t.exports=a.p+"assets/img/fun_cub_aluminium_frame_for_vtol.1bfc0fc3.jpg"},1100:function(t,e,a){t.exports=a.p+"assets/img/fun_cub_aluminium_frame_for_vtol_mounted.abe0b83e.jpg"},2590:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"funcub-quadplane-pixhawk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#funcub-quadplane-pixhawk"}},[t._v("#")]),t._v(" FunCub QuadPlane (Pixhawk)")]),t._v(" "),r("p",[t._v("The Fun Cub QuadPlane VTOL is a standard tailplane aircraft (the Multiplex FunCub) that has been retrofitted with a QuadCopter system.")]),t._v(" "),r("p",[t._v("Key information:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Frame:")]),t._v(" Multiplex FunCub")]),t._v(" "),r("li",[r("strong",[t._v("Flight controller:")]),t._v(" Pixhawk")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1098),alt:"Fun Cub VTOL"}})]),t._v(" "),r("p",[t._v("Unmodified, the Fun Cub is a relatively affordable plane and relatively easy to fly. After the conversion the plane is significantly heavier and less aerodynamic. It still flies quite well but needs around 75% throttle in forward flight.")]),t._v(" "),r("h2",{attrs:{id:"bill-of-materials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of Materials")]),t._v(" "),r("p",[t._v("The actual plane looks roughly like as shown in the image above (other similar models will work just fine - this is a Multiplex Fun Cub). The minimal equipment required is:")]),t._v(" "),r("ul",[r("li",[t._v("Multiplex FunCub (or similar)")]),t._v(" "),r("li",[t._v("Pixhawk or compatible")]),t._v(" "),r("li",[t._v("数字空速传感器")]),t._v(" "),r("li",[t._v("900 kV motors (e.g. Iris propulsion set - motors and ESC)")]),t._v(" "),r("li",[t._v('10" props for quad motors (10x45 or 10x47)')]),t._v(" "),r("li",[t._v('10" prop for fixed-wing motor (10×7)')]),t._v(" "),r("li",[t._v("GPS module")]),t._v(" "),r("li",[t._v("4S battery")]),t._v(" "),r("li",[t._v("Aluminum frame for mounting the quad motors (10x10mm square tube, 1mm wall thickness)")]),t._v(" "),r("li",[t._v("TOW is ~2.3kg with a 4200mAh 4S battery")])]),t._v(" "),r("h2",{attrs:{id:"structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),r("p",[t._v("The structure is made out of aluminum booms as shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1099),alt:"quad_frame"}}),t._v(" "),r("img",{attrs:{src:a(1100),alt:"Fun Cub -frame for vtol mounted"}})]),t._v(" "),r("h2",{attrs:{id:"布线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[t._v("#")]),t._v(" 布线")]),t._v(" "),r("p",[t._v('The outputs of Pixhawk should be wired like this (orientation as seen like "sitting in the plane").')]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("The servo direction can be reversed using the PWM_REV parameters in the PWM_OUTPUT group of "),r("em",[t._v("QGroundControl")]),t._v(" (cogwheel tab, last item in the left menu)")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Port")]),t._v(" "),r("th",[t._v("接口定义")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("MAIN 1")]),t._v(" "),r("td",[t._v("Front right motor (CCW)")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN 2")]),t._v(" "),r("td",[t._v("Back left motor (CCW)")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN 3")]),t._v(" "),r("td",[t._v("Front left motor (CW)")])]),t._v(" "),r("tr",[r("td",[t._v("MAIN 4")]),t._v(" "),r("td",[t._v("Back right motor (CW)")])]),t._v(" "),r("tr",[r("td",[t._v("AUX 1")]),t._v(" "),r("td",[t._v("Left aileron TODO")])]),t._v(" "),r("tr",[r("td",[t._v("AUX 2")]),t._v(" "),r("td",[t._v("Right aileron")])]),t._v(" "),r("tr",[r("td",[t._v("AUX 3")]),t._v(" "),r("td",[t._v("Elevator")])]),t._v(" "),r("tr",[r("td",[t._v("AUX 4")]),t._v(" "),r("td",[t._v("Rudder")])]),t._v(" "),r("tr",[r("td",[t._v("AUX 5")]),t._v(" "),r("td",[t._v("油门")])])])]),t._v(" "),r("p",[t._v("For further instructions on wiring and configurations please see: "),r("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("Standard VTOL Wiring and Configuration")]),t._v(". ")],1),t._v(" "),r("h2",{attrs:{id:"airframe-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airframe-configuration"}},[t._v("#")]),t._v(" Airframe Configuration")]),t._v(" "),r("p",[t._v("Configure the frame as shown in QGroundControl below (do not forget to click "),r("strong",[t._v("Apply and Restart")]),t._v(" in the top).")]),t._v(" "),r("p",[r("img",{attrs:{src:a(383),alt:"QCG - Select Fun Cub Quad firmware"}})]),t._v(" "),r("h2",{attrs:{id:"视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4K8yaa6A0ks",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),t._v(" "),r("h2",{attrs:{id:"技术支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#技术支持"}},[t._v("#")]),t._v(" 技术支持")]),t._v(" "),r("p",[t._v("If you have any questions regarding your VTOL conversion or configuration please visit "),r("a",{attrs:{href:"https://discuss.px4.io/c/px4/vtol",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://discuss.px4.io/c/px4/vtol"),r("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports},383:function(t,e,a){t.exports=a.p+"assets/img/qgc_firmware_standard_vtol_fun_cub_quad.626a32fe.png"}}]);