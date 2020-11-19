(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{2012:function(e,t,r){"use strict";r.r(t);var n=r(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"snapdragon-hardware-setup-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-hardware-setup-example"}},[e._v("#")]),e._v(" Snapdragon Hardware Setup Example")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" The "),n("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version). This documentation is provided for existing users, but will be removed in a future release.")])]),e._v(" "),n("p",[e._v("This guide shows a Lumenier QAV-R 250 frame build with "),n("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" and custom hardware mounts. The setup uses a conventional PWM ESC board and therefore needs to be built with the "),n("code",[e._v("atlflight_eagle_default")]),e._v(" make target (see instructions "),n("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#qurt--snapdragon-based-boards"}},[e._v("here")]),e._v(").")],1),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Tip")]),e._v(" The PX4 development team has built, tested and documented this specific setup.")])]),e._v(" "),n("p",[n("img",{attrs:{src:r(805),alt:"Snapdragon Lumenier QAV-R Build"}})]),e._v(" "),n("h2",{attrs:{id:"components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),n("ul",[n("li",[e._v("Flight Controller: "),n("a",{attrs:{href:"https://www.intrinsyc.com/vertical-development-platforms/qualcomm-snapdragon-flight/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snapdragon Flight"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Stereo-vision add-on kit ("),n("a",{attrs:{href:"https://www.intrinsyc.com/vertical-development-platforms/qualcomm-snapdragon-flight/",target:"_blank",rel:"noopener noreferrer"}},[e._v("available here"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("li",[e._v("Frame: "),n("a",{attrs:{href:"https://www.getfpv.com/qav-r-fpv-racing-quadcopter-5.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lumenier QAV-R 250"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("ESC: "),n("a",{attrs:{href:"https://www.getfpv.com/hobbywing-xrotor-micro-4-in-1-blheli-s-dshot600-esc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hobbywing 4in1 40A"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Motors: "),n("a",{attrs:{href:"https://www.getfpv.com/lumenier-rx2206-11-2350kv-motor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lumenier RX2206 2350KV"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Receiver: "),n("a",{attrs:{href:"https://www.spektrumrc.com/Products/Default.aspx?ProdID=SPM4648",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spektrum RC FPV Racing Serial Receiver"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Wi-Fi Antenna: "),n("a",{attrs:{href:"https://www.lairdtech.com/products/maf95056-nanoblade-internal-embedded-antenna-2400-2500-4900-6000-mhz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laird Multiband"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("GPS module (optional): "),n("a",{attrs:{href:"https://store.mrobotics.io/mRo-GPS-u-Blox-Neo-M8N-HMC5983-Compass-p/gps002-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo GPS + Compass module"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Distance sensor (optional): "),n("a",{attrs:{href:"http://www.teraranger.com/product/teraranger-one-distance-sensor-for-drones-and-robotics",target:"_blank",rel:"noopener noreferrer"}},[e._v("TeraRanger One"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Distance sensor adapter (required only when using TeraRanger): "),n("a",{attrs:{href:"http://www.teraranger.com/product/adapters-for-oneduo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C Adapter"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Custom printed parts: "),n("a",{attrs:{href:"https://drive.google.com/drive/u/0/folders/1MOunJae4ZLu6-bZ_-JvcPQUc9Aa5fe1U",target:"_blank",rel:"noopener noreferrer"}},[e._v("Legs, Mounting brackets"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("img",{attrs:{src:r(806),alt:"Snapdragon components"}})]),e._v(" "),n("h2",{attrs:{id:"wiring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v(" Although the Snapdragon uses DF13 connectors, the "),n("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight.html#pinouts"}},[e._v("pinout")]),e._v(" is different from Pixhawk.")],1)]),e._v(" "),n("p",[n("img",{attrs:{src:r(362),alt:"Snapdragon wiring"}})]),e._v(" "),n("h2",{attrs:{id:"building-the-frame"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-the-frame"}},[e._v("#")]),e._v(" Building the Frame")]),e._v(" "),n("p",[e._v("The Lumenier QAV-R250 can be assembled normally, ignoring the side-plates intended for the FPV camera mount. In order to mount the motors along with the custom printed legs, you will need longer screws than the ones provided with the motors. Regular M3x10mm screws will do.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Warning")]),e._v(" Snapdragon is very susceptible to frame vibrations. Make sure to tighten all screws well, but not so much that you damage the windings in the plastic nut on the other end.")])]),e._v(" "),n("p",[e._v("The Hobbywing 4in1 ESC fits the frame tidily as seen in the picture below.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(807),alt:"Snapdragon motors"}})]),e._v(" "),n("p",[e._v("To attach the Snapdragon Flight to the frame, first port it over to the stereo-vision add-on kit's mounting plate. This task is quite delicate, make sure not to damage the cameras when taking them out of the old plastic housing. We recommend attaching the WiFi antenna's uFL connector during this step, as it will become incredibly difficult to do so once the Snapdragon is in its new housing.")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("Note")]),e._v(" We are using the stereo-vision add-on kit, as it is easier to mount to the QAV-250 and we may be using stereo-vision in the future. However, currently the stereo-functionality is not being enabled.")])]),e._v(" "),n("p",[n("img",{attrs:{src:r(808),alt:"Stereo assembly"}})]),e._v(" "),n("p",[e._v("After the Snapdragon is mounted on the new housing, screw on the two custom printed brackets using the spare M3 screws of the Lumenier frame. Again, since you are putting metal screws into plastic, don't tighten them to the extend that you damage the plastic and the screws no longer have any traction.")]),e._v(" "),n("p",[e._v("Finally, attach the brackets to the frame using double-sided tape. We achieved best performance when using two strips of vibration-dampening foam in between the carbon frame and the custom mounting brackets for the stereo-vision part. Cutting two strips out of the piece provided with the QAV-R frame works well.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(809),alt:"Vibration damping"}})]),e._v(" "),n("p",[e._v("You can additionally mount the GPS module and TeraRanger module, but they are not required for normal VIO-based flight. More information about range finders can be found "),n("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html#teraranger-rangefinders"}},[e._v("here")]),e._v(". You can now attach the Snapdragon module to the QAV frame and connect the ESC and receiver.")],1),e._v(" "),n("p",[n("img",{attrs:{src:r(810),alt:"Snapdragon Complete Build Closup"}})])])}),[],!1,null,null,null);t.default=o.exports},362:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_wiring.1a549e9a.jpg"},805:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_minimal_finished.5fea83dc.jpg"},806:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_components.972edf9d.jpg"},807:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_motors.f16b9307.jpg"},808:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_stereo_assembly.297bd175.jpg"},809:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_vibration_dampening.91304ccb.jpg"},810:function(e,t,r){e.exports=r.p+"assets/img/snapdragon_minimal_finished_closeup.4c9e99b8.jpg"}}]);