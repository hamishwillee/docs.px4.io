(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{1310:function(a,t,e){a.exports=e.p+"assets/img/jmavsim.c9ff83b2.jpg"},2700:function(a,t,e){"use strict";e.r(t);var s=e(18),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jmavsim-进行-sitl-仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-进行-sitl-仿真"}},[a._v("#")]),a._v(" jMAVSim 进行 SITL 仿真")]),a._v(" "),s("p",[a._v("jMAVSim是一个简单的多旋翼/四旋翼仿真软件，它可以允许你在仿真环境中飞行运行着 PX4 的 "),s("em",[a._v("旋翼")]),a._v(" 无人机。 它很容易设置，可以用来测试您的工具是否可以起飞、飞行、降落、并对各种故障条件 (例如 gps 故障) 做出适当的反应。")]),a._v(" "),s("p",[s("strong",[a._v("支持机型：")])]),a._v(" "),s("ul",[s("li",[a._v("四旋翼")])]),a._v(" "),s("p",[a._v("本问主要演示如何设置 jMAVSim 以连接到 SITL 版本的 PX4 。")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[a._v("jMAVSim can also be used for HITL Simulation ("),s("RouterLink",{attrs:{to:"/zh/simulation/hitl.html#jmavsim_hitl_configuration"}},[a._v("as shown here")]),a._v(").")],1)]),a._v(" "),s("h2",{attrs:{id:"仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仿真环境"}},[a._v("#")]),a._v(" 仿真环境")]),a._v(" "),s("p",[a._v("jMAVSim setup is included in our "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[a._v("standard build instructions")]),a._v(" (for macOS, Ubuntu Linux, Windows).")],1),a._v(" "),s("h2",{attrs:{id:"运行-sitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-sitl"}},[a._v("#")]),a._v(" 运行 SITL")]),a._v(" "),s("p",[a._v("Software in the Loop Simulation runs the complete system on the host machine and simulates the autopilot. It connects via local network to the simulator. The setup looks like this:")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggTFI7XG4gIFNpbXVsYXRvci0tPk1BVkxpbms7XG4gIE1BVkxpbmstLT5TSVRMOyIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9",alt:"Mermaid graph: SITL Simulator"}}),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"把飞机飞上天"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把飞机飞上天"}},[a._v("#")]),a._v(" 把飞机飞上天")]),a._v(" "),s("p",[a._v("该命令最终将得到如下 PX4 控制台显示界面：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),s("p",[a._v("jMAVSim 3d 视图")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" shell id: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("140735313310464")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" task name: px4\n\n______  __   __    ___\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ___ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / /   /   "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/ /  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" V /   / /"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  __/   /   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  / /_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     / /^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("___  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_/\n\nReady to fly.\n\n\npxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("It will also bring up a window showing a 3D view of the "),s("a",{attrs:{href:"https://github.com/PX4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim"),s("OutboundLink")],1),a._v(" simulator:")]),a._v(" "),s("p",[s("img",{attrs:{src:e(1310),alt:"jMAVSim 3d View"}})]),a._v(" "),s("h2",{attrs:{id:"使用-配置选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-配置选项"}},[a._v("#")]),a._v(" 使用/配置选项")]),a._v(" "),s("p",[a._v("The system will start printing status information. You will be able to start flying once you have a position lock (shortly after the console displays the message: "),s("em",[a._v("EKF commencing GPS fusion")]),a._v(").")]),a._v(" "),s("p",[a._v("举个例子，使用如下命令设定无人机起飞点的维度、经度和高度：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" commander takeoff\n")])])]),s("p",[a._v("通过 "),s("em",[a._v("QGroundControl")]),a._v(" 可引入操纵杆或者拇指操纵杆（"),s("RouterLink",{attrs:{to:"/zh/simulation/#joystickgamepad-integration"}},[a._v("如何进行设置看这里")]),a._v("）。")],1),a._v(" "),s("h2",{attrs:{id:"多飞行器仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多飞行器仿真"}},[a._v("#")]),a._v(" 多飞行器仿真")]),a._v(" "),s("h3",{attrs:{id:"指定起飞位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指定起飞位置"}},[a._v("#")]),a._v(" 指定起飞位置")]),a._v(" "),s("p",[a._v("有一个特殊的平台可以模拟一个通过 Wifi 进行连接的无人机。")]),a._v(" "),s("p",[a._v("模拟器会跟真实的该类无人机一样在当地网络中广播自己的位置信息等。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("export PX4_HOME_LAT=28.452386\nexport PX4_HOME_LON=-13.867138\nexport PX4_HOME_ALT=28.5\nmake px4_sitl_default jmavsim\n")])])]),s("h3",{attrs:{id:"更改仿真的时间流速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更改仿真的时间流速"}},[a._v("#")]),a._v(" 更改仿真的时间流速")]),a._v(" "),s("p",[a._v("你可以单独启动 JMAVSim 和 PX4:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("./Tools/jmavsim_run.sh\nmake px4_sitl none\n")])])]),s("p",[a._v("此举可以缩短测试循环时间（重启 jMAVSim 需要耗费非常多的时间）。")]),a._v(" "),s("p",[s("a",{attrs:{id:"joystick"}})]),a._v(" "),s("h3",{attrs:{id:"模拟一个-wifi-无人机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟一个-wifi-无人机"}},[a._v("#")]),a._v(" 模拟一个 Wifi 无人机")]),a._v(" "),s("p",[a._v("JMAVSim 也可用来进行多飞行器仿真： "),s("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_jmavsim.html"}},[a._v("Multi-Vehicle Sim with JMAVSim")]),a._v(".")],1),a._v(" "),s("h3",{attrs:{id:"单独启动-jmavsim-和-px4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单独启动-jmavsim-和-px4"}},[a._v("#")]),a._v(" 单独启动 JMAVSim 和 PX4")]),a._v(" "),s("p",[a._v("如果想扩展或者定制仿真接口，你可以编辑 "),s("strong",[a._v("Tools/jMAVSim")]),a._v(" 文件夹下的文件： 源代码可以从 Github 上的 "),s("a",{attrs:{href:"https://github.com/px4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim 软件仓库"),s("OutboundLink")],1),a._v(" 获取。")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" broadcast jmavsim\n")])])]),s("p",[a._v("在仿真中可以使用跟真实飞机一样的方式实现 "),s("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[a._v("与 ROS 的对接交互")]),a._v(" 。")],1),a._v(" "),s("h3",{attrs:{id:"分别启动-jmavsim-和-px4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分别启动-jmavsim-和-px4"}},[a._v("#")]),a._v(" 分别启动 JMAVSim 和 PX4")]),a._v(" "),s("p",[a._v("此举可以缩短测试循环时间（重启 jMAVSim 需要耗费非常多的时间）。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[init] shell id: 140735313310464\n[init] task name: px4\n\n______  __   __    ___ \n| ___ \\ \\ \\ / /   /   |\n| |_/ /  \\ V /   / /| |\n|  __/   /   \\  / /_| |\n| |     / /^\\ \\ \\___  |\n\\_|     \\/   \\/     |_/\n\nReady to fly.\n\n\npxh>\n")])])]),s("p",[a._v("要使用没有jMAVSim图形界面的仿真，请设置如下环境变量 "),s("code",[a._v("HEADLESS=1")])]),a._v(" "),s("h3",{attrs:{id:"无航向模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无航向模式"}},[a._v("#")]),a._v(" 无航向模式")]),a._v(" "),s("p",[a._v("JMAVSim 也可用来进行多飞行器仿真： "),s("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_jmavsim.html"}},[a._v("Multi-Vehicle Sim with JMAVSim")]),a._v(".")],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HEADLESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl jmavsim\n")])])]),s("h2",{attrs:{id:"扩展和定制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展和定制"}},[a._v("#")]),a._v(" 扩展和定制")]),a._v(" "),s("p",[a._v("JMAVSim can be used for multi-vehicle simulation: "),s("RouterLink",{attrs:{to:"/zh/simulation/multi_vehicle_jmavsim.html"}},[a._v("Multi-Vehicle Sim with JMAVSim")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"与-ros-对接交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-ros-对接交互"}},[a._v("#")]),a._v(" 与 ROS 对接交互")]),a._v(" "),s("p",[a._v("To extend or customize the simulation interface, edit the files in the "),s("strong",[a._v("Tools/jMAVSim")]),a._v(" folder. The code can be accessed through the"),s("a",{attrs:{href:"https://github.com/px4/jMAVSim",target:"_blank",rel:"noopener noreferrer"}},[a._v("jMAVSim repository"),s("OutboundLink")],1),a._v(" on Github.")]),a._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[a._v("注解")]),a._v(" "),s("p",[a._v("The build system enforces the correct submodule to be checked out for all dependencies, including the simulator. It will not overwrite changes in files in the directory, however, when these changes are committed the submodule needs to be registered in the Firmware repo with the new commit hash. To do so, "),s("code",[a._v("git add Tools/jMAVSim")]),a._v(" and commit the change. This will update the GIT hash of the simulator.")])]),a._v(" "),s("h2",{attrs:{id:"重要的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要的文件"}},[a._v("#")]),a._v(" 重要的文件")]),a._v(" "),s("p",[a._v("The simulation can be "),s("RouterLink",{attrs:{to:"/zh/simulation/ros_interface.html"}},[a._v("interfaced to ROS")]),a._v(" the same way as onboard a real vehicle.")],1),a._v(" "),s("h2",{attrs:{id:"值得一看的脚本文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#值得一看的脚本文件"}},[a._v("#")]),a._v(" 值得一看的脚本文件")]),a._v(" "),s("ul",[s("li",[a._v("启动脚本位于 "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/posix-configs/SITL/init",target:"_blank",rel:"noopener noreferrer"}},[a._v("posix-configs/SITL/init"),s("OutboundLink")],1),a._v(" 文件夹下，以 "),s("code",[a._v("rcS_SIM_AIRFRAME")]),a._v(" 的方式进行命名，默认值是 "),s("code",[a._v("rcS_jmavsim_iris")]),a._v(" 。")]),a._v(" "),s("li",[a._v("根文件系统 (相当于 "),s("code",[a._v("/")]),a._v(") 位于生成目录内: "),s("code",[a._v("build/px4_sitl_default/src/firmware/posix/rootfs/")]),a._v(" 。")])]),a._v(" "),s("h2",{attrs:{id:"故障处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[a._v("#")]),a._v(" 故障处理")]),a._v(" "),s("h3",{attrs:{id:"java-long-noclassdeffounderror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-long-noclassdeffounderror"}},[a._v("#")]),a._v(" java.long.NoClassDefFoundError")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0(Native Method)\nat java.base/java.lang.Class.forName(Class.java:374)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:56)\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:466)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:566)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:499)\n... 3 more\nException in thread "main" java.lang.NoClassDefFoundError: javax/vecmath/Tuple3d\nat java.base/java.lang.Class.forName0(Native Method)\nat java.base/java.lang.Class.forName(Class.java:374)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:56)\nCaused by: java.lang.ClassNotFoundException: javax.vecmath.Tuple3d\nat java.base/java.net.URLClassLoader.findClass(URLClassLoader.java:466)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:566)\nat java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:499)\n')])])]),s("p",[a._v("如果遇到类似错误，可以尝试如下解决方法：")]),a._v(" "),s("h3",{attrs:{id:"an-illegal-reflective-access-operation-has-occured"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#an-illegal-reflective-access-operation-has-occured"}},[a._v("#")]),a._v(" An illegal reflective access operation has occured")]),a._v(" "),s("p",[a._v("This warning can be ignored (it will probably be displayed but the simulation will still work correctly).")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("WARNING: An illegal reflective access operation has occurred\nWARNING: Illegal reflective access by javax.media.j3d.JoglPipeline (rsrc:j3dcore.jar) to method sun.awt.AppContext.getAppContext()\nWARNING: Please consider reporting this to the maintainers of javax.media.j3d.JoglPipeline\nWARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations\nWARNING: All illegal access operations will be denied in a future release\nInconsistency detected by ld.so: dl-lookup.c: 112: check_match: Assertion version->filename == NULL || ! _dl_name_match_p (version->filename, map)' failed!\n")])])]),s("h3",{attrs:{id:"java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-awt-awterror-assistive-technology-not-found-org-gnome-accessibility-atkwrapper"}},[a._v("#")]),a._v(" java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" java.lang.reflect.InvocationTargetException\nat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\nat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\nat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\nat java.lang.reflect.Method.invoke(Method.java:498)\nat org.eclipse.jdt.internal.jarinjarloader.JarRsrcLoader.main(JarRsrcLoader.java:58)\nCaused by: java.awt.AWTError: Assistive Technology not found: org.GNOME.Accessibility.AtkWrapper\nat java.awt.Toolkit.loadAssistiveTechnologies(Toolkit.java:807)\nat java.awt.Toolkit.getDefaultToolkit(Toolkit.java:886)\nat java.awt.Window.getToolkit(Window.java:1358)\nat java.awt.Window.init(Window.java:506)\nat java.awt.Window.(Window.java:537)\nat java.awt.Frame.(Frame.java:420)\nat java.awt.Frame.(Frame.java:385)\nat javax.swing.JFrame.(JFrame.java:189)\nat me.drton.jmavsim.Visualizer3D.(Visualizer3D.java:104)\nat me.drton.jmavsim.Simulator.(Simulator.java:157)\nat me.drton.jmavsim.Simulator.main(Simulator.java:678)\n')])])]),s("p",[a._v("并注释下面所指示的一行：")]),a._v(" "),s("p",[a._v("Edit the "),s("strong",[a._v("accessibility.properties")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo gedit /etc/java-8-openjdk/accessibility.properties\n")])])]),s("p",[a._v("and comment out the line indicated below:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("#assistive_technologies=org.GNOME.Acessibility.AtkWrapper\n")])])]),s("p",[a._v("For more info, check "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/9557",target:"_blank",rel:"noopener noreferrer"}},[a._v("this GitHub issue"),s("OutboundLink")],1),a._v(". A contributor found the fix in "),s("a",{attrs:{href:"https://askubuntu.com/questions/695560",target:"_blank",rel:"noopener noreferrer"}},[a._v("askubuntu.com"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("h3",{attrs:{id:"exception-in-thread-main-java-lang-unsupportedclassversionerror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exception-in-thread-main-java-lang-unsupportedclassversionerror"}},[a._v("#")]),a._v(' Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),a._v(" "),s("p",[a._v("When compiling jMAVsim, you might encounter the following error:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Exception in thread "main" java.lang.UnsupportedClassVersionError: me/drton/jmavsim/Simulator has been compiled by a more recent version of the Java Runtime (class file version 59.0), this version of the Java Runtime only recognizes class file versions up to 58.0\n')])])]),s("p",[a._v("This error is telling you, you need a more recent version of Java in your environment. Class file version 58 corresponds to jdk14, version 59 to jdk15, etc.")]),a._v(" "),s("p",[a._v("To fix it under macOS, we recommend installing OpenJDK through homebrew")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --cask adoptopenjdk15\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);