(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1797:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"can"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can"}},[e._v("#")]),e._v(" CAN")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/CAN_bus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Controller Area Network (CAN)"),o("OutboundLink")],1),e._v(" is a robust wired network that allows drone components such as flight controller, ESCs, sensors, and other peripherals, to communicate with each other.\nBecause it is designed to be democratic and uses differential signaling, it is very robust even over longer cable lengths (on large vehicles), and avoids a single point of failure.\nCAN also allows status feedback from peripherals and convenient firmware upgrades over the bus.")]),e._v(" "),o("p",[e._v("PX4 supports two software protocols for communicating with CAN devices:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/dronecan/"}},[e._v("DroneCAN")]),e._v(": PX4 recommends this for most common setups.\nIt is well supported by PX4, is a mature product with extensive peripheral support, and has had years of testing.")],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://opencyphal.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cyphal"),o("OutboundLink")],1),e._v(': PX4 support is a "work in progress".\nCyphal is a much newer protocol which allows more flexibility and configuration, especially on larger and more complex vehicles.\nIt has not yet seen significant adoption.')])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Both DroneCAN and Cyphal originate from an earlier project named UAVCAN.\nIn 2022 the project split into two: the original version of UAVCAN (UAVCAN v0) was renamed to DroneCAN, and the newer UAVCAN v1 was renamed Cyphal.\nThe differences between the two protocols are outlined in "),o("a",{attrs:{href:"https://forum.opencyphal.org/t/cyphal-vs-dronecan/1814",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cyphal vs. DroneCAN"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("PX4 does not support other CAN software protocols for drones such as KDECAN (at time of writing).")])]),e._v(" "),o("h2",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),o("p",[e._v("The wiring for CAN networks is the same for both DroneCAN and Cyphal/CAN (in fact, for all CAN networks).")]),e._v(" "),o("p",[e._v("Devices are connected in a chain in any order.\nAt either end of the chain, a 120Ω termination resistor should be connected between the two data lines.\nFlight controllers and some GNSS modules have built in termination resistors for convenience, thus should be placed at opposite ends of the chain.\nOtherwise, you can use a termination resistor such as "),o("a",{attrs:{href:"https://shop.zubax.com/products/uavcan-micro-termination-plug?variant=6007985111069",target:"_blank",rel:"noopener noreferrer"}},[e._v("this one from Zubax Robotics"),o("OutboundLink")],1),e._v(", or solder one yourself if you have access to a JST-GH crimper.")]),e._v(" "),o("p",[e._v("The following diagram shows an example of a CAN bus connecting a flight controller to 4 CAN ESCs and a GNSS.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(602),alt:"CAN Wiring"}})]),e._v(" "),o("p",[e._v("The diagram does not show any power wiring.\nRefer to your manufacturer instructions to confirm whether components require separate power or can be powered from the CAN bus itself.")]),e._v(" "),o("p",[e._v("For more information, see "),o("a",{attrs:{href:"https://kb.zubax.com/pages/viewpage.action?pageId=2195476",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cyphal/CAN device interconnection"),o("OutboundLink")],1),e._v(" (kb.zubax.com).\nWhile the article is written with the Cyphal protocol in mind, it applies equally to DroneCAN hardware and any other CAN setup.\nFor more advanced scenarios, consult with "),o("a",{attrs:{href:"https://forum.opencyphal.org/t/on-can-bus-topology-and-termination/1685",target:"_blank",rel:"noopener noreferrer"}},[e._v("On CAN bus topology and termination"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"connectors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connectors"}},[e._v("#")]),e._v(" Connectors")]),e._v(" "),o("p",[e._v("Pixhawk standard compatible CAN devices use 4 pin JST-GH connectors for CAN.\nTwo connectors are used for input and output when wiring in a chain (except for flight controllers and some GNSS devices with builtin termination, which only have a single JST-GH connector).")]),e._v(" "),o("p",[e._v("Other (non-Pixhawk compatible) devices may use different connectors.\nHowever, as long as the device firmware supports DroneCAN or Cyphal, it can be used.")]),e._v(" "),o("h3",{attrs:{id:"redundancy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#redundancy"}},[e._v("#")]),e._v(" Redundancy")]),e._v(" "),o("p",[e._v("DroneCAN and Cyphal/CAN support using a second (redundant) CAN interface.\nThis is completely optional but increases the robustness of the connection.\nAll Pixhawk flight controllers come with 2 CAN interfaces; if your peripherals support 2 CAN interfaces as well, it is recommended to wire both up for increased safety.")]),e._v(" "),o("h2",{attrs:{id:"firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#firmware"}},[e._v("#")]),e._v(" Firmware")]),e._v(" "),o("p",[e._v("CAN peripherals may run proprietary or open source firmware (check manufacturer guides to confirm the required setup).")]),e._v(" "),o("p",[e._v("PX4 can be built to run as open-source DroneCAN firmware on supported CAN hardware.\nSee "),o("RouterLink",{attrs:{to:"/en/dronecan/px4_cannode_fw.html"}},[e._v("PX4 DroneCAN Firmware")]),e._v(" for more information.")],1),e._v(" "),o("h2",{attrs:{id:"support-and-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#support-and-configuration"}},[e._v("#")]),e._v(" Support and Configuration")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/dronecan/"}},[e._v("DroneCAN Setup and Configuration")])],1),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/dronecan/px4_cannode_fw.html"}},[e._v("PX4 DroneCAN Firmware")])],1),e._v(" "),o("h2",{attrs:{id:"videos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#videos"}},[e._v("#")]),e._v(" Videos")]),e._v(" "),o("h3",{attrs:{id:"dronecan"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecan"}},[e._v("#")]),e._v(" DroneCAN")]),e._v(" "),o("p",[e._v("Intro to DroneCAN (UAVCANv0) and practical example with setup in QGroundControl:")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/IZMTq9fTiOM",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),e._v(" "),o("h3",{attrs:{id:"cyphal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cyphal"}},[e._v("#")]),e._v(" Cyphal")]),e._v(" "),o("p",[e._v("UAVCAN v1 for drones — PX4 Developer Summit Virtual 2020")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/6Bvtn_g8liU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Getting started using UAVCAN v1 with PX4 on the NXP UAVCAN Board — PX4 Developer Summit Virtual 2020\n")]),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/MwdHwjaXYKs",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("UAVCAN: a highly dependable publish-subscribe protocol for hard real-time intra-vehicular networking  — PX4 Developer Summit Virtual 2019")]),e._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/MBtROivYPik",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p")])}),[],!1,null,null,null);t.default=a.exports},602:function(e,t,r){e.exports=r.p+"assets/img/uavcan_wiring.0288f5b4.svg"}}]);