
class Skin extends React.Component {

    render() {
        return (
            <div className="champion">
                <Menu/>
                <div className="keyimage">
                    <img src="/images/keyimage1.png"/>
                </div>
            </div>

        );
    }


}

ReactDOM.render(<Skin/>, document.getElementById('skin'));