(window.webpackJsonp=window.webpackJsonp||[]).push([[1865],{3502:function(t,a,e){"use strict";e.r(a);var s=e(19),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"模块参考-命令-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-命令-command"}},[t._v("#")]),t._v(" 模块参考：命令（Command）")]),t._v(" "),e("h2",{attrs:{id:"actuator-test"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actuator-test"}},[t._v("#")]),t._v(" actuator_test")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/actuator_test",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/actuator_test"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("用于测试执行器的实用程序")]),t._v(" "),e("p",[t._v("警告：在使用此命令之前移除所有螺旋桨。")]),t._v(" "),e("p",[e("a",{attrs:{id:"actuator_test_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("actuator_test <command> [arguments...]\n Commands:\n   set           将一个执行器设置为一个指定的输出值\n\n 执行器可以是一个指定的电机、舵机或者 function directly:\n     [-m <val>]  被测试的电机 (1...8)\n     [-s <val>]  被测试的舵机 (1...8)\n     [-f <val>]  Specify function directly\n     -v <val>    值(-1...1)\n     [-t <val>]  以秒为单位的超时时间 (如果没有设置则为交互式运行)\n                 默认: 0\n\n   iterate-motors 使所有电机依次开始和停止\n\n   iterate-servos 使所有舵机依次开始和停止\n")])])]),e("h2",{attrs:{id:"bl-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bl-update"}},[t._v("#")]),t._v(" bl_update")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/bl_update",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/bl_update"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("用于从文件刷新引导加载程序的实用程序\n"),e("a",{attrs:{id:"bl_update_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bl_update [arguments...]\n   setopt        设置选项比特来解锁 FLASH (只有在锁定状态下需要）\n\n   <file>        Bootloader bin 文件                \n")])])]),e("h2",{attrs:{id:"bsondump"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bsondump"}},[t._v("#")]),t._v(" bsondump")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/bsondump",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/bsondump"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("read BSON from a file and print in human form\n"),e("a",{attrs:{id:"bsondump_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bsondump [arguments...]\n     <file>      File name\n")])])]),e("h2",{attrs:{id:"dumpfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dumpfile"}},[t._v("#")]),t._v(" dumpfile")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/dumpfile",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dumpfile"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("转储文件实用程序。 以二进制模式（不要用 CR LF 替换 LF）将文件大小和内容打印到标准输出。\n"),e("a",{attrs:{id:"dumpfile_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dumpfile [arguments...]\n     <file>      被转储的文件\n")])])]),e("h2",{attrs:{id:"dyn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dyn"}},[t._v("#")]),t._v(" dyn")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/dyn",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dyn"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("加载并运行一个没有被编译进 PX4 的二进制文件的动态 PX4 模块")]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dyn ./hello.px4mod start\n")])])]),e("p",[e("a",{attrs:{id:"dyn_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("dyn [arguments...]\n     <file>         包含模块的文件\n     [arguments...] 输入模块的参数\n")])])]),e("h2",{attrs:{id:"failure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#failure"}},[t._v("#")]),t._v(" failure")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/failure",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/failure"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("向系统中注入故障。")]),t._v(" "),e("h3",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("p",[t._v("此系统命令通过 uORB 发送一个机体命令来出发故障。")]),t._v(" "),e("h3",{attrs:{id:"示例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("通过停止GPS来测试GPS故障保护:")]),t._v(" "),e("p",[t._v("failure gps off")]),t._v(" "),e("p",[e("a",{attrs:{id:"failure_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-6"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("failure [arguments...]\n   help          显示此帮助文档\n\n   gps|...       指定的组件\n\n   ok|off|...    指定的故障类型\n     [-i <val>]  传感器实例 (0=all)\n                 默认: 0\n")])])]),e("h2",{attrs:{id:"gpio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gpio"}},[t._v("#")]),t._v(" gpio")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/gpio",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/gpio"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("此命令用于读写GPIO")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpio read <PORT><PIN>/<DEVICE> [PULLDOWN|PULLUP] [--force]\ngpio write <PORT><PIN>/<DEVICE> <VALUE> [PUSHPULL|OPENDRAIN] [--force]\n")])])]),e("h3",{attrs:{id:"示例-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("读取配置为上拉的 PH4 引脚，它的值为高")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpio read H4 PULLUP\n")])])]),e("p",[t._v("1 OK")]),t._v(" "),e("p",[t._v("设置 PE7 的输出值为高")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpio write E7 1 --force\n")])])]),e("p",[t._v("Set the output value on device /dev/gpio1 to high")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpio write /dev/gpio1 1\n")])])]),e("p",[e("a",{attrs:{id:"gpio_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-7"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpio [arguments...]\n   read\n     <PORT><PIN>/<DEVICE> GPIO 的端口和引脚\n     [PULLDOWN|PULLUP] 下拉/上拉\n     [--force]   强制 (忽略板gpio列表)\n\n   write\n     <PORT> <PIN> GPIO 的端口和引脚\n     <VALUE>     要写入的值\n     [PUSHPULL|OPENDRAIN] 推挽/开漏\n     [--force]  强制 (忽略板gpio列表)\n")])])]),e("h2",{attrs:{id:"hardfault-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hardfault-log"}},[t._v("#")]),t._v(" hardfault_log")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/hardfault_log",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/hardfault_log"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Hardfault 实用程序")]),t._v(" "),e("p",[t._v("在启动脚本中用于处理 hardfaults。")]),t._v(" "),e("p",[e("a",{attrs:{id:"hardfault_log_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-8"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hardfault_log <command> [arguments...]\n Commands:\n   check         Check if there's an uncommitted hardfault\n\n   rearm         Drop an uncommitted hardfault\n\n   fault         Generate a hardfault (this command crashes the system :)\n     [0|1]       Hardfault type: 0=divide by 0, 1=Assertion (default=0)\n\n   commit        Write uncommitted hardfault to /fs/microsd/fault_%i.txt (and\n                 rearm, but don't reset)\n\n   count         Read the reboot counter, counts the number of reboots of an\n                 uncommitted hardfault (returned as the exit code of the\n                 program)\n\n   reset         Reset the reboot counter\n")])])]),e("h2",{attrs:{id:"hist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hist"}},[t._v("#")]),t._v(" hist")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/hist",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/hist"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Command-line tool to show the px4 message history. There are no arguments.\n"),e("a",{attrs:{id:"hist_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-9"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("hist [arguments...]\n")])])]),e("h2",{attrs:{id:"i2cdetect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2cdetect"}},[t._v("#")]),t._v(" i2cdetect")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/i2cdetect",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/i2cdetect"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("用于扫描特定总线上的 I2C 设备的实用程序。\n"),e("a",{attrs:{id:"i2cdetect_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-10"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("i2cdetect [arguments...]\n     [-b <val>]  I2C 总线\n                 default: 1\n")])])]),e("h2",{attrs:{id:"led-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#led-control"}},[t._v("#")]),t._v(" led_control")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/led_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/led_control"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-4"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("用于控制和测试（外部）LED 的命令行工具")]),t._v(" "),e("p",[t._v("要使用它，请确保有一个处理 led_control 的 uorb 主题的设备正在运行。")]),t._v(" "),e("p",[t._v("有不同的优先级，例如一个模块可以设置低优先级的颜色，另一个模块可以高优先级闪烁 N 次，闪烁后 LED 自动返回低优先级状态。 该 "),e("code",[t._v("rese")]),t._v(" t命令还可用于返回较低的优先级。")]),t._v(" "),e("h3",{attrs:{id:"示例-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("第一个 LED 闪烁蓝光 5 次：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("led_control blink -c blue -l 0 -n 5\n")])])]),e("p",[e("a",{attrs:{id:"led_control_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-11"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("led_control <command> [arguments...]\n Commands:\n   test          运行一个测试示例\n\n   on            打开 LED\n\n   off           关闭 LED\n\n   reset         复位 LED 优先级\n\n   blink         使LED闪烁 N 次\n     [-n <val>]  闪烁的次数\n                 默认: 3\n     [-s <val>]  设置闪烁速度\n                 值: fast|normal|slow, 默认: normal\n\n   breathe       渐变 LED 亮 & 暗\n\n   flash         以 1Hz 的频率 先快闪两次再熄灭\n\n 以下参数适用于所有除 ‘test’ 的命令:\n     [-c <val>]  color\n                 值: red|blue|green|yellow|purple|amber|cyan|white, 默认:\n                 white\n     [-l <val>]  被控制的 LED : 0, 1, 2, ... (默认=all)\n     [-p <val>]  优先级\n                 默认: 2\n")])])]),e("h2",{attrs:{id:"listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listener"}},[t._v("#")]),t._v(" listener")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/topic_listener",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/topic_listener"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("监听 uORB 主题并将数据打印到控制台的实用程序。")]),t._v(" "),e("p",[t._v("可以通过按 Ctrl+C、Esc 或 Q 随时退出侦听器。")]),t._v(" "),e("p",[e("a",{attrs:{id:"listener_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-12"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("listener <command> [arguments...]\n Commands:\n     <topic_name> uORB 主题名\n     [-i <val>]   主题实例序号\n                  默认: 0\n     [-n <val>]   消息数量\n                  默认: 1\n     [-r <val>]   订阅频率 (0为无限制)\n                  默认: 0\n")])])]),e("h2",{attrs:{id:"mfd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mfd"}},[t._v("#")]),t._v(" mfd")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/mft",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mft"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("交互显示的实用程序\n"),e("a",{attrs:{id:"mfd_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-13"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mfd <command> [arguments...]\n Commands:\n   query         如果不存在返回 ture\n")])])]),e("h2",{attrs:{id:"mtd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mtd"}},[t._v("#")]),t._v(" mtd")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/mtd",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/mtd"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("挂载和测试分区的实用程序（基于板定义的 FRAM/EEPROM 存储）\n"),e("a",{attrs:{id:"mtd_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-14"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mtd <command> [arguments...]\n Commands:\n   status        打印状态信息\n\n   readtest      执行读取测试\n\n   rwtest        执行读写测试\n\n   erase        擦除分区\n\n 命令‘readtest’和‘rwtest'有一个可选的实例索引:\n     [-i <val>]  存储索引 (如果板拥有多个存储)\n                 默认: 0\n\n 命令 'readtest', 'rwtest' and 'erase' 有一个可选的参数:\n     [<partition_name1> [<partition_name2> ...]] 分区名 (eg.\n                 /fs/mtd_params), 未提供时使用系统默认值\n")])])]),e("h2",{attrs:{id:"nshterm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nshterm"}},[t._v("#")]),t._v(" nshterm")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/nshterm",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/nshterm"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在指定端口启动一个 NSH shell。")]),t._v(" "),e("p",[t._v("该命令此前被用于在 USB 串口端口开启一个 shell。 现在运行mavlink，并且可以在mavlink 上使用shell。")]),t._v(" "),e("p",[e("a",{attrs:{id:"nshterm_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-15"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nshterm [arguments...]\n     <file:dev>  启动 shell 的设备 (eg. /dev/ttyACM0)\n")])])]),e("h2",{attrs:{id:"param"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[t._v("#")]),t._v(" param")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/param",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/param"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-5"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("通过 shell 或脚本访问和操作参数的命令。")]),t._v(" "),e("p",[t._v("例如，这在启动脚本中用于设置特定于机身的参数。")]),t._v(" "),e("p",[t._v("更改时会自动保存参数，例如 使用 "),e("code",[t._v("param set")]),t._v("。 它们通常存储在 FRAM 或 SD 卡中。 "),e("code",[t._v("param select")]),t._v(" 可用于更改后续保存的存储位置（需要在每次启动时（重新）配置）。")]),t._v(" "),e("p",[t._v("如果启用了基于 FLASH 的后端（这是在编译时完成的，例如对于 Intel Aero 或 Omnibus）， "),e("code",[t._v("param select")]),t._v(" 则没有任何效果，并且默认始终是 FLASH 后端。 但是 "),e("code",[t._v("param save/load <file>")]),t._v(" 仍可用于写入/读取文件。")]),t._v(" "),e("p",[t._v("每个参数有一个“已使用”的标志，此标志在启动过程参数被读取后被置位。 它只是用于向地面控制站显示相关参数。")]),t._v(" "),e("h3",{attrs:{id:"示例-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-5"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("更改机身并确保已加载机身的默认参数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("param set SYS_AUTOSTART 4001\nparam set SYS_AUTOCONFIG 1\nreboot\n")])])]),e("p",[e("a",{attrs:{id:"param_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-16"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("param <command> [arguments...]\n Commands:\n   load          Load params from a file (overwrite all)\n     [<file>]    File name (use default if not given)\n\n   import        Import params from a file\n     [<file>]    File name (use default if not given)\n\n   save          Save params to a file\n     [<file>]    File name (use default if not given)\n\n   select        Select default file\n     [<file>]    File name\n\n   select-backup Select default file\n     [<file>]    File name\n\n   show          Show parameter values\n     [-a]        Show all parameters (not just used)\n     [-c]        Show only changed params (unused too)\n     [-q]        quiet mode, print only param value (name needs to be exact)\n     [<filter>]  Filter by param name (wildcard at end allowed, eg. sys_*)\n\n   show-for-airframe Show changed params for airframe config\n\n   status        Print status of parameter system\n\n   set           Set parameter to a value\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   set-default   Set parameter default to a value\n     [-s]        If provided, silent errors if parameter doesn't exists\n     <param_name> <value> Parameter name and value to set\n     [fail]      If provided, let the command fail if param is not found\n\n   compare       Compare a param with a value. 如果相等命令会执行成功\n     [-s]        如果提供，参数不存在时引起无声错误\n     <param_name> <value> 参数名和被比较的值\n\n   greater       将参数同某个值比较。 如果参数值比该值大\n                 则命令执行成功\n     [-s]        将参数同某个值比较。\n     <param_name> <value> 参数名和被比较的值\n     <param_name> <value> 参数名和被比较的值\n\n   touch         标记已使用的参数\n     [<param_name1> [<param_name2>]] 参数名 (一个或多个)\n\n   reset         复位指定的参数为默认值\n     [<param1> [<param2>]] 复位的参数名 (结尾的通配符是被允许的)\n\n   reset_all     复位所有的参数为默认值\n     [<exclude1> [<exclude2>]] 不复位匹配参数 (结尾的通配符是被允许的)\n\n   index         显示给定索引的参数\n     <index>     索引: 一个 >= 0 的整数\n\n   index_used    显示给定索引的已用参数\n     <index>     索引: 一个 >= 0 的整数\n\n   find          显示参数的索引\n     <param>     参数名\n")])])]),e("h2",{attrs:{id:"payload-deliverer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#payload-deliverer"}},[t._v("#")]),t._v(" payload_deliverer")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/payload_deliverer",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/payload_deliverer"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-6"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("Handles payload delivery with either Gripper or a Winch with an appropriate timeout / feedback sensor setting, and communicates back the delivery result as an acknowledgement internally")]),t._v(" "),e("p",[e("a",{attrs:{id:"payload_deliverer_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-17"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("payload_deliverer <command> [arguments...]\n Commands:\n   start\n\n   gripper_test  Tests the Gripper's release & grabbing sequence\n\n   gripper_open  Opens the gripper\n\n   gripper_close Closes the gripper\n\n   stop\n\n   status        print status info\n")])])]),e("h2",{attrs:{id:"perf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#perf"}},[t._v("#")]),t._v(" perf")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/perf",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/perf"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("性能计数器打印工具\n"),e("a",{attrs:{id:"perf_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-18"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-18"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("perf [arguments...]\n   reset         复位所有计数器\n\n   latency       打印 HRT 定时器延迟柱状图\n\n 如果未给出参数则打印所有性能计数器\n")])])]),e("h2",{attrs:{id:"reboot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reboot"}},[t._v("#")]),t._v(" reboot")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/reboot",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/reboot"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("重启系统\n"),e("a",{attrs:{id:"reboot_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-19"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-19"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("reboot [arguments...]\n     [-b]        重启进入bootloader\n     [lock|unlock] 使用/释放关机锁 (用于测试)\n")])])]),e("h2",{attrs:{id:"sd-bench"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sd-bench"}},[t._v("#")]),t._v(" sd_bench")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/sd_bench",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/sd_bench"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("测试SD卡速度\n"),e("a",{attrs:{id:"sd_bench_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-20"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sd_bench [arguments...]\n     [-b <val>]  每次读/写的块大小\n                 默认: 4096\n     [-r <val>]  运行次数\n                 默认: 5\n     [-d <val>]  以毫秒为单位的运行持续时间\n                 默认: 2000\n     [-k]        保持测试文件\n     [-s]        在每个块后调用 fsync  (默认=每次运行结束)\n     [-u]        使用非对其数据测试性能\n     [-v]        校验数据和块序号\n")])])]),e("h2",{attrs:{id:"sd-stress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sd-stress"}},[t._v("#")]),t._v(" sd_stress")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/sd_stress",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/sd_stress"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("在 SD 卡上测试操作\n"),e("a",{attrs:{id:"sd_stress_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-21"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-21"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sd_stress [arguments...]\n     [-r <val>]  运行次数\n                 默认: 5\n     [-b <val>]  字节数量\n                 默认100: 100\n")])])]),e("h2",{attrs:{id:"serial-passthru"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-passthru"}},[t._v("#")]),t._v(" serial_passthru")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/serial_passthru",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/serial_passthru"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("把数据从一个设备传输到另一个设备。")]),t._v(" "),e("p",[t._v("This can be used to use u-center connected to USB with a GPS on a serial port.")]),t._v(" "),e("p",[e("a",{attrs:{id:"serial_passthru_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-22"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-22"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("serial_passthru [arguments...]\n     -e <val>    External device path\n                 values: <file:dev>\n     -d <val>    Internal device path\n                 values: <file:dev>\n     [-b <val>]  Baudrate\n                 default: 115200\n     [-t]        Track the External devices baudrate on internal device\n")])])]),e("h2",{attrs:{id:"系统时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统时间"}},[t._v("#")]),t._v(" 系统时间")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/system_time",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/system_time"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"描述-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述-7"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),e("p",[t._v("Command-line tool to set and get system time.")]),t._v(" "),e("h3",{attrs:{id:"示例-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-6"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("Set the system time and read it back")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("system_time set 1600775044\nsystem_time get\n")])])]),e("p",[e("a",{attrs:{id:"system_time_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-23"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-23"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("system_time <command> [arguments...]\n Commands:\n   set           Set the system time, provide time in unix epoch time format\n\n   get           Get the system time\n")])])]),e("h2",{attrs:{id:"top"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/top",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/top"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Monitor running processes and their CPU, stack usage, priority and state\n"),e("a",{attrs:{id:"top_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-24"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("top [arguments...]\n   once          print load only once\n")])])]),e("h2",{attrs:{id:"usb-connected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usb-connected"}},[t._v("#")]),t._v(" usb_connected")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/usb_connected",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/usb_connected"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Utility to check if USB is connected. Was previously used in startup scripts. A return value of 0 means USB is connected, 1 otherwise.\n"),e("a",{attrs:{id:"usb_connected_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-25"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-25"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("usb_connected [arguments...]\n")])])]),e("h2",{attrs:{id:"ver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ver"}},[t._v("#")]),t._v(" ver")]),t._v(" "),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/ver",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/ver"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Tool to print various version information\n"),e("a",{attrs:{id:"ver_usage"}})]),t._v(" "),e("h3",{attrs:{id:"用法-26"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用法-26"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ver <command> [arguments...]\n Commands:\n   hw            Hardware architecture\n\n   mcu           MCU info\n\n   git           git version information\n\n   bdate         Build date and time\n\n   gcc           Compiler info\n\n   bdate         Build date and time\n\n   px4guid       PX4 GUID\n\n   uri           Build URI\n\n   all           Print all versions\n\n   hwcmp         Compare hardware version (returns 0 on match)\n     <hw> [<hw2>] Hardware to compare against (eg. PX4_FMU_V4). An OR comparison\n                 is used if multiple are specified\n\n   hwtypecmp     Compare hardware type (returns 0 on match)\n     <hwtype> [<hwtype2>] Hardware type to compare against (eg. V2). An OR\n                 comparison is used if multiple are specified\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);