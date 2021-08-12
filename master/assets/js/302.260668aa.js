(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1267:function(t,e,a){t.exports=a.p+"assets/img/rascal110.a862a787.jpg"},1268:function(t,e,a){t.exports=a.p+"assets/img/rascal_options.518234ff.jpg"},1269:function(t,e,a){t.exports=a.p+"assets/img/tf-g1.45590633.jpg"},1270:function(t,e,a){t.exports=a.p+"assets/img/tf-r1_towing.9d0ffd85.jpg"},2719:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flightgear-vehicles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flightgear-vehicles"}},[t._v("#")]),t._v(" FlightGear Vehicles")]),t._v(" "),s("p",[t._v("This topic lists/displays the vehicles supported by the PX4 "),s("RouterLink",{attrs:{to:"/zh/simulation/flightgear.html"}},[t._v("FlightGear")]),t._v(" simulation, and the "),s("code",[t._v("make")]),t._v(" commands required to run them (the commands are run from terminal in the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory). The supported types are: plane, autogyro and rover (there are specific frames within these types).")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("For the full list of build targets run "),s("code",[t._v("make px4_sitl list_vmd_make_targets")]),t._v(" (filter out those that start with "),s("code",[t._v("flightgear_")]),t._v(").")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/zh/simulation/flightgear.html"}},[t._v("FlightGear")]),t._v(" page shows how to install and use FlightGear in more detail (this page is a summary of vehicle-specific features).")],1)]),t._v(" "),s("p",[s("a",{attrs:{id:"standard_plane"}})]),t._v(" "),s("h2",{attrs:{id:"标准构型的固定翼飞机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准构型的固定翼飞机"}},[t._v("#")]),t._v(" 标准构型的固定翼飞机")]),t._v(" "),s("p",[t._v("FlightGear has models for many planes. The most suitable one for UAV development is currently the "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/FlightGear-Rascal",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rascal RC plane"),s("OutboundLink")],1),t._v(" (which also exists in multiple variants).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1267),alt:"Rascal plane in FlightGear"}})]),t._v(" "),s("p",[t._v("The variants differ mainly by the "),s("a",{attrs:{href:"http://wiki.flightgear.org/Flight_Dynamics_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("FDM"),s("OutboundLink")],1),t._v(" model. All variants have a common feature selection table that can be activated by pressing the "),s("code",[t._v("=")]),t._v(" key on the computer keyboard.")]),t._v(" "),s("p",[t._v("There is a pop-up table that could be used for advanced features activation.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1268),alt:"Rascal plane FlightGear advanced options"}})]),t._v(" "),s("p",[t._v("The most relevant option is:")]),t._v(" "),s("ul",[s("li",[t._v("Smoke - generates a smoke trail to enhance the visibility of aircraft in the air (smoke and particles option needs to be activated in "),s("strong",[t._v("FG View > rendering options > Particles checkbox")]),t._v(").")]),t._v(" "),s("li",[t._v("Trajectory markers - displays orthogonal markers along the trajectory of flight.")])]),t._v(" "),s("p",[t._v("Trajectory markers show the absolute flight path in the world coordinates, and the smoke trail shows the relative path in the air mass.")]),t._v(" "),s("h3",{attrs:{id:"rascal-110-yasim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-yasim"}},[t._v("#")]),t._v(" Rascal 110 YASim")]),t._v(" "),s("p",[t._v("The primary variant of the Rascal model has a combustion piston-engine model. This results in a non-zero idle power causing a rotation of propeller on idle engine RPM.")]),t._v(" "),s("p",[t._v("The launch command is:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal\n")])])]),s("h3",{attrs:{id:"rascal-110-electric-yasim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-electric-yasim"}},[t._v("#")]),t._v(" Rascal 110 Electric YASim")]),t._v(" "),s("p",[t._v("A Rascal vehicle with an electric engine.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal-electric\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("This variant needs the latest FlightGear code (sources at least from 26 April 2020). Otherwise, the FlightGear crashes because of an unexpected definition of electric engine.")])]),t._v(" "),s("h3",{attrs:{id:"rascal-110-jsbsim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rascal-110-jsbsim"}},[t._v("#")]),t._v(" Rascal 110 JSBsim")]),t._v(" "),s("p",[t._v("Rascal JSBsim variant.")]),t._v(" "),s("p",[t._v("This variant does not have a direct "),s("code",[t._v("make")]),t._v(" option but can be manually selected in the "),s("strong",[t._v("rascal.json")]),t._v(" configuration file (part of "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge"),s("OutboundLink")],1),t._v("). Simply change "),s("code",[t._v("Rascal110-YASim")]),t._v(" to "),s("code",[t._v("Rascal110-JSBSim")]),t._v(" in "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge/blob/master/models/rascal.json#L2",target:"_blank",rel:"noopener noreferrer"}},[t._v("this file"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("a",{attrs:{id:"autogyro"}})]),t._v(" "),s("h2",{attrs:{id:"飞机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#飞机"}},[t._v("#")]),t._v(" 飞机")]),t._v(" "),s("p",[t._v("The only UAV autogyro model supported by FlightGear is "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TF-G1",target:"_blank",rel:"noopener noreferrer"}},[t._v("TF-G1 Autogyro"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_tf-g1\n")])])]),s("p",[s("img",{attrs:{src:a(1269),alt:"TF-G1 in FlightGear"}})]),t._v(" "),s("p",[s("a",{attrs:{id:"ugv"}})]),t._v(" "),s("h2",{attrs:{id:"ackerman-车-ugv-rover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ackerman-车-ugv-rover"}},[t._v("#")]),t._v(" Ackerman 车 （UGV/Rover）")]),t._v(" "),s("h3",{attrs:{id:"tf-r1-ground-support-rover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tf-r1-ground-support-rover"}},[t._v("#")]),t._v(" TF-R1 Ground support Rover")]),t._v(" "),s("p",[t._v("This rover is equipped with a towing hitch and might be used for aero-towing of other vehicles.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_tf-r1\n")])])]),s("p",[s("img",{attrs:{src:a(1270),alt:"TF-R1 rover in FlightGear"}})]),t._v(" "),s("p",[s("a",{attrs:{id:"quadrotor"}})]),t._v(" "),s("h2",{attrs:{id:"四旋翼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四旋翼"}},[t._v("#")]),t._v(" 四旋翼")]),t._v(" "),s("p",[t._v("There is only an "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/FlightGear-TF-Mx1",target:"_blank",rel:"noopener noreferrer"}},[t._v("incomplete multirotor model"),s("OutboundLink")],1),t._v(". This is not yet usable (it is numerically unstable and needs an additional work).")]),t._v(" "),s("h1",{attrs:{id:"adding-a-new-vehicle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-vehicle"}},[t._v("#")]),t._v(" Adding a New Vehicle")]),t._v(" "),s("p",[t._v("A new vehicle model needs to be included as a git submodule into "),s("a",{attrs:{href:"https://github.com/PX4/PX4-FlightGear-Bridge/tree/master/models",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge/models/"),s("OutboundLink")],1),t._v(" directory. This directory contains an control channel definition "),s("a",{attrs:{href:"https://github.com/PX4/PX4-FlightGear-Bridge/blob/master/models/rascal.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON file"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"FgModel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rascal110-YASim"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/ThunderFly-aerospace/FlightGear-Rascal/archive/master.zip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Controls"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/aileron"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/elevator"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/flight/rudder"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/controls/engines/engine/throttle"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The file content meaning is as follows:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FgModel")]),t._v(' - a precise case sensitive name of the FlightGear model corresponding to "XXXX-set.xml" in the model directory (where XXXX is the model name).')]),t._v(" "),s("li",[s("code",[t._v("Url")]),t._v(" is optional and it is not currently used. It is intended for future use to auto-download the models from web")]),t._v(" "),s("li",[s("code",[t._v("Controls")]),t._v(" - the most important part of the process of adding a vehicle. This section contains the mapping between the PX4 mixer file and "),s("a",{attrs:{href:"http://wiki.flightgear.org/Property_tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear property tree"),s("OutboundLink")],1),t._v(".\n"),s("ul",[s("li",[t._v("The first number in a list selects a PX4 mixer output.")]),t._v(" "),s("li",[t._v("Path string is a FlightGear variable location in the property tree.")])])]),t._v(" "),s("li",[t._v("The last number in a list is a multiplier, allowing inversion or scaling of mixer input.")])]),t._v(" "),s("p",[t._v("After preparing all these files a new vehicle need to be included in the PX4 make system.")]),t._v(" "),s("p",[t._v("The PX4 configuration is in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5341da8137f460c84f47f0e38293667ea69a6cb/platforms/posix/cmake/sitl_target.cmake#L164-L171",target:"_blank",rel:"noopener noreferrer"}},[t._v("/platforms/posix/cmake/sitl_target.cmake"),s("OutboundLink")],1),t._v(". The new vehicle's json name should be added to the list.")])])}),[],!1,null,null,null);e.default=r.exports}}]);