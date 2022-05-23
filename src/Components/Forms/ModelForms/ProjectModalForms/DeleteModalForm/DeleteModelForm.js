import {Button, Modal} from "antd";
import {Typography} from 'antd';
import React, {useState} from "react";
import {openNotification} from "../../../../../helpers/helper";
import {ProjectProvider} from "../../../../../providers/ProjectProvider";
import {useHistory} from "react-router-dom";
import {authStore} from "../../../../../store/AuthStore";

const {Text, Paragraph} = Typography

const DeleteModelForm = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleCancel = () => {
        Modal.destroyAll()
        props.setVisible(prevState => ({state: false, row: prevState.row}))
    };

    const handleOk = () => {
        setIsLoading(true)
        ProjectProvider.deleteProject(props.visible.row.id)
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', 'Project deleted successfully', true)
                    if (props.redirect) {
                        history.replace(`/org/${authStore.getSelectedOrganizationId}/projects/`)
                    } else {
                        props.setRender(Math.random())
                        props.setVisible(prevState => ({state: false, row: prevState.row}))
                        setIsLoading(false)

                    }
                } else {
                    setIsLoading(false)
                    openNotification('error', 'Failed to delete Project', false)
                }

                Modal.destroyAll()
            })
    };

    return (
        <>
            <Modal
                visible={props.visible.state}
                title={'Confirm Project Deletion'}
                closable={false}
                destroyOnClose={true}
                centered
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button danger key="submit" type="primary" loading={isLoading} onClick={handleOk}>
                        Yes! Delete
                    </Button>,
                ]}
            >
                <p>Are you sure you want to delete project named</p>

                <p><Text code>{props.visible.row.name} </Text></p>

                <p className={'tw-mt-3'}>This action will also remove</p>
                <Paragraph>
                    <ul>
                        <li className={'tw-mt-2'}>
                            <Text code>Related Images</Text>
                        </li>
                        <li>
                            <Text code>Related Annotations</Text>
                        </li>
                    </ul>
                </Paragraph>

                <p>This action will be <Text type={"danger"}>Irreversible.</Text> Do you confirm?</p>

            </Modal>
        </>
    )
}

export default DeleteModelForm