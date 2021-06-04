import sqlite3
from sqlite3.dbapi2 import connect

connection = sqlite3.connect('QuestionsList.db', check_same_thread = False)
cursor = connection.cursor()

cursor.execute(
    """CREATE TABLE questions(
        pk INTEGER PRIMARY KEY AUTOINCREMENT,
        question VARCHAR(),
        answer VARCHAR(),
        answer2 VARCHAR(),
        ex_id VARCHAR()
    );"""
)

connection.commit()
cursor.close()
connection.close()