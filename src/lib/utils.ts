declare const window: any;
declare const scrollTopH: any;
// import {defineComponent,h} from 'vue'
// 返回顶部
export const backTop = () => {
    const timeTop = setInterval(() => {
        // 去控制他的滑行距离
        document.documentElement.scrollTop = scrollTopH.value -= 50;
        // 当滑到顶部的时候记得清除计时器(*) 重点
        if (scrollTopH.value <= 0) {
            clearInterval(timeTop);
        }
    }, 10);

};

// 复制文本
export const copyText = (text: String) => {
    // clipboardData 在页面上将需要的东西复制到剪贴板上
    const clipboardData = window.clipboardData;
    if (clipboardData) {
        clipboardData.clearData();
        clipboardData.setData("Text", text);
        return true;
    } else if (document.execCommand) {  // 注意 document.execCommand 已弃用 但是有些浏览器依旧支持 用的时候记得看兼容情况
        // 通过创建 dom 元素，去把要复制的内容拿到
        const el: any = document.createElement("textarea");
        el.value = text;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        // 拷贝当前内容到剪贴板
        document.execCommand("copy");
        // 删除 el 节点
        document.body.removeChild(el);
        return true;
    }
    return false;
};
// copyText('hello!') // ctrl + v = copyText  | true

// 防抖
// fn 需要防抖的函数，delay 为定时器时间
export const debounce = (fn: any, delay: number) => {
    let timer: any = null;  // 用于保存定时器
    return function () {
        // 如果timer存在 就清除定时器，重新计时
        if (timer) {
// @ts-ignore

            clearTimeout(timeout);
        }
        //设置定时器，规定时间后执行真实要执行的函数
        let timeout: any = setTimeout(() => {
// @ts-ignore

            fn.apply(this);
        }, delay);
    };
};

// 节流
export const throttle = (fn: any) => {
    let timer: any = null; // 首先设定一个变量，没有执行定时器时,默认为 null
    return function () {
        if (timer) return; // 当定时器没有执行的时候timer永远是false,后面无需执行
        timer = setTimeout(() => {
// @ts-ignore

            fn.apply(this, arguments);
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)
            // 表示可以执行下一次循环了。
            timer = null;
        }, 1000);
    };
};

// 校验2-9位文字 不符合为 false  符合为 true
export const validateName = (name: any) => {
    const reg = /^[\u4e00-\u9fa5]{2,9}$/;
    return reg.test(name);
};

// 校验手机号
export const validatePhoneNum = (mobile: any) => {
    const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
    return reg.test(mobile);
};

// 校验6到18位大小写字母数字下划线组成的密码
export const validatePassword = (password: any) => {
    const reg = /^[a-zA-Z0-9_]{6,18}$/;
    return reg.test(password);
};

// localStorage封装
export const storage={
    set(key:any,value:any){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key:any){
        const value=localStorage.getItem(key);
        return value?JSON.parse(value):null;
    },
    remove(key:any){
        localStorage.removeItem(key)
    }
}

// 生成自定义标签
// export const tagMake=(color:any,tag:any,text:any)=>{
//     defineComponent({
//         render(){
//             const props={
//                 style:{
//                     color:color
//                 }
//             }
//             return h(tag,props,text)
//         }
//     })
// }