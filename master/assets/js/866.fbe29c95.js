(window.webpackJsonp=window.webpackJsonp||[]).push([[866],{1803:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jenkins-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-ci"}},[t._v("#")]),t._v(" Jenkins CI")]),t._v(" "),"master"!=t.$themeConfig.px4_version?s("div",[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("This page may be out of date")]),t._v(" "),s("p",[t._v("The latest version "),s("a",{attrs:{href:"https://docs.px4.io/master/en/test_and_ci/"}},[t._v("can be found here")]),t._v(".")])])]):t._e(),t._v(" "),s("p",[t._v("Jenkins continuous integration server on "),s("a",{attrs:{href:"http://ci.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ci.px4.io"),s("OutboundLink")],1),t._v(" is used to automatically run integration tests against PX4 SITL.")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("ul",[s("li",[t._v("Involved components: Jenkins, Docker, PX4 POSIX SITL")]),t._v(" "),s("li",[t._v("Tests run inside "),s("RouterLink",{attrs:{to:"/en/test_and_ci/docker.html"}},[t._v("Docker Containers")])],1),t._v(" "),s("li",[t._v("Jenkins executes 2 jobs: one to check each PR against master, and the other to check every push on master")])]),t._v(" "),s("h2",{attrs:{id:"test-execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-execution"}},[t._v("#")]),t._v(" Test Execution")]),t._v(" "),s("p",[t._v("Jenkins uses "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/integrationtests/run_container.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("run_container.bash"),s("OutboundLink")],1),t._v(" to start the container, which in turn executes "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/integrationtests/run_tests.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("run_tests.bash"),s("OutboundLink")],1),t._v(" to compile and run the tests.")]),t._v(" "),s("p",[t._v("If Docker is installed the same method can be used locally:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("directory_where_PX4-Autopilot_is_cloned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WORKSPACE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" ./PX4-Autopilot/integrationtests/run_container.bash\n")])])]),s("h2",{attrs:{id:"server-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-setup"}},[t._v("#")]),t._v(" Server Setup")]),t._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("See setup "),s("a",{attrs:{href:"https://github.com/PX4/containers/tree/master/scripts/jenkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("script/log"),s("OutboundLink")],1),t._v(" for details on how Jenkins got installed and maintained.")]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("ul",[s("li",[t._v("Jenkins security enabled")]),t._v(" "),s("li",[t._v("Installed plugins\n"),s("ul",[s("li",[t._v("github")]),t._v(" "),s("li",[t._v("github pull request builder")]),t._v(" "),s("li",[t._v("embeddable build status plugin")]),t._v(" "),s("li",[t._v("s3 plugin")]),t._v(" "),s("li",[t._v("notification plugin")]),t._v(" "),s("li",[t._v("collapsing console sections")]),t._v(" "),s("li",[t._v("postbuildscript")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);