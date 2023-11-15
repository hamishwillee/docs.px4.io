(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1903:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contributing-to-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-documentation"}},[e._v("#")]),e._v(" Contributing to Documentation")]),e._v(" "),a("p",[e._v("Contributions to the PX4 User Guide are very welcome; from simple fixes to spelling and grammar, through to the creation of whole new sections.")]),e._v(" "),a("p",[e._v("This topic explains how to make and test changes.\nTowards the end there is a basic style guide.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You will need a (free) "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(" account to contribute to the guides.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"github_changes"}})]),e._v(" "),a("h2",{attrs:{id:"quick-changes-in-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-changes-in-github"}},[e._v("#")]),e._v(" Quick Changes in Github")]),e._v(" "),a("p",[e._v("Simple changes to "),a("em",[e._v("existing content")]),e._v(" can be made by clicking the "),a("strong",[e._v("Edit this page on GitHub")]),e._v(" link that appears at the bottom of every page (this opens the page on Github for editing).")]),e._v(" "),a("p",[a("img",{attrs:{src:s(700),alt:"Vuepress: Edit Page button"}})]),e._v(" "),a("p",[e._v("To edit an existing page:")]),e._v(" "),a("ol",[a("li",[e._v("Open the page.")]),e._v(" "),a("li",[e._v("Click the "),a("strong",[e._v("Edit this page on GitHub")]),e._v(" link below the page content.")]),e._v(" "),a("li",[e._v("Make the desired change.")]),e._v(" "),a("li",[e._v("Below the Github page editor you'll be prompted to create a separate branch and then\nguided to submit a "),a("em",[e._v("pull request")]),e._v(".")])]),e._v(" "),a("p",[e._v("The documentation team will review the request and either merge it or work with you to update it.")]),e._v(" "),a("p",[a("a",{attrs:{id:"big_changes"}})]),e._v(" "),a("h2",{attrs:{id:"changes-using-git-new-pages-and-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-using-git-new-pages-and-images"}},[e._v("#")]),e._v(" Changes using Git (New Pages and Images)")]),e._v(" "),a("p",[e._v("More substantial changes, including adding new pages or adding/modifying images, aren't as easy to make (or properly test) on Github.\nFor these kinds of changes we suggest using the same approach as for "),a("em",[e._v("code")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("Use the "),a("em",[e._v("git")]),e._v(" toolchain to get the documentation source code onto your local computer.")]),e._v(" "),a("li",[e._v("Modify the documentation as needed (add, change, delete).")]),e._v(" "),a("li",[a("em",[e._v("Test")]),e._v(" that it builds properly using Vuepress.")]),e._v(" "),a("li",[e._v("Create a branch for your changes and create a pull request (PR) to pull it back into the documentation.")])]),e._v(" "),a("p",[e._v("The following explain how to get the source code, build locally (to test), and modify the code.")]),e._v(" "),a("h3",{attrs:{id:"get-push-documentation-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-push-documentation-source-code"}},[e._v("#")]),e._v(" Get/Push Documentation Source Code")]),e._v(" "),a("p",[e._v("To get the library(s) sources onto your local computer you will need to use the git toolchain.\nThe instructions below explain how to get git and use it on your local computer.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download git for your computer from "),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com/downloads"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign up"),a("OutboundLink")],1),e._v(" for Github if you haven't already")])]),e._v(" "),a("li",[a("p",[e._v("Create a copy (Fork) of the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 User Guide repo"),a("OutboundLink")],1),e._v(" on Github ("),a("a",{attrs:{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("li",[a("p",[e._v("Clone (copy) your forked repository to your local computer:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/PX4-user_guide.git\n")])])]),a("p",[e._v('For example, to clone the PX4 userguide fork for a user with Github account "john_citizen":')]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/john_citizen/PX4-user_guide.git\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to your local repository:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/PX4-user_guide\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Add a "),a("em",[e._v("remote")]),e._v(' called "upstream" to point to the PX4 version of the library:')]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/PX4/PX4-user_guide.git\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('A "remote" is a handle to a particular repository.\nThe remote named '),a("em",[e._v("origin")]),e._v(" is created by default when you clone the repository, and points to "),a("em",[e._v("your fork")]),e._v(" of the guide.\nAbove you create a new remote "),a("em",[e._v("upstream")]),e._v(" that points to the PX4 project version of the documents.")])])]),e._v(" "),a("li",[a("p",[e._v("Create a branch for your changes:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_feature_branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("This creates a local branch on your computer named "),a("code",[e._v("your_feature_branch_name")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Make changes to the documentation as needed (general guidance on this in following sections)")])]),e._v(" "),a("li",[a("p",[e._v('Once you are satisfied with your changes, you can add them to your local branch using a "commit":')]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your commit message>"')]),e._v("\n")])])]),a("p",[e._v("For a good commit message, please refer to the "),a("RouterLink",{attrs:{to:"/en/contribute//code.html#commits-and-commit-messages"}},[e._v("Source Code Management")]),e._v(" section.")],1)]),e._v(" "),a("li",[a("p",[e._v("Push your local branch (including commits added to it) to your forked repository on Github.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin your_feature_branch_name\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Go to your forked repository on Github in a web browser, e.g.: "),a("code",[e._v("https://github.com/<your git name>/PX4-user_guide.git")]),e._v(".\nThere you should see the message that a new branch has been pushed to your forked repository.")])]),e._v(" "),a("li",[a("p",[e._v("Create a pull request (PR):")]),e._v(" "),a("ul",[a("li",[e._v('On the right hand side of the "new branch message" (see one step before), you should see a green button saying "Compare & Create Pull Request".\nPress it.')]),e._v(" "),a("li",[e._v("A pull request template will be created.\nIt will list your commits and you can (must) add a meaningful title (in case of a one commit PR, it's usually the commit message) and message ("),a("span",{staticStyle:{color:"orange"}},[e._v("explain what you did for what reason")]),e._v(".\nCheck "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("other pull requests"),a("OutboundLink")],1),e._v(" for comparison)")])])]),e._v(" "),a("li",[a("p",[e._v("You're done!\nMaintainers for the PX4 User Guide will now have a look at your contribution and decide if they want to integrate it.\nCheck if they have questions on your changes every once in a while.")])])]),e._v(" "),a("h3",{attrs:{id:"building-the-library-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-library-locally"}},[e._v("#")]),e._v(" Building the Library Locally")]),e._v(" "),a("p",[e._v("Build the library locally to test that any changes you have made have rendered properly:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Install the "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress prerequiresites"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodejs 10+"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("For recent nodejs versions (after v16.15.0) you need to enable the node legacy OpenSSL provider.\nOn Ubuntu you can do this by running the terminal command:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("--openssl-legacy-provider\n")])])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn classic"),a("OutboundLink")],1)])])])]),e._v(" "),a("li",[a("p",[e._v("Navigate to your local repository:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/PX4-user_guide\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install dependencies (including Vuepress):")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Preview and serve the library:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:dev\n")])])]),a("ul",[a("li",[e._v("Now you can browse the guide on http://localhost:8080/px4_user_guide/")]),e._v(" "),a("li",[e._v("Stop serving using "),a("strong",[e._v("CTRL+C")]),e._v(" in the terminal prompt.")])])]),e._v(" "),a("li",[a("p",[e._v("Build the library using:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Ubuntu")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Windows")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:buildwin\n")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("yarn docs:dev")]),e._v(" to preview changes "),a("em",[e._v("as you make them")]),e._v(" (documents are updated and served very quickly).\nBefore submitting a PR you should also build it using "),a("code",[e._v("docs:build")]),e._v(", as this can highlight issues that are not visible when using "),a("code",[e._v("docs:dev")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"source-code-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code-structure"}},[e._v("#")]),e._v(" Source Code Structure")]),e._v(" "),a("p",[e._v("The guide uses the "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),a("OutboundLink")],1),e._v(" toolchain.\nThe PX4 User Guide has some minor differences, mostly related to configuration and setup.")]),e._v(" "),a("p",[e._v("In overview:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Pages are written in separate files using markdown.")]),e._v(" "),a("ul",[a("li",[e._v("The syntax is almost the same as that used by the Github wiki.")]),e._v(" "),a("li",[e._v("Vuepress also supports some "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown extensions"),a("OutboundLink")],1),e._v(".\nWe try and avoid using these, except for "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html#custom-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("tips, warning, etc."),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("li",[a("p",[e._v("This is a "),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("multilingual"),a("OutboundLink")],1),e._v(" book:")]),e._v(" "),a("ul",[a("li",[e._v('Pages for each language are stored in the folder named for the associated language code (e.g. "zh" for Chinese, "ko" for Korean).')]),e._v(" "),a("li",[e._v("Only edit the ENGLISH ("),a("strong",[e._v("/en")]),e._v(") version of files.\nWe use "),a("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[e._v("Crowdin")]),e._v(" to manage the translations.")],1)])]),e._v(" "),a("li",[a("p",[e._v("All pages must be in an appropriately named sub-folder of "),a("strong",[e._v("/en")]),e._v(" (e.g. this page is in folder "),a("strong",[e._v("en/contribute/")]),e._v(").")]),e._v(" "),a("ul",[a("li",[e._v("This makes linking easier because other pages and images are always as the same relative levels")])])]),e._v(" "),a("li",[a("p",[e._v("The "),a("em",[e._v("structure")]),e._v(" of the book is defined in "),a("strong",[e._v("SUMMARY.md")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If you add a new page to the guide you must also add an entry to this file!")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('This is not "standard vuepress" way to define the sidebar (the summary file is imported by '),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/main/.vuepress/get_sidebar.js",target:"_blank",rel:"noopener noreferrer"}},[e._v(".vuepress/get_sidebar.js"),a("OutboundLink")],1),e._v(").")])])])])]),e._v(" "),a("li",[a("p",[e._v("Images must be stored in a sub folder of "),a("strong",[e._v("/assets")]),e._v(".\nThis is two folders down from content folders, so if you add an image you will reference it like:")]),e._v(" "),a("div",{staticClass:"language-plain extra-class"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[e._v("![Image Description](../../assets/path_to_file/filename.jpg)\n")])])])]),e._v(" "),a("li",[a("p",[e._v("A file named "),a("strong",[e._v("package.json")]),e._v(" defines any dependencies of the build.")])]),e._v(" "),a("li",[a("p",[e._v("A web hook is used to track whenever files are merged into the master branch on this repository, causing the book to rebuild.")])])]),e._v(" "),a("h3",{attrs:{id:"adding-new-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-pages"}},[e._v("#")]),e._v(" Adding New Pages")]),e._v(" "),a("p",[e._v("When you add a new page you must also add it to "),a("strong",[e._v("en/SUMMARY.md")]),e._v("!")]),e._v(" "),a("h2",{attrs:{id:"style-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style-guide"}},[e._v("#")]),e._v(" Style Guide")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Files/file names")]),e._v(" "),a("ul",[a("li",[e._v("Put new files in an appropriate sub-folder of "),a("strong",[e._v("/en/")]),e._v(".\nDo not further nest folders.")]),e._v(" "),a("li",[e._v("Use descriptive names.\nIn particular, image filenames should describe what they contain.")]),e._v(" "),a("li",[e._v('Use lower case filenames and separate words using underscores "_"')])])]),e._v(" "),a("li",[a("p",[e._v("Images")]),e._v(" "),a("ul",[a("li",[e._v("Use the smallest size and lowest resolution that makes the image still useful (this reduces download cost for users with poor bandwidth).")]),e._v(" "),a("li",[e._v("New images should be created in a sub-folder of "),a("strong",[e._v("/assets/")]),e._v(" by default\n(so they can be shared between translations).")])])]),e._v(" "),a("li",[a("p",[e._v("Content:")]),e._v(" "),a("ul",[a("li",[e._v('Use "style" (bold, emphasis, etc) consistently.\n'),a("ul",[a("li",[a("strong",[e._v("Bold")]),e._v(" for button presses and menu definitions.")]),e._v(" "),a("li",[a("em",[e._v("Emphasis")]),e._v(" for tool names. - Otherwise use as little as possible.")])])]),e._v(" "),a("li",[e._v('Headings and page titles should use "First Letter Capitalisation"')]),e._v(" "),a("li",[e._v("The page title should be a first level heading (#).\nAll other headings should be h2 (##) or lower.")]),e._v(" "),a("li",[e._v("Don't add any style to headings.")]),e._v(" "),a("li",[e._v("Don't translate the "),a("em",[e._v("first part")]),e._v(" of a note, tip or warning declaration (e.g. "),a("code",[e._v("::: tip")]),e._v(")\nas this precise text is required to render the note properly.")])])])]),e._v(" "),a("h2",{attrs:{id:"where-do-i-add-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-do-i-add-changes"}},[e._v("#")]),e._v(" Where Do I Add Changes?")]),e._v(" "),a("p",[e._v("Add new documentation in-line with the existing structure!")]),e._v(" "),a("p",[e._v("Some of the main categories are:")]),e._v(" "),a("ul",[a("li",[e._v("Development: content related to:\n"),a("ul",[a("li",[e._v("Evolving the platform (new modes, modules, flight modes, hardware, software and hardware architecture and porting).")]),e._v(" "),a("li",[e._v('"Experimental" work that requires developer expertise to reproduce.')])])]),e._v(" "),a("li",[e._v("Flying: content related to flying a standard vehicle (flight modes, arming, taking off, landing)")]),e._v(" "),a("li",[e._v("Basic configuration: Configuration that every vehicle will need to do")]),e._v(" "),a("li",[e._v("Advanced configuration: Configuration that is specific to a vehicle type, or some segment of users.")]),e._v(" "),a("li",[e._v("Peripherals: Documentation on different hardware that can be used.\n"),a("ul",[a("li",[e._v("This also includes setup and configuration information for hardware that isn't covered in Basic configuration.")])])]),e._v(" "),a("li",[e._v("Basic Assembly: Assembly of an autopilot and its main peripherals")]),e._v(" "),a("li",[e._v("Airframe Builds: Examples of how to build a whole system.")])]),e._v(" "),a("h2",{attrs:{id:"translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translations"}},[e._v("#")]),e._v(" Translations")]),e._v(" "),a("p",[e._v("For information about translation see: "),a("RouterLink",{attrs:{to:"/en/contribute/translation.html"}},[e._v("Translation")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"licence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#licence"}},[e._v("#")]),e._v(" Licence")]),e._v(" "),a("p",[e._v("All PX4/Dronecode documentation is free to use and modify under terms of the permissive "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0"),a("OutboundLink")],1),e._v(" license.")])])}),[],!1,null,null,null);t.default=r.exports},700:function(e,t,s){e.exports=s.p+"assets/img/vuepress_edit_page_on_github_link.df5c6f6e.png"}}]);