(window.webpackJsonp=window.webpackJsonp||[]).push([[1200],{2231:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"시뮬레이션-디버깅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션-디버깅"}},[a._v("#")]),a._v(" 시뮬레이션 디버깅")]),a._v(" "),t("p",[a._v("호스트 시스템에서 시뮬레이션이 실행 중이므로, 데스크탑 개발 도구를 사용할 수 있습니다.")]),a._v(" "),t("h2",{attrs:{id:"clang-주소-새니타이저-mac-os-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clang-주소-새니타이저-mac-os-linux"}},[a._v("#")]),a._v(" CLANG 주소 새니타이저(Mac OS, Linux)")]),a._v(" "),t("p",[a._v("Clang 주소 새니타이저는 정렬(버스) 오류 및 분할 오류와 같은 기타 메모리 오류를 찾는 데 도움이 됩니다. 아래 명령은 올바른 컴파일 옵션을 설정합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# only required on first address sanitizer run after a normal build")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_ASAN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl jmavsim\n")])])]),t("h2",{attrs:{id:"valgrind"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#valgrind"}},[a._v("#")]),a._v(" Valgrind")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" valgrind\n")])])]),t("p",[a._v("또는")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" valgrind\n")])])]),t("p",[a._v("SITL 시뮬레이션 중에 valgrind를 사용하려면:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___valgrind\n")])])]),t("h2",{attrs:{id:"조합-시작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#조합-시작"}},[a._v("#")]),a._v(" 조합 시작")]),a._v(" "),t("p",[a._v("SITL은 디버거를 연결하거나 연결하지 않고, jMAVSim 또는 Gazebo를 시뮬레이션 백엔드로 사용하여 시작할 수 있습니다. 그 결과 아래와 같은 시작 옵션이 나타납니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___gdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___lldb\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo___gdb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default gazebo___lldb\n")])])]),t("p",[a._v('여기서 마지막 매개변수는 <viewer_model_debugger> 삼중항입니다(밑줄 3개를 사용하면 기본 "iris" 모델을 의미함). 그러면, 디버거가 시작되고 SITL 애플리케이션이 시작됩니다. 디버거 셸에서 실행을 중지하려면 '),t("code",[a._v("CTRL-C")]),a._v("를 입력합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("Process "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("16529")]),a._v(" stopped\n* thread "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#1: tid = 0x114e6d, 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10, name = 'px4', queue = 'com.apple.main-thread', stop reason = signal SIGSTOP")]),a._v("\n    frame "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#0: 0x00007fff90f4430a libsystem_kernel.dylib`__read_nocancel + 10")]),a._v("\nlibsystem_kernel.dylib`__read_nocancel:\n-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  0x7fff90f4430a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v(": jae    0x7fff90f44314            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v("\n    0x7fff90f4430c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(": movq   %rax, %rdi\n    0x7fff90f4430f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("5")]),a._v(">")]),a._v(": jmp    0x7fff90f3fc53            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" cerror_nocancel\n    0x7fff90f44314 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("+2"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),a._v(": retq\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n")])])]),t("p",[a._v("DriverFrameworks 스케줄링이 디버깅 세션을 방해하지 않도록 하려면, "),t("code",[a._v("SIGCONT")]),a._v("를 LLDB 및 GDB에서 마스킹합니다.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lldb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" process handle SIGCONT -n "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" -p "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" -s "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])])]),t("p",[a._v("또는 GDB의 경우:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(gdb) handle SIGCONT noprint nostop\n")])])]),t("p",[a._v("그 후 lldb 또는 gdb 셸은 일반 세션처럼 작동합니다. LLDB/GDB 문서를 참고하십시오.")]),a._v(" "),t("p",[a._v("마지막 매개변수인 <viewer_model_debugger> 트리플렛은 실제로 빌드 디렉토리에서 make에 전달되므로")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default jmavsim___gdb\n")])])]),t("p",[a._v("명령은 다음 명령과 같습니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" px4_sitl_default   "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Configure with cmake")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -C build/px4_sitl_default jmavsim___gdb\n")])])]),t("p",[a._v("빌드 디렉토리에서 사용 가능한 make 대상의 전체 목록은 다음 명령어로 조회할 수 있습니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),t("p",[a._v("그러나, 편의를 위해 <viewer_model_debugger> 삼중항만 있는 목록이 다음 명령으로 출력됩니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" list_vmd_make_targets\n")])])]),t("h2",{attrs:{id:"컴파일러-최적화"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#컴파일러-최적화"}},[a._v("#")]),a._v(" 컴파일러 최적화")]),a._v(" "),t("p",[t("code",[a._v("posix_sitl_*")]),a._v("에 대해 구성할 때 주어진 실행 파일 및/또는 모듈(cmake에서 "),t("code",[a._v("add_executable")]),a._v(" 또는 "),t("code",[a._v("add_library")]),a._v("로 추가)에 대한 컴파일러 최적화를 억제할 수 있습니다. 이것은 디버거를 사용하여 코드를 단계별로 실행하거나, 그렇지 않으면 최적화 변수를 인쇄시에 편리합니다.")]),a._v(" "),t("p",[a._v("그렇게 하려면 환경 변수 "),t("code",[a._v("PX4_NO_OPTIMIZATION")]),a._v("을 최적화 없이 컴파일하는 대상과 일치하는 세미콜론으로 구분된 정규식 목록으로 설정합니다. 이 환경변수는 설정이 "),t("code",[a._v("posix_sitl_*")]),a._v("이 아닌 경우에는 무시됩니다.")]),a._v(" "),t("p",[a._v("예를 들어,")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PX4_NO_OPTIMIZATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'px4;^modules__uORB;^modules__systemlib$'")]),a._v("\n")])])]),t("p",[a._v("대상의 최적화를 억제합니다: 플랫폼__posix__px4_layer, modules__systemlib, modules__uORB, 예제__px4_simple_app, modules__uORB__uORB \\_tests 및 px4.")]),a._v(" "),t("p",[a._v("이러한 정규식과 일치할 수 있는 대상은 다음 명령으로 출력합니다.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -C build/posix_sitl_* list_cmake_targets\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);