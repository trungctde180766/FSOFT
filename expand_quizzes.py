import json

with open('data/quizzes.json', 'r', encoding='utf-8') as f:
    quizzes = json.load(f)

additional_quizzes = [
    {
        "id": "q11",
        "chapter": "Chapter 2: Declarations & Access Control",
        "type": "Java Core",
        "question": "Trong một interface, khai báo nào sau đây là KHÔNG hợp lệ và gây lỗi biên dịch (Java 7 trở về trước)?",
        "code": "public interface Action {\n    // Khai báo nào gây lỗi?\n}",
        "options": [
            "int TIMEOUT = 100;",
            "public void execute();",
            "protected void run();",
            "void perform() throws Exception;"
        ],
        "correctIndex": 2,
        "explanation": "Trong interface, tất cả các phương thức đều ngầm định là `public abstract`. Không thể khai báo phương thức với modifier `protected` hoặc `private`. Khai báo `protected void run();` sẽ gây ra Compile Error: Illegal modifier for the interface method; only public & abstract are permitted.",
        "trap": "Trong class bình thường thì `protected` rất phổ biến, nhưng interface tuyệt đối không cho phép `protected`."
    },
    {
        "id": "q12",
        "chapter": "Chapter 3: Operators & Assignments",
        "type": "Java Core",
        "question": "Kết quả in ra của đoạn mã sau là gì?",
        "code": "public class ShiftTest {\n    public static void main(String[] args) {\n        int x = -1;\n        System.out.println(x >>> 31);\n    }\n}",
        "options": [
            "-1",
            "1",
            "0",
            "Lỗi biên dịch"
        ],
        "correctIndex": 1,
        "explanation": "Trong Java, toán tử `>>>` là toán tử dịch phải không dấu (Unsigned Right Shift). Số -1 trong biểu diễn nhị phân 32-bit là 32 bit 1 (0xFFFFFFFF). Khi dịch phải không dấu 31 bit, 31 bit 0 sẽ được chèn vào bên trái, chỉ còn lại bit 1 ở hàng đơn vị cùng, cho ra kết quả là 1.",
        "trap": "Nhầm lẫn giữa `>>` (signed shift giữ nguyên bit dấu) và `>>>` (unsigned shift luôn chèn 0 vào bên trái)."
    },
    {
        "id": "q13",
        "chapter": "Chapter 4: Flow Control",
        "type": "Java Core",
        "question": "Kết quả in ra của đoạn mã switch dưới đây là gì?",
        "code": "public class SwitchTrap {\n    public static void main(String[] args) {\n        int num = 2;\n        switch (num) {\n            case 1: System.out.print(\"1 \");\n            case 2: System.out.print(\"2 \");\n            case 3: System.out.print(\"3 \");\n            default: System.out.print(\"D \");\n            case 4: System.out.print(\"4 \");\n        }\n    }\n}",
        "options": [
            "2 ",
            "2 3 D 4 ",
            "2 3 D ",
            "2 3 "
        ],
        "correctIndex": 1,
        "explanation": "Đây là hiện tượng Fall-Through trong `switch`. Khi `num == 2`, chương trình khớp tại `case 2` và in `2 `. Do KHÔNG có câu lệnh `break`, chương trình tiếp tục rơi xuống và thực thi tất cả các case bên dưới bất kể điều kiện, bao gồm cả `case 3`, `default`, và `case 4`.\n-> Kết quả: 2 3 D 4 .",
        "trap": "Quên `break` trong switch là bẫy câu hỏi trắc nghiệm phổ biến nhất về Flow Control."
    },
    {
        "id": "q14",
        "chapter": "Chapter 5: Object Orientation",
        "type": "Java Core",
        "question": "Đoạn mã sau có biên dịch thành công không? Nếu có thì in ra gì?",
        "code": "class Base {\n    Base() {\n        System.out.print(\"Base \");\n    }\n}\nclass Sub extends Base {\n    Sub() {\n        this(\"Hi \");\n        System.out.print(\"Sub1 \");\n    }\n    Sub(String s) {\n        System.out.print(s);\n    }\n}\npublic class TestConstructors {\n    public static void main(String[] args) {\n        new Sub();\n    }\n}",
        "options": [
            "Base Hi Sub1 ",
            "Hi Sub1 Base ",
            "Hi Base Sub1 ",
            "Lỗi biên dịch vì this() và super() xung đột"
        ],
        "correctIndex": 0,
        "explanation": "Khi `new Sub()` được gọi:\n1. Constructor `Sub()` gọi `this(\"Hi \")`.\n2. Constructor `Sub(String s)` không gọi constructor nào khác nên compiler tự động chèn `super()` ở dòng đầu tiên.\n3. `super()` gọi constructor của `Base()`, in ra: `Base `.\n4. Sau khi `Base()` hoàn thành, thân của `Sub(String s)` chạy, in ra: `Hi `.\n5. Cuối cùng, thân của `Sub()` tiếp tục chạy, in ra: `Sub1 `.\n-> Thứ tự in ra: Base Hi Sub1 .",
        "trap": "Luôn nhớ: Constructor cha (`super()`) phải hoàn thành khởi tạo trước khi thân constructor con được chạy."
    },
    {
        "id": "q15",
        "chapter": "Chapter 5: Object Orientation",
        "type": "Java Core",
        "question": "Điều gì xảy ra khi gọi phương thức `static` thông qua đối tượng cha được gán đối tượng con?",
        "code": "class Parent {\n    public static void print() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    public static void print() { System.out.print(\"C \"); }\n}\npublic class StaticHide {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.print();\n        Child c = new Child();\n        c.print();\n    }\n}",
        "options": [
            "C C ",
            "P C ",
            "P P ",
            "Lỗi biên dịch vì phương thức static không thể override"
        ],
        "correctIndex": 1,
        "explanation": "Trong Java, phương thức `static` KHÔNG thể bị override (ghi đè), mà chỉ bị HIDING (che khuất). Việc gọi một static method thông qua biến tham chiếu sẽ được compiler dịch dựa theo KIỂU CỦA THAM CHIẾU lúc biên dịch (Compile-time type) chứ không theo đối tượng thực tế lúc runtime.\n- `p` có kiểu tham chiếu là `Parent` -> `p.print()` gọi `Parent.print()` -> in ra P .\n- `c` có kiểu tham chiếu là `Child` -> `c.print()` gọi `Child.print()` -> in ra C .\n-> Kết quả: P C .",
        "trap": "Static methods không có tính đa hình (Dynamic Binding). JVM gọi trực tiếp theo kiểu tham chiếu."
    },
    {
        "id": "q16",
        "chapter": "Chapter 7: Collections Framework",
        "type": "Java Core",
        "question": "Phát biểu nào sau đây là ĐÚNG khi nói về giá trị `null` trong `HashMap` và `Hashtable`?",
        "code": "// So sánh HashMap vs Hashtable với null:",
        "options": [
            "Cả HashMap và Hashtable đều cho phép 1 key null và nhiều value null.",
            "HashMap cho phép 1 key null và nhiều value null; Hashtable KHÔNG cho phép bất kỳ key hoặc value null nào.",
            "Hashtable cho phép key null nhưng không cho phép value null.",
            "Cả hai đều ném NullPointerException nếu truyền key null."
        ],
        "correctIndex": 1,
        "explanation": "Đặc điểm quan trọng:\n- `HashMap` cho phép lưu DUY NHẤT 1 `null` key (nằm ở bucket 0) và vô số `null` values.\n- `Hashtable` là collection đồng bộ cũ từ Java 1.0, nó KHÔNG CHO PHÉP bất kỳ `null` key nào (gọi `key.hashCode()` gây NPE) và cũng KHÔNG CHO PHÉP `null` value nào. Nếu đưa null vào Hashtable sẽ lập tức ném `NullPointerException`.",
        "trap": "Câu hỏi so sánh cực kỳ hay gặp trong các đề thi tuyển fresher và SCJP."
    },
    {
        "id": "q17",
        "chapter": "Chapter 9: Threads",
        "type": "Java Core",
        "question": "Khác biệt căn bản giữa `Thread.sleep(ms)` và `object.wait(ms)` là gì?",
        "code": "// Điểm khác nhau về giữ khóa (Lock / Monitor)?",
        "options": [
            "`sleep()` giải phóng khóa (releases lock), `wait()` giữ nguyên khóa (holds lock).",
            "`wait()` giải phóng khóa (releases lock) để thread khác có thể vào synchronized block, `sleep()` GIỮ NGUYÊN KHÓA (holds lock).",
            "Cả hai phương thức đều giải phóng khóa.",
            "Cả hai phương thức đều không giải phóng khóa."
        ],
        "correctIndex": 1,
        "explanation": "Quy tắc vàng trong Multi-threading:\n- `Thread.sleep()` tạm dừng luồng hiện tại nhưng VẪN TIẾP TỤC GIỮ KHÓA (Monitor Lock). Không thread nào khác có thể vào khối synchronized mà luồng này đang nắm giữ.\n- `object.wait()` TẠM GIẢI PHÓNG KHÓA (releases the lock) của đối tượng đó và chuyển luồng vào trạng thái chờ cho đến khi được đánh thức bởi `notify()` hoặc `notifyAll()`.",
        "trap": "Nhớ câu thần chú: Wait releases the lock, Sleep holds the lock."
    },
    {
        "id": "q18",
        "chapter": "SQL Queries & Relational DB",
        "type": "Database & SQL",
        "question": "Cho bảng `Products` có 5 dòng, trong đó cột `price` có các giá trị: `10, 20, NULL, 30, NULL`. Kết quả của `SELECT COUNT(*), COUNT(price) FROM Products;` là:",
        "code": "SELECT COUNT(*), COUNT(price) FROM Products;",
        "options": [
            "5, 5",
            "5, 3",
            "3, 3",
            "5, 0"
        ],
        "correctIndex": 1,
        "explanation": "- `COUNT(*)`: Đếm TẤT CẢ các dòng dữ liệu trong bảng, bất kể cột nào có chứa giá trị NULL hay không -> Trả về 5.\n- `COUNT(column_name)`: CHỈ đếm các dòng mà cột đó CÓ GIÁ TRỊ (bỏ qua/không tính các dòng mang giá trị NULL) -> Cột price có 3 giá trị khác NULL -> Trả về 3.\n-> Kết quả: 5, 3.",
        "trap": "Nhiều người nghĩ `COUNT(column)` cũng đếm toàn bộ dòng như `COUNT(*)`. Cột NULL luôn bị bỏ qua trong các hàm tổng hợp như COUNT, SUM, AVG."
    },
    {
        "id": "q19",
        "chapter": "SQL Queries & Relational DB",
        "type": "Database & SQL",
        "question": "Câu lệnh truy vấn nào sau đây dùng để tìm tất cả khách hàng (Customers) CHƯA TỪNG đặt bất kỳ đơn hàng nào (Orders)?",
        "code": "-- Khách hàng chưa từng có đơn hàng nào:",
        "options": [
            "SELECT c.* FROM Customers c INNER JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
            "SELECT c.* FROM Customers c LEFT JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL;",
            "SELECT c.* FROM Customers c RIGHT JOIN Orders o ON c.id = o.customer_id WHERE c.id IS NULL;",
            "SELECT c.* FROM Customers c WHERE c.id IN (SELECT customer_id FROM Orders);"
        ],
        "correctIndex": 1,
        "explanation": "Dùng `LEFT JOIN` để lấy toàn bộ danh sách khách hàng. Với những khách hàng chưa có đơn hàng nào, các cột của bảng `Orders` sẽ mang giá trị NULL. Kết hợp điều kiện `WHERE o.id IS NULL` sẽ lọc ra chính xác các khách hàng không có đơn hàng.",
        "trap": "Dùng `INNER JOIN` sẽ loại bỏ sạch khách hàng chưa có đơn ngay từ bước kết nối bảng."
    },
    {
        "id": "q20",
        "chapter": "Spring Framework",
        "type": "Spring",
        "question": "Scope mặc định của một Bean trong Spring Container là gì? Điều đó có nghĩa là gì?",
        "code": "@Component\npublic class MyService {}\n// Scope mặc định là gì?",
        "options": [
            "prototype (mỗi lần yêu cầu tạo một instance mới)",
            "singleton (chỉ có duy nhất 1 instance được tạo và dùng chung trong toàn bộ Spring Container)",
            "request (tạo mới mỗi HTTP request)",
            "session (tạo mới mỗi HTTP session)"
        ],
        "correctIndex": 1,
        "explanation": "Trong Spring Framework, Scope mặc định của mọi Bean là singleton. Spring IoC Container chỉ khởi tạo duy nhất một thực thể (instance) của bean đó và lưu trong bộ đệm (cache), tất cả các nơi tiêm phụ thuộc (@Autowired) hoặc gọi `getBean()` đều nhận về cùng một đối tượng duy nhất này.",
        "trap": "Nếu bean có trạng thái (stateful - chứa thuộc tính thay đổi theo từng request/user), dùng singleton có thể gây ra race-condition giữa các thread."
    }
]

# Avoid duplicates if already present
existing_ids = {q['id'] for q in quizzes}
for q in additional_quizzes:
    if q['id'] not in existing_ids:
        quizzes.append(q)

with open('data/quizzes.json', 'w', encoding='utf-8') as f:
    json.dump(quizzes, f, ensure_ascii=False, indent=2)

print(f'Final Quiz Questions count: {len(quizzes)}')
