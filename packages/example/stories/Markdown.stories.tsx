import React from 'react';
import { MarkdownWrap } from '@powerfulyang/components';
import '@powerfulyang/components/dist/es/index.css';

export const MarkdownExample = () => {
  const source =
    '# 欢迎使用 Markdown在线编辑器 MdEditor\n' +
    '\n' +
    '**Markdown是一种轻量级的「标记语言」**\n' +
    '\n' +
    'Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面，Markdown文件的后缀名便是“.md”\n' +
    '\n' +
    '## Markdown的功能列表演示\n' +
    '\n' +
    '# 标题H1\n' +
    '\n' +
    '## 标题H2\n' +
    '\n' +
    '### 标题H3\n' +
    '\n' +
    '#### 标题H4\n' +
    '\n' +
    '### 字符效果和横线等\n' +
    '----\n' +
    '\n' +
    '~~删除线~~\n' +
    '\n' +
    '*斜体字*      _斜体字_\n' +
    '\n' +
    '**粗体**  __粗体__\n' +
    '\n' +
    '***粗斜体*** ___粗斜体___\n' +
    '\n' +
    '> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启\n' +
    '\n' +
    '### 引用 Blockquotes\n' +
    '\n' +
    '> 引用文本 Blockquotes\n' +
    '\n' +
    '### 锚点与链接 Links\n' +
    '[普通链接](https://www.mdeditor.com/)\n' +
    '[普通链接带标题](https://www.mdeditor.com/ "普通链接带标题")\n' +
    '直接链接：<https://www.mdeditor.com>\n' +
    '图片加链接 (Image + Link)：\n' +
    '\n' +
    '[![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png "markdown")\n' +
    '\n' +
    '----\n' +
    '### 列表 Lists\n' +
    '\n' +
    '#### 无序列表（减号）Unordered Lists (-)\n' +
    '\n' +
    '- 列表一\n' +
    '- 列表二\n' +
    '- 列表三\n' +
    '\n' +
    '#### 无序列表（星号）Unordered Lists (*)\n' +
    '\n' +
    '* 列表一\n' +
    '* 列表二\n' +
    '* 列表三\n' +
    '\n' +
    '#### 无序列表（加号和嵌套）Unordered Lists (+)\n' +
    '+ 列表一\n' +
    '+ 列表二\n' +
    '    + 列表二-1\n' +
    '    + 列表二-2\n' +
    '    + 列表二-3\n' +
    '+ 列表三\n' +
    '    * 列表一\n' +
    '    * 列表二\n' +
    '    * 列表三\n' +
    '\n' +
    '#### 有序列表 Ordered Lists (-)\n' +
    '\n' +
    '1. 第一行\n' +
    '2. 第二行\n' +
    '3. 第三行\n' +
    '\n' +
    '#### GFM task list\n' +
    '\n' +
    '- [x] GFM task list 1\n' +
    '- [x] GFM task list 2\n' +
    '- [ ] GFM task list 3\n' +
    '\n' +
    '----\n' +
    '\n' +
    '### 绘制表格 Tables\n' +
    '\n' +
    '| 项目        | 价格   |  数量  |\n' +
    '| --------   | -----:  | :----:  |\n' +
    '| 计算机      | $1600   |   5     |\n' +
    '| 手机        |   $12   |   12   |\n' +
    '| 管线        |    $1    |  234  |\n' +
    '\n' +
    '----\n' +
    '\n' +
    '#### 特殊符号 HTML Entities Codes\n' +
    '\n' +
    '&copy; &  &uml; &trade; &iexcl; &pound;\n' +
    '&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;\n' +
    '\n' +
    'X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;\n' +
    '\n' +
    '18&ordm;C  &quot;  &apos;\n' +
    '\n' +
    '#### 反斜杠 Escape\n' +
    '\n' +
    '\\*literal asterisks\\*\n';

  return (
    <>
      <MarkdownWrap source={source} />
    </>
  );
};

export default {
  title: 'MarkdownExample',
  component: MarkdownExample,
};
