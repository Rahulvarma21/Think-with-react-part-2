const container = document.getElementById('react-container');
class ReactContainer extends React.Component{
    render(){
        return(
            <div>Hello! Welcome Kalvium
                <div>This is babel</div>
            </div> 
            )
    };
}
ReactDOM.render(<ReactContainer/>,container)