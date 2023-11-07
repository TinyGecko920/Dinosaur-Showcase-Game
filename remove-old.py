import os
import json
import sys

def process_json_files(folder_path):
    if not os.path.exists(folder_path):
        print("Folder path does not exist")
    else:
        for filename in os.listdir(folder_path):
            if filename.endswith('.json'):
                file_path = os.path.join(folder_path, filename)
                try:
                    with open(file_path, 'r') as file:
                        try:
                            json_data = json.load(file)
                        except json.JSONDecodeError as e:
                            print("Error decoding JSON from file {}: {}".format(file_path, e))
                except IOError as e:
                    print("Error opening file {}: {}".format(file_path, e))

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Please provide the folder path as an argument")
    else:
        folder_path = sys.argv[1]
        process_json_files(folder_path)
