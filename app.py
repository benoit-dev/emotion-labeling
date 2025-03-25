from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    try:
        feedback = request.json.get('feedback')
        if not feedback:
            return jsonify({'error': 'No feedback provided'}), 400

        # Create message
        msg = MIMEText(feedback)
        msg['Subject'] = 'Emotion Identifier Feedback'
        msg['From'] = 'noreply@emotion-labeling.pages.dev'
        msg['To'] = 'benoit.devilliers888+emotionlabeling@gmail.com'

        # Send email using local SMTP
        with smtplib.SMTP('localhost') as smtp:
            smtp.send_message(msg)

        return jsonify({'message': 'Feedback sent successfully'}), 200
    except Exception as e:
        print(f"Error sending feedback: {str(e)}")
        return jsonify({'error': 'Failed to send feedback'}), 500

if __name__ == '__main__':
    app.run(port=5000)
