from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    else:
        return render_template('dashboard.html')    

@app.route('/dashboard', methods = ['GET', 'POST'])
def dashboard():
    if request.method == 'GET':
        return render_template('dashboard.html')
    else:
        return render_template('index.html')

@app.route('/practice/', methods = ['GET', 'POST'])
@app.route('/practice/<exercise_type>', methods = ['GET', 'POST'])
def practice(exercise_type):
    if request.method == 'GET':
        if exercise_type == '1':
            exercise_self = 'I have eaten'
            exercise_name = 'Perfectum'
        elif exercise_type == '2':
            exercise_self = 'I will eat'
            exercise_name = 'Futurum'
        elif exercise_type == '3':
            exercise_self = 'I am eating'
            exercise_name = 'Present'
        elif exercise_type == '4':
            exercise_self = 'I like to eat potatoes'
            exercise_name = 'Extra 1'
        elif exercise_type == '5':
            exercise_self = 'I ate a pizza at eleven thirty last week'
            exercise_name = 'Extra 2'
        elif exercise_type == '6':
            exercise_self = 'They like to play computer games all the time'
            exercise_name = 'Extra 3'
        else:
            return dashboard

        return render_template("exercise.html", exercise_type = exercise_type, exercise_self = exercise_self, exercise_name = exercise_name)
    else:
        pass
      

if __name__ == '__main__':
    app.run(debug = True, port = 7000)