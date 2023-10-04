(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{3225:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"铱星-rockblock卫星通讯系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#铱星-rockblock卫星通讯系统"}},[e._v("#")]),e._v(" 铱星/RockBlock卫星通讯系统")]),e._v(" "),r("p",[e._v("卫星通信系统可在地面站和车辆之间提供远距离、高延迟的连接。")]),e._v(" "),r("p",[e._v("本专题介绍如何建立一个使用RockBlock作为运营商的铱星短报文（Short Burst Data，SBD）卫星通信系统。 在信号质量良好的情况下，用户端延迟在10至15秒左右。")]),e._v(" "),r("h2",{attrs:{id:"综述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[e._v("#")]),e._v(" 综述")]),e._v(" "),r("p",[e._v("卫星通信链接需要以下组成部件：")]),e._v(" "),r("ul",[r("li",[e._v("A "),r("a",{attrs:{href:"https://www.iridium.com/products/rock-seven-rockblock-9603/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock 9603 Iridium Satellite Modem"),r("OutboundLink")],1),e._v(" module connected to a Pixhawk flashed with the PX4 Autopilot.")]),e._v(" "),r("li",[e._v("运行 Ubuntu 系统的消息中继服务器。")]),e._v(" "),r("li",[e._v("A ground station computer running "),r("em",[e._v("QGroundControl")]),e._v(" on Ubuntu Linux")])]),e._v(" "),r("p",[e._v("完整的系统架构如下：")]),e._v(" "),r("p",[r("img",{attrs:{src:a(492),alt:"Architecture"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("The setup was tested with the current release of "),r("em",[e._v("QGroundControl")]),e._v(" running on Ubuntu 14.04 and 16.04.")]),e._v(" "),r("ul",[r("li",[e._v("It may be possible to run the system on other ground stations and operating systems, but this has not been tested (and is not guaranteed to work).")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://www.groundcontrol.com/us/product/rockblock-9602-satellite-modem/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock MK2"),r("OutboundLink")],1),e._v(" module can also be used. The RockBlock 9603 module is recommended because it is smaller and lighter, while providing the same functionality.")])])]),e._v(" "),r("h2",{attrs:{id:"costs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#costs"}},[e._v("#")]),e._v(" Costs")]),e._v(" "),r("p",[e._v("The UK link running cost consists of a line rental and per message cost:")]),e._v(" "),r("ul",[r("li",[e._v("Each module needs to be activated which costs £10.00 per month")]),e._v(" "),r("li",[e._v("Each message transmitted over the system costs one "),r("em",[e._v("credit")]),e._v(" per 50 bytes. Bundles of credits can be bought from RockBlock for £0.04-£0.11 per credit, depending on the bundle size.")])]),e._v(" "),r("p",[e._v("Refer to the "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock Documentation"),r("OutboundLink")],1),e._v(" for a detailed explanation of the modules, running costs and "),r("em",[e._v("RockBlock")]),e._v(" in general.")]),e._v(" "),r("h2",{attrs:{id:"vehicle-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-setup"}},[e._v("#")]),e._v(" Vehicle Setup")]),e._v(" "),r("h3",{attrs:{id:"布线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#布线"}},[e._v("#")]),e._v(" 布线")]),e._v(" "),r("p",[e._v("Connect the RockBlock module to a serial port of the Pixhawk. Due to the power requirements of the module it can only be powered over a high-power serial port as a maximum of 0.5 A at 5 V are required. If none is available/free then another power source which has the same ground level as the Pixhawk and can provide required power has to be setup. The details of the "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/connectors",target:"_blank",rel:"noopener noreferrer"}},[e._v("connectors"),r("OutboundLink")],1),e._v(" and the "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/power-supply",target:"_blank",rel:"noopener noreferrer"}},[e._v("power requirements"),r("OutboundLink")],1),e._v(" can be found in the RockBlock documentation.")]),e._v(" "),r("h3",{attrs:{id:"module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" Module")]),e._v(" "),r("p",[e._v("The module can either use the internal antenna or an external one connected to the SMA connector. To "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/switching-rockblock-9603-antenna-mode",target:"_blank",rel:"noopener noreferrer"}},[e._v("switch between the two antennas modes"),r("OutboundLink")],1),e._v(" the position of a small RF link cable needs to changed. If an external antenna is used always make sure that the antenna is connected to the module before powering it up to avoid damage to the module.")]),e._v(" "),r("p",[e._v("The default baud rate of the module is 19200. However, the PX4 "),r("em",[e._v("iridiumsbd")]),e._v(" driver requires a baud rate of 115200 so it needs to be changed using the "),r("a",{attrs:{href:"https://www.groundcontrol.com/en/wp-content/uploads/2022/02/IRDM_ISU_ATCommandReferenceMAN0009_Rev2.0_ATCOMM_Oct2012.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("AT commands"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("ol",[r("li",[e._v("Connect to the module with using a 19200/8-N-1 setting and check if the communication is working using the command: "),r("code",[e._v("AT")]),e._v(". The response should be: "),r("code",[e._v("OK")]),e._v(".")]),e._v(" "),r("li",[e._v("Change the baud rate:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("AT+IPR=9\n")])])])]),e._v(" "),r("li",[e._v("Reconnect to the model now with a 115200/8-N-1 setting and save the configuration using:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("AT&W0\n")])])])])]),e._v(" "),r("p",[e._v("The module is now ready to be used with PX4.")]),e._v(" "),r("h3",{attrs:{id:"software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which the RockBlock module will run using "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[e._v("ISBD_CONFIG")]),e._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("If the configuration parameter is not available in "),r("em",[e._v("QGroundControl")]),e._v(" then you may need to "),r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(":")],1),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("drivers/telemetry/iridiumsbd\n")])])])]),e._v(" "),r("h2",{attrs:{id:"rockblock-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rockblock-setup"}},[e._v("#")]),e._v(" RockBlock Setup")]),e._v(" "),r("p",[e._v("When buying the first module on RockBlock an user account needs to be created in a first step.")]),e._v(" "),r("p",[e._v("Log in to the "),r("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("account"),r("OutboundLink")],1),e._v(" and register the RockBlock module under the "),r("code",[e._v("My RockBLOCKs")]),e._v(". Activate the line rental for the module and make sure that enough credits for the expected flight duration are available on the account. When using the default settings one message per minute is sent from the vehicle to the ground station.")]),e._v(" "),r("p",[e._v("Set up a delivery group for the message relay server and add the module to that delivery group:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(493),alt:"Delivery Groups"}})]),e._v(" "),r("h2",{attrs:{id:"relay-server-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relay-server-setup"}},[e._v("#")]),e._v(" Relay Server Setup")]),e._v(" "),r("p",[e._v("The relay server should be run on either Ubuntu 16.04 or 14.04 OS.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("The server working as a message relay should have a static IP address and two publicly accessible, open, TCP ports:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("5672")]),e._v(" for the "),r("em",[e._v("RabbitMQ")]),e._v(" message broker (can be changed in the "),r("em",[e._v("rabbitmq")]),e._v(" settings)")]),e._v(" "),r("li",[r("code",[e._v("45679")]),e._v(" for the HTTP POST interface (can be changed in the "),r("strong",[e._v("relay.cfg")]),e._v(" file)")])])]),e._v(" "),r("li",[r("p",[e._v("Install the required python modules:")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pip "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pika tornado future\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Install the "),r("code",[e._v("rabbitmq")]),e._v(" message broker:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo apt install rabbitmq-server\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Configure the broker's credentials (change PWD to your preferred password):")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" rabbitmqctl add_user iridiumsbd "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("PWD")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" rabbitmqctl set_permissions iridiumsbd "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*"')]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*"')]),e._v("\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Clone the "),r("a",{attrs:{href:"https://github.com/acfloria/SatComInfrastructure.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("SatComInfrastructure"),r("OutboundLink")],1),e._v(" repository:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/acfloria/SatComInfrastructure.git\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Go to the location of the "),r("em",[e._v("SatComInfrastructure")]),e._v(" repo and configure the broker's queues:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./setup_rabbit.py localhost iridiumsbd PWD\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Verify the setup:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo rabbitmqctl list_queues\n")])])]),r("p",[e._v("This should give you a list of 4 queues: "),r("code",[e._v("MO")]),e._v(", "),r("code",[e._v("MO_LOG")]),e._v(", "),r("code",[e._v("MT")]),e._v(", "),r("code",[e._v("MT_LOG")])])]),e._v(" "),r("li",[r("p",[e._v("Edit the "),r("code",[e._v("relay.cfg")]),e._v(" configuration file to reflect your settings.")])]),e._v(" "),r("li",[r("p",[e._v("Start the relay script in the detached mode:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("screen -dm bash -c 'cd SatcomInfrastructure/; ./relay.py\n")])])])])]),e._v(" "),r("p",[e._v("Other instructions include:")]),e._v(" "),r("ul",[r("li",[e._v("Detach from the screen:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ctrl+a d\n")])])])]),e._v(" "),r("li",[e._v("Kill execution of the script:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ctrl+a :quit\n")])])])]),e._v(" "),r("li",[e._v("Reattach to the screen::"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("screen -dr\n")])])])])]),e._v(" "),r("h2",{attrs:{id:"ground-station-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ground-station-computer"}},[e._v("#")]),e._v(" Ground Station Computer")]),e._v(" "),r("p",[e._v("To setup the ground station:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Install the required python modules:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo pip install pika tornado future\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Clone the SatComInfrastructure repository:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("git clone https://github.com/acfloria/SatComInfrastructure.git\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Edit the "),r("strong",[e._v("udp2rabbit.cfg")]),e._v(" configuration file to reflect your settings.")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install "),r("em",[e._v("QGroundControl")]),r("OutboundLink")],1),e._v(" (daily build).")])]),e._v(" "),r("li",[r("p",[e._v("Add a UDP connection in QGC with the parameters:")]),e._v(" "),r("ul",[r("li",[e._v("Listening port: 10000")]),e._v(" "),r("li",[e._v("Target hosts: 127.0.0.1:10001")]),e._v(" "),r("li",[e._v("High Latency: checked")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(494),alt:"High Latency Link Settings"}})])])]),e._v(" "),r("h3",{attrs:{id:"验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Open a terminal on the ground station computer and change to the location of the "),r("em",[e._v("SatComInfrastructure")]),e._v(" repository. Then start the "),r("strong",[e._v("udp2rabbit.py")]),e._v(" script:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./udp2rabbit.py\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Send a test message from "),r("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[e._v("RockBlock Account"),r("OutboundLink")],1),e._v(" to the created delivery group in the "),r("code",[e._v("Test Delivery Groups")]),e._v(" tab.")])])]),e._v(" "),r("p",[e._v("If in the terminal where the "),r("code",[e._v("udp2rabbit.py")]),e._v(" script is running within a couple of seconds the acknowledge for a message can be observed, then the RockBlock delivery group, the relay server and the udp2rabbit script are set up correctly:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(495),alt:"udp2rabbit message acknowledge"}})]),e._v(" "),r("h2",{attrs:{id:"running-the-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-the-system"}},[e._v("#")]),e._v(" Running the System")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Start "),r("em",[e._v("QGroundControl")]),e._v(". Manually connect the high latency link first, then the regular telemetry link:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(496),alt:"Connect the High Latency link"}})])]),e._v(" "),r("li",[r("p",[e._v("Open a terminal on the ground station computer and change to the location of the "),r("em",[e._v("SatComInfrastructure")]),e._v(" repository. Then start the "),r("strong",[e._v("udp2rabbit.py")]),e._v(" script:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("./udp2rabbit.py\n")])])])]),e._v(" "),r("li",[r("p",[e._v("Power up the vehicle.")])]),e._v(" "),r("li",[r("p",[e._v("Wait until the first "),r("code",[e._v("HIGH_LATENCY2")]),e._v(" message is received on QGC. This can be checked either using the "),r("em",[e._v("MAVLink Inspector")]),e._v(" widget or on the toolbar with the "),r("em",[e._v("LinkIndicator")]),e._v(". If more than one link is connected to the active vehicle the "),r("em",[e._v("LinkIndicator")]),e._v(" shows all of them by clicking on the name of the shown link:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(497),alt:"Link Toolbar"}})]),e._v(" "),r("p",[e._v("The link indicator always shows the name of the priority link.")])]),e._v(" "),r("li",[r("p",[e._v("The satellite communication system is now ready to use. The priority link, which is the link over which commands are send, is determined the following ways:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("If no link is commanded by the user a regular radio telemetry link is preferred over the high latency link.")])]),e._v(" "),r("li",[r("p",[e._v("The autopilot and QGC will fall back from the regular radio telemetry to the high latency link if the vehicle is armed and the radio telemetry link is lost (no MAVLink messages received for a certain time). As soon as the radio telemetry link is regained QGC and the autopilot will switch back to it.")])]),e._v(" "),r("li",[r("p",[e._v("The user can select a priority link over the "),r("code",[e._v("LinkIndicator")]),e._v(" on the toolbar. This link is kept as the priority link as long as this link is active or the user selects another priority link:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(498),alt:"Prioritylink Selection"}})])])])])]),e._v(" "),r("h2",{attrs:{id:"故障处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[e._v("#")]),e._v(" 故障处理")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Satellite communication messages from the airplane are received but no commands can be transmitted (the vehicle does not react)")]),e._v(" "),r("ul",[r("li",[e._v("Check the settings of the relay server and make sure that they are correct, especially the IMEI.")])])]),e._v(" "),r("li",[r("p",[e._v("No satellite communication messages from the airplane arrive on the ground station:")]),e._v(" "),r("ul",[r("li",[e._v("Check using the system console if the "),r("em",[e._v("iridiumsbd")]),e._v(" driver started and if it did that a signal from any satellite is received by the module:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("iridiumsbd status\n")])])])]),e._v(" "),r("li",[e._v("Make sure using the verification steps from above that the relay server, the delivery group and the "),r("code",[e._v("udp2rabbit.py")]),e._v(" script are set up correctly.")]),e._v(" "),r("li",[e._v("Check if the link is connected and that its settings are correct.")])])]),e._v(" "),r("li",[r("p",[e._v("The IridiumSBD driver does not start:")]),e._v(" "),r("ul",[r("li",[e._v("Reboot the vehicle. If that helps increase the sleep time in the "),r("code",[e._v("extras.txt")]),e._v(" before the driver is started. If that does not help make sure that the Pixhawk and the module have the same ground level. Confirm also that the baudrate of the module is set to 115200.")])])]),e._v(" "),r("li",[r("p",[e._v("A first message is received on the ground but as soon as the vehicle is flying no message can be transmitted or the latency is significantly larger (in the order of minutes)")]),e._v(" "),r("ul",[r("li",[e._v("Check the signal quality after the flight. If it is decreasing during the flight and you are using the internal antenna consider using an external antenna. If you are already using the external antenna try moving the antenna as far away as possible from any electronics or anything which might disturb the signal. Also make sure that the antenna is not damaged.")])])])])])}),[],!1,null,null,null);t.default=s.exports},492:function(e,t,a){e.exports=a.p+"assets/img/architecture.ee66bf6f.jpg"},493:function(e,t){e.exports="data:image/png;base64,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"},494:function(e,t,a){e.exports=a.p+"assets/img/linksettings.af463983.png"},495:function(e,t,a){e.exports=a.p+"assets/img/verification.e9c35529.png"},496:function(e,t,a){e.exports=a.p+"assets/img/linkconnect.1c301fcb.png"},497:function(e,t,a){e.exports=a.p+"assets/img/linkindicator.2c5975a6.jpg"},498:function(e,t,a){e.exports=a.p+"assets/img/linkselection.724f5fd9.png"}}]);