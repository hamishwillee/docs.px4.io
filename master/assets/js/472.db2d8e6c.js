(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1416:function(e,t,a){"use strict";a.r(t);var n=a(18),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installing-driver-on-ubuntu-for-intel-realsense-r200"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-driver-on-ubuntu-for-intel-realsense-r200"}},[e._v("#")]),e._v(" Installing driver on Ubuntu for Intel RealSense R200")]),e._v(" "),n("p",[e._v("This tutorial aims to give instructions on how to install the camera driver of the Intel RealSense R200 camera head in Linux environment such that the gathered images can be accessed via the Robot Operation System (ROS).\nThe RealSense R200 camera head is depicted below:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(432),alt:"Intel Realsense Camera front view"}})]),e._v(" "),n("p",[e._v("The installation of the driver package is executed on a Ubuntu operation system (OS) that runs as a guest OS in a Virtual Box. The specifications of the host computer where the Virtual Box is running, the Virtual Box  and the guest system are given below:")]),e._v(" "),n("ul",[n("li",[e._v("Host Operation System: Windows 8")]),e._v(" "),n("li",[e._v("Processor: Intel(R) Core(TM) i7-4702MQ CPU @ 2.20GHz")]),e._v(" "),n("li",[e._v("Virtual Box: Oracle VM. Version 5.0.14 r105127")]),e._v(" "),n("li",[e._v("Extensions: Extension package for Virtual Box installed (Needed for USB3 support)")]),e._v(" "),n("li",[e._v("Guest Operation System: Linux - Ubuntu 14.04.3 LTS")])]),e._v(" "),n("p",[e._v("The tutorial is ordered in the following way: In a first part it is shown how to install Ubuntu 14.04 as a guest OS in the Virtual Box. In a second part is shown how to install ROS Indigo and the camera driver. The  ensuing frequently used expressions have the following meaning:")]),e._v(" "),n("ul",[n("li",[e._v("Virtual Box (VB): Program that runs different Virtual Machines. In this case the Oracle VM.")]),e._v(" "),n("li",[e._v("Virtual Machine (VM): The operation system that runs in the Virtual Box as a guest system. In this case Ubuntu.")])]),e._v(" "),n("h2",{attrs:{id:"installing-ubuntu-14-04-3-lts-in-virtual-box"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-ubuntu-14-04-3-lts-in-virtual-box"}},[e._v("#")]),e._v(" Installing Ubuntu 14.04.3 LTS in Virtual Box")]),e._v(" "),n("ul",[n("li",[e._v("Create a new Virtual Machine (VM): Linux 64-Bit.")]),e._v(" "),n("li",[e._v("Download the iso file of Ubuntu 14.04.3 LTS: ("),n("a",{attrs:{href:"http://www.ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu-14.04.3-desktop-amd64.iso"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("li",[e._v("Installation of Ubuntu:\n"),n("ul",[n("li",[e._v("During the installation procedure leave the following two options unchecked:\n"),n("ul",[n("li",[e._v("Download updates while installing")]),e._v(" "),n("li",[e._v("Install this third party software")])])])])]),e._v(" "),n("li",[e._v("After the installation you might need to enable the Virtual Box to display Ubuntu on the whole desktop:\n"),n("ul",[n("li",[e._v("Start VM Ubuntu and login, Click on "),n("strong",[e._v("Devices->Insert Guest Additions CD image")]),e._v(" in the menu bar of the Virtual Box.")]),e._v(" "),n("li",[e._v("Click on "),n("strong",[e._v("Run")]),e._v(" and enter password on the windows that pop up in Ubuntu.")]),e._v(" "),n("li",[e._v("Wait until the installation is completed and then restart. Now, it should be possible to display the VM on the whole desktop.")]),e._v(" "),n("li",[e._v("If a window pops up in Ubuntu that asks whether to update, reject to update at this point.")])])]),e._v(" "),n("li",[e._v("Enable USB 3 Controller in Virtual Box:\n"),n("ul",[n("li",[e._v("Shut down Virtual Machine.")]),e._v(" "),n("li",[e._v('Go to the settings of the Virtual Machine to the menu selection USB and choose: "USB 3.0(xHCI)". \t\tThis is only possible if you have installed the extension package for the Virtual Box.')]),e._v(" "),n("li",[e._v("Start the Virtual Machine again.")])])])]),e._v(" "),n("h2",{attrs:{id:"installing-ros-indigo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-ros-indigo"}},[e._v("#")]),e._v(" Installing ROS Indigo")]),e._v(" "),n("ul",[n("li",[e._v("Follow instructions given at "),n("a",{attrs:{href:"http://wiki.ros.org/indigo/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS indigo installation guide"),n("OutboundLink")],1),e._v(":\n"),n("ul",[n("li",[e._v("Install Desktop-Full version.")]),e._v(" "),n("li",[e._v('Execute steps described in the sections "Initialize rosdep" and "Environment setup".')])])])]),e._v(" "),n("h2",{attrs:{id:"installing-camera-driver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-camera-driver"}},[e._v("#")]),e._v(" Installing camera driver")]),e._v(" "),n("ul",[n("li",[e._v("Install git:")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v("\n")])])]),n("ul",[n("li",[n("p",[e._v("Download and install the driver")]),e._v(" "),n("ul",[n("li",[e._v("Clone "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealSense_ROS repository"),n("OutboundLink")],1),e._v(":"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/bestmodule/RealSense_ROS.git\n")])])])])])]),e._v(" "),n("li",[n("p",[e._v("Follow instructions given in "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/tree/master/r200_install",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("ul",[n("li",[e._v("Press the enter button when the questions whether to install the following installation packages show up:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Intel Low Power Subsystem support in ACPI mode (MFD_INTEL_LPSS_ACPI) [N/m/y/?] (NEW)\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Intel Low Power Subsystem support in PCI mode (MFD_INTEL_LPSS_PCI) [N/m/y/?] (NEW)\n\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Dell Airplane Mode Switch driver (DELL_RBTN) [N/m/y/?] (NEW)\n")])])])]),e._v(" "),n("li",[e._v("The following error message that can appear at the end of the installation process should not lead to a malfunction of the driver:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rmmod: ERROR: Module uvcvideo is not currently loaded\n")])])])])])]),e._v(" "),n("li",[n("p",[e._v("After the installation has completed, reboot the Virtual Machine.")])]),e._v(" "),n("li",[n("p",[e._v("Test camera driver:")]),e._v(" "),n("ul",[n("li",[e._v("Connect the Intel RealSense camera head with the computer with a USB3 cable that is plugged into a USB3 receptacle on the computer.")]),e._v(" "),n("li",[e._v("Click on Devices->USB-> Intel Corp Intel RealSense 3D Camera R200 in the menu bar of the Virtual Box, in order to forward the camera USB connection to the Virtual Machine.")]),e._v(" "),n("li",[e._v("Execute the file [unpacked folder]/Bin/DSReadCameraInfo:\n"),n("ul",[n("li",[e._v("If the following error message appears, unplug the camera (physically unplug USB cable from the computer). Plug it in again + Click on Devices->USB-> Intel Corp Intel RealSense 3D Camera R200 in the menu bar of the Virtual Box again and execute again the file [unpacked folder]/Bin/DSReadCameraInfo."),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("DSAPI call failed at ReadCameraInfo.cpp:134!\n")])])])]),e._v(" "),n("li",[e._v("If the camera driver works and recognises the Intel RealSense R200, you should see specific information about the Intel RealSense R200 camera head.")])])])])]),e._v(" "),n("li",[n("p",[e._v("Installation and testing of the ROS nodlet:")]),e._v(" "),n("ul",[n("li",[e._v('Follow the installation instructions in the "Installation" section given '),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(", to install the ROS nodlet.")]),e._v(" "),n("li",[e._v('Follow the instructions in the "Running the R200 nodelet" section given '),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(", to test the ROS nodlet together with the Intel RealSense R200 camera head.\n"),n("ul",[n("li",[e._v("If everything works, the different data streams from the Intel RealSense R200 camera are published as ROS topics.")])])])])])])])}),[],!1,null,null,null);t.default=i.exports},432:function(e,t,a){e.exports=a.p+"assets/img/intel_realsense.6e908069.png"}}]);