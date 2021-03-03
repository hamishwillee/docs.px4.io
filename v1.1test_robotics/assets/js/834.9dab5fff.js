(window.webpackJsonp=window.webpackJsonp||[]).push([[834],{1723:function(e,a,t){"use strict";t.r(a);var s=t(18),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-reference-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-command"}},[e._v("#")]),e._v(" Modules Reference: Command")]),e._v(" "),t("h2",{attrs:{id:"bl-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bl-update"}},[e._v("#")]),e._v(" bl_update")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/bl_update",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/bl_update"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to flash the bootloader from a file\n"),t("a",{attrs:{id:"bl_update_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("bl_update [arguments...]\n   setopt        Set option bits to unlock the FLASH (only needed if in locked\n                 state)\n\n   <file>        Bootloader bin file\n")])])]),t("h2",{attrs:{id:"dumpfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dumpfile"}},[e._v("#")]),e._v(" dumpfile")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/dumpfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/dumpfile"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Dump file utility. Prints file size and contents in binary mode (don't replace LF with CR LF) to stdout.\n"),t("a",{attrs:{id:"dumpfile_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dumpfile [arguments...]\n     <file>      File to dump\n")])])]),t("h2",{attrs:{id:"dyn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dyn"}},[e._v("#")]),e._v(" dyn")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/dyn",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/dyn"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Load and run a dynamic PX4 module, which was not compiled into the PX4 binary.")]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dyn ./hello.px4mod start\n")])])]),t("p",[t("a",{attrs:{id:"dyn_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dyn [arguments...]\n     <file>      File containing the module\n     [arguments...] Arguments to the module\n")])])]),t("h2",{attrs:{id:"esc-calib"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esc-calib"}},[e._v("#")]),e._v(" esc_calib")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/esc_calib",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/esc_calib"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Tool for ESC calibration")]),e._v(" "),t("p",[e._v("Calibration procedure (running the command will guide you through it):")]),e._v(" "),t("ul",[t("li",[e._v("Remove props, power off the ESC's")]),e._v(" "),t("li",[e._v("Stop attitude and rate controllers: mc_rate_control stop, fw_att_control stop")]),e._v(" "),t("li",[e._v("Make sure safety is off")]),e._v(" "),t("li",[e._v("Run this command")])]),e._v(" "),t("p",[t("a",{attrs:{id:"esc_calib_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("esc_calib [arguments...]\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-l <val>]  Low PWM value in us\n                 default: 1000\n     [-h <val>]  High PWM value in us\n                 default: 2000\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n     [-a]        Select all channels\n")])])]),t("h2",{attrs:{id:"failure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#failure"}},[e._v("#")]),e._v(" failure")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/failure",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/failure"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Inject failures into system.")]),e._v(" "),t("h3",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),t("p",[e._v("This system command sends a vehicle command over uORB to trigger failure.")]),e._v(" "),t("h3",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Test the GPS failsafe by stopping GPS:")]),e._v(" "),t("p",[e._v("failure gps off")]),e._v(" "),t("p",[t("a",{attrs:{id:"failure_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("failure [arguments...]\n   help          Show this help text\n\n   gps|...       Specify component\n\n   ok|off|...    Specify failure type\n     [-i <val>]  sensor instance (0=all)\n                 default: 0\n")])])]),t("h2",{attrs:{id:"gpio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[e._v("#")]),e._v(" gpio")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/gpio",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/gpio"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This command is used to read and write GPIOs")]),e._v(" "),t("p",[e._v("gpio read "),t("PORT",[t("PIN",[e._v("/"),t("DEVICE",[e._v(" [PULLDOWN|PULLUP] [--force]\ngpio write "),t("PORT",[t("PIN",[e._v("/"),t("DEVICE",[t("VALUE",[e._v(" [PUSHPULL|OPENDRAIN] [--force]")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),t("h3",{attrs:{id:"examples-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Read the value on port H pin 4 configured as pullup, and it is high")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpio read H4 PULLUP\n")])])]),t("p",[e._v("1 OK")]),e._v(" "),t("p",[e._v("Set the output value on Port E pin 7 to high")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpio write E7 1 --force\n")])])]),t("p",[e._v("Set the output value on device /dev/gpin1 to high")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpio write /dev/gpin1 1\n")])])]),t("p",[t("a",{attrs:{id:"gpio_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("gpio [arguments...]\n   read\n     <PORT><PIN>/<DEVICE> GPIO port and pin or device\n     [PULLDOWN|PULLUP] Pulldown/Pullup\n     [--force]   Force (ignore board gpio list)\n\n   write\n     <PORT> <PIN> GPIO port and pin\n     <VALUE>     Value to write\n     [PUSHPULL|OPENDRAIN] Pushpull/Opendrain\n     [--force]   Force (ignore board gpio list)\n")])])]),t("h2",{attrs:{id:"hardfault-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardfault-log"}},[e._v("#")]),e._v(" hardfault_log")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/hardfault_log",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/hardfault_log"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Hardfault utility")]),e._v(" "),t("p",[e._v("Used in startup scripts to handle hardfaults")]),e._v(" "),t("p",[t("a",{attrs:{id:"hardfault_log_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("hardfault_log <command> [arguments...]\n Commands:\n   check         Check if there's an uncommited hardfault\n\n   rearm         Drop an uncommited hardfault\n\n   fault         Generate a hardfault (this command crashes the system :)\n     [0|1]       Hardfault type: 0=divide by 0, 1=Assertion (default=0)\n\n   commit        Write uncommited hardfault to /fs/microsd/fault_%i.txt (and\n                 rearm, but don't reset)\n\n   count         Read the reboot counter, counts the number of reboots of an\n                 uncommited hardfault (returned as the exit code of the program)\n\n   reset         Reset the reboot counter\n")])])]),t("h2",{attrs:{id:"i2cdetect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2cdetect"}},[e._v("#")]),e._v(" i2cdetect")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/i2cdetect",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/i2cdetect"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to scan for I2C devices on a particular bus.\n"),t("a",{attrs:{id:"i2cdetect_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("i2cdetect [arguments...]\n     [-b <val>]  I2C bus\n                 default: 1\n")])])]),t("h2",{attrs:{id:"led-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#led-control"}},[e._v("#")]),e._v(" led_control")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/led_control",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/led_control"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Command-line tool to control & test the (external) LED's.")]),e._v(" "),t("p",[e._v("To use it make sure there's a driver running, which handles the led_control uorb topic.")]),e._v(" "),t("p",[e._v("There are different priorities, such that for example one module can set a color with low priority, and another\nmodule can blink N times with high priority, and the LED's automatically return to the lower priority state\nafter the blinking. The "),t("code",[e._v("reset")]),e._v(" command can also be used to return to a lower priority.")]),e._v(" "),t("h3",{attrs:{id:"examples-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Blink the first LED 5 times in blue:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("led_control blink -c blue -l 0 -n 5\n")])])]),t("p",[t("a",{attrs:{id:"led_control_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("led_control <command> [arguments...]\n Commands:\n   test          Run a test pattern\n\n   on            Turn LED on\n\n   off           Turn LED off\n\n   reset         Reset LED priority\n\n   blink         Blink LED N times\n     [-n <val>]  Number of blinks\n                 default: 3\n     [-s <val>]  Set blinking speed\n                 values: fast|normal|slow, default: normal\n\n   breathe       Continuously fade LED in & out\n\n   flash         Two fast blinks and then off with frequency of 1Hz\n\n The following arguments apply to all of the above commands except for 'test':\n     [-c <val>]  color\n                 values: red|blue|green|yellow|purple|amber|cyan|white, default:\n                 white\n     [-l <val>]  Which LED to control: 0, 1, 2, ... (default=all)\n     [-p <val>]  Priority\n                 default: 2\n")])])]),t("h2",{attrs:{id:"listener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[e._v("#")]),e._v(" listener")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/topic_listener",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/topic_listener"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to listen on uORB topics and print the data to the console.")]),e._v(" "),t("p",[e._v("The listener can be exited any time by pressing Ctrl+C, Esc, or Q.")]),e._v(" "),t("p",[t("a",{attrs:{id:"listener_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("listener <command> [arguments...]\n Commands:\n     <topic_name> uORB topic name\n     [-i <val>]  Topic instance\n                 default: 0\n     [-n <val>]  Number of messages\n                 default: 1\n     [-r <val>]  Subscription rate (unlimited if 0)\n                 default: 0\n")])])]),t("h2",{attrs:{id:"mfd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mfd"}},[e._v("#")]),e._v(" mfd")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mft",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mft"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility interact with the manifest\n"),t("a",{attrs:{id:"mfd_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mfd <command> [arguments...]\n Commands:\n   query         Returns true if not existed\n")])])]),t("h2",{attrs:{id:"mixer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixer"}},[e._v("#")]),e._v(" mixer")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mixer",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mixer"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Load or append mixer files to the ESC driver.")]),e._v(" "),t("p",[e._v("Note that the driver must support the used ioctl's, which is the case on NuttX, but for example not on RPi.")]),e._v(" "),t("p",[t("a",{attrs:{id:"mixer_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mixer <command> [arguments...]\n Commands:\n   load\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n\n   append\n     <file:dev> <file> Output device (eg. /dev/pwm_output0) and mixer file\n")])])]),t("h2",{attrs:{id:"motor-ramp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motor-ramp"}},[e._v("#")]),e._v(" motor_ramp")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/motor_ramp",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/motor_ramp"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Application to test motor ramp up.")]),e._v(" "),t("p",[e._v("Before starting, make sure to stop any running attitude controller:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mc_rate_control stop\nfw_att_control stop\n")])])]),t("p",[e._v("When starting, a background task is started, runs for several seconds (as specified), then exits.")]),e._v(" "),t("h3",{attrs:{id:"example-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("motor_ramp sine -a 1100 -r 0.5\n")])])]),t("p",[t("a",{attrs:{id:"motor_ramp_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("motor_ramp [arguments...]\n     ramp|sine|square mode\n     [-d <val>]  Pwm output device\n                 default: /dev/pwm_output0\n     -a <val>    Select minimum pwm duty cycle in usec\n     [-b <val>]  Select maximum pwm duty cycle in usec\n                 default: 2000\n     [-r <val>]  Select motor ramp duration in sec\n                 default: 1.0\n\n WARNING: motors will ramp up to full speed!\n")])])]),t("h2",{attrs:{id:"motor-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motor-test"}},[e._v("#")]),e._v(" motor_test")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/motor_test",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/motor_test"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to test motors.")]),e._v(" "),t("p",[e._v("WARNING: remove all props before using this command.")]),e._v(" "),t("p",[t("a",{attrs:{id:"motor_test_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("motor_test <command> [arguments...]\n Commands:\n   test          Set motor(s) to a specific output value\n     [-m <val>]  Motor to test (1...8, all if not specified)\n     [-p <val>]  Power (0...100)\n                 default: 0\n     [-t <val>]  Timeout in seconds (default=no timeout)\n                 default: 0\n     [-i <val>]  driver instance\n                 default: 0\n\n   stop          Stop all motors\n\n   iterate       Iterate all motors starting and stopping one after the other\n")])])]),t("h2",{attrs:{id:"mtd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mtd"}},[e._v("#")]),e._v(" mtd")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/mtd",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/mtd"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to mount and test partitions (based on FRAM/EEPROM storage as defined by the board)\n"),t("a",{attrs:{id:"mtd_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mtd <command> [arguments...]\n Commands:\n   status        Print status information\n\n   readtest      Perform read test\n\n   rwtest        Perform read-write test\n\n   erase         Erase partition(s)\n\n The commands 'readtest' and 'rwtest' have an optional instance index:\n     [-i <val>]  storage index (if the board has multiple storages)\n                 default: 0\n\n The commands 'readtest', 'rwtest' and 'erase' have an optional parameter:\n     [<partition_name1> [<partition_name2> ...]] Partition names (eg.\n                 /fs/mtd_params), use system default if not provided\n")])])]),t("h2",{attrs:{id:"nshterm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nshterm"}},[e._v("#")]),e._v(" nshterm")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/nshterm",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/nshterm"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Start an NSH shell on a given port.")]),e._v(" "),t("p",[e._v("This was previously used to start a shell on the USB serial port.\nNow there runs mavlink, and it is possible to use a shell over mavlink.")]),e._v(" "),t("p",[t("a",{attrs:{id:"nshterm_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-16"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("nshterm [arguments...]\n     <file:dev>  Device on which to start the shell (eg. /dev/ttyACM0)\n")])])]),t("h2",{attrs:{id:"param"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[e._v("#")]),e._v(" param")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/param",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/param"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-7"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Command to access and manipulate parameters via shell or script.")]),e._v(" "),t("p",[e._v("This is used for example in the startup script to set airframe-specific parameters.")]),e._v(" "),t("p",[e._v("Parameters are automatically saved when changed, eg. with "),t("code",[e._v("param set")]),e._v(". They are typically stored to FRAM\nor to the SD card. "),t("code",[e._v("param select")]),e._v(" can be used to change the storage location for subsequent saves (this will\nneed to be (re-)configured on every boot).")]),e._v(" "),t("p",[e._v("If the FLASH-based backend is enabled (which is done at compile time, e.g. for the Intel Aero or Omnibus),\n"),t("code",[e._v("param select")]),e._v(" has no effect and the default is always the FLASH backend. However "),t("code",[e._v("param save/load <file>")]),e._v("\ncan still be used to write to/read from files.")]),e._v(" "),t("p",[e._v("Each parameter has a 'used' flag, which is set when it's read during boot. It is used to only show relevant\nparameters to a ground control station.")]),e._v(" "),t("h3",{attrs:{id:"examples-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Change the airframe and make sure the airframe's default parameters are loaded:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("param set SYS_AUTOSTART 4001\nparam set SYS_AUTOCONFIG 1\nreboot\n")])])]),t("p",[t("a",{attrs:{id:"param_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-17"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("param <command> [arguments...]\n Commands:\n   load          Load params from a file (overwrite all)\n     [<file>]    File name (use default if not given)\n\n   import        Import params from a file\n     [<file>]    File name (use default if not given)\n\n   save          Save params to a file\n     [<file>]    File name (use default if not given)\n\n   select        Select default file\n     [<file>]    File name (use <root>/eeprom/parameters if not given)\n\n   show          Show parameter values\n     [-a]        Show all parameters (not just used)\n     [-c]        Show only changed params (unused too)\n     [-q]        quiet mode, print only param value (name needs to be exact)\n     [<filter>]  Filter by param name (wildcard at end allowed, eg. sys_*)\n\n   show-for-airframe Show changed params for airframe config\n\n   status        Print status of parameter system\n\n   set           Set parameter to a value\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   set-default   Set parameter default to a value\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   compare       Compare a param with a value. Command will succeed if equal\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n\n   greater       Compare a param with a value. Command will succeed if param is\n                 greater than the value\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to compare\n     <param_name> <value> Parameter name and value to compare\n\n   touch         Mark a parameter as used\n     [<param_name1> [<param_name2>]] Parameter name (one or more)\n\n   reset         Reset only specified params to default\n     [<param1> [<param2>]] Parameter names to reset (wildcard at end allowed)\n\n   reset_all     Reset all params to default\n     [<exclude1> [<exclude2>]] Do not reset matching params (wildcard at end\n                 allowed)\n\n   index         Show param for a given index\n     <index>     Index: an integer >= 0\n\n   index_used    Show used param for a given index\n     <index>     Index: an integer >= 0\n\n   find          Show index of a param\n     <param>     param name\n")])])]),t("h2",{attrs:{id:"perf"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#perf"}},[e._v("#")]),e._v(" perf")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/perf",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/perf"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Tool to print performance counters\n"),t("a",{attrs:{id:"perf_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-18"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("perf [arguments...]\n   reset         Reset all counters\n\n   latency       Print HRT timer latency histogram\n\n Prints all performance counters if no arguments given\n")])])]),t("h2",{attrs:{id:"pwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pwm"}},[e._v("#")]),e._v(" pwm")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/pwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/pwm"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-8"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("This command is used to configure PWM outputs for servo and ESC control.")]),e._v(" "),t("p",[e._v("The default device "),t("code",[e._v("/dev/pwm_output0")]),e._v(" are the Main channels, AUX channels are on "),t("code",[e._v("/dev/pwm_output1")]),e._v(" ("),t("code",[e._v("-d")]),e._v(" parameter).")]),e._v(" "),t("p",[e._v("It is used in the startup script to make sure the PWM parameters ("),t("code",[e._v("PWM_*")]),e._v(") are applied (or the ones provided\nby the airframe config if specified). "),t("code",[e._v("pwm info")]),e._v(" shows the current settings (the trim value is an offset\nand configured with "),t("code",[e._v("PWM_MAIN_TRIMx")]),e._v(" and "),t("code",[e._v("PWM_AUX_TRIMx")]),e._v(").")]),e._v(" "),t("p",[e._v("The disarmed value should be set such that the motors don't spin (it's also used for the kill switch), at the\nminimum value they should spin.")]),e._v(" "),t("p",[e._v("Channels are assigned to a group. Due to hardware limitations, the update rate can only be set per group. Use\n"),t("code",[e._v("pwm info")]),e._v(" to display the groups. If the "),t("code",[e._v("-c")]),e._v(" argument is used, all channels of any included group must be included.")]),e._v(" "),t("p",[e._v("The parameters "),t("code",[e._v("-p")]),e._v(" and "),t("code",[e._v("-r")]),e._v(" can be set to a parameter instead of specifying an integer: use -p p:PWM_MIN for example.")]),e._v(" "),t("p",[e._v("Note that in OneShot mode, the PWM range [1000, 2000] is automatically mapped to [125, 250].")]),e._v(" "),t("h3",{attrs:{id:"examples-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Set the PWM rate for all channels to 400 Hz:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pwm rate -a -r 400\n")])])]),t("p",[e._v("Test the outputs of eg. channels 1 and 3, and set the PWM value to 1200 us:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pwm arm\npwm test -c 13 -p 1200\n")])])]),t("p",[t("a",{attrs:{id:"pwm_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-19"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-19"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pwm <command> [arguments...]\n Commands:\n   arm           Arm output\n\n   disarm        Disarm output\n\n   info          Print current configuration of all channels\n\n   forcefail     Force Failsafe mode. PWM outputs are set to failsafe values.\n     on|off      Turn on or off\n\n   terminatefail Enable Termination Failsafe mode. While this is true, any\n                 failsafe that occurs will be unrecoverable (even if recovery\n                 conditions are met).\n     on|off      Turn on or off\n\n   rate          Configure PWM rates\n     -r <val>    PWM Rate in Hz (0 = Oneshot, otherwise 50 to 400Hz)\n\n   oneshot       Configure Oneshot125 (rate is set to 0)\n\n   failsafe      Set Failsafe PWM value\n\n   disarmed      Set Disarmed PWM value\n\n   min           Set Minimum PWM value\n\n   max           Set Maximum PWM value\n\n   test          Set Output to a specific value until 'q' or 'c' or 'ctrl-c'\n                 pressed\n\n   steps         Run 5 steps from 0 to 100%\n\n The commands 'failsafe', 'disarmed', 'min', 'max' and 'test' require a PWM\n value:\n     -p <val>    PWM value (eg. 1100)\n\n The commands 'rate', 'oneshot', 'failsafe', 'disarmed', 'min', 'max', 'test'\n and 'steps' additionally require to specify the channels with one of the\n following commands:\n     [-c <val>]  select channels in the form: 1234 (1 digit per channel,\n                 1=first)\n     [-m <val>]  Select channels via bitmask (eg. 0xF, 3)\n     [-g <val>]  Select channels by group (eg. 0, 1, 2. use 'pwm info' to show\n                 groups)\n     [-a]        Select all channels\n\n These parameters apply to all commands:\n     [-d <val>]  Select PWM output device\n                 values: <file:dev>, default: /dev/pwm_output0\n     [-v]        Verbose output\n     [-e]        Exit with 1 instead of 0 on error\n")])])]),t("h2",{attrs:{id:"reboot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reboot"}},[e._v("#")]),e._v(" reboot")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/reboot",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/reboot"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Reboot the system\n"),t("a",{attrs:{id:"reboot_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-20"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("reboot [arguments...]\n     [-b]        Reboot into bootloader\n     [lock|unlock] Take/release the shutdown lock (for testing)\n")])])]),t("h2",{attrs:{id:"sd-bench"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sd-bench"}},[e._v("#")]),e._v(" sd_bench")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/sd_bench",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/sd_bench"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Test the speed of an SD Card\n"),t("a",{attrs:{id:"sd_bench_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-21"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-21"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sd_bench [arguments...]\n     [-b <val>]  Block size for each read/write\n                 default: 4096\n     [-r <val>]  Number of runs\n                 default: 5\n     [-d <val>]  Duration of a run in ms\n                 default: 2000\n     [-s]        Call fsync after each block (default=at end of each run)\n")])])]),t("h2",{attrs:{id:"system-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-time"}},[e._v("#")]),e._v(" system_time")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/system_time",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/system_time"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"description-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-9"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("Command-line tool to set and get system time.")]),e._v(" "),t("h3",{attrs:{id:"examples-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("Set the system time and read it back")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("system_time set 1600775044\nsystem_time get\n")])])]),t("p",[t("a",{attrs:{id:"system_time_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-22"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-22"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("system_time <command> [arguments...]\n Commands:\n   set           Set the system time, provide time in unix epoch time format\n\n   get           Get the system time\n")])])]),t("h2",{attrs:{id:"top"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[e._v("#")]),e._v(" top")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/top",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/top"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Monitor running processes and their CPU, stack usage, priority and state\n"),t("a",{attrs:{id:"top_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-23"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("top [arguments...]\n   once          print load only once\n")])])]),t("h2",{attrs:{id:"usb-connected"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usb-connected"}},[e._v("#")]),e._v(" usb_connected")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/usb_connected",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/usb_connected"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Utility to check if USB is connected. Was previously used in startup scripts.\nA return value of 0 means USB is connected, 1 otherwise.\n"),t("a",{attrs:{id:"usb_connected_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-24"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("usb_connected [arguments...]\n")])])]),t("h2",{attrs:{id:"ver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ver"}},[e._v("#")]),e._v(" ver")]),e._v(" "),t("p",[e._v("Source: "),t("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/ver",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/ver"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Tool to print various version information\n"),t("a",{attrs:{id:"ver_usage"}})]),e._v(" "),t("h3",{attrs:{id:"usage-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-25"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("ver <command> [arguments...]\n Commands:\n   hw            Hardware architecture\n\n   mcu           MCU info\n\n   git           git version information\n\n   bdate         Build date and time\n\n   gcc           Compiler info\n\n   bdate         Build date and time\n\n   px4guid       PX4 GUID\n\n   uri           Build URI\n\n   all           Print all versions\n\n   hwcmp         Compare hardware version (returns 0 on match)\n     <hw> [<hw2>] Hardware to compare against (eg. PX4_FMU_V4). An OR comparison\n                 is used if multiple are specified\n\n   hwtypecmp     Compare hardware type (returns 0 on match)\n     <hwtype> [<hwtype2>] Hardware type to compare against (eg. V2). An OR\n                 comparison is used if multiple are specified\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);