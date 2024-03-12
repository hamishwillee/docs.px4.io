(window.webpackJsonp=window.webpackJsonp||[]).push([[1538],{2821:function(e,a,t){"use strict";t.r(a);var s=t(19),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"시스템-전체-재생"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시스템-전체-재생"}},[e._v("#")]),e._v(" 시스템 전체 재생")]),e._v(" "),t("p",[e._v("It is possible to record and replay arbitrary parts of the system based on ORB messages.")]),e._v(" "),t("p",[e._v("Replay is useful to test the effect of different parameter values based on real data, compare different estimators, etc.")]),e._v(" "),t("h2",{attrs:{id:"전제-조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[e._v("#")]),e._v(" 전제 조건")]),e._v(" "),t("p",[e._v("The first step is to identify the module or modules that should be replayed. 그런 다음 이 모듈에 대한 모든 입력, 즉 구독된 ORB 주제를 식별합니다. 시스템 전체 재생의 경우 센서, RC 입력, MAVLink 명령 및 파일 시스템과 같은 모든 하드웨어 입력으로 구성됩니다.")]),e._v(" "),t("p",[e._v("식별된 모든 주제는 최대 속도로 기록되어야 합니다("),t("RouterLink",{attrs:{to:"/ko/dev_log/logging.html"}},[e._v("로깅")]),e._v(" 참조). "),t("code",[e._v("ekf2")]),e._v("의 경우 이는 이미 기록된 주제의 기본 집합에 해당됩니다.")],1),e._v(" "),t("p",[e._v("재생된 모든 주제에는 자동으로 생성된 필드 "),t("code",[e._v("timestamp")]),e._v("인 단일 절대 타임스탬프만 포함되어야 합니다. Should there be more timestamps, they must be relative to the main timestamp. For an example, see "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorCombined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("SensorCombined.msg"),t("OutboundLink")],1),e._v(". 그 이유는 아래에서 설명합니다.")]),e._v(" "),t("h2",{attrs:{id:"사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[e._v("#")]),e._v(" 사용법")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("First, choose the file to replay and build the target (from within the PX4-Autopilot directory):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("absolute_path_to_log_file.ulg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default\n")])])]),t("p",[e._v("This will create the build/make output in a separate build directory "),t("code",[e._v("build/px4_sitl_default_replay")]),e._v(" (so that the parameters don't interfere with normal builds). It's possible to choose any posix SITL build target for replay, since the build system knows through the "),t("code",[e._v("replay")]),e._v(" environment variable that it's in replay mode.")])]),e._v(" "),t("li",[t("p",[e._v("Add ORB publisher rules in the file "),t("code",[e._v("build/px4_sitl_default_replay/rootfs/orb_publisher.rules")]),e._v(". This file defines the modules that are allowed to publish particular messages. 형식은 다음과 같습니다.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("restrict_topics: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("1")]),e._v(">")]),e._v(", "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("topic"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v(", "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("., "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("topicN"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nmodule: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nignore_others: "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("true/false"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("This means that the given list of topics should only be published by "),t("code",[e._v("<module>")]),e._v(" (which is the command name). 다른 모듈에서 이러한 주제에 대한 발행은 자동으로 무시됩니다. If "),t("code",[e._v("ignore_others")]),e._v(" is "),t("code",[e._v("true")]),e._v(", publications to other topics from "),t("code",[e._v("<module>")]),e._v(" are ignored.")]),e._v(" "),t("p",[e._v("재생의 경우 "),t("code",[e._v("재생")]),e._v(" 모듈만 이전에 식별된 주제 목록을 게시할 수 있기를 바랍니다. So, for replaying "),t("code",[e._v("ekf2")]),e._v(", the rules file should look like this:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("restrict_topics: sensor_combined, vehicle_gps_position, vehicle_land_detected\nmodule: replay\nignore_others: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),t("p",[e._v("With this, the modules that usually publish these topics don't need to be disabled for the replay.")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("(Optional)")]),e._v(" Setup parameter overrides (see "),t("a",{attrs:{href:"#overriding-parameters-in-the-original-log"}},[e._v("instructions below")]),e._v(").")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("(Optional)")]),e._v(" Copy a "),t("code",[e._v("dataman")]),e._v(" mission file from the SD card to the build directory. This is only necessary if a mission should be replayed.")])]),e._v(" "),t("li",[t("p",[e._v("재생")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl_default jmavsim\n")])])]),t("p",[e._v("This will automatically open the log file, apply the parameters and start the replay. Once done, it will report the outcome and exit. The newly generated log file can then be analyzed. It can be found in "),t("code",[e._v("rootfs/fs/microsd/log")]),e._v(", in subdirectories organised by date. Replayed log file names will have the "),t("code",[e._v("_replayed")]),e._v(" suffix.")]),e._v(" "),t("p",[e._v("Note that the above command will show the simulator as well, but - depending on what is being replayed - it will not show what's actually going on. It is still possible to connect via QGC and, for example, view the changing attitude during replay.")])]),e._v(" "),t("li",[t("p",[e._v("마지막으로, 일반 빌드 대상이 다시 사용되도록 환경 변수를 설정 해제합니다.")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"overriding-parameters-in-the-original-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overriding-parameters-in-the-original-log"}},[e._v("#")]),e._v(" Overriding Parameters in the Original Log")]),e._v(" "),t("p",[e._v("By default, all parameters from the original log file are applied during a replay. If a parameter changes during recording, it will be changed at the right time during the replay.")]),e._v(" "),t("p",[e._v("Parameters can be overridden during a replay in two ways: "),t("em",[e._v("fixed")]),e._v(" and "),t("em",[e._v("dynamic")]),e._v(". When parameters are overridden, corresponding parameter changes in the log are not applied during replay.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Fixed parameter overrides")]),e._v(" will override parameters from the start of the replay. They are defined in the file "),t("code",[e._v("build/px4_sitl_default_replay/rootfs/replay_params.txt")]),e._v(", where each line should have the format "),t("code",[e._v("<param_name> <value>")]),e._v(". For example:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("EKF2_RNG_NOISE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Dynamic parameter overrides")]),e._v(" will update parameter values at specified times. These parameters will still be initialised to the values in the log or in the fixed overrides. Parameter update events should be defined in "),t("code",[e._v("build/px4_sitl_default_replay/rootfs/replay_params_dynamic.txt")]),e._v(", where each line has the format "),t("code",[e._v("<param_name> <value> <timestamp>")]),e._v(". The timestamp is the time in seconds from the start of the log. For example:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("EKF2_RNG_NOISE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.15")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("23.4")]),e._v("\nEKF2_RNG_NOISE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.05")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("56.7")]),e._v("\nEKF2_RNG_DELAY "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.5")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30.0")]),e._v("\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"중요-참고-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#중요-참고-사항"}},[e._v("#")]),e._v(" 중요 참고 사항")]),e._v(" "),t("ul",[t("li",[e._v("재생 중에 로그 파일의 모든 드롭아웃이 보고됩니다. These have a negative effect on the replay, so care should be taken to avoid dropouts during recording.")]),e._v(" "),t("li",[e._v("It is currently only possible to replay in 'real-time': as fast as the recording was done. 이는 향후 추가할 예정입니다.")]),e._v(" "),t("li",[e._v("타임스탬프가 0인 메시지는 유효하지 않은 것으로 간주되어 재생되지 않습니다.")])]),e._v(" "),t("h2",{attrs:{id:"ekf2-재생"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-재생"}},[e._v("#")]),e._v(" EKF2 재생")]),e._v(" "),t("p",[e._v("이것은 빠른 EKF2 재생을 위한 시스템 전체 재생의 전문화입니다.")]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The recording and replay of flight logs with "),t("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#running-multiple-ekf-instances"}},[e._v("multiple EKF instances")]),e._v(" is not supported. To enable recording for EKF replay you must set the parameters to enable a "),t("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#running-a-single-ekf-instance"}},[e._v("single EKF instance")]),e._v(".")],1)]),e._v(" "),t("p",[e._v("In EKF2 mode, the replay will automatically create the ORB publisher rules described above.")]),e._v(" "),t("p",[e._v("To perform an EKF2 replay:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Record the original log. Optionally set "),t("code",[e._v("SDLOG_MODE")]),e._v(" to "),t("code",[e._v("1")]),e._v(" to log from boot.")])]),e._v(" "),t("li",[t("p",[e._v("In addition to the "),t("code",[e._v("replay")]),e._v(" environment variable, set "),t("code",[e._v("replay_mode")]),e._v(" to "),t("code",[e._v("ekf2")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay_mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("ekf2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("replay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("absolute_path_to_log.ulg"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Run the replay with the "),t("code",[e._v("none")]),e._v(" target:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl none\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Once finished, unset both "),t("code",[e._v("replay")]),e._v(" and "),t("code",[e._v("replay_mode")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("unset")]),e._v(" replay_mode\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"adjusting-ekf2-specific-parameters-for-the-replay"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-ekf2-specific-parameters-for-the-replay"}},[e._v("#")]),e._v(" Adjusting EKF2-specific Parameters for the Replay")]),e._v(" "),t("p",[e._v("First install "),t("code",[e._v("pyulog")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user pyulog\n")])])]),t("p",[e._v("Extract the original log's parameters to "),t("code",[e._v("replay_params.txt")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("ulog_params -i "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$replay")]),e._v('"')]),e._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("' '")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" -e "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'^EKF2'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" build/px4_sitl_default_replay/rootfs/replay_params.txt\n")])])]),t("p",[e._v("Adjust these as desired, and add dynamic parameter overrides in "),t("code",[e._v("replay_params_dynamic.txt")]),e._v(" if necessary.")]),e._v(" "),t("h2",{attrs:{id:"무대-뒤에서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#무대-뒤에서"}},[e._v("#")]),e._v(" 무대 뒤에서")]),e._v(" "),t("p",[e._v("재생은 3가지 구성 요소로 이루어집니다.")]),e._v(" "),t("ul",[t("li",[e._v("A replay module These have a negative effect on replay, so care should be taken to avoid dropouts during recording.")]),e._v(" "),t("li",[e._v("It is currently only possible to replay in 'real-time': as fast as the recording was done.")])]),e._v(" "),t("p",[e._v("The replay module reads the log and publishes the messages at the same speed as they were recorded. 현재 시스템 시간과 일치하도록 각 메시지의 타임스탬프에 상수 오프셋이 추가됩니다(이것이 다른 모든 타임스탬프가 상대적이어야 하는 이유입니다). "),t("code",[e._v("replay tryapplyparams")]),e._v(" 명령은 다른 모든 모듈이 로드되기 전에 실행되고, 로그 및 사용자 설정 매개변수의 매개변수를 적용합니다. 그런 다음, 마지막 명령으로 "),t("code",[e._v("replay trystart")]),e._v("가 매개변수를 다시 적용하고, 실제 재생을 시작합니다. 환경 변수 "),t("code",[e._v("replay")]),e._v("가 설정되지 않은 경우, 두 명령 모두 아무 작업도 수행하지 않습니다.")]),e._v(" "),t("p",[e._v("ORB 게시자 규칙을 사용하면, 위에서 설명한 대로 시스템의 어느 부분을 재생할지 선택할 수 있습니다. POSIX SITL 대상에 대해서만 컴파일됩니다.")]),e._v(" "),t("p",[t("strong",[e._v("시간 처리")]),e._v("는 여전히 "),t("strong",[e._v("개방된 지점")]),e._v("이며 구현되어야 합니다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);