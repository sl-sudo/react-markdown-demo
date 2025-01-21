import { Element, Root } from 'hast'
import { toString } from 'hast-util-to-string'
import { visit } from 'unist-util-visit'

/**
 * 给 markdown 的 h1, h2, h3 标签添加 id 属性
 * @returns
 */
export const customRehypePlugin = () => {
    return transform

    function transform(tree: Root) {
        console.log('hast', tree)
        let headingIndex = 0
        visit(tree, 'element', (node: Element) => {
            if (node.tagName === 'h1' || node.tagName === 'h2' || node.tagName === 'h3') {
                const innerText = toString(node)
                const id = `${headingIndex}-${innerText}`
                node.properties.id = id
                headingIndex++
            }
        })
    }
}
