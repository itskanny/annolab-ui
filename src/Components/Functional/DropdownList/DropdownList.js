import {List} from "antd";


const DropdownList = props => {


    return (
        <List

            dataSource={props.data}
            renderItem={item => {
                return (
                    <List.Item
                        onClick={e => props.handleChange(item.id)}
                        className={'tw-m-0 hover:tw-bg-item-hover tw-cursor-pointer'}>
                        <div className={'tw-ml-2'}>
                            <p className={'tw-m-0'}>{item.name}</p>
                        </div>
                    </List.Item>
                )
            }}
        />
    )
}

export default DropdownList