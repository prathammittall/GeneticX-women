from flask import Flask, render_template, request, jsonify, send_file
import pandas as pd
import random
import os
from fpdf import FPDF

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    sequence_input = request.form.get('sequence_input')
    fasta_file = request.files.get('fasta_file')
    
    # Load the dataset
    df = pd.read_csv('E:/Hackathon/HackTU/Model/Final/DNA_Fake_Dataset.csv')
    
    # Get a random row from the dataset
    random_row = df.sample(n=1).to_dict(orient='records')[0]
    
    # Placeholder logic for prediction
    if sequence_input:
        prediction = f"Predicted Mutation for sequence input: {sequence_input}"
    elif fasta_file:
        prediction = "Predicted Mutation for FASTA file"
    else:
        return jsonify({'success': False, 'message': 'No input provided'})

    # Generate PDF
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.cell(200, 10, txt="Prediction Result", ln=True, align='C')
    pdf.cell(200, 10, txt=f"Prediction: {prediction}", ln=True, align='L')
    
    # Add random row data to PDF
    for key, value in random_row.items():
        pdf.cell(200, 10, txt=f"{key}: {value}", ln=True, align='L')
    
    pdf_file_path = "prediction_result.pdf"
    pdf.output(pdf_file_path)
    
    return jsonify({'success': True, 'pdf_file_path': pdf_file_path, 'result': random_row})

@app.route('/download')
def download():
    pdf_path = request.args.get('pdf')
    if os.path.exists(pdf_path):
        return send_file(pdf_path, as_attachment=True)
    else:
        return "File not found", 404

@app.route('/detailed_analysis')
def detailed_analysis():
    # Load the dataset
    df = pd.read_csv('E:/Hackathon/HackTU/Model/Final/DNA_Fake_Dataset.csv')
    
    # Get a random row from the dataset
    random_row = df.sample(n=1).to_dict(orient='records')[0]
    
    return render_template('detailed_analysis.html', result=random_row)

if __name__ == '__main__':
    app.run(debug=True)