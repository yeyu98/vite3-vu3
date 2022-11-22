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
    * 代码格式规范检测以及部分问题修复 ESLint
        * npm i ESLint -D；
        * 在项目根目录下执行npx eslint --init
            * How would you like to use ESLint? 你希望如何使用eslint？
                * To check syntax, find problems, and enforce code style 检测语法发现问题并强制代码格式；
            * What type of modules does your project use? 你的项目使用什么类型的模块？
                * JavaScript modules (import/export) ES6；
            * Which framework does your project use?项目使用什么框架？
                * vue
            * Does your project use TypeScript? 项目使用ts吗？
                * no
            *  Where does your code run? 项目运行在哪里？
                * Browser 浏览器
            * How would you like to define a style for your project?你想要怎么定义你的编码风格？
                * Use a popular style guide 使用受欢迎的风格
                * Airbnb: https://github.com/airbnb/javascript 122K start；
                * Standard: https://github.com/standard/standard；
                * Google: https://github.com/google/eslint-config-google；
                * XO: https://github.com/xojs/eslint-config-xo；
            *  What format do you want your config file to be in?格式化什么类型文件
                * Javascript；
        * 需要vscode安装ESLint插件；
            * 配置保存时修复ESLint检测的问题；
            * 在settings中添加配置以下规则：
                "editor.codeActionsOnSave": { // 设置保存时自动修复
                    "source.fixAll": true
                }
    * 代码格式化 Preitter
        * npm i Preitter -D;
        * 在项目根目录下创建.prettierrc文件，并引入以下内容（更多配置参考 Prettier-Options ）：
            {
                "useTabs": false, 使用 Tab 代替空格作为缩进
                "tabWidth": 2, 指定缩进级别空格数
                "printWidth": 100, 每行最大字符数量
                "singleQuote": true, 是否使用单引号
                "trailingComma": "all", 数组与对象的最后一个成员是否使用逗号
                "bracketSpacing": true, 花括号内加空格
                "semi": false 结尾是否使用分号
            }
        * 手动使用Preitter格式化文件 npx prettier --write .

    * 解决ESLint和Preitter冲突
        * 在项目中ESLint有些配置和Preitter会冲突比如ESLint设置对象属性最后一个需要加逗号但Prittier却没有配置这个时候
          总不能一个个去手动处理他们的冲突吧，那么这个时候就需要使用工具来解决ESLint和Preitter的冲突；
            * eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。
            * eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。
            * 使得Prettier的优先级高于ESLint；
            * npm i eslint-plugin-prettier eslint-config-prettier -D
            * 在.eslintrc文件中的extends中添加 ['plugin:prettier/recommended'] 配置；

    * git hooks工具 Husky + lint-staged
        * 如果只是添加了ESLint那么我们可以手动关闭ESLint的检测那么这个时候ESLint的作用也就不存在了
          这个时候我们需要在git提交代码的时候触发ESLint检测时强制不让提交；
        * 初始化husky npx husky-init；
        * 修改pre-commit文件 在提交commit之前执行走eslint配置校验src下的 .vue,.js,.ts 文件；

## 提交规范

    * CommitLint
