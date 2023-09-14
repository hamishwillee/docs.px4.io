(window.webpackJsonp=window.webpackJsonp||[]).push([[1951],{3612:function(e,s,t){"use strict";t.r(s);var a=t(19),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"estimatorstatusflags-uorb-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimatorstatusflags-uorb-message"}},[e._v("#")]),e._v(" EstimatorStatusFlags (UORB message)")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/EstimatorStatusFlags.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("source file"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[e._v("uint64 timestamp                          # time since system "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nuint64 timestamp_sample                   # the timestamp of the raw "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("data")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("filter")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("control status")])]),e._v("\nuint32 control_status_changes # number of filter control "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("status")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("cs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" changes\nbool cs_tilt_align            #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the filter tilt alignment is complete\nbool cs_yaw_align             #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the filter yaw alignment is complete\nbool cs_gps                   #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" GPS measurement fusion is intended\nbool cs_opt_flow              #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" optical flow measurements fusion is intended\nbool cs_mag_hdg               #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" a simple magnetic yaw heading fusion is intended\nbool cs_mag_3d                #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis magnetometer measurement fusion is intended\nbool cs_mag_dec               #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" synthetic magnetic declination measurements fusion is intended\nbool cs_in_air                #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the vehicle is airborne\nbool cs_wind                  #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when wind velocity is being estimated\nbool cs_baro_hgt              #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when baro height is being fused as a primary height reference\nbool cs_rng_hgt               # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when range finder height is being fused as a primary height reference\nbool cs_gps_hgt               # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when GPS height is being fused as a primary height reference\nbool cs_ev_pos                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when local position data fusion from external vision is intended\nbool cs_ev_yaw                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when yaw data from external vision measurements fusion is intended\nbool cs_ev_hgt                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when height data from external vision measurements is being fused\nbool cs_fuse_beta             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when synthetic sideslip measurements are being fused\nbool cs_mag_field_disturbed   # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the mag field does not match the expected strength\nbool cs_fixed_wing            # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the vehicle is operating as a fixed wing vehicle\nbool cs_mag_fault             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the magnetometer has been declared faulty and is no longer being used\nbool cs_fuse_aspd             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when airspeed measurements are being fused\nbool cs_gnd_effect            # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when protection from ground effect induced "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("static")]),e._v(" pressure rise is active\nbool cs_rng_stuck             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when rng data wasn"),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'t ready for more than 10s and new rng values haven'")]),e._v("t changed enough\nbool cs_gps_yaw               # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yaw")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("not ground course"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" data fusion from a GPS receiver is intended\nbool cs_mag_aligned_in_flight # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the in"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("flight mag field alignment has been completed\nbool cs_ev_vel                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("24")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when local frame velocity data fusion from external vision measurements is intended\nbool cs_synthetic_mag_z       # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when we are using a synthesized measurement "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the magnetometer Z component\nbool cs_vehicle_at_rest       # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("26")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the vehicle is at rest\nbool cs_gps_yaw_fault         # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("27")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the GNSS heading has been declared faulty and is no longer being used\nbool cs_rng_fault             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the range finder has been declared faulty and is no longer being used\nbool cs_inertial_dead_reckoning # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("29")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" we are no longer fusing measurements that constrain horizontal velocity drift\nbool cs_wind_dead_reckoning     # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("30")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" we are navigationg reliant on wind relative measurements\nbool cs_rng_kin_consistent      # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("31")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the range finder kinematic consistency check is passing\nbool cs_fake_pos                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when fake position measurements are being fused\nbool cs_fake_hgt                # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("33")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when fake height measurements are being fused\nbool cs_gravity_vector          # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("34")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when gravity vector measurements are being fused\nbool cs_mag                     # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("35")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis magnetometer measurement "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("fusion")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mag states only"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" is intended\nbool cs_ev_yaw_fault            # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("36")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the EV heading has been declared faulty and is no longer being used\nbool cs_mag_heading_consistent  # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("37")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true when the heading obtained from mag data is declared consistent with the filter\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("fault")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("status")])]),e._v("\nuint32 fault_status_changes   # number of filter fault "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("status")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" changes\nbool fs_bad_mag_x             #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the fusion of the magnetometer X"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis has encountered a numerical error\nbool fs_bad_mag_y             #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the fusion of the magnetometer Y"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis has encountered a numerical error\nbool fs_bad_mag_z             #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the fusion of the magnetometer Z"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis has encountered a numerical error\nbool fs_bad_hdg               #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the fusion of the heading angle has encountered a numerical error\nbool fs_bad_mag_decl          #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the fusion of the magnetic declination has encountered a numerical error\nbool fs_bad_airspeed          #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the airspeed has encountered a numerical error\nbool fs_bad_sideslip          #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the synthetic sideslip constraint has encountered a numerical error\nbool fs_bad_optflow_x         #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the optical flow X axis has encountered a numerical error\nbool fs_bad_optflow_y         #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the optical flow Y axis has encountered a numerical error\nbool fs_bad_vel_n             #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the North velocity has encountered a numerical error\nbool fs_bad_vel_e             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the East velocity has encountered a numerical error\nbool fs_bad_vel_d             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the Down velocity has encountered a numerical error\nbool fs_bad_pos_n             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the North position has encountered a numerical error\nbool fs_bad_pos_e             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the East position has encountered a numerical error\nbool fs_bad_pos_d             # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("14")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" fusion of the Down position has encountered a numerical error\nbool fs_bad_acc_bias          # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" bad delta velocity bias estimates have been detected\nbool fs_bad_acc_vertical      # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" bad vertical accelerometer data has been detected\nbool fs_bad_acc_clipping      # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" delta velocity data contains "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("clipping")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("asymmetric railing"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("innovation")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("test failures")])]),e._v("\nuint32 innovation_fault_status_changes    # number of innovation fault "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("status")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("reject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" changes\nbool reject_hor_vel                       #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" horizontal velocity observations have been rejected\nbool reject_ver_vel                       #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" vertical velocity observations have been rejected\nbool reject_hor_pos                       #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" horizontal position observations have been rejected\nbool reject_ver_pos                       #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" vertical position observations have been rejected\nbool reject_yaw                           #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the yaw observation has been rejected\nbool reject_airspeed                      #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the airspeed observation has been rejected\nbool reject_sideslip                      #  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the synthetic sideslip observation has been rejected\nbool reject_hagl                          # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the height above ground observation has been rejected\nbool reject_optflow_x                     # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the X optical flow observation has been rejected\nbool reject_optflow_y                     # "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" true "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the Y optical flow observation has been rejected\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);