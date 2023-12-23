(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{1504:function(t,a,e){t.exports=e.p+"assets/img/flightgearUI.82123396.jpg"},2534:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flightgear-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flightgear-simulation"}},[t._v("#")]),t._v(" FlightGear Simulation")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This simulator is "),s("RouterLink",{attrs:{to:"/en/simulation/community_supported_simulators.html"}},[t._v("community supported and maintained")]),t._v(".\nIt may or may not work with current versions of PX4.")],1),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.flightgear.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear"),s("OutboundLink")],1),t._v(" is a flight simulator with powerful "),s("a",{attrs:{href:"http://wiki.flightgear.org/Flight_Dynamics_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("FDM engines"),s("OutboundLink")],1),t._v(".\nThis allows FlightGear to simulate rotorcrafts under various meteorological conditions (which is why the bridge was originally developed by "),s("a",{attrs:{href:"https://www.thunderfly.cz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ThunderFly s.r.o."),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("This page describes FlightGear's single-vehicle use in SITL.\nFor information about multi-vehicle use see: "),s("RouterLink",{attrs:{to:"/en/sim_flightgear/multi_vehicle.html"}},[t._v("Multi-Vehicle Simulation with FlightGear")]),t._v(".")],1),t._v(" "),s("p",[s("strong",[t._v("Supported Vehicles:")]),t._v(" Autogyro, Plane, Rover.")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/iqdcN5Gj4wI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("p",[s("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIEZsaWdodEdlYXIgLS0-IEZsaWdodEdlYXItQnJpZGdlO1xuICBGbGlnaHRHZWFyLUJyaWRnZSAtLT4gTUFWTGluaztcbiAgTUFWTGluayAtLT4gUFg0X1NJVEw7XG5cdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIEZsaWdodEdlYXIgLS0-IEZsaWdodEdlYXItQnJpZGdlO1xuICBGbGlnaHRHZWFyLUJyaWRnZSAtLT4gTUFWTGluaztcbiAgTUFWTGluayAtLT4gUFg0X1NJVEw7XG5cdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid Graph "}}),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/en/simulation/"}},[t._v("Simulation")]),t._v(" for general information about simulators, the simulation environment, and simulation configuration (e.g. supported vehicles).")],1)]),t._v(" "),s("h2",{attrs:{id:"installation-ubuntu-linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-ubuntu-linux"}},[t._v("#")]),t._v(" Installation (Ubuntu Linux)")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("These instructions were tested on Ubuntu 18.04")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install the usual "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Development Environment on Ubuntu LTS / Debian Linux")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("Install FlightGear:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:saiarcot895/flightgear\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flightgear\n")])])]),s("p",[t._v("This installs the latest stable FlightGear version from the PAA repository along with the FGdata package.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For some models (e.g. those with electric engines) the daily build with the newest features may be necessary.\nInstall this using the "),s("a",{attrs:{href:"https://launchpad.net/~saiarcot895/+archive/ubuntu/flightgear-edge",target:"_blank",rel:"noopener noreferrer"}},[t._v("daily build PPA"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),s("li",[s("p",[t._v("Check that you are able to run FlightGear:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("fgfs --launcher\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Set write permissions to the "),s("strong",[t._v("Protocols")]),t._v(" folder in the FlightGear installation directory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+w /usr/share/games/flightgear/Protocol\n")])])]),s("p",[t._v("Setting the permissions is required because the PX4-FlightGear-Bridge puts the communication definition file here.")])])]),t._v(" "),s("p",[t._v("Additional installation instructions can be found on "),s("a",{attrs:{href:"http://wiki.flightgear.org/Howto:Install_Flightgear_from_a_PPA",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear wiki"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"running-the-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-simulation"}},[t._v("#")]),t._v(" Running the Simulation")]),t._v(" "),s("p",[t._v("Run a simulation by starting PX4 SITL, specifying the airframe configuration of your choice.")]),t._v(" "),s("p",[t._v("The easiest way to do this is to open a terminal in the root directory of the PX4 "),s("em",[t._v("PX4-Autopilot")]),t._v(" repository and call "),s("code",[t._v("make")]),t._v(" for the desired target.\nFor example, to start a plane simulation :")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal\n")])])]),s("p",[t._v("The supported vehicles and "),s("code",[t._v("make")]),t._v(" commands are listed below (click on the links to see the vehicle images).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Vehicle")]),t._v(" "),s("th",[t._v("Command")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/sim_flightgear/vehicles.html#standard-plane"}},[t._v("Standard Plane")])],1),t._v(" "),s("td",[s("code",[t._v("make px4_sitl_nolockstep flightgear_rascal")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/sim_flightgear/vehicles.html#ackerman-vehicle-ugv-rover"}},[t._v("Ackermann vehicle (UGV/Rover)")])],1),t._v(" "),s("td",[s("code",[t._v("make px4_sitl_nolockstep flightgear_tf-r1")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/en/sim_flightgear/vehicles.html#autogyro"}},[t._v("Autogyro")])],1),t._v(" "),s("td",[s("code",[t._v("make px4_sitl_nolockstep flightgear_tf-g1")])])])])]),t._v(" "),s("p",[t._v("The commands above launch a single vehicle with the full UI.\n"),s("em",[t._v("QGroundControl")]),t._v(" should be able to automatically connect to the simulated vehicle.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("For the full list of FlightGear build targets (highlighted) run:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep list_vmd_make_targets "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" flightgear_\n")])])]),s("p",[t._v("For additional information see: "),s("RouterLink",{attrs:{to:"/en/sim_flightgear/vehicles.html"}},[t._v("FlightGear Vehicles")]),t._v(' (this includes information about "unsupported" vehicles, and adding new vehicles).')],1)]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Installing Files and Code")]),t._v(" guide is a useful reference if there are build errors.")],1)]),t._v(" "),s("h2",{attrs:{id:"taking-it-to-the-sky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taking-it-to-the-sky"}},[t._v("#")]),t._v(" Taking it to the Sky")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("make")]),t._v(" commands mentioned above first build PX4 and then run it along with the FlightGear simulator.")]),t._v(" "),s("p",[t._v("Once the PX4 has started it will launch the PX4 shell as shown below.\nYou must select enter to get the command prompt.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("______  __   __    ___\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ___ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" / /   /   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/ /  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" V /   / /"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  __/   /   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("  / /_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     / /^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("___  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/\n\npx4 starting.\n\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("px4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Calling startup script: /bin/sh etc/init.d-posix/rcS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" selected parameter default "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" eeprom/parameters_1034\nI"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'m Mavlink to FlightGear Bridge\nTarget Bridge Freq: 200, send data every step: 1\n4\n  5   -1\n  7   -1\n  2   1\n  4   1\n[param] Loaded: eeprom/parameters_1034\nINFO  [dataman] Unknown restart, data manager file '")]),t._v("./dataman' size is "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11798680")]),t._v(" bytes\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("simulator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Waiting "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" simulator to accept connection on TCP port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4560")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("simulator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Simulator connected on TCP port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4560")]),t._v(".\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" LED: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" /dev/led0 failed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commander"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Mission "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3 loaded, 9 WPs, curr: 8")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode: Normal, data rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000000")]),t._v(" B/s on udp port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18570")]),t._v(" remote port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14550")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("airspeed_selector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" No airspeed sensor detected. Switch to non-airspeed mode.\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode: Onboard, data rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000000")]),t._v(" B/s on udp port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14580")]),t._v(" remote port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14540")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode: Onboard, data rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" B/s on udp port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14280")]),t._v(" remote port "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14030")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" logger started "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type: full"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Opened full log file: ./log/2020-04-28/22_03_36.ulg\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" MAVLink only on localhost "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set param MAV_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("_BROADCAST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" network"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINFO  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("px4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Startup script returned successfully\npxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" StatsHandler::StatsHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Setting up GL2 compatible shaders\nNow checking "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" plug-in osgPlugins-3.4.1/osgdb_nvtt.so\nPX4 Communicator: PX4 Connected.\n\npxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("The console will print out status as PX4 loads the airframe-specific initialization and parameter files, wait for (and connect to) the simulator.\nOnce there is an INFO print that [ecl/EKF] is "),s("code",[t._v("commencing GPS fusion")]),t._v(" the vehicle is ready to arm.\nAt this point, you should see a FlightGear window with some view of aircraft.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You can change the view by pressing "),s("strong",[t._v("Ctrl+V")]),t._v(".")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(1504),alt:"FlightGear UI"}})]),t._v(" "),s("p",[t._v("You can bring it into the air by typing:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commander takeoff\n")])])]),s("h2",{attrs:{id:"usage-configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[t._v("#")]),t._v(" Usage/Configuration Options")]),t._v(" "),s("p",[t._v("You can tune your FG installation/settings by the following environment variables:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FG\\_BINARY")]),t._v(" - absolute path to FG binary to run. (It can be an AppImage)")]),t._v(" "),s("li",[s("code",[t._v("FG\\_MODELS\\_DIR")]),t._v(" - absolute path to the folder containing the manually-downloaded aircraft models which should be used for simulation.")]),t._v(" "),s("li",[s("code",[t._v("FG\\_ARGS\\_EX")]),t._v(" - any additional FG parameters.")])]),t._v(" "),s("p",[s("a",{attrs:{id:"frame_rate"}})]),t._v(" "),s("h3",{attrs:{id:"display-the-frame-rate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display-the-frame-rate"}},[t._v("#")]),t._v(" Display the frame rate")]),t._v(" "),s("p",[t._v("In FlightGear you can display the frame rate by enabling it in: "),s("strong",[t._v("View > View Options > Show frame rate")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"set-custom-takeoff-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-custom-takeoff-location"}},[t._v("#")]),t._v(" Set Custom Takeoff Location")]),t._v(" "),s("p",[t._v("Takeoff location in SITL FlightGear can be set using additional variables.\nSetting the variable will override the default takeoff location.")]),t._v(" "),s("p",[t._v("The variables which can be set are as follows: "),s("code",[t._v("--airport")]),t._v(", "),s("code",[t._v("--runway")]),t._v(", and "),s("code",[t._v("--offset-distance")]),t._v(".\nOther options can be found on "),s("a",{attrs:{href:"http://wiki.flightgear.org/Command_line_options#Initial_Position_and_Orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlightGear wiki"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FG_ARGS_EX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--airport=PHNL"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_nolockstep flightgear_rascal\n")])])]),s("p",[t._v("The example above starts the simulation on the "),s("a",{attrs:{href:"http://wiki.flightgear.org/Suggested_airports",target:"_blank",rel:"noopener noreferrer"}},[t._v("Honolulu international airport"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"using-a-joystick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-joystick"}},[t._v("#")]),t._v(" Using a Joystick")]),t._v(" "),s("p",[t._v("Joystick and thumb-joystick are supported through "),s("em",[t._v("QGroundControl")]),t._v(" ("),s("RouterLink",{attrs:{to:"/en/simulation/#joystick-gamepad-integration"}},[t._v("setup instructions here")]),t._v(").")],1),t._v(" "),s("p",[t._v('The joystick input in FlightGear should be disabled in otherwise there will be a "race condition" between the FG joystick input and PX4 commands.')]),t._v(" "),s("h2",{attrs:{id:"extending-and-customizing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-and-customizing"}},[t._v("#")]),t._v(" Extending and Customizing")]),t._v(" "),s("p",[t._v("To extend or customize the simulation interface, edit the files in the "),s("strong",[t._v("Tools/simulation/flightgear/flightgear_bridge")]),t._v(" folder.\nThe code is available in the "),s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge repository"),s("OutboundLink")],1),t._v(" on Github.")]),t._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/PX4-FlightGear-Bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-FlightGear-Bridge readme"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);