(window.webpackJsonp=window.webpackJsonp||[]).push([[822],{1609:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-startup"}},[e._v("#")]),e._v(" System Startup")]),e._v(" "),a("p",[e._v("The PX4 startup is controlled by shell scripts.\nOn NuttX they reside in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),e._v(" folder - some of these are also used on Posix (Linux/MacOS).\nThe scripts that are only used on Posix are located in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROMFS/px4fmu_common/init.d-posix"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("All files starting with a number and underscore (e.g. "),a("code",[e._v("10000_airplane")]),e._v(") are predefined airframe configurations.\nThey are exported at build-time into an "),a("code",[e._v("airframes.xml")]),e._v(" file which is parsed by "),a("a",{attrs:{href:"http://qgroundcontrol.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),a("OutboundLink")],1),e._v(" for the airframe selection UI.\nAdding a new configuration is covered "),a("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("The remaining files are part of the general startup logic.\nThe first executed file is the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/rcS",target:"_blank",rel:"noopener noreferrer"}},[e._v("init.d/rcS"),a("OutboundLink")],1),e._v(" script (or "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[e._v("init.d-posix/rcS"),a("OutboundLink")],1),e._v(" on Posix), which calls all other scripts.")]),e._v(" "),a("p",[e._v("The following sections are split according to the operating system that PX4 runs on.")]),e._v(" "),a("h2",{attrs:{id:"posix-linux-macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#posix-linux-macos"}},[e._v("#")]),e._v(" Posix (Linux/MacOS)")]),e._v(" "),a("p",[e._v("On Posix, the system shell is used as script interpreter (e.g. /bin/sh, being symlinked to dash on Ubuntu).\nFor that to work, a few things are required:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("PX4 modules need to look like individual executables to the system. This is done via symbolic links.\nFor each module a symbolic link "),a("code",[e._v("px4-<module> -> px4")]),e._v(" is created in the "),a("code",[e._v("bin")]),e._v(" directory of the build folder.\nWhen executed, the binary path is checked ("),a("code",[e._v("argv[0]")]),e._v("), and if it is a module (starts with "),a("code",[e._v("px4-")]),e._v("), it sends the command to the main px4 instance (see below).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("px4-")]),e._v(" prefix is used to avoid conflicts with system commands (e.g. "),a("code",[e._v("shutdown")]),e._v("), and it also allows for simple tab completion by typing "),a("code",[e._v("px4-<TAB>")]),e._v(".")])])]),e._v(" "),a("li",[a("p",[e._v("The shell needs to know where to find the symbolic links.\nFor that the "),a("code",[e._v("bin")]),e._v(" directory with the symbolic links is added to the "),a("code",[e._v("PATH")]),e._v(" variable right before executing the startup scripts.")])]),e._v(" "),a("li",[a("p",[e._v("The shell starts each module as a new (client) process.\nEach client process needs to communicate with the main instance of px4 (the server), where the actual modules are running as threads.\nThis is done through a "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("UNIX socket"),a("OutboundLink")],1),e._v(".\nThe server listens on a socket, to which clients can connect and send a command.\nThe server then sends the output and return code back to the client.")])]),e._v(" "),a("li",[a("p",[e._v("The startup scripts call the module directly, e.g. "),a("code",[e._v("commander start")]),e._v(", rather than using the "),a("code",[e._v("px4-")]),e._v(" prefix. This works via aliases: for each module an alias in the form of "),a("code",[e._v("alias <module>=px4-<module>")]),e._v(" is created in the file "),a("code",[e._v("bin/px4-alias.sh")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("The "),a("code",[e._v("rcS")]),e._v(" script is executed from the main px4 instance.\nIt does not start any modules, but first updates the "),a("code",[e._v("PATH")]),e._v(" variable and then simply runs a shell with the "),a("code",[e._v("rcS")]),e._v(" file as argument.")])]),e._v(" "),a("li",[a("p",[e._v("In addition to that, multiple server instances can be started for multi-vehicle simulations.\nA client selects the instance via "),a("code",[e._v("--instance")]),e._v(".\nThe instance is available in the script via "),a("code",[e._v("$px4_instance")]),e._v(" variable.")])])]),e._v(" "),a("p",[e._v("The modules can be executed from any terminal when PX4 is already running on a system. For example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd <PX4-Autopilot>/build/px4_sitl_default/bin\n./px4-commander takeoff\n./px4-listener sensor_accel\n")])])]),a("h3",{attrs:{id:"dynamic-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-modules"}},[e._v("#")]),e._v(" Dynamic modules")]),e._v(" "),a("p",[e._v("Normally, all modules are compiled into a single PX4 executable.\nHowever, on Posix, there's the option of compiling a module into a separate file, which can be loaded into PX4 using the "),a("code",[e._v("dyn")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dyn ./test.px4mod\n")])])]),a("h2",{attrs:{id:"nuttx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[e._v("#")]),e._v(" NuttX")]),e._v(" "),a("p",[e._v("NuttX has an integrated shell interpreter ("),a("a",{attrs:{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=139629410",target:"_blank",rel:"noopener noreferrer"}},[e._v("NuttShell (NSH)"),a("OutboundLink")],1),e._v("), and thus scripts can be executed directly.")]),e._v(" "),a("h3",{attrs:{id:"debugging-the-system-boot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-the-system-boot"}},[e._v("#")]),e._v(" Debugging the System Boot")]),e._v(" "),a("p",[e._v("A failure of a driver of software component will not lead to an aborted boot.\nThis is controlled via "),a("code",[e._v("set +e")]),e._v(" in the startup script.")]),e._v(" "),a("p",[e._v("The boot sequence can be debugged by connecting the "),a("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[e._v("system console")]),e._v(" and power-cycling the board.\nThe resulting boot log has detailed information about the boot sequence and should contain hints why the boot aborted.")],1),e._v(" "),a("h4",{attrs:{id:"common-boot-failure-causes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-boot-failure-causes"}},[e._v("#")]),e._v(" Common boot failure causes")]),e._v(" "),a("ul",[a("li",[e._v("For custom applications: The system was out of RAM. Run the "),a("code",[e._v("free")]),e._v(" command to see the amount of free RAM.")]),e._v(" "),a("li",[e._v("A software fault or assertion resulting in a stack trace")])]),e._v(" "),a("h3",{attrs:{id:"replacing-the-system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacing-the-system-startup"}},[e._v("#")]),e._v(" Replacing the System Startup")]),e._v(" "),a("p",[e._v("In most cases customizing the default boot is the better approach, which is documented below. If the complete boot should be replaced, create a file "),a("code",[e._v("/fs/microsd/etc/rc.txt")]),e._v(", which is located in the "),a("code",[e._v("etc")]),e._v(" folder on the microSD card. If this file is present nothing in the system will be auto-started.")]),e._v(" "),a("h3",{attrs:{id:"customizing-the-system-startup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-system-startup"}},[e._v("#")]),e._v(" Customizing the System Startup")]),e._v(" "),a("p",[e._v("The best way to customize the system startup is to introduce a "),a("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[e._v("new airframe configuration")]),e._v(".\nIf only tweaks are wanted (like starting one more application or just using a different mixer) special hooks in the startup can be used.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The system boot files are UNIX FILES which require UNIX LINE ENDINGS. If editing on Windows use a suitable editor.")])]),e._v(" "),a("p",[e._v("There are three main hooks. Note that the root folder of the microsd card is identified by the path "),a("code",[e._v("/fs/microsd")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("/fs/microsd/etc/config.txt")]),e._v(" "),a("li",[e._v("/fs/microsd/etc/extras.txt")]),e._v(" "),a("li",[e._v("/fs/microsd/etc/mixers/NAME_OF_MIXER")])]),e._v(" "),a("h4",{attrs:{id:"customizing-the-configuration-config-txt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-configuration-config-txt"}},[e._v("#")]),e._v(" Customizing the Configuration (config.txt)")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("config.txt")]),e._v(" file can be used to modify shell variables.\nIt is loaded after the main system has been configured and "),a("em",[e._v("before")]),e._v(" it is booted.")]),e._v(" "),a("h4",{attrs:{id:"starting-additional-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-additional-applications"}},[e._v("#")]),e._v(" Starting additional applications")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("extras.txt")]),e._v(" can be used to start additional applications after the main system boot.\nTypically these would be payload controllers or similar optional custom components.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Calling an unknown command in system boot files may result in boot failure.\nTypically the system does not stream mavlink messages after boot failure, in this case check the error messages that are printed on the system console.")])]),e._v(" "),a("p",[e._v("The following example shows how to start custom applications:")]),e._v(" "),a("ul",[a("li",[e._v("Create a file on the SD card "),a("code",[e._v("etc/extras.txt")]),e._v(" with this content:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("custom_app start\n")])])])]),e._v(" "),a("li",[e._v("A command can be made optional by gating it with the "),a("code",[e._v("set +e")]),e._v(" and "),a("code",[e._v("set -e")]),e._v(" commands:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set +e\noptional_app start      # Will not result in boot failure if optional_app is unknown or fails\nset -e\n\nmandatory_app start     # Will abort boot if mandatory_app is unknown or fails\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"starting-a-custom-mixer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-custom-mixer"}},[e._v("#")]),e._v(" Starting a custom mixer")]),e._v(" "),a("p",[e._v("By default the system loads the mixer from "),a("code",[e._v("/etc/mixers")]),e._v(".\nIf a file with the same name exists in "),a("code",[e._v("/fs/microsd/etc/mixers")]),e._v(" this file will be loaded instead.\nThis allows to customize the mixer file without the need to recompile the Firmware.")]),e._v(" "),a("h5",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("The following example shows how to add a custom aux mixer:")]),e._v(" "),a("ul",[a("li",[e._v("Create a file on the SD card, "),a("code",[e._v("etc/mixers/gimbal.aux.mix")]),e._v(" with your mixer content.")]),e._v(" "),a("li",[e._v("Then to use it, create an additional file "),a("code",[e._v("etc/config.txt")]),e._v(" with this content:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set MIXER_AUX gimbal\nset PWM_AUX_OUT 1234\nset PWM_AUX_DISARMED 1500\nset PWM_AUX_MIN 1000\nset PWM_AUX_MAX 2000\nset PWM_AUX_RATE 50\n")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);