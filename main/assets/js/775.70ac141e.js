(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{2648:function(t,e,a){"use strict";a.r(e);var r=a(19),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"px4-ethernet-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-ethernet-setup"}},[t._v("#")]),t._v(" PX4 Ethernet Setup")]),t._v(" "),r("p",[t._v("Ethernet connectivity provides a fast, reliable, and flexible communication alternative to using USB or other serial connections.")]),t._v(" "),r("p",[t._v('It can be used to connect to ground stations, companion computers, and other MAVLink systems. It is particularly recommended when connecting to systems that "natively" use Ethernet - for example IP radios.')]),t._v(" "),r("p",[t._v("This topic covers:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#px4-ethernet-setup"}},[t._v("PX4 Ethernet Setup")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#supported-flight-controllers"}},[t._v("Supported Flight Controllers")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Setting up the Ethernet Network")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Network Setup")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#ubuntu-ethernet-network-setup"}},[t._v("Ubuntu Ethernet Network Setup")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#companion-computer-ethernet-network-setup"}},[t._v("Companion Computer Ethernet Network Setup")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("PX4 MAVLink Serial Port Configuration")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#qgroundcontrol-setup-example"}},[t._v("QGroundControl Setup Example")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#mavsdk-python-setup-example"}},[t._v("MAVSDK-Python Setup Example")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#ros-2-setup-example"}},[t._v("ROS 2 Setup Example")])])])])]),t._v(" "),r("h2",{attrs:{id:"supported-flight-controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-flight-controllers"}},[t._v("#")]),t._v(" Supported Flight Controllers")]),t._v(" "),r("p",[t._v("PX4 supports Ethernet connectivity on "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-011%20Pixhawk%20Autopilot%20v5X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X-standard"),r("OutboundLink")],1),t._v(" flight controllers (and later) that have an Ethernet port. It may also be supported on other boards.")]),t._v(" "),r("p",[t._v("Supported flight controllers include:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_pixhawk_v6x.html"}},[t._v("CUAV Pixhawk V6X")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X")])],1)]),t._v(" "),r("h2",{attrs:{id:"setting-up-the-ethernet-network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("#")]),t._v(" Setting up the Ethernet Network")]),t._v(" "),r("p",[t._v("To connect systems over Ethernet you need to configure them to run on the same IP network, so that each system has a unique IP address and can find the other systems. This might be done using a DHCP server to allocate addresses, or by manually configuring the addresses of each system on the network.")]),t._v(" "),r("p",[t._v('There is no single "out of the box configuration" that we can provide that will necessarily work in your local network. Therefore as an example of the kind of configuration you might do, below we show how to set up the systems on an IP network with static addresses in the range '),r("code",[t._v("192.168.0.Xxx")]),t._v(", where PX4 has a statically allocated address "),r("code",[t._v("192.168.0.4")]),t._v(" and the computer has address "),r("code",[t._v("192.168.0.1")]),t._v(". If you wanted to connect a companion computer or other system to the network you could use a similar approach to allocate a static address.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('There is nothing "special" about the network configuration (other than perhaps the tools used to modify the network settings); it works much the same as any home or business network.\nWhich is to say that a knowledge of how IP networks work is highly desirable!')])]),t._v(" "),r("h3",{attrs:{id:"px4-ethernet-network-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-ethernet-network-setup"}},[t._v("#")]),t._v(" PX4 Ethernet Network Setup")]),t._v(" "),r("p",[t._v("PX4 uses the "),r("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#netman"}},[t._v("netman")]),t._v(" module to apply and update network settings.")],1),t._v(" "),r("p",[t._v("Network settings are defined in the configuration file "),r("code",[t._v("/fs/microsd/net.cfg")]),t._v(" on the SD card. This is a text file, that defines each setting on a new line as a "),r("code",[t._v("name=value")]),t._v(" pair. A configuration file might look like this:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("DEVICE=eth0\nBOOTPROTO=fallback\nIPADDR=192.168.0.4\nNETMASK=255.255.255.0\nROUTER=192.168.0.254\nDNS=192.168.0.254\n")])])]),r("p",[t._v("Where the values are:")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("DEVICE")]),t._v(": Interface name. Default is "),r("code",[t._v("eth0")]),t._v(".")]),t._v(" "),r("li",[r("code",[t._v("BOOTPROTO")]),t._v(": Protocol for getting PX4 IP address. Valid values for proto are: "),r("code",[t._v("dhcp")]),t._v(", "),r("code",[t._v("static")]),t._v(", "),r("code",[t._v("fallback")]),t._v(" (use DHCP but fall back to static address after time, if that fails)")]),t._v(" "),r("li",[r("code",[t._v("IPADDR")]),t._v(": Static IP address (used if BOOTPROTO is "),r("code",[t._v("static")]),t._v(" or "),r("code",[t._v("fallback")]),t._v(")")]),t._v(" "),r("li",[r("code",[t._v("NETMASK")]),t._v(": Network mask")]),t._v(" "),r("li",[r("code",[t._v("ROUTER")]),t._v(": The address of the default route.")]),t._v(" "),r("li",[r("code",[t._v("DNS")]),t._v(": The address of the DNS server.")])]),t._v(" "),r("p",[t._v('To set the above "example" configuration using the '),r("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Connect the flight controller to the computer with the USB cable.")])]),t._v(" "),r("li",[r("p",[t._v("Open "),r("strong",[t._v("QGroundcontrol > Analyze Tools > MAVLink Console")])])]),t._v(" "),r("li",[r("p",[t._v('Enter commands "like" the ones below into the '),r("em",[t._v("MAVLink Console")]),t._v(" (to write the values to the configuration file):")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEVICE")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("eth0 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /fs/microsd/net.cfg\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BOOTPROTO")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fallback "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /fs/microsd/net.cfg\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IPADDR")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.4 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /fs/microsd/net.cfg\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NETMASK")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("/fs/microsd/net.cfg\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ROUTER")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.254 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("/fs/microsd/net.cfg\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DNS")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.254 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v("/fs/microsd/net.cfg\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Once the network configuration has been set you can disconnect the USB cable.")])]),t._v(" "),r("li",[r("p",[t._v("Reboot the flight controller to apply the settings.")])])]),t._v(" "),r("p",[t._v("Note that the above setup gives the flight controller an address on the Ethernet network. You also need to "),r("a",{attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("configure the Ethernet port")]),t._v(" to use MAVLink.")]),t._v(" "),r("h3",{attrs:{id:"ubuntu-ethernet-network-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-ethernet-network-setup"}},[t._v("#")]),t._v(" Ubuntu Ethernet Network Setup")]),t._v(" "),r("p",[t._v("If you're using Ubuntu for your ground station (or companion computer) then you can use "),r("a",{attrs:{href:"https://netplan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netplan"),r("OutboundLink")],1),t._v(" to configure the network.")]),t._v(" "),r("p",[t._v('Below we show how you write a setup to the netplan configuration file "'),r("code",[t._v("/etc/netplan/01-network-manager-all.yaml")]),t._v('", which would run on the same network as used by the PX4 setup above. Note that there are many more '),r("a",{attrs:{href:"https://netplan.io/examples/",target:"_blank",rel:"noopener noreferrer"}},[t._v("examples"),r("OutboundLink")],1),t._v(" and instructions in the "),r("a",{attrs:{href:"https://netplan.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("netplan"),r("OutboundLink")],1),t._v(" documentation.")]),t._v(" "),r("p",[t._v("To setup the Ubuntu Computer:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("In a terminal, create and open a "),r("code",[t._v("netplan")]),t._v(" configuration file: "),r("code",[t._v("/etc/netplan/01-network-manager-all.yaml")]),t._v(" Below we do this using the "),r("em",[t._v("nano")]),t._v(" text editor.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo nano /etc/netplan/01-network-manager-all.yaml\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Copy and paste the following configuration information into the file (note: the indentations are important!):")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("network:\n  version: 2\n  renderer: NetworkManager\n  ethernets:\n      enp2s0:\n          addresses:\n              - 192.168.0.1/24\n          nameservers:\n              addresses: [192.168.0.1]\n          routes:\n              - to: 192.168.0.1\n                via: 192.168.0.1\n")])])]),r("p",[t._v("Save and exit the editor.")])]),t._v(" "),r("li",[r("p",[t._v("Apply the "),r("em",[t._v("netplan")]),t._v(" configuration by entering the following command into the Ubuntu terminal.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo netplan apply\n")])])])])]),t._v(" "),r("h3",{attrs:{id:"companion-computer-ethernet-network-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-ethernet-network-setup"}},[t._v("#")]),t._v(" Companion Computer Ethernet Network Setup")]),t._v(" "),r("p",[t._v("The setup for a companion computer will depend on the companion computer's operating system.")]),t._v(" "),r("p",[t._v("A Linux operating system may support "),r("code",[t._v("netplan")]),t._v(", in which case the instructions would be the same as above, but using a unique IP address.")]),t._v(" "),r("h2",{attrs:{id:"px4-mavlink-serial-port-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-mavlink-serial-port-configuration"}},[t._v("#")]),t._v(" PX4 MAVLink Serial Port Configuration")]),t._v(" "),r("p",[t._v("The Ethernet port configuration sets the properties of the "),r("em",[t._v("serial link")]),t._v(" (which is how PX4 views the Ethernet connection). This includes the set of MAVLink messages that are streamed, the data rate, the UDP ports that a remote system can connect listen to, etc.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("You must separately configure the PX4 IP address and other "),r("em",[t._v("network settings")]),t._v(" ("),r("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("as shown previously")]),t._v(").")])]),t._v(" "),r("p",[t._v("PX4 configures the serial port to connect to a GCS via MAVLink, using the parameters shown below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Value")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[t._v("MAV_2_CONFIG")])],1),t._v(" "),r("td",[t._v("1000")]),t._v(" "),r("td",[t._v("Configure Ethernet port")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_BROADCAST"}},[t._v("MAV_2_BROADCAST")])],1),t._v(" "),r("td",[t._v("1")]),t._v(" "),r("td",[t._v("Broadcast "),r("code",[t._v("HEARTBEAT")]),t._v(" messages")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")])],1),t._v(" "),r("td",[t._v("0")]),t._v(" "),r("td",[t._v('Send the "normal" set of MAVLink messages (i.e. the GCS set)')])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RADIO_CTL"}},[t._v("MAV_2_RADIO_CTL")])],1),t._v(" "),r("td",[t._v("0")]),t._v(" "),r("td",[t._v("Disable software throttling of MAVLink traffic")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RATE"}},[t._v("MAV_2_RATE")])],1),t._v(" "),r("td",[t._v("100000")]),t._v(" "),r("td",[t._v("Maximum sending rate")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")])],1),t._v(" "),r("td",[t._v("14550")]),t._v(" "),r("td",[t._v("MAVLink Remote Port of 14550 (GCS)")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")])],1),t._v(" "),r("td",[t._v("14550")]),t._v(" "),r("td",[t._v("MAVLink Network Port of 14550 (GCS)")])])])]),t._v(" "),r("p",[t._v("Normally a companion computer would use port "),r("code",[t._v("14540")]),t._v(" (rather than "),r("code",[t._v("14550")]),t._v(") and stream the set of MAVLink messages specified in the "),r("code",[t._v("Onboard")]),t._v(" profile. You can configure this setup by changing "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")]),t._v(" to "),r("code",[t._v("14540")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")]),t._v(" to "),r("code",[t._v("2")]),t._v(" (Onboard). Note however that this will still work using the GCS profile.")],1),t._v(" "),r("p",[t._v("For more information on MAVLink serial port configuration see "),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")])],1),t._v(" "),r("h2",{attrs:{id:"qgroundcontrol-setup-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-setup-example"}},[t._v("#")]),t._v(" QGroundControl Setup Example")]),t._v(" "),r("p",[t._v("Assuming you have already "),r("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your ground station computer and PX4 run on the same network, and")]),t._v(" "),r("p",[t._v("To connect QGroundControl to PX4 over Ethernet:")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your ground station computer and PX4 run on the same network.")])]),t._v(" "),r("li",[r("p",[t._v("Connect the ground station computer and PX4 using an Ethernet cable.")])]),t._v(" "),r("li",[r("p",[t._v("Start QGroundControl and "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/SettingsView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("define a comm link"),r("OutboundLink")],1),t._v(" ("),r("strong",[t._v("Application Settings > Comm Links")]),t._v(") specifying the "),r("em",[t._v("server address")]),t._v(" and port as the IP address and port assigned in PX4, respectively.")]),t._v(" "),r("p",[t._v("Assuming that the values are set as described in the rest of this topic the setup will look like this:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(497),alt:"QGC comm link for ethernet setup"}})])]),t._v(" "),r("li",[r("p",[t._v("QGroundControl should then connect if you select this link.")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Port Configuration")]),t._v(" should not be needed (the default are appropriate for a GCS).")])]),t._v(" "),r("h2",{attrs:{id:"mavsdk-python-setup-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-python-setup-example"}},[t._v("#")]),t._v(" MAVSDK-Python Setup Example")]),t._v(" "),r("p",[t._v("To setup MAVSDK-Python running on a companion computer:")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"#setting-up-the-ethernet-network"}},[t._v("Set up the Ethernet Network")]),t._v(" so your companion computer and PX4 run on the same network.")])]),t._v(" "),r("li",[r("p",[t._v("Modify the "),r("a",{attrs:{href:"#px4-ethernet-network-setup"}},[t._v("PX4 Ethernet Port Configuration")]),t._v(" to connect to a companion computer. You might change the parameters "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[t._v("MAV_2_REMOTE_PRT")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[t._v("MAV_2_UDP_PRT")]),t._v(" to "),r("code",[t._v("14540")]),t._v(", and "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[t._v("MAV_2_MODE")]),t._v(" to "),r("code",[t._v("2")]),t._v(" (Onboard).")],1)]),t._v(" "),r("li",[r("p",[t._v("Follow the instructions in "),r("a",{attrs:{href:"https://github.com/mavlink/MAVSDK-Python",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK-python"),r("OutboundLink")],1),t._v(" to install and use MAVSDK.")]),t._v(" "),r("p",[t._v("For example, your code will connect to the PX4 using:")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" drone"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system_address"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"udp://192.168.0.4:14540"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("MAVSDK")]),t._v(" "),r("p",[t._v("can connect to the PX4 on port "),r("code",[t._v("14550")]),t._v(" if you don't modify the PX4 Ethernet port configuration. However this is not recommended because the default configuration is optimised for communicating with a GCS (not a companion computer).")])]),t._v(" "),r("h2",{attrs:{id:"ros-2-setup-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-setup-example"}},[t._v("#")]),t._v(" ROS 2 Setup Example")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Prerequisites:")]),t._v(" "),r("ul",[r("li",[t._v("You have a supported autopilot hardware running PX4 firmware that includes "),r("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html"}},[t._v("uXRCE-DDS")]),t._v(" middleware. Note that PX4 v1.14 and later include the required "),r("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#uxrce-dds-client"}},[t._v("uxrce_dds_client")]),t._v(" module by default.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("ROS 2")]),t._v(" has been set up correctly on the companion computer.")],1),t._v(" "),r("li",[t._v("You have followed the Ethernet network and port setup as discussed at the top of this page.")])])]),t._v(" "),r("p",[t._v("To set up ROS 2:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Connect your flight controller and companion computer via Ethernet.")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html#starting-the-client"}},[t._v("Start the uXRCE-DDS client on PX4")]),t._v(", either manually or by customizing the system startup script. Note that you must use the IP address of the companion computer and the UDP port on which the agent is listening (the example configuration above sets the companion IP address to "),r("code",[t._v("192.168.0.1")]),t._v(", and the agent UDP port is set to "),r("code",[t._v("8888")]),t._v(" in the next step).")],1)]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html#starting-the-agent"}},[t._v("Start the micro XRCE-DDS agent on the companion computer")]),t._v(". For example, enter the following command in a terminal to start the agent listening on UDP port "),r("code",[t._v("8888")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("MicroXRCEAgent udp4 -p "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[t._v("Run a "),r("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html#running-the-example"}},[t._v("listener node")]),t._v(" in a new terminal to confirm the connection is established:")],1),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/ws_sensor_combined/install/setup.bash\nros2 launch px4_ros_com sensor_combined_listener.launch.py\n")])])]),r("p",[t._v("If everything is setup correctly, the following output should be displayed in the terminal:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("RECEIVED SENSOR COMBINED DATA\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nts: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("855801598")]),t._v("\ngyro_rad"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -0.00339938\ngyro_rad"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00440091")]),t._v("\ngyro_rad"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.00513893")]),t._v("\ngyro_integral_dt: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4997")]),t._v("\naccelerometer_timestamp_relative: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\naccelerometer_m_s2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -0.0324082\naccelerometer_m_s2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0392213")]),t._v("\naccelerometer_m_s2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": -9.77914\naccelerometer_integral_dt: "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4997")]),t._v("\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://px4.io/get-the-pixhawk-raspberry-pi-cm4-baseboard-by-holybro-talking-with-px4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get The Pixhawk Raspberry Pi CM4 Baseboard By Holybro Talking With PX4"),r("OutboundLink")],1),t._v(" (px4.io blog):\n"),r("ul",[r("li",[t._v("Tutorial showing how to connect Pixhawk 6X + Raspberry Pi on CM4 baseboard via wired Ethernet.")]),t._v(" "),r("li",[t._v("Blog dupliciates a lot of material from this topic.")])])])])])}),[],!1,null,null,null);e.default=n.exports},497:function(t,e,a){t.exports=a.p+"assets/img/px4_ethernet_link_config.0dda4432.png"}}]);