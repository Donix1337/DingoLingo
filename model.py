import sqlite3
from sqlite3.dbapi2 import connect

def show_excercise(ex_id):
    connection = sqlite3.connect('QuestionsList.db', check_same_thread = False)
    cursor = connection.cursor()
    cursor.execute(""" SELECT question FROM questions
    WHERE ex_id='{ex_id}' ORDER BY pk DESC;""".format(ex_id = ex_id))
    question = cursor.fetchone()[0]

    connection.commit()
    cursor.close()
    connection.close()
    question_print = '{question}'.format(question = question)
    return question_print


def show_color(username):
    connection = sqlite3.connect('flask_tut.db', check_same_thread = False)
    cursor = connection.cursor()
    cursor.execute(""" SELECT favorite_color FROM users 
    WHERE username='{username}' ORDER BY pk DESC;""".format(username = username))
    color = cursor.fetchone()[0]

    connection.commit()
    cursor.close()
    connection.close()
    message = '{username}s favorite color is {color}'.format(username = username, color = color)
    return message

def check_pw(username):
    connection = sqlite3.connect('flask_tut.db', check_same_thread = False)
    cursor = connection.cursor()
    cursor.execute(""" SELECT password FROM users WHERE username ='{username}' ORDER BY pk DESC;""".format(username = username))
    password = cursor.fetchone()[0]

    connection.commit()
    cursor.close()
    connection.close()
    return password

def signup(username, password, favorite_color):
    connection = sqlite3.connect('flask_tut.db', check_same_thread = False)
    cursor = connection.cursor()
    cursor.execute(""" SELECT password FROM users where username ='{username};""".format(username = username))
    exist = cursor.fetchone()

    if exist is None:
        cursor.execute(""" INSERT INTO users(username, password, favorite_color)VALUES('{username}', '{password}', '{favorite_color}');""".format(username = username, password = password, favorite_color = favorite_color))

