(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{2380:function(t,e,a){"use strict";a.r(e);var n=a(18),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-cygwin-工具链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-工具链"}},[t._v("#")]),t._v(" Windows Cygwin 工具链")]),t._v(" "),n("p",[t._v("该工具链非常轻便，而且容易安装和使用。 它是目前Windows环境下用于PX4开发的最新和最好的工具。")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("This is the only officially supported toolchain for building PX4 on Windows (i.e. it is tested in our continuous integration system).")])]),t._v(" "),n("p",[t._v("这篇文章将解释怎样下载和使用该环境，并且在需要的时候怎样扩展和更新(比如，使用其他的编译器)。")]),t._v(" "),n("ul",[n("li",[t._v("编译/上传 PX4到Nuttx目标(Pixhawk系列飞控)")]),t._v(" "),n("li",[t._v("JMAVSim/SITL 仿真会获得比其他Windows工具链更好的性能")]),t._v(" "),n("li",[t._v("类型校验，轻便安装，完整的命令行支持和许多"),n("a",{attrs:{href:"#features"}},[t._v("其他特性")])])]),t._v(" "),n("p",[t._v("编写或复制 ** 批处理脚本 ** "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("run-console.bat")]),n("OutboundLink")],1),t._v(" 和 "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("setup-environment-variables.bat")]),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[n("a",{attrs:{id:"installation"}})]),t._v(" "),n("h2",{attrs:{id:"安装说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装说明"}},[t._v("#")]),t._v(" 安装说明")]),t._v(" "),n("ol",[n("li",[t._v("从 "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),n("OutboundLink")],1),t._v(" 或者 "),n("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.5.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),n("OutboundLink")],1),t._v(" 下载最新的MSI安装文件。")]),t._v(" "),n("li",[t._v("运行它，选择你需要的安装路径，执行安装 "),n("img",{attrs:{src:a(672),alt:"jMAVSimOnWindows"}})]),t._v(" "),n("li",[t._v("Tick the box at the end of the installation to "),n("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(" (this simplifies the process to get you started). :::note If you missed this step you will need to "),n("a",{attrs:{href:"#getting_started"}},[t._v("clone the PX4-Autopilot repository manually")]),t._v(".\n:::")])]),t._v(" "),n("p",[n("a",{attrs:{id:"getting_started"}})]),t._v(" "),n("h2",{attrs:{id:"入门指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#入门指南"}},[t._v("#")]),t._v(" 入门指南")]),t._v(" "),n("p",[t._v("工具链使用专门配置的控制台(通过运行"),n("strong",[t._v("run-console.bat")]),t._v("脚本)从而可以使用PX4编译命令")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("进入到工具链的安装目录(默认"),n("strong",[t._v("C:\\PX4")]),t._v(")")])]),t._v(" "),n("li",[n("p",[t._v("运行"),n("strong",[t._v("run-console.bat")]),t._v("(双击)启动Cygwin bash控制台")])]),t._v(" "),n("li",[n("p",[t._v("在控制台中运行克隆PX4 Firmware仓库命令")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Cloning only needs to be done once! Skip this step if you ticked the installer option to *clone the PX4 repository, build and run simulation with jMAVSim*.")])])])]),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),n("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("举例，要运行JMAVSim:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入Firmware仓库目录")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware \n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用JMAVSim编译并运行SITL模拟器来验证 ")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),n("p",[t._v("控制台将会显示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(673),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),n("p",[t._v("下面"),n("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v(" 有关如何生成 PX4 的详细说明 ")]),t._v(" (或参阅下面的部分以了解更多常规用法说明)。")],1),t._v(" "),n("p",[n("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),n("h2",{attrs:{id:"使用说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[t._v("#")]),t._v(" 使用说明")]),t._v(" "),n("p",[t._v("安装目录 （默认位置： "),n("strong",[t._v("C:\\PX4")]),t._v("） 用于开启PX4 SITL（类Linux）命令行窗口的脚本文件： "),n("strong",[t._v("run-console.bat")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"#manual_setup"}},[t._v("Manual Setup")]),t._v(" section explains why you need to use the script and how it all works.")])]),t._v(" "),n("p",[t._v("The ordinary workflow consists of starting a console window by double clicking on the "),n("strong",[t._v("run-console.bat")]),t._v(" script to manually run terminal commands.")]),t._v(" "),n("h3",{attrs:{id:"windows-git-特殊情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),n("p",[t._v("Antivirus and other background file monitoring tools can significantly slow down both installation of the toolchain and PX4 build times.")]),t._v(" "),n("p",[t._v("但我们并不建议这样做, 因为它可能会影响 Windows 计算机上的任何其他 (无关) git 使用。")]),t._v(" "),n("h3",{attrs:{id:"windows-git-特殊情况-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-特殊情况-2"}},[t._v("#")]),t._v(" Windows & Git 特殊情况")]),t._v(" "),n("h4",{attrs:{id:"windows-cr-lf-对比-unix-lf-行结尾"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-对比-unix-lf-行结尾"}},[t._v("#")]),t._v(" Windows CR+LF 对比 Unix LF 行结尾")]),t._v(" "),n("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code). Compilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),n("code",[t._v("$'\\r': Command not found.")]),t._v("). Luckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),n("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --global ...\n")])])]),n("p",[t._v("对于由局部配置引起此问题的现有存储库，你可以使用如下命令：")]),t._v(" "),n("h4",{attrs:{id:"unix-执行权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unix-执行权限"}},[t._v("#")]),t._v(" Unix 执行权限")]),t._v(" "),n("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed. "),n("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it). This often results in "),n("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions. The resulting diff might look like this:')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\nold mode 100644\nnew mode 100755\n")])])]),n("p",[t._v("补充:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --global core.fileMode false # disable execution bit check globally for the machine\n")])])]),n("p",[t._v("你还可以使用 Github 项目中的 shell 脚本进行开发环境的安装。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --unset core.filemode # 移除当前存储库的局部配置，改用全局配置\ngit submodule foreach --recursive git config --unset core.filemode # 移除所有子模块的局部配置\n")])])]),n("h2",{attrs:{id:"附加信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),n("p",[n("a",{attrs:{id:"features"}})]),t._v(" "),n("h3",{attrs:{id:"特性-问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性-问题"}},[t._v("#")]),t._v(" 特性/问题")]),t._v(" "),n("p",[t._v("你还可以使用 Github 项目中的 shell 脚本进行开发环境的安装。")]),t._v(" "),n("ul",[n("li",[t._v("使用 jMAVSim 编译和运行 SITL, 其性能明显优于虚拟机 (Cygwin会生成一个本机 windows 二进制文件 ** px4.exe **)。")]),t._v(" "),n("li",[t._v("编译和上传 NuttX 二进制文件（例如：px4_fmu-v2 和 px4_fmu-v4）。")]),t._v(" "),n("li",[t._v("使用 * astyle * 进行格式检查 (支持命令: "),n("code",[t._v("make format")]),t._v(")。")]),t._v(" "),n("li",[t._v("命令行自动补全。")]),t._v(" "),n("li",[t._v("绿色安装！ 安装程序不会影响您的系统和全局路径设置 (它只修改选定的安装目录, 例如 ** C:\\PX4 \\ ** 并使用临时本地路径变量)。")]),t._v(" "),n("li",[t._v("安装程序支持更新到最新版本, 同时保持您的个人更改在工具链文件夹中。")])]),t._v(" "),n("p",[t._v("Omissions:")]),t._v(" "),n("ul",[n("li",[t._v("仿真模拟：暂不支持Gazebo 和 ROS。")]),t._v(" "),n("li",[t._v("仅支持 NuttX 和 JMAVSim/SITL 编译。")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Known problems"),n("OutboundLink")],1),t._v(" (Also use to report issues).")])]),t._v(" "),n("p",[n("a",{attrs:{id:"script_setup"}})]),t._v(" "),n("h3",{attrs:{id:"shell-脚本安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本安装"}},[t._v("#")]),t._v(" Shell 脚本安装")]),t._v(" "),n("p",[t._v("You can also install the environment using shell scripts in the Github project.")]),t._v(" "),n("ol",[n("li",[t._v("请确保安装了 "),n("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Windows Git "),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("li",[t._v("将代码仓库 https://github.com/PX4/windows-toolchain 克隆到要安装工具链的位置。 打开 "),n("code",[t._v("Git Bash")]),t._v(" 并执行以下操作，打开后会自动进入默认的安装目录:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("> **注意：** 这就是 [cygwin64/install-cygwin-px4.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat) 所做的工作。\n")])])]),n("ol",[n("li",[t._v("如果要安装所有组件, 请进入到新克隆的代码仓库文件夹, 然后双击位于文件夹 "),n("code",[t._v("toolchain")]),t._v("目录中的脚本 "),n("code",[t._v("install-all-components.bat")]),t._v("。 如果您只需要某些组件并希望占用有限的Internet 数据和磁盘空间, 则可以进入到不同的组件文件夹, 如 "),n("code",[t._v("toolchain\\cygwin64")]),t._v(", 然后单击 ** install-XXX.bat ** 脚本以获取特定的内容。")]),t._v(" "),n("li",[t._v("从 "),n("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Cygwin 官方网站 "),n("OutboundLink")],1),t._v(" 下载 * Cygwin 安装程序 * 文件 "),n("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v(" official Cygwin website "),n("OutboundLink")],1)])]),t._v(" "),n("p",[n("a",{attrs:{id:"manual_setup"}})]),t._v(" "),n("h3",{attrs:{id:"手动安装-对于开发人员"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动安装-对于开发人员"}},[t._v("#")]),t._v(" 手动安装 (对于开发人员)")]),t._v(" "),n("p",[t._v("This section describes how to setup the Cygwin toolchain manually yourself while pointing to the corresponding scripts from the script based installation repo. The result should be the same as using the scripts or MSI installer.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("The toolchain gets maintained and hence these instructions might not cover every detail of all the future changes.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("创建 * 文件夹 *: ** C:\\PX4 \\ "),n("strong",[t._v("、")]),t._v(" C:\\PX4\\toolchain \\ ** 和 ** C:\\PX4\\home \\ **")])]),t._v(" "),n("li",[n("p",[t._v("在安装向导中选择安装到文件夹中: ** C:\\PX4\\toolchain\\cygwin64 \\ **")])]),t._v(" "),n("li",[n("p",[t._v("运行下载的安装程序文件")])]),t._v(" "),n("li",[n("p",[t._v("** 注意 **这就是 "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v(" cygwin64/install-cygwin-pxbat "),n("OutboundLink")],1),t._v(" 所做的工作。")])]),t._v(" "),n("li",[n("p",[t._v("选择安装默认的 Cygwin 基础包和以下附加包的最新可用版本:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("目录:安装包名")])]),t._v(" "),n("li",[t._v("Devel:cmake (3.3.2 正常工作无告警, 3.6.2有告警但能够正常工作)")]),t._v(" "),n("li",[t._v("Devel:gcc-g++")]),t._v(" "),n("li",[t._v("Devel:gdb")]),t._v(" "),n("li",[t._v("Devel:git")]),t._v(" "),n("li",[t._v("Devel:make")]),t._v(" "),n("li",[t._v("Devel:ninja")]),t._v(" "),n("li",[t._v("Devel:patch")]),t._v(" "),n("li",[t._v("Editors:xxd")]),t._v(" "),n("li",[t._v("Editors:nano (除非你精通vim)")]),t._v(" "),n("li",[t._v("Python:python2")]),t._v(" "),n("li",[t._v("Python:python2-pip")]),t._v(" "),n("li",[t._v("Python:python2-numpy")]),t._v(" "),n("li",[t._v("Python:python2-jinja2")]),t._v(" "),n("li",[t._v("Python:python2-pyyaml")]),t._v(" "),n("li",[t._v("Python:python2-cerberus")]),t._v(" "),n("li",[t._v("Archive:unzip")]),t._v(" "),n("li",[t._v("Utils:astyle")]),t._v(" "),n("li",[t._v("Shells:bash-completion")]),t._v(" "),n("li",[t._v("Web:wget")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Do not select as many packages as possible which are not on this list, there are some which conflict and break the builds.")])])])]),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("That's what [cygwin64/install-cygwin-px4.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat) does.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("下载 "),n("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Apache Ant")]),n("OutboundLink")],1),t._v(" zip 存档, 并将内容解压缩到文件夹 "),n("code",[t._v("C:\\PX4\\toolchain\\apache-ant")]),t._v("。")]),t._v(" "),n("p",[t._v("使用预先准备好的批处理脚本启动开发环境的原因是，这些脚本预配置了程序使用工具链所在目录下的绿色版 Cygwin 环境变量。 这是通过始终首先调用脚本 "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("** setup-environment-variables.bat **"),n("OutboundLink")],1),t._v(" 和所需的应用程序 (如控制台) 来完成的。")]),t._v(" "),n("p",[t._v("脚本 "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("setup-environment-variables.bat")]),n("OutboundLink")],1),t._v("用于设置工作区根目录的环境变量 "),n("code",[t._v("PX4_DIR")]),t._v("、所有可执行程序 "),n("code",[t._v("PATH")]),t._v(" 和 unix 环境的HOME目录"),n("code",[t._v("HOME")]),t._v("。")])]),t._v(" "),n("li",[n("p",[t._v("通过执行 Cygwin 工具链控制台 (双击 ** run-console.bat **) 脚本, 向安装程序添加必要的 ** python 包 **")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pip2 install toml \n")])])])])]),t._v(" "),n("p",[t._v("pip2 install pyserial\npip2 install pyulog")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n:::note That's what [cygwin64/install-cygwin-python-packages.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat) does.\n:::\n\n1. 下载 [**ARM GCC 编译器**](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads) zip 存档，并将内容解压缩到文件夹 `C:\\PX4\\toolchain\\gcc-arm`。\n\n:::note This is what the toolchain does in: [gcc-arm/install-gcc-arm.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat).\n:::\n\n1. 安装 JDK\n* 下载 [** Java Development Kit Installer **](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)。\n* 因为不幸的是, 没有绿色的归档文件直接包含二进制文件, 所以您必须安装它。\n* 查找二进制文件并将其移动/复制到 ** C:\\PX4\\toolchain\\jdk **。\n* 您可以再次从 Windows 系统中卸载该JDK工具包, 我们只需要工具链的二进制文件。\n\n:::note This is what the toolchain does in: [jdk/install-jdk.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat).\n:::\n\n1. {\\[--gt--]} ** 注意 **这就是工具链在 [ gcc-arm/install-apache-ant.bat \\](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat) 脚本中所做的工作。\n\n:::tip Make sure you don't have an additional folder layer from the folder which is inside the downloaded archive.\n:::\n\n:::note This is what the toolchain does in: [apache-ant/install-apache-ant.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat).\n:::\n\n1. Download, build and add *genromfs* to the path:\n* Clone the source code to the folder **C:\\PX4\\toolchain\\genromfs\\genromfs-src** with\n  ```\n  cd /c/toolchain/genromfs\n  git clone https://github.com/chexum/genromfs.git genromfs-src\n  ```\n\n* 使用如下命令进行编译：\n  ```\n  cd genromfs-src\nmake all\n ```\n\n * 将包含有生成的二进制 ** genromfs.exe ** 的文件夹复制到: ** C:\\PX4\\toolchain\\genromfs **\n\n :::note This is what the toolchain does in: [genromfs/install-genromfs.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/genromfs/install-genromfs.bat).\n:::\n\n1. Make sure all the binary folders of all the installed components are correctly listed in the `PATH` variable configured by [**setup-environment.bat**](https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat).\n")])])])])}),[],!1,null,null,null);e.default=o.exports},672:function(t,e,a){t.exports=a.p+"assets/img/cygwin_toolchain_installer.3dba7f07.png"},673:function(t,e,a){t.exports=a.p+"assets/img/jmavsim_windows_cygwin.77037524.png"}}]);