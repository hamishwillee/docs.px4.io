(window.webpackJsonp=window.webpackJsonp||[]).push([[1307],{2439:function(e,t,s){"use strict";s.r(t);var n=s(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"registerextcomponentrequest-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registerextcomponentrequest-uorb-message"}},[e._v("#")]),e._v(" RegisterExtComponentRequest (UORB message)")]),e._v(" "),s("p",[e._v("Request to register an external component")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/RegisterExtComponentRequest.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("source file"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[e._v("Request to "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("register")]),e._v(" an external component")])]),e._v("\nuint64 timestamp # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nuint64 request_id                  # ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" set this to a random value\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" name                      # either the requested mode name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" or component name\n\nuint16 LATEST_PX4_ROS2_API_VERSION "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" # API version compatibility"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" Increase this on a breaking semantic change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" Changes to any message field are detected separately and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" not require an API version change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n\nuint16 px4_ros2_api_version   # Set to LATEST_PX4_ROS2_API_VERSION\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[e._v("Components to be registered")])]),e._v("\nbool register_arming_check\nbool register_mode                 # registering a mode also requires arming_check to be set\nbool register_mode_executor        # registering an executor also requires a mode to be "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("registered")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("which is the owned mode by the executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nbool enable_replace_internal_mode  # set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" an internal mode should be replaced\nuint8 replace_internal_mode        # vehicle_status"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),e._v("NAVIGATION_STATE_"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v("\nbool activate_mode_immediately     # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("switch")]),e._v(" to the registered "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mode")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("can only be set in combination with an executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n\nuint8 ORB_QUEUE_LENGTH "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);