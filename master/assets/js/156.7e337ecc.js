(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{2523:function(e,t,n){"use strict";n.r(t);var r=n(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"snapdragon-hardware-setup-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-hardware-setup-example"}},[e._v("#")]),e._v(" Snapdragon Hardware Setup Example")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version). This documentation is provided for existing users, but will be removed in a future release.")])]),e._v(" "),r("p",[e._v("This guide shows a Lumenier QAV-R 250 frame build with "),r("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" and custom hardware mounts. The setup uses a conventional PWM ESC board and therefore needs to be built with the "),r("code",[e._v("atlflight_eagle_default")]),e._v(" make target (see instructions "),r("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#qurt--snapdragon-based-boards"}},[e._v("here")]),e._v(").")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("The PX4 development team has built, tested and documented this specific setup.")])]),e._v(" "),r("p",[r("img",{attrs:{src:n(810),alt:"Snapdragon Lumenier QAV-R Build"}})]),e._v(" "),r("h2",{attrs:{id:"components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),r("ul",[r("li",[e._v("Flight Controller: "),r("a",{attrs:{href:"https://www.intrinsyc.com/vertical-development-platforms/qualcomm-snapdragon-flight/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snapdragon Flight"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Stereo-vision add-on kit ("),r("a",{attrs:{href:"https://www.intrinsyc.com/vertical-development-platforms/qualcomm-snapdragon-flight/",target:"_blank",rel:"noopener noreferrer"}},[e._v("available here"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("Frame: "),r("a",{attrs:{href:"https://www.getfpv.com/qav-r-fpv-racing-quadcopter-5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lumenier QAV-R 250"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ESC: "),r("a",{attrs:{href:"https://www.getfpv.com/hobbywing-xrotor-micro-4-in-1-blheli-s-dshot600-esc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing 4in1 40A"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Motors: "),r("a",{attrs:{href:"https://www.getfpv.com/lumenier-rx2206-11-2350kv-motor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lumenier RX2206 2350KV"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Receiver: "),r("a",{attrs:{href:"https://www.spektrumrc.com/Products/Default.aspx?ProdID=SPM4648",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spektrum RC FPV Racing Serial Receiver"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Wi-Fi Antenna: "),r("a",{attrs:{href:"https://www.lairdtech.com/products/maf95056-nanoblade-internal-embedded-antenna-2400-2500-4900-6000-mhz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laird Multiband"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("GPS module (optional): "),r("a",{attrs:{href:"https://store.mrobotics.io/mRo-GPS-u-Blox-Neo-M8N-HMC5983-Compass-p/gps002-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo GPS + Compass module"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Distance sensor (optional): "),r("a",{attrs:{href:"http://www.teraranger.com/product/teraranger-one-distance-sensor-for-drones-and-robotics",target:"_blank",rel:"noopener noreferrer"}},[e._v("TeraRanger One"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Distance sensor adapter (required only when using TeraRanger): "),r("a",{attrs:{href:"http://www.teraranger.com/product/adapters-for-oneduo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C Adapter"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Custom printed parts: "),r("a",{attrs:{href:"https://drive.google.com/drive/u/0/folders/1MOunJae4ZLu6-bZ_-JvcPQUc9Aa5fe1U",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legs, Mounting brackets"),r("OutboundLink")],1)])]),e._v(" "),r("p",[r("img",{attrs:{src:n(811),alt:"Snapdragon components"}})]),e._v(" "),r("h2",{attrs:{id:"布线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[e._v("#")]),e._v(" 布线")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("Although the Snapdragon uses DF13 connectors, the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/snapdragon_flight.html#pinouts"}},[e._v("pinout")]),e._v(" is different from Pixhawk.")],1)]),e._v(" "),r("p",[r("img",{attrs:{src:n(369),alt:"Snapdragon wiring"}})]),e._v(" "),r("h2",{attrs:{id:"building-the-frame"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-the-frame"}},[e._v("#")]),e._v(" Building the Frame")]),e._v(" "),r("p",[e._v("The Lumenier QAV-R250 can be assembled normally, ignoring the side-plates intended for the FPV camera mount. In order to mount the motors along with the custom printed legs, you will need longer screws than the ones provided with the motors. Regular M3x10mm screws will do.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),r("p",[e._v("Snapdragon is very susceptible to frame vibrations. Make sure to tighten all screws well, but not so much that you damage the windings in the plastic nut on the other end.")])]),e._v(" "),r("p",[e._v("The Hobbywing 4in1 ESC fits the frame tidily as seen in the picture below.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(812),alt:"Snapdragon motors"}})]),e._v(" "),r("p",[e._v("To attach the Snapdragon Flight to the frame, first port it over to the stereo-vision add-on kit's mounting plate. This task is quite delicate, make sure not to damage the cameras when taking them out of the old plastic housing. We recommend attaching the WiFi antenna's uFL connector during this step, as it will become incredibly difficult to do so once the Snapdragon is in its new housing.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("We are using the stereo-vision add-on kit, as it is easier to mount to the QAV-250 and we may be using stereo-vision in the future. However, currently the stereo-functionality is not being enabled.")])]),e._v(" "),r("p",[r("img",{attrs:{src:n(813),alt:"Stereo assembly"}})]),e._v(" "),r("p",[e._v("After the Snapdragon is mounted on the new housing, screw on the two custom printed brackets using the spare M3 screws of the Lumenier frame. Again, since you are putting metal screws into plastic, don't tighten them to the extend that you damage the plastic and the screws no longer have any traction.")]),e._v(" "),r("p",[e._v("Finally, attach the brackets to the frame using double-sided tape. We achieved best performance when using two strips of vibration-dampening foam in between the carbon frame and the custom mounting brackets for the stereo-vision part. Cutting two strips out of the piece provided with the QAV-R frame works well.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(814),alt:"Vibration damping"}})]),e._v(" "),r("p",[e._v("You can additionally mount the GPS module and TeraRanger module, but they are not required for normal VIO-based flight. More information about range finders can be found "),r("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html#teraranger-rangefinders"}},[e._v("here")]),e._v(". You can now attach the Snapdragon module to the QAV frame and connect the ESC and receiver.")],1),e._v(" "),r("p",[r("img",{attrs:{src:n(815),alt:"Snapdragon Complete Build Closup"}})])])}),[],!1,null,null,null);t.default=a.exports},369:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_wiring.1a549e9a.jpg"},810:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_minimal_finished.5fea83dc.jpg"},811:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_components.972edf9d.jpg"},812:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_motors.f16b9307.jpg"},813:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_stereo_assembly.297bd175.jpg"},814:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_vibration_dampening.91304ccb.jpg"},815:function(e,t,n){e.exports=n.p+"assets/img/snapdragon_minimal_finished_closeup.4c9e99b8.jpg"}}]);