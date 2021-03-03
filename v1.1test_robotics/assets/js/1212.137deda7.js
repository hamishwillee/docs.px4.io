(window.webpackJsonp=window.webpackJsonp||[]).push([[1212],{2568:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模块参考-命令-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-命令-command"}},[e._v("#")]),e._v(" 模块参考：命令（Command）")]),e._v(" "),a("h2",{attrs:{id:"bl-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bl-update"}},[e._v("#")]),e._v(" bl_update")]),e._v(" "),a("p",[e._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/bl_update",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/bl_update"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to flash the bootloader from a file"),a("a",{attrs:{id:"bl_update_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bl_update [arguments...]\n   bl_update [arguments...]\n   setopt        Set option bits to unlock the FLASH (only needed if in locked\n                 state)\n\n   <file>        Bootloader bin file\n")])])]),a("h2",{attrs:{id:"dumpfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dumpfile"}},[e._v("#")]),e._v(" dumpfile")]),e._v(" "),a("p",[e._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/dumpfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/dumpfile"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("转储文件应用。 Dump file utility. Prints file size and contents in binary mode (don't replace LF with CR LF) to stdout.\n"),a("a",{attrs:{id:"dumpfile_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dumpfile [arguments...]\n     dumpfile [arguments...]\n     <file>      File to dump\n")])])]),a("h2",{attrs:{id:"dyn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dyn"}},[e._v("#")]),e._v(" dyn")]),e._v(" "),a("p",[e._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/dyn",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/dyn"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),a("p",[e._v("载入并运行一个未被编译至 PX4 二进制文件内的动态 PX4 模块。")]),e._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dyn ./hello.px4mod start\n")])])]),a("p",[a("a",{attrs:{id:"dyn_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dyn [arguments...]\n     dyn [arguments...]\n     <file>      File containing the module\n     [arguments...] Arguments to the module Arguments to the module\n")])])]),a("h2",{attrs:{id:"esc-calib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-calib"}},[e._v("#")]),e._v(" esc_calib")]),e._v(" "),a("p",[e._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/esc_calib",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/esc_calib"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("ESC 校准工具。")]),e._v(" "),a("p",[e._v("校准流程（运行命令将会引导你完成此流程）：")]),e._v(" "),a("ul",[a("li",[e._v("移除螺旋桨，将 ESC 断电")]),e._v(" "),a("li",[e._v("Stop attitude controllers: mc_att_control stop, fw_att_control stop")]),e._v(" "),a("li",[e._v("确保安全设置断开（Make sure safety is off）")]),e._v(" "),a("li",[e._v("运行这个命令")])]),e._v(" "),a("p",[a("a",{attrs:{id:"esc_calib_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esc_calib [arguments...]\n     esc_calib [arguments...]\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-l <val>]  Low PWM value in us\n                 default: 1000\n     [-h <val>]  High PWM value in us\n                 default: 2000\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n                 default: 0\n     [-a]        Select all channels\n")])])]),a("h2",{attrs:{id:"failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failure"}},[e._v("#")]),e._v(" failure")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/config",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/config"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),a("p",[e._v("Inject failures into system.")]),e._v(" "),a("h3",{attrs:{id:"用法-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("p",[e._v("This system command sends a vehicle command over uORB to trigger failure.")]),e._v(" "),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("Test the GPS failsafe by stopping GPS:")]),e._v(" "),a("p",[e._v("failure gps off")]),e._v(" "),a("p",[a("a",{attrs:{id:"failure_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-6"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("failure [arguments...]\n   help          Show this help text\n\n   gps|...       Specify component\n\n   ok|off|...    Specify failure type\n     [-i <val>]  sensor instance (0=all)\n                 default: 0\n")])])]),a("h2",{attrs:{id:"gpio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[e._v("#")]),e._v(" gpio")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/gpio",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/gpio"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"用法-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-7"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("p",[e._v("This command is used to read and write GPIOs")]),e._v(" "),a("p",[e._v("gpio read "),a("PORT",[a("PIN",[e._v("/"),a("DEVICE",[e._v(" [PULLDOWN|PULLUP] [--force] gpio write "),a("PORT",[a("PIN",[e._v("/"),a("DEVICE",[a("VALUE",[e._v(" [PUSHPULL|OPENDRAIN] [--force]")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Read the value on port H pin 4 configured as pullup, and it is high")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpio read H4 PULLUP\n")])])]),a("p",[e._v("1 OK")]),e._v(" "),a("p",[e._v("Set the output value on Port E pin 7 to high")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpio write E7 1 --force\n")])])]),a("p",[e._v("Set the output value on device /dev/gpin1 to high")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpio write /dev/gpin1 1\n")])])]),a("p",[a("a",{attrs:{id:"gpio_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gpio [arguments...]\n   read\n     <PORT><PIN>/<DEVICE> GPIO port and pin or device\n     [PULLDOWN|PULLUP] Pulldown/Pullup\n     [--force]   Force (ignore board gpio list)\n\n   write\n     <PORT> <PIN> GPIO port and pin\n     <VALUE>     Value to write\n     [PUSHPULL|OPENDRAIN] Pushpull/Opendrain\n     [--force]   Force (ignore board gpio list)\n")])])]),a("h2",{attrs:{id:"hardfault-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardfault-log"}},[e._v("#")]),e._v(" hardfault_log")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/hardfault_log",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/hardfault_log"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Hardfault utility")]),e._v(" "),a("p",[e._v("Used in startup scripts to handle hardfaults")]),e._v(" "),a("p",[a("a",{attrs:{id:"hardfault_log_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("hardfault_log <command> [arguments...]\n Commands:\n   check         Check if there's an uncommited hardfault\n\n   rearm         Drop an uncommited hardfault\n\n   fault         Generate a hardfault (this command crashes the system :)\n     [0|1]       Hardfault type: 0=divide by 0, 1=Assertion (default=0)\n\n   commit        Write uncommited hardfault to /fs/microsd/fault_%i.txt (and\n                 rearm, but don't reset)\n\n   count         Read the reboot counter, counts the number of reboots of an\n                 uncommited hardfault (returned as the exit code of the program)\n\n   reset         Reset the reboot counter\n")])])]),a("h2",{attrs:{id:"i2cdetect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2cdetect"}},[e._v("#")]),e._v(" i2cdetect")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/i2cdetect",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/i2cdetect"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to scan for I2C devices on a particular bus.\n"),a("a",{attrs:{id:"i2cdetect_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("i2cdetect [arguments...]\n     [-b <val>]  I2C bus\n                 default: 1\n")])])]),a("h2",{attrs:{id:"led-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-control"}},[e._v("#")]),e._v(" led_control")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/led_control",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/led_control"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command-line tool to control & test the (external) LED's.")]),e._v(" "),a("p",[e._v("To use it make sure there's a driver running, which handles the led_control uorb topic.")]),e._v(" "),a("p",[e._v("There are different priorities, such that for example one module can set a color with low priority, and another module can blink N times with high priority, and the LED's automatically return to the lower priority state after the blinking. The "),a("code",[e._v("reset")]),e._v(" command can also be used to return to a lower priority.")]),e._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Blink the first LED 5 times in blue:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("led_control blink -c blue -l 0 -n 5\n")])])]),a("p",[a("a",{attrs:{id:"led_control_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("led_control <command> [arguments...]\n Commands:\n   test          Run a test pattern\n\n   on            Turn LED on\n\n   off           Turn LED off\n\n   reset         Reset LED priority\n\n   blink         Blink LED N times\n     [-n <val>]  Number of blinks\n                 default: 3\n     [-s <val>]  Set blinking speed\n                 values: fast|normal|slow, default: normal\n\n   breathe       Continuously fade LED in & out\n\n   flash         Two fast blinks and then off with frequency of 1Hz\n\n The following arguments apply to all of the above commands except for 'test':\n     [-c <val>]  color\n                 values: red|blue|green|yellow|purple|amber|cyan|white, default:\n                 white\n     [-l <val>]  Which LED to control: 0, 1, 2, ... (default=all)\n     [-p <val>]  Priority\n                 default: 2\n")])])]),a("h2",{attrs:{id:"listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[e._v("#")]),e._v(" listener")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/topic_listener",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/topic_listener"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to listen on uORB topics and print the data to the console.")]),e._v(" "),a("p",[e._v("The listener can be exited any time by pressing Ctrl+C, Esc, or Q.")]),e._v(" "),a("p",[a("a",{attrs:{id:"listener_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("listener <command> [arguments...]\n Commands:\n     <topic_name> uORB topic name\n     [-i <val>]  Topic instance\n                 default: 0\n     [-n <val>]  Number of messages\n                 default: 1\n     [-r <val>]  Subscription rate (unlimited if 0)\n                 default: 0\n")])])]),a("h2",{attrs:{id:"mfd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mfd"}},[e._v("#")]),e._v(" mfd")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mft",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mft"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility interact with the manifest\n"),a("a",{attrs:{id:"mfd_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mfd <command> [arguments...]\n Commands:\n   query         Returns true if not existed\n")])])]),a("h2",{attrs:{id:"mixer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixer"}},[e._v("#")]),e._v(" mixer")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mixer"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Load or append mixer files to the ESC driver.")]),e._v(" "),a("p",[e._v("Note that the driver must support the used ioctl's, which is the case on NuttX, but for example not on RPi.")]),e._v(" "),a("p",[a("a",{attrs:{id:"mixer_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mixer <command> [arguments...]\n Commands:\n   load\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n\n   append\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n")])])]),a("h2",{attrs:{id:"motor-ramp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-ramp"}},[e._v("#")]),e._v(" motor_ramp")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/motor_ramp",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/motor_ramp"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Application to test motor ramp up.")]),e._v(" "),a("p",[e._v("Before starting, make sure to stop any running attitude controller:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mc_rate_control stop\nfw_att_control stop\n")])])]),a("p",[e._v("When starting, a background task is started, runs for several seconds (as specified), then exits.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("motor_ramp sine -a 1100 -r 0.5\n")])])]),a("p",[a("a",{attrs:{id:"motor_ramp_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("motor_ramp [arguments...]\n     ramp|sine|square mode\n     [-d <val>]  Pwm output device\n                 default: /dev/pwm_output0\n     -a <val>    Select minimum pwm duty cycle in usec\n     [-b <val>]  Select maximum pwm duty cycle in usec\n                 default: 2000\n     [-r <val>]  Select motor ramp duration in sec\n                 default: 1.0\n\n WARNING: motors will ramp up to full speed!\n")])])]),a("h2",{attrs:{id:"motor-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motor-test"}},[e._v("#")]),e._v(" motor_test")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/motor_test",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/motor_test"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to test motors.")]),e._v(" "),a("p",[e._v("WARNING: remove all props before using this command.")]),e._v(" "),a("p",[a("a",{attrs:{id:"motor_test_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("motor_test <command> [arguments...]\n Commands:\n   test          Set motor(s) to a specific output value\n     [-m <val>]  Motor to test (1...8, all if not specified)\n     [-p <val>]  Power (0...100)\n                 default: 0\n     [-t <val>]  Timeout in seconds (default=no timeout)\n                 default: 0\n     [-i <val>]  driver instance\n                 default: 0\n\n   stop          Stop all motors\n\n   iterate       Iterate all motors starting and stopping one after the other\n")])])]),a("h2",{attrs:{id:"mtd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtd"}},[e._v("#")]),e._v(" mtd")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mtd",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mtd"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to mount and test partitions (based on FRAM/EEPROM storage as defined by the board)\n"),a("a",{attrs:{id:"mtd_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mtd <command> [arguments...]\n Commands:\n   status        Print status information\n\n   readtest      Perform read test\n\n   rwtest        Perform read-write test\n\n   erase         Erase partition(s)\n\n The commands 'readtest' and 'rwtest' have an optional instance index:\n     [-i <val>]  storage index (if the board has multiple storages)\n                 default: 0\n\n The commands 'readtest', 'rwtest' and 'erase' have an optional parameter:\n     [<partition_name1> [<partition_name2> ...]] Partition names (eg.\n                 /fs/mtd_params), use system default if not provided\n")])])]),a("h2",{attrs:{id:"nshterm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nshterm"}},[e._v("#")]),e._v(" nshterm")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/nshterm",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/nshterm"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Start an NSH shell on a given port.")]),e._v(" "),a("p",[e._v("This was previously used to start a shell on the USB serial port. Now there runs mavlink, and it is possible to use a shell over mavlink.")]),e._v(" "),a("p",[a("a",{attrs:{id:"nshterm_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nshterm [arguments...]\n     <file:dev>  Device on which to start the shell (eg. /dev/ttyACM0)\n")])])]),a("h2",{attrs:{id:"param"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[e._v("#")]),e._v(" param")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/param",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/param"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command to access and manipulate parameters via shell or script.")]),e._v(" "),a("p",[e._v("This is used for example in the startup script to set airframe-specific parameters.")]),e._v(" "),a("p",[e._v("Parameters are automatically saved when changed, eg. with "),a("code",[e._v("param set")]),e._v(". They are typically stored to FRAM or to the SD card. "),a("code",[e._v("param select")]),e._v(" can be used to change the storage location for subsequent saves (this will need to be (re-)configured on every boot).")]),e._v(" "),a("p",[e._v("If the FLASH-based backend is enabled (which is done at compile time, e.g. for the Intel Aero or Omnibus), "),a("code",[e._v("param select")]),e._v(" has no effect and the default is always the FLASH backend. However "),a("code",[e._v("param save/load <file>")]),e._v(" can still be used to write to/read from files.")]),e._v(" "),a("p",[e._v("Each parameter has a 'used' flag, which is set when it's read during boot. It is used to only show relevant parameters to a ground control station.")]),e._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Change the airframe and make sure the airframe's default parameters are loaded:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("param set SYS_AUTOSTART 4001\nparam set SYS_AUTOCONFIG 1\nreboot\n")])])]),a("p",[a("a",{attrs:{id:"param_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("param <command> [arguments...]\n Commands:\n   load          Load params from a file (overwrite all)\n     [<file>]    File name (use default if not given)\n\n   import        Import params from a file\n     [<file>]    File name (use default if not given)\n\n   save          Save params to a file\n     [<file>]    File name (use default if not given)\n\n   select        Select default file\n     [<file>]    File name (use <root>/eeprom/parameters if not given)\n\n   show          Show parameter values\n     [-a]        Show all parameters (not just used)\n     [-c]        Show only changed params (unused too)\n     [-q]        quiet mode, print only param value (name needs to be exact)\n     [<filter>]  Filter by param name (wildcard at end allowed, eg. sys_*)\n\n   show-for-airframe Show changed params for airframe config\n\n   status        Print status of parameter system\n\n   set           Set parameter to a value\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   set-default   Set parameter default to a value\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   compare       Compare a param with a value. Command will succeed if equal\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n\n   greater       Compare a param with a value. Command will succeed if param is\n                 greater than the value\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n     <param_name> <value> Parameter name and value to compare\n\n   touch         Mark a parameter as used\n     [<param_name1> [<param_name2>]] Parameter name (one or more)\n\n   reset         Reset only specified params to default\n     [<param1> [<param2>]] Parameter names to reset (wildcard at end allowed)\n\n   reset_all     Reset all params to default\n     [<exclude1> [<exclude2>]] Do not reset matching params (wildcard at end\n                 allowed)\n\n   index         Show param for a given index\n     <index>     Index: an integer >= 0\n\n   index_used    Show used param for a given index\n     <index>     Index: an integer >= 0\n\n   find          Show index of a param\n     <param>     param name\n")])])]),a("h2",{attrs:{id:"perf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perf"}},[e._v("#")]),e._v(" perf")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/perf",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/perf"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Tool to print performance counters\n"),a("a",{attrs:{id:"perf_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perf [arguments...]\n   reset         Reset all counters\n\n   latency       Print HRT timer latency histogram\n\n Prints all performance counters if no arguments given\n")])])]),a("h2",{attrs:{id:"pwm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwm"}},[e._v("#")]),e._v(" pwm")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/pwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/pwm"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This command is used to configure PWM outputs for servo and ESC control.")]),e._v(" "),a("p",[e._v("The default device "),a("code",[e._v("/dev/pwm_output0")]),e._v(" are the Main channels, AUX channels are on "),a("code",[e._v("/dev/pwm_output1")]),e._v(" ("),a("code",[e._v("-d")]),e._v(" parameter).")]),e._v(" "),a("p",[e._v("It is used in the startup script to make sure the PWM parameters ("),a("code",[e._v("PWM_*")]),e._v(") are applied (or the ones provided by the airframe config if specified). "),a("code",[e._v("pwm info")]),e._v(" shows the current settings (the trim value is an offset and configured with "),a("code",[e._v("PWM_MAIN_TRIMx")]),e._v(" and "),a("code",[e._v("PWM_AUX_TRIMx")]),e._v(").")]),e._v(" "),a("p",[e._v("The disarmed value should be set such that the motors don't spin (it's also used for the kill switch), at the minimum value they should spin.")]),e._v(" "),a("p",[e._v("Channels are assigned to a group. Due to hardware limitations, the update rate can only be set per group. Use "),a("code",[e._v("pwm info")]),e._v(" to display the groups. If the "),a("code",[e._v("-c")]),e._v(" argument is used, all channels of any included group must be included.")]),e._v(" "),a("p",[e._v("The parameters "),a("code",[e._v("-p")]),e._v(" and "),a("code",[e._v("-r")]),e._v(" can be set to a parameter instead of specifying an integer: use -p p:PWM_MIN for example.")]),e._v(" "),a("p",[e._v("Note that in OneShot mode, the PWM range [1000, 2000] is automatically mapped to [125, 250].")]),e._v(" "),a("h3",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Set the PWM rate for all channels to 400 Hz:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pwm rate -a -r 400\n")])])]),a("p",[e._v("Test the outputs of eg. channels 1 and 3, and set the PWM value to 1200 us:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pwm arm\npwm test -c 13 -p 1200\n")])])]),a("p",[a("a",{attrs:{id:"pwm_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pwm <command> [arguments...]\n Commands:\n   arm           Arm output\n\n   disarm        Disarm output\n\n   info          Print current configuration of all channels\n\n   forcefail     Force Failsafe mode. PWM outputs are set to failsafe values.\n     on|off      Turn on or off\n\n   terminatefail Enable Termination Failsafe mode. While this is true, any\n                 failsafe that occurs will be unrecoverable (even if recovery\n                 conditions are met).\n     on|off      Turn on or off\n\n   rate          Configure PWM rates\n     -r <val>    PWM Rate in Hz (0 = Oneshot, otherwise 50 to 400Hz)\n\n   oneshot       Configure Oneshot125 (rate is set to 0)\n\n   failsafe      Set Failsafe PWM value\n\n   disarmed      Set Disarmed PWM value\n\n   min           Set Minimum PWM value\n\n   max           Set Maximum PWM value\n\n   test          Set Output to a specific value until 'q' or 'c' or 'ctrl-c'\n                 pressed\n\n   steps         Run 5 steps from 0 to 100%\n\n The commands 'failsafe', 'disarmed', 'min', 'max' and 'test' require a PWM\n value:\n     -p <val>    PWM value (eg. 1100)\n\n The commands 'rate', 'oneshot', 'failsafe', 'disarmed', 'min', 'max', 'test'\n and 'steps' additionally require to specify the channels with one of the\n following commands:\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n     [-g <val>]  Select channels by group (eg. 0, 1, 2. use 'pwm info' to show\n                 groups)\n     [-a]        Select all channels\n\n These parameters apply to all commands:\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-v]        Verbose output\n     [-e]        Exit with 1 instead of 0 on error\n")])])]),a("h2",{attrs:{id:"reboot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reboot"}},[e._v("#")]),e._v(" reboot")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/reboot",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/reboot"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Reboot the system\n"),a("a",{attrs:{id:"reboot_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("reboot [arguments...]\n     [-b]        Reboot into bootloader\n     [lock|unlock] Take/release the shutdown lock (for testing)\n")])])]),a("h2",{attrs:{id:"sd-bench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-bench"}},[e._v("#")]),e._v(" sd_bench")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/sd_bench",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/sd_bench"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Test the speed of an SD Card\n"),a("a",{attrs:{id:"sd_bench_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-16"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sd_bench [arguments...]\n     [-b <val>]  Block size for each read/write\n                 default: 4096\n     [-r <val>]  Number of runs\n                 default: 5\n     [-d <val>]  Duration of a run in ms\n                 default: 2000\n     [-s]        Call fsync after each block (default=at end of each run)\n")])])]),a("h2",{attrs:{id:"system-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-time"}},[e._v("#")]),e._v(" system_time")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/system_time",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/system_time"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command-line tool to set and get system time.")]),e._v(" "),a("h3",{attrs:{id:"examples-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Set the system time and read it back")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("system_time set 1600775044\nsystem_time get\n")])])]),a("p",[a("a",{attrs:{id:"system_time_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-17"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("system_time <command> [arguments...]\n Commands:\n   set           Set the system time, provide time in unix epoch time format\n\n   get           Get the system time\n")])])]),a("h2",{attrs:{id:"top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[e._v("#")]),e._v(" top")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/top",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/top"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Monitor running processes and their CPU, stack usage, priority and state\n"),a("a",{attrs:{id:"top_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-18"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("top [arguments...]\n   once          print load only once\n")])])]),a("h2",{attrs:{id:"usb-connected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-connected"}},[e._v("#")]),e._v(" usb_connected")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/usb_connected",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/usb_connected"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Utility to check if USB is connected. Was previously used in startup scripts. A return value of 0 means USB is connected, 1 otherwise.\n"),a("a",{attrs:{id:"usb_connected_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-19"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("usb_connected [arguments...]\n")])])]),a("h2",{attrs:{id:"ver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ver"}},[e._v("#")]),e._v(" ver")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/ver",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/ver"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Tool to print various version information\n"),a("a",{attrs:{id:"ver_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-20"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ver <command> [arguments...]\n Commands:\n   hw            Hardware architecture\n\n   mcu           MCU info\n\n   git           git version information\n\n   bdate         Build date and time\n\n   gcc           Compiler info\n\n   bdate         Build date and time\n\n   px4guid       PX4 GUID\n\n   uri           Build URI\n\n   all           Print all versions\n\n   hwcmp         Compare hardware version (returns 0 on match)\n     <hw> [<hw2>] Hardware to compare against (eg. PX4_FMU_V4). An OR comparison\n                 is used if multiple are specified\n\n   hwtypecmp     Compare hardware type (returns 0 on match)\n     <hwtype> [<hwtype2>] Hardware type to compare against (eg. V2). An OR\n                 comparison is used if multiple are specified\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);