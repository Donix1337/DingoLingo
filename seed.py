import sqlite3
from sqlite3.dbapi2 import connect

connection = sqlite3.connect('QuestionsList.db', check_same_thread = False)
cursor = connection.cursor()

cursor.execute(
    """INSERT INTO questions(
        question,
        answer,
        answer2,
        ex_id
        )VALUES(
            'I will eat',
            'voy a comer',
            'yo voy a comer',
            '1'
        );"""
)

cursor.execute(
    """INSERT INTO questions(
        question,
        answer,
        answer2,
        ex_id
        )VALUES(
            'I have eaten yesterday',
            'he comida ayer',
            'yo he comida ayer',
            '2'
        );"""
)

connection.commit()
cursor.close()
connection.close()