(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1296:function(t,e,a){t.exports=a.p+"assets/img/flightgearUI.82123396.jpg"},1784:function(t,e,a){"use strict";a.r(e);var i=a(18),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"flightgear-simulation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flightgear-simulation"}},[t._v("#")]),t._v(" FlightGear Simulation")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://www.flightgear.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear"),i("OutboundLink")],1),t._v(" is a flight simulator with powerful "),i("a",{attrs:{href:"http://wiki.flightgear.org/Flight_Dynamics_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("FDM engines"),i("OutboundLink")],1),t._v(".\nThis allows FlightGear to simulate rotorcrafts under various meteorological conditions (which is why the bridge was originally developed by "),i("a",{attrs:{href:"https://www.thunderfly.cz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThunderFly s.r.o."),i("OutboundLink")],1),t._v(").")]),t._v(" "),i("p",[t._v("This page describes FlightGear's single-vehicle use in SITL.\nFor information about multi-vehicle use see: "),i("RouterLink",{attrs:{to:"/en/simulation/multi_vehicle_flightgear.html"}},[t._v("Multi-Vehicle Simulation with FlightGear")]),t._v(".")],1),t._v(" "),i("p",[i("strong",[t._v("Supported Vehicles:")]),t._v(" Autogyro, Plane, Rover.")]),t._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/iqdcN5Gj4wI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),t._v(" "),i("p",[i("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIEZsaWdodEdlYXIgLS0-IEZsaWdodEdlYXItQnJpZGdlO1xuICBGbGlnaHRHZWFyLUJyaWRnZSAtLT4gTUFWTGluaztcbiAgTUFWTGluayAtLT4gUFg0X1NJVEw7XG5cdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[i("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIEZsaWdodEdlYXIgLS0-IEZsaWdodEdlYXItQnJpZGdlO1xuICBGbGlnaHRHZWFyLUJyaWRnZSAtLT4gTUFWTGluaztcbiAgTUFWTGluayAtLT4gUFg0X1NJVEw7XG5cdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid Graph "}}),i("OutboundLink")],1)]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("See "),i("RouterLink",{attrs:{to:"/en/simulation/"}},[t._v("Simulation")]),t._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),t._v(" "),i("p",[i("a",{attrs:{id:"installation"}})]),t._v(" "),i("h2",{attrs:{id:"installation-ubuntu-linux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[t._v("#")]),t._v(" Installation (Ubuntu Linux)")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("These instructions were tested on Ubuntu 18.04")])]),t._v(" "),i("ol",[i("li",[i("p",[t._v("Install the usual "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Development Environment on Ubuntu LTS / Debian Linux")]),t._v(".")],1)]),t._v(" "),i("li",[i("p",[t._v("Install FlightGear:")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:saiarcot895/flightgear\n"),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flightgear\n")])])]),i("p",[t._v("This installs the latest stable FlightGear version from the PAA repository along with the FGdata package.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("For some models (e.g. those with electric engines) the daily build with the newest features may be necessary.\nInstall this using the "),i("a",{attrs:{href:"https://launchpad.net/~saiarcot895/+archive/ubuntu/flightgear-edge",target:"_blank",rel:"noopener noreferrer"}},[t._v("daily build PPA"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[t._v("Check that you are able to run FlightGear:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("fgfs --launcher\n")])])])]),t._v(" "),i("li",[i("p",[t._v("Set write permissions to the "),i("strong",[t._v("Protocols")]),t._v(" folder in the FlightGear installation directory:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("sudo chmod a+w /usr/share/games/flightgear/Protocols\n")])])]),i("p",[t._v("Setting the permissions is required because the PX4-FlightGear-Bridge puts the communication definition file here.")])])]),t._v(" "),i("p",[t._v("Additional installation instructions can be found on "),i("a",{attrs:{href:"http://wiki.flightgear.org/Howto:Install_Flightgear_from_a_PPA",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear wiki"),i("OutboundLink")],1),t._v(".")]),t._v(" "),i("p",[i("a",{attrs:{id:"running"}})]),t._v(" "),i("h2",{attrs:{id:"running-the-simulation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),i("p",[t._v("Run a simulation by starting PX4 SITL, specifying the airframe configuration of your choice.")]),t._v(" "),i("p",[t._v("The easiest way to do this is to open a terminal in the root directory of the PX4 "),i("em",[t._v("PX4-Autopilot")]),t._v(" repository and call "),i("code",[t._v("make")]),t._v(" for the desired target.\nFor example, to start a plane simulation :")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal\n")])])]),i("p",[t._v("The supported vehicles and "),i("code",[t._v("make")]),t._v(" commands are listed below (click on the links to see the vehicle images).")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Vehicle")]),t._v(" "),i("th",[t._v("Command")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/simulation/flightgear_vehicles.html#standard_plane"}},[t._v("Standard Plane")])],1),t._v(" "),i("td",[i("code",[t._v("make px4_sitl_nolockstep flightgear_rascal")])])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/simulation/flightgear_vehicles.html#ugv"}},[t._v("Ackerman vehicle (UGV/Rover)")])],1),t._v(" "),i("td",[i("code",[t._v("make px4_sitl_nolockstep flightgear_tf-r1")])])]),t._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/simulation/flightgear_vehicles.html#autogyro"}},[t._v("Autogyro")])],1),t._v(" "),i("td",[i("code",[t._v("make px4_sitl_nolockstep flightgear_tf-g1")])])])])]),t._v(" "),i("p",[t._v("The commands above launch a single vehicle with the full UI.\n"),i("em",[t._v("QGroundControl")]),t._v(" should be able to automatically connect to the simulated vehicle.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("For the full list of FlightGear build targets (highlighted) run:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("make px4_sitl_nolockstep list_vmd_make_targets | grep flightgear_\n")])])]),i("p",[t._v("For additional information see: "),i("RouterLink",{attrs:{to:"/en/simulation/flightgear_vehicles.html"}},[t._v("FlightGear Vehicles")]),t._v(' (this includes information about "unsupported" vehicles, and adding new vehicles).')],1)]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Installing Files and Code")]),t._v(" guide is a useful reference if there are build errors.")],1)]),t._v(" "),i("h2",{attrs:{id:"taking-it-to-the-sky"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#taking-it-to-the-sky"}},[t._v("#")]),t._v(" Taking it to the Sky")]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("make")]),t._v(" commands mentioned above first build PX4 and then run it along with the FlightGear simulator.")]),t._v(" "),i("p",[t._v("Once the PX4 has started it will launch the PX4 shell as shown below.\nYou must select enter to get the command prompt.")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("______  __   __    ___\n| ___ \\ \\ \\ / /   /   |\n| |_/ /  \\ V /   / /| |\n|  __/   /   \\  / /_| |\n| |     / /^\\ \\ \\___  |\n\\_|     \\/   \\/     |_/\n\npx4 starting.\n\nINFO  [px4] Calling startup script: /bin/sh etc/init.d-posix/rcS 0\nINFO  [param] selected parameter default file eeprom/parameters_1034\nI'm Mavlink to FlightGear Bridge\nTarged Bridge Freq: 200, send data every step: 1\n4\n  5   -1\n  7   -1\n  2   1\n  4   1\n[param] Loaded: eeprom/parameters_1034\nINFO  [dataman] Unknown restart, data manager file './dataman' size is 11798680 bytes\nINFO  [simulator] Waiting for simulator to accept connection on TCP port 4560\nINFO  [simulator] Simulator connected on TCP port 4560.\nINFO  [commander] LED: open /dev/led0 failed (22)\nINFO  [commander] Mission #3 loaded, 9 WPs, curr: 8\nINFO  [init] Mixer: etc/mixers-sitl/plane_sitl.main.mix on /dev/pwm_output0\nINFO  [mavlink] mode: Normal, data rate: 4000000 B/s on udp port 18570 remote port 14550\nINFO  [airspeed_selector] No airspeed sensor detected. Switch to non-airspeed mode.\nINFO  [mavlink] mode: Onboard, data rate: 4000000 B/s on udp port 14580 remote port 14540\nINFO  [mavlink] mode: Onboard, data rate: 4000 B/s on udp port 14280 remote port 14030\nINFO  [logger] logger started (mode=all)\nINFO  [logger] Start file log (type: full)\nINFO  [logger] Opened full log file: ./log/2020-04-28/22_03_36.ulg\nINFO  [mavlink] MAVLink only on localhost (set param MAV_BROADCAST = 1 to enable network)\nINFO  [px4] Startup script returned successfully\npxh> StatsHandler::StatsHandler() Setting up GL2 compatible shaders\nNow checking for plug-in osgPlugins-3.4.1/osgdb_nvtt.so\nPX4 Communicator: PX4 Connected.\n\npxh>\n")])])]),i("p",[t._v("The console will print out status as PX4 loads the airframe-specific initialization and parameter files, wait for (and connect to) the simulator.\nOnce there is an INFO print that [ecl/EKF] is "),i("code",[t._v("commencing GPS fusion")]),t._v(" the vehicle is ready to arm.\nAt this point, you should see a FlightGear window with some view of aircraft.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("You can change the view by pressing "),i("strong",[t._v("Ctrl+V")]),t._v(".")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(1296),alt:"FlightGear UI"}})]),t._v(" "),i("p",[t._v("You can bring it into the air by typing:")]),t._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[t._v("pxh"),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commander takeoff\n")])])]),i("h2",{attrs:{id:"usage-configuration-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[t._v("#")]),t._v(" Usage/Configuration Options")]),t._v(" "),i("p",[t._v("You can tune your FG installation/settings by the following environment variables:")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("FG\\_BINARY")]),t._v(" - absolute path to FG binary to run. (It can be an AppImage)")]),t._v(" "),i("li",[i("code",[t._v("FG\\_MODELS\\_DIR")]),t._v(" - absolute path to the folder containing the manually-downloaded aircraft models which should be used for simulation.")]),t._v(" "),i("li",[i("code",[t._v("FG\\_ARGS\\_EX")]),t._v(" - any additional FG parameters.")])]),t._v(" "),i("p",[i("a",{attrs:{id:"frame_rate"}})]),t._v(" "),i("h3",{attrs:{id:"display-the-frame-rate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#display-the-frame-rate"}},[t._v("#")]),t._v(" Display the frame rate")]),t._v(" "),i("p",[t._v("In FlightGear you can display the frame rate by enabling it in: "),i("strong",[t._v("View > View Options > Show frame rate")]),t._v(".")]),t._v(" "),i("p",[i("a",{attrs:{id:"custom_takeoff_location"}})]),t._v(" "),i("h3",{attrs:{id:"set-custom-takeoff-location"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#set-custom-takeoff-location"}},[t._v("#")]),t._v(" Set Custom Takeoff Location")]),t._v(" "),i("p",[t._v("Takeoff location in SITL FlightGear can be set using additional variables.\nSetting the variable will override the default takeoff location.")]),t._v(" "),i("p",[t._v("The variables which can be set are as follows: "),i("code",[t._v("--airport")]),t._v(", "),i("code",[t._v("--runway")]),t._v(", and "),i("code",[t._v("--offset-distance")]),t._v(".\nOther options can be found on "),i("a",{attrs:{href:"http://wiki.flightgear.org/Command_line_options#Initial_Position_and_Orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear wiki"),i("OutboundLink")],1)]),t._v(" "),i("p",[t._v("For example:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('FG_ARGS_EX="--airport=PHNL"  make px4_sitl_nolockstep flightgear_rascal\n')])])]),i("p",[t._v("The example above starts the simulation on the "),i("a",{attrs:{href:"http://wiki.flightgear.org/Suggested_airports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Honolulu international airport"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{id:"joystick"}})]),t._v(" "),i("h3",{attrs:{id:"using-a-joystick"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-a-joystick"}},[t._v("#")]),t._v(" Using a Joystick")]),t._v(" "),i("p",[t._v("Joystick and thumb-joystick are supported through "),i("em",[t._v("QGroundControl")]),t._v(" ("),i("RouterLink",{attrs:{to:"/en/simulation/#joystickgamepad-integration"}},[t._v("setup instructions here")]),t._v(").")],1),t._v(" "),i("p",[t._v('The joystick input in FlightGear should be disabled in otherwise there will be a "race condition" between the FG joystick input and PX4 commands.')]),t._v(" "),i("h2",{attrs:{id:"extending-and-customizing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#extending-and-customizing"}},[t._v("#")]),t._v(" Extending and Customizing")]),t._v(" "),i("p",[t._v("To extend or customize the simulation interface, edit the files in the *"),i("em",[t._v("Tools/flightgear_bridge")]),t._v(" folder.\nThe code is available in the "),i("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge repository"),i("OutboundLink")],1),t._v(" on Github.")]),t._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge readme"),i("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);