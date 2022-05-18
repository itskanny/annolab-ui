import {Avatar, Divider, Input, List, Skeleton} from "antd";
import {useEffect, useState} from "react";


const ProjectsList = (props) => {

    const [filtered, setFiltered] = useState(props.data)

    const handleSearch = (event) => {
        setFiltered(props.data.filter(project => project.name.includes(event.target.value)))
    }


    useEffect(()=>{
        setFiltered(props.data)
    },[props.data])


    return (<>
        <div className={'tw-mb-5'}>
            <Input size={"middle"} placeholder={'Search Projects'} onChange={handleSearch}/>
        </div>
        {
            props.loading ?
                <div className={'list-skeleton'}>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                    <Divider className={'tw-m-0 tw-mb-2'}/>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                    <Divider/>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                </div>
                :
                <List
                    dataSource={filtered}
                    renderItem={item => {
                        return (
                            <List.Item>
                                {!props.loading && <div className={'tw-flex tw-items-center'}>
                                    <Avatar src={item.avatar}/>
                                    <p className={'tw-m-0 tw-ml-4 tw-text-gray-800 tw-cursor-pointer hover:tw-underline'}>{`${props.obj.name}/${item.name}`}</p>
                                </div>}
                            </List.Item>
                        )
                    }}
                >

                </List>
        }
    </>)

}

export default ProjectsList