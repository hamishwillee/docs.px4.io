(window.webpackJsonp=window.webpackJsonp||[]).push([[1166],{2406:function(t,v,_){"use strict";_.r(v);var e=_(18),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"windows-安装指南"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装指南"}},[t._v("#")]),t._v(" Windows 安装指南")]),t._v(" "),_("p",[t._v("如果希望在Windows平台进行PX4的开发，请参考： "),_("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Windows Cygwin 工具链")]),t._v(" 进行工具链的安装。")],1),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Cygwin toolchain")]),t._v(" supports building for NuttX/Pixhawk and jMAVSim simulator targets. If you want to build for "),_("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("other targets")]),t._v(", consider setting up a dual boot system with "),_("a",{attrs:{href:"http://ubuntu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux"),_("OutboundLink")],1),t._v(".")],1)]),t._v(" "),_("h2",{attrs:{id:"额外工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#额外工具"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),_("p",[t._v("设置完环境后，请转至 构建说明</0> 进行编译测试。")]),t._v(" "),_("h2",{attrs:{id:"后续步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),_("p",[t._v("Once you have finished setting up the environment, continue to the "),_("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1),t._v(" "),_("h2",{attrs:{id:"其他-windows-工具链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他-windows-工具链"}},[t._v("#")]),t._v(" 其他 windows 工具链")]),t._v(" "),_("p",[t._v("There are a number of other legacy/alternative solutions that may be of interest to some developers. A comparison of the options is provided below.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("The "),_("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Cygwin Toolchain")]),t._v(" is the only one that is supported by the PX4 dev team. It is regularly tested as part of our continuous integration system and is known to be better performing than the other alternatives.")],1)]),t._v(" "),_("table",[_("thead",[_("tr",[_("th"),t._v(" "),_("th",[_("RouterLink",{attrs:{to:"/zh/setup/dev_env_windows_cygwin.html"}},[t._v("Cygwin 工具链")]),t._v(" "),_("strong",[t._v("(官方支持)")])],1),t._v(" "),_("th",[_("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_vm.html"}},[t._v("虚拟机工具链")])],1),t._v(" "),_("th",[_("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_bash_on_win.html"}},[t._v("Bash on Windows 工具链")])],1)])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("安装方式")]),t._v(" "),_("td",[t._v("MSI安装包/脚本")]),t._v(" "),_("td",[t._v("手动安装 (硬核玩家)")]),t._v(" "),_("td",[t._v("脚本")])]),t._v(" "),_("tr",[_("td",[t._v("本机二进制执行")]),t._v(" "),_("td",[t._v("是")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("否")])]),t._v(" "),_("tr",[_("td",[t._v("性能")]),t._v(" "),_("td",[t._v("++")]),t._v(" "),_("td",[t._v("--")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("ARM平台")]),t._v(" "),_("td",[t._v("++ (速度快)")]),t._v(" "),_("td",[t._v("+ (VM USB)")]),t._v(" "),_("td",[t._v("+")])]),t._v(" "),_("tr",[_("td",[t._v("jMAVSim 仿真")]),t._v(" "),_("td",[t._v("++")]),t._v(" "),_("td",[t._v("+")]),t._v(" "),_("td",[t._v("+")])]),t._v(" "),_("tr",[_("td",[t._v("Gazebo 仿真")]),t._v(" "),_("td",[t._v("- (暂不支持)")]),t._v(" "),_("td",[t._v("+ (速度稍慢)")]),t._v(" "),_("td",[t._v("+ (速度稍慢)")])]),t._v(" "),_("tr",[_("td",[t._v("技术支持")]),t._v(" "),_("td",[t._v("+")]),t._v(" "),_("td",[t._v("++ (Linux)")]),t._v(" "),_("td",[t._v("+/-")])]),t._v(" "),_("tr",[_("td",[t._v("备注")]),t._v(" "),_("td",[_("ul",[_("li",[t._v("2018年新增")]),_("li",[t._v("安装配置轻巧")]),_("li",[t._v("便携")])])]),t._v(" "),_("td",[_("ul",[_("li",[t._v("可获得齐全的Linux特性")]),_("li",[t._v("CPU、内存的负荷较高")]),_("li",[t._v("占用较多的存储空间")])])]),t._v(" "),_("td",[_("ul",[_("li",[t._v("仿真界面是“黑”进来的")]),_("li",[t._v("仅支持 Windows10")]),_("li",[t._v("本质上仍是虚拟机")])])])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);