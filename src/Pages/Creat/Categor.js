import { Select } from 'antd';






function Categ({use}) {
    function onChange(value) {
        use(value)
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    const { Option } = Select;


    return (
        <Select
            className={'cat'}
            showSearch
            style={{width: 200}}
            placeholder="Category"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="1">First</Option>
            <Option value="2">Second</Option>
            <Option value="3">Third</Option>

        </Select>

    );
}
export default Categ