import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography } from 'antd';
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
const originData = [];

for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

function Tab() {


    const EditableCell = ({
                              editing,
                              dataIndex,
                              title,
                              inputType,
                              record,
                              index,
                              children,
                              ...restProps
                          }) => {
        const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };

    const EditableTable = () => {
        const [form] = Form.useForm();
        const [data, setData] = useState(originData);
        const [editingKey, setEditingKey] = useState('');

        const isEditing = (record) => record.key === editingKey;

        const edit = (record) => {
            form.setFieldsValue({
                name: '',
                age: '',
                address: '',
                ...record,
            });
            setEditingKey(record.key);
        };

        const cancel = () => {
            setEditingKey('');
        };

        const save = async (key) => {
            try {
                const row = await form.validateFields();
                const newData = [...data];
                const index = newData.findIndex((item) => key === item.key);

                if (index > -1) {
                    const item = newData[index];
                    newData.splice(index, 1, {...item, ...row});
                    setData(newData);
                    setEditingKey('');
                } else {
                    newData.push(row);
                    setData(newData);
                    setEditingKey('');
                }
            } catch (errInfo) {
                console.log('Validate Failed:', errInfo);
            }
        };

        const columns = [
            {
                title: 'age',
                dataIndex: 'age',
                width: '5%',
                editable: true,
            },
            {
                title: 'Product Name',
                dataIndex: 'name',
                width: '25%',
                editable: true,
            },
            {
                title: 'Date',
                dataIndex: 'age',
                width: '15%',
                editable: true,
            },
            {
                title: 'Price',
                dataIndex: 'address',
                width: '25%',
                editable: true,
            },
            {
                title: 'Status',
                dataIndex: 'operation',
                width: '15%',
                render: (_, record) => {
                    const editable = isEditing(record);
                    return editable ? (
                        <span>
            <a
                href="javascript:;"
                onClick={() => save(record.key)}
                style={{
                    marginRight: 8,
                }}
            >
              Save
            </a>

            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>) : (  <div className={'tabs'}>
                        <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                            <div className={'edits'}><FiEdit/></div>
                        </Typography.Link>
                             <div className={'delete'}> <MdDelete/> </div>
                    </div>

                    );

                },
            },
        ];
        const mergedColumns = columns.map((col) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: (record) => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: isEditing(record),
                }),
            };
        });
        return (
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        );
    };
return(<EditableTable />);
}
export default Tab

