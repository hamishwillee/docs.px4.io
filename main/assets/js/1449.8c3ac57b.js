(window.webpackJsonp=window.webpackJsonp||[]).push([[1449],{2639:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-가상-머신-호스팅-도구-모음"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-가상-머신-호스팅-도구-모음"}},[t._v("#")]),t._v(" Windows 가상 머신 호스팅 도구 모음")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("이 개발 환경은 "),o("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[t._v("지원되지 않습니다")]),t._v(". See "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),o("p",[t._v("Windows 개발자는 Linux를 게스트 운영 체제로 사용하는 가상 머신(VM)에서 PX4 툴체인을 실행할 수 있습니다. 가상 머신을 설정한 후, 가상 머신내의 PX4 설치 및 설정은 일반 Linux 환경에서의 설정과 동일합니다.")]),t._v(" "),o("p",[t._v("가상 머신을 사용하는 것은 펌웨어 구축 환경을 설정과 테스트가 매우 편리하지만, 사용자는 다음 사항에 유의하여야 합니다.")]),t._v(" "),o("ol",[o("li",[t._v("펌웨어 빌드는 Linux에서 빌드하는 것보다 조금 느립니다.")]),t._v(" "),o("li",[t._v("The JMAVSim simulation, frame rate be much slower than on native Linux. 경우에 따라서, 가상 머신 리소스 부족과 관련된 문제로 차량이 충돌할 수 있습니다.")]),t._v(" "),o("li",[t._v("Gazebo와 ROS는 설치할 수 있지만, 사용할 수 없을 정도로 느립니다.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("가상 머신에 가능한 한 많은 CPU 코어와 메모리 리소스를 할당합니다.")])]),t._v(" "),o("p",[t._v("시스템에서 PX4 실행을 위한 가상 머신을 설정하는 방법에는 여러 가지가 있습니다. 이 가이드는 VMWare 설정 방법을 설명합니다. There is also an incomplete section for VirtualBox at the end (we'd welcome expansion of this section from a community member).")]),t._v(" "),o("h2",{attrs:{id:"vmware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vmware-setup"}},[t._v("#")]),t._v(" VMWare Setup")]),t._v(" "),o("p",[t._v("VMWare performance is acceptable for basic usage (building Firmware) but not for running ROS or Gazebo Classic.")]),t._v(" "),o("ol",[o("li",[o("p",[o("a",{attrs:{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMWare 플레이어"),o("OutboundLink")],1),t._v("를 다운로드합니다.")])]),t._v(" "),o("li",[o("p",[t._v("윈도우 시스템에 설치합니다.")])]),t._v(" "),o("li",[o("p",[t._v("원하는 버전의 "),o("a",{attrs:{href:"https://www.ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Desktop ISO Image"),o("OutboundLink")],1),t._v("를 다운로드합니다. (권장 Ubuntu 버전은 "),o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[t._v("Linux 지침 페이지")]),t._v(" 참조).")],1)]),t._v(" "),o("li",[o("p",[o("em",[t._v("VMWare 플레이어")]),t._v("를 실행합니다.")])]),t._v(" "),o("li",[o("p",[t._v("가상 머신 설정에서 3D 가속 사용: "),o("strong",[t._v("VM > 설정 > 하드웨어 > 디스플레이 > 3D 그래픽 가속화")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),o("p",[t._v("This option is required to properly run 3D simulation environments like jMAVSim and Gazebo Classic.\n가상 환경에 Linux를 설치하기 전에 이 작업을 수행하는 것이 좋습니다.\n:::")]),t._v(" "),o("ol",[o("li",[t._v("새 가상 머신을 생성하는 메뉴를 선택합니다.")]),t._v(" "),o("li",[t._v("가상 머신 생성 마법사에서 다운로드한 Ubuntu ISO 이미지를 설치 매체로 선택하면, 사용하려는 운영 체제가 자동으로 감지됩니다.")]),t._v(" "),o("li",[t._v("마법사에서 실행 중인 가상 머신에 할당할 리소스를 선택합니다. 가상 머신에 최대한 많은 메모리와 CPU 코어를 할당하십시오.")]),t._v(" "),o("li",[t._v("마법사가 종료시 새 가상 머신을 실행하고, 설정 지침에 따라 Ubuntu를 설치합니다. 모든 설정은 호스트 운영 체제에서 사용하기 위한 것이므로, 네트워크 공격의 위험을 증가시키지 않는 화면 보호기 및 로컬 워크스테이션 보안 기능을 비활성화할 수 있습니다.")]),t._v(" "),o("li",[t._v("새 가상 머신이 부팅되면, 게스트 운영체제에 "),o("em",[t._v("VMWare 도구 드라이버 및 도구 확장")]),t._v("을 설치하여야 합니다. 이렇게 하면 다음과 같은 VM 사용의 성능과 유용성들이 향상됩니다.\n"),o("ul",[o("li",[t._v("크게 향상된 그래픽 성능")]),t._v(" "),o("li",[t._v("Proper support for hardware device usage like USB port allocation (important for target upload), proper mouse wheel scrolling, sound support")]),t._v(" "),o("li",[t._v("창 크기에 따른 게스트 디스플레이 해상도 조정")]),t._v(" "),o("li",[t._v("호스트 시스템 클립보드 공유")]),t._v(" "),o("li",[t._v("호스트 시스템 파일 공유")])])]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux.html"}},[t._v("Linux용 PX4 환경 설정")]),t._v("을 계속 진행합니다.")],1)]),t._v(" "),o("h2",{attrs:{id:"virtualbox-7-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-7-setup"}},[t._v("#")]),t._v(" VirtualBox 7 Setup")]),t._v(" "),o("p",[t._v("The setup for VirtualBox is similar to VMWare. Community members, we'd welcome a step-by-step guide here!")]),t._v(" "),o("h3",{attrs:{id:"usb-passthrough-for-qgroundcontrol-firmware-flashing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usb-passthrough-for-qgroundcontrol-firmware-flashing"}},[t._v("#")]),t._v(" USB passthrough for QGroundControl / Firmware Flashing")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This section has been tested for VirtualBox 7 running Ubuntu 20.04 LTS on a Windows 10 host machine.")])]),t._v(" "),o("p",[t._v("One limitation of virtual machines is that you can't automatically connect to a flight controller attached to the host computer USB port in order to "),o("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#uploading-firmware-flashing-the-board"}},[t._v("build and upload PX4 firmware from a terminal")]),t._v(". You also can't connect to the flight controller from QGroundControl in the virtual machine.")],1),t._v(" "),o("p",[t._v("To allow this, you need to configure USB passthrough settings:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Ensure that the user has been added to the dialout group in the VM using the terminal command:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo usermod -a -G dialout $USER\n")])])]),o("p",[t._v("Then restart Ubuntu in the virtual machine.")])]),t._v(" "),o("li",[o("p",[t._v("Enable serial port(s) in VM: "),o("strong",[t._v("VirtualBox > Settings > Serial Ports 1/2/3/etc...")])])]),t._v(" "),o("li",[o("p",[t._v("Enable USB controller in VM: "),o("strong",[t._v("VirtualBox > Settings > USB")])])]),t._v(" "),o("li",[o("p",[t._v("Add USB filters for the bootloader in VM: "),o("strong",[t._v("VirtualBox > Settings > USB > Add new USB filter")]),t._v(".")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Open the menu and plug in the USB cable connected to your autopilot. Select the "),o("code",[t._v("...Bootloader")]),t._v(" device when it appears in the UI.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")])])])])])]),t._v(" "),o("p",[t._v("The bootloader device only appears for a few seconds after connecting USB.\nIf it disappears before you can select it, disconnect and then reconnect USB.\n:::")]),t._v(" "),o("ul",[o("li",[t._v("Select the "),o("code",[t._v("...Autopilot")]),t._v(" device when it appears (this happens after the bootloader completes).")])]),t._v(" "),o("ol",[o("li",[t._v("Select the device in the VM instance's dropdown menu "),o("strong",[t._v("VirtualBox > Devices > your_device")])])]),t._v(" "),o("p",[t._v("If successful, your device will show up with "),o("code",[t._v("lsusb")]),t._v(" and QGroundControl will connect to the device automatically. You should also be able to build and upload firmware using a command like:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v5_default upload\n")])])]),o("h3",{attrs:{id:"telemetry-over-wifi-for-qgroundcontrol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-over-wifi-for-qgroundcontrol"}},[t._v("#")]),t._v(" Telemetry over WiFi for QGroundControl")]),t._v(" "),o("p",[t._v("If using "),o("em",[t._v("QGroundControl")]),t._v(' within a virtual machine you should set the VM networking settings to  "Bridged Adapter" mode. This gives the guest OS direct access to networking hardware on the host. If you use the Network Address Translation (NAT), which is set by default for VirtualBox 7 running Ubuntu 20.04 LTS, this will block the outbound UDP packets that QGroundControl uses to communicate with the vehicle.')])])}),[],!1,null,null,null);e.default=r.exports}}]);