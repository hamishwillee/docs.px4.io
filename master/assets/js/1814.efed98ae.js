(window.webpackJsonp=window.webpackJsonp||[]).push([[1814],{3269:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"telemetry-status-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-status-uorb-message"}},[t._v("#")]),t._v(" telemetry_status (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/telemetry_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint8 LINK_TYPE_GENERIC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 LINK_TYPE_UBIQUITY_BULLET "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 LINK_TYPE_WIRE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 LINK_TYPE_USB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 LINK_TYPE_IRIDIUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint64 timestamp            # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 type              #  type of the radio "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hardware")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LINK_TYPE_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 mode\n\nbool flow_control\nbool forwarding\nbool mavlink_v2\nbool ftp\n\nuint8 streams\n\nfloat32 data_rate                       # configured maximum data "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 rate_multiplier\n\nfloat32 tx_rate_avg                     # transmit rate "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("average")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 tx_error_rate_avg               # transmit error rate "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("average")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint32 tx_message_count                 # total message sent count\nuint32 tx_buffer_overruns               # number of TX buffer overruns\n\nfloat32 rx_rate_avg                     # transmit rate "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("average")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Bytes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint32 rx_message_count                 # count of total messages received\nuint32 rx_message_lost_count\nuint32 rx_buffer_overruns               # number of RX buffer overruns\nuint32 rx_parse_errors                  # number of parse errors\nuint32 rx_packet_drop_count             # number of packet drops\nfloat32 rx_message_lost_rate\n\n\nuint64 HEARTBEAT_TIMEOUT_US "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2500000")]),t._v("       # Heartbeat "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tolerate missing "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jitter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Heartbeats per type")])]),t._v("\nbool heartbeat_type_antenna_tracker         # MAV_TYPE_ANTENNA_TRACKER\nbool heartbeat_type_gcs                     # MAV_TYPE_GCS\nbool heartbeat_type_onboard_controller      # MAV_TYPE_ONBOARD_CONTROLLER\nbool heartbeat_type_gimbal                  # MAV_TYPE_GIMBAL\nbool heartbeat_type_adsb                    # MAV_TYPE_ADSB\nbool heartbeat_type_camera                  # MAV_TYPE_CAMERA\nbool heartbeat_type_parachute               # MAV_TYPE_PARACHUTE\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Heartbeats per component")])]),t._v("\nbool heartbeat_component_telemetry_radio    # MAV_COMP_ID_TELEMETRY_RADIO\nbool heartbeat_component_log                # MAV_COMP_ID_LOG\nbool heartbeat_component_osd                # MAV_COMP_ID_OSD\nbool heartbeat_component_obstacle_avoidance # MAV_COMP_ID_OBSTACLE_AVOIDANCE\nbool heartbeat_component_vio                # MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY\nbool heartbeat_component_pairing_manager    # MAV_COMP_ID_PAIRING_MANAGER\nbool heartbeat_component_udp_bridge         # MAV_COMP_ID_UDP_BRIDGE\nbool heartbeat_component_uart_bridge        # MAV_COMP_ID_UART_BRIDGE\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Misc component health")])]),t._v("\nbool avoidance_system_healthy\nbool parachute_system_healthy\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);