(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{1530:function(a,t,s){a.exports=s.p+"assets/img/jmavsim.d842ed38.jpg"},3233:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"jmavsim-with-sitl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-with-sitl"}},[a._v("#")]),a._v(" jMAVSim with SITL")]),a._v(" "),e("p",[a._v("jMAVSim is a simple multirotor/Quad simulator that allows you to fly "),e("em",[a._v("copter")]),a._v(" type vehicles running PX4 around a simulated world. It is easy to set up and can be used to test that your vehicle can take off, fly, land, and responds appropriately to various fail conditions (e.g. GPS failure).")]),a._v(" "),e("p",[e("strong",[a._v("Supported Vehicles:")])]),a._v(" "),e("ul",[e("li",[a._v("Quad")])]),a._v(" "),e("p",[a._v("This topic shows how to set up jMAVSim to connect with a SITL version of PX4.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("jMAVSim can also be used for HITL Simulation ("),e("RouterLink",{attrs:{to:"/ko/simulation/hitl.html#jmavsim-quadrotor-only"}},[a._v("as shown here")]),a._v(").")],1)]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("p",[a._v("jMAVSim setup is included in our "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[a._v("standard build instructions")]),a._v(" (for macOS, Ubuntu Linux, Windows).")],1),a._v(" "),e("h2",{attrs:{id:"simulation-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simulation-environment"}},[a._v("#")]),a._v(" Simulation Environment")]),a._v(" "),e("p",[a._v("Software in the Loop Simulation runs the complete system on the host machine and simulates the autopilot. It connects via local network to the simulator. The setup looks like this:")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: SITL Simulator"}}),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"running-sitl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-sitl"}},[a._v("#")]),a._v(" Running SITL")]),a._v(" "),e("p",[a._v("After ensuring that the "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[a._v("simulation prerequisites")]),a._v(" are installed on the system, just launch: The convenience make target will compile the POSIX host build and run the simulation.")],1),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),e("p",[a._v("This will bring up the PX4 shell:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" shell id: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("140735313310464")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" task name: px4\n\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/\n\nReady to fly.\n\n\npxh"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("It will also bring up a window showing a 3D view of the "),e("a",{attrs:{href:"https://github.com/PX4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim"),e("OutboundLink")],1),a._v(" simulator:")]),a._v(" "),e("p",[e("img",{attrs:{src:s(1530),alt:"jMAVSim 3d View"}})]),a._v(" "),e("h2",{attrs:{id:"taking-it-to-the-sky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taking-it-to-the-sky"}},[a._v("#")]),a._v(" Taking it to the Sky")]),a._v(" "),e("p",[a._v("The system will start printing status information. You will be able to start flying once you have a position lock (shortly after the console displays the message: "),e("em",[a._v("EKF commencing GPS fusion")]),a._v(").")]),a._v(" "),e("p",[a._v("To takeoff enter the following into the console:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("pxh"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" commander takeoff\n")])])]),e("p",[a._v("You can use "),e("em",[a._v("QGroundControl")]),a._v(" to fly a mission or to connect to a "),e("a",{attrs:{href:"#using-a-joystick"}},[a._v("joystick")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"usage-configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[a._v("#")]),a._v(" Usage/Configuration Options")]),a._v(" "),e("p",[a._v("Options that apply to all simulators are covered in the top level "),e("RouterLink",{attrs:{to:"/ko/simulation/#sitl-simulation-environment"}},[a._v("Simulation")]),a._v(" topic (some of these may be duplicated below).")],1),a._v(" "),e("h3",{attrs:{id:"simulating-sensor-hardware-failure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simulating-sensor-hardware-failure"}},[a._v("#")]),a._v(" Simulating Sensor/Hardware Failure")]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/simulation/failsafes.html"}},[a._v("Simulate Failsafes")]),a._v(" explains how to trigger safety failsafes like GPS failure and battery drain.")],1),a._v(" "),e("h3",{attrs:{id:"set-custom-takeoff-location"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-custom-takeoff-location"}},[a._v("#")]),a._v(" Set Custom Takeoff Location")]),a._v(" "),e("p",[a._v("The default takeoff location in can be overridden using the environment variables: "),e("code",[a._v("PX4_HOME_LAT")]),a._v(", "),e("code",[a._v("PX4_HOME_LON")]),a._v(", and "),e("code",[a._v("PX4_HOME_ALT")]),a._v(".")]),a._v(" "),e("p",[a._v("For example, to set the latitude, longitude and altitude:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_HOME_LAT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("28.452386")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_HOME_LON")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("-13.867138\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_HOME_ALT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("28.5")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),e("h3",{attrs:{id:"change-simulation-speed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#change-simulation-speed"}},[a._v("#")]),a._v(" Change Simulation Speed")]),a._v(" "),e("p",[a._v("The simulation speed can be increased or decreased with respect to realtime using the environment variable "),e("code",[a._v("PX4_SIM_SPEED_FACTOR")]),a._v(".")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_SIM_SPEED_FACTOR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),e("p",[a._v("For more information see: "),e("RouterLink",{attrs:{to:"/ko/simulation/#simulation_speed"}},[a._v("Simulation > Run Simulation Faster than Realtime")]),a._v(".")],1),a._v(" "),e("h3",{attrs:{id:"using-a-joystick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-joystick"}},[a._v("#")]),a._v(" Using a Joystick")]),a._v(" "),e("p",[a._v("Joystick and thumb-joystick support are supported through "),e("em",[a._v("QGroundControl")]),a._v(" ("),e("RouterLink",{attrs:{to:"/ko/simulation/#joystick-gamepad-integration"}},[a._v("setup instructions here")]),a._v(").")],1),a._v(" "),e("h3",{attrs:{id:"simulating-a-wifi-drone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simulating-a-wifi-drone"}},[a._v("#")]),a._v(" Simulating a Wifi Drone")]),a._v(" "),e("p",[a._v("There is a special target to simulate a drone connected via Wifi on the local network:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" broadcast jmavsim\n")])])]),e("p",[a._v("The simulator broadcasts its address on the local network as a real drone would do.")]),a._v(" "),e("h3",{attrs:{id:"start-jmavsim-and-px4-separately"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-jmavsim-and-px4-separately"}},[a._v("#")]),a._v(" Start JMAVSim and PX4 Separately")]),a._v(" "),e("p",[a._v("You can start JMAVSim and PX4 separately:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl none\n")])])]),e("p",[a._v("This allows a faster testing cycle (restarting jMAVSim takes significantly more time).")]),a._v(" "),e("h3",{attrs:{id:"headless-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headless-mode"}},[a._v("#")]),a._v(" Headless Mode")]),a._v(" "),e("p",[a._v("To start jMAVSim without the GUI, set the env variable "),e("code",[a._v("HEADLESS=1")]),a._v(" as shown:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HEADLESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl jmavsim\n")])])]),e("h2",{attrs:{id:"multi-vehicle-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation"}},[a._v("#")]),a._v(" Multi-Vehicle Simulation")]),a._v(" "),e("p",[a._v("JMAVSim can be used for multi-vehicle simulation: "),e("RouterLink",{attrs:{to:"/ko/sim_jmavsim/multi_vehicle.html"}},[a._v("Multi-Vehicle Sim with JMAVSim")]),a._v(".")],1),a._v(" "),e("h2",{attrs:{id:"extending-and-customizing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extending-and-customizing"}},[a._v("#")]),a._v(" Extending and Customizing")]),a._v(" "),e("p",[a._v("To extend or customize the simulation interface, edit the files in the "),e("strong",[a._v("Tools/jMAVSim")]),a._v(" folder. The code can be accessed through the"),e("a",{attrs:{href:"https://github.com/px4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim repository"),e("OutboundLink")],1),a._v(" on Github.")]),a._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("The build system enforces the correct submodule to be checked out for all dependencies, including the simulator. It will not overwrite changes in files in the directory, however, when these changes are committed the submodule needs to be registered in the Firmware repo with the new commit hash. To do so, "),e("code",[a._v("git add Tools/jMAVSim")]),a._v(" and commit the change. This will update the GIT hash of the simulator.")])]),a._v(" "),e("h2",{attrs:{id:"interfacing-to-ros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interfacing-to-ros"}},[a._v("#")]),a._v(" Interfacing to ROS")]),a._v(" "),e("p",[a._v("The simulation can be "),e("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[a._v("interfaced to ROS")]),a._v(" the same way as onboard a real vehicle.")],1),a._v(" "),e("h2",{attrs:{id:"important-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#important-files"}},[a._v("#")]),a._v(" Important Files")]),a._v(" "),e("ul",[e("li",[a._v("The startup scripts are discussed in "),e("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[a._v("System Startup")]),a._v(".")],1),a._v(" "),e("li",[a._v('The simulated root file system ("'),e("code",[a._v("/")]),a._v('" directory) is created inside the build directory here: '),e("code",[a._v("build/px4_sitl_default/rootfs")]),a._v(".")])]),a._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),e("h3",{attrs:{id:"java-long-noclassdeffounderror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-long-noclassdeffounderror"}},[a._v("#")]),a._v(" java.long.NoClassDefFoundError")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("Exception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" thread "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Native Method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.Class.forName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Class.java:374"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JarRsrcLoader.java:56"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("URLClassLoader.java:466"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.ClassLoader.loadClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:566"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.ClassLoader.loadClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:499"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v("\nException "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" thread "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Native Method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.Class.forName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Class.java:374"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JarRsrcLoader.java:56"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("URLClassLoader.java:466"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.ClassLoader.loadClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:566"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.base/java.lang.ClassLoader.loadClass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ClassLoader.java:499"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("This error should no longer occur once the jMAVSim submodule is "),e("a",{attrs:{href:"https://github.com/PX4/jMAVSim/pull/119",target:"_blank",rel:"noopener noreferrer"}},[a._v("updated to newer jar libs"),e("OutboundLink")],1),a._v(" and Java 11 or Java 14 should work fine.")]),a._v(" "),e("h3",{attrs:{id:"an-illegal-reflective-access-operation-has-occurred"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#an-illegal-reflective-access-operation-has-occurred"}},[a._v("#")]),a._v(" An illegal reflective access operation has occurred")]),a._v(" "),e("p",[a._v("This warning can be ignored (it will probably be displayed but the simulation will still work correctly).")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("WARNING: An illegal reflective access operation has occurred\nWARNING: Illegal reflective access by javax.media.j3d.JoglPipeline "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("rsrc:j3dcore.jar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" to method sun.awt.AppContext.getAppContext"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nWARNING: Please consider reporting this to the maintainers of javax.media.j3d.JoglPipeline\nWARNING: Use --illegal-access"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("warn to "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" warnings of further illegal reflective access operations\nWARNING: All illegal access operations will be denied "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" a future release\nInconsistency detected by ld.so: dl-lookup.c: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("112")]),a._v(": check_match: Assertion version-"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("filename "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" NULL "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" _dl_name_match_p "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("version-"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("filename, map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("' failed"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),e("h3",{attrs:{id:"java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[a._v("#")]),a._v(" java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("Exception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" thread "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" java.lang.reflect.InvocationTargetException\nat sun.reflect.NativeMethodAccessorImpl.invoke0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Native Method"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat sun.reflect.NativeMethodAccessorImpl.invoke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("NativeMethodAccessorImpl.java:62"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat sun.reflect.DelegatingMethodAccessorImpl.invoke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DelegatingMethodAccessorImpl.java:43"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.lang.reflect.Method.invoke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Method.java:498"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JarRsrcLoader.java:58"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nCaused by: java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper\nat java.awt.Toolkit.loadAssistiveTechnologies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Toolkit.java:807"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Toolkit.getDefaultToolkit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Toolkit.java:886"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Window.getToolkit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Window.java:1358"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Window.init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Window.java:506"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Window."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Window.java:537"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Frame."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Frame.java:420"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat java.awt.Frame."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Frame.java:385"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat javax.swing.JFrame."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("JFrame.java:189"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat me.drton.jmavsim.Visualizer3D."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Visualizer3D.java:104"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat me.drton.jmavsim.Simulator."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Simulator.java:157"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nat me.drton.jmavsim.Simulator.main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Simulator.java:678"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("If you see this error, try this workaround:")]),a._v(" "),e("p",[a._v("Edit the "),e("strong",[a._v("accessibility.properties")]),a._v(" file:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" gedit /etc/java-8-openjdk/accessibility.properties\n")])])]),e("p",[a._v("and comment out the line indicated below:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#assistive_technologies=org.GNOME.Acessibility.AtkWrapper")]),a._v("\n")])])]),e("p",[a._v("For more info, check "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/9557",target:"_blank",rel:"noopener noreferrer"}},[a._v("this GitHub issue"),e("OutboundLink")],1),a._v(". A contributor found the fix in "),e("a",{attrs:{href:"https://askubuntu.com/questions/695560",target:"_blank",rel:"noopener noreferrer"}},[a._v("askubuntu.com"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"exception-in-thread-main-java-lang-unsupportedclassversionerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exception-in-thread-main-java-lang-unsupportedclassversionerror"}},[a._v("#")]),a._v(' Exception in thread "main" java.lang.UnsupportedClassVersionError')]),a._v(" "),e("p",[a._v("When compiling jMAVsim, you might encounter the following error:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("Exception "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" thread "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" java.lang.UnsupportedClassVersionError: me/drton/jmavsim/Simulator has been compiled by a "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("more")]),a._v(" recent version of the Java Runtime "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("class "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" version "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("59.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", this version of the Java Runtime only recognizes class "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" versions up to "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("58.0")]),a._v("\n")])])]),e("p",[a._v("This error is telling you, you need a more recent version of Java in your environment. Class file version 58 corresponds to jdk14, version 59 to jdk15, version 60 to jdk 16 etc.")]),a._v(" "),e("p",[a._v("To fix it under macOS, we recommend installing OpenJDK through homebrew")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask adoptopenjdk16\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);