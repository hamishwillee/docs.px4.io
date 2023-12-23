(window.webpackJsonp=window.webpackJsonp||[]).push([[1939],{3525:function(t,e,n){"use strict";n.r(e);var o=n(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-cygwin-development-environment-maintenance-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-development-environment-maintenance-instructions"}},[t._v("#")]),t._v(" Windows Cygwin Development Environment (Maintenance Instructions)")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("This development environment is "),n("RouterLink",{attrs:{to:"/zh/advanced/community_supported_dev_env.html"}},[t._v("community supported and maintained")]),t._v(". It may or may not work with current versions of PX4.")],1),t._v(" "),n("p",[t._v("See "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),n("p",[t._v("This topic explains how to construct and extend the development environment used for the no-longer-supported "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Cygwin-based Windows Development Environment")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"additional-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),n("h3",{attrs:{id:"features-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#features-issues"}},[t._v("#")]),t._v(" Features / Issues")]),t._v(" "),n("p",[t._v("The following features are known to work (version 2.0):")]),t._v(" "),n("ul",[n("li",[t._v("Building and running SITL with jMAVSim with significantly better performance than a VM (it generates a native windows binary "),n("strong",[t._v("px4.exe")]),t._v(").")]),t._v(" "),n("li",[t._v("Building and uploading NuttX builds (e.g.: px4_fmu-v2 and px4_fmu-v4)")]),t._v(" "),n("li",[t._v("Style check with "),n("em",[t._v("astyle")]),t._v(" (supports the command: "),n("code",[t._v("make format")]),t._v(")")]),t._v(" "),n("li",[t._v("Command line auto completion")]),t._v(" "),n("li",[t._v("Non-invasive installer! The installer does NOT affect your system and global path (it only modifies the selected installation directory e.g. **C:\\PX4** and uses a temporary local path).")]),t._v(" "),n("li",[t._v("The installer supports updating to a new version keeping your personal changes inside the toolchain folder")])]),t._v(" "),n("p",[t._v("Omissions:")]),t._v(" "),n("ul",[n("li",[t._v("Simulation: Gazebo and ROS are not supported.")]),t._v(" "),n("li",[t._v("Only NuttX and JMAVSim/SITL builds are supported.")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Known problems"),n("OutboundLink")],1),t._v(" (Also use to report issues).")])]),t._v(" "),n("h3",{attrs:{id:"shell-script-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell-script-installation"}},[t._v("#")]),t._v(" Shell Script Installation")]),t._v(" "),n("p",[t._v("You can also install the environment using shell scripts in the Github project.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Make sure you have "),n("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows"),n("OutboundLink")],1),t._v(" installed.")])]),t._v(" "),n("li",[n("p",[t._v("Clone the repository https://github.com/PX4/windows-toolchain to the location you want to install the toolchain. Default location and naming is achieved by opening the "),n("code",[t._v("Git Bash")]),t._v(" and executing:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /c/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/windows-toolchain PX4\n")])])])]),t._v(" "),n("li",[n("p",[t._v("If you want to install all components navigate to the freshly cloned folder and double click on the script "),n("code",[t._v("install-all-components.bat")]),t._v(" located in the folder "),n("code",[t._v("toolchain")]),t._v(". If you only need certain components and want to safe Internet traffic and or disk space you can navigate to the different component folders like e.g. "),n("code",[t._v("toolchain\\cygwin64")]),t._v(" and click on the "),n("strong",[t._v("install-XXX.bat")]),t._v(" scripts to only fetch something specific.")])]),t._v(" "),n("li",[n("p",[t._v("Continue with "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html#getting-started"}},[t._v("Getting Started")]),t._v(".")],1)])]),t._v(" "),n("h3",{attrs:{id:"manual-installation-for-toolchain-developers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-for-toolchain-developers"}},[t._v("#")]),t._v(" Manual Installation (for Toolchain Developers)")]),t._v(" "),n("p",[t._v("This section describes how to setup the Cygwin toolchain manually yourself while pointing to the corresponding scripts from the script based installation repo. The result should be the same as using the scripts or MSI installer.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("The toolchain gets maintained and hence these instructions might not cover every detail of all the future changes.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create the "),n("em",[t._v("folders")]),t._v(": **C:\\PX4**, **C:\\PX4\\toolchain** and **C:\\PX4\\home**")])]),t._v(" "),n("li",[n("p",[t._v("Download the "),n("em",[t._v("Cygwin installer")]),t._v(" file "),n("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-x86_64.exe"),n("OutboundLink")],1),t._v(" from the "),n("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Cygwin website"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Run the downloaded setup file")])]),t._v(" "),n("li",[n("p",[t._v("In the wizard choose to install into the folder: **C:\\PX4\\toolchain\\cygwin64**")])]),t._v(" "),n("li",[n("p",[t._v("Select to install the default Cygwin base and the newest available version of the following additional packages:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Category:Packagename")])]),t._v(" "),n("li",[t._v("Devel:cmake (3.3.2 gives no deprecated warnings, 3.6.2 works but has the warnings)")]),t._v(" "),n("li",[t._v("Devel:gcc-g++")]),t._v(" "),n("li",[t._v("Devel:gdb")]),t._v(" "),n("li",[t._v("Devel:git")]),t._v(" "),n("li",[t._v("Devel:make")]),t._v(" "),n("li",[t._v("Devel:ninja")]),t._v(" "),n("li",[t._v("Devel:patch")]),t._v(" "),n("li",[t._v("Editors:xxd")]),t._v(" "),n("li",[t._v("Editors:nano (unless you're the vim pro)")]),t._v(" "),n("li",[t._v("Python:python2")]),t._v(" "),n("li",[t._v("Python:python2-pip")]),t._v(" "),n("li",[t._v("Python:python2-numpy")]),t._v(" "),n("li",[t._v("Python:python2-jinja2")]),t._v(" "),n("li",[t._v("Python:python2-pyyaml")]),t._v(" "),n("li",[t._v("Python:python2-cerberus")]),t._v(" "),n("li",[t._v("Archive:unzip")]),t._v(" "),n("li",[t._v("Utils:astyle")]),t._v(" "),n("li",[t._v("Shells:bash-completion")]),t._v(" "),n("li",[t._v("Web:wget")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),n("p",[t._v("Do not select as many packages as possible which are not on this list, there are some which conflict and break the builds.\n:::")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("That's what "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-px4.bat"),n("OutboundLink")],1),t._v(" does.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Write up or copy the "),n("strong",[t._v("batch scripts")]),t._v(" "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/run-console.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("run-console.bat")]),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("setup-environment.bat")]),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("The reason to start all the development tools through the prepared batch script is they preconfigure the starting program to use the local, portable Cygwin environment inside the toolchain's folder. This is done by always first calling the script "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("setup-environment.bat")]),n("OutboundLink")],1),t._v(" and the desired application like the console after that.")]),t._v(" "),n("p",[t._v("The script "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-environment.bat"),n("OutboundLink")],1),t._v(" locally sets environmental variables for the workspace root directory "),n("code",[t._v("PX4_DIR")]),t._v(", all binary locations "),n("code",[t._v("PATH")]),t._v(", and the home directory of the unix environment "),n("code",[t._v("HOME")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Add necessary "),n("strong",[t._v("python packages")]),t._v(" to your setup by opening the Cygwin toolchain console (double clicking "),n("strong",[t._v("run-console.bat")]),t._v(") and executing")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("pip2 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" toml\npip2 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyserial\npip2 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyulog\n")])])])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("That's what "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("cygwin64/install-cygwin-python-packages.bat"),n("OutboundLink")],1),t._v(" does.")])]),t._v(" "),n("ol",[n("li",[t._v("Download the "),n("a",{attrs:{href:"https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("ARM GCC compiler")]),n("OutboundLink")],1),t._v(" as zip archive of the binaries for Windows and unpack the content to the folder "),n("code",[t._v("C:\\PX4\\toolchain\\gcc-arm")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("This is what the toolchain does in: "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("gcc-arm/install-gcc-arm.bat"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Install the JDK:")]),t._v(" "),n("ul",[n("li",[t._v("Download Java 14 from "),n("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://adoptopenjdk.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AdoptOpenJDK"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("li",[t._v("Because sadly there is no portable archive containing the binaries directly you have to install it.")]),t._v(" "),n("li",[t._v("Find the binaries and move/copy them to "),n("strong",[t._v("C:\\PX4\\toolchain\\jdk")]),t._v(".")]),t._v(" "),n("li",[t._v("You can uninstall the Kit from your Windows system again, we only needed the binaries for the toolchain.")])])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("This is what the toolchain does in: "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("jdk/install-jdk.bat"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Download "),n("a",{attrs:{href:"https://ant.apache.org/bindownload.cgi",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Apache Ant")]),n("OutboundLink")],1),t._v(" as zip archive of the binaries for Windows and unpack the content to the folder "),n("code",[t._v("C:\\PX4\\toolchain\\apache-ant")]),t._v(".")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")])])])]),t._v(" "),n("p",[t._v("Make sure you don't have an additional folder layer from the folder which is inside the downloaded archive.\n:::")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("This is what the toolchain does in: "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat",target:"_blank",rel:"noopener noreferrer"}},[t._v("apache-ant/install-apache-ant.bat"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Download, build and add "),n("em",[t._v("genromfs")]),t._v(" to the path:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Clone the source code to the folder "),n("strong",[t._v("C:\\PX4\\toolchain\\genromfs\\genromfs-src")]),t._v(" with")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /c/toolchain/genromfs\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/chexum/genromfs.git genromfs-src\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Compile it with:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" genromfs-src\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" all\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Copy the resulting binary "),n("strong",[t._v("genromfs.exe")]),t._v(" one folder level out to: "),n("strong",[t._v("C:\\PX4\\toolchain\\genromfs")])])])])]),t._v(" "),n("li",[n("p",[t._v("Make sure all the binary folders of all the installed components are correctly listed in the "),n("code",[t._v("PATH")]),t._v(" variable configured by "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("setup-environment.bat")]),n("OutboundLink")],1),t._v(".")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);