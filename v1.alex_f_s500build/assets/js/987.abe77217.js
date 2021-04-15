(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1992:function(e,t,a){"use strict";a.r(t);var s=a(18),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system-wide-replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-wide-replay"}},[e._v("#")]),e._v(" System-wide Replay")]),e._v(" "),a("p",[e._v("Based on ORB messages, it's possible to record and replay arbitrary parts of the system.")]),e._v(" "),a("p",[e._v("Replay is useful to test the effect of different parameter values based on real data, compare different estimators, etc.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("The first thing that needs to be done is to identify the module or modules that should be replayed. Then, identify all the inputs to these modules, i.e. subscribed ORB topics. For system-wide replay, this consists of all hardware input: sensors, RC input, mavlink commands and file system.")]),e._v(" "),a("p",[e._v("All identified topics need to be logged at full rate (see "),a("RouterLink",{attrs:{to:"/ko/dev_log/logging.html"}},[e._v("logging")]),e._v("). For "),a("code",[e._v("ekf2")]),e._v(" this is already the case with the default set of logged topics.")],1),e._v(" "),a("p",[e._v("It is important that all replayed topics contain only a single absolute timestamp, which is the automatically generated field "),a("code",[e._v("timestamp")]),e._v(". Should there be more timestamps, then they must be relative with respect to the main timestamp. For an example, see "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/msg/sensor_combined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("sensor_combined.msg"),a("OutboundLink")],1),e._v(". Reasons for this are given below.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, choose the file to replay, and build the target (from within the Firmware directory): sh export replay=<absolute_path_to_log_file.ulg> make px4_sitl_default This will create the output in a separate build directory")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay_mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ekf2\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("abs_path_to_log.ulg"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl none\n")])])]),a("p",[a("code",[e._v("build/px4_sitl_default_replay")]),e._v(" (so that the parameters don't interfere with normal builds). It's possible to choose any posix SITL build target for replay, the build system knows through the "),a("code",[e._v("replay")]),e._v(" environment variable that it's in replay mode.")])]),e._v(" "),a("li",[a("p",[e._v("Add ORB publisher rules file in "),a("code",[e._v("build/px4_sitl_default_replay/tmp/rootfs/orb_publisher.rules")]),e._v(". This file defines which module is allowed to publish which messages. It has the following format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restrict_topics:\n")])])]),a("p",[e._v("It means that the given list of topics should only be published by "),a("code",[e._v("<module>")]),e._v(" (which is the command name). Publications to any of these topics from another module are silently ignored. If "),a("code",[e._v("ignore_others")]),e._v(" is "),a("code",[e._v("true")]),e._v(", then publications to other topics from "),a("code",[e._v("<module>")]),e._v(" are ignored.")]),e._v(" "),a("p",[e._v("For replay, we only want the "),a("code",[e._v("replay")]),e._v(" module to be able to publish the previously identified list of topics. So for replaying "),a("code",[e._v("ekf2")]),e._v(", the rules file looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restrict_topics: sensor_combined, vehicle_gps_position, vehicle_land_detected\n")])])])])]),e._v(" "),a("p",[e._v("module: replay\nignore_others: true")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("This allows that the modules, which usually publish these topics, don't need to be disabled for replay.\n\n- Optional: setup parameter overrides in the file `build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt`. This file should contain a list of `<param_name> <value>`, like:\n")])])]),a("p",[e._v("EKF2_GB_NOISE 0.001")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("By default, all parameters from the log file are applied. When a parameter changed during recording, it will be changed as well at the right time during replay. A parameter in the `replay_params.txt` will override the value and changes to it from the log file will not be applied.\n- - Optional: copy `dataman` missions file from the SD card to the build directory. Only necessary if a mission should be replayed.\n- Start the replay:\n```sh\nmake px4_sitl_default jmavsim\n")])])]),a("p",[e._v("This will automatically open the log file, apply the parameters and start to replay. Once done, it will be reported and the process can be exited. Then the newly generated log file can be analyzed, it has "),a("code",[e._v("_replayed")]),e._v(" appended to its file name.")]),e._v(" "),a("p",[e._v("Note that the above command will show the simulator as well, but depending on what is being replayed, it will not show what's actually going on. It's possible to connect via QGC and e.g. view the changing attitude during replay.")]),e._v(" "),a("ul",[a("li",[e._v("Finally, unset the environment variable, so that the normal build targets are used again:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"important-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[e._v("#")]),e._v(" Important Notes")]),e._v(" "),a("ul",[a("li",[e._v("During replay, all dropouts in the log file are reported. These have a negative effect on replay and thus it should be taken care that dropouts are avoided during recording.")]),e._v(" "),a("li",[e._v("It is currently only possible to replay in 'real-time', meaning as fast as the recording was done. This is planned to be extended in the future.")]),e._v(" "),a("li",[e._v("A message that has a timestamp of 0 will be considered invalid and not be replayed.")])]),e._v(" "),a("h2",{attrs:{id:"ekf2-replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-replay"}},[e._v("#")]),e._v(" EKF2 Replay")]),e._v(" "),a("p",[e._v("This is a specialization of the system-wide replay for fast EKF2 replay. It will automatically create the ORB publisher rules and works as following:")]),e._v(" "),a("ul",[a("li",[e._v("Optionally set "),a("code",[e._v("SDLOG_MODE")]),e._v(" to 1 to start logging from boot")]),e._v(" "),a("li",[e._v("Record the log")]),e._v(" "),a("li",[e._v("To replay:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ulog_params -i $replay -d ' ' | grep -e '^EKF2' > build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt\n")])])]),a("p",[e._v("You can stop it after there's an output like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [replay] Replay done (published 9917 msgs, 2.136 s)\n")])])]),a("p",[e._v("The parameters can be adjusted as well. They can be extracted from the log with (install pyulog with "),a("code",[e._v("sudo pip install pyulog")]),e._v(" first):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ulog_params -i \"$replay\" -d ' ' | grep -e '^EKF2' > build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt\n")])])]),a("p",[e._v("Then edit the parameters in the file as needed and restart the replay process with "),a("code",[e._v("make px4_sitl none")]),e._v(". This will create a new log file.")]),e._v(" "),a("p",[e._v("The location of the generated log is printed with a message like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [logger] Opened log file: rootfs/fs/microsd/log/2017-03-01/13_30_51_replayed.ulg\n")])])]),a("p",[e._v("When finished, use "),a("code",[e._v("unset replay; unset replay_mode")]),e._v(" to exit the replay mode.")]),e._v(" "),a("h2",{attrs:{id:"behind-the-scenes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behind-the-scenes"}},[e._v("#")]),e._v(" Behind the Scenes")]),e._v(" "),a("p",[e._v("Replay is split into 3 components:")]),e._v(" "),a("ul",[a("li",[e._v("a replay module")]),e._v(" "),a("li",[e._v("ORB publisher rules")]),e._v(" "),a("li",[e._v("time handling")])]),e._v(" "),a("p",[e._v("The replay module reads the log and publishes the messages with the same speed as they were recorded. A constant offset is added to the timestamp of each message to match the current system time (this is the reason why all other timestamps need to be relative). The command "),a("code",[e._v("replay tryapplyparams")]),e._v(" is executed before all other modules are loaded and applies the parameters from the log and user-set parameters. Then as the last command, "),a("code",[e._v("replay trystart")]),e._v(" will again apply the parameters and start the actual replay. Both commands do nothing if the environment variable "),a("code",[e._v("replay")]),e._v(" is not set.")]),e._v(" "),a("p",[e._v("The ORB publisher rules allow to select which part of the system is replayed, as described above. They are only compiled for the posix SITL targets.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("time handling")]),e._v(" is still an "),a("strong",[e._v("open point")]),e._v(", and needs to be implemented.")])])}),[],!1,null,null,null);t.default=l.exports}}]);