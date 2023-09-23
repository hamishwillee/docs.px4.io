(window.webpackJsonp=window.webpackJsonp||[]).push([[2109],{3787:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"release-1-12"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#release-1-12"}},[t._v("#")]),t._v(" Release 1.12")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#release-1-12"}},[t._v("Release 1.12")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#pre-releases"}},[t._v("Pre Releases")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#changes"}},[t._v("Changes")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#common"}},[t._v("Common")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#sensors"}},[t._v("Sensors")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#hardware"}},[t._v("Hardware")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#mavlink"}},[t._v("MAVLink")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#commander"}},[t._v("Commander")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#multicopter"}},[t._v("Multicopter")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#vtol"}},[t._v("VTOL")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#control"}},[t._v("Control")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[t._v("GPS")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#nuttx"}},[t._v("NuttX")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#uavcan"}},[t._v("UAVCAN")])])])])])])]),t._v(" "),r("h2",{attrs:{id:"pre-releases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pre-releases"}},[t._v("#")]),t._v(" Pre Releases")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beta 4"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beta 3"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beta 2"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases/tag/v1.12.0-beta1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beta 1"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[t._v("#")]),t._v(" Changes")]),t._v(" "),r("h3",{attrs:{id:"common"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("RTL Trigger based on remaining flight range ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16399",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16399"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Calculates time to home, on RTL, taking into account vehicle speed, wind speed, and destination distance/direction")])])]),t._v(" "),r("li",[r("strong",[t._v("Pre-emptive geofence breach ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16400",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16400"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Triggers a breach if the "),r("em",[t._v("predicted")]),t._v(" current trajectory will result in a breach, allowing the vehicle to be re-routed to a safe hold position.")])])]),t._v(" "),r("li",[r("strong",[t._v("Airframe Scripts")]),t._v(" "),r("ul",[r("li",[t._v("The syntax for setting defaults was changed and custom scripts require an update")]),t._v(" "),r("li",[t._v("See "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16796/files#diff-dcf2f5536f47f260e5e0ff3b3fd22eaef6b6c510126463d70affa0eb7bd4d3ddL20",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16796"),r("OutboundLink")],1),t._v(" for an example.")])])]),t._v(" "),r("li",[t._v("Safety (switch) defaults to off (motors are disarmed, but servos / flaps can move)")]),t._v(" "),r("li",[t._v("Safety switch is latching: Once it is disabled, it will stay disabled")]),t._v(" "),r("li",[t._v("Land detector: Expand land detection to use the ground distance if a distance sensor is present")]),t._v(" "),r("li",[t._v("Added support for IRC Ghost including telemetry")])]),t._v(" "),r("h3",{attrs:{id:"sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" Sensors")]),t._v(" "),r("ul",[r("li",[t._v("Magnetometer calibration faster and more robust\n"),r("ul",[r("li",[t._v("new soft iron calibration coefficients")]),t._v(" "),r("li",[t._v("automatically determine the rotation of external sensors")])])]),t._v(" "),r("li",[t._v("Optimized rate control sensor pipeline (minimal inner loop end-to-end latency)")])]),t._v(" "),r("h3",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("p",[t._v("The release includes new hardware support for the following boards, peripherals, and accessories:")]),t._v(" "),r("ul",[r("li",[t._v("Pixhawk FMUv6U (Read more about this spec on the "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk GitHub Repository"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("Pixhawk FMUv6X (Read more about this spec on the "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk GitHub Repository"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("CUAV X7 / X7Pro ("),r("a",{attrs:{href:"http://www.cuav.net/en/x7en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v("]")]),t._v(" "),r("li",[t._v("CUAV Nora ("),r("a",{attrs:{href:"http://www.cuav.net/en/nora/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("CUAV CAN GPS ("),r("a",{attrs:{href:"http://www.cuav.net/en/neo-3-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("SP Racing H7 Extreme ("),r("a",{attrs:{href:"http://seriouslypro.com/spracingh7extreme",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("Bitcraze Crazyflie v2.1 ("),r("a",{attrs:{href:"https://www.bitcraze.io/products/crazyflie-2-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("ARK CAN Flow ("),r("a",{attrs:{href:"https://arkelectron.com/product/ark-flow/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("li",[t._v("mRo Ctrl Zero H7 (Experimental) ("),r("a",{attrs:{href:"https://store.mrobotics.io/mRo-Control-Zero-F7-p/mro-ctrl-zero-f7.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read more about this product on the manufacturers site"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("p",[t._v("These are removed:")]),t._v(" "),r("ul",[r("li",[t._v("Removal of discontinued Intel AeroFC")])]),t._v(" "),r("h3",{attrs:{id:"mavlink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[t._v("#")]),t._v(" MAVLink")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("MAVLink Ethernet configuration ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14460",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#14460"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("MAVLink Ethernet channel settings such as UDP port, remote port and broadcast mode now can be changed dynamically via parameters.")])])]),t._v(" "),r("li",[r("strong",[t._v("Support for querying "),r("code",[t._v("COMPONENT_INFORMATION")]),t._v(" ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16039",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16039"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Parameter metadata is now automatically synchronized in combination with QGC daily.")]),t._v(" "),r("li",[t._v("This new message allows any MAVLink system to request rich hierarchical information from an autopilot, i.e., to understand which commands are supported in missions or to get parameter metadata. This message was introduced primarily to help GCS better understand autopilots (RFC: "),r("a",{attrs:{href:"https://github.com/mavlink/mavlink/issues/1339",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink#1339"),r("OutboundLink")],1),t._v(")")])])])]),t._v(" "),r("h3",{attrs:{id:"commander"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" Commander")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Commander: use control mode flags and cleanup arm/disarm ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16266",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16266"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Consolidate scattered arming requirements in arm_disarm(), and, keeps the "),r("code",[t._v("vehicle_control_mode")]),t._v(" last state in commander")])])]),t._v(" "),r("li",[r("strong",[t._v("Commander: Separate out manual control setpoint processing ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16878",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16878"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Adds a new class "),r("code",[t._v("ManualControl")]),t._v(" for handling "),r("code",[t._v("manual_control_setpoint")]),t._v(" and handles RC loss, RC override, and RC arming/disarming")])])])]),t._v(" "),r("h3",{attrs:{id:"multicopter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[t._v("#")]),t._v(" Multicopter")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("More intuitive stick feel in Position mode")])]),t._v(" "),r("ul",[r("li",[t._v("Horizontal stick input mapped to acceleration instead of velocity setpoints")]),t._v(" "),r("li",[t._v("Removes unexpected tilt changes upon reaching travel speed velocity")]),t._v(" "),r("li",[t._v("Intuitive shunting e.g. when landing")]),t._v(" "),r("li",[t._v("Opt out possible using "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),r("li",[t._v("Development: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12072",target:"_blank",rel:"noopener noreferrer"}},[t._v("First attempt"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16052",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16320",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improvements"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16786",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix zero oscillation"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16791",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix position unlock"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17078",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix invalid setpoint"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17437",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugfix high velocity pre takeoff"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Hover thrust independent velocity control gains")])]),t._v(" "),r("ul",[r("li",[t._v("Parameters "),r("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}")]),t._v(" were replaced with "),r("code",[t._v("MPC_{XY/Z}_VEL_{P/I/D}_ACC")]),t._v(", see: "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_P_ACC"}},[t._v("MPC_XY_VEL_P_ACC")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_I_ACC"}},[t._v("MPC_XY_VEL_I_ACC")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_VEL_D_ACC"}},[t._v("MPC_XY_VEL_D_ACC")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_P_ACC"}},[t._v("MPC_Z_VEL_P_ACC")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_I_ACC"}},[t._v("MPC_Z_VEL_I_ACC")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_Z_VEL_D_ACC"}},[t._v("MPC_Z_VEL_D_ACC")])],1)])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("The gains have a new meaning")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("- Scale from velocity error in $m/s$ to acceleration output in $m/s^2$\n- Existing gains need to roughly be rescaled by a factor of: $gravitational \\_ constant / hover\\_thrust$\n- Automatic parameter transition assumes 50% hover thrust: `~10m/s^2 / 50% = 20 m/s^2`. See [question](https://github.com/PX4/PX4-Autopilot/pull/14823#issuecomment-791357646)\n")])])])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Development: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14749",target:"_blank",rel:"noopener noreferrer"}},[t._v("Logic introduction"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/14823",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parameter replacement"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Improve Rounded Turns ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16376",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16376"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("ul",[r("li",[t._v("Creates a more rounded turn at waypoints in multirotor missions (using L1-style guidance logic in corners)")]),t._v(" "),r("li",[t._v("See "),r("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("Mission Mode > Inter-waypoint Trajectory")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/flying/missions.html#setting-acceptance-turning-radius"}},[t._v("Mission > Setting Acceptance/Turning Radius")])],1)])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Removal of Rattitude flight mode ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/17019",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#17019"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("ul",[r("li",[t._v("Let us know if you want it back.")])])])]),t._v(" "),r("h3",{attrs:{id:"vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("RTL improvements ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16377",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16377"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Hardens the RTL safety failsafes taking into consideration the many edge cases when trying to land, depending on the current vehicle mode (Multicopter vs Fixed Wing)")])])]),t._v(" "),r("li",[t._v("Fixed Wing / VTOL significant TECS improvements")])]),t._v(" "),r("h3",{attrs:{id:"control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" Control")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Dynamic Notch Filter updated with Gyro FFT ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/16385",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR#16385"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[t._v("Adds dynamic notch filtering to the gyro control data resulting in much smoother control")])])]),t._v(" "),r("li",[r("strong",[t._v("Multi-EKF enabled by default")]),t._v(" on stm32f7 and stm32h7 boards")])]),t._v(" "),r("h3",{attrs:{id:"gps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),r("ul",[r("li",[t._v("The GPS protocol now defaults to u-blox for faster startup, and "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL")]),t._v(" needs to be changed if another GPS is used.")],1)]),t._v(" "),r("h3",{attrs:{id:"nuttx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),r("p",[t._v("Nuttx was upgraded from "),r("a",{attrs:{href:"https://github.com/apache/incubator-nuttx/compare/nuttx-8.2..nuttx-10.0.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("8.2+ to NuttX 10.10.0+"),r("OutboundLink")],1),t._v(" (@ "),r("a",{attrs:{href:"https://github.com/apache/incubator-nuttx/commit/904a602c74dc08a100b5c2bd490807de19e73e10",target:"_blank",rel:"noopener noreferrer"}},[t._v("904a602c74dc08a100b5c2bd490807de19e73e10"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("SDCARD performance:")]),t._v(" Results in better performance on H7 Targets")]),t._v(" "),r("ul",[r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32:SDIO:Use 250 Ms Data path timeout, regardless of Card Clock frequency")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:SDMMC:Use 250 Ms Data path timeout, regardless of Card Clock frequency")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f7:SDMMC:Use 250 Ms Data path timeout, regardless of Card Clock frequency")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] Fixes race condition in event wait logic of SDMMC driver.")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] mmcsd:Stuck in 1-bit mode, Removed CONFIG_ARCH_HAVE_SDIO_DELAYED_INVLDT")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Ethernet stability:")])]),t._v(" "),r("ul",[r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32x7:Ethernet Fixed hardfaults, from too big frames")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32:Ethernet Fix too big frames")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Boot up stability")]),t._v(" V5-V6X ensuring the LSE (RTC) oscillator is started")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:lse fix Kconfig help text")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f7:lse Use Kconfig values directly")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:Add DBGMCU")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f7:Add option to auto select LSE CAPABILITY")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:Add option to auto select LSE CAPABILITY")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")])])])])])]),t._v(" "),r("p",[t._v("This Knob will cycle through the correct*\nvalues from low to high. To avoid damaging\nthe crystal. We want to use the lowest setting\nthat gets the OSC running. See app note AN2867\n*It will take into account the rev of the silicon\nand use the correct code points to achieve the drive\nstrength. See Eratta ES0392 Rev 7 2.2.14 LSE oscillator\ndriving capability selection bits are swapped.\n:::")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Driver changes")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] drivers/serial: fix Rx interrupt enable for cdcacm")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] binnfmt:Fix return before close ELF fd")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f7:Allow for reuse of the OTG_ID GPIO")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f7:SDMMC fix reset of do_gpio")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7: serial: use dma tx semaphore as resource holder")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:SDMMC fix reset of do_gpio")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:Serial Add RX and TX DMA")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:Allow for reuse of the OTG_ID GPIO")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] Kinetis:kinetis:Replace DMA")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] kinetis:Serial use eDMA")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] kinetis:SPI use eDMA")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] Kinetis:Serail No DMA Poll needed")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] libc/stdio: Preallocate the stdin, stdout and stderr For targets without consoles.")])])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("FlexCan fixes")])]),t._v(" "),r("ul",[r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("][flexcan] Correct reset state for CTRL1 register")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("][flexcan] Fix TX drop #2792 and correctly set CAN timings to non-zeroed registers")]),t._v(" "),r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] FlexCAN Fix TX abort process")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Support for CAN bootloader")])]),t._v(" "),r("ul",[r("li",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] s32k1xx:Support ramfunc")])])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("STM32F412 cleanup")])])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f412:Corrected Pin count")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32f412:Replaced Kludged pinmap with one for SoC")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32412: Fixes pinmap CAN1")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Security patches")])])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] tcp: Remove incomplete support for TCP reassembly")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] net/tcp/tcp_input.c: Correct bad check of urgent data length")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] libc: Add additional checks to malloc realloc and memalign")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("IMXRT fixes")])])]),t._v(" "),r("li",[r("p",[t._v("Add Single wire and proper parity settings to IMXRT to support sbus etal.")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] imxrt:serial support single-wire mode")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] imxrt:imxrt_lowputc Fixed parity settings.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("STM32H7 improvements")])])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:SPI Fix 16 bit SPI mode")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:DMA BDMA does not auto disabled on completion")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] Fix HEAP clobbering static data in SRAM4")])]),t._v(" "),r("li",[r("p",[t._v("["),r("strong",[t._v("BACKPORT")]),t._v("] stm32h7:SDMMC fix reset of do_gpio")])])]),t._v(" "),r("h3",{attrs:{id:"uavcan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uavcan"}},[t._v("#")]),t._v(" UAVCAN")]),t._v(" "),r("ul",[r("li",[t._v("UAVCANv0: Although the fundamental features like Firmware upgrades and parameter sync of CAN nodes have been implemented for over 5 years, we refreshed support now that finally, devices are on the market. Typical CAN GPS, airspeed and power modules are supported")]),t._v(" "),r("li",[t._v("UAVCANv0 Node: PX4 supported building nodes for many years - now we support building specific targets like the CUAV GPS units")]),t._v(" "),r("li",[t._v("UAVCANv1: Initial alpha of a complete end-to-end implementation")])])])}),[],!1,null,null,null);e.default=a.exports}}]);