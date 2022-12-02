# TUẦN 9: BÁO CÁO TÌM HIỂU VỀ REACTJS
## I. Giới thiệu về ReactJS
* ReactJS là 1 thư viện nguồn mở JavaScript được phát triển bởi Facebook vào năm 2013 để xây dựng giao diện người dùng.
* ReactJS được sử dụng rộng rãi và có hệ sinh thái đa dạng phong phú để xây dựng các trang web theo xu hướng SPA(Single Page Application).
* ReactJS cung cấp JSX cho phép viết các mã HTML trong JavaScript và Virtual DOM (DOM ảo) để giúp tăng hiệu năng cho ứng dụng bởi vì sử dụng DOM ảo sẽ nhanh hơn DOM thông thường.
* Một trong những điểm nổi bật nhất của ReactJS đó là việc render dữ liệu không chỉ thực hiện được trên tầng Server mà còn ở dưới tầng Client nữa.
## II. Các khái niệm cơ bản cần nắm được ở Main Concepts
#### 1. State và Props
**a. Props:**
* Khái niệm: là 1 từ viết ngắn gọn của properties , nhưng lại là 1 khái niệm trong ReactJS. props là 1 đối tượng, nó lưu trữ các giá trị của các attribute (thuộc tính) của một thẻ (Tag). Là cách mà component có thể nhận được các giá trị của thuộc tính truyền vào từ bên ngoài vào, và là cách mà các component có thể nói chuyện với nhau.
* Chúng ta sử dụng props để truyền dữ liệu đến các component.
* Mọi component được gọi là hàm JavaScript thuần khiết (pure JavaScript function: không làm thay đổi giá trị đầu vào và luôn trả về 1 kiểu định dạng).
* Không nên thay đổi props: bạn có thể thay đổi props bằng cách sử dụng setProps hay replaceProps nhưng không được React khuyến khích ( Props are Read-Only).

**b. State:**
Để 1 component sẽ hoạt động độc lập và tự update chính nó thì chúng ta sẽ sử dụng State.
* Khái niệm: Cũng giống như props, state cũng lưu trữ thông tin về component, nhưng là lưu trữ dữ liệu động của một component.
* State là dữ liệu động, nó cho phép một component theo dõi thông tin thay đổi giữa các kết xuất (render) và làm cho nó có thể tương tác.
* State chỉ có thể được sử dụng trong 1 component sinh ra nó.
* Nếu dự đoán được một component cần quản lý state, thì nó nên được tạo ở trong 1 class component chứ không phải là 1 function component.

#### 2. Vòng đời của 1 component
![](https://img.upanh.tv/2022/12/02/image59a4252e65922469.png)
##### `Mounting`:
**-- constructor(props):**
* Được gọi khi một thể hiện của component được tạo ra.
* Có thể dùng để khởi tạo state cho component.
* Cũng có thể dùng để bind các hàm của component.
* Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
* Nếu không làm gì thì không phải cài đặt hàm này.

**-- componentWillMount():**
* Được gọi trước khi render.
* Dùng để đăng ký các sự kiện toàn cục.
* Dựa vào các props để tính toán và set lại state.
 
**-- render():**
* Hàm này bắt buộc phải có trong component().
* Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiện thị hoặc null/false nếu không muốn hiển thị gì.
* Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi gây ra vòng lặp vô hạn.

**-- componentDidMount():**
* Ngay sau khi hàm render() được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
* Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
* Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.

##### `Updating`
**-- componentWillReceiveProps(nextProps):**
* Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
* Phải gọi setState() nếu muốn render lại.

**-- shouldComponentUpdate(nextProps, nextState):**
* Được gọi trước render.
* Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.

**-- componentWillUpdate(nextProps, nextState):**
* Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
* Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
* Hàm render sẽ được gọi ngay sau hàm này.

**-- componentDidUpdate(prevProps, prevState):**
* Được gọi ngay sau render() từ lần render thứ 2 trở đi.
* Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.

##### `Unmounting`
**-- componentWillUnmount():**
* Được gọi khi 1 component được loại bỏ khỏi DOM.
* Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa,...

#### 3. Cách xử lý các sự kiện
-- ReactJS là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. Với Javascript, khi sự kiện xẩy ra một hàm sẽ được gọi để thực thi. Nhưng với ReactJS, khi sự kiện xẩy ra, sẽ có một phương thức của Component được gọi.
-- Xử lý các sự kiện trong React rất giống với xử lý các sự kiện trên các phần tử DOM nhưng có một số khác biệt về cú pháp:
* Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange.
* Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
#### 4. JSX
##### 4.1. Giới thiệu:
* JSX là một phần quan trọng trong ReactJS. JSX giống như một syntax extension cho phép viết các mã HTML trong JavaScript, giúp code trở lên dễ mượt và dễ đọc hơn.
* JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript, giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.

##### 4.2. Cú pháp của JSX:
* Cú pháp để sử dụng JSX khá đơn giản:
>      <JSXName JSXAttributes>
>        ....
>      </JSXName>
* React phải nằm trong scope.

##### 4.3. Sử dụng Dot Notation cho JSX Type:
* Bạn có thể gọi đến một React component bằng việc sử dụng "." từ JSX. Điều này thật hữu ích nếu bạn có một modul React component được sử dụng ở nhiều nơi.

##### 4.4. HTML Tags và React Components:
* React có thể render HTML tags (dạng string) hay React components. Để render một HTML tag, chỉ cần sử dụng tên bằng chữ viết thường trong JSX.
* Để render một React Component, chỉ cần tạo một biến local bắt đầu bằng chữ cái viết hoa.

##### 4.5. Props trong JSX:
* Bạn có thể truyền vào bất kì một cú pháp JS như là một prop bằng việc đặt chúng trong cặp dấu {} trong JSX:
>     <MyComponent foo={1 + 2 + 3 + 4} />
* Nếu bạn không truyền giá trị cho props, nó sẽ mặc định là true.

##### 4.6. String literals:
* Bạn có thể truyền một string vào props. Hai cách viết sau là tương đương:
>     <MyComponent message="hello world" />
>     <MyComponent message={'hello world'} />

##### 4.7. Children trong JSX:
Mỗi câu lệnh JSX chứa cả 2 tag mở và đóng, nội dung nằm giữa 2 tag này được truyền như là một prop đặc biệt: props.children. Có một số cách để truyền children như sau:
* Bạn có thể đặt một string giữa tag mở và đóng và props.children sẽ là một string,  hữu ích trong việc xây dựng các HTML elements:
>     <MyComponent>Hello world!</MyComponent>
* JSX loại bỏ khoảng trắng ở điểm bắt đầu và kết thúc của một dòng, nó cũng loại bỏ dòng trống. 
* Bạn có thể khai báo một JSX elements như là một children. Điều này hữu ích trong việc hiển thị một nhóm các components:
>     <MyContainer>
>      <MyFirstComponent />
>      <MySecondComponent />
>     </MyContainer>
* Bạn có thể kết hợp nhiều cách khai báo children, vì vậy bạn có thể sử dụng một string cùng với JSX children. Ví dụ dưới đây kết hợp làm cho code vaild ở cả 2 dạng là JSX và HTML:
>     <div>
>      Here is a list:
>      <ul>
>        <li>Item 1</li>
>        <li>Item 2</li>
>      </ul>
>     </div>
* Một React component không thể return được nhiều React elements nhưng một JSX có thể có nhiều children, vì vậy nếu bạn muốn render nhiều thứ, bạn có thể gom chúng vào trong một thẻ div như trên.
