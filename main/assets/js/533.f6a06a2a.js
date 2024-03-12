(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{2043:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"windows-development-environment-wsl2-based"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-environment-wsl2-based"}},[t._v("#")]),t._v(" Windows Development Environment (WSL2-Based)")]),t._v(" "),n("p",[t._v("The following instructions explain how to set up a PX4 development environment on Windows 10 or 11, running on Ubuntu Linux within "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL2"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("This environment can be used to build PX4 for:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Pixhawk and other NuttX-based hardware")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo Simulation")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo-Classic Simulation")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/sim_jmavsim/"}},[t._v("jMAVSim Simulation")])],1)]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("This setup is supported by the PX4 dev team.\nThe environment should in theory be able to build any target that can be built on Ubuntu.\nThe list above are those targets that have been tested.")])]),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Subsystem for Linux"),n("OutboundLink")],1),t._v(" ("),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/compare-versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL2"),n("OutboundLink")],1),t._v(") allows users to install and run the "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" on Windows, "),n("em",[t._v("almost")]),t._v(" as though we were running it on a Linux computer.")],1),t._v(" "),n("p",[t._v("With this environment developers can:")]),t._v(" "),n("ul",[n("li",[t._v("Build any simulator or hardware target supported by "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" in the WSL Shell.\n(Ubuntu is the best supported and tested PX4 development platform).")],1),t._v(" "),n("li",[t._v("Debug code in "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_windows_wsl.html#visual-studio-code-integration"}},[t._v("Visual Studio Code")]),t._v(" running on Windows.")],1),t._v(" "),n("li",[t._v("Monitor a "),n("em",[t._v("simulation")]),t._v(" using "),n("em",[t._v("QGroundControl for Linux")]),t._v(" running in WSL.\nQGC for Linux connects automatically to the simulation.")])]),t._v(" "),n("p",[n("em",[t._v("QGroundControl for Windows")]),t._v(" is additionally required if you need to:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#flash-a-flight-control-board"}},[t._v("Update firmware")]),t._v(" on a real vehicle.")]),t._v(" "),n("li",[t._v("Monitor a real vehicle.\nNote that you can also use it to monitor a simulation, but you must manually "),n("a",{attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("connect to the simulation running in WSL")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("Connecting to a USB device from within WSL is not supported, so you can't update firmware using the "),n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#uploading-firmware-flashing-the-board"}},[n("code",[t._v("upload")])]),t._v(" option when building on the command line, or from "),n("em",[t._v("QGroundControl for Linux")]),t._v(".")],1)]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The approach is similar to installing PX4 in your "),n("em",[t._v("own")]),t._v(" virtual machine, as described in "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_windows_vm.html"}},[t._v("Windows VM-Hosted Toolchain")]),t._v(".\nThe benefit of WSL2 is that its virtual machine is deeply integrated into Windows, system-managed, and performance optimised.")],1)]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("h3",{attrs:{id:"install-wsl2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-wsl2"}},[t._v("#")]),t._v(" Install WSL2")]),t._v(" "),n("p",[t._v("To install WSL2 with Ubuntu on a new installation of Windows 10 or 11:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v('Make sure your computer your computer\'s virtualization feature is enabled in the BIOS.\nIt\'s usually referred as "Virtualization Technology", "Intel VT-x" or "AMD-V" respectively')])]),t._v(" "),n("li",[n("p",[t._v("Open "),n("em",[t._v("cmd.exe")]),t._v(" as administrator.\nThis can be done by pressing the start key, typing "),n("code",[t._v("cmd")]),t._v(", right-clicking on the "),n("em",[t._v("Command prompt")]),t._v(" entry and selecting "),n("strong",[t._v("Run as administrator")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Execute the following commands to install WSL2 and a particular Ubuntu version:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Default version (Ubuntu 22.04):")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl --install\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Ubuntu 20.04 ("),n("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo-Classic Simulation")]),t._v(")")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl --install -d Ubuntu-20.04\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Ubuntu 22.04 ("),n("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo Simulation")]),t._v(")")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl --install -d Ubuntu-22.04\n")])])])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("You can also install"),n("a",{attrs:{href:"https://www.microsoft.com/store/productId/9MTTCL66CPXJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 20.04"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://www.microsoft.com/store/productId/9PN20MSR04DW",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 22.04"),n("OutboundLink")],1),t._v(" from the store, which allows you to delete the application using the normal Windows Add/Remove settings:")])])]),t._v(" "),n("li",[n("p",[t._v("WSL will prompt you for a user name and password for the Ubuntu installation.\nRecord these credentials as you will need them later on!")])])]),t._v(" "),n("p",[t._v("The command prompt is now a terminal within the newly installed Ubuntu environment.")]),t._v(" "),n("h3",{attrs:{id:"opening-a-wsl-shell"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-wsl-shell"}},[t._v("#")]),t._v(" Opening a WSL Shell")]),t._v(" "),n("p",[t._v("All operations to install and build PX4 must be done within a WSL Shell (you can use the same shell that was used to install WSL2 or open a new one).")]),t._v(" "),n("p",[t._v("If you're using "),n("a",{attrs:{href:"https://learn.microsoft.com/en-us/windows/terminal/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Terminal"),n("OutboundLink")],1),t._v(" you can open a shell into an installed WSL environment as shown, and exit it by closing the tab.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(756),alt:"Windows Terminal showing how to select a Ubuntu shell"}})]),t._v(" "),n("p",[t._v("To open a WSL shell using a command prompt:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Open a command prompt:")]),t._v(" "),n("ul",[n("li",[t._v("Press the Windows "),n("strong",[t._v("Start")]),t._v(" key.")]),t._v(" "),n("li",[t._v("Type "),n("code",[t._v("cmd")]),t._v(" and press "),n("strong",[t._v("Enter")]),t._v(" to open the prompt.")])])]),t._v(" "),n("li",[n("p",[t._v("To start WSL and access the WSL shell, execute the command:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl -d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("distribution_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("p",[t._v("For example:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl -d Ubuntu\n")])])]),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("wsl -d Ubuntu-20.04\n")])])]),n("p",[t._v("If you only have one version of Ubuntu, you can just use "),n("code",[t._v("wsl")]),t._v(".")])])]),t._v(" "),n("p",[t._v("Enter the following commands to first close the WSL shell, and then shut down WSL:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nwsl -d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("distribution_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --shutdown\n")])])]),n("p",[t._v("Alternatively, after entering "),n("code",[t._v("exit")]),t._v(" you can just close the prompt.")]),t._v(" "),n("h3",{attrs:{id:"install-px4-toolchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-px4-toolchain"}},[t._v("#")]),t._v(" Install PX4 Toolchain")]),t._v(" "),n("p",[t._v("Next we download the PX4 source code within the WSL2 environment, and use the normal "),n("em",[t._v("Ubuntu installer script")]),t._v(" to to set up the developer environment.\nThis will install the toolchain for Gazebo Classic simulation, JMAVSim simulation and Pixhawk/NuttX hardware.")]),t._v(" "),n("p",[t._v("To install the development toolchain:")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL2 Shell")]),t._v(" (if it is still open you can use the same one that was used to install WSL2).")])]),t._v(" "),n("li",[n("p",[t._v("Execute the command "),n("code",[t._v("cd ~")]),t._v(" to switch to the home folder of WSL for the next steps.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("This is important!\nIf you work from a location outside of the WSL file system you'll run into issues such as very slow execution and access right/permission errors.")])])]),t._v(" "),n("li",[n("p",[t._v("Download the PX4 source code using "),n("code",[t._v("git")]),t._v(" (which is already installed in WSL2):")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The environment setup scripts in the source usually work for recent PX4 releases.\nIf working with an older version of PX4 you may need to "),n("RouterLink",{attrs:{to:"/en/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to your release")]),t._v(".")],1)])]),t._v(" "),n("li",[n("p",[t._v("Run the "),n("strong",[t._v("ubuntu.sh")]),t._v(" installer script and acknowledge any prompts as the script progresses:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("This installs tools to build PX4 for Pixhawk, Gazebo Classic and JMAVSim targets:")]),t._v(" "),n("ul",[n("li",[t._v("You can use the "),n("code",[t._v("--no-nuttx")]),t._v(" and "),n("code",[t._v("--no-sim-tools")]),t._v(" options to omit the NuttX and/or simulation tools.")]),t._v(" "),n("li",[t._v("Other Linux build targets are untested (you can try these by entering the appropriate commands in "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" into the WSL shell).")],1)])])]),t._v(" "),n("li",[n("p",[t._v('Restart the "WSL computer" after the script completes (exit the shell, shutdown WSL, and restart WSL):')]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nwsl --shutdown\nwsl\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Switch to the PX4 repository in the WSL home folder:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Build the PX4 SITL target and test your environment:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl\n")])])])])]),t._v(" "),n("p",[t._v("For more build options see "),n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"visual-studio-code-integration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-integration"}},[t._v("#")]),t._v(" Visual Studio Code Integration")]),t._v(" "),n("p",[t._v("VS Code running on Windows is well integrated with WSL.")]),t._v(" "),n("p",[t._v("To set up the integration:")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),n("OutboundLink")],1),t._v(" and install Visual Studio Code (VS Code) on Windows,")])]),t._v(" "),n("li",[n("p",[t._v("Open "),n("em",[t._v("VS Code")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Install the extension called "),n("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remote - WSL"),n("OutboundLink")],1),t._v(" (marketplace)")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")])])]),t._v(" "),n("li",[n("p",[t._v("In the WSL shell, switch to the PX4 folder:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n")])])])]),t._v(" "),n("li",[n("p",[t._v("In the WSL shell, start VS Code:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("code "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),n("p",[t._v("This will open the IDE fully integrated with the WSL shell.")]),t._v(" "),n("p",[t._v("Make sure you always open the PX4 repository in the Remote WSL mode.")])]),t._v(" "),n("li",[n("p",[t._v("Next time you want to develop WSL2 you can very easily open it again in Remote WSL mode by selecting "),n("strong",[t._v("Open Recent")]),t._v(" (as shown below).\nThis will start WSL for you.")]),t._v(" "),n("p",[n("img",{attrs:{src:s(757),alt:""}})]),t._v(" "),n("p",[t._v("Note however that the IP address of the WSL virtual machine will have changed, so you won't be able to monitor simulation from QGC for Windows (you can still monitor using QGC for Linux)")])])]),t._v(" "),n("h2",{attrs:{id:"qgroundcontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),n("p",[t._v("You can run QGroundControl in either WSL or Windows to connect to the running simulation.\nIf you need to "),n("a",{attrs:{href:"#flash-a-flight-control-board"}},[t._v("flash a flight control board")]),t._v(" with new firmware you can only do this from the QGroundControl for Windows.")]),t._v(" "),n("h3",{attrs:{id:"qgroundcontrol-in-wsl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-in-wsl"}},[t._v("#")]),t._v(" QGroundControl in WSL")]),t._v(" "),n("p",[t._v("The easiest way to set up and use QGroundControl is to download the Linux version into your WSL.")]),t._v(" "),n("p",[t._v("You can do this using from within the WSL shell.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("In a web browser, navigate to the QGC "),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html#ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu download section"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Right-click on the "),n("strong",[t._v("QGroundControl.AppImage")]),t._v(' link, and select "Copy link address".\nThis will be something like '),n("em",[t._v("https://d176td9ibe4jno.cloudfront.net/builds/master/QGroundControl.AppImage")])])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")]),t._v(" and enter the following commands to download the appimage and make it executable (replace the AppImage URL where indicated):")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("the_copied_AppImage_URL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x QGroundControl.AppImage\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Run QGroundControl:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("./QGroundControl.AppImage\n")])])])])]),t._v(" "),n("p",[t._v("QGroundControl will launch and automatically connect to a running simulation and allow you to monitor and control your vehicle(s).")]),t._v(" "),n("p",[t._v("You will not be able to use it to install PX4 firmware because WSL does not allow access to serial devices.")]),t._v(" "),n("h3",{attrs:{id:"qgroundcontrol-on-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("#")]),t._v(" QGroundcontrol on Windows")]),t._v(" "),n("p",[t._v("Install "),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html#windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl on Windows"),n("OutboundLink")],1),t._v(" if you want to be able to update hardware with firmware created within PX4.")]),t._v(" "),n("p",[t._v("These steps describe how you can connect to the simulation running in the WSL:")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")])])]),t._v(" "),n("li",[n("p",[t._v("Check the IP address of the WSL virtual machine by running the command "),n("code",[t._v("ip addr | grep eth0")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" eth0\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": eth0: "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc mq state UP group default qlen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    inet "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.18")]),t._v(".46.131/20 brd "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.18")]),t._v(".47.255 scope global eth0\n")])])]),n("p",[t._v("Copy the first part of the "),n("code",[t._v("eth0")]),t._v(" interface "),n("code",[t._v("inet")]),t._v(" address to the clipboard.\nIn this case: "),n("code",[t._v("172.18.46.131")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("In QGC go to "),n("strong",[t._v("Q > Application Settings > Comm Links")])])]),t._v(" "),n("li",[n("p",[t._v('Add a UDP Link called "WSL" to port '),n("code",[t._v("18570")]),t._v(" of the IP address copied above.")])]),t._v(" "),n("li",[n("p",[t._v("Save it and connect to it.")])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("You will have to update the WSL comm link in QGC every time WSL restarts (because it gets a dynamic IP address).")])]),t._v(" "),n("h2",{attrs:{id:"flash-a-flight-control-board"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flash-a-flight-control-board"}},[t._v("#")]),t._v(" Flash a Flight Control Board")]),t._v(" "),n("p",[t._v("Flashing a custom built PX4 binary has to be done using "),n("a",{attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("QGroundControl for Windows")]),t._v(" since WSL2 does not natively offer direct access to serial devices like Pixhawk boards.")]),t._v(" "),n("p",[t._v("Do the following steps to flash your custom binary built in WSL:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("If you haven't already build the binary in WSL e.g. with a "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_windows_wsl.html#opening-a-wsl-shell"}},[t._v("WSL shell")]),t._v(" and by running:")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5\n")])])]),n("p",[t._v('Note: Use the correct target for your board.\n"px4_fmu-v5" can be used for a Pixhawk 4 board.')])]),t._v(" "),n("li",[n("p",[t._v("Detach the USB cable of your Pixhawk board from the computer if it was plugged.")])]),t._v(" "),n("li",[n("p",[t._v("Open QGC.")])]),t._v(" "),n("li",[n("p",[t._v("In QGC go to "),n("strong",[t._v("Q > Vehicle Setup > Firmware")])])]),t._v(" "),n("li",[n("p",[t._v("Plug your pixhawk board via USB")])]),t._v(" "),n("li",[n("p",[t._v('Once connected select "PX4 Flight Stack", check "Advanced settings" and choose "Custom firmware file ..." from the drop down below.')])]),t._v(" "),n("li",[n("p",[t._v('Continue and select the firmware binary you just built before.\nIn the open dialog look for the "Linux" location with the penguin icon in the left pane.\nIt\'s usually all the way at the bottom.\nChoose the file in the path: '),n("code",[t._v("Ubuntu\\home\\{your WSL user name}\\PX4-Autopilot\\build\\{your build target}\\{your build target}.px4")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("You can add the folder to the favourites to access it quickly next time.")])])]),t._v(" "),n("li",[n("p",[t._v("Start the flashing.")])])]),t._v(" "),n("h2",{attrs:{id:"troubleshooting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),n("p",[t._v("If you have any problems with your setup, check the current "),n("a",{attrs:{href:"https://learn.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft WSL installation documentation"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("We also recommend that you have the latest Windows GPU drivers installed and also install a recent version of "),n("a",{attrs:{href:"https://launchpad.net/~kisak/+archive/ubuntu/kisak-mesa",target:"_blank",rel:"noopener noreferrer"}},[t._v("kisak mesa"),n("OutboundLink")],1),t._v(" in your Ubuntu environment so that most OpenGL features get emulated:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:kisak/kisak-mesa\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n")])])])])}),[],!1,null,null,null);e.default=a.exports},756:function(t,e,s){t.exports=s.p+"assets/img/wsl_windows_terminal.baff6d98.png"},757:function(t,e,s){t.exports=s.p+"assets/img/vscode_wsl.34a14a80.png"}}]);