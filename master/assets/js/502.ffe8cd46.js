(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1549:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"poor-man-s-sampling-profiler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poor-man-s-sampling-profiler"}},[e._v("#")]),e._v(" Poor Man's Sampling Profiler")]),e._v(" "),s("p",[e._v("This section describes how to assess performance of the PX4 system by means of profiling.")]),e._v(" "),s("h2",{attrs:{id:"approach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approach"}},[e._v("#")]),e._v(" Approach")]),e._v(" "),s("p",[e._v("PMSP is a shell script that operates by interrupting execution of the firmware periodically in order to sample the current stack trace.\nSampled stack traces are appended into a text file.\nOnce sampling is finished (which normally takes about an hour or more), the collected stack traces are "),s("em",[e._v("folded")]),e._v(".\nThe result of "),s("em",[e._v("folding")]),e._v(" is another text file that contains the same stack traces, except that all similar stack traces (i.e. those that were obtained at the same point in the program) are joined together, and the number of their occurrences is recorded.\nThe folded stacks are then fed into the visualization script, for which purpose we employ "),s("a",{attrs:{href:"http://www.brendangregg.com/flamegraphs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlameGraph - an open source stack trace visualizer"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"basic-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[e._v("#")]),e._v(" Basic Usage")]),e._v(" "),s("p",[e._v("Basic usage of the profiler is available through the build system.\nFor example, the following command builds and profiles px4_fmu-v4pro target with 10000 samples (fetching "),s("em",[e._v("FlameGraph")]),e._v(" and adding it to the path as needed).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("make px4_fmu-v4pro_default profile\n")])])]),s("p",[e._v("For more control over the build process, including setting the number of samples, see the "),s("a",{attrs:{href:"#implementation"}},[e._v("Implementation")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"understanding-the-output"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-output"}},[e._v("#")]),e._v(" Understanding the Output")]),e._v(" "),s("p",[e._v("A screenshot of an example output is provided below (note that it is not interactive here):")]),e._v(" "),s("p",[s("img",{attrs:{src:a(674),alt:"FlameGraph Example"}})]),e._v(" "),s("p",[e._v("On the flame graph, the horizontal levels represent stack frames, whereas the width of each frame is proportional to the number of times it was sampled.\nIn turn, the number of times a function ended up being sampled is proportional to the duration times frequency of its execution.")]),e._v(" "),s("h2",{attrs:{id:"possible-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#possible-issues"}},[e._v("#")]),e._v(" Possible Issues")]),e._v(" "),s("p",[e._v("The script was developed as an ad-hoc solution, so it has some issues.\nPlease watch out for them while using it:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("If GDB is malfunctioning, the script may fail to detect that, and continue running.\nIn this case, obviously, no usable stacks will be produced.\nIn order to avoid that, the user should periodically check the file "),s("code",[e._v("/tmp/pmpn-gdberr.log")]),e._v(", which contains the stderr output of the most recent invocation of GDB.\nIn the future the script should be modified to invoke GDB in quiet mode, where it will indicate issues via its exit code.")])]),e._v(" "),s("li",[s("p",[e._v("Sometimes GDB just sticks forever while sampling the stack trace.\nDuring this failure, the target will be halted indefinitely.\nThe solution is to manually abort the script and re-launch it again with the "),s("code",[e._v("--append")]),e._v(" option.\nIn the future the script should be modified to enforce a timeout for every GDB invocation.")])]),e._v(" "),s("li",[s("p",[e._v("Multithreaded environments are not supported.\nThis does not affect single core embedded targets, since they always execute in one thread, but this limitation makes the profiler incompatible with many other applications.\nIn the future the stack folder should be modified to support multiple stack traces per sample.")])])]),e._v(" "),s("p",[s("a",{attrs:{id:"implementation"}})]),e._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("p",[e._v("The script is located at "),s("code",[e._v("Debug/poor-mans-profiler.sh")]),e._v(".\nOnce launched, it will perform the specified number of samples with the specified time interval.\nCollected samples will be stored in a text file in the system temp directory (typically "),s("code",[e._v("/tmp")]),e._v(").\nOnce sampling is finished, the script will automatically invoke the stack folder, the output of which will be stored in an adjacent file in the temp directory.\nIf the stacks were folded successfully, the script will invoke the "),s("em",[e._v("FlameGraph")]),e._v(" script and store the result in an interactive SVG file.\nPlease note that not all image viewers support interactive images;\nit is recommended to open the resulting SVG in a web browser.")]),e._v(" "),s("p",[e._v("The FlameGraph script must reside in the "),s("code",[e._v("PATH")]),e._v(", otherwise PMSP will refuse to launch.")]),e._v(" "),s("p",[e._v("PMSP uses GDB to collect the stack traces.\nCurrently it uses "),s("code",[e._v("arm-none-eabi-gdb")]),e._v(", other toolchains may be added in the future.")]),e._v(" "),s("p",[e._v("In order to be able to map memory locations to symbols, the script needs to be referred to the executable file that is currently running on the target.\nThis is done with the help of the option "),s("code",[e._v("--elf=<file>")]),e._v(", which expects a path (relative to the root of the repository) pointing to the location of the currently executing ELF.")]),e._v(" "),s("p",[e._v("Usage example:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./poor-mans-profiler.sh --elf"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v("\n")])])]),s("p",[e._v("Note that every launch of the script will overwrite the old stacks.\nShould you want to append to the old stacks rather than overwrite them, use the option "),s("code",[e._v("--append")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./poor-mans-profiler.sh --elf"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("build/px4_fmu-v4_default/px4_fmu-v4_default.elf --nsamples"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v(" --append\n")])])]),s("p",[e._v("As one might suspect, "),s("code",[e._v("--append")]),e._v(" with "),s("code",[e._v("--nsamples=0")]),e._v(" will instruct the script to only regenerate the SVG without accessing the target at all.")]),e._v(" "),s("p",[e._v("Please read the script for a more in depth understanding of how it works.")]),e._v(" "),s("h2",{attrs:{id:"credits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),s("p",[e._v("Credits for the idea belong to\n"),s("a",{attrs:{href:"https://dom.as/2009/02/15/poor-mans-contention-profiling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mark Callaghan and Domas Mituzas"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports},674:function(e,t,a){e.exports=a.p+"assets/img/flamegraph-example.6536b608.png"}}]);