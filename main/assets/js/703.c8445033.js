(window.webpackJsonp=window.webpackJsonp||[]).push([[703],{2082:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"xrce-dds-px4-fastdds-bridge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xrce-dds-px4-fastdds-bridge"}},[e._v("#")]),e._v(" XRCE-DDS (PX4-FastDDS Bridge)")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("XRCE-DDS replaces the "),a("a",{attrs:{href:"https://docs.px4.io/v1.13/en/middleware/micrortps.html#rtps-dds-interface-px4-fast-rtps-dds-bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fast-RTPS Bridge"),a("OutboundLink")],1),e._v(" used in PX4 v1.13.")])]),e._v(" "),a("p",[e._v("PX4 uses XRCE-DDS middleware to allow "),a("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[e._v("uORB messages")]),e._v(" to be published and subscribed on a companion computer as though they were "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html"}},[e._v("ROS 2")]),e._v(" topics.\nThis provides a fast and reliable integration between PX4 and ROS 2, and makes it much easier for ROS 2 applications to get vehicle information and send commands.")],1),e._v(" "),a("p",[e._v("PX4 uses an XRCE-DDS implementation that leverages "),a("a",{attrs:{href:"https://micro-xrce-dds.docs.eprosima.com/en/stable/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("eProsima Micro XRCE-DDS"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The following guide describes the architecture and various options for setting up the client and agent.\nIn particular it covers the options that are most important to PX4 users.")]),e._v(" "),a("h2",{attrs:{id:"architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),a("p",[e._v("The XRCE-DDS middleware consists of a client running on PX4 and an agent running on the companion computer, with bi-directional data exchange between them over a serial or UDP link.\nThe agent acts as a proxy for the client, enabling it to publish and subscribe to topics in the global DDS data space.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(416),alt:"Architecture XRCE-DDS with ROS 2"}})]),e._v(" "),a("p",[e._v("In order for PX4 uORB topics to be shared on the DDS network you will need "),a("em",[e._v("XRCE-DDS client")]),e._v(" running on PX4, connected to the "),a("em",[e._v("XRCE-DDS agent")]),e._v(" running on the companion.")]),e._v(" "),a("p",[e._v("The PX4 "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(" publishes to/from a defined set of uORB topics to the global DDS data space.")],1),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/eProsima/Micro-XRCE-DDS-Agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("eProsima XRCE-DDS "),a("em",[e._v("agent")]),a("OutboundLink")],1),e._v(" runs on the companion computer and acts as a proxy for the client in the DDS/ROS 2 network.")]),e._v(" "),a("p",[e._v("The agent itself has no dependency on client-side code and can be built and/or installed independent of PX4 or ROS.")]),e._v(" "),a("p",[e._v("Code that wants to subscribe/publish to PX4 does have a dependency on client-side code; it requires uORB message definitions that match those used to create the PX4 XRCE-DDS client so that it can interpret the messages.")]),e._v(" "),a("h2",{attrs:{id:"code-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[e._v("#")]),e._v(" Code Generation")]),e._v(" "),a("p",[e._v("The PX4 "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(" is generated at build time and included in PX4 firmare by default.\nThe agent has no dependency on client code.\nIt can be built standalone or in a ROS 2 workspace, or installed as a snap package on Ubuntu.")],1),e._v(" "),a("p",[e._v("When PX4 is built, a code generator uses the uORB message definitions in the source tree ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/msg"),a("OutboundLink")],1),e._v(") to compile support for the subset of uORB topics in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/src/modules/microdds_client/dds_topics.yaml"),a("OutboundLink")],1),e._v(" into "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(".")],1),e._v(" "),a("p",[e._v("PX4 main or release builds automatically export the set of uORB messages definitions in the build to an associated branch in "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/px4_msgs"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("ROS 2 applications need to be built in a workspace that includes the "),a("em",[e._v("same")]),e._v(" message definitions that were used to create the XRCE-DDS client module in the PX4 Firmware.\nThese can be included into a workspace by cloning the interface package "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/px4_msgs"),a("OutboundLink")],1),e._v(" into your ROS 2 workspace and switching to the appropriate branch.\nNote that all code generation associated with the messages is handled by ROS 2.")]),e._v(" "),a("h2",{attrs:{id:"xrce-dds-agent-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xrce-dds-agent-installation"}},[e._v("#")]),e._v(" XRCE-DDS Agent Installation")]),e._v(" "),a("p",[e._v("The XRCE-DDS Agent can be installed on the companion computer using a binary package, built and installed from source, or built and run from within a ROS 2 workspace.\nAll of these methods fetch "),a("em",[e._v("all")]),e._v(" the dependencies needed to communicate with the client (such as FastCDR)")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The official (and more complete) installation guide is the Eprosima: "),a("a",{attrs:{href:"https://micro-xrce-dds.docs.eprosima.com/en/latest/installation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("micro XRCE-DDS Installation Guide"),a("OutboundLink")],1),e._v("\nThis section summarises the options that have been tested with PX4 during creation of these docs.")])]),e._v(" "),a("h3",{attrs:{id:"install-standalone-from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-standalone-from-source"}},[e._v("#")]),e._v(" Install Standalone from Source")]),e._v(" "),a("p",[e._v("On Ubuntu you can build from source and install the Agent standalone using the following commands:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/eProsima/Micro-XRCE-DDS-Agent.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Micro-XRCE-DDS-Agent\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" build\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" build\ncmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ldconfig /usr/local/lib/\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("There are various build configuration options linked from the corresponding topic in the "),a("a",{attrs:{href:"https://micro-xrce-dds.docs.eprosima.com/en/latest/installation.html#installing-the-agent-standalone",target:"_blank",rel:"noopener noreferrer"}},[e._v("official guide"),a("OutboundLink")],1),e._v(", but these have not been tested.")])]),e._v(" "),a("p",[e._v("To start the agent with settings for connecting to the XRCE-DDS client running on the simulator:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("MicroXRCEAgent udp4 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v("\n")])])]),a("h3",{attrs:{id:"install-from-snap-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-from-snap-package"}},[e._v("#")]),e._v(" Install from Snap Package")]),e._v(" "),a("p",[e._v("Install from a snap package on Ubuntu using the following command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" snap "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" micro-xrce-dds-agent --edge\n")])])]),a("p",[e._v("To start the agent with settings for connecting to the XRCE-DDS client running on the simulator (note that the command name is different than if you build the agent locally):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("micro-xrce-dds-agent udp4 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("At time of writing the stable of version installed from snap connects to PX4 but reports errors creating topics.\nThe development version, fetched using "),a("code",[e._v("--edge")]),e._v(" above, does work.")])]),e._v(" "),a("h3",{attrs:{id:"build-run-within-ros-2-workspace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-run-within-ros-2-workspace"}},[e._v("#")]),e._v(" Build/Run within ROS 2 Workspace")]),e._v(" "),a("p",[e._v("The agent can be built and launched within a ROS 2 workspace (or build standalone and launched from a workspace.\nYou must already have installed ROS 2 following the instructions in: "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html#install-ros-2"}},[e._v("ROS 2 User Guide > Install ROS 2")]),e._v(".")],1),e._v(" "),a("p",[e._v("To build the agent within ROS:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Create a workspace directory for the agent:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ~/ws_xrce_dds_agent/src\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Clone the source code for the eProsima "),a("a",{attrs:{href:"https://github.com/eProsima/Micro-XRCE-DDS-Agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Micro-XRCE-DDS-Agent"),a("OutboundLink")],1),e._v(" to the "),a("code",[e._v("/src")]),e._v(" directory (the "),a("code",[e._v("main")]),e._v(" branch is cloned by default):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/px4_ros_xrce_dds_ws/src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/eProsima/Micro-XRCE-DDS-Agent.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v('Source the ROS 2 development environment, in this case "ROS 2 Foxy", and compile the workspace using '),a("code",[e._v("colcon")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" /opt/ros/foxy/setup.bash\ncolcon build\n")])])]),a("p",[e._v("This builds all the folders under "),a("code",[e._v("/src")]),e._v(" using the sourced toolchain.")])])]),e._v(" "),a("p",[e._v("To run the XRCE-DDS agent in the workspace:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Source the "),a("code",[e._v("local_setup.bash")]),e._v(" to make the executables available in the terminal (also "),a("code",[e._v("setup.bash")]),e._v(" if using a new terminal).")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" /opt/ros/foxy/setup.bash\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("source")]),e._v(" install/local_setup.bash\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Start the agent with settings for connecting to the XRCE-DDS client running on the simulator:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("MicroXRCEAgent udp4 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v("\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"starting-xrce-dds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-xrce-dds"}},[e._v("#")]),e._v(" Starting XRCE-DDS")]),e._v(" "),a("h3",{attrs:{id:"starting-the-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-agent"}},[e._v("#")]),e._v(" Starting the Agent")]),e._v(" "),a("p",[e._v("The agent is used to connect to the client over a particular channel, such as UDP or a serial connection.\nThe channel settings are specified when the agent is started, using command line options.\nThese are documented in the eProsima user guide: "),a("a",{attrs:{href:"https://micro-xrce-dds.docs.eprosima.com/en/latest/agent.html#agent-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Micro XRCE-DDS Agent > Agent CLI"),a("OutboundLink")],1),e._v(".\nNote that the agent supports many channel options, but PX4 only supports UDP and serial connections.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You should create a single instance of the agent for each channel over which you need to connect.")])]),e._v(" "),a("p",[e._v("For example, the PX4 simulator runs the XRCE-DDS client over UDP on port 8888, so to connect to the simulator you would start the agent with the command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("MicroXRCEAgent udp4 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v("\n")])])]),a("p",[e._v("When working with real hardware, the setup depends on the hardware, OS, and channel.\nFor example, if you're using the RasPi "),a("code",[e._v("UART0")]),e._v(" serial port, you might connect using this command (based on the information in "),a("a",{attrs:{href:"https://www.raspberrypi.com/documentation/computers/configuration.html#configuring-uarts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raspberry Pi Documentation > Configuring UARTS"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" MicroXRCEAgent serial --dev /dev/AMA0 -b "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("921600")]),e._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("For more information about setting up communications channels see "),a("RouterLink",{attrs:{to:"/en/companion_computer/pixhawk_companion.html#serial-port-setup"}},[e._v("Pixhawk + Companion Setup > Serial Port setup")]),e._v(", and sub-documents.")],1)]),e._v(" "),a("h3",{attrs:{id:"starting-the-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-client"}},[e._v("#")]),e._v(" Starting the Client")]),e._v(" "),a("p",[e._v("The XRCE-DDS client module ("),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(") is included by default in all firmware and the simulator.\nThis must be started with appropriate settings for the communication channel that you wish to use to communicate with the agent.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The simulator automatically starts the client on localhost UDP port "),a("code",[e._v("8888")]),e._v(" using the default microdds namespace.")])]),e._v(" "),a("p",[e._v("The configuration can be done using the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#micro-xrce-dds"}},[e._v("Micro XRCE-DDS parameters")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_CFG"}},[e._v("XRCE_DDS_CFG")]),e._v(": Set the port to connect on, such as "),a("code",[e._v("TELEM2")]),e._v(", "),a("code",[e._v("Ethernet")]),e._v(", or "),a("code",[e._v("Wifi")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("If using an Ethernet connection:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_PRT"}},[e._v("XRCE_DDS_PRT")]),e._v(":\nUse this to specify the agent UDP listening port.\nThe default value is "),a("code",[e._v("8888")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_AG_IP"}},[e._v("XRCE_DDS_AG_IP")]),e._v(":\nUse this to specify the IP address of the agent.\nThe IP address must be provided in "),a("code",[e._v("int32")]),e._v(" format as PX4 does not support string parameters.\nThe default value is "),a("code",[e._v("2130706433")]),e._v(" which corresponds to the "),a("em",[e._v("localhost")]),e._v(" "),a("code",[e._v("127.0.0.1")]),e._v(".")],1),e._v(" "),a("p",[e._v("You can use "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/pr-micro-XRCE-DDS-allow-IP-parameter/Tools/convert_ip.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tools/convert_ip.py"),a("OutboundLink")],1),e._v(" to convert between the formats:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("To obtain the "),a("code",[e._v("int32")]),e._v(" version of an IP in decimal dot notation the command is:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python3 ./PX4-Autopilot/Tools/convert_ip.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("the IP address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" decimal dot notation"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("To get the IP address in decimal dot notation from the "),a("code",[e._v("int32")]),e._v(" version:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("python3 ./PX4-Autopilot/Tools/convert_ip.py -r "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("the IP address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" int32 notation"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])])])])])]),e._v(" "),a("li",[a("p",[e._v("If using a serial connection:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(", "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_URT6_BAUD"}},[e._v("SER_URT6_BAUD")]),e._v(" (and so on):\nUse the "),a("code",[e._v("_BAUD")]),e._v(" parameter associated with the serial port to set the baud rate.\nFor example, you'd set a value for "),a("code",[e._v("SER_TEL2_BAUD")]),e._v(" if you are connecting to the companion using "),a("code",[e._v("TELEM2")]),e._v(".\nFor more information see "),a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#serial-port-configuration"}},[e._v("Serial port configuration")]),e._v(".")],1)])]),e._v(" "),a("li",[a("p",[e._v("Some setups might also need these parameters to be set:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_KEY"}},[e._v("XRCE_DDS_KEY")]),e._v(": The XRCE-DDS key.\nIf you're working in a multi-client, single agent configuration, each client should have a unique non-zero key.\nThis is primarily important for multi-vehicle simulations, where all clients are connected in UDP to the same agent.\n(See the "),a("a",{attrs:{href:"https://micro-xrce-dds.docs.eprosima.com/en/stable/client_api.html#session",target:"_blank",rel:"noopener noreferrer"}},[e._v("official eprosima documentation"),a("OutboundLink")],1),e._v(" , "),a("code",[e._v("uxr_init_session")]),e._v(".)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#XRCE_DDS_DOM_ID"}},[e._v("XRCE_DDS_DOM_ID")]),e._v(": The DDS domain ID.\nThis provides a logical separation between DDS networks, and can be used to separate clients on different networks.\nBy default, ROS 2 operates on ID 0.")],1)])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Many ports are already have a default configuration.\nTo use these ports you must first disable the existing configuration:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TELEM1")]),e._v(" and "),a("code",[e._v("TELEM2")]),e._v(" are set up by default to connect via MAVLink to a GCS and a companion computer (respectively).\nDisable by setting "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG=0")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG=0")]),e._v(" to zero.\nSee "),a("RouterLink",{attrs:{to:"/en/peripherals/mavlink_peripherals.html"}},[e._v("MAVLink Peripherals")]),e._v(" for more information.")],1),e._v(" "),a("li",[e._v("Other ports can similarly be configured.\nSee "),a("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#serial-port-configuration"}},[e._v("Serial port configuration")]),e._v(".")],1)])]),e._v(" "),a("p",[e._v("Once set, you may need to reboot PX4 for the parameters to take effect.\nThey will then persist through subsequent reboots.")]),e._v(" "),a("p",[e._v("You can also start the "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(" using a command line.\nThis can be called as part of "),a("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[e._v("System Startup")]),e._v(" or through the "),a("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" (or a system console).\nThis method is useful when you need to set a custom client namespace, as no parameter is provided for this purpose.\nFor example, the following command can be used to connect via Ethernet to a remote host at "),a("code",[e._v("192.168.0.100:8888")]),e._v(" and to set the client namespace to "),a("code",[e._v("/drone/")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("microdds_client start -t udp -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8888")]),e._v(" -h "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.100 -n drone\n")])])]),a("p",[e._v("Options "),a("code",[e._v("-p")]),e._v(" or "),a("code",[e._v("-h")]),e._v(" are used to bypass "),a("code",[e._v("XRCE_DDS_PRT")]),e._v(" and "),a("code",[e._v("XRCE_DDS_AG_IP")]),e._v(".")]),e._v(" "),a("p",[e._v("The simulator "),a("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[e._v("startup logic")]),e._v(" ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[e._v("init.d-posix/rcS"),a("OutboundLink")],1),e._v(") uses the client startup commands for single and "),a("RouterLink",{attrs:{to:"/en/ros/ros2_multi_vehicle.html"}},[e._v("multi vehicle simulations")]),e._v(", enabling the setting of appropriate instance ids and DDS namespaces.")],1),e._v(" "),a("h2",{attrs:{id:"supported-uorb-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-uorb-messages"}},[e._v("#")]),e._v(" Supported uORB Messages")]),e._v(" "),a("p",[e._v("The set of "),a("RouterLink",{attrs:{to:"/en/msg_docs/"}},[e._v("PX4 uORB topics")]),e._v(" that are exposed through the client are set in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("The topics are release specific (support is compiled into "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(" at build time).\nWhile most releases should support a very similar set of messages, to be certain you would need to check the yaml file for your particular release.\n")],1),e._v(" "),a("p",[e._v("Note that ROS 2/DDS needs to have the "),a("em",[e._v("same")]),e._v(" message definitions that were used to create the XRCE-DDS client module in the PX4 Firmware in order to interpret the messages.\nThe message definitions are stored in the ROS 2 interface package "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/px4_msgs"),a("OutboundLink")],1),e._v(", and they are automatically synchronized by CI on the "),a("code",[e._v("main")]),e._v(" and release branches.\nNote that all the messages from PX4 source code are present in the repository, but only those listed in "),a("code",[e._v("dds_topics.yaml")]),e._v(" will be available as ROS 2 topics.\nTherefore,")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you're using a main or release version of PX4 you can get the message definitions by cloning the interface package "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/px4_msgs"),a("OutboundLink")],1),e._v(" into your workspace.")])]),e._v(" "),a("li",[a("p",[e._v("If you're creating or modifying uORB messages you must manually update the messages in your workspace from your PX4 source tree.\nGenerally this means that you would update "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(", clone the interface package, and then manually synchronize it by copying the new/modified message definitions from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/msg"),a("OutboundLink")],1),e._v(" to its "),a("code",[e._v("msg")]),e._v(" folders.\nAssuming that PX4-Autopilot is in your home directory "),a("code",[e._v("~")]),e._v(", while "),a("code",[e._v("px4_msgs")]),e._v(" is in "),a("code",[e._v("~/px4_ros_com/src/")]),e._v(", then the command might be:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/px4_ros_com/src/px4_msgs/msg/*.msg\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" ~/PX4-Autopilot/mgs/*.msg ~/px4_ros_com/src/px4_msgs/msg/\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Technically, "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(" completely defines the relationship between PX4 uORB topics and ROS 2 messages.\nFor more information see "),a("a",{attrs:{href:"#dds-topics-yaml"}},[e._v("DDS Topics YAML")]),e._v(" below.")])])])]),e._v(" "),a("h2",{attrs:{id:"customizing-the-topic-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-topic-namespace"}},[e._v("#")]),e._v(" Customizing the Topic Namespace")]),e._v(" "),a("p",[e._v("Custom topic namespaces can be applied at build time (changing "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(") or at runtime (which is useful for multi vehicle operations):")]),e._v(" "),a("ul",[a("li",[e._v("One possibility is to use the "),a("code",[e._v("-n")]),e._v(" option when starting the "),a("RouterLink",{attrs:{to:"/en/modules/modules_system.html#microdds-client"}},[e._v("microdds-client")]),e._v(" from command line.\nThis technique can be used both in simulation and real vehicles.")],1),e._v(" "),a("li",[e._v("A custom namespace can be provided for simulations (only) by setting the environment variable "),a("code",[e._v("PX4_MICRODDS_NS")]),e._v(" before starting the simulation.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Changing the namespace at runtime will append the desired namespace as a prefix to all "),a("code",[e._v("topic")]),e._v(" fields in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(".\nTherefore, commands like:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("microdds_client start -n uav_1\n")])])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("PX4_MICRODDS_NS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("uav_1 "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_sitl gz_x500\n")])])]),a("p",[e._v("will generate topics under the namespaces:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("/uav_1/fmu/in/  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for subscribers")]),e._v("\n/uav_1/fmu/out/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# for publishers")]),e._v("\n")])])])]),e._v(" "),a("h2",{attrs:{id:"px4-ros-2-qos-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-ros-2-qos-settings"}},[e._v("#")]),e._v(" PX4 ROS 2 QoS Settings")]),e._v(" "),a("p",[e._v("PX4 QoS settings for publishers are incompatible with the default QoS settings for ROS 2 subscribers.\nSo if ROS 2 code needs to subscribe to a uORB topic, it will need to use compatible QoS settings.\nOne example of which is shown in "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html#ros-2-subscriber-qos-settings"}},[e._v("ROS 2 User Guide > ROS 2 Subscriber QoS Settings")]),e._v(".")],1),e._v(" "),a("p",[e._v("PX4 uses the following QoS settings for publishers:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("uxrQoS_t qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("durability "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_DURABILITY_TRANSIENT_LOCAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("reliability "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_RELIABILITY_BEST_EFFORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("history "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_HISTORY_KEEP_LAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("PX4 uses the following QoS settings for subscribers:")]),e._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[e._v("uxrQoS_t qos "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("durability "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_DURABILITY_VOLATILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("reliability "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_RELIABILITY_BEST_EFFORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("history "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" UXR_HISTORY_KEEP_LAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("depth "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" queue_depth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v('ROS 2 uses the following QoS settings (by default) for publishers and subscriptions: "keep last" for history with a queue size of 10, "reliable" for reliability, "volatile" for durability, and "system default" for liveliness.\nDeadline, lifespan, and lease durations are also all set to "default".\n')]),e._v(" "),a("h2",{attrs:{id:"dds-topics-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dds-topics-yaml"}},[e._v("#")]),e._v(" DDS Topics YAML")]),e._v(" "),a("p",[e._v("The PX4 yaml file "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/microdds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("dds_topics.yaml"),a("OutboundLink")],1),e._v(" defines the set of PX4 uORB topics that are built into firmware and published.\nMore precisely, it completely defines the relationship/pairing between PX4 uORB and ROS 2 messages.")]),e._v(" "),a("p",[e._v("The file is structured as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("publications:\n\n  - topic: /fmu/out/collision_constraints\n    type: px4_msgs::msg::CollisionConstraints\n\n  ...  \n\n  - topic: /fmu/out/vehicle_odometry\n    type: px4_msgs::msg::VehicleOdometry\n\n  - topic: /fmu/out/vehicle_status\n    type: px4_msgs::msg::VehicleStatus\n\n  - topic: /fmu/out/vehicle_trajectory_waypoint_desired\n    type: px4_msgs::msg::VehicleTrajectoryWaypoint\n\nsubscriptions:\n\n  - topic: /fmu/in/offboard_control_mode\n    type: px4_msgs::msg::OffboardControlMode\n\n  ...\n\n  - topic: /fmu/in/vehicle_trajectory_waypoint\n    type: px4_msgs::msg::VehicleTrajectoryWaypoint\n")])])]),a("p",[e._v("Each ("),a("code",[e._v("topic")]),e._v(","),a("code",[e._v("type")]),e._v(") pairs defines:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("A new subscription or publication depending on the list to which it is added.")])]),e._v(" "),a("li",[a("p",[e._v("The topic "),a("em",[e._v("base name")]),e._v(", which "),a("strong",[e._v("must")]),e._v(" coincide with the desired uORB topic name that you want to publish/subscribe.\nIt is identified by the last token in "),a("code",[e._v("topic:")]),e._v(" that starts with "),a("code",[e._v("/")]),e._v(" and does not contains any "),a("code",[e._v("/")]),e._v(" in it.\n"),a("code",[e._v("vehicle_odometry")]),e._v(", "),a("code",[e._v("vehicle_status")]),e._v(" and "),a("code",[e._v("offboard_control_mode")]),e._v(" are examples of base names.")])]),e._v(" "),a("li",[a("p",[e._v("The topic "),a("a",{attrs:{href:"https://design.ros2.org/articles/topic_and_service_names.html#namespaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("namespace"),a("OutboundLink")],1),e._v(".\nBy default it is set to:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("/fmu/out/")]),e._v(" for topics that are "),a("em",[e._v("published")]),e._v(" by PX4.")]),e._v(" "),a("li",[a("code",[e._v("/fmu/in/")]),e._v(" for topics that are "),a("em",[e._v("subscribed")]),e._v(" by PX4.")])])]),e._v(" "),a("li",[a("p",[e._v("The message type ("),a("code",[e._v("VehicleOdometry")]),e._v(", "),a("code",[e._v("VehicleStatus")]),e._v(", "),a("code",[e._v("OffboardControlMode")]),e._v(", etc.) and the ROS 2 package ("),a("code",[e._v("px4_msgs")]),e._v(") that is expected to provide the message definition.")])])]),e._v(" "),a("p",[e._v("You can arbitrarily change the configuration.\nFor example, you could use different default namespaces or use a custom package to store the message definitions.")]),e._v(" "),a("h2",{attrs:{id:"helpful-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpful-resources"}},[e._v("#")]),e._v(" Helpful Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=F5oelooT67E",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS 2 in PX4: Technical Details of a Seamless Transition to XRCE-DDS"),a("OutboundLink")],1),e._v(" - Pablo Garrido & Nuno Marques (youtube)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://gist.github.com/julianoes/adbf76408663829cd9aed8d14c88fa29",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 ROS 2 offboard tutorial"),a("OutboundLink")],1),e._v(" (Github gist - JulianOes)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Jaeyoung-Lim/px4-offboard/blob/2d784532fd323505ac8a6e53bb70145600d367c4/doc/ROS2_PX4_Offboard_Tutorial.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS 2 PX4 Offboard Tutorial"),a("OutboundLink")],1),e._v(" (Jaeyoung-Lim).")])])])}),[],!1,null,null,null);t.default=n.exports},416:function(e,t,s){e.exports=s.p+"assets/img/architecture_xrce-dds_ros2.fed61809.svg"}}]);