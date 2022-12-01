# Tìm hiểu về ReactJS

##### React là thư viện Javascript front-end mã nguồn mở để xây dựng giao diện người dùng, được sử dụng rộng rãi để xây dựng các trang web SPA (single-page application)

##### Tạo một dự án React: ta có thể sử dụng lệnh: npx create-react-app name_app

## Các khái niệm chính

### 1. State and props
#### 1.1 Props
##### - Là từ viết tắt của properties, props là 1 đối tượng (object) lưu trữ các giá trị (value) của các thuộc tính (attribute) của 1 thẻ (tag)
##### - Các component nhận đầu vào bất kì, các đầu vào đó là props, và nó trả về các React element
##### - Sử dụng props để truyền dữ liệu đến các component và trao đổi giữa các component
##### - Không nên thay đổi giá trị của các props
#### 1.2 State
##### - State tương tự với props, nhưng nó 'private' và hoàn toàn được kiểm soát bởi component
##### - Có thể thay đổi state, nhưng không nên thay đổi một các trực tiếp (gán giá trị) mà nên sử dụng hàm setState()

### 2. Vòng đời Component
![](https://programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM-1024x567.png)

##### Khi 1 component được khởi tạo, nó nằm trong constructor của component. Component có thể nhận các props truyền vào và thiết lập các giá trị cho State

#### 2.1 Mounting
##### Ngay sau khi component được khởi tạo, hàm componentWillMount() được chạy và tại đây chúng ta có thể thực hiện những thao tác trước khi component được render(). Khi đã render được DOM rồi, chúng ta có thể thực hiện các thao tác khác nhau trong hàm componentDidMount().

#### 2.2 Updating
##### - states: Hàm shouldComponentUpdate() kiểm tra xem states có thay đổi không, nếu có thay đổi nó sẽ chạy tiếp đến hàm componentWillUpdate(). Hàm componentWillUpdate() được chạy ngay trước khi render và sau khi render xong rồi sẽ tiếp tục chạy đến hàm componentDidUpdate().

##### - props: Tương tự cách hoạt động với states, khi nhận được sự thay đổi props truyền vào từ component cha, hàm componentWillReceiveProps() được thực hiện. Tại đây, component con được cập nhật lại giá trị cho từng props. Sau đó, trình tự thực hiện các hàm cho việc update props được thực hiện hoàn toàn tương tự với update states.

#### 2.3 Unmounting
##### Dùng hàm componentWillUnmount() để unmount một component và nó sẽ được xóa khỏi giao diện trang web.

### 3. JSX
#### Example: const element = <h1>Hello, world!</h1>;

#### 3.1 Khái niệm
##### * JSX là cú pháp mở rộng của Javascript, giúp tạo ra các React component 

#### 3.2 Tại sao nên dùng JSX
##### * Để có thể thực hiện các biểu thức logic hay gọi đến kết quả các hàm, các biến của Javascript vào các thành phần của HTML bằng cách sử dụng các dấu ngoặc nhọn {}

##### Cách để render 2 element cùng lúc trong JSX
```reactjs
    const jsx = (
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    )    => error

    const jsx = (
        <React.Fragment>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </React.Fragment> 
    )    => ok
```
##### Thông thường khi muốn render ra một danh sách element thì sử dụng phương thức map (như ví dụ trên)  

##### * Khi thực hiện chương trình thì các biểu thức JSX sẽ được Babel biên dịch và trở thành lời gọi hàm React.createElement()

### 4. Handle event
##### Handle event với React tương tự handle event trên DOM element, nhưng có một số khác biệt cú pháp

##### - React event được đặt tên theo camelCase, thay vì lowercase như là onclick -> onClick; onchange -> onChange
##### - Với JSX, có thể truyền một hàm như một event handler, thay vì là một chuỗi
    