(window.webpackJsonp=window.webpackJsonp||[]).push([[1525],{2774:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"젠킨스-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#젠킨스-ci"}},[t._v("#")]),t._v(" 젠킨스 CI")]),t._v(" "),"master"!=t.$themeConfig.px4_version?a("div",[a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("이 페이지는 오래됐습니다")]),t._v(" "),a("p",[t._v("최신 문서는 "),a("a",{attrs:{href:"https://docs.px4.io/master/en/test_and_ci/"}},[t._v("여기에서  찾을 수 있습니다")]),t._v(".")])])]):t._e(),t._v(" "),a("p",[a("a",{attrs:{href:"http://ci.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ci.px4.io"),a("OutboundLink")],1),t._v("의 젠킨스 지속 통합 서버는 PX4 SITL에 대한 통합 테스트를 자동으로 수행합니다.")]),t._v(" "),a("h2",{attrs:{id:"개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),a("ul",[a("li",[t._v("수반 요소: 젠킨스, 도커, PX4 POSIX SITL")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html"}},[t._v("도커 컨테이너")]),t._v("에서의 코드 시험 실행")],1),t._v(" "),a("li",[t._v("젠킨스에서 실행하는 작업 두가지: 마스터 브랜치에 대한 PR 점검, 마스터 브랜치로의 push 점검")])]),t._v(" "),a("h2",{attrs:{id:"테스트-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#테스트-실행"}},[t._v("#")]),t._v(" 테스트 실행")]),t._v(" "),a("p",[t._v("젠킨스는 컨테이너를 시작할 때 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/integrationtests/run_container.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("run_container.bash"),a("OutboundLink")],1),t._v(" 파일을 사용하는데, 실행 단계에서 컴파일 후 코드를 시험할 때 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/integrationtests/run_tests.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("run_tests.bash"),a("OutboundLink")],1),t._v("를 실행할 차례에 실행합니다.")]),t._v(" "),a("p",[t._v("도거를 설치했다면 동일한 방식을 로컬에서 진행할 수 있습니다:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("directory_where_PX4-Autopilot_is_cloned"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WORKSPACE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" ./PX4-Autopilot/integrationtests/run_container.bash\n")])])]),a("h2",{attrs:{id:"서버-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#서버-설정"}},[t._v("#")]),t._v(" 서버 설정")]),t._v(" "),a("h3",{attrs:{id:"설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[t._v("#")]),t._v(" 설치")]),t._v(" "),a("p",[t._v("자세한 젠킨스 설치 및 관리 방법 내용은 설치 "),a("a",{attrs:{href:"https://github.com/PX4/containers/tree/master/scripts/jenkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("script/log"),a("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),a("h3",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("ul",[a("li",[t._v("젠킨스 보안 활성")]),t._v(" "),a("li",[t._v("설치 플러그인\n"),a("ul",[a("li",[t._v("github")]),t._v(" "),a("li",[t._v("Github pull 요청 빌더")]),t._v(" "),a("li",[t._v("내장형 빌드 상태 표시 플러그인")]),t._v(" "),a("li",[t._v("s3 플러그인")]),t._v(" "),a("li",[t._v("알림 플러그인")]),t._v(" "),a("li",[t._v("콘솔 섹션 축소 기능")]),t._v(" "),a("li",[t._v("postbuildscript")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);