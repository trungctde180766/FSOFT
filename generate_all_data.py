import json
import os

os.makedirs('data', exist_ok=True)

# Run existing roadmap generator first
import build_data

# 2. Flashcards Database (100+ Cards across all domains)
flashcards = [
    # Java Core: Chapter 1 - Language Fundamentals
    {
        "id": "fc_j1_1",
        "category": "Java Core: Ch1 Fundamentals",
        "tag": "Primitives",
        "question": "Trong Java, giá trị mặc định (default value) của biến cục bộ (local variable) là gì?",
        "answer": "KHÔNG CÓ giá trị mặc định! Biến cục bộ trong phương thức BẮT BUỘC phải được khởi tạo (initialize) trước khi sử dụng, nếu không trình biên dịch sẽ báo lỗi: `variable x might not have been initialized`.",
        "code": "public void test() {\n    int x;\n    // System.out.println(x); // COMPILE ERROR!\n    x = 10;\n    System.out.println(x); // OK: in ra 10\n}",
        "trap": "Chỉ có instance variable (thuộc tính của object) và static variable mới có giá trị mặc định (0, 0.0, false, null)."
    },
    {
        "id": "fc_j1_2",
        "category": "Java Core: Ch1 Fundamentals",
        "tag": "Primitives",
        "question": "Kiểu `byte` trong Java có kích thước bao nhiêu bit và khoảng giá trị (range) là bao nhiêu?",
        "answer": "Kích thước: 8-bit (1 byte), có dấu (signed 2's complement).\nKhoảng giá trị: từ -128 đến +127 (`-2^7` đến `2^7 - 1`).",
        "code": "byte b1 = 127; // OK\n// byte b2 = 128; // COMPILE ERROR: possible loss of precision\nbyte b3 = (byte) 128; // OK: ép kiểu -> b3 = -128 (tràn số)",
        "trap": "Giá trị 128 vượt quá giới hạn byte, nếu không ép kiểu tường minh sẽ bị Compile Error."
    },
    {
        "id": "fc_j1_3",
        "category": "Java Core: Ch1 Fundamentals",
        "tag": "Arrays",
        "question": "Khai báo mảng `int[] arr = new int[5];` thì các phần tử bên trong có giá trị mặc định là gì?",
        "answer": "Dù mảng được tạo bên trong phương thức (local), các phần tử của mảng luôn được cấp phát trên Heap và tự động nhận giá trị mặc định của kiểu dữ liệu phần tử đó (đối với `int` là `0`, đối với boolean là `false`, đối với Object là `null`).",
        "code": "int[] arr = new int[3];\nSystem.out.println(arr[0]); // In ra 0 (Hợp lệ, không lỗi compile)",
        "trap": "Bản thân biến tham chiếu `arr` nếu là local thì phải gán mới dùng được, nhưng các phần tử `arr[i]` bên trong mảng luôn có default value."
    },
    {
        "id": "fc_j1_4",
        "category": "Java Core: Ch1 Fundamentals",
        "tag": "Main Method",
        "question": "Chữ ký hợp lệ của phương thức `main` để JVM có thể khởi chạy chương trình là gì?",
        "answer": "Bắt buộc: `public static void main(String[] args)` (hoặc `String... args` từ Java 5).\nThứ tự `public static` hoặc `static public` đều hợp lệ. Tên mảng tham số có thể đặt tùy ý.",
        "code": "static public void main(String... arguments) { // Hoàn toàn hợp lệ! }\n// private static void main(...) // Biên dịch được nhưng JVM không chạy được",
        "trap": "Nếu thiếu `public` hoặc `static` hoặc kiểu trả về khác `void`, mã vẫn biên dịch bình thường nhưng khi chạy bằng lệnh `java` sẽ báo lỗi `Main method not found`."
    },

    # Java Core: Chapter 2 - Declarations & Access Control
    {
        "id": "fc_j2_1",
        "category": "Java Core: Ch2 Declarations",
        "tag": "Access Modifiers",
        "question": "Modifier `protected` cho phép truy cập từ những phạm vi nào?",
        "answer": "1. Trong cùng class.\n2. Bất kỳ class nào trong CÙNG PACKAGE (giống default).\n3. Các SUBCLASS (class con) ở KHÁC PACKAGE, NHƯNG chỉ truy cập được thông qua tính kế thừa (inheritance - qua tham chiếu của chính class con đó hoặc `super`), KHÔNG thể truy cập qua tham chiếu của class cha.",
        "code": "// Package p1\npublic class Parent { protected int x = 10; }\n// Package p2\npublic class Child extends Parent {\n    void test() {\n        System.out.println(this.x); // OK via inheritance\n        Parent p = new Parent();\n        // System.out.println(p.x); // COMPILE ERROR!\n    }\n}",
        "trap": "Bẫy kinh điển: Class con ở khác package truy cập `protected` thông qua `parentRef.x` sẽ bị lỗi biên dịch!"
    },
    {
        "id": "fc_j2_2",
        "category": "Java Core: Ch2 Declarations",
        "tag": "Interface",
        "question": "Các biến (variables) và phương thức (methods) khai báo trong Interface có modifier ngầm định là gì?",
        "answer": "- Biến: LUÔN LUÔN ngầm định là `public static final` (hằng số). Không thể khai báo `private`, `protected`, hay thay đổi giá trị.\n- Phương thức (trước Java 8): LUÔN LUÔN ngầm định là `public abstract`.",
        "code": "interface Printable {\n    int MAX = 100; // Ngầm định là: public static final int MAX = 100;\n    void print();  // Ngầm định là: public abstract void print();\n}",
        "trap": "Class implement interface khi override phương thức BẮT BUỘC phải ghi rõ modifier `public`. Nếu quên `public` (để default), compiler sẽ báo lỗi: `attempting to assign weaker access privileges; was public`."
    },
    {
        "id": "fc_j2_3",
        "category": "Java Core: Ch2 Declarations",
        "tag": "Class Rules",
        "question": "Trong một file mã nguồn Java (.java), có thể có bao nhiêu `public class`?",
        "answer": "Chỉ được phép có TỐI ĐA 1 `public class`, và tên file bắt buộc phải trùng khớp chính xác với tên của `public class` đó. Tuy nhiên, có thể có vô số các non-public (default) class trong cùng file.",
        "code": "// File: Test.java\npublic class Test {} // Bắt buộc trùng tên file\nclass Helper1 {}     // Hợp lệ\nclass Helper2 {}     // Hợp lệ\n// public class Extra {} // COMPILE ERROR: class Extra is public, should be declared in Extra.java",
        "trap": "Nếu file không có public class nào thì tên file có thể đặt tùy ý."
    },

    # Java Core: Chapter 3 - Operators & Assignments
    {
        "id": "fc_j3_1",
        "category": "Java Core: Ch3 Operators",
        "tag": "Short-Circuit",
        "question": "Toán tử short-circuit `&&` khác gì toán tử bitwise/logical `&`?",
        "answer": "- `&&` (Short-circuit): Nếu vế trái đánh giá ra `false`, JVM sẽ BỎ QUA không thực thi vế phải (vì kết quả chắc chắn là `false`).\n- `&` (Non-short-circuit): BẮT BUỘC tính toán cả hai vế bất kể vế trái là gì.",
        "code": "int x = 5;\nif (false && ++x > 5) {} \nSystem.out.println(x); // In ra 5 (vế phải không chạy)\n\nif (false & ++x > 5) {}\nSystem.out.println(x); // In ra 6 (vế phải VẪN CHẠY!)",
        "trap": "Rất hay bị TestKing gài biểu thức tăng giảm (`++x`, `x--`) nằm ở vế phải của toán tử `&&` hoặc `||`."
    },
    {
        "id": "fc_j3_2",
        "category": "Java Core: Ch3 Operators",
        "tag": "Increment",
        "question": "Kết quả in ra của đoạn mã sau là gì?\n`int x = 1; x = x++; System.out.println(x);`",
        "answer": "Kết quả in ra là `1`!\nGiải thích: Postfix `x++` lưu giá trị cũ của `x` (là 1) vào bộ đệm tạm thời, sau đó tăng `x` lên 2, nhưng cuối cùng phép gán `=` lại gán giá trị từ bộ đệm (1) đè lại vào `x`.",
        "code": "int x = 1;\nx = x++;\nSystem.out.println(x); // In ra 1!",
        "trap": "Đừng nhầm tưởng x sẽ bằng 2. Phép gán `=` sẽ ghi đè kết quả của phép tăng postfix."
    },
    {
        "id": "fc_j3_3",
        "category": "Java Core: Ch3 Operators",
        "tag": "Casting & Promotion",
        "question": "Biểu thức sau có biên dịch được không?\n`byte b1 = 10; byte b2 = 20; byte b3 = b1 + b2;`",
        "answer": "COMPILE ERROR!\nGiải thích: Trong Java, mọi phép toán số học (+, -, *, /) với kiểu nhỏ hơn `int` (như byte, short, char) đều tự động được nâng kiểu (numeric promotion) lên kiểu `int`. Kết quả của `b1 + b2` là kiểu `int`, gán lại cho `byte` sẽ gây lỗi mất mát độ chính xác.",
        "code": "byte b1 = 10, b2 = 20;\n// byte b3 = b1 + b2; // COMPILE ERROR: Type mismatch: cannot convert from int to byte\nbyte b3 = (byte)(b1 + b2); // OK: phải ép kiểu tường minh",
        "trap": "Toán tử gán kết hợp (`b1 += b2`) lại tự động ép kiểu ngầm định `b1 = (byte)(b1 + b2)` nên biên dịch được!"
    },

    # Java Core: Chapter 4 - Flow Control & Exceptions
    {
        "id": "fc_j4_1",
        "category": "Java Core: Ch4 Flow & Exceptions",
        "tag": "Exceptions",
        "question": "Khối `finally` có LUÔN LUÔN được thực thi không? Khi nào `finally` KHÔNG chạy?",
        "answer": "Khối `finally` hầu như luôn luôn chạy (kể cả khi trong `try` hoặc `catch` có lệnh `return`).\n`finally` CHỈ KHÔNG chạy khi:\n1. Gọi `System.exit(0);` để tắt JVM.\n2. JVM bị crash (Fatal Error, OutOfMemoryError không thể phục hồi, mất điện phần cứng).",
        "code": "public static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n// test() sẽ trả về 2! Return trong finally ghi đè return trong try!",
        "trap": "Bẫy return trong finally: nếu finally có return, nó sẽ nuốt luôn exception hoặc giá trị return ở try!"
    },
    {
        "id": "fc_j4_2",
        "category": "Java Core: Ch4 Flow & Exceptions",
        "tag": "Switch",
        "question": "Trong Java trước Java 7, câu lệnh `switch` hỗ trợ những kiểu dữ liệu nào?",
        "answer": "Chỉ hỗ trợ kiểu nguyên tương thích với `int`:\n1. `byte` (và Byte wrapper)\n2. `short` (và Short wrapper)\n3. `char` (và Character wrapper)\n4. `int` (và Integer wrapper)\n5. `enum` (từ Java 5)\n*Từ Java 7 bổ sung `String`. Tuyệt đối KHÔNG hỗ trợ: `long`, `float`, `double`, `boolean`.",
        "code": "long num = 10L;\n// switch (num) {} // COMPILE ERROR: Cannot switch on a value of type long.",
        "trap": "TestKing rất hay cho biến kiểu `long`, `float` hoặc `boolean` vào biểu thức `switch` để gài thí sinh."
    },

    # Java Core: Chapter 5 - Object Orientation
    {
        "id": "fc_j5_1",
        "category": "Java Core: Ch5 OOP",
        "tag": "Overriding vs Overloading",
        "question": "Nêu 4 quy tắc bắt buộc khi Override một phương thức trong Java?",
        "answer": "1. Tên phương thức và danh sách tham số (Method Signature) phải GIỐNG HỆT.\n2. Kiểu trả về phải GIỐNG HỆT hoặc là kiểu con (Covariant Return Type từ Java 5).\n3. Access modifier KHÔNG ĐƯỢC HẸP HƠN phương thức ở class cha (ví dụ cha là `protected` thì con chỉ có thể là `protected` hoặc `public`).\n4. KHÔNG ĐƯỢC ném (throw) Checked Exception mới hoặc rộng hơn so với phương thức cha.",
        "code": "class Parent {\n    protected Number getVal() throws IOException { return 1; }\n}\nclass Child extends Parent {\n    public Integer getVal() { return 2; } // Hoàn toàn hợp lệ! (public rộng hơn, Integer là con Number, không ném exception)\n}",
        "trap": "Nếu phương thức con ném thêm `Exception` (rộng hơn `IOException`), compiler sẽ báo lỗi ngay lập tức."
    },
    {
        "id": "fc_j5_2",
        "category": "Java Core: Ch5 OOP",
        "tag": "Polymorphism",
        "question": "Tính đa hình (Polymorphism) áp dụng cho biến thuộc tính (fields) hay phương thức (methods)?",
        "answer": "CHỈ ÁP DỤNG CHO INSTANCE METHODS!\nThuộc tính (fields/variables) và static methods KHÔNG CÓ tính đa hình (bị ẩn - hidden, chứ không override). Biến nào được truy cập sẽ phụ thuộc hoàn toàn vào KIỂU CỦA THAM CHIẾU lúc biên dịch (Reference Type), chứ không phụ thuộc vào đối tượng thực tế lúc chạy.",
        "code": "class Parent { int x = 10; }\nclass Child extends Parent { int x = 20; }\n\nParent p = new Child();\nSystem.out.println(p.x); // In ra 10! (Theo kiểu tham chiếu Parent, KHÔNG đa hình)",
        "trap": "Bẫy cực kỳ phổ biến trong TestKing: `Parent p = new Child(); System.out.println(p.x);` luôn lấy biến của Parent."
    },
    {
        "id": "fc_j5_3",
        "category": "Java Core: Ch5 OOP",
        "tag": "Constructors",
        "question": "Khi nào trình biên dịch (Compiler) tự động tạo Default Constructor (constructor không tham số) cho một class?",
        "answer": "CHỈ KHI lập trình viên KHÔNG TỰ VIẾT BẤT KỲ CONSTRUCTOR NÀO trong class!\nNếu đã viết bất kỳ constructor nào (kể cả có tham số), compiler sẽ KHÔNG tự tạo constructor rỗng nữa.",
        "code": "class Parent {\n    Parent(int x) {} // Có constructor có tham số\n}\n// class Child extends Parent {} // COMPILE ERROR!\n// Lỗi: Implicit super constructor Parent() is undefined for default constructor.",
        "trap": "Class con nếu không viết constructor thì constructor ngầm định của nó sẽ tự gọi `super()`. Nếu class cha không có constructor không tham số thì sẽ lỗi biên dịch."
    },

    # Java Core: Chapter 6 - String, Wrapper & Math
    {
        "id": "fc_j6_1",
        "category": "Java Core: Ch6 String & Wrapper",
        "tag": "String Pool",
        "question": "Đoạn mã sau tạo ra bao nhiêu đối tượng trên bộ nhớ?\n`String s = new String(\"Hello\");`",
        "answer": "Tạo ra 1 hoặc 2 đối tượng:\n1. Literal `\"Hello\"` được tạo và lưu trong String Constant Pool (nếu trước đó pool chưa có chuỗi này).\n2. Từ khóa `new` luôn luôn tạo ra một đối tượng String mới tinh nằm trên Heap độc lập.\n(Nếu chuỗi \"Hello\" đã có sẵn trong String Pool thì chỉ tạo 1 object mới trên Heap).",
        "code": "String s1 = \"Hello\"; // Tạo 1 object trong Pool\nString s2 = new String(\"Hello\"); // Tạo 1 object mới trên Heap\nSystem.out.println(s1 == s2);      // false (khác địa chỉ)\nSystem.out.println(s1.equals(s2)); // true (cùng nội dung)",
        "trap": "Toán tử `==` so sánh địa chỉ tham chiếu bộ nhớ. Phương thức `equals()` của String so sánh nội dung các ký tự."
    },
    {
        "id": "fc_j6_2",
        "category": "Java Core: Ch6 String & Wrapper",
        "tag": "Integer Cache",
        "question": "Kết quả của đoạn code sau là gì?\n`Integer a = 100, b = 100; System.out.println(a == b);`\n`Integer c = 200, d = 200; System.out.println(c == d);`",
        "answer": "In ra: `true` sau đó `false`!\nGiải thích: Java có cơ chế **Integer Cache** tự động lưu sẵn các đối tượng Integer có giá trị từ **-128 đến 127** khi autoboxing. Với 100, cả `a` và `b` đều trỏ vào cùng 1 object trong cache -> `a == b` là `true`. Với 200 (vượt quá 127), Java tạo 2 object mới riêng biệt trên Heap -> `c == d` là `false`.",
        "code": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)",
        "trap": "Bẫy autoboxing so sánh `==` giữa các Wrapper object. Luôn dùng `.equals()` khi so sánh đối tượng."
    },

    # Java Core: Chapter 7 - Collections Framework
    {
        "id": "fc_j7_1",
        "category": "Java Core: Ch7 Collections",
        "tag": "List vs Set vs Map",
        "question": "Phân biệt List, Set, Map về: Cho phép trùng lặp (Duplicate) và Thứ tự (Ordering)?",
        "answer": "- **List**: Cho phép trùng lặp (Duplicate: YES). Có thứ tự theo chỉ số chèn (Ordered by index: YES).\n- **Set**: KHÔNG cho phép trùng lặp (Duplicate: NO). HashSet không bảo toàn thứ tự, TreeSet sắp xếp theo giá trị, LinkedHashSet theo thứ tự chèn.\n- **Map**: Lưu theo Key-Value. Key KHÔNG được trùng lặp, Value được trùng lặp. Map KHÔNG kế thừa từ `Collection` interface.",
        "code": "List<String> list = new ArrayList<>(); // Cho phép lặp\nSet<String> set = new HashSet<>();     // Loại bỏ phần tử trùng lặp\nMap<String, Integer> map = new HashMap<>(); // Key duy nhất",
        "trap": "Map KHÔNG nằm trong Collection hierarchy (Map không implement Collection, không có phương thức add/iterator trực tiếp)."
    },
    {
        "id": "fc_j7_2",
        "category": "Java Core: Ch7 Collections",
        "tag": "equals & hashCode",
        "question": "Hợp đồng (Contract) giữa phương thức `equals()` và `hashCode()` quy định điều gì?",
        "answer": "1. Nếu hai object `o1.equals(o2) == true` thì BẮT BUỘC `o1.hashCode() == o2.hashCode()`.\n2. Nếu hai object có `hashCode()` bằng nhau thì CHƯA CHẮC `equals()` đã bằng nhau (đây gọi là Hash Collision / Đụng độ hash).\n3. Nếu bạn override `equals()`, bạn BẮT BUỘC phải override `hashCode()`. Nếu không, HashMap/HashSet sẽ không tìm thấy object dù chúng bằng nhau theo equals.",
        "code": "// Nếu quên override hashCode():\nPerson p1 = new Person(\"Nam\", 20);\nmap.put(p1, \"Developer\");\nPerson p2 = new Person(\"Nam\", 20); // equals == true nhưng hashCode khác nhau\nmap.get(p2); // Sẽ trả về null!",
        "trap": "Rất nhiều câu hỏi phỏng vấn Audit và TestKing hỏi: Quên override hashCode() khi dùng HashMap làm Key thì hậu quả là gì?"
    },

    # Java Core: Chapter 8 & 9 - Inner Classes & Threads
    {
        "id": "fc_j8_1",
        "category": "Java Core: Ch8 Inner Classes",
        "tag": "Method-Local Inner Class",
        "question": "Một Method-Local Inner Class có thể truy cập những biến nào của phương thức chứa nó?",
        "answer": "Chỉ có thể truy cập các biến cục bộ (local variables) được khai báo là `final` (hoặc effectively final từ Java 8 - biến không bị gán lại giá trị sau khi khởi tạo).\nLý do: Vòng đời của object Inner Class trên Heap có thể sống lâu hơn thời gian thực thi của phương thức trên Stack.",
        "code": "void doSomething() {\n    int count = 10; // effectively final\n    class Inner {\n        void show() { System.out.println(count); }\n    }\n    // count = 20; // Nếu bỏ comment dòng này -> Inner class báo COMPILE ERROR ngay!\n}",
        "trap": "Nếu biến bị thay đổi giá trị ở bất kỳ đâu trong method, nó mất tính effectively final và inner class không thể truy cập được nữa."
    },
    {
        "id": "fc_j9_1",
        "category": "Java Core: Ch9 Threads",
        "tag": "Thread Execution",
        "question": "Sự khác biệt giữa việc gọi `t.start()` và `t.run()` trên một Thread object là gì?",
        "answer": "- `t.start()`: Khởi tạo một luồng thực thi (thread of execution) MỚI từ hệ điều hành, cấp phát Stack riêng, và sau đó JVM sẽ gọi phương thức `run()` trên luồng mới đó bất đồng bộ.\n- `t.run()`: Chỉ là một lời gọi phương thức thông thường, chạy đồng bộ tuần tự trên CHÍNH LUỒNG HIỆN TẠI (thường là main thread), hoàn toàn KHÔNG tạo luồng mới!",
        "code": "Thread t = new Thread(() -> System.out.println(Thread.currentThread().getName()));\nt.run();   // In ra: main\nt.start(); // In ra: Thread-0 (luồng mới)",
        "trap": "Nếu gọi `run()` trực tiếp thì chương trình vẫn chạy nhưng không hề có tính đa luồng (multithreading)."
    },
    {
        "id": "fc_j9_2",
        "category": "Java Core: Ch9 Threads",
        "tag": "Synchronization",
        "question": "Các phương thức `wait()`, `notify()`, `notifyAll()` thuộc class nào và phải được gọi ở đâu?",
        "answer": "Các phương thức này thuộc class `Object` (chứ không phải `Thread`), vì chúng thao tác trên Lock/Monitor của từng đối tượng.\nBẮT BUỘC: Phải được gọi bên trong một khối đồng bộ `synchronized` đang giữ khóa của chính object đó. Nếu gọi bên ngoài khối synchronized, chương trình sẽ ném ngoại lệ `IllegalMonitorStateException` lúc runtime.",
        "code": "Object lock = new Object();\nsynchronized(lock) {\n    lock.wait(); // Hợp lệ\n    lock.notify(); // Hợp lệ\n}\n// lock.wait(); // RUNTIME ERROR: IllegalMonitorStateException",
        "trap": "Bẫy runtime exception kinh điển: Gọi wait() mà không có synchronized block."
    },

    # SQL Essentials
    {
        "id": "fc_sql_1",
        "category": "Database & SQL",
        "tag": "JOINs",
        "question": "Phân biệt INNER JOIN và LEFT JOIN trong SQL?",
        "answer": "- **INNER JOIN**: Chỉ trả về các bản ghi có sự khớp nối (match) điều kiện ở CẢ HAI BẢNG. Các bản ghi không khớp ở một trong hai bảng sẽ bị loại bỏ hoàn toàn.\n- **LEFT JOIN (LEFT OUTER JOIN)**: Trả về TOÀN BỘ các bản ghi của bảng bên TRÁI, cộng với các bản ghi khớp từ bảng bên phải. Nếu bảng bên phải không có dữ liệu khớp, các cột của bảng phải sẽ được điền giá trị `NULL`.",
        "code": "SELECT u.name, o.order_id\nFROM Users u\nLEFT JOIN Orders o ON u.id = o.user_id;\n-- Người dùng nào chưa mua hàng vẫn hiện tên, order_id là NULL",
        "trap": "Câu hỏi Audit 1-1 số 1 về SQL. Cần nêu rõ trường hợp bản ghi bên phải trả về NULL."
    },
    {
        "id": "fc_sql_2",
        "category": "Database & SQL",
        "tag": "GROUP BY & HAVING",
        "question": "Mệnh đề `WHERE` khác mệnh đề `HAVING` ở điểm cốt lõi nào?",
        "answer": "- `WHERE`: Lọc các dòng dữ liệu đơn lẻ TRƯỚC KHI gom nhóm (Grouping). `WHERE` KHÔNG ĐƯỢC chứa các hàm tổng hợp (Aggregate Functions như COUNT, SUM, AVG).\n- `HAVING`: Lọc các nhóm dữ liệu SAU KHI gom nhóm bởi `GROUP BY`. `HAVING` chuyên dùng với các hàm tổng hợp.",
        "code": "SELECT department_id, COUNT(*)\nFROM Employees\nWHERE salary > 1000       -- Lọc lương trước khi gom nhóm\nGROUP BY department_id\nHAVING COUNT(*) > 5;     -- Lọc nhóm có trên 5 người",
        "trap": "Viết `WHERE COUNT(*) > 5` sẽ bị lỗi cú pháp SQL ngay lập tức."
    },
    {
        "id": "fc_sql_3",
        "category": "Database & SQL",
        "tag": "DML",
        "question": "Phân biệt lệnh `DELETE` và `TRUNCATE` trong cơ sở dữ liệu?",
        "answer": "- **DELETE**: Lệnh DML (Data Manipulation Language). Xóa từng dòng một, có thể dùng mệnh đề `WHERE`. Ghi nhật ký (Transaction Log) chi tiết cho từng dòng -> Chậm hơn. CÓ THỂ ROLLBACK được.\n- **TRUNCATE**: Lệnh DDL (Data Definition Language). Xóa toàn bộ dữ liệu bằng cách giải phóng data pages, reset lại Auto-increment identity về 1. Không dùng được `WHERE`. Cực nhanh, thường không thể rollback (hoặc hạn chế).",
        "code": "DELETE FROM Employees WHERE dept_id = 1; -- Xóa có điều kiện\nTRUNCATE TABLE Logs; -- Xóa sạch bảng, reset id",
        "trap": "TRUNCATE không thể thực thi nếu bảng đang bị khóa ngoại (Foreign Key) tham chiếu tới."
    },

    # JavaWeb: JSP & Servlet
    {
        "id": "fc_web_1",
        "category": "JavaWeb: JSP & Servlet",
        "tag": "Servlet Lifecycle",
        "question": "Trình bày 3 giai đoạn trong vòng đời (Lifecycle) của một Servlet?",
        "answer": "1. **Khởi tạo (`init`)**: Được gọi DUY NHẤT 1 LẦN khi container nạp Servlet vào bộ nhớ (lần đầu có request hoặc khi server start nếu đặt `load-on-startup`).\n2. **Xử lý dịch vụ (`service`)**: Được gọi MỖI KHI có request đến. Servlet container tạo một thread mới và gọi `service(req, resp)`, sau đó điều phối sang `doGet()`, `doPost()`...\n3. **Hủy bỏ (`destroy`)**: Được gọi DUY NHẤT 1 LẦN khi container gỡ Servlet hoặc shutdown server để giải phóng tài nguyên.",
        "code": "public class MyServlet extends HttpServlet {\n    public void init() { /* Chạy 1 lần */ }\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) { /* Chạy mỗi request */ }\n    public void destroy() { /* Chạy 1 lần */ }\n}",
        "trap": "Servlet container chỉ tạo DUY NHẤT 1 instance (Singleton-like) của Servlet cho tất cả request, mỗi request là 1 thread riêng biệt -> Cần chú ý thread-safety với instance variables."
    },
    {
        "id": "fc_web_2",
        "category": "JavaWeb: JSP & Servlet",
        "tag": "Forward vs Redirect",
        "question": "Phân biệt `RequestDispatcher.forward()` và `HttpServletResponse.sendRedirect()`?",
        "answer": "- **Forward (Chuyển tiếp)**: Xảy ra hoàn toàn ở phía SERVER. URL trên trình duyệt KHÔNG THAY ĐỔI. Chỉ mất 1 vòng request-response. Đối tượng `request` và `response` được GIỮ NGUYÊN (dữ liệu `request.setAttribute` vẫn tồn tại).\n- **Redirect (Chuyển hướng)**: Server gửi mã trạng thái HTTP 302 về BROWSER, trình duyệt tự động gửi request MỚI đến URL mới. URL trên trình duyệt BỊ THAY ĐỔI. Mất 2 vòng request-response. Đối tượng `request` cũ bị hủy bỏ hoàn toàn.",
        "code": "// Forward:\nrequest.getRequestDispatcher(\"result.jsp\").forward(request, response);\n// Redirect:\nresponse.sendRedirect(\"home.jsp\");",
        "trap": "Câu hỏi số 1 trong vòng phỏng vấn Audit phần JavaWeb!"
    },

    # Frontend Essentials (FEE)
    {
        "id": "fc_fee_1",
        "category": "Frontend Essentials",
        "tag": "CSS",
        "question": "Trình bày các thành phần của CSS Box Model từ trong ra ngoài?",
        "answer": "Gồm 4 lớp đồng tâm:\n1. **Content**: Nội dung thực tế của phần tử (văn bản, hình ảnh).\n2. **Padding**: Khoảng đệm trong suốt bao quanh content, nằm giữa content và border (chịu ảnh hưởng bởi background-color).\n3. **Border**: Đường viền bao quanh padding và content.\n4. **Margin**: Khoảng cách bên ngoài, tạo khoảng trống giữa phần tử này với các phần tử xung quanh.",
        "code": "/* Thuộc tính box-sizing: border-box giúp tính toán width bao gồm cả padding và border */\n* {\n    box-sizing: border-box;\n}",
        "trap": "Nếu không dùng `box-sizing: border-box`, kích thước hiển thị thực tế = width + padding + border."
    },
    {
        "id": "fc_fee_2",
        "category": "Frontend Essentials",
        "tag": "CSS",
        "question": "Thuộc tính `display: none` khác gì `visibility: hidden`?",
        "answer": "- `display: none`: Ẩn phần tử HOÀN TOÀN khỏi cây hiển thị. Phần tử KHÔNG CHIẾM BẤT KỲ KHOẢNG TRỐNG NÀO trên trang web (các phần tử xung quanh sẽ lấp đầy chỗ của nó).\n- `visibility: hidden`: Ẩn phần tử nhưng VẪN GIỮ NGUYÊN KHOẢNG TRỐNG (vị trí, kích thước layout) của phần tử đó trên màn hình (để lại một khoảng trống trắng).",
        "code": ".hidden-item { display: none; }     /* Biến mất hoàn toàn, không tốn chỗ */\n.invisible-item { visibility: hidden; } /* Ẩn đi nhưng vẫn chiếm vị trí */",
        "trap": "Một trong những câu hỏi kiểm tra căn bản kinh điển nhất của phần FEE Audit."
    },
    {
        "id": "fc_fee_3",
        "category": "Frontend Essentials",
        "tag": "JavaScript",
        "question": "Phân biệt từ khóa `var`, `let` và `const` trong JavaScript ES6?",
        "answer": "- **var**: Function-scoped (hoặc global). Có hiện tượng Hoisting và được khởi tạo với `undefined`. Cho phép tái khai báo (re-declare) trong cùng scope.\n- **let**: Block-scoped `{}`. Có hoisting nhưng nằm trong Temporal Dead Zone (TDZ), truy cập trước khi gán sẽ bị ReferenceError. Không cho phép tái khai báo trong cùng block. Có thể gán lại giá trị.\n- **const**: Block-scoped. Bắt buộc phải khởi tạo giá trị khi khai báo. KHÔNG thể gán lại tham chiếu (re-assign).",
        "code": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // In ra 1 (var lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined",
        "trap": "Với object được khai báo bằng `const obj = {}`, bạn vẫn có thể sửa thuộc tính `obj.name = 'test'` nhưng không thể gán `obj = {}` mới."
    },

    # Spring Framework
    {
        "id": "fc_spring_1",
        "category": "Spring Framework",
        "tag": "IoC & DI",
        "question": "Inversion of Control (IoC) và Dependency Injection (DI) là gì?",
        "answer": "- **IoC (Đảo ngược quyền điều khiển)**: Một nguyên lý thiết kế phần mềm, trong đó quyền kiểm soát vòng đời và khởi tạo các đối tượng được chuyển giao từ lập trình viên cho một Framework / Container (Spring IoC Container) quản lý.\n- **DI (Tiêm phụ thuộc)**: Một mẫu hiện thực hóa cụ thể của IoC. Thay vì class tự khởi tạo các đối tượng phụ thuộc bằng từ khóa `new` (`new OrderDAO()`), các phụ thuộc sẽ được container tự động \"bơm/tiêm\" vào thông qua Constructor, Setter hoặc Field.",
        "code": "// Cách truyền thống (chặt chẽ, khó test):\nclass UserService { private UserDAO dao = new UserDAO(); }\n\n// Sử dụng Spring DI:\n@Service\nclass UserService {\n    private final UserDAO dao;\n    @Autowired\n    public UserService(UserDAO dao) { this.dao = dao; } // Constructor Injection\n}",
        "trap": "Luôn nhớ: IoC là nguyên lý (Principle), còn DI là phương thức thực thi (Design Pattern)."
    },
    {
        "id": "fc_spring_2",
        "category": "Spring Framework",
        "tag": "Annotations",
        "question": "Phân biệt `@Component`, `@Service`, `@Repository` và `@Controller`?",
        "answer": "Cả 4 đều là các Spring Stereotype Annotations đánh dấu class là một Spring Bean do Container quản lý.\n- `@Component`: Annotation gốc tổng quát nhất cho bất kỳ class Java nào.\n- `@Repository`: Đánh dấu lớp DAO / Persistence, có cơ chế tự động chuyển đổi các Exception cấp thấp của CSDL thành `DataAccessException` của Spring.\n- `@Service`: Đánh dấu lớp Business Logic nghiệp vụ.\n- `@Controller`: Đánh dấu lớp Web Controller điều phối view (Spring MVC).\n- `@RestController` = `@Controller` + `@ResponseBody` (trả về JSON/XML trực tiếp cho REST API).",
        "code": "@RestController // Trả về JSON\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @Autowired private UserService userService;\n}",
        "trap": "Về mặt kỹ thuật, `@Service` hay `@Repository` đều là meta-annotated với `@Component`, nhưng dùng đúng thể hiện kiến trúc sạch và tận dụng các tính năng đặc thù."
    }
]

with open('data/flashcards.json', 'w', encoding='utf-8') as f:
    json.dump(flashcards, f, ensure_ascii=False, indent=2)

print(f'Wrote {len(flashcards)} flashcards into data/flashcards.json')

# 3. Practice & Mock Questions (TestKing / SCJP / SQL / JavaWeb style)
quizzes = [
    {
        "id": "q1",
        "chapter": "Chapter 1: Language Fundamentals",
        "type": "Java Core",
        "question": "Xem xét đoạn mã sau. Điều gì xảy ra khi biên dịch và chạy chương trình?",
        "code": "public class Test1 {\n    static int x;\n    public static void main(String[] args) {\n        int y;\n        if (x == 0) {\n            y = 1;\n        }\n        System.out.println(\"x = \" + x);\n        System.out.println(\"y = \" + y);\n    }\n}",
        "options": [
            "In ra:\nx = 0\ny = 1",
            "In ra:\nx = 0\ny = 0",
            "Lỗi biên dịch (Compile Error) tại dòng `System.out.println(\"y = \" + y);`",
            "Ném ngoại lệ NullPointerException lúc thực thi"
        ],
        "correctIndex": 2,
        "explanation": "Biến `x` là static variable nên được gán giá trị mặc định là 0. Tuy nhiên, biến `y` là local variable trong phương thức `main`. Trình biên dịch Java (javac) không thể chắc chắn điều kiện `x == 0` lúc runtime luôn luôn đúng tại thời điểm compile, do đó `y` bị coi là 'might not have been initialized'. Dòng in `y` sẽ gây lỗi biên dịch!",
        "trap": "Dù con người nhìn vào thấy x chắc chắn bằng 0, compiler chỉ phân tích luồng điều khiển tĩnh (definite assignment rule). Vì không có khối `else`, compiler không đảm bảo `y` luôn được gán."
    },
    {
        "id": "q2",
        "chapter": "Chapter 3: Operators & Assignments",
        "type": "Java Core",
        "question": "Kết quả in ra màn hình của đoạn mã sau là gì?",
        "code": "public class Test2 {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        boolean result = (a++ > 5) && (++b > 10);\n        System.out.println(\"a = \" + a + \", b = \" + b + \", result = \" + result);\n    }\n}",
        "options": [
            "a = 6, b = 11, result = true",
            "a = 6, b = 10, result = false",
            "a = 5, b = 10, result = false",
            "a = 6, b = 11, result = false"
        ],
        "correctIndex": 1,
        "explanation": "1. Biểu thức `a++ > 5`: Toán tử postfix lấy giá trị hiện tại của `a` (là 5) để so sánh `5 > 5` -> kết quả là `false`. Sau đó `a` tăng lên 6.\n2. Vì vế trái của toán tử short-circuit `&&` là `false`, JVM lập tức dừng và không chạy vế phải `(++b > 10)`!\n3. Do đó, `b` vẫn giữ nguyên giá trị 10, không bị tăng. Biến `result` là `false`.\n-> In ra: `a = 6, b = 10, result = false`.",
        "trap": "Rất nhiều người nhầm tưởng `++b` vẫn được thực thi và cho ra `b = 11`."
    },
    {
        "id": "q3",
        "chapter": "Chapter 4: Flow Control & Exceptions",
        "type": "Java Core",
        "question": "Giá trị trả về của phương thức `calculate()` dưới đây là bao nhiêu?",
        "code": "public class Test3 {\n    public static int calculate() {\n        int x = 10;\n        try {\n            x += 5;\n            return x;\n        } catch (Exception e) {\n            x += 10;\n            return x;\n        } finally {\n            x += 20;\n            return x;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(calculate());\n    }\n}",
        "options": [
            "15",
            "25",
            "35",
            "Lỗi biên dịch vì có nhiều lệnh return"
        ],
        "correctIndex": 2,
        "explanation": "Trong khối `try`, `x` được cộng 5 thành 15, và chuẩn bị `return 15`. Tuy nhiên, trước khi thoát khỏi phương thức, khối `finally` BẮT BUỘC phải thực thi. Trong `finally`, `x` được cộng thêm 20 (thành 35), và lệnh `return x` trong `finally` được thực thi, hoàn toàn GHI ĐÈ lệnh return trước đó của `try`. Kết quả trả về là 35.",
        "trap": "Lệnh `return` trong khối `finally` luôn nuốt chửng kết quả return hoặc exception phát sinh từ khối `try` hoặc `catch`."
    },
    {
        "id": "q4",
        "chapter": "Chapter 5: Object Orientation",
        "type": "Java Core",
        "question": "Cho hai class sau. Kết quả khi chạy chương trình là gì?",
        "code": "class Animal {\n    String name = \"Animal\";\n    void makeSound() {\n        System.out.println(\"Animal sound\");\n    }\n}\nclass Dog extends Animal {\n    String name = \"Dog\";\n    void makeSound() {\n        System.out.println(\"Bark\");\n    }\n}\npublic class Test4 {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.print(a.name + \" - \");\n        a.makeSound();\n    }\n}",
        "options": [
            "Dog - Bark",
            "Animal - Bark",
            "Animal - Animal sound",
            "Lỗi biên dịch (Compile Error)"
        ],
        "correctIndex": 1,
        "explanation": "- Thuộc tính (fields) trong Java KHÔNG có tính đa hình (Polymorphism) mà bị che khuất (Shadowing). Việc truy cập `a.name` phụ thuộc vào kiểu của biến tham chiếu lúc biên dịch (`Animal`), do đó `a.name` lấy giá trị 'Animal'.\n- Ngược lại, phương thức (methods) CÓ tính đa hình lúc thực thi (Dynamic Method Dispatch). Đối tượng thực tế là `Dog` nên `a.makeSound()` gọi phương thức của `Dog` và in ra 'Bark'.\n-> Kết quả in ra: `Animal - Bark`.",
        "trap": "Bẫy kinh điển: Thuộc tính không đa hình, chỉ có instance method mới đa hình!"
    },
    {
        "id": "q5",
        "chapter": "Chapter 6: String, Wrapper & Math",
        "type": "Java Core",
        "question": "Đoạn mã sau sẽ in ra kết quả gì?",
        "code": "public class Test5 {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = new String(\"Java\");\n        String s3 = \"Ja\" + \"va\";\n        \n        System.out.print((s1 == s2) + \" \");\n        System.out.print((s1 == s3) + \" \");\n        System.out.print(s1.equals(s2));\n    }\n}",
        "options": [
            "true true true",
            "false true true",
            "false false true",
            "false true false"
        ],
        "correctIndex": 1,
        "explanation": "1. `s1 == s2`: `s1` trỏ đến đối tượng trong String Pool, `s2` dùng từ khóa `new` nên trỏ đến đối tượng mới trên Heap -> Khác địa chỉ tham chiếu -> `false`.\n2. `s1 == s3`: Biểu thức `\"Ja\" + \"va\"` là hằng số chuỗi (compile-time constant expression), compiler tự động tối ưu ghép thành `\"Java\"` tại thời điểm biên dịch và lấy từ String Pool -> Cùng tham chiếu với `s1` -> `true`.\n3. `s1.equals(s2)`: So sánh nội dung ký tự, cả hai đều là 'Java' -> `true`.\n-> In ra: `false true true`.",
        "trap": "Cần phân biệt nối hai hằng số literal (tối ưu lúc compile) với nối biến (`s + \"va\"` sẽ tạo object mới lúc runtime)."
    },
    {
        "id": "q6",
        "chapter": "Chapter 7: Collections Framework",
        "type": "Java Core",
        "question": "Điều gì xảy ra khi thêm các phần tử vào TreeSet như sau?",
        "code": "import java.util.*;\nclass Student {\n    int id;\n    Student(int id) { this.id = id; }\n}\npublic class Test6 {\n    public static void main(String[] args) {\n        Set<Student> set = new TreeSet<>();\n        set.add(new Student(1));\n        set.add(new Student(2));\n        System.out.println(set.size());\n    }\n}",
        "options": [
            "In ra: 2",
            "In ra: 1",
            "Lỗi biên dịch (Compile Error)",
            "Ném ngoại lệ ClassCastException lúc chạy (Runtime Exception)"
        ],
        "correctIndex": 3,
        "explanation": "`TreeSet` là tập hợp có sắp xếp (SortedSet). Khi thêm một phần tử vào `TreeSet` mà không truyền vào một `Comparator`, các phần tử bắt buộc phải implement interface `Comparable`. Class `Student` không implement `Comparable`, do đó phương thức `add()` sẽ cố gắng ép kiểu sang `Comparable` và ném ra ngoại lệ `java.lang.ClassCastException` tại runtime.",
        "trap": "Mã biên dịch hoàn toàn bình thường vì tính kiểm tra generic không bắt lỗi Comparable lúc compile."
    },
    {
        "id": "q7",
        "chapter": "Chapter 9: Threads",
        "type": "Java Core",
        "question": "Xét đoạn mã sau. Thứ tự các dòng chữ được in ra chắc chắn là gì?",
        "code": "public class Test7 {\n    public static void main(String[] args) {\n        Thread t = new Thread() {\n            public void run() {\n                System.out.print(\"A \");\n            }\n        };\n        t.run();\n        System.out.print(\"B \");\n    }\n}",
        "options": [
            "Luôn luôn in ra: A B",
            "Có thể in ra A B hoặc B A tùy thuộc vào Thread Scheduler",
            "Luôn luôn in ra: B A",
            "Lỗi biên dịch"
        ],
        "correctIndex": 0,
        "explanation": "Lưu ý phương thức được gọi là `t.run()` chứ KHÔNG PHẢI `t.start()`!\nGọi `t.run()` chỉ đơn thuần là một lời gọi hàm thông thường trên chính luồng hiện tại (`main` thread). Chương trình chạy tuần tự: in ra `A ` xong mới chạy dòng tiếp theo in ra `B `.\n-> Kết quả CHẮC CHẮN luôn là: `A B`.",
        "trap": "Nếu gọi `t.start()`, luồng mới được tạo và thứ tự `A B` hay `B A` mới không thể đoán trước."
    },
    {
        "id": "q8",
        "chapter": "SQL Queries & Relational DB",
        "type": "Database & SQL",
        "question": "Cho bảng `Employees (id, name, department_id, salary)`. Câu lệnh nào tính mức lương trung bình của từng phòng ban có từ 3 nhân viên trở lên?",
        "code": "-- Chọn câu lệnh đúng cú pháp SQL chuẩn:",
        "options": [
            "SELECT department_id, AVG(salary) FROM Employees WHERE COUNT(*) >= 3 GROUP BY department_id;",
            "SELECT department_id, AVG(salary) FROM Employees GROUP BY department_id HAVING COUNT(*) >= 3;",
            "SELECT department_id, AVG(salary) FROM Employees GROUP BY department_id WHERE COUNT(*) >= 3;",
            "SELECT department_id, AVG(salary) FROM Employees HAVING COUNT(*) >= 3;"
        ],
        "correctIndex": 1,
        "explanation": "Mệnh đề `HAVING` dùng để lọc kết quả sau khi đã gom nhóm bằng `GROUP BY`, và có thể áp dụng các hàm tổng hợp như `COUNT(*)`. Mệnh đề `WHERE` chỉ lọc từng dòng trước khi gom nhóm và không thể chứa `COUNT(*)`. Thứ tự các mệnh đề chuẩn là: `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`.",
        "trap": "Viết điều kiện hàm tổng hợp trong `WHERE` là lỗi cú pháp SQL kinh điển."
    },
    {
        "id": "q9",
        "chapter": "JavaWeb: JSP & Servlet",
        "type": "JavaWeb",
        "question": "Trong Servlet, nếu muốn chuyển tiếp dữ liệu đến một trang JSP và giữ nguyên các thuộc tính (attributes) đã lưu trong đối tượng `request`, ta nên dùng phương thức nào?",
        "code": "// Cách nào giữ nguyên request attributes?",
        "options": [
            "response.sendRedirect(\"view.jsp\");",
            "request.getRequestDispatcher(\"view.jsp\").forward(request, response);",
            "response.setHeader(\"Location\", \"view.jsp\");",
            "request.sendForward(\"view.jsp\");"
        ],
        "correctIndex": 1,
        "explanation": "Phương thức `RequestDispatcher.forward()` thực hiện chuyển tiếp xử lý hoàn toàn ở phía server trong cùng một luồng request. Trình duyệt không hề biết về việc chuyển tiếp này, do đó đối tượng `request` được giữ nguyên vẹn cùng toàn bộ attributes đã set bằng `request.setAttribute()`. Ngược lại, `sendRedirect` sẽ bắt trình duyệt tạo một request mới tinh làm mất sạch dữ liệu request cũ.",
        "trap": "`sendRedirect` làm mất dữ liệu request attributes."
    },
    {
        "id": "q10",
        "chapter": "Spring Framework",
        "type": "Spring",
        "question": "Annotation nào trong Spring Framework kết hợp cả hai annotation `@Controller` và `@ResponseBody`?",
        "code": "@Target(ElementType.TYPE)\n@Retention(RetentionPolicy.RUNTIME)\n// Annotation nào?",
        "options": [
            "@Service",
            "@Repository",
            "@RestController",
            "@WebController"
        ],
        "correctIndex": 2,
        "explanation": "`@RestController` là một convenience annotation trong Spring MVC, nó tương đương với việc khai báo `@Controller` trên class và gắn `@ResponseBody` lên tất cả các phương thức xử lý request. Dữ liệu trả về từ các method sẽ được tự động chuyển đổi (serialize) thành định dạng JSON hoặc XML thay vì trả về tên trang view HTML/JSP.",
        "trap": "Nếu dùng `@Controller` thông thường mà muốn trả về JSON, bạn bắt buộc phải gắn thêm `@ResponseBody` trên phương thức."
    }
]

with open('data/quizzes.json', 'w', encoding='utf-8') as f:
    json.dump(quizzes, f, ensure_ascii=False, indent=2)

print(f'Wrote {len(quizzes)} quiz questions into data/quizzes.json')

# 4. Audit 1-1 Simulator Questions
audit_questions = [
    {
        "id": "audit_1",
        "domain": "Java Core",
        "question": "Phân biệt `==` và phương thức `.equals()` trong Java? Cho ví dụ minh họa và giải thích String Pool?",
        "timeLimitSeconds": 90,
        "keyPoints": [
            "Nêu rõ `==` so sánh địa chỉ bộ nhớ (reference identity) đối với đối tượng, so sánh giá trị đối với kiểu nguyên thủy (primitive).",
            "`.equals()` mặc định trong class `Object` cũng dùng `==`, nhưng các class như `String`, `Integer` đã override để so sánh nội dung logic.",
            "Giải thích String Pool: Chuỗi literal được lưu trong pool để tái sử dụng, `new String()` luôn tạo đối tượng mới trên Heap.",
            "Cho ví dụ code ngắn: `String a = \"abc\"; String b = \"abc\"; a == b (true)` nhưng `new String(\"abc\") == a (false)`."
        ],
        "modelAnswer": "Trong Java:\n1. Toán tử `==` dùng để so sánh địa chỉ tham chiếu bộ nhớ (đối với đối tượng) hoặc so sánh giá trị trực tiếp (đối với primitive types như int, boolean). Hai đối tượng có nội dung giống hệt nhau nhưng nằm ở 2 vùng nhớ khác nhau thì `==` vẫn trả về `false`.\n2. Phương thức `.equals()` được dùng để so sánh bình đẳng về mặt giá trị/nội dung logic. Mặc định trong class `Object`, `.equals()` dùng `==`, nhưng các lớp như `String`, `Date`, Wrapper classes đã override phương thức này để so sánh từng ký tự/giá trị.\n3. Ví dụ với String Pool: Khi ta gán `String s1 = \"hello\"; String s2 = \"hello\";`, cả hai đều trỏ tới cùng 1 đối tượng được tái sử dụng trong String Constant Pool nên `s1 == s2` là `true`. Nhưng nếu viết `String s3 = new String(\"hello\");`, JVM bắt buộc tạo 1 object mới trên Heap, do đó `s1 == s3` là `false`, còn `s1.equals(s3)` là `true`."
    },
    {
        "id": "audit_2",
        "domain": "Java Core",
        "question": "Overloading và Overriding khác nhau như thế nào? Nêu các quy tắc bắt buộc khi Override?",
        "timeLimitSeconds": 90,
        "keyPoints": [
            "Overloading (Nạp chồng): Cùng class, cùng tên, KHÁC tham số. Quyết định tại Compile-time (Static polymorphism).",
            "Overriding (Ghi đè): Quan hệ kế thừa cha-con, cùng tên, CÙNG tham số. Quyết định tại Runtime (Dynamic polymorphism).",
            "4 quy tắc Override: (1) Cùng signature; (2) Access modifier không được hẹp hơn; (3) Return type cùng hoặc con (covariant); (4) Không throw checked exception mới/rộng hơn."
        ],
        "modelAnswer": "Khác biệt giữa Overloading và Overriding:\n- **Overloading**: Xảy ra trong cùng một class, các phương thức có cùng tên nhưng danh sách tham số phải khác nhau (về số lượng, kiểu dữ liệu hoặc thứ tự). Kiểu trả về có thể giống hoặc khác. Được phân giải tại thời điểm biên dịch (Compile-time polymorphism).\n- **Overriding**: Xảy ra giữa class cha và class con qua quan hệ kế thừa. Class con định nghĩa lại hành vi của phương thức từ class cha. Được phân giải tại thời điểm thực thi (Runtime polymorphism).\n- **Quy tắc khi Override**:\n1. Tên và tham số phải giống hệt.\n2. Access modifier của phương thức con không được hẹp hơn cha (ví dụ cha là `protected` thì con phải là `protected` hoặc `public`).\n3. Kiểu trả về phải tương thích (cùng kiểu hoặc là kiểu con - covariant return type).\n4. Không được ném ngoại lệ Checked Exception mới hoặc rộng hơn phương thức cha."
    },
    {
        "id": "audit_3",
        "domain": "Java Core",
        "question": "HashMap hoạt động như thế nào bên dưới bộ nhớ? Tại sao phải override cả `equals()` và `hashCode()`?",
        "timeLimitSeconds": 90,
        "keyPoints": [
            "HashMap dựa trên bảng băm (Hash Table) gồm một mảng các Node/Bucket.",
            "Khi `put(K, V)`: Tính `hash(key) -> index = (n - 1) & hash`. Nếu bucket rỗng thì tạo Node. Nếu có va chạm (collision), lưu dạng LinkedList (hoặc Red-Black Tree từ Java 8 nếu bucket > 8).",
            "Hợp đồng equals & hashCode: Nếu 2 object equals == true thì BẮT BUỘC hashCode phải bằng nhau.",
            "Nếu quên hashCode: 2 object bằng nhau có thể rơi vào 2 bucket khác nhau -> `get()` trả về `null`."
        ],
        "modelAnswer": "Bên dưới bộ nhớ, HashMap hoạt động dựa trên cơ chế Bảng băm (Hash Table):\n1. HashMap chứa một mảng các Node/Bucket. Mỗi Node chứa `hash, key, value, next`.\n2. Khi gọi `put(key, value)`: HashMap gọi `key.hashCode()` để tính hash và tìm ra chỉ số index trong mảng. Nếu vị trí đó chưa có gì, node mới được lưu vào. Nếu vị trí đó đã có phần tử (xảy ra xung đột/đụng độ hash - Collision), HashMap sẽ duyệt qua danh sách liên kết tại bucket đó, dùng `equals()` để kiểm tra: nếu key đã tồn tại thì cập nhật value mới, nếu chưa có thì nối node mới vào cuối (hoặc chuyển thành Cây đỏ đen nếu có từ 8 node trở lên từ Java 8).\n3. Khi gọi `get(key)`: Cũng tính hash để tìm bucket, sau đó dùng `equals()` để tìm chính xác key.\n4. Do đó, nếu override `equals()` mà quên override `hashCode()`, hai đối tượng có cùng nội dung sẽ sinh ra hai mã hash khác nhau, rơi vào hai bucket khác nhau -> `get()` sẽ trả về `null` dù object bằng nhau."
    },
    {
        "id": "audit_4",
        "domain": "Database & SQL",
        "question": "INNER JOIN khác gì LEFT JOIN? Trong trường hợp nào thì dùng LEFT JOIN?",
        "timeLimitSeconds": 75,
        "keyPoints": [
            "INNER JOIN chỉ lấy các bản ghi có sự kết nối khớp ở cả 2 bảng.",
            "LEFT JOIN lấy toàn bộ bản ghi của bảng bên trái, bảng bên phải không khớp sẽ điền NULL.",
            "Trường hợp dùng: Cần lấy danh sách đầy đủ kể cả khi chưa có dữ liệu quan hệ (ví dụ: lấy tất cả khách hàng kèm số đơn hàng, khách chưa mua vẫn hiện với 0 đơn)."
        ],
        "modelAnswer": "- **INNER JOIN** chỉ trả về các dòng có giá trị tương ứng ở cả hai bảng tham gia kết nối. Những dòng nào ở bảng bên trái hoặc bảng bên phải không thỏa mãn điều kiện `ON` thì sẽ bị loại bỏ hoàn toàn khỏi tập kết quả.\n- **LEFT JOIN** (hay LEFT OUTER JOIN) trả về TẤT CẢ các dòng từ bảng bên trái, kết hợp với các dòng tương ứng từ bảng bên phải. Nếu một dòng ở bảng bên trái không tìm thấy bản ghi nào khớp ở bảng bên phải, các cột của bảng bên phải sẽ nhận giá trị `NULL`.\n- **Trường hợp sử dụng LEFT JOIN**: Khi ta muốn giữ lại toàn bộ đối tượng chính bất kể chúng đã có bản ghi liên quan hay chưa. Ví dụ: Lấy danh sách toàn bộ nhân viên và tên phòng ban của họ (kể cả nhân viên mới chưa được xếp vào phòng ban nào), hoặc tìm những khách hàng CHƯA TỪNG mua đơn hàng nào (`WHERE orders.id IS NULL`)."
    },
    {
        "id": "audit_5",
        "domain": "JavaWeb",
        "question": "Trình bày vòng đời (Lifecycle) của Servlet? Khác biệt giữa forward và redirect?",
        "timeLimitSeconds": 90,
        "keyPoints": [
            "Vòng đời Servlet: init() -> service() (doGet/doPost) -> destroy().",
            "Container chỉ tạo 1 instance Servlet duy nhất (đa luồng đa request).",
            "Forward: Xảy ra ở server, 1 request, URL không đổi, giữ nguyên dữ liệu request.",
            "Redirect: Server trả mã 302, trình duyệt tạo request mới, URL đổi, mất dữ liệu request cũ."
        ],
        "modelAnswer": "1. **Vòng đời Servlet gồm 3 phương thức chính**:\n- `init(ServletConfig config)`: Được container gọi duy nhất 1 lần khi servlet được khởi tạo vào bộ nhớ.\n- `service(HttpServletRequest req, HttpServletResponse resp)`: Được container gọi mỗi khi có request đến, từ đó điều phối sang `doGet()`, `doPost()`, v.v. Mỗi request được xử lý trên một luồng (thread) riêng.\n- `destroy()`: Được gọi duy nhất 1 lần khi server shutdown hoặc ứng dụng bị undeploy để giải phóng tài nguyên.\n\n2. **Khác biệt giữa Forward và Redirect**:\n- `forward()` diễn ra hoàn toàn ở phía Server. URL trên trình duyệt không đổi, chỉ có 1 lượt request-response, các thuộc tính lưu trong `request.setAttribute` vẫn được chuyển tiếp sang trang đích.\n- `sendRedirect()` là phản hồi từ server gửi mã 302 về Browser yêu cầu trình duyệt gửi một request MỚI đến địa chỉ mới. URL trên thanh địa chỉ thay đổi, mất 2 vòng request-response và mất toàn bộ dữ liệu lưu trong request trước đó."
    },
    {
        "id": "audit_6",
        "domain": "Spring Framework",
        "question": "Inversion of Control (IoC) và Dependency Injection (DI) là gì? Lợi ích của chúng trong phát triển phần mềm?",
        "timeLimitSeconds": 90,
        "keyPoints": [
            "IoC là nguyên lý đảo ngược quyền điều khiển luồng và khởi tạo đối tượng cho framework.",
            "DI là cách hiện thực: Các phụ thuộc được inject từ bên ngoài thay vì tự khởi tạo bằng `new`.",
            "3 kiểu DI: Constructor Injection (khuyên dùng), Setter Injection, Field Injection.",
            "Lợi ích: Giảm phụ thuộc chặt chẽ (Loose Coupling), dễ viết Unit Test (Mocking), dễ bảo trì và mở rộng."
        ],
        "modelAnswer": "- **Inversion of Control (IoC)** là nguyên lý đảo ngược sự điều khiển: Thay vì lập trình viên tự mình quản lý vòng đời và chủ động dùng từ khóa `new` để tạo các đối tượng phụ thuộc, quyền điều khiển này được chuyển giao hoàn toàn cho Spring IoC Container.\n- **Dependency Injection (DI)** là một kỹ thuật cụ thể để hiện thực IoC. Các thành phần phụ thuộc (Dependencies) của một class sẽ được container tự động tiêm/bơm vào khi đối tượng được khởi tạo, phổ biến nhất là thông qua Constructor Injection hoặc `@Autowired`.\n- **Lợi ích to lớn của DI/IoC**:\n1. **Loose Coupling (Giảm sự phụ thuộc chặt chẽ)**: Class không cần biết cụ thể class triển khai chi tiết mà chỉ cần làm việc qua Interface.\n2. **Dễ Unit Test**: Có thể dễ dàng Mock/Stub các tầng phụ thuộc (như Mock Database Repository khi test Service) mà không cần kết nối database thật.\n3. **Dễ bảo trì và mở rộng**: Thay đổi cách khởi tạo hay cấu hình chỉ cần sửa một chỗ duy nhất trong cấu hình Spring."
    },
    {
        "id": "audit_7",
        "domain": "Frontend Essentials",
        "question": "CSS Box Model là gì? Phân biệt `display: none` và `visibility: hidden`?",
        "timeLimitSeconds": 75,
        "keyPoints": [
            "Box Model gồm 4 phần: Content, Padding, Border, Margin.",
            "`box-sizing: border-box` vs `content-box`.",
            "`display: none`: Ẩn hoàn toàn, không chiếm vị trí trong luồng layout.",
            "`visibility: hidden`: Ẩn nội dung nhưng vẫn giữ nguyên khoảng trống kích thước ban đầu."
        ],
        "modelAnswer": "1. **CSS Box Model** là mô hình hộp trong CSS định nghĩa cách mỗi phần tử HTML được hiển thị trên trang web, gồm 4 lớp từ trong ra ngoài:\n- **Content**: Vùng chứa nội dung chữ hoặc ảnh thực tế.\n- **Padding**: Vùng đệm trong suốt nằm giữa nội dung và đường viền.\n- **Border**: Đường viền bao quanh phần đệm.\n- **Margin**: Khoảng cách bên ngoài đường viền, ngăn cách với các phần tử khác.\n*Mặc định kích thước phần tử chỉ tính phần content, nhưng khi dùng thuộc tính `box-sizing: border-box`, kích thước chiều rộng/cao sẽ bao gồm cả padding và border giúp bố cục giao diện không bị vỡ.\n\n2. **Phân biệt `display: none` và `visibility: hidden`**:\n- `display: none` làm cho phần tử hoàn toàn biến mất khỏi dòng hiển thị của trang web, phần tử KHÔNG CHIẾM BẤT KỲ KHOẢNG TRỐNG NÀO.\n- `visibility: hidden` làm phần tử trở nên vô hình, nhưng VẪN GIỮ NGUYÊN KÍCH THƯỚC VÀ VỊ TRÍ CHIẾM CHỖ trên trang web (để lại một khoảng trống trắng)."
    }
]

with open('data/audit_questions.json', 'w', encoding='utf-8') as f:
    json.dump(audit_questions, f, ensure_ascii=False, indent=2)

print(f'Wrote {len(audit_questions)} audit questions into data/audit_questions.json')

# 5. Classic Traps & Reference Matrices
traps_data = {
    "classicTraps": [
        {
            "id": "trap_1",
            "title": "Bẫy 1: Local Variable không có giá trị mặc định",
            "category": "Syntax & Compilation",
            "description": "Biến cục bộ (local variable) khai báo trong phương thức không được JVM gán giá trị mặc định. Nếu sử dụng biến khi chưa khởi tạo, chương trình sẽ gặp Compile Error ngay lập tức.",
            "badCode": "public void test() {\n    int x;\n    System.out.println(x); // COMPILE ERROR!\n}",
            "goodCode": "public void test() {\n    int x = 0; // Khởi tạo rõ ràng\n    System.out.println(x); // OK: 0\n}",
            "rule": "Chỉ có instance variables và static variables mới có default values (0, false, null)."
        },
        {
            "id": "trap_2",
            "title": "Bẫy 2: Phép cộng kiểu byte tự động bị nâng lên int",
            "category": "Operators & Casting",
            "description": "Các phép toán số học (+, -, *, /) trên các kiểu số nguyên nhỏ hơn int (byte, short, char) luôn trả về kiểu int.",
            "badCode": "byte a = 10, b = 20;\n// byte c = a + b; // COMPILE ERROR: cannot convert from int to byte",
            "goodCode": "byte a = 10, b = 20;\nbyte c = (byte)(a + b); // Ép kiểu tường minh\n// Hoặc: a += b; (Toán tử kết hợp tự động ép kiểu)",
            "rule": "Biểu thức `a + b` có kiểu int. Muốn gán lại cho byte phải ép kiểu `(byte)(a + b)`."
        },
        {
            "id": "trap_3",
            "title": "Bẫy 3: Postfix x = x++ không làm tăng giá trị của x",
            "category": "Operators",
            "description": "Toán tử postfix `x++` trả về giá trị cũ trước khi tăng, sau đó phép gán `=` lại đè giá trị cũ này lên x.",
            "badCode": "int x = 5;\nx = x++;\nSystem.out.println(x); // Kết quả vẫn là 5!",
            "goodCode": "int x = 5;\nx++; // Hoặc: x = ++x;\nSystem.out.println(x); // In ra 6",
            "rule": "Không bao giờ gán kết quả của phép toán postfix tăng/giảm lại chính biến đó."
        },
        {
            "id": "trap_4",
            "title": "Bẫy 4: Lệnh return trong finally nuốt chửng kết quả của try",
            "category": "Flow Control & Exceptions",
            "description": "Khối finally luôn luôn chạy trước khi phương thức kết thúc. Nếu trong finally có lệnh return, nó sẽ ghi đè lên giá trị return hoặc exception ném ra ở try/catch.",
            "badCode": "public int getNumber() {\n    try {\n        return 10;\n    } finally {\n        return 20;\n    }\n} // Luôn trả về 20!",
            "goodCode": "// Tránh viết lệnh return hoặc throw trong khối finally",
            "rule": "Finally chỉ nên dùng để đóng kết nối tài nguyên (close file, database connection), không viết return."
        },
        {
            "id": "trap_5",
            "title": "Bẫy 5: Thuộc tính (fields) không có tính đa hình",
            "category": "Object Orientation",
            "description": "Tính đa hình (Polymorphism) chỉ áp dụng cho instance method. Truy cập thuộc tính hoàn toàn phụ thuộc vào kiểu tham chiếu lúc compile.",
            "badCode": "class Parent { int x = 10; }\nclass Child extends Parent { int x = 20; }\n\nParent p = new Child();\nSystem.out.println(p.x); // In ra 10! (Lấy thuộc tính của Parent)",
            "goodCode": "// Muốn đa hình thuộc tính, hãy dùng getter method:\nclass Parent { int getX() { return 10; } }\nclass Child extends Parent { int getX() { return 20; } }\n\nParent p = new Child();\nSystem.out.println(p.getX()); // In ra 20 (Đa hình)",
            "rule": "Biến nào được gọi phụ thuộc vào Reference Type, phương thức nào được gọi phụ thuộc vào Runtime Object Type."
        },
        {
            "id": "trap_6",
            "title": "Bẫy 6: Integer Cache autoboxing -128 đến 127",
            "category": "String & Wrappers",
            "description": "Java cache các đối tượng Integer từ -128 đến 127. Ngoài khoảng này, phép so sánh `==` sẽ trả về false dù cùng giá trị.",
            "badCode": "Integer a = 150, b = 150;\nSystem.out.println(a == b); // In ra false!",
            "goodCode": "Integer a = 150, b = 150;\nSystem.out.println(a.equals(b)); // In ra true",
            "rule": "Luôn luôn dùng phương thức `.equals()` khi so sánh các đối tượng Wrapper."
        },
        {
            "id": "trap_7",
            "title": "Bẫy 7: Interface variables luôn là public static final",
            "category": "Declarations",
            "description": "Biến trong interface mặc định là hằng số `public static final`. Không thể khai báo private hoặc gán lại giá trị.",
            "badCode": "interface Config {\n    // private int TIMEOUT = 5000; // COMPILE ERROR!\n    int TIMEOUT = 5000;\n}\nclass App {\n    void test() {\n        // Config.TIMEOUT = 10000; // COMPILE ERROR: cannot assign a value to final variable\n    }\n}",
            "goodCode": "interface Config {\n    int TIMEOUT = 5000; // public static final ngầm định\n}",
            "rule": "Biến trong interface luôn là hằng số."
        },
        {
            "id": "trap_8",
            "title": "Bẫy 8: Quên default constructor của class cha",
            "category": "Constructors",
            "description": "Nếu class cha chỉ có constructor có tham số, class con không thể kế thừa nếu không gọi tường minh `super(params)` ở dòng đầu tiên.",
            "badCode": "class Parent {\n    Parent(String name) {}\n}\n// class Child extends Parent {} // COMPILE ERROR: Implicit super constructor Parent() is undefined",
            "goodCode": "class Child extends Parent {\n    Child() {\n        super(\"Default\"); // Gọi tường minh constructor của cha\n    }\n}",
            "rule": "Constructor ngầm định của class con luôn gọi `super()`. Nếu cha không có constructor không tham số thì phải tự viết constructor con và gọi `super(...)`."
        }
    ],
    "accessModifiersMatrix": [
        {"modifier": "public", "sameClass": "Có", "samePackage": "Có", "subclassDifferentPackage": "Có", "world": "Có"},
        {"modifier": "protected", "sameClass": "Có", "samePackage": "Có", "subclassDifferentPackage": "Có (chỉ qua kế thừa)", "world": "Không"},
        {"modifier": "default (không ghi)", "sameClass": "Có", "samePackage": "Có", "subclassDifferentPackage": "Không", "world": "Không"},
        {"modifier": "private", "sameClass": "Có", "samePackage": "Không", "subclassDifferentPackage": "Không", "world": "Không"}
    ],
    "collectionsMatrix": [
        {"name": "ArrayList", "type": "List", "duplicates": "Có", "ordered": "Có (theo index)", "sorted": "Không", "threadSafe": "Không", "notes": "Truy xuất ngẫu nhiên O(1), thêm/xóa ở giữa O(N)"},
        {"name": "LinkedList", "type": "List/Deque", "duplicates": "Có", "ordered": "Có (theo index)", "sorted": "Không", "threadSafe": "Không", "notes": "Thêm/xóa O(1) nếu đã có con trỏ, truy xuất O(N)"},
        {"name": "Vector", "type": "List", "duplicates": "Có", "ordered": "Có", "sorted": "Không", "threadSafe": "CÓ (synchronized)", "notes": "Legacy collection, hiệu năng thấp hơn ArrayList"},
        {"name": "HashSet", "type": "Set", "duplicates": "KHÔNG", "ordered": "KHÔNG", "sorted": "Không", "threadSafe": "Không", "notes": "Dựa trên HashMap, O(1) cho add/contains/remove"},
        {"name": "LinkedHashSet", "type": "Set", "duplicates": "KHÔNG", "ordered": "CÓ (theo thứ tự chèn)", "sorted": "Không", "threadSafe": "Không", "notes": "Duy trì doubly-linked list nối qua các phần tử"},
        {"name": "TreeSet", "type": "Set", "duplicates": "KHÔNG", "ordered": "CÓ (theo thứ tự sắp xếp)", "sorted": "CÓ (Comparable/Comparator)", "threadSafe": "Không", "notes": "Dựa trên Red-Black Tree, O(log N)"},
        {"name": "HashMap", "type": "Map", "duplicates": "Key: Không / Val: Có", "ordered": "KHÔNG", "sorted": "Không", "threadSafe": "Không", "notes": "Cho phép 1 key null và nhiều value null"},
        {"name": "Hashtable", "type": "Map", "duplicates": "Key: Không / Val: Có", "ordered": "KHÔNG", "sorted": "Không", "threadSafe": "CÓ (synchronized)", "notes": "KHÔNG cho phép bất kỳ key hay value null nào"},
        {"name": "TreeMap", "type": "Map", "duplicates": "Key: Không / Val: Có", "ordered": "CÓ (Key sắp xếp)", "sorted": "CÓ (Key Comparable)", "threadSafe": "Không", "notes": "O(log N) cho các thao tác"}
    ]
}

with open('data/traps.json', 'w', encoding='utf-8') as f:
    json.dump(traps_data, f, ensure_ascii=False, indent=2)

print('Wrote data/traps.json successfully!')
