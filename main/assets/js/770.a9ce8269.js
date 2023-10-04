(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{2527:function(e,t,o){"use strict";o.r(t);var r=o(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"동영상-스트리밍-보조-컴퓨터-qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#동영상-스트리밍-보조-컴퓨터-qgroundcontrol"}},[e._v("#")]),e._v(" 동영상 스트리밍 (보조 컴퓨터/QGroundControl)")]),e._v(" "),r("p",[e._v("PX4-based vehicles support video streaming using a camera connected to a "),r("RouterLink",{attrs:{to:"/ko/companion_computer/"}},[e._v("companion computer")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4에 연결된 카메라에서 직접 비디오를 스트리밍 할 수 없습니다.")])]),e._v(" "),r("p",[e._v("GStreamer is used to send the video to "),r("em",[e._v("QGroundControl")]),e._v(" over an IP link. To support streaming use cases you will need to install "),r("em",[e._v("GStreamer")]),e._v(" development packages on both your companion computer and on the system running "),r("em",[e._v("QGroundControl")]),e._v(". "),r("em",[e._v("QGroundControl")]),e._v(" uses GStreamer 1.14.4 and a stripped down version of "),r("em",[e._v("QtGstreamer")]),e._v(" to support UDP RTP and RSTP video streaming.")]),e._v(" "),r("h2",{attrs:{id:"보조-컴퓨터-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[e._v("#")]),e._v(" 보조 컴퓨터 설정")]),e._v(" "),r("p",[e._v("General instructions for installing "),r("em",[e._v("GStreamer")]),e._v(" and starting the stream on a companion computer are provided in the "),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoReceiver/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl VideoReceiver README"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v('The setup of cameras and data links depends on many factors. Examples in this library are listed below (note, these are options, not "recommended"):')]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/companion_computer/video_streaming_wfb_ng_wifi.html"}},[e._v("Video Streaming using WFB-ng Wifi")]),e._v(" (Tutorial): Using RaPi and WiFi module in unconnected (broadcast) mode to stream video and as a bidirectional telemetry link.")],1)]),e._v(" "),r("h2",{attrs:{id:"qgc-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgc-설정"}},[e._v("#")]),e._v(" QGC 설정")]),e._v(" "),r("p",[e._v("QGC로 비디오 스트리밍을 설정하고 사용하려면 :")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("QGC를 실행하기 전에 GStreamer를 설치하십시오. Ubuntu에서는 아래의 명령어로 설치합니다.")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y\n")])])]),r("p",[e._v("다른 플랫폼의 경우 "),r("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/src/VideoReceiver/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl VideoReceiver README"),r("OutboundLink")],1),e._v("의 지침을 참고하십시오.")])]),e._v(" "),r("li",[r("p",[e._v("Enable video in "),r("em",[e._v("Fly View")]),e._v(": "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/General.html#video",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > General Settings (Settings View) > Video"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("모든 것이 정상적으로 작동하게 되면, QGC 비디오 스위처 (QGC Fly View 왼쪽 하단 모서리)에 비디오 스트림이 표시됩니다. 아래 스크린 샷과 같이 비디오 스위처를 클릭하여 비디오를 전체 화면으로 전환  수 있습니다.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(629),alt:"QGC에서의 실시간 동영상 전송 화면"}})])])]),e._v(" "),r("h2",{attrs:{id:"gazebo-classic-simulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-simulation"}},[e._v("#")]),e._v(" Gazebo Classic Simulation")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[e._v("Gazebo Classic")]),e._v(" supports video streaming from within the simulated environment. For more information see "),r("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/#video-streaming"}},[e._v("Gazebo Classic Simulation > Video Streaming")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports},629:function(e,t,o){e.exports=o.p+"assets/img/qgc-screenshot.d9488632.png"}}]);