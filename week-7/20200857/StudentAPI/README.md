# QUẢN LÍ SINH VIÊN_WEEK7
## I> Hướng dẫn:
### 1. Cài đặt NodeJs
###### *****Nodejs là một nền tảng (Platform) phát triển độc lập được xây dựng trên V8 JavaScript Engine.**
---
> `link download:` https://nodejs.org/en/
kiểm tra version nodejs: `node -v`
Kiểm tra version npm: `npm -v`
### 2. Khởi tạo npm
###### *****NPM viết tắt của Node package manager là một công cụ tạo và quản lý các thư viện lập trình Javascript cho NodeJs.**
---
> `npm init`
### 3. Cài đặt Express
###### *****Là một framework được xây dựng trên nền tảng của Nodejs.**
---
> `npm install express`
### 4. Cài đặt Nodemon
###### *****Nodemon là một công cụ giúp phát triển các ứng dụng dựa trên Node.js bằng cách tự động khởi động lại ứng dụng nút khi phát hiện thấy các thay đổi tệp trong thư mục.**
---
> `npm install -g nodemon`
hoặc: `npm install nodemon --save-dev`
### 5. Cài đặt Morgan
###### *****Morgan là phần mềm trung gian của trình ghi yêu cầu HTTP cho NodeJs.**
---
> `npm install morgan`
### 6. Cài đặt Mongoose 
###### *****Mongoose là một công cụ mô hình hóa đối tượng MongoDB được thiết kế để hoạt động trong môi trường không đồng bộ.**
---
> `npm i mongoose`
### 7. Cài đặt body-parser  
###### *****Phần mềm trung gian phân tích cú pháp nội dung của NodeJs.**
---
> `npm install body-parser`
### 8. Cài đặt cors  
###### *****Là gói NodeJs để cung cấp phần mềm trung gian Connect/Express có thể được sử dụng để kích hoạt CORS với nhiều tùy chọn khác nhau.**
---
> `npm install cors`
### 9. Cài đặt MongoDb 
###### *****MongoDB là một hệ quản trị cơ sở dữ liệu NoSQL mã nguồn mở đa nền tảng viết bằng C++. Bản ghi trong MongoDB được lưu trữ dạng một dữ liệu văn bản, là một cấu trúc dữ liệu bao gồm các cặp giá trị và trường tương tự như các đối tượng JSON.**
---
> `link dowload:` https://www.mongodb.com/try/download/community
### 10. Mô hình MVC (Model-View-Controller)
###### *****MVC (viết tắt của Model-View-Controller) là một mẫu kiến trúc phần mềm để tạo lập giao diện người dùng trên máy tính. MVC chia một ứng dụng thành ba phần tương tác được với nhau để tách biệt giữa cách thức mà thông tin được xử lý nội hàm và phần thông tin được trình bày và tiếp nhận từ phía người dùng.** 
###### `Trong bài tập tuần này tôi áp dụng mô hình MVC nhưng khuyết thành phần View`
---
![](https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/310757417_894307268616222_2826614166603308552_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SkFfJMrJml0AX98oRdo&_nc_oc=AQkKyyXx7iaUnIUjmkEJsTj00Iu76ZLsfEJZGo5trFeYBQp4EJNcST7hrXF0YraOWy4&_nc_ht=scontent.fhan14-3.fna&oh=03_AdTF4UFQRssRIHzWjM8iKvC156IOCHBEZy9RYL7bYG6vLg&oe=639A74A9)
# II> TEST API
Application run at base_url: http://localhost:3000
### 1. Cài đặt postman
###### *****Postman là một nền tảng API dành cho các nhà phát triển thiết kế, xây dựng, thử nghiệm và lặp lại các API của họ.** 
---
> `link download:` https://www.postman.com/downloads/
## Description(5 APIs)
##### 1. Tạo mới 1 sinh viên 
##### URL: http://localhost:3000/students/create
#####  Method: POST
#####  Body: raw/JSON
#####  Request Json: 
![](https://scontent.fhan3-4.fna.fbcdn.net/v/t1.15752-9/315148749_467081275525542_9077650507974786214_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=jD3eNs0Les8AX9_Qt_7&_nc_ht=scontent.fhan3-4.fna&oh=03_AdT7S4PCN_bjd1G_JHrFAm4HGGLx6z3Ed9zKkUb2g9TkgQ&oe=639E87F4)
#####  Response: Status: 200 OK
![](https://scontent.fhan4-2.fna.fbcdn.net/v/t1.15752-9/312468838_675755030566213_174426665187293680_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=2GSqKjuaxJwAX-bWWzk&_nc_ht=scontent.fhan4-2.fna&oh=03_AdRghdIHwIJEbAIjABzIm8EwTqJl-J7kpGU8KG0loeJ7uQ&oe=639E8771)
##### 2. Lấy danh sách sinh viên 
##### Method: GET
##### URL: http://localhost:3000/students
#####  Response Json:
![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/312258082_506992724800942_169380553082423380_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uOxHv-tuccsAX8DdM6i&tn=_aM5aQIb8ir4mSr4&_nc_ht=scontent.fhan2-5.fna&oh=03_AdT8nWBS7B2_tape-f2Wvl-OEOsgPFazg-Ea17M6otDSXw&oe=639E56BB)
##### Response: Status: 200 OK
![](https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/312218558_1206431103413713_5165123946574777124_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1AK6mRZZYsAAX-OL5c4&_nc_ht=scontent.fhan3-2.fna&oh=03_AdS1q3g6-BNxE971V4zTU14oCKaBXBVlXKSFFZd5ncqaeA&oe=639E6F46)
##### 3. Lấy thông tin sinh viên
##### URL: http://localhost:3000/students/{_id}
##### Method: GET
##### Response Json:
![](https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/312500944_2225664474265241_4934198705465522499_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=orSEnOYMELkAX8M4ap0&_nc_ht=scontent.fhan3-2.fna&oh=03_AdSrRFw0DHzlR68IKUwsL4L6bmG2vg3bdA2J5E1NPai5Ng&oe=639E6C72)
##### Response: Status: 200 OK
![](https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/315431522_5578247445591470_9170906789311947735_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7gKeXWUZiVQAX9DCpGx&_nc_ht=scontent.fhan14-1.fna&oh=03_AdQpvQ6k_PMOq6kWDZxdAhNpHKnXRStpySNwQg6OwQ6m9Q&oe=639E7AFD)
##### 4. Cập nhật thông tin sinh viên 
##### URL: http://localhost:3000/students/{_id}
##### Method: PUT
##### Body: raw/JSON
##### Request Json:
![](https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/310367676_866800421348300_2799502285081828685_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SQcr7VpCX20AX8QrEhY&tn=_aM5aQIb8ir4mSr4&_nc_ht=scontent.fhan2-1.fna&oh=03_AdTv4ANMA07szQRKnsnc5VuArU_AJ6dOlNJDU4vFzUF3oA&oe=639E5E7B)
##### Response: Status: 200 OK, Message: edit successfully 
![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/311487867_882157006199215_1171498620231090166_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=m43bxgigCcUAX_aoqnZ&_nc_ht=scontent.fhan2-5.fna&oh=03_AdT_wYKDLBuFMhaLO0fA1YKyPd5asVZ0S_piqU7ypYgD5g&oe=639E5B5E)
![](https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/314850247_504040331774398_413782696508279565_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=S145HI5n75QAX_R6wYR&_nc_ht=scontent.fhan3-1.fna&oh=03_AdTkMOz2Nc1U_JxbcpkmfXg9nmdbBlCeusxUenJOQk5tsw&oe=639E8AF0)
##### 5. Xóa sinh viên
##### URL: http://localhost:3000/students/{_id}
##### Method: Delete
##### Response: Status: 200 OK, Message: Delete successfully
![](https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/315522801_973298643629584_7393922067745477272_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SfTLOivTa3IAX8j3M3n&tn=_aM5aQIb8ir4mSr4&_nc_ht=scontent.fhan2-5.fna&oh=03_AdQEccODRZHhK1WdCUh9dS8ZyMp2L1vX8L0ukMOqwtXHYg&oe=639E8316)
