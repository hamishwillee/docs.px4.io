(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{1923:function(e,t,a){"use strict";a.r(t);var o=a(18),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"intel-aero-ready-to-fly-drone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intel-aero-ready-to-fly-drone"}},[e._v("#")]),e._v(" Intel Aero Ready to Fly Drone")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This flight controller has been "),o("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("discontinued")]),e._v(" and is no longer commercially available.")],1),e._v(" "),o("p",[e._v("PX4 v1.11 is the last release that supports this platform.")])]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("Intel Aero Ready to Fly Drone")]),e._v("® is a UAV development platform. Part of this is the "),o("em",[e._v("Intel Aero Compute Board")]),e._v(", running Linux on a Quad-core CPU. The other part is an STM32 microcontroller that is connected to it and that runs PX4 on NuttX. These are integrated in the same package on the "),o("em",[e._v("Intel Aero Ready to Fly Drone")]),e._v(", which also includes the vision accessory kit.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(574),alt:"Intel Aero RTF"}})]),e._v(" "),o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The main documentation on the "),o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("official wiki"),o("OutboundLink")],1),e._v(" explains how to setup, update and connect to the board, and how to do development on the Linux side. The instructions in this topic concentrate on updating the firmware on the microcontroller from a development tree.")]),e._v(" "),o("p",[e._v("It's important to update to the latest image available since some instructions change between releases. You can check the BIOS and distro version by connecting to the board and running the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("get_aero_version.py\n")])])]),o("p",[e._v("The instructions here are tested with the following version:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('BIOS_VERSION = Aero-01.00.13\nOS_VERSION = Poky Aero (Intel Aero Linux Distro) 1.5.1-dev (pyro)"\nAIRMAP_VERSION = 1.8\nFPGA_VERSION = 0xc1\n')])])]),o("h2",{attrs:{id:"setup-intel-aero-using-ubuntu"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-intel-aero-using-ubuntu"}},[e._v("#")]),e._v(" Setup Intel Aero using Ubuntu")]),e._v(" "),o("p",[e._v("In order to install Ubuntu on Intel Aero, the following equipment is needed:")]),e._v(" "),o("ol",[o("li",[e._v("Power supply (battery or network cable)")]),e._v(" "),o("li",[e._v("Micro HDMI to HDMI cable to attach a monitor")]),e._v(" "),o("li",[e._v("Micro USB3 to USB2 female adapter")]),e._v(" "),o("li",[e._v("USB Hub to attach mouse and keyboard")])]),e._v(" "),o("p",[e._v("Follow the linked instructions from "),o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#installing-ubuntu-on-intel-aero",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Aero wiki > Installing Ubuntu on Intel Aero"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#upgrade-yocto-first",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upgrade Yocto first"),o("OutboundLink")],1),e._v(" (optional)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#os",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-aero-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Aero Repository"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("As soon as the steps under "),o("em",[e._v("Intel Aero Repository")]),e._v(" (above) are completed the Aero kernel is installed. From this point forwards, always boot using this kernel.")]),e._v(" "),o("p",[e._v("Follow the instructions to flash the BIOS, FPGA and Flight Controller. Open the MAVLink router config file: "),o("strong",[e._v("/etc/mavlink-router/main.conf")])]),e._v(" "),o("p",[e._v("Include the laptop IP as a UDP Endpoint by adding the following lines to the configuration file. The IP address must be set to the one of the laptop. To find the IP address of the laptop, execute: "),o("code",[e._v("ifconfig")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("[UdpEndpoint wifi]\nMode = Normal\nAddress = 192.168.8.255\n")])])]),o("p",[e._v("After all those steps are completed, the drone should automatically connect to "),o("em",[e._v("QGroundControl")]),e._v(" running on the laptop.")]),e._v(" "),o("p",[e._v("Next install ROS, by following the "),o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/05-Autonomous-drone-programming-with-ROS",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"realsense-camera"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#realsense-camera"}},[e._v("#")]),e._v(" RealSense Camera")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("RealSense SDK")]),e._v(" "),o("p",[e._v("Follow the steps to install the RealSense SDK listed on the "),o("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-realsense-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("aero wiki"),o("OutboundLink")],1),e._v(". When cloning the repository, the legacy branch needs to be used for the R200 model. If the D435 or D415 is used, the master branch needs to be cloned. All other steps are the same and the branches can be just switched back and forth if the camera is changed.")]),e._v(" "),o("p",[e._v("If the RealSense R200 is used, it can already be started over a ROS node using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" roslaunch realsense_camera r200_nodelet_default.launch\n")])])]),o("p",[e._v("If any D400 series camera is used, follow the next step to install a different ROS wrapper.")])]),e._v(" "),o("li",[o("p",[e._v("ROS Wrapper for D400 series RealSense")]),e._v(" "),o("p",[e._v("Follow the instructions in "),o("a",{attrs:{href:"https://github.com/intel-ros/realsense#step-3-install-intel-realsense-ros-from-sources",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Intel RealSense ROS from Sources"),o("OutboundLink")],1),e._v(" to install a catkin workspace and clone the RealSense software.")]),e._v(" "),o("p",[e._v("Install the udev rules using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/\n sudo udevadm control --reload-rules && udevadm trigger\n")])])]),o("p",[e._v("Now the RealSense can be started over a ROS node using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" roslaunch realsense2_camera rs_camera.launch\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"obstacle-avoidance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#obstacle-avoidance"}},[e._v("#")]),e._v(" Obstacle Avoidance")]),e._v(" "),o("p",[e._v("To run the PX4 obstacle avoidance software, install catkin first:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("apt install python-catkin-tools\n")])])]),o("p",[e._v("Create a catkin workspace and initialize it. Then clone the avoidance repository into the source space, or use a symbolic link to the source space. Build the package and start the ROS node using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("catkin build local_planner\n\nroslaunch local_planner local_planner_aero.launch\n")])])]),o("h2",{attrs:{id:"flashing-px4-software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flashing-px4-software"}},[e._v("#")]),e._v(" Flashing PX4 software")]),e._v(" "),o("p",[e._v("After setting up the PX4 development environment, follow these steps update the PX4 software:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Do a full update of all software on the vehicle (https://github.com/intel-aero/meta-intel-aero/wiki/Upgrade-To-Latest-Software-Release)")])]),e._v(" "),o("li",[o("p",[e._v("Grab the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firmware"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Compile with "),o("code",[e._v("make intel_aerofc-v1_default")])])]),e._v(" "),o("li",[o("p",[e._v("Configure the target hostname")]),e._v(" "),o("p",[e._v("If your system resolves link local names you don't have to do anything and you can skip this step. You can test it by trying to ssh into "),o("code",[e._v("intel-aero.local")]),e._v(" after connecting to it either via WiFi or USB:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" ssh root@intel-aero.local\n")])])]),o("p",[e._v("If it doesn't work you can try giving the IP that will be used by the upload script:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v(" # WiFi IP\n export AERO_HOSTNAME=192.168.8.1\n \n # Ethernet-over-USB IP\n export AERO_HOSTNAME=192.168.7.2\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Upload with: "),o("code",[e._v("make intel_aerofc-v1_default upload")])])])]),e._v(" "),o("h2",{attrs:{id:"connecting-qgroundcontrol-via-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-qgroundcontrol-via-network"}},[e._v("#")]),e._v(" Connecting QGroundControl via Network")]),e._v(" "),o("ol",[o("li",[e._v("Make sure you are connected to the board with WiFi or USB Network")]),e._v(" "),o("li",[e._v("SSH to the board and make sure MAVLink forwarding runs. By default it automatically starts when booting. It can be started manually with: "),o("code",[e._v("systemctl start mavlink-router")])]),e._v(" "),o("li",[e._v("Start "),o("em",[e._v("QGroundControl")]),e._v(" and it should automatically connect.")]),e._v(" "),o("li",[e._v("Instead of starting "),o("em",[e._v("QGroundControl")]),e._v(", you can open a "),o("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[e._v("MAVLink shell")]),e._v(" using the script: "),o("code",[e._v("./Tools/mavlink_shell.py 0.0.0.0:14550")])],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"leddarone"}})]),e._v(" "),o("h2",{attrs:{id:"connecting-leddarone-range-finder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-leddarone-range-finder"}},[e._v("#")]),e._v(" Connecting LeddarOne Range Finder")]),e._v(" "),o("p",[e._v("Connect the "),o("RouterLink",{attrs:{to:"/ko/sensor/leddar_one.html"}},[e._v("LeddarOne")]),e._v(" to the Aero telemetry port. The pinout for the LeddarOne and Aero telemetry port (TELEM1) are as follows.")],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Pin")]),e._v(" "),o("th",[e._v("Aerofc TELEMETRY")]),e._v(" "),o("th",[e._v("LeddarOne")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("VCC")]),e._v(" "),o("td",[e._v("GND")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("TX")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("RX")]),e._v(" "),o("td",[e._v("VCC")])]),e._v(" "),o("tr",[o("td",[e._v("4")]),e._v(" "),o("td",[e._v("SCL")]),e._v(" "),o("td",[e._v("RX")])]),e._v(" "),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[e._v("SDA")]),e._v(" "),o("td",[e._v("TX")])]),e._v(" "),o("tr",[o("td",[e._v("6")]),e._v(" "),o("td",[e._v("GND")]),e._v(" "),o("td",[e._v("-")])])])]),e._v(" "),o("p",[e._v("To enable the rangefinder set the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[e._v("SENS_LEDDAR1_CFG")]),e._v(" parameter to TELEM1 and reboot the board (instructions for setting parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("available here")]),e._v(").")],1),e._v(" "),o("p",[o("span",{attrs:{id:"lidar_lite"}})]),e._v(" "),o("h2",{attrs:{id:"connecting-lidar-lite-range-finder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-lidar-lite-range-finder"}},[e._v("#")]),e._v(" Connecting Lidar Lite Range Finder")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("The Lidar Lite is not recommended for use with "),o("em",[e._v("Intel Aero Ready to Fly Drone")]),e._v("® due to measurements spikes.")])]),e._v(" "),o("p",[e._v("The following instructions are for a "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html#lidar-lite"}},[e._v("Lidar Lite")]),e._v(" V3 connected via I2C. The Intel® Aero Ready to Fly Drone has two ports with I2C: One labled COMPASS and the other TELEMETRY. The pinout for both of them can be found below. We recommend using the TELEMETRY port as it is not being used. If your TELEMETRY port is already occupied, a splitter can be used to share the I2C connection (works on any I2C port). Check the images below for the splitter setup.")],1),e._v(" "),o("p",[e._v("In addition it is recommended to use a electrolytic capacitor for the Lidar Lite I2C connection to reduce spikes in the distance readings (see "),o("a",{attrs:{href:"https://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" on page 3).")]),e._v(" "),o("p",[e._v("The pinout for the Lidar Lite V3 and Aero telemetry port are as follows")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Pin")]),e._v(" "),o("th",[e._v("Aerofc TELEMETRY")]),e._v(" "),o("th",[e._v("Lidar Lite V3")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("VCC")]),e._v(" "),o("td",[e._v("VCC")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("TX")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("RX")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("4")]),e._v(" "),o("td",[e._v("SCL")]),e._v(" "),o("td",[e._v("SCL")])]),e._v(" "),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[e._v("SDA")]),e._v(" "),o("td",[e._v("SDA")])]),e._v(" "),o("tr",[o("td",[e._v("6")]),e._v(" "),o("td",[e._v("GND")]),e._v(" "),o("td",[e._v("GND")])])])]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("pin")]),e._v(" "),o("th",[e._v("Aerofc COMPASS")]),e._v(" "),o("th",[e._v("Lidar Lite V3")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("1")]),e._v(" "),o("td",[e._v("VCC")]),e._v(" "),o("td",[e._v("VCC")])]),e._v(" "),o("tr",[o("td",[e._v("2")]),e._v(" "),o("td",[e._v("SCL")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("3")]),e._v(" "),o("td",[e._v("SDA")]),e._v(" "),o("td",[e._v("-")])]),e._v(" "),o("tr",[o("td",[e._v("4")]),e._v(" "),o("td",[e._v("GND")]),e._v(" "),o("td",[e._v("SCL")])]),e._v(" "),o("tr",[o("td",[e._v("5")]),e._v(" "),o("td",[e._v("-")]),e._v(" "),o("td",[e._v("SDA")])]),e._v(" "),o("tr",[o("td",[e._v("6")]),e._v(" "),o("td",[e._v("-")]),e._v(" "),o("td",[e._v("GND")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(575),alt:"Aero I2C splitter"}})]),e._v(" "),o("p",[o("img",{attrs:{src:a(576),alt:"Aero LidarLite"}})]),e._v(" "),o("h2",{attrs:{id:"using-optical-flow-on-the-aero"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-optical-flow-on-the-aero"}},[e._v("#")]),e._v(" Using Optical Flow on the Aero")]),e._v(" "),o("p",[e._v("The "),o("em",[e._v("Intel Aero Ready to Fly Drone")]),e._v("® comes with a preinstalled optical flow binary on the compute board (Linux OS version 1.6 or higher), which enables it to stably fly based on optical flow velocity estimation. In order to use optical flow, a range sensor has to be installed first (see above).")]),e._v(" "),o("p",[e._v("To use the optical flow, run the following command in a console on the vehicle's compute board:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("systemctl start aero-optical-flow\n")])])]),o("p",[e._v("If you want to start the optical flow binary at boot, use")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("systemctl enable aero-optical-flow #use disable to undo\n")])])]),o("p",[e._v("In addition, the following parameter values should be set in the flight controller.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Parameter")]),e._v(" "),o("th",[e._v("Value")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")])],1),e._v(" "),o("td",[e._v("2")])]),e._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE")])],1),e._v(" "),o("td",[e._v("2")])])])])])}),[],!1,null,null,null);t.default=r.exports},574:function(e,t,a){e.exports=a.p+"assets/img/intel-aero-rtf.21a217f3.jpg"},575:function(e,t,a){e.exports=a.p+"assets/img/aero_i2c_splitter.9c1f17b5.jpg"},576:function(e,t,a){e.exports=a.p+"assets/img/aero_lidarlite.abf0c6cb.jpg"}}]);