(window.webpackJsonp=window.webpackJsonp||[]).push([[604],{3339:function(t,e,s){"use strict";s.r(e);var o=s(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-development-environment-cygwin-based"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-environment-cygwin-based"}},[t._v("#")]),t._v(" Windows Development Environment (Cygwin-based)")]),t._v(" "),o("p",[t._v("该工具链非常轻便，而且容易安装和使用。 它是目前Windows环境下用于PX4开发的最新和最好的工具。")]),t._v(" "),o("ul",[o("li",[t._v("编译/上传 PX4到Nuttx目标(Pixhawk系列飞控)")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("This setup is an "),o("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("unsupported windows development environment")]),t._v(".")],1),t._v(" "),o("p",[t._v("The toolchain was previously recommended, but does not work with PX4 v1.12 and later due to packaging issues. The "),o("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_wsl.html"}},[t._v("Windows WSL2-Based Development Environment")]),t._v(" should be used by preference.")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"installation"}})]),t._v(" "),o("h2",{attrs:{id:"安装说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装说明"}},[t._v("#")]),t._v(" 安装说明")]),t._v(" "),o("ol",[o("li",[t._v("从 "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),o("OutboundLink")],1),t._v(" 或者 "),o("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.5.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),o("OutboundLink")],1),t._v(" 下载最新的MSI安装文件。")]),t._v(" "),o("li",[t._v("运行它，选择你需要的安装路径，执行安装 "),o("img",{attrs:{src:s(737),alt:"jMAVSimOnWindows"}})]),t._v(" "),o("li",[t._v("Tick the box at the end of the installation to "),o("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(" (this simplifies the process to get you started). :::note If you missed this step you will need to "),o("a",{attrs:{href:"#getting_started"}},[t._v("clone the PX4-Autopilot repository manually")]),t._v(".\n:::")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("At time of writing the installer is missing some dependencies (and cannot yet be rebuilt to add them - see "),o("a",{attrs:{href:"https://github.com/PX4/PX4-windows-toolchain/issues/31",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-windows-toolchain#31"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("To add these yourself:")]),t._v(" "),o("ol",[o("li",[t._v("进入到工具链的安装目录(默认"),o("strong",[t._v("C:\\PX4")]),t._v(")")]),t._v(" "),o("li",[t._v("Run "),o("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the linux-like Cygwin bash console")]),t._v(" "),o("li",[t._v("Enter the following command in the console:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("pip3 install --user kconfiglib jsonschema future\n")])])])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"getting_started"}})]),t._v(" "),o("h2",{attrs:{id:"入门指南"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#入门指南"}},[t._v("#")]),t._v(" 入门指南")]),t._v(" "),o("p",[t._v("The toolchain uses a specially configured console window (started by running the "),o("strong",[t._v("run-console.bat")]),t._v(" script) from which you can call the normal PX4 build commands:")]),t._v(" "),o("ol",[o("li",[t._v("进入到工具链的安装目录(默认"),o("strong",[t._v("C:\\PX4")]),t._v(")")]),t._v(" "),o("li",[t._v("Run "),o("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the linux-like Cygwin bash console (you must use this console to build PX4).")]),t._v(" "),o("li",[t._v("Clone the PX4 PX4-Autopilot repository from within the console:")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Skip this step if you ticked the installer option to "),o("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(". Cloning only needs to be done once!")])]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),o("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("For example, to run JMAVSim:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Navigate to PX4-Autopilot repo")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build and runs SITL simulation with jMAVSim to test the setup")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),o("p",[t._v("The console will then display:")]),t._v(" "),o("p",[o("img",{attrs:{src:s(738),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),o("h2",{attrs:{id:"使用说明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),o("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),o("ul",[o("li",[t._v("Install the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("编译和上传 NuttX 二进制文件（例如：px4_fmu-v2 和 px4_fmu-v4）。")])]),t._v(" "),o("p",[o("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),o("h2",{attrs:{id:"附加信息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),o("h3",{attrs:{id:"windows-git-特殊情况"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),o("p",[t._v("Antivirus and other background file monitoring tools can significantly slow down both installation of the toolchain and PX4 build times.")]),t._v(" "),o("p",[t._v("You may wish to halt them temporarily during builds (at your own risk).")]),t._v(" "),o("h3",{attrs:{id:"windows-git-特殊情况-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况-2"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),o("h4",{attrs:{id:"windows-cr-lf-对比-unix-lf-行结尾"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-对比-unix-lf-行结尾"}},[t._v("#")]),t._v(" Windows CR+LF 对比 Unix LF 行结尾")]),t._v(" "),o("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code). Compilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),o("code",[t._v("$'\\r': Command not found.")]),t._v("). Luckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),o("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config --global ...\n")])])]),o("p",[t._v("This is not recommended because it may affect any other (unrelated) git use on your Windows machine.")]),t._v(" "),o("h4",{attrs:{id:"unix-执行权限"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unix-执行权限"}},[t._v("#")]),t._v(" Unix 执行权限")]),t._v(" "),o("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed. "),o("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it). This often results in "),o("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions. The resulting diff might look like this:')]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\nold mode 100644\nnew mode 100755\n")])])]),o("p",[t._v("We recommend globally disabling the permission check on Windows to avoid the problem:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.fileMode "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable execution bit check globally for the machine ")]),t._v("\n")])])]),o("p",[t._v("For existing repositories that have this problem caused by a local configuration, additionally:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除当前存储库的局部配置，改用全局配置")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach --recursive "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移除所有子模块的局部配置 ")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports},737:function(t,e,s){t.exports=s.p+"assets/img/cygwin_toolchain_installer.650c2838.png"},738:function(t,e,s){t.exports=s.p+"assets/img/jmavsim_windows_cygwin.eb0ed1bb.png"}}]);