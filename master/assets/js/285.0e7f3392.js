(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1128:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_survey-in.9a497c55.png"},1129:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_streaming.76200b22.png"},1130:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_gps_status.ac046992.png"},1131:function(t,e,r){t.exports=r.p+"assets/img/settings_view_general_rtk_gps.74da8db3.jpg"},2495:function(t,e,r){"use strict";r.r(e);var o=r(18),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"rtk-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[t._v("#")]),t._v(" RTK GPS")]),t._v(" "),o("p",[t._v("实时差分可以将 GNSS/GPS 的精度提高到厘米级。 装备 RTK 后可以将 PX4 应用到需要精确定位的精确测绘中。")]),t._v(" "),o("p",[t._v("你需要：")]),t._v(" "),o("ul",[o("li",[t._v("一对"),o("a",{attrs:{href:"#supported-rtk-devices"}},[t._v("RTK GPS 设备")]),t._v("（地面站和移动站）")]),t._v(" "),o("li",[t._v("一台装有 QGroundControl 的 "),o("em",[t._v("PC 或笔记本")]),t._v("（Android/iOS 的 QGroundControl 地面站不支持 RTK）")]),t._v(" "),o("li",[t._v("一架连接有 WiFi 或数传的飞机")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),o("em",[t._v("QGroundControl")]),t._v("理论上可以在多台飞机启用 RTK GPS（每台设备上都安装一个移动站）。 在编写本文时, 此用发还未进行测试。")])]),t._v(" "),o("h2",{attrs:{id:"支持的-rtk-设备"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#支持的-rtk-设备"}},[t._v("#")]),t._v(" 支持的 RTK 设备")]),t._v(" "),o("p",[t._v("PX4 supports the "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/neo-m8p",target:"_blank",rel:"noopener noreferrer"}},[t._v("u-blox M8P"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("u-blox F9P"),o("OutboundLink")],1),t._v(" and the "),o("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trimble MB-Two"),o("OutboundLink")],1),t._v(" GPS and products that incorporate it.")]),t._v(" "),o("p",[t._v("The following RTK-compatible devices have been tested.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK GPS")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_drotek_xl.html"}},[t._v("Drotek XL RTK GPS")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_fem_mini2.html"}},[t._v("Femtones MINI2 Receiver")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")]),t._v(" (F9P)")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+ RTK GPS")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P GNSS")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[t._v("Holybro H-RTK M8P GNSS")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),o("OutboundLink")],1),t._v(" (www.sparkfun.com)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://store-drotek.com/911-1010-sirius-rtk-gnss-rover-f9p.html#/158-sensor-no_magnetometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("SIRIUS RTK GNSS ROVER (F9P)"),o("OutboundLink")],1),t._v(" (store-drotek.com)")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")])],1)]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v("有一些 RTK 模块只能作为基站或移动站，有的则可以两用。")])]),t._v(" "),o("h2",{attrs:{id:"硬件安装"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),o("h3",{attrs:{id:"rtk-移动站-飞机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-移动站-飞机"}},[t._v("#")]),t._v(" RTK 移动站（飞机）")]),t._v(" "),o("p",[t._v("Connect the vehicle-based module to the flight controller's GPS port (in the same way as any other GPS module).")]),t._v(" "),o("p",[t._v("The actual cables/connectors required will depend on the flight controller and selected RTK module (see "),o("a",{attrs:{href:"#supported-rtk-devices"}},[t._v("documentation for the selected device")]),t._v(" for more information).")]),t._v(" "),o("h3",{attrs:{id:"rtk-基站-地面端"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-基站-地面端"}},[t._v("#")]),t._v(" RTK 基站（地面端）")]),t._v(" "),o("p",[t._v("Connect the base module to "),o("em",[t._v("QGroundControl")]),t._v(" via USB. The base module must not be moved while it is being used.")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v("选择一个不会移动的地方，上方开阔，最好避开建筑物。 使用三脚架或安装在屋顶，效果更好。")])]),t._v(" "),o("h3",{attrs:{id:"电台-wifi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#电台-wifi"}},[t._v("#")]),t._v(" 电台/WiFi")]),t._v(" "),o("p",[t._v("The vehicle and ground control laptop must be connected via "),o("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("wifi or a radio telemetry link")]),t._v(".")],1),t._v(" "),o("p",[t._v("The link "),o("em",[t._v("must")]),t._v(" use the MAVLink2 protocol as it makes more efficient use of the channel. This should be set by default, but if not, follow the "),o("a",{attrs:{href:"#mavlink2"}},[t._v("MAVLink2 configuration instructions")]),t._v(" below.")]),t._v(" "),o("h2",{attrs:{id:"rtk-连接步骤"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-连接步骤"}},[t._v("#")]),t._v(" RTK 连接步骤")]),t._v(" "),o("p",[t._v("The RTK GPS connection is essentially plug and play:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("打开"),o("em",[t._v("QGroundControl")]),t._v("，使用 USB 连接基站的 RTK GPS 到地面站。 电脑会自动识别设备。")])]),t._v(" "),o("li",[o("p",[t._v("启动飞机，确保飞机连接上"),o("em",[t._v("QGroundControl")]),t._v("地面站。")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v("当 RTK GPS 设备连接上，在上面工具栏的正常显示GPS的位置，会显示 RTK GPS 的状态。 当 RTK 正在被设置，会显示为红色，RTK GPS 激活后会变为白色。 点击图标，可以查看当前状态和 RTK 的精度。")])])]),t._v(" "),o("li",[o("p",[t._v("然后 "),o("em",[t._v("QGroundControl")]),t._v(' 开始设置 RTK (称为 "测量")。')]),t._v(" "),o("p",[t._v("测量是一个获得基站准确位置的设置过程。 这个过程通常会需要几分钟（在达到"),o("a",{attrs:{href:"#rtk-gps-settings"}},[t._v("RTK 设置")]),t._v("中指定的最小时间和精度后结束）。")]),t._v(" "),o("p",[t._v("你也可以点击 RTK状态按钮查看。")]),t._v(" "),o("img",{attrs:{src:r(1128),width:"200px",title:"测量"}})]),t._v(" "),o("li",[o("p",[t._v("测量完成：")])])]),t._v(" "),o("ul",[o("li",[o("p",[t._v("RTK GPS 图标变为白色，"),o("em",[t._v("QGroundControl")]),t._v("开始传送位置数据到飞机。")]),t._v(" "),o("img",{attrs:{src:r(1129),width:"200px",title:"RTK数据流"}})]),t._v(" "),o("li",[o("p",[t._v("飞机的 GPS 切换到 RTK 模式。 新的模式会显示在"),o("em",[t._v("普通")]),t._v("GPS 状态按钮的位置（"),o("code",[t._v("3D RTK GPS 锁定")]),t._v("）：")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1130),alt:"RTK GPS状态"}})])])]),t._v(" "),o("h2",{attrs:{id:"px4-可用的设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-可用的设置"}},[t._v("#")]),t._v(" PX4 可用的设置")]),t._v(" "),o("p",[t._v("The following settings may need to be changed (using "),o("em",[t._v("QGroundControl")]),t._v(").")]),t._v(" "),o("h3",{attrs:{id:"rtk-gps-设置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-设置"}},[t._v("#")]),t._v(" RTK GPS 设置")]),t._v(" "),o("p",[t._v("The RTK GPS settings are specified in the "),o("em",[t._v("QGroundControl")]),t._v(" "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/General.html#rtk_gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("General Settings"),o("OutboundLink")],1),t._v(" ("),o("strong",[t._v("SettingsView > General Settings > RTK GPS")]),t._v(").")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1131),alt:"RTK GPS Setup"}})]),t._v(" "),o("p",[t._v('These settings define the minimum duration and minimum accuracy for completing the RTK GPS setup process (known as "Survey-In).')]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" You can save and reuse a base position in order to save time: perform Survey-In once, select "),o("em",[t._v("Use Specified Base Position")]),t._v(" and press "),o("strong",[t._v("Save Current Base Position")]),t._v(" to copy in the values for the last survey. The values will then persist across QGC reboots until they are changed.")])]),t._v(" "),o("h3",{attrs:{id:"mavlink2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink2"}},[t._v("#")]),t._v(" MAVLink2")]),t._v(" "),o("p",[t._v("The MAVLink2 protocol must be used because it makes more efficient use of lower-bandwidth channels. This should be enabled by default on recent builds.")]),t._v(" "),o("p",[t._v("To ensure MAVLink2 is used:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("将遥测模块固件更新到最新版本 (请参阅 QGroundControl> 设置 > 固件 "),t._v(")。")])]),o("p"),t._v(" "),o("ul",[o("li",[t._v("将 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_PROTO_VER"}},[t._v("MAV_PROTO_VER")]),t._v(" 设置为 2 (请参阅 < 1>QGroundControl 设置 > 参数 </1 >)")],1)])]),t._v(" "),o("h3",{attrs:{id:"调试"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),o("p",[t._v("You may also need to tune some parameters as the default parameters are tuned assuming a GPS accuracy in the order of meters, not centimeters. For example, you can decrease "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_V_NOISE"}},[t._v("EKF2_GPS_V_NOISE")]),t._v(" and "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_GPS_P_NOISE"}},[t._v("EKF2_GPS_P_NOISE")]),t._v(" to 0.2.")],1),t._v(" "),o("h3",{attrs:{id:"use-rtk-gps-for-yaw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-rtk-gps-for-yaw"}},[t._v("#")]),t._v(" Use RTK GPS for Yaw")]),t._v(" "),o("p",[t._v("Some RTK GPS units (i.e. with multiple antennas) can output a yaw angle, which can be used instead of the heading from the magnetic compass. To enable this, set bit position 7 in "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" to 1 (add 128 to the parameter value).")],1),t._v(" "),o("h3",{attrs:{id:"dual-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dual-receivers"}},[t._v("#")]),t._v(" Dual Receivers")]),t._v(" "),o("p",[t._v("A second GPS receiver can be used as a backup (either RTK or non RTK). See the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#gps"}},[t._v("EKF2 GPS Configuration")]),t._v(" section.")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);