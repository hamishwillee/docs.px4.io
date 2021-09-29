(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{2817:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows-cygwin-工具链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-工具链"}},[t._v("#")]),t._v(" Windows Cygwin 工具链")]),t._v(" "),a("p",[t._v("该工具链非常轻便，而且容易安装和使用。 它是目前Windows环境下用于PX4开发的最新和最好的工具。")]),t._v(" "),a("ul",[a("li",[t._v("编译/上传 PX4到Nuttx目标(Pixhawk系列飞控)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This setup is supported by the PX4 dev team. To build other targets you will need to use a "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),a("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("unsupported windows development environment")]),t._v(").")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"installation"}})]),t._v(" "),a("h2",{attrs:{id:"安装说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装说明"}},[t._v("#")]),t._v(" 安装说明")]),t._v(" "),a("ol",[a("li",[t._v("从 "),a("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(" 或者 "),a("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.5.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),a("OutboundLink")],1),t._v(" 下载最新的MSI安装文件。")]),t._v(" "),a("li",[t._v("运行它，选择你需要的安装路径，执行安装 "),a("img",{attrs:{src:s(691),alt:"jMAVSimOnWindows"}})]),t._v(" "),a("li",[t._v("Tick the box at the end of the installation to "),a("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(" (this simplifies the process to get you started). :::note If you missed this step you will need to "),a("a",{attrs:{href:"#getting_started"}},[t._v("clone the PX4-Autopilot repository manually")]),t._v(".\n:::")])]),t._v(" "),a("p",[a("a",{attrs:{id:"getting_started"}})]),t._v(" "),a("h2",{attrs:{id:"入门指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门指南"}},[t._v("#")]),t._v(" 入门指南")]),t._v(" "),a("p",[t._v("这篇文章将解释怎样下载和使用该环境，并且在需要的时候怎样扩展和更新(比如，使用其他的编译器)。")]),t._v(" "),a("ol",[a("li",[t._v("进入到工具链的安装目录(默认"),a("strong",[t._v("C:\\PX4")]),t._v(")")]),t._v(" "),a("li",[t._v("运行"),a("strong",[t._v("run-console.bat")]),t._v("(双击)启动Cygwin bash控制台")]),t._v(" "),a("li",[t._v("在控制台中运行克隆PX4 Firmware仓库命令")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Skip this step if you ticked the installer option to "),a("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(". Cloning only needs to be done once!")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),a("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("举例，要运行JMAVSim:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入Firmware仓库目录")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware \n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用JMAVSim编译并运行SITL模拟器来验证 ")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),a("p",[t._v("控制台将会显示：")]),t._v(" "),a("p",[a("img",{attrs:{src:s(692),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),a("h2",{attrs:{id:"使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),a("p",[t._v("编写或复制 ** 批处理脚本 ** "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("run-console.bat")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setup-environment-variables.bat")]),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[t._v("使用 jMAVSim 编译和运行 SITL, 其性能明显优于虚拟机 (Cygwin会生成一个本机 windows 二进制文件 ** px4.exe **)。")]),t._v(" "),a("li",[t._v("编译和上传 NuttX 二进制文件（例如：px4_fmu-v2 和 px4_fmu-v4）。")])]),t._v(" "),a("p",[a("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),a("h2",{attrs:{id:"附加信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),a("h3",{attrs:{id:"windows-git-特殊情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),a("p",[t._v("工具链使用专门配置的控制台(通过运行"),a("strong",[t._v("run-console.bat")]),t._v("脚本)从而可以使用PX4编译命令")]),t._v(" "),a("p",[t._v("下面"),a("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v(" 有关如何生成 PX4 的详细说明 ")]),t._v(" (或参阅下面的部分以了解更多常规用法说明)。")],1),t._v(" "),a("h3",{attrs:{id:"windows-git-特殊情况-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况-2"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),a("h4",{attrs:{id:"windows-cr-lf-对比-unix-lf-行结尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-对比-unix-lf-行结尾"}},[t._v("#")]),t._v(" Windows CR+LF 对比 Unix LF 行结尾")]),t._v(" "),a("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code). Compilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),a("code",[t._v("$'\\r': Command not found.")]),t._v("). Luckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),a("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --global ...\n")])])]),a("p",[t._v("This is not recommended because it may affect any other (unrelated) git use on your Windows machine.")]),t._v(" "),a("h4",{attrs:{id:"unix-执行权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unix-执行权限"}},[t._v("#")]),t._v(" Unix 执行权限")]),t._v(" "),a("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed. "),a("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it). This often results in "),a("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions. The resulting diff might look like this:')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\nold mode 100644\nnew mode 100755\n")])])]),a("p",[t._v("但我们并不建议这样做, 因为它可能会影响 Windows 计算机上的任何其他 (无关) git 使用。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.fileMode "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable execution bit check globally for the machine ")]),t._v("\n")])])]),a("p",[t._v("For existing repositories that have this problem caused by a local configuration, additionally:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除当前存储库的局部配置，改用全局配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach --recursive "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除所有子模块的局部配置 ")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports},691:function(t,e,s){t.exports=s.p+"assets/img/cygwin_toolchain_installer.3dba7f07.png"},692:function(t,e,s){t.exports=s.p+"assets/img/jmavsim_windows_cygwin.77037524.png"}}]);