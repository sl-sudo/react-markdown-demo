import ReactMarkdown from 'react-markdown'

interface MdRenderProps {
    content: string
}

const _MdRenderInner = ({ content }: MdRenderProps) => {
    return <ReactMarkdown>{content}</ReactMarkdown>
}

export const MdRender = (props: MdRenderProps) => {
    return (
        <div className="w-full text-left p-20px box-border">
            <_MdRenderInner {...props} />
        </div>
    )
}
