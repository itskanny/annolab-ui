import {Spin} from "antd";
import React from "react";


const FullScreenLoader = () => {
  return (
      <div className={'tw-h-full tw-w-full tw-z-50 tw-flex tw-justify-center tw-items-center tw-absolute'}>
          <Spin/>
      </div>
  )
}

export default FullScreenLoader