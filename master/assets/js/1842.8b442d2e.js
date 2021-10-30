(window.webpackJsonp=window.webpackJsonp||[]).push([[1842],{3303:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jenkins-ci-持续集成测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-ci-持续集成测试"}},[t._v("#")]),t._v(" Jenkins CI（持续集成测试）")]),t._v(" "),"master"!=t.$themeConfig.px4_version?s("div",[s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("This page may be out of date")]),t._v(" "),s("p",[t._v("The latest version "),s("a",{attrs:{href:"https://docs.px4.io/master/en/test_and_ci/"}},[t._v("can be found here")]),t._v(".")])])]):t._e(),t._v(" "),s("p",[s("a",{attrs:{href:"http://ci.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ci.px4.io"),s("OutboundLink")],1),t._v(" 上的 Jenkins 持续集成服务器用于自动运行针对 PX4 SITL 的集成测试。")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("ul",[s("li",[t._v("涉及的组件：Jenkins，Docker，PX4 POSIX SITL")]),t._v(" "),s("li",[t._v("测试在 "),s("RouterLink",{attrs:{to:"/zh/test_and_ci/docker.html"}},[t._v("Docker Containers")]),t._v(" 内运行")],1),t._v(" "),s("li",[t._v("Jenkins 执行了 2 个工作：一个用于检查每个 PR 与主控，另一个用于检查主控上的每次推送")])]),t._v(" "),s("h2",{attrs:{id:"测试执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试执行"}},[t._v("#")]),t._v(" 测试执行")]),t._v(" "),s("p",[t._v("Jenkins 使用 "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/integrationtests/run_container.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("run_container.bash"),s("OutboundLink")],1),t._v(" 来启动 container，而 container 又执行 "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/integrationtests/run_tests.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v(" run_tests.bash "),s("OutboundLink")],1),t._v(" 来编译和运行测试。")]),t._v(" "),s("p",[t._v("如果安装了 Docker，则可以在本地使用相同的方法：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("directory_where_firmware_is_cloned"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WORKSPACE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" ./Firmware/integrationtests/run_container.bash\n")])])]),s("h2",{attrs:{id:"服务器配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器配置"}},[t._v("#")]),t._v(" 服务器配置")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("有关如何安装和维护 Jenkins 的详细信息，请参阅 setup "),s("a",{attrs:{href:"https://github.com/PX4/containers/tree/master/scripts/jenkins",target:"_blank",rel:"noopener noreferrer"}},[t._v("script/log"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("ul",[s("li",[t._v("Jenkins 安全性已启用")]),t._v(" "),s("li",[t._v("已安装的插件\n"),s("ul",[s("li",[t._v("github")]),t._v(" "),s("li",[t._v("github 请求构建器")]),t._v(" "),s("li",[t._v("嵌入式构建状态插件")]),t._v(" "),s("li",[t._v("s3 插件")]),t._v(" "),s("li",[t._v("通知插件")]),t._v(" "),s("li",[t._v("折叠控制台部分")]),t._v(" "),s("li",[t._v("postbuildscript")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);