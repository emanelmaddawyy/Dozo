import React, { Component} from 'react';
import { Dropdown , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class contryFilterHeader extends Component{


state = {
  isOpen1: false,
  selectedCategoryId: 1,
  contry: [
    {
      id: 1,
      title: 'الكل'
  },
      {
          id: 2,
          title: 'الكترونيات'
      },
      {
          id: 3,
          title: 'اجهزة'
      },
      {
          id: 4,
          title: 'موبايلات'
      }
  ]
}
toggle1() {
  this.setState({...this.state, isOpen1: !this.state.isOpen1});
}


selectCategory(id) {
    this.state.selectedCategoryId = id
  //   this.setState({selectedCategoryId: id});
}

render() {
    const selectedCategory = this.state.contry.find(item => item.id === this.state.selectedCategoryId);
  return ( 
  <div>

  <Dropdown  className="controlDrop" addonType="append" isOpen={this.state.isOpen1} toggle={() => this.toggle1()}>
   <DropdownToggle caret>
     {selectedCategory.title}
   </DropdownToggle>
   <DropdownMenu>
       {
           this.state.contry.map(item => 
             (
             <DropdownItem 
                 key={item.id}
                 onClick={() => this.selectCategory(item.id)}>
                     {item.title}
             </DropdownItem>)
             )
       }
   </DropdownMenu>
 </Dropdown >
 
 
    </div>
  
  );
}
}
export default contryFilterHeader;
