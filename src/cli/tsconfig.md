---
# 这是文章的标题
title: tsconfig.json配置详解
# 设置作者
author: MoTou
# 设置写作时间
date: 2024-01-22
# 一个页面可以有多个分类
category:
  - 使用指南
---
### 顶层配置项：
```json
{
  "extends": "",						// 继承配置
  "compileOnSave": true,		// 可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。要想支持这个特性需要Visual Studio 2015， TypeScript1.8.4以上并且安装atom-typescript插件。
  "compilerOptions": {},		// 编译选项，详见：[compilerOptions编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)
  "files": [],							// 指定一个包含相对或绝对文件路径的列表
  "include": [],						// 指定一个文件glob匹配模式列表
  "exclude": [],						// 指定一个文件glob匹配模式列表
  "references": []					// 一个对象的数组，指明要引用的工程。每个引用的path属性都可以指向到包含tsconfig.json文件的目录，或者直接指向到配置文件本身
}

```

### compilerOptions 编译选项:
```json
{
  "compilerOptions": { 
    /* 基本选项 */
    // 生成代码的 ECMAScript 目标版本
    "target": "es5",
    // 生成代码的模块标准
    "module": "commonjs",
    // 编译过程中需要引入的库文件的列表
    "lib": ["es6", "dom"],
    // 是否编译 JS 文件
    "allowJs": true,
    // 是否在 JS 文件中报告错误
    "checkJs": true,
    // 在 .tsx 文件里支持 JSX: 'preserve', 'react-native', or 'react'
    "jsx": "preserve",
    // 是否生成 .d.ts 类型定义文件
    "declaration": true,
    // 只生成类型声明文件，不生成js
    "emitDeclarationOnly": true,
    // 为每个 .d.ts 文件生成 sourcemap
    "declarationMap": true,
    // 是否生成 .map 文件
    "sourceMap": true,
    // 将输出文件合并为一个文件
    "outFile": "./dist/main.js", 
	  // 输出文件夹
    "outDir": "./dist",
	  // 输入文件 folder 路径
    "rootDir": "./",
	  // 是否编译构建引用项目
    "composite": true,
	  // 删除注释
    "removeComments": true,
	  // 不输出文件
    "noEmit": true,
	  // 通过 tslib 引入辅助工具函数
    "importHelpers": true,
	  // 降级遍历器实现的支持
    "downlevelIteration": true,
	  // 是否使用 Object.defineProperty 定义类实例属性
    "useDefineForClassFields": true,

    /* 严格的类型检查 */
	  // 启用所有严格类型检查
    "strict": true,
	  // 不允许隐式的 any 类型
    "noImplicitAny": true,
	  // 不允许把 null、undefined 赋值给其他类型变量
    "strictNullChecks": true,
	  // 严格检查函数的类型
    "strictFunctionTypes": true,
	  // 严格检查 bind、call 和 apply 的参数规则
    "strictBindCallApply": true,
	  // 类的实例属性必须初始化
    "strictPropertyInitialization": true,
	  // 不允许 this 有隐式的 any类型
    "noImplicitThis": true,

    /* 额外检查 */
	  // 检查未使用的局部变量
    "noUnusedLocals": true,
	  // 检查未使用的参数
    "noUnusedParameters": true,
	  // 每个分支都会有返回值
    "noImplicitReturns": true,
	  // 检查 switch 语句包含正确的 break
    "noFallthroughCasesInSwitch": true,

    /* 模块解析 */
	  // 控制是否将每个文件作为单独的模块处理。
    "isolatedModules": true,
	  // 模块解析策略
    "moduleResolution": "node",
	  // 允许从没有默认导出的模块中导入类型定义(.d.ts)文件
    "allowImportingTsExtensions": true,
	  // 解析非相对模块的基地址
    "baseUrl": "./",
	  // 模块名称到基于 baseUrl 的路径映射表
    "paths": {},
	  // 将多个文件夹放在一个虚拟目录下
    "rootDirs": [],
	  // 声明文件目录列表
    "typeRoots": [],
	  // 需要包含的类型声明文件名列表
    "types": [],
	  // 允许从没有默认导出的模块默认导入
    "allowSyntheticDefaultImports": true,
	  // 通过创建命名空间实现 CommonJS 兼容性
    "esModuleInterop": true,
	  // 自动解析JSON文件
    "resolveJsonModule": true,

    /* Source Map */
	  // TypeScript 源代码所在的目录
    "sourceRoot": "",
	  // 指定 map 文件的路径
    "mapRoot": "",
	  // 生成单个 sourcemaps 文件,而不是将 sourcemaps 生成不同的文件
    "inlineSourceMap": true,
	  // 将代码与 sourcemaps 生成到一个文件中
    "inlineSources": true,

    /* 实验性 */
	  // 启用实验性的装饰器特性
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true // 为装饰器提供元数据支持
  },

	// files可以配置一个数组列表,里面包含指定文件的相对或绝对路径,编译器在编译的时候只会编译包含在files中列出的文件,如果不指定,则取决于有没有设置include选项,如果没有include选项,则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件,而不是某个文件夹,而且不能使用* ? **/ 等通配符 
  "files": [],
	// include也可以指定要编译的路径列表,但是和files的区别在于,这里的路径可以是文件夹,也可以是文件,可以使用相对和绝对路径,而且可以使用通配符,比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件 
  "include": [],
	// exclude表示要排除的、不编译的文件,它也可以指定一个列表,规则和include一样,可以是文件或文件夹,可以是相对路径或绝对路径,可以使用通配符 
  "exclude": [],
	// extends可以通过指定一个其他的tsconfig.json文件路径,来继承这个配置文件里的配置,继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始,支持继承一个来自Node.js包的tsconfig.json配置文件 
  "extends": "",
	// compileOnSave的值是true或false,如果设为true,在我们编辑了项目中的文件保存的时候,编辑器会根据tsconfig.json中的配置重新生成文件,不过这个要编辑器支持 
  "compileOnSave": true,
	// 一个对象数组,指定要引用的项目
  "references": [],
}
```
