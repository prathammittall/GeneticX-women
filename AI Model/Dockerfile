# Use an official Python image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app_main

# Copy everything from your current folder to /app in the container
COPY . .

# Install dependencies (Ensure you have a `requirements.txt`)
RUN pip install --no-cache-dir -r requirements.txt

# Expose the required port (if running a web app)
EXPOSE 5000  # Change this if needed

# Command to run the application
CMD ["python", "app_main.py"]  # Change to the main script
