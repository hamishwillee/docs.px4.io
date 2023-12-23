(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{3501:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"poor-man-s-sampling-profiler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#poor-man-s-sampling-profiler"}},[e._v("#")]),e._v(" Poor Man's Sampling Profiler")]),e._v(" "),r("p",[e._v("This section describes how you can use the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/nuttx/Debug/poor-mans-profiler.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Poor Man's Sampling Profiler"),r("OutboundLink")],1),e._v(" (PMSP) shell script to assess the performance of PX4. This is an implementation of a known method originally invented by "),r("a",{attrs:{href:"https://poormansprofiler.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mark Callaghan and Domas Mituzas"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),r("p",[e._v("PMSP 是一种 shell 脚本,它通过定期中断固件的执行来运行，便对当前堆栈跟踪进行采样。 采样的堆栈跟踪将追加到文本文件中。 Once sampling is finished (which normally takes about an hour or more), the collected stack traces are "),r("em",[e._v("folded")]),e._v(". The result of "),r("em",[e._v("folding")]),e._v(" is another text file that contains the same stack traces, except that all similar stack traces (i.e. those that were obtained at the same point in the program) are joined together, and the number of their occurrences is recorded. 然后将折叠的堆栈输入到可视化脚本中，为此，我们使用了 "),r("a",{attrs:{href:"http://www.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlameGraph--开源堆栈跟踪可视化 "),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"基本用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[e._v("#")]),e._v(" 基本用法")]),e._v(" "),r("h3",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("探查器的基本用法可通过生成系统使用。 例如，下面的命令生成和探查出 px4_fmu-v4pro 目标的10000个样本（提取 "),r("em",[e._v("FlameGraph")]),e._v(" 并根据需要将其添加到路径中）。 You will then need a "),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#debug-probes"}},[e._v("debug probe")]),e._v(" (such as the DroneCode Probe), to run the GDB server and interact with the board.")],1),e._v(" "),r("h3",{attrs:{id:"determine-the-debugger-device"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#determine-the-debugger-device"}},[e._v("#")]),e._v(" Determine the Debugger Device")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("poor-mans-profiler.sh")]),e._v(" automatically detects and uses the correct USB device if you use it with a "),r("RouterLink",{attrs:{to:"/zh/debug/probe_bmp.html#dronecode-probe"}},[e._v("DroneCode Probe")]),e._v(". If you use a different kind of probe you may need to pass in the specific "),r("em",[e._v("device")]),e._v(" on which the debugger is located. You can use the bash command "),r("code",[e._v("ls -alh /dev/serial/by-id/")]),e._v(" to enumerate the possible devices on Ubuntu. For example the following devices are enumerated with a Pixhawk 4 and DroneCode Probe connected over USB:")],1),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("user@ubuntu:~/PX4-Autopilot$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -alh /dev/serial/by-id/\ntotal "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\ndrwxr-xr-x "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" root root "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" Apr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":57 "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\ndrwxr-xr-x "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" root root  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v(" Apr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":48 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\nlrwxrwxrwx "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" Apr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":48 usb-3D_Robotics_PX4_FMU_v5.x_0-if00 -"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ttyACM0\nlrwxrwxrwx "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" Apr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":57 usb-Black_Sphere_Technologies_Black_Magic_Probe_BFCCB401-if00 -"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ttyACM1\nlrwxrwxrwx "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" root root  "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(" Apr "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v(":57 usb-Black_Sphere_Technologies_Black_Magic_Probe_BFCCB401-if02 -"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ttyACM2\n")])])]),r("p",[e._v("In this case, the script would automatically pick up the device named "),r("code",[e._v("*Black_Magic_Probe*-if00")]),e._v(". But if you were using a different device you would be able discover the appropriate id from the listing above.")]),e._v(" "),r("p",[e._v("Then pass in the appropriate device using the "),r("code",[e._v("--gdbdev")]),e._v(" argument like this:")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v("\n")])])]),r("h3",{attrs:{id:"running"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[e._v("#")]),e._v(" Running")]),e._v(" "),r("p",[e._v("在火焰图上，水平水平表示堆叠帧，而每个帧的宽度与采样次数成正比。 For example, the following command builds and profiles px4_fmu-v4pro target with 10000 samples (fetching "),r("em",[e._v("FlameGraph")]),e._v(" and adding it to the path as needed).")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v(" --append\n")])])]),r("p",[e._v("For more control over the build process, including setting the number of samples, see the "),r("a",{attrs:{href:"#implementation"}},[e._v("Implementation")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"理解输出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解输出"}},[e._v("#")]),e._v(" 理解输出")]),e._v(" "),r("p",[e._v("A screenshot of an example output is provided below (note that it is not interactive here):")]),e._v(" "),r("p",[r("img",{attrs:{src:a(729),alt:"FlameGraph Example"}})]),e._v(" "),r("p",[e._v("PMSP 使用 GDB 收集堆栈跟踪。 目前，它使用 "),r("code",[e._v("arm-none-eabi-gdb")]),e._v("，今后可能会添加其他工具链。")]),e._v(" "),r("h2",{attrs:{id:"可能的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可能的问题"}},[e._v("#")]),e._v(" 可能的问题")]),e._v(" "),r("p",[e._v("为了能够映射内存地址到符号，脚本需要被当前运行的文件中提及。 这个是在 "),r("code",[e._v("--elf=&lt;file&gt;")]),e._v(" 的选项帮助下完成的，该选项需要一个指向当前执行ELF位置的路径来执行（相对于储存库的root）。")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("如果 GDB 出现故障，脚本可能无法检测到该问题，并继续运行。 在这种情况下，显然不会产生可用的堆栈。 为了避免这种情况，用户应定期检查文件 "),r("code",[e._v("/tmp/pmpn-gdberr.log")]),e._v("，其中包含最近调用 GDB 的 stderr 输出。 将来，应修改脚本以在安静模式下调用 GDB，在安静模式下，它将通过其退出代码指示问题。")])]),e._v(" "),r("li",[r("p",[e._v("有时 GDB 一直运行，同时采样堆栈跟踪。 在此失败期间，目标将无限期停止。 解决方案是手动中止脚本，然后使用 "),r("code",[e._v("--append")]),e._v(" 选项再次重新启动它。 将来，应修改脚本以对每次 GDB 调用强制执行超时。")])]),e._v(" "),r("li",[r("p",[e._v("不支持多线程环境。 这不会影响单个核心嵌入式目标，因为它们总是在一个线程中执行，但这一限制使探查器与许多其他应用程序不兼容。 将来，应修改堆栈文件夹以支持每个示例的多个堆栈跟踪。")])])]),e._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),r("p",[e._v("The script is located at "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/platforms/nuttx/Debug/poor-mans-profiler.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("/platforms/nuttx/Debug/poor-mans-profiler.sh"),r("OutboundLink")],1),e._v(" Once launched, it will perform the specified number of samples with the specified time interval. Collected samples will be stored in a text file in the system temp directory (typically "),r("code",[e._v("/tmp")]),e._v("). Once sampling is finished, the script will automatically invoke the stack folder, the output of which will be stored in an adjacent file in the temp directory. If the stacks were folded successfully, the script will invoke the "),r("em",[e._v("FlameGraph")]),e._v(" script and store the result in an interactive SVG file. Please note that not all image viewers support interactive images; it is recommended to open the resulting SVG in a web browser.")]),e._v(" "),r("p",[e._v("The FlameGraph script must reside in the "),r("code",[e._v("PATH")]),e._v(", otherwise PMSP will refuse to launch.")]),e._v(" "),r("p",[e._v("PMSP uses GDB to collect the stack traces. Currently it uses "),r("code",[e._v("arm-none-eabi-gdb")]),e._v(", other toolchains may be added in the future.")]),e._v(" "),r("p",[e._v("In order to be able to map memory locations to symbols, the script needs to be referred to the executable file that is currently running on the target. This is done with the help of the option "),r("code",[e._v("--elf=<file>")]),e._v(", which expects a path (relative to the root of the repository) pointing to the location of the currently executing ELF.")]),e._v(" "),r("p",[e._v("该想法的功劳归属 "),r("a",{attrs:{href:"https://dom.as/2009/02/15/poor-mans-contention-profiling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mark Callaghan and Domas Mituzas"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v("\n")])])]),r("p",[e._v("Note that every launch of the script will overwrite the old stacks. Should you want to append to the old stacks rather than overwrite them, use the option "),r("code",[e._v("--append")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v(" --append\n")])])]),r("p",[e._v("As one might suspect, "),r("code",[e._v("--append")]),e._v(" with "),r("code",[e._v("--nsamples=0")]),e._v(" will instruct the script to only regenerate the SVG without accessing the target at all.")]),e._v(" "),r("p",[e._v("Please read the script for a more in depth understanding of how it works.")])])}),[],!1,null,null,null);t.default=s.exports},729:function(e,t,a){e.exports=a.p+"assets/img/flamegraph-example.bfc2a5aa.png"}}]);