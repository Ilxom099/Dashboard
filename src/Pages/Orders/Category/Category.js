import { Select } from 'antd';





 function Categ({setCateg,setSearch}) {

     const { Option } = Select;

     function onChange(value) {
         setCateg(value)
         setSearch('')
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
     return (
         <Select
             className={'cat'}
             showSearch
             style={{width: 200}}
             placeholder="Select a person"
             optionFilterProp="children"
             onChange={onChange}
             onFocus={onFocus}
             onBlur={onBlur}
             onSearch={onSearch}
             filterOption={(input, option) =>
                 option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
             }
         >
             <Option value="sss">Jack</Option>
             <Option value="two">Lucy</Option>
             <Option value="3">Tom</Option>
         </Select>

     );
 }
 export default Categ