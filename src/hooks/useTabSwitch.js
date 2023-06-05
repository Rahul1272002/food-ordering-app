import { useState,useEffect } from "react";
const useTabSwitch=(tabs,defaultTab)=>{
    const [currentTab,setCurrentTab]=useState(defaultTab)


    useEffect(()=>{
            setCurrentTab(defaultTab)
    },[defaultTab])

    const handelTabSwitch=(tab)=>{
        setCurrentTab(tab)
    }
    return [currentTab,handelTabSwitch]
}
export default useTabSwitch