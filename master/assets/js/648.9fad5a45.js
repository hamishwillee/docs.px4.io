(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{2355:function(a,e,t){"use strict";t.r(e);var r=t(18),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"poor-man-s-sampling-profiler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#poor-man-s-sampling-profiler"}},[a._v("#")]),a._v(" Poor Man's Sampling Profiler")]),a._v(" "),r("p",[a._v("本节介绍如何通过分析来评估 PX4 系统的性能。")]),a._v(" "),r("h2",{attrs:{id:"方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[a._v("#")]),a._v(" 方法")]),a._v(" "),r("p",[a._v("PMSP 是一种 shell 脚本,它通过定期中断固件的执行来运行，便对当前堆栈跟踪进行采样。 采样的堆栈跟踪将追加到文本文件中。 一旦采样完成（通常需要大约一个小时或更长时间），收集的堆栈跟踪将 "),r("em",[a._v("folded")]),a._v("。 "),r("em",[a._v("folding")]),a._v(" 的结果是另一个包含相同堆栈跟踪的文本文件，只是所有类似的堆栈跟踪（即在程序中的同一点获得的堆栈跟踪）都连接在一起，并记录其出现次数。 然后将折叠的堆栈输入到可视化脚本中，为此，我们使用了 "),r("a",{attrs:{href:"http://www.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("FlameGraph--开源堆栈跟踪可视化 "),r("OutboundLink")],1),a._v("。")]),a._v(" "),r("h2",{attrs:{id:"基本用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),r("p",[a._v("探查器的基本用法可通过生成系统使用。 例如，下面的命令生成和探查出 px4_fmu-v4pro 目标的10000个样本（提取 "),r("em",[a._v("FlameGraph")]),a._v(" 并根据需要将其添加到路径中）。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("make px4_fmu-v4pro_default profile\n")])])]),r("p",[a._v("有关对生成过程的更多控制，包括设置样本数，请参阅 "),r("a",{attrs:{href:"#implementation"}},[a._v("Implementation")]),a._v("。")]),a._v(" "),r("h2",{attrs:{id:"理解输出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#理解输出"}},[a._v("#")]),a._v(" 理解输出")]),a._v(" "),r("p",[a._v("下面提供了一个示例输出的屏幕截图（请注意，它在这里不是交互式的）：")]),a._v(" "),r("p",[r("img",{attrs:{src:t(658),alt:"FlameGraph 实例"}})]),a._v(" "),r("p",[a._v("在火焰图上，水平水平表示堆叠帧，而每个帧的宽度与采样次数成正比。 反过来，函数最终被采样的次数也与其执行的持续时间频率成正比。")]),a._v(" "),r("h2",{attrs:{id:"可能的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可能的问题"}},[a._v("#")]),a._v(" 可能的问题")]),a._v(" "),r("p",[a._v("该脚本是作为一个临时解决方案开发的，因此存在一些问题。 使用时请注意：")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("如果 GDB 出现故障，脚本可能无法检测到该问题，并继续运行。 在这种情况下，显然不会产生可用的堆栈。 为了避免这种情况，用户应定期检查文件 "),r("code",[a._v("/tmp/pmpn-gdberr.log")]),a._v("，其中包含最近调用 GDB 的 stderr 输出。 将来，应修改脚本以在安静模式下调用 GDB，在安静模式下，它将通过其退出代码指示问题。")])]),a._v(" "),r("li",[r("p",[a._v("有时 GDB 一直运行，同时采样堆栈跟踪。 在此失败期间，目标将无限期停止。 解决方案是手动中止脚本，然后使用 "),r("code",[a._v("--append")]),a._v(" 选项再次重新启动它。 将来，应修改脚本以对每次 GDB 调用强制执行超时。")])]),a._v(" "),r("li",[r("p",[a._v("不支持多线程环境。 这不会影响单个核心嵌入式目标，因为它们总是在一个线程中执行，但这一限制使探查器与许多其他应用程序不兼容。 将来，应修改堆栈文件夹以支持每个示例的多个堆栈跟踪。")])])]),a._v(" "),r("p",[r("a",{attrs:{id:"implementation"}})]),a._v(" "),r("h2",{attrs:{id:"实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),r("p",[a._v("该脚本位于 "),r("code",[a._v("Debug/poor-mans-profiler.sh")]),a._v("。 一旦启动，它将执行指定的时间间隔的样本数。 收集采样会保存在系统临时文件夹的文本文件（典型如"),r("code",[a._v("tmp")]),a._v("）。 一旦采样完成，脚本会自动调用栈文件夹，将输出内容保存在 temp 文件夹下的文件中。 如果栈成功收集，脚本会调用 "),r("em",[a._v("FlameGraph")]),a._v(" 脚本并且将结果保存在 SVG 文件。 请注意，不是所有的镜像工具都支持：推荐使用网页浏览器打开 SVG 文件。")]),a._v(" "),r("p",[a._v("FlameGraph 脚本必须驻留在 "),r("code",[a._v("PATH")]),a._v("，否则 PMSP 将拒绝启动。")]),a._v(" "),r("p",[a._v("PMSP 使用 GDB 收集堆栈跟踪。 目前，它使用 "),r("code",[a._v("arm-none-eabi-gdb")]),a._v("，今后可能会添加其他工具链。")]),a._v(" "),r("p",[a._v("为了能够映射内存地址到符号，脚本需要被当前运行的文件中提及。 这个是在 "),r("code",[a._v("--elf=&lt;file&gt;")]),a._v(" 的选项帮助下完成的，该选项需要一个指向当前执行ELF位置的路径来执行（相对于储存库的root）。")]),a._v(" "),r("p",[a._v("用法示例：")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v("\n")])])]),r("p",[a._v("请注意，每次启动脚本都会覆盖旧堆栈。 如果你希望在后以前的栈后面追加而不是覆盖的话，使用选项 "),r("code",[a._v("--append")]),a._v("：")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("./poor-mans-profiler.sh --elf"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" --append\n")])])]),r("p",[a._v("正如人们可能会怀疑的那样，"),r("code",[a._v("--append")]),a._v(" 带 "),r("code",[a._v("--nsamples=0")]),a._v(" 将指示脚本只重新生成 SVG 而根本不访问目标。")]),a._v(" "),r("p",[a._v("请阅读脚本，以更深入地了解其工作原理。")]),a._v(" "),r("h2",{attrs:{id:"鸣谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[a._v("#")]),a._v(" 鸣谢")]),a._v(" "),r("p",[a._v("该想法的功劳归属 "),r("a",{attrs:{href:"https://dom.as/2009/02/15/poor-mans-contention-profiling/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mark Callaghan and Domas Mituzas"),r("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);e.default=s.exports},658:function(a,e,t){a.exports=t.p+"assets/img/flamegraph-example.6536b608.png"}}]);