(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{1280:function(a,t,e){a.exports=e.p+"assets/img/jmavsim.c9ff83b2.jpg"},2181:function(a,t,e){"use strict";e.r(t);var s=e(18),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jmavsim-with-sitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-with-sitl"}},[a._v("#")]),a._v(" jMAVSim with SITL")]),a._v(" "),s("p",[a._v("jMAVSim is a simple multirotor/Quad simulator that allows you to fly "),s("em",[a._v("copter")]),a._v(" type vehicles running PX4 around a simulated world. It is easy to set up and can be used to test that your vehicle can take off, fly, land, and responds appropriately to various fail conditions (e.g. GPS failure).")]),a._v(" "),s("p",[s("strong",[a._v("Supported Vehicles:")])]),a._v(" "),s("ul",[s("li",[a._v("Quad")])]),a._v(" "),s("p",[a._v("This topic shows how to set up jMAVSim to connect with a SITL version of PX4.")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("Tip")]),a._v(" jMAVSim can also be used for HITL Simulation ("),s("RouterLink",{attrs:{to:"/ko/simulation/hitl.html#using-jmavsim-quadrotor"}},[a._v("as shown here")]),a._v(").")],1)]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[a._v("jMAVSim setup is included in our "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[a._v("standard build instructions")]),a._v(" (for macOS, Ubuntu Linux, Windows).")],1),a._v(" "),s("h2",{attrs:{id:"simulation-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulation-environment"}},[a._v("#")]),a._v(" Simulation Environment")]),a._v(" "),s("p",[a._v("Software in the Loop Simulation runs the complete system on the host machine and simulates the autopilot. It connects via local network to the simulator. The setup looks like this:")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"{% mermaid %} graph LR; Simulator--\x3eMAVLink; MAVLink--\x3eSITL; {% endmermaid %}"}}),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"running-sitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-sitl"}},[a._v("#")]),a._v(" Running SITL")]),a._v(" "),s("p",[a._v("After ensuring that the "),s("RouterLink",{attrs:{to:"/ko/setup/dev_env.html"}},[a._v("simulation prerequisites")]),a._v(" are installed on the system, just launch: The convenience make target will compile the POSIX host build and run the simulation.")],1),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),s("p",[a._v("This will bring up the PX4 shell:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" shell id: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("140735313310464")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" task name: px4\n\n______  __   __    ___ \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ___ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / /   /   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/ /  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" V /   / /"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  __/   /   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  / /_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     / /^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("___  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/\n\nReady to fly.\n\n\npxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("It will also bring up a window showing a 3D view of the "),s("a",{attrs:{href:"https://github.com/PX4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim"),s("OutboundLink")],1),a._v(" simulator:")]),a._v(" "),s("p",[s("img",{attrs:{src:e(1280),alt:"jMAVSim 3d View"}})]),a._v(" "),s("h2",{attrs:{id:"taking-it-to-the-sky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taking-it-to-the-sky"}},[a._v("#")]),a._v(" Taking it to the Sky")]),a._v(" "),s("p",[a._v("The system will start printing status information. You will be able to start flying once you have a position lock (shortly after the console displays the message: "),s("em",[a._v("EKF commencing GPS fusion")]),a._v(").")]),a._v(" "),s("p",[a._v("To takeoff enter the following into the console:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" commander takeoff\n")])])]),s("p",[a._v("You can use "),s("em",[a._v("QGroundControl")]),a._v(" to fly a mission or to connect to a "),s("a",{attrs:{href:"#joystick"}},[a._v("joystick")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"usage-configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-configuration-options"}},[a._v("#")]),a._v(" Usage/Configuration Options")]),a._v(" "),s("h3",{attrs:{id:"set-custom-takeoff-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-custom-takeoff-location"}},[a._v("#")]),a._v(" Set Custom Takeoff Location")]),a._v(" "),s("p",[a._v("The default takeoff location in can be overridden using the environment variables: "),s("code",[a._v("PX4_HOME_LAT")]),a._v(", "),s("code",[a._v("PX4_HOME_LON")]),a._v(", and "),s("code",[a._v("PX4_HOME_ALT")]),a._v(".")]),a._v(" "),s("p",[a._v("For example, to set the latitude, longitude and altitude:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export PX4_HOME_LAT=28.452386\nexport PX4_HOME_LON=-13.867138\nexport PX4_HOME_ALT=28.5\nmake px4_sitl_default jmavsim\n")])])]),s("h3",{attrs:{id:"change-simulation-speed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-simulation-speed"}},[a._v("#")]),a._v(" Change Simulation Speed")]),a._v(" "),s("p",[a._v("The simulation speed can be increased or decreased with respect to realtime using the environment variable "),s("code",[a._v("PX4_SIM_SPEED_FACTOR")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./Tools/jmavsim_run.sh\nmake px4_sitl none\n")])])]),s("p",[a._v("For more information see: "),s("RouterLink",{attrs:{to:"/ko/simulation/#simulation_speed"}},[a._v("Simulation > Run Simulation Faster than Realtime")]),a._v(".")],1),a._v(" "),s("p",[s("a",{attrs:{id:"joystick"}})]),a._v(" "),s("h3",{attrs:{id:"using-a-joystick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-joystick"}},[a._v("#")]),a._v(" Using a Joystick")]),a._v(" "),s("p",[a._v("Joystick and thumb-joystick support are supported through "),s("em",[a._v("QGroundControl")]),a._v(" ("),s("RouterLink",{attrs:{to:"/ko/simulation/#joystickgamepad-integration"}},[a._v("setup instructions here")]),a._v(").")],1),a._v(" "),s("h3",{attrs:{id:"simulating-a-wifi-drone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulating-a-wifi-drone"}},[a._v("#")]),a._v(" Simulating a Wifi Drone")]),a._v(" "),s("p",[a._v("There is a special target to simulate a drone connected via Wifi on the local network:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" broadcast jmavsim\n")])])]),s("p",[a._v("The simulator broadcasts its address on the local network as a real drone would do.")]),a._v(" "),s("h3",{attrs:{id:"start-jmavsim-and-px4-separately"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-jmavsim-and-px4-separately"}},[a._v("#")]),a._v(" Start JMAVSim and PX4 Separately")]),a._v(" "),s("p",[a._v("You can start JMAVSim and PX4 separately:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./Tools/jmavsim_run.sh -l\nmake px4_sitl none\n")])])]),s("p",[a._v("This allows a faster testing cycle (restarting jMAVSim takes significantly more time).")]),a._v(" "),s("h3",{attrs:{id:"headless-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headless-mode"}},[a._v("#")]),a._v(" Headless Mode")]),a._v(" "),s("p",[a._v("To start jMAVSim without the GUI, set the env variable "),s("code",[a._v("HEADLESS=1")]),a._v(" as shown:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HEADLESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl jmavsim\n")])])]),s("h2",{attrs:{id:"multi-vehicle-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-vehicle-simulation"}},[a._v("#")]),a._v(" Multi-Vehicle Simulation")]),a._v(" "),s("p",[a._v("JMAVSim can be used for multi-vehicle simulation: "),s("RouterLink",{attrs:{to:"/ko/simulation/multi_vehicle_jmavsim.html"}},[a._v("Multi-Vehicle Sim with JMAVSim")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"extending-and-customizing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extending-and-customizing"}},[a._v("#")]),a._v(" Extending and Customizing")]),a._v(" "),s("p",[a._v("To extend or customize the simulation interface, edit the files in the "),s("strong",[a._v("Tools/jMAVSim")]),a._v(" folder. The code can be accessed through the"),s("a",{attrs:{href:"https://github.com/px4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim repository"),s("OutboundLink")],1),a._v(" on Github.")]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("Info")]),a._v(" The build system enforces the correct submodule to be checked out for all dependencies, including the simulator. It will not overwrite changes in files in the directory, however, when these changes are committed the submodule needs to be registered in the Firmware repo with the new commit hash. To do so, "),s("code",[a._v("git add Tools/jMAVSim")]),a._v(" and commit the change. This will update the GIT hash of the simulator.")])]),a._v(" "),s("h2",{attrs:{id:"interfacing-to-ros"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interfacing-to-ros"}},[a._v("#")]),a._v(" Interfacing to ROS")]),a._v(" "),s("p",[a._v("The simulation can be "),s("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[a._v("interfaced to ROS")]),a._v(" the same way as onboard a real vehicle.")],1),a._v(" "),s("h2",{attrs:{id:"important-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#important-files"}},[a._v("#")]),a._v(" Important Files")]),a._v(" "),s("ul",[s("li",[a._v("The startup script is in the "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/posix-configs/SITL/init",target:"_blank",rel:"noopener noreferrer"}},[a._v("posix-configs/SITL/init"),s("OutboundLink")],1),a._v(" folder and named "),s("code",[a._v("rcS_SIM_AIRFRAME")]),a._v(", the default is "),s("code",[a._v("rcS_jmavsim_iris")]),a._v(".")]),a._v(" "),s("li",[a._v("The root file system (the equivalent of "),s("code",[a._v("/")]),a._v(" as seen by the) is located inside the build directory: "),s("code",[a._v("build/px4_sitl_default/src/firmware/posix/rootfs/")])])]),a._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[a._v("#")]),a._v(" Troubleshooting")]),a._v(" "),s("h3",{attrs:{id:"java-long-noclassdeffounderror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-long-noclassdeffounderror"}},[a._v("#")]),a._v(" java.long.NoClassDefFoundError")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0(Native Method)\nat java.base/java.lang.Class.forName(Class.java:374)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:56)\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:466)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:566)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:499)\n... 3 more\nException in thread "main" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0(Native Method)\nat java.base/java.lang.Class.forName(Class.java:374)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:56)\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:466)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:566)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:499)\n')])])]),s("p",[a._v("This error should no longer occur once the jMAVSim submodule is "),s("a",{attrs:{href:"https://github.com/PX4/jMAVSim/pull/119",target:"_blank",rel:"noopener noreferrer"}},[a._v("updated to newer jar libs"),s("OutboundLink")],1),a._v(" and Java 11 or Java 14 should work fine.")]),a._v(" "),s("h3",{attrs:{id:"an-illegal-reflective-access-operation-has-occured"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-illegal-reflective-access-operation-has-occured"}},[a._v("#")]),a._v(" An illegal reflective access operation has occured")]),a._v(" "),s("p",[a._v("This warning can be ignored (it will probably be displayed but the simulation will still work correctly).")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("WARNING: An illegal reflective access operation has occurred\nWARNING: Illegal reflective access by javax.media.j3d.JoglPipeline (rsrc:j3dcore.jar) to method sun.awt.AppContext.getAppContext()\nWARNING: Please consider reporting this to the maintainers of javax.media.j3d.JoglPipeline\nWARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations\nWARNING: All illegal access operations will be denied in a future release\nInconsistency detected by ld.so: dl-lookup.c: 112: check_match: Assertion version->filename == NULL || ! _dl_name_match_p (version->filename, map)' failed!\n")])])]),s("h3",{attrs:{id:"java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[a._v("#")]),a._v(" java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" java.lang.reflect.InvocationTargetException\nat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\nat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\nat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\nat java.lang.reflect.Method.invoke(Method.java:498)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:58)\nCaused by: java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper\nat java.awt.Toolkit.loadAssistiveTechnologies(Toolkit.java:807)\nat java.awt.Toolkit.getDefaultToolkit(Toolkit.java:886)\nat java.awt.Window.getToolkit(Window.java:1358)\nat java.awt.Window.init(Window.java:506)\nat java.awt.Window.(Window.java:537)\nat java.awt.Frame.(Frame.java:420)\nat java.awt.Frame.(Frame.java:385)\nat javax.swing.JFrame.(JFrame.java:189)\nat me.drton.jmavsim.Visualizer3D.(Visualizer3D.java:104)\nat me.drton.jmavsim.Simulator.(Simulator.java:157)\nat me.drton.jmavsim.Simulator.main(Simulator.java:678)\n')])])]),s("p",[a._v("If you see this error, try this workaround:")]),a._v(" "),s("p",[a._v("Edit the "),s("strong",[a._v("accessibility.properties")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo gedit /etc/java-8-openjdk/accessibility.properties\n")])])]),s("p",[a._v("and comment out the line indicated below:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#assistive_technologies=org.GNOME.Acessibility.AtkWrapper\n")])])]),s("p",[a._v("For more info check "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/9557",target:"_blank",rel:"noopener noreferrer"}},[a._v("this GitHub issue"),s("OutboundLink")],1),a._v(". The fix was found in "),s("a",{attrs:{href:"https://askubuntu.com/questions/695560",target:"_blank",rel:"noopener noreferrer"}},[a._v("askubuntu.com"),s("OutboundLink")],1),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);