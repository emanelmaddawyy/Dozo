import React, { Component }  from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as BootstrapNavLink,
  NavbarText,
  Button,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  InputGroupAddon,


} from 'reactstrap';
import '../../css/bootstrap.min.css'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch , faCopy , faUser , faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import CountryFilterHeader from '../contryFilterHeader'

class Header extends Component {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  state = {
    isOpen1: false,
    isOpen2: false,
    selectedCategoryId: 1,
    categories: [
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
  toggle2() {
    this.setState({...this.state, isOpen2: !this.state.isOpen2});
  }

  selectCategory(id) {
      this.state.selectedCategoryId = id
    //   this.setState({selectedCategoryId: id});
  }

  render() {
      const selectedCategory = this.state.categories.find(item => item.id === this.state.selectedCategoryId);
    return ( 
      <div>
       <Navbar className="navBar" expand="md">
         <NavbarBrand className="nav" href="/">LOGO BRAND</NavbarBrand>
         
         <NavbarToggler onClick={() => this.toggle2()} />
         <Collapse isOpen={this.state.isOpen2} navbar>
         <InputGroup className="inputSearch controlDrop">
         <InputGroupButtonDropdown className="controlDrop" addonType="append" isOpen={this.state.isOpen1} toggle={() => this.toggle1()}>
          <DropdownToggle caret>
            {selectedCategory.title}
          </DropdownToggle>
          <DropdownMenu>
              {
                  this.state.categories.map(item => 
                    (
                    <DropdownItem 
                        key={item.id}
                        onClick={() => this.selectCategory(item.id)}>
                            {item.title}
                    </DropdownItem>)
                    )
              }
          </DropdownMenu>
        </InputGroupButtonDropdown>
        
        <Input className="controlDrop"/>
        <InputGroupAddon addonType="append">
        <Button className="controlDrop"><FontAwesomeIcon icon={faSearch}/></Button>
        </InputGroupAddon>
    
      </InputGroup>    

        
           <Nav className="mr-auto" navbar>
           <NavItem>
            <NavLink to="/">
              <BootstrapNavLink><CountryFilterHeader/> </BootstrapNavLink>
              </NavLink>
             </NavItem>
             <NavItem>
              <NavLink to="/lang">
               <BootstrapNavLink>English</BootstrapNavLink> 
               </NavLink>
             </NavItem>
             <NavItem>
             <NavLink to="/request">
               <BootstrapNavLink><FontAwesomeIcon icon={faCopy} /> الطلبات</BootstrapNavLink>
              </NavLink>
             </NavItem>
             <NavItem>
             <NavLink to="/user">
               <BootstrapNavLink><FontAwesomeIcon icon={faUser} /></BootstrapNavLink>
              </NavLink>
             </NavItem>
             <NavItem>
             <NavLink to="/">
              <BootstrapNavLink><FontAwesomeIcon icon={faShoppingCart} /></BootstrapNavLink>
              </NavLink>
             </NavItem>


           </Nav>
           <NavbarText>
             {/* Hi, {this.props.loginInfo.appUser.userName} */}
          </NavbarText>

           <NavbarText>
       
           </NavbarText>
         </Collapse>
       </Navbar>
   
     </div> 
    
    );
  }
}


export default Header;
