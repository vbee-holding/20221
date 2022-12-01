# TUẦN9 : BÁO CÁO TÌM HIỂU VỀ REACT JS
## I. Giới thiệu về React JS
### 1. Giới thiệu
######  React.js là một thư viện Javascript đang nổi lên trong những năm gần đây với xu hướng Single Page Application.
### 2. React là gì?
######  React là một thư viện UI phát triển tại Facebook để hỗ trợ việc xây dựng những thành phần (components) UI có tính tương tác cao, có trạng thái và có thể sử dụng lại được.
#### - Giới thiệu về JSX
###### JSX là một dạng ngôn ngữ cho phép viết các mã HTML trong Javascript. Đặc điểm: Nhanh hơn. JSX thực hiện tối ưu hóa trong khi biên dịch sang mã Javacsript.
#### - Giới thiệu về Components
###### React được xây dựng xung quanh các component, chứ không dùng template như các framework khác. React sẽ thực hiện cập nhật component dựa trên những thay đổi của trạng thái. Mọi thứ React đều là component. 
#### - Props và State
###### Props: giúp các component tương tác với nhau, component nhận input gọi là props, và trả thuộc tính mô tả những gì component con sẽ render. Prop là bất biến. 
###### State: thể hiện trạng thái của ứng dụng, khi state thay đồi thì component đồng thời render lại để cập nhật UI.
## II. Các khái niệm cơ bản nắm ở phần Main Concepts
### - State và Props
###### `State:`
######  State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút, nhập một số văn bản, nhấn một số phím, ...
######  Bất cứ khi nào một lớp kế thừa lớp React.Component, Constructor của nó sẽ tự động gán thuộc tính state cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè Constructor. Trong nhiều trường hợp chúng ta cần cập nhật state. Để làm điều đó, chúng ta phải sử dụng phương thức setState.
######  Khi state đã được thay đổi, react sẽ render lại component với những thay đổi đó. Bất cứ khi nào state được cập nhật trong component, tất cả các component con của nó cũng sẽ render/show lại với những thay đổi mới nhất.
###### `Props:`
######  Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element. Mọi component được coi là một hàm javascript thuần khiết (Pure Function).
######  Props là không thể thay đổi được. Vì trong các hàm thuần khiết, chúng ta không thể thay đổi dữ liệu của các tham số. Vì vậy, cũng không thể thay đổi dữ liệu của prop trong ReactJS.
######  Chúng ta không cần sử dụng this cho các hàm component cơ bản để truy cập props nhưng chúng ta phải sử dụng this để truy cập props this.props.<prop_name>.
### - Vòng đời của 1 component
###### `Mounting`
###### - Constructor(props):
- Được gọi khi một thể hiện của component được tạo ra.
- Có thể dùng để khởi tạo state cho component.
- Cũng có thể dùng để "bind" các hàm của component.
- Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
- Nếu không làm gì thì không phải cài đặt hàm này.
###### - ComponentWillMount():
- Được gọi trước khi render().
- Dùng để đăng ký các sự kiện toàn cục.
- Dựa vào các props để tính toán và set lại state
###### - Render:
- Hàm này bắt buộc phải có trong component().
- Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiển thị hoặc null / false nếu không muốn hiển thị gì.
- Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi => gây ra lặp vô hạn.
###### - componentDidMount():
- Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
- Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
- Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
###### `Updating`
###### - componentWillReceiveProps(nextProps):
- Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
- Phải gọi setState() nếu muốn render lại.
###### - shouldComponentUpdate(nextProps, nextState):
- Được gọi trước render.
- Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.
###### - componentWillUpdate(nextProps, nextState):
- Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
- Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
- Hàm render sẽ được gọi ngay sau hàm này.
###### - componentDidUpdate(prevProps, prevState):
- Được gọi ngay sau render() từ lần render thứ 2 trở đi.
- Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
###### `Unmounting`
###### - componentWillUnmount():
- Được gọi khi 1 component được loại bỏ khỏi DOM.
- Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...
### - Cách xử lý các sự kiện
###### `Xử lý các sự kiện trong React:`
###### - Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange.
###### - Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
###### - Chúng ta sử dụng các event listener để lắng nghe các lời gọi hàm sẽ thực thi khi có một sự kiện xảy ra.
### - JSX
###### - JSX là viết tắt của JavaScript XML.
###### - JSX cho phép chúng ta viết HTML trong React.
###### - JSX giúp viết và thêm HTML vào React dễ dàng hơn.
###### - Không bắt buộc phải sử dụng JSX, nhưng JSX giúp viết các ứng dụng React dễ dàng hơn.

###### `Embedding Expression in JSX`
###### Trong ví dụ bên dưới, chúng ta khai báo một biến tên và sau đó sử dụng nó bên trong JSX bằng cách gói nó trong dấu ngoặc nhọn:
###### `VD`:
```reactjs
    const name = 'Josh Perez';
    const element = <h1>Hello, {name}</h1>;
```
###### Trong ví dụ dưới đây, chúng tôi nhúng kết quả của việc gọi một hàm JavaScript, formatName(user), vào một phần tử <h1>.
###### `VD`:
```reactjs
    function formatName(user) {
     return user.firstName + ' ' + user.lastName;
    }

    const user = {
    firstName: 'Harper',
    lastName: 'Perez'
    };  
    const element = (
     <h1>
         Hello, {formatName(user)}!
    </h1>
    );
```
###### `JSX is an Expression Too`
###### Sau khi biên dịch, các biểu thức JSX trở thành các lệnh gọi hàm JavaScript thông thường và đánh giá các đối tượng JavaScript.Điều này có nghĩa là bạn có thể sử dụng JSX bên trong câu lệnh if và vòng lặp for, gán nó cho các biến, chấp nhận nó làm đối số và trả về nó từ các hàm:
###### `VD`:
```reactjs
   function getGreeting(user) {
   if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
    }
   return <h1>Hello, Stranger.</h1>;
    }
```
###### `JSX Prevents Injection Attacks`
###### It is safe to embed user input in JSX:
###### `VD`:
```reactjs
   const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```
###### React DOM thoát mọi giá trị được nhúng trong JSX trước khi hiển thị chúng. Do đó, nó đảm bảo rằng bạn không bao giờ có thể tiêm bất kỳ thứ gì không được viết rõ ràng trong ứng dụng của mình. Mọi thứ được chuyển đổi thành một chuỗi trước khi được hiển thị. Điều này giúp ngăn chặn các cuộc tấn công XSS (cross-site-scripting).
###### `JSX Represents Objects`
###### React.createElement() thực hiện một số kiểm tra để giúp bạn viết mã không có lỗi nhưng về cơ bản, nó tạo ra một đối tượng như sau:
###### `VD`:
```reactjs
   const element = {
     type: 'h1',
     props: {
        className: 'greeting',
        children: 'Hello, world!'
  }
};
```