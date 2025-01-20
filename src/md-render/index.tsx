import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import { CustomComponents } from './custom-components'
import './index.css'
import { customRehypePlugin } from './rehype-plugins'
import { customRemarkPlugin } from './remark-plugins'

interface MdRenderProps {
    content: string
}

const _MdRenderInner = ({ content }: MdRenderProps) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkDirective, customRemarkPlugin]}
            rehypePlugins={[rehypeRaw, customRehypePlugin]}
            components={CustomComponents()}
        >
            {content}
        </ReactMarkdown>
    )
}

export const MdRender = (props: MdRenderProps) => {
    return (
        <div className="w-full text-left p-20px box-border">
            <_MdRenderInner {...props} />
        </div>
    )
}
