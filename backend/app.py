from flask import Flask, jsonify
from flask_cors import CORS

from portfolio_data import portfolio

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Portfolio Backend Running 🚀"

@app.route("/api/portfolio")
def get_portfolio():
    return jsonify(portfolio)

if __name__ == "__main__":
    app.run(debug=True)