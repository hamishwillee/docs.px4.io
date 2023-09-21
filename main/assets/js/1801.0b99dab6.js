(window.webpackJsonp=window.webpackJsonp||[]).push([[1801],{3298:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-示例"}},[e._v("#")]),e._v(" GIT 示例")]),e._v(" "),a("p",[a("a",{attrs:{id:"contributing_code"}})]),e._v(" "),a("h2",{attrs:{id:"为-px4-贡献代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-px4-贡献代码"}},[e._v("#")]),e._v(" 为 PX4 贡献代码")]),e._v(" "),a("p",[e._v("Adding a feature to PX4 follows a defined workflow. In order to share your contributions on PX4, you can follow this example. 为了在 px4 上分享您的贡献, 您可以遵循此示例。")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("如果您还没有注册，请先"),a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign up"),a("OutboundLink")],1),e._v(" Github 账户")])]),e._v(" "),a("li",[a("p",[e._v("Fork the PX4-Autopilot repo (see "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("将分支克隆到本地计算机")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/\n")])])])])]),e._v(" "),a("p",[e._v("git clone https://github.com/"),a("your",{attrs:{git:"",name:""}},[e._v("/Firmware.git")])],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("* Go into the new directory, initialize and update the submodules, and add the original upstream Firmware\n\n```sh\ncd Firmware\ngit submodule update --init --recursive\ngit remote add upstream https://github.com/PX4/Firmware.git\n")])])]),a("ul",[a("li",[a("p",[e._v("You should have now two remote repositories: One repository is called "),a("code",[e._v("upstream")]),e._v(" that points to PX4/PX4-Autopilot, and one repository "),a("code",[e._v("origin")]),e._v(" that points to your forked copy of the PX4 repository.")])]),e._v(" "),a("li",[a("p",[e._v("这可以通过以下命令进行检查:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Make the changes that you want to add to the current main.")])]),e._v(" "),a("li",[a("p",[e._v("使用代表您的功能的有意义的名称创建一个新分支")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("You can verify that the push was successful by going to your forked repository in your browser: "),a("code",[e._v("https://github.com/<your git name>/Firmware.git")]),a("br"),e._v("\nThere you should see the message that a new branch has been pushed to your forked repository.")])]),e._v(" "),a("li",[a("p",[e._v("通过添加相应的文件添加您希望成为提交的一部分的更改")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("If you prefer having a GUI to add your files see "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitk"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"http://nuclearsquid.com/writings/git-add/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("git add -p")]),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("提交添加的文件, 并顺便记录一条有意义的消息, 解释您的更改")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your commit message>"')]),e._v("\n")])])]),a("p",[e._v("you can use the command "),a("code",[e._v("git branch")]),e._v(" to make sure you're on the right branch. * Add your changes that you want to be part of the commit by adding the respective files")])]),e._v(" "),a("li",[a("p",[e._v("Some time might have passed and the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("upstream main"),a("OutboundLink")],1),e._v(" has changed. PX4 prefers a linear commit history and uses "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("git rebase"),a("OutboundLink")],1),e._v(". To include the newest changes from upstream in your local branch, switch to your main branch")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n")])])]),a("p",[e._v("Then pull the newest commits from upstream main")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream main\n")])])]),a("p",[e._v("Now your local main is up to date. Switch back to your feature branch and rebase on your updated main")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase main\n")])])])]),e._v(" "),a("li",[a("p",[e._v("现在, 您可以将本地提交推送到分支版本库")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You can verify that the push was successful by going to your forked repository in your browser: "),a("code",[e._v("https://github.com/<your git name>/PX4-Autopilot.git")])]),e._v(" "),a("p",[e._v("There you should see the message that a new branch has been pushed to your forked repository.")])]),e._v(" "),a("li",[a("p",[e._v('现在是时候创建一个拉取请求 (PR) 了。 Now it\'s time to create a pull request (PR). On the right hand side of the "new branch message" (see one step before), you should see a green button saying "Compare & Create Pull Request". Then it should list your changes and you can (must) add a meaningful title (in case of a one commit PR, it\'s usually the commit message) and message ('),a("span",{staticStyle:{color:"orange"}},[e._v("explain what you did for what reason")]),e._v(". Check "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("other pull requests"),a("OutboundLink")],1),e._v(" for comparison) 然后, 它应该列出你的更改，你必须添加一个有意义的标题 (在提交 PR 的情况下, 它通常是提交消息) 和消息 ("),a("span",{staticStyle:{color:"orange"}},[e._v("解释你做了这些更改的原因 ")]),e._v("， 检查 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("其他拉取请求 "),a("OutboundLink")],1),e._v(" 进行比较)。")])]),e._v(" "),a("li",[a("p",[e._v("搞定！ You're done! Responsible members of PX4 will now have a look at your contribution and decide if they want to integrate it. Check if they have questions on your changes every once in a while. 每过一段时间，他们会检查你的更改，以确保没有疑义。")])])]),e._v(" "),a("h2",{attrs:{id:"changing-source-trees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-source-trees"}},[e._v("#")]),e._v(" Changing Source Trees")]),e._v(" "),a("p",[e._v("We recommend using PX4 "),a("code",[e._v("make")]),e._v(' commands to switch between source code branches. This saves you having to remember the commands to update submodules and clean up build artifacts (build files that are not removed will result in "untracked files" errors after the switch).')]),e._v(" "),a("p",[e._v("To switch between branches:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clean up the current branch, de-initializing submodule and removing all build artifacts:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])]),e._v(" "),a("li",[a("p",[e._v('Switch to a new branch or tag (here we first fetch the fictional branch "PR_test_branch" from the '),a("code",[e._v("upstream")]),e._v(" remote):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream PR_test_branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout PR_test_branch\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Get the submodules for the new branch:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"更新子模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新子模块"}},[e._v("#")]),e._v(" 更新子模块")]),e._v(" "),a("p",[e._v("Specific PX4 point releases are made as tags of the "),a("a",{attrs:{href:"#get-a-release-branch"}},[e._v("release branches")]),e._v(", and are named using the format "),a("code",[e._v("v<release>")]),e._v(". These are "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/releases?q=release&expanded=true",target:"_blank",rel:"noopener noreferrer"}},[e._v("listed on Github here"),a("OutboundLink")],1),e._v(" (or you can query all tags using "),a("code",[e._v("git tag -l")]),e._v(").")]),e._v(" "),a("p",[e._v("To get the source code for a "),a("em",[e._v("specific older release")]),e._v(" (tag):")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Clone the PX4-Autopilot repo and navigate into "),a("em",[e._v("PX4-Autopilot")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You can reuse an existing repo rather than cloning a new one. In this case clean the build environment (see "),a("a",{attrs:{href:"#changing-source-trees"}},[e._v("changing source trees")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Checkout code for particular tag (e.g. for tag v1.13.0-beta2)")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout v1.13.0-beta2\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Update submodules:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"get-a-release-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-release-branch"}},[e._v("#")]),e._v(" Get a Release Branch")]),e._v(" "),a("p",[e._v("Releases branches are branched of "),a("code",[e._v("main")]),e._v(", and used to backport necessary changes from main into a release. The branches are named using the format "),a("code",[e._v("release/<release_number>")]),e._v(" (e.g. "),a("code",[e._v("release/v1.13")]),e._v("). The are "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/branches/all?query=release",target:"_blank",rel:"noopener noreferrer"}},[e._v("listed here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To get a release branch:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Clone the PX4-Autopilot repo and navigate into "),a("em",[e._v("PX4-Autopilot")]),e._v(" directory:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("You can reuse an existing repo rather than cloning a new one. In this case clean the build environment (see "),a("a",{attrs:{href:"#changing-source-trees"}},[e._v("changing source trees")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" distclean\n")])])])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Fetch the desired release branch. For example, assuming you want the source for PX4 v1.13:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch origin release/1.13\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Checkout the code for the branch")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout release/1.13\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Update submodules:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" submodulesclean\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"更新子模块-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新子模块-2"}},[e._v("#")]),e._v(" 更新子模块")]),e._v(" "),a("p",[e._v("有几种方法可以更新子模块。 There are several ways to update a submodule. Either you clone the repository or you go in the submodule directory and follow the same procedure as in "),a("a",{attrs:{href:"#Contributing-code-to-PX4"}},[e._v("Contributing code to PX4")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"为子模块更新执行-pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为子模块更新执行-pr"}},[e._v("#")]),e._v(" 为子模块更新执行 PR")]),e._v(" "),a("p",[e._v("This is required after you have done a PR for a submodule X repository and the bug-fix / feature-add is in the current main of submodule X. Since the Firmware still points to a commit before your update, a submodule pull request is required such that the submodule used by the Firmware points to the newest commit.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Firmware\n")])])]),a("ul",[a("li",[e._v("创建一个分支，描述子模块更新的 bug 修复/功能："),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b pr-some-fix\n")])])])]),e._v(" "),a("li",[e._v("进入子模块的子目录"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("PX4 submodule might not necessarily point to the newest commit. Therefore, first checkout master and pull the newest upstream code. Therefore, first checkout main and pull the newest upstream code."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream main\n")])])])]),e._v(" "),a("li",[e._v("回到 Firmware 目录，如往常一样添加、提交和上推更改。"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Update submodule to include ..."')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push upstream pr-some-fix\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"查看拉取请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看拉取请求"}},[e._v("#")]),e._v(" 查看拉取请求")]),e._v(" "),a("p",[e._v("You can test someone's pull request (changes are not yet merged) even if the branch to merge only exists on the fork from that person. Do the following 执行以下指令：:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream  pull/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PR ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/head:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("PR ID is the number right next to the PR's title (without the #) and the "),a("code",[e._v("&lt;branch name&gt;")]),e._v(" can also be found right below the "),a("code",[e._v("PR ID")]),e._v(", e.g. "),a("code",[e._v("&lt;the other persons git name&gt;:&lt;branch name&gt;")]),e._v(". After that you can see the newly created branch locally with 之后, 您可以看到新创建的分支在本地")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch\n")])])]),a("p",[e._v("然后切换到那个分支")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[e._v("#")]),e._v(" 常见错误")]),e._v(" "),a("h3",{attrs:{id:"强制推送到分叉存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制推送到分叉存储库"}},[e._v("#")]),e._v(" 强制推送到分叉存储库")]),e._v(" "),a("p",[e._v("做完第一个 PR 后, 来自 PX4 社区的人将回顾你的更改。 在大多数情况下, 这意味着您必须根据评审来修复本地分支。 After changing the files locally, the feature branch needs to be rebased again with the most recent upstream/main. 但是, 在重新建立基础后, 不再可能将特征分支直接推送到分叉存储库, 而是需要使用强制推送:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --force-with-lease origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"重新建立合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新建立合并冲突"}},[e._v("#")]),e._v(" 重新建立合并冲突")]),e._v(" "),a("p",[e._v("If a conflict occurs during a "),a("code",[e._v("git rebase")]),e._v(", please refer to "),a("a",{attrs:{href:"https://docs.github.com/en/get-started/using-git/resolving-merge-conflicts-after-a-git-rebase",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"拉取合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取合并冲突"}},[e._v("#")]),e._v(" 拉取合并冲突")]),e._v(" "),a("p",[e._v("If a conflict occurs during a "),a("code",[e._v("git pull")]),e._v(", please refer to "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/#competing-line-change-merge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"build-error-due-to-git-tags-out-of-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-error-due-to-git-tags-out-of-date"}},[e._v("#")]),e._v(" Build error due to git tags out of date")]),e._v(" "),a("p",[e._v("After having done the first PR, people from the PX4 community will review your changes. In most cases this means that you have to fix your local branch according to the review. After changing the files locally, the feature branch needs to be rebased again with the most recent upstream/master. However, after the rebase, it is no longer possible to push the feature branch to your forked repository directly, but instead you need to use a force push:")]),e._v(" "),a("p",[e._v("This can be solved by fetching the upstream repository tags:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("http://nuclearsquid.com/writings/git-add/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(". * Commit the added files with a meaningful message explaining your changes\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);