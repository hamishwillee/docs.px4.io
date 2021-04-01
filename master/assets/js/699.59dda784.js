(window.webpackJsonp=window.webpackJsonp||[]).push([[699],{1213:function(t,e,a){t.exports=a.p+"assets/img/t265_intel_realsense_tracking_camera_photo_angle.730fdf4f.jpg"},2631:function(t,e,a){"use strict";a.r(e);var r=a(18),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"t265-intel-realsense-tracking-camera-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#t265-intel-realsense-tracking-camera-vio"}},[t._v("#")]),t._v(" T265 Intel Realsense Tracking Camera (VIO)")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.intelrealsense.com/tracking-camera-t265/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Realsense Tracking Camera T265"),r("OutboundLink")],1),t._v(" provides odometry information that can be used for "),r("RouterLink",{attrs:{to:"/zh/computer_vision/visual_inertial_odometry.html"}},[t._v("VIO")]),t._v(", augmenting or replacing other positioning systems on PX4.")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("This camera is recommended, and is used in the "),r("RouterLink",{attrs:{to:"/zh/computer_vision/visual_inertial_odometry.html#supported_setup"}},[t._v("Visual Inertial Odometry (VIO) > Supported Setup")]),t._v(".")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:a(1213),alt:"Intel Realsense Tracking Camera T265 - Angled Image"}})]),t._v(" "),r("h2",{attrs:{id:"purchase-link"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purchase-link"}},[t._v("#")]),t._v(" Purchase Link")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://store.intelrealsense.com/buy-intel-realsense-tracking-camera-t265.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel® RealSense™ Tracking Camera T265"),r("OutboundLink")],1),t._v(" (store.intelrealsense.com)")]),t._v(" "),r("h2",{attrs:{id:"setup-instructions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-instructions"}},[t._v("#")]),t._v(" Setup Instructions")]),t._v(" "),r("p",[t._v("The instructions in "),r("RouterLink",{attrs:{to:"/zh/computer_vision/visual_inertial_odometry.html"}},[t._v("Visual Inertial Odometry (VIO)")]),t._v(" explain how to set up this camera.")],1),t._v(" "),r("p",[t._v("At high level:")]),t._v(" "),r("ul",[r("li",[t._v("The "),r("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIO bridge ROS node"),r("OutboundLink")],1),t._v(" provides a bridge between ROS and this camera. This node is only intended for use with this camera.")]),t._v(" "),r("li",[t._v("The camera should be mounted with lenses facing down (default). For other orientations modify "),r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),r("OutboundLink")],1),t._v(" in the section below:"),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("node")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static_transform_publisher"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf_baseLink_cameraPose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("args")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),t._v("This is a static transform that links the camera ROS frame "),r("code",[t._v("camera_pose_frame")]),t._v(" to the mavros drone frame "),r("code",[t._v("base_link")]),t._v(".\n"),r("ul",[r("li",[t._v("the first three "),r("code",[t._v("args")]),t._v(" specify "),r("em",[t._v("translation")]),t._v(" x,y,z in metres from the center of flight controller to camera. For example, if the camera is 10cm in front of the controller and 4cm up, the first three numbers would be : [0.1, 0, 0.04,...]")]),t._v(" "),r("li",[t._v("the next three "),r("code",[t._v("args")]),t._v(" specify rotation in radians (yaw, pitch, roll). So "),r("code",[t._v("[... 0, 1.5708, 0]")]),t._v(" means pitch down by 90deg (facing the ground). Facing straight forward would be [... 0 0 0].")])])]),t._v(" "),r("li",[t._v("The camera is sensitive to high frequency vibrations! It should be soft-mounted with, for example, vibration isolation foam.\n"),r("span",{attrs:{id:"launch_files"}}),t._v(" Launch files are provided for a number of different scenarios.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Launch File")]),t._v(" "),r("th",[t._v("Starts")]),t._v(" "),r("th",[t._v("参数描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge, MAVROS")]),t._v(" "),r("td",[t._v("Use on vehicle in most cases")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge only")]),t._v(" "),r("td",[t._v("Use if some other component is responsible for starting MAVROS).")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros_sitl.launch"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Bridge, MAVROS, SITL")]),t._v(" "),r("td",[t._v("Use for simulation.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);