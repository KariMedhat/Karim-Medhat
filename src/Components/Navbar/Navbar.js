import React, { Component } from 'react';
import { Categories,
         Container, 
         ContainerCurrency, 
         CurrencyGroup, 
         CurrencyText, 
         DownArrow, 
         DropDown, 
         LockBody,
         OverLay,
         PageLogo,
         Section,
         Symbol,
         Wrapper } from './NavbarStyle';
         import {Link} from 'react-router-dom';
import categoriesItems from '../Navbar/categoriesItems.json';  
import EmptyCart from '../EmptyCart/EmptyCart';
import MyCart from '../MyCart/MyCart';
import { changeCategory } from '../../redux/actions/categoryActions';
import {loadCurrencies, setCurrentCurrency} from '../../redux/actions/currencyActions';
import { setActive, setDropdown } from '../../redux/actions/bagActions';
import { connect } from "react-redux";


class Navbar extends Component {
    state = {
        category: "all",
      };

      componentDidMount() {
        this.props.getCurrencies();
      }
     
    render() {
        return (
            <Container>
             <Wrapper>
                <Section> 
                {categoriesItems.map((item) => (
                    <Categories
                    to="/"
                    onClick={() => {
                      this.setState({ category: item.category });
                      this.props.changeCategory(item.category);
                    }}
                    active={this.state.category === item.category ? 1 : 0}
                    key={item.name}
                    >
                        {item.name.toUpperCase()}
                    </Categories>
                    ))}  
                </Section>

                <Link to="/">
                    <PageLogo title='HomePage'/>
                </Link>
                
                <Section paddingTop="10px" gap="22px">
                <ContainerCurrency>
                        <Symbol onClick={() => this.props.setDropdown()}>
                            <CurrencyText>{this.props.currentSymbol}</CurrencyText>
                            <DownArrow/>
                        </Symbol>
                        <DropDown active={this.props.activeDrop}>
                            {this.props.currencies.map((currency) => (
                            <CurrencyGroup
                                onClick={(e) => {
                                this.props.changeCurrency(currency.symbol);
                                this.props.setDropdown("close");
                                }}
                                key={currency.symbol}
                                >
                                <CurrencyText>{currency.symbol}</CurrencyText>
                                <CurrencyText>{currency.label}</CurrencyText>
                            </CurrencyGroup>
                            ))}
                        </DropDown>
                </ContainerCurrency>
                <EmptyCart/>
                </Section>
            </Wrapper>           

              
              <MyCart/>
                     
            
                <OverLay
          onClick={() => {
            this.props.setActive();
            this.props.setDropdown("close");
          }}
          active={this.props.active}
        />
        {this.props.active ? <LockBody /> : null}

                
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      active: state.active.active,
      activeDrop: state.active.activeDrop,
      currencies: state.currencies.data,
      currentSymbol: state.currencies.currentSymbol,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      changeCategory: (category) => dispatch(changeCategory(category)),
      setActive: () => dispatch(setActive()),
      getCurrencies: () => dispatch(loadCurrencies()),
      changeCurrency: (currency) => dispatch(setCurrentCurrency(currency)),
      setDropdown: (close) => dispatch(setDropdown(close)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (Navbar);