(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1109:function(e,t,a){e.exports=a.p+"assets/img/hero.4ab5c348.jpg"},1747:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vtol-airframes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol-airframes"}},[e._v("#")]),e._v(" VTOL Airframes")]),e._v(" "),r("p",[e._v('PX4 uses the term VTOL to refer to vehicles that support both forward flight like a fixed-wing aircraft ("airplane") and vertical take off and landing like a helicopter or multicopter.')]),e._v(" "),r("p",[r("img",{attrs:{src:a(1109),alt:"Vertical Technologies: Deltaquad QuadPlane VTOL"}})]),e._v(" "),r("p",[e._v("VTOL vehicles offer the benefits of both multicopter and fixed-wing flight:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Vertical takeoff and landing:")]),e._v(" Even inexperienced pilots can take off and land virtually anywhere.")]),e._v(" "),r("li",[r("strong",[e._v("Fast and efficient fixed wing flight:")]),e._v(" Faster, further, and longer missions, carrying heavier payloads.")]),e._v(" "),r("li",[r("strong",[e._v("Hovering:")]),e._v(" Steady platform for photography, structure scans etc.")])]),e._v(" "),r("p",[e._v("This section describes the VTOL types and configurations supported by PX4, and provides high-level directions for assembly, configuration, and flight.")]),e._v(" "),r("h2",{attrs:{id:"vtol-types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol-types"}},[e._v("#")]),e._v(" VTOL Types")]),e._v(" "),r("p",[e._v("PX4 supports the three most important/main VTOL types.")]),e._v(" "),r("div",{staticClass:"grid_wrapper three_column"},[r("div",{staticClass:"grid_item"},[r("div",{staticClass:"grid_item_heading"},[r("a",{attrs:{href:"tailsitter.html",title:"Tailsitter"}},[r("big",[e._v("Tailsitter")])],1)]),e._v(" "),r("div",{staticClass:"grid_text"},[e._v("\n    Rotors permanently in fixed wing-position.\n    Takes off and lands on tail. Whole vehicle tilts forward to enter forward flight.\n    "),r("img",{attrs:{src:a(342),title:"wingtraone"}}),e._v(" "),r("ul",[r("li",[e._v("Simple and robust")]),e._v(" "),r("li",[e._v("Minimal set of actuators")]),e._v(" "),r("li",[e._v("Can be hard to control, particularly in wind")]),e._v(" "),r("li",[e._v("Tradeoff between efficiency in hover and forward flight, as same actuators are used")])])])]),e._v(" "),r("div",{staticClass:"grid_item"},[r("div",{staticClass:"grid_item_heading"},[r("a",{attrs:{href:"tiltrotor.html",title:"Tiltrotor"}},[r("big",[e._v("Tiltrotor")])],1)]),e._v("\n  Rotors swivel 90 degrees to transition from multicopter to forward flight orientation.\n  Takes off and lands on belly.\n  "),r("div",{staticClass:"grid_text"},[r("img",{attrs:{src:a(387),title:"Eflight Confvergence"}}),e._v(" "),r("ul",[r("li",[e._v("Additional actuators for motor tilts")]),e._v(" "),r("li",[e._v("Mechanically complex tilting mechanism")]),e._v(" "),r("li",[e._v("Easier to control in hover than tailsitters due to more control authority")])])])]),e._v(" "),r("div",{staticClass:"grid_item"},[r("div",{staticClass:"grid_item_heading"},[r("a",{attrs:{href:"standardvtol.html",title:"Standard VTOL"}},[r("big",[e._v("Standard VTOL")])],1)]),e._v(" "),r("div",{staticClass:"grid_text"},[e._v("\n  Separate rotors/flight controls for multicopter and forward flight. Takes off and lands on belly.\n  "),r("img",{attrs:{src:a(385),title:"Vertical Technologies: Deltaquad"}}),e._v(" "),r("ul",[r("li",[e._v("Additional weight from separate hover/forward flight propulsion systems")]),e._v(" "),r("li",[e._v("Easiest to control due to dedicated hover/forward flight actuators")]),e._v(" "),r("li",[e._v("Can hover")]),e._v(" "),r("li",[e._v("Fuel engines for forward flight propulsion can be used")])])])])]),e._v(" "),r("p",[e._v("In general, as mechanical complexity increases the vehicles are easier to fly, but the cost and weight increase.\nEach type has advantages and disadvantages, and there are successful commercial ventures based on all of them.")]),e._v(" "),r("p",[e._v('Within each of the main "types" above, there are many possible variations—for example, the number of motors, motor geometry, flight surfaces, etc.\nPX4 provides '),r("em",[e._v("airframe configurations")]),e._v(" for many of the more common vehicle setups.\nThe supported set is listed in "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol"}},[e._v("Airframes Reference > VTOL")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("ul",[r("li",[e._v("If the vehicle setup you need is not supported you may need to "),r("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[e._v("Add an Airframe")]),e._v(" (requires some "),r("RouterLink",{attrs:{to:"/en/development/development.html"}},[e._v("PX4 Development")]),e._v(" expertise).")],1),e._v(" "),r("li",[e._v("The VTOL codebase is the same codebase as for all other airframes and just adds additional control logic, in particular for transitions.")])])]),e._v(" "),r("h2",{attrs:{id:"flying-and-flight-modes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flying-and-flight-modes"}},[e._v("#")]),e._v(" Flying and Flight Modes")]),e._v(" "),r("p",[e._v("A VTOL aircraft can fly as either a multicopter or as fixed-wing vehicle.\nMulticopter mode is mainly used for take off and landing while the fixed wing mode is used for efficient travel and/or mission execution.")]),e._v(" "),r("p",[e._v("The flight modes for VTOL vehicles are the same as for "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#mc_flight_modes"}},[e._v("multicopter")]),e._v(" when flying in MC mode and "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#fw_flight_modes"}},[e._v("fixed-wing")]),e._v(" when flying in FW mode.")],1),e._v(" "),r("p",[e._v("The transition between modes is initiated either by the pilot using an RC switch or automatically by PX4 when needed in missions or other auto modes.")]),e._v(" "),r("h2",{attrs:{id:"assembly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[e._v("#")]),e._v(" Assembly")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("For information about commercial and kit VTOL vehicles see: "),r("RouterLink",{attrs:{to:"/en/complete_vehicles/"}},[e._v("Complete Vehicles")])],1)]),e._v(" "),r("p",[e._v("PX4 controlled vehicles generally share the same core components: a flight controller connected to a power system, GPS, external compass (highly recommended), radio control system (optional) and/or telemetry radio system (optional), and airspeed sensor (highly recommended for VTOL vehicles).")]),e._v(" "),r("p",[e._v("The flight controller outputs are connected to the vehicle motor ESCs and/or flight control servos and actuators, which are separately powered.")]),e._v(" "),r("p",[e._v("The mapping between flight controller outputs and specific controls/motors depends on the vehicle frame used, and is specified in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol"}},[e._v("Airframes Reference > VTOL")]),e._v(".")],1),e._v(" "),r("p",[e._v("Assembly information is covered in several sections:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Basic Assembly")]),e._v(" contains topics shows the setup of core components for a number of popular "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("flight controllers")]),e._v(".\nFlight controllers for which we do not have guides are usually set up in much the same way (and almost always include similar setup guides).")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("Peripherals")]),e._v(" contains information about other peripherals, including "),r("RouterLink",{attrs:{to:"/en/sensor/airspeed.html"}},[e._v("Airspeed Sensors")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#vtol"}},[e._v("Airframes Reference > VTOL")]),e._v(" explains which flight controller outputs must be connected to different flight controls for each airframe configuration:\n"),r("ul",[r("li",[e._v("Select the configuration for your vehicle if one exists, as this will have been pre-tuned well enough to fly (may only require fine tuning).")]),e._v(" "),r("li",[e._v('Otherwise select a "Generic Airframe" that matches your vehicle.')])])],1)]),e._v(" "),r("p",[e._v("In addition, build logs showing how others have set up different types of vehicles are provided as sub topics.\nFor example see "),r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_quadplane_fun_cub_vtol_pixhawk.html"}},[e._v("FunCub QuadPlane")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("VTOL configuration is covered in a number of sections:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(" - Configuration that is common to all vehicle types (sensors, safety systems, batteries etc).")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/config_vtol/"}},[e._v("VTOL Specific Configuration")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/peripherals/"}},[e._v("Peripheral Hardware")]),e._v(" - Configuration for optional hardware and sensors.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/"}},[e._v("Advanced Configuration")]),e._v(": Additional configuration covering factory tuning and advanced and optional configuration.")],1)]),e._v(" "),r("h2",{attrs:{id:"videos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),r("h3",{attrs:{id:"educational"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#educational"}},[e._v("#")]),e._v(" Educational")]),e._v(" "),r("p",[e._v("VTOL Control & Airspeed Fault Detection (PX4 Developer Summit 2019)")]),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/37BIBAzD6fE",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("h3",{attrs:{id:"tailsitter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tailsitter"}},[e._v("#")]),e._v(" Tailsitter")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.valaqpatrol.com/tech-data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UAV Works VALAQ Patrol Tailsitter"),r("OutboundLink")],1)]),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/pWt6uoqpPIw",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_tailsitter_caipiroshka_pixracer.html"}},[e._v("TBS Caipiroshka")])],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/acG0aTuf3f8",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("h3",{attrs:{id:"tiltrotor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tiltrotor"}},[e._v("#")]),e._v(" Tiltrotor")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_tiltrotor_eflite_convergence_pixfalcon.html"}},[e._v("Convergence Tiltrotor")])],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/E61P2f2WPNU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("h3",{attrs:{id:"quadplane-vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quadplane-vtol"}},[e._v("#")]),e._v(" QuadPlane VTOL")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_quadplane_fun_cub_vtol_pixhawk.html"}},[e._v("FunCub QuadPlane")])],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/4K8yaa6A0ks",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_quadplane_falcon_vertigo_hybrid_rtf_dropix.html"}},[e._v("Falcon Vertigo QuadPlane")])],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/h7OHTigtU0s",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p"),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/frames_vtol/vtol_quadplane_volantex_ranger_ex_pixhawk.html"}},[e._v("Ranger QuadPlane")])],1),e._v(" "),r("p"),r("div",{staticClass:"embed-responsive embed-responsive-16by9"},[r("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/7tGXkW6d3sA",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),r("p")])}),[],!1,null,null,null);t.default=i.exports},342:function(e,t,a){e.exports=a.p+"assets/img/hero.b7fc0e33.jpg"},385:function(e,t,a){e.exports=a.p+"assets/img/hero_small.d4732a64.png"},387:function(e,t,a){e.exports=a.p+"assets/img/hero.de23ca41.jpg"}}]);