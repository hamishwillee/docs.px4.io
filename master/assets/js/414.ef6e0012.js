(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1968:function(t,e,o){"use strict";o.r(e);var n=o(18),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-cygwin-toolchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-cygwin-toolchain"}},[t._v("#")]),t._v(" Windows Cygwin Toolchain")]),t._v(" "),n("p",[t._v("This toolchain is portable, easy to install, and easy to use. It is the newest and best performing toolchain for developing PX4 on Windows.")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("This is the only officially supported toolchain for building PX4 on Windows (i.e. it is tested in our continuous integration system).")])]),t._v(" "),n("p",[t._v("The toolchain supports:")]),t._v(" "),n("ul",[n("li",[t._v("Build/upload of PX4 to NuttX targets (Pixhawk series controllers)")]),t._v(" "),n("li",[t._v("JMAVSim/SITL simulator with significantly better performance than the other Windows toolchains.")]),t._v(" "),n("li",[t._v("Style check, portable installer, command line completion and many "),n("a",{attrs:{href:"#features"}},[t._v("other features")]),t._v(".")])]),t._v(" "),n("p",[t._v("This topic explains how download and use the environment, and how it can be extended and updated if needed (for example, to use a different compiler).")]),t._v(" "),n("p",[n("a",{attrs:{id:"installation"}})]),t._v(" "),n("h2",{attrs:{id:"installation-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[t._v("#")]),t._v(" Installation Instructions")]),t._v(" "),n("ol",[n("li",[t._v("Download the latest version of the ready-to-use MSI installer from "),n("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.5.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Run it, choose your desired installation location, let it install "),n("img",{attrs:{src:o(672),alt:"jMAVSimOnWindows"}})]),t._v(" "),n("li",[t._v("Tick the box at the end of the installation to "),n("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(" (this simplifies the process to get you started). :::note If you missed this step you will need to "),n("a",{attrs:{href:"#getting_started"}},[t._v("clone the PX4-Autopilot repository manually")]),t._v(".\n:::")])]),t._v(" "),n("p",[n("a",{attrs:{id:"getting_started"}})]),t._v(" "),n("h2",{attrs:{id:"getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),n("p",[t._v("The toolchain uses a specially configured console window (started by running the "),n("strong",[t._v("run-console.bat")]),t._v(" script) from which you can call the normal PX4 build commands:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Browse to the toolchain installation directory (default "),n("strong",[t._v("C:\\PX4")]),t._v(")")])]),t._v(" "),n("li",[n("p",[t._v("Run "),n("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the Cygwin bash console")])]),t._v(" "),n("li",[n("p",[t._v("Clone the PX4 Firmware repository from within the console:")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Cloning only needs to be done once! Skip this step if you ticked the installer option to *clone the PX4 repository, build and run simulation with jMAVSim*.")])])])]),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),n("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("For example, to run JMAVSim:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Navigate to Firmware repo")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build and runs SITL simulation with jMAVSim to test the setup")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),n("p",[t._v("The console will then display:")]),t._v(" "),n("p",[n("img",{attrs:{src:o(673),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),n("p",[t._v("Continue next to "),n("RouterLink",{attrs:{to:"/ko/setup/building_px4.html"}},[t._v("the detailed instructions on how to build PX4")]),t._v(" (or see the section below for more general usage instructions).")],1),t._v(" "),n("p",[n("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),n("h2",{attrs:{id:"usage-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage-instructions"}},[t._v("#")]),t._v(" Usage Instructions")]),t._v(" "),n("p",[t._v("The installation directory (default: **C:\\PX4**) contains a batch script for launching the PX4 SITL (linux like) bash console: "),n("strong",[t._v("run-console.bat")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"#manual_setup"}},[t._v("Manual Setup")]),t._v(" section explains why you need to use the script and how it all works.")])]),t._v(" "),n("p",[t._v("The ordinary workflow consists of starting a console window by double clicking on the "),n("strong",[t._v("run-console.bat")]),t._v(" script to manually run terminal commands.")]),t._v(" "),n("h3",{attrs:{id:"file-monitoring-tools-vs-toolchain-speed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file-monitoring-tools-vs-toolchain-speed"}},[t._v("#")]),t._v(" File Monitoring Tools vs Toolchain Speed")]),t._v(" "),n("p",[t._v("Antivirus and other background file monitoring tools can significantly slow down both installation of the toolchain and PX4 build times.")]),t._v(" "),n("p",[t._v("You may wish to halt them temporarily during builds (at your own risk).")]),t._v(" "),n("h3",{attrs:{id:"windows-git-special-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-special-cases"}},[t._v("#")]),t._v(" Windows & Git Special Cases")]),t._v(" "),n("h4",{attrs:{id:"windows-cr-lf-vs-unix-lf-line-endings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-vs-unix-lf-line-endings"}},[t._v("#")]),t._v(" Windows CR+LF vs Unix LF Line Endings")]),t._v(" "),n("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code). Compilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),n("code",[t._v("$'\\r': Command not found.")]),t._v("). Luckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),n("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --global ...\n")])])]),n("p",[t._v("This is not recommended because it may affect any other (unrelated) git use on your Windows machine.")]),t._v(" "),n("h4",{attrs:{id:"unix-permissions-execution-bit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unix-permissions-execution-bit"}},[t._v("#")]),t._v(" Unix Permissions Execution Bit")]),t._v(" "),n("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed. "),n("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it). This often results in "),n("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions. The resulting diff might look like this:')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\n")])])]),n("p",[t._v("We recommend globally disabling the permission check on Windows to avoid the problem:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --global core.fileMode false # disable execution bit check globally for the machine\n")])])]),n("p",[t._v("For existing repositories that have this problem caused by a local configuration, additionally:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git config --unset core.filemode # remove the local option for this repository to apply the global one\ngit submodule foreach --recursive git config --unset core.filemode # remove the local option for all submodules\n")])])]),n("h2",{attrs:{id:"additional-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional Information")]),t._v(" "),n("p",[n("a",{attrs:{id:"features"}})]),t._v(" "),n("h3",{attrs:{id:"features-issues"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#features-issues"}},[t._v("#")]),t._v(" Features / Issues")]),t._v(" "),n("p",[t._v("The following features are known to work (version 2.0):")]),t._v(" "),n("ul",[n("li",[t._v("Building and running SITL with jMAVSim with significantly better performance than a VM (it generates a native windows binary "),n("strong",[t._v("px4.exe")]),t._v(").")]),t._v(" "),n("li",[t._v("Building and uploading NuttX builds (e.g.: px4_fmu-v2 and px4_fmu-v4)")]),t._v(" "),n("li",[t._v("Style check with "),n("em",[t._v("astyle")]),t._v(" (supports the command: "),n("code",[t._v("make format")]),t._v(")")]),t._v(" "),n("li",[t._v("Command line auto completion")]),t._v(" "),n("li",[t._v("Non-invasive installer! The installer does NOT affect your system and global path (it only modifies the selected installation directory e.g. "),n("strong",[t._v("C:\\PX4")]),t._v(" and uses a temporary local path).")]),t._v(" "),n("li",[t._v("The installer supports updating to a new version keeping your personal changes inside the toolchain folder")])]),t._v(" "),n("p",[t._v("Omissions:")]),t._v(" "),n("ul",[n("li",[t._v("Simulation: Gazebo and ROS are not supported")]),t._v(" "),n("li",[t._v("Only NuttX and JMAVSim/SITL builds are supported.")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/orgs/PX4/projects/6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Known problems"),n("OutboundLink")],1),t._v(" (Also use to report issues).")])]),t._v(" "),n("p",[n("a",{attrs:{id:"script_setup"}})]),t._v(" "),n("h3",{attrs:{id:"shell-script-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell-script-installation"}},[t._v("#")]),t._v(" Shell Script Installation")]),t._v(" "),n("p",[t._v("You can also install the environment using shell scripts in the Github project.")]),t._v(" "),n("ol",[n("li",[t._v("Make sure you have "),n("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git for Windows"),n("OutboundLink")],1),t._v(" installed.")]),t._v(" "),n("li",[t._v("Clone the repository https://github.com/PX4/windows-toolchain to the location you want to install the toolchain. Default location and naming is achieved by opening the "),n("code",[t._v("Git Bash")]),t._v(" and executing:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("> **Note** That's what [cygwin64/install-cygwin-px4.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat) does.\n")])])]),n("ol",[n("li",[t._v("If you want to install all components navigate to the freshly cloned folder and double click on the script "),n("code",[t._v("install-all-components.bat")]),t._v(" located in the folder "),n("code",[t._v("toolchain")]),t._v(". If you only need certain components and want to safe Internet traffic and or disk space you can navigate to the different component folders like e.g. "),n("code",[t._v("toolchain\\cygwin64")]),t._v(" and click on the "),n("strong",[t._v("install-XXX.bat")]),t._v(" scripts to only fetch something specific.")]),t._v(" "),n("li",[t._v("Continue with "),n("a",{attrs:{href:"#getting_started"}},[t._v("Getting Started")]),t._v(" (or "),n("a",{attrs:{href:"#usage_instructions"}},[t._v("Usage Instructions")]),t._v(")")])]),t._v(" "),n("p",[n("a",{attrs:{id:"manual_setup"}})]),t._v(" "),n("h3",{attrs:{id:"manual-installation-for-toolchain-developers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#manual-installation-for-toolchain-developers"}},[t._v("#")]),t._v(" Manual Installation (for Toolchain Developers)")]),t._v(" "),n("p",[t._v("This section describes how to setup the Cygwin toolchain manually yourself while pointing to the corresponding scripts from the script based installation repo. The result should be the same as using the scripts or MSI installer.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The toolchain gets maintained and hence these instructions might not cover every detail of all the future changes.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create the "),n("em",[t._v("folders")]),t._v(": "),n("strong",[t._v("C:\\PX4")]),t._v(", "),n("strong",[t._v("C:\\PX4\\toolchain")]),t._v(" and "),n("strong",[t._v("C:\\PX4\\home")])])]),t._v(" "),n("li",[n("p",[t._v("Download the "),n("em",[t._v("Cygwin installer")]),t._v(" file "),n("a",{attrs:{href:"https://cygwin.com/setup-x86_64.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup-x86_64.exe"),n("OutboundLink")],1),t._v(" from the "),n("a",{attrs:{href:"https://cygwin.com/install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Cygwin website"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Run the downloaded setup file")])]),t._v(" "),n("li",[n("p",[t._v("In the wizard choose to install into the folder: "),n("strong",[t._v("C:\\PX4\\toolchain\\cygwin64")])])]),t._v(" "),n("li",[n("p",[t._v("Select to install the default Cygwin base and the newest available version of the following additional packages:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Category:Packagename")])]),t._v(" "),n("li",[t._v("Devel:cmake (3.3.2 gives no deprecated warnings, 3.6.2 works but has the warnings)")]),t._v(" "),n("li",[t._v("Devel:gcc-g++")]),t._v(" "),n("li",[t._v("Devel:gdb")]),t._v(" "),n("li",[t._v("Devel:git")]),t._v(" "),n("li",[t._v("Devel:make")]),t._v(" "),n("li",[t._v("Devel:ninja")]),t._v(" "),n("li",[t._v("Devel:patch")]),t._v(" "),n("li",[t._v("Editors:xxd")]),t._v(" "),n("li",[t._v("Editors:nano (unless you're the vim pro)")]),t._v(" "),n("li",[t._v("Python:python2")]),t._v(" "),n("li",[t._v("Python:python2-pip")]),t._v(" "),n("li",[t._v("Python:python2-numpy")]),t._v(" "),n("li",[t._v("Python:python2-jinja2")]),t._v(" "),n("li",[t._v("Python:python2-pyyaml")]),t._v(" "),n("li",[t._v("Python:python2-cerberus")]),t._v(" "),n("li",[t._v("Archive:unzip")]),t._v(" "),n("li",[t._v("Utils:astyle")]),t._v(" "),n("li",[t._v("Shells:bash-completion")]),t._v(" "),n("li",[t._v("Web:wget")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Do not select as many packages as possible which are not on this list, there are some which conflict and break the builds.")])])])]),t._v(" "),n("p",[t._v(":::")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("That's what [cygwin64/install-cygwin-px4.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-px4.bat) does.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("The installation directory (default: "),n("strong",[t._v("C:\\PX4")]),t._v(") contains a batch script for launching the PX4 SITL (linux like) bash console: "),n("strong",[t._v("run-console.bat")])]),t._v(" "),n("p",[t._v("The reason to start all the development tools through the prepared batch script is they preconfigure the starting program to use the local, portable Cygwin environment inside the toolchain's folder. This is done by always first calling the script "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("setup-environment-variables.bat")]),n("OutboundLink")],1),t._v(" and the desired application like the console after that.")]),t._v(" "),n("p",[t._v("The script "),n("a",{attrs:{href:"https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/setup-environment-variables.bat",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("setup-environment-variables.bat")]),n("OutboundLink")],1),t._v(" locally sets environmental variables for the workspace root directory "),n("code",[t._v("PX4_DIR")]),t._v(", all binary locations "),n("code",[t._v("PATH")]),t._v(", and the home directory of the unix environment "),n("code",[t._v("HOME")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Add necessary "),n("strong",[t._v("python packages")]),t._v(" to your setup by opening the Cygwin toolchain console (double clicking "),n("strong",[t._v("run-console.bat")]),t._v(") and executing")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("pip2 install toml\n")])])])])]),t._v(" "),n("p",[t._v("pip2 install pyserial\npip2 install pyulog")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("\n:::note That's what [cygwin64/install-cygwin-python-packages.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/cygwin64/install-cygwin-python-packages.bat) does.\n:::\n\n1. Download the [**ARM GCC compiler**](https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads) as zip archive of the binaries for Windows and unpack the content to the folder `C:\\PX4\\toolchain\\gcc-arm`.\n\n:::note This is what the toolchain does in: [gcc-arm/install-gcc-arm.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/gcc-arm/install-gcc-arm.bat).\n:::\n\n1. Install the JDK:\n* Download the [**Java Development Kit Installer**](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).\n* Because sadly there is no portable archive containing the binaries directly you have to install it.\n* Find the binaries and move/copy them to **C:\\PX4\\toolchain\\jdk**.\n* You can uninstall the Kit from your Windows system again, we only needed the binaries for the toolchain.\n\n:::note This is what the toolchain does in: [jdk/install-jdk.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/jdk/install-jdk.bat).\n:::\n\n1. Download [**Apache Ant**](https://ant.apache.org/bindownload.cgi) as zip archive of the binaries for Windows and unpack the content to the folder `C:\\PX4\\toolchain\\apache-ant`.\n\n:::tip Make sure you don't have an additional folder layer from the folder which is inside the downloaded archive.\n:::\n\n:::note This is what the toolchain does in: [apache-ant/install-apache-ant.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/apache-ant/install-apache-ant.bat).\n:::\n\n1. Download, build and add *genromfs* to the path:\n* Clone the source code to the folder **C:\\PX4\\toolchain\\genromfs\\genromfs-src** with\n  ```\n  cd /c/toolchain/genromfs\n  git clone https://github.com/chexum/genromfs.git genromfs-src\n  ```\n\n* Compile it with:\n  ```\n  cd genromfs-src\nmake all\n ```\n\n * Copy the resulting binary **genromfs.exe** one folder level out to: **C:\\PX4\\toolchain\\genromfs**\n\n :::note This is what the toolchain does in: [genromfs/install-genromfs.bat](https://github.com/MaEtUgR/PX4Toolchain/blob/master/toolchain/genromfs/install-genromfs.bat).\n:::\n\n1. Make sure all the binary folders of all the installed components are correctly listed in the `PATH` variable configured by [**setup-environment.bat**](https://github.com/PX4/windows-toolchain/blob/master/toolchain/scripts/setup-environment.bat).\n")])])])])}),[],!1,null,null,null);e.default=a.exports},672:function(t,e,o){t.exports=o.p+"assets/img/cygwin_toolchain_installer.3dba7f07.png"},673:function(t,e,o){t.exports=o.p+"assets/img/jmavsim_windows_cygwin.77037524.png"}}]);