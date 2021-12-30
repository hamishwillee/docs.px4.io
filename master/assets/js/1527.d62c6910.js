(window.webpackJsonp=window.webpackJsonp||[]).push([[1527],{2754:function(t,e,a){"use strict";a.r(e);var n=a(19),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows-cygwin-开发环境-维护说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-开发环境-维护说明"}},[t._v("#")]),t._v(" Windows Cygwin 开发环境 (维护说明)")]),t._v(" "),a("p",[t._v("本主题解释了如何构建和扩展支持的 "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html"}},[t._v("基于Cygwin的Windows开发环境")]),t._v(" 的开发环境。")],1),t._v(" "),a("h2",{attrs:{id:"附加信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),a("p",[a("a",{attrs:{id:"features"}})]),t._v(" "),a("h3",{attrs:{id:"特性-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性-问题"}},[t._v("#")]),t._v(" 特性/问题")]),t._v(" "),a("p",[t._v("以下已知正常功能 (版本 2.0):")]),t._v(" "),a("ul",[a("li",[t._v("使用 jMAVSim 编译和运行 SITL，其性能明显优于虚拟机 (它生成一个原生windows 二进制 ** px4.exe **)。")]),t._v(" "),a("li",[t._v("编译和上传 NuttX 二进制文件（例如：px4_fmu-v2 和 px4_fmu-v4）")]),t._v(" "),a("li",[t._v("使用 "),a("em",[t._v("astyle")]),t._v(" 进行格式检查 (支持命令: "),a("code",[t._v("make format")]),t._v(")")]),t._v(" "),a("li",[t._v("命令行自动补全")]),t._v(" "),a("li",[t._v("绿色安装 安装程序不会影响您的系统和全局路径设置 (它只修改选定的安装目录, 例如 ** C:\\PX4 \\ ** 并使用临时本地路径变量)。")]),t._v(" "),a("li",[t._v("安装程序支持更新到最新版本，同时保持您的个人更改在工具链文件夹中。")])]),t._v(" "),a("p",[t._v("补充：")]),t._v(" "),a("ul",[a("li",[t._v("仿真模拟：暂不支持 Gazebo 和 ROS。")]),t._v(" "),a("li",[t._v("仅支持 NuttX 和 JMAVSim/SITL 构建。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("已知问题"),a("OutboundLink")],1),t._v(" (也用来报告问题)。")])]),t._v(" "),a("p",[a("a",{attrs:{id:"script_setup"}})]),t._v(" "),a("h3",{attrs:{id:"shell-脚本安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本安装"}},[t._v("#")]),t._v(" Shell 脚本安装")]),t._v(" "),a("p",[t._v("你还可以使用 Github 项目中的 shell 脚本进行开发环境的安装。")]),t._v(" "),a("ol",[a("li",[t._v("确保您安装了 "),a("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 版本的 Git"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[t._v("将代码仓库 https://github.com/PX4/windows-toolchain 克隆到要安装工具链的位置。 打开 "),a("code",[t._v("Git Bash")]),t._v(" 并执行以下操作，打开后会自动进入默认的安装目录：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /c/\ngit clone https://github.com/PX4/windows-toolchain PX4\n")])])]),a("ol",[a("li",[t._v("如果要安装所有组件，请进入到新克隆的代码仓库文件夹， 然后双击位于文件夹 "),a("code",[t._v("toolchain")]),t._v("目录中的脚本 "),a("code",[t._v("install-all-components.bat")]),t._v("。 如果您只需要某些组件并希望占用有限的Internet 数据和磁盘空间，则可以进入到不同的组件文件夹，如 "),a("code",[t._v("toolchain\\cygwin64")]),t._v("，然后单击 ** install-XXX.bat ** 脚本以获取特定的内容。")]),t._v(" "),a("li",[t._v("继续 "),a("a",{attrs:{href:"#getting_started"}},[t._v(" 入门指南 ")]),t._v(" (或 "),a("a",{attrs:{href:"#usage_instructions"}},[t._v(" 使用说明 ")]),t._v(")")])]),t._v(" "),a("p",[a("a",{attrs:{id:"manual_setup"}})]),t._v(" "),a("h3",{attrs:{id:"手动安装-用于工具链开发者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动安装-用于工具链开发者"}},[t._v("#")]),t._v(" 手动安装 (用于工具链开发者)")]),t._v(" "),a("p",[t._v("本节描述如何手动设置Cygwin工具链，同时指向基于脚本的安装仓库中对应的脚本。 结果应与使用脚本或 MSI 安装程序相同。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("由于工具链的更新维护，这些指令可能无法涵盖未来更改的所有细节。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建 "),a("em",[t._v("文件夹")]),t._v(": **C:\\PX4**, *"),a("em",[t._v("C:\\PX4\\toolchain*")]),t._v(" 和 *"),a("em",[t._v("C:\\PX4\\home*")])])]),t._v(" "),a("li",[a("p",[t._v("从"),a("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cygwin 官网"),a("OutboundLink")],1),t._v("下载"),a("em",[t._v("Cywin 安装")]),t._v("文件"),a("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-x86_64.exe"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("运行下载的安装文件")])]),t._v(" "),a("li",[a("p",[t._v("在向导中选择安装到文件夹：*"),a("em",[t._v("C:\\PX4\\toolchain\\cygwin64*")])])]),t._v(" "),a("li",[a("p",[t._v("选择安装默认的 Cygwin 基础包和以下附加包的最新可用版本:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类别:Packagename")])]),t._v(" "),a("li",[t._v("Devel:cmake (3.3.2 正常工作无告警, 3.6.2有告警但能够正常工作)")]),t._v(" "),a("li",[t._v("Devel:gcc-g++")]),t._v(" "),a("li",[t._v("Devel:gdb")]),t._v(" "),a("li",[t._v("Devel:git")]),t._v(" "),a("li",[t._v("Devel:make")]),t._v(" "),a("li",[t._v("Devel:ninja")]),t._v(" "),a("li",[t._v("Devel:patch")]),t._v(" "),a("li",[t._v("Editors:xxd")]),t._v(" "),a("li",[t._v("Editors:nano (除非你精通 vim)")]),t._v(" "),a("li",[t._v("Python:python2")]),t._v(" "),a("li",[t._v("Python:python2-pip")]),t._v(" "),a("li",[t._v("Python:python2-numpy")]),t._v(" "),a("li",[t._v("Python:python2-jinja2")]),t._v(" "),a("li",[t._v("Python:python2-pyyaml")]),t._v(" "),a("li",[t._v("Python:python2-cerberus")]),t._v(" "),a("li",[t._v("Archive:unzip")]),t._v(" "),a("li",[t._v("Utils:astyle")]),t._v(" "),a("li",[t._v("Shells:bash-completion")]),t._v(" "),a("li",[t._v("Web:wget")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("不要选择尽可能多的不在这个列表上的软件包，有些软件包冲突和中断构建。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这就是 "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cygwin64/install-cygwin-px4.bat"),a("OutboundLink")],1),t._v(" 批处理做的。")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("编写或复制 "),a("strong",[t._v("批处理脚本")]),t._v(" "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("run-console.bat")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("setup-environment.bat")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("使用预先准备好的批处理脚本启动开发环境的原因是，这些脚本预配置了程序使用工具链所在目录下的绿色版 Cygwin 环境变量。 通过始终先调用脚本"),a("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("** setup-environment.bat **"),a("OutboundLink")],1),t._v("和像控制台这样所需的应用程序来完成此操作。")]),t._v(" "),a("p",[t._v("脚本"),a("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-environment.bat"),a("OutboundLink")],1),t._v("用于设置工作区根目录 "),a("code",[t._v("PX4_DIR")]),t._v("的环境变量，和 unix 环境中的 "),a("code",[t._v("HOME")]),t._v("目录。")])]),t._v(" "),a("li",[a("p",[t._v("通过打开并运行 Cywin 工具链控制台（双击"),a("strong",[t._v("run-console.bat")]),t._v("）来添加必要的 "),a("strong",[t._v("python packages")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip2 install toml\npip2 install pyserial\npip2 install pyulog\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这是脚本 "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-python-packages.bat"),a("OutboundLink")],1),t._v("做的操作。")])]),t._v(" "),a("ol",[a("li",[t._v("下载 "),a("a",{attrs:{href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("ARM GCC 编译器")]),a("OutboundLink")],1),t._v(" zip 二进制压缩包，并将内容解压缩到文件夹 "),a("code",[t._v("C:\\PX4\\toolchain\\gcc-arm")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这是在脚本"),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("gcc-arm/install-gcc-arm.bat"),a("OutboundLink")],1),t._v("中工具链做的操作。")])]),t._v(" "),a("ol",[a("li",[t._v("安装 JDK\n"),a("ul",[a("li",[t._v("从 "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdoptOpenJDK"),a("OutboundLink")],1),t._v(" 下载 Java 14。")]),t._v(" "),a("li",[t._v("不幸的是，没有包含二进制文件的便携存档，您必须直接安装它。")]),t._v(" "),a("li",[t._v("找到二进制文件并将其移动/复制到 "),a("strong",[t._v("C:\\PX4\\toolchain\\jdk")])]),t._v(" "),a("li",[t._v("您可以再次从 Windows 系统卸载工具包，我们只需要工具链中的二进制工具。")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这是工具链在: "),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk/install-jdk.bat"),a("OutboundLink")],1),t._v(" 中所起的作用。")])]),t._v(" "),a("ol",[a("li",[t._v("下载 Windows的二进制文件压缩包"),a("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Apache Ant")]),a("OutboundLink")],1),t._v(" ，并将内容解包到文件夹 "),a("code",[t._v("C:\\PX4\\toolchain\\apache-ant")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("请确保您在下载的归档中没有其他文件夹层。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这是工具链在"),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache-ant/install-apache-ant.bat"),a("OutboundLink")],1),t._v("所做的操作。")])]),t._v(" "),a("ol",[a("li",[t._v("下载、构建并添加"),a("em",[t._v("genromfs")]),t._v("到环境变量:\n"),a("ul",[a("li",[a("p",[t._v("克隆源代码到文件夹 "),a("strong",[t._v("C:\\PX4\\toolchain\\genromfs\\genromfs-src")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd /c/toolchain/genromfs\ngit clone https://github.com/chexum/genromfs.git genromfs-src\n")])])])]),t._v(" "),a("li",[a("p",[t._v("编译:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd genromfs-src\nmake all\n")])])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n* 复制生成的二进制文件**genromfs.exe**到**C:\\PX4\\toolchain\\genromfs**同级目录下\n\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("这是工具链在"),a("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/genromfs/install-genromfs.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("genromfs/install-genromfs.bat"),a("OutboundLink")],1),t._v("中做的操作。")])]),t._v(" "),a("ol",[a("li",[t._v("确保所有已安装组件的二进制文件夹都正确配置在 "),a("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("setup-environment.bat")]),a("OutboundLink")],1),t._v("配置的"),t._v("PATH</0>环境变量中。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);