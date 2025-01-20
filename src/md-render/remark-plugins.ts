import { h } from 'hastscript'
import { Root } from 'mdast'
import { ContainerDirective } from 'mdast-util-directive'
import { visit } from 'unist-util-visit'

/**
 * 自定义语法匹配 ::: 标记，添加 className 属性
 * :::className
 * content
 * :::
 * @returns
 */
export const customRemarkPlugin = () => {
    return transform

    function transform(tree: Root) {
        console.log('mdast', tree)
        visit(tree, 'containerDirective', (node: ContainerDirective) => {
            const data = node.data || (node.data = {})
            const hast = h(node.name, node.attributes || {})

            if (Array.isArray(hast.properties.className)) {
                hast.properties.className.push(node.name)
            } else {
                hast.properties.className = [node.name]
            }

            data.hProperties = hast.properties
        })
    }
}
