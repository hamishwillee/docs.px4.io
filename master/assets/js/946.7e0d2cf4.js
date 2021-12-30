(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{1853:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"estimator-event-flags-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimator-event-flags-uorb-message"}},[t._v("#")]),t._v(" estimator_event_flags (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/estimator_event_flags.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample                 # the timestamp of the raw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("information")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("events")])]),t._v("\nuint32 information_event_changes        # number of information event changes\nbool gps_checks_passed                  #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when gps quality checks are passing passed\nbool reset_vel_to_gps                   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the velocity states are reset to the gps measurement\nbool reset_vel_to_flow                  #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the velocity states are reset using the optical flow measurement\nbool reset_vel_to_vision                #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the velocity states are reset to the vision system measurement\nbool reset_vel_to_zero                  #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the velocity states are reset to zero\nbool reset_pos_to_last_known            #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the position states are reset to the last known position\nbool reset_pos_to_gps                   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the position states are reset to the gps measurement\nbool reset_pos_to_vision                #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the position states are reset to the vision system measurement\nbool starting_gps_fusion                #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter starts using gps measurements to correct the state estimates\nbool starting_vision_pos_fusion         #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter starts using vision system position measurements to correct the state estimates\nbool starting_vision_vel_fusion         # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter starts using vision system velocity measurements to correct the state estimates\nbool starting_vision_yaw_fusion         # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter starts using vision system yaw  measurements to correct the state estimates\nbool yaw_aligned_to_imu_gps             # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter resets the yaw to an estimate derived from IMU and GPS data\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("warning")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("events")])]),t._v("\nuint32 warning_event_changes            # number of warning event changes\nbool gps_quality_poor                   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the gps is failing quality checks\nbool gps_fusion_timout                  #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the gps data has not been used to correct the state estimates "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a significant time period\nbool gps_data_stopped                   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the gps data has stopped "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a significant time period\nbool gps_data_stopped_using_alternate   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the gps data has stopped "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a significant time period but the filter is able to use other sources of data to maintain navigation\nbool height_sensor_timeout              #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the height sensor has not been used to correct the state estimates "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a significant time period\nbool stopping_navigation                #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter has insufficient data to estimate velocity and position and is falling back to an attitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height and height rate mode of operation\nbool invalid_accel_bias_cov_reset       #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter has detected bad acceerometer bias state esitmstes and has reset the corresponding covariance matrix elements\nbool bad_yaw_using_gps_course           #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the fiter has detected an invalid yaw esitmate and has reset the yaw angle to the GPS ground course\nbool stopping_mag_use                   #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter has detected bad magnetometer data and is stopping further use of the magnetomer data\nbool vision_data_stopped                #  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the vision system data has stopped "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a significant time period\nbool emergency_yaw_reset_mag_stopped    # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter has detected bad magnetometer data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" has reset the yaw to anothter source of data and has stopped further use of the magnetomer data\nbool emergency_yaw_reset_gps_yaw_stopped # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the filter has detected bad GNSS yaw data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" has reset the yaw to anothter source of data and has stopped further use of the GNSS yaw data\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);