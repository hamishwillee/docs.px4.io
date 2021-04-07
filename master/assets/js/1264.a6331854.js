(window.webpackJsonp=window.webpackJsonp||[]).push([[1264],{2648:function(e,t,a){"use strict";a.r(t);var o=a(18),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"机载计算机外设"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机外设"}},[e._v("#")]),e._v(" 机载计算机外设")]),e._v(" "),a("p",[e._v("This section contains information about companion computer peripherals. These include both components that might be connected to a companion computer (potentially triggered/accessed by PX4), and for connecting the computer to the flight controller.")]),e._v(" "),a("h2",{attrs:{id:"companion-pixhawk-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-pixhawk-communication"}},[e._v("#")]),e._v(" Companion/Pixhawk Communication")]),e._v(" "),a("p",[e._v("Typical companion computer work with Pixhawk requires a companion link to transmit/receive the data between the companion computer and Pixhawk hardware (e.g. Intel NUC and Pixhawk 4).")]),e._v(" "),a("p",[e._v("有一些构建这种通信桥的设备，如 FTDI USB 接口和电平移位器(见下文)。")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("PX4 configuration for communicating with a companion computer over MAVLink configuration is covered in [MAVLink \\(OSD / Telemetry\\)](../peripherals/mavlink_peripherals.md#example). Other relevant topics/sections include: [Companion Computer for Pixhawk Series](../companion_computer/pixhawk_companion.md), [Robotics](../robotics/README.md) and [RTPS/DDS Interface: PX4-Fast RTPS(DDS) Bridge](../middleware/micrortps.md).")])]),e._v(" "),a("h3",{attrs:{id:"ftdi-设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftdi-设备"}},[e._v("#")]),e._v(" FTDI 设备")]),e._v(" "),a("p",[e._v("The FTDI USB adapters are the most common way of communicating between companion computer and Pixhawk. They are usually plug and play as long as the IO of the adapter is set to 3.3v. In order to utilize the full capability/reliability of the serial link offered on the Pixhawk hardware, flow control is recommended.")]),e._v(" "),a("p",[e._v("Options are listed below:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("设备")]),e._v(" "),a("th",[e._v("3.3v IO (默认)")]),e._v(" "),a("th",[e._v("流控")]),e._v(" "),a("th",[e._v("Tx/Rx LEDs")]),e._v(" "),a("th",[e._v("JST-GH接插件")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://pixdev.myshopify.com/products/ftdi-breakout-jst-gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("PixDev FTDI JST-GH Breakout"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("Yes")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://store.mrobotics.io/USB-FTDI-Serial-to-JST-GH-p/mro-ftdi-jstgh01-mr.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo USB FTDI Serial to JST-GH (Basic)"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Capable")]),e._v(" "),a("td",[e._v("Capable")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://www.sparkfun.com/products/9873",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun FTDI Basic Breakout"),a("OutboundLink")],1)]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")])])])]),e._v(" "),a("h3",{attrs:{id:"逻辑电平移位器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑电平移位器"}},[e._v("#")]),e._v(" 逻辑电平移位器")]),e._v(" "),a("p",[e._v("On occasion a companion computer may expose hardware level IO that is often run at 1.8v or 5v, while the Pixhawk hardware operates at 3.3v IO. In order to resolve this, a level shifter can be implemented to safely convert the transmitting/receiving signal voltage.")]),e._v(" "),a("p",[e._v("Options include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.sparkfun.com/products/12009",target:"_blank",rel:"noopener noreferrer"}},[e._v("SparkFun 逻辑电平转换器 - 双向"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.adafruit.com/product/757",target:"_blank",rel:"noopener noreferrer"}},[e._v("4通道 I2C -安全双向逻辑电平转换器 - BSS 138"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"相机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相机"}},[e._v("#")]),e._v(" 相机")]),e._v(" "),a("p",[e._v("Cameras are used image and video capture, and more generally to provide data for "),a("RouterLink",{attrs:{to:"/zh/computer_vision/"}},[e._v("computer vision")]),e._v(' applications (in this case the "cameras" may only provide processed data, not raw images)')],1),e._v(" "),a("h3",{attrs:{id:"立体摄像机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立体摄像机"}},[e._v("#")]),e._v(" 立体摄像机")]),e._v(" "),a("p",[e._v("Stereo cameras are typically used for depth perception, path planning and SLAM. They are in no way guaranteed to be plug and play with your companion computer.")]),e._v(" "),a("p",[e._v("Popular stereo cameras include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d435.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D435"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://click.intel.com/intelr-realsensetm-depth-camera-d415.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel® RealSense™ Depth Camera D415"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.perceptin.io/products",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ironsides"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://duo3d.com/product/duo-minilx-lv1",target:"_blank",rel:"noopener noreferrer"}},[e._v("DUO MLX"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"vio-cameras-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vio-cameras-sensors"}},[e._v("#")]),e._v(" VIO Cameras/Sensors")]),e._v(" "),a("p",[e._v("The following sensors can be used for "),a("RouterLink",{attrs:{to:"/zh/computer_vision/visual_inertial_odometry.html"}},[e._v("Visual Inertial Odometry (VIO)")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/camera_t265_vio.html"}},[e._v("T265 Realsense Tracking Camera")])],1)]),e._v(" "),a("p",[a("span",{attrs:{id:"data_telephony"}})]),e._v(" "),a("h2",{attrs:{id:"data-telephony-lte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-telephony-lte"}},[e._v("#")]),e._v(" Data Telephony (LTE)")]),e._v(" "),a("p",[e._v("An LTE USB module can be attached to a companion computer and used to route MAVLink traffic between the flight controller and the Internet.")]),e._v(" "),a("p",[e._v('There is no "standard method" for a ground station and companion to connect over the Internet. Generally you can\'t connect them directly because neither of them will have a public/static IP on the Internet.')]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Typically your router (or the mobile network) has a public IP address, and your GCS computer/vehicle are on a "),a("em",[e._v("local")]),e._v(" network. The router uses network address translation (NAT) to map "),a("em",[e._v("outgoing")]),e._v(" requests from your local network to the Internet, and can use the map to route the "),a("em",[e._v("responses")]),e._v(" back to requesting system. However NAT has no way to know where to direct the traffic from an arbitrary external system, so there is no way to "),a("em",[e._v("initiate")]),e._v(" a connection to a GCS or vehicle running in the local network.")])]),e._v(" "),a("p",[e._v("A common approach is to set up a virtual private network between the companion and GCS computer (i.e. install a VPN system like "),a("a",{attrs:{href:"https://www.zerotier.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zerotier"),a("OutboundLink")],1),e._v(" on both computers). The companion then uses "),a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),a("OutboundLink")],1),e._v(" to route traffic between the serial interface (flight controller) and GCS computer on the VPN network.")]),e._v(" "),a("p",[e._v("This method has the benefit that the GCS computer address can be static within the VPN, so the configuration of the "),a("em",[e._v("mavlink router")]),e._v(" does not need to change over time. In addition, the communication link is secure because all VPN traffic is encrypted (MAVLink 2 itself does not support encryption).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You can also choose to route to the VPN broadcast address (i.e. "),a("code",[e._v("x.x.x.255:14550")]),e._v(", where 'x' depends on the VPN system). This approach means that you do not need to know the IP address of the GCS computer, but may result in more traffic than desired (since packets are broadcast to every computer on the VPN network).")])]),e._v(" "),a("p",[e._v("Some USB modules that are known to work include:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e8372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E8372"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://consumer.huawei.com/en/mobile-broadband/e3372/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Huawei E3372"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("The "),a("em",[e._v("E8372")]),e._v(" includes WiFi which you can use to configure the SIM while it is plugged into the companion (making the development workflow a little easier). The "),a("em",[e._v("E3372")]),e._v(" lacks WiFi, so you have to configure it by plugging the stick into a laptop.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);