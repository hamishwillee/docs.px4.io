(window.webpackJsonp=window.webpackJsonp||[]).push([[1532],{2806:function(e,t,s){"use strict";s.r(t);var a=s(19),_=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ulog-文件格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ulog-文件格式"}},[e._v("#")]),e._v(" ULog 文件格式")]),e._v(" "),s("p",[e._v("ULog is the file format used for logging system data. The format is self-describing, i.e. it contains the format and message types that are logged.")]),e._v(" "),s("p",[e._v("It can be used for logging device inputs (sensors, etc.), internal states (cpu load, attitude, etc.) and printf log messages.")]),e._v(" "),s("p",[e._v("It can be used for logging device inputs (sensors, etc.), internal states (cpu load, attitude, etc.) and "),s("code",[e._v("printf")]),e._v(" log messages.")]),e._v(" "),s("p",[e._v("这种格式对所有的二进制类型采用小端模式。")]),e._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[e._v("#")]),e._v(" 数据类型")]),e._v(" "),s("p",[e._v("使用以下二进制类型。 The following binary types are used. They all correspond to the types in C:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("类型")]),e._v(" "),s("th",[e._v("大小（以字节为单位）")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("int8_t, uint8_t")]),e._v(" "),s("td",[e._v("1")])]),e._v(" "),s("tr",[s("td",[e._v("int16_t, uint16_t")]),e._v(" "),s("td",[e._v("2")])]),e._v(" "),s("tr",[s("td",[e._v("int32_t, uint32_t")]),e._v(" "),s("td",[e._v("4")])]),e._v(" "),s("tr",[s("td",[e._v("int64_t, uint64_t")]),e._v(" "),s("td",[e._v("8")])]),e._v(" "),s("tr",[s("td",[e._v("float")]),e._v(" "),s("td",[e._v("4")])]),e._v(" "),s("tr",[s("td",[e._v("double")]),e._v(" "),s("td",[e._v("8")])]),e._v(" "),s("tr",[s("td",[e._v("bool, char")]),e._v(" "),s("td",[e._v("1")])])])]),e._v(" "),s("p",[e._v("此外，所有的类型还可以作为数组使用，比如 "),s("code",[e._v("float[5]")]),e._v("。 Additionally all can be used as an array, eg. "),s("code",[e._v("float[5]")]),e._v(". In general all strings ("),s("code",[e._v("char[length]")]),e._v(") do not contain a "),s("code",[e._v("'\\0'")]),e._v(" at the end. String comparisons are case sensitive. 字符串比较区分大小写。")]),e._v(" "),s("h2",{attrs:{id:"文件结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[e._v("#")]),e._v(" 文件结构")]),e._v(" "),s("p",[e._v("该文件由三个部分组成：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("----------------------\n|         头         |\n----------------------\n|        定义        |\n----------------------\n|        数据        |\n----------------------\n")])])]),s("h3",{attrs:{id:"头部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#头部分"}},[e._v("#")]),e._v(" 头部分")]),e._v(" "),s("p",[e._v("头是一个固定大小的部分，具有以下格式（16个字节）：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("----------------------------------------------------------------------\n| 0x55 0x4c 0x6f 0x67 0x01 0x12 0x35 | 0x01         | uint64_t       |\n| File magic(7B)                     | Version (1B) |  Timestamp (8B) |\n----------------------------------------------------------------------\n")])])]),s("p",[e._v("Version 是文件的格式的版本，目前是 1。 Version is the file format version, currently 1. Timestamp is a "),s("code",[e._v("uint64_t")]),e._v(" integer, denotes the start of the logging in microseconds.")]),e._v(" "),s("h3",{attrs:{id:"定义部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义部分"}},[e._v("#")]),e._v(" 定义部分")]),e._v(" "),s("p",[e._v("可变长度部分，包含版本信息、格式定义和 (初始) 参数值。")]),e._v(" "),s("p",[e._v("The Definitions and Data sections consist of a stream of messages. Each starts with this header: 每个数据流包含此标头：")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint16_t")]),e._v(" msg_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" msg_type\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("msg_size")]),e._v(" is the size of the message in bytes without the header ("),s("code",[e._v("hdr_size")]),e._v("= 3 bytes). "),s("code",[e._v("msg_type")]),e._v(" defines the content and is one of the following: "),s("code",[e._v("msg_type")]),e._v(" 定义内容类型，是以下的一种：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'B' ：标记 bitset 报文。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct ulog_message_flag_bits_s {\n    uint8_t compat_flags[8];\n    uint8_t incompat_flags[8];\n    uint64_t appended_offsets[3]; ///&#060; file offset(s) for appended data if appending bit is set\n};\n")])])]),s("p",[e._v("这条消息"),s("strong",[e._v("必须")]),e._v("是头后面的第一条消息，这样才有固定的常数偏移量。")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("compat_flags")]),e._v(": compatible flag bits.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("compat_flags[0]")]),e._v(", bit 0, "),s("em",[e._v("DEFAULT_PARAMETERS")]),e._v(": if set, the log contains parameter defaults (message 'Q').")])]),e._v(" "),s("p",[e._v("The rest of the bits is currently not defined and all must be set to 0. These bits can be used for future ULog changes that are compatible with existing parsers. It means parsers can just ignore the bits if one of the unknown bits is set.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("incompat_flags")]),e._v(": 不兼容的标志位。 "),s("code",[e._v("incompat_flags")]),e._v(": incompatible flag bits. The LSB bit of index 0 is set to one if the log contains appended data and at lease one of the "),s("code",[e._v("appended_offsets")]),e._v(" is non-zero. All other bits are undefined und must be set to 0. If a parser finds one of these bits set, it must refuse to parse the log. This can be used to introduce breaking changes that existing parsers cannot handle. 其他位都是未定义的，必须将设置为 0。 如果解析器发现这些位置 1，它必须拒绝解析日志。 这可用于引入现有解析器无法处理的重大更改。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("appended_offsets")]),e._v(": File offsets (0-based) for appended data. If no data is appended, all offsets must be zero. This can be used to reliably append data for logs that may stop in the middle of a message. A process appending data should do: 如果没有附加数据，则所有偏移量必须为零。 这可以用于消息中途暂停的情况下可靠的添加数据。")]),e._v(" "),s("p",[e._v("附加数据的过程应该做到：")]),e._v(" "),s("ul",[s("li",[e._v("置位相关的 "),s("code",[e._v("incompat_flags")]),e._v(" 位，")]),e._v(" "),s("li",[e._v("设置 "),s("code",[e._v("append_offsets")]),e._v(" 的第一个元素为日志文件相对于 0 的长度，")]),e._v(" "),s("li",[e._v("然后为数据部分添加有效的任何类型的消息。")])])])]),e._v(" "),s("p",[e._v("It is possible that there are more fields appended at the end of this message in future ULog specifications. This means a parser must not assume a fixed length of this message. If the message is longer than expected (currently 40 bytes), the exceeding bytes must just be ignored. 这意味着解析器必须不能假定此消息的长度是固定的。 如果消息比预期的长（当前为 40 字节），则必须忽略超过的字节。")])]),e._v(" "),s("li",[s("p",[e._v("'F': 可以在另一个定义中作为嵌套类型记录或使用的单个 (组合) 类型的格式定义。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_format_s {\nstruct message_header_s header;\nchar format[header.msg_size-hdr_size];\n")])])])])]),e._v(" "),s("p",[e._v("};")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("`format`: plain-text string with the following format: `message_name:field0;field1;` There can be an arbitrary amount of fields (at least 1), separated by `;`. A field has the format: `type field_name` or `type[array_length] field_name` for arrays (only fixed size arrays are supported). `type` is one of the basic binary types or a `message_name` of another format definition (nested usage). A type can be used before it's defined. There can be arbitrary nesting but no circular dependencies. 字段的格式为：`type field_name` 或者 `type[array_length] field_name` 数组（只支持固定大小的数组）。 `type` 是一种基本的二进制类型或者是 `message_name` 的其他类型定义（嵌套使用）。 一个类型可以在定义之前使用。 可以任意嵌套，但没有循环依赖。\n\n有些字段名是特殊的：\n- `timestamp`：每个消息报文 (`message_add_logged_s`) 必须包含时间戳字段 (不必是第一个字段)。 它的类型可以是：`uint64_t` (目前唯一使用的)，`uint32_t`, `uint16_t` 或者是 `uint8_t` 。 它的单位一直是微秒，除了 `uint8_t`，它的单位是毫秒。 日志写入器必须确保足够频繁的写入报文使其能够检测到绕回，并且日志的读取器必须能够处理绕回 (还要把丢帧考虑在内)。 对于具有相同 `msg_id` 报文的时间戳必须是单调递增的。\n- Padding: field names that start with `_padding` should not be displayed and their data must be ignored by a reader. These fields can be inserted by a writer to ensure correct alignment. 写入器可以通过插入这个字段确保正确对齐。\n\n  If the padding field is the last field, then this field will not be logged, to avoid writing unnecessary data. This means the `message_data_s.data` will be shorter by the size of the padding. However the padding is still needed when the message is used in a nested definition. 这意味着 `message_data_s.data` 会因为填充大小而更短。 但是当报文在嵌套定义中使用时任然需要填充。\n\n- 'I'：信息报文。\n```c\nstruct message_info_s {\nstruct message_header_s header;\nuint8_t key_len;\nchar key[key_len];\nchar value[header.msg_size-hdr_size-1-key_len]\n};\n")])])]),s("p",[s("code",[e._v("key")]),e._v(" is a plain string, as in the format message (can also be a custom type), but consists of only a single field without ending "),s("code",[e._v(";")]),e._v(", eg. "),s("code",[e._v("float[3] myvalues")]),e._v(". "),s("code",[e._v("value")]),e._v(" contains the data as described by "),s("code",[e._v("key")]),e._v(". "),s("code",[e._v("float[3] myvalues")]),e._v(". "),s("code",[e._v("value")]),e._v(" 包含 "),s("code",[e._v("key")]),e._v(" 所描述的字段")]),e._v(" "),s("p",[e._v("Note that an information message with a certain key must occur at most once in the entire log. Parsers can store information messages as a dictionary. 解析器可以将报文信息存储为字典。")]),e._v(" "),s("p",[e._v("预定义的信息报文有：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("键")]),e._v(" "),s("th",[e._v("描述")]),e._v(" "),s("th",[e._v("示例值")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("char[value_len] sys_name")]),e._v(" "),s("td",[e._v("系统名称")]),e._v(" "),s("td",[e._v('"PX4"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_hw")]),e._v(" "),s("td",[e._v("硬件版本 (主板)")]),e._v(" "),s("td",[e._v('"PX4FMU_V4"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_hw_subtype")]),e._v(" "),s("td",[e._v("主办子版本 (变化的)")]),e._v(" "),s("td",[e._v('"V2"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_sw")]),e._v(" "),s("td",[e._v("软件版本 (git 标签)")]),e._v(" "),s("td",[e._v('"7f65e01"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] ver_sw_branch")]),e._v(" "),s("td",[e._v("git branch")]),e._v(" "),s("td",[e._v('"master"')])]),e._v(" "),s("tr",[s("td",[e._v("uint32_t ver_sw_release")]),e._v(" "),s("td",[e._v("软件版本 (见下文)")]),e._v(" "),s("td",[e._v("0x010401ff")])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_os_name")]),e._v(" "),s("td",[e._v("操作系统名称")]),e._v(" "),s("td",[e._v('"Linux"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_os_ver")]),e._v(" "),s("td",[e._v("操作系统版本 (git 标签)")]),e._v(" "),s("td",[e._v('"9f82919"')])]),e._v(" "),s("tr",[s("td",[e._v("uint32_t ver_os_release")]),e._v(" "),s("td",[e._v("操作系统版本 (见下文)")]),e._v(" "),s("td",[e._v("0x010401ff")])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_toolchain")]),e._v(" "),s("td",[e._v("工具链名称")]),e._v(" "),s("td",[e._v('"GNU GCC"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_toolchain_ver")]),e._v(" "),s("td",[e._v("工具链版本")]),e._v(" "),s("td",[e._v('"6.2.1"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_mcu")]),e._v(" "),s("td",[e._v("芯片名称和修订")]),e._v(" "),s("td",[e._v('"STM32F42x, rev A"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] sys_uuid")]),e._v(" "),s("td",[e._v("Unique identifier for vehicle (eg. MCU ID)")]),e._v(" "),s("td",[e._v('"392a93e32fa3"...')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] log_type")]),e._v(" "),s("td",[e._v("Type of the log (full log if not specified)")]),e._v(" "),s("td",[e._v('"mission"')])]),e._v(" "),s("tr",[s("td",[e._v("char[value_len] replay")]),e._v(" "),s("td",[e._v("重播日志的文件名如果处于重播模式")]),e._v(" "),s("td",[e._v('"log001.ulg"')])]),e._v(" "),s("tr",[s("td",[e._v("int32_t time_ref_utc")]),e._v(" "),s("td",[e._v("UTC 时间的秒偏移量")]),e._v(" "),s("td",[e._v("-3600")])])])]),e._v(" "),s("p",[e._v("The format of "),s("code",[e._v("ver_sw_release")]),e._v(" and "),s("code",[e._v("ver_os_release")]),e._v(" is: 0xAABBCCTT, where AA is major, BB is minor, CC is patch and TT is the type. Type is defined as following: "),s("code",[e._v(">= 0")]),e._v(": development, "),s("code",[e._v(">= 64")]),e._v(": alpha version, "),s("code",[e._v(">= 128")]),e._v(": beta version, "),s("code",[e._v(">= 192")]),e._v(": RC version, "),s("code",[e._v("== 255")]),e._v(": release version. So for example 0x010402ff translates into the release version v1.4.2. Type is defined as following: "),s("code",[e._v(">= 0")]),e._v(": development, "),s("code",[e._v(">= 64")]),e._v(": alpha version, "),s("code",[e._v(">= 128")]),e._v(": beta version, "),s("code",[e._v(">= 192")]),e._v(": RC version, "),s("code",[e._v("== 255")]),e._v(": release version. 所以例如 0x010402ff 转换过来是 v1.4.2 的 release 版本。")]),e._v(" "),s("p",[e._v("This message can also be used in the Data section (this is however the preferred section).")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'M'：多报文信息。")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ulog_message_info_multiple_header_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" is_continued"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("///&#060; can be used for arrays")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("msg_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hdr_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("The same as the information message, except that there can be multiple messages with the same key (parsers store them as a list). The "),s("code",[e._v("is_continued")]),e._v(" can be used for split-up messages: if set to 1, it is part of the previous message with the same key. Parsers can store all information multi messages as a 2D list, using the same order as the messages occur in the log. "),s("code",[e._v("is_continued")]),e._v(" 可以用于分割报文：如果置 1，则它是具有相同键的前一条报文的一部分。 解析器可以将所有多报文信息存储为一个 2D 列表，使用与日志中报文相同的顺序。")])]),e._v(" "),s("li",[s("p",[e._v("'P'：报文参数。 格式与 "),s("code",[e._v("message_info_s")]),e._v(" 相同。 'P': parameter message. Same format as "),s("code",[e._v("message_info_s")]),e._v(". If a parameter dynamically changes during runtime, this message can also be used in the Data section. The data type is restricted to: "),s("code",[e._v("int32_t")]),e._v(", "),s("code",[e._v("float")]),e._v(". 数据类型限制为："),s("code",[e._v("int32_t")]),e._v("，"),s("code",[e._v("float")]),e._v(" 。")])]),e._v(" "),s("li",[s("p",[e._v("'Q': parameter default message.")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ulog_message_parameter_default_header_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" default_types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("msg_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("key_len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("default_types")]),e._v(" is a bitfield and defines to which group(s) the value belongs to. At least one bit must be set:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("1<<0")]),e._v(": system wide default")]),e._v(" "),s("li",[s("code",[e._v("1<<1")]),e._v(": default for the current configuration (e.g. an airframe)")])]),e._v(" "),s("p",[e._v("A log may not contain default values for all parameters. In those cases the default is equal to the parameter value, and different default types are treated independently. This message can also be used in the Data section. The data type is restricted to: "),s("code",[e._v("int32_t")]),e._v(", "),s("code",[e._v("float")]),e._v(".")])])]),e._v(" "),s("p",[e._v("这部分在第一个 "),s("code",[e._v("message_add_logged_s")]),e._v(" 或者 "),s("code",[e._v("message_logging_s")]),e._v(" 开始之前结束 (以先出现的消息为准) 。")]),e._v(" "),s("h3",{attrs:{id:"数据部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据部分"}},[e._v("#")]),e._v(" 数据部分")]),e._v(" "),s("p",[e._v("以下消息属于本部分：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'A': subscribe a message by name and give it an id that is used in "),s("code",[e._v("message_data_s")]),e._v(". This must come before the first corresponding "),s("code",[e._v("message_data_s")]),e._v(". 这必须在第一个对应的 "),s("code",[e._v("message_data_s")]),e._v(" 之前。")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_add_logged_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint8_t")]),e._v(" multi_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint16_t")]),e._v(" msg_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),e._v(" message_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("msg_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hdr_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[s("code",[e._v("multi_id")]),e._v(": the same message format can have multiple instances, for example if the system has two sensors of the same type. The default and first instance must be 0. "),s("code",[e._v("msg_id")]),e._v(": unique id to match "),s("code",[e._v("message_data_s")]),e._v(" data. The first use must set this to 0, then increase it. The same "),s("code",[e._v("msg_id")]),e._v(" must not be used twice for different subscriptions, not even after unsubscribing. "),s("code",[e._v("message_name")]),e._v(": message name to subscribe to. Must match one of the "),s("code",[e._v("message_format_s")]),e._v(" definitions. 默认值以及第一个实例一定是0. "),s("code",[e._v("msg_id")]),e._v("：匹配 "),s("code",[e._v("message_data_s")]),e._v(" 数据的惟一 id。 第一次使用一定要设置为 0，然后递增。 相同的 "),s("code",[e._v("msg_id")]),e._v(" 不能用于两次不同的订阅，甚至在取消订阅后也不行。 "),s("code",[e._v("msg_name")]),e._v("：订阅的消息名称。 必须匹配其中一个 "),s("code",[e._v("message_format_s")]),e._v(" 的定义。")])]),e._v(" "),s("li",[s("p",[e._v("'R'：取消订阅一条消息，以标记它将不再被记录 (当前未使用)。")]),e._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_remove_logged_s")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("message_header_s")]),e._v(" header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("uint16_t")]),e._v(" msg_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("'D'：包含日志数据。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_data_s {\n    struct message_header_s header;\n    uint16_t msg_id;\n    uint8_t data[header.msg_size-hdr_size];\n};\n")])])]),s("p",[s("code",[e._v("msg_id")]),e._v("：由 "),s("code",[e._v("message_add_logged_s")]),e._v(" 报文定义。 "),s("code",[e._v("msg_id")]),e._v(": as defined by a "),s("code",[e._v("message_add_logged_s")]),e._v(" message. "),s("code",[e._v("data")]),e._v(" contains the logged binary message as defined by "),s("code",[e._v("message_format_s")]),e._v(". See above for special treatment of padding fields. 有关填充字段的特殊处理，请参见上文。")])]),e._v(" "),s("li",[s("p",[e._v("'L'：字符串日志报文，比如打印输出。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_logging_s {\n    struct message_header_s header;\n    uint8_t log_level;\n    uint64_t timestamp;\n    char message[header.msg_size-hdr_size-9]\n};\n")])])]),s("p",[s("code",[e._v("timestamp")]),e._v(": 以微秒为单位，"),s("code",[e._v("log_level")]),e._v(": 和 Linux 内核一样。")])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("名称")]),e._v(" "),s("th",[e._v("对应值")]),e._v(" "),s("th",[e._v("含义")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("EMERG")]),e._v(" "),s("td",[e._v("'0'")]),e._v(" "),s("td",[e._v("系统无法使用")])]),e._v(" "),s("tr",[s("td",[e._v("ALERT")]),e._v(" "),s("td",[e._v("'1'")]),e._v(" "),s("td",[e._v("操作必须立即执行")])]),e._v(" "),s("tr",[s("td",[e._v("CRIT")]),e._v(" "),s("td",[e._v("'2'")]),e._v(" "),s("td",[e._v("紧急情况")])]),e._v(" "),s("tr",[s("td",[e._v("ERR")]),e._v(" "),s("td",[e._v("'3'")]),e._v(" "),s("td",[e._v("错误情况")])]),e._v(" "),s("tr",[s("td",[e._v("WARNING")]),e._v(" "),s("td",[e._v("'4'")]),e._v(" "),s("td",[e._v("警告情况")])]),e._v(" "),s("tr",[s("td",[e._v("NOTICE")]),e._v(" "),s("td",[e._v("'5'")]),e._v(" "),s("td",[e._v("正常但重要的情况")])]),e._v(" "),s("tr",[s("td",[e._v("INFO")]),e._v(" "),s("td",[e._v("'6'")]),e._v(" "),s("td",[e._v("信息")])]),e._v(" "),s("tr",[s("td",[e._v("DEBUG")]),e._v(" "),s("td",[e._v("'7'")]),e._v(" "),s("td",[e._v("调试级别的消息")])])])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'C': Tagged Logged string message")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_dropout_s {\n    struct message_header_s header;\n    uint16_t duration;\n};\n")])])]),s("p",[s("code",[e._v("tag")]),e._v(": id representing source of logged message string. It could represent a process, thread or a class depending upon the system architecture. For example, a reference implementation for an onboard computer running multiple processes to control different payloads, external disks, serial devices etc can encode these process identifiers using a "),s("code",[e._v("uint16_t enum")]),e._v(" into the tag attribute of "),s("code",[e._v("message_logging_tagged_s")]),e._v(" struct as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("enum class ulog_tag : uint16_t {\n  unassigned,\n  mavlink_handler,\n  ppk_handler,\n  camera_handler,\n  ptp_handler,\n  serial_handler,\n  watchdog,\n  io_service,\n  cbuf,\n  ulg\n};\n")])])]),s("p",[s("code",[e._v("timestamp")]),e._v(": every logged message ("),s("code",[e._v("message_add_logged_s")]),e._v(") must include a timestamp field (does not need to be the first field). Its type can be: "),s("code",[e._v("uint64_t")]),e._v(" (currently the only one used), "),s("code",[e._v("uint32_t")]),e._v(", "),s("code",[e._v("uint16_t")]),e._v(" or "),s("code",[e._v("uint8_t")]),e._v(". The unit is always microseconds, except for "),s("code",[e._v("uint8_t")]),e._v(" it's milliseconds. A log writer must make sure to log messages often enough to be able to detect wrap-arounds and a log reader must handle wrap-arounds (and take into account dropouts). The timestamp must always be monotonic increasing for a message serie with the same "),s("code",[e._v("msg_id")]),e._v(".")])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("参数名")]),e._v(" "),s("th",[e._v("对应值")]),e._v(" "),s("th",[e._v("含义")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("EMERG")]),e._v(" "),s("td",[e._v("'0'")]),e._v(" "),s("td",[e._v("系统无法使用")])]),e._v(" "),s("tr",[s("td",[e._v("ALERT")]),e._v(" "),s("td",[e._v("'1'")]),e._v(" "),s("td",[e._v("操作必须立即执行")])]),e._v(" "),s("tr",[s("td",[e._v("CRIT")]),e._v(" "),s("td",[e._v("'2'")]),e._v(" "),s("td",[e._v("紧急情况")])]),e._v(" "),s("tr",[s("td",[e._v("ERR")]),e._v(" "),s("td",[e._v("'3'")]),e._v(" "),s("td",[e._v("错误情况")])]),e._v(" "),s("tr",[s("td",[e._v("WARNING")]),e._v(" "),s("td",[e._v("'4'")]),e._v(" "),s("td",[e._v("警告情况")])]),e._v(" "),s("tr",[s("td",[e._v("NOTICE")]),e._v(" "),s("td",[e._v("'5'")]),e._v(" "),s("td",[e._v("正常但重要的情况")])]),e._v(" "),s("tr",[s("td",[e._v("INFO")]),e._v(" "),s("td",[e._v("'6'")]),e._v(" "),s("td",[e._v("信息")])]),e._v(" "),s("tr",[s("td",[e._v("DEBUG")]),e._v(" "),s("td",[e._v("'7'")]),e._v(" "),s("td",[e._v("调试级别的消息")])])])]),e._v(" "),s("ul",[s("li",[s("p",[e._v("'S': synchronization message so that a reader can recover from a corrupt message by searching for the next sync message (not used currently).")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_sync_s {\n    struct message_header_s header;\n    uint8_t sync_magic[8];\n};\n")])])]),s("p",[s("code",[e._v("sync_magic")]),e._v(": to be defined.")])]),e._v(" "),s("li",[s("p",[e._v("'O': mark a dropout (lost logging messages) of a given duration in ms. Dropouts can occur e.g. if the device is not fast enough. 例如当设备不够快的情况下会出现丢包。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("struct message_dropout_s {\n  struct message_header_s header;\n  uint16_t duration;\n};\n")])])])]),e._v(" "),s("li",[s("p",[e._v("'I': information message. See above. 见上文。")])]),e._v(" "),s("li",[s("p",[e._v("'M': information message multi. See above. 见上文。")])]),e._v(" "),s("li",[s("p",[e._v("'P': parameter message. See above. 见上文。")])]),e._v(" "),s("li",[s("p",[e._v("'Q': parameter message. See above.")])])]),e._v(" "),s("h2",{attrs:{id:"解析器的要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析器的要求"}},[e._v("#")]),e._v(" 解析器的要求")]),e._v(" "),s("p",[e._v("一个有效的 ULog 解析器必须满足以下要求:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("必须忽略未知消息 (但可以打印警告) 。")])]),e._v(" "),s("li",[s("p",[e._v("解析未来/未知的文件格式版本 (但可以打印警告) 。")])]),e._v(" "),s("li",[s("p",[e._v("必须拒绝解析包含未知不兼容位集 ("),s("code",[e._v("ulog_message_flag_bits_s")]),e._v(" 报文中的 "),s("code",[e._v("incompat_flags")]),e._v(") 的日志，这意味着日志包含解析器无法处理的突发改变。")])]),e._v(" "),s("li",[s("p",[e._v("A parser must be able to correctly handle logs that end abruptly, in the middle of a message. The unfinished message should just be discarged. 未完成的报文应该丢弃。")])]),e._v(" "),s("li",[s("p",[e._v("对于附加数据:解析器可以假设数据部分存在，即在定义部分之后的位置有一个偏移点。")]),e._v(" "),s("p",[e._v("必须将附加数据视为常规数据部分的一部分。")])])]),e._v(" "),s("h2",{attrs:{id:"已知的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已知的实现"}},[e._v("#")]),e._v(" 已知的实现")]),e._v(" "),s("ul",[s("li",[e._v("PX4 Firmware: C++\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/logger",target:"_blank",rel:"noopener noreferrer"}},[e._v("日志模块"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/replay",target:"_blank",rel:"noopener noreferrer"}},[e._v("回放模块"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/hardfault_log",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardfault_log module"),s("OutboundLink")],1),e._v(": append hardfault crash data.")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyulog"),s("OutboundLink")],1),e._v("：Python，使用 CLI 脚本的 Ulog 解析库。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/PX4/FlightPlot",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlightPlot"),s("OutboundLink")],1),e._v(": Java，日志绘图仪。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Marxlp/pyFlightAnalysis",target:"_blank",rel:"noopener noreferrer"}},[e._v("pyFlightAnalysis"),s("OutboundLink")],1),e._v("：Python，日志绘图仪和基于 pyulog 的三维可视化工具。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mavlink/mavlink",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink"),s("OutboundLink")],1),e._v("：通过 MAVLink 进行 ULog 流的消息 (注意，不支持追加数据，至少不支持截断消息)。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),s("OutboundLink")],1),e._v("：C++，通过 MAVLink 的 Ulog 流和最小的 GeoTagging。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/01org/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("mavlink-router"),s("OutboundLink")],1),e._v("：C++，通过 MAVLink 的 ULog 流。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVGAnalysis"),s("OutboundLink")],1),e._v("：Java，通过 MAVLink 的数据流和日志的绘制、分析。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/facontidavide/PlotJuggler",target:"_blank",rel:"noopener noreferrer"}},[e._v("PlotJuggler"),s("OutboundLink")],1),e._v(": 绘制日志和时间序列的 C++/Qt 应用。 自版本2.1.3支持 ULog。")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/maxsun/ulogreader",target:"_blank",rel:"noopener noreferrer"}},[e._v("ulogreader"),s("OutboundLink")],1),e._v(": Javascript, ULog reader and parser outputs log in JSON object format.")])]),e._v(" "),s("h2",{attrs:{id:"文件格式版本历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件格式版本历史"}},[e._v("#")]),e._v(" 文件格式版本历史")]),e._v(" "),s("h3",{attrs:{id:"版本-2-中的改变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本-2-中的改变"}},[e._v("#")]),e._v(" 版本 2 中的改变")]),e._v(" "),s("p",[e._v("Addition of "),s("code",[e._v("ulog_message_info_multiple_header_s")]),e._v(" and "),s("code",[e._v("ulog_message_flag_bits_s")]),e._v(" messages and the ability to append data to a log. This is used to add crash data to an existing log. If data is appended to a log that is cut in the middle of a message, it cannot be parsed with version 1 parsers. Other than that forward and backward compatibility is given if parsers ignore unknown messages. 这被用来给现有的日志添加损坏的数据。 如果从中间切开的报文数据被附加到日志中，这不能被版本 1 解析器解析。 除此之外，如果解析器忽略未知消息，则提供向前和向后的兼容性。")])])}),[],!1,null,null,null);t.default=_.exports}}]);