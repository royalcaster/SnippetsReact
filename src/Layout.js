import './Layout.css';
import React from 'react';

function Layout() {
  return (
    <div className="Body">
      <div className="Navbar">
        <MainTitle></MainTitle>
        <NavbarLink lable="Abmelden" icon="&#xe879;"></NavbarLink>
        <NavbarLink lable="Account" icon="&#xe853;"></NavbarLink>
      </div>
      <div className="Content">
        <div className="filler"></div>
        <AddCard />
        <Card title="Testkarte 1" date="31. 10. 2002"></Card>
      </div>
    </div>
  );
}

function MainTitle(){
  return <p className="main_title">snippets</p>;
}

function NavbarLink(props) {
  return <a className="navbar_links"><i className="material-icons navbar_icon">{props.icon}</i>&nbsp;{props.lable}</a>;
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renamed: false
    }
    this.toggleRename = this.toggleRename.bind(this);
  }
  toggleRename() {
    const { renamed } = this.state;

    this.setState({
      renamed: !renamed
    });
  }
  render (){
    return <div className="card_container">
      {this.state.renamed ? <RenameOverlay></RenameOverlay> : null}
      <button className="card_entry_button"><i className="material-icons entry_icon">&#xe5da;</i></button>
      <p className="card_title">{this.props.title}</p>
      <p className="card_date">{this.props.date}</p>
      <button className="card_button"><i className="material-icons card_button_icon red">&#xe872;</i></button>
      {this.state.renamed ? <button className="card_button" onClick={this.toggleRename}><i className="material-icons card_button_icon green">&#xe5ca;</i></button>
      : <button className="card_button" onClick={this.toggleRename}><i className="material-icons card_button_icon">&#xe3c9;</i></button>}
      
    </div>
  };
}

function RenameOverlay() {  
    
  return (
  <div className="rename_overlay_container">
    <input placeholder="Neuer Titel..." className="rename_input" spellCheck="false"></input>
  </div>);
}



function AddCard(){
  return (
    <div className="card_container card_add">
      <i className="material-icons add_icon">&#xe145;</i>
    </div>
  );
}

export default Layout;
