import os
import requests
import gdown

def check_and_download_model():
    folders = ["main1", "saved_model"]
    filename = "model.safetensors"
    gdrive_url = "https://drive.google.com/uc?id=1IbqP9IRfkujZH4xdkH5LNBghQixfljNA"
    
    # Check if the file exists in both folders
    file_missing = any(not os.path.exists(os.path.join(folder, filename)) for folder in folders)
    
    if file_missing:
        print("File missing. Downloading...")
        gdown.download(gdrive_url, filename, quiet=False)
        
        # Move the file to both directories
        for folder in folders:
            os.makedirs(folder, exist_ok=True)
            dest_path = os.path.join(folder, filename)
            os.replace(filename, dest_path)
            print(f"File moved to {dest_path}")
    else:
        print("File already exists in both folders.")

if __name__ == "__main__":
    check_and_download_model()