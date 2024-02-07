(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{2012:function(t,a,e){"use strict";e.r(a);var n=e(19),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"adding-a-frame-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-frame-configuration"}},[t._v("#")]),t._v(" Adding a Frame Configuration")]),t._v(" "),n("p",[t._v("PX4 "),n("a",{attrs:{href:"#configuration-file-overview"}},[t._v("frame configuration files")]),t._v(" are shell scripts that set up some (or all) of the parameters, controllers and apps needed for a particular vehicle frame, such as a quadcopter, ground vehicle, or boat.\nThese scripts are executed when the corresponding "),n("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("airframe is selected and applied")]),t._v(" in "),n("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),n("p",[t._v("The configuration files that are compiled into firmware for NuttX targets are located in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v(" folder (configuration files for POSIX simulators are stored in "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d-posix/airframes",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),n("OutboundLink")],1),t._v(').\nThe folder contains both complete and full configurations for specific vehicles, and partial "generic configurations" for different vehicle types.\nThe generic configurations are often used as the starting point for creating new configuration files.')]),t._v(" "),n("p",[t._v("In addition, a frame configuration file can also be loaded from an SD card.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v('You can also "tweak" the current frame configuration using text files on the SD card.\nThis is covered in '),n("RouterLink",{attrs:{to:"/en/concept/system_startup.html#customizing-the-system-startup"}},[t._v("System Startup > Customizing the System Startup")]),t._v(" page.")],1)]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("To determine which parameters/values need to be set in the configuration file, you can first assign a generic airframe and tune the vehicle, and then use "),n("RouterLink",{attrs:{to:"/en/modules/modules_command.html#param"}},[n("code",[t._v("param show-for-airframe")])]),t._v(" to list the parameters that changed.")],1)]),t._v(" "),n("h2",{attrs:{id:"developing-a-frame-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-frame-configuration"}},[t._v("#")]),t._v(" Developing a Frame Configuration")]),t._v(" "),n("p",[t._v("The recommended process for developing a new frame configuration is:")]),t._v(" "),n("ol",[n("li",[t._v('Start by selecting an appropriate "generic configuration" for the target vehicle type in QGC, such as '),n("em",[t._v("Generic Quadcopter")]),t._v(".")]),t._v(" "),n("li",[t._v("Configure the "),n("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("geometry and actuator outputs")]),t._v(".")],1),t._v(" "),n("li",[t._v("Perform other "),n("RouterLink",{attrs:{to:"/en/config/"}},[t._v("basic configuration")]),t._v(".")],1),t._v(" "),n("li",[t._v("Tune the vehicle.")]),t._v(" "),n("li",[t._v("Run the "),n("RouterLink",{attrs:{to:"/en/modules/modules_command.html#param"}},[n("code",[t._v("param show-for-airframe")])]),t._v(" console command to list the parameter difference compared to the original generic airfame.")],1)]),t._v(" "),n("p",[t._v("Once you have the parameters you can create a new frame configuration file by copying the configuration file for the generic configuration, and appending the new parameters.")]),t._v(" "),n("p",[t._v("Alternatively you can just append the modified parameters to the startup configuration files described in "),n("RouterLink",{attrs:{to:"/en/concept/system_startup.html#customizing-the-system-startup"}},[t._v("System Startup > Customizing the System Startup")]),t._v(' ("tweaking the generic configuration").')],1),t._v(" "),n("h2",{attrs:{id:"how-to-add-a-configuration-to-firmware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-a-configuration-to-firmware"}},[t._v("#")]),t._v(" How to add a Configuration to Firmware")]),t._v(" "),n("p",[t._v("To add a frame configuration to firmware:")]),t._v(" "),n("ol",[n("li",[t._v("Create a new config file in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d/airframes",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/airframes"),n("OutboundLink")],1),t._v(" folder.\n"),n("ul",[n("li",[t._v("Give it a short descriptive filename and prepend the filename with an unused autostart ID (for example, "),n("code",[t._v("1033092_superfast_vtol")]),t._v(").")]),t._v(" "),n("li",[t._v("Update the file with configuration parameters and apps (see section above).")])])]),t._v(" "),n("li",[t._v("Add the name of the new frame config file to the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/airframes/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),n("OutboundLink")],1),t._v(" in the relevant section for the type of vehicle")]),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Build and upload")]),t._v(" the software.")],1)]),t._v(" "),n("h2",{attrs:{id:"how-to-add-a-configuration-to-an-sd-card"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-a-configuration-to-an-sd-card"}},[t._v("#")]),t._v(" How to add a Configuration to an SD Card")]),t._v(" "),n("p",[t._v("A frame configuration file to be launched from SD card is the same as one stored in firmware.")]),t._v(" "),n("p",[t._v("To make PX4 launch with a frame configuration, renamed it to "),n("code",[t._v("rc.autostart")]),t._v(" and copy it to the SD card at "),n("code",[t._v("/ext_autostart/rc.autostart")]),t._v(".\nPX4 will find any linked files in firmware.")]),t._v(" "),n("h2",{attrs:{id:"configuration-file-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-overview"}},[t._v("#")]),t._v(" Configuration File Overview")]),t._v(" "),n("p",[t._v("The configuration file consists of several main blocks:")]),t._v(" "),n("ul",[n("li",[t._v("Documentation (used in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(" and "),n("em",[t._v("QGroundControl")]),t._v(").\nAirframe-specific parameter settings\n"),n("ul",[n("li",[t._v("The configuration and geometry using "),n("RouterLink",{attrs:{to:"/en/concept/control_allocation.html"}},[t._v("control allocation")]),t._v(" parameters")],1),t._v(" "),n("li",[n("a",{attrs:{href:"#tuning-gains"}},[t._v("Tuning gains")])])])],1),t._v(" "),n("li",[t._v("The controllers and apps it should start, such as multicopter or fixed-wing controllers, land detectors etc.")])]),t._v(" "),n("p",[t._v("These aspects are mostly independent, which means that many configurations share the same physical layout of the airframe, start the same applications and differ most in their tuning gains.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("New frame configuration files are only automatically added to the build system after a clean build (run "),n("code",[t._v("make clean")]),t._v(").")])]),t._v(" "),n("h3",{attrs:{id:"example-generic-quadcopter-frame-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-generic-quadcopter-frame-config"}},[t._v("#")]),t._v(" Example - Generic Quadcopter Frame Config")]),t._v(" "),n("p",[t._v("The configuration file for a generic Quad X copter is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/airframes/4001_quad_x",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v(").\nThis is very simple, because it defines only the minimal setup common to all quadcopters.")]),t._v(" "),n("p",[t._v("The first line is a shebang, which tells the NuttX operating system (on which PX4 runs) that the configuration file is an executable shell script.")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("#"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sh\n")])])]),n("p",[t._v("This is followed by the frame documentation.\nThe "),n("code",[t._v("@name")]),t._v(", "),n("code",[t._v("@type")]),t._v(" and "),n("code",[t._v("@class")]),t._v(" are used to identify and group the frame in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("API Reference")]),t._v(" and QGroundControl Airframe Selection.")],1),t._v(" "),n("div",{staticClass:"language-plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("# @name Generic Quadcopter\n#\n# @type Quadrotor x\n# @class Copter\n#\n# @maintainer Lorenz Meier <lorenz@px4.io>\n#\n")])])]),n("p",[t._v("The next line imports generic parameters that are appropriate for all vehicles of the specified type (see "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/rc.mc_defaults",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/rc.mc_defaults"),n("OutboundLink")],1),t._v(").")]),t._v(" "),n("div",{staticClass:"language-plain extra-class"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v(". ${R}etc/init.d/rc.mc_defaults\n")])])]),n("p",[t._v("Finally the file lists the control allocation parameters (starting with "),n("code",[t._v("CA_")]),t._v(" that define the default geometry for the frame.\nThese may be modified for your frame geometry in the "),n("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("Actuators Configuration")]),t._v(", and output mappings may be added.")],1),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("param set-default CA_ROTOR_COUNT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nparam set-default CA_ROTOR0_PX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\nparam set-default CA_ROTOR0_PY "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\nparam set-default CA_ROTOR1_PX -0.15\nparam set-default CA_ROTOR1_PY -0.15\nparam set-default CA_ROTOR2_PX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\nparam set-default CA_ROTOR2_PY -0.15\nparam set-default CA_ROTOR2_KM -0.05\nparam set-default CA_ROTOR3_PX -0.15\nparam set-default CA_ROTOR3_PY "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\nparam set-default CA_ROTOR3_KM -0.05\n")])])]),n("h3",{attrs:{id:"example-babyshark-vtol-complete-vehicle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-babyshark-vtol-complete-vehicle"}},[t._v("#")]),t._v(" Example - Babyshark VTOL Complete Vehicle")]),t._v(" "),n("p",[t._v("A more complicated configuration file for a complete vehicle is provided below.\nThis is the configuration for the Baby Shark "),n("RouterLink",{attrs:{to:"/en/frames_vtol/standardvtol.html"}},[t._v("Standard VTOL")]),t._v(" ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/airframes/13014_vtol_babyshark",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v(").")],1),t._v(" "),n("p",[t._v("The shebang and documentation sections are similar to those for the generic frame, but here we also document what "),n("code",[t._v("outputs")]),t._v(" are mapped to each motor and actuator.\nNote that these outputs are documentation only; the actual mapping is done using parameters.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/sh")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @name BabyShark VTOL")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @type Standard VTOL")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @class VTOL")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @maintainer Silvan Fuhrer <silvan@auterion.com>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Motor1 motor 1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Motor2 motor 2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Motor3 motor 3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Motor4 motor 4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Motor5 Pusher motor")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Servo1 Ailerons")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Servo2 A-tail left")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output Servo3 A-tail right")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @board px4_fmu-v2 exclude")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @board bitcraze_crazyflie exclude")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @board holybro_kakutef7 exclude")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),n("p",[t._v("As for the generic frame, we then include the generic VTOL defaults.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${R}")]),t._v("etc/init.d/rc.vtol_defaults\n")])])]),n("p",[t._v("Then we define configuration parameters and "),n("a",{attrs:{href:"#tuning-gains"}},[t._v("tuning gains")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("param set-default MAV_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\n\nparam set-default BAT1_N_CELLS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n\nparam set-default FW_AIRSPD_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\nparam set-default FW_AIRSPD_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("\nparam set-default FW_AIRSPD_TRIM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\nparam set-default FW_PN_R_SLEW_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\nparam set-default FW_PSP_OFF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default FW_P_LIM_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nparam set-default FW_P_LIM_MIN -25\nparam set-default FW_RLL_TO_YAW_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v("\nparam set-default FW_RR_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.08")]),t._v("\nparam set-default FW_R_LIM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("45")]),t._v("\nparam set-default FW_R_RMAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\nparam set-default FW_THR_TRIM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.65")]),t._v("\nparam set-default FW_THR_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\nparam set-default FW_THR_SLEW_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nparam set-default FW_T_HRATE_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nparam set-default FW_T_SINK_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_T_SINK_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default FW_YR_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\n\nparam set-default IMU_DGYRO_CUTOFF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default MC_PITCHRATE_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\nparam set-default MC_ROLLRATE_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\nparam set-default MC_YAWRATE_I "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.15")]),t._v("\nparam set-default MC_YAWRATE_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\nparam set-default MC_YAWRATE_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n\nparam set-default MPC_ACC_DOWN_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nparam set-default MPC_ACC_HOR_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nparam set-default MPC_ACC_UP_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default MC_AIRMODE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default MPC_JERK_AUTO "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nparam set-default MPC_LAND_SPEED "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default MPC_MAN_TILT_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\nparam set-default MPC_MAN_Y_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\nparam set-default COM_SPOOLUP_TIME "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("\nparam set-default MPC_THR_HOVER "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.45")]),t._v("\nparam set-default MPC_TILTMAX_AIR "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\nparam set-default MPC_TKO_RAMP_T "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.8")]),t._v("\nparam set-default MPC_TKO_SPEED "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default MPC_VEL_MANUAL "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default MPC_XY_CRUISE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default MPC_XY_VEL_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.5")]),t._v("\nparam set-default MPC_YAWRAUTO_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\nparam set-default MPC_Z_VEL_MAX_UP "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\nparam set-default NAV_ACC_RAD "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nparam set-default SENS_BOARD_ROT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nparam set-default VT_ARSP_BLEND "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nparam set-default VT_ARSP_TRANS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\nparam set-default VT_B_DEC_MSS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),t._v("\nparam set-default VT_B_TRANS_DUR "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nparam set-default VT_ELEV_MC_LOCK "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nparam set-default VT_FWD_THRUST_SC "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v("\nparam set-default VT_F_TR_OL_TM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nparam set-default VT_PSHER_SLEW "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\nparam set-default VT_TRANS_MIN_TM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nparam set-default VT_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),n("p",[t._v("Last of all, the file defines the control allocation parameters for the geometry and the parameters that set which outputs map to different motors and servos.")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("param set-default CA_AIRFRAME "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nparam set-default CA_ROTOR_COUNT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nparam set-default CA_ROTOR0_PX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default CA_ROTOR0_PY "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default CA_ROTOR1_PX -1\nparam set-default CA_ROTOR1_PY -1\nparam set-default CA_ROTOR2_PX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default CA_ROTOR2_PY -1\nparam set-default CA_ROTOR2_KM -0.05\nparam set-default CA_ROTOR3_PX -1\nparam set-default CA_ROTOR3_PY "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nparam set-default CA_ROTOR3_KM -0.05\nparam set-default CA_ROTOR4_AX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\nparam set-default CA_ROTOR4_AZ "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v("\n\nparam set-default CA_SV_CS_COUNT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nparam set-default CA_SV_CS0_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default CA_SV_CS0_TRQ_R "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\nparam set-default CA_SV_CS1_TRQ_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5000")]),t._v("\nparam set-default CA_SV_CS1_TRQ_R "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0000")]),t._v("\nparam set-default CA_SV_CS1_TRQ_Y -0.5000\nparam set-default CA_SV_CS1_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nparam set-default CA_SV_CS2_TRQ_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5000")]),t._v("\nparam set-default CA_SV_CS2_TRQ_Y "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5000")]),t._v("\nparam set-default CA_SV_CS2_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n\nparam set-default PWM_MAIN_FUNC1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v("\nparam set-default PWM_MAIN_FUNC2 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v("\nparam set-default PWM_MAIN_FUNC3 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("105")]),t._v("\nparam set-default PWM_MAIN_FUNC4 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("203")]),t._v("\nparam set-default PWM_MAIN_FUNC5 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\nparam set-default PWM_MAIN_FUNC6 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v("\nparam set-default PWM_MAIN_FUNC7 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("103")]),t._v("\nparam set-default PWM_MAIN_FUNC8 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("104")]),t._v("\n\nparam set-default PWM_MAIN_TIM0 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\nparam set-default PWM_MAIN_DIS1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v("\nparam set-default PWM_MAIN_DIS2 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v("\nparam set-default PWM_MAIN_DIS3 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\nparam set-default PWM_MAIN_DIS4 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v("\n")])])]),n("h2",{attrs:{id:"adding-a-new-airframe-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-airframe-group"}},[t._v("#")]),t._v(" Adding a New Airframe Group")]),t._v(" "),n("p",[t._v('Airframe "groups" are used to group similar airframes for selection in '),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),n("OutboundLink")],1),t._v(" and in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".\nEvery group has a name, and an associated svg image which shows the common geometry, number of motors, and direction of motor rotation for the grouped airframes.")],1),t._v(" "),n("p",[t._v("The airframe metadata files used by "),n("em",[t._v("QGroundControl")]),t._v(" and the documentation source code are generated from the airframe description, via a script, using the build command: "),n("code",[t._v("make airframe_metadata")])]),t._v(" "),n("p",[t._v("For a new frame belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at\n"),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("If the airframe is for a "),n("strong",[t._v("new group")]),t._v(" you additionally need to:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Add the svg image for the group into user guide documentation (if no image is provided a placeholder image is displayed): "),n("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[t._v("assets/airframes/types"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Add a mapping between the new group name and image filename in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcparser.py"),n("OutboundLink")],1),t._v(" method "),n("code",[t._v("GetImageName()")]),t._v(" (follow the pattern below):")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetImageName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Get parameter group image base name (w/o extension)\n    """')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Standard Plane"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Plane"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flying Wing"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FlyingWing"')]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirframeUnknown"')]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Update "),n("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Add the svg image for the group into: "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/AutopilotPlugins/Common/images"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Add reference to the svg image into "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcimages.qrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgcimages.qrc"),n("OutboundLink")],1),t._v(", following the pattern below:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("qresource")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("prefix")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/qmlimages"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alias")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Airframe/AirframeSimulation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alias")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Airframe/AirframeUnknown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alias")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Airframe/Boat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("src/AutoPilotPlugins/Common/Images/Boat.svg"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alias")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Airframe/FlyingWing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("src/AutoPilotPlugins/Common/Images/FlyingWing.svg"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("file")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The remaining airframe metadata should be automatically included in the firmware (once "),n("strong",[t._v("srcparser.py")]),t._v(" is updated).")])])])])])]),t._v(" "),n("h2",{attrs:{id:"tuning-gains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tuning-gains"}},[t._v("#")]),t._v(" Tuning Gains")]),t._v(" "),n("p",[t._v("The following topics explain how to tune the parameters that will be specified in the config file:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/config/autotune.html"}},[t._v("Autotuning")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("Fixed-wing PID Tuning Guide")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_vtol/"}},[t._v("VTOL Configuration")])],1)]),t._v(" "),n("h2",{attrs:{id:"add-frame-to-qgroundcontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-frame-to-qgroundcontrol"}},[t._v("#")]),t._v(" Add Frame to QGroundControl")]),t._v(" "),n("p",[t._v("To make a new airframe available for section in the "),n("em",[t._v("QGroundControl")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("frame configuration")]),t._v(":")],1),t._v(" "),n("ol",[n("li",[t._v("Make a clean build (e.g. by running "),n("code",[t._v("make clean")]),t._v(" and then "),n("code",[t._v("make px4_fmu-v5_default")]),t._v(")")]),t._v(" "),n("li",[t._v("Open QGC and select "),n("strong",[t._v("Custom firmware file...")]),t._v(" as shown below:")])]),t._v(" "),n("p",[n("img",{attrs:{src:e(751),alt:"QGC flash custom firmware"}})]),t._v(" "),n("p",[t._v("You will be asked to choose the "),n("strong",[t._v(".px4")]),t._v(" firmware file to flash (this file is a zipped JSON file and contains the airframe metadata).")]),t._v(" "),n("ol",[n("li",[t._v("Navigate to the build folder and select the firmware file (e.g. "),n("strong",[t._v("PX4-Autopilot/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),t._v(").")]),t._v(" "),n("li",[t._v("Press "),n("strong",[t._v("OK")]),t._v(" to start flashing the firmware.")]),t._v(" "),n("li",[t._v("Restart "),n("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),n("p",[t._v("The new frame will then be available for selection in "),n("em",[t._v("QGroundControl")]),t._v(".")])])}),[],!1,null,null,null);a.default=s.exports},751:function(t,a,e){t.exports=e.p+"assets/img/qgc_flash_custom_firmware.568a3632.png"}}]);