(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1630:function(t,e,s){"use strict";s.r(e);var o=s(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"windows-development-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-development-environment"}},[t._v("#")]),t._v(" Windows Development Environment")]),t._v(" "),o("p",[t._v("The following instructions explain how to set up a (Cygwin-based) PX4 development environment on Windows 10.\nThis environment can be used to build PX4 for:")]),t._v(" "),o("ul",[o("li",[t._v("Pixhawk and other NuttX-based hardware")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This setup is supported by the PX4 dev team.\nTo build other targets you will need to use a "),o("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),o("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[t._v("unsupported windows development environment")]),t._v(").")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"installation"}})]),t._v(" "),o("h2",{attrs:{id:"installation-instructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[t._v("#")]),t._v(" Installation Instructions")]),t._v(" "),o("ol",[o("li",[t._v("Download the latest version of the ready-to-use MSI installer from: "),o("a",{attrs:{href:"https://github.com/PX4/windows-toolchain/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github releases"),o("OutboundLink")],1),t._v(" or "),o("a",{attrs:{href:"https://s3-us-west-2.amazonaws.com/px4-tools/PX4+Windows+Cygwin+Toolchain/PX4+Windows+Cygwin+Toolchain+0.9.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon S3"),o("OutboundLink")],1),t._v(" (fast download).")]),t._v(" "),o("li",[t._v("Run it, choose your desired installation location, let it install:\n"),o("img",{attrs:{src:s(699),alt:"jMAVSimOnWindows"}})]),t._v(" "),o("li",[t._v("Tick the box at the end of the installation to "),o("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(" (this simplifies the process to get you started)."),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you missed this step you will need to "),o("a",{attrs:{href:"#getting_started"}},[t._v("clone the PX4-Autopilot repository manually")]),t._v(".")])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"getting_started"}})]),t._v(" "),o("h2",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),o("p",[t._v("The toolchain uses a specially configured console window (started by running the "),o("strong",[t._v("run-console.bat")]),t._v(" script) from which you can call the normal PX4 build commands:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Browse to the toolchain installation directory (default "),o("strong",[t._v("C:\\PX4\\")]),t._v(")")])]),t._v(" "),o("li",[o("p",[t._v("Run "),o("strong",[t._v("run-console.bat")]),t._v(" (double click) to start the linux-like Cygwin bash console (you must use this console to build PX4).")])]),t._v(" "),o("li",[o("p",[t._v("Clone the PX4 PX4-Autopilot repository from within the console:")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Skip this step if you ticked the installer option to "),o("em",[t._v("clone the PX4 repository, build and run simulation with jMAVSim")]),t._v(".\nCloning only needs to be done once!")])]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone the PX4-Autopilot repository into the home folder & loads submodules in parallel")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive -j8 https://github.com/PX4/PX4-Autopilot.git\n")])])]),o("p",[t._v("You can now use the console/PX4-Autopilot repository to build PX4.")])]),t._v(" "),o("li",[o("p",[t._v("For example, to run JMAVSim:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Navigate to PX4-Autopilot repo")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build and runs SITL simulation with jMAVSim to test the setup")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),o("p",[t._v("The console will then display:")]),t._v(" "),o("p",[o("img",{attrs:{src:s(700),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),o("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),o("ul",[o("li",[t._v("Install the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Continue to the "),o("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"usage_instructions"}})]),t._v(" "),o("h2",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),o("h3",{attrs:{id:"file-monitoring-tools-vs-toolchain-speed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-monitoring-tools-vs-toolchain-speed"}},[t._v("#")]),t._v(" File Monitoring Tools vs Toolchain Speed")]),t._v(" "),o("p",[t._v("Antivirus and other background file monitoring tools can significantly slow down both installation of the toolchain and PX4 build times.")]),t._v(" "),o("p",[t._v("You may wish to halt them temporarily during builds (at your own risk).")]),t._v(" "),o("h3",{attrs:{id:"windows-git-special-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-special-cases"}},[t._v("#")]),t._v(" Windows & Git Special Cases")]),t._v(" "),o("h4",{attrs:{id:"windows-cr-lf-vs-unix-lf-line-endings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-cr-lf-vs-unix-lf-line-endings"}},[t._v("#")]),t._v(" Windows CR+LF vs Unix LF Line Endings")]),t._v(" "),o("p",[t._v("We recommend that you force Unix style LF endings for every repository you're working with using this toolchain (and use an editor which preserves them when saving your changes - e.g. Eclipse or VS Code).\nCompilation of source files also works with CR+LF endings checked out locally, but there are cases in Cygwin (e.g. execution of shell scripts) that require Unix line endings (otherwise you get errors like "),o("code",[t._v("$'\\r': Command not found.")]),t._v(").\nLuckily git can do this for you when you execute the two commands in the root directory of your repo:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config core.autocrlf false\ngit config core.eol lf\n")])])]),o("p",[t._v("If you work with this toolchain on multiple repositories you can also set these two configurations globally for your machine:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git config --global ...\n")])])]),o("p",[t._v("This is not recommended because it may affect any other (unrelated) git use on your Windows machine.")]),t._v(" "),o("h4",{attrs:{id:"unix-permissions-execution-bit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unix-permissions-execution-bit"}},[t._v("#")]),t._v(" Unix Permissions Execution Bit")]),t._v(" "),o("p",[t._v("Under Unix there's a flag in the permissions of each file that tells the OS whether or not the file is allowed to be executed.\n"),o("em",[t._v("git")]),t._v(" under Cygwin supports and cares about that bit (even though the Windows NTFS file system does not use it).\nThis often results in "),o("em",[t._v("git")]),t._v(' finding "false-positive" differences in permissions.\nThe resulting diff might look like this:')]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("diff --git ...\nold mode 100644\nnew mode 100755\n")])])]),o("p",[t._v("We recommend globally disabling the permission check on Windows to avoid the problem:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable execution bit check globally for the machine")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.fileMode "),o("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n")])])]),o("p",[t._v("For existing repositories that have this problem caused by a local configuration, additionally:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remove the local option for this repository to apply the global one")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode \n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remove the local option for all submodules")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule foreach --recursive "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --unset core.filemode \n")])])])])}),[],!1,null,null,null);e.default=n.exports},699:function(t,e,s){t.exports=s.p+"assets/img/cygwin_toolchain_installer.3dba7f07.png"},700:function(t,e,s){t.exports=s.p+"assets/img/jmavsim_windows_cygwin.77037524.png"}}]);