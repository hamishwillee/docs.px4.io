(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1500:function(e,t,o){"use strict";o.r(t);var r=o(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"video-streaming-companion-computer-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#video-streaming-companion-computer-qgroundcontrol"}},[e._v("#")]),e._v(" Video Streaming (Companion Computer/QGroundControl)")]),e._v(" "),r("p",[e._v("PX4-based vehicles support video streaming using a camera connected to a companion computer.\nGStreamer is used to send the video to "),r("em",[e._v("QGroundControl")]),e._v(" over an IP link.")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("You can't video stream directly from a camera connected to PX4.")])]),e._v(" "),r("p",[e._v("To support streaming use cases you will need to install "),r("em",[e._v("GStreamer")]),e._v(" development packages on both your companion computer and on the system running "),r("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" uses GStreamer 1.14.4 and a stripped down version of "),r("em",[e._v("QtGstreamer")]),e._v(" to support UDP RTP and RSTP video streaming.")]),e._v(" "),r("h2",{attrs:{id:"companion-computer-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),r("p",[e._v("General instructions for installing "),r("em",[e._v("GStreamer")]),e._v(" and starting the stream on your companion computer are provided in the "),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoReceiver/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl VideoReceiver README"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"qgc-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgc-setup"}},[e._v("#")]),e._v(" QGC Setup")]),e._v(" "),r("p",[e._v("To setup and use video steaming with QGC:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Install GStreamer before running QGC.\nOn Ubuntu this is done with the command:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y\n")])])]),r("p",[e._v("For other platforms follow the instructions in "),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoReceiver/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl VideoReceiver README"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Enable video in "),r("em",[e._v("Fly View")]),e._v(": "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/General.html#video",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > General Settings (Settings View) > Video"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("If everything works, you should see the video stream displayed in the QGC Video Switcher (QGC Fly View bottom left corner).\nYou can click on the video switcher to toggle the video full-screen, as shown in the screenshot below.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(396),alt:"QGC displaying video stream"}})])])]),e._v(" "),r("h2",{attrs:{id:"gazebo-simulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[e._v("#")]),e._v(" Gazebo Simulation")]),e._v(" "),r("p",[e._v("Gazebo support video streaming from within the simulated environment.\nFor more information see "),r("RouterLink",{attrs:{to:"/en/simulation/gazebo.html#video-streaming"}},[e._v("Gazebo Simulation > Video Streaming")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports},396:function(e,t,o){e.exports=o.p+"assets/img/qgc-screenshot.b181c617.png"}}]);