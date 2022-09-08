import React from 'react'

class Login extends React.Component {
    componentDidMount() {
        document.title = 'Sign In - flohub'
    }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const fetchContent = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        };
        fetch('http://tunnel.flolon.cc/auth/login', fetchContent)
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data))
                if (data.status === 'authorized') {
                    console.log(data.status)
                    document.cookie = `sess=${data.sess}`
                    alert(`Logged in!`)
                } else if (data.status === 'error') {
                    alert(`Error: ${JSON.stringify(data.error)}`)
                } else {
                    console.log(`Error: ${JSON.stringify(data)}`)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1 className='title'>Sign In</h1>
                <div className='stacked mt-1'>
                    <input name="username" className='input' type='text' placeholder='Username' autoFocus value={this.state.username}
                        onChange={this.handleInputChange}></input>
                    <input name="password" className='input' type='password' placeholder='Password' value={this.state.password}
                        onChange={this.handleInputChange}></input>
                </div>
                <div className='mt-1'>
                    <button className='btn primary'>Submit</button>
                </div>
            </form>
        );
    }
}

export default Login