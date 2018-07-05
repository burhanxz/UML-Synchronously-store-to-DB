# UML-Synchronously-store-to-DB
这个项目实现将UML建模过程实时存储到数据库(也包括扩展自UML的SysML模型)。Java实现。
原理：
1、UML元模型顶层类继承自持有数据对象处理类的特殊EObject类中
2、将UML模型的增删改查操作，都利用基类提供的方法，代理到数据对象处理类中
3、数据处理类中使用MapDB，自定义高效的序列化类，供MapDB序列化用
4、测试类在TestSysML.java中，在建模过程中实时监控存储器的内容。

This project implements real-time storage of the UML modeling process into the database (also including the SysML model extended from UML)， implemented by Java.
principles:
1) the UML metamodel top-level class inherits from the special EObject class holding the data object processing class
2) The addition, deletion, and change operations of the UML model are all delegated to the data object processing class using the methods provided by the base class.
3) the use of MapDB in the data processing class, custom efficient serialization class for MapDB serialization
4) Test class is TestSysML.java, and the content of the memory is monitored in real time during the modeling process.



测试类的测试结果如下
            ------****------
            set:  uml.impl.ModelImpl@101952da: EAttributeImplTwo_tanks
            set:  uml.impl.ClassImpl@6babf3bf: EAttributeImplDesign
            set:  sysml.blocks.impl.BlockImpl@3fb1549b: EReferenceImpluml.impl.ClassImpl@6babf3bf
            set:  uml.impl.ClassImpl@ea6147e: EAttributeImplInterface
            set:  sysml.blocks.impl.BlockImpl@4d02f94e: EReferenceImpluml.impl.ClassImpl@ea6147e
            set:  uml.impl.PropertyImpl@2b48a640: EAttributeImplact
            ------****------
            uml.impl.ClassImpl@ea6147e: EAttributeImpl --> Interface
            uml.impl.PropertyImpl@2b48a640: EAttributeImpl --> act
            sysml.blocks.impl.BlockImpl@4d02f94e: EReferenceImpl --> uml.impl.ClassImpl@ea6147e
            sysml.blocks.impl.BlockImpl@3fb1549b: EReferenceImpl --> uml.impl.ClassImpl@6babf3bf
            uml.impl.ModelImpl@101952da: EAttributeImpl --> Two_tanks
            uml.impl.ClassImpl@6babf3bf: EAttributeImpl --> Design
            set:  uml.impl.PropertyImpl@1e683a3e: EAttributeImplact2
            add:  uml.impl.ModelImpl@101952da: EReferenceImpluml.impl.ClassImpl@6babf3bf
            add:  uml.impl.ModelImpl@101952da: EReferenceImpluml.impl.ClassImpl@ea6147e
            add:  uml.impl.ClassImpl@6babf3bf: EReferenceImpluml.impl.ClassImpl@ea6147e
            add:  uml.impl.ClassImpl@ea6147e: EReferenceImpluml.impl.PropertyImpl@2b48a640
            add:  uml.impl.ClassImpl@ea6147e: EReferenceImpluml.impl.PropertyImpl@1e683a3e
            ------****------
            uml.impl.ClassImpl@ea6147e: EReferenceImpl --> [uml.impl.PropertyImpl@2b48a640,     uml.impl.PropertyImpl@1e683a3e]
            uml.impl.ClassImpl@ea6147e: EAttributeImpl --> Interface
            uml.impl.PropertyImpl@2b48a640: EAttributeImpl --> act
            sysml.blocks.impl.BlockImpl@4d02f94e: EReferenceImpl --> uml.impl.ClassImpl@ea6147e
            uml.impl.ClassImpl@6babf3bf: EReferenceImpl --> [uml.impl.ClassImpl@ea6147e]
            sysml.blocks.impl.BlockImpl@3fb1549b: EReferenceImpl --> uml.impl.ClassImpl@6babf3bf
            uml.impl.ModelImpl@101952da: EReferenceImpl --> [uml.impl.ClassImpl@6babf3bf]
            uml.impl.ModelImpl@101952da: EAttributeImpl --> Two_tanks
            uml.impl.PropertyImpl@1e683a3e: EAttributeImpl --> act2
            uml.impl.ClassImpl@6babf3bf: EAttributeImpl --> Design
