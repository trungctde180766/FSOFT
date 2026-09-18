import json

with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# ====================================================================
# DAY 11: Chapter 5 - Polymorphism, Overriding & Overloading
# ====================================================================
lessons["11"]["chapter"] = "Chapter 5: OOP - Polymorphism & Overriding Rules"
lessons["11"]["estimatedTime"] = "3h 30m"
lessons["11"]["difficulty"] = "⭐⭐⭐⭐"
lessons["11"]["priority"] = "🔴 MUST KNOW (Trọng Tâm Số 1 Của SCJP & Audit FPT)"
lessons["11"]["source"] = "SCJP Chapter 5 (Ch05.pdf) & TestKing"
lessons["11"]["objectives"] = [
    "Thuộc lòng 4 quy tắc vàng khi Override phương thức.",
    "Hiểu sâu tính năng Covariant Return Type từ Java 5 (kiểu con trả về kiểu con).",
    "Phân biệt Method Overriding (Dynamic dispatch tại Runtime) vs Method Overloading (Static binding tại Compile-time).",
    "Giải thích hiện tượng Method Hiding khi khai báo phương thức static ở cả class cha và con."
]
lessons["11"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: 4 Quy Tắc Vàng Của Method Overriding",
        "sourceRef": "SCJP Objective 5.2 (Ch05.pdf, Page 12-28)",
        "theory": """
Khi class con ghi đè phương thức từ class cha, compiler kiểm tra nghiêm ngặt 4 quy tắc:

#### 1. Quy tắc Danh sách Tham số (Argument List):
- Danh sách tham số phải **GIỐNG HỆT 100%** phương thức cha (cùng số lượng, cùng kiểu dữ liệu, cùng thứ tự).
- Nếu khác tham số $\\rightarrow$ Biến thành **Overloading** chứ không phải Overriding!

#### 2. Quy tắc Kiểu Trả Về (Return Type - Covariant Return):
- Từ Java 5 trở đi, kiểu trả về của method con có thể là **Covariant Return Type** (nghĩa là cùng kiểu hoặc là một **kiểu con** của kiểu trả về ở cha).
- Ví dụ: Cha trả về `Object`, con có thể trả về `String`. Cha trả về `Animal`, con có thể trả về `Dog`.

#### 3. Quy tắc Quyền Truy Cập (Access Level):
- Quyền truy cập của con **TUYỆT ĐỐI KHÔNG ĐƯỢC HẸP HƠN** cha:
  - Cha là `public` $\\to$ Con bắt buộc phải là `public`.
  - Cha là `protected` $\\to$ Con có thể là `protected` hoặc `public` (không được `default` hay `private`).
  - Cha là `default` $\\to$ Con có thể là `default`, `protected`, hoặc `public`.

#### 4. Quy tắc Ngoại Lệ (Exception Rule):
- Con **KHÔNG ĐƯỢC NÉM RA** ngoại lệ Checked mới hoặc rộng hơn cha!
- Con có thể: Không throw gì cả, hoặc chỉ throw ngoại lệ con hẹp hơn, hoặc throw bất kỳ Unchecked Exception nào (RuntimeException).
""",
        "code": """class Animal {
    protected Animal reproduce() throws Exception {
        return new Animal();
    }
    public static void test() { System.out.println("Animal static"); }
}

class Dog extends Animal {
    // Override hợp lệ với Covariant return (Dog là con Animal) và thu hẹp Exception!
    @Override
    public Dog reproduce() throws java.io.IOException {
        return new Dog();
    }
    
    // Method Hiding: Không phải override!
    public static void test() { System.out.println("Dog static"); }
}"""
    },
    {
        "id": "partB",
        "title": "Part B: Method Hiding & Đa Hình Runtime",
        "sourceRef": "SCJP Objective 5.2 (Ch05.pdf, Page 30-40)",
        "theory": """
#### 1. Tại sao không thể Override static method?
- Trong Java, phương thức `static` được liên kết tĩnh tại thời điểm biên dịch (**Compile-time Binding**) dựa vào **kiểu của biến tham chiếu**.
- Nếu cả cha và con cùng định nghĩa `public static void doWork()`, đây gọi là **Method Hiding (Ẩn phương thức)**.
- Khi gọi `Animal a = new Dog(); a.doWork();` $\\to$ JVM sẽ chạy hàm của `Animal` (dựa trên kiểu biến tham chiếu lúc compile), hoàn toàn không có tính đa hình Runtime!

#### 2. Đa hình phương thức instance (Dynamic Method Dispatch):
- Khi gọi `Animal a = new Dog(); a.makeSound();` (với makeSound là instance method) $\\to$ JVM sẽ tra cứu trên Heap và chạy hàm của đối tượng thực tế `Dog` lúc Runtime!
""",
        "code": """Animal a = new Dog();
a.test(); // IN RA: "Animal static" (Method Hiding - chạy theo kiểu biến Animal!)
a.reproduce(); // Chạy hàm của Dog (Đa hình Runtime!)"""
    }
]

lessons["11"]["codeTracing"] = [
    {
        "id": "ct_d11_1",
        "level": "Hard",
        "question": "Chương trình sau in ra kết quả gì?",
        "code": """class Parent {
    int x = 10;
    void print() { System.out.print("P:" + x + " "); }
}
class Child extends Parent {
    int x = 20;
    void print() { System.out.print("C:" + x + " "); }
}
public class PolyTest {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.x + " ");
        p.print();
    }
}""",
        "options": ["10 C:20 ", "20 C:20 ", "10 P:10 ", "20 P:10 "],
        "correctIndex": 0,
        "explanation": "1. Trong Java, **thuộc tính (fields) KHÔNG CÓ ĐA HÌNH** (Field Shadowing). Biểu thức `p.x` được phân giải tại compile-time theo kiểu của biến tham chiếu `Parent`, do đó `p.x` lấy giá trị `10`.\n2. Ngược lại, **phương thức (methods) có tính Đa Hình Runtime**. Lời gọi `p.print()` sẽ thực thi phiên bản của đối tượng thực tế trên Heap là `Child`, in ra `C:20 `.\n-> Kết quả in ra: `10 C:20 `."
    }
]

lessons["11"]["examTraps"] = [
    {
        "trap": "Thuộc tính (Variables) không có tính Đa hình (Polymorphism)",
        "whyPeopleWrong": "Tưởng rằng cả biến và phương thức đều được đa hình lúc runtime.",
        "wrongThinking": "Nghĩ rằng Parent p = new Child(); p.x sẽ lấy giá trị x của Child.",
        "correctRule": "Đa hình trong Java CHỈ ÁP DỤNG CHO INSTANCE METHODS. Việc truy cập biến tham chiếu (fields) luôn dựa vào kiểu khai báo của biến tại Compile-time.",
        "code": "Parent p = new Child();\nSystem.out.println(p.x); // Luôn lấy x của Parent!",
        "miniCheck": "Thấy truy cập thuộc tính .x trên biến cha trỏ con thì kết quả luôn là giá trị ở class Cha!"
    }
]

lessons["11"]["dailyAssessment"] = [
    {
        "id": "da_11_1",
        "q": "Class Cha khai báo: `protected void doStuff() throws IOException`. Class Con khai báo nào sau đây là OVERRIDE HỢP LỆ?",
        "options": [
            "public void doStuff()",
            "void doStuff() throws IOException",
            "protected void doStuff() throws Exception",
            "private void doStuff()"
        ],
        "correct": 0,
        "exp": "Quyền truy cập của con có thể mở rộng thành 'public' (rộng hơn protected) và con có quyền không ném ngoại lệ nào cả. Phương án 2 bị lỗi vì quyền default hẹp hơn protected; phương án 3 bị lỗi vì ném Exception rộng hơn IOException."
    }
]

# ====================================================================
# DAY 15: Chapter 6 - String, StringBuffer & Immutability
# ====================================================================
lessons["15"]["chapter"] = "Chapter 6: String, StringBuffer, Immutability"
lessons["15"]["estimatedTime"] = "3h 30m"
lessons["15"]["difficulty"] = "⭐⭐⭐"
lessons["15"]["priority"] = "🔴 MUST KNOW (Trọng Tâm SCJP & Phỏng Vấn)"
lessons["15"]["source"] = "SCJP Chapter 6 (Ch06.pdf) & TestKing"
lessons["15"]["objectives"] = [
    "Hiểu sâu tính bất biến (Immutability) của String và cấu trúc String Constant Pool.",
    "Phân biệt 'new String()' (tạo object Heap) vs 'literal' (lưu trong Pool) và hàm intern().",
    "Phân biệt String vs StringBuffer (synchronized) vs StringBuilder (non-synchronized, hiệu năng cao).",
    "Làm chủ các phương thức cốt lõi: substring, indexOf, trim, replace, charAt."
]
lessons["15"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Tính Bất Biến & String Constant Pool",
        "sourceRef": "SCJP Objective 6.1 (Ch06.pdf, Page 4-18)",
        "theory": """
#### 1. Tính Bất Biến (Immutability):
- Một khi đối tượng `String` đã được tạo ra trong bộ nhớ, nội dung của nó **hoàn toàn không thể thay đổi**.
- Các phương thức như `concat()`, `toUpperCase()`, `replace()` đều **TẠO VÀ TRẢ VỀ MỘT ĐỐI TƯỢNG STRING HOÀN TOÀN MỚI**, đối tượng ban đầu giữ nguyên 100%!
- Ví dụ: `String s = \"abc\"; s.concat(\"def\");` $\\rightarrow$ Nếu không gán `s = s.concat(...)`, thì `s` vẫn là `\"abc\"`!

#### 2. String Constant Pool & intern():
- `String s1 = \"Java\";`: JVM tìm trong Pool. Nếu chưa có, tạo 1 đối tượng trong Pool.
- `String s2 = \"Java\";`: Tái sử dụng đối tượng có sẵn trong Pool $\\to$ `s1 == s2` là **`true`**!
- `String s3 = new String(\"Java\");`: Bắt buộc tạo một đối tượng mới trên Heap độc lập với Pool $\\to$ `s1 == s3` là **`false`**!
- `s3.intern()`: Trả về tham chiếu của chuỗi tương ứng nằm trong Pool $\\to$ `s1 == s3.intern()` là **`true`**!
""",
        "code": """String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1 == s2); // true (Cùng trỏ vào String Pool)
System.out.println(s1 == s3); // false (s3 nằm ngoài Heap độc lập)
System.out.println(s1.equals(s3)); // true (So sánh nội dung)
System.out.println(s1 == s3.intern()); // true (intern lấy tham chiếu trong Pool)

String text = "abc";
text.concat("def");
System.out.println(text); // In ra "abc" vì String bất biến!"""
    }
]

lessons["15"]["codeTracing"] = [
    {
        "id": "ct_d15_1",
        "level": "Medium",
        "question": "Chương trình sau in ra bao nhiêu đối tượng String được tạo ra trên bộ nhớ?",
        "code": """public class StringPoolTrace {
    public static void main(String[] args) {
        String s1 = "FPT";
        String s2 = "FPT";
        String s3 = new String("FPT");
        String s4 = s1 + " Software";
    }
}""",
        "options": ["3 đối tượng", "4 đối tượng", "2 đối tượng", "5 đối tượng"],
        "correctIndex": 0,
        "explanation": "1. `String s1 = \"FPT\";`: Tạo 1 chuỗi 'FPT' trong String Pool.\n2. `String s2 = \"FPT\";`: Dùng lại chuỗi trong Pool (không tạo mới).\n3. `String s3 = new String(\"FPT\");`: Tạo 1 đối tượng String mới trên Heap (lưu ý chuỗi 'FPT' đã có trong pool nên chỉ tạo 1 object trên Heap).\n4. `s4 = s1 + \" Software\"`: ' Software' tạo 1 chuỗi trong pool, kết quả nối tạo 1 chuỗi 'FPT Software' trên Heap.\nTổng cộng 3 đối tượng độc lập được cấp phát."
    }
]

lessons["15"]["examTraps"] = [
    {
        "trap": "Quên hứng giá trị trả về của phương thức String",
        "whyPeopleWrong": "Quen với việc các phương thức của List/Set làm thay đổi trực tiếp đối tượng.",
        "wrongThinking": "Tưởng rằng str.trim() hoặc str.toUpperCase() sẽ tự động thay đổi chuỗi str hiện tại.",
        "correctRule": "String là Immutable. Mọi phương thức xử lý chuỗi đều trả về một String mới. Muốn cập nhật bắt buộc phải gán lại: str = str.trim();",
        "code": "String s = \" a \";\ns.trim();\nSystem.out.println(s.length()); // Vẫn in ra 3 (Chưa được gán lại!)",
        "miniCheck": "Xem sau khi gọi hàm String có phép gán dấu '=' hay không!"
    }
]

lessons["15"]["dailyAssessment"] = [
    {
        "id": "da_15_1",
        "q": "Xét 2 phát biểu sau về StringBuffer và StringBuilder:\n(1) StringBuffer có các phương thức synchronized nên an toàn trong môi trường đa luồng.\n(2) StringBuilder có hiệu năng xử lý chuỗi nhanh hơn StringBuffer trong môi trường đơn luồng.\nKhẳng định nào đúng?",
        "options": [
            "Cả (1) và (2) đều đúng",
            "Chỉ (1) đúng",
            "Chỉ (2) đúng",
            "Cả (1) và (2) đều sai"
        ],
        "correct": 0,
        "exp": "Cả hai khẳng định đều hoàn toàn chính xác theo đặc tả Java. StringBuffer an toàn đa luồng nhưng chậm hơn, StringBuilder không synchronized nên nhanh hơn và được khuyến khích dùng đơn luồng."
    }
]

# ====================================================================
# DAY 18: Chapter 7 - HashMap, Hashing & equals/hashCode Contract
# ====================================================================
lessons["18"]["chapter"] = "Chapter 7: Collections Framework (Phần 2) & Hashing"
lessons["18"]["estimatedTime"] = "3h 30m"
lessons["18"]["difficulty"] = "⭐⭐⭐⭐"
lessons["18"]["priority"] = "🔴 MUST KNOW (Trọng Tâm Audit & Phỏng Vấn)"
lessons["18"]["source"] = "SCJP Chapter 7 (ch07.pdf) & TestKing"
lessons["18"]["objectives"] = [
    "Hiểu sâu cơ chế bảng băm (Hash Table) và xử lý va chạm (Collision) trong HashMap.",
    "Nắm vững Hợp đồng bất biến giữa equals() và hashCode().",
    "Giải thích hiện tượng rò rỉ bộ nhớ (Memory Leak) hoặc mất dữ liệu khi dùng sai hashCode trong HashSet/HashMap.",
    "Phân biệt Comparable (tự nhiên) vs Comparator (linh hoạt)."
]
lessons["18"]["parts"] = [
    {
        "id": "partA",
        "title": "Part A: Hợp Đồng Bất Biến Giữa equals() và hashCode()",
        "sourceRef": "SCJP Objective 6.2 & 6.3 (ch07.pdf, Page 15-32)",
        "theory": """
#### 1. Bản chất của hàm hashCode():
- `hashCode()` trả về một số nguyên `int` đại diện cho giá trị băm của đối tượng.
- HashMap và HashSet dùng `hashCode()` để tính toán vị trí ngăn chứa (**Bucket**) lưu trữ đối tượng: `bucketIndex = hash(key) & (capacity - 1)`.

#### 2. HỢP ĐỒNG BẮT BUỘC GIỮA EQUALS & HASHCODE:
1. **Nếu `obj1.equals(obj2) == true`**: Thì **BẮT BUỘC `obj1.hashCode() == obj2.hashCode()`**! (Hai đối tượng bình đẳng về nội dung thì bắt buộc phải có cùng mã băm).
2. **Nếu `obj1.hashCode() == obj2.hashCode()`**: Thì `obj1.equals(obj2)` **CÓ THỂ TRUE HOẶC FALSE** (đây là hiện tượng đụng độ mã băm - **Hash Collision**).
3. **Tính nhất quán (Consistency)**: Trong suốt vòng đời ứng dụng, nếu thuộc tính dùng để so sánh của object không đổi thì `hashCode()` gọi bao nhiêu lần cũng phải trả về cùng 1 số.

#### 3. Thảm họa khi chỉ Override equals mà quên hashCode:
- Nếu bạn tạo 2 đối tượng `Student s1 = new Student(101, \"An\");` và `Student s2 = new Student(101, \"An\");`.
- Đã override `equals()` nên `s1.equals(s2)` là `true`.
- Bạn đưa `map.put(s1, \"Score A\");`.
- Khi gọi `map.get(s2)`: Do chưa override `hashCode()`, class Object tính hash dựa trên địa chỉ RAM. `s2` sinh ra hash khác `s1`, HashMap tìm ở bucket khác và trả về **`null`**!
""",
        "code": """public class Student {
    private int id;
    private String name;

    public Student(int id, String name) { this.id = id; this.name = name; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student s = (Student) o;
        return id == s.id && Objects.equals(name, s.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name); // BẮT BUỘC PHẢI OVERRIDE CÙNG NHAU!
    }
}"""
    }
]

lessons["18"]["codeTracing"] = [
    {
        "id": "ct_d18_1",
        "level": "Hard",
        "question": "Đoạn code sau in ra màn hình giá trị kích thước của set là bao nhiêu?",
        "code": """import java.util.*;

class Item {
    int id;
    Item(int id) { this.id = id; }
    public boolean equals(Object o) {
        return (o instanceof Item) && ((Item)o).id == this.id;
    }
    // Không override hashCode()!
}

public class HashTrace {
    public static void main(String[] args) {
        Set<Item> set = new HashSet<>();
        set.add(new Item(1));
        set.add(new Item(1));
        System.out.println(set.size());
    }
}""",
        "options": ["2", "1", "0", "Compile Error"],
        "correctIndex": 0,
        "explanation": "Do class Item chỉ override `equals()` mà KHÔNG override `hashCode()`, hai đối tượng `new Item(1)` sử dụng hàm hashCode mặc định của class `Object` (dựa trên địa chỉ bộ nhớ). Hai đối tượng có hai mã băm khác nhau nên rơi vào hai bucket khác nhau trong HashSet. HashSet không cần so sánh equals và chấp nhận cả hai! Do đó kích thước in ra là 2."
    }
]

lessons["18"]["examTraps"] = [
    {
        "trap": "Sửa đổi thuộc tính của đối tượng sau khi đã đưa vào HashSet/HashMap",
        "whyPeopleWrong": "Nghĩ rằng Set sẽ tự động cập nhật lại vị trí của object khi thuộc tính thay đổi.",
        "wrongThinking": "Tưởng rằng set.contains(obj) hoặc set.remove(obj) vẫn hoạt động bình thường sau khi sửa thuộc tính.",
        "correctRule": "Khi sửa thuộc tính của đối tượng, mã hashCode của nó bị đổi. HashSet sẽ tìm ở bucket mới dựa trên hash mới và không thấy object đó! Kết quả là không thể xóa được object cũ, gây rò rỉ bộ nhớ (Memory Leak).",
        "code": "Person p = new Person(\"Nam\");\nset.add(p);\np.setName(\"Lan\"); // Sửa thuộc tính!\nSystem.out.println(set.contains(p)); // IN RA FALSE!",
        "miniCheck": "Luôn dùng các thuộc tính bất biến (Immutable như id final) để làm key trong HashMap/HashSet."
    }
]

lessons["18"]["dailyAssessment"] = [
    {
        "id": "da_18_1",
        "q": "Nếu hai đối tượng a và b trong Java có `a.hashCode() == b.hashCode()`, điều này khẳng định điều gì?",
        "options": [
            "Hai đối tượng có thể equals hoặc không equals (xảy ra va chạm hash collision)",
            "Chắc chắn a.equals(b) phải là true",
            "Chắc chắn a.equals(b) phải là false",
            "JVM sẽ ném ngoại lệ IllegalStateException"
        ],
        "correct": 0,
        "exp": "Theo hợp đồng, hai đối tượng có cùng hashCode có thể bằng nhau hoặc khác nhau (gọi là Hash Collision). Nhưng nếu equals là true thì bắt buộc hashCode phải bằng nhau."
    }
]

# Save back to daily_lessons.json
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Enriched Day 11, Day 15, Day 18 with deep master curriculum!")
