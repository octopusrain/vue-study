import create from './create'
import Toast from '@/components/Toast';

const toast = (props) => {
  let notice = null
  if(typeof props === 'string'){
    // 兼容用户只想传入message 字符串
    notice = create(Toast,{message:props})
  }else{
    notice = create(Toast,props)
  }
  // 移除
  setTimeout(()=>{
    notice.remove()
  },props.duration || 2000)
}
export default toast