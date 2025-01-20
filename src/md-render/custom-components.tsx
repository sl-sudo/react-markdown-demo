import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxLight as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const CustomComponents = () => {
    return {
        // 代码高亮功能
        code: ({ children, className, node, ...rest }: any) => {
            const match = /language-(\w+)/.exec(className || '')

            return match ? (
                <SyntaxHighlighter {...rest} PreTag="div" language={match[1]} style={codeStyle}>
                    {children}
                </SyntaxHighlighter>
            ) : (
                <code {...rest} className={className}>
                    {children}
                </code>
            )
        },
    }
}
