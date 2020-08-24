import React, { Component } from 'react';
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
  Container,
} from 'reactstrap';
import '../../css/bootstrap.min.css'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCopy, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CountriesFilterHeader from '../CountriesFilterHeader/CountriesFilterHeader';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { saveLang } from '../../store/actions/configs'

class Header extends Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    selectedCategoryId: null,
    categories: []
  }

  componentDidMount() {
    const { t } = this.props;

    this.setState({
      ...this.state,
      categories: [
        {
          id: 0,
          title: t('all')
        },
        ...this.props.categories
      ]
    });
  }

  toggle1() {
    this.setState({ ...this.state, isOpen1: !this.state.isOpen1 });
  }

  toggle2() {
    this.setState({ ...this.state, isOpen2: !this.state.isOpen2 });
  }

  selectCategory(id) {
    this.state.selectedCategoryId = id
  }

  switchLang() {
    // switch the lang
    const { i18n, lang } = this.props;
    console.log(lang)
    const newLang = lang === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);

    // update redux
    this.props.saveLang(newLang);

    // refresh the page
    window.location.reload(false);
  }

  render() {
    const { t } = this.props;
    const categories = this.state.categories;
    const selectedCategoryId = this.state.selectedCategoryId;
    let selectedCategory;

    // prepare the selected category
    if (selectedCategoryId && categories) {
      selectedCategory = categories.find(item => item.id === selectedCategoryId);
    } else if (categories && categories.length > 0) {
      selectedCategory = categories[0];
    }

    return (<div className="TopHeader">
      <Container>
        <Navbar className="navBar" expand="md">
          <NavbarBrand className="nav" href="/">LOGO BRAND</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle2()} />
          <Collapse isOpen={this.state.isOpen2} navbar>
            <InputGroup className="inputSearch controlDrop">
              <InputGroupButtonDropdown className="controlDrop" addonType="append" isOpen={this.state.isOpen1} toggle={() => this.toggle1()}>
                <DropdownToggle caret>
                  {selectedCategory ? selectedCategory.title : ''}
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

              <Input className="controlDrop" />
              <InputGroupAddon addonType="append">
                <Button className="controlDrop"><FontAwesomeIcon icon={faSearch} /></Button>
              </InputGroupAddon>
            </InputGroup>

            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/">
                  <BootstrapNavLink><CountriesFilterHeader /> </BootstrapNavLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={() => this.switchLang()}>{t('lang')}</Button>
              </NavItem>
              <NavItem>
                <NavLink to="/request">
                  <BootstrapNavLink><FontAwesomeIcon icon={faCopy} /> {t('orders')}</BootstrapNavLink>
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
      </Container>
    </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    categories: store.categoriesReducer.categories,
    lang: store.configsReducer.lang
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveLang: (lang) => dispatch(saveLang(lang))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Header));