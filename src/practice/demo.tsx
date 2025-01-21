import demo from '../assets/demo.md?raw'
import { MdRender } from './index'

export const Demo = () => {
    return <MdRender content={demo} />
}
