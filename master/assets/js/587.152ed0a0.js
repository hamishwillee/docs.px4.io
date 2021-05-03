(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1982:function(e,t,a){"use strict";a.r(t);var s=a(18),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"contributing-to-documentation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing-to-documentation"}},[e._v("#")]),e._v(" Contributing to Documentation")]),e._v(" "),s("p",[e._v("Contributions to the PX4 User Guide are very welcome; from simple fixes to spelling and grammar, through to the creation of whole new sections.")]),e._v(" "),s("p",[e._v("This topic explains how to make and test changes. Towards the end there is a basic style guide.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Note You will need a (free) "),s("a",{attrs:{href:"http://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),s("OutboundLink")],1),e._v(" account to contribute to the guides.")])]),e._v(" "),s("p",[s("a",{attrs:{id:"github_changes"}})]),e._v(" "),s("h2",{attrs:{id:"quick-changes-in-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-changes-in-github"}},[e._v("#")]),e._v(" Quick Changes in Github")]),e._v(" "),s("p",[e._v("Simple changes to "),s("em",[e._v("existing content")]),e._v(" can be made by clicking the "),s("strong",[e._v("Edit this page on GitHub")]),e._v(" link that appears at the bottom of every page (this opens the page on Github for editing).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(656),alt:"Vuepress: Edit Page button"}})]),e._v(" "),s("p",[e._v("To edit an existing page:")]),e._v(" "),s("ol",[s("li",[e._v("Open the page.")]),e._v(" "),s("li",[e._v("Click the "),s("strong",[e._v("Edit this page on GitHub")]),e._v(" link below the page content.")]),e._v(" "),s("li",[e._v("At the bottom of the page you'll be prompted to create a separate branch and then guided to submit a "),s("em",[e._v("pull request")]),e._v(".")]),e._v(" "),s("li",[e._v("Below the Github page editor you'll be prompted to create a separate branch and then guided to submit a "),s("em",[e._v("pull request")]),e._v(".")])]),e._v(" "),s("p",[e._v("The documentation team will review the request and either merge it or work with you to update it.")]),e._v(" "),s("p",[s("a",{attrs:{id:"big_changes"}})]),e._v(" "),s("h2",{attrs:{id:"adding-new-content-big-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-content-big-changes"}},[e._v("#")]),e._v(" Adding New Content - Big Changes")]),e._v(" "),s("p",[e._v("More substantial changes, including adding new pages or adding/modifying images, aren't as easy to make (or properly test) on Github. For these kinds of changes we suggest using the same approach as for "),s("em",[e._v("code")]),e._v(":")]),e._v(" "),s("ol",[s("li",[e._v("Use the "),s("em",[e._v("git")]),e._v(" toolchain to get the documentation source code onto your local computer.")]),e._v(" "),s("li",[e._v("Modify the documentation as needed (add, change, delete).")]),e._v(" "),s("li",[s("em",[e._v("Test")]),e._v(" that it builds properly using Vuepress.")]),e._v(" "),s("li",[e._v("In order to contribute many changes to the documentation, it is recommended that you follow these steps to add the changes locally and then create a pull request:")])]),e._v(" "),s("p",[e._v("The following explain how to get the source code, build locally (to test), and modify the code.")]),e._v(" "),s("h3",{attrs:{id:"what-goes-where"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-goes-where"}},[e._v("#")]),e._v(" What Goes Where?")]),e._v(" "),s("p",[e._v("The guide uses the "),s("a",{attrs:{href:"https://www.gitbook.com/about",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitbook"),s("OutboundLink")],1),e._v(" toolchain. Change requests can be either done on the Gitbook website using the "),s("a",{attrs:{href:"https://gitbookio.gitbooks.io/documentation/content/editor/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitbook editor"),s("OutboundLink")],1),e._v(" or locally (more flexible, but less user-friendly).")]),e._v(" "),s("ol",[s("li",[e._v('git add <file name> git commit -m "<your commit message>"')]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/join",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sign up"),s("OutboundLink")],1),e._v(" for Github if you haven't already")]),e._v(" "),s("li",[e._v("Create a copy (Fork) of the "),s("a",{attrs:{href:"https://github.com/PX4/px4_user_guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 User Guide repo"),s("OutboundLink")],1),e._v(" on Github ("),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/#fork-an-example-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("li",[e._v("Clone (copy) your forked repository to your local computer:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/px4_user_guide.git\n")])])]),e._v('For example, to clone the PX4 userguide fork for a user with Github account "john_citizen":'),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/john_citizen/px4_user_guide.git\n")])])])]),e._v(" "),s("li",[e._v("Navigate to your local repository:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/px4_user_guide   \n")])])])]),e._v(" "),s("li",[e._v("Add a "),s("em",[e._v("remote")]),e._v(' called "upstream" to point to the PX4 version of the library:'),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" upstream https://github.com/PX4/px4_user_guide.git\n")])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v('A "remote" is a handle to a particular repository. The remote named '),s("em",[e._v("origin")]),e._v(" is created by default when you clone the repository, and points to "),s("em",[e._v("your fork")]),e._v(" of the guide. Above you create a new remote "),s("em",[e._v("upstream")]),e._v(" that points to the PX4 project version of the documents.")])]),e._v(" "),s("ol",[s("li",[e._v("Create a branch for your changes:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_feature_branch_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),e._v("This creates a local branch on your computer named "),s("code",[e._v("your_feature_branch_name")]),e._v(".")]),e._v(" "),s("li",[e._v("Make changes to the documentation as needed (general guidance on this in following sections)")]),e._v(" "),s("li",[e._v('Once you are satisfied with your changes, you can add them to your local branch using a "commit":'),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("file name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<your commit message>"')]),e._v("\n")])])]),e._v("For a good commit message, please refer to "),s("RouterLink",{attrs:{to:"/ko/contribute/"}},[e._v("Contributing")]),e._v(" section.")],1),e._v(" "),s("li",[e._v("Push your local branch (including commits added to it) to your forked repository on Github."),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin your_feature_branch_name\n")])])])]),e._v(" "),s("li",[e._v("Go to your forked repository on Github in a web browser, e.g.: "),s("code",[e._v("https://github.com/<your git name>/px4_user_guide.git")]),e._v(". There you should see the message that a new branch has been pushed to your forked repository.")]),e._v(" "),s("li",[e._v("Create a pull request (PR):\n"),s("ul",[s("li",[e._v('On the right hand side of the "new branch message" (see one step before), you should see a green button saying "Compare & Create Pull Request". Press it.')]),e._v(" "),s("li",[e._v("A pull request template will be created. It will list your commits and you can (must) add a meaningful title (in case of a one commit PR, it's usually the commit message) and message ("),s("span",{staticStyle:{color:"orange"}},[e._v("explain what you did for what reason")]),e._v(". Check "),s("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/pulls",target:"_blank",rel:"noopener noreferrer"}},[e._v("other pull requests"),s("OutboundLink")],1),e._v(" for comparison)")])])]),e._v(" "),s("li",[e._v("You're done! Maintainers for the PX4 User Guide will now have a look at your contribution and decide if they want to integrate it. Check if they have questions on your changes every once in a while.")])]),e._v(" "),s("h3",{attrs:{id:"gitbook-documentation-toolchain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitbook-documentation-toolchain"}},[e._v("#")]),e._v(" Gitbook Documentation Toolchain")]),e._v(" "),s("p",[e._v("Build the library locally to test that any changes you have made have rendered properly:")]),e._v(" "),s("ol",[s("li",[e._v("Install the "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress prerequiresites"),s("OutboundLink")],1),e._v(":\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nodejs 10+"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn classic"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[e._v("Navigate to your local repository:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/wherever/px4_user_guide\n")])])])]),e._v(" "),s("li",[e._v("Install dependencies (including Vuepress):"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])])]),e._v(" "),s("li",[e._v("Preview and serve the library:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:dev\n")])])]),s("ul",[s("li",[e._v("Now you can browse the guide on http://localhost:8080/px4_user_guide/")]),e._v(" "),s("li",[e._v("Stop serving using "),s("strong",[e._v("CTRL+C")]),e._v(" in the terminal prompt.")])])]),e._v(" "),s("li",[e._v("Build the library using:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Ubuntu")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Windows")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs:buildwin\n")])])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("yarn docs:dev")]),e._v(" to preview changes "),s("em",[e._v("as you make them")]),e._v(" (documents are updated and served very quickly). Before submitting a PR you should also build it using "),s("code",[e._v("docs:build")]),e._v(", as this can highlight issues that are not visible when using "),s("code",[e._v("docs:dev")]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"source-code-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-code-structure"}},[e._v("#")]),e._v(" Source Code Structure")]),e._v(" "),s("p",[e._v("The guide uses the "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuepress"),s("OutboundLink")],1),e._v(" toolchain. The PX4 User Guide has some minor differences, mostly related to configuration and setup.")]),e._v(" "),s("p",[e._v("In overview:")]),e._v(" "),s("ul",[s("li",[e._v("Pages are written in separate files using markdown.\n"),s("ul",[s("li",[e._v("The syntax is almost the same as that used by the Github wiki.")]),e._v(" "),s("li",[e._v("Vuepress also supports some "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown extensions"),s("OutboundLink")],1),e._v(". We try and avoid using these, except for "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/markdown.html#custom-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("tips, warning, etc."),s("OutboundLink")],1),e._v(".")])])]),e._v(" "),s("li",[e._v("This is a "),s("a",{attrs:{href:"https://vuepress.vuejs.org/guide/i18n.html#default-theme-i18n-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("multilingual"),s("OutboundLink")],1),e._v(" book:\n"),s("ul",[s("li",[e._v('Pages for each language are stored in the folder named for the associated language code (e.g. "zh" for Chinese, "ko" for Korean).')]),e._v(" "),s("li",[e._v("Only edit the ENGLISH ("),s("strong",[e._v("/en")]),e._v(") version of files. We use "),s("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[e._v("Crowdin")]),e._v(" to manage the translations.")],1)])]),e._v(" "),s("li",[e._v("All pages must be in an appropriately named sub-folder of "),s("strong",[e._v("/en")]),e._v(" (e.g. this page is in folder "),s("strong",[e._v("en/contribute/")]),e._v(").\n"),s("ul",[s("li",[e._v("This makes linking easier because other pages and images are always as the same relative levels")])])]),e._v(" "),s("li",[e._v("The "),s("em",[e._v("structure")]),e._v(" of the book is defined in "),s("strong",[e._v("SUMMARY.md")]),e._v(" "),s("ul",[s("li",[e._v('If you add a new page to the guide you must also add an entry to this file! :::tip This is not "standard vuepress" way to define the sidebar (the summary file is imported by '),s("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/master/.vuepress/get_sidebar.js",target:"_blank",rel:"noopener noreferrer"}},[e._v(".vuepress/get_sidebar.js"),s("OutboundLink")],1),e._v(").\n:::")])])]),e._v(" "),s("li",[e._v("Images must be stored in a sub folder of "),s("strong",[e._v("/assets")]),e._v(". This is two folders down from content folders, so if you add an image you will reference it like:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("![Image Description](../../assets/path_to_file/filename.jpg)\n")])])])]),e._v(" "),s("li",[e._v("A file named "),s("strong",[e._v("package.json")]),e._v(" defines any dependencies of the build.")]),e._v(" "),s("li",[e._v("A web hook is used to track whenever files are merged into the master branch on this repository, causing the book to rebuild.")])]),e._v(" "),s("h3",{attrs:{id:"adding-new-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-new-pages"}},[e._v("#")]),e._v(" Adding New Pages")]),e._v(" "),s("p",[e._v("All PX4/Dronecode documentation is free to use and modify under terms of the permissive "),s("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0"),s("OutboundLink")],1),e._v(" licence.")]),e._v(" "),s("h2",{attrs:{id:"style-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style-guide"}},[e._v("#")]),e._v(" Style Guide")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Files/file names")]),e._v(" "),s("ul",[s("li",[e._v("Put new files in an appropriate sub-folder of "),s("strong",[e._v("/en/")]),e._v(". Do not further nest folders.")]),e._v(" "),s("li",[e._v("The "),s("em",[e._v("structure")]),e._v(" of the book is defined in a file named "),s("strong",[e._v("SUMMARY.md")]),e._v(". In particular, image filenames should describe what they contain.")]),e._v(" "),s("li",[e._v("This is a "),s("a",{attrs:{href:"https://toolchain.gitbook.com/languages.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multilingual"),s("OutboundLink")],1),e._v(" book, so there is a "),s("strong",[e._v("LANGS.md")]),e._v(" file in the root directory defining what languages are supported.")])])]),e._v(" "),s("li",[s("p",[e._v("Images")]),e._v(" "),s("ul",[s("li",[e._v("Use the smallest size and lowest resolution that makes the image still useful (this reduces download cost for users with poor bandwidth).")]),e._v(" "),s("li",[e._v("New images should be created in a sub-folder of "),s("strong",[e._v("/assets/")]),e._v(" by default (so they can be shared between translations).")])])]),e._v(" "),s("li",[s("p",[e._v("Content:")]),e._v(" "),s("ul",[s("li",[e._v('Use "style" (bold, emphasis, etc) consistently.\n'),s("ul",[s("li",[s("strong",[e._v("Bold")]),e._v(" for button presses and menu definitions.")]),e._v(" "),s("li",[s("em",[e._v("Emphasis")]),e._v(" for tool names.")]),e._v(" "),s("li",[e._v("Otherwise use as little as possible.")])])]),e._v(" "),s("li",[e._v("New images should be created in a sub-folder of "),s("strong",[e._v("/assets/")]),e._v(" by default (so they can be shared between translations).")]),e._v(" "),s("li",[e._v("The page title should be a first level heading (#). All other headings should be h2 (##) or lower.")]),e._v(" "),s("li",[e._v("Don't add any style to headings.")]),e._v(" "),s("li",[e._v("Don't translate the "),s("em",[e._v("first part")]),e._v(" of a note, tip or warning declaration (e.g. "),s("code",[e._v("::: tip")]),e._v(") as this precise text is required to render the note properly.")])])])]),e._v(" "),s("h2",{attrs:{id:"where-do-i-add-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-do-i-add-changes"}},[e._v("#")]),e._v(" Where Do I Add Changes?")]),e._v(" "),s("p",[e._v("Add new documentation in-line with the existing structure!")]),e._v(" "),s("p",[e._v("Some of the main categories are:")]),e._v(" "),s("ul",[s("li",[e._v("Development: content related to:\n"),s("ul",[s("li",[e._v("Evolving the platform (new modes, modules, flight modes, hardware, software and hardware architecture and porting).")]),e._v(" "),s("li",[e._v('"Experimental" work that requires developer expertise to reproduce.')])])]),e._v(" "),s("li",[e._v("Flying: content related to flying a standard vehicle (flight modes, arming, taking off, landing)")]),e._v(" "),s("li",[e._v("Basic configuration: Configuration that every vehicle will need to do")]),e._v(" "),s("li",[e._v("Advanced configuration: Configration that is specific to a vehicle type, or some segment of users.")]),e._v(" "),s("li",[e._v("Peripherals: Documentation on different hardware that can be used.\n"),s("ul",[s("li",[e._v("This also includes setup and configuration information for hardware that isn't covered in Basic configuration.")])])]),e._v(" "),s("li",[e._v("Basic Assembly: Assembly of an autopilot and its main peripherals")]),e._v(" "),s("li",[e._v("Airframe Builds: Examples of how to build a whole system.")])]),e._v(" "),s("h2",{attrs:{id:"translations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#translations"}},[e._v("#")]),e._v(" Translations")]),e._v(" "),s("p",[e._v("For information about translation see: "),s("RouterLink",{attrs:{to:"/ko/contribute/translation.html"}},[e._v("Translation")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"licence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#licence"}},[e._v("#")]),e._v(" Licence")]),e._v(" "),s("p",[e._v("All PX4/Dronecode documentation is free to use and modify under terms of the permissive "),s("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY 4.0"),s("OutboundLink")],1),e._v(" licence.")])])}),[],!1,null,null,null);t.default=o.exports},656:function(e,t,a){e.exports=a.p+"assets/img/vuepress_edit_page_on_github_link.222dacdc.png"}}]);