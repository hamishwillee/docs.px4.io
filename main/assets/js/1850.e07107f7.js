(window.webpackJsonp=window.webpackJsonp||[]).push([[1850],{3420:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在-raspberry-pi-os-上使用-pilotpi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-raspberry-pi-os-上使用-pilotpi"}},[s._v("#")]),s._v(" 在 Raspberry Pi OS 上使用 PilotPi")]),s._v(" "),t("h2",{attrs:{id:"开发者快速指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发者快速指南"}},[s._v("#")]),s._v(" 开发者快速指南")]),s._v(" "),t("h3",{attrs:{id:"操作系统镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作系统镜像"}},[s._v("#")]),s._v(" 操作系统镜像")]),s._v(" "),t("p",[s._v("总是推荐使用最新官方的 "),t("a",{attrs:{href:"https://downloads.raspberrypi.org/raspios_lite_armhf_latest",target:"_blank",rel:"noopener noreferrer"}},[s._v("Raspberry Pi OS Lite"),t("OutboundLink")],1),s._v(" 镜像。")]),s._v(" "),t("p",[s._v("默认你已经通过ssh连接到了树莓派。")]),s._v(" "),t("h3",{attrs:{id:"设置快速访问-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置快速访问-可选"}},[s._v("#")]),s._v(" 设置快速访问(可选)")]),s._v(" "),t("h4",{attrs:{id:"主机名和-mdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主机名和-mdns"}},[s._v("#")]),s._v(" 主机名和 mDNS")]),s._v(" "),t("p",[s._v("mDNS 帮助您使用主机名替代IP地址连接到您的树莓派。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[s._v("导航到 "),t("strong",[s._v("Network Options > Hostname")]),s._v("。 设置并退出。 您也可能想要设置 "),t("a",{attrs:{href:"https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("无密码认证"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"配置操作系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置操作系统"}},[s._v("#")]),s._v(" 配置操作系统")]),s._v(" "),t("h4",{attrs:{id:"config-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-txt"}},[s._v("#")]),s._v(" config.txt")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/config.txt\n")])])]),t("p",[s._v("将文件内容替换为：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable sc16is752 overlay")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sc16is752-spi1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-1 and set the frequency to 400KHz")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_arm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on,i2c_arm_baudrate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("400000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable spidev0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("spi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable RC input")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enable_uart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enable I2C-0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtparam")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("i2c_vc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# switch Bluetooth to miniuart")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dtoverlay")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("miniuart-bt\n")])])]),t("h4",{attrs:{id:"cmdline-txt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmdline-txt"}},[s._v("#")]),s._v(" cmdline.txt")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[t("strong",[s._v("Interfacing Options > Serial > login shell = No > hardware = Yes")]),s._v(". 启用 UART 但禁用登陆shell。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /boot/cmdline.txt\n")])])]),t("p",[s._v("在最后添加 "),t("code",[s._v("isolcpus=2")]),s._v(" 整个文件将是：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("console")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tty1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PARTUUID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxxxxxxx-xx "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rootfstype")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ext4 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("elevator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deadline fsck.repair"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes rootwait "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isolcpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),t("p",[s._v("这告诉 Linux 内核不要在 CPU 核心2 上调度任何进程。 我们将在稍后手动在该核心运行 PX4。")]),s._v(" "),t("p",[s._v("重启并SSH登陆到您的树莓派。")]),s._v(" "),t("p",[s._v("检查串口：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/tty*\n")])])]),t("p",[s._v("应该有 "),t("code",[s._v("/dev/ttyAMA0")]),s._v(", "),t("code",[s._v("/dev/ttySC0")]),s._v(" 和 "),t("code",[s._v("/dev/ttySC1")]),s._v("。")]),s._v(" "),t("p",[s._v("检查 I2C：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/i2c*\n")])])]),t("p",[s._v("应该有 "),t("code",[s._v("/dev/i2c-0")]),s._v(" 和 "),t("code",[s._v("/dev/i2c-1")])]),s._v(" "),t("p",[s._v("检查SPI：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/spidev*\n")])])]),t("p",[s._v("应该有 "),t("code",[s._v("/dev/spidev0.0")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"rc-local"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rc-local"}},[s._v("#")]),s._v(" rc.local")]),s._v(" "),t("p",[s._v("在本节中，我们将在 "),t("strong",[s._v("rc.local")]),s._v(" 中配置自动启动脚本。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" /etc/rc.local\n")])])]),t("p",[s._v("把下面内容添加到文件中，且放在 "),t("code",[s._v("exit 0")]),s._v(" 之上：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/export\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"in"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/gpio25/direction\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/gpio/gpio25/value"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Launching PX4"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/pi/px4 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -d -s pilotpi_mc.config "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /home/pi/px4/px4.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"25"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/gpio/unexport\n")])])]),t("p",[s._v("保存并退出。")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),t("p",[s._v("Don't forget to turn off the switch when it is not needed.")])]),s._v(" "),t("h4",{attrs:{id:"csi-相机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csi-相机"}},[s._v("#")]),s._v(" CSI 相机")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),t("p",[s._v("Enable CSI camera will stop anything works on I2C-0.")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" raspi-config\n")])])]),t("p",[t("strong",[s._v("Interfacing Options > Camera")])]),s._v(" "),t("h3",{attrs:{id:"构建代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建代码"}},[s._v("#")]),s._v(" 构建代码")]),s._v(" "),t("p",[s._v("To get the "),t("em",[s._v("very latest")]),s._v(" version onto your computer, enter the following command into a terminal:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),t("p",[s._v("This is all you need to do just to build the latest code.")])]),s._v(" "),t("h4",{attrs:{id:"为-raspberry-pi-os-交叉编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为-raspberry-pi-os-交叉编译"}},[s._v("#")]),s._v(" 为 Raspberry Pi OS 交叉编译")]),s._v(" "),t("p",[s._v("然后上传：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".X.X\n")])])]),t("p",[s._v("通过 ssh 连接并运行它：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("AUTOPILOT_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pi_hostname.local\n")])])]),t("p",[s._v("PX4 已配置使用多旋翼模型启动。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PX4-Autopilot\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default\n")])])]),t("p",[s._v("如果在树莓派上运行PX4时遇到了以下问题：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" scumaker_pilotpi_default upload\n")])])]),t("p",[s._v("这时应当使用基于 Docker 的编译。")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" px4\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" taskset -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ./bin/px4 -s pilotpi_mc.config\n")])])]),t("p",[s._v("在执行下一步之前，先清除现有构建目录：")]),s._v(" "),t("p",[s._v("以下方法可以获得与CI相同的编译工具与环境。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bin/px4: /lib/xxxx/xxxx: version `GLIBC_2.29' not found (required by bin/px4)\n")])])]),t("p",[s._v("如果您是首次使用 Docker 进行编译，请参考"),t("a",{attrs:{href:"https://dev.px4.io/master/en/test_and_ci/docker.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方说明"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("在 PX4-Autopilot 文件夹下执行：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf build/scumaker_pilotpi_default\n")])])]),t("h3",{attrs:{id:"备选构建方法-使用-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备选构建方法-使用-docker"}},[s._v("#")]),s._v(" 备选构建方法 (使用 docker)")]),s._v(" "),t("p",[s._v("只是为了编译代码，则可以执行：")]),s._v(" "),t("p",[s._v("If you are compiling for the first time with docker, please refer to the "),t("RouterLink",{attrs:{to:"/zh/test_and_ci/docker.html#prerequisites"}},[s._v("official docs")]),s._v(".")],1),s._v(" "),t("p",[s._v("混控器在 "),t("code",[s._v("pilotpi_xx.conf")]),s._v(" 文件中启用：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export AUTOPILOT_HOST=192.168.X.X; export NO_NINJA_BUILD=1; make scumaker_pilotpi_default upload"')]),s._v("\n")])])]),t("p",[s._v("所有可用的混控配置都存储在 "),t("code",[s._v("etc/mixers")]),s._v(" 中。 您也可以自己创建一个。\n:::")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),t("p",[s._v("If your IDE doesn't support ninja build, "),t("code",[s._v("NO_NINJA_BUILD=1")]),s._v(" option will help. You can compile without uploading too. Just remove "),t("code",[s._v("upload")]),s._v(" target.")])]),s._v(" "),t("p",[s._v("It is also possible to just compile the code with command:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("./Tools/docker_run.sh "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"make scumaker_pilotpi_default"')]),s._v("\n")])])]),t("h3",{attrs:{id:"后期配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后期配置"}},[s._v("#")]),s._v(" 后期配置")]),s._v(" "),t("p",[s._v("示例输出")]),s._v(" "),t("h4",{attrs:{id:"actuator-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actuator-configuration"}},[s._v("#")]),s._v(" Actuator Configuration")]),s._v(" "),t("p",[s._v("First set the "),t("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[s._v("CA_AIRFRAME")]),s._v(" parameter for your vehicle.")],1),s._v(" "),t("p",[s._v("You will then be able to assign outputs using the normal "),t("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[s._v("Actuator Configuration")]),s._v(" configuration screen (an output tab will appear for the RasPi PWM output driver).")],1),s._v(" "),t("h4",{attrs:{id:"external-compass"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-compass"}},[s._v("#")]),s._v(" External Compass")]),s._v(" "),t("p",[s._v("In the startup script("),t("code",[s._v("*.config")]),s._v("), you will find")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# external GPS & compass")]),s._v("\ngps start -d /dev/ttySC0 -i uart -p ubx -s\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#hmc5883 start -X")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ist8310 start -X")]),s._v("\n")])])]),t("p",[s._v("Uncomment the correct one for your case. Not sure which compass comes up with your GPS module? Execute the following commands and see the output:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" i2c-tools\ni2cdetect -y "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("Sample output:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f\n00:          -- -- -- -- -- -- -- -- -- -- -- 0e --\n10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- 1e --\n20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --\n70: -- -- -- -- -- -- -- --\n")])])]),t("p",[t("code",[s._v("1e")]),s._v(" indicates a HMC5883 based compass is mounted on external I2C bus. Similarly, IST8310 has a value of "),t("code",[s._v("0e")]),s._v(".")]),s._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),t("p",[s._v("Generally you only have one of them. Other devices will also be displayed here if they are connected to external I2C bus.("),t("code",[s._v("/dev/i2c-0")]),s._v(")")])])])}),[],!1,null,null,null);a.default=r.exports}}]);