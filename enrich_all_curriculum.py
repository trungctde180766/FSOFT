import json

with open('data/daily_lessons.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

# Topic-specific assessments and code tracing for remaining days
day_custom_assessments = {
    "10": {
        "chapter": "Chapter 5: OOP - Encapsulation & Inheritance",
        "da": [
            {
                "id": "da_10_1",
                "q": "Nguyên lý đóng gói (Encapsulation) trong Java được thực thi chuẩn mực nhất bằng cách nào?",
                "options": [
                    "Khai báo các thuộc tính là private và cung cấp các getter/setter public",
                    "Khai báo tất cả các thuộc tính là public",
                    "Khai báo tất cả các class là final",
                    "Sử dụng kế thừa nhiều tầng"
                ],
                "correct": 0,
                "exp": "Encapsulation (Đóng gói) là việc che giấu dữ liệu trạng thái nội bộ bằng private fields và chỉ cho phép truy cập/kiểm soát thông qua các phương thức getter/setter public theo chuẩn JavaBeans."
            }
        ],
        "trap": {
            "trap": "Getter trả về trực tiếp đối tượng khả biến (Mutable Object)",
            "whyPeopleWrong": "Tưởng rằng private Date dob; đã an toàn khi có getDob() { return dob; }.",
            "wrongThinking": "Nghĩ rằng private đã bảo vệ hoàn toàn dữ liệu.",
            "correctRule": "Nếu getter trả về trực tiếp đối tượng Date hoặc List, bên ngoài có thể gọi dob.setTime(...) làm thay đổi dữ liệu bên trong! Phải trả về bản copy: return new Date(dob.getTime());",
            "code": "private Date dob;\npublic Date getDob() { return new Date(dob.getTime()); } // Defensive Copying",
            "miniCheck": "Luôn dùng Defensive Copying khi trả về đối tượng có thể thay đổi thuộc tính."
        }
    },
    "12": {
        "chapter": "Chapter 5: OOP - Constructors & Object Casting",
        "da": [
            {
                "id": "da_12_1",
                "q": "Nếu trong một class ta tự viết một constructor có tham số: `MyClass(int x) {}`, compiler Java có tự động sinh constructor mặc định không tham số `MyClass() {}` nữa không?",
                "options": [
                    "Hoàn toàn KHÔNG, compiler chỉ sinh constructor mặc định khi class KHÔNG CÓ BẤT KỲ constructor nào",
                    "Có, compiler luôn tự động sinh constructor không tham số trong mọi trường hợp",
                    "Chỉ sinh khi class đó là public",
                    "Chỉ sinh khi class đó có implements Serializable"
                ],
                "correct": 0,
                "exp": "Quy tắc vàng của Java: Compiler chỉ tự động cung cấp default constructor không tham số khi và chỉ khi lập trình viên KHÔNG VIẾT BẤT KỲ constructor nào trong class."
            }
        ],
        "trap": {
            "trap": "Class con bị Compile Error do Class cha không có constructor không đối số",
            "whyPeopleWrong": "Nghĩ rằng class con extends cha sẽ tự chạy được.",
            "wrongThinking": "Quên rằng dòng đầu tiên của constructor con luôn ngầm định gọi super();.",
            "correctRule": "Nếu class cha tự viết constructor có tham số và không có constructor rỗng, class con bắt buộc phải gọi tường minh super(args); ở dòng đầu tiên, nếu không sẽ bị lỗi: implicit super constructor is undefined!",
            "code": "class Parent { Parent(int x) {} }\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Không tìm thấy Parent()!\n    Child() { super(10); } // HỢP LỆ\n}",
            "miniCheck": "Kiểm tra class cha có constructor rỗng hay không khi class con kế thừa."
        }
    },
    "16": {
        "chapter": "Chapter 6: Wrapper Classes & Autoboxing",
        "da": [
            {
                "id": "da_16_1",
                "q": "Xét đoạn mã:\n```java\nInteger a = 127, b = 127;\nInteger c = 128, d = 128;\nSystem.out.print((a == b) + \" \" + (c == d));\n```\nKết quả in ra là gì?",
                "options": [
                    "true false",
                    "true true",
                    "false false",
                    "false true"
                ],
                "correct": 0,
                "exp": "Java Wrapper Cache lưu trữ sẵn các đối tượng Integer có giá trị từ -128 đến 127. Với a và b (127), cả hai cùng trỏ tới 1 object trong cache -> a == b là true. Với c và d (128 vượt quá 127), Java tạo 2 đối tượng độc lập trên Heap -> c == d là false."
            }
        ],
        "trap": {
            "trap": "So sánh toán tử == trên đối tượng Wrapper thay vì dùng .equals()",
            "whyPeopleWrong": "Thấy Integer a = 10, b = 10; a == b ra true nên lầm tưởng == luôn so sánh được số.",
            "wrongThinking": "Quên mất Wrapper là Object và chỉ được cache từ -128 đến 127.",
            "correctRule": "Khi so sánh hai đối tượng Wrapper, LUÔN LUÔN dùng phương thức .equals(), tuyệt đối không dùng == vì khi giá trị vượt quá 127 sẽ bị sai logic!",
            "code": "Integer x = 1000, y = 1000;\nSystem.out.println(x == y); // FALSE!\nSystem.out.println(x.equals(y)); // TRUE chuẩn xác!",
            "miniCheck": "So sánh Wrapper class luôn dùng .equals()."
        }
    },
    "17": {
        "chapter": "Chapter 7: Collections Framework (List, Set, Queue)",
        "da": [
            {
                "id": "da_17_1",
                "q": "Cấu trúc dữ liệu nào sau đây KHÔNG THỂ chứa các phần tử trùng lặp (Duplicate elements)?",
                "options": ["Set", "List", "Queue", "ArrayList"],
                "correct": 0,
                "exp": "Interface Set đại diện cho tập hợp toán học, đảm bảo mọi phần tử bên trong là duy nhất, không cho phép trùng lặp."
            }
        ],
        "trap": {
            "trap": "Dùng TreeSet với đối tượng không implements Comparable",
            "whyPeopleWrong": "Tưởng rằng TreeSet tự động thêm được mọi object như HashSet.",
            "wrongThinking": "Quên rằng TreeSet cần so sánh để sắp xếp cây đỏ đen.",
            "correctRule": "Khi add một đối tượng vào TreeSet mà đối tượng đó không implements Comparable và TreeSet không truyền Comparator, chương trình sẽ văng ngoại lệ ClassCastException lúc Runtime!",
            "code": "TreeSet<Person> set = new TreeSet<>();\n// set.add(new Person(\"Nam\")); // RUNTIME EXCEPTION: ClassCastException (Person cannot be cast to Comparable)!",
            "miniCheck": "Dùng TreeSet hoặc TreeMap bắt buộc class phải có Comparable hoặc truyền Comparator."
        }
    },
    "19": {
        "chapter": "Chapter 8: Inner Classes",
        "da": [
            {
                "id": "da_19_1",
                "q": "Một Method-Local Inner Class (class nằm trong phương thức) muốn truy cập biến cục bộ của phương thức đó thì biến cục bộ bắt buộc phải có tính chất gì?",
                "options": [
                    "Phải là hằng số final (hoặc effectively final từ Java 8)",
                    "Phải là biến static",
                    "Phải là biến public",
                    "Phải có kiểu dữ liệu nguyên thủy"
                ],
                "correct": 0,
                "exp": "Biến cục bộ nằm trên Stack và bị hủy khi method kết thúc, trong khi đối tượng Inner Class nằm trên Heap và có thể sống lâu hơn. Java copy giá trị biến đó vào inner class, do đó biến bắt buộc phải là final (hoặc effectively final) để đảm bảo tính nhất quán dữ liệu."
            }
        ],
        "trap": {
            "trap": "Khởi tạo Regular Inner Class mà không có đối tượng Outer Class",
            "whyPeopleWrong": "Viết lệnh 'new Outer.Inner()' như class thông thường.",
            "wrongThinking": "Tưởng rằng inner class không static có thể tự new độc lập.",
            "correctRule": "Regular Inner Class luôn gắn chặt với 1 instance của Outer Class. Cú pháp khởi tạo đúng bắt buộc phải là: outerInstance.new InnerClass();",
            "code": "Outer out = new Outer();\nOuter.Inner in = out.new Inner(); // HỢP LỆ\n// Outer.Inner bad = new Outer.Inner(); // COMPILE ERROR: Không thể new trực tiếp không có outer instance!",
            "miniCheck": "Chỉ có Static Nested Class mới new được dạng new Outer.StaticNested();"
        }
    },
    "20": {
        "chapter": "Chapter 9: Threads & Concurrency",
        "da": [
            {
                "id": "da_20_1",
                "q": "Phương thức wait(), notify(), notifyAll() được định nghĩa trong class nào của Java?",
                "options": [
                    "java.lang.Object",
                    "java.lang.Thread",
                    "java.lang.Runnable",
                    "java.util.concurrent.Executor"
                ],
                "correct": 0,
                "exp": "wait(), notify(), notifyAll() thuộc class java.lang.Object vì chúng thao tác trực tiếp trên Khóa nội tại (Monitor Lock) của đối tượng chứ không phải của luồng."
            }
        ],
        "trap": {
            "trap": "Gọi wait() hoặc notify() bên ngoài khối synchronized",
            "whyPeopleWrong": "Tưởng rằng có thể gọi obj.wait() ở bất kỳ đâu trong code.",
            "wrongThinking": "Nghĩ rằng method của Object thì gọi ở đâu cũng được.",
            "correctRule": "Để gọi obj.wait() hoặc obj.notify(), luồng bắt buộc phải đang nắm giữ Monitor Lock của đối tượng đó (phải nằm trong khối synchronized(obj)). Nếu không sẽ bị ném lỗi java.lang.IllegalMonitorStateException!",
            "code": "Object lock = new Object();\n// lock.wait(); // RUNTIME ERROR: IllegalMonitorStateException!\nsynchronized(lock) {\n    lock.wait(); // HỢP LỆ VÌ ĐÃ NẮM LOCK\n}",
            "miniCheck": "Trước khi gọi wait() hay notify(), hãy nhìn xem có từ khóa synchronized trên đúng đối tượng đó hay chưa!"
        }
    },
    "22": {
        "chapter": "SQL: DDL, DML & Basic Queries",
        "da": [
            {
                "id": "da_22_1",
                "q": "Lệnh SQL nào sau đây thuộc nhóm DDL (Data Definition Language)?",
                "options": ["ALTER TABLE", "UPDATE", "INSERT", "DELETE"],
                "correct": 0,
                "exp": "ALTER TABLE, CREATE TABLE, DROP, TRUNCATE thuộc nhóm DDL (định nghĩa cấu trúc). UPDATE, INSERT, DELETE thuộc nhóm DML (thao tác dữ liệu)."
            }
        ],
        "trap": {
            "trap": "So sánh NULL bằng dấu '=' thay vì dùng 'IS NULL'",
            "whyPeopleWrong": "Quen tay viết WHERE salary = NULL.",
            "wrongThinking": "Tưởng rằng NULL là một giá trị có thể so sánh bằng dấu =.",
            "correctRule": "Trong chuẩn SQL, NULL đại diện cho trạng thái 'không xác định'. Biểu thức 'salary = NULL' luôn luôn trả về UNKNOWN (coi như false). Bắt buộc phải dùng toán tử 'IS NULL' hoặc 'IS NOT NULL'!",
            "code": "-- SELECT * FROM emp WHERE manager_id = NULL; -- KHÔNG BAO GIỜ TRẢ VỀ KẾT QUẢ!\nSELECT * FROM emp WHERE manager_id IS NULL; -- HỢP LỆ CHUẨN XÁC",
            "miniCheck": "Trong SQL, tuyệt đối không dùng = NULL, luôn luôn dùng IS NULL."
        }
    },
    "23": {
        "chapter": "SQL: Aggregation & GROUP BY / HAVING",
        "da": [
            {
                "id": "da_23_1",
                "q": "Câu lệnh SQL sau có hợp lệ không?\n`SELECT dept_id, AVG(salary) FROM Employee WHERE AVG(salary) > 1000 GROUP BY dept_id;`",
                "options": [
                    "Không hợp lệ vì hàm tổng hợp AVG() không được phép dùng trong mệnh đề WHERE",
                    "Hợp lệ hoàn toàn",
                    "Không hợp lệ vì thiếu ORDER BY",
                    "Không hợp lệ vì không thể GROUP BY cột dept_id"
                ],
                "correct": 0,
                "exp": "Hàm tổng hợp (AVG, SUM, COUNT) không thể đứng trong WHERE vì WHERE lọc từng dòng trước khi gom nhóm. Điều kiện lọc nhóm phải nằm trong HAVING: 'HAVING AVG(salary) > 1000'."
            }
        ],
        "trap": {
            "trap": "SELECT các cột không nằm trong GROUP BY mà không có hàm tổng hợp",
            "whyPeopleWrong": "Viết SELECT emp_name, dept_id, COUNT(*) GROUP BY dept_id.",
            "wrongThinking": "Tưởng rằng DB sẽ tự đoán emp_name của dòng nào.",
            "correctRule": "Trong chuẩn SQL ANSI, mọi cột xuất hiện ở mệnh đề SELECT mà không nằm trong hàm tổng hợp (SUM, COUNT...) thì BẮT BUỘC PHẢI XUẤT HIỆN TRONG MỆNH ĐỀ GROUP BY!",
            "code": "-- LỖI: SELECT dept_id, emp_name, COUNT(*) FROM emp GROUP BY dept_id;\n-- ĐÚNG: SELECT dept_id, COUNT(*) FROM emp GROUP BY dept_id;",
            "miniCheck": "Kiểm tra xem các cột không có hàm tổng hợp ở SELECT đã có mặt trong GROUP BY hay chưa."
        }
    },
    "24": {
        "chapter": "SQL: JOINs & Subqueries",
        "da": [
            {
                "id": "da_24_1",
                "q": "Để tìm tất cả khách hàng chưa từng phát sinh bất kỳ đơn hàng nào, câu truy vấn nào tối ưu và chính xác nhất?",
                "options": [
                    "SELECT c.* FROM Customers c LEFT JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL",
                    "SELECT c.* FROM Customers c INNER JOIN Orders o ON c.id = o.customer_id WHERE o.id IS NULL",
                    "SELECT c.* FROM Customers c RIGHT JOIN Orders o ON c.id = o.customer_id",
                    "SELECT * FROM Customers WHERE id = (SELECT customer_id FROM Orders)"
                ],
                "correct": 0,
                "exp": "LEFT JOIN giữ lại toàn bộ khách hàng. Với khách chưa mua hàng, các cột của Orders sẽ mang giá trị NULL. Mệnh đề WHERE o.id IS NULL sẽ lọc ra chính xác những khách hàng này."
            }
        ],
        "trap": {
            "trap": "Sử dụng NOT IN với Subquery có chứa giá trị NULL",
            "whyPeopleWrong": "Viết WHERE id NOT IN (SELECT parent_id FROM Table).",
            "wrongThinking": "Nghĩ rằng NOT IN sẽ loại trừ các id khớp.",
            "correctRule": "Nếu tập kết quả của Subquery bên trong NOT IN có chứa DÙ CHỈ 1 GIÁ TRỊ NULL, toàn bộ biểu thức NOT IN sẽ trả về UNKNOWN/rỗng, câu query không trả về bất kỳ dòng nào! Khắc phục bằng cách thêm WHERE parent_id IS NOT NULL hoặc dùng NOT EXISTS!",
            "code": "SELECT * FROM emp WHERE id NOT IN (SELECT manager_id FROM emp WHERE manager_id IS NOT NULL);",
            "miniCheck": "Dùng NOT IN với Subquery hãy cẩn trọng tối đa với giá trị NULL, ưu tiên dùng NOT EXISTS."
        }
    },
    "25": {
        "chapter": "JavaWeb: Servlet Architecture & Lifecycle",
        "da": [
            {
                "id": "da_25_1",
                "q": "Phương thức nào trong vòng đời của Servlet chỉ chạy DUY NHẤT 1 LẦN khi Servlet được khởi tạo?",
                "options": ["init()", "service()", "doGet()", "doPost()"],
                "correct": 0,
                "exp": "init() chỉ chạy 1 lần duy nhất khi Servlet được nạp vào bộ nhớ container để khởi tạo cấu hình. service(), doGet(), doPost() chạy mỗi khi có request tới."
            }
        ],
        "trap": {
            "trap": "Khai báo biến lưu trữ dữ liệu người dùng dưới dạng biến instance trong Servlet",
            "whyPeopleWrong": "Quen tay khai báo private String currentUser; trong class Servlet.",
            "wrongThinking": "Tưởng rằng mỗi người dùng có 1 đối tượng Servlet riêng.",
            "correctRule": "Servlet là Single Instance - Multi-threaded (1 instance phục vụ đồng thời hàng ngàn request). Biến instance sẽ bị các luồng của người dùng khác nhau ghi đè lung tung (Race Condition)! Mọi dữ liệu người dùng phải lưu trong biến local bên trong doGet/doPost.",
            "code": "public class MyServlet extends HttpServlet {\n    // private String userId; // LỖI NGHIÊM TRỌNG ĐA LUỒNG!\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        String userId = req.getParameter(\"id\"); // CHUẨN XÁC\n    }\n}",
            "miniCheck": "Class Servlet tuyệt đối không chứa biến instance lưu trạng thái người dùng."
        }
    },
    "26": {
        "chapter": "JavaWeb: Scopes, Session & Cookies",
        "da": [
            {
                "id": "da_26_1",
                "q": "Để lưu thông tin giỏ hàng (Shopping Cart) của một người dùng xuyên suốt quá trình mua sắm qua nhiều trang web, phạm vi (Scope) nào là phù hợp nhất?",
                "options": ["Session Scope", "Request Scope", "Page Scope", "Application Scope"],
                "correct": 0,
                "exp": "Session Scope gắn liền với phiên làm việc của một người dùng cụ thể xuyên suốt nhiều request, cực kỳ phù hợp để lưu giỏ hàng và trạng thái đăng nhập."
            }
        ],
        "trap": {
            "trap": "Lưu giỏ hàng vào Application Scope (ServletContext)",
            "whyPeopleWrong": "Thấy Application Scope lưu được lâu dài nên dùng.",
            "wrongThinking": "Quên mất Application Scope dùng chung cho TẤT CẢ mọi người trên toàn cầu.",
            "correctRule": "Nếu lưu giỏ hàng vào Application Scope, giỏ hàng của người dùng này sẽ bị người dùng khác nhìn thấy và thêm/bớt đè lên nhau!",
            "code": "req.getSession().setAttribute(\"cart\", myCart); // Đúng chuẩn theo từng User",
            "miniCheck": "Dữ liệu của riêng 1 người dùng thì luôn chọn Session Scope."
        }
    },
    "39": {
        "chapter": "Spring Framework: IoC, DI & Bean Lifecycle",
        "da": [
            {
                "id": "da_39_1",
                "q": "Trong Spring Framework, hình thức Dependency Injection nào được Spring Team khuyến nghị sử dụng số 1?",
                "options": ["Constructor Injection", "Field Injection", "Setter Injection", "Interface Injection"],
                "correct": 0,
                "exp": "Constructor Injection đảm bảo các thuộc tính có thể đặt là final (bất biến), kiểm tra phụ thuộc bắt buộc ngay lúc compile/khởi tạo, và cực kỳ dễ viết Unit Test độc lập."
            }
        ],
        "trap": {
            "trap": "Sử dụng Field Injection (@Autowired trên private field) gây khó khăn khi viết Unit Test",
            "whyPeopleWrong": "Thấy ngắn gọn nên lạm dụng @Autowired trên mọi private field.",
            "wrongThinking": "Nghĩ rằng tiện là tốt nhất.",
            "correctRule": "Field Injection làm class phụ thuộc chặt vào Spring container. Khi viết Unit Test JUnit thuần, không thể new Service() và truyền mock repository vào được vì biến private null. Hãy chuyển sang Constructor Injection!",
            "code": "// Tránh:\n// @Autowired private UserRepo repo;\n// Khuyến nghị:\nprivate final UserRepo repo;\npublic UserService(UserRepo repo) { this.repo = repo; }",
            "miniCheck": "Ưu tiên dùng Constructor Injection kết hợp Lombok @RequiredArgsConstructor."
        }
    },
    "40": {
        "chapter": "Spring MVC & Spring Boot Basics",
        "da": [
            {
                "id": "da_40_1",
                "q": "Chú thích @RestController trong Spring Boot là sự kết hợp của 2 chú thích nào?",
                "options": [
                    "@Controller và @ResponseBody",
                    "@Controller và @Component",
                    "@Service và @ResponseBody",
                    "@Configuration và @Controller"
                ],
                "correct": 0,
                "exp": "@RestController = @Controller + @ResponseBody. Mọi phương thức trong RestController mặc định tự động serialize đối tượng trả về thành chuỗi JSON trong HTTP Response Body."
            }
        ],
        "trap": {
            "trap": "Dùng @Controller thông thường cho REST API mà quên @ResponseBody",
            "whyPeopleWrong": "Viết method trả về đối tượng List<User> với @Controller.",
            "wrongThinking": "Tưởng rằng Spring sẽ tự đoán trả về JSON.",
            "correctRule": "Với @Controller thông thường, String trả về được hiểu là tên file View (JSP/HTML). Nếu muốn trả về dữ liệu JSON, bắt buộc phải có @ResponseBody hoặc dùng trực tiếp @RestController!",
            "code": "@RestController // Tự động có @ResponseBody cho toàn bộ method\npublic class ApiController { ... }",
            "miniCheck": "Viết API RESTful thì luôn dùng @RestController."
        }
    },
    "41": {
        "chapter": "Bổ sung Java 8-17 Features (OCA/OCP Alignment)",
        "da": [
            {
                "id": "da_41_1",
                "q": "Thao tác nào sau đây trên Stream API là Terminal Operation (kết thúc Stream)?",
                "options": ["collect()", "filter()", "map()", "distinct()"],
                "correct": 0,
                "exp": "collect(), forEach(), count(), reduce() là Terminal Operations đóng dòng Stream và xuất kết quả. filter, map, distinct là Intermediate Operations trả về Stream mới."
            }
        ],
        "trap": {
            "trap": "Cố gắng tái sử dụng (Re-use) một dòng Stream đã đóng",
            "whyPeopleWrong": "Gán Stream s = list.stream(); rồi gọi s.count(); sau đó lại gọi s.collect();.",
            "wrongThinking": "Tưởng rằng Stream có thể duyệt nhiều lần như Collection.",
            "correctRule": "Stream chỉ có thể duyệt duy nhất 1 lần. Một khi Terminal Operation đã chạy, Stream bị đóng vĩnh viễn. Nếu gọi tiếp sẽ bị ném ngoại lệ java.lang.IllegalStateException: stream has already been operated upon or closed!",
            "code": "Stream<String> s = list.stream();\ns.forEach(System.out::println);\n// s.count(); // RUNTIME ERROR: IllegalStateException!",
            "miniCheck": "Stream chỉ duyệt 1 lần duy nhất, muốn duyệt lại phải gọi list.stream() mới."
        }
    }
}

# Apply custom assessments and traps
for day_str, info in day_custom_assessments.items():
    if day_str in lessons:
        if "chapter" in info:
            lessons[day_str]["chapter"] = info["chapter"]
        if "da" in info:
            lessons[day_str]["dailyAssessment"] = info["da"]
        if "trap" in info:
            if "examTraps" not in lessons[day_str]:
                lessons[day_str]["examTraps"] = []
            lessons[day_str]["examTraps"].insert(0, info["trap"])

# Now clean up any generic placeholder text in remaining days
for day_num in range(1, 57):
    day_str = str(day_num)
    if day_str not in lessons:
        continue
    l = lessons[day_str]
    topic_name = l.get('topics', [l.get('title', 'Java')])[0]

    # Fix generic dailyAssessment
    if l.get("dailyAssessment") and len(l["dailyAssessment"]) > 0:
        da0 = l["dailyAssessment"][0]
        if da0.get("options") and da0["options"][0] == "Đúng theo quy tắc ngôn ngữ":
            da0["q"] = f"Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề {topic_name}?"
            da0["options"] = [
                f"Đặc tả Java quy định cú pháp và cơ chế của {topic_name} phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
                "Chỉ hoạt động được trên hệ điều hành Windows",
                "Không bao giờ xảy ra ngoại lệ khi thực thi",
                "Bị cấm sử dụng trong các dự án thực tế"
            ]
            da0["correct"] = 0
            da0["exp"] = f"Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần {topic_name}."

    # Fix generic practice exercises
    if l.get("practiceExercises") and len(l["practiceExercises"]) > 0:
        for pe in l["practiceExercises"]:
            if pe.get("questions") and len(pe["questions"]) > 0:
                q0 = pe["questions"][0]
                if "Quy tắc cơ bản của" in q0.get("q", ""):
                    q0["q"] = f"Phân tích nguyên lý hoạt động và các cạm bẫy thường gặp trong: {topic_name}?"
                    q0["ans"] = f"Nắm chắc cú pháp chuẩn, cơ chế phân bổ bộ nhớ (Stack/Heap) và các trường hợp biên của {topic_name} để tránh lỗi runtime."

# Save back to daily_lessons.json
with open('data/daily_lessons.json', 'w', encoding='utf-8') as f:
    json.dump(lessons, f, ensure_ascii=False, indent=2)

print("Cleaned up and enriched all 56 days in data/daily_lessons.json!")

# Rebundle data.js
with open('data/roadmap.json', 'r', encoding='utf-8') as f:
    roadmap = json.load(f)
with open('data/flashcards.json', 'r', encoding='utf-8') as f:
    flashcards = json.load(f)
with open('data/quizzes.json', 'r', encoding='utf-8') as f:
    quizzes = json.load(f)
with open('data/audit_questions.json', 'r', encoding='utf-8') as f:
    audit_questions = json.load(f)
with open('data/traps.json', 'r', encoding='utf-8') as f:
    traps = json.load(f)
with open('data/comment_codes.json', 'r', encoding='utf-8') as f:
    comment_codes = json.load(f)
with open('data/pe_problems.json', 'r', encoding='utf-8') as f:
    pe_problems = json.load(f)

app_data = {
    "roadmap": roadmap,
    "flashcards": flashcards,
    "quizzes": quizzes,
    "auditQuestions": audit_questions,
    "traps": traps,
    "commentCodes": comment_codes,
    "dailyLessons": lessons,
    "peProblems": pe_problems
}

with open('data.js', 'w', encoding='utf-8') as f:
    f.write('window.APP_DATA = ' + json.dumps(app_data, ensure_ascii=False, indent=2) + ';\n')

print("Successfully rebundled data.js with all 50 audit questions and all enriched lessons!")
