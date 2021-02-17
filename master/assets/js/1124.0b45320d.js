(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{2358:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-示例"}},[t._v("#")]),t._v(" GIT 示例")]),t._v(" "),a("p",[a("a",{attrs:{id:"contributing_code"}})]),t._v(" "),a("h2",{attrs:{id:"为-px4-贡献代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为-px4-贡献代码"}},[t._v("#")]),t._v(" 为 PX4 贡献代码")]),t._v(" "),a("p",[t._v("Adding a feature to PX4 follows a defined workflow. In order to share your contributions on PX4, you can follow this example. 为了在 px4 上分享您的贡献, 您可以遵循此示例。")]),t._v(" "),a("ul",[a("li",[t._v("如果您还没有注册，请先"),a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sign up"),a("OutboundLink")],1),t._v(" Github 账户")]),t._v(" "),a("li",[t._v("Fork the Firmware (see "),a("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/#fork-an-example-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(")")]),t._v(" "),a("li",[t._v("将分支克隆到本地计算机"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/wherever/\n")])])])])]),t._v(" "),a("p",[t._v("git clone https://github.com/"),a("your",{attrs:{git:"",name:""}},[t._v("/Firmware.git")])],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("* Go into the new directory, initialize and update the submodules, and add the original upstream Firmware<br>\n```sh\ncd Firmware\ngit submodule update --init --recursive\ngit remote add upstream https://github.com/PX4/Firmware.git\n")])])]),a("ul",[a("li",[t._v("You should have now two remote repositories: One repository is called upstream that points to the PX4 Firmware, and one repository that points to your forked repository of the PX4 repository.")]),t._v(" "),a("li",[t._v("这可以通过以下命令进行检查:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n")])])])]),t._v(" "),a("li",[t._v("进行要添加到当前 master 的更改。")]),t._v(" "),a("li",[t._v("使用代表您的功能的有意义的名称创建一个新分支"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("You can verify that the push was successful by going to your forked repository in your browser: "),a("code",[t._v("https://github.com/<your git name>/Firmware.git")]),a("br"),t._v("\nThere you should see the message that a new branch has been pushed to your forked repository.")]),t._v(" "),a("li",[t._v("通过添加相应的文件添加您希望成为提交的一部分的更改"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("If you prefer having a GUI to add your files see "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitk"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"http://nuclearsquid.com/writings/git-add/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("git add -p")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("提交添加的文件, 并顺便记录一条有意义的消息, 解释您的更改"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your commit message>"')]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("you can use the command "),a("code",[t._v("git branch")]),t._v(" to make sure you're on the right branch. * Add your changes that you want to be part of the commit by adding the respective files")]),t._v(" "),a("ul",[a("li",[t._v("Some time might have passed and the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("upstream master"),a("OutboundLink")],1),t._v(" has changed. PX4 更喜欢线性提交历史记录, 并使用 "),a("a",{attrs:{href:"https://git-scm.com/book/de/v1/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase"),a("OutboundLink")],1),t._v("。 要在本地分支中包含上游的最新更改, 请切换到主分支"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])]),t._v("然后从上游 master 中提取最新的提交"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull upstream master\n")])])]),t._v("Now your local master is up to date. Switch back to your feature branch 切换回您的功能分支"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("并根据您更新的母版重新定位"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n")])])])]),t._v(" "),a("li",[t._v("现在, 您可以将本地提交推送到分支版本库"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("For a good commit message, please refer to "),a("RouterLink",{attrs:{to:"/zh/contribute/"}},[t._v("Contributing")]),t._v(" section. * Some time might have passed and the "),a("a",{attrs:{href:"https://github.com/PX4/Firmware.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("upstream master"),a("OutboundLink")],1),t._v(" has changed. PX4 prefers a linear commit history and uses "),a("a",{attrs:{href:"https://git-scm.com/book/de/v1/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase"),a("OutboundLink")],1),t._v(". To include the newest changes from upstream in your local branch, switch to your master branch")],1),t._v(" "),a("li",[t._v('现在是时候创建一个拉取请求 (PR) 了。 Now it\'s time to create a pull request (PR). On the right hand side of the "new branch message" (see one step before), you should see a green button saying "Compare & Create Pull Request". Then it should list your changes and you can (must) add a meaningful title (in case of a one commit PR, it\'s usually the commit message) and message ('),a("span",{staticStyle:{color:"orange"}},[t._v("explain what you did for what reason")]),t._v(". Check "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("other pull requests"),a("OutboundLink")],1),t._v(" for comparison) 然后, 它应该列出你的更改，你必须添加一个有意义的标题 (在提交 PR 的情况下, 它通常是提交消息) 和消息 ("),a("span",{staticStyle:{color:"orange"}},[t._v("解释你做了这些更改的原因 ")]),t._v("， 检查 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("其他拉取请求 "),a("OutboundLink")],1),t._v(" 进行比较)。")]),t._v(" "),a("li",[t._v("搞定！ You're done! Responsible members of PX4 will now have a look at your contribution and decide if they want to integrate it. Check if they have questions on your changes every once in a while. 每过一段时间，他们会检查你的更改，以确保没有疑义。")])]),t._v(" "),a("h2",{attrs:{id:"更新子模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新子模块"}},[t._v("#")]),t._v(" 更新子模块")]),t._v(" "),a("p",[t._v("If you prefer having a GUI to add your files see "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitk"),a("OutboundLink")],1),t._v(" or [")]),t._v(" "),a("ul",[a("li",[t._v("Clone the PX4-Autopilot repo and navigate into PX4-Autopilot directory:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n")])])])]),t._v(" "),a("li",[t._v("列出所有发行版本（标签）"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])])])]),t._v(" "),a("p",[t._v("git pull upstream master")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("* 迁出特定tag的代码（比如 tag为 1.7.4的beta版本）\n```sh\ngit checkout v1.7.4beta\n")])])]),a("h2",{attrs:{id:"更新子模块-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新子模块-2"}},[t._v("#")]),t._v(" 更新子模块")]),t._v(" "),a("p",[t._v("有几种方法可以更新子模块。 There are several ways to update a submodule. Either you clone the repository or you go in the submodule directory and follow the same procedure as in "),a("a",{attrs:{href:"#Contributing-code-to-PX4"}},[t._v("Contributing code to PX4")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"为子模块更新执行-pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为子模块更新执行-pr"}},[t._v("#")]),t._v(" 为子模块更新执行 PR")]),t._v(" "),a("p",[t._v("这是在您为子模块 x 存储库做了 PR 之后所必需的, 并且错误修复/功能添加在子模块 x 的当前主控件中。由于固件仍指向更新之前的提交, 因此需要一个子模块拉取请求, 以便固件使用的子模块指向最新提交。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n")])])]),a("ul",[a("li",[t._v("创建一个分支，描述子模块更新的 bug 修复/功能："),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b pr-some-fix\n")])])])]),t._v(" "),a("li",[t._v("进入子模块的子目录"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("PX4 submodule might not necessarily point to the newest commit. Therefore, first checkout master and pull the newest upstream code. 因此，先 checkout master 并且拉取最新的上游代码。"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])])])]),t._v(" "),a("p",[t._v("git add "),a("path",{attrs:{to:"",submodule:""}},[t._v('\ngit commit -m "Update submodule to include ..."\ngit push upstream pr-some-fix')])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('* 回到 Firmware 目录，如往常一样添加、提交和上推更改。\n```sh\ncd -\ngit add <path to submodule>\ngit commit -m "Update submodule to include ..."\ngit push upstream pr-some-fix\n')])])]),a("h2",{attrs:{id:"查看拉取请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看拉取请求"}},[t._v("#")]),t._v(" 查看拉取请求")]),t._v(" "),a("p",[t._v("You can test someone's pull request (changes are not yet merged) even if the branch to merge only exists on the fork from that person. Do the following 执行以下指令：:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream  pull/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PR ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/head:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("PR ID is the number right next to the PR's title (without the #) and the "),a("code",[t._v("&lt;branch name&gt;")]),t._v(" can also be found right below the "),a("code",[t._v("PR ID")]),t._v(", e.g. "),a("code",[t._v("&lt;the other persons git name&gt;:&lt;branch name&gt;")]),t._v(". After that you can see the newly created branch locally with 之后, 您可以看到新创建的分支在本地")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n")])])]),a("p",[t._v("然后切换到那个分支")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),a("h3",{attrs:{id:"强制推送到分叉存储库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制推送到分叉存储库"}},[t._v("#")]),t._v(" 强制推送到分叉存储库")]),t._v(" "),a("p",[t._v("做完第一个 PR 后, 来自 PX4 社区的人将回顾你的更改。 在大多数情况下, 这意味着您必须根据评审来修复本地分支。 在本地更改文件后, 需要使用最新的 uperecle1 主服务器重新定位功能分支。 但是, 在重新建立基础后, 不再可能将特征分支直接推送到分叉存储库, 而是需要使用强制推送:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force-with-lease origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"重新建立合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新建立合并冲突"}},[t._v("#")]),t._v(" 重新建立合并冲突")]),t._v(" "),a("p",[t._v("If a conflict occurs during a "),a("code",[t._v("git rebase")]),t._v(", please refer to "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"拉取合并冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取合并冲突"}},[t._v("#")]),t._v(" 拉取合并冲突")]),t._v(" "),a("p",[t._v("If a conflict occurs during a "),a("code",[t._v("git pull")]),t._v(", please refer to "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/#competing-line-change-merge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"build-error-due-to-git-tags-out-of-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-error-due-to-git-tags-out-of-date"}},[t._v("#")]),t._v(" Build error due to git tags out of date")]),t._v(" "),a("p",[t._v("After having done the first PR, people from the PX4 community will review your changes. In most cases this means that you have to fix your local branch according to the review. After changing the files locally, the feature branch needs to be rebased again with the most recent upstream/master. However, after the rebase, it is no longer possible to push the feature branch to your forked repository directly, but instead you need to use a force push:")]),t._v(" "),a("p",[t._v("This can be solved by fetching the upstream repository tags:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http://nuclearsquid.com/writings/git-add/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(". * Commit the added files with a meaningful message explaining your changes\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);