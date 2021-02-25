(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{1530:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"git-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-examples"}},[e._v("#")]),e._v(" GIT Examples")]),e._v(" "),a("p",[a("a",{attrs:{id:"contributing_code"}})]),e._v(" "),a("h2",{attrs:{id:"contributing-code-to-px4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-code-to-px4"}},[e._v("#")]),e._v(" Contributing Code to PX4")]),e._v(" "),a("p",[e._v("Adding a feature to PX4 follows a defined workflow. In order to share your contributions on PX4, you can follow this example.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign up"),a("OutboundLink")],1),e._v(" for github if you haven't already")]),e._v(" "),a("li",[e._v("Fork the PX4-Autopilot re[p (see "),a("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/#fork-an-example-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[e._v("Clone your forked repository to your local computer"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/PX4-Autopilot.git\n")])])])]),e._v(" "),a("li",[e._v("Go into the new directory, initialize and update the submodules, and add the original upstream PX4-Autopilot"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/PX4/PX4-Autopilot.git\n")])])])]),e._v(" "),a("li",[e._v("You should have now two remote repositories: One repository is called upstream that points to PX4/PX4-Autopilot,\nand one repository that points to your forked repository of the PX4 repository.")]),e._v(" "),a("li",[e._v("This can be checked with the following command:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n")])])])]),e._v(" "),a("li",[e._v("Make the changes that you want to add to the current master.")]),e._v(" "),a("li",[e._v("Create a new branch with a meaningful name that represents your feature"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),e._v("you can use the command "),a("code",[e._v("git branch")]),e._v(" to make sure you're on the right branch.")]),e._v(" "),a("li",[e._v("Add your changes that you want to be part of the commit by adding the respective files"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),e._v("If you prefer having a GUI to add your files see "),a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Git-in-Other-Environments-Graphical-Interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitk"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"http://nuclearsquid.com/writings/git-add/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("git add -p")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Commit the added files with a meaningful message explaining your changes"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your commit message>"')]),e._v("\n")])])])])]),e._v(" "),a("p",[e._v("For a good commit message, please refer to "),a("RouterLink",{attrs:{to:"/en/contribute/"}},[e._v("Contributing")]),e._v(" section.")],1),e._v(" "),a("ul",[a("li",[e._v("Some time might have passed and the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("upstream master"),a("OutboundLink")],1),e._v(" has changed.\nPX4 prefers a linear commit history and uses "),a("a",{attrs:{href:"https://git-scm.com/book/de/v1/Git-Branching-Rebasing",target:"_blank",rel:"noopener noreferrer"}},[e._v("git rebase"),a("OutboundLink")],1),e._v(".\nTo include the newest changes from upstream in your local branch, switch to your master branch"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n")])])]),e._v("Then pull the newest commits from upstream master"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream master\n")])])]),e._v("Now your local master is up to date. Switch back to your feature branch"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),e._v("and rebase on your updated master"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase master\n")])])])]),e._v(" "),a("li",[e._v("Now you can push your local commits to your forked repository"),a("br"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("You can verify that the push was successful by going to your forked repository in your browser: "),a("code",[e._v("https://github.com/<your git name>/PX4-Autopilot.git")]),a("br"),e._v("\nThere you should see the message that a new branch has been pushed to your forked repository.")]),e._v(" "),a("li",[e._v('Now it\'s time to create a pull request (PR).\nOn the right hand side of the "new branch message" (see one step before), you should see a green button saying "Compare & Create Pull Request".\nThen it should list your changes and you can (must) add a meaningful title (in case of a one commit PR, it\'s usually the commit message) and message ('),a("span",{staticStyle:{color:"orange"}},[e._v("explain what you did for what reason")]),e._v(".\nCheck "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("other pull requests"),a("OutboundLink")],1),e._v(" for comparison)")]),e._v(" "),a("li",[e._v("You're done!\nResponsible members of PX4 will now have a look at your contribution and decide if they want to integrate it.\nCheck if they have questions on your changes every once in a while.")])]),e._v(" "),a("h2",{attrs:{id:"get-a-specific-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-a-specific-release"}},[e._v("#")]),e._v(" Get a Specific Release")]),e._v(" "),a("p",[e._v("To get the source code for a "),a("em",[e._v("specific older release")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("Clone the PX4-Autopilot repo and navigate into PX4-Autopilot directory:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot\n")])])])]),e._v(" "),a("li",[e._v("List all releases (tags)"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -l\n")])])])]),e._v(" "),a("li",[e._v("Checkout code for particular tag (e.g. for tag 1.7.4beta)"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout v1.7.4beta\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"update-submodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-submodule"}},[e._v("#")]),e._v(" Update Submodule")]),e._v(" "),a("p",[e._v("There are several ways to update a submodule.\nEither you clone the repository or you go in the submodule directory and follow the same procedure as in "),a("a",{attrs:{href:"#contributing_code"}},[e._v("Contributing code to PX4")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"do-a-pr-for-a-submodule-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-a-pr-for-a-submodule-update"}},[e._v("#")]),e._v(" Do a PR for a submodule update")]),e._v(" "),a("p",[e._v("This is required after you have done a PR for a submodule X repository and the bug-fix / feature-add is in the current master of submodule X. Since the Firmware still points to a commit before your update, a submodule pull request is required such that the submodule used by the Firmware points to the newest commit.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Firmware\n")])])]),a("ul",[a("li",[e._v("Make a new branch that describes the fix / feature for the submodule update:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b pr-some-fix\n")])])])]),e._v(" "),a("li",[e._v("Go to submodule subdirectory"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),a("li",[e._v("PX4 submodule might not necessarily point to the newest commit. Therefore, first checkout master and pull the newest upstream code."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull upstream master\n")])])])]),e._v(" "),a("li",[e._v("Go back to Firmware directory, and as usual add, commit and push the changes."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" -\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("path to submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Update submodule to include ..."')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push upstream pr-some-fix\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"checkout-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkout-pull-requests"}},[e._v("#")]),e._v(" Checkout pull requests")]),e._v(" "),a("p",[e._v("You can test someone's pull request (changes are not yet merged) even if the branch to merge only exists on the fork from that person. Do the following:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream  pull/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PR ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/head:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[a("code",[e._v("PR ID")]),e._v(" is the number right next to the PR's title (without the #) and the "),a("code",[e._v("<branch name>")]),e._v(" can also be found right below the "),a("code",[e._v("PR ID")]),e._v(", e.g. "),a("code",[e._v("<the other persons git name>:<branch name>")]),e._v(". After that you can see the newly created branch locally with")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch\n")])])]),a("p",[e._v("Then switch to that branch")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"common-pitfalls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-pitfalls"}},[e._v("#")]),e._v(" Common pitfalls")]),e._v(" "),a("h3",{attrs:{id:"force-push-to-forked-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#force-push-to-forked-repository"}},[e._v("#")]),e._v(" Force push to forked repository")]),e._v(" "),a("p",[e._v("After having done the first PR, people from the PX4 community will review your changes. In most cases this means that you have to fix your local branch according to the review. After changing the files locally, the feature branch needs to be rebased again with the most recent upstream/master. However, after the rebase, it is no longer possible to push the feature branch to your forked repository directly, but instead you need to use a force push:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --force-with-lease origin "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your feature branch name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h3",{attrs:{id:"rebase-merge-conflicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase-merge-conflicts"}},[e._v("#")]),e._v(" Rebase merge conflicts")]),e._v(" "),a("p",[e._v("If a conflict occurs during a "),a("code",[e._v("git rebase")]),e._v(", please refer to "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"pull-merge-conflicts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-merge-conflicts"}},[e._v("#")]),e._v(" Pull merge conflicts")]),e._v(" "),a("p",[e._v("If a conflict occurs during a "),a("code",[e._v("git pull")]),e._v(", please refer to "),a("a",{attrs:{href:"https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/#competing-line-change-merge-conflicts",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"build-error-due-to-git-tags-out-of-date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-error-due-to-git-tags-out-of-date"}},[e._v("#")]),e._v(" Build error due to git tags out of date")]),e._v(" "),a("p",[e._v("The build error "),a("code",[e._v("Error: PX4 version too low, expected at least vx.x.x")]),e._v(" occurs if git tags are out of date.")]),e._v(" "),a("p",[e._v("This can be solved by fetching the upstream repository tags:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch upstream --tags\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);