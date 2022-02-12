(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{1540:function(t,e,n){"use strict";n.r(e);var s=n(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"system-notification-tunes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-notification-tunes"}},[t._v("#")]),t._v(" System Notification Tunes")]),t._v(" "),s("p",[t._v("PX4 defines a number of "),s("RouterLink",{attrs:{to:"/en/getting_started/tunes.html"}},[t._v("standard tones/tunes")]),t._v(" that are used to provide audio notification for important system states and problems (e.g. system startup, arming success, battery warnings, etc.)")],1),t._v(" "),s("p",[t._v("Tunes are specified using strings (in "),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI Music notation"),s("OutboundLink")],1),t._v(") and played by code using the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/lib/tunes",target:"_blank",rel:"noopener noreferrer"}},[t._v("tunes"),s("OutboundLink")],1),t._v(" library.\nThe tunes library also contains the list of default system tunes - see "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lib/tunes/tune_definition.desc"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("PX4 also has a module that can be used to play (test) the default tunes or a user defined tune.")]),t._v(" "),s("p",[t._v("This topic provides general guidance on how to create your own tunes and add to/replace the system notification tones/tunes.")]),t._v(" "),s("h2",{attrs:{id:"creating-tunes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-tunes"}},[t._v("#")]),t._v(" Creating Tunes")]),t._v(" "),s("p",[t._v("Tune strings are defined using "),s("a",{attrs:{href:"http://artscene.textfiles.com/ansimusic/information/ansimtech.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("ANSI Music notation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("More information about the format can be found in "),s("a",{attrs:{href:"https://en.wikibooks.org/wiki/QBasic/Appendix#PLAY",target:"_blank",rel:"noopener noreferrer"}},[t._v("QBasic PLAY statement"),s("OutboundLink")],1),t._v(" (Wikibooks) and has been reproduced in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The easiest way to create a new tune is to use a music editor.\nThis allows you to edit the music and play it back on your computer, then export it to a format that can be played by PX4.")]),t._v(" "),s("p",[t._v("ANSI music was popular in the days of ANSI BBS systems, and so the best editing tools are DOS utilities.\nOn Windows, one option is to use "),s("em",[t._v("Melody Master")]),t._v(" within "),s("em",[t._v("Dosbox")]),t._v(".")]),t._v(" "),s("p",[t._v("The steps for using the software are:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download "),s("a",{attrs:{href:"http://www.dosbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DosBox"),s("OutboundLink")],1),t._v(" and install the app")])]),t._v(" "),s("li",[s("p",[t._v("Download "),s("a",{attrs:{href:"ftp://archives.thebbs.org/ansi_utilities/melody21.zip"}},[t._v("Melody Master")]),t._v(" and unzip into a new directory")])]),t._v(" "),s("li",[s("p",[t._v("Open the "),s("em",[t._v("Dosbox")]),t._v(" console")])]),t._v(" "),s("li",[s("p",[t._v("Mount the melody master directory in Dosbox as shown below:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mount c C:\\<path_to_directory\\Melody21\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start "),s("em",[t._v("Melody Master")]),t._v(" with the following commands")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("c:\nstart\n")])])])]),t._v(" "),s("li",[s("p",[t._v("You will then have the option to click through a few screens, then press "),s("strong",[t._v("1")]),t._v(" to display "),s("em",[t._v("Melody Master")]),t._v(":\n"),s("img",{attrs:{src:n(456),alt:"Melody Master 2.1"}})]),t._v(" "),s("p",[t._v("The lower half of the screen provides helpful advice on keyboard shortcuts for using the tool (arrows for moving in stave, and numbers for selecting the note length, etc.).")])]),t._v(" "),s("li",[s("p",[t._v("When you're ready to save the music:")]),t._v(" "),s("ul",[s("li",[t._v("Press "),s("strong",[t._v("F2")]),t._v(" to give the tune a name and save it in the "),s("em",[t._v("/Music")]),t._v(" sub folder of your Melody Master installation.")]),t._v(" "),s("li",[t._v("Press "),s("strong",[t._v("F7")]),t._v(", the scroll down the list of output formats on the right to get to ANSI.\nThe file will be exported to the "),s("em",[t._v("root")]),t._v(" of the Melody Master directory (with the same name and a file-type specific extension).")])])]),t._v(" "),s("li",[s("p",[t._v("Open the file.\nThe output might look like this:")]),t._v(" "),s("p",[s("img",{attrs:{src:n(457),alt:"ANSI Output from file"}})])]),t._v(" "),s("li",[s("p",[t._v("The string that can be played in PX4 is the bit between "),s("code",[t._v("MNT")]),t._v(" and "),s("code",[t._v("P64")]),t._v(": "),s("code",[t._v("150L1O3DL16CL32<B>C<AEL16A")])])])]),t._v(" "),s("h2",{attrs:{id:"testing-tunes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-tunes"}},[t._v("#")]),t._v(" Testing Tunes")]),t._v(" "),s("p",[t._v("When you're ready to try it out a new tune on PX4, use the "),s("RouterLink",{attrs:{to:"/en/modules/modules_system.html#tune-control"}},[t._v("tune_control")]),t._v(' library.\nFor example, to test the tune we "created" above you would enter the following command on a console or shell (e.g. the '),s("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v("):")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("tune_control play -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"150L1O3DL16CL32<B>C<AEL16A"')]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Out of the box, the "),s("code",[t._v("tune_control")]),t._v(" is only present on real hardware (not the simulator).")])]),t._v(" "),s("h2",{attrs:{id:"replacing-existing-tunes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacing-existing-tunes"}},[t._v("#")]),t._v(" Replacing Existing Tunes")]),t._v(" "),s("p",[t._v("Tunes are defined within "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/tunes/tune_definition.desc",target:"_blank",rel:"noopener noreferrer"}},[t._v("tune_definition.desc"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("If you just need to replace an existing tune, then you can replace the file in your own fork, and update the tune strings defined in "),s("code",[t._v("PX4_DEFINE_TUNE")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"adding-a-new-tune"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-tune"}},[t._v("#")]),t._v(" Adding a New Tune")]),t._v(" "),s("p",[t._v("TBD.")])])}),[],!1,null,null,null);e.default=o.exports},456:function(t,e,n){t.exports=n.p+"assets/img/tunes_melody_master_2_1.48420adb.jpg"},457:function(t,e,n){t.exports=n.p+"assets/img/tune_musicmaker_ansi_output.99d0ff16.png"}}]);