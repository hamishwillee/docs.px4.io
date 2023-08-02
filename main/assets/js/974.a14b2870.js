(window.webpackJsonp=window.webpackJsonp||[]).push([[974],{1868:function(e,t,a){"use strict";a.r(t);var s=a(19),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system-wide-replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-wide-replay"}},[e._v("#")]),e._v(" System-wide Replay")]),e._v(" "),a("p",[e._v("Based on ORB messages, it's possible to record and replay arbitrary parts of the system.")]),e._v(" "),a("p",[e._v("Replay is useful to test the effect of different parameter values based on real data, compare different estimators, etc.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("The first thing that needs to be done is to identify the module or modules that should be replayed.\nThen, identify all the inputs to these modules, i.e. subscribed ORB topics.\nFor system-wide replay, this consists of all hardware input: sensors, RC input, MAVLink commands and file system.")]),e._v(" "),a("p",[e._v("All identified topics need to be logged at full rate (see "),a("RouterLink",{attrs:{to:"/en/dev_log/logging.html"}},[e._v("logging")]),e._v(").\nFor "),a("code",[e._v("ekf2")]),e._v(" this is already the case with the default set of logged topics.")],1),e._v(" "),a("p",[e._v("It is important that all replayed topics contain only a single absolute timestamp, which is the automatically generated field "),a("code",[e._v("timestamp")]),e._v(".\nShould there be more timestamps, then they must be relative with respect to the main timestamp.\nFor an example, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorCombined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("SensorCombined.msg"),a("OutboundLink")],1),e._v(".\nReasons for this are given below.")]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("First, choose the file to replay, and build the target (from within the PX4-Autopilot directory):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("absolute_path_to_log_file.ulg"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default\n")])])]),a("p",[e._v("This will create the output in a separate build directory "),a("code",[e._v("build/px4_sitl_default_replay")]),e._v(" (so that the parameters don't interfere with normal builds).\nIt's possible to choose any posix SITL build target for replay, the build system knows through the "),a("code",[e._v("replay")]),e._v(" environment variable that it's in replay mode.")])]),e._v(" "),a("li",[a("p",[e._v("Add ORB publisher rules file in "),a("code",[e._v("build/px4_sitl_default_replay/tmp/rootfs/orb_publisher.rules")]),e._v(".\nThis file defines which module is allowed to publish which messages.\nIt has the following format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restrict_topics: <topic1>, <topic2>, ..., <topicN>\nmodule: <module>\nignore_others: <true/false>\n")])])]),a("p",[e._v("It means that the given list of topics should only be published by "),a("code",[e._v("<module>")]),e._v(" (which is the command name).\nPublications to any of these topics from another module are silently ignored.\nIf "),a("code",[e._v("ignore_others")]),e._v(" is "),a("code",[e._v("true")]),e._v(", then publications to other topics from "),a("code",[e._v("<module>")]),e._v(" are ignored.")]),e._v(" "),a("p",[e._v("For replay, we only want the "),a("code",[e._v("replay")]),e._v(" module to be able to publish the previously identified list of topics.\nSo for replaying "),a("code",[e._v("ekf2")]),e._v(", the rules file looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restrict_topics: sensor_combined, vehicle_gps_position, vehicle_land_detected\nmodule: replay\nignore_others: true\n")])])]),a("p",[e._v("This allows that the modules, which usually publish these topics, don't need to be disabled for replay.")])]),e._v(" "),a("li",[a("p",[e._v("Optional: setup parameter overrides in the file "),a("code",[e._v("build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt")]),e._v(".\nThis file should contain a list of "),a("code",[e._v("<param_name> <value>")]),e._v(", like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("EKF2_GB_NOISE 0.001\n")])])]),a("p",[e._v("By default, all parameters from the log file are applied.\nWhen a parameter changed during recording, it will be changed as well at the right time during replay.\nA parameter in the "),a("code",[e._v("replay_params.txt")]),e._v(" will override the value and changes to it from the log file will not be applied.")])]),e._v(" "),a("li",[a("p",[e._v("Optional: copy "),a("code",[e._v("dataman")]),e._v(" missions file from the SD card to the build directory.\nOnly necessary if a mission should be replayed.")])]),e._v(" "),a("li",[a("p",[e._v("Start the replay:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default jmavsim\n")])])]),a("p",[e._v("This will automatically open the log file, apply the parameters and start to replay.\nOnce done, it will be reported and the process can be exited.\nThen the newly generated log file can be analyzed, it has "),a("code",[e._v("_replayed")]),e._v(" appended to its file name.")]),e._v(" "),a("p",[e._v("Note that the above command will show the simulator as well, but depending on what is being replayed, it will not show what's actually going on.\nIt's possible to connect via QGC and e.g. view the changing attitude during replay.")])]),e._v(" "),a("li",[a("p",[e._v("Finally, unset the environment variable, so that the normal build targets are used again:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"important-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#important-notes"}},[e._v("#")]),e._v(" Important Notes")]),e._v(" "),a("ul",[a("li",[e._v("During replay, all dropouts in the log file are reported.\nThese have a negative effect on replay and thus it should be taken care that dropouts are avoided during recording.")]),e._v(" "),a("li",[e._v("It is currently only possible to replay in 'real-time', meaning as fast as the recording was done.\nThis is planned to be extended in the future.")]),e._v(" "),a("li",[e._v("A message that has a timestamp of 0 will be considered invalid and not be replayed.")])]),e._v(" "),a("h2",{attrs:{id:"ekf2-replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-replay"}},[e._v("#")]),e._v(" EKF2 Replay")]),e._v(" "),a("p",[e._v("This is a specialization of the system-wide replay for fast EKF2 replay.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The recording and replay of flight logs with "),a("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#running-multiple-ekf-instances"}},[e._v("multiple EKF instances")]),e._v(" is not supported.\nTo enable recording for EKF replay you must set the parameters to enable a "),a("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#running-a-single-ekf-instance"}},[e._v("single EKF instance")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("It will automatically create the ORB publisher rules and works as following:")]),e._v(" "),a("ul",[a("li",[e._v("Optionally set "),a("code",[e._v("SDLOG_MODE")]),e._v(" to 1 to start logging from boot")]),e._v(" "),a("li",[e._v("Record the log")]),e._v(" "),a("li",[e._v("To replay:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export replay_mode=ekf2\nexport replay=<abs_path_to_log.ulg>\nmake px4_sitl none\n")])])]),a("p",[e._v("You can stop it after there's an output like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [replay] Replay done (published 9917 msgs, 2.136 s)\n")])])]),a("p",[e._v("The parameters can be adjusted as well.\nThey can be extracted from the log with the following (install pyulog with "),a("code",[e._v("pip install --user pyulog")]),e._v(" first):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ulog_params -i \"$replay\" -d ' ' | grep -e '^EKF2' > build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt\n")])])]),a("p",[e._v("Then edit the parameters in the file as needed and restart the replay process with "),a("code",[e._v("make px4_sitl none")]),e._v(".\nThis will create a new log file.")]),e._v(" "),a("p",[e._v("The location of the generated log is printed with a message like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("INFO  [logger] Opened log file: rootfs/fs/microsd/log/2017-03-01/13_30_51_replayed.ulg\n")])])]),a("p",[e._v("When finished, use "),a("code",[e._v("unset replay; unset replay_mode")]),e._v(" to exit the replay mode.")]),e._v(" "),a("h2",{attrs:{id:"behind-the-scenes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behind-the-scenes"}},[e._v("#")]),e._v(" Behind the Scenes")]),e._v(" "),a("p",[e._v("Replay is split into 3 components:")]),e._v(" "),a("ul",[a("li",[e._v("a replay module")]),e._v(" "),a("li",[e._v("ORB publisher rules")]),e._v(" "),a("li",[e._v("time handling")])]),e._v(" "),a("p",[e._v("The replay module reads the log and publishes the messages with the same speed as they were recorded.\nA constant offset is added to the timestamp of each message to match the current system time (this is the reason why all other timestamps need to be relative).\nThe command "),a("code",[e._v("replay tryapplyparams")]),e._v(" is executed before all other modules are loaded and applies the parameters from the log and user-set parameters.\nThen as the last command, "),a("code",[e._v("replay trystart")]),e._v(" will again apply the parameters and start the actual replay.\nBoth commands do nothing if the environment variable "),a("code",[e._v("replay")]),e._v(" is not set.")]),e._v(" "),a("p",[e._v("The ORB publisher rules allow to select which part of the system is replayed, as described above. They are only compiled for the posix SITL targets.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("time handling")]),e._v(" is still an "),a("strong",[e._v("open point")]),e._v(", and needs to be implemented.")])])}),[],!1,null,null,null);t.default=l.exports}}]);