from flask import Flask, render_template,request
import requests

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['GET','POST'])
def login():
    url = 'http://localhost:5000/login' 
    email = request.form['email']
    password = request.form['password']
    data = {
        "email": email,
        "password": password
    }

    response = requests.post(url, json=data)

    if response.status_code == 200:
        response_data = response.json()
        message = response_data.get('message', 'Não foi possível encontrar uma mensagem')
        return render_template('message.html', message=message)
    else:
        return render_template('error.html', error=f'Erro: {response.status_code}')


if __name__ == '__main__':
    app.run(debug=True)
