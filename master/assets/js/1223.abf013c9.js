(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{2290:function(a,e,t){"use strict";t.r(e);var s=t(19),_=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"시스템-전체-재생"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시스템-전체-재생"}},[a._v("#")]),a._v(" 시스템 전체 재생")]),a._v(" "),t("p",[a._v("ORB 메시지를 기반으로 시스템의 일정 부분을 기록하고 재생할 수 있습니다.")]),a._v(" "),t("p",[a._v("재생은 실제 데이터를 기반으로 다른 매개변수의 효과를 테스트하고 다른 추정기 비교에 유용합니다.")]),a._v(" "),t("h2",{attrs:{id:"전제-조건"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[a._v("#")]),a._v(" 전제 조건")]),a._v(" "),t("p",[a._v("가장 먼저 해야 할 일은 재생 모듈을 식별하는 것입니다. 그런 다음 이 모듈에 대한 모든 입력, 즉 구독된 ORB 주제를 식별합니다. 시스템 전체 재생의 경우 센서, RC 입력, MAVLink 명령 및 파일 시스템과 같은 모든 하드웨어 입력으로 구성됩니다.")]),a._v(" "),t("p",[a._v("식별된 모든 주제는 최대 속도로 기록되어야 합니다("),t("RouterLink",{attrs:{to:"/ko/dev_log/logging.html"}},[a._v("로깅")]),a._v(" 참조). "),t("code",[a._v("ekf2")]),a._v("의 경우 이는 이미 기록된 주제의 기본 집합에 해당됩니다.")],1),a._v(" "),t("p",[a._v("재생된 모든 주제에는 자동으로 생성된 필드 "),t("code",[a._v("timestamp")]),a._v("인 단일 절대 타임스탬프만 포함되어야 합니다. 타임스탬프가 더 있는 경우 기본 타임스탬프와 관련하여 상대적이어야 합니다. 예는 "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/sensor_combined.msg",target:"_blank",rel:"noopener noreferrer"}},[a._v("sensor_combined.msg"),t("OutboundLink")],1),a._v("를 참고하십시오. 그 이유는 아래에서 설명합니다.")]),a._v(" "),t("h2",{attrs:{id:"사용법"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("먼저 재생할 파일을 선택하고 대상을 빌드합니다(PX4-Autopilot 디렉토리 내에서).")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("replay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("absolute_path_to_log_file.ulg"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default\n")])])]),t("p",[a._v("이것은 별도의 빌드 디렉토리에 출력을 생성합니다. "),t("code",[a._v("build/px4_sitl_default_replay")]),a._v("(매개변수가 일반 빌드를 방해하지 않도록). 재생을 위하여 posix SITL 빌드 대상을 선택할 수 있으며, 빌드 시스템은 "),t("code",[a._v("재생")]),a._v(" 환경변수로 재생 모드임을 알 수 있습니다.")])]),a._v(" "),t("li",[t("p",[a._v("ORB 게시자 규칙 파일을 "),t("code",[a._v("build/px4_sitl_default_replay/tmp/rootfs/orb_publisher.rules")]),a._v("에 추가합니다. 이 파일은 어떤 모듈이 어떤 메시지를 게시하는 지를 정의합니다. 형식은 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("restrict_topics: <topic1>, <topic2>, ..., <topicN>\nmodule: <module>\nignore_others: <true/false>\n")])])]),t("p",[a._v("주어진 주제 목록은 "),t("code",[a._v("<module>")]),a._v("(명령 이름)으로만 게시되는 것을 의미합니다. 다른 모듈에서 이러한 주제에 대한 발행은 자동으로 무시됩니다. "),t("code",[a._v("ignore_others")]),a._v("가 "),t("code",[a._v("true")]),a._v("이면, "),t("code",[a._v("<module>")]),a._v("의 다른 주제에 대한 발행은 무시됩니다.")]),a._v(" "),t("p",[a._v("재생의 경우 "),t("code",[a._v("재생")]),a._v(" 모듈만 이전에 식별된 주제 목록을 게시할 수 있기를 바랍니다. 따라서, "),t("code",[a._v("ekf2")]),a._v("를 재생하는 경우 규칙 파일은 다음과 같습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("restrict_topics: sensor_combined, vehicle_gps_position, vehicle_land_detected\nmodule: replay\nignore_others: true\n")])])]),t("p",[a._v("이렇게 하면 이러한 주제를 게시하는 모듈을 재생을 위하여 비활성화할 필요가 없습니다.")])]),a._v(" "),t("li",[t("p",[a._v("선택 사항: "),t("code",[a._v("build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt")]),a._v(" 파일에서 설정 매개변수를 재정의합니다. 이 파일에는 다음과 같은 "),t("code",[a._v("<param_name> <value>")]),a._v(" 목록이 포함되어야 합니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("EKF2_GB_NOISE 0.001\n")])])]),t("p",[a._v("기본적으로, 로그 파일의 모든 매개변수가 적용됩니다. 녹음 중에 파라미터가 변경되면, 재생 중에도 적절한 시점에 변경됩니다. "),t("code",[a._v("replay_params.txt")]),a._v("의 매개변수가 값을 재정의하고, 로그 파일의 변경사항이 적용되지 않습니다.")])]),a._v(" "),t("li",[t("p",[a._v("선택 사항: SD 카드에서 빌드 디렉토리로 "),t("code",[a._v("dataman")]),a._v(" 미션 파일을 복사합니다. 임무를 다시 플레이해야 하는 경우에만 필요합니다.")])]),a._v(" "),t("li",[t("p",[a._v("재생")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n")])])]),t("p",[a._v("그러면, 자동으로 로그 파일이 열리고 매개변수가 적용되고 재생이 시작됩니다. 완료되면, 결과를 보고하고 프로세스를 종료할 수 있습니다. 그런 다음, 새로 생성된 로그 파일을 분석할 수 있으며, 파일 이름에 "),t("code",[a._v("_replayed")]),a._v("가 추가됩니다.")]),a._v(" "),t("p",[a._v("위의 명령은 시뮬레이터도 표시하지만, 재생 중인 항목에 따라 실제로 진행 중인 작업은 표시되지 않습니다. QGC를 통해 연결하고 리플레이 중 태도 변화를 조회할 수 있습니다.")])]),a._v(" "),t("li",[t("p",[a._v("마지막으로, 일반 빌드 대상이 다시 사용되도록 환경 변수를 설정 해제합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("unset")]),a._v(" replay\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"중요-참고-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#중요-참고-사항"}},[a._v("#")]),a._v(" 중요 참고 사항")]),a._v(" "),t("ul",[t("li",[a._v("재생 중에 로그 파일의 모든 드롭아웃이 보고됩니다. 이는 재생에 부정적인 영향을 미치므로, 녹음 중에 드롭아웃이 발생하지 않도록 주의하여야합니다.")]),a._v(" "),t("li",[a._v("현재로서는 '실시간'으로만 재생이 가능합니다. 이는 향후 추가할 예정입니다.")]),a._v(" "),t("li",[a._v("타임스탬프가 0인 메시지는 유효하지 않은 것으로 간주되어 재생되지 않습니다.")])]),a._v(" "),t("h2",{attrs:{id:"ekf2-재생"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ekf2-재생"}},[a._v("#")]),a._v(" EKF2 재생")]),a._v(" "),t("p",[a._v("이것은 빠른 EKF2 재생을 위한 시스템 전체 재생의 전문화입니다. 자동으로 ORB 게시자 규칙을 만들고, 다음과 같이 작동합니다.")]),a._v(" "),t("ul",[t("li",[a._v("선택적으로 "),t("code",[a._v("SDLOG_MODE")]),a._v("를 1로 설정하여 부팅에서 로깅을 시작합니다.")]),a._v(" "),t("li",[a._v("로그를 기록합니다.")]),a._v(" "),t("li",[a._v("재생하려면:")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("export replay_mode=ekf2\nexport replay=<abs_path_to_log.ulg>\nmake px4_sitl none\n")])])]),t("p",[a._v("다음과 같은 출력이 나온 후, 중지할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INFO  [replay] Replay done (published 9917 msgs, 2.136 s)\n")])])]),t("p",[a._v("매개변수도 조정할 수 있습니다. ("),t("code",[a._v("sudo pip install pyulog")]),a._v(" first\\로 pyulog 설치)를 사용하여 로그에서 추출할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ulog_params -i \"$replay\" -d ' ' | grep -e '^EKF2' > build/px4_sitl_default_replay/tmp/rootfs/replay_params.txt\n")])])]),t("p",[a._v("그런 다음 필요에 따라 파일의 매개변수를 편집하고, "),t("code",[a._v("make px4_sitl none")]),a._v("으로 재생 프로세스를 다시 시작합니다. 그러면 새 로그 파일이 생성됩니다.")]),a._v(" "),t("p",[a._v("생성된 로그의 위치는 다음과 같은 메시지와 함께 출력됩니다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INFO  [logger] Opened log file: rootfs/fs/microsd/log/2017-03-01/13_30_51_replayed.ulg\n")])])]),t("p",[a._v("완료되면 "),t("code",[a._v("설정되지 않은 재생")]),a._v("을 사용합니다. 재생 모드를 종료하려면 replay_mode를 설정 해제하십시오")]),a._v(" "),t("h2",{attrs:{id:"무대-뒤에서"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#무대-뒤에서"}},[a._v("#")]),a._v(" 무대 뒤에서")]),a._v(" "),t("p",[a._v("재생은 3가지 구성 요소로 이루어집니다.")]),a._v(" "),t("ul",[t("li",[a._v("재현 모듈")]),a._v(" "),t("li",[a._v("ORB 게시자 규칙")]),a._v(" "),t("li",[a._v("시간 처리")])]),a._v(" "),t("p",[a._v("재생 모듈은 로그를 읽고 기록된 것과 동일한 속도로 메시지를 게시합니다. 현재 시스템 시간과 일치하도록 각 메시지의 타임스탬프에 상수 오프셋이 추가됩니다(이것이 다른 모든 타임스탬프가 상대적이어야 하는 이유입니다). "),t("code",[a._v("replay tryapplyparams")]),a._v(" 명령은 다른 모든 모듈이 로드되기 전에 실행되고, 로그 및 사용자 설정 매개변수의 매개변수를 적용합니다. 그런 다음, 마지막 명령으로 "),t("code",[a._v("replay trystart")]),a._v("가 매개변수를 다시 적용하고, 실제 재생을 시작합니다. 환경 변수 "),t("code",[a._v("replay")]),a._v("가 설정되지 않은 경우, 두 명령 모두 아무 작업도 수행하지 않습니다.")]),a._v(" "),t("p",[a._v("ORB 게시자 규칙을 사용하면, 위에서 설명한 대로 시스템의 어느 부분을 재생할지 선택할 수 있습니다. POSIX SITL 대상에 대해서만 컴파일됩니다.")]),a._v(" "),t("p",[t("strong",[a._v("시간 처리")]),a._v("는 여전히 "),t("strong",[a._v("개방된 지점")]),a._v("이며 구현되어야 합니다.")])])}),[],!1,null,null,null);e.default=_.exports}}]);