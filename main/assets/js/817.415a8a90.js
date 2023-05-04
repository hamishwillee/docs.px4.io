(window.webpackJsonp=window.webpackJsonp||[]).push([[817],{3117:function(t,e,o){"use strict";o.r(e);var n=o(19),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"px4-ethernet-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-ethernet-setup"}},[t._v("#")]),t._v(" PX4 Ethernet Setup")]),t._v(" "),n("p",[t._v("Ethernet connectivity provides a fast, reliable, and flexible communication alternative to using USB or other serial connections.")]),t._v(" "),n("p",[t._v('It can be used to connect to ground stations, companion computers, and other MAVLink systems. It is particularly recommended when connecting to systems that "natively" use Ethernet - for example IP radios.')]),t._v(" "),n("p",[t._v("This topic covers:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#px4-ethernet-setup"}},[t._v("PX4 Ethernet Setup")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#supported-flight-controllers"}},[t._v("Supported Flight Controllers")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Setting up the Ethernet Network")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Network Setup")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#ubuntu-ethernet-network-setup"}},[t._v("Ubuntu Ethernet Network Setup")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#companion-computer-ethernet-network-setup"}},[t._v("Companion Computer Ethernet Network Setup")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("PX4 MAVLink Serial Port Configuration")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#qgroundcontrol-setup-example"}},[t._v("QGroundControl Setup Example")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#mavsdk-python-setup-example"}},[t._v("MAVSDK-Python Setup Example")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#ros-2-setup-example"}},[t._v("ROS 2 Setup Example")])])])])]),t._v(" "),n("h2",{attrs:{id:"supported-flight-controllers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-flight-controllers"}},[t._v("#")]),t._v(" Supported Flight Controllers")]),t._v(" "),n("p",[t._v("PX4 supports Ethernet connectivity on "),n("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-011%20Pixhawk%20Autopilot%20v5X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X-standard"),n("OutboundLink")],1),t._v(" flight controllers (and later) that have an Ethernet port. It may also be supported on other boards.")]),t._v(" "),n("p",[t._v("Supported flight controllers include:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_pixhawk_v6x.html"}},[t._v("CUAV Pixhawk V6X")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X")])],1)]),t._v(" "),n("h2",{attrs:{id:"setting-up-the-ethernet-network"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("#")]),t._v(" Setting up the Ethernet Network")]),t._v(" "),n("p",[t._v("To connect systems over Ethernet you need to configure them to run on the same IP network, so that each system has a unique IP address and can find the other systems. This might be done using a DHCP server to allocate addresses, or by manually configuring the addresses of each system on the network.")]),t._v(" "),n("p",[t._v('There is no single "out of the box configuration" that we can provide that will necessarily work in your local network. Therefore as an example of the kind of configuration you might do, below we show how to set up the systems on an IP network with static addresses in the range '),n("code",[t._v("192.168.0.Xxx")]),t._v(", where PX4 has a statically allocated address "),n("code",[t._v("192.168.0.4")]),t._v(" and the computer has address "),n("code",[t._v("192.168.0.1")]),t._v(". If you wanted to connect a companion computer or other system to the network you could use a similar approach to allocate a static address.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v('There is nothing "special" about the network configuration (other than perhaps the tools used to modify the network settings); it works much the same as any home or business network.\nWhich is to say that a knowledge of how IP networks work is highly desirable!')])]),t._v(" "),n("h3",{attrs:{id:"px4-ethernet-network-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-ethernet-network-setup"}},[t._v("#")]),t._v(" PX4 Ethernet Network Setup")]),t._v(" "),n("p",[t._v("PX4 uses the "),n("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#netman"}},[t._v("netman")]),t._v(" module to apply and update network settings.")],1),t._v(" "),n("p",[t._v("Network settings are defined in the configuration file "),n("code",[t._v("/fs/microsd/net.cfg")]),t._v(" on the SD card. This is a text file, that defines each setting on a new line as a "),n("code",[t._v("name=value")]),t._v(" pair. A configuration file might look like this:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("DEVICE=eth0\nBOOTPROTO=fallback\nIPADDR=192.168.0.4\nNETMASK=255.255.255.0\nROUTER=192.168.0.254\nDNS=192.168.0.254\n")])])]),n("p",[t._v("Where the values are:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("DEVICE")]),t._v(": Interface name. Default is "),n("code",[t._v("eth0")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v("BOOTPROTO")]),t._v(": Protocol for getting PX4 IP address. Valid values for proto are: "),n("code",[t._v("dhcp")]),t._v(", "),n("code",[t._v("static")]),t._v(", "),n("code",[t._v("fallback")]),t._v(" (use DHCP but fall back to static address after time, if that fails)")]),t._v(" "),n("li",[n("code",[t._v("IPADDR")]),t._v(": Static IP address (used if BOOTPROTO is "),n("code",[t._v("static")]),t._v(" or "),n("code",[t._v("fallback")]),t._v(")")]),t._v(" "),n("li",[n("code",[t._v("NETMASK")]),t._v(": Network mask")]),t._v(" "),n("li",[n("code",[t._v("ROUTER")]),t._v(": The address of the default route.")]),t._v(" "),n("li",[n("code",[t._v("DNS")]),t._v(": The address of the DNS server.")])]),t._v(" "),n("p",[t._v('To set the above "example" configuration using the '),n("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),n("ol",[n("li",[t._v("Connect the flight controller to the computer with the USB cable.")]),t._v(" "),n("li",[t._v("Open "),n("strong",[t._v("QGroundcontrol > Analyze Tools > MAVLink Console")])]),t._v(" "),n("li",[t._v('Enter commands "like" the ones below into the '),n("em",[t._v("MAVLink Console")]),t._v(" (to write the values to the configuration file):"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("echo DEVICE=eth0 > /fs/microsd/net.cfg\necho BOOTPROTO=fallback >> /fs/microsd/net.cfg\necho IPADDR=192.168.0.4 >> /fs/microsd/net.cfg\necho NETMASK=255.255.255.0 >>/fs/microsd/net.cfg\necho ROUTER=192.168.0.254 >>/fs/microsd/net.cfg\necho DNS=192.168.0.254 >>/fs/microsd/net.cfg\n")])])])]),t._v(" "),n("li",[t._v("Once the network configuration has been set you can disconnect the USB cable.")]),t._v(" "),n("li",[t._v("Reboot the flight controller to apply the settings.")])]),t._v(" "),n("p",[t._v("Note that the above setup gives the flight controller an address on the Ethernet network. You also need to "),n("a",{attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("configure the Ethernet port")]),t._v(" to use MAVLink.")]),t._v(" "),n("h3",{attrs:{id:"ubuntu-ethernet-network-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-ethernet-network-setup"}},[t._v("#")]),t._v(" Ubuntu Ethernet Network Setup")]),t._v(" "),n("p",[t._v("If you're using Ubuntu for your ground station (or companion computer) then you can use "),n("a",{attrs:{href:"https://netplan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netplan"),n("OutboundLink")],1),t._v(" to configure the network.")]),t._v(" "),n("p",[t._v('Below we show how you write a setup to the netplan configuration file "'),n("code",[t._v("/etc/netplan/01-network-manager-all.yaml")]),t._v('", which would run on the same network as used by the PX4 setup above. Note that there are many more '),n("a",{attrs:{href:"https://netplan.io/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),n("OutboundLink")],1),t._v(" and instructions in the "),n("a",{attrs:{href:"https://netplan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netplan"),n("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),n("p",[t._v("To setup the Ubuntu Computer:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("In a terminal, create and open a "),n("code",[t._v("netplan")]),t._v(" configuration file: "),n("code",[t._v("/etc/netplan/01-network-manager-all.yaml")]),t._v(" Below we do this using the "),n("em",[t._v("nano")]),t._v(" text editor.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("sudo nano /etc/netplan/01-network-manager-all.yaml \n")])])])]),t._v(" "),n("li",[n("p",[t._v("Copy and paste the following configuration information into the file (note: the indentations are important!):")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("network:\n  version: 2\n  renderer: NetworkManager\n  ethernets:\n      enp2s0:\n          addresses:\n              - 192.168.0.1/24\n          nameservers:\n              addresses: [192.168.0.1]\n          routes:\n              - to: 192.168.0.1\n                via: 192.168.0.1\n")])])]),n("p",[t._v("Save and exit the editor.")])]),t._v(" "),n("li",[n("p",[t._v("Apply the "),n("em",[t._v("netplan")]),t._v(" configuration by entering the following command into the Ubuntu terminal.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("sudo netplan apply\n")])])])])]),t._v(" "),n("h3",{attrs:{id:"companion-computer-ethernet-network-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-ethernet-network-setup"}},[t._v("#")]),t._v(" Companion Computer Ethernet Network Setup")]),t._v(" "),n("p",[t._v("The setup for a companion computer will depend on the companion computer's operating system.")]),t._v(" "),n("p",[t._v("A Linux operating system may support "),n("code",[t._v("netplan")]),t._v(", in which case the instructions would be the same as above, but using a unique IP address.")]),t._v(" "),n("h2",{attrs:{id:"px4-mavlink-serial-port-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("#")]),t._v(" PX4 MAVLink Serial Port Configuration")]),t._v(" "),n("p",[t._v("The Ethernet port configuration sets the properties of the "),n("em",[t._v("serial link")]),t._v(" (which is how PX4 views the Ethernet connection). This includes the set of MAVLink messages that are streamed, the data rate, the UDP ports that a remote system can connect listen to, etc.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("You must separately configure the PX4 IP address and other "),n("em",[t._v("network settings")]),t._v(" ("),n("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("as shown previously")]),t._v(").")])]),t._v(" "),n("p",[t._v("PX4 configures the serial port to connect to a GCS via MAVLink, using the parameters shown below:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Value")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[t._v("MAV_2_CONFIG")])],1),t._v(" "),n("td",[t._v("1000")]),t._v(" "),n("td",[t._v("Configure Ethernet port")])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_BROADCAST"}},[t._v("MAV_2_BROADCAST")])],1),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Broadcast "),n("code",[t._v("HEARTBEAT")]),t._v(" messages")])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")])],1),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v('Send the "normal" set of MAVLink messages (i.e. the GCS set)')])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_RADIO_CTL"}},[t._v("MAV_2_RADIO_CTL")])],1),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("Disable software throttling of MAVLink traffic")])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_RATE"}},[t._v("MAV_2_RATE")])],1),t._v(" "),n("td",[t._v("100000")]),t._v(" "),n("td",[t._v("Maximum sending rate")])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")])],1),t._v(" "),n("td",[t._v("14550")]),t._v(" "),n("td",[t._v("MAVLink Remote Port of 14550 (GCS)")])]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")])],1),t._v(" "),n("td",[t._v("14550")]),t._v(" "),n("td",[t._v("MAVLink Network Port of 14550 (GCS)")])])])]),t._v(" "),n("p",[t._v("Normally a companion computer would use port "),n("code",[t._v("14540")]),t._v(" (rather than "),n("code",[t._v("14550")]),t._v(") and stream the set of MAVLink messages specified in the "),n("code",[t._v("Onboard")]),t._v(" profile. You can configure this setup by changing "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")]),t._v(" and "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")]),t._v(" to "),n("code",[t._v("14540")]),t._v(" and "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")]),t._v(" to "),n("code",[t._v("2")]),t._v(" (Onboard). Note however that this will still work using the GCS profile.")],1),t._v(" "),n("p",[t._v("For more information on MAVLink serial port configuration see "),n("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")])],1),t._v(" "),n("h2",{attrs:{id:"qgroundcontrol-setup-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-setup-example"}},[t._v("#")]),t._v(" QGroundControl Setup Example")]),t._v(" "),n("p",[t._v("Assuming you have already "),n("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your ground station computer and PX4 run on the same network, and")]),t._v(" "),n("p",[t._v("To connect QGroundControl to PX4 over Ethernet:")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your ground station computer and PX4 run on the same network.")])]),t._v(" "),n("li",[n("p",[t._v("Connect the ground station computer and PX4 using an Ethernet cable.")])]),t._v(" "),n("li",[n("p",[t._v("Start QGroundControl and "),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("define a comm link"),n("OutboundLink")],1),t._v(" ("),n("strong",[t._v("Application Settings > Comm Links")]),t._v(") specifying the "),n("em",[t._v("server address")]),t._v(" and port as the IP address and port assigned in PX4, respectively.")]),t._v(" "),n("p",[t._v("Assuming that the values are set as described in the rest of this topic the setup will look like this:")]),t._v(" "),n("p",[n("img",{attrs:{src:o(468),alt:"QGC comm link for ethernet setup"}})])]),t._v(" "),n("li",[n("p",[t._v("QGroundControl should then connect if you select this link.")])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[n("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Port Configuration")]),t._v(" should not be needed (the default are appropriate for a GCS).")])]),t._v(" "),n("h2",{attrs:{id:"mavsdk-python-setup-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-python-setup-example"}},[t._v("#")]),t._v(" MAVSDK-Python Setup Example")]),t._v(" "),n("p",[t._v("To setup MAVSDK-Python running on a companion computer:")]),t._v(" "),n("ol",[n("li",[n("p",[n("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your companion computer and PX4 run on the same network.")])]),t._v(" "),n("li",[n("p",[t._v("Modify the "),n("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Port Configuration")]),t._v(" to connect to a companion computer. You might change the parameters "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")]),t._v(" and "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")]),t._v(" to "),n("code",[t._v("14540")]),t._v(", and "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")]),t._v(" to "),n("code",[t._v("2")]),t._v(" (Onboard).")],1)]),t._v(" "),n("li",[n("p",[t._v("Follow the instructions in "),n("a",{attrs:{href:"https://github.com/mavlink/MAVSDK-Python",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK-python"),n("OutboundLink")],1),t._v(" to install and use MAVSDK.")]),t._v(" "),n("p",[t._v("For example, your code will connect to the PX4 using:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" drone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system_address"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://192.168.0.4:14540"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("MAVSDK")]),t._v(" "),n("p",[t._v("can connect to the PX4 on port "),n("code",[t._v("14550")]),t._v(" if you don't modify the PX4 Ethernet port configuration. However this is not recommended because the default configuration is optimised for communicating with a GCS (not a companion computer).")])]),t._v(" "),n("h2",{attrs:{id:"ros-2-setup-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-setup-example"}},[t._v("#")]),t._v(" ROS 2 Setup Example")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("Prerequisites:")]),t._v(" "),n("ul",[n("li",[t._v("You have a supported autopilot hardware running PX4 firmware that includes "),n("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html"}},[t._v("uXRCE-DDS")]),t._v(" middleware. Note that PX4 v1.14 and later include the required "),n("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#uxrce_dds_client"}},[t._v("uxrce_dds_client")]),t._v(" module by default.")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("ROS 2")]),t._v(" has been set up correctly on the companion computer.")],1),t._v(" "),n("li",[t._v("You have followed the Ethernet network and port setup as discussed at the top of this page.")])])]),t._v(" "),n("p",[t._v("To set up ROS 2:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Connect your flight controller and companion computer via Ethernet.")])]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html#starting-the-client"}},[t._v("Start the uXRCE-DDS client on PX4")]),t._v(", either manually or by customizing the system startup script. Note that you must use the IP address of the companion computer and the UDP port on which the agent is listening (the example configuration above sets the companion IP address to "),n("code",[t._v("192.168.0.1")]),t._v(", and the agent UDP port is set to "),n("code",[t._v("8888")]),t._v(" in the next step).")],1)]),t._v(" "),n("li",[n("p",[n("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html#starting-the-agent"}},[t._v("Start the micro XRCE-DDS agent on the companion computer")]),t._v(". For example, enter the following command in a terminal to start the agent listening on UDP port "),n("code",[t._v("8888")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("MicroXRCEAgent udp4 -p 8888\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Run a "),n("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html#running-the-example"}},[t._v("listener node")]),t._v(" in a new terminal to confirm the connection is established:")],1),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("source ~/ws_sensor_combined/install/setup.bash\nros2 launch px4_ros_com sensor_combined_listener.launch.py\n")])])]),n("p",[t._v("If everything is setup correctly, the following output should be displayed in the terminal:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("RECEIVED SENSOR COMBINED DATA\n=============================\nts: 855801598\ngyro_rad[0]: -0.00339938\ngyro_rad[1]: 0.00440091\ngyro_rad[2]: 0.00513893\ngyro_integral_dt: 4997\naccelerometer_timestamp_relative: 0\naccelerometer_m_s2[0]: -0.0324082\naccelerometer_m_s2[1]: 0.0392213\naccelerometer_m_s2[2]: -9.77914\naccelerometer_integral_dt: 4997\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports},468:function(t,e,o){t.exports=o.p+"assets/img/px4_ethernet_link_config.1fe3efb1.png"}}]);