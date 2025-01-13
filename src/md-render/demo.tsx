import demoContent from '../assets/demo.md?raw'
import { MdRender } from './index'

export const Demo = () => {
    return <MdRender content={demoContent} />
}
