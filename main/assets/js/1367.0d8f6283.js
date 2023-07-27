(window.webpackJsonp=window.webpackJsonp||[]).push([[1367],{2548:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"소스-코드-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소스-코드-관리"}},[t._v("#")]),t._v(" 소스 코드 관리")]),t._v(" "),a("h2",{attrs:{id:"분기-모델"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#분기-모델"}},[t._v("#")]),t._v(" 분기 모델")]),t._v(" "),a("p",[t._v("PX4 프로젝트는 3가지 Git 분기 모델을 사용합니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),a("OutboundLink")],1),t._v(" is by default unstable and sees rapid development.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/beta",target:"_blank",rel:"noopener noreferrer"}},[t._v("beta"),a("OutboundLink")],1),t._v("는 철저한 테스트를 거쳤습니다. 비행 테스터를 위한 것입니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("stable"),a("OutboundLink")],1),t._v("은 최신 릴리스를 의미합니다.")])]),t._v(" "),a("p",[t._v("We try to retain a "),a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/rewriting-history",target:"_blank",rel:"noopener noreferrer"}},[t._v("linear history through rebases"),a("OutboundLink")],1),t._v(" and avoid the "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/github-flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github flow"),a("OutboundLink")],1),t._v(". 그러나, 전세계의 역동적인 개발팀과 수시로 병합 작업을 진행합니다.")]),t._v(" "),a("p",[t._v("To contribute new functionality, "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("sign up for Github"),a("OutboundLink")],1),t._v(", then "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork"),a("OutboundLink")],1),t._v(" the repository, "),a("a",{attrs:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("create a new branch"),a("OutboundLink")],1),t._v(", add your "),a("a",{attrs:{href:"#commits-and-commit-messages"}},[t._v("changes as commits")]),t._v(", and finally "),a("a",{attrs:{href:"#pull-requests"}},[t._v("send a pull request")]),t._v(". 변경사항은 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[t._v("지속적 통합"),a("OutboundLink")],1),t._v(" 테스트를 통과한 다음에 병합됩니다.")]),t._v(" "),a("p",[t._v("코드 기여는 "),a("a",{attrs:{href:"https://opensource.org/licenses/BSD-3-Clause",target:"_blank",rel:"noopener noreferrer"}},[t._v("BSD 3절 라이선스"),a("OutboundLink")],1),t._v("를 준수하여여 하며, 코드에는 사용에 제약 사항을 부과하지 않아야 합니다.")]),t._v(" "),a("h2",{attrs:{id:"code-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-style"}},[t._v("#")]),t._v(" Code Style")]),t._v(" "),a("p",[t._v("PX4 uses the "),a("a",{attrs:{href:"https://google.github.io/styleguide/cppguide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google C++ style guide"),a("OutboundLink")],1),t._v(", with the following (minimal) modifications:")]),t._v(" "),a("h3",{attrs:{id:"tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabs"}},[t._v("#")]),t._v(" Tabs")]),t._v(" "),a("ul",[a("li",[t._v("Tabs are used for indentation (equivalent to 8 spaces).")]),t._v(" "),a("li",[t._v("Spaces are used for alignment.")])]),t._v(" "),a("h3",{attrs:{id:"line-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#line-length"}},[t._v("#")]),t._v(" Line Length")]),t._v(" "),a("ul",[a("li",[t._v("Maximum line length is 120 characters.")])]),t._v(" "),a("h3",{attrs:{id:"file-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-extensions"}},[t._v("#")]),t._v(" File Extensions")]),t._v(" "),a("ul",[a("li",[t._v("Source files use extension "),a("code",[t._v("*.cpp")]),t._v(" instead of "),a("code",[t._v("*.cc")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"function-and-method-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-and-method-names"}},[t._v("#")]),t._v(" Function and Method Names")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lowerCamelCase()")]),t._v(" is used for functions and methods to "),a("em",[t._v("visually")]),t._v(" distinguish them from "),a("code",[t._v("ClassConstructors()")]),t._v(" and "),a("code",[t._v("ClassNames")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"class-privacy-keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-privacy-keywords"}},[t._v("#")]),t._v(" Class Privacy Keywords")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("zero")]),t._v(" spaces before "),a("code",[t._v("public:")]),t._v(", "),a("code",[t._v("private:")]),t._v(", or "),a("code",[t._v("protected:")]),t._v(" keywords.")])]),t._v(" "),a("h3",{attrs:{id:"example-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code-snippet"}},[t._v("#")]),t._v(" Example Code Snippet")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * @brief Description of what this function does.\n         *\n         * @param[in] input_param Clear description of the input [units]\n         * @return Whatever we are returning [units]\n         */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" input_param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" in_scope_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input_param "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" kConstantFloat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" in_scope_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" private_member_variable_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPrivateMember")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" private_member_variable_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" private_member_variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n         * @return Whatever we are "getting" [units]\n         */')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPrivateMember")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" private_member_variable_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clear description of the constant if not completely obvious from the name [units]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kConstantFloat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Clear description of the variable if not completely obvious from the name [units]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" private_member_variable_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"소스-내-문서-작업"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소스-내-문서-작업"}},[t._v("#")]),t._v(" 소스 내 문서 작업")]),t._v(" "),a("p",[t._v("PX4 개발자는 소스 내에서 적절한 문서를 작성하는 것이 좋습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("소스 코드 문서화 표준은 시행되지 않으며, 코드는 현재 일관성 있게 문서화되어 있지 않습니다.\n이보다 더 나아지길 바랍니다!")])]),t._v(" "),a("p",[t._v("현재 두 가지 소스 기반 문서 유형이 있습니다.")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("PRINT_MODULE_*")]),t._v(" 메소드는 두 모듈 런타임과 "),a("RouterLink",{attrs:{to:"/ko/modules/modules_main.html"}},[t._v("모듈 & 이 가이드의 명령 참조")]),t._v(" 사용 지침에 모두 사용됩니다.")],1),t._v(" "),a("ul",[a("li",[t._v("API는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/v1.8.0/src/platforms/px4_module.h#L381",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기 소스 코드"),a("OutboundLink")],1),t._v("에 문서화되어 있습니다.")]),t._v(" "),a("li",[t._v("좋은 예제로는 "),a("RouterLink",{attrs:{to:"/ko/modules/module_template.html"}},[t._v("응용 프로그램/모듈 템플릿")]),t._v("과 모듈 참조에서 링크된 파일이 있습니다.")],1)])]),t._v(" "),a("li",[a("p",[a("em",[t._v("가치가 추가되거나 중복되지 않는")]),t._v(" 다른 소스 문서를 권장합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")])])])]),t._v(" "),a("p",[t._v("개발자는 목적을 유추할 수 있도록 C++ 엔터티(클래스, 함수, 변수 등)의 이름을 지정하여 명시적 문서의 필요성을 줄일 수 있습니다.\n:::")]),t._v(" "),a("ul",[a("li",[t._v("Do not add documentation that can trivially be inferred from C++ entity names.")]),t._v(" "),a("li",[t._v("ALWAYS specify units of variables, constants, and input/return parameters where they are defined.")]),t._v(" "),a("li",[t._v("일반적으로 특이 사항이나 오류 처리에 대한 정보를 추가할 수 있습니다.")]),t._v(" "),a("li",[t._v("필요시에는 "),a("a",{attrs:{href:"http://www.doxygen.nl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doxgyen"),a("OutboundLink")],1),t._v(" 태그를 사용합니다. "),a("code",[t._v("@class")]),t._v(", "),a("code",[t._v("@file")]),t._v(", "),a("code",[t._v("@param")]),t._v(", "),a("code",[t._v("@return")]),t._v(", "),a("code",[t._v("@brief")]),t._v(", "),a("code",[t._v("@var")]),t._v(", "),a("code",[t._v("@see")]),t._v(", "),a("code",[t._v("@note")]),t._v(". 좋은 예는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/events/send_event.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules/events/send_event.h"),a("OutboundLink")],1),t._v("입니다.")])]),t._v(" "),a("p",[t._v('Please avoid "magic numbers", for example, where does this number in the conditional come from? What about the multiplier on yaw stick input?')]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabsf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.52f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Instead, define the numbers as named constants with appropriate context in the header:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deadzone threshold for normalized yaw stick input")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kYawStickDeadzone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [rad/s] Deadzone threshold for normalized yaw stick input")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constexpr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" kMaxYawRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" math"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("radians")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("and update the source implementation.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabsf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" kYawStickDeadzone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        yaw_rate_setpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" kMaxYawRate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yaw_stick_normalized_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"커밋과-커밋-메시지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#커밋과-커밋-메시지"}},[t._v("#")]),t._v(" 커밋과 커밋 메시지")]),t._v(" "),a("p",[t._v("사소한 변경에 대하여도 자세한 설명한 여러 단락 커밋 메시지를 기록하십시오. 쉽게 이해할 수 있는 한 줄 요약과 자세한 세부정보도 기록하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('컴포넌트: 변경 사항을 한 문장으로 설명하십시오. Fixes #1234\n\n요약 시작 부분에 소프트웨어 구성 요소를 추가합니다.\n모듈 이름이나 설명으로 줄을 지정합니다.\n(예: "mc_att_ctrl" 또는 "멀티콥터 자세 콘트롤러").\n\n발행번호를 <Fixes #1234>으로 붙이면, Github 커밋이 완료시 자동으로 문제를 종료합니다.\n마스터 브랜치에 병합됩니다.\n\n메시지 본문에는 여러 단락이 포함될 수 있습니다.\n변경한 사항을 자세히 기술하십시오. 이 수정 사항 또는 이 커밋의 테스트 결과와 관련된 문제 및 비행 로그를 연결합니다.\n\n변경 사항과 변경한 이유를 설명하고 코드 변경을 다른 말로 표현하지 마십시오(좋음: "GPS 수신 품질이 낮은 차량에 대한 추가 안전 점검 추가".\n불량: "gps_reception_check() 함수 추가").\n\n보고자: 이름 <email@px4.io>\n')])])]),a("p",[t._v("****"),a("code",[t._v("git commit -s")]),t._v("**를 사용하여 모든 커밋을 승인합니다. ** 이렇게 하면 "),a("code",[t._v("signed-off-by:")]),t._v("가 추가됩니다. 마지막 줄에 이름과 이메일을 입력합니다.")]),t._v(" "),a("p",[t._v("이 커밋 가이드는 Linux 커널과 Linus Torvalds가 관리하는 "),a("a",{attrs:{href:"https://github.com/torvalds/subsurface/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88-L115",target:"_blank",rel:"noopener noreferrer"}},[t._v("프로젝트"),a("OutboundLink")],1),t._v("에 대한 모범 사례들을 참고로 작성되었습니다.")]),t._v(" "),a("h2",{attrs:{id:"pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[t._v("#")]),t._v(" Pull Requests")]),t._v(" "),a("p",[t._v("Github "),a("a",{attrs:{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pull Requests (PRs)"),a("OutboundLink")],1),t._v(" are the primary mechanism used to submit new functionality and bug fixes to PX4.")]),t._v(" "),a("p",[t._v("They include the new set of "),a("a",{attrs:{href:"#commits-and-commit-messages"}},[t._v("commits")]),t._v(" in your branch (relative the main branch), and a description of the changes.")]),t._v(" "),a("p",[t._v("The description should include:")]),t._v(" "),a("ul",[a("li",[t._v("An overview of what the changes deliver; enough to understand the broad purpose of the code")]),t._v(" "),a("li",[t._v("Links to related issues or supporting information.")]),t._v(" "),a("li",[t._v("Information about what testing of the PR funcitonality has been done, with links to flight logs.")]),t._v(" "),a("li",[t._v("Where possible, the results from general "),a("RouterLink",{attrs:{to:"/ko/test_and_ci/test_flights.html"}},[t._v("Test Flights")]),t._v(" both before and after the change.")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);