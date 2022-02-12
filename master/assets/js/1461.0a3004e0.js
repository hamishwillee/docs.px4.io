(window.webpackJsonp=window.webpackJsonp||[]).push([[1461],{2653:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"vehicle-status-flags-uorb-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-status-flags-uorb-message"}},[t._v("#")]),t._v(" vehicle_status_flags (UORB message)")]),t._v(" "),o("p",[t._v("This is a struct used by the commander internally.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_status_flags.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),o("OutboundLink")],1)]),t._v(" "),o("div",{staticClass:"language-c extra-class"},[o("pre",{pre:!0,attrs:{class:"language-c"}},[o("code",[o("span",{pre:!0,attrs:{class:"token macro property"}},[o("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token expression"}},[t._v("This is a "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("used")]),t._v(" by the commander internally"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp                # time since system "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool condition_calibration_enabled\nbool condition_system_sensors_initialized\nbool condition_system_hotplug_timeout       # true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the hotplug sensor search is over\nbool condition_system_returned_to_home\nbool condition_auto_mission_available\nbool condition_angular_velocity_valid\nbool condition_attitude_valid\nbool condition_local_altitude_valid\nbool condition_local_position_valid     # set to true by the commander app "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the local position estimate is good enough to use "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_local_velocity_valid     # set to true by the commander app "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the local horizontal velocity data is good enough to use "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_global_position_valid        # set to true by the commander app "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the quality of the global position estimate is good enough to use "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" navigation\nbool condition_home_position_valid      # indicates a valid home "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a valid home position is not always a valid launch"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool condition_power_input_valid                # set "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" input power is valid\nbool condition_battery_healthy                # set "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" battery is available and not low\nbool condition_escs_error             # set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" one or more ESCs reporting esc_status are offline\nbool condition_escs_failure           # set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" one or more ESCs reporting esc_status has a failure\n\nbool circuit_breaker_engaged_power_check\nbool circuit_breaker_engaged_airspd_check\nbool circuit_breaker_engaged_enginefailure_check\nbool circuit_breaker_flight_termination_disabled\nbool circuit_breaker_engaged_usb_check\nbool circuit_breaker_engaged_posfailure_check   # set to true when the position valid checks have been disabled\nbool circuit_breaker_vtol_fw_arming_check   # set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" VTOLs arming in fixed"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing mode should be allowed\n\nbool offboard_control_signal_lost\n\nbool rc_signal_found_once\nbool rc_calibration_in_progress\nbool rc_calibration_valid                            # set "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" RC calibration is valid\nbool vtol_transition_failure                        # Set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vtol transition failed\nbool usb_connected                                # status of the USB power supply\nbool sd_card_detected_once                        # set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the SD card was detected\n\nbool avoidance_system_required                    # Set to true "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" avoidance system is enabled via COM_OBS_AVOID parameter\nbool avoidance_system_valid                       # Status of the obstacle avoidance system\n\nbool parachute_system_present\nbool parachute_system_healthy\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);