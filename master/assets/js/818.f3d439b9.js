(window.webpackJsonp=window.webpackJsonp||[]).push([[818],{1647:function(e,t,a){"use strict";a.r(t);var s=a(18),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installing-software-on-the-snapdragon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-software-on-the-snapdragon"}},[e._v("#")]),e._v(" Installing Software on the Snapdragon")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version).\nThis documentation is provided for existing users, but will be removed in a future release.")])]),e._v(" "),a("p",[e._v("To get the platform running with the complete VIO system running, multiple pieces are required.\nThe following is an overview of the different versions used. Detailed installation instructions are provided below.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Software")]),e._v(" "),a("th",[e._v("Tested version")]),e._v(" "),a("th",[e._v("Link/commit ID")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("ROS")]),e._v(" "),a("td",[e._v("indigo")]),e._v(" "),a("td",[a("a",{attrs:{href:"http://wiki.ros.org/indigo",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("MAVROS")]),e._v(" "),a("td",[e._v("0.23.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/0.23.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("MAVLink")]),e._v(" "),a("td",[e._v("release/kinetic/mavlink/2018.5.5-0")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/mavlink/mavlink-gbp-release/tree/upstream/2018.5.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("PX4")]),e._v(" "),a("td",[e._v("master")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Snap VIO")]),e._v(" "),a("td",[e._v("master")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/PX4/ros-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Snapdragon-Linux")]),e._v(" "),a("td",[e._v("3.1.3.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("DSP Firmware")]),e._v(" "),a("td",[e._v("3.1.3.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("tr",[a("td",[e._v("Qualcomm MV")]),e._v(" "),a("td",[e._v("1.0.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://developer.qualcomm.com/sdflight-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])])]),e._v(" "),a("h2",{attrs:{id:"prevent-bricking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prevent-bricking"}},[e._v("#")]),e._v(" Prevent Bricking")]),e._v(" "),a("p",[e._v("To prevent the system from hanging on boot because of anything wrong with the ADSP firmware, do the following changes before going any further.\nPlug your snapdragon into your computer via USB and open the android debug shell:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("adb shell\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Note that the Snapdragon Flight needs to be powered by an external power source.\nThe power over USB is not sufficient.\nAs always, take your props off before you apply power!")])]),e._v(" "),a("p",[e._v("Edit the file "),a("strong",[e._v("/usr/local/qr-linux/q6-admin.sh")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vim /usr/local/qr-linux/q6-admin.sh\n")])])]),a("p",[e._v("Comment out the following lines:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# Wait for adsp.mdt to show up\n\t#while [ ! -s /lib/firmware/adsp.mdt ]; do\n\t#  sleep 0.1\n\t#done\n")])])]),a("p",[e._v("Finally:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# Don\'t leave until ADSP is up\n\t#while [ "`cat /sys/kernel/debug/msm_subsys/adsp`" != "2" ]; do\n\t#  sleep 0.1\n\t#done\n')])])]),a("h2",{attrs:{id:"update-linux-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-linux-image"}},[e._v("#")]),e._v(" Update Linux Image")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Updating the Linux image on your Snapdragon will erase everything.")])]),e._v(" "),a("p",[e._v("Get the latest "),a("code",[e._v("Flight_x.x_JFlash.zip")]),e._v(" from "),a("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and unzip it.\nIn the unzipped folder is a script that has to be used to update the Linux image.\nPower your Snapdragon Flight, connect it using a micro USB cable and run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo ./jflash.sh\n")])])]),a("h2",{attrs:{id:"update-dsp-processor-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-dsp-processor-firmware"}},[e._v("#")]),e._v(" Update DSP Processor Firmware")]),e._v(" "),a("p",[e._v("Get the latest "),a("strong",[e._v("Flight_x.x_qcom_flight_controller_hexagon_sdk_add_on.zip")]),e._v(" from "),a("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" and unzip it.")]),e._v(" "),a("p",[e._v("In the unzipped folder, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./installfcaddon.sh\nadb shell\nsudo reboot\n")])])]),a("h2",{attrs:{id:"clone-px4-firmware-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone-px4-firmware-build"}},[e._v("#")]),e._v(" Clone PX4 Firmware & Build")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If you use the "),a("a",{attrs:{href:"http://shop.intrinsyc.com/products/qualcomm-electronic-speed-control-board",target:"_blank",rel:"noopener noreferrer"}},[e._v("Qualcomm ESC board"),a("OutboundLink")],1),e._v(" (UART-based), then please follow their instructions "),a("a",{attrs:{href:"https://github.com/ATLFlight/ATLFlightDocs/blob/master/PX4.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\nIf you use normal PWM-based ESCs boards, then you may continue to follow the instructions on this page.")])]),e._v(" "),a("p",[e._v("On your PC, clone the PX4 firmware repo.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd ~\nmkdir src\ncd src\ngit clone git@github.com:PX4/PX4-Autopilot.git\ncd PX4-Autopilot\ngit submodule update --init --recursive\n")])])]),a("p",[e._v("Then build the targets for the Linux and the DSP side.\nBoth executables communicate via "),a("RouterLink",{attrs:{to:"/en/middleware/uorb.html"}},[e._v("UORB")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FC_ADDON")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("location-of-extracted-flight-controller-addon"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" atlflight_eagle_default\n")])])]),a("p",[e._v("To load the SW on the device, connect via USB cable and make sure the device is booted.\nRun this in a new terminal window:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("adb shell\n")])])]),a("p",[e._v("Go back to previous terminal and upload:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" atlflight_eagle_default upload\n")])])]),a("p",[e._v("Note that this will also copy (and overwrite) the two config files "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/posix-configs/eagle/flight/mainapp.config",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainapp.config"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/posix-configs/eagle/flight/px4.config",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4.config"),a("OutboundLink")],1),e._v(" to the device.\nThose files are stored under /usr/share/data/adsp/px4.config and /home/linaro/mainapp.config respectively if you want to edit the startup scripts directly on your vehicle.")]),e._v(" "),a("p",[e._v("The mixer currently needs to be copied manually:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("adb push ROMFS/px4fmu_common/mixers/quad_x.main.mix  /usr/share/data/adsp\n")])])]),a("h2",{attrs:{id:"start-px4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-px4"}},[e._v("#")]),e._v(" Start PX4")]),e._v(" "),a("p",[e._v("Run the DSP debug monitor:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${HEXAGON_SDK_ROOT}")]),e._v("/tools/debug/mini-dm/Linux_Debug/mini-dm\n")])])]),a("p",[e._v("Note: alternatively, especially on Mac, you can also use "),a("a",{attrs:{href:"https://github.com/kevinmehall/nano-dm",target:"_blank",rel:"noopener noreferrer"}},[e._v("nano-dm"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Go back to ADB shell and run PX4:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /home/linaro\n./px4 -s mainapp.config\n")])])]),a("p",[e._v("Note that the PX4 will stop as soon as you disconnect the USB cable (or if you ssh session is disconnected).\nTo fly, you should make the PX4 auto-start after boot.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Information for "),a("strong",[e._v("autostarting PX4")]),e._v(" can be found in: "),a("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight_configuration.html#autostart-px4-and-snap-vio"}},[e._v("Configure Snapdragon > Autostart PX4 and Snap VIO")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"install-ros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-ros"}},[e._v("#")]),e._v(" Install ROS")]),e._v(" "),a("p",[e._v("Set up your Snapdragon Flight to connect to your local Wi-Fi network so you can easily clone git repositories directly onto it.\nTo do so, open an "),a("em",[e._v("adb")]),e._v(" shell and edit the file "),a("code",[e._v("/etc/wpa_supplicant/wpa_supplicant.conf")]),e._v(" and add your local network settings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("adb shell\nvim /etc/wpa_supplicant/wpa_supplicant.conf\n")])])]),a("p",[e._v("There, add your Wi-Fi settings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('network={\n\t    ssid="my existing network ssid"\n\t    psk="my existing password"\n\t}\n')])])]),a("p",[e._v("Finally, set the system to station mode.\nAlso, editing the station network interface config file will keep your ssh terminal from lagging: (all inside adb shell)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/local/qr-linux/wificonfig.sh -s station\necho 'wireless-power off' |sudo tee -a /etc/network/interfaces.d/.qca6234.cfg.station\nsudo reboot\n")])])]),a("p",[e._v("Now, to install ROS, start by setting your locale, "),a("strong",[e._v("sources.list")]),e._v(" and keys (in "),a("em",[e._v("adb")]),e._v(" or ssh shell)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('export LANGUAGE=en_US.UTF-8\nexport LANG=en_US.UTF-8\nsudo  locale-gen en_US.UTF-8\nsudo dpkg-reconfigure locales\nsudo update-locale LANG=C LANGUAGE=C LC_ALL=C LC_MESSAGES=POSIX\nsudo sh -c \'echo "deb http://packages.ros.org/ros/ubuntu trusty main" > /etc/apt/sources.list.d/ros-latest.list\'\nsudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 421C365BD9FF1F717815A3895523BAEEB01FA116\nsudo apt-get update\nsudo apt-get install ros-indigo-ros-base #(yields error)\nsudo apt-get -f -o Dpkg::Options::="--force-overwrite" install\n')])])]),a("p",[e._v("Edit your "),a("code",[e._v("~/.bashrc")]),e._v(" to source the ros environment:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('sudo chown -R linaro /home/linaro\necho "source /opt/ros/indigo/setup.bash" >> /home/linaro/.bashrc\nsource .bashrc\n')])])]),a("h2",{attrs:{id:"install-some-extra-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-some-extra-packages"}},[e._v("#")]),e._v(" Install some Extra Packages")]),e._v(" "),a("p",[e._v("Before you can use ROS, you will need to initialize rosdep.\nRosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo rosdep init\nrosdep update\n")])])]),a("p",[e._v("After installing ROS, the OpenCL library gets installed by ROS as well which causes a conflict with camera pipeline.\nTo fix this, do the following:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dpkg -r libhwloc-plugins\nsudo dpkg -r ocl-icd-libopencl1:armhf\n")])])]),a("p",[e._v("Now, set up your workspace:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("source .bashrc\nmkdir -p /home/linaro/ros_ws/src\ncd ros_ws/src\ncatkin_init_workspace\ncd ..\n")])])]),a("h2",{attrs:{id:"create-a-swap-directory-on-the-snapdragon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-swap-directory-on-the-snapdragon"}},[e._v("#")]),e._v(" Create a Swap Directory on the Snapdragon")]),e._v(" "),a("p",[e._v("In order not to run out of memory during compilation of MAVROS, you need to create a swap file:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo fallocate -l 1G /mnt/1GB.swap\nsudo mkswap /mnt/1GB.swap\nsudo swapon /mnt/1GB.swap\necho '/mnt/1GB.swap  none  swap  sw 0  0' |sudo tee -a /etc/fstab\n")])])]),a("h2",{attrs:{id:"install-mavros-mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-mavros-mavlink"}},[e._v("#")]),e._v(" Install MAVROS & MAVLink")]),e._v(" "),a("p",[e._v("In order to get MAVROS and MAVLink running, you need to install some Python tools and then clone the code and check out the proper commits for compatibility.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get install python-pip\nsudo apt-get install python-rosinstall\nsudo apt-get update\nsudo apt-get install python-rosinstall-generator\nsudo apt-get install python-catkin-tools\nrosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\nrosinstall_generator --rosdistro kinetic --upstream mavros | tee -a /tmp/mavros.rosinstall\nwstool init src\nwstool merge -t src /tmp/mavros.rosinstall\nwstool update -t src -j4\nrosdep update\nsudo rosdep install --rosdistro indigo --from-paths src --ignore-src -y\ncd src/mavros\ngit checkout 0.23.1\ncd ../mavlink\ngit checkout release/kinetic/mavlink/2018.5.5-0\ncd ../..\ncatkin build\necho 'source /home/linaro/ros_ws/devel/setup.bash' >> /home/linaro/.bashrc\nsource ../bashrc\n")])])]),a("p",[a("code",[e._v("catkin build")]),e._v(" is necessary because it creates the "),a("code",[e._v("/home/linaro/ros_ws/devel")]),e._v(' directory.\nThis is where the generated libraries and the executables will be generated.\nIt also generates a new bash setup script which includes the appropriate environment variables for using the "ros_ws" workspace.')]),e._v(" "),a("h3",{attrs:{id:"install-geographiclib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-geographiclib"}},[e._v("#")]),e._v(" Install geographiclib")]),e._v(" "),a("p",[e._v("MAVROS requires geographiclib to be installed on the system. Follow these steps to install it on the Snapdragon:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -p /usr/share/geographiclib\n/home/linaro/ros_ws/src/mavros/mavros/scripts/install_geographiclib_datasets.sh\nmkdir /usr/share/geographiclib/GeographicLib\ncd /usr/share/geographiclib\nmv geoids/ GeographicLib/\n")])])]),a("h2",{attrs:{id:"install-snap-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-snap-vio"}},[e._v("#")]),e._v(" Install Snap VIO")]),e._v(" "),a("p",[e._v("First, download (to your PC) version 1.0.2 "),a("em",[e._v("Snapdragon Machine Vision SDK")]),e._v(" from "),a("a",{attrs:{href:"https://developer.qualcomm.com/sdflight-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\nThe package name will be: "),a("strong",[e._v("mv<version>.deb")]),e._v(".")]),e._v(" "),a("p",[e._v("Push the deb package to the snapdragon and install it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("adb push mv<version>.deb /home/linaro\nadb shell sync\nadb shell\ndpkg -i /home/linaro/mv<version>.deb\nmkdir /opt/qcom-licenses\n")])])]),a("p",[e._v("The "),a("em",[e._v("Machine Vision SDK")]),e._v(" will need a license file to run. Obtain a research and development license file from "),a("a",{attrs:{href:"https://developer.qualcomm.com/sdflight-key-req",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".\nThe license file needs to be placed in the following folder on target: "),a("strong",[e._v("/opt/qcom-licenses/")]),e._v(".")]),e._v(" "),a("p",[e._v("Push the license file to the target using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("adb push snapdragon-flight-license.bin /opt/qcom-licenses/\nadb shell sync\n")])])]),a("p",[e._v("Now, we are ready to clone the snap vislam node:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("adb shell\ncd ~/ros_ws/src\ngit clone https://github.com/PX4/ros-examples\ncatkin build\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);