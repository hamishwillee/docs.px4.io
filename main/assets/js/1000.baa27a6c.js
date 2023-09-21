(window.webpackJsonp=window.webpackJsonp||[]).push([[1e3],{1914:function(e,t,o){"use strict";o.r(t);var a=o(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"windows-virtual-machine-hosted-toolchain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-virtual-machine-hosted-toolchain"}},[e._v("#")]),e._v(" Windows Virtual Machine-Hosted Toolchain")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This development environment is "),o("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[e._v("not supported")]),e._v(".\nSee "),o("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("Toolchain Installation")]),e._v(" for information about the environments and tools we do support!")],1)]),e._v(" "),o("p",[e._v("Windows developers can run the PX4 toolchain in a virtual machine (VM) with Linux as the guest operating system.\nAfter setting up the virtual machine, the installation and setup of PX4 within the VM is exactly the same as on a native Linux computer.")]),e._v(" "),o("p",[e._v("While using a VM is a very easy way to set up and test an environment for building firmware, users should be aware:")]),e._v(" "),o("ol",[o("li",[e._v("Firmware building will be slower than native building on Linux.")]),e._v(" "),o("li",[e._v("The JMAVSim simulation, frame rate be much slower than on native Linux.\nIn some cases the vehicle may crash due to issues related to insufficient VM resources.")]),e._v(" "),o("li",[e._v("Gazebo and ROS can be installed, but are unusably slow.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Allocate as many CPU cores and memory resources to the VM as possible.")])]),e._v(" "),o("p",[e._v("There are multiple ways to setup a VM which is capable of executing the PX4 environment on your system.\nThis guide walks you through a VMWare setup.\nThere is also an incomplete section for VirtualBox at the end (we'd welcome expansion of this section from a community member).")]),e._v(" "),o("h2",{attrs:{id:"vmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vmware-setup"}},[e._v("#")]),e._v(" VMWare Setup")]),e._v(" "),o("p",[e._v("VMWare performance is acceptable for basic usage (building Firmware) but not for running ROS or Gazebo Classic.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Download "),o("a",{attrs:{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMWare Player Freeware"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[e._v("Install it on your Windows system")])]),e._v(" "),o("li",[o("p",[e._v("Download the desired version of "),o("a",{attrs:{href:"https://www.ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu Desktop ISO Image"),o("OutboundLink")],1),e._v(".\n(see "),o("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux.html"}},[e._v("Linux Instructions Page")]),e._v(" for recommended Ubuntu version).")],1)]),e._v(" "),o("li",[o("p",[e._v("Open "),o("em",[e._v("VMWare Player")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Enable 3D acceleration in the VM's settings: "),o("strong",[e._v("VM > Settings > Hardware > Display > Accelerate 3D graphics")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This option is required to properly run 3D simulation environments like jMAVSim and Gazebo Classic.\nWe recommend this is done before installing Linux in the virtual environment.")])])]),e._v(" "),o("li",[o("p",[e._v("Select the option to create a new virtual machine.")])]),e._v(" "),o("li",[o("p",[e._v("In the VM creation wizard choose the downloaded Ubuntu ISO image as your installation medium and will automatically detect the operating system you want to use.")])]),e._v(" "),o("li",[o("p",[e._v("Also in the wizard, select the resources you want to allocate to your virtual machine while it is running.\nAllocate as much memory and as many CPU cores as you can without rendering your host Windows system unusable.")])]),e._v(" "),o("li",[o("p",[e._v("Run your new VM at the end of the wizard and let it install Ubuntu following the setup instructions.\nRemember all settings are only for within your host operating system usage and hence you can disable any screen saver and local workstation security features which do not increase risk of a network attack.")])]),e._v(" "),o("li",[o("p",[e._v("Once the new VM is booted up make sure you install "),o("em",[e._v("VMWare tools drivers and tools extension")]),e._v(" inside your guest system.\nThis will enhance performance and usability of your VM usage:")]),e._v(" "),o("ul",[o("li",[e._v("Significantly enhanced graphics performance")]),e._v(" "),o("li",[e._v("Proper support for hardware device usage like USB port allocation (important for target upload), proper mouse wheel scrolling, sound support")]),e._v(" "),o("li",[e._v("Guest display resolution adaption to the window size")]),e._v(" "),o("li",[e._v("Clipboard sharing to host system")]),e._v(" "),o("li",[e._v("File sharing to host system")])])]),e._v(" "),o("li",[o("p",[e._v("Continue with "),o("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux.html"}},[e._v("PX4 environment setup for Linux")])],1)])]),e._v(" "),o("h2",{attrs:{id:"virtualbox-7-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-7-setup"}},[e._v("#")]),e._v(" VirtualBox 7 Setup")]),e._v(" "),o("p",[e._v("The setup for VirtualBox is similar to VMWare.\nCommunity members, we'd welcome a step-by-step guide here!")]),e._v(" "),o("h3",{attrs:{id:"usb-passthrough-for-qgroundcontrol-firmware-flashing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usb-passthrough-for-qgroundcontrol-firmware-flashing"}},[e._v("#")]),e._v(" USB passthrough for QGroundControl / Firmware Flashing")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("This section has been tested for VirtualBox 7 running Ubuntu 20.04 LTS on a Windows 10 host machine.")])]),e._v(" "),o("p",[e._v("One limitation of virtual machines is that you can't automatically connect to a flight controller attached to the host computer USB port in order to "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#uploading-firmware-flashing-the-board"}},[e._v("build and upload PX4 firmware from a terminal")]),e._v(".\nYou also can't connect to the flight controller from QGroundControl in the virtual machine.")],1),e._v(" "),o("p",[e._v("To allow this, you need to configure USB passthrough settings:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Ensure that the user has been added to the dialout group in the VM using the terminal command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo usermod -a -G dialout $USER\n")])])]),o("p",[e._v("Then restart Ubuntu in the virtual machine.")])]),e._v(" "),o("li",[o("p",[e._v("Enable serial port(s) in VM: "),o("strong",[e._v("VirtualBox > Settings > Serial Ports 1/2/3/etc...")])])]),e._v(" "),o("li",[o("p",[e._v("Enable USB controller in VM: "),o("strong",[e._v("VirtualBox > Settings > USB")])])]),e._v(" "),o("li",[o("p",[e._v("Add USB filters for the bootloader in VM: "),o("strong",[e._v("VirtualBox > Settings > USB > Add new USB filter")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Open the menu and plug in the USB cable connected to your autopilot.\nSelect the "),o("code",[e._v("...Bootloader")]),e._v(" device when it appears in the UI.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The bootloader device only appears for a few seconds after connecting USB.\nIf it disappears before you can select it, disconnect and then reconnect USB.")])])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("code",[e._v("...Autopilot")]),e._v(" device when it appears (this happens after the bootloader completes).")])])])]),e._v(" "),o("li",[o("p",[e._v("Select the device in the VM instance's dropdown menu "),o("strong",[e._v("VirtualBox > Devices > your_device")])])])]),e._v(" "),o("p",[e._v("If successful, your device will show up with "),o("code",[e._v("lsusb")]),e._v(" and QGroundControl will connect to the device automatically.\nYou should also be able to build and upload firmware using a command like:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make px4_fmu-v5_default upload\n")])])]),o("h3",{attrs:{id:"telemetry-over-wifi-for-qgroundcontrol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-over-wifi-for-qgroundcontrol"}},[e._v("#")]),e._v(" Telemetry over WiFi for QGroundControl")]),e._v(" "),o("p",[e._v("If using "),o("em",[e._v("QGroundControl")]),e._v(' within a virtual machine you should set the VM networking settings to  "Bridged Adapter" mode.\nThis gives the guest OS direct access to networking hardware on the host.\nIf you use the Network Address Translation (NAT), which is set by default for VirtualBox 7 running Ubuntu 20.04 LTS, this will block the outbound UDP packets that QGroundControl uses to communicate with the vehicle.')])])}),[],!1,null,null,null);t.default=n.exports}}]);