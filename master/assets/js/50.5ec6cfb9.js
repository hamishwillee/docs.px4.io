(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1e3:function(e,t,o){e.exports=o.p+"assets/img/red_robo_aufgeklappt.273e9119.jpg"},1001:function(e,t,o){e.exports=o.p+"assets/img/qav250_qgc_firmware.32024de9.png"},2085:function(e,t,o){"use strict";o.r(t);var a=o(18),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"robocat-270"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#robocat-270"}},[e._v("#")]),e._v(" Robocat 270")]),e._v(" "),a("p",[e._v("The Robocat 270 is a small quadcopter design, rather meant for cruising than for racing, still a perfect trial base for the "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(" autopilot. It is heavier than a typical 250 racer, but offers a lot of space for add ons and bigger batteries up to 3S/2200mAh. Its an robust small quadcopter for beginners, very well visible for older Pros as well. It's so easy: Robocat, Pixracer with PX4 Software and QGroundControl Groundstation: Build, calibrate and fly !")],1),e._v(" "),a("h2",{attrs:{id:"mounting-and-wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-and-wiring"}},[e._v("#")]),e._v(" Mounting and Wiring")]),e._v(" "),a("p",[a("img",{attrs:{src:o(988),alt:"red robo case"}})]),e._v(" "),a("p",[e._v("The Robocat 270 frame kits are available from several sources. Two versions: Fiber glass or carbon. The latter is coming with an assortment of aluminium stand offs instead of fragile plastic provided with the fiber glass version.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(989),alt:"red parts robocat"}})]),e._v(" "),a("p",[e._v("The shown kit comes with EMAX MT2204 motors, EMAX 12A ESC, pre-flashed with SimonK and 6045 carbon props. This is rather bargain than top quality, but pretty decent, considering the price. Experienced pilots, not on budget, will rather use e.g. Tiger Motors and faster ESC, even CAN versions can be used with the Pixracer / PX4 stack. Those CAN based FOC/Vector Control ESCs have the potential for huge gains in efficiency and reliability.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(990),alt:"Robocat 750 basic setup"}})]),e._v(" "),a("p",[e._v("The first step should be the attachment of all parts for a test, before mounting them onto the frame. Wiring details are shown in the "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[e._v("Pixracer instructions")]),e._v(" guide.")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(991),alt:"red robo esc"}})]),e._v(" "),a("p",[e._v("After that, one starts to assemble the bottom part, where the 36x36mm AUAV ACSP4 Power Module / PDB and the ESC fit very well. If ESC w/o heatsink are used, its recommended to install them on top of the arms, where airflow is provided.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(992),alt:"red robo bottom"}})]),e._v(" "),a("p",[e._v("Its a good idea to install the ACSP4 with the shunt resistor for current sensing sunnyside down. Since it might get hot, one has to make sure, that no wire is touching it. It is very important to take care that all the wire insulation is nowhere damaged, since the conductive carbon might lead to shorts. If a 12V source / PDB is not required, a smaller (17x17mm) new ACSP5 Power Module, providing I/U sensing and a 5V BEC is available as well.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(993),alt:"red robo top plate"}})]),e._v(" "),a("p",[e._v("The Pixracer is soft mounted @ the 1st floor, above the battery compartment. This appears like a waste of space, but one needs about 20mm space for wires clearance,since closely tied wire would badly affect vibration damping.")]),e._v(" "),a("p",[e._v("Excursus: Effective damping is required by all advanced flight stacks and pilots using Althold and GPS modes. Although there are still "),a("em",[e._v("hard mounters")]),e._v(" around, most builds/controllers/flight stacks are affected by vibrations, leading to the core issues Aliasing/Clipping.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(994),alt:"vibration_aliasing"}})]),e._v(" "),a("p",[e._v('The PX4 stack is logging those impacts as well, so its easy to analyse them. The example plot shows that the vibration induced dropout peaks are going one way instead of rising above and below the sensor values. This shifts the center of the signal, wrongly "telling" the flight controller rising or falling height. Although newer EKF filter algorithms are designed to handle this to a certain amount, its better to prevent impacts like this by the shown soft mount.')]),e._v(" "),a("p",[a("img",{attrs:{src:o(995),alt:"red robo damping"}})]),e._v(" "),a("p",[e._v("This is realized either by 3DR foam pads or HK orange latex. The latter is not self-adhesive, but double faced tape such as 3M 5925F does the job nicely. If no housing is used for the Pixracer, the pads are sticking underneath a 36x36mm fiber or carbon board, squeezing the mandatory foam on top of the baro sensor as well. This foam reduces all light and most airflow impacts onto the sensor.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(996),alt:"red robo wires"}})]),e._v(" "),a("p",[e._v("It is recommended to fix the cables underneath the Pixracer to prevent damages or relocation during battery placement. Zip ties for the motor wires are worth discussing. If one arm breaks, the damage might be even bigger. For the required X Quad config, connect the four motors according to the layout shown below, so the MAIN1 connector should connect to ESC for motor 1, and so on.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(997),alt:"Motor order connection for Quad - X configuration"}})]),e._v(" "),a("p",[a("img",{attrs:{src:o(998),alt:"red robo naked side"}})]),e._v(" "),a("p",[e._v("The side view shows lots of space for the battery and other addons like an FPV Cam/Tx, RC Rx, OSD and 3DR radio (if the ESP 8266 Wifi board, provided with the Pixracer is not used. The Piezo speaker is mounted sunnyside down near the front stand off. The safety switch, still provided with the Pixracer kit, is not needed at all. The PX4 stack doesn´t use it.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(999),alt:"red fat robo"}})]),e._v(" "),a("p",[e._v("The Pixracer with PX4 stack is providing several GPS dependent flight modes, such as Auto Missions,Loiter, Position Control and Return to Land. If the GPS is not only used for the latter, it is recommended to install one of the better GNSS units with concurrent GPS / GLONASS ability. Any type with u-blox M8N on a 35x35mm board will fit @ 2nd floor, acting as a mast replacement. It is better to use a GNSS bord with a MAG sensor onboard, since the internal MAG of a flight Controller is always prone to EMI impacts and build related offsets. These might cause TBE (Toilet bowl) effects, impacting GPS modes. Any good rec. for the Pixhawk will work with the Pixracer as well.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1e3),alt:"red robo aufgeklappt"}})]),e._v(" "),a("p",[e._v("The foldable upper part of the Robocat frame allows easy access to the Pixracer and other external components. The wiring provided with the Pixracer kit will be long enough for this application. For others it might be required to enlongate them, which is easier than to crimp new ones with JST-GH connectors.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("AUAV.CO supplies a large variety of replacements for several applications.")])]),e._v(" "),a("p",[e._v("When everything is ready, its time for configuration and calibration with QGroundControl.")]),e._v(" "),a("h2",{attrs:{id:"airframe-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airframe-configuration"}},[e._v("#")]),e._v(" Airframe Configuration")]),e._v(" "),a("p",[e._v("Select the QAV250 configuration as shown below. This will not only put PX4 into quadrotor mode, but also load decent default tuning gains.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1001),alt:"QGC - select QAV240 firmware"}})])])}),[],!1,null,null,null);t.default=r.exports},988:function(e,t,o){e.exports=o.p+"assets/img/red_robo_case.bfc45015.jpg"},989:function(e,t,o){e.exports=o.p+"assets/img/red_parts_robocat.238d8584.jpg"},990:function(e,t,o){e.exports=o.p+"assets/img/robocat750_basic_setup_1.ad6c716e.jpg"},991:function(e,t,o){e.exports=o.p+"assets/img/red_robo_esc.3893ec52.jpg"},992:function(e,t,o){e.exports=o.p+"assets/img/red_robo_bottom.960d509e.jpg"},993:function(e,t,o){e.exports=o.p+"assets/img/red_robo_top_plate.9aaece6e.jpg"},994:function(e,t,o){e.exports=o.p+"assets/img/vibration_aliasing.a8e7ca8f.png"},995:function(e,t,o){e.exports=o.p+"assets/img/red_robo_damping.9891287b.jpg"},996:function(e,t,o){e.exports=o.p+"assets/img/red_robo_wires.0c4d171d.jpg"},997:function(e,t,o){e.exports=o.p+"assets/img/motor_order_quad_x.2a1ce01e.png"},998:function(e,t,o){e.exports=o.p+"assets/img/red_robo_naked_side.2ea5e953.jpg"},999:function(e,t,o){e.exports=o.p+"assets/img/red_fat_robo.4b51e9d6.jpg"}}]);