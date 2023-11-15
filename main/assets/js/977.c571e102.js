(window.webpackJsonp=window.webpackJsonp||[]).push([[977],{1866:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-startup"}},[t._v("#")]),t._v(" System Startup")]),t._v(" "),a("p",[t._v("The PX4 startup is controlled by shell scripts.\nOn NuttX they reside in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(" folder - some of these are also used on Posix (Linux/MacOS).\nThe scripts that are only used on Posix are located in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("All files starting with a number and underscore (e.g. "),a("code",[t._v("10000_airplane")]),t._v(") are predefined airframe configurations.\nThey are exported at build-time into an "),a("code",[t._v("airframes.xml")]),t._v(" file which is parsed by "),a("a",{attrs:{href:"http://qgroundcontrol.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v(" for the airframe selection UI.\nAdding a new configuration is covered "),a("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("p",[t._v("The remaining files are part of the general startup logic.\nThe first executed file is the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/rcS"),a("OutboundLink")],1),t._v(" script (or "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d-posix/rcS"),a("OutboundLink")],1),t._v(" on Posix), which calls all other scripts.")]),t._v(" "),a("p",[t._v("The following sections are split according to the operating system that PX4 runs on.")]),t._v(" "),a("h2",{attrs:{id:"posix-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#posix-linux-macos"}},[t._v("#")]),t._v(" Posix (Linux/MacOS)")]),t._v(" "),a("p",[t._v("On Posix, the system shell is used as script interpreter (e.g. /bin/sh, being symlinked to dash on Ubuntu).\nFor that to work, a few things are required:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("PX4 modules need to look like individual executables to the system. This is done via symbolic links.\nFor each module a symbolic link "),a("code",[t._v("px4-<module> -> px4")]),t._v(" is created in the "),a("code",[t._v("bin")]),t._v(" directory of the build folder.\nWhen executed, the binary path is checked ("),a("code",[t._v("argv[0]")]),t._v("), and if it is a module (starts with "),a("code",[t._v("px4-")]),t._v("), it sends the command to the main px4 instance (see below).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("px4-")]),t._v(" prefix is used to avoid conflicts with system commands (e.g. "),a("code",[t._v("shutdown")]),t._v("), and it also allows for simple tab completion by typing "),a("code",[t._v("px4-<TAB>")]),t._v(".")])])]),t._v(" "),a("li",[a("p",[t._v("The shell needs to know where to find the symbolic links.\nFor that the "),a("code",[t._v("bin")]),t._v(" directory with the symbolic links is added to the "),a("code",[t._v("PATH")]),t._v(" variable right before executing the startup scripts.")])]),t._v(" "),a("li",[a("p",[t._v("The shell starts each module as a new (client) process.\nEach client process needs to communicate with the main instance of px4 (the server), where the actual modules are running as threads.\nThis is done through a "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UNIX socket"),a("OutboundLink")],1),t._v(".\nThe server listens on a socket, to which clients can connect and send a command.\nThe server then sends the output and return code back to the client.")])]),t._v(" "),a("li",[a("p",[t._v("The startup scripts call the module directly, e.g. "),a("code",[t._v("commander start")]),t._v(", rather than using the "),a("code",[t._v("px4-")]),t._v(" prefix. This works via aliases: for each module an alias in the form of "),a("code",[t._v("alias <module>=px4-<module>")]),t._v(" is created in the file "),a("code",[t._v("bin/px4-alias.sh")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("rcS")]),t._v(" script is executed from the main px4 instance.\nIt does not start any modules, but first updates the "),a("code",[t._v("PATH")]),t._v(" variable and then simply runs a shell with the "),a("code",[t._v("rcS")]),t._v(" file as argument.")])]),t._v(" "),a("li",[a("p",[t._v("In addition to that, multiple server instances can be started for multi-vehicle simulations.\nA client selects the instance via "),a("code",[t._v("--instance")]),t._v(".\nThe instance is available in the script via "),a("code",[t._v("$px4_instance")]),t._v(" variable.")])])]),t._v(" "),a("p",[t._v("The modules can be executed from any terminal when PX4 is already running on a system. For example:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PX4-Autopilot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/build/px4_sitl_default/bin\n./px4-commander takeoff\n./px4-listener sensor_accel\n")])])]),a("h3",{attrs:{id:"dynamic-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-modules"}},[t._v("#")]),t._v(" Dynamic Modules")]),t._v(" "),a("p",[t._v("Normally, all modules are compiled into a single PX4 executable.\nHowever, on Posix, there's the option of compiling a module into a separate file, which can be loaded into PX4 using the "),a("code",[t._v("dyn")]),t._v(" command.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("dyn ./test.px4mod\n")])])]),a("h2",{attrs:{id:"nuttx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),a("p",[t._v("NuttX has an integrated shell interpreter ("),a("a",{attrs:{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=139629410",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttShell (NSH)"),a("OutboundLink")],1),t._v("), and thus scripts can be executed directly.")]),t._v(" "),a("h3",{attrs:{id:"debugging-the-system-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-the-system-boot"}},[t._v("#")]),t._v(" Debugging the System Boot")]),t._v(" "),a("p",[t._v("A failure of a driver of software component will not lead to an aborted boot.\nThis is controlled via "),a("code",[t._v("set +e")]),t._v(" in the startup script.")]),t._v(" "),a("p",[t._v("The boot sequence can be debugged by connecting the "),a("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("system console")]),t._v(" and power-cycling the board.\nThe resulting boot log has detailed information about the boot sequence and should contain hints why the boot aborted.")],1),t._v(" "),a("h4",{attrs:{id:"common-boot-failure-causes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-boot-failure-causes"}},[t._v("#")]),t._v(" Common boot failure causes")]),t._v(" "),a("ul",[a("li",[t._v("For custom applications: The system was out of RAM. Run the "),a("code",[t._v("free")]),t._v(" command to see the amount of free RAM.")]),t._v(" "),a("li",[t._v("A software fault or assertion resulting in a stack trace")])]),t._v(" "),a("h3",{attrs:{id:"replacing-the-system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacing-the-system-startup"}},[t._v("#")]),t._v(" Replacing the System Startup")]),t._v(" "),a("p",[t._v("The whole boot can be replaced by creating a file "),a("code",[t._v("/etc/rc.txt")]),t._v(" on the microSD card with a new configuration (nothing in the old configuration will be auto-started, and if the file is empty, nothing at all will be started).")]),t._v(" "),a("p",[t._v("Customizing the default boot is almost always a better approach.\nThis is documented below.")]),t._v(" "),a("h3",{attrs:{id:"customizing-the-system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-system-startup"}},[t._v("#")]),t._v(" Customizing the System Startup")]),t._v(" "),a("p",[t._v("The best way to customize the system startup is to introduce a "),a("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[t._v("new frame configuration")]),t._v(".\nThe frame configuration file can be included in the firmware or on an SD Card.")],1),t._v(" "),a("p",[t._v('If you only need to "tweak" the existing configuration, such as starting one more application or setting the value of a few parameters, you can specify these by creating two files in the '),a("code",[t._v("/etc/")]),t._v(" directory of the SD Card:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#customizing-the-configuration-config-txt"}},[t._v("/etc/config.txt")]),t._v(": modify parameter values")]),t._v(" "),a("li",[a("a",{attrs:{href:"#starting-additional-applications-extras-txt"}},[t._v("/etc/extras.txt")]),t._v(": start applications")])]),t._v(" "),a("p",[t._v("The files are described below.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The system boot files are UNIX FILES which require UNIX LINE ENDINGS.\nIf editing on Windows use a suitable editor.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("These files are referenced in PX4 code as "),a("code",[t._v("/fs/microsd/etc/config.txt")]),t._v(" and "),a("code",[t._v("/fs/microsd/etc/extras.txt")]),t._v(", where the root folder of the microsd card is identified by the path "),a("code",[t._v("/fs/microsd")]),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"customizing-the-configuration-config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-configuration-config-txt"}},[t._v("#")]),t._v(" Customizing the Configuration (config.txt)")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("config.txt")]),t._v(" file can be used to modify parameters.\nIt is loaded after the main system has been configured and "),a("em",[t._v("before")]),t._v(" it is booted.")]),t._v(" "),a("p",[t._v("For example, you could create a file on the SD card, "),a("code",[t._v("etc/config.txt")]),t._v(" with that sets parameter values as shown:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("param set-default PWM_MAIN_DIS3 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\nparam set-default PWM_MAIN_MIN3 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1120")]),t._v("\n")])])]),a("h4",{attrs:{id:"starting-additional-applications-extras-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-additional-applications-extras-txt"}},[t._v("#")]),t._v(" Starting Additional Applications (extras.txt)")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("extras.txt")]),t._v(" can be used to start additional applications after the main system boot.\nTypically these would be payload controllers or similar optional custom components.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Calling an unknown command in system boot files may result in boot failure.\nTypically the system does not stream mavlink messages after boot failure, in this case check the error messages that are printed on the system console.")])]),t._v(" "),a("p",[t._v("The following example shows how to start custom applications:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create a file on the SD card "),a("code",[t._v("etc/extras.txt")]),t._v(" with this content:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("custom_app start\n")])])])]),t._v(" "),a("li",[a("p",[t._v("A command can be made optional by gating it with the "),a("code",[t._v("set +e")]),t._v(" and "),a("code",[t._v("set -e")]),t._v(" commands:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" +e\noptional_app start      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Will not result in boot failure if optional_app is unknown or fails")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\nmandatory_app start     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Will abort boot if mandatory_app is unknown or fails")]),t._v("\n")])])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);