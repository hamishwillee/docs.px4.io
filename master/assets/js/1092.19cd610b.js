(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{2034:function(t,o,e){"use strict";e.r(o);var s=e(19),a=Object(s.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vehicle-status-flags-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-status-flags-uorb-message"}},[t._v("#")]),t._v(" vehicle_status_flags (UORB message)")]),t._v(" "),e("p",[t._v("This is a struct used by the commander internally.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_status_flags.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("This is a "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" by the commander internally"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp\t\t\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool condition_calibration_enabled\nbool condition_system_sensors_initialized\nbool condition_system_hotplug_timeout\t\t# true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the hotplug sensor search is over\nbool condition_system_returned_to_home\nbool condition_auto_mission_available\nbool condition_angular_velocity_valid\nbool condition_attitude_valid\nbool condition_local_altitude_valid\nbool condition_local_position_valid\t\t# set to true by the commander app "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the local position estimate is good enough to use "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_local_velocity_valid\t\t# set to true by the commander app "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the local horizontal velocity data is good enough to use "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_global_position_valid\t\t# set to true by the commander app "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the global position estimate is good enough to use "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_gps_position_valid\nbool condition_home_position_valid\t\t# indicates a valid home "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a valid home position is not always a valid launch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool condition_power_input_valid                # set "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" input power is valid\nbool condition_battery_healthy                # set "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" battery is available and not low\nbool condition_escs_error\t\t      # set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" one or more ESCs reporting esc_status are offline\nbool condition_escs_failure\t\t      # set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" one or more ESCs reporting esc_status has a failure\n\nbool position_reliant_on_gps\nbool position_reliant_on_optical_flow\nbool position_reliant_on_vision_position\n\nbool dead_reckoning\n\nbool circuit_breaker_engaged_power_check\nbool circuit_breaker_engaged_airspd_check\nbool circuit_breaker_engaged_enginefailure_check\nbool circuit_breaker_flight_termination_disabled\nbool circuit_breaker_engaged_usb_check\nbool circuit_breaker_engaged_posfailure_check\t# set to true when the position valid checks have been disabled\nbool circuit_breaker_vtol_fw_arming_check \t# set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" VTOLs arming in fixed"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing mode should be allowed\n\nbool offboard_control_signal_lost\n\nbool rc_signal_found_once\nbool rc_calibration_in_progress\nbool rc_calibration_valid                            # set "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" RC calibration is valid\nbool vtol_transition_failure                        # Set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vtol transition failed\nbool usb_connected                                # status of the USB power supply\nbool sd_card_detected_once                        # set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the SD card was detected\n\nbool avoidance_system_required\t\t\t\t\t  # Set to true "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" avoidance system is enabled via COM_OBS_AVOID parameter\nbool avoidance_system_valid                       # Status of the obstacle avoidance system\n\nbool parachute_system_present\nbool parachute_system_healthy\n\n")])])])])}),[],!1,null,null,null);o.default=a.exports}}]);