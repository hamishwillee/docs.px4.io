(window.webpackJsonp=window.webpackJsonp||[]).push([[796],{1574:function(e,t,n){"use strict";n.r(t);var o=n(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"windows-virtual-machine-hosted-toolchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-virtual-machine-hosted-toolchain"}},[e._v("#")]),e._v(" Windows Virtual Machine-Hosted Toolchain")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("This development environment is "),n("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[e._v("not supported")]),e._v(".\nSee "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("Toolchain Installation")]),e._v(" for information about the environments and tools we do support!")],1)]),e._v(" "),n("p",[e._v("Windows developers can run the PX4 toolchain in a virtual machine (VM) with Linux as the guest operating system. After setting up the virtual machine, the installation and setup of PX4 within the VM is exactly the same as on a native Linux computer.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Allocate as many CPU cores and memory resources to the VM as possible.")])]),e._v(" "),n("p",[e._v("While using a VM is a very easy way to set up and test an environment for building firmware, users should be aware:")]),e._v(" "),n("ol",[n("li",[e._v("Firmware building will be slower than native building on Linux.")]),e._v(" "),n("li",[e._v("The JMAVSim frame rate be much slower than on native Linux. In some cases the vehicle may crash due to issues related to insufficient VM resources.")]),e._v(" "),n("li",[e._v("Gazebo and ROS can be installed, but are unusably slow.")])]),e._v(" "),n("h2",{attrs:{id:"instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),n("p",[e._v("There are multiple ways to setup a VM which is capable of executing the PX4 environment on your system.\nThis guide walks you through a VMWare setup.\nVMWare performance is acceptable for basic usage (building Firmware) but not for running ROS or Gazebo.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Download "),n("a",{attrs:{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMWare Player Freeware"),n("OutboundLink")],1)])]),e._v(" "),n("li",[n("p",[e._v("Install it on your Windows system")])]),e._v(" "),n("li",[n("p",[e._v("Download the desired version of "),n("a",{attrs:{href:"https://www.ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu Desktop ISO Image"),n("OutboundLink")],1),e._v(".\n(see "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux.html"}},[e._v("Linux Instructions Page")]),e._v(" for recommended Ubuntu version).")],1)]),e._v(" "),n("li",[n("p",[e._v("Open "),n("em",[e._v("VMWare Player")]),e._v(".")])]),e._v(" "),n("li",[n("p",[e._v("Enable 3D acceleration in the VM's settings: "),n("strong",[e._v("VM > Settings > Hardware > Display > Accelerate 3D graphics")])]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("This option is required to properly run 3D simulation environments like jMAVSim and Gazebo.\nWe recommend this is done before installing Linux in the virtual environment.")])])]),e._v(" "),n("li",[n("p",[e._v("Select the option to create a new virtual machine.")])]),e._v(" "),n("li",[n("p",[e._v("In the VM creation wizard choose the downloaded Ubuntu ISO image as your installation medium and will automatically detect the operating system you want to use.")])]),e._v(" "),n("li",[n("p",[e._v("Also in the wizard, select the resources you want to allocate to your virtual machine while it is running. Allocate as much memory and as many CPU cores as you can without rendering your host Windows system unusable.")])]),e._v(" "),n("li",[n("p",[e._v("Run your new VM at the end of the wizard and let it install Ubuntu following the setup instructions. Remember all settings are only for within your host operating system usage and hence you can disable any screen saver and local workstation security features which do not increase risk of a network attack.")])]),e._v(" "),n("li",[n("p",[e._v("Once the new VM is booted up make sure you install "),n("em",[e._v("VMWare tools drivers and tools extension")]),e._v(" inside your guest system. This will enhance performance and usability of your VM usage:")]),e._v(" "),n("ul",[n("li",[e._v("Significantly enhanced graphics performance")]),e._v(" "),n("li",[e._v("Proper support for hardware device usage like USB port allocation (important for target upload), proper mouse wheel scrolling, sound suppport")]),e._v(" "),n("li",[e._v("Guest display resolution adaption to the window size")]),e._v(" "),n("li",[e._v("Clipboard sharing to host system")]),e._v(" "),n("li",[e._v("File sharing to host system")])])]),e._v(" "),n("li",[n("p",[e._v("Continue with "),n("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux.html"}},[e._v("PX4 environment setup for Linux")])],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);