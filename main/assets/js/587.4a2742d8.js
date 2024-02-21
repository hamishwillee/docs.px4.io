(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{2822:function(t,e,s){"use strict";s.r(e);var o=s(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-development-environment-wsl2-based"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-environment-wsl2-based"}},[t._v("#")]),t._v(" Windows Development Environment (WSL2-Based)")]),t._v(" "),o("p",[t._v("The following instructions explain how to set up a PX4 development environment on Windows 10 or 11, running on Ubuntu Linux within "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL2"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("This environment can be used to build PX4 for:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Pixhawk and other NuttX-based hardware")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo Simulation")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo-Classic Simulation")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/sim_jmavsim/"}},[t._v("jMAVSim Simulation")])],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This setup is supported by the PX4 dev team.\nThe environment should in theory be able to build any target that can be built on Ubuntu.\nThe list above are those targets that have been tested.")])]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Subsystem for Linux"),o("OutboundLink")],1),t._v(" ("),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/compare-versions",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL2"),o("OutboundLink")],1),t._v(") allows users to install and run the "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" on Windows, "),o("em",[t._v("almost")]),t._v(" as though we were running it on a Linux computer.")],1),t._v(" "),o("p",[t._v("With this environment developers can:")]),t._v(" "),o("ul",[o("li",[t._v("Build any simulator or hardware target supported by "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" in the WSL Shell. (Ubuntu is the best supported and tested PX4 development platform).")],1),t._v(" "),o("li",[t._v("Debug code in "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_wsl.html#visual-studio-code-integration"}},[t._v("Visual Studio Code")]),t._v(" running on Windows.")],1),t._v(" "),o("li",[t._v("Monitor a "),o("em",[t._v("simulation")]),t._v(" using "),o("em",[t._v("QGroundControl for Linux")]),t._v(" running in WSL. QGC for Linux connects automatically to the simulation.")])]),t._v(" "),o("p",[o("em",[t._v("QGroundControl for Windows")]),t._v(" is additionally required if you need to:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#flash-a-flight-control-board"}},[t._v("Update firmware")]),t._v(" on a real vehicle.")]),t._v(" "),o("li",[t._v("Monitor a real vehicle. Note that you can also use it to monitor a simulation, but you must manually "),o("a",{attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("connect to the simulation running in WSL")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Connecting to a USB device from within WSL is not supported, so you can't update firmware using the "),o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#uploading-firmware-flashing-the-board"}},[o("code",[t._v("upload")])]),t._v(" option when building on the command line, or from "),o("em",[t._v("QGroundControl for Linux")]),t._v(".")],1)]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The approach is similar to installing PX4 in your "),o("em",[t._v("own")]),t._v(" virtual machine, as described in "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_vm.html"}},[t._v("Windows VM-Hosted Toolchain")]),t._v(". The benefit of WSL2 is that its virtual machine is deeply integrated into Windows, system-managed, and performance optimised.")],1)]),t._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),o("h3",{attrs:{id:"install-wsl2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-wsl2"}},[t._v("#")]),t._v(" Install WSL2")]),t._v(" "),o("p",[t._v("To install WSL2 with Ubuntu on a new installation of Windows 10 or 11:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v('Make sure your computer your computer\'s virtualization feature is enabled in the BIOS. It\'s usually referred as "Virtualization Technology", "Intel VT-x" or "AMD-V" respectively')])]),t._v(" "),o("li",[o("p",[t._v("Open "),o("em",[t._v("cmd.exe")]),t._v(" as administrator. This can be done by pressing the start key, typing "),o("code",[t._v("cmd")]),t._v(", right-clicking on the "),o("em",[t._v("Command prompt")]),t._v(" entry and selecting "),o("strong",[t._v("Run as administrator")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Execute the following commands to install WSL2 and a particular Ubuntu version:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Default version (Ubuntu 22.04):")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl --install\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Ubuntu 20.04 ("),o("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo-Classic Simulation")]),t._v(")")],1),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl --install -d Ubuntu-20.04\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Ubuntu 22.04 ("),o("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo Simulation")]),t._v(")")],1),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl --install -d Ubuntu-22.04\n")])])])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You can also install"),o("a",{attrs:{href:"https://www.microsoft.com/store/productId/9MTTCL66CPXJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 20.04"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://www.microsoft.com/store/productId/9PN20MSR04DW",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 22.04"),o("OutboundLink")],1),t._v(" from the store, which allows you to delete the application using the normal Windows Add/Remove settings:")])]),t._v(" "),o("ol",[o("li",[t._v("WSL will prompt you for a user name and password for the Ubuntu installation. Record these credentials as you will need them later on!")])]),t._v(" "),o("p",[t._v("The command prompt is now a terminal within the newly installed Ubuntu environment.")]),t._v(" "),o("h3",{attrs:{id:"opening-a-wsl-shell"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-a-wsl-shell"}},[t._v("#")]),t._v(" Opening a WSL Shell")]),t._v(" "),o("p",[t._v("All operations to install and build PX4 must be done within a WSL Shell (you can use the same shell that was used to install WSL2 or open a new one).")]),t._v(" "),o("p",[t._v("If you're using "),o("a",{attrs:{href:"https://learn.microsoft.com/en-us/windows/terminal/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Terminal"),o("OutboundLink")],1),t._v(" you can open a shell into an installed WSL environment as shown, and exit it by closing the tab.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(766),alt:"Windows Terminal showing how to select a Ubuntu shell"}})]),t._v(" "),o("p",[t._v("To open a WSL shell using a command prompt:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open a command prompt:")]),t._v(" "),o("ul",[o("li",[t._v("Press the Windows "),o("strong",[t._v("Start")]),t._v(" key.")]),t._v(" "),o("li",[t._v("Type "),o("code",[t._v("cmd")]),t._v(" and press "),o("strong",[t._v("Enter")]),t._v(" to open the prompt.")])])]),t._v(" "),o("li",[o("p",[t._v("To start WSL and access the WSL shell, execute the command:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl -d "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("distribution_name"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),o("p",[t._v("For example:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl -d Ubuntu\n")])])]),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("wsl -d Ubuntu-20.04\n")])])]),o("p",[t._v("If you only have one version of Ubuntu, you can just use "),o("code",[t._v("wsl")]),t._v(".")])])]),t._v(" "),o("p",[t._v("Enter the following commands to first close the WSL shell, and then shut down WSL:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nwsl -d "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("distribution_name"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --shutdown\n")])])]),o("p",[t._v("Alternatively, after entering "),o("code",[t._v("exit")]),t._v(" you can just close the prompt.")]),t._v(" "),o("h3",{attrs:{id:"install-px4-toolchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-px4-toolchain"}},[t._v("#")]),t._v(" Install PX4 Toolchain")]),t._v(" "),o("p",[t._v("Next we download the PX4 source code within the WSL2 environment, and use the normal "),o("em",[t._v("Ubuntu installer script")]),t._v(" to to set up the developer environment. This will install the toolchain for Gazebo Classic simulation, JMAVSim simulation and Pixhawk/NuttX hardware.")]),t._v(" "),o("p",[t._v("To install the development toolchain:")]),t._v(" "),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL2 Shell")]),t._v(" (if it is still open you can use the same one that was used to install WSL2).")])]),t._v(" "),o("li",[o("p",[t._v("Execute the command "),o("code",[t._v("cd ~")]),t._v(" to switch to the home folder of WSL for the next steps.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")])])])]),t._v(" "),o("p",[t._v("This is important!\nIf you work from a location outside of the WSL file system you'll run into issues such as very slow execution and access right/permission errors.\n:::")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Download the PX4 source code using "),o("code",[t._v("git")]),t._v(" (which is already installed in WSL2):")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The environment setup scripts in the source usually work for recent PX4 releases. If working with an older version of PX4 you may need to "),o("RouterLink",{attrs:{to:"/ko/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to your release")]),t._v(".")],1)]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Run the "),o("strong",[t._v("ubuntu.sh")]),t._v(" installer script and acknowledge any prompts as the script progresses:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This installs tools to build PX4 for Pixhawk, Gazebo Classic and JMAVSim targets:")]),t._v(" "),o("ul",[o("li",[t._v("You can use the "),o("code",[t._v("--no-nuttx")]),t._v(" and "),o("code",[t._v("--no-sim-tools")]),t._v(" options to omit the NuttX and/or simulation tools.")]),t._v(" "),o("li",[t._v("Other Linux build targets are untested (you can try these by entering the appropriate commands in "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Development Environment")]),t._v(" into the WSL shell).")],1)])]),t._v(" "),o("ol",[o("li",[o("p",[t._v('Restart the "WSL computer" after the script completes (exit the shell, shutdown WSL, and restart WSL):')]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\nwsl --shutdown\nwsl\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Switch to the PX4 repository in the WSL home folder:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Build the PX4 SITL target and test your environment:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl\n")])])])])]),t._v(" "),o("p",[t._v("For more build options see "),o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"visual-studio-code-integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-integration"}},[t._v("#")]),t._v(" Visual Studio Code Integration")]),t._v(" "),o("p",[t._v("VS Code running on Windows is well integrated with WSL.")]),t._v(" "),o("p",[t._v("To set up the integration:")]),t._v(" "),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download"),o("OutboundLink")],1),t._v(" and install Visual Studio Code (VS Code) on Windows,")])]),t._v(" "),o("li",[o("p",[t._v("Open "),o("em",[t._v("VS Code")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("Install the extension called "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remote - WSL"),o("OutboundLink")],1),t._v(" (marketplace)")])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")])])]),t._v(" "),o("li",[o("p",[t._v("In the WSL shell, switch to the PX4 folder:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n")])])])]),t._v(" "),o("li",[o("p",[t._v("In the WSL shell, start VS Code:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("code "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),o("p",[t._v("This will open the IDE fully integrated with the WSL shell.")]),t._v(" "),o("p",[t._v("Make sure you always open the PX4 repository in the Remote WSL mode.")])]),t._v(" "),o("li",[o("p",[t._v("Next time you want to develop WSL2 you can very easily open it again in Remote WSL mode by selecting "),o("strong",[t._v("Open Recent")]),t._v(" (as shown below). This will start WSL for you.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(767),alt:""}})]),t._v(" "),o("p",[t._v("Note however that the IP address of the WSL virtual machine will have changed, so you won't be able to monitor simulation from QGC for Windows (you can still monitor using QGC for Linux)")])])]),t._v(" "),o("h2",{attrs:{id:"qgroundcontrol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),o("p",[t._v("You can run QGroundControl in either WSL or Windows to connect to the running simulation. If you need to "),o("a",{attrs:{href:"#flash-a-flight-control-board"}},[t._v("flash a flight control board")]),t._v(" with new firmware you can only do this from the QGroundControl for Windows.")]),t._v(" "),o("h3",{attrs:{id:"qgroundcontrol-in-wsl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-in-wsl"}},[t._v("#")]),t._v(" QGroundControl in WSL")]),t._v(" "),o("p",[t._v("The easiest way to set up and use QGroundControl is to download the Linux version into your WSL.")]),t._v(" "),o("p",[t._v("You can do this using from within the WSL shell.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In a web browser, navigate to the QGC "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html#ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu download section"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[t._v("Right-click on the "),o("strong",[t._v("QGroundControl.AppImage")]),t._v(' link, and select "Copy link address". This will be something like '),o("em",[t._v("https://d176td9ibe4jno.cloudfront.net/builds/master/QGroundControl.AppImage")])])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")]),t._v(" and enter the following commands to download the appimage and make it executable (replace the AppImage URL where indicated):")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("the_copied_AppImage_URL"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x QGroundControl.AppImage\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Run QGroundControl:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("./QGroundControl.AppImage\n")])])])])]),t._v(" "),o("p",[t._v("QGroundControl will launch and automatically connect to a running simulation and allow you to monitor and control your vehicle(s).")]),t._v(" "),o("p",[t._v("You will not be able to use it to install PX4 firmware because WSL does not allow access to serial devices.")]),t._v(" "),o("h3",{attrs:{id:"qgroundcontrol-on-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("#")]),t._v(" QGroundcontrol on Windows")]),t._v(" "),o("p",[t._v("Install "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html#windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl on Windows"),o("OutboundLink")],1),t._v(" if you want to be able to update hardware with firmware created within PX4.")]),t._v(" "),o("p",[t._v("These steps describe how you can connect to the simulation running in the WSL:")]),t._v(" "),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"#opening-a-wsl-shell"}},[t._v("Open a WSL shell")])])]),t._v(" "),o("li",[o("p",[t._v("Check the IP address of the WSL virtual machine by running the command "),o("code",[t._v("ip addr | grep eth0")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("$ "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" eth0\n\n"),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(": eth0: "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc mq state UP group default qlen "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    inet "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.18")]),t._v(".46.131/20 brd "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.18")]),t._v(".47.255 scope global eth0\n")])])]),o("p",[t._v("Copy the first part of the "),o("code",[t._v("eth0")]),t._v(" interface "),o("code",[t._v("inet")]),t._v(" address to the clipboard. In this case: "),o("code",[t._v("172.18.46.131")]),t._v(".")])]),t._v(" "),o("li",[o("p",[t._v("In QGC go to "),o("strong",[t._v("Q > Application Settings > Comm Links")])])]),t._v(" "),o("li",[o("p",[t._v('Add a UDP Link called "WSL" to port '),o("code",[t._v("18570")]),t._v(" of the IP address copied above.")])]),t._v(" "),o("li",[o("p",[t._v("Save it and connect to it.")])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You will have to update the WSL comm link in QGC every time WSL restarts (because it gets a dynamic IP address).")])]),t._v(" "),o("h2",{attrs:{id:"flash-a-flight-control-board"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flash-a-flight-control-board"}},[t._v("#")]),t._v(" Flash a Flight Control Board")]),t._v(" "),o("p",[t._v("Flashing a custom built PX4 binary has to be done using "),o("a",{attrs:{href:"#qgroundcontrol-on-windows"}},[t._v("QGroundControl for Windows")]),t._v(" since WSL2 does not natively offer direct access to serial devices like Pixhawk boards.")]),t._v(" "),o("p",[t._v("Do the following steps to flash your custom binary built in WSL:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("If you haven't already build the binary in WSL e.g. with a "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_wsl.html#opening-a-wsl-shell"}},[t._v("WSL shell")]),t._v(" and by running:")],1),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/PX4-Autopilot\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5\n")])])]),o("p",[t._v('Note: Use the correct target for your board. "px4_fmu-v5" can be used for a Pixhawk 4 board.')])]),t._v(" "),o("li",[o("p",[t._v("Detach the USB cable of your Pixhawk board from the computer if it was plugged.")])]),t._v(" "),o("li",[o("p",[t._v("Open QGC.")])]),t._v(" "),o("li",[o("p",[t._v("In QGC go to "),o("strong",[t._v("Q > Vehicle Setup > Firmware")])])]),t._v(" "),o("li",[o("p",[t._v("Plug your pixhawk board via USB")])]),t._v(" "),o("li",[o("p",[t._v('Once connected select "PX4 Flight Stack", check "Advanced settings" and choose "Custom firmware file ..." from the drop down below.')])]),t._v(" "),o("li",[o("p",[t._v('Continue and select the firmware binary you just built before. In the open dialog look for the "Linux" location with the penguin icon in the left pane. It\'s usually all the way at the bottom. Choose the file in the path: '),o("code",[t._v("Ubuntu\\home\\{your WSL user name}\\PX4-Autopilot\\build\\{your build target}\\{your build target}.px4")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),o("p",[t._v("You can add the folder to the favourites to access it quickly next time.\n:::")]),t._v(" "),o("ol",[o("li",[t._v("Start the flashing.")])]),t._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),o("p",[t._v("If you have any problems with your setup, check the current "),o("a",{attrs:{href:"https://learn.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft WSL installation documentation"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("We also recommend that you have the latest Windows GPU drivers installed and also install a recent version of "),o("a",{attrs:{href:"https://launchpad.net/~kisak/+archive/ubuntu/kisak-mesa",target:"_blank",rel:"noopener noreferrer"}},[t._v("kisak mesa"),o("OutboundLink")],1),t._v(" in your Ubuntu environment so that most OpenGL features get emulated:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:kisak/kisak-mesa\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" upgrade\n")])])])])}),[],!1,null,null,null);e.default=a.exports},766:function(t,e,s){t.exports=s.p+"assets/img/wsl_windows_terminal.baff6d98.png"},767:function(t,e,s){t.exports=s.p+"assets/img/vscode_wsl.34a14a80.png"}}]);