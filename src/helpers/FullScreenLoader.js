import {Spin} from "antd";
import React from "react";

const ScreenLoader = (props) =>{
    return (
        <div className={`tw-h-full tw-w-full tw-z-${props.index} tw-flex tw-justify-center tw-items-center tw-absolute tw-bg-white`}>
            <Spin/>
        </div>
    )
}

const FullScreenLoader = (props) => {
  return (
      <ScreenLoader index={50}/>
  )
}

export const InlineLoader = (props) => {
    return (
        <ScreenLoader index={45}/>
    )
}

export default FullScreenLoader