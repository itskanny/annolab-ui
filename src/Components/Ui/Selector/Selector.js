import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Selector=()=>{



    return(
        <>
            <>
                <Select defaultValue="Monday"
                        style={{ width: "auto" }} >
                    <Option value="Monday">Monday</Option>
                    <Option value="Tuesday">Tuesday</Option>
                    <Option value="Wednesday">Wednesday</Option>
                    <Option value="Thursday">Thursday</Option>
                    <Option value="Friday">Friday</Option>
                    <Option value="Saturday">Saturday</Option>
                    <Option value="Sunday">Sunday</Option>
                </Select>
            </>
        </>
    );
}
export default Selector;