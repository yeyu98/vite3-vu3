## 基础建设
    * CSS预处理器 Less
        * npm i less之后就可以直接使用了；
        * 通用样式存放至styles中；
    * 路由 Vue Router
        * npm i vue-router；
        * 路由存放至router中；
    * 全局状态管理 Pinia
        * npm i Pinia；
        * 全局状态管理存放至store中；
    * http请求 Axios
        * npm i axios；
        * axios存放至api中；
## 代码规范
    * EditorConfig
        * 在项目根目录新建.editorconfig文件添加以下内容；
            # 表示是最顶层的 EditorConfig 配置文件
            root = true
            # 表示所有文件适用
            [*]
            # 缩进风格（tab | space）
            indent_style = space
            # 控制换行类型(lf | cr | crlf)
            # crlf: "\r\n" windows环境下使用
            # lf: "\n" linux | unix环境下使用
            # cr："\r" mac环境下使用
            end_of_line = lf
            # 设置文件字符集为 utf-8
            charset = utf-8
            # 去除行首的任意空白字符
            trim_trailing_whitespace = true
            # 始终在文件末尾插入一个新行
            insert_final_newline = true

            # 表示仅 md 文件适用以下规则
            [*.md]
            max_line_length = off
            trim_trailing_whitespace = false

            # 表示仅 ts、js、vue、css 文件适用以下规则
            [*.{ts,js,vue,css}]
            indent_size = 2
        * vscode安装EditorConfig for VS Code插件，进入项目文件之后插件会自动读取.editorconfig中的配置；
    * 代码格式规范检测 ESLint
    * 代码格式化 Preitter
    * git hooks工具 Husky + lint-staged
## 提交规范
    * CommitLint
