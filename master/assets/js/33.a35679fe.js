(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1188:function(t,e,o){t.exports=o.p+"assets/media/1_startup_tone.0ccaeec9.mp3"},1189:function(t,e,o){t.exports=o.p+"assets/media/16_make_fs.c8bb124e.mp3"},1190:function(t,e,o){t.exports=o.p+"assets/media/17_format_failed.cf47ae6e.mp3"},1191:function(t,e,o){t.exports=o.p+"assets/media/18_program_px4io.5a68a888.mp3"},1192:function(t,e,o){t.exports=o.p+"assets/media/19_program_px4io_success.898f5c0b.mp3"},1193:function(t,e,o){t.exports=o.p+"assets/media/20_program_px4io_fail.89749277.mp3"},1194:function(t,e,o){t.exports=o.p+"assets/media/3_notify_positive_tone.406154e9.mp3"},1195:function(t,e,o){t.exports=o.p+"assets/media/4_notify_neutral_tone.86353d53.mp3"},1196:function(t,e,o){t.exports=o.p+"assets/media/5_notify_negative_tone.cc788397.mp3"},1197:function(t,e,o){t.exports=o.p+"assets/media/6_arming_warning.cf27f57f.mp3"},1198:function(t,e,o){t.exports=o.p+"assets/media/10_arming_failure_tune.755f3d6e.mp3"},1199:function(t,e,o){t.exports=o.p+"assets/media/7_battery_warning_slow.a804958e.mp3"},1200:function(t,e,o){t.exports=o.p+"assets/media/8_battery_warning_fast.da0e8a39.mp3"},1201:function(t,e,o){t.exports=o.p+"assets/media/9_gps_warning_slow.f9b36b31.mp3"},1202:function(t,e,o){t.exports=o.p+"assets/media/11_parachute_release.71624fb6.mp3"},1203:function(t,e,o){t.exports=o.p+"assets/media/12_ekf_warning.71981372.mp3"},1204:function(t,e,o){t.exports=o.p+"assets/media/13_baro_warning.141e4b12.mp3"},1205:function(t,e,o){t.exports=o.p+"assets/media/14_single_beep.66b57ba2.mp3"},1206:function(t,e,o){t.exports=o.p+"assets/media/15_home_set_tune.bb49c619.mp3"},3074:function(t,e,o){"use strict";o.r(e);var r=o(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"蜂鸣器含义-pixhawk系列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器含义-pixhawk系列"}},[t._v("#")]),t._v(" 蜂鸣器含义（Pixhawk系列）")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk系列飞控")]),t._v(" 使用蜂鸣器 "),r("RouterLink",{attrs:{to:"/zh/getting_started/led_meanings.html"}},[t._v("LED")]),t._v(" 来显示飞机的飞行状态和飞行事件（比如，解锁是否成功，低电量警告）。")],1),t._v(" "),r("p",[t._v("下面列出一组标准蜂鸣器声音。")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[r("strong",[t._v("Developers:")]),t._v(" Tunes are defined in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("/lib/tunes/tune_definition.desc"),r("OutboundLink")],1),t._v(" and can be tested using the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_system.html#tune-control"}},[t._v("tune-control")]),t._v(" module.")],1)]),t._v(" "),r("h2",{attrs:{id:"启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),r("p",[t._v("These tunes are played during the boot sequence. ")]),t._v(" "),r("h4",{attrs:{id:"启动声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 启动声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1188),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("SD卡成功挂载（启动过程）。")])]),t._v(" "),r("h4",{attrs:{id:"错误声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 错误声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(437),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("硬件错误导致系统重启。")]),t._v(" "),r("li",[t._v("系统设置使用PX4IO但IO不存在。")]),t._v(" "),r("li",[t._v("UAVCAN已启用，但驱动无法启动。")]),t._v(" "),r("li",[t._v("SITL/HITL已启用，但是 "),r("em",[t._v("pwm仿真输出")]),t._v(" 驱动无法启动。")]),t._v(" "),r("li",[t._v("FMU启动失败。")])]),t._v(" "),r("h4",{attrs:{id:"创建文件系统-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建文件系统-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 创建文件系统"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1189),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("格式化SD卡。")]),t._v(" "),r("li",[t._v("挂载失败（如果格式化成功，启动程序将尝试再次挂载）。")]),t._v(" "),r("li",[t._v("未安装SD卡。")])]),t._v(" "),r("h4",{attrs:{id:"格式化失败-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#格式化失败-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 格式化失败"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1190),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("格式化SD卡失败（曾经试图挂载SD卡）。")])]),t._v(" "),r("h4",{attrs:{id:"执行px4io-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行px4io-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 执行PX4IO"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1191),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("开始执行PX4IO程序。")])]),t._v(" "),r("h4",{attrs:{id:"px4io执行成功-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4io执行成功-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" PX4IO执行成功"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1192),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("PX4IO程序执行成功。")])]),t._v(" "),r("h4",{attrs:{id:"px4io程序执行失败-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4io程序执行失败-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" PX4IO程序执行失败"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1193),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("PX4IO程序执行失败。")]),t._v(" "),r("li",[t._v("PX4IO无法执行。")]),t._v(" "),r("li",[t._v("未找到AUX混控器。")])]),t._v(" "),r("h2",{attrs:{id:"操作过程中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作过程中"}},[t._v("#")]),t._v(" 操作过程中")]),t._v(" "),r("p",[t._v("These tones/tunes are emitted during normal operation.")]),t._v(" "),r("p",[r("span",{attrs:{id:"error_tune_operational"}})]),t._v(" "),r("h4",{attrs:{id:"错误声音-your-browser-does-not-support-the-audio-element-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误声音-your-browser-does-not-support-the-audio-element-2"}},[t._v("#")]),t._v(" 错误声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(437),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("遥控丢失")])]),t._v(" "),r("h4",{attrs:{id:"正常通知声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正常通知声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 正常通知声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1194),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("校准成功。")]),t._v(" "),r("li",[t._v("飞行模式成功改变。")]),t._v(" "),r("li",[t._v("指令接收（例如，接收MAVlink命令协议）。")]),t._v(" "),r("li",[t._v("安全开关关闭（飞行器已经解锁）。")])]),t._v(" "),r("h4",{attrs:{id:"中立通知声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中立通知声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 中立通知声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1195),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("任务有效，没有警告。")]),t._v(" "),r("li",[t._v("空速校准：提供更多气压或校准完成。")]),t._v(" "),r("li",[t._v("安全开关打开/未解锁（可以安全靠近飞行器）。")])]),t._v(" "),r("h4",{attrs:{id:"负面通知声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#负面通知声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 负面通知声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1196),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("校准失败。")]),t._v(" "),r("li",[t._v("校准已经完成。")]),t._v(" "),r("li",[t._v("任务无效。")]),t._v(" "),r("li",[t._v("指令拒绝，失败，暂时拒绝（例如，来自MAVLink命令协议）。")]),t._v(" "),r("li",[t._v("解锁/加锁过程被拒绝（例如，起飞前检查失败，安全未禁用，系统不在手动模式）。")]),t._v(" "),r("li",[t._v("拒绝模式过渡。")])]),t._v(" "),r("h4",{attrs:{id:"加锁警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加锁警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 加锁警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1197),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("飞行器正在加锁。")])]),t._v(" "),r("h4",{attrs:{id:"加锁失败声音-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加锁失败声音-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 加锁失败声音"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1198),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("h4",{attrs:{id:"电池低电量警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电池低电量警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 电池低电量警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1199),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("低电量警告（"),r("RouterLink",{attrs:{to:"/zh/config/safety.html#low-battery-failsafe"}},[t._v("保护模式")]),t._v("）。")],1)]),t._v(" "),r("h4",{attrs:{id:"电量消耗过快警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电量消耗过快警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 电量消耗过快警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1200),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("严重低电量警告（"),r("RouterLink",{attrs:{to:"/zh/config/safety.html#low-battery-failsafe"}},[t._v("保护模式")]),t._v("）。")],1)]),t._v(" "),r("h4",{attrs:{id:"gps信号弱警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps信号弱警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" GPS信号弱警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1201),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("h4",{attrs:{id:"降落伞释放-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#降落伞释放-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 降落伞释放"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1202),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("h4",{attrs:{id:"ekf警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ekf警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" EKF警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1203),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("h4",{attrs:{id:"气压警告-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#气压警告-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 气压警告"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1204),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("h4",{attrs:{id:"蜂鸣器响一声-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器响一声-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" 蜂鸣器响一声"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1205),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("地磁计/罗盘校准：提示使用者开始旋转飞行器。")])]),t._v(" "),r("h4",{attrs:{id:"home-set-tune-your-browser-does-not-support-the-audio-element"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#home-set-tune-your-browser-does-not-support-the-audio-element"}},[t._v("#")]),t._v(" Home Set Tune"),r("audio",{attrs:{controls:""}},[r("source",{attrs:{src:o(1206),type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),t._v(" "),r("ul",[r("li",[t._v("初始化起飞位置（只在第一次）。")])])])}),[],!1,null,null,null);e.default=s.exports},437:function(t,e,o){t.exports=o.p+"assets/media/2_error_tune.328eda9c.mp3"}}]);