import { useTypedSelector } from './use-typed-selector';


export const useCumulativeCode=(cellId:string)=>{
    return useTypedSelector(state => {
        const data = state.cells?.data
        const order = state.cells?.order
        const orderCells = order?.map(id => {
            if (data) {
                return data[id]
            }
        })

        const showFunc = `
        import _React from 'react';
        import _ReactDOM from 'react-dom'
        const root=document.querySelector("#root")
        let show=(value)=>{
            if(typeof value==='object'){
                if(value.$$typeof && value.props){
                   _ReactDOM.render(value,root) 
                }else{
                    root.innerHTML=JSON.stringify(value);
                }
                
            }else{
                root.innerHTML=value;
            }
        }
    `;
    
        const showFuncNoop = 'show=()=>{}'


        const cumulativeCode = [];

        if (orderCells) {
            for (let c of orderCells) {
                if (c?.type == "code") {
                    if(c.id===cellId){
                        cumulativeCode.push(showFunc);
                    }else{

                        cumulativeCode.push(showFuncNoop);
                    }

                    cumulativeCode.push(c.content);
                }

                if (c?.id == cellId) {
                    break;
                }
            }
        }

        return cumulativeCode

    }).join('\n')
}