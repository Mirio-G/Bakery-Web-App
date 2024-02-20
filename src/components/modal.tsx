export class Modal extends React.Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalBackdrop = document.createElement('div');
    this.modalTarget.className = 'react-modal';
    this.modalBackdrop.className = 'react-modal__backdrop';
    document.body.appendChild(this.modalTarget);
    document.body.appendChild(this.modalBackdrop);
    this._render();

    setTimeout(() => {
      this.modalTarget.classList.add('react-modal--in');
      this.modalBackdrop.classList.add('react-modal__backdrop--in');  
    },40)
    
  }
  
  componentWillUpdate() {
    this._render();
  }
  
  componentWillUnmount() { 
    this.modalTarget.classList.remove('react-modal--in');
    this.modalBackdrop.classList.remove('react-modal__backdrop--in');
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.modalTarget);
      document.body.removeChild(this.modalTarget);
      document.body.removeChild(this.modalBackdrop);
    },500)
  }
  
  renderModalDialogue() {
    // you could have modal headers in here if desired
    // you could have some default actions like close / primary etc that take callbacks
    return (
      <div className="react-modal__dialogue">
        {this.props.children}
      </div>
    )
  }

  _render() {
    ReactDOM.render(
      this.renderModalDialogue(), 
      this.modalTarget
    );
  }
  
  render() {
    return <noscript />;
  }
}
