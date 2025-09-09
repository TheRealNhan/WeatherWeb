import os
import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class ChangeHandler(FileSystemEventHandler):
    def __init__(self, restart_function):
        self.restart_function = restart_function

    def on_any_event(self, event):
        self.restart_function()

def restart_server():
    global server_process
    if server_process:
        server_process.terminate()
        server_process.wait()  # Ensure the process has terminated
    server_process = subprocess.Popen(['python', 'Thời tiết/runserver.py'])
    print("Server restarted")

if __name__ == "__main__":
    PATH = ".."  # Thư mục bạn muốn theo dõi
    server_process = None

    event_handler = ChangeHandler(restart_server)
    observer = Observer()
    observer.schedule(event_handler, PATH, recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        if server_process:
            server_process.terminate()
            server_process.wait()
    observer.join()
