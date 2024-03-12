(window.webpackJsonp=window.webpackJsonp||[]).push([[1035],{1994:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"source-code-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code-management"}},[t._v("#")]),t._v(" Source Code Management")]),t._v(" "),a("h2",{attrs:{id:"branching-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branching-model"}},[t._v("#")]),t._v(" Branching Model")]),t._v(" "),a("p",[t._v("The PX4 project uses a three-branch Git branching model:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),a("OutboundLink")],1),t._v(" is by default unstable and sees rapid development.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[t._v("beta"),a("OutboundLink")],1),t._v(" has been thoroughly tested. It's intended for flight testers.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("stable"),a("OutboundLink")],1),t._v(" points to the last release.")])]),t._v(" "),a("p",[t._v("We try to retain a "),a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[t._v("linear history through rebases"),a("OutboundLink")],1),t._v(" and avoid the "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/github-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github flow"),a("OutboundLink")],1),t._v(".\nHowever, due to the global team and fast moving development we might resort to merges at times.")]),t._v(" "),a("p",[t._v("To contribute new functionality, "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign up for Github"),a("OutboundLink")],1),t._v(", then "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork"),a("OutboundLink")],1),t._v(" the repository, "),a("a",{attrs:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new branch"),a("OutboundLink")],1),t._v(", add your "),a("a",{attrs:{href:"#commits-and-commit-messages"}},[t._v("changes as commits")]),t._v(", and finally "),a("a",{attrs:{href:"#pull-requests"}},[t._v("send a pull request")]),t._v(".\nChanges will be merged when they pass our "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("continuous integration"),a("OutboundLink")],1),t._v(" tests.")]),t._v(" "),a("p",[t._v("All code contributions have to be under the permissive "),a("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3-clause license"),a("OutboundLink")],1),t._v(" and all code must not impose any further constraints on the use.")]),t._v(" "),a("h2",{attrs:{id:"code-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-style"}},[t._v("#")]),t._v(" Code Style")]),t._v(" "),a("p",[t._v("PX4 uses the "),a("a",{attrs:{href:"https://google.github.io/styleguide/cppguide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google C++ style guide"),a("OutboundLink")],1),t._v(", with the following (minimal) modifications:")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Not all PX4 source code matches the style guide, but any "),a("em",[t._v("new code")]),t._v(" that you write should do so — in both new and existing files.\nIf you update an existing file you are not required to make the whole file comply with the style guide, just the code you've modified.")])]),t._v(" "),a("h3",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs"}},[t._v("#")]),t._v(" Tabs")]),t._v(" "),a("ul",[a("li",[t._v("Tabs are used for indentation (equivalent to 8 spaces).")]),t._v(" "),a("li",[t._v("Spaces are used for alignment.")])]),t._v(" "),a("h3",{attrs:{id:"line-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#line-length"}},[t._v("#")]),t._v(" Line Length")]),t._v(" "),a("ul",[a("li",[t._v("Maximum line length is 120 characters.")])]),t._v(" "),a("h3",{attrs:{id:"file-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-extensions"}},[t._v("#")]),t._v(" File Extensions")]),t._v(" "),a("ul",[a("li",[t._v("Source files use extension "),a("code",[t._v("*.cpp")]),t._v(" instead of "),a("code",[t._v("*.cc")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"function-and-method-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-and-method-names"}},[t._v("#")]),t._v(" Function and Method Names")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lowerCamelCase()")]),t._v(" is used for functions and methods to "),a("em",[t._v("visually")]),t._v(" distinguish them from "),a("code",[t._v("ClassConstructors()")]),t._v(" and "),a("code",[t._v("ClassNames")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"private-class-member-variable-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#private-class-member-variable-names"}},[t._v("#")]),t._v(" Private Class Member Variable Names")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("_underscore_prefixed_snake_case")]),t._v(" is used for private class member variable names, as oppose to "),a("code",[t._v("underscore_postfixed_")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"class-privacy-keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-privacy-keywords"}},[t._v("#")]),t._v(" Class Privacy Keywords")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("zero")]),t._v(" spaces before "),a("code",[t._v("public:")]),t._v(", "),a("code",[t._v("private:")]),t._v(", or "),a("code",[t._v("protected:")]),t._v(" keywords.")])]),t._v(" "),a("h3",{attrs:{id:"example-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code-snippet"}},[t._v("#")]),t._v(" Example Code Snippet")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * @brief Description of what this function does.\n         *\n         * @param[in] input_param Clear description of the input [units]\n         * @return Whatever we are returning [units]\n         */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" input_param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" in_scope_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input_param "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" kConstantFloat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" in_scope_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" _private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrivateMember")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" _private_member_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n         * @return Whatever we are "getting" [units]\n         */')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrivateMember")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clear description of the constant if not completely obvious from the name [units]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kConstantFloat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clear description of the variable if not completely obvious from the name [units]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" _private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"in-source-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-source-documentation"}},[t._v("#")]),t._v(" In-Source Documentation")]),t._v(" "),a("p",[t._v("PX4 developers are encouraged to create appropriate in-source documentation.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Source-code documentation standards are not enforced, and the code is currently inconsistently documented.\nWe'd like to do better!")])]),t._v(" "),a("p",[t._v("Currently we have two types of source-based documentation:")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("PRINT_MODULE_*")]),t._v(" methods are used for both module run time usage instructions and for the "),a("RouterLink",{attrs:{to:"/en/modules/modules_main.html"}},[t._v("Modules & Commands Reference")]),t._v(" in this guide.")],1),t._v(" "),a("ul",[a("li",[t._v("The API is documented "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("in the source code here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Good examples of usage include the "),a("RouterLink",{attrs:{to:"/en/modules/module_template.html"}},[t._v("Application/Module Template")]),t._v(" and the files linked from the modules reference.")],1)])]),t._v(" "),a("li",[a("p",[t._v("We encourage other in-source documentation "),a("em",[t._v("where it adds value/is not redundant")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Developers should name C++ entities (classes, functions, variables etc.) such that their purpose can be inferred - reducing the need for explicit documentation.")])]),t._v(" "),a("ul",[a("li",[t._v("Do not add documentation that can trivially be inferred from C++ entity names.")]),t._v(" "),a("li",[t._v("ALWAYS specify units of variables, constants, and input/return parameters where they are defined.")]),t._v(" "),a("li",[t._v("Commonly you may want to add information about corner cases and error handling.")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doxgyen"),a("OutboundLink")],1),t._v(" tags should be used if documentation is needed: "),a("code",[t._v("@class")]),t._v(", "),a("code",[t._v("@file")]),t._v(", "),a("code",[t._v("@param")]),t._v(", "),a("code",[t._v("@return")]),t._v(", "),a("code",[t._v("@brief")]),t._v(", "),a("code",[t._v("@var")]),t._v(", "),a("code",[t._v("@see")]),t._v(", "),a("code",[t._v("@note")]),t._v(".\nA good example of usage is "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules/events/send_event.h"),a("OutboundLink")],1),t._v(".")])])])]),t._v(" "),a("p",[t._v('Please avoid "magic numbers", for example, where does this number in the conditional come from? What about the multiplier on yaw stick input?')]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabsf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.52f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Instead, define the numbers as named constants with appropriate context in the header:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deadzone threshold for normalized yaw stick input")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kYawStickDeadzone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [rad/s] Deadzone threshold for normalized yaw stick input")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kMaxYawRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("and update the source implementation.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabsf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" kYawStickDeadzone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kMaxYawRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"commits-and-commit-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commits-and-commit-messages"}},[t._v("#")]),t._v(" Commits and Commit Messages")]),t._v(" "),a("p",[t._v("Use descriptive, multi-paragraph commit messages for all non-trivial changes.\nStructure them well so they make sense in the one-line summary but also provide full detail.")]),t._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('Component: Explain the change in one sentence. Fixes #1234\n\nPrepend the software component to the start of the summary\nline, either by the module name or a description of it.\n(e.g. "mc_att_ctrl" or "multicopter attitude controller").\n\nIf the issue number is appended as <Fixes #1234>, Github\nwill automatically close the issue when the commit is\nmerged to the master branch.\n\nThe body of the message can contain several paragraphs.\nDescribe in detail what you changed. Link issues and flight\nlogs either related to this fix or to the testing results\nof this commit.\n\nDescribe the change and why you changed it, avoid to\nparaphrase the code change (Good: "Adds an additional\nsafety check for vehicles with low quality GPS reception".\nBad: "Add gps_reception_check() function").\n\nReported-by: Name <email@px4.io>\n')])])]),a("p",[a("strong",[t._v("Use "),a("strong",[a("code",[t._v("git commit -s")])]),t._v(" to sign off on all of your commits.")]),t._v(" This will add "),a("code",[t._v("signed-off-by:")]),t._v(" with your name and email as the last line.")]),t._v(" "),a("p",[t._v("This commit guide is based on best practices for the Linux Kernel and other "),a("a",{attrs:{href:"https://github.com/torvalds/subsurface-for-dirk/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[t._v("projects maintained"),a("OutboundLink")],1),t._v(" by Linus Torvalds.")]),t._v(" "),a("h2",{attrs:{id:"pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[t._v("#")]),t._v(" Pull Requests")]),t._v(" "),a("p",[t._v("Github "),a("a",{attrs:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pull Requests (PRs)"),a("OutboundLink")],1),t._v(" are the primary mechanism used to submit new functionality and bug fixes to PX4.")]),t._v(" "),a("p",[t._v("They include the new set of "),a("a",{attrs:{href:"#commits-and-commit-messages"}},[t._v("commits")]),t._v(" in your branch (relative the main branch), and a description of the changes.")]),t._v(" "),a("p",[t._v("The description should include:")]),t._v(" "),a("ul",[a("li",[t._v("An overview of what the changes deliver; enough to understand the broad purpose of the code")]),t._v(" "),a("li",[t._v("Links to related issues or supporting information.")]),t._v(" "),a("li",[t._v("Information about what testing of the PR functionality has been done, with links to flight logs.")]),t._v(" "),a("li",[t._v("Where possible, the results from general "),a("RouterLink",{attrs:{to:"/en/test_and_ci/test_flights.html"}},[t._v("Test Flights")]),t._v(" both before and after the change.")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);