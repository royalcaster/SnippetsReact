import './Layout.css';
import React from 'react';

const workplace_data = [];
var cards = [];

class Layout extends React.Component {
  constructor() {
    super();
    const test = <Card key="1" title="test22" date="test"></Card>;
    cards.push(test);
  }
  addCard() {
          cards = [];
  }
  render() {
    return (
    <div className="Body">
      <div className="Navbar">
        <MainTitle></MainTitle>
        <NavbarLink url="www.youtube.com" lable="Abmelden" icon="&#xe879;"></NavbarLink>
        <NavbarLink url="www.youtube.com" lable="Account" icon="&#xe853;"></NavbarLink>
      </div>
      <div className="Content">
        <div className="filler"></div>
        <div className="card_container card_add" onClick={this.addCard}>
          <i className="material-icons add_icon">&#xe145;</i>
        </div>
        {cards}
        {cards.length}
      </div>
    </div>
  );}
}

function MainTitle(){
  return <p className="main_title">snippets</p>;
}

function NavbarLink(props) {
  return <a href={props.url} className="navbar_links"><i className="material-icons navbar_icon">{props.icon}</i>&nbsp;{props.lable}</a>;
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key,
      title: this.props.title,
      date: this.props.date,
      renamed: false
    }
    this.toggleRename = this.toggleRename.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleRename() {
    const { renamed } = this.state;

    this.setState({
      renamed: !renamed
    });
  }
  handleChange(evt) {
    this.setState({
      title: evt.target.value,
    });
  }
  render (){
    return <div className="card_container">
      {this.state.renamed ? 
      <div className="rename_overlay_container">
        <input value={this.state.title} onChange={this.handleChange} placeholder="Neuer Titel..." className="rename_input" spellCheck="false"></input>
      </div> : null}
      <button className="card_entry_button"><i className="material-icons entry_icon">&#xe5da;</i></button>
      <p className="card_title">{this.state.title}</p>
      <p className="card_date">{this.state.date}</p>
      <button className="card_button"><i className="material-icons card_button_icon red">&#xe872;</i></button>
      {this.state.renamed ? <button className="card_button" onClick={this.toggleRename}><i className="material-icons card_button_icon green">&#xe5ca;</i></button>
      : <button className="card_button" onClick={this.toggleRename}><i className="material-icons card_button_icon">&#xe3c9;</i></button>}
      
    </div>
  };
}

export default Layout;
