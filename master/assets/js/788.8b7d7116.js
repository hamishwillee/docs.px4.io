(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1572:function(e,t,o){"use strict";o.r(t);var r=o(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"source-code-management"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#source-code-management"}},[e._v("#")]),e._v(" Source Code Management")]),e._v(" "),o("h2",{attrs:{id:"branching-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#branching-model"}},[e._v("#")]),e._v(" Branching Model")]),e._v(" "),o("p",[e._v("The PX4 project uses a three-branch Git branching model:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("master"),o("OutboundLink")],1),e._v(" is by default unstable and sees rapid development.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("beta"),o("OutboundLink")],1),e._v(" has been thoroughly tested. It's intended for flight testers.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable"),o("OutboundLink")],1),e._v(" points to the last release.")])]),e._v(" "),o("p",[e._v("We try to retain a "),o("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[e._v("linear history through rebases"),o("OutboundLink")],1),e._v(" and avoid the "),o("a",{attrs:{href:"https://guides.github.com/introduction/flow/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github flow"),o("OutboundLink")],1),e._v(".\nHowever, due to the global team and fast moving development we might resort to merges at times.")]),e._v(" "),o("p",[e._v("To contribute new functionality, "),o("a",{attrs:{href:"https://help.github.com/articles/signing-up-for-a-new-github-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("sign up for Github"),o("OutboundLink")],1),e._v(", then "),o("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork"),o("OutboundLink")],1),e._v(" the repository, "),o("a",{attrs:{href:"https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/",target:"_blank",rel:"noopener noreferrer"}},[e._v("create a new branch"),o("OutboundLink")],1),e._v(", add your changes, and finally "),o("a",{attrs:{href:"https://help.github.com/articles/using-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("send a pull request"),o("OutboundLink")],1),e._v(".\nChanges will be merged when they pass our "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[e._v("continuous integration"),o("OutboundLink")],1),e._v(" tests.")]),e._v(" "),o("p",[e._v("All code contributions have to be under the permissive "),o("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSD 3-clause license"),o("OutboundLink")],1),e._v(" and all code must not impose any further constraints on the use.")]),e._v(" "),o("h2",{attrs:{id:"code-style-formatting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-style-formatting"}},[e._v("#")]),e._v(" Code Style Formatting")]),e._v(" "),o("p",[e._v("PX4 uses "),o("a",{attrs:{href:"http://astyle.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle"),o("OutboundLink")],1),e._v(" for code formatting. Valid versions are")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%202.06/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 2.06"),o("OutboundLink")],1),e._v(" (deprecated)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/astyle/astyle%203.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.0"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://sourceforge.net/projects/astyle/files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("astyle 3.01"),o("OutboundLink")],1),e._v(" (recommended)")])]),e._v(" "),o("p",[e._v("Once installed, formatting can be checked with "),o("code",[e._v("./Tools/astyle/check_code_style_all.sh")]),e._v(". The output should be "),o("code",[e._v("Format checks passed")]),e._v(" on a clean master. If that worked, "),o("code",[e._v("make format")]),e._v(" can be used in the future to check and format all files automatically.")]),e._v(" "),o("h2",{attrs:{id:"file-name-conventions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-name-conventions"}},[e._v("#")]),e._v(" File name conventions")]),e._v(" "),o("p",[e._v("Going forward we aim to follow these file naming conventions:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("C++ source files should be named in CamelCase and match the class name. E.g. A C++ file containing a class named "),o("code",[e._v("FooThing")]),e._v(" should be named "),o("code",[e._v("FooThing.cpp")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("C++ header files should be named the same as source files except have the suffix "),o("code",[e._v(".hpp")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("C++ header files that are required to be C compatible, should have the suffix "),o("code",[e._v(".h")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Folder names are "),o("code",[e._v("snake_case")]),e._v(" for the first level inside "),o("code",[e._v("modules")]),e._v("/"),o("code",[e._v("drivers")]),e._v("/"),o("code",[e._v("systemcmds")]),e._v("/etc. but should be named CamelCase when more deeply nested to match the source and header files.")])]),e._v(" "),o("li",[o("p",[e._v("Test files must have a "),o("code",[e._v("Test")]),e._v(" suffix as shown: "),o("code",[e._v("FooThingTest.cpp")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("One exception to the rules above are the MAVLink streams in "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mavlink/streams",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/mavlink/streams"),o("OutboundLink")],1),e._v(" which are ALL_UPPERCASE.hpp matching the MAVLink message name.")])])]),e._v(" "),o("h2",{attrs:{id:"in-source-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-source-documentation"}},[e._v("#")]),e._v(" In-Source Documentation")]),e._v(" "),o("p",[e._v("PX4 developers are encouraged to create appropriate in-source documentation.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Source-code documentation standards are not enforced, and the code is currently inconsistently documented.\nWe'd like to do better!")])]),e._v(" "),o("p",[e._v("Currently we have two types of source-based documentation:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("PRINT_MODULE_*")]),e._v(" methods are used for both module run time usage instructions and for the "),o("RouterLink",{attrs:{to:"/en/modules/modules_main.html"}},[e._v("Modules & Commands Reference")]),e._v(" in this guide.\n"),o("ul",[o("li",[e._v("The API is documented "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the source code here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Good examples of usage include the "),o("RouterLink",{attrs:{to:"/en/modules/module_template.html"}},[e._v("Application/Module Template")]),e._v(" and the files linked from the modules reference.")],1)])],1)]),e._v(" "),o("ul",[o("li",[o("p",[e._v("We encourage other in-source documentation "),o("em",[e._v("where it adds value/is not redundant")]),e._v(".")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Developers should name C++ entities (classes, functions, variables etc.) such that their purpose can be inferred - reducing the need for explicit documentation.")])]),e._v(" "),o("ul",[o("li",[e._v("Do not add documentation that can trivially be assumed from C++ entity names.")]),e._v(" "),o("li",[e._v("Commonly you may want to add information about corner cases and error handling.")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doxgyen"),o("OutboundLink")],1),e._v(" tags should be used if documentation is needed: "),o("code",[e._v("@class")]),e._v(", "),o("code",[e._v("@file")]),e._v(", "),o("code",[e._v("@param")]),e._v(", "),o("code",[e._v("@return")]),e._v(", "),o("code",[e._v("@brief")]),e._v(", "),o("code",[e._v("@var")]),e._v(", "),o("code",[e._v("@see")]),e._v(", "),o("code",[e._v("@note")]),e._v(". A good example of usage is "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/modules/events/send_event.h"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("h2",{attrs:{id:"commits-and-commit-messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commits-and-commit-messages"}},[e._v("#")]),e._v(" Commits and Commit Messages")]),e._v(" "),o("p",[e._v("Please use descriptive, multi-paragraph commit messages for all non-trivial changes. Structure them well so they make sense in the one-line summary but also provide full detail.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Component: Explain the change in one sentence. Fixes #1234\n\nPrepend the software component to the start of the summary\nline, either by the module name or a description of it.\n(e.g. "mc_att_ctrl" or "multicopter attitude controller").\n\nIf the issue number is appended as <Fixes #1234>, Github\nwill automatically close the issue when the commit is\nmerged to the master branch.\n\nThe body of the message can contain several paragraphs.\nDescribe in detail what you changed. Link issues and flight\nlogs either related to this fix or to the testing results\nof this commit.\n\nDescribe the change and why you changed it, avoid to\nparaphrase the code change (Good: "Adds an additional\nsafety check for vehicles with low quality GPS reception".\nBad: "Add gps_reception_check() function").\n\nReported-by: Name <email@px4.io>\n')])])]),o("p",[o("strong",[e._v("Use "),o("strong",[o("code",[e._v("git commit -s")])]),e._v(" to sign off on all of your commits.")]),e._v(" This will add "),o("code",[e._v("signed-off-by:")]),e._v(" with your name and email as the last line.")]),e._v(" "),o("p",[e._v("This commit guide is based on best practices for the Linux Kernel and other "),o("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[e._v("projects maintained"),o("OutboundLink")],1),e._v(" by Linus Torvalds.")])])}),[],!1,null,null,null);t.default=n.exports}}]);