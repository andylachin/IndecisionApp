
let visibility = false










class VisibilityToggle extends React.Component{
  constructor(props){
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  toggleVisibility(){
    this.setState((prevState)=>{
      return{
        visibility: !prevState.visibility
      }
    })
  }
  render(){
    return(
      <div>
        <p>Hell Nawww</p>
        <h1>Visibility Toggle</h1>
        <button onClick = {this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && <p>Hello, these are some details you may now see upon your eyes!</p>}
    </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))

