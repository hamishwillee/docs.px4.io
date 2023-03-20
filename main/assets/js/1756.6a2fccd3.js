(window.webpackJsonp=window.webpackJsonp||[]).push([[1756],{3186:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"机载计算机外设"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机外设"}},[e._v("#")]),e._v(" 机载计算机外设")]),e._v(" "),a("p",[e._v("本节包含关于机载计算机外设的信息。 其中既包括可能与机载计算机连接的组件（可能会与PX4交互/访问），也包括将机载计算机与飞行控制器连接起来。")]),e._v(" "),a("h2",{attrs:{id:"companion-pixhawk-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-pixhawk-communication"}},[e._v("#")]),e._v(" Companion/Pixhawk Communication")]),e._v(" "),a("p",[e._v("Typical companion computer work with Pixhawk requires a companion link to transmit/receive the data between the companion computer and Pixhawk hardware (e.g. Intel NUC and Pixhawk 4).")]),e._v(" "),a("p",[e._v("There are a few devices that allow this communication bridge such as FTDI USB breakouts and level shifters (see below).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("PX4 configuration for communicating with a companion computer over MAVLink configuration is covered in "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html#example"}},[e._v("MAVLink (OSD / Telemetry)")]),e._v(". Other relevant topics/sections include: "),a("RouterLink",{attrs:{to:"/zh/companion_computer/"}},[e._v("Companion Computers")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/robotics/"}},[e._v("Robotics")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/middleware/xrce_dds.html"}},[e._v("XRCE-DDS (PX4-ROS 2/DDS Bridge)")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"ftdi-devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-devices"}},[e._v("#")]),e._v(" FTDI Devices")]),e._v(" "),a("p",[e._v("The FTDI USB adapters are the most common way of communicating between companion computer and Pixhawk. They are usually plug and play as long as the IO of the adapter is set to 3.3V. In order to utilize the full capability/reliability of the serial link offered on the Pixhawk hardware, flow control is recommended.")]),e._v(" "),a("p",[e._v('A few "turnkey" options are listed below:')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Device")]),e._v(" "),a("th",[e._v("3.3v IO (Default)")]),e._v(" "),a("th",[e._v("Flow Control")]),e._v(" "),a("th",[e._v("Tx/Rx LEDs")]),e._v(" "),a("th",[e._v("JST-GH")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://store.mrobotics.io/USB-FTDI-Serial-to-JST-GH-p/mro-ftdi-jstgh01-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo USB FTDI Serial to JST-GH (Basic)"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Capable")]),e._v(" "),a("td",[e._v("Capable")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://www.sparkfun.com/products/9873",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun FTDI Basic Breakout"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")])])])]),e._v(" "),a("p",[e._v("You can also use an off-the-shelf FTDI cable "),a("a",{attrs:{href:"https://www.sparkfun.com/products/9717",target:"_blank",rel:"noopener noreferrer"}},[e._v("like this one"),a("OutboundLink")],1),e._v(" and connect it to flight controller using the appropriate header adaptor (JST-GH connectors are specified in the Pixhawk standard, but you should confirm the connectors for your flight controller).")]),e._v(" "),a("h3",{attrs:{id:"logic-level-shifters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logic-level-shifters"}},[e._v("#")]),e._v(" Logic Level Shifters")]),e._v(" "),a("p",[e._v("On occasion a companion computer may expose hardware level IO that is often run at 1.8v or 5v, while the Pixhawk hardware operates at 3.3v IO. In order to resolve this, a level shifter can be implemented to safely convert the transmitting/receiving signal voltage.")]),e._v(" "),a("p",[e._v("Options include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.sparkfun.com/products/12009",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun Logic Level Converter - Bi-Directional"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/757",target:"_blank",rel:"noopener noreferrer"}},[e._v("4-channel I2C-safe Bi-directional Logic Level Converter - BSS138"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"cameras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cameras"}},[e._v("#")]),e._v(" Cameras")]),e._v(" "),a("p",[e._v("Cameras are used image and video capture, and more generally to provide data for "),a("RouterLink",{attrs:{to:"/zh/computer_vision/"}},[e._v("computer vision")]),e._v(' applications (in this case the "cameras" may only provide processed data, not raw images)')],1),e._v(" "),a("h3",{attrs:{id:"stereo-cameras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stereo-cameras"}},[e._v("#")]),e._v(" Stereo Cameras")]),e._v(" "),a("p",[e._v("Stereo cameras are typically used for depth perception, path planning and SLAM. They are in no way guaranteed to be plug and play with your companion computer.")]),e._v(" "),a("p",[e._v("Popular stereo cameras include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.intelrealsense.com/depth-camera-d435/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D435"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.intelrealsense.com/depth-camera-d415/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D415"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://duo3d.com/product/duo-minilx-lv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("DUO MLX"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"vio-cameras-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vio-cameras-sensors"}},[e._v("#")]),e._v(" VIO Cameras/Sensors")]),e._v(" "),a("p",[e._v("The following sensors can be used for "),a("RouterLink",{attrs:{to:"/zh/computer_vision/visual_inertial_odometry.html"}},[e._v("Visual Inertial Odometry (VIO)")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[e._v("T265 Realsense Tracking Camera")])],1)]),e._v(" "),a("p",[a("span",{attrs:{id:"data_telephony"}})]),e._v(" "),a("h2",{attrs:{id:"data-telephony-lte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-telephony-lte"}},[e._v("#")]),e._v(" Data Telephony (LTE)")]),e._v(" "),a("p",[e._v("An LTE USB module can be attached to a companion computer and used to route MAVLink traffic between the flight controller and the Internet.")]),e._v(" "),a("p",[e._v('There is no "standard method" for a ground station and companion to connect over the Internet. Generally you can\'t connect them directly because neither of them will have a public/static IP on the Internet.')]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Typically your router (or the mobile network) has a public IP address, and your GCS computer/vehicle are on a "),a("em",[e._v("local")]),e._v(" network. The router uses network address translation (NAT) to map "),a("em",[e._v("outgoing")]),e._v(" requests from your local network to the Internet, and can use the map to route the "),a("em",[e._v("responses")]),e._v(" back to requesting system. However NAT has no way to know where to direct the traffic from an arbitrary external system, so there is no way to "),a("em",[e._v("initiate")]),e._v(" a connection to a GCS or vehicle running in the local network.")])]),e._v(" "),a("p",[e._v("A common approach is to set up a virtual private network between the companion and GCS computer (i.e. install a VPN system like "),a("a",{attrs:{href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zerotier"),a("OutboundLink")],1),e._v(" on both computers). The companion then uses "),a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),a("OutboundLink")],1),e._v(" to route traffic between the serial interface (flight controller) and GCS computer on the VPN network.")]),e._v(" "),a("p",[e._v("This method has the benefit that the GCS computer address can be static within the VPN, so the configuration of the "),a("em",[e._v("mavlink router")]),e._v(" does not need to change over time. In addition, the communication link is secure because all VPN traffic is encrypted (MAVLink 2 itself does not support encryption).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You can also choose to route to the VPN broadcast address (i.e. "),a("code",[e._v("x.x.x.255:14550")]),e._v(", where 'x' depends on the VPN system). This approach means that you do not need to know the IP address of the GCS computer, but may result in more traffic than desired (since packets are broadcast to every computer on the VPN network).")])]),e._v(" "),a("p",[e._v("Some USB modules that are known to work include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e8372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E8372"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e3372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E3372"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("The "),a("em",[e._v("E8372")]),e._v(" includes WiFi which you can use to configure the SIM while it is plugged into the companion (making the development workflow a little easier). The "),a("em",[e._v("E3372")]),e._v(" lacks WiFi, so you have to configure it by plugging the stick into a laptop.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);