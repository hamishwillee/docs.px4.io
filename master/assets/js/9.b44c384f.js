(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1649:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"lumenier-qav250-pixhawk-mini-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lumenier-qav250-pixhawk-mini-build"}},[t._v("#")]),t._v(" Lumenier QAV250 Pixhawk Mini Build")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.lumenier.com/products/legacy/qav250",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumenier QAV250 Mini FPV Quadcopter"),r("OutboundLink")],1),t._v(" is a small but fully functional FPV multicopter frame.\nThis topic provides full build and configuration instructions for using the frame with the "),r("em",[t._v("Pixhawk Mini")]),t._v(" flight controller, including how to install and configure the PX4 autopilot using "),r("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),r("p",[t._v("Key information")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Frame:")]),t._v(" Lumenier QAV250 CF")]),t._v(" "),r("li",[r("strong",[t._v("Flight controller:")]),t._v(" Pixhawk Mini")]),t._v(" "),r("li",[r("strong",[t._v("Assembly time (approx.):")]),t._v(" 3.5 hours (2 for frame, 1.5 autopilot setup)")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(406),alt:"QAV250 - Complete build with pixhawk mini"}})]),t._v(" "),r("p",[r("img",{attrs:{src:o(950),alt:"QAV250 - Complete build with pixhawk mini and props"}})]),t._v(" "),r("h2",{attrs:{id:"bill-of-materials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),r("p",[t._v("The components used in this build are listed below (along with links to where they can be purchased).\nIn general we used hardware recommended by the manufacturers for the flight controller and frame.")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Flight controller:")]),t._v(" "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_mini.html"}},[t._v("Pixhawk Mini (Discontinued)")])],1),t._v(" "),r("li",[r("strong",[t._v("Power module:")]),t._v(" 3DR 10s Power Module (Discontinued)")]),t._v(" "),r("li",[r("strong",[t._v("ESC:")]),t._v(" Lumenier f390 with Blheli ("),r("a",{attrs:{href:"http://www.getfpv.com/electronics/electronic-speed-controllers-esc/lumenier-f390-30a-blheli-esc-opto-2-4s.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v("). These come with the motors.")]),t._v(" "),r("li",[r("strong",[t._v("Motors:")]),t._v(" Lumenier RX2204 -14 2300KV ("),r("a",{attrs:{href:"http://www.getfpv.com/motors/lumenier-rx2204-14-2300kv.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[r("strong",[t._v("Propellers:")]),t._v(" Lumenier 5x4.5 2 blade ("),r("a",{attrs:{href:"http://www.getfpv.com/propellers/lumenier-5x3-5-2-blade-propeller-set-of-4-black.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[r("strong",[t._v("Frame:")]),t._v(" Lumenier QAV250 - CF ("),r("a",{attrs:{href:"http://www.getfpv.com/multi-rotor-frames/qav250-mini-fpv-quad/qav250-mini-fpv-quadcopter-carbon-fiber-edition.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[r("strong",[t._v("Receiver:")]),t._v(" FR SKY D4R-II ("),r("a",{attrs:{href:"http://www.getfpv.com/radios/receivers/frsky-d4r-ii-4ch-2-4ghz-accst-receiver-w-telemetry.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[r("strong",[t._v("Battery:")]),t._v(" Lumenier 4S 1300 mAh ("),r("a",{attrs:{href:"http://www.getfpv.com/lumenier-1300mah-4s-60c-lipo-battery-xt60.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("p",[t._v("Notes:")]),t._v(" "),r("ul",[r("li",[t._v("The 4S Power Module that comes with the "),r("em",[t._v("Pixhawk Mini")]),t._v(" can be used for the battery size above (instead of the 10S Power Module).\nAssembly is the same with either power module.")]),t._v(" "),r("li",[t._v("We also recommend these ESC: Lumenier 12 amp ESC w/ SimonK AutoShot (2-4s N-FET) ("),r("a",{attrs:{href:"http://www.getfpv.com/lumenier-12a-esc-w-simonk-autoshot-2-4s-n-fet.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),r("OutboundLink")],1),t._v(").")])]),t._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("p",[t._v("This section lists all hardware for the frame and the autopilot installation.")]),t._v(" "),r("h3",{attrs:{id:"frame-qav250"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frame-qav250"}},[t._v("#")]),t._v(" Frame QAV250")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Unibody frame plate")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Flight controller cover plate")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("PDB")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Camera plate")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("35mm standoffs")]),t._v(" "),r("td",[t._v("6")])]),t._v(" "),r("tr",[r("td",[t._v("25mm standoffs")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("10mm standoffs")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("Vinyl caps")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("20mm steel screws")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("18mm steel screws")]),t._v(" "),r("td",[t._v("10")])]),t._v(" "),r("tr",[r("td",[t._v("Velcro battery strap")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Foam for battery")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("LEDs strip")]),t._v(" "),r("td",[t._v("2")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:o(951),alt:"Hardware for QAV250 frame"}})]),t._v(" "),r("h3",{attrs:{id:"electronics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Description")]),t._v(" "),r("th",[t._v("Quantity")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Motors lumenier Rx2204-14 2300KV")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("ESC lumenier 30A")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("3DR power module 10S")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Fr-sky D4R-II receiver")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("3DR Pixhawk Mini autopilot")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("3DR GPS Neo-M8N")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("8 PWM servo output")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("External safety switch")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Micro SD card")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("Battery Lumenier 1300 mAh 4S 14.8V")]),t._v(" "),r("td",[t._v("1")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:o(952),alt:"QAV250/PixhawkMini Electronics before assembly"}})]),t._v(" "),r("h3",{attrs:{id:"telemetry-radio-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio-optional"}},[t._v("#")]),t._v(" Telemetry radio (optional)")]),t._v(" "),r("p",[t._v("A telemetry radio is an optional component that can be used to\nwirelessly connect a ground control station (GCS) computer with the\nautopilot. This allows you to view in-flight data, change missions on\nthe fly, and tune in the vehicle during flight.")]),t._v(" "),r("p",[t._v("PX4/Pixhawk Mini support many different telemetry radios. The radio used\nin this build is the (highly recommended) "),r("em",[t._v("3DR Telemetry Radio (915MHz)")]),t._v(" (Discontinued).")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Telemetry radios use different frequency bands in order to comply with local regulations.\nSelect a version appropriate for your region: USA - 915 MHz, Europe/Australia - 433MHz")])]),t._v(" "),r("p",[t._v("The telemetry kit includes:")]),t._v(" "),r("ul",[r("li",[t._v("Two telemetry transceivers (for vehicle and GCS)")]),t._v(" "),r("li",[t._v("Micro USB cable")]),t._v(" "),r("li",[t._v("Android OTG adapter cable")]),t._v(" "),r("li",[t._v("Double-sided tape")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(953),alt:"3DR Telemetry Radio Kit - unboxed"}})]),t._v(" "),r("h2",{attrs:{id:"assembly-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly-tools"}},[t._v("#")]),t._v(" Assembly tools")]),t._v(" "),r("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),r("ul",[r("li",[t._v("2.0mm Hex screwdriver")]),t._v(" "),r("li",[t._v("3mm Philips screwdriver")]),t._v(" "),r("li",[t._v("Wire cutters")]),t._v(" "),r("li",[t._v("Soldering iron and solder")]),t._v(" "),r("li",[t._v("Precision tweezers")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(954),alt:"Tools required for assembling QAV250"}})]),t._v(" "),r("h2",{attrs:{id:"off-frame-assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#off-frame-assembly"}},[t._v("#")]),t._v(" Off-frame assembly")]),t._v(" "),r("p",[t._v("This section shows how the electronics are wired (off frame) and how the frame is assembled without the electronics.\nThis information can be used for reference if the on-the-frame screenshots are not sufficiently clear.")]),t._v(" "),r("h3",{attrs:{id:"electronics-wiring-connections-off-frame"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#electronics-wiring-connections-off-frame"}},[t._v("#")]),t._v(" Electronics Wiring/Connections (off frame)")]),t._v(" "),r("p",[t._v("The image below shows the "),r("em",[t._v("standard")]),t._v(" multicopter wiring for "),r("em",[t._v("Pixhawk Mini")]),t._v(". It uses the "),r("em",[t._v("Quad Power Distribution Board")]),t._v(" to power the ESCs, Pixhawk and Pixhawk power rail (the board includes an integrated power module that supports batteries up to 4S).")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" For this QAV250 build we instead use the separate 10S Power module to power the ESCs and Pixhawk, and we don't use the optional external switch.\nThe wiring is otherwise similar!")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(361),alt:"Pixhawk Mini Electronics Wiring for QAV250 (off frame)"}})]),t._v(" "),r("h3",{attrs:{id:"frame-only-assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frame-only-assembly"}},[t._v("#")]),t._v(" Frame-only assembly")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" This section shows how the frame is assembled without the complication of the electronics.\nIt is referenced in the full assembly documentation below.")])]),t._v(" "),r("p",[t._v("To assemble the frame:")]),t._v(" "),r("p",[r("strong",[t._v("Step 1:")]),t._v(" Use the 10mm standoffs and 20mm steels screws for PDB as\nshown in the picture.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(955),alt:"Add standoffs and screws to PDB"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 2:")]),t._v(" Place the frame on the standoffs.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(956),alt:"Place frame on top of standoffs (on top of PDB)"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Ensure that you have the frame-plate mounted the\ncorrect way. This cut indicated below shows the bottom of the frame.\n"),r("img",{attrs:{src:o(957),alt:"Diagram indicating which side is bottom of QAV250 frame plate"}})])]),t._v(" "),r("p",[r("strong",[t._v("Step 3:")]),t._v(" Put the 35mm standoffs on the screws (you will need 2.0mm Hex screwdriver).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(958),alt:"Place standoffs on top of frame"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 4:")]),t._v(" Attach the camera plate and add remaining standoffs.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(959),alt:"Add camera place and remaining standoffs to the frame."}})]),t._v(" "),r("p",[r("strong",[t._v("Step 5:")]),t._v(" Place the flight controller cover plate on the standoffs and screw into place.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(960),alt:"Attach flight controller cover plate"}})]),t._v(" "),r("p",[t._v("Additional/manufacturer assembly can be found here:\n"),r("a",{attrs:{href:"https://www.lumenier.com/products/legacy/build-manual-carbon-fiber",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumenier QAV250 Carbon Fiber Build Manual"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"full-assembly-with-electronics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#full-assembly-with-electronics"}},[t._v("#")]),t._v(" FULL Assembly with electronics")]),t._v(" "),r("p",[t._v("This section describes the full assembly of the QAV250 along with the\n"),r("em",[t._v("Pixhawk Mini")]),t._v(", motors and other electronics.")]),t._v(" "),r("p",[r("strong",[t._v("Step 1:")]),t._v(" Install motors")]),t._v(" "),r("p",[t._v("The red mark indicates the front of the frame. Make sure you place the\nmotors in the correct order on the frame and pass the cables through the\nbottom of the frame.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(961),alt:"Add motors to QAV250 frame"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 2:")]),t._v(" Solder the 4 ESCs to the PDB")]),t._v(" "),r("p",[t._v("The red cables must be soldered to the positive pad and the black cables to the negative pad (as shown for a single ESC below).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(962),alt:"Solder ESC to QAV250 PDB"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 3:")]),t._v(" Solder the power module to the PDB")]),t._v(" "),r("p",[t._v("The red cable should be soldered to the positive pad and the black\ncable to the negative pad. Solder in a way that fits your build.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(963),alt:"Solder power module to QAV250 pdb"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 4:")]),t._v(" Solder LEDs to the PDB")]),t._v(" "),r("p",[t._v("Red cables should connect to the positive pad and black cables with\nnegative pads. The white LEDs are for the front and the red LEDs are for\nback.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(964),alt:"Solder LEDS to QAV250 PDB"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 5:")]),t._v(" Solder the motors with the ESC")]),t._v(" "),r("p",[t._v("Solder the motor cables to the ESC pads as shown below. Make sure the\nmotors turns in the correct direction. If not, swap the positions of\ncables A and C on the ESC.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(965),alt:"Solder motors to ESC."}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Once the cables are soldered in the correct order,\ncover the pads with electrical tape or tubing.\n"),r("img",{attrs:{src:o(966),alt:"Cover ESC in tape for safety"}})])]),t._v(" "),r("p",[r("strong",[t._v("Step 6:")]),t._v(" Attach the PDB to the frame")]),t._v(" "),r("p",[t._v("Follow the steps described in the Frame assembly section.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(967),alt:"Attach wired PDB to frame on QAV250"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 7:")]),t._v(" Attach the LEDs to the frame using the Phillips screws provided.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(968),alt:"Attach LEDS to frame"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Warning")]),t._v(" The carbon fiber is conductive use silicon to\navoid the contact with the weld in the frame.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(969),alt:"Use silicon to isolate LEDs from frame"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 8:")]),t._v(" Attach vibration damping foam to the frame as shown (the foam is included in the "),r("em",[t._v("Pixhawk Mini")]),t._v(" kit).")]),t._v(" "),r("p",[t._v("The foam reduces vibrations that may otherwise affect Pixhawk performance. The foam is sticky on both sides.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(970),alt:"Add damping foam to frame (for Pixhawk)"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 9:")]),t._v(" Attach the "),r("em",[t._v("Pixhawk Mini")]),t._v(" to the frame using the damping foam.")]),t._v(" "),r("p",[t._v("The Pixhawk should be oriented so that the arrow faces the front of the frame.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(971),alt:"Attach Pixhawk Mini on top of damping foam"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 10:")]),t._v(" Connect the power module.")]),t._v(" "),r("p",[t._v("Connect the Power Module and "),r("em",[t._v("Pixhawk Mini")]),t._v(" using the supplied 6pin cable (as shown).\nIf you're using the Power Module from the "),r("em",[t._v("Pixhawk Mini")]),t._v(" kit it is connected in the same way.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(972),alt:"Connect the Pixhawk Mini to the power module"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 11:")]),t._v(" Connect ESC to the PWM output")]),t._v(" "),r("p",[t._v("Attach the ESCs to the "),r("em",[t._v("Pixhawk Mini")]),t._v(" in the correct order, using\neither a PWM output cable "),r("em",[t._v("or")]),t._v(" a PWM board as shown below (both are\nsupplied in the "),r("em",[t._v("Pixhawk Mini")]),t._v(" kit ).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(973),alt:"Connect Pixhawk to QAV250 ESCs using PWM Board"}}),t._v(" "),r("img",{attrs:{src:o(974),alt:"Connect Pixhawk to QAV250 ESCs using PWM cable"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 12:")]),t._v(" Connect the receiver")]),t._v(" "),r("p",[t._v("Connect the "),r("em",[t._v("FRSky D4-R")]),t._v(" receiver channel 1 to the "),r("strong",[t._v("RCIN")]),t._v(" port on the "),r("em",[t._v("Pixhawk Mini")]),t._v(" (as shown).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(975),alt:"Connect FRSKY"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Notes on receivers:")])]),t._v(" "),r("ul",[r("li",[t._v("The "),r("em",[t._v("Pixhawk Mini")]),t._v(" "),r("strong",[t._v("RCIN")]),t._v(" port accepts PPM input (i.e. multiplexed\nchannels). You can use a PWM receiver (with individual cables for\neach channel) but you will have to connect via PPM encoder "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like\nthis one"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("You can also use a Spektrum receiver. These are connected to the\n"),r("strong",[t._v("SPKT/DSM")]),t._v(" input next to "),r("strong",[t._v("RCIN")]),t._v(" on the "),r("em",[t._v("Pixhawk Mini")]),t._v(".")]),t._v(" "),r("li",[t._v("For more information see: Pixhawk Mini Receiver Compatibility "),r("FIX",{attrs:{LINK:""}})],1)]),t._v(" "),r("p",[r("strong",[t._v("Step 13:")]),t._v(" Connect the GPS/COMPASS module")]),t._v(" "),r("p",[t._v("Connect the GPS/COMPASS module to the "),r("em",[t._v("Pixhawk Mini")]),t._v("'s "),r("strong",[t._v("GPS&I2C")]),t._v(" port\nas shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(976),alt:"Connect GPS to Pixhawk Mini"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 14:")]),t._v(" Mount the GPS/COMPASS module")]),t._v(" "),r("p",[t._v("Attach flight controller cover plate (see frame assembly instructions)\nand then paste the GPS module onto the cover plate with the arrow to the\nfront (paste included in kit).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(977),alt:"Mount GPS on QAV250"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 15:")]),t._v(" Connect and mount the telemetry radio (Optional)")]),t._v(" "),r("p",[t._v("Connect the telemetry radio to the "),r("em",[t._v("Pixhawk Mini")]),t._v(" "),r("strong",[t._v("TELEM")]),t._v(" port as\nshown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(978),alt:"Connect 3DR Wifi Telemetry Radio Kit to Pixhawk Mini"}})]),t._v(" "),r("p",[t._v("Then mount the radio using the double-sided tape included in the\ntelemetry radio kit (for this build we mounted the radio below the PDB,\nas shown below).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(979),alt:"Mount 3DR Wifi Telemetry Radio Kit to QAV250"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 16:")]),t._v(" Attach landing standoffs to the arms")]),t._v(" "),r("p",[r("img",{attrs:{src:o(980),alt:"QAV250 Landing Standoffs"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 17:")]),t._v(" Attach the battery foam and velcro battery strap to the cover plate (the battery strap and foam come with the frame kit)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(981),alt:"QAV250 with battery foam and velcro strap"}})]),t._v(" "),r("p",[t._v("The frame build is now complete! In the next step we can install and\nconfigure the PX4 autopilot.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(406),alt:"QAV250 - Complete build with pixhawk mini"}})]),t._v(" "),r("h2",{attrs:{id:"px4-installation-and-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-installation-and-configuration"}},[t._v("#")]),t._v(" PX4 installation and configuration")]),t._v(" "),r("p",[t._v("This section explains how you can use\n"),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),r("OutboundLink")],1),t._v(" to install the PX4\nautopilot and configure/tune it for the QAV250 frame.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" can be used to install and\nconfigure your autopilot, and also to plan missions and control your\nvehicle remotely.")])]),t._v(" "),r("p",[r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),r("OutboundLink")],1),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),r("h3",{attrs:{id:"firmware-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-update"}},[t._v("#")]),t._v(" Firmware update")]),t._v(" "),r("p",[t._v("Update the "),r("em",[t._v("Pixhawk Mini")]),t._v(" with the PX4 firmware, configured for the\nLumenier QAV250.")]),t._v(" "),r("p",[r("strong",[t._v("Step 1:")]),t._v(" Start "),r("em",[t._v("QGroundControl")]),t._v(" and select "),r("strong",[t._v("Firmware")]),t._v(" from the sidebar.\nConnect your vehicle to the USB port")]),t._v(" "),r("p",[r("img",{attrs:{src:o(982),alt:"QGroundControl - Update firmware"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 2:")]),t._v(" Select the airframe ("),r("strong",[t._v("Quadrotor x > Lumenier QAV250")]),t._v(").")]),t._v(" "),r("p",[t._v("Then click "),r("strong",[t._v("Apply and Restart")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(983),alt:"QGroundControl - Select firmware to update"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" For additional information see:")])]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Firmware setup")])],1)]),t._v(" "),r("h3",{attrs:{id:"vehicle-calibration-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-calibration-setup"}},[t._v("#")]),t._v(" Vehicle calibration/setup")]),t._v(" "),r("p",[t._v("Vehicle calibration/setup is typically similar for all vehicles.\nYou can follow the instructions below, or see "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[r("strong",[t._v("Step 3:")]),t._v(" Radio calibration")]),t._v(" "),r("ol",[r("li",[t._v("Turn on the remote control.")]),t._v(" "),r("li",[t._v("Select "),r("strong",[t._v("Radio")]),t._v(" in the left-sidebar.")]),t._v(" "),r("li",[t._v('Select the "mode" of your remote control (top right).')]),t._v(" "),r("li",[t._v("Click the "),r("strong",[t._v("Calibrate")]),t._v(" button and follow the on-screen instructions.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(984),alt:"QGroundControl - Radio Calibration"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 4:")]),t._v(" Calibrate sensors")]),t._v(" "),r("ol",[r("li",[t._v("Select "),r("strong",[t._v("Sensors")]),t._v(" in the left-sidebar.")]),t._v(" "),r("li",[t._v("Select the "),r("strong",[t._v("Compass")]),t._v(" button and then follow the on-screen instructions.")]),t._v(" "),r("li",[t._v("Select the **Gyroscope **button and then follow the on-screen instructions.")]),t._v(" "),r("li",[t._v("Select the **Accelerometer **button and then follow the on-screen instructions.")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(985),alt:"QGroundControl - Calibrate Sensors"}})]),t._v(" "),r("p",[r("strong",[t._v("Step 5:")]),t._v(" Select flight modes.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/flight_modes/"}},[t._v("Flight Modes")]),t._v(" provide autopilot assisted or fully controlled flight.\nNew users should configure their receiver to support the following three modes (these make the vehicle much easier to fly):")],1),t._v(" "),r("ul",[r("li",[r("em",[t._v("Stabilized")]),t._v(" - Vehicle hard to flip, and will level-out if the sticks are released (but not hold position)")]),t._v(" "),r("li",[r("em",[t._v("Altitude")]),t._v(" - Climb and drop are controlled to have a maximum rate.")]),t._v(" "),r("li",[r("em",[t._v("Position")]),t._v(" - When sticks are released the vehicle will stop (and hold position against wind drift)")])]),t._v(" "),r("p",[t._v("There are a number of ways to "),r("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("configure flight modes")]),t._v(".\nIn this case we have a three-way switch on the receiver that we map to a single channel (5).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(986),alt:"QGroundControl - Set flight modes"}})]),t._v(" "),r("p",[t._v("For more information see:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("Flight Mode Configuration")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_modes/"}},[t._v("Flight Modes")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/FlightModes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Modes"),r("OutboundLink")],1),t._v("\n(QGroundControl)")])]),t._v(" "),r("p",[r("strong",[t._v("Step 6:")]),t._v(" Calibrate ESC")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Remove propellers.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Warning")]),t._v(" Propellers must be removed from vehicle prior to performing ESC calibration!")])])]),t._v(" "),r("li",[r("p",[t._v("Select **Power **in the left-sidebar.")])]),t._v(" "),r("li",[r("p",[t._v("Select the **Calibrate **button and then follow the on-screen instructions (Connect your battery.\nWhen the tones stop, press OK and unplug battery).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(339),alt:"QGroundControl - Calibrate ESCs"}})]),t._v(" "),r("p",[r("img",{attrs:{src:o(987),alt:"QGroundControl - Calibrate ESCs"}})])])]),t._v(" "),r("h3",{attrs:{id:"tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),r("p",[t._v("Firmware installation sets "),r("em",[t._v("default")]),t._v(" autopilot parameters that have been configured for the selected frame (in this case for the "),r("em",[t._v("Lumenier QAV250")]),t._v(").\nAs builds may use different components and place them differently, it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),r("p",[t._v("The parameters below are recommended for this build (the yellow parameters are the ones that have changed).\nThese were generated by flight testing.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(988),alt:"Recommended parameters for QAV250"}})]),t._v(" "),r("p",[t._v("For general information on tuning see: "),r("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"video"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#video"}},[t._v("#")]),t._v(" Video")]),t._v(" "),r("p",[t._v("The video below shows this QAV250 on a test flight.")]),t._v(" "),r("p",[t._v("{% youtube %}\nhttp://www.youtube.com/watch?v=MZzo4DMNkug\n{% endyoutube %}")]),t._v(" "),r("h2",{attrs:{id:"acknowledgements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),r("p",[t._v("This build log was provided by: "),r("em",[t._v("Abimael Suarez, 3DRobotics")]),t._v(".\nVideo was provided by "),r("em",[t._v("Santiago Escala")]),t._v(", "),r("em",[t._v("3DRobotics")]),t._v(".")])])}),[],!1,null,null,null);e.default=a.exports},339:function(t,e,o){t.exports=o.p+"assets/img/qgc_esc_calibration.efb64b91.png"},361:function(t,e,o){t.exports=o.p+"assets/img/qav250_wiring_image_pixhawk_mini.98d475c4.jpg"},406:function(t,e,o){t.exports=o.p+"assets/img/qav250_complete_build_with_pixhawk_mini.32c3f5a2.jpg"},950:function(t,e,o){t.exports=o.p+"assets/img/qav250_complete_build.04cbf1e0.jpg"},951:function(t,e,o){t.exports=o.p+"assets/img/qav250_framehardware_displayall.b3189f42.jpg"},952:function(t,e,o){t.exports=o.p+"assets/img/qav250_pixhawk_mini_electronics_unassembled.f115aaf0.jpg"},953:function(t,e,o){t.exports=o.p+"assets/img/3dr_telemetry_radio_kit.fd9f2fb7.jpg"},954:function(t,e,o){t.exports=o.p+"assets/img/qav250_pixhawk_mini_assembly_tools_needed.89d8f12e.jpg"},955:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_1_pdb_standoffs.cfb167dd.jpg"},956:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_frame_with_pdb_no_standoffs.7505e7b4.jpg"},957:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_indicate_bottom_of_frame.79e5473f.jpg"},958:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_frame_on_pdb_standoffs.40778583.jpg"},959:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_camera_plate_and_remaining_standoffs.f41dd34c.jpg"},960:function(t,e,o){t.exports=o.p+"assets/img/qav250_frame_assembly_add_flight_controller_cover_plate.c149962a.jpg"},961:function(t,e,o){t.exports=o.p+"assets/img/qav250_add_motors.0eabdd88.jpg"},962:function(t,e,o){t.exports=o.p+"assets/img/qav250_solder_esc_pdb.407ee7aa.jpg"},963:function(t,e,o){t.exports=o.p+"assets/img/qav250_solder_power_module_to_pdb.92dbdbd8.jpg"},964:function(t,e,o){t.exports=o.p+"assets/img/qav250_solder_leds_to_pdb.84ccf13e.jpg"},965:function(t,e,o){t.exports=o.p+"assets/img/qav250_solder_motors_to_esc.2de6bbc6.jpg"},966:function(t,e,o){t.exports=o.p+"assets/img/qav250_esc_covered_in_tape_for_safety.05572e49.jpg"},967:function(t,e,o){t.exports=o.p+"assets/img/qav250_finished_pdb_attach_frame.13dcdd56.jpg"},968:function(t,e,o){t.exports=o.p+"assets/img/qav250_attach_LEDs_to_frame.8f8d6d6b.jpg"},969:function(t,e,o){t.exports=o.p+"assets/img/qav250_use_silicon_with_leds.9195806b.jpg"},970:function(t,e,o){t.exports=o.p+"assets/img/qav250_attach_pixhawk_damping_foam.a916460f.jpg"},971:function(t,e,o){t.exports=o.p+"assets/img/qav250_attach_pixhawk_mini.36af8d34.jpg"},972:function(t,e,o){t.exports=o.p+"assets/img/qav250_connectpowermodule.176f0d5f.jpg"},973:function(t,e,o){t.exports=o.p+"assets/img/qav250_connect_pwm_board_escs.93cdeded.jpg"},974:function(t,e,o){t.exports=o.p+"assets/img/qav250_connect_pixhawk_to_esc_via_pwm_cables.f89631de.jpg"},975:function(t,e,o){t.exports=o.p+"assets/img/qav250_connect_frsky_rc_reciever.c7a02cb7.jpg"},976:function(t,e,o){t.exports=o.p+"assets/img/qav250_connect_gps_to_pixhawk_mini.7a5c2ae9.jpg"},977:function(t,e,o){t.exports=o.p+"assets/img/qav250_mount_gps.247658ca.jpg"},978:function(t,e,o){t.exports=o.p+"assets/img/qav250_pixhawk_mini_to_telemetry_radio_connections.c09af8a5.jpg"},979:function(t,e,o){t.exports=o.p+"assets/img/qav250_mount_telemetry_radio.5620d91c.jpg"},980:function(t,e,o){t.exports=o.p+"assets/img/qav250_landing_standoffs.c889bbe6.jpg"},981:function(t,e,o){t.exports=o.p+"assets/img/qav250_battery_foam_and_velcro_strap.b971743f.jpg"},982:function(t,e,o){t.exports=o.p+"assets/img/qgc_firmware_menu.69547c69.png"},983:function(t,e,o){t.exports=o.p+"assets/img/qav250_qgc_firmware.32024de9.png"},984:function(t,e,o){t.exports=o.p+"assets/img/qgc_radio_calibration.18ae3ef3.jpg"},985:function(t,e,o){t.exports=o.p+"assets/img/qgc_calibrate_sensors.065b8cb0.png"},986:function(t,e,o){t.exports=o.p+"assets/img/qgc_flight_mode_selection_qav250.fbcadc41.png"},987:function(t,e,o){t.exports=o.p+"assets/img/qgc_esc_calibration_power.a3108014.png"},988:function(t,e,o){t.exports=o.p+"assets/img/qav250_recommended_parameters.c5a3a06d.jpg"}}]);