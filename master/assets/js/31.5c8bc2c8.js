(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1163:function(t,e,a){t.exports=a.p+"assets/media/1_startup_tone.0ccaeec9.mp3"},1164:function(t,e,a){t.exports=a.p+"assets/media/16_make_fs.c8bb124e.mp3"},1165:function(t,e,a){t.exports=a.p+"assets/media/17_format_failed.cf47ae6e.mp3"},1166:function(t,e,a){t.exports=a.p+"assets/media/18_program_px4io.5a68a888.mp3"},1167:function(t,e,a){t.exports=a.p+"assets/media/19_program_px4io_success.898f5c0b.mp3"},1168:function(t,e,a){t.exports=a.p+"assets/media/20_program_px4io_fail.89749277.mp3"},1169:function(t,e,a){t.exports=a.p+"assets/media/3_notify_positive_tone.406154e9.mp3"},1170:function(t,e,a){t.exports=a.p+"assets/media/4_notify_neutral_tone.86353d53.mp3"},1171:function(t,e,a){t.exports=a.p+"assets/media/5_notify_negative_tone.cc788397.mp3"},1172:function(t,e,a){t.exports=a.p+"assets/media/6_arming_warning.cf27f57f.mp3"},1173:function(t,e,a){t.exports=a.p+"assets/media/10_arming_failure_tune.755f3d6e.mp3"},1174:function(t,e,a){t.exports=a.p+"assets/media/7_battery_warning_slow.a804958e.mp3"},1175:function(t,e,a){t.exports=a.p+"assets/media/8_battery_warning_fast.da0e8a39.mp3"},1176:function(t,e,a){t.exports=a.p+"assets/media/9_gps_warning_slow.f9b36b31.mp3"},1177:function(t,e,a){t.exports=a.p+"assets/media/11_parachute_release.71624fb6.mp3"},1178:function(t,e,a){t.exports=a.p+"assets/media/12_ekf_warning.71981372.mp3"},1179:function(t,e,a){t.exports=a.p+"assets/media/13_baro_warning.141e4b12.mp3"},1180:function(t,e,a){t.exports=a.p+"assets/media/14_single_beep.66b57ba2.mp3"},1181:function(t,e,a){t.exports=a.p+"assets/media/15_home_set_tune.bb49c619.mp3"},1764:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"tune-meanings-pixhawk-series"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tune-meanings-pixhawk-series"}},[t._v("#")]),t._v(" Tune Meanings (Pixhawk Series)")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk-series flight controllers")]),t._v(" use audible tones/tunes and "),r("RouterLink",{attrs:{to:"/en/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(" to indicate vehicle state and events (e.g. arming success and failure, low battery warnings).")],1),t._v(" "),r("p",[t._v("The set of standard sounds are listed below.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("strong",[t._v("Developers:")]),t._v(" Tunes are defined in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("/lib/tunes/tune_definition.desc"),r("OutboundLink")],1),t._v(" and can be tested using the "),r("RouterLink",{attrs:{to:"/en/modules/modules_system.html#tune-control"}},[t._v("tune-control")]),t._v(" module.")],1)]),t._v(" "),r("h2",{attrs:{id:"boot-startup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-startup"}},[t._v("#")]),t._v(" Boot/Startup")]),t._v(" "),r("p",[t._v("These tunes are played during the boot sequence.\n")]),t._v(" "),r("h4",{attrs:{id:"startup-tone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#startup-tone"}},[t._v("#")]),t._v(" Startup Tone")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1163),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("microSD card successfully mounted (during boot).")])]),t._v(" "),r("h4",{attrs:{id:"error-tune"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-tune"}},[t._v("#")]),t._v(" Error Tune")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(432),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Hard fault has caused a system reboot.")]),t._v(" "),r("li",[t._v("System set to use PX4IO but no IO present.")]),t._v(" "),r("li",[t._v("UAVCAN is enabled but driver can't start.")]),t._v(" "),r("li",[t._v("SITL/HITL enabled but "),r("em",[t._v("pwm_out_sim")]),t._v(" driver can't start.")]),t._v(" "),r("li",[t._v("FMU startup failed.")])]),t._v(" "),r("h4",{attrs:{id:"make-file-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#make-file-system"}},[t._v("#")]),t._v(" Make File System")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1164),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Formatting microSD card.")]),t._v(" "),r("li",[t._v("Mounting failed (if formatting succeeds boot sequence will try to mount again).")]),t._v(" "),r("li",[t._v("No microSD card.")])]),t._v(" "),r("h4",{attrs:{id:"format-failed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#format-failed"}},[t._v("#")]),t._v(" Format Failed")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1165),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Formatting microSD card failed (following previous attempt to mount card).")])]),t._v(" "),r("h4",{attrs:{id:"program-px4io"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#program-px4io"}},[t._v("#")]),t._v(" Program PX4IO")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1166),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Starting to program PX4IO.")])]),t._v(" "),r("h4",{attrs:{id:"program-px4io-success"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#program-px4io-success"}},[t._v("#")]),t._v(" Program PX4IO Success")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1167),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("PX4IO programming succeeded.")])]),t._v(" "),r("h4",{attrs:{id:"program-px4io-fail"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#program-px4io-fail"}},[t._v("#")]),t._v(" Program PX4IO Fail")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1168),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("PX4IO programming failed.")]),t._v(" "),r("li",[t._v("PX4IO couldn't start.")]),t._v(" "),r("li",[t._v("AUX Mixer not found.")])]),t._v(" "),r("h2",{attrs:{id:"operational"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#operational"}},[t._v("#")]),t._v(" Operational")]),t._v(" "),r("p",[t._v("These tones/tunes are emitted during normal operation.")]),t._v(" "),r("p",[r("span",{attrs:{id:"error_tune_operational"}})]),t._v(" "),r("h4",{attrs:{id:"error-tune-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-tune-2"}},[t._v("#")]),t._v(" Error Tune")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(432),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("RC Loss")])]),t._v(" "),r("h4",{attrs:{id:"notify-positive-tone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notify-positive-tone"}},[t._v("#")]),t._v(" Notify Positive Tone")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1169),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Calibration succeeded.")]),t._v(" "),r("li",[t._v("Successful mode change.")]),t._v(" "),r("li",[t._v("Command accepted (e.g. from MAVLink command protocol).")]),t._v(" "),r("li",[t._v("Safety switch off (vehicle can be armed).")])]),t._v(" "),r("h4",{attrs:{id:"notify-neutral-tone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notify-neutral-tone"}},[t._v("#")]),t._v(" Notify Neutral Tone")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1170),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Mission is valid and has no warnings.")]),t._v(" "),r("li",[t._v("Airspeed calibration: supply more air pressure, or calibration complete.")]),t._v(" "),r("li",[t._v("Safety switch turned on/disarmed (safe to approach vehicle).")])]),t._v(" "),r("h4",{attrs:{id:"notify-negative-tone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notify-negative-tone"}},[t._v("#")]),t._v(" Notify Negative Tone")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1171),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Calibration failed.")]),t._v(" "),r("li",[t._v("Calibration already completed.")]),t._v(" "),r("li",[t._v("Mission is invalid.")]),t._v(" "),r("li",[t._v("Command denied, failed, temporarily rejected (e.g. from MAVLink command protocol).")]),t._v(" "),r("li",[t._v("Arming/disarming transition denied (e.g. pre-flight checks failed, safety not disabled, system not in manual mode).")]),t._v(" "),r("li",[t._v("Reject mode transition.")])]),t._v(" "),r("h4",{attrs:{id:"arming-warning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arming-warning"}},[t._v("#")]),t._v(" Arming Warning")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1172),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Vehicle is now armed.")])]),t._v(" "),r("h4",{attrs:{id:"arming-failure-tune"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arming-failure-tune"}},[t._v("#")]),t._v(" Arming Failure Tune")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1173),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("h4",{attrs:{id:"battery-warning-slow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-warning-slow"}},[t._v("#")]),t._v(" Battery Warning Slow")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1174),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Low battery warning ("),r("RouterLink",{attrs:{to:"/en/config/safety.html#low-battery-failsafe"}},[t._v("failsafe")]),t._v(").")],1)]),t._v(" "),r("h4",{attrs:{id:"battery-warning-fast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-warning-fast"}},[t._v("#")]),t._v(" Battery Warning Fast")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1175),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Critical low battery warning ("),r("RouterLink",{attrs:{to:"/en/config/safety.html#low-battery-failsafe"}},[t._v("failsafe")]),t._v(").")],1)]),t._v(" "),r("h4",{attrs:{id:"gps-warning-slow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-warning-slow"}},[t._v("#")]),t._v(" GPS Warning Slow")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1176),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("h4",{attrs:{id:"parachute-release"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parachute-release"}},[t._v("#")]),t._v(" Parachute Release")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1177),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("h4",{attrs:{id:"ekf-warning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ekf-warning"}},[t._v("#")]),t._v(" EKF Warning")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1178),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("h4",{attrs:{id:"baro-warning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#baro-warning"}},[t._v("#")]),t._v(" Baro Warning")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1179),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("h4",{attrs:{id:"single-beep"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#single-beep"}},[t._v("#")]),t._v(" Single Beep")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1180),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Magnetometer/Compass calibration: Notify user to start rotating vehicle.")])]),t._v(" "),r("h4",{attrs:{id:"home-set-tune"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#home-set-tune"}},[t._v("#")]),t._v(" Home Set Tune")]),t._v(" "),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:a(1181),type:"audio/mpeg"}}),t._v("\nYour browser does not support the audio element.\n")]),t._v(" "),r("ul",[r("li",[t._v("Home position initialised (first time only).")])])])}),[],!1,null,null,null);e.default=s.exports},432:function(t,e,a){t.exports=a.p+"assets/media/2_error_tune.328eda9c.mp3"}}]);