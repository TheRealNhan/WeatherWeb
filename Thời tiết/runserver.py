import http.server
import socketserver
import os
import socket

directory: str = ".."
os.chdir(directory)
PORT: str = input("Nhập PORT >> ") or ""

HOSTNAME: str = socket.gethostname()
IP_ADDRESS: str = socket.gethostbyname(HOSTNAME)
# Nếu PORT = "" hoặc PORT = " " thì đặt mặc định PORT là 80 #

if not PORT or PORT.strip():
    # Đặt mặc định PORT (ví dụ: 80) #
    PORT = 80
else:
    PORT: int = int(PORT)

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """
    Trả về Handler bằng cách dùng hàm `do_GET()`,\n
    Nếu `self.path` bằng với `"/"` (`self.path == "/"`),\n
    thì nó sẽ đổi `self.path` thành `/index.html`.
    """
    def do_GET(self):
        if self.path == "/":
            self.path = "/index.html"
        return http.server.SimpleHTTPRequestHandler.do_GET(self)
    
Handler: object = CustomHandler


with socketserver.TCPServer(("", int(PORT)), Handler) as httpd:
    if int(PORT) == 80:
        print(f"Client IP: {IP_ADDRESS}\nĐang chạy máy chủ tại http://localhost | http://127.0.0.1")
    else:
        print(f"Client IP: {IP_ADDRESS}\nĐang chạy máy chủ tại http://localhost:{PORT}/ | http://127.0.0.1:{PORT}/")
    httpd.serve_forever()


# PS H:\Thời tiết> python runserver.py #
# H:\Thời tiết>python runserver.py #