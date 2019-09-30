class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }
    render() {
        return (
            <form className="form-signin" action="/login" method="post">
                <h4 className="form-signin-heading">로그인</h4>
                <label htmlFor="inputEmail" className="sr-only">아이디</label>
                <input type="text" onChange={this.handleEmailChange} id="uid" className="form-control" placeholder="아이디" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">비밀번호</label>
                <input type="password" onChange={this.handlePasswordChange} id="upwd" className="form-control" placeholder="비밀번호" required/>
                <button className="btn btn-lg btn-block btnLogin" onClick={this.signIn} type="button">Sign in</button>
            </form>
        );
    }

    handleEmailChange(e){
        this.setState({email:e.target.value});
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value});
    }
    signIn(){
        alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
        axios.post('/signin', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

ReactDOM.render(<Signin />, document.getElementById('loginBox'));